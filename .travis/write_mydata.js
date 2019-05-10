/* eslint-disable no-console */
const fs = require("fs");
const {gitLog} = require("./git-log");
const path = require("path");

// path of filename
let jsonFilePath = path.resolve("../database/mydata.json");
if (process.argv.length > 2) {
  jsonFilePath = process.argv[2];
}

// strip whitespace in the file
fs.readFile(jsonFilePath, {encoding: "utf8"}, (err, data) => {
  if (!err) {
    const mydata = JSON.parse(data);
    fs.writeFile(jsonFilePath, JSON.stringify(mydata), "utf8", () => {
      console.log(`${jsonFilePath} is re-written`);
    });
  }
});

// get latest update time
const commitInfo = gitLog({
  fileList: [jsonFilePath],
  nCommit: 1
});
console.log(commitInfo);
const lastUpdateDate = new Date(commitInfo[0].date);

const info = {
  created_by: "mach6",
  name: jsonFilePath,
  updated_at: lastUpdateDate.toJSON(),
  required_keys: "url nextLink pageElement",
  created_at: "2017-09-27T00:00:00.000Z",
  resource_url: `https://machsix.github.io/Super-preloader/${jsonFilePath}`,
  description: "Rule for Super_preloaderPlus_one_New",
  permit_other_keys: true
};

const jsonFileName = path.basename(jsonFilePath).split(".")[0];
const detailFilePath = path.resolve(path.dirname(jsonFilePath), `${jsonFileName}_detail.json`);
fs.writeFile(detailFilePath, JSON.stringify(info), "utf8", () => {
  console.log(`${detailFilePath} is written`);
});
