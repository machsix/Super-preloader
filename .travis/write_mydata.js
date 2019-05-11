const logger = require("loglevel");
const fs = require("fs");
const {gitLog} = require("./git-log");
const path = require("path");
logger.setLevel("info");

const jsonFilePath = process.argv.length >= 2 ? process.argv[2] : path.resolve("../dist/mydata.json");
// const url = process.argv.length >= 3 ? process.argv[3] : undefined;

const jsonFile = path.basename(jsonFilePath);
const jsonFileName = jsonFile.split(".")[0];

// strip whitespace in the file
fs.readFile(jsonFilePath, {encoding: "utf8"}, (err, data) => {
  if (!err) {
    const mydata = JSON.parse(data);
    fs.writeFile(jsonFilePath, JSON.stringify(mydata), "utf8", () => {
      logger.info(`${jsonFilePath} is re-written`);
    });
  }
});

// get latest update time
const commitInfo = gitLog({
  fileList: [jsonFilePath],
  nCommit: 1
});
logger.debug(commitInfo);
const lastUpdateDate = new Date(commitInfo[0].date);

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
logger.info(JSON.stringify(info));
fs.writeFile(detailFilePath, JSON.stringify(info), "utf8", () => {
  logger.info(`${detailFilePath} is written`);
});
