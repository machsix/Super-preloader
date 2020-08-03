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
    "revision": "7721b0d3e31b831cf76a527c19cce07d"
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
    "url": "assets/js/7.537d7d1e.js",
    "revision": "c72fb01e03542bd2045bc1b9d204cb7d"
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
    "url": "assets/js/app.1a1eaa9d.js",
    "revision": "96593a1975dc7aa2d3e72ed9cbf24f26"
  },
  {
    "url": "compatibility.html",
    "revision": "0b83aca6ccf78fe462b1bf0dbdb2b337"
  },
  {
    "url": "database.html",
    "revision": "2ab41c7684473ff34a3e6f5bf91b7150"
  },
  {
    "url": "example.html",
    "revision": "6b116455a2d18447e8c5ee0fd9b67c20"
  },
  {
    "url": "faq.html",
    "revision": "bfaa2c1fafd3d8da05223adf02ec3623"
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
    "revision": "027338fa30b031f1dde276bd0e9fc756"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "0a7ff26d96400a51b7e4630f70b60284"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "56b2bc3148ebb747021b04b0914e859e"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "ee07a96eaca63ea8edea754dd6c26c4b"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "1ca819eb9d4afe5279214120c05a68df"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "73bac4c1f4692d163f25b79d68340c63"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "c112b1209db2f7b6396888c0da82e3ed"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "376805a8b410225de6b277a90296ff70"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "9eda327c4e1f0988a6ae960d9f47c326"
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
