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
    "revision": "d2587e349ad704a8ada03b8bbb9f79f3"
  },
  {
    "url": "assets/css/0.styles.87ced3c1.css",
    "revision": "44d81feb7fc479d1d1a3f7ec426da5fe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b25e6a11.js",
    "revision": "c7bbb652c2b3780cdba069f679fc2f91"
  },
  {
    "url": "assets/js/11.c8a75d14.js",
    "revision": "e06ba91525b860c77899d18d39af75b4"
  },
  {
    "url": "assets/js/12.4d3c948c.js",
    "revision": "1bf1d05454054e6a675e637825000e41"
  },
  {
    "url": "assets/js/13.a65b2a5f.js",
    "revision": "02d3995694f4ea023fdc9c1dab6dc0ab"
  },
  {
    "url": "assets/js/14.94c0d423.js",
    "revision": "669de7f6f084c1018cf997f6a8367bdf"
  },
  {
    "url": "assets/js/15.831425aa.js",
    "revision": "9786c447556875e6f6ad63ba07ea8d76"
  },
  {
    "url": "assets/js/16.70208574.js",
    "revision": "cff7718caf0960c9a3d5372865d46101"
  },
  {
    "url": "assets/js/17.705dbef6.js",
    "revision": "fbcf51fbe4366cf53c40e64272fb66c3"
  },
  {
    "url": "assets/js/18.68b065cb.js",
    "revision": "f0228409427fedf5985e354d9e87c2eb"
  },
  {
    "url": "assets/js/19.6cacc158.js",
    "revision": "d05fd4f9262b78720dc4af704f75444c"
  },
  {
    "url": "assets/js/2.b5f231ed.js",
    "revision": "994e15296f1789b16a3904caf674431d"
  },
  {
    "url": "assets/js/20.cc41e0a2.js",
    "revision": "60b5f019772c818f226570a0ece129d5"
  },
  {
    "url": "assets/js/3.dc37c282.js",
    "revision": "994b10770cb996b6a708465d2f3daf0a"
  },
  {
    "url": "assets/js/4.23ed24df.js",
    "revision": "79249b536ee924f2f3cf7f0267d39c24"
  },
  {
    "url": "assets/js/5.d3ea6c68.js",
    "revision": "893244a7029d522627aecca49537185d"
  },
  {
    "url": "assets/js/6.146da858.js",
    "revision": "7ae73783ce4397ad238b395d4c73426b"
  },
  {
    "url": "assets/js/7.a0c7210e.js",
    "revision": "2dd375b116b96539d11c37ebf2eac3da"
  },
  {
    "url": "assets/js/8.cc98337b.js",
    "revision": "03aa545e01ce9d3fafd8f6d591c138e6"
  },
  {
    "url": "assets/js/9.fc17e9b5.js",
    "revision": "e514ce8c8658c29b9e516867595f20a0"
  },
  {
    "url": "assets/js/app.b56893b9.js",
    "revision": "81671c285563e640c50f61aa0a6d9734"
  },
  {
    "url": "compatibility.html",
    "revision": "6417ad60a2bbe1a36399949b9ad8fe80"
  },
  {
    "url": "database.html",
    "revision": "dd815f7203c9f57a7a5c08a71ddcd80f"
  },
  {
    "url": "example.html",
    "revision": "dd3bbadad74d7ee4efdc95fe17e4cfdd"
  },
  {
    "url": "faq.html",
    "revision": "49bd02474768b482eac11545f45bf5e1"
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
    "revision": "4317f2fc45b764f847b1a6bcfbc42c82"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "3e6d4c20ed4a1e6e39b5e874d8cd7533"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "468676e7988a8cc3a768992b918e8dbe"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "e5ff7d21a6c40521f519cdd0427dc836"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "dc4641fa803b1bd16c87e59f26384a44"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "f0bfc4404e39b65ef638b69f35e03d42"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "d74f9c8abe23c5d80ce9a7867b3ec64f"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "91bacffa2ba8e99b2ca912aadc3ad1c3"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "486b6c36626ed8d70d85c67acb2f8bea"
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
