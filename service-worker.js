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
    "revision": "953d1260bd286c0ba485608f3852cfbc"
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
    "url": "assets/js/10.68c18b9e.js",
    "revision": "40648c9b4c9968698a067ae044ab4354"
  },
  {
    "url": "assets/js/11.5226c72c.js",
    "revision": "ff44a09ab862721b05163ce1ea5e0d5b"
  },
  {
    "url": "assets/js/12.7e1b3fe6.js",
    "revision": "b82979712206dff721e4064872849ca9"
  },
  {
    "url": "assets/js/13.c5fd367a.js",
    "revision": "dd465176004d1e41d3b3310440ff6faf"
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
    "url": "assets/js/9.8c895b4e.js",
    "revision": "791f822cce7d3e69bb9705a296d256b1"
  },
  {
    "url": "assets/js/app.c2adbe64.js",
    "revision": "cd9107bd1a793505884542f783cd77d3"
  },
  {
    "url": "compatibility.html",
    "revision": "92385c6cfcbcf7ae89bd00b398af1183"
  },
  {
    "url": "database.html",
    "revision": "ced77d0c2120af2f338d783023f51355"
  },
  {
    "url": "example.html",
    "revision": "0355478b6b66c52a8e16d6948ddd0647"
  },
  {
    "url": "faq.html",
    "revision": "a0e87f7dab5d3648549dc63534a5714f"
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
    "revision": "a6a669d74131be87c02a24a14d7d8a14"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "e74b0eccc055e922b7f9148631ae78f2"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "902a5ad71374d77f61471da43c767473"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "11f73d94237e83b372cb8280cd7b086b"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "000b9a2b882bb6c5fa5b8755d05fe24b"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "84c0c7c84b29bc56fd3cea5ecaf9b8e2"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "60d4172e539fdea452ba0069e61c1274"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "6f58ba8a907ad2df39c8b639f48668ed"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "ea9de98b643cf16ea57936b06e259f5e"
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
