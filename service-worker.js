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
    "revision": "7f172b60e79afe537b9091c2a008da7d"
  },
  {
    "url": "assets/css/0.styles.9b35ead6.css",
    "revision": "d3a9f60df6e1cbd94bd35f4ac4f04b51"
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
    "url": "assets/js/11.2cb52252.js",
    "revision": "d7e0cccebe27cba636fd4274cee8d2a2"
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
    "url": "assets/js/14.81357118.js",
    "revision": "f9896bf0ac6b7359c5a24d781515d1b5"
  },
  {
    "url": "assets/js/15.beb12479.js",
    "revision": "6d1cf962ef49334fd53bb9c036b2b602"
  },
  {
    "url": "assets/js/16.98eb8d75.js",
    "revision": "251e53f45c99db60d1f2673a674b4496"
  },
  {
    "url": "assets/js/17.cf978985.js",
    "revision": "714c2bf1210d4595a5e7c8952e3b658b"
  },
  {
    "url": "assets/js/18.456a650c.js",
    "revision": "b4932517760d4d188e298598c8499f40"
  },
  {
    "url": "assets/js/19.cfda4e3f.js",
    "revision": "72ab48852a090e77c6adc953e61e70aa"
  },
  {
    "url": "assets/js/2.ed9de02a.js",
    "revision": "09adc1817bc809a13788e8c871b08102"
  },
  {
    "url": "assets/js/20.5e4cc3ea.js",
    "revision": "4f13ce10c3eee94090dbb3e2b6e363f6"
  },
  {
    "url": "assets/js/21.eca8899e.js",
    "revision": "c52b64a76bb2466ff416ed42a4f1135e"
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
    "url": "assets/js/6.00d8ae34.js",
    "revision": "2418a07122b30c328501b179b0c6ff0b"
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
    "url": "assets/js/app.7d51edd1.js",
    "revision": "ef21bbbf5c360d7c9d02eeb86e29b111"
  },
  {
    "url": "compatibility.html",
    "revision": "62a688c7ee942ef764473ac3d63b7def"
  },
  {
    "url": "database.html",
    "revision": "5f73fd5a3d3e02e3e76915d232b30b05"
  },
  {
    "url": "example.html",
    "revision": "9ff768ca5aafc246e781ee3ea4ac52fc"
  },
  {
    "url": "faq.html",
    "revision": "30ff6aa4bec6aa51a6718b0f06df827a"
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
    "revision": "e653e33523eba368dde624a7794dccd3"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "d74a155215399b7c46b9353cdbb76838"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "d8aa6f4a6b16ba71011d0b38d2165fb6"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "5f664f714f196f34e4378e6a98f8ab4e"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "06b8ca9027abfb045dc5392ebb6d8310"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "f793da2a6e4338a24158d70f7386a710"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "b0cf8dc85d08d2bb6653add62a2c2f35"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "70580e3d5b85bda62e858e793f3b57b8"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "bd28f1b7d41c4a4f2f85e86e6a197a75"
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
