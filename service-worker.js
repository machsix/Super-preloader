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
    "revision": "392f08a388ddfdf2467e369a6b63300c"
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
    "url": "assets/js/7.e6b2f66a.js",
    "revision": "e5018d41dcc8bcc94ec789c105079d53"
  },
  {
    "url": "assets/js/8.d751ddff.js",
    "revision": "99cb887bd481752243692b340cd07cfb"
  },
  {
    "url": "assets/js/9.7056364b.js",
    "revision": "4688c9338639de0138ae3a90f2ee4c37"
  },
  {
    "url": "assets/js/app.16851d0c.js",
    "revision": "d224a1dd8cf8795dd40c7dcf463dc062"
  },
  {
    "url": "compatibility.html",
    "revision": "1819dd7e25ef28e152dd73d4dfca6c87"
  },
  {
    "url": "database.html",
    "revision": "9da8d9b04a518dc64a6ef695959f70d4"
  },
  {
    "url": "example.html",
    "revision": "ef0d751b590f778f2d48ed9e18c85117"
  },
  {
    "url": "faq.html",
    "revision": "f208862575cc65c2ee05df1b5c0b67ac"
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
    "revision": "4fcd5bacf9dc7bea4d55bdc25ba857ad"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "0186c754f17a84a4d6a80f255c1a705a"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "ee1da65508301aa0e10f14b01eac6d38"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "8ba47ebf68bf0e521d9fa4fbdc5f5300"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "a952fe7862107db780a498a43ed06bc6"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "69ff2774575448fb766d90af95a8a083"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "77fd20dacf2a398ace360b174c419a60"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "b1c8e37af9a14f2006b5a5e0fad1be75"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "9727a13187d407f7e037c14df26e4d41"
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
