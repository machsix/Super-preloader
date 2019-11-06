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
    "revision": "e59c19d677459ee3b1424a5c616d8238"
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
    "url": "assets/js/19.99dcfd3a.js",
    "revision": "5b1992ff044cb1613cdeeabc3333b4ee"
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
    "url": "assets/js/app.945e5898.js",
    "revision": "b11c9118fb27db3a06e573a5300f3941"
  },
  {
    "url": "compatibility.html",
    "revision": "6011db6a0eff8d4a46656a0812e3305c"
  },
  {
    "url": "database.html",
    "revision": "79251d7e7b53d561c86a922dc77faabd"
  },
  {
    "url": "develop.html",
    "revision": "535e4aea96ba7fbb1a45c51741c270ce"
  },
  {
    "url": "en/compatibility.html",
    "revision": "6b2410550f6ef7acd8188c132ef8d44d"
  },
  {
    "url": "en/database.html",
    "revision": "4c2fce19a77b0f14698eff837cdf4faf"
  },
  {
    "url": "en/example.html",
    "revision": "8ef03fa5e9072865b6ba14251df4723b"
  },
  {
    "url": "en/faq.html",
    "revision": "fd0cfc68811e43b4021b227ef96db4be"
  },
  {
    "url": "en/index.html",
    "revision": "2a10aa92cd25b65a3ad2dcf0967be333"
  },
  {
    "url": "en/siterule.html",
    "revision": "cfa1cf4e83b14fd34f5d0a8e41c0cc2b"
  },
  {
    "url": "example.html",
    "revision": "d2e27da4178d1f75f2a48f89c96b42b8"
  },
  {
    "url": "faq.html",
    "revision": "eb598ce296e46b501335c64935984e3e"
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
    "revision": "09112eada68098ddab77ea34c416f818"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "f3f0410900bea8ae45ed46865041574f"
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
