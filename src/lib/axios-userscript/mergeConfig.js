const {DEFAULT_NEWCONFIG} = require("./mergeNewConfig");
const mergeConfigAxios = require("axios/lib/core/mergeConfig");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1 old one
 * @param {Object} config2 new one
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  const config = mergeConfigAxios(config1, config2);
  // eslint-disable-next-line guard-for-in
  for (const key in DEFAULT_NEWCONFIG) {
    if (key in config2) {
      config[key] = config2[key];
    } else if (key in config1) {
      config[key] = config1[key];
    } else {
      config[key] = DEFAULT_NEWCONFIG[key];
    }
  }
  return config;
}

module.exports = mergeConfig;
