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
    "revision": "63695fe4ec5b3d712fbcc074052823c1"
  },
  {
    "url": "assets/css/0.styles.3913ec2f.css",
    "revision": "4b577694b26d0b4f7c82e425339221ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.22e7635c.js",
    "revision": "9a9dd24888c94abb2d750500bd1086c1"
  },
  {
    "url": "assets/js/11.7ba05350.js",
    "revision": "6fc9e2f664c1e9df4435bc581a94fbb6"
  },
  {
    "url": "assets/js/12.12fd5098.js",
    "revision": "3f8272af7e496bb78d9884d2cadb2f37"
  },
  {
    "url": "assets/js/13.fd85026f.js",
    "revision": "23a2971a64e4db17ff962721a857c1dd"
  },
  {
    "url": "assets/js/14.e8cfe0e8.js",
    "revision": "23fab1ff80531723f6ed1679953bec09"
  },
  {
    "url": "assets/js/15.7d78357f.js",
    "revision": "603ca241b293974d453e5a40dcbde280"
  },
  {
    "url": "assets/js/16.05f4dbd5.js",
    "revision": "9ecb3e859ad79b238ad1f69554b0210a"
  },
  {
    "url": "assets/js/17.25a87537.js",
    "revision": "a1780ae1dabd6b1c62c69824069830b0"
  },
  {
    "url": "assets/js/18.b02ac481.js",
    "revision": "0b6fa10d6982e1998efab513d5f73acb"
  },
  {
    "url": "assets/js/19.7c1236c5.js",
    "revision": "b1fa2fbc99ca97bd96a7b4bb835623b9"
  },
  {
    "url": "assets/js/2.7277701b.js",
    "revision": "310341aca79de193abc9fb98046ea347"
  },
  {
    "url": "assets/js/20.763ccba1.js",
    "revision": "72e80c922d9309efef087777ebb46971"
  },
  {
    "url": "assets/js/21.f230edaf.js",
    "revision": "df2f9a30fdcef606791aea3c29fad781"
  },
  {
    "url": "assets/js/3.41f799c0.js",
    "revision": "9270de43da2d03f4017099fe67fddcbc"
  },
  {
    "url": "assets/js/4.0bca74cd.js",
    "revision": "09e9750ff511d0e90b37c83e3c5f2c0e"
  },
  {
    "url": "assets/js/5.0753dcb1.js",
    "revision": "28c9de9831aca81d824c62e150d1d30c"
  },
  {
    "url": "assets/js/6.0423290c.js",
    "revision": "42086cd869cc9f2b18ec0df72fb8b652"
  },
  {
    "url": "assets/js/7.65dcc69d.js",
    "revision": "8cdaca19bac76d56c5fa9c56e8f23c55"
  },
  {
    "url": "assets/js/8.19f27961.js",
    "revision": "a8d84e3857f549bf0c4e87ceffae3098"
  },
  {
    "url": "assets/js/9.cdb00a96.js",
    "revision": "d398562ab7d4e626e3e381b0e697c633"
  },
  {
    "url": "assets/js/app.07b0054c.js",
    "revision": "4e344743d069b264a74ba8d9821893c5"
  },
  {
    "url": "compatibility.html",
    "revision": "cf6e951ac6c912a315ce036c35ece7cf"
  },
  {
    "url": "database.html",
    "revision": "1367d84bb520eb8a25fcb4bd0b7eec35"
  },
  {
    "url": "example.html",
    "revision": "bc194ed5de26f2fbb07af0a09517f983"
  },
  {
    "url": "faq.html",
    "revision": "46922b6129e7ecb2bdfdd512c6e894e7"
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
    "revision": "a2e72b34d97cc6392ea10d8d19212ae8"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "fdb5295055401718ff4075404a07613d"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "a07c75800b76cdd1371a6b4bab49a389"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "56d362799f8732d3245907844057358e"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "df9f75a175e09db8250478a0a9f804b3"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "049dad1ea52c7e10a07d43007c66b530"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "cef5118bb8f76e2bc4db32b94cabb7fc"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "5c7fdcfd50a2192df95e15712410917f"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "e2b4f4bfeec14141ca1727c3e985cfc6"
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
