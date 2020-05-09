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
  const browser = await puppeteer.launch({
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

  await waitSeconds(5);
  pages = await browser.pages();
  while (pages.length === 1) {
    await waitSeconds(5);
    pages = await browser.pages();
  }
  targetPage = pages[1];
  await targetPage.click('body > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)');
  await waitSeconds(3);
  await targetPage.click('body > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(3)');
  console.log('Script installed');

  // open website
  pages = await browser.pages();
  targetPage = pages[0];
  await targetPage.goto('https://www.google.com/search?q=apple');

  // check floatWindow
  console.log('Wait 30s for initialization');
  await waitSeconds(30);
  const floatWindow = await targetPage.$('#sp-fw-rect');
  if (!floatWindow) {
    throw new Error("FloatWindow doesn't exist");
  } else {
    console.log('FlowWindow appears');
  }

  // check seperator
  await targetPage.evaluate((_) => {
    window.scrollTo(0, document.body.scrollHeight + 20);
  });
  await waitSeconds(30);
  console.log('Wait 30s for pagging');
  const sep = await targetPage.$('#sp-separator-2');
  if (!sep) {
    throw new Error("Seperator doesn't exist");
  } else {
    console.log('Seperator works');
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
