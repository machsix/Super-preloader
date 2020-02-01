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
    "revision": "22eafab0faeccdd6f59a4ce8ca04d320"
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
    "url": "assets/js/app.710cb339.js",
    "revision": "46fa4eec9dc539e3271a8b4121efce83"
  },
  {
    "url": "compatibility.html",
    "revision": "030cc798197e34eddf9f2d17f44c5faf"
  },
  {
    "url": "database.html",
    "revision": "792160976eeac422881cf244ab7f20df"
  },
  {
    "url": "example.html",
    "revision": "8a63bad828ae0cf20208125c9a8586e2"
  },
  {
    "url": "faq.html",
    "revision": "afc022d1a2c3547b258182855d2e08e3"
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
    "revision": "c717a5f2a03c67c315f488cc7d6a2daf"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "660c140d17b3819a28a6f4564f47c2f0"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "b50152c775d6a5a9cff1678d4d981fee"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "b94905aedf5539d51248efb2604c173a"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "de31f5ee5f678a7df63227532fa50960"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "f8eb9902aaf5befd577cddee3353c812"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "2f34a758109c15d3605331a506382fcf"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "7cf2026bccc270ecac2af39ad6c70f2d"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "e5ae2217021e89779037aa200621f8dc"
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
