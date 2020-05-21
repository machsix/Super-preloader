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
    "revision": "85b81dd83fc2f9dcaea9ff3c32260805"
  },
  {
    "url": "assets/css/0.styles.7ca9da9a.css",
    "revision": "f3e402134d50108b6a7f18a454d34186"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16a717ef.js",
    "revision": "e2b15b68a4d0c197e8ce7db14c3176c6"
  },
  {
    "url": "assets/js/11.ba1e0a4e.js",
    "revision": "32b1bbd3fa1f365b2a477ac47a40c292"
  },
  {
    "url": "assets/js/12.4927a186.js",
    "revision": "5a4834aa2fdf968e870384cbda957a15"
  },
  {
    "url": "assets/js/13.ac3593e4.js",
    "revision": "f5d220489aa321d3429c436f40720c26"
  },
  {
    "url": "assets/js/14.bced1220.js",
    "revision": "3bd5b0d0ce8d4db6638dddbd3ff27e0b"
  },
  {
    "url": "assets/js/15.249b41b9.js",
    "revision": "fed8353e0fba4da21b2ea53852def253"
  },
  {
    "url": "assets/js/16.61e12820.js",
    "revision": "a508285ca431fe4c75a458734cd12a27"
  },
  {
    "url": "assets/js/17.2febd8b8.js",
    "revision": "7412f549d75e59818858d07cdf3bc363"
  },
  {
    "url": "assets/js/18.75638051.js",
    "revision": "d5ba7f6b034a7703c35c75abd73fdaf8"
  },
  {
    "url": "assets/js/19.e2e2bbc5.js",
    "revision": "3779c0acf9f92218d6c60142a8edcd5f"
  },
  {
    "url": "assets/js/2.1bb4db3a.js",
    "revision": "105dc94b0d6f065efaf0f4148d5b1f86"
  },
  {
    "url": "assets/js/20.04fb2fdb.js",
    "revision": "0d955dbe038b509d00532f1da939d0af"
  },
  {
    "url": "assets/js/3.def2b59c.js",
    "revision": "0321929cb096f705ae00d1f6b6a2a439"
  },
  {
    "url": "assets/js/4.cf914563.js",
    "revision": "8bd3ac29079961d4ac3c80b6bc7616dc"
  },
  {
    "url": "assets/js/5.e07ab693.js",
    "revision": "0e780a07f0e678d08a85e0c36d33bcb9"
  },
  {
    "url": "assets/js/6.77ab386e.js",
    "revision": "4a4c7fd8bd3fe76be421cffed5b2c929"
  },
  {
    "url": "assets/js/7.edcfeb61.js",
    "revision": "0faba8e99e2d33ad8b62eacf65c3cefc"
  },
  {
    "url": "assets/js/8.1f86dd25.js",
    "revision": "086799c72704abe1a5d5a0cb9a22df5a"
  },
  {
    "url": "assets/js/9.d1f6169f.js",
    "revision": "753133230f9cbc19759b14cc0a31be79"
  },
  {
    "url": "assets/js/app.ebba257e.js",
    "revision": "0f0ebbc0c7bd403d60e381c16cd12811"
  },
  {
    "url": "compatibility.html",
    "revision": "2f0282d12f9ae838e06b70dee66c16f5"
  },
  {
    "url": "database.html",
    "revision": "3fa2658b2138f9cd3c01d35732c17e60"
  },
  {
    "url": "example.html",
    "revision": "c6d7c312af7e1ef37fde0f95562ac0ea"
  },
  {
    "url": "faq.html",
    "revision": "24d02d619bed457b3d41c6e1090be896"
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
    "revision": "c4a8df978f7d584a874cf25b8133cac1"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "dcb9727f278779f316f19d161986fbb0"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "cf313d1aff4fa3d675a122e0b41fe528"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "2b233e192dfddf12bdbb77547b6b55c9"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "348e27bd36a199c8f76b29a5745755b5"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "fb95a5246dcd95504727cd34a4938e1c"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "41ac5b6506a8cb8840fbee26f0270293"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "d641b65e2b16ec85114cddab8edd7e04"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "e08e7775f5c7fedadd7cb2902f0ec009"
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
