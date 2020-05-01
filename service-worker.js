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
    "revision": "d0227682fb2b0f3db81e956fc13963e5"
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
    "url": "assets/js/app.a68eb38b.js",
    "revision": "1e6fc6a3630db720284fa00cb18750ce"
  },
  {
    "url": "compatibility.html",
    "revision": "b11735bc76a7f4e7ca58223360905952"
  },
  {
    "url": "database.html",
    "revision": "1fce9e80dd4b67c8b4cb963f29bab992"
  },
  {
    "url": "example.html",
    "revision": "421f8f243010a4d15e70ebd76d33a14d"
  },
  {
    "url": "faq.html",
    "revision": "5237dd65e76c6b41221f4c1038893499"
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
    "revision": "7c56d1f3966fcb0cb526d1d4c41db84d"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "2bb79032d58b5e46a0c89a95e736befd"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "62d102ba08e6ba70b6e87dcfa04c9ff6"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "12168bc757d1cfe5391bc8534331b445"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "4d6874c56f1fc852371921f20c753a3e"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "5fa69a4550116a39f9e3d67926556e8a"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "44c373e777a2df9459fffea056e184af"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "2b24f8821c45e61bbddc978ae7d86799"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "f92043947983de0a8b9e8bef46f374c8"
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
