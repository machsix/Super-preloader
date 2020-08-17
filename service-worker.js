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
    "revision": "1ff9ebc223c24d8239a9ffce09e005b6"
  },
  {
    "url": "assets/css/0.styles.1a35368b.css",
    "revision": "60a74735c25851d4c3655e86591441df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d0dda731.js",
    "revision": "ce978db97a17914fcacff6693ece1e01"
  },
  {
    "url": "assets/js/11.0b25af34.js",
    "revision": "e870f8dfd369695ae43d6c769c72423c"
  },
  {
    "url": "assets/js/12.f821f6dd.js",
    "revision": "a3e391b4c1e070fb4465348bef293591"
  },
  {
    "url": "assets/js/13.c83ee63d.js",
    "revision": "97577d992681e8505c7b120c6a91d9bc"
  },
  {
    "url": "assets/js/14.c0150025.js",
    "revision": "5e7647c33c71b77ae9c75f6669aef4b1"
  },
  {
    "url": "assets/js/15.f9213b4d.js",
    "revision": "8e5287f76083c1eef5d55c8ac53a6133"
  },
  {
    "url": "assets/js/16.51176d14.js",
    "revision": "493e6a3cfd3abc6715302d888bd7b848"
  },
  {
    "url": "assets/js/17.80646d7e.js",
    "revision": "7f3ec39b8043e3e6c590cfe5b1600126"
  },
  {
    "url": "assets/js/18.6cb31122.js",
    "revision": "ec5760dff338955634ff07f4c138a437"
  },
  {
    "url": "assets/js/19.4a2fe828.js",
    "revision": "e762167700041f9063767ad75201f2f7"
  },
  {
    "url": "assets/js/2.baa37270.js",
    "revision": "d07f8e5fef72a6b5cbd23fd8d0bf64cb"
  },
  {
    "url": "assets/js/20.7bc9347e.js",
    "revision": "1eed54e26e7aa9f91bb8b25baad2336f"
  },
  {
    "url": "assets/js/3.cd81059b.js",
    "revision": "7580f23714b4fe228401e630051a000b"
  },
  {
    "url": "assets/js/4.7fba8e88.js",
    "revision": "6536f455cb1c626ab4aeb2164409dc80"
  },
  {
    "url": "assets/js/5.07082e26.js",
    "revision": "78998a18de7f89234b537d383eb1d09c"
  },
  {
    "url": "assets/js/6.c9012145.js",
    "revision": "746fb9cc186572b8c30063c44582eb13"
  },
  {
    "url": "assets/js/7.f80ff0f2.js",
    "revision": "c89f4c962160f577c48a501b6a9c7bc6"
  },
  {
    "url": "assets/js/8.eecc131d.js",
    "revision": "99cb887bd481752243692b340cd07cfb"
  },
  {
    "url": "assets/js/9.c4f08fcb.js",
    "revision": "4688c9338639de0138ae3a90f2ee4c37"
  },
  {
    "url": "assets/js/app.cdb84eb6.js",
    "revision": "aefe4da9f3e9aa32f92a79588d785629"
  },
  {
    "url": "compatibility.html",
    "revision": "7dfbdbbd3cbf86514cfe03a339cee3fa"
  },
  {
    "url": "database.html",
    "revision": "8bf833b178daa76393679b5e43a4f87a"
  },
  {
    "url": "example.html",
    "revision": "3c6453b2d36e3b52b98a5795b1cbdf61"
  },
  {
    "url": "faq.html",
    "revision": "60aff88714b6f361ddacda16290f32ac"
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
    "revision": "5c56bbc1cdcafa64e1bc468731385bac"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "d413cf789f46bc687f776eb581d2c73f"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "94fe93d9834e304db96a9ff0d7e21adb"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "83a505a25f99304d5b593e20faa88c18"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "862b8299d391f457517b85b72f1dc5e6"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "85788524e6e960a184aa7bafa31a0a27"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "ff6df45625ff1ee780befda1ed2c1194"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "70ed70df861eeed826f4b6f37f4639a1"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "2ebd6031515044f2ee12802b6a3412d0"
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
