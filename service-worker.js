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
    "revision": "8461d9aa4070c0b07e74660828f4a934"
  },
  {
    "url": "assets/css/0.styles.a5636e7a.css",
    "revision": "47ad92bb4e1910bf8a121d88f708f9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.71be828d.js",
    "revision": "093eedeb69737e1fa45b27d7db7c0ca3"
  },
  {
    "url": "assets/js/11.e816ae5c.js",
    "revision": "15b230a780cfee86ae8027d05692928e"
  },
  {
    "url": "assets/js/12.6c7ff04f.js",
    "revision": "ad6704f3dd6396c22160384de864a0f2"
  },
  {
    "url": "assets/js/13.ce91a2c2.js",
    "revision": "9b2c0862c5e96594eec8948bd314c1a9"
  },
  {
    "url": "assets/js/14.b4a98b28.js",
    "revision": "6cae60e1371f89fbc1232de40cc484e0"
  },
  {
    "url": "assets/js/15.2d9d4300.js",
    "revision": "04da3fa6d6cd9703535153b28e1d4e25"
  },
  {
    "url": "assets/js/16.01628fe5.js",
    "revision": "75ff7750a068e08310acd36959fae959"
  },
  {
    "url": "assets/js/17.1bd24753.js",
    "revision": "9ce1900962be94dde2d54119234619d2"
  },
  {
    "url": "assets/js/18.c23a224e.js",
    "revision": "a31fc85200443cf2faf9caa0b5ce31aa"
  },
  {
    "url": "assets/js/19.0e63e505.js",
    "revision": "b9bc10b99d2629467dfba05f0c09978e"
  },
  {
    "url": "assets/js/2.cc2f5afb.js",
    "revision": "0deb0e4b3085f7e6802bafc056610ee2"
  },
  {
    "url": "assets/js/20.a16aea1c.js",
    "revision": "55dc247961f93b76ab3d76f7255b5806"
  },
  {
    "url": "assets/js/3.66ae63e9.js",
    "revision": "16240fa4969a41682ae2d20f5b793a31"
  },
  {
    "url": "assets/js/4.7116040e.js",
    "revision": "a8dabba7705b71a60d1d88474014c8ca"
  },
  {
    "url": "assets/js/5.ad056de0.js",
    "revision": "a844d2119bf41742609998dd4f030a06"
  },
  {
    "url": "assets/js/6.b34f0915.js",
    "revision": "827e3c5c0e9fd36173da20408e16ac77"
  },
  {
    "url": "assets/js/7.99163ad9.js",
    "revision": "9e7352b2a5f20677cfeccc3bc6684263"
  },
  {
    "url": "assets/js/8.21727ca4.js",
    "revision": "3f5c0c5e0d6209f78d6390c379935838"
  },
  {
    "url": "assets/js/9.ffa140b3.js",
    "revision": "79dc77df0c6a97b9df5d5f2ebb8ab272"
  },
  {
    "url": "assets/js/app.877f9cd6.js",
    "revision": "ca9f2d10d0d4641b0ecf976a1a59f4ce"
  },
  {
    "url": "compatibility.html",
    "revision": "9e4a7dbd16de78a6576bffd5bba1f372"
  },
  {
    "url": "database.html",
    "revision": "84acd65405ac9c3d7cb0036d8a626a65"
  },
  {
    "url": "develop.html",
    "revision": "657d2bebb789ac225570fda7d7c99cdd"
  },
  {
    "url": "en/compatibility.html",
    "revision": "976f7cd8294ff9d919caca627aeedd5f"
  },
  {
    "url": "en/database.html",
    "revision": "3733e3e9def76090d9a93de186eb78f4"
  },
  {
    "url": "en/example.html",
    "revision": "fcb2261f89be07bafe0752214c5ecf83"
  },
  {
    "url": "en/faq.html",
    "revision": "bf57db82dd8420911e1339e253cc81df"
  },
  {
    "url": "en/index.html",
    "revision": "169e0f889df9caff56aa216b3a14722d"
  },
  {
    "url": "en/siterule.html",
    "revision": "63d5e8fbe751ded22888e0b207a168c3"
  },
  {
    "url": "example.html",
    "revision": "6ab1f88b613ef5dac49aa6671f93bf5f"
  },
  {
    "url": "faq.html",
    "revision": "f35c01bef39dbbc950528b1c0b90f386"
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
    "revision": "8b2fef0ceed1db6604afd6f060066b13"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "c080ad3d3a8753991c321925788fe785"
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
