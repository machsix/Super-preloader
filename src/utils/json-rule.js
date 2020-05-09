import _ from 'lodash';
import gotStock from './got';
import logger from './logger';

const got = gotStock.create({cache: false});

// Definition of provider
class RuleProvider {
  /**
   * Constructor of a rule provider
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
      this.ruleParser = (res) => JSON.parse(res.data);
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
        const res = await got.get(url);
        rule = this.ruleParser(res);
        logger.info(`[DownloadRule] ${this.name} from ${url} [Status] Success`);
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
   * @param {object} lastUpdate Date
   * @returns {array} rule
   */
  async updateRule(lastUpdate) {
    let res = null;
    try {
      res = await got.get(this.detailUrl);
    } catch (error) {
      logger.error(`[UpdateRule] ${this.name} [Status] ${error}`);
      // mimic Promise.allSettled
      return {status: 'rejected', reason: error};
    }

    const detail = res.data;
    const ruleLastUpdate = new Date(detail.updated_at);
    if (lastUpdate < ruleLastUpdate || this.rule.length < 1) {
      try {
        const rule = await this.downloadRule();
        logger.info(`[UpdateRule] ${this.name} [Status] Success`);
        this.rule = rule;
      } catch (error) {
        return {status: 'rejected', reason: error};
      }
    } else {
      logger.info(`[UpdateRule] ${this.name} [Status] No need to update`);
    }
    return {status: 'fulfilled', value: this.rule};
  }
}

// Providers
const MyData = new RuleProvider('machsix.github.io', ['https://machsix.github.io/Super-preloader/mydata.json', 'https://super-preloader.netlify.com/mydata.json'], 'https://machsix.github.io/Super-preloader/mydata_detail.json');
const WeData = new RuleProvider('wedata.net', ['http://wedata.net/databases/AutoPagerize/items.json', 'https://machsix.github.io/Super-preloader/wedata.json'], 'http://wedata.net/databases/AutoPagerize.json', (res) =>
  (_.isString(res.data) ? JSON.parse(res.data) : res.data)
    .filter((i) => {
      const nameFilter = ['Generic Posts Rule', 'hAtom'];
      for (let j = 0; j < nameFilter.length; j++) {
        if (nameFilter[j].indexOf(i.name) >= 0) {
          return false;
        }
      }
      return true;
    })
    .map((i) => ({...i.data, name: i.name}))
);

const p = [MyData, WeData];

/**
 * Module to handle json doc
 * @module jsonRuleLoader
 */
export default {
  providers: p,
  rule: p.map(() => []),
  expire: new Date('1992-05-15'),
  updatePeriodInDay: 1,
  resetExpire() {
    this.expire = new Date('1992-05-15');
  },
  getRule() {
    return _.flatten(this.rule);
  },
  async saveRule(saveDB = true) {
    await GM.setValue('jsonRuleInfo', {
      expire: this.expire,
      updatePeriodInDay: this.updatePeriodInDay
    });
    if (saveDB) {
      await GM.setValue('SITEINFO_json', this.rule);
    }
  },
  async updateRule(force = false) {
    if (force) {
      this.resetExpire();
    }
    const lastUpdate = new Date(+this.expire - this.updatePeriodInDay * 24 * 60 * 60 * 1000);
    const today = new Date();
    if (today > this.expire) {
      const promises = this.providers.map((x) => x.updateRule(lastUpdate));
      await Promise.all(promises).then((values) => {
        const status = values.map(({status}) => status === 'fulfilled' || false);
        if (status.every((x) => x)) {
          this.rule = values.map(({value}) => (value ? value : this.rule));
          this.expire = new Date(+today + this.updatePeriodInDay * 24 * 60 * 60 * 1000);
          logger.info(`[UpdateRule] Next update at: ${this.expire}`);
          this.saveRule();
        } else {
          this.expire = today;
          logger.error('[UpdateRule] Fail');
          this.saveRule(false);
        }
      });
    } else {
      logger.info(`[UpdateRule] Next update at: ${this.expire}`);
    }
  },
  async loadRule(forceUpdateRule = false) {
    let [jsonRuleInfo, rule] = await Promise.all([
      GM.getValue('jsonRuleInfo', {
        expire: this.expire,
        updatePeriodInDay: this.updatePeriodInDay
      }),
      GM.getValue('SITEINFO_json', this.rule)
    ]);
    if (_.isString(jsonRuleInfo)) jsonRuleInfo = JSON.parse(jsonRuleInfo);
    if (_.isString(rule)) rule = JSON.parse(rule);
    this.expire = new Date(jsonRuleInfo.expire);
    this.updatePeriodInDay = parseInt(jsonRuleInfo.updatePeriodInDay);
    this.rule = rule;
    if (forceUpdateRule || this.getRule().length === 0) {
      await this.updateRule(true);
    }
    return this.getRule();
  }
};
