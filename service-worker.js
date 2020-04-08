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
    "url": "assets/css/0.styles.92961ea0.css",
    "revision": "d6cd61c417f8cf81258784d67683aff0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.71962aec.js",
    "revision": "23d7bf7d0c3d15c8a8e90e1b3dbd43e8"
  },
  {
    "url": "assets/js/11.6003b924.js",
    "revision": "df8024d07b8bb76ef80f33a9e69b5a21"
  },
  {
    "url": "assets/js/12.b800f92f.js",
    "revision": "92ff300e187baf925f94672cbdbd5182"
  },
  {
    "url": "assets/js/13.07f285b3.js",
    "revision": "d5aa924be5b05b305a3449595437e9af"
  },
  {
    "url": "assets/js/14.0c8d5a9b.js",
    "revision": "64ec5c85ed2f3975a7896710621fcb15"
  },
  {
    "url": "assets/js/15.179091c8.js",
    "revision": "33a4e9202fb6a54daa2bfb646bba561f"
  },
  {
    "url": "assets/js/16.dcf9a5ba.js",
    "revision": "c627162b8adde6c61f57a6ae0f9fa881"
  },
  {
    "url": "assets/js/17.eb6b11ca.js",
    "revision": "a92c2ac6fd3751d4f2bce06d149ebdfd"
  },
  {
    "url": "assets/js/18.fd8100b4.js",
    "revision": "34d1b864da531bf52ffc91f3b78c55de"
  },
  {
    "url": "assets/js/19.2857f60d.js",
    "revision": "3833c91fdb450455d87e05b8afb65a63"
  },
  {
    "url": "assets/js/2.98defbbc.js",
    "revision": "f4a51b57096a2439d4759661e5f78915"
  },
  {
    "url": "assets/js/20.17df45b8.js",
    "revision": "7662548badb5571f4be1b7ed4779b13d"
  },
  {
    "url": "assets/js/21.085c54a8.js",
    "revision": "81fe838825e1c0fe7c86c2c229d7f436"
  },
  {
    "url": "assets/js/3.2b2a6df1.js",
    "revision": "dc69b3bc1ecfb566168bc0bf74c39171"
  },
  {
    "url": "assets/js/4.9afd5fd2.js",
    "revision": "d11fe8d3b5936eee4a5bbc2e75e1be7f"
  },
  {
    "url": "assets/js/5.5fea0dd9.js",
    "revision": "d26b37bf3cf8391251a6bf3ccb8afb04"
  },
  {
    "url": "assets/js/6.743b4023.js",
    "revision": "da197c6c55ac469f7c9006b53c9036b8"
  },
  {
    "url": "assets/js/7.27232d1d.js",
    "revision": "3b175dcfb5908f9401b1821d43181cc9"
  },
  {
    "url": "assets/js/8.5af6853c.js",
    "revision": "0761356346897c67a52ac2dd8f037dd3"
  },
  {
    "url": "assets/js/9.a75167b7.js",
    "revision": "889c4fa2655d5f62397d269b8101b938"
  },
  {
    "url": "assets/js/app.305a6e43.js",
    "revision": "da6547fd508dbbb80202148ff244fbb5"
  },
  {
    "url": "compatibility.html",
    "revision": "53ccdd95c98467f94e1f510a8b642a37"
  },
  {
    "url": "database.html",
    "revision": "abb7fe19bc2b2b5863e9296e383dd121"
  },
  {
    "url": "example.html",
    "revision": "26aad0b7ac24c9be19f19e64544683e2"
  },
  {
    "url": "faq.html",
    "revision": "50e7b517773225327b006a2acdbfcfdd"
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
    "revision": "ebf3ab77a3d18fa1a4a2dd9f17948bc3"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "48813dbc987df93992d1362c5d86d962"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "7b294ff00952dc1ebc2da3c1db15b311"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "3a6d44cdff7e7dbe80eadd588e4e4706"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "b546e49169eb7be3499ebc36e4bc4f2b"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "5ca7bad257113f780153ddfe76828579"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "47bbd5e40b808781f0d72b3802a3b8c4"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "13c7aeb56996bb7c473765aac4c68d29"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "a1ebb6dd9686ca68bd6c4f1d4220eb3a"
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
