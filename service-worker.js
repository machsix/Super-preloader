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
    "revision": "9dc96a342e332747b6e15480b1558134"
  },
  {
    "url": "assets/css/0.styles.ef0a44ec.css",
    "revision": "2552925582e7cc514182e4b4d7213dac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f26571d.js",
    "revision": "c7bbb652c2b3780cdba069f679fc2f91"
  },
  {
    "url": "assets/js/11.8ae9ab9c.js",
    "revision": "e06ba91525b860c77899d18d39af75b4"
  },
  {
    "url": "assets/js/12.8e829039.js",
    "revision": "f178621ed2d456cdcd3853ad04b7eac1"
  },
  {
    "url": "assets/js/13.97213d2b.js",
    "revision": "a7e6ab81b0b828e20bb021ee5dd8f3fe"
  },
  {
    "url": "assets/js/14.0a20d578.js",
    "revision": "669de7f6f084c1018cf997f6a8367bdf"
  },
  {
    "url": "assets/js/15.158dfeb3.js",
    "revision": "9786c447556875e6f6ad63ba07ea8d76"
  },
  {
    "url": "assets/js/16.5a8d0062.js",
    "revision": "61bc0b3fb337fdd2025349c00a71984f"
  },
  {
    "url": "assets/js/17.2922a9cc.js",
    "revision": "fbcf51fbe4366cf53c40e64272fb66c3"
  },
  {
    "url": "assets/js/18.23f4371f.js",
    "revision": "f0228409427fedf5985e354d9e87c2eb"
  },
  {
    "url": "assets/js/19.e9922933.js",
    "revision": "9b982150e3451d77a7de5e2b770381da"
  },
  {
    "url": "assets/js/2.a72ee15b.js",
    "revision": "22bbd76e7ab63f15826edeb76c349e45"
  },
  {
    "url": "assets/js/20.cc41e0a2.js",
    "revision": "60b5f019772c818f226570a0ece129d5"
  },
  {
    "url": "assets/js/3.6b84e9e9.js",
    "revision": "e5a8337eb19c3d98c6403ddf00394dea"
  },
  {
    "url": "assets/js/4.4a7e4d9e.js",
    "revision": "0b1aef2d1b95d9f25e74ae01e4025b11"
  },
  {
    "url": "assets/js/5.b0357beb.js",
    "revision": "893244a7029d522627aecca49537185d"
  },
  {
    "url": "assets/js/6.ec6c6c62.js",
    "revision": "67d6cc0516a12eafaa53f4379046af1b"
  },
  {
    "url": "assets/js/7.4a68b4b7.js",
    "revision": "9b0eeb85f6fec170371bd06c8af53387"
  },
  {
    "url": "assets/js/8.bd360c65.js",
    "revision": "03aa545e01ce9d3fafd8f6d591c138e6"
  },
  {
    "url": "assets/js/9.3aa59b75.js",
    "revision": "e514ce8c8658c29b9e516867595f20a0"
  },
  {
    "url": "assets/js/app.604830db.js",
    "revision": "8f9dd77f9f769547ffca434be0745415"
  },
  {
    "url": "compatibility.html",
    "revision": "02c60e5e1889fb6b37a59afa6491f9d3"
  },
  {
    "url": "database.html",
    "revision": "c1b79d343704971ac34d80a9ed9e47aa"
  },
  {
    "url": "example.html",
    "revision": "d0a050341989d6cdb7996ce5559cacce"
  },
  {
    "url": "faq.html",
    "revision": "8787c96128a550c5294d065c3c0f8b76"
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
    "revision": "a40146419bfd33980ae5b69bf2d5988f"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "26b6629e9fb50dfdf158427ccd265b3e"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "9cdb65a095b21fa212325584fa5b4687"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "e234e091c350818830e9c5d26d533971"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "181dea300095768d27556f151aec69db"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "6f05784b31a507c13dc46c5e0061fb09"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "e7ca814e9e74e0a6a0cedf527548a2a6"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "c10018b20ec3ff041e6739286c087479"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "dd0c6147781cae6deb2343987b1f74f3"
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
