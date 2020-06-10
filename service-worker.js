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
    "revision": "4b80fc752946fece737a351928bf781f"
  },
  {
    "url": "assets/css/0.styles.8e18efa2.css",
    "revision": "f3e402134d50108b6a7f18a454d34186"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a9dc7fd0.js",
    "revision": "07886a52af8c7afbc0ff95533734885c"
  },
  {
    "url": "assets/js/11.7e1b6e6d.js",
    "revision": "32b1bbd3fa1f365b2a477ac47a40c292"
  },
  {
    "url": "assets/js/12.377897a5.js",
    "revision": "e043ab60b3bfbe9151a4031bad28b578"
  },
  {
    "url": "assets/js/13.47088db0.js",
    "revision": "20d7e4bad5194985a477f6ba766e233f"
  },
  {
    "url": "assets/js/14.7ce3eef3.js",
    "revision": "3bd5b0d0ce8d4db6638dddbd3ff27e0b"
  },
  {
    "url": "assets/js/15.94b07ec0.js",
    "revision": "fed8353e0fba4da21b2ea53852def253"
  },
  {
    "url": "assets/js/16.c1c8b265.js",
    "revision": "a508285ca431fe4c75a458734cd12a27"
  },
  {
    "url": "assets/js/17.2670703e.js",
    "revision": "7412f549d75e59818858d07cdf3bc363"
  },
  {
    "url": "assets/js/18.009e12f5.js",
    "revision": "d5ba7f6b034a7703c35c75abd73fdaf8"
  },
  {
    "url": "assets/js/19.b0c5a4f3.js",
    "revision": "ccab2e6300d1aab00942b6e89208e358"
  },
  {
    "url": "assets/js/2.b90ec73a.js",
    "revision": "105dc94b0d6f065efaf0f4148d5b1f86"
  },
  {
    "url": "assets/js/20.b6a7de35.js",
    "revision": "0d955dbe038b509d00532f1da939d0af"
  },
  {
    "url": "assets/js/3.5f43160c.js",
    "revision": "0321929cb096f705ae00d1f6b6a2a439"
  },
  {
    "url": "assets/js/4.2b3a9bae.js",
    "revision": "8bd3ac29079961d4ac3c80b6bc7616dc"
  },
  {
    "url": "assets/js/5.83aa522c.js",
    "revision": "0e780a07f0e678d08a85e0c36d33bcb9"
  },
  {
    "url": "assets/js/6.bb1c7e2c.js",
    "revision": "4a4c7fd8bd3fe76be421cffed5b2c929"
  },
  {
    "url": "assets/js/7.bbd2e97f.js",
    "revision": "a20014709ca577dc9375b2eb637a3629"
  },
  {
    "url": "assets/js/8.8a6e86fc.js",
    "revision": "086799c72704abe1a5d5a0cb9a22df5a"
  },
  {
    "url": "assets/js/9.4ae683b5.js",
    "revision": "9542e5203f05dae5a74777bc2ecacdda"
  },
  {
    "url": "assets/js/app.dbec6d46.js",
    "revision": "002e2b88562c453f4ab0a75d025e1b19"
  },
  {
    "url": "compatibility.html",
    "revision": "0aa64bf8fa57341669bb6ed8a3f8892f"
  },
  {
    "url": "database.html",
    "revision": "3e8b51aa9e3ab648b44992cf5a63d49e"
  },
  {
    "url": "example.html",
    "revision": "5fb63034aa24a61c7b3fa73282d87347"
  },
  {
    "url": "faq.html",
    "revision": "e15af7023320af1f467614cb830a2fa9"
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
    "revision": "6333668c71791ab9b30ac513175d6e12"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "b56e53a5e037ff66ca5b7291d9794a77"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "930b9d620a5fac03b1177386c32182f7"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "301ba73a19454163b828896cf803cf95"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "b7244dbce0bb552cf3cae153a98c5005"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "a5662f5d44f6b4ad90ba23adcb8427f7"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "8f8b2e3230f56e01bc2c0e4a9ad66a61"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "c25a78159a7764e0a9390da3f742cd84"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "7dd1fe9e1511f60f6ccc52617e29fca9"
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
