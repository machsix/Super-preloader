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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "30ff0c60829393a7b644fa8c9ebf6879"
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
    "url": "assets/js/10.0958900d.js",
    "revision": "093eedeb69737e1fa45b27d7db7c0ca3"
  },
  {
    "url": "assets/js/11.a0c43d31.js",
    "revision": "15b230a780cfee86ae8027d05692928e"
  },
  {
    "url": "assets/js/12.989e13e0.js",
    "revision": "ad6704f3dd6396c22160384de864a0f2"
  },
  {
    "url": "assets/js/13.008cfeb0.js",
    "revision": "9b2c0862c5e96594eec8948bd314c1a9"
  },
  {
    "url": "assets/js/14.2e34c331.js",
    "revision": "6cae60e1371f89fbc1232de40cc484e0"
  },
  {
    "url": "assets/js/15.6ed9a648.js",
    "revision": "04da3fa6d6cd9703535153b28e1d4e25"
  },
  {
    "url": "assets/js/16.7be62b1c.js",
    "revision": "75ff7750a068e08310acd36959fae959"
  },
  {
    "url": "assets/js/17.a2c87b8f.js",
    "revision": "9ce1900962be94dde2d54119234619d2"
  },
  {
    "url": "assets/js/18.f3f0c75a.js",
    "revision": "a31fc85200443cf2faf9caa0b5ce31aa"
  },
  {
    "url": "assets/js/19.f2180c92.js",
    "revision": "b9bc10b99d2629467dfba05f0c09978e"
  },
  {
    "url": "assets/js/2.af00f786.js",
    "revision": "0deb0e4b3085f7e6802bafc056610ee2"
  },
  {
    "url": "assets/js/20.a16aea1c.js",
    "revision": "55dc247961f93b76ab3d76f7255b5806"
  },
  {
    "url": "assets/js/3.0856e1f8.js",
    "revision": "16240fa4969a41682ae2d20f5b793a31"
  },
  {
    "url": "assets/js/4.7116040e.js",
    "revision": "a8dabba7705b71a60d1d88474014c8ca"
  },
  {
    "url": "assets/js/5.fbc0afa2.js",
    "revision": "a844d2119bf41742609998dd4f030a06"
  },
  {
    "url": "assets/js/6.9ac499ab.js",
    "revision": "827e3c5c0e9fd36173da20408e16ac77"
  },
  {
    "url": "assets/js/7.80576eed.js",
    "revision": "9e7352b2a5f20677cfeccc3bc6684263"
  },
  {
    "url": "assets/js/8.6212d0fb.js",
    "revision": "3f5c0c5e0d6209f78d6390c379935838"
  },
  {
    "url": "assets/js/9.68127024.js",
    "revision": "79dc77df0c6a97b9df5d5f2ebb8ab272"
  },
  {
    "url": "assets/js/app.4b98f3cc.js",
    "revision": "0e7de2aee0201559969898b25fdcb43e"
  },
  {
    "url": "compatibility.html",
    "revision": "11a17fbc01273f07d52c151c5ea41e62"
  },
  {
    "url": "database.html",
    "revision": "9f8b7ec8ed4e273ab179b0da11385ee7"
  },
  {
    "url": "develop.html",
    "revision": "0445ad76023eb356c087db330d8d309a"
  },
  {
    "url": "en/compatibility.html",
    "revision": "56e466fc7b6c44597c7a60bb4ae26427"
  },
  {
    "url": "en/database.html",
    "revision": "948e1be37d1c9d34e004438122c2a847"
  },
  {
    "url": "en/example.html",
    "revision": "7479b75ed6de3e79e3b38026340b870d"
  },
  {
    "url": "en/faq.html",
    "revision": "223b1e5a761a3c040c8f8c7124583134"
  },
  {
    "url": "en/index.html",
    "revision": "ebb2aec676d412f1c607bbe6c45f01de"
  },
  {
    "url": "en/siterule.html",
    "revision": "23c4a6b128237fde1bbfe14203701c6c"
  },
  {
    "url": "example.html",
    "revision": "fcd1775c4f0347e3f39cef567a016c46"
  },
  {
    "url": "faq.html",
    "revision": "31e520b3651a18fbb1e1275086009249"
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
    "revision": "2bf6aaebf4a208e36cb00432d7caf225"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "37c6fd84a7d401d4475129c77831daff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
