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
    "revision": "f6b28aac5048e966ef822cc488e98efb"
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
    "url": "assets/js/10.85c0a349.js",
    "revision": "8be7cf4aaa3367f1b6eb297a76f64dea"
  },
  {
    "url": "assets/js/11.42d8fbb5.js",
    "revision": "9ef28e34d0a05bb1eba6613bcb29db8d"
  },
  {
    "url": "assets/js/12.0a7ae0f2.js",
    "revision": "cc1485b71f89a3c0151bf84efb1febb9"
  },
  {
    "url": "assets/js/13.bba1daa4.js",
    "revision": "97577d992681e8505c7b120c6a91d9bc"
  },
  {
    "url": "assets/js/14.60fffb8e.js",
    "revision": "5e7647c33c71b77ae9c75f6669aef4b1"
  },
  {
    "url": "assets/js/15.3a9230a6.js",
    "revision": "8e5287f76083c1eef5d55c8ac53a6133"
  },
  {
    "url": "assets/js/16.58e61695.js",
    "revision": "493e6a3cfd3abc6715302d888bd7b848"
  },
  {
    "url": "assets/js/17.db49e5ea.js",
    "revision": "7f3ec39b8043e3e6c590cfe5b1600126"
  },
  {
    "url": "assets/js/18.cd5309bc.js",
    "revision": "ec5760dff338955634ff07f4c138a437"
  },
  {
    "url": "assets/js/19.0547490c.js",
    "revision": "e762167700041f9063767ad75201f2f7"
  },
  {
    "url": "assets/js/2.5193fc03.js",
    "revision": "28dcef6400cfa05f9bcc88d9e2c65f47"
  },
  {
    "url": "assets/js/20.5d3318c6.js",
    "revision": "1eed54e26e7aa9f91bb8b25baad2336f"
  },
  {
    "url": "assets/js/3.c05f31b9.js",
    "revision": "7580f23714b4fe228401e630051a000b"
  },
  {
    "url": "assets/js/4.319aa8ee.js",
    "revision": "6536f455cb1c626ab4aeb2164409dc80"
  },
  {
    "url": "assets/js/5.53210185.js",
    "revision": "78998a18de7f89234b537d383eb1d09c"
  },
  {
    "url": "assets/js/6.9578c294.js",
    "revision": "746fb9cc186572b8c30063c44582eb13"
  },
  {
    "url": "assets/js/7.e0bd606a.js",
    "revision": "776df85ea2080d65f0527e9b49aaf346"
  },
  {
    "url": "assets/js/8.33c981cb.js",
    "revision": "15963e744af3224a900147899ace1eb9"
  },
  {
    "url": "assets/js/9.85abecbc.js",
    "revision": "51034a004e5d2ad21a26ad0c428b308d"
  },
  {
    "url": "assets/js/app.562649ad.js",
    "revision": "09419db059e5e271c9111b2007386c90"
  },
  {
    "url": "compatibility.html",
    "revision": "655ae7558a3a604c2644fd9faa3904b8"
  },
  {
    "url": "database.html",
    "revision": "d4285f97a6f5c119cda1ed6fe13147e4"
  },
  {
    "url": "example.html",
    "revision": "9d482655c9ddc8663d146ad5c1d4d8c2"
  },
  {
    "url": "faq.html",
    "revision": "bbe7cce7df39e1448d465ff88d0b64a8"
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
    "revision": "14142f4c563f7ef0001f78c2e737f57e"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "338961f206f88241c222243f38b1236c"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "3d9f6eca1ffa5f97a99750f1060af3f0"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "916c84860037b94ee350a1a57a34bed8"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "b4f003826c33ac5be37105c308063c5e"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "b8c6e5692fdc5bb4c93448a11040669d"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "826dda31e706f9367da281fdcae9dc49"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "b363c96026728ab439a3aac35e7aa0fa"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "6489c38907b385a9e250d240b5e1590e"
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
