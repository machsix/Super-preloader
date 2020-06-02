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
    "revision": "cdd54d46298341edab80ab0b8c986d76"
  },
  {
    "url": "assets/css/0.styles.7ca9da9a.css",
    "revision": "f3e402134d50108b6a7f18a454d34186"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a67a3e0e.js",
    "revision": "07886a52af8c7afbc0ff95533734885c"
  },
  {
    "url": "assets/js/11.7fb7366f.js",
    "revision": "44eb72303c7ec7967bc6998e3255fea9"
  },
  {
    "url": "assets/js/12.673164de.js",
    "revision": "c9c4cb22b56f7fcf03963dd964f6bb3c"
  },
  {
    "url": "assets/js/13.158535f7.js",
    "revision": "20d7e4bad5194985a477f6ba766e233f"
  },
  {
    "url": "assets/js/14.bced1220.js",
    "revision": "3bd5b0d0ce8d4db6638dddbd3ff27e0b"
  },
  {
    "url": "assets/js/15.249b41b9.js",
    "revision": "fed8353e0fba4da21b2ea53852def253"
  },
  {
    "url": "assets/js/16.61e12820.js",
    "revision": "a508285ca431fe4c75a458734cd12a27"
  },
  {
    "url": "assets/js/17.2febd8b8.js",
    "revision": "7412f549d75e59818858d07cdf3bc363"
  },
  {
    "url": "assets/js/18.75638051.js",
    "revision": "d5ba7f6b034a7703c35c75abd73fdaf8"
  },
  {
    "url": "assets/js/19.14f6201d.js",
    "revision": "ccab2e6300d1aab00942b6e89208e358"
  },
  {
    "url": "assets/js/2.1bb4db3a.js",
    "revision": "105dc94b0d6f065efaf0f4148d5b1f86"
  },
  {
    "url": "assets/js/20.04fb2fdb.js",
    "revision": "0d955dbe038b509d00532f1da939d0af"
  },
  {
    "url": "assets/js/3.def2b59c.js",
    "revision": "0321929cb096f705ae00d1f6b6a2a439"
  },
  {
    "url": "assets/js/4.cf914563.js",
    "revision": "8bd3ac29079961d4ac3c80b6bc7616dc"
  },
  {
    "url": "assets/js/5.e07ab693.js",
    "revision": "0e780a07f0e678d08a85e0c36d33bcb9"
  },
  {
    "url": "assets/js/6.77ab386e.js",
    "revision": "4a4c7fd8bd3fe76be421cffed5b2c929"
  },
  {
    "url": "assets/js/7.342e48be.js",
    "revision": "de2409efd48037f0229c6c49d0cb6984"
  },
  {
    "url": "assets/js/8.1f86dd25.js",
    "revision": "086799c72704abe1a5d5a0cb9a22df5a"
  },
  {
    "url": "assets/js/9.e1e3bc04.js",
    "revision": "9542e5203f05dae5a74777bc2ecacdda"
  },
  {
    "url": "assets/js/app.0de662c8.js",
    "revision": "da5d0f604b67a349f582487a7aa9077a"
  },
  {
    "url": "compatibility.html",
    "revision": "37a7abd090197830aee479e1a9ac1f27"
  },
  {
    "url": "database.html",
    "revision": "2f114bd83d4521232f78160e20b544b4"
  },
  {
    "url": "example.html",
    "revision": "845da6083d93d80d1dea955f809c6cdb"
  },
  {
    "url": "faq.html",
    "revision": "ba52d6730cbae6d3b857faf7d65d6229"
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
    "revision": "d7ca6121f585f8a92ee1a48ffe8f074f"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "50fdd33d410e5b57ae6eca83f7943c1e"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "3041b5e5579b4b0218a0578140d892eb"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "56a527aabf20796e31438cbe1ee61495"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "5290d217cacb690ce447496b40928d13"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "d0e7f1b86e039e973f1efdd38bb6bdbf"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "db3b78876c5d0c90c881a2a3bedb65fa"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "f63cb856a5b477b3c65e8e9aea7fc1f3"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "ae5abcada25313286e7a9a1e29e94fb7"
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
