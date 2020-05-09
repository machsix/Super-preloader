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
    "revision": "65ab9e0d3166d26be43844b3a4fe9a14"
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
    "url": "assets/js/app.150ea5d4.js",
    "revision": "e5ad57fa034c78165bd25b7851d39b73"
  },
  {
    "url": "compatibility.html",
    "revision": "ea0ae0fadd4c668fded114fd004f5d07"
  },
  {
    "url": "database.html",
    "revision": "e5c1c4c0959002b092e8dc77d8b87831"
  },
  {
    "url": "example.html",
    "revision": "df97b39f6c83fb49eb3a2d9bdfb5fb65"
  },
  {
    "url": "faq.html",
    "revision": "6640aac82d3bf60afaea26281af714f6"
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
    "revision": "41247d45262c8f8c03364c13121c80b5"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "5b28264ecb88ea746691784aa44f0737"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "c3d99e1551b68c465ead223a07b2aa42"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "276c9bf8047e125bd69a62b77de02967"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "8522c672592f419b6a386553a321d90c"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "13178206f982400b73e1a4d25d0a5fb3"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "060cc53e47b975bb7b29633d32f0e933"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "13ac02f671aad4f8df4009f9ab7b48c5"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "8b616fced338b9dd52e81e00ecababa7"
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
