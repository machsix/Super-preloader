const _ = require("underscore");
const logger = require("@/logger");
const axios = require("@/axios");

// Definiation of provider
class RuleProvider {
  /**
   *
   * @param {string} name Identifier of rule provider
   * @param {array} url URL to fetch rule
   * @param {string} detailUrl URL to fetch rule detail
   * @param {function} ruleParser parser to parse axios response
   */
  constructor(name, url, detailUrl, ruleParser = null) {
    this.name = name;
    this.url = _.isArray(url) ? url : [url];
    this.detailUrl = detailUrl;
    this.rule = [];
    if (_.isFunction(ruleParser)) {
      this.ruleParser = ruleParser;
    } else {
      this.ruleParser = (res) => res.data;
    }
  }

  setRule(rule) {
    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  /**
   * Download rule and return the rule
   * @returns {array} rule
   */
  async downloadRule() {
    let rule = [];
    let e = null;
    for (const url of this.url) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const res = await axios.get(url, {nocache: true});
        rule = this.ruleParser(res);
        logger.log(`[DownloadRule] ${this.name} from ${url} [Status] Success`);
        break;
      } catch (error) {
        logger.error(`[DownloadRule] ${this.name} from ${url} [Status] ${error}`);
        e = error;
      }
    }

    if (rule) {
      return rule;
    } else {
      throw new Error(e);
    }
  }

  /**
   * Update rule
   * @param {string} lastUpdate UTC time string
   * @returns {object} status
   */
  async updateRule(lastUpdate) {
    let res = null;
    try {
      res = await axios.get(this.detailUrl, {nocache: true});
    } catch (error) {
      logger.error(`[UpdateRule] ${this.name} [Status] ${error}`);
      // mimic Promise.allSettled
      return {status: "rejected", reason: error};
    }

    const detail = res.data;
    const myLastUpdate = new Date(lastUpdate);
    const ruleLastUpdate = new Date(detail.updated_at);
    if (myLastUpdate < ruleLastUpdate || this.rule.length < 1) {
      try {
        const rule = this.downloadRule();
        logger.log(`[UpdateRule] ${this.name} [Status] Success`);
        this.rule = rule;
      } catch (error) {
        return {status: "rejected", reason: error};
      }
    } else {
      logger.log(`[UpdateRule] ${this.name} [Status] No need to update`);
    }
    return {status: "fulfilled", value: this.rule};
  }
}

// Providers
const mydata = new RuleProvider("machsix.github.io", ["https://machsix.github.io/Super-preloader/mydata.json", "https://super-preloader.netlify.com/mydata.json"], "https://machsix.github.io/Super-preloader/mydata_detail.json");
const wedata = new RuleProvider("wedata.net", ["http://wedata.net/databases/AutoPagerize/items.json", "https://machsix.github.io/Super-preloader/wedata.json"], "http://wedata.net/databases/AutoPagerize.json", (res) =>
  ((_.isString(res.data) && JSON.parse(res.data)) || res.data)
    .filter((i) => {
      const nameFilter = ["Generic Posts Rule", "hAtom"];
      for (let j = 0; j < nameFilter.length; j++) {
        if (nameFilter[j].indexOf(i.name) >= 0) {
          return false;
        }
      }
      return true;
    })
    .map((i) => {
      i.data.name = i.name;
      i.data.source = "wedata.net";
      return i.data;
    })
);

const oldDay = new Date("1992-05-15");
const p = [mydata, wedata];

module.export = {
  provider: p,
  rule: p.map(() => []),
  expire: oldDay,
  updatePeriodInDay: 1,
  exportRule() {
    return _.flatten(this.rule);
  },
  async loadDB() {
    const jsonRuleInfo = await GM.getValue(
      "jsonRuleInfo",
      JSON.stringify({
        expire: this.expire,
        updatePeriodInDay: this.updatePeriodInDay
      })
    );
    this.expire = new Date(jsonRuleInfo.expire);
    this.this.updatePeriodInDay = parseInt(jsonRuleInfo.updatePeriodInDay);
    this.rule = await GM.getValue("SITEINFO_json", JSON.stringify(this.rule));
  },
  async saveDB(rule = true) {
    await GM.setValue(
      "jsonRuleInfo",
      JSON.stringify({
        expire: this.expire,
        updatePeriodInDay: this.updatePeriodInDay
      })
    );
    if (rule) {
      await GM.setValue("SITEINFO_json", JSON.stringify(this.rule));
    }
  },
  async updateRule(force = false) {
    if (force) {
      this.expire = new Date(oldDay);
    }
    const today = new Date();
    if (today > this.expire) {
      const promises = this.provider.map((x) => x.updateRule(this.expire.toUTCString()));
      await Promise.all(promises).then((values) => {
        const status = values.map(({status}) => status === "fullfilled" || false);
        if (status.every((x) => x)) {
          this.rule = values.map(({status, value}) => (status === "fullfilled" ? value : this.rule));
          this.expire = new Date(+today + this.updatePeriodInDay * 24 * 60 * 60 * 60 * 1000);
          logger.log("[UpdateRule] Next update at:" + this.expire.toISOString());
          this.saveDB();
        } else {
          this.expire = today;
          logger.error("[UpdateRule] Fail");
          this.saveDB(false);
        }
      });
    } else {
      logger.log("[UpdateRule] Next update at:" + this.expire.toISOString());
    }
  }
};
