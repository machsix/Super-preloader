const path = require("path");
const webpack = require("webpack");
const {SCRIPT_INFO, METADATA} = require("./src/meta");

module.exports = {
  mode: "none",
  entry: {
    [SCRIPT_INFO.name]: "./src/index.js"
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
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: METADATA,
      entryOnly: true,
      raw: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 8080
  }
};
