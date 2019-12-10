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
    "revision": "f2595f417cd34d4dc42c2e7859ff33d2"
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
    "url": "assets/js/app.5f6c2677.js",
    "revision": "01e8b290026cc473fca588417bf170a3"
  },
  {
    "url": "compatibility.html",
    "revision": "6004c2d49fbdfd7c3b578a827ab682a0"
  },
  {
    "url": "database.html",
    "revision": "5b7abe39ec18ba97ca57025f42c617bd"
  },
  {
    "url": "example.html",
    "revision": "cbfa4ba68b8dea5600d025abc2f1179f"
  },
  {
    "url": "faq.html",
    "revision": "8cf5e9ba27d8217626982bdd6ff65dd8"
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
    "revision": "e11abfa70265e480bfaf0db5154460b4"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "b0464acbb053d5c4edee5c2122d3a0a7"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "9f874a4f390e9a1b68aba5fb79bc9874"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "14c1702bf671153f36e370e6410947b7"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "fc0e096c5f0c3ed3bca1e71250948c58"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "3e1fdd693dc576574a113b1f557af8fb"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "a2249b854ed82dab6f0727375e2fb011"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "2ceb71be6d58d2de442974b4bfed4b8d"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "83bb99fe42a9ca6f201f5cd9d000d263"
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
