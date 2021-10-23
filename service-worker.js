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
    "revision": "71453223030b438d6dfc377ee14969c3"
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
    "url": "assets/js/11.b075c169.js",
    "revision": "4d601bc27c2b283e22d0dedb255d5356"
  },
  {
    "url": "assets/js/12.468ded80.js",
    "revision": "0e3b57f07e853463714c4ad57d687631"
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
    "url": "assets/js/18.7827687c.js",
    "revision": "2b4d1313af863b84f50e3333ccb2b974"
  },
  {
    "url": "assets/js/19.50334650.js",
    "revision": "ecdd3e5b4144c5bbb3b1d70f39775de0"
  },
  {
    "url": "assets/js/2.ed9de02a.js",
    "revision": "09adc1817bc809a13788e8c871b08102"
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
    "url": "assets/js/app.dc32b076.js",
    "revision": "279e81b390dca594c24bc6d52b001c6b"
  },
  {
    "url": "compatibility.html",
    "revision": "e12b948dc0718267bb7dea0b3399b0f8"
  },
  {
    "url": "database.html",
    "revision": "da09aebb817158e46c7bdb6742447b98"
  },
  {
    "url": "example.html",
    "revision": "4b04631fd2b748c27074b6f70192f4b3"
  },
  {
    "url": "faq.html",
    "revision": "30fb1a3d82f1d583f98b871673c221b4"
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
    "revision": "2dd1353d64ba02718d7b31707c673a7d"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "ad35c7ded84c4a3047b66585ccae37f9"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "3a45ac24612e25c7977d614778a46d0b"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "4792c6d51671bcab03975987abba0573"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "b616eba2dc9271807980ec51ba032975"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "367e94a9c7c9ce5832f8f370e190dbce"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "442eb911e4078800477e21c5b58655f9"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "244079e72cd63a83c2156114804459d8"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "14501fa4f21f8454a0f6645320e57f43"
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
