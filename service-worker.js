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
    "revision": "fe20d4ad9703b5a6924862dd69739412"
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
    "url": "assets/js/10.3f62bfec.js",
    "revision": "68c36fce1f18b83cb46d956d4ad194fd"
  },
  {
    "url": "assets/js/11.69728ac6.js",
    "revision": "c410ad1e10d50e6dbff496dad75bc517"
  },
  {
    "url": "assets/js/12.fcfc60e2.js",
    "revision": "13b98b43b5c6e5a547a96d2e049c8600"
  },
  {
    "url": "assets/js/13.ca6a26ed.js",
    "revision": "d10369c73965041e0bdb6a8955a1f0a1"
  },
  {
    "url": "assets/js/14.f431015b.js",
    "revision": "81b3c6fe550f7168cb7f38d5ded0054c"
  },
  {
    "url": "assets/js/15.3e0a2f9c.js",
    "revision": "3a850a5d598b2544706244acd3b0468d"
  },
  {
    "url": "assets/js/16.5bb28f40.js",
    "revision": "58fe7db740bd57a6c9ab5f2a1680921b"
  },
  {
    "url": "assets/js/17.baeb69c1.js",
    "revision": "c92c79a5c4f64ced5efedab3c20e0285"
  },
  {
    "url": "assets/js/18.37586d97.js",
    "revision": "e3265e0f8d4cc2ed003b6fe496637fef"
  },
  {
    "url": "assets/js/19.3497fff2.js",
    "revision": "857ed57e16c0b0fb279da1e6a0ff1bb1"
  },
  {
    "url": "assets/js/2.a073ff4a.js",
    "revision": "bdea0c506b60fc38246c9994663b64a4"
  },
  {
    "url": "assets/js/20.8b0b5fd9.js",
    "revision": "3d43a51827a0f70dc1af9d799151d1a3"
  },
  {
    "url": "assets/js/21.80ca5e6e.js",
    "revision": "4eb4ea9e8ac54217e4e7c08fb109cc53"
  },
  {
    "url": "assets/js/22.f2f53bf9.js",
    "revision": "952fb86fb4454661c86b0d54bd9fc8a3"
  },
  {
    "url": "assets/js/3.99786f2f.js",
    "revision": "f9ae90dd1715f14dd13dfc42962188e8"
  },
  {
    "url": "assets/js/4.01bf0dfb.js",
    "revision": "435b8342edeac04be07534fb2c2a8da2"
  },
  {
    "url": "assets/js/5.507ae5fb.js",
    "revision": "4f175600c73786b247b401698c698f38"
  },
  {
    "url": "assets/js/6.52660851.js",
    "revision": "c8c45463f23c39b8b71c08a064e20707"
  },
  {
    "url": "assets/js/7.84d48430.js",
    "revision": "304031e66ae47e3c658995ce158ff34f"
  },
  {
    "url": "assets/js/8.0155ddc8.js",
    "revision": "c89fec77636eb50eb47ebd7c820e6d7f"
  },
  {
    "url": "assets/js/9.8c41044f.js",
    "revision": "da146ee5eb1dd051590e6e4178871e2f"
  },
  {
    "url": "assets/js/app.72eb2779.js",
    "revision": "55db36578bdd810dd905574996c08147"
  },
  {
    "url": "compatibility.html",
    "revision": "1f58f96cc994ae76e818a4fb2c5667c6"
  },
  {
    "url": "database.html",
    "revision": "b2ffbaf6583af748f13f86456ac37227"
  },
  {
    "url": "example.html",
    "revision": "d68ca6668925a0078f63db343fdc11dd"
  },
  {
    "url": "faq.html",
    "revision": "1fd928dc6333e9e82d0a9ff049f87183"
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
    "revision": "ea71ee0b33ad1dd0c76ca555379c23d0"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "8ea708df75b9c6536a78ed3b38ed6227"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "f5ab512c641fd70a854d7f3fbd1ddebc"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "f0067799b502fd38852cc08e699aa66d"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "be5b64465df4271c645c9b638fe2a0bc"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "0eaa6b0c8f0069dd8d834fbfb563f8e2"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "8a15862ef734ed1c2b6d6eae2f3f504d"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "cbb20a428f9655f089c4072599fdb10e"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "588b3ab1cd6ba05ce3c53efe3b8cd9ea"
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
