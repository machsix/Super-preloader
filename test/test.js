#!/usr/bin/env node
/* eslint-disable jsdoc/require-jsdoc */
// node --experimental-repl-await

import extract from 'extract-zip';
import fs from 'fs';
import path from 'path';
import process from 'process';
import {platform} from 'process';
import puppeteer from 'puppeteer';
import {fileURLToPath} from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TIMEOUT = 30 * 1000;

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          download(redirectUrl, dest).then(resolve).catch(reject);
        } else {
          reject(new Error(`Redirected with no location header for '${url}'`));
        }
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    });
    request.on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function waitSeconds(seconds) {
  function delay(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  await delay(seconds);
}

async function main() {
  const violentmonkey = {
    url: 'https://github.com/violentmonkey/violentmonkey/releases/download/v2.12.7/violentmonkey-v2.12.7.zip',
    file: path.join(__dirname, 'violentmonkey-v2.12.7.zip'),
    folder: path.join(__dirname, 'violentmonkey')
  };
  const scriptPath = path.resolve(__dirname, '../dist/Super_preloaderPlus_one_New.user.js');
  let link = `file://${scriptPath}`;
  if (platform.includes('win')) {
    link = `file:///${scriptPath}`.replace(/\\/g, '/');
  }

  await download(violentmonkey.url, violentmonkey.file);
  console.log('Download VM \u2714');
  await extract(violentmonkey.file, {dir: violentmonkey.folder});
  console.log('Unzip VM \u2714');

  // launch browser
  const config = {
    headless: false, //NOTE Extensions in Chrome / Chromium currently only work in non-headless mode.
    timeout: 60 * 1000,
    args: [`--disable-extensions-except=${violentmonkey.folder}`, '--no-sandbox', `--load-extension=${violentmonkey.folder}`]
  };

  if (process.env.GITHUB_RUN_ID) {
    config.executablePath = process.env.PUPPETEER_EXEC_PATH;
  }
  const browser = await puppeteer.launch(config);
  const version = await browser.version();

  console.log(`Launch Chrome ${version} \u2714`);

  let pages, targetPage;
  for (let itry = 1; itry <= 5; itry++) {
    // open script page
    pages = await browser.pages(); // get list of tabs
    targetPage = pages[0];
    while (pages.length === 1) {
      try {
        await targetPage.goto(link);
      } catch (error) {}
      await waitSeconds(5);
      pages = await browser.pages();
    }

    // handle installation
    targetPage = pages[1];
    await targetPage.waitForFunction(() => document.querySelector('.page-confirm') !== null, {timeout: TIMEOUT});
    await targetPage.click('.page-confirm button:nth-child(2)');

    try {
      await targetPage.waitForFunction(() => document.querySelector('.page-confirm .ellipsis+div').innerHTML.includes('Script installed'), {timeout: TIMEOUT});
    } catch (err) {
      // it may fail due to dependency
      console.log('Error', err.name, err.message);
      console.log(`Script installation ${itry}/5: X`);
      await targetPage.close();
      continue;
    }
    await targetPage.click('.page-confirm button:nth-child(3)');
    console.log(`Script installation ${itry}/5: \u2714`);
    break;
  }

  // open website
  pages = await browser.pages();
  targetPage = pages[0];
  await targetPage.goto('https://www.xkcd.com');

  // check floatWindow
  try {
    await targetPage.waitForSelector('#sp-fw-rect', {
      timeout: TIMEOUT
    });
    console.log('FloatWindow: \u2714');
  } catch (err) {
    console.log('Error', err.name, err.message);
    throw new Error('FloatWindow: \u274c');
  }

  // check seperator
  await targetPage.evaluate((_) => {
    window.scrollTo(0, document.body.scrollHeight + 20);
  });
  try {
    await targetPage.waitForSelector('#sp-separator-2', {
      timeout: 30 * 1000
    });
    console.log('Seperator: \u2714');
  } catch (err) {
    console.log('Error', err.name, err.message);
    throw new Error('Seperator: \u274c');
  }

  // check CSP
  // if (process.env.CI !== 'true') {
  //   await targetPage.goto('https://rarbg.to/torrents.php', {
  //     waitUntil: 'networkidle2'
  //   });
  //   await targetPage.evaluate((_) => {
  //     window.scrollTo(0, document.body.scrollHeight + 20);
  //   });
  //   try {
  //     await targetPage.waitFor('#sp-separator-2', {
  //       timeout: 30 * 1000
  //     });
  //     console.log('CSP: \u2714');
  //   } catch (err) {
  //     console.log('Error', err.name, err.message);
  //     throw new Error('CSP: \u274c');
  //   }
  // } else {
  //   console.log('SKIP CSP test for travis');
  // }

  // check iframe
  // await targetPage.goto('https://idope.se/torrent-list/transformer');
  // await targetPage.evaluate((_) => {
  //   window.scrollTo(0, document.body.scrollHeight + 20);
  // });
  // try {
  //   await targetPage.waitFor('#sp-separator-2', {
  //     timeout: 30 * 1000
  //   });
  //   console.log('Iframe: \u2714');
  // } catch (err) {
  //   console.log('Error', err.name, err.message);
  //   throw new Error('Iframe: \u274c');
  // }
  await browser.close();
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
