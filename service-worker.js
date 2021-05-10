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
    "revision": "e11652031c1fea08411fc0aa28036791"
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
    "url": "assets/js/app.b9c441ae.js",
    "revision": "7a594d63655216a5593f2be715a1d203"
  },
  {
    "url": "compatibility.html",
    "revision": "3b4814361183a1849ca273bc08fce837"
  },
  {
    "url": "database.html",
    "revision": "485aeeb0d14fe3950b834d3360422728"
  },
  {
    "url": "example.html",
    "revision": "759fe1b32bb529ba2e62e9c344a739bb"
  },
  {
    "url": "faq.html",
    "revision": "ec4108edf090f743bc3b37781064fcb1"
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
    "revision": "d92cc69017044cc179bb5181bfccb769"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "06e6498d1334aa033ebdc2ff946ee1ed"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "b14a01a4110b914782b0b1916e840318"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "e55d74caad3f9144517a4d8fa0904e75"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "56987dcecc13b6bb5700b432fc635215"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "8cdfbaa983398c49df082808d728daab"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "26ec190e06580214d658676fc91b7070"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "f637ea93b57367a6f002807da6bbd2b8"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "6f07d906e8dcc4cfeea50379065f24cf"
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
