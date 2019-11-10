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
    "revision": "3c646ac4d67bd1997514de2f9d88a72b"
  },
  {
    "url": "assets/css/0.styles.f839e6f0.css",
    "revision": "2552925582e7cc514182e4b4d7213dac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cdc2086c.js",
    "revision": "199d4bef55426129c7a1d16072051bc8"
  },
  {
    "url": "assets/js/11.e2e88021.js",
    "revision": "feb6b5ec52a2bff1c112a2a1739ff2e9"
  },
  {
    "url": "assets/js/12.55b797f3.js",
    "revision": "fc5767848e3f48aec475f9c6b0ca39be"
  },
  {
    "url": "assets/js/13.563f5702.js",
    "revision": "403fccb26ee6a5d495fa4bf976fa9c62"
  },
  {
    "url": "assets/js/14.01f53b50.js",
    "revision": "730fb50af7c87cd343f98a1a9439870d"
  },
  {
    "url": "assets/js/15.721225db.js",
    "revision": "794cadc4cc5d826e85fad87cb1774d45"
  },
  {
    "url": "assets/js/16.5349d1d1.js",
    "revision": "09e24329e5b2b63095396f4689e50825"
  },
  {
    "url": "assets/js/17.88df28ac.js",
    "revision": "fbcf51fbe4366cf53c40e64272fb66c3"
  },
  {
    "url": "assets/js/18.2e49bace.js",
    "revision": "f0228409427fedf5985e354d9e87c2eb"
  },
  {
    "url": "assets/js/19.7d926eac.js",
    "revision": "9b982150e3451d77a7de5e2b770381da"
  },
  {
    "url": "assets/js/2.4c7c9d7d.js",
    "revision": "dea22dd84a01e7cc8d33b8a60cf30eac"
  },
  {
    "url": "assets/js/20.566cf8e5.js",
    "revision": "60b5f019772c818f226570a0ece129d5"
  },
  {
    "url": "assets/js/3.7119df21.js",
    "revision": "e5a8337eb19c3d98c6403ddf00394dea"
  },
  {
    "url": "assets/js/4.77b52ae4.js",
    "revision": "0b1aef2d1b95d9f25e74ae01e4025b11"
  },
  {
    "url": "assets/js/5.5d39f307.js",
    "revision": "893244a7029d522627aecca49537185d"
  },
  {
    "url": "assets/js/6.4c428064.js",
    "revision": "67d6cc0516a12eafaa53f4379046af1b"
  },
  {
    "url": "assets/js/7.07f3de77.js",
    "revision": "1724e2b7b8541ce4536352c7a32e655f"
  },
  {
    "url": "assets/js/8.ee9e683e.js",
    "revision": "febad21057a703276c614d00adf4b730"
  },
  {
    "url": "assets/js/9.0a25ceb3.js",
    "revision": "c641ae2381d0212494e726dea45f05f5"
  },
  {
    "url": "assets/js/app.577fd43b.js",
    "revision": "a75378e160114bd84af7d29686326f2a"
  },
  {
    "url": "compatibility.html",
    "revision": "e33c24b823a0574cb29e1c2a9dd28ff1"
  },
  {
    "url": "database.html",
    "revision": "1bf80eb4b33997b6c881eaeab36130b9"
  },
  {
    "url": "develop.html",
    "revision": "01fc62d5a7b0d1fd414c033276e054fc"
  },
  {
    "url": "en/compatibility.html",
    "revision": "0349a95576c1a2904ec92e7ab7b65ba8"
  },
  {
    "url": "en/database.html",
    "revision": "35ad81e1a5195bad3ce60653d39c2d02"
  },
  {
    "url": "en/example.html",
    "revision": "c1d6bbf482dbd160b95e5d3d13f6672c"
  },
  {
    "url": "en/faq.html",
    "revision": "173d78bbdfc8741b805f5d74c1af9523"
  },
  {
    "url": "en/index.html",
    "revision": "a54fcc8ec53b385fa43d200f71e32086"
  },
  {
    "url": "en/siterule.html",
    "revision": "a0e4044f0c07df4040482e75a92855de"
  },
  {
    "url": "example.html",
    "revision": "a03b0bebd2b760cf6a32b975cb60f725"
  },
  {
    "url": "faq.html",
    "revision": "e48797f705cc7e01ae28f8c4139384cd"
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
    "revision": "7f73c8924775f7a07546454718e0cd8b"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "cd6dfa5a60fcb869acb585994eb77119"
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
