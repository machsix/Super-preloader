/* eslint-disable no-await-in-loop */
const puppeteer = require('puppeteer');

// node --experimental-repl-await

const fs = require('fs');
const got = require('got');
const path = require('path');
const unzip = require('unzip-stream');
const {pipeline} = require('stream');
const {platform} = require('process');

function download(url, dest) {
  return new Promise((resolve, _reject) => {
    pipeline(got.stream(url), fs.createWriteStream(dest), resolve);
  });
}

function unzipPromise(file, dir) {
  return new Promise((resolve, _reject) => {
    const r = fs.createReadStream(file);
    r.pipe(
      unzip.Extract({
        path: dir
      })
    );
    r.on('close', resolve);
  });
}

async function waitSeconds(seconds) {
  function delay(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  await delay(seconds);
}

(async () => {
  const violentmonkey = {
    link: 'https://github.com/violentmonkey/violentmonkey/releases/download/v2.12.7/violentmonkey-v2.12.7.zip',
    file: path.join(__dirname, 'violentmonkey-v2.12.7.zip'),
    folder: path.join(__dirname, 'violentmonkey')
  };
  await download(violentmonkey.url, violentmonkey.file);
  console.log('Download VM');
  await unzipPromise(violentmonkey.file, violentmonkey.folder);
  console.log('Unzip VM');

  const browser = await puppeteer.launch({
    headless: false, //NOTE Extensions in Chrome / Chromium currently only work in non-headless mode.
    args: [`--disable-extensions-except=${violentmonkey.folder}`, `--load-extension=${violentmonkey.folder}`]
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
})();
