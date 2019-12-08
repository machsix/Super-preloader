const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 8080
  }
});
