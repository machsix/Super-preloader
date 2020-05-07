import {METADATA, SCRIPT_INFO} from "./src/meta";
import babel from "@rollup/plugin-babel";
import banner from "rollup-plugin-banner";
import commonjs from "@rollup/plugin-commonjs";
import dev from "rollup-plugin-dev";
import ejs from "rollup-plugin-ejs";
import json from "@rollup/plugin-json";
import replace from "rollup-plugin-re";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss-string";
// import {terser} from "rollup-plugin-terser";

// TODO commonjs bug https://github.com/rollup/plugins/issues/304

const basicConfig = {
  input: {
    [SCRIPT_INFO.name]: "./src/index.js"
  },
  output: {
    dir: "./dist",
    entryFileNames: "[name].user.js",
    format: "iife",
    strict: false // fix https://github.com/facebook/regenerator/blob/a755f3f0cd7928c1b89c251e5e84472aa31b7e33/packages/regenerator-runtime/runtime.js#L725
    // globals: {
    //   "@babel/runtime/regenerator": "regeneratorRuntime"
    // }
    // https://github.com/rollup/rollup-plugin-babel/issues/306
  },
  plugins: [
    replace({
      verbose: false,
      defines: {
        IS_SKIP: false,
        IS_REMOVE: true
      },
      patterns: [
        {
          include: "src/**/*.js",
          test: /(logger\.(?:trace|debug|info|warn|error))\((.*)\)/g,
          replace: (_, p1, p2) => `${p1}("[Super-preloader]", ${p2.trim()})`
          // All string in loggermust be wrapped in double quote
          // const inBracket = [false, false];
          // const splitLoc = [];
          // for (let i = 0; i < p2.length; i++) {
          //   if (p2[i] === '"' && (i == 0 || p2[i - 1] !== "\\")) {
          //     inBracket[0] = !inBracket[0];
          //   } else if (p2[i] === "`") {
          //     inBracket[1] = !inBracket[1];
          //   }
          //   if (p2[i] === "," && !inBracket[0] && !inBracket[1]) {
          //     splitLoc.push(i);
          //   }
          // }
          // const args = [];
          // for (let i = 0; i < splitLoc.length; i++) {
          //   const iBegin = i == 0 ? 0 : splitLoc[i - 1] + 1;
          //   args.push(p2.slice(iBegin, splitLoc[i]));
          // }
          // if (splitLoc.length === 0) {
          //   args.push(p2);
          // } else {
          //   args.push(p2.slice(splitLoc[splitLoc.length - 1] + 1));
          // }
          // return `${p1}("[Super-preloader]", ${args.join(",")})`;
        }
      ]
    }),
    banner({
      text: METADATA,
      raw: true
    }),
    ejs({
      include: ["**/*.ejs"], // optional, '**/*.ejs' by default
      compilerOptions: {
        client: true,
        strict: true // all variables in ejs should be "locals.XX"
      }
    }),
    json({
      compact: true
    }),
    scss({
      include: ["**/*.css", "**/*.scss", "**/*.sass"]
    }),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs({
      ignoreGlobal: true, // to make text-encoding works
      namedExport: {
        loglevel: ["noConflict"]
      }
    })
    // terser({
    //   keep_fnames: true,
    //   keep_classnames: true,
    //   output: {
    //     beautify: true,
    //     preamble: METADATA
    //   }
    // })
  ]
};

export default (commandLineArgs) => {
  if (commandLineArgs.dev === true) {
    basicConfig.plugins.push(
      dev({
        dirs: ["dist"],
        host: "localhost",
        port: 8081
      })
    );
  }
  return basicConfig;
};
