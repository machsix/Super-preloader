/* eslint-disable no-console */
const fs = require("fs");
const {gitLog} = require("./git-log");
let jsonFile = "mydata.json";
if (process.argv.length > 2) {
  jsonFile = process.argv[2];
}
const jsonFileName = jsonFile.split(".")[0];

// strip whitespace in mydata.json
fs.readFile(`../${jsonFile}`, {encoding: "utf8"}, (err, data) => {
  if (!err) {
    const mydata = JSON.parse(data);
    fs.writeFile(`../${jsonFile}`, JSON.stringify(mydata), "utf8", () => {
      console.log(`${jsonFile} is re-writted`);
    });
  }
});

// get latest update time
const commitInfo = gitLog("..", {
  fileList: [jsonFile],
  nCommit: 1
});
console.log(commitInfo);
const lastUpdateDate = new Date(commitInfo[0].date);

const info = {
  created_by: "mach6",
  name: jsonFile,
  updated_at: lastUpdateDate.toJSON(),
  required_keys: "url nextLink pageElement",
  created_at: "2017-09-27T00:00:00.000Z",
  resource_url: `https://machsix.github.io/Super-preloader/${jsonFile}`,
  description: "Rule for Super_preloaderPlus_one_New",
  permit_other_keys: true
};

fs.writeFile(`../${jsonFileName}_detail.json`, JSON.stringify(info), "utf8", () => {
  console.log(`${jsonFileName}_detail.json is written`);
});
