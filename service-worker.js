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
    "revision": "5fcf8a79e5662574b166b22678fc4101"
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
    "url": "assets/js/app.90fc1c83.js",
    "revision": "c1ae0e9d7cb5fa4a129429f09cef288e"
  },
  {
    "url": "compatibility.html",
    "revision": "98659eaab3e9dc142f9551106e3bdd74"
  },
  {
    "url": "database.html",
    "revision": "9391313ee2a6608201f905bd29cdec6f"
  },
  {
    "url": "example.html",
    "revision": "bf8f72b085bdb8074db5ee7dc4a780a1"
  },
  {
    "url": "faq.html",
    "revision": "2187e0b7195da1b806523bc705d02023"
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
    "revision": "3da7b605f2e3fe905ace14cc203ed210"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "044f03184583f84642274e2f9ca622f0"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "736522ab0da42fb4b1bbb68ac1acdef0"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "a7b61a4eaffa99e22d21ef49dc0ef98c"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "694ffedc2f98c916a5037667cf5d4aea"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "fdc9ce7e62b518cfffac8316db6b9b37"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "ced3ce04a277efc578f2378c6ae8429a"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "cbc539b3a9f678f8dc1838793924219d"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "e79e4a17e727f997158a257ab4dbe38b"
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
