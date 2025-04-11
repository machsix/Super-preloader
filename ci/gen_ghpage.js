#!/usr/bin/env node
/* eslint-disable no-process-env */

import {execSync} from 'child_process';
import {existsSync, copyFileSync, createWriteStream} from 'fs';
import {resolve, basename, dirname} from 'path';
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

for (const db_path of local_db_paths) {
  if (!existsSync(db_path)) {
    console.console.warn(`Warning: Database file ${db_path} does not exist.`);
    continue;
  }
  rewrite_db(db_path, force_update, true);

  const db_file = basename(db_path);
  const db_dir = dirname(db_path);
  const db_detail = resolve(db_dir, db_file.slice(0, db_file.lastIndexOf('.')) + '_detail.json');

  copyFileSync(db_path, resolve(docs_dir, db_file));
  copyFileSync(db_detail, resolve(docs_dir, basename(db_detail)));
  console.log(`\x1b[1m\x1b[41m\x1b[97mFinish adding ${db_file}\x1b[0m`);
}
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

const fetchAndSave = (url, outputPath) => {
  const protocol = url.startsWith('https') ? https : http;

  const handleResponse = (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log(`Redirecting to ${res.headers.location}`);
      protocol.get(res.headers.location, handleResponse);
    } else if (res.statusCode === 200) {
      const file = createWriteStream(outputPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${url} to ${outputPath}`);
      });
    } else {
      console.error(`Failed to fetch ${url}: ${res.statusCode}`);
    }
  };

  protocol.get(url, handleResponse).on('error', (err) => {
    console.error(`Error fetching ${url}: ${err.message}`);
  });
};

fetchAndSave('http://wedata.net/databases/autopagerize/items_all.json', resolve(docs_dir, 'wedata.json'));
fetchAndSave('http://wedata.net/databases/AutoPagerize.json', resolve(docs_dir, 'wedata_detail.json'));
