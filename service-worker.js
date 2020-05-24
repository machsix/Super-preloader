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
    "revision": "ac8c9480163fee9a278f7da8e7dcfdf9"
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
    "url": "assets/js/12.4927a186.js",
    "revision": "5a4834aa2fdf968e870384cbda957a15"
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
    "url": "assets/js/15.151457e6.js",
    "revision": "a7aaf270f6d7f4b204c019aeeccba7c2"
  },
  {
    "url": "assets/js/16.39f2d79f.js",
    "revision": "06b07ffef2dc308ea1c47b701e1f432e"
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
    "url": "assets/js/19.e2e2bbc5.js",
    "revision": "3779c0acf9f92218d6c60142a8edcd5f"
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
    "url": "assets/js/app.6c76d046.js",
    "revision": "34e648deff34ceb65ab0d79c70f37c7d"
  },
  {
    "url": "compatibility.html",
    "revision": "6215724d6ae99eb5f221bb2ab7f8282e"
  },
  {
    "url": "database.html",
    "revision": "49aa33d4b29be8aa9274441405b0e51a"
  },
  {
    "url": "example.html",
    "revision": "8ade9aa85647af7cbde5e5c7afae27db"
  },
  {
    "url": "faq.html",
    "revision": "8b098e582d19856f9dce1d3183e838bb"
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
    "revision": "beadb852267c2794b4dca96c2353f5cb"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "c63ff564a6dfce7214193e6affc43a60"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "494a87d9b5fcab8cd59908075cf6047c"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "954ba153cf12ef728fde374830b9754d"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "795cb880271f4676da035c6ee96e2001"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "5ef849341c9b7f0ad9963683f65662bc"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "6e932e0aff4035d611e558d1e3e29ccd"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "2a512f7b35e4c7f697a847d4c7a61604"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "81edbbc0db8f56aa2a929c6240a2d804"
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
