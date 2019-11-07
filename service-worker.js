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
    "revision": "f673a43af6d4830395263023ee28c552"
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
    "url": "assets/js/10.cdc2086c.js",
    "revision": "199d4bef55426129c7a1d16072051bc8"
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
    "url": "assets/js/19.d3ef1e9e.js",
    "revision": "efee1f7893174ec7248a9a3b5d5bee40"
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
    "url": "assets/js/9.0a25ceb3.js",
    "revision": "c641ae2381d0212494e726dea45f05f5"
  },
  {
    "url": "assets/js/app.f1dddb71.js",
    "revision": "96485e4c374bdb0c44d8ea55f23244f2"
  },
  {
    "url": "compatibility.html",
    "revision": "d335e56e42dc3711e0269683eeab1db9"
  },
  {
    "url": "database.html",
    "revision": "5ce1b6f0b6896bbaf6258dae1ed73a2a"
  },
  {
    "url": "develop.html",
    "revision": "98315bf426770a82df71c121a9c840d2"
  },
  {
    "url": "en/compatibility.html",
    "revision": "d507decc18c1973a5c5034eb0d20fa07"
  },
  {
    "url": "en/database.html",
    "revision": "262a5986352ee47d9f4f94c1cb987c02"
  },
  {
    "url": "en/example.html",
    "revision": "dc51d5c04051bce9f147d53ece7dc627"
  },
  {
    "url": "en/faq.html",
    "revision": "2985196898535255fc1390fa945dcf1b"
  },
  {
    "url": "en/index.html",
    "revision": "52d8fa2fdc8e297a06be8b1b86856394"
  },
  {
    "url": "en/siterule.html",
    "revision": "677ca0b98e620386c452f9f31af4bcab"
  },
  {
    "url": "example.html",
    "revision": "99378959a77280c4ecf83da50db7b97d"
  },
  {
    "url": "faq.html",
    "revision": "bfdfef038b8c38b8048507ebb956069d"
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
    "revision": "d529fb4ce53a19735b118dcbc02ca2f9"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "63189cea6e07284655feaa91c41d954e"
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
