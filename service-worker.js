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
    "revision": "bc2cfe193bbf4019fc23e666dda3860f"
  },
  {
    "url": "assets/css/0.styles.5e2deea8.css",
    "revision": "4b577694b26d0b4f7c82e425339221ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eece42e9.js",
    "revision": "9a9dd24888c94abb2d750500bd1086c1"
  },
  {
    "url": "assets/js/11.661704c6.js",
    "revision": "6fc9e2f664c1e9df4435bc581a94fbb6"
  },
  {
    "url": "assets/js/12.4f227c28.js",
    "revision": "3f8272af7e496bb78d9884d2cadb2f37"
  },
  {
    "url": "assets/js/13.37a60e87.js",
    "revision": "23a2971a64e4db17ff962721a857c1dd"
  },
  {
    "url": "assets/js/14.40a2cb60.js",
    "revision": "23fab1ff80531723f6ed1679953bec09"
  },
  {
    "url": "assets/js/15.d37efd80.js",
    "revision": "603ca241b293974d453e5a40dcbde280"
  },
  {
    "url": "assets/js/16.3cf56ed9.js",
    "revision": "9ecb3e859ad79b238ad1f69554b0210a"
  },
  {
    "url": "assets/js/17.cb14b933.js",
    "revision": "a1780ae1dabd6b1c62c69824069830b0"
  },
  {
    "url": "assets/js/18.610321c3.js",
    "revision": "0b6fa10d6982e1998efab513d5f73acb"
  },
  {
    "url": "assets/js/19.9c7d2d38.js",
    "revision": "b1fa2fbc99ca97bd96a7b4bb835623b9"
  },
  {
    "url": "assets/js/2.56e169d7.js",
    "revision": "eebfe7ab87c28521e9d9b46081927ea1"
  },
  {
    "url": "assets/js/20.b27d9df3.js",
    "revision": "72e80c922d9309efef087777ebb46971"
  },
  {
    "url": "assets/js/21.ecbb7124.js",
    "revision": "de32c79756620efbb641bdfd79c6e9b8"
  },
  {
    "url": "assets/js/3.9a1caf14.js",
    "revision": "9270de43da2d03f4017099fe67fddcbc"
  },
  {
    "url": "assets/js/4.00cc8bb9.js",
    "revision": "09e9750ff511d0e90b37c83e3c5f2c0e"
  },
  {
    "url": "assets/js/5.eba9efb2.js",
    "revision": "28c9de9831aca81d824c62e150d1d30c"
  },
  {
    "url": "assets/js/6.c4a06089.js",
    "revision": "42086cd869cc9f2b18ec0df72fb8b652"
  },
  {
    "url": "assets/js/7.14688fc3.js",
    "revision": "8cdaca19bac76d56c5fa9c56e8f23c55"
  },
  {
    "url": "assets/js/8.16882155.js",
    "revision": "a8d84e3857f549bf0c4e87ceffae3098"
  },
  {
    "url": "assets/js/9.b402798e.js",
    "revision": "d398562ab7d4e626e3e381b0e697c633"
  },
  {
    "url": "assets/js/app.86bec0e4.js",
    "revision": "eea3572054339a1bd5a390373e4adb91"
  },
  {
    "url": "compatibility.html",
    "revision": "06d5fdd802aad3cebf0929306515e5bf"
  },
  {
    "url": "database.html",
    "revision": "869824a904125bbf725cae907a888d5f"
  },
  {
    "url": "example.html",
    "revision": "4263add711e0017c073ea43d46ac02e8"
  },
  {
    "url": "faq.html",
    "revision": "ce54ca4d05cf6d9014c2f892854599af"
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
    "revision": "bf7ebdbe7c763c3306c37e4f5608f080"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "e4047c2e639c4bb2e1ea6f9fae8df205"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "76c5c2055fffea17f3557481ece33b3c"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "9b3efda02f903f4ed65a384947e25683"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "55f3f8736b4b8dba140007fc53a5913c"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "ae1bc9975fa3b332668f5fcc79fa6b35"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "e34138f0c506f69e30a115ae77ac7b53"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "3c5e444dfa0e9b10042436e330691bcd"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "71e2fc1ed21ba87ace712f2ec26fe1bd"
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
