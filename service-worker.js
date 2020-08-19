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
    "revision": "f37094eb7f57f7627aec2985b3c7c310"
  },
  {
    "url": "assets/css/0.styles.1a35368b.css",
    "revision": "60a74735c25851d4c3655e86591441df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6755061b.js",
    "revision": "8be7cf4aaa3367f1b6eb297a76f64dea"
  },
  {
    "url": "assets/js/11.acff178f.js",
    "revision": "9ef28e34d0a05bb1eba6613bcb29db8d"
  },
  {
    "url": "assets/js/12.ad54c6d4.js",
    "revision": "cc1485b71f89a3c0151bf84efb1febb9"
  },
  {
    "url": "assets/js/13.c83ee63d.js",
    "revision": "97577d992681e8505c7b120c6a91d9bc"
  },
  {
    "url": "assets/js/14.c0150025.js",
    "revision": "5e7647c33c71b77ae9c75f6669aef4b1"
  },
  {
    "url": "assets/js/15.f9213b4d.js",
    "revision": "8e5287f76083c1eef5d55c8ac53a6133"
  },
  {
    "url": "assets/js/16.51176d14.js",
    "revision": "493e6a3cfd3abc6715302d888bd7b848"
  },
  {
    "url": "assets/js/17.80646d7e.js",
    "revision": "7f3ec39b8043e3e6c590cfe5b1600126"
  },
  {
    "url": "assets/js/18.6cb31122.js",
    "revision": "ec5760dff338955634ff07f4c138a437"
  },
  {
    "url": "assets/js/19.4a2fe828.js",
    "revision": "e762167700041f9063767ad75201f2f7"
  },
  {
    "url": "assets/js/2.baa37270.js",
    "revision": "d07f8e5fef72a6b5cbd23fd8d0bf64cb"
  },
  {
    "url": "assets/js/20.7bc9347e.js",
    "revision": "1eed54e26e7aa9f91bb8b25baad2336f"
  },
  {
    "url": "assets/js/3.cd81059b.js",
    "revision": "7580f23714b4fe228401e630051a000b"
  },
  {
    "url": "assets/js/4.7fba8e88.js",
    "revision": "6536f455cb1c626ab4aeb2164409dc80"
  },
  {
    "url": "assets/js/5.07082e26.js",
    "revision": "78998a18de7f89234b537d383eb1d09c"
  },
  {
    "url": "assets/js/6.c9012145.js",
    "revision": "746fb9cc186572b8c30063c44582eb13"
  },
  {
    "url": "assets/js/7.15e5fabc.js",
    "revision": "776df85ea2080d65f0527e9b49aaf346"
  },
  {
    "url": "assets/js/8.8bf407a5.js",
    "revision": "15963e744af3224a900147899ace1eb9"
  },
  {
    "url": "assets/js/9.d323b744.js",
    "revision": "51034a004e5d2ad21a26ad0c428b308d"
  },
  {
    "url": "assets/js/app.df5462a6.js",
    "revision": "b574d7cb0538a65f90a7e7dc5f05e2a7"
  },
  {
    "url": "compatibility.html",
    "revision": "5d9c7c8df5c7b195a5ebad4aa81982e8"
  },
  {
    "url": "database.html",
    "revision": "261887ba1ffad232be3238c624ff3ea8"
  },
  {
    "url": "example.html",
    "revision": "0ebbc9045511e7741bf38804baed41bf"
  },
  {
    "url": "faq.html",
    "revision": "495d794601c41385b0b0cabd9ca46219"
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
    "revision": "61df5bb474cdc20a47a8c647abbcb1ad"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "4c45dc4d9b8c2631e4d14e89b41ca7b7"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "4dd72d9aa33f68304f635f6f2451e693"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "80cf4a81418ef2f0e6d3658989c973ce"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "7e4a341bffd634d15cd0865f4e436339"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "92e1dd98a31367d60a513b9354318ff5"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "a1e4d108861ff087f86b8d8951887f6f"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "5aea4441ae1d426b3fdaaf713dced871"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "424b9263a2d816d566df0e366f145680"
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
