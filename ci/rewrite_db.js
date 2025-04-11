import fs from 'node:fs/promises';
import gitLog from './git-log.js';
// import {hideBin} from 'yargs/helpers';
import path from 'path';
// import yargs from 'yargs';

async function rewriteDatabase(jsonFilePath, mandatoryUpdate, readable) {
  // 1. Filename
  const jsonFile = path.basename(jsonFilePath);
  const jsonFileName = path.basename(jsonFile, path.extname(jsonFile));

  // a function to format database
  /**
   *
   * @param {object} db database of rules
   * @returns {dbNew} formatted database
   */
  function formatDB(db) {
    // keys should be set in the root of the rule
    const rootKeys = ['name', 'url', 'pageElement', 'exampleUrl', 'nextLink', 'preLink', 'insertBefore', 'useiframe', 'category'];
    // keys shouldn't exist
    const removedKeys = ['enable'];
    const dbNew = {
      autopager: {}
    };
    for (const [key, value] of Object.entries(db)) {
      if (rootKeys.includes(key)) {
        dbNew[key] = value;
      } else if (key == 'autopager') {
        for (const [key2, value2] of Object.entries(value)) {
          if (rootKeys.includes(key2)) {
            dbNew[key2] = value2;
          } else if (!removedKeys.includes(key2)) {
            dbNew.autopager[key2] = value2;
          }
        }
      } else if (!removedKeys.includes(key)) {
        dbNew.autopager[key] = value;
      }
    }
    if (Object.keys(dbNew.autopager).length === 0) {
      delete dbNew.autopager;
    }
    const sortedDB = {};
    rootKeys.forEach((key) => {
      if (key in dbNew) {
        sortedDB[key] = dbNew[key];
        delete dbNew[key];
      }
    });
    Object.entries(dbNew).forEach(([key, value]) => {
      sortedDB[key] = value;
    });
    return sortedDB;
  }

  // strip whitespace in the file
  const data = await fs.readFile(jsonFilePath, {encoding: 'utf8'});
  const mydata = JSON.parse(data);
  const formattedDB = mydata.map((i) => formatDB(i));
  if (readable) {
    await fs.writeFile(jsonFilePath, JSON.stringify(formattedDB, null, 2), 'utf8');
  } else {
    await fs.writeFile(jsonFilePath, JSON.stringify(formattedDB), 'utf8');
  }
  console.log(`${jsonFilePath} is re-written`);

  // get latest update time
  const commitInfo = gitLog({
    fileList: [jsonFilePath],
    nCommit: 1,
    repoDir: path.dirname(jsonFilePath)
  });
  console.log(commitInfo);
  let lastUpdateDate = new Date(commitInfo[0].date);
  if (mandatoryUpdate) {
    lastUpdateDate = new Date();
  }

  const info = {
    created_by: 'mach6',
    name: 'Super-preloader',
    updated_at: lastUpdateDate.toJSON(),
    required_keys: 'url nextLink pageElement',
    created_at: '2017-09-27T00:00:00.000Z',
    resource_url: `https://machsix.github.io/Super-preloader/${jsonFile}`,
    description: 'Rule for Super_preloaderPlus_one_New',
    permit_other_keys: true
  };

  const detailFilePath = path.resolve(path.dirname(jsonFilePath), `${jsonFileName}_detail.json`);
  console.log(`Detail file path: ${detailFilePath}`);
  console.log(info);
  if (readable) {
    await fs.writeFile(detailFilePath, JSON.stringify(info, null, 2), 'utf8');
  } else {
    await fs.writeFile(detailFilePath, JSON.stringify(info), 'utf8');
  }
  console.log(`${detailFilePath} is written`);
}

export default rewriteDatabase;
