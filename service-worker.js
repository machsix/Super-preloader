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
    "revision": "415a35757c039dbd3a4fa13be49121e6"
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
    "url": "assets/js/11.ae5d2b94.js",
    "revision": "de7bf88f944ee6babd677a85c7a6cc32"
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
    "url": "assets/js/7.68295263.js",
    "revision": "ca1f2869364971d993fb1f16fa30da48"
  },
  {
    "url": "assets/js/8.2355e388.js",
    "revision": "78ed18218a7a7608dd5a6f5598408572"
  },
  {
    "url": "assets/js/9.53d3420d.js",
    "revision": "6725b5655211a73516fd384ba7fd29ec"
  },
  {
    "url": "assets/js/app.3a28375a.js",
    "revision": "1b594d44169ff649547b9d1ee61cf6c3"
  },
  {
    "url": "compatibility.html",
    "revision": "8dac1e15225ca6bc201848832520704d"
  },
  {
    "url": "database.html",
    "revision": "aef0c4dee1f2112d2c16444fe4035a07"
  },
  {
    "url": "develop.html",
    "revision": "61ad3eea62ef80231b8e0509c055c88b"
  },
  {
    "url": "en/compatibility.html",
    "revision": "ea6e26642c60e4df8f27aef9d2b3aba1"
  },
  {
    "url": "en/database.html",
    "revision": "450119d0be41f75a1b5fba1b574fa4f0"
  },
  {
    "url": "en/example.html",
    "revision": "bf836ad483c0cfa5eb5efccb566910ee"
  },
  {
    "url": "en/faq.html",
    "revision": "3a3a67465baa46cdceda0af2af4a8175"
  },
  {
    "url": "en/index.html",
    "revision": "b69a18570f8c57eef2af6d667fd6d1c8"
  },
  {
    "url": "en/siterule.html",
    "revision": "2234db66e5ee9d9fdd5137cfefafa1d5"
  },
  {
    "url": "example.html",
    "revision": "d7b979e5b8cf03c7597cdf8b7b31c232"
  },
  {
    "url": "faq.html",
    "revision": "24e75a6ef6aafb9a83fc78559824385f"
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
    "revision": "1f9de865bf2dd54934adbb46abdf1be1"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "bba1cda579a0a2615c93bbc73bce8055"
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
