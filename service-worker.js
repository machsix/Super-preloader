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
    "revision": "8b439633fe89e1670c6d4da7aace2270"
  },
  {
    "url": "assets/css/0.styles.8e18efa2.css",
    "revision": "f3e402134d50108b6a7f18a454d34186"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c9c7a769.js",
    "revision": "e2b15b68a4d0c197e8ce7db14c3176c6"
  },
  {
    "url": "assets/js/11.7e1b6e6d.js",
    "revision": "32b1bbd3fa1f365b2a477ac47a40c292"
  },
  {
    "url": "assets/js/12.377897a5.js",
    "revision": "e043ab60b3bfbe9151a4031bad28b578"
  },
  {
    "url": "assets/js/13.47088db0.js",
    "revision": "20d7e4bad5194985a477f6ba766e233f"
  },
  {
    "url": "assets/js/14.7ce3eef3.js",
    "revision": "3bd5b0d0ce8d4db6638dddbd3ff27e0b"
  },
  {
    "url": "assets/js/15.94b07ec0.js",
    "revision": "fed8353e0fba4da21b2ea53852def253"
  },
  {
    "url": "assets/js/16.c1c8b265.js",
    "revision": "a508285ca431fe4c75a458734cd12a27"
  },
  {
    "url": "assets/js/17.2670703e.js",
    "revision": "7412f549d75e59818858d07cdf3bc363"
  },
  {
    "url": "assets/js/18.009e12f5.js",
    "revision": "d5ba7f6b034a7703c35c75abd73fdaf8"
  },
  {
    "url": "assets/js/19.b0c5a4f3.js",
    "revision": "ccab2e6300d1aab00942b6e89208e358"
  },
  {
    "url": "assets/js/2.b90ec73a.js",
    "revision": "105dc94b0d6f065efaf0f4148d5b1f86"
  },
  {
    "url": "assets/js/20.b6a7de35.js",
    "revision": "0d955dbe038b509d00532f1da939d0af"
  },
  {
    "url": "assets/js/3.5f43160c.js",
    "revision": "0321929cb096f705ae00d1f6b6a2a439"
  },
  {
    "url": "assets/js/4.2b3a9bae.js",
    "revision": "8bd3ac29079961d4ac3c80b6bc7616dc"
  },
  {
    "url": "assets/js/5.83aa522c.js",
    "revision": "0e780a07f0e678d08a85e0c36d33bcb9"
  },
  {
    "url": "assets/js/6.bb1c7e2c.js",
    "revision": "4a4c7fd8bd3fe76be421cffed5b2c929"
  },
  {
    "url": "assets/js/7.1c6b9fd9.js",
    "revision": "9edce678f1fa9d6e9b3d053c40942126"
  },
  {
    "url": "assets/js/8.174442a5.js",
    "revision": "21b9172c2668eb95a1c99d72b41a7402"
  },
  {
    "url": "assets/js/9.51f554a0.js",
    "revision": "753133230f9cbc19759b14cc0a31be79"
  },
  {
    "url": "assets/js/app.8ba12e8a.js",
    "revision": "160c869ed5039ae828daec9a992a84e1"
  },
  {
    "url": "compatibility.html",
    "revision": "b6e5e208293bfb7a7dca4331820f01da"
  },
  {
    "url": "database.html",
    "revision": "902001116878a3cd068a090477626132"
  },
  {
    "url": "example.html",
    "revision": "c3ba1aca6700bae5e4e41a962a397184"
  },
  {
    "url": "faq.html",
    "revision": "5cda1ea44c8f96eb603f398f56c0e0bf"
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
    "revision": "14ae196c7a52cc325676e61710c0320b"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "48bf96d0517dba262eb0df6730882670"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "28db33b64e5f55d67670d4973a5310a7"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "d88cbe7b74b3bff95f83d64d317b16fd"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "a80ce0f37e35972a249bbc5da5b2e9d8"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "d0cd2a033f99b45e3079629411219214"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "3ca5aadcc461a584864a091016619975"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "6edc4709fc828801f8661c4c461d4f27"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "5be1b0799ffda3f17f31ad9672d74c5c"
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
