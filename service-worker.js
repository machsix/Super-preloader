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
    "revision": "f5d3b35942ecba6b89a34984bd59ad19"
  },
  {
    "url": "assets/css/0.styles.0eec608f.css",
    "revision": "a7efc6716dcbc68a4cbeb858eef87f8d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c16224e4.js",
    "revision": "8be7cf4aaa3367f1b6eb297a76f64dea"
  },
  {
    "url": "assets/js/11.fa687ee3.js",
    "revision": "9ef28e34d0a05bb1eba6613bcb29db8d"
  },
  {
    "url": "assets/js/12.84ca04f9.js",
    "revision": "cc1485b71f89a3c0151bf84efb1febb9"
  },
  {
    "url": "assets/js/13.aed5a420.js",
    "revision": "97577d992681e8505c7b120c6a91d9bc"
  },
  {
    "url": "assets/js/14.7fb4f9c4.js",
    "revision": "5e7647c33c71b77ae9c75f6669aef4b1"
  },
  {
    "url": "assets/js/15.859fd5cc.js",
    "revision": "8e5287f76083c1eef5d55c8ac53a6133"
  },
  {
    "url": "assets/js/16.e35734a9.js",
    "revision": "493e6a3cfd3abc6715302d888bd7b848"
  },
  {
    "url": "assets/js/17.4c4e8dd6.js",
    "revision": "7f3ec39b8043e3e6c590cfe5b1600126"
  },
  {
    "url": "assets/js/18.a13016e2.js",
    "revision": "ec5760dff338955634ff07f4c138a437"
  },
  {
    "url": "assets/js/19.94d5d895.js",
    "revision": "e762167700041f9063767ad75201f2f7"
  },
  {
    "url": "assets/js/2.e3117809.js",
    "revision": "ededef00c6d3a19c71ce4675ea944940"
  },
  {
    "url": "assets/js/20.7bc9347e.js",
    "revision": "1eed54e26e7aa9f91bb8b25baad2336f"
  },
  {
    "url": "assets/js/3.1d3118c1.js",
    "revision": "7580f23714b4fe228401e630051a000b"
  },
  {
    "url": "assets/js/4.7fba8e88.js",
    "revision": "6536f455cb1c626ab4aeb2164409dc80"
  },
  {
    "url": "assets/js/5.257d4ea8.js",
    "revision": "78998a18de7f89234b537d383eb1d09c"
  },
  {
    "url": "assets/js/6.e3f8e85b.js",
    "revision": "746fb9cc186572b8c30063c44582eb13"
  },
  {
    "url": "assets/js/7.1dc8f70a.js",
    "revision": "776df85ea2080d65f0527e9b49aaf346"
  },
  {
    "url": "assets/js/8.910da71f.js",
    "revision": "15963e744af3224a900147899ace1eb9"
  },
  {
    "url": "assets/js/9.97acb2a5.js",
    "revision": "51034a004e5d2ad21a26ad0c428b308d"
  },
  {
    "url": "assets/js/app.edf6e602.js",
    "revision": "89998996a2252bf8698e21a4de2b53f9"
  },
  {
    "url": "compatibility.html",
    "revision": "5afda315736f88a3e21750997aa5d81d"
  },
  {
    "url": "database.html",
    "revision": "340496fcce4932cf7980d8ab37d3d4f1"
  },
  {
    "url": "example.html",
    "revision": "c58d7c4081bcb9a73cb28c20c5406075"
  },
  {
    "url": "faq.html",
    "revision": "082ed2b69c320966bcbb8d8e4f69e6f5"
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
    "revision": "1c5fb271b03a4310d3e4e6ab93ac1666"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "c4e489c3b9ca781f7dca7b0dfdea2015"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "7ca726545f98003a7fb9efd6d2e15a83"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "b29eceb7be869b31f37569f7de5aa492"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "e13b6b0b9434b3aaf86fb39c5f568750"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "eab6a388479fdafec7242cc504692245"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "a481b3ea0f054921589000ac625dc7bc"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "2646a7792d1f1781c6cc225b8aacaae3"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "ec01613a6224e22bf9dbd40d20ea23d6"
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
