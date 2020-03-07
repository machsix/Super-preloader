/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e308893b2786bcc3610214933d112e9"
  },
  {
    "url": "assets/css/0.styles.87ced3c1.css",
    "revision": "44d81feb7fc479d1d1a3f7ec426da5fe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dee5222f.js",
    "revision": "534300d690bab18f600aa8c36949e6e8"
  },
  {
    "url": "assets/js/11.ff6200a5.js",
    "revision": "471e2bc870f94623c269ff3393abc1ce"
  },
  {
    "url": "assets/js/12.f4efaac8.js",
    "revision": "6c874899274621d64e7125f19cad888d"
  },
  {
    "url": "assets/js/13.3a666dd8.js",
    "revision": "a339245871f30f0e27203b342762da53"
  },
  {
    "url": "assets/js/14.96a5b336.js",
    "revision": "eb61ccf4c362c900e57fb3ccf4a3b13d"
  },
  {
    "url": "assets/js/15.29e469a6.js",
    "revision": "7a202398bdb58996c1587ff266e51826"
  },
  {
    "url": "assets/js/16.d1c48f5d.js",
    "revision": "ff98c42e0350ed0225c41948045d8f3a"
  },
  {
    "url": "assets/js/17.71660e43.js",
    "revision": "384277994259a6cf1f55a2c90f2a04b5"
  },
  {
    "url": "assets/js/18.82229a4c.js",
    "revision": "4b0de309acd903f325ba52e049409464"
  },
  {
    "url": "assets/js/19.780c10b3.js",
    "revision": "e567d30c163bb3c7447a01191c0b1a16"
  },
  {
    "url": "assets/js/2.5f413bb6.js",
    "revision": "08957d03ff9b0ceb8bae304fe401878a"
  },
  {
    "url": "assets/js/20.17df45b8.js",
    "revision": "7662548badb5571f4be1b7ed4779b13d"
  },
  {
    "url": "assets/js/3.4a9eb0ea.js",
    "revision": "e7a8f0abf7aaa97ccd063e79791030c7"
  },
  {
    "url": "assets/js/4.a94db072.js",
    "revision": "8b54e6bd30f639762a966e712258c56f"
  },
  {
    "url": "assets/js/5.2e463602.js",
    "revision": "18960fd6613776f2b6fdaff88dfbe986"
  },
  {
    "url": "assets/js/6.a8a50135.js",
    "revision": "21e00917671da31e8021ac6b0b4390c4"
  },
  {
    "url": "assets/js/7.68091b39.js",
    "revision": "81dc0f153a7ba76878ff9a1f8510305d"
  },
  {
    "url": "assets/js/8.c418d3c9.js",
    "revision": "188cec65ca09aa0ffcb8da091374686b"
  },
  {
    "url": "assets/js/9.308b8896.js",
    "revision": "2768510295b1814df3f483d06be85c57"
  },
  {
    "url": "assets/js/app.56e269af.js",
    "revision": "e75ce2afd96987c075835d7a63fab918"
  },
  {
    "url": "compatibility.html",
    "revision": "e3523e06b241ea75d94dd8764c2a55b3"
  },
  {
    "url": "database.html",
    "revision": "a9578892d2ea45b58c428571bb492764"
  },
  {
    "url": "example.html",
    "revision": "221e698daaee2966a4f336cb9265fb77"
  },
  {
    "url": "faq.html",
    "revision": "5268ff3c03bcea89f1056411258dbd93"
  },
  {
    "url": "image/example/baidu.png",
    "revision": "4402e5935ca77f66e70f6c2f315af694"
  },
  {
    "url": "image/example/google.png",
    "revision": "11613e2fec311e270ac9003dbd1da54e"
  },
  {
    "url": "image/example/hhmm.png",
    "revision": "e4bda310ad173720a7088fba64e22549"
  },
  {
    "url": "image/example/xkcd.png",
    "revision": "603585728294aa3713aa8c088ed0996d"
  },
  {
    "url": "index.html",
    "revision": "fb8201baa3c05a3d091d7d66732343f3"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "ab351558e35aa46a713dbe5fad00ba93"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "c518484e0fc200307f2bc1e57775282d"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "ade554c4bdb7ab775bc4132ecf80111b"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "946da1308d52d0162ce681202b7c8e15"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "81a1de5605e4179a6c5689e5f19eb384"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "a3b54ab2816256f5ca5dd129ef633786"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "5a34095806e6de28eb80a1d2516d3fa1"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "0fed1684f2f174e401799ca752d81687"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
