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
    "revision": "e2eb69c68096ed0dfff2d16cd7e16704"
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
    "url": "assets/js/app.001e41ca.js",
    "revision": "6e353927f19bc54afe70aa44e97a17ba"
  },
  {
    "url": "compatibility.html",
    "revision": "8702865cdfefb919b69df7bbd0a04865"
  },
  {
    "url": "database.html",
    "revision": "c345b56be1fb867916324d5fe20927e4"
  },
  {
    "url": "example.html",
    "revision": "9a715fe30bcf521248daa637f8c29c94"
  },
  {
    "url": "faq.html",
    "revision": "d82fb60c8a1cb5317a0c1a7c6f949a54"
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
    "revision": "cfc022ed8ee8a86b82b23b4204d46674"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "b27e940d0c48175c7a1e4e77bff5dac5"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "b90f49b070bef8c3aaaab9ee9abf8f16"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "ae7e99d0e10d77cce4ecfbcbd149b0d4"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "3cacf3560731526c1600e97cea7ecc70"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "36c3a681fdc09616d0ef6e230ea46ca9"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "ba80f76c1ef8d53a7c406321bde91d18"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "c4aed907ce49adff57645e9f68dfb61c"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "51151b8c6e63136e1a07d5245b3bfa82"
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
