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
    "revision": "5f9cc9b88fa3d24cc51c43dee3628b77"
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
    "url": "assets/js/10.8449ded1.js",
    "revision": "db3fbbbe723461844656d5cf1fb215a5"
  },
  {
    "url": "assets/js/11.b075c169.js",
    "revision": "4d601bc27c2b283e22d0dedb255d5356"
  },
  {
    "url": "assets/js/12.0ef4101f.js",
    "revision": "4720e7fba92f275d3f37e739fad8b88b"
  },
  {
    "url": "assets/js/13.90c78ef8.js",
    "revision": "047d00640f819856a7cac03d2064477d"
  },
  {
    "url": "assets/js/14.7dc5dfdf.js",
    "revision": "8ef328a0fd68645ee21fc96e38b75b63"
  },
  {
    "url": "assets/js/15.517ff346.js",
    "revision": "b64ad398866fef012910e5f715e87dbc"
  },
  {
    "url": "assets/js/16.f4a9541d.js",
    "revision": "7366c47cfbe31a4f1e6fb6da6c1d89f2"
  },
  {
    "url": "assets/js/17.96eb267e.js",
    "revision": "b9fba8a87a588509bb44ed4b611a21a5"
  },
  {
    "url": "assets/js/18.7827687c.js",
    "revision": "2b4d1313af863b84f50e3333ccb2b974"
  },
  {
    "url": "assets/js/19.50334650.js",
    "revision": "ecdd3e5b4144c5bbb3b1d70f39775de0"
  },
  {
    "url": "assets/js/2.d5cf4ffd.js",
    "revision": "850a946b8516176f35281bd4722edee1"
  },
  {
    "url": "assets/js/20.20fb306a.js",
    "revision": "bf4f4173c2dbe59c8a6a91dd6d881c7c"
  },
  {
    "url": "assets/js/21.8fde8ffd.js",
    "revision": "3318ab2dbede69b5af0879de902c13f7"
  },
  {
    "url": "assets/js/22.45937587.js",
    "revision": "667315e3161dfe0605c055d8e00e9518"
  },
  {
    "url": "assets/js/3.175f6ad6.js",
    "revision": "a082b373ce2f1cdc7712b1dfaf892faa"
  },
  {
    "url": "assets/js/4.6d08da69.js",
    "revision": "0680b817e7d4474f8fcce749de188915"
  },
  {
    "url": "assets/js/5.9881882b.js",
    "revision": "7690ea3699ae538ec71385bd8400e24f"
  },
  {
    "url": "assets/js/6.4758d4f0.js",
    "revision": "13f8d1d84c96ac5534ebcf42e2d6645d"
  },
  {
    "url": "assets/js/7.cc14b9da.js",
    "revision": "063beeb1492e81a8e444b176cd1e4e54"
  },
  {
    "url": "assets/js/8.2806d2c7.js",
    "revision": "c90b3b367fe214132e6d920fc3774fdb"
  },
  {
    "url": "assets/js/9.d85a120e.js",
    "revision": "e63c672dff83fe07be5a257a2d83a99c"
  },
  {
    "url": "assets/js/app.e6716cb3.js",
    "revision": "c55a7b346ddad19a2cdfdadcc3d5c606"
  },
  {
    "url": "compatibility.html",
    "revision": "8d83a8f0b543f4aa1882f631cdcb7ae0"
  },
  {
    "url": "database.html",
    "revision": "600ea1e59842698043a92678a35b19d9"
  },
  {
    "url": "example.html",
    "revision": "7a9a7e4511d3960e6685734ce26c32e3"
  },
  {
    "url": "faq.html",
    "revision": "1e7ba51b677991a54495617736b8ea4b"
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
    "revision": "85e43f816c21b6c4d7f63e9f9a216d42"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "5732e9223d1a65e9023c19092f2b4439"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "25b7d6c7f3504e702c5fce73cb57702d"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "6f677d4557fb7c843498b94b7263b441"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "b64820b6b7fcf7c9246bd340d2ed693e"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "8caea8b762272705af161363079101af"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "36afad89052a52398b982914595e8cfc"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "5986c62bcd9a0e75cc06103edc9e2387"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "4ca767ea061eec047c65976bea956bd3"
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
