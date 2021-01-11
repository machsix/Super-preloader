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
    "revision": "dbde83e50ad29f8f32cea44afa3b91f5"
  },
  {
    "url": "assets/css/0.styles.ee31727c.css",
    "revision": "b166fe6eb6d6a2212403316075a2b66e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bab33c82.js",
    "revision": "756e73f6b8445ab016b7cbcdfd07b699"
  },
  {
    "url": "assets/js/11.d8b78d39.js",
    "revision": "d97f744d8f15d72b0451413db6eca74d"
  },
  {
    "url": "assets/js/12.0b8b8c98.js",
    "revision": "4f284d27c541bdac2528290de8e36ed3"
  },
  {
    "url": "assets/js/13.414d0583.js",
    "revision": "4f6b18ce166adb42e0794fe5a4a6c25a"
  },
  {
    "url": "assets/js/14.dbc4774b.js",
    "revision": "3371610d40117d8c7903db1b690b5a1a"
  },
  {
    "url": "assets/js/15.60e46448.js",
    "revision": "74fb71ef679c6b83759c243f86483320"
  },
  {
    "url": "assets/js/16.556655be.js",
    "revision": "7ad780ec528e369d5e8c83c9d43bd7e8"
  },
  {
    "url": "assets/js/17.97af26bd.js",
    "revision": "8a8e1daccd4ddc07601021c265cc5ee0"
  },
  {
    "url": "assets/js/18.1c4f0ea7.js",
    "revision": "3e91a9d118baebd0591ee43caa7c7c52"
  },
  {
    "url": "assets/js/19.17835bfa.js",
    "revision": "a9fc09c5995f1236afdf95a221299d46"
  },
  {
    "url": "assets/js/2.5207d5ec.js",
    "revision": "c1ce6fc0e90123f4a537f5598fa0d759"
  },
  {
    "url": "assets/js/20.e53a5e0d.js",
    "revision": "91ea79cbbd07f38efa3d56b1030e5a82"
  },
  {
    "url": "assets/js/21.b8ca74bf.js",
    "revision": "be2f88495d9012b0611d215cd2d6f0c9"
  },
  {
    "url": "assets/js/22.6de9cdd4.js",
    "revision": "8d4f49a6105072bff5fec7edda848a0c"
  },
  {
    "url": "assets/js/3.f90f090a.js",
    "revision": "51af21cb58f7fa6814e952545b3a8e06"
  },
  {
    "url": "assets/js/4.44f7d00f.js",
    "revision": "925aa90612d2a99c37875f92c6f758be"
  },
  {
    "url": "assets/js/5.1efd4215.js",
    "revision": "d77981ec9422e30fe5003132073615a3"
  },
  {
    "url": "assets/js/6.58fdf239.js",
    "revision": "21eaf075bca3b1a6ffd814340351de75"
  },
  {
    "url": "assets/js/7.e710bde5.js",
    "revision": "b26bdd2a2312bb32f94e2acb2d772808"
  },
  {
    "url": "assets/js/8.c5fbb362.js",
    "revision": "17435e6b4cb0146943faf1978a0284d8"
  },
  {
    "url": "assets/js/9.3b7eeab2.js",
    "revision": "13612be49cfa234e8d56aeabd036dd75"
  },
  {
    "url": "assets/js/app.74082d24.js",
    "revision": "0e10086036bb32e10d25bb9a080bd457"
  },
  {
    "url": "compatibility.html",
    "revision": "6fe5236a5e9363e5c7d2d12ae38b0b71"
  },
  {
    "url": "database.html",
    "revision": "c3faa5756d590ef7942087b1ab788fe1"
  },
  {
    "url": "example.html",
    "revision": "fd267268d902fba426980b070e38fdb1"
  },
  {
    "url": "faq.html",
    "revision": "6d631a781976f9533c771db9fac0b2aa"
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
    "revision": "39b4b30fea530cc4a4686d5f795b3354"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "6f7c1bebac456e870c52d3eef9e6932b"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "af55fb74a2154d8267ecaab591303f4b"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "856e1a283b3bddcf442dba31c8ba6234"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "1c3ce5282f1658cf5e88310abdc4bad2"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "33327f0a3814f50376a2e6d520a5ea93"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "77fe43d285a0491d5549b837593685ec"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "8904c92e9f828f4086319f85ddb90e9e"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "b03653ff38a8ef2de9898b48e5cabfb1"
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
