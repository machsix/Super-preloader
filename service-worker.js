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
    "revision": "dbdeffdb4de0acd1bff984e958ee9898"
  },
  {
    "url": "assets/css/0.styles.7ca9da9a.css",
    "revision": "f3e402134d50108b6a7f18a454d34186"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16a717ef.js",
    "revision": "e2b15b68a4d0c197e8ce7db14c3176c6"
  },
  {
    "url": "assets/js/11.ba1e0a4e.js",
    "revision": "32b1bbd3fa1f365b2a477ac47a40c292"
  },
  {
    "url": "assets/js/12.66384d4e.js",
    "revision": "e043ab60b3bfbe9151a4031bad28b578"
  },
  {
    "url": "assets/js/13.158535f7.js",
    "revision": "20d7e4bad5194985a477f6ba766e233f"
  },
  {
    "url": "assets/js/14.bced1220.js",
    "revision": "3bd5b0d0ce8d4db6638dddbd3ff27e0b"
  },
  {
    "url": "assets/js/15.249b41b9.js",
    "revision": "fed8353e0fba4da21b2ea53852def253"
  },
  {
    "url": "assets/js/16.61e12820.js",
    "revision": "a508285ca431fe4c75a458734cd12a27"
  },
  {
    "url": "assets/js/17.2febd8b8.js",
    "revision": "7412f549d75e59818858d07cdf3bc363"
  },
  {
    "url": "assets/js/18.75638051.js",
    "revision": "d5ba7f6b034a7703c35c75abd73fdaf8"
  },
  {
    "url": "assets/js/19.14f6201d.js",
    "revision": "ccab2e6300d1aab00942b6e89208e358"
  },
  {
    "url": "assets/js/2.1bb4db3a.js",
    "revision": "105dc94b0d6f065efaf0f4148d5b1f86"
  },
  {
    "url": "assets/js/20.04fb2fdb.js",
    "revision": "0d955dbe038b509d00532f1da939d0af"
  },
  {
    "url": "assets/js/3.def2b59c.js",
    "revision": "0321929cb096f705ae00d1f6b6a2a439"
  },
  {
    "url": "assets/js/4.cf914563.js",
    "revision": "8bd3ac29079961d4ac3c80b6bc7616dc"
  },
  {
    "url": "assets/js/5.e07ab693.js",
    "revision": "0e780a07f0e678d08a85e0c36d33bcb9"
  },
  {
    "url": "assets/js/6.77ab386e.js",
    "revision": "4a4c7fd8bd3fe76be421cffed5b2c929"
  },
  {
    "url": "assets/js/7.6acc3861.js",
    "revision": "9edce678f1fa9d6e9b3d053c40942126"
  },
  {
    "url": "assets/js/8.15b4e81e.js",
    "revision": "21b9172c2668eb95a1c99d72b41a7402"
  },
  {
    "url": "assets/js/9.d1f6169f.js",
    "revision": "753133230f9cbc19759b14cc0a31be79"
  },
  {
    "url": "assets/js/app.5cb3d953.js",
    "revision": "41b5a725a906c4e11bb1bf435cf73144"
  },
  {
    "url": "compatibility.html",
    "revision": "7fceb5d9dd375c156b51058f9956bbf8"
  },
  {
    "url": "database.html",
    "revision": "6899af83fc8c1f65c4a5cae6db565ad3"
  },
  {
    "url": "example.html",
    "revision": "c62ead777a1afbed3f1f799ece1d301b"
  },
  {
    "url": "faq.html",
    "revision": "e3cfd2c1c89d1c193ea650cea0b2986b"
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
    "revision": "b064213e5f0b5b779b4cffa7a34b69d9"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "cbb391d3d9f5baf646fc2263cc546493"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "d273cc5887a5b27a02311bf7be0ea2d5"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "155f5f596172702e42a7f46a7a46da3a"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "ae383220ebf47a789321388a3272678f"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "09acbbd978c74fd73e8339d95eb1ed87"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "ad2be9eb936fd691fbd2eca249e189b5"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "c5ab43de54fe0bd7fea309a1ea8af1db"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "cfc39c08f1b4bb2110ffbeaa390e5c06"
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
