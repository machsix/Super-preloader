const fs = require("fs");
const {gitLog} = require("./git-log");
const path = require("path");
const argv = require("yargs").argv;

// 1. Filename
const jsonFilePath = argv._.length ? argv._[0] : path.resolve("../dist/mydata.json");
const jsonFile = path.basename(jsonFilePath);
const jsonFileName = path.basename(jsonFile, path.extname(jsonFile));
// 2. Mandatory update
const mandatoryUpdate = argv.update || false;

// strip whitespace in the file
fs.readFile(jsonFilePath, {encoding: "utf8"}, (err, data) => {
  if (!err) {
    const mydata = JSON.parse(data);
    fs.writeFile(jsonFilePath, JSON.stringify(mydata), "utf8", () => {});
  } else {
    throw err;
  }
});

console.log(`${jsonFilePath} is re-written`);
// get latest update time
const commitInfo = gitLog({
  fileList: [jsonFilePath],
  nCommit: 1
});
console.log(commitInfo);
let lastUpdateDate = new Date(commitInfo[0].date);
if (mandatoryUpdate) {
  lastUpdateDate = new Date();
}

const info = {
  created_by: "mach6",
  name: jsonFilePath,
  updated_at: lastUpdateDate.toJSON(),
  required_keys: "url nextLink pageElement",
  created_at: "2017-09-27T00:00:00.000Z",
  // resource_url: [url || `https://machsix.github.io/Super-preloader/${jsonFile}`, `https://cdn.jsdelivr.net/gh/machsix/Super-preloader/dist/${jsonFile}`],
  resource_url: `https://machsix.github.io/Super-preloader/${jsonFile}`,
  description: "Rule for Super_preloaderPlus_one_New",
  permit_other_keys: true
};

const detailFilePath = path.resolve(path.dirname(jsonFilePath), `${jsonFileName}_detail.json`);
console.log(JSON.stringify(info));
fs.writeFile(detailFilePath, JSON.stringify(info), "utf8", () => {
  console.log(`${detailFilePath} is written`);
});
