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
    "url": "assets/js/12.1443ef3f.js",
    "revision": "92c04354ccf5560c34ce3fd7918e7372"
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
    "url": "assets/js/19.993a6955.js",
    "revision": "4ce0647a5b76218535fea5761efbd985"
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
    "url": "assets/js/7.16a06d49.js",
    "revision": "c09e04b5082c191f0fd5ae3f9aa528dc"
  },
  {
    "url": "assets/js/8.5af6853c.js",
    "revision": "0761356346897c67a52ac2dd8f037dd3"
  },
  {
    "url": "assets/js/9.da85d86e.js",
    "revision": "f871801007d9d670686d1e901c96bc86"
  },
  {
    "url": "assets/js/app.1e8b6392.js",
    "revision": "aec7b6afd074c9e43b04bb44dbc5c8c3"
  },
  {
    "url": "compatibility.html",
    "revision": "2089d98c85f72f61737b88469876d58b"
  },
  {
    "url": "database.html",
    "revision": "8e1d311e8beb1e1b6ba2d995282d3dbd"
  },
  {
    "url": "example.html",
    "revision": "c9f13ed6336474b9e7a09e9960354be0"
  },
  {
    "url": "faq.html",
    "revision": "2c669fcd63b6e9aaa8a8590211209114"
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
    "revision": "6edec7f4144764211fd632c56c96fd93"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "37cdbff093b3e6a6356420c95638c402"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "04e14a544dded0c124818e696a7134c4"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "a89f5be460d7f7742397bcbb4ca59805"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "e4d8bccb96c4b09e2d30da9ee00d6c8a"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "5771e724e4ea8cd4cb0a006f2c3981df"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "c63106ef758526b78a99205634399b6c"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "8c37bde08934ca140f69655a5aa0b615"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "0706b55a5ec29f6b571cbc33e2a2bc4f"
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
