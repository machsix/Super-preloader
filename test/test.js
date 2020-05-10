/* eslint-disable no-await-in-loop */
/* eslint-disable no-process-exit */
const {platform} = require('process');
const {promisify} = require('util');
// node --experimental-repl-await

const extract = require('extract-zip');
const fs = require('fs');
const got = require('got');
const path = require('path');
const process = require('process');
const puppeteer = require('puppeteer');
const stream = require('stream');

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
  await download(violentmonkey.url, violentmonkey.file);
  console.log('Download VM');
  await extract(violentmonkey.file, {dir: violentmonkey.folder});
  console.log('Unzip VM');
  var browser = await puppeteer.launch({
    headless: false, //NOTE Extensions in Chrome / Chromium currently only work in non-headless mode.
    timeout: 60 * 1000,
    args: [`--disable-extensions-except=${violentmonkey.folder}`, '--no-sandbox', `--load-extension=${violentmonkey.folder}`]
  });
  console.log('Launch Chrome');

  // open script page
  let pages = await browser.pages(); // get list of tabs
  let targetPage = pages[0];
  const scriptPath = path.resolve(__dirname, '../dist/Super_preloaderPlus_one_New.user.js');
  let link = `file://${scriptPath}`;
  if (platform.includes('win')) {
    link = `file:///${scriptPath}`.replace(/\\/g, '/');
  }
  try {
    await targetPage.goto(link);
  } catch (error) {}

  pages = await browser.pages();
  while (pages.length === 1) {
    await waitSeconds(5);
    pages = await browser.pages();
  }
  targetPage = pages[1];
  await waitSeconds(3);
  await targetPage.click('body > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)');
  await targetPage.waitFor(() => document.querySelector('.page-confirm .ellipsis+div').innerHTML.includes('Script installed'), {
    timeout: 10 * 1000
  });
  await targetPage.click('body > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(3)');
  console.log('Script installation: \u2714');

  // open website
  pages = await browser.pages();
  targetPage = pages[0];
  await targetPage.goto('https://www.google.com/search?q=apple');

  // check floatWindow
  try {
    await targetPage.waitFor('#sp-fw-rect', {
      timeout: 30 * 1000
    });
    console.log('FloatWindow: \u2714');
  } catch (_err) {
    throw new Error('FloatWindow: \u274c');
  }

  // check seperator
  await targetPage.evaluate((_) => {
    window.scrollTo(0, document.body.scrollHeight + 20);
  });
  try {
    await targetPage.waitFor('#sp-separator-2', {
      timeout: 30 * 1000
    });
    console.log('Seperator: \u2714');
  } catch (_err) {
    throw new Error('Seperator: \u274c');
  }

  // check CSP
  await targetPage.goto('https://rarbg.to/torrents.php');
  await targetPage.evaluate((_) => {
    window.scrollTo(0, document.body.scrollHeight + 20);
  });
  try {
    await targetPage.waitFor('#sp-separator-2', {
      timeout: 30 * 1000
    });
    console.log('CSP: \u2714');
  } catch (_err) {
    throw new Error('CSP: \u274c');
  }

  // check iframe
  await targetPage.goto('https://idope.se/torrent-list/transformer');
  await targetPage.evaluate((_) => {
    window.scrollTo(0, document.body.scrollHeight + 20);
  });
  try {
    await targetPage.waitFor('#sp-separator-2', {
      timeout: 30 * 1000
    });
    console.log('Iframe: \u2714');
  } catch (_err) {
    throw new Error('Iframe: \u274c');
  }
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
