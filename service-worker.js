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
    "revision": "35fe7257f0c78ada487339d662a03d6b"
  },
  {
    "url": "assets/css/0.styles.5b256991.css",
    "revision": "3db567e4d8b4e8ecfffafda0cd9179de"
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
    "url": "assets/js/11.cc536cb8.js",
    "revision": "d41deda9175485e4a24c01d435ab812b"
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
    "url": "assets/js/2.952d6626.js",
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
    "url": "assets/js/3.50c2a0c5.js",
    "revision": "a6ecfec321471df1439a0a60e7d72548"
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
    "url": "assets/js/6.e10b39ee.js",
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
    "url": "assets/js/app.b25038dd.js",
    "revision": "b6bb5b9334a0fe76eff656a127a2c3a2"
  },
  {
    "url": "compatibility.html",
    "revision": "877e00a240811b7ce600e613808cb5d9"
  },
  {
    "url": "database.html",
    "revision": "7e455da225f83a4adee6eea7035c2915"
  },
  {
    "url": "example.html",
    "revision": "bc568b09db526321de3bd0cfbefb79bd"
  },
  {
    "url": "faq.html",
    "revision": "858041b6eca1a185da909233528056f4"
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
    "revision": "5c3daf54b32f3887d4b4cf0438bdb33e"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "d16fd7ce00ee7e954f797c249570f16b"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "77c0115eb930d2142059ee4f205fe4f9"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "57c3de3b1275a7f5b6f28c246de32ea6"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "dbfca24ee23da04ce0838cb8b5e77cee"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "14593bf334d01b5aaca61c37e5ad4ee5"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "3a0ebfef8a1f8292215af9c6603ef568"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "c3c0035deb7c4bfacc793d5c5d14b0b8"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "e8857c3a2c2a563ea28e3df726cd82a4"
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
