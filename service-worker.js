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
    "url": "assets/css/0.styles.92961ea0.css",
    "revision": "d6cd61c417f8cf81258784d67683aff0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.13d6ee8a.js",
    "revision": "8a179f474e2047bfcb8adb4ef1af7fe2"
  },
  {
    "url": "assets/js/11.a41f57ae.js",
    "revision": "a10d7147e5df38525a437865e811e120"
  },
  {
    "url": "assets/js/12.8f0ca9de.js",
    "revision": "91a05baaca6f5c7c00b4e2cc54ab2a77"
  },
  {
    "url": "assets/js/13.07f285b3.js",
    "revision": "d5aa924be5b05b305a3449595437e9af"
  },
  {
    "url": "assets/js/14.0c8d5a9b.js",
    "revision": "64ec5c85ed2f3975a7896710621fcb15"
  },
  {
    "url": "assets/js/15.179091c8.js",
    "revision": "33a4e9202fb6a54daa2bfb646bba561f"
  },
  {
    "url": "assets/js/16.939693c9.js",
    "revision": "d79a57015a67aa912f9d407101745e67"
  },
  {
    "url": "assets/js/17.5904f6ed.js",
    "revision": "7b4569e4c1a2545c1db9204bb2575c93"
  },
  {
    "url": "assets/js/18.fd8100b4.js",
    "revision": "34d1b864da531bf52ffc91f3b78c55de"
  },
  {
    "url": "assets/js/19.2857f60d.js",
    "revision": "3833c91fdb450455d87e05b8afb65a63"
  },
  {
    "url": "assets/js/2.98defbbc.js",
    "revision": "f4a51b57096a2439d4759661e5f78915"
  },
  {
    "url": "assets/js/20.17df45b8.js",
    "revision": "7662548badb5571f4be1b7ed4779b13d"
  },
  {
    "url": "assets/js/21.085c54a8.js",
    "revision": "81fe838825e1c0fe7c86c2c229d7f436"
  },
  {
    "url": "assets/js/3.2b2a6df1.js",
    "revision": "dc69b3bc1ecfb566168bc0bf74c39171"
  },
  {
    "url": "assets/js/4.9afd5fd2.js",
    "revision": "d11fe8d3b5936eee4a5bbc2e75e1be7f"
  },
  {
    "url": "assets/js/5.5fea0dd9.js",
    "revision": "d26b37bf3cf8391251a6bf3ccb8afb04"
  },
  {
    "url": "assets/js/6.743b4023.js",
    "revision": "da197c6c55ac469f7c9006b53c9036b8"
  },
  {
    "url": "assets/js/7.74a0d418.js",
    "revision": "8e8596bc6467174cea81f6e265c173d3"
  },
  {
    "url": "assets/js/8.a4699f96.js",
    "revision": "135e9f7098b6e5d51b515012776e10ff"
  },
  {
    "url": "assets/js/9.da85d86e.js",
    "revision": "f871801007d9d670686d1e901c96bc86"
  },
  {
    "url": "assets/js/app.e111d6bb.js",
    "revision": "949a83e06eb483bec32f553fe7972265"
  },
  {
    "url": "compatibility.html",
    "revision": "07baa8dd629b8ec63b3af27cb3493955"
  },
  {
    "url": "database.html",
    "revision": "9f650b1f02dc0a441c7d5ec13dddd83c"
  },
  {
    "url": "example.html",
    "revision": "a640bd16a44cd82004eeca24e5066c52"
  },
  {
    "url": "faq.html",
    "revision": "c8774f572208312ee006fc7849780ef9"
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
    "revision": "9868e7ec3264186b6ec78590b9d4ba80"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "d0ed885fc72dd40a609f7d94a8090543"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "480ae673dd08edcd9d677e9f0dbe6483"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "e45198cf4398ac0719898ad851c77719"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "7b068d7c19568b6cbacfa9550ff1f9bf"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "f23ac5a7fd3ab80a84727d2fa23d450c"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "c0ffaf9a13b69e5e3f994db198018417"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "e11727e874e48d6e8ab26d085269782e"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "d64bcd7670d51d74f72390e79d0dd4cf"
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
