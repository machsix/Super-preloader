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
    "revision": "2f23b7ac41f5f043edd12f99f8813423"
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
    "url": "assets/js/13.a8869acd.js",
    "revision": "3815214d6c28904886f237f117367c9f"
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
    "url": "assets/js/7.1df6e9ac.js",
    "revision": "23fb6ae6897f03d1b65d19d10878044f"
  },
  {
    "url": "assets/js/8.15b4e81e.js",
    "revision": "21b9172c2668eb95a1c99d72b41a7402"
  },
  {
    "url": "assets/js/9.d1f6169f.js",
    "revision": "753133230f9cbc19759b14cc0a31be79"
  },
  {
    "url": "assets/js/app.c155aaf6.js",
    "revision": "a0b8cd093144f9c839eda262df980dc9"
  },
  {
    "url": "compatibility.html",
    "revision": "104046f27f1c13e8779b3aec11bcf295"
  },
  {
    "url": "database.html",
    "revision": "25a4117f4f9bf62d8e1473cbbb4fae5d"
  },
  {
    "url": "example.html",
    "revision": "5598e1d0336edc459ebdec51c5dff47f"
  },
  {
    "url": "faq.html",
    "revision": "39d728d7c3b955df15ea0525eec07796"
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
    "revision": "113c8b966755428847dc00f12f7dfa8d"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "554d703122e98daed2bb6bd75139b86a"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "78c1bafb98e85035a8b6ec78c05c0437"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "b5b86482f63e2e0167f92416044d9e33"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "df24ab46337f80ef9ff2acfeaaeab687"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "f6568bdfd0fda3ba8111d4857a44fe79"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "6add719d92ec4410290df69307c8466a"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "6ce1d9e1b606a42e35fa36b9ac003356"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "77d91248a98fd612cb11b18baae41cc1"
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
