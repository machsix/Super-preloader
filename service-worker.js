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
    "revision": "ce66684558e856d7333d11eb77d73028"
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
    "url": "assets/js/10.bb3f3eb8.js",
    "revision": "199d4bef55426129c7a1d16072051bc8"
  },
  {
    "url": "assets/js/11.8bb19316.js",
    "revision": "feb6b5ec52a2bff1c112a2a1739ff2e9"
  },
  {
    "url": "assets/js/12.5b43e74d.js",
    "revision": "fc5767848e3f48aec475f9c6b0ca39be"
  },
  {
    "url": "assets/js/13.22637438.js",
    "revision": "403fccb26ee6a5d495fa4bf976fa9c62"
  },
  {
    "url": "assets/js/14.cfd801a4.js",
    "revision": "730fb50af7c87cd343f98a1a9439870d"
  },
  {
    "url": "assets/js/15.32508d64.js",
    "revision": "794cadc4cc5d826e85fad87cb1774d45"
  },
  {
    "url": "assets/js/16.411a87dc.js",
    "revision": "09e24329e5b2b63095396f4689e50825"
  },
  {
    "url": "assets/js/17.5a699b80.js",
    "revision": "fbcf51fbe4366cf53c40e64272fb66c3"
  },
  {
    "url": "assets/js/18.f5a18163.js",
    "revision": "f0228409427fedf5985e354d9e87c2eb"
  },
  {
    "url": "assets/js/19.0c8a140b.js",
    "revision": "9b982150e3451d77a7de5e2b770381da"
  },
  {
    "url": "assets/js/2.928cde5a.js",
    "revision": "dea22dd84a01e7cc8d33b8a60cf30eac"
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
    "url": "assets/js/7.127b06b2.js",
    "revision": "1724e2b7b8541ce4536352c7a32e655f"
  },
  {
    "url": "assets/js/8.556ade05.js",
    "revision": "febad21057a703276c614d00adf4b730"
  },
  {
    "url": "assets/js/9.91577ae6.js",
    "revision": "c641ae2381d0212494e726dea45f05f5"
  },
  {
    "url": "assets/js/app.e1225fb8.js",
    "revision": "708cd078acdc83a801dcdc797260261c"
  },
  {
    "url": "compatibility.html",
    "revision": "c1523dea8f2af1809e66888a73212c9d"
  },
  {
    "url": "database.html",
    "revision": "4ab44eb2ebed7a4e136404c3083907eb"
  },
  {
    "url": "develop.html",
    "revision": "53750daf23512082da3baa71fb0ab411"
  },
  {
    "url": "en/compatibility.html",
    "revision": "3de1a276f6b80d917f2c4d4be2bb2e5d"
  },
  {
    "url": "en/database.html",
    "revision": "9a89bedff6365ba056f152ff1f729004"
  },
  {
    "url": "en/example.html",
    "revision": "2936abb95796334244ad8dd6197237e4"
  },
  {
    "url": "en/faq.html",
    "revision": "20be3fa8fd6acdf0f55f1a33e68e668d"
  },
  {
    "url": "en/index.html",
    "revision": "ee3fb044527c8c39eb66f28088a6e0ff"
  },
  {
    "url": "en/siterule.html",
    "revision": "a520b3818c7fa72b3e2e7207c9961237"
  },
  {
    "url": "example.html",
    "revision": "d9c0d8f6d9d03bd5fd4fef243ed0fd8b"
  },
  {
    "url": "faq.html",
    "revision": "f5c439e85d07defeb816e70a69601a43"
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
    "revision": "de517b889a06a604c9ff9edfcfde57a0"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "c34c14afbc3c4591d3e84f15d0ca84f5"
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
