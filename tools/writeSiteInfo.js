/* eslint-disable no-implicit-globals */
const SITEINFO = require("./siteinfo");
const fs = require("fs");

// load rules from mydata.json
let mydata = fs.readFileSync("../dist/mydata.json");
// const jsonRule = JSON.parse(mydata);
const jsonRule = [];
const jsRule = [];
const parsedSITEINFO = SITEINFO.map((val, index) => {
  try {
    const b = stringifyNoFun(val);
    jsonRule.push(JSON.parse(b));
    return b;
  } catch (e) {
    console.log(`Rule ${index} for ${val.name}`);
    jsRule.push(val);
    return val;
  }
});

fs.writeFile("mydata_dev.json", JSON.stringify(jsonRule, null, 2), function(err) {
  if (err) {
    console.log(err);
  }
  console.log("File has been created");
});

console.log(`JsonRule: ${jsonRule.length} JSRule: ${jsRule.length}`);

function stringifyNoFun(obj) {
  const json = JSON.stringify(
    obj,
    (key, val) => {
      if (typeof val === "function") {
        throw 2333;
      } else if (val instanceof RegExp) {
        return Regex2Str(val);
      } else {
        return val;
      }
    },
    2
  );
  return json;
}

function Regex2Str(obj) {
  const str = obj.toString();
  const parts = /\/(.*)\/(.*)/.exec(str);
  if (parts[2] === "" || parts[2] === "i") {
    return parts[1].replace(/\\\//g, "/");
  } else {
    return [parts[1].replace(/\\\//g, "/"), parts[2]];
  }
}

function siteinfo_stringify(obj) {
  var json = JSON.stringify(
    obj,
    function(key, value) {
      if (typeof value === "function") {
        return "/#Function(" + value.toString() + ")/";
      } else if (typeof value === "obj") {
        if (obj instanceof RegExp) {
          return "/#Regex(" + value.toString() + ")/";
        }
      }
      return value;
    },
    2
  );
  return json;
}

function siteinfo_parse(jsondata) {
  var obj = JSON.parse(jsondata, function(key, value) {
    if (typeof value === "string" && value.startsWith("/#Function(") && value.endsWith(")/")) {
      console.log(value);
      value = value.substring("/#Function(".length, value.length - 2);
      return eval("(" + value + ")");
    }
    return value;
  });
  return obj;
}

//read back
// var content = fs.readFileSync("siteinfo.json","utf-8");
// console.log(content.substring(0,15))
// var SITEINFO=siteinfo_parse(content);
// console.log(SITEINFO[0]);
// console.log(typeof(SITEINFO[0].autopager.documentFilter))
