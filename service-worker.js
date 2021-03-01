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
    "revision": "cea5b35b0ef22b4bf1c004ee9245e045"
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
    "url": "assets/js/app.6dc08713.js",
    "revision": "1faeaab5bcc0848d482a50aa9ac83b50"
  },
  {
    "url": "compatibility.html",
    "revision": "5f65105af6f7d6238b877dccee684801"
  },
  {
    "url": "database.html",
    "revision": "27dc923741f82b7e85191c0babb60cc9"
  },
  {
    "url": "example.html",
    "revision": "01f79bbb103a6a9b33b9a67ef57b4fee"
  },
  {
    "url": "faq.html",
    "revision": "4226f854008a7a5ecbe52e7e076b7e1c"
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
    "revision": "3968ee45ee6ae49d61e65dcb81eeb57c"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "e7a08586edf13781d328b450c0e7dcb4"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "72d1a474c0d24235540bcce757b0912e"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "2b275f561d3370e8f9e9413ab7029510"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "02ec8f54a653110c3c3dfa76401271d3"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "1d48a295172c82f0be570198adf90089"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "1d2654e071d8f54e28cfe1ccb30398fb"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "0bd4a403eacee8cfc620997562eb9360"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "3e9da62ef34c131e5f84090127cafc6a"
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
