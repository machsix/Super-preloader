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
    "revision": "a1c589a7f6e74e9d888bb26fa82e1781"
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
    "url": "assets/js/10.5ea10ac4.js",
    "revision": "ae3e229a7b97f268b1cd114bbe508339"
  },
  {
    "url": "assets/js/11.eb161628.js",
    "revision": "38cfd83942407ae5b59e126583dad8fc"
  },
  {
    "url": "assets/js/12.a4b77d82.js",
    "revision": "1cfcaf7b2d360cbb257722bc12aa0462"
  },
  {
    "url": "assets/js/13.216fb132.js",
    "revision": "d11ded5018927c02593663a18a9c7342"
  },
  {
    "url": "assets/js/14.85bd7eb1.js",
    "revision": "ad7e6801907cb6a5e62e95f2273752a8"
  },
  {
    "url": "assets/js/15.61b22dff.js",
    "revision": "56ec9921dab1fa43de962f6aa7c5f044"
  },
  {
    "url": "assets/js/16.fd841f70.js",
    "revision": "59502ca6049bd2dde97cc6a482a1b02b"
  },
  {
    "url": "assets/js/17.1d92bdf9.js",
    "revision": "07b304e35cedf8edcb8d9e2833f93ef0"
  },
  {
    "url": "assets/js/18.90da6c73.js",
    "revision": "898142083f4e756e7e681142859df562"
  },
  {
    "url": "assets/js/19.f1a13863.js",
    "revision": "857ed57e16c0b0fb279da1e6a0ff1bb1"
  },
  {
    "url": "assets/js/2.a589e623.js",
    "revision": "de951490ef6fd9f14cfb1226c00a4f83"
  },
  {
    "url": "assets/js/20.7e43ef74.js",
    "revision": "a305e8db4bd56c149185e0c959a698a1"
  },
  {
    "url": "assets/js/21.77a1be60.js",
    "revision": "be7ec61b649c1a52c9f77713cd1ceb6a"
  },
  {
    "url": "assets/js/22.e9ceeaf2.js",
    "revision": "23c5ea04190af489c411237f6114ea0a"
  },
  {
    "url": "assets/js/3.4c5349c8.js",
    "revision": "4ab0b408cd6f446676d519620aa5bcd2"
  },
  {
    "url": "assets/js/4.5334722a.js",
    "revision": "1f769aa54482b9b74e304f8f662585e3"
  },
  {
    "url": "assets/js/5.b6e46a38.js",
    "revision": "95ca3fbcd897e35850c60ced9a8d2cb0"
  },
  {
    "url": "assets/js/6.a7471bc6.js",
    "revision": "7f9795cdda4c3a0086609e9d9a530304"
  },
  {
    "url": "assets/js/7.6068173f.js",
    "revision": "0822f409f6aaa112adc913a5d8c98204"
  },
  {
    "url": "assets/js/8.851416f5.js",
    "revision": "31ee23d9bba72c69fa9db5ebf02f47cb"
  },
  {
    "url": "assets/js/9.5f861492.js",
    "revision": "2fff3360c49f70b8ac082332e648695c"
  },
  {
    "url": "assets/js/app.79b837d5.js",
    "revision": "73c0e428ee03609e5804b4da5fc61381"
  },
  {
    "url": "compatibility.html",
    "revision": "c4f0172cd0da27d9b66edfa32119e156"
  },
  {
    "url": "database.html",
    "revision": "7914696012dcaf20c3975a8e8713dcec"
  },
  {
    "url": "example.html",
    "revision": "4bd0c3fd3b1940dd2f43c8906228b9c0"
  },
  {
    "url": "faq.html",
    "revision": "bd46a7c08f989abb308b09274296ff71"
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
    "revision": "e09a8a25e0f149f32eddeef736242ab5"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "c0032f4ffecdd1a5816f145e6e608123"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "0c6c337c1481646a1940c1a2b8dc7da9"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "0401f4b924284a1b0882eaf6b21079b3"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "3352c9c332d8129a6305d0a45d3685b1"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "9fbbad7548677211c8f55583ad94b07b"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "bd2e878013fc02f7d73000b9c4002439"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "c027df0c0e5444fe64d1be4845401d0c"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "61af753cfe55db9bc3f99a58cf11c8fe"
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
