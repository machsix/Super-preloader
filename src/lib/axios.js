const axios = require("axios");
const adapter = require("./axios-userscript-adapter");
axios.defaults.adapter = adapter;
module.exports = axios;
