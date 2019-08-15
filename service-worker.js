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
    "revision": "70b6d5bc1a1ee4e88cfde350c812fe9e"
  },
  {
    "url": "assets/css/0.styles.a4d9bff8.css",
    "revision": "47ad92bb4e1910bf8a121d88f708f9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56c2e67f.js",
    "revision": "093eedeb69737e1fa45b27d7db7c0ca3"
  },
  {
    "url": "assets/js/11.8401a708.js",
    "revision": "15b230a780cfee86ae8027d05692928e"
  },
  {
    "url": "assets/js/12.b8b981a4.js",
    "revision": "ad6704f3dd6396c22160384de864a0f2"
  },
  {
    "url": "assets/js/13.361b8bc5.js",
    "revision": "9b2c0862c5e96594eec8948bd314c1a9"
  },
  {
    "url": "assets/js/14.8e2ab8bb.js",
    "revision": "6cae60e1371f89fbc1232de40cc484e0"
  },
  {
    "url": "assets/js/15.cdde43f1.js",
    "revision": "04da3fa6d6cd9703535153b28e1d4e25"
  },
  {
    "url": "assets/js/16.3706b9a7.js",
    "revision": "75ff7750a068e08310acd36959fae959"
  },
  {
    "url": "assets/js/17.0d1cbd09.js",
    "revision": "9ce1900962be94dde2d54119234619d2"
  },
  {
    "url": "assets/js/18.37ab9cee.js",
    "revision": "a31fc85200443cf2faf9caa0b5ce31aa"
  },
  {
    "url": "assets/js/19.bd77326d.js",
    "revision": "b9bc10b99d2629467dfba05f0c09978e"
  },
  {
    "url": "assets/js/2.dfadd8ce.js",
    "revision": "10a4c820aab7971e39095b51452629fd"
  },
  {
    "url": "assets/js/20.36b96394.js",
    "revision": "55dc247961f93b76ab3d76f7255b5806"
  },
  {
    "url": "assets/js/3.a0651c09.js",
    "revision": "16240fa4969a41682ae2d20f5b793a31"
  },
  {
    "url": "assets/js/4.6e334a9b.js",
    "revision": "a8dabba7705b71a60d1d88474014c8ca"
  },
  {
    "url": "assets/js/5.5d843e41.js",
    "revision": "a844d2119bf41742609998dd4f030a06"
  },
  {
    "url": "assets/js/6.983cff3d.js",
    "revision": "827e3c5c0e9fd36173da20408e16ac77"
  },
  {
    "url": "assets/js/7.d84190d7.js",
    "revision": "9e7352b2a5f20677cfeccc3bc6684263"
  },
  {
    "url": "assets/js/8.2c215bcb.js",
    "revision": "3f5c0c5e0d6209f78d6390c379935838"
  },
  {
    "url": "assets/js/9.2a35f5d2.js",
    "revision": "79dc77df0c6a97b9df5d5f2ebb8ab272"
  },
  {
    "url": "assets/js/app.4c531b0d.js",
    "revision": "7da42d817f3350a92e7bd78372e0292e"
  },
  {
    "url": "compatibility.html",
    "revision": "aaad94ec46af7f53c5494679b37b80d0"
  },
  {
    "url": "database.html",
    "revision": "c06586212da645876a5d4cd208c32722"
  },
  {
    "url": "develop.html",
    "revision": "973cf6565ea9ab04d2b85b1fb458e142"
  },
  {
    "url": "en/compatibility.html",
    "revision": "98dcd463d8c9199fdea115978403991c"
  },
  {
    "url": "en/database.html",
    "revision": "7f32da38d2416d3149195e59937c4822"
  },
  {
    "url": "en/example.html",
    "revision": "33018fbbdcec7cb0c00119f68b39e05c"
  },
  {
    "url": "en/faq.html",
    "revision": "65db80c12b3d5478d672fbc93b8ba00c"
  },
  {
    "url": "en/index.html",
    "revision": "e2fd4f8634962b5058c4c82f1124f501"
  },
  {
    "url": "en/siterule.html",
    "revision": "667c87af9b9add45336d6c18cfa5dbe0"
  },
  {
    "url": "example.html",
    "revision": "9cd556dee291997d7a0fbb9c00f64422"
  },
  {
    "url": "faq.html",
    "revision": "d5da45b96bac845b54c2828279214cce"
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
    "revision": "a6748bbd5ecf95181f3b83ded1d66e37"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "d0f02bc9ffc4df3804e2b4c86a6325db"
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
