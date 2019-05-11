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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f2e7d106c77e4c829167bb6018d63f41"
  },
  {
    "url": "assets/css/0.styles.20b4f909.css",
    "revision": "18451d07b845d6190d6aaf807f1abbc6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2755c542.js",
    "revision": "8858bbbce9580117bd51f2a4335d4d32"
  },
  {
    "url": "assets/js/11.5163e52c.js",
    "revision": "f0df2a87251439e2b270fd65f598fe2e"
  },
  {
    "url": "assets/js/12.42f36e67.js",
    "revision": "01ebc37b6d6213b99f86ae955351fec2"
  },
  {
    "url": "assets/js/13.925ee8a8.js",
    "revision": "96abf5468d24c21e46a2d3654457a4c1"
  },
  {
    "url": "assets/js/14.f06b4079.js",
    "revision": "46f04ffe57210ffa6abeff22ae485580"
  },
  {
    "url": "assets/js/15.418e6c4e.js",
    "revision": "b00fbfaa05ac19fa15582ea576fad787"
  },
  {
    "url": "assets/js/16.db6c2deb.js",
    "revision": "a95966dacbd4312399f37558613552ea"
  },
  {
    "url": "assets/js/17.f748c2ff.js",
    "revision": "8e9bd704bb439ca56135393a97c056df"
  },
  {
    "url": "assets/js/18.d8dce9c3.js",
    "revision": "54cacd75d13e776f25581a7960553ac8"
  },
  {
    "url": "assets/js/19.6fbdf4e4.js",
    "revision": "bfd74de4a8ca913ac5c28443add6f5c2"
  },
  {
    "url": "assets/js/2.64642363.js",
    "revision": "c732ae8697d3c1d27d6ae65b931ab3ea"
  },
  {
    "url": "assets/js/20.f53307fb.js",
    "revision": "ae529e4d6c333ae4e8ca48f21471ab21"
  },
  {
    "url": "assets/js/3.8d70f66c.js",
    "revision": "0b4ff0749fae9dda736f354fb20935cf"
  },
  {
    "url": "assets/js/4.95314fa8.js",
    "revision": "4757d8e8d1621b9626e4589edf8bf178"
  },
  {
    "url": "assets/js/5.88f54ffa.js",
    "revision": "01cce5482ca0316812b8f5e53e5fe0e4"
  },
  {
    "url": "assets/js/6.52049387.js",
    "revision": "cef6e763d2558a5e073197a73e53182c"
  },
  {
    "url": "assets/js/7.bd9bb518.js",
    "revision": "9d06fbdc487315fa54a4340256a40647"
  },
  {
    "url": "assets/js/8.2355e388.js",
    "revision": "78ed18218a7a7608dd5a6f5598408572"
  },
  {
    "url": "assets/js/9.36f627b4.js",
    "revision": "2279502b0e12559b6f5f211906a0d67a"
  },
  {
    "url": "assets/js/app.4b01aea0.js",
    "revision": "3155f88b4138432590b75c757e336dd3"
  },
  {
    "url": "compatibility.html",
    "revision": "2dd0463a603834ae83127b13c03724ed"
  },
  {
    "url": "database.html",
    "revision": "618b9ac5ecb735a4b722e39a6c25db42"
  },
  {
    "url": "develop.html",
    "revision": "7a69530f1f1e8bacded6729df17ae3a2"
  },
  {
    "url": "en/compatibility.html",
    "revision": "6f78f892bd6f05e4b06ae245236d7e07"
  },
  {
    "url": "en/database.html",
    "revision": "a34992ff1db993693735eafc51b2e81a"
  },
  {
    "url": "en/example.html",
    "revision": "952e6549d0859de9bcf22a95e6927e2a"
  },
  {
    "url": "en/faq.html",
    "revision": "2982858f665c7d46e900900ccdcb379f"
  },
  {
    "url": "en/index.html",
    "revision": "aa45778303799edb211fe12292e75949"
  },
  {
    "url": "en/siterule.html",
    "revision": "3db7d772f577d33c71b5a7aef82a55af"
  },
  {
    "url": "example.html",
    "revision": "b8b568cac107f2d56256bafbf1956a6a"
  },
  {
    "url": "faq.html",
    "revision": "aaae141ce42cd8b905cc616b500f9b67"
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
    "revision": "e42089015dea7b9d607f8c99d898c1e7"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "62319bf2165192485dd55bb5ed638aa1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
