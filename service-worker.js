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
    "revision": "a89a78122f541ab9b4acd999cb3500ae"
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
    "url": "assets/js/16.1d2d0bc8.js",
    "revision": "c32d6e0324f2bd6be8246003bb0525ac"
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
    "url": "assets/js/2.d5cf4ffd.js",
    "revision": "850a946b8516176f35281bd4722edee1"
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
    "url": "assets/js/app.43dc3ec0.js",
    "revision": "9794b71504cd5d6fca658a1b1018cf93"
  },
  {
    "url": "compatibility.html",
    "revision": "9f267c3f18dd601782a38d85e68b351f"
  },
  {
    "url": "database.html",
    "revision": "b2918afb43ceff847a4fcf49e3c2b41a"
  },
  {
    "url": "example.html",
    "revision": "b93a8a7ab33f2aad2833b18c87c9f603"
  },
  {
    "url": "faq.html",
    "revision": "4fc27660ede5b2ce58f5e716ec9c53e1"
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
    "revision": "a8bae9cb7bb3b0c53908ee480938e678"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "6659f60ddb7325f184c3471b0813aefd"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "4f3f999deac33e4877c780cbcf6d597b"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "664996cb69ddc6218fba4d38bae0f900"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "f3ea03a3f9ef5edc60dbe6ea37044961"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "1be508b0e8d9985a88ed1682ad44130f"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "b87bb1d9544f6e21131eaf53435c8611"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "12c2b806f54ab66876a99e2531d4f271"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "73569a9eb27418fc37a353dfa1f6311f"
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
