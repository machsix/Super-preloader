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
    "revision": "fed25cdd1dbdfaa631104caf0cbf6987"
  },
  {
    "url": "assets/css/0.styles.bb11dce1.css",
    "revision": "9f3fc3fb0704a53b32925e27b9ad893b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ecd7ccbc.js",
    "revision": "68c36fce1f18b83cb46d956d4ad194fd"
  },
  {
    "url": "assets/js/11.7ff09d53.js",
    "revision": "c410ad1e10d50e6dbff496dad75bc517"
  },
  {
    "url": "assets/js/12.fff8f93e.js",
    "revision": "13b98b43b5c6e5a547a96d2e049c8600"
  },
  {
    "url": "assets/js/13.1a836d48.js",
    "revision": "d10369c73965041e0bdb6a8955a1f0a1"
  },
  {
    "url": "assets/js/14.cd5b75c5.js",
    "revision": "81b3c6fe550f7168cb7f38d5ded0054c"
  },
  {
    "url": "assets/js/15.a27e443c.js",
    "revision": "3a850a5d598b2544706244acd3b0468d"
  },
  {
    "url": "assets/js/16.21eb0bfe.js",
    "revision": "58fe7db740bd57a6c9ab5f2a1680921b"
  },
  {
    "url": "assets/js/17.602ca022.js",
    "revision": "c92c79a5c4f64ced5efedab3c20e0285"
  },
  {
    "url": "assets/js/18.bcb64126.js",
    "revision": "0b70918c7d229784018229a6ab4d1072"
  },
  {
    "url": "assets/js/19.c2c16251.js",
    "revision": "22549d462e2abf9814d0dee1a2b3af73"
  },
  {
    "url": "assets/js/2.e29ad1b5.js",
    "revision": "ddf0c8cc7839517b7fd8c4d5bf6ef30a"
  },
  {
    "url": "assets/js/20.064a83ac.js",
    "revision": "3d43a51827a0f70dc1af9d799151d1a3"
  },
  {
    "url": "assets/js/21.2198b91c.js",
    "revision": "4eb4ea9e8ac54217e4e7c08fb109cc53"
  },
  {
    "url": "assets/js/22.f2f53bf9.js",
    "revision": "952fb86fb4454661c86b0d54bd9fc8a3"
  },
  {
    "url": "assets/js/3.747e84f8.js",
    "revision": "f9ae90dd1715f14dd13dfc42962188e8"
  },
  {
    "url": "assets/js/4.01bf0dfb.js",
    "revision": "435b8342edeac04be07534fb2c2a8da2"
  },
  {
    "url": "assets/js/5.88f15316.js",
    "revision": "d3645629dbfea910fd4eaf84a7c2417e"
  },
  {
    "url": "assets/js/6.ed18ae6b.js",
    "revision": "ea4c9d61bed9991b6eae2d5434812ca9"
  },
  {
    "url": "assets/js/7.18256823.js",
    "revision": "304031e66ae47e3c658995ce158ff34f"
  },
  {
    "url": "assets/js/8.c9a057bb.js",
    "revision": "c89fec77636eb50eb47ebd7c820e6d7f"
  },
  {
    "url": "assets/js/9.22eecc41.js",
    "revision": "da146ee5eb1dd051590e6e4178871e2f"
  },
  {
    "url": "assets/js/app.1fa2099d.js",
    "revision": "656b1f8f02d717f30538f6cd3dc42869"
  },
  {
    "url": "compatibility.html",
    "revision": "1e460f22b8158072819265c9485269ba"
  },
  {
    "url": "database.html",
    "revision": "8f9e70892306edf318ab790bc2b65ed1"
  },
  {
    "url": "example.html",
    "revision": "01647690184c17e707946f203b4e75e4"
  },
  {
    "url": "faq.html",
    "revision": "42e42336750d6137763df322888c847d"
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
    "revision": "c15b1730ae61a01be0cf7ae726b161d3"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "2eb28fc5d8295dfb7327d595b9f19b2c"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "aeba0557eaa2c281187334bd618b4a98"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "c0fc8d262eaff89bf1fc361c7dc047f5"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "e15eceae67588044eea258cf33b416cf"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "83ea452b34cf33648ec077a80a125a94"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "f69822374c11a9f41addc058c06cb23c"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "eefdd99afcf7c98cff3a752c641c4eb4"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "b4fb11ba19d3b6b7e15b54e2062f01e4"
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
