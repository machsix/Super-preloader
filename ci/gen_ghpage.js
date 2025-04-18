#!/usr/bin/env node
import {execSync} from 'child_process';
import {existsSync, copyFileSync, createWriteStream} from 'fs';
import fs from 'node:fs/promises';
import {resolve, basename} from 'path';
import rewrite_db from './rewrite_db.js';
import http from 'http';
import https from 'https';

let repo_dir = process.argv[2] || process.cwd();
if (!existsSync(resolve(repo_dir, '.git'))) {
  repo_dir = execSync('git rev-parse --show-toplevel', {cwd: repo_dir, stdio: 'inherit'}).toString().trim();
  if (!existsSync(resolve(repo_dir, '.git'))) {
    console.error('No .git folder found in the current directory or its parent directories.');
    throw new Error('No .git folder found in the current directory or its parent directories.');
  }
}
console.log('\x1b[1m\x1b[44m\x1b[97mRepository directory: ' + repo_dir + '\x1b[0m');

const docs_dir = resolve(repo_dir, 'docs/.vitepress/dist');
let commit_message = typeof process.env['COMMIT_MESSAGE'] === 'string' ? process.env['COMMIT_MESSAGE'] : '';
if (!commit_message) {
  try {
    commit_message = execSync('git log -1 --pretty=format:"%s"', {encoding: 'utf8'}).trim();
  } catch (error) {
    console.error(`Failed to retrieve the last commit message. ${{error}}`);
    commit_message = 'Default commit message';
  }
}
console.log(`\x1b[1m\x1b[44m\x1b[97mCommit message: ${commit_message}\x1b[0m`);

const force_update = commit_message.includes('[UPDATE]');
if (force_update) {
  console.log('\x1b[1m\x1b[41m\x1b[97mMandatory Update\x1b[0m');
}

// Step 1: Strip JSON database and add it to gh-pages
console.log('\x1b[1m\x1b[44m\x1b[97mStep 1: rewrite and minimize database\x1b[0m');
const local_db_paths = [resolve(repo_dir, 'dist/mydata.json')];

(async () => {
  for (const db_path of local_db_paths) {
    if (!existsSync(db_path)) {
      console.warn(`Warning: Database file ${db_path} does not exist.`);
      continue;
    }
    await rewrite_db(db_path, force_update, true);
    const db_detail_path = db_path.slice(0, db_path.lastIndexOf('.')) + '_detail.json';
    if (!existsSync(db_detail_path)) {
      throw new Error('Detail database file does not exist. Please check the rewrite_db function.');
    }
    // print conent of db_detail_path
    const data = await fs.readFile(db_detail_path, {encoding: 'utf8'});
    console.log(JSON.parse(data));

    let db_name = basename(db_path);
    db_name = db_name.slice(0, db_name.lastIndexOf('.'));
    const docs_db = resolve(docs_dir, `${db_name}.json`);
    const docs_db_detail = resolve(docs_dir, `${db_name}_detail.json`);

    await fs.copyFile(db_path, docs_db);
    await fs.copyFile(db_detail_path, docs_db_detail);
    console.log(`\x1b[1m\x1b[41m\x1b[97mFinish adding ${db_name}.json\x1b[0m`);
  }
})();

copyFileSync(resolve(repo_dir, 'dist/Super_preloaderPlus_one_New.user.js'), resolve(docs_dir, 'Super_preloaderPlus_one_New.user.js'));

// Step 2: Download remote wedata.json and wedata_detail.json
try {
  // Fetch the gh-pages branch
  execSync('git fetch origin gh-pages:gh-pages', {stdio: 'inherit'});

  const checkoutFile = (file) => {
    try {
      execSync(`git checkout gh-pages -- ${file}`, {stdio: 'inherit'});
    } catch (error) {
      console.warn(`Failed to checkout ${file}, ${error}`);
    }
  };

  // Checkout the files from the gh-pages branch
  ['wedata.json', 'wedata_detail.json'].forEach(checkoutFile);

  const copyFile = (file) => {
    const sourcePath = file;
    const destinationPath = resolve(docs_dir, file);

    if (existsSync(sourcePath)) {
      copyFileSync(sourcePath, destinationPath);
      console.log(`Copied ${file} to docs directory.`);
    } else {
      console.warn(`${file} does not exist, skipping...`);
    }
  };

  // Copy the files to the docs directory
  ['wedata.json', 'wedata_detail.json'].forEach(copyFile);
} catch (error) {
  console.error('An error occurred:', error.message);
  throw new Error('An error occurred while processing the files.');
}

const fetchAndSave = async (url, outputPath) => {
  const protocol = url.startsWith('https') ? https : http;

  const fetch = (url) => {
    return new Promise((resolve, reject) => {
      const req = protocol.get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          console.log(`Redirecting to ${res.headers.location}`);
          resolve(fetch(res.headers.location));
        } else if (res.statusCode === 200) {
          resolve(res);
        } else {
          reject(new Error(`Failed to fetch ${url}: ${res.statusCode} ${res.statusMessage}`));
        }
      });

      req.on('error', (err) => {
        reject(new Error(`Error fetching ${url}: ${err.message}`));
      });

      // Add a timeout to prevent hanging
      req.setTimeout(10000, () => {
        req.destroy();
        reject(new Error(`Request timed out for ${url}`));
      });
    });
  };

  try {
    const res = await fetch(url);
    const file = createWriteStream(outputPath);

    await new Promise((resolve, reject) => {
      res.pipe(file);
      res.on('error', reject); // Handle response stream errors
      file.on('finish', resolve);
      file.on('error', reject); // Handle file stream errors
    });

    console.log(`Saved ${url} to ${outputPath}`);
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
    console.error(`Error saving ${url} to ${outputPath}`);
  }
};

(async () => {
  // eslint-disable-next-line prettier/prettier
  await Promise.all([fetchAndSave('http://wedata.net/databases/autopagerize/items_all.json', resolve(docs_dir, 'wedata.json')), fetchAndSave('http://wedata.net/databases/AutoPagerize.json', resolve(docs_dir, 'wedata_detail.json'))]);
  console.log('Fetched and saved wedata.json and wedata_detail.json');
})();
