const defaults = require("axios/lib/defaults");
const mergeNewConfig = require("./mergeNewConfig");
module.exports = mergeNewConfig(defaults);
