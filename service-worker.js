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
    "revision": "5d84cd9bff2a6ebe557df4ac911740fe"
  },
  {
    "url": "assets/css/0.styles.ef0a44ec.css",
    "revision": "2552925582e7cc514182e4b4d7213dac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f26571d.js",
    "revision": "c7bbb652c2b3780cdba069f679fc2f91"
  },
  {
    "url": "assets/js/11.8ae9ab9c.js",
    "revision": "e06ba91525b860c77899d18d39af75b4"
  },
  {
    "url": "assets/js/12.8e829039.js",
    "revision": "f178621ed2d456cdcd3853ad04b7eac1"
  },
  {
    "url": "assets/js/13.97213d2b.js",
    "revision": "a7e6ab81b0b828e20bb021ee5dd8f3fe"
  },
  {
    "url": "assets/js/14.0a20d578.js",
    "revision": "669de7f6f084c1018cf997f6a8367bdf"
  },
  {
    "url": "assets/js/15.158dfeb3.js",
    "revision": "9786c447556875e6f6ad63ba07ea8d76"
  },
  {
    "url": "assets/js/16.5a8d0062.js",
    "revision": "61bc0b3fb337fdd2025349c00a71984f"
  },
  {
    "url": "assets/js/17.2922a9cc.js",
    "revision": "fbcf51fbe4366cf53c40e64272fb66c3"
  },
  {
    "url": "assets/js/18.23f4371f.js",
    "revision": "f0228409427fedf5985e354d9e87c2eb"
  },
  {
    "url": "assets/js/19.e9922933.js",
    "revision": "9b982150e3451d77a7de5e2b770381da"
  },
  {
    "url": "assets/js/2.a72ee15b.js",
    "revision": "22bbd76e7ab63f15826edeb76c349e45"
  },
  {
    "url": "assets/js/20.cc41e0a2.js",
    "revision": "60b5f019772c818f226570a0ece129d5"
  },
  {
    "url": "assets/js/3.6b84e9e9.js",
    "revision": "e5a8337eb19c3d98c6403ddf00394dea"
  },
  {
    "url": "assets/js/4.4a7e4d9e.js",
    "revision": "0b1aef2d1b95d9f25e74ae01e4025b11"
  },
  {
    "url": "assets/js/5.b0357beb.js",
    "revision": "893244a7029d522627aecca49537185d"
  },
  {
    "url": "assets/js/6.ec6c6c62.js",
    "revision": "67d6cc0516a12eafaa53f4379046af1b"
  },
  {
    "url": "assets/js/7.2798ac5d.js",
    "revision": "c5af7ad51b6ee45e54f10b88266e16b3"
  },
  {
    "url": "assets/js/8.ecea01a2.js",
    "revision": "e9d4072db15b5813afd530f05176f623"
  },
  {
    "url": "assets/js/9.c00314e5.js",
    "revision": "d2d3331e7a631f0143590f82224d99c7"
  },
  {
    "url": "assets/js/app.3297ae1e.js",
    "revision": "fa10caf590c32a1c86cc9071d65d0a4f"
  },
  {
    "url": "compatibility.html",
    "revision": "ee8ac249b1246d044d3f96a3dede0db4"
  },
  {
    "url": "database.html",
    "revision": "8e769a03cd142f4f986f9fdccee3938c"
  },
  {
    "url": "example.html",
    "revision": "0ec2a5a1c376cae03356b005450d9f92"
  },
  {
    "url": "faq.html",
    "revision": "9d1bf1bff94f80e1fbf6151fd6f818f7"
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
    "revision": "4dec872b2deb1b5cbfe241235b51245c"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "14a56d6cd6fc4915ad213c82a3760de6"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "1695a6f32180f8329453f7ca6898f5a8"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "00d3fde2035cffbc1914eaadbc879048"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "1d2e5dbabd928ca5465d0598b7e5d173"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "20d93a9facc14a96ce603e8705d29425"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "c3f4608ed3362b2b6d67684ecdf0b42a"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "d3ff45e5d4fed2f0ecb57e660c2e5db4"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "b702a43696d3f143cb255de101933215"
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
