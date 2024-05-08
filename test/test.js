/* eslint-disable no-await-in-loop */
/* eslint-disable no-process-exit */
/* eslint-disable no-process-env */
import {promisify} from 'util';
// node --experimental-repl-await

import extract from 'extract-zip';
import fs from 'fs';
import got from 'got';
import path from 'path';
import process from 'process';
import {platform} from 'process';
import puppeteer from 'puppeteer';
import stream from 'stream';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipeline = promisify(stream.pipeline);

function download(url, dest) {
  return pipeline(got.stream(url), fs.createWriteStream(dest));
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
  console.log('Launch Chrome \u2714');

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
    await waitSeconds(3);
    await targetPage.click('body > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)');
    try {
      await targetPage.waitFor(() => document.querySelector('.page-confirm .ellipsis+div').innerHTML.includes('Script installed'), {
        timeout: 500 * 1000
      });
    } catch (err) {
      // it may fail due to dependency
      console.log('Error', err.name, err.message);
      console.log(`Script installation ${itry}/5: X`);
      await targetPage.close();
      continue;
    }
    await targetPage.click('body > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(3)');
    console.log(`Script installation ${itry}/5: \u2714`);
    break;
  }

  // open website
  pages = await browser.pages();
  targetPage = pages[0];
  await targetPage.goto('https://www.xkcd.com');

  // check floatWindow
  try {
    await targetPage.waitFor('#sp-fw-rect', {
      timeout: 30 * 1000
    });
    console.log('FloatWindow: \u2714');
  } catch (err) {
    console.log('Error', err.name, err.message);
    throw new Error('FloatWindow: \u274c');
  }

  // check seperator
  // await targetPage.evaluate((_) => {
  //   window.scrollTo(0, document.body.scrollHeight + 20);
  // });
  // try {
  //   await targetPage.waitFor('#sp-separator-2', {
  //     timeout: 30 * 1000
  //   });
  //   console.log('Seperator: \u2714');
  // } catch (err) {
  //   console.log('Error', err.name, err.message);
  //   throw new Error('Seperator: \u274c');
  // }

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
