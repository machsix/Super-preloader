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
    "revision": "4a252d6c11771dc780120def5e3f3349"
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
    "url": "assets/js/app.114ddc3f.js",
    "revision": "7a98be6d6e21d363a052b5100b3936e5"
  },
  {
    "url": "compatibility.html",
    "revision": "a6d2deaaf59c9dae00b7d8469cf50691"
  },
  {
    "url": "database.html",
    "revision": "6de1c8866776e031736efffb9fd3b5a1"
  },
  {
    "url": "example.html",
    "revision": "174808cd3141a26b2eaeb5633e649bea"
  },
  {
    "url": "faq.html",
    "revision": "5b810bc900ebba1ab7f8cdea7d6080da"
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
    "revision": "0301586f7937e97a6fd34e2f19bd5118"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "376dc55db86deb2dff76929210f085a8"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "e25ddb9d9914c0b22f5310fbd34a2282"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "4c16c85c9703e97ac6728a57d28c799f"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "8cb54e89114a40bf035b85ae94560d20"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "00df76e08352b348abd198721272a312"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "c82c05ff2b7ee65922d315820c948bd6"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "25e232eced9cc2c8d7b43d4c5600559f"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "6a3109f7b17fedfbf75f1c4c58ded9ef"
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
