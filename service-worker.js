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
    "revision": "97bc6c21d34d0e9e8d2ccb72c675247f"
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
    "url": "assets/js/app.f8c7ed9e.js",
    "revision": "b7da2276b1efca616bdda56526309644"
  },
  {
    "url": "compatibility.html",
    "revision": "2f64ab5a2c3dc631353c14d75f1c0355"
  },
  {
    "url": "database.html",
    "revision": "a017d9917131329757b963da10e0560d"
  },
  {
    "url": "example.html",
    "revision": "e0dcc04ff5e47ac1cce9c803a19e6a27"
  },
  {
    "url": "faq.html",
    "revision": "6ad6e169e3685f7a03c6aad27a5870b6"
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
    "revision": "4e0b58ad22662b2e1531d39c035962e0"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "57fb7d1f3868c5edb0659b89a36eefef"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "441dfaba6e16fe753ce186973979f070"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "2e4033eb430635296fb8f6226ccf4c69"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "6b085ef25fbcee35b3cc83a1e08b7a77"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "15a0922659d7ebf024781224e1ee4ed7"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "588cf097b29dc3d543633e4a84def6ad"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "b3ebdb7ab865a20a3e219eb205e63c1c"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "747cd1d83f701b02a50912ce2fbca692"
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
