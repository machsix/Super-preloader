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
    "revision": "595c256202115ac085ddb48858d96f43"
  },
  {
    "url": "assets/css/0.styles.ef0a44ec.css",
    "revision": "2552925582e7cc514182e4b4d7213dac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f26571d.js",
    "revision": "c7bbb652c2b3780cdba069f679fc2f91"
  },
  {
    "url": "assets/js/11.8ae9ab9c.js",
    "revision": "e06ba91525b860c77899d18d39af75b4"
  },
  {
    "url": "assets/js/12.8e829039.js",
    "revision": "f178621ed2d456cdcd3853ad04b7eac1"
  },
  {
    "url": "assets/js/13.97213d2b.js",
    "revision": "a7e6ab81b0b828e20bb021ee5dd8f3fe"
  },
  {
    "url": "assets/js/14.0a20d578.js",
    "revision": "669de7f6f084c1018cf997f6a8367bdf"
  },
  {
    "url": "assets/js/15.158dfeb3.js",
    "revision": "9786c447556875e6f6ad63ba07ea8d76"
  },
  {
    "url": "assets/js/16.5a8d0062.js",
    "revision": "61bc0b3fb337fdd2025349c00a71984f"
  },
  {
    "url": "assets/js/17.2922a9cc.js",
    "revision": "fbcf51fbe4366cf53c40e64272fb66c3"
  },
  {
    "url": "assets/js/18.23f4371f.js",
    "revision": "f0228409427fedf5985e354d9e87c2eb"
  },
  {
    "url": "assets/js/19.e9922933.js",
    "revision": "9b982150e3451d77a7de5e2b770381da"
  },
  {
    "url": "assets/js/2.dc56cad7.js",
    "revision": "22bbd76e7ab63f15826edeb76c349e45"
  },
  {
    "url": "assets/js/20.cc41e0a2.js",
    "revision": "60b5f019772c818f226570a0ece129d5"
  },
  {
    "url": "assets/js/3.d016415c.js",
    "revision": "e5a8337eb19c3d98c6403ddf00394dea"
  },
  {
    "url": "assets/js/4.bf4a38c4.js",
    "revision": "0b1aef2d1b95d9f25e74ae01e4025b11"
  },
  {
    "url": "assets/js/5.b0357beb.js",
    "revision": "893244a7029d522627aecca49537185d"
  },
  {
    "url": "assets/js/6.ec6c6c62.js",
    "revision": "67d6cc0516a12eafaa53f4379046af1b"
  },
  {
    "url": "assets/js/7.4a68b4b7.js",
    "revision": "9b0eeb85f6fec170371bd06c8af53387"
  },
  {
    "url": "assets/js/8.bd360c65.js",
    "revision": "03aa545e01ce9d3fafd8f6d591c138e6"
  },
  {
    "url": "assets/js/9.3aa59b75.js",
    "revision": "e514ce8c8658c29b9e516867595f20a0"
  },
  {
    "url": "assets/js/app.b9a0142c.js",
    "revision": "4c8bbfce93d09a6ac2ab6b4b4f242e42"
  },
  {
    "url": "compatibility.html",
    "revision": "9e2af41794ea8330dcc927eeaebaa193"
  },
  {
    "url": "database.html",
    "revision": "12876c74a9febaa7a05ce7515da5f498"
  },
  {
    "url": "example.html",
    "revision": "a267d27aec59c5999c1e8c805e269b67"
  },
  {
    "url": "faq.html",
    "revision": "150da59f994fbff733e9a7336c449f7e"
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
    "revision": "9788224090fc2e5ee3b964b334812f1b"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "989eab0fe6be690a488a3dbaa8a267dc"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "a8240e910ed50e5c5b910d18f072deed"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "6c597f3e739a667e7d48ca03373a4342"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "c6f5d9a7817e98c1345af59324c7815b"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "72bf833a24eb3302cca915c42dc0775b"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "0a8a3017e48802177a720f5402da1b82"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "a252e55cf5dad7b19eb1264cf9e0c9e7"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "0b5db4176c8593cdc26c8acf8eb11e0b"
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
