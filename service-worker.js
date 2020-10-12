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
    "revision": "c9a827131bc119555ae31fb7a72f12b4"
  },
  {
    "url": "assets/css/0.styles.3a4f84e5.css",
    "revision": "d76243d8b640cae23a6fd2f19dcd45ce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2586540a.js",
    "revision": "433fc829a761035337377b869bfb21c3"
  },
  {
    "url": "assets/js/11.45892475.js",
    "revision": "3e7c4fd8e3b00d9ff6303d3011a84f82"
  },
  {
    "url": "assets/js/12.ea62e190.js",
    "revision": "137ef563f11a8cc107a5efb8fcf41712"
  },
  {
    "url": "assets/js/13.a96973ba.js",
    "revision": "ac0477a53cb24660499b6194a78f94f3"
  },
  {
    "url": "assets/js/14.4946e4e8.js",
    "revision": "fd02efac173170eebd9198f7c8877a43"
  },
  {
    "url": "assets/js/15.eba7f8a4.js",
    "revision": "ef5d9642f395047f2d7214e82f7ce453"
  },
  {
    "url": "assets/js/16.cc232356.js",
    "revision": "2e726e3ff42d7ff90fd21eec60120f8d"
  },
  {
    "url": "assets/js/17.034764f2.js",
    "revision": "d9476daf8d647a9b2c3f451a5f5ad4e1"
  },
  {
    "url": "assets/js/18.c68e7915.js",
    "revision": "ffca771022bcc58978d71434c581ab0f"
  },
  {
    "url": "assets/js/19.be6009f2.js",
    "revision": "0c69c7f4b695bfbe6bc50a08ad923969"
  },
  {
    "url": "assets/js/2.20574b20.js",
    "revision": "13d8754c4e98c7233293eef3d95b0e96"
  },
  {
    "url": "assets/js/20.c7aca552.js",
    "revision": "bff4b57b5d86e28bbe5948ac159c6d49"
  },
  {
    "url": "assets/js/21.84cb0532.js",
    "revision": "fbd3f3240208608376e98057778e037b"
  },
  {
    "url": "assets/js/22.de5c2b8a.js",
    "revision": "9fcae700776f29a5ca757d1069be671b"
  },
  {
    "url": "assets/js/3.92276b7a.js",
    "revision": "39ef29f7041a1b64e9c7240bc77e4462"
  },
  {
    "url": "assets/js/4.6ca33c85.js",
    "revision": "6f7a0f45d18e3785f17b9ee89e40f7e2"
  },
  {
    "url": "assets/js/5.b8d4242b.js",
    "revision": "a84eae3a06213e3ce0044c675a40a2b0"
  },
  {
    "url": "assets/js/6.8534bc23.js",
    "revision": "c37c1282a7c326bcc60d27f0f050dee7"
  },
  {
    "url": "assets/js/7.c4582533.js",
    "revision": "587160bd9aad854456fda6124d638858"
  },
  {
    "url": "assets/js/8.5f3e66b0.js",
    "revision": "9ba429cccb2d1607ec9a17965d70eb68"
  },
  {
    "url": "assets/js/9.e4b620a0.js",
    "revision": "9850ec083e3e99733238419aa8880ee3"
  },
  {
    "url": "assets/js/app.f5b739af.js",
    "revision": "da89b145b87c56113091ed1166bd70ad"
  },
  {
    "url": "compatibility.html",
    "revision": "5d363a47a97272a0fce4fa1b8dc73d3b"
  },
  {
    "url": "database.html",
    "revision": "dba573e63e260ae23398397e1f95fa07"
  },
  {
    "url": "example.html",
    "revision": "3ac070670e2c19425449278cec35f4eb"
  },
  {
    "url": "faq.html",
    "revision": "b56b492304e6eb6ee0f28a56d5d0d949"
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
    "revision": "c6c4de38ef49e5721a4d1182249b6c91"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "b5180e8716da13eec22a02bac6ed4e0b"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "f29a4e1e6964d623c239e65d4ffd3429"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "b7818d43275de51d1df37324b54137fc"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "1f63b35838a0505d9429e639be7c0b8c"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "8d0d67623c74a4a273ea67f4814180b3"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "0a1b01d49afa824586957a995962d8a6"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "95ac44bb591a1e2be9d12253630ba9ec"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "c35ea6c8acef3defd0feb5f541fc7dbc"
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
