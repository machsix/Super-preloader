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
    "revision": "ecb0bf411850fd6c3544c221f031d558"
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
    "url": "assets/js/10.f762d0c5.js",
    "revision": "ce978db97a17914fcacff6693ece1e01"
  },
  {
    "url": "assets/js/11.7617141a.js",
    "revision": "e870f8dfd369695ae43d6c769c72423c"
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
    "url": "assets/js/8.a0f7e6ce.js",
    "revision": "4f50858157d954c16695d53a9d4b6b45"
  },
  {
    "url": "assets/js/9.7056364b.js",
    "revision": "4688c9338639de0138ae3a90f2ee4c37"
  },
  {
    "url": "assets/js/app.997914ed.js",
    "revision": "289af69bfecd18fd82f02f04d137803f"
  },
  {
    "url": "compatibility.html",
    "revision": "267176623765b2a889438fa80c374a16"
  },
  {
    "url": "database.html",
    "revision": "bf1304d94c1f86cf21c811a3399d818e"
  },
  {
    "url": "example.html",
    "revision": "b21b8fbbaa49201ea7447f45ef79a770"
  },
  {
    "url": "faq.html",
    "revision": "8018993fa66458f663219dd101a9fb2a"
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
    "revision": "05899f0aaa4242e0546e7d19748d4a9e"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "60bdcd7c278b63943f6e202fbde00104"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "c2876e00d7d4d48cb04c3e6d4ba6d4af"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "d3faa406b2af3705e25ebbdf55e16d8d"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "c2a9a1aa15b284ed4b385b96a7d78767"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "1f56ab6a0d386a0f7174c7ea21df28d7"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "1099c3fa0f4fc606331d4ac85b943347"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "d9472916f658514f5fb69c8d4771c568"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "1eb50c245f022120b03bf8c1ce2821e7"
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
