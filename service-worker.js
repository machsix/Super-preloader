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
    "revision": "ce7c791153e78291d6db61d8f233574e"
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
    "url": "assets/js/10.7c7b518a.js",
    "revision": "8dfc64187673c02fdb5970d6397fc542"
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
    "url": "assets/js/7.ab5d42ae.js",
    "revision": "4d09e476f54d891a833d651d8c22f435"
  },
  {
    "url": "assets/js/8.0e2c94a1.js",
    "revision": "a7ded453dcd4b275a11a7dd7adf4da1d"
  },
  {
    "url": "assets/js/9.de7ad840.js",
    "revision": "2d11a53fcbc405ea6999518251ca1af1"
  },
  {
    "url": "assets/js/app.a1484087.js",
    "revision": "27596fc72bff34337f1d64ec5dda4126"
  },
  {
    "url": "compatibility.html",
    "revision": "43df295cb4414af0a553b43b4674674d"
  },
  {
    "url": "database.html",
    "revision": "c0b2f57eaad1437e3fec506e875f0bd4"
  },
  {
    "url": "example.html",
    "revision": "5cc3e3b76c39d31bb7ab515ce0b4f8c2"
  },
  {
    "url": "faq.html",
    "revision": "e4e9e2a6faa2dc1291fc5f3374749151"
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
    "revision": "110de11c6696421e36b7a31b213a2df6"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "839e389654bdb05e46f9c114973da69a"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "f0c3afec6eae6eca77c2ad4eba28fc49"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "47d281911e3ddc0cff457cdcb2abfb54"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "7d3c2875f6750461ab4bcb7cb2ef0759"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "0e007dea1b09769eb4a0b52cf9fcc088"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "08f52f3d2394ad6092f937e52d89be35"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "aa7cf02c654c636fd2096c90855f228e"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "91cf4a1269235f7e0a2d1c8efc5bd097"
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
