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
    "revision": "fd190bde1666f77c16a0fc67fa7d0734"
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
    "url": "assets/js/app.a0b6a12c.js",
    "revision": "930bc4adbcf539160afd370cec38f19b"
  },
  {
    "url": "compatibility.html",
    "revision": "12337974043aaa5810315b4fc1913d3a"
  },
  {
    "url": "database.html",
    "revision": "babbdadfbd6307c70842329c83c09b48"
  },
  {
    "url": "example.html",
    "revision": "8957ea71fe3461ad4ab2b140cb458c16"
  },
  {
    "url": "faq.html",
    "revision": "353ead3c2871def4791998326c8e9217"
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
    "revision": "de6043ff3e46fed8f157571c3c85fed6"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "b7dde2f427942109844fe8b4e5f35977"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "299eaf49fbcd4fdff5edb10684af4a3c"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "d2c05839def84b909a2cb2f7a298e725"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "2002847c515e511eaf4a0c7378560b59"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "aadd6a90c88608bcddd774df0b82efaf"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "e379a423242ea761b72b63cc9e0f2566"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "e6f832f40ee1eea9a4bbbb8003bb049f"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "1f99506756f671fa43a6b3a071ae4cec"
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
