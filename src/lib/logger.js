const _ = require("underscore");
const BROWSER_LEVEL = {DEBUG: 0, INFO: 1, LOG: 2, WARN: 3, ERROR: 4};
const LEVEL_NUM = Object.keys(BROWSER_LEVEL).map((x) => BROWSER_LEVEL[x]);
const PREFIX = "[Super-preloader]";
const PREFIX_STYLE = "color:#02A9DE";

const logFormat = (...args) => {
  const str = [`%c${PREFIX}`];
  const extra = [PREFIX_STYLE];

  const stylish = (e) => {
    if (_.isString(e)) {
      return ["%c%s", ""];
    } else {
      return ["%c%o", ""];
    }
  };

  for (const e of args) {
    const [a, b] = stylish(e);
    str.push(a);
    extra.push(b);
    extra.push(e);
  }

  return [str.join(" "), ...extra];
};

const logger = {
  levels: BROWSER_LEVEL,
  loglevel: BROWSER_LEVEL.WARN,
  enableDebug(i = false) {
    if (i) {
      this.loglevel = BROWSER_LEVEL.DEBUG;
    }
  },
  getLevel() {
    return this.loglevel;
  },
  setLevel(i) {
    if (_.isNumber(i)) {
      this.loglevel = i;
    } else if (_.isString(i) && Object.keys(BROWSER_LEVEL).includes(i.toUpperCase())) {
      this.loglevel = BROWSER_LEVEL[i.toUpperCase()];
    } else {
      this.loglevel = BROWSER_LEVEL.WARN;
    }
  },
  _log: function(level) {
    if (level >= this.loglevel) {
      return console[Object.keys(BROWSER_LEVEL)[LEVEL_NUM.indexOf(level)].toLowerCase()];
    } else {
      return () => {}; // empty function
    }
  }
};

Object.keys(BROWSER_LEVEL).forEach((key) => {
  logger[key.toLowerCase()] = function(...args) {
    this._log(BROWSER_LEVEL[key]).apply(console, logFormat(...args));
  };
});

module.exports = logger;
