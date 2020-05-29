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
    "revision": "49bc4b5864d88f0d5f054045234fc756"
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
    "url": "assets/js/12.673164de.js",
    "revision": "c9c4cb22b56f7fcf03963dd964f6bb3c"
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
    "url": "assets/js/app.a9a7daee.js",
    "revision": "718c9193b4bbd5fee261c84f6bc3e31e"
  },
  {
    "url": "compatibility.html",
    "revision": "a1e9fc2449defc3b4564beb7c1224869"
  },
  {
    "url": "database.html",
    "revision": "c65b2e71b9e8a217f8c80e51bc89bd1b"
  },
  {
    "url": "example.html",
    "revision": "dcfdafc8c0129f68b790dfec789569e7"
  },
  {
    "url": "faq.html",
    "revision": "4d044e95aab55d65780723261d1295b1"
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
    "revision": "41d02a6951515d8e19b5a56ed7180e0b"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "cc5754346facb93b79a520e82c75ba27"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "777de15d10bb503c9a843ed4aa79433b"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "e624eafa56c876ab429e64daa2bcc52a"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "78c70d33b5353ab34cea29c53ea6bd0e"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "962efa85421f3335fa071e017f3d5198"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "1c32c6c858b6ca9dee5683c7a6a5e0e7"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "f16e259d365bb3e02c1d64db461f975b"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "13378612e8290d657c3525d20c497f61"
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
