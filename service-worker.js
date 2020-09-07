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
    "revision": "6f05307c93e8b2eda85be9a6d494fa05"
  },
  {
    "url": "assets/css/0.styles.0eec608f.css",
    "revision": "a7efc6716dcbc68a4cbeb858eef87f8d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c16224e4.js",
    "revision": "8be7cf4aaa3367f1b6eb297a76f64dea"
  },
  {
    "url": "assets/js/11.fa687ee3.js",
    "revision": "9ef28e34d0a05bb1eba6613bcb29db8d"
  },
  {
    "url": "assets/js/12.84ca04f9.js",
    "revision": "cc1485b71f89a3c0151bf84efb1febb9"
  },
  {
    "url": "assets/js/13.aed5a420.js",
    "revision": "97577d992681e8505c7b120c6a91d9bc"
  },
  {
    "url": "assets/js/14.7fb4f9c4.js",
    "revision": "5e7647c33c71b77ae9c75f6669aef4b1"
  },
  {
    "url": "assets/js/15.859fd5cc.js",
    "revision": "8e5287f76083c1eef5d55c8ac53a6133"
  },
  {
    "url": "assets/js/16.e35734a9.js",
    "revision": "493e6a3cfd3abc6715302d888bd7b848"
  },
  {
    "url": "assets/js/17.4c4e8dd6.js",
    "revision": "7f3ec39b8043e3e6c590cfe5b1600126"
  },
  {
    "url": "assets/js/18.a13016e2.js",
    "revision": "ec5760dff338955634ff07f4c138a437"
  },
  {
    "url": "assets/js/19.94d5d895.js",
    "revision": "e762167700041f9063767ad75201f2f7"
  },
  {
    "url": "assets/js/2.e3117809.js",
    "revision": "ededef00c6d3a19c71ce4675ea944940"
  },
  {
    "url": "assets/js/20.7bc9347e.js",
    "revision": "1eed54e26e7aa9f91bb8b25baad2336f"
  },
  {
    "url": "assets/js/3.1d3118c1.js",
    "revision": "7580f23714b4fe228401e630051a000b"
  },
  {
    "url": "assets/js/4.7fba8e88.js",
    "revision": "6536f455cb1c626ab4aeb2164409dc80"
  },
  {
    "url": "assets/js/5.257d4ea8.js",
    "revision": "78998a18de7f89234b537d383eb1d09c"
  },
  {
    "url": "assets/js/6.e3f8e85b.js",
    "revision": "746fb9cc186572b8c30063c44582eb13"
  },
  {
    "url": "assets/js/7.1dc8f70a.js",
    "revision": "776df85ea2080d65f0527e9b49aaf346"
  },
  {
    "url": "assets/js/8.910da71f.js",
    "revision": "15963e744af3224a900147899ace1eb9"
  },
  {
    "url": "assets/js/9.97acb2a5.js",
    "revision": "51034a004e5d2ad21a26ad0c428b308d"
  },
  {
    "url": "assets/js/app.ff71366b.js",
    "revision": "028c67b6a9b9df0092d0c28097787add"
  },
  {
    "url": "compatibility.html",
    "revision": "c0db1a241cb9c95af578f163ae7ca6fb"
  },
  {
    "url": "database.html",
    "revision": "d04b6d56a90bbdab8dca8e6a9ff3fe5d"
  },
  {
    "url": "example.html",
    "revision": "d477620412d0fa470f136d400f7f219f"
  },
  {
    "url": "faq.html",
    "revision": "7380087dbb3f7d2b9314f05d0d6fc887"
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
    "revision": "bb5b36736bba2b21ca70e854b4eaed46"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "7e43233ea6fdefb7b3e4cfeb01e8de68"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "d7645c6dbd1c7d46e4c2603b3989e118"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "b4201bf328f7420d497efeae035f4a85"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "32e9723793d37b42bbdd00137cbf7bfe"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "fdc70aec82fd91cec155a02ca6d20290"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "f36c6769720c3c7115c7f8e1a84b96e5"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "f6c303178d3bb37c8afbed409c127b99"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "c4add4e5c139e38fe9ed9ff4e78dba5a"
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
