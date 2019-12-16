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
    "revision": "9363f566f23b638f66ac4871e0ba4278"
  },
  {
    "url": "assets/css/0.styles.10897501.css",
    "revision": "2552925582e7cc514182e4b4d7213dac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2dcec76d.js",
    "revision": "c7bbb652c2b3780cdba069f679fc2f91"
  },
  {
    "url": "assets/js/11.97706afa.js",
    "revision": "e06ba91525b860c77899d18d39af75b4"
  },
  {
    "url": "assets/js/12.11ccf75f.js",
    "revision": "f178621ed2d456cdcd3853ad04b7eac1"
  },
  {
    "url": "assets/js/13.59291c48.js",
    "revision": "a7e6ab81b0b828e20bb021ee5dd8f3fe"
  },
  {
    "url": "assets/js/14.dda9bc87.js",
    "revision": "669de7f6f084c1018cf997f6a8367bdf"
  },
  {
    "url": "assets/js/15.bd40bb6d.js",
    "revision": "9786c447556875e6f6ad63ba07ea8d76"
  },
  {
    "url": "assets/js/16.ca478f8b.js",
    "revision": "61bc0b3fb337fdd2025349c00a71984f"
  },
  {
    "url": "assets/js/17.a1193ae8.js",
    "revision": "fbcf51fbe4366cf53c40e64272fb66c3"
  },
  {
    "url": "assets/js/18.34cd7cd6.js",
    "revision": "f0228409427fedf5985e354d9e87c2eb"
  },
  {
    "url": "assets/js/19.4ee9d646.js",
    "revision": "9b982150e3451d77a7de5e2b770381da"
  },
  {
    "url": "assets/js/2.a56bac6f.js",
    "revision": "22bbd76e7ab63f15826edeb76c349e45"
  },
  {
    "url": "assets/js/20.33482130.js",
    "revision": "60b5f019772c818f226570a0ece129d5"
  },
  {
    "url": "assets/js/3.9f72c167.js",
    "revision": "e5a8337eb19c3d98c6403ddf00394dea"
  },
  {
    "url": "assets/js/4.aec78b72.js",
    "revision": "0b1aef2d1b95d9f25e74ae01e4025b11"
  },
  {
    "url": "assets/js/5.066bee3c.js",
    "revision": "893244a7029d522627aecca49537185d"
  },
  {
    "url": "assets/js/6.be6e18ed.js",
    "revision": "67d6cc0516a12eafaa53f4379046af1b"
  },
  {
    "url": "assets/js/7.b9c8942c.js",
    "revision": "9b0eeb85f6fec170371bd06c8af53387"
  },
  {
    "url": "assets/js/8.65137ddc.js",
    "revision": "03aa545e01ce9d3fafd8f6d591c138e6"
  },
  {
    "url": "assets/js/9.dae0c84b.js",
    "revision": "e514ce8c8658c29b9e516867595f20a0"
  },
  {
    "url": "assets/js/app.045fe1cb.js",
    "revision": "71fb5a70dde73519a6436628bcb44e8b"
  },
  {
    "url": "compatibility.html",
    "revision": "c4da40d4588bf878d37f32f8d1b50161"
  },
  {
    "url": "database.html",
    "revision": "4cda3cfe21d63b5102ad84f437a9533e"
  },
  {
    "url": "example.html",
    "revision": "ee1d869f0704e7a1d5d781c62bbca112"
  },
  {
    "url": "faq.html",
    "revision": "62af2fbec0ca0a5c9e9402902ec46db0"
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
    "revision": "62ab941d4945ec302592533bacd09fe5"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "92ae282b93a670e06202de8a4e3efc29"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "d5f436026a04d637024cc17830d477cd"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "930fa329fa8ac2951b3d8599c5fae61d"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "6f9f7ddce80b78669529ed963cd86ada"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "29b3240e5fa7d6425e0efe6aee789e4d"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "95b412dd3a30bf6ca15386063ce8ed99"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "e5608cd029a1d2991e82b1cb1152c80c"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "c0537af2451b618eb6ae081320fb7f3a"
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
