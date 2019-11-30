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
    "revision": "40263d9ba5b43a9d55fa3b9188a11525"
  },
  {
    "url": "assets/css/0.styles.f839e6f0.css",
    "revision": "2552925582e7cc514182e4b4d7213dac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5688c30d.js",
    "revision": "ee082dd316edba30fd0705909cbb6105"
  },
  {
    "url": "assets/js/11.e2e88021.js",
    "revision": "feb6b5ec52a2bff1c112a2a1739ff2e9"
  },
  {
    "url": "assets/js/12.55b797f3.js",
    "revision": "fc5767848e3f48aec475f9c6b0ca39be"
  },
  {
    "url": "assets/js/13.563f5702.js",
    "revision": "403fccb26ee6a5d495fa4bf976fa9c62"
  },
  {
    "url": "assets/js/14.01f53b50.js",
    "revision": "730fb50af7c87cd343f98a1a9439870d"
  },
  {
    "url": "assets/js/15.721225db.js",
    "revision": "794cadc4cc5d826e85fad87cb1774d45"
  },
  {
    "url": "assets/js/16.5349d1d1.js",
    "revision": "09e24329e5b2b63095396f4689e50825"
  },
  {
    "url": "assets/js/17.88df28ac.js",
    "revision": "fbcf51fbe4366cf53c40e64272fb66c3"
  },
  {
    "url": "assets/js/18.2e49bace.js",
    "revision": "f0228409427fedf5985e354d9e87c2eb"
  },
  {
    "url": "assets/js/19.7d926eac.js",
    "revision": "9b982150e3451d77a7de5e2b770381da"
  },
  {
    "url": "assets/js/2.4c7c9d7d.js",
    "revision": "dea22dd84a01e7cc8d33b8a60cf30eac"
  },
  {
    "url": "assets/js/20.566cf8e5.js",
    "revision": "60b5f019772c818f226570a0ece129d5"
  },
  {
    "url": "assets/js/3.7119df21.js",
    "revision": "e5a8337eb19c3d98c6403ddf00394dea"
  },
  {
    "url": "assets/js/4.77b52ae4.js",
    "revision": "0b1aef2d1b95d9f25e74ae01e4025b11"
  },
  {
    "url": "assets/js/5.5d39f307.js",
    "revision": "893244a7029d522627aecca49537185d"
  },
  {
    "url": "assets/js/6.4c428064.js",
    "revision": "67d6cc0516a12eafaa53f4379046af1b"
  },
  {
    "url": "assets/js/7.07f3de77.js",
    "revision": "1724e2b7b8541ce4536352c7a32e655f"
  },
  {
    "url": "assets/js/8.ee9e683e.js",
    "revision": "febad21057a703276c614d00adf4b730"
  },
  {
    "url": "assets/js/9.ba59a33d.js",
    "revision": "3de131430f6ff0390ff2cd64d40f02d7"
  },
  {
    "url": "assets/js/app.156634f9.js",
    "revision": "5b69463658bab1f0b1c7482e8d02082d"
  },
  {
    "url": "compatibility.html",
    "revision": "f1545ef0a1b67a3f5b518d10bb0d4627"
  },
  {
    "url": "database.html",
    "revision": "ac1c8234d84501ebfebab6c3c5ecc03c"
  },
  {
    "url": "develop.html",
    "revision": "e268f92e19416a66fb741812792d6d3c"
  },
  {
    "url": "en/compatibility.html",
    "revision": "41ac61af1c0ad20cadad0b62a634501a"
  },
  {
    "url": "en/database.html",
    "revision": "9cf87b8b3dcbd20cdcef6dc78f153c9c"
  },
  {
    "url": "en/example.html",
    "revision": "5b190e215b816e4db0efb370f824ec85"
  },
  {
    "url": "en/faq.html",
    "revision": "2d769b64bb73afc49bddf228f04a2c4c"
  },
  {
    "url": "en/index.html",
    "revision": "91dc610fde05cfbd267b1dc3003d00fa"
  },
  {
    "url": "en/siterule.html",
    "revision": "d574c7286b7615fb1456765ba71244c8"
  },
  {
    "url": "example.html",
    "revision": "968cac8727e488aeb7269a9fd2653e4e"
  },
  {
    "url": "faq.html",
    "revision": "27df1adf1e4f9f8cd33350c4f6d28b17"
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
    "revision": "a1127da187e4ca05ff721bc114ccc67a"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "cb24b9279505f3e5ea3fbf4e33a2d2c5"
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
