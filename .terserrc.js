const {METADATA} = require("./src/meta");

module.exports = {
  output: {
     beautify: true,
     preamble: METADATA
  }
}
