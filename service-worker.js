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
    "revision": "cef22684a4116767a1dc1374825af306"
  },
  {
    "url": "assets/css/0.styles.4a6b895b.css",
    "revision": "eb58c3eeb02070055a0e171cd5fc016a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3f62bfec.js",
    "revision": "68c36fce1f18b83cb46d956d4ad194fd"
  },
  {
    "url": "assets/js/11.69728ac6.js",
    "revision": "c410ad1e10d50e6dbff496dad75bc517"
  },
  {
    "url": "assets/js/12.fcfc60e2.js",
    "revision": "13b98b43b5c6e5a547a96d2e049c8600"
  },
  {
    "url": "assets/js/13.ca6a26ed.js",
    "revision": "d10369c73965041e0bdb6a8955a1f0a1"
  },
  {
    "url": "assets/js/14.f431015b.js",
    "revision": "81b3c6fe550f7168cb7f38d5ded0054c"
  },
  {
    "url": "assets/js/15.3e0a2f9c.js",
    "revision": "3a850a5d598b2544706244acd3b0468d"
  },
  {
    "url": "assets/js/16.5bb28f40.js",
    "revision": "58fe7db740bd57a6c9ab5f2a1680921b"
  },
  {
    "url": "assets/js/17.baeb69c1.js",
    "revision": "c92c79a5c4f64ced5efedab3c20e0285"
  },
  {
    "url": "assets/js/18.21da46a4.js",
    "revision": "0b70918c7d229784018229a6ab4d1072"
  },
  {
    "url": "assets/js/19.8f5b0d2a.js",
    "revision": "22549d462e2abf9814d0dee1a2b3af73"
  },
  {
    "url": "assets/js/2.a073ff4a.js",
    "revision": "bdea0c506b60fc38246c9994663b64a4"
  },
  {
    "url": "assets/js/20.8b0b5fd9.js",
    "revision": "3d43a51827a0f70dc1af9d799151d1a3"
  },
  {
    "url": "assets/js/21.80ca5e6e.js",
    "revision": "4eb4ea9e8ac54217e4e7c08fb109cc53"
  },
  {
    "url": "assets/js/22.f2f53bf9.js",
    "revision": "952fb86fb4454661c86b0d54bd9fc8a3"
  },
  {
    "url": "assets/js/3.99786f2f.js",
    "revision": "f9ae90dd1715f14dd13dfc42962188e8"
  },
  {
    "url": "assets/js/4.01bf0dfb.js",
    "revision": "435b8342edeac04be07534fb2c2a8da2"
  },
  {
    "url": "assets/js/5.507ae5fb.js",
    "revision": "4f175600c73786b247b401698c698f38"
  },
  {
    "url": "assets/js/6.52660851.js",
    "revision": "c8c45463f23c39b8b71c08a064e20707"
  },
  {
    "url": "assets/js/7.84d48430.js",
    "revision": "304031e66ae47e3c658995ce158ff34f"
  },
  {
    "url": "assets/js/8.0155ddc8.js",
    "revision": "c89fec77636eb50eb47ebd7c820e6d7f"
  },
  {
    "url": "assets/js/9.8c41044f.js",
    "revision": "da146ee5eb1dd051590e6e4178871e2f"
  },
  {
    "url": "assets/js/app.dbbd9e9f.js",
    "revision": "796890e5c39a33669db96f9091f9b73e"
  },
  {
    "url": "compatibility.html",
    "revision": "b76c56c2da6e8479ba13264d9e1ce647"
  },
  {
    "url": "database.html",
    "revision": "f1f310b819ffe487c4a188880e9e1a9a"
  },
  {
    "url": "example.html",
    "revision": "0a64ad4291d9141ed68640ec7b2a8f12"
  },
  {
    "url": "faq.html",
    "revision": "23baa3cb9feb6c6d2b4c3908ee50af99"
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
    "revision": "b537d957fe6ed44c0eaa955870a22ce6"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "48efc1ce29c86fc34a8e9dd92076306c"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "abbedeac13a397a88a0e04c0b08042b2"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "c8df119ad396881b0938aa6b1ae92c22"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "16788da5650391d2a142a7787ab9b310"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "b9c555d7f7ea2eee39904a6ea748eac6"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "d389550a0999f9483fed500e5a0c8742"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "829e6b7ecf981a54c1d3df65f62d0e6d"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "8d451016d9f397af24bc951d42932464"
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
