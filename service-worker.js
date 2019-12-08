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
    "revision": "84122ff40c17777598b06d9ff40438d0"
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
    "url": "assets/js/7.a67748d2.js",
    "revision": "2444b9c9a7bc99d44ba79b58e6d0ea7c"
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
    "url": "assets/js/app.ddf4d96f.js",
    "revision": "24fe25392fe986c77bf8b6630c40e673"
  },
  {
    "url": "compatibility.html",
    "revision": "0de84dd6292d2a04e6672d7eb9de814a"
  },
  {
    "url": "database.html",
    "revision": "d92aae9ff7f3dafaa0166ec5472e3438"
  },
  {
    "url": "develop.html",
    "revision": "53d3deef0ee1201fc05f3f54113556cc"
  },
  {
    "url": "en/compatibility.html",
    "revision": "0151b83ee5bc5db2ca87c0537766a70b"
  },
  {
    "url": "en/database.html",
    "revision": "2d1455ad9de746a53860498b97d59850"
  },
  {
    "url": "en/example.html",
    "revision": "0bf882a0f7b53013f79f01d0b6ec3ede"
  },
  {
    "url": "en/faq.html",
    "revision": "d82ec0093379211eb168d9ea8b6b8378"
  },
  {
    "url": "en/index.html",
    "revision": "5b9ba7205bdf85be5588ca5b5d36ea43"
  },
  {
    "url": "en/siterule.html",
    "revision": "e6726cce94444e8c341ee147f7b0f2ca"
  },
  {
    "url": "example.html",
    "revision": "3b77fd1a9c13ac477cc5828ef75e3837"
  },
  {
    "url": "faq.html",
    "revision": "a3df4083154f4308f0db97e2dbd03586"
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
    "revision": "fd3cf686fade7523a2d021f5ec0e2be7"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "b9c815d413d664c749793bf67194bb51"
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
