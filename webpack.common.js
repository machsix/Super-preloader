const path = require("path");
const webpack = require("webpack");
const {METADATA, SCRIPT_INFO} = require("./src/meta");

module.exports = {
  stats: "errors-only",
  mode: "none",
  entry: {
    [SCRIPT_INFO.name]: ["./src/index.js"]
  },
  output: {
    filename: "[name].user.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "src/lib")
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  // https://github.com/webpack/webpack-cli/issues/312#issuecomment-409027910
  plugins: [
    new webpack.BannerPlugin({
      banner: METADATA,
      entryOnly: true,
      raw: true
    })
  ]
};
