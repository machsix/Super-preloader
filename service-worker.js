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
    "revision": "05faec6afe47536d3d5e0e328e35031f"
  },
  {
    "url": "assets/css/0.styles.d36c8da4.css",
    "revision": "bef7a06b32b047d6cbf765323f6035c0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3c01e69c.js",
    "revision": "023d313f200d0de22368ea1e551ca88f"
  },
  {
    "url": "assets/js/11.375817e9.js",
    "revision": "e54cc71c342e4ddd0de8789fb867d9fb"
  },
  {
    "url": "assets/js/12.9357e680.js",
    "revision": "f68b91b30bc59613e73f1efec2d4b7f7"
  },
  {
    "url": "assets/js/13.515cc713.js",
    "revision": "cfd275d0e3f66c2e9369672a57e3367f"
  },
  {
    "url": "assets/js/14.d758d23b.js",
    "revision": "4e7fdff650aa47136d871f953080d178"
  },
  {
    "url": "assets/js/15.cf3d1f80.js",
    "revision": "68c2982e914ac55da80470ebdf2bae1d"
  },
  {
    "url": "assets/js/16.85d8225f.js",
    "revision": "1e1f04745c4390cd73a59934f6af3107"
  },
  {
    "url": "assets/js/17.283b47bc.js",
    "revision": "414525c1556479833780d4d26016961a"
  },
  {
    "url": "assets/js/18.bd53f8dd.js",
    "revision": "f68f8a44a0b902de29aee3d39cc1622f"
  },
  {
    "url": "assets/js/19.5050e7d8.js",
    "revision": "3857d0cf63db640e2d9207bc3a94e9a6"
  },
  {
    "url": "assets/js/2.23db2f0b.js",
    "revision": "13bb3181644de96f03e22cbd18bc16c5"
  },
  {
    "url": "assets/js/20.b5dd684a.js",
    "revision": "8d267f673d771d16931bb42282c8bc8a"
  },
  {
    "url": "assets/js/21.3842c50c.js",
    "revision": "5e7d3543927a9ec82aaf60e759764525"
  },
  {
    "url": "assets/js/22.9eb7f055.js",
    "revision": "43cf4c057564892b0a0d031c28bf85f0"
  },
  {
    "url": "assets/js/3.150fc72c.js",
    "revision": "52b6e1f0b60f66236a95cb797a05fe21"
  },
  {
    "url": "assets/js/4.aae60b46.js",
    "revision": "6cb88af495b29011c5bee21bd7fab87a"
  },
  {
    "url": "assets/js/5.8cf5041e.js",
    "revision": "bd80a2feb0528a55b35ac46b4eb7d66f"
  },
  {
    "url": "assets/js/6.727c6cca.js",
    "revision": "7cc12e867bf9c2d3ca6337dee786b35f"
  },
  {
    "url": "assets/js/7.26a33503.js",
    "revision": "93260efa816e7bd67535876646152cc0"
  },
  {
    "url": "assets/js/8.67588c6b.js",
    "revision": "9c64dabc3a3155293b5b76ba8ea42a99"
  },
  {
    "url": "assets/js/9.7d7ed7bf.js",
    "revision": "cdd6ba4ff35ed32f3a143c9602a8ee90"
  },
  {
    "url": "assets/js/app.fac21d56.js",
    "revision": "2143635964b59cd4e8d2b6b4f3f00e29"
  },
  {
    "url": "compatibility.html",
    "revision": "c02103c8251e2a9201e66edb420d6b94"
  },
  {
    "url": "database.html",
    "revision": "850de55925abb9dd8e2a6238f84edf1e"
  },
  {
    "url": "example.html",
    "revision": "7b4af8982feffedb3c5dbd5c3f8cf129"
  },
  {
    "url": "faq.html",
    "revision": "0f261c3edc80b52f5d7679107e71716f"
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
    "revision": "4af779bbff95cda208ce5432d3465120"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "707294c8fafe8092b851c48bdc8f70d5"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "8ee6fbfcf0941188d6e4ce260f2bf1a6"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "cf2d90f653702751f3040b3b1664ee0c"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "09dc640fffbeff25be017089ec85bd67"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "9f93c01d4573484ce792956dc7076f6d"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "51965c4b8b05ed775ec12ef6b04bddf3"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "0cf73dfa6551fa92bf84b1d07af029d5"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "b9403f7135132a4a7d0b9b38031f25a6"
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
