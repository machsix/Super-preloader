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
    "revision": "fbcc1c714f8a4321120caa52b74cb6f4"
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
    "url": "assets/js/10.5688c30d.js",
    "revision": "ee082dd316edba30fd0705909cbb6105"
  },
  {
    "url": "assets/js/11.d93de129.js",
    "revision": "ee78cb3f11212c4f5d0a637c5f33be29"
  },
  {
    "url": "assets/js/12.dd6d84c7.js",
    "revision": "9ae3492759125ba97afac9f506fef4da"
  },
  {
    "url": "assets/js/13.901d72d2.js",
    "revision": "16ecc0cece9e68c87c3ba49a6c02ecbf"
  },
  {
    "url": "assets/js/14.0e6da566.js",
    "revision": "1692e0f2016d78b23b33a2907fe3cf48"
  },
  {
    "url": "assets/js/15.769b1864.js",
    "revision": "a4f3c09f9011cd3709eb03282346a90d"
  },
  {
    "url": "assets/js/16.ae35b63a.js",
    "revision": "3384c0d8956d4a4e27c595d2a7e8278a"
  },
  {
    "url": "assets/js/17.2074e447.js",
    "revision": "90314b962d5cc3c01bd41add73ad3075"
  },
  {
    "url": "assets/js/18.58773f09.js",
    "revision": "39398f8a63e39e838a6e965e4d99622e"
  },
  {
    "url": "assets/js/19.e3ea2983.js",
    "revision": "270f1f1f621a8b52fd1068a191578063"
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
    "url": "assets/js/7.a8820c44.js",
    "revision": "9c906d751b88f6cf82a3fb55b5e40aed"
  },
  {
    "url": "assets/js/8.733578d7.js",
    "revision": "33e4fef56fd50c1cfede526d342901d5"
  },
  {
    "url": "assets/js/9.0a8a16cd.js",
    "revision": "3a389467881bc7001f9519cfd700b845"
  },
  {
    "url": "assets/js/app.75e939a4.js",
    "revision": "e2d19f8b83bd361d78e0297fd51ad09b"
  },
  {
    "url": "compatibility.html",
    "revision": "0751305704afe0e4f2225d1180cbdf47"
  },
  {
    "url": "database.html",
    "revision": "e256144d852d0ba444a32309950d3f29"
  },
  {
    "url": "develop.html",
    "revision": "d1fd438a24049f3f8cc6eb86affe1564"
  },
  {
    "url": "en/compatibility.html",
    "revision": "bbfc3aabd434271f546701e3f633b96a"
  },
  {
    "url": "en/database.html",
    "revision": "d74d870761427ed01d931e1264bfe83e"
  },
  {
    "url": "en/example.html",
    "revision": "9f0308770b047784f55de19801b6d1e5"
  },
  {
    "url": "en/faq.html",
    "revision": "e5fa2e2bebbf1295d0196ae2348ff816"
  },
  {
    "url": "en/index.html",
    "revision": "a7638f3cf276ac978ef079ab797becbb"
  },
  {
    "url": "en/siterule.html",
    "revision": "efa0894870a0fa97db16faa1e196662b"
  },
  {
    "url": "example.html",
    "revision": "db210f70acfb5612277365ddad3f7b7c"
  },
  {
    "url": "faq.html",
    "revision": "710ab1f05e242d7e9c8d7684c410e7fb"
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
    "revision": "e8bd9d797f9686f966b0d5f8217acaaa"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "70390401b240f4187deecac55312f099"
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
