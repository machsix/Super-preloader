/* eslint-disable no-console */
const fs = require("fs");
const {gitLog} = require("./git-log");

// strip whitespace in mydata.json
fs.readFile("../mydata.json", {encoding: "utf8"}, (err, data) => {
  if (!err) {
    const mydata = JSON.parse(data);
    fs.writeFile("../mydata.json", JSON.stringify(mydata), "utf8", () => {
      console.log("mydata.json is re-writted");
    });
  }
});

// get latest update time
const commitInfo = gitLog("..", {
  fileList: ["README.md"],
  nCommit: 1
});
const lastUpdateDate = new Date(commitInfo[0].date);

const info = {
  created_by: "mach6",
  name: "mydata.json",
  updated_at: lastUpdateDate.toJSON(),
  required_keys: "url nextLink pageElement",
  created_at: "2017-09-27T00:00:00.000Z",
  resource_url: "https://machsix.github.io/Super-preloader/mydata.json",
  description: "Rule for Super_preloaderPlus_one_New",
  permit_other_keys: true
};

fs.writeFile("../mydata_detail.json", JSON.stringify(info), "utf8", () => {
  console.log("mydata_detail.json is written");
});
