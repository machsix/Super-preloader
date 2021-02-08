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
    "revision": "7d3ab82280b1221117a725ee6e219b41"
  },
  {
    "url": "assets/css/0.styles.bb11dce1.css",
    "revision": "9f3fc3fb0704a53b32925e27b9ad893b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a4b7ecae.js",
    "revision": "ae3e229a7b97f268b1cd114bbe508339"
  },
  {
    "url": "assets/js/11.375001d8.js",
    "revision": "38cfd83942407ae5b59e126583dad8fc"
  },
  {
    "url": "assets/js/12.fff8f93e.js",
    "revision": "13b98b43b5c6e5a547a96d2e049c8600"
  },
  {
    "url": "assets/js/13.1a836d48.js",
    "revision": "d10369c73965041e0bdb6a8955a1f0a1"
  },
  {
    "url": "assets/js/14.cd5b75c5.js",
    "revision": "81b3c6fe550f7168cb7f38d5ded0054c"
  },
  {
    "url": "assets/js/15.a27e443c.js",
    "revision": "3a850a5d598b2544706244acd3b0468d"
  },
  {
    "url": "assets/js/16.21eb0bfe.js",
    "revision": "58fe7db740bd57a6c9ab5f2a1680921b"
  },
  {
    "url": "assets/js/17.602ca022.js",
    "revision": "c92c79a5c4f64ced5efedab3c20e0285"
  },
  {
    "url": "assets/js/18.bcb64126.js",
    "revision": "0b70918c7d229784018229a6ab4d1072"
  },
  {
    "url": "assets/js/19.c2c16251.js",
    "revision": "22549d462e2abf9814d0dee1a2b3af73"
  },
  {
    "url": "assets/js/2.e29ad1b5.js",
    "revision": "ddf0c8cc7839517b7fd8c4d5bf6ef30a"
  },
  {
    "url": "assets/js/20.064a83ac.js",
    "revision": "3d43a51827a0f70dc1af9d799151d1a3"
  },
  {
    "url": "assets/js/21.2198b91c.js",
    "revision": "4eb4ea9e8ac54217e4e7c08fb109cc53"
  },
  {
    "url": "assets/js/22.f2f53bf9.js",
    "revision": "952fb86fb4454661c86b0d54bd9fc8a3"
  },
  {
    "url": "assets/js/3.747e84f8.js",
    "revision": "f9ae90dd1715f14dd13dfc42962188e8"
  },
  {
    "url": "assets/js/4.01bf0dfb.js",
    "revision": "435b8342edeac04be07534fb2c2a8da2"
  },
  {
    "url": "assets/js/5.88f15316.js",
    "revision": "d3645629dbfea910fd4eaf84a7c2417e"
  },
  {
    "url": "assets/js/6.ed18ae6b.js",
    "revision": "ea4c9d61bed9991b6eae2d5434812ca9"
  },
  {
    "url": "assets/js/7.18256823.js",
    "revision": "304031e66ae47e3c658995ce158ff34f"
  },
  {
    "url": "assets/js/8.c9a057bb.js",
    "revision": "c89fec77636eb50eb47ebd7c820e6d7f"
  },
  {
    "url": "assets/js/9.37963821.js",
    "revision": "a4a7f6fd09be5a315953575dfd4e3d6c"
  },
  {
    "url": "assets/js/app.643f896b.js",
    "revision": "6b15a2e4356350daebea7d79cc23b7b4"
  },
  {
    "url": "compatibility.html",
    "revision": "cd884fee1e755a32ff065a9b94b65cdc"
  },
  {
    "url": "database.html",
    "revision": "1b5b69d313b4e360f4af898345df4c95"
  },
  {
    "url": "example.html",
    "revision": "3b2ba3751bcbbb8cf589c24fd12eb608"
  },
  {
    "url": "faq.html",
    "revision": "8102a64652287ed49107b0cbcacbf92b"
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
    "revision": "45112b2d512a2b220d1e3e42a3260d5b"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "60c92bb6d54d83e1a5df811da5370e1f"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "ab5b8cd83cb5079ad407a51a1953a71c"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "176fe6115f72a160b5a42bd6b29974e3"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "9742e165a6fed4d5d1b462b06d6afed3"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "e7e3ed8d7d467db299de333f6d3439f6"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "9a64a15e80740523788321eb80247182"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "7588341b9b8e19b3a6bdc64c8b086f67"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "6fa371e8e945e2726d9a60ac9b9fe108"
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
