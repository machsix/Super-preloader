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
    "revision": "e2eb187987c97783d4d45577e6470ff7"
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
    "url": "assets/js/app.2ddd8c4c.js",
    "revision": "86b66c0b271b844d4b3cc776d030c151"
  },
  {
    "url": "compatibility.html",
    "revision": "35028e7c48724b011ebaed9eae2eeb44"
  },
  {
    "url": "database.html",
    "revision": "6d4c5009a48db7aa1107442b79afc2ce"
  },
  {
    "url": "example.html",
    "revision": "46f68eab88ab4b0825861940a9e8fc4f"
  },
  {
    "url": "faq.html",
    "revision": "d5abb472da0418411e2ef55383de9515"
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
    "revision": "f716b023e2e7abfd3755cf81fd7041e5"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "a4bb1e055fee7e9adc8ba12621b49afc"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "1092d6c7dde7f99fe41869aa87a9b688"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "ec730de9967d04810310e2a4f6cf8303"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "5583707dc5146cca65cea5694cdb06a5"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "5d154dd7a5cbd23af322fa4d1ea3e193"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "8dde284c6e208df75e2bda8f06ed3846"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "5dfba428f1329c4f6999c669814a0548"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "410f6ef6454267dea024c7aeecdd61a0"
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
