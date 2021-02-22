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
    "revision": "835f83f83793a7bdeee548f83fdbaff7"
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
    "url": "assets/js/10.0a83beaf.js",
    "revision": "f9b3d773c8c81130199b19d33d923bd0"
  },
  {
    "url": "assets/js/11.0ddada8b.js",
    "revision": "493c109a4bd2da1ed6cae6011d1f5d34"
  },
  {
    "url": "assets/js/12.280a0886.js",
    "revision": "5b66f5f383c2b8521c8688e86d15d558"
  },
  {
    "url": "assets/js/13.e896c7eb.js",
    "revision": "7229a797b412ba92161531f59a150814"
  },
  {
    "url": "assets/js/14.71c854fa.js",
    "revision": "e2f49064773afc2cc9c5a1dbed096bb1"
  },
  {
    "url": "assets/js/15.3d5bff30.js",
    "revision": "fe655d94cfd846ba8840e5a69e8f42b2"
  },
  {
    "url": "assets/js/16.09ba87e2.js",
    "revision": "72461ca70813d165436b72a4868856c5"
  },
  {
    "url": "assets/js/17.f74eb1b9.js",
    "revision": "147ac7dbb55dfc4db65d4cd0772a2288"
  },
  {
    "url": "assets/js/18.de13fa21.js",
    "revision": "f836d8ef75e6605fe65be69c2b25c368"
  },
  {
    "url": "assets/js/19.8030d9bf.js",
    "revision": "882c63a3819fbe51b9055aaa193ab93f"
  },
  {
    "url": "assets/js/2.ca389e73.js",
    "revision": "a896354d222bfd27a8c9a455bd5ef529"
  },
  {
    "url": "assets/js/20.97316711.js",
    "revision": "ec91f2e243a65232580b5e4a111e8ad9"
  },
  {
    "url": "assets/js/21.38b20a3b.js",
    "revision": "f52503de61114f9ef9c0df9f8a9c2bc6"
  },
  {
    "url": "assets/js/22.e9ceeaf2.js",
    "revision": "23c5ea04190af489c411237f6114ea0a"
  },
  {
    "url": "assets/js/3.664b9939.js",
    "revision": "8b8d85d4677cb96c2a9ab7997f0b4550"
  },
  {
    "url": "assets/js/4.85434641.js",
    "revision": "20c20bc49ce337095b884f6219830a31"
  },
  {
    "url": "assets/js/5.b044a014.js",
    "revision": "1f63b61f63ba3345d8a4e960bdb878e3"
  },
  {
    "url": "assets/js/6.17053834.js",
    "revision": "4ee3c8aebf721a1e37979b961f6113ab"
  },
  {
    "url": "assets/js/7.43e43cde.js",
    "revision": "70b0cd6d1e7a2cf7738b8949a890c628"
  },
  {
    "url": "assets/js/8.e740cf44.js",
    "revision": "23a4bc59d7a9beb02378af6cd2808c2d"
  },
  {
    "url": "assets/js/9.9d7b8642.js",
    "revision": "2d74665320bd81225cd9d5807fc5915c"
  },
  {
    "url": "assets/js/app.af8423bb.js",
    "revision": "b804b7c2191558a096c8a985968e4f39"
  },
  {
    "url": "compatibility.html",
    "revision": "e8efc4f581b01960f2aab0c0c0d79473"
  },
  {
    "url": "database.html",
    "revision": "776486b8d115e6d993fdf1a9efe373cd"
  },
  {
    "url": "example.html",
    "revision": "10bf7012b72b418db7ecfaa85b6dd437"
  },
  {
    "url": "faq.html",
    "revision": "db4cade16700ebdedd95be2e4dc9cb4c"
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
    "revision": "9579303deb5c956f9fa5dff33657f54f"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "063b715098ad93fd970d7eb0db2f00c9"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "048fc0d3653c5c6888b06ae828e4c046"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "539425622b4ba3c9956ee547112f4512"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "ae5339795a9a0a477692db383f2502f4"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "faf3b98cf8d55f9cca2542441f457c34"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "58616f57bdce6694cd1be32dbaaef0b6"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "cfd72eb7b7b7bd62667ea64955f72843"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "5fafee63acb694afc808e9ee629b095b"
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
