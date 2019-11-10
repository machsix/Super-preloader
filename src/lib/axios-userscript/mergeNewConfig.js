const DEFAULT_NEWCONFIG = {
  charset: undefined,
  nocache: false,
  overrideMimeType: undefined,
  binary: false
};

/**
 * Merge new config to old one
 * @param {object} config1 config to merge into
 * @param {object} config2 config to merge from
 * @param {boolean} overwrite whether to overwrite
 * @returns {object} Merged config
 */
function mergeNewConfig(config1, config2 = undefined) {
  const config = config1 ? config1 : {};
  // eslint-disable-next-line guard-for-in
  for (const key in DEFAULT_NEWCONFIG) {
    if (!(key in config1)) {
      config[key] = DEFAULT_NEWCONFIG[key];
    }
    if (config2 && config2.hasOwnProperty(key)) {
      config[key] = config2[key];
    }
  }
  return config;
}

mergeNewConfig.DEFAULT_NEWCONFIG = DEFAULT_NEWCONFIG;

module.exports = mergeNewConfig;
