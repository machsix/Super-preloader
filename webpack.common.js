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
      utils: path.resolve(__dirname, "src/utils"),
      rules: path.resolve(__dirname, "src/rules"),
      css: path.resolve(__dirname, "src/css"),
      template: path.resolve(__dirname, "src/template")
    }
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: "ejs-loader"
      },
      {
        test: /\.css$/i,
        use: ["to-string-loader", "css-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "string-replace-loader",
            options: {
              search: "(logger\\.(?:trace|debug|info|warn|error))\\((.*)\\)",
              replace: (match, p1, p2) => {
                // All string must be wrapped in single quote
                const inBracket = [false, false];
                const splitLoc = [];
                for (let i = 0; i < p2.length; i++) {
                  if (p2[i] === '"' && (i == 0 || p2[i - 1] !== "\\")) {
                    inBracket[0] = !inBracket[0];
                  } else if (p2[i] === "`") {
                    inBracket[1] = !inBracket[1];
                  }
                  if (p2[i] === "," && !inBracket[0] && !inBracket[1]) {
                    splitLoc.push(i);
                  }
                }
                const args = [];
                for (let i = 0; i < splitLoc.length; i++) {
                  const iBegin = i == 0 ? 0 : splitLoc[i - 1] + 1;
                  args.push(p2.slice(iBegin, splitLoc[i]));
                }
                if (splitLoc.length === 0) {
                  args.push(p2);
                } else {
                  args.push(p2.slice(splitLoc[splitLoc.length - 1] + 1));
                }

                return `${p1}("[Super-preloader]", ${args.join(",")})`;
              },
              flags: "g"
            }
          }
        ]
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
