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
    "revision": "b90be608a9de5f7eca6ddb95a1229ad0"
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
    "url": "assets/js/app.7e16175b.js",
    "revision": "111134b9752537cdd752935e8f5ae604"
  },
  {
    "url": "compatibility.html",
    "revision": "9bf45625a0d0a88aff353dfb8fb9fafa"
  },
  {
    "url": "database.html",
    "revision": "501dc466e40810dbd64fe29af48dc7b4"
  },
  {
    "url": "example.html",
    "revision": "854ad837e84c4593971173e33d1f321f"
  },
  {
    "url": "faq.html",
    "revision": "74b4d62f33f11e52b2f4ba6b7afcda09"
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
    "revision": "5571b35ca4262555edc0e110d6e0d37c"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "721498fa044a7fa5d143ee8de2e42965"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "3e0773c48483a719bb586f9f4b91a785"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "b4263c56dfa43e7f42b46125163fd1ad"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "9bf992bc9537d8aa55ba596e4fdf9dd7"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "d550b725fe6cce874eebb1e081bb7ab8"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "f56300e18e1a006554fd0b784bc7afd5"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "40bc670672158b7d420b5d10c547457c"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "c08d0d392105ea68e7c6769dc725e0db"
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
