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
    "revision": "937fd135e6aa3b34fc3cac5e488c4eb2"
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
    "url": "assets/js/11.3692bae3.js",
    "revision": "7224dfc59d0342ed8e4810cd4a36fbe0"
  },
  {
    "url": "assets/js/12.59506624.js",
    "revision": "f68f7cf62c424a2354d83587cfdb30f1"
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
    "url": "assets/js/19.cf2963ce.js",
    "revision": "cc48b0422628a1760c35e5bc10524161"
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
    "url": "assets/js/app.4920b0e6.js",
    "revision": "0950a103ff22e71143f4852acc4a531c"
  },
  {
    "url": "compatibility.html",
    "revision": "71800f372f8db00a376583243ef9d155"
  },
  {
    "url": "database.html",
    "revision": "d5604b192754695e4b39ca2bac62c246"
  },
  {
    "url": "example.html",
    "revision": "e4460c964c5101f20d57194e38cdb634"
  },
  {
    "url": "faq.html",
    "revision": "c7cccbe2a064e29885df0d80231868e1"
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
    "revision": "158587bb8c30932c3559adc7a98a4e52"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "3fb184bb31e606f9a60b47c4f662c3b5"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "f4c981ed2031bde8baf11c7d5e245d22"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "499c29542575057f9515e8f18313467c"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "7492de7186c44c704d08a25f1691d78e"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "477b761f30294b1c4dc9bd21b74fdb44"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "e590d6382fa0b5f269d2924a2a39d48d"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "52d5502f959bb830f381474b6fdfe892"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "58440b830c1609f05820034140a753cf"
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
