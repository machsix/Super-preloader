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
      utils: path.resolve(__dirname, "src/utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "string-replace-loader",
        options: {
          search: "(logger\\.(?:trace|debug|info|warn|error))\\((.*)\\)",
          replace: '$1("[Super-preloader] " + $2)',
          flags: "g"
        }
      },
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
