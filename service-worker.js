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
    "revision": "b9039808e9fa21dcacee7be801059bc9"
  },
  {
    "url": "assets/css/0.styles.34b7341a.css",
    "revision": "47ad92bb4e1910bf8a121d88f708f9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.92e25cb7.js",
    "revision": "6bb00056f47ea2547f61076c3b80ef4f"
  },
  {
    "url": "assets/js/11.ca66cf02.js",
    "revision": "62e61622b574643bada2e056464e8af8"
  },
  {
    "url": "assets/js/12.8875f487.js",
    "revision": "b7506fa52304c141ac6e8b352a0a1eca"
  },
  {
    "url": "assets/js/13.8ae999e5.js",
    "revision": "1ac15fa7de53ab2dc0f2be34b506d2d8"
  },
  {
    "url": "assets/js/14.7928983d.js",
    "revision": "b4128c0e1d5042e8d32cccef8143915c"
  },
  {
    "url": "assets/js/15.dc8e79c3.js",
    "revision": "1f22cf8b4c4536320e1dc8f1bafd638e"
  },
  {
    "url": "assets/js/16.69954d96.js",
    "revision": "8bd5a16889e59da3b4f20e14f73d3399"
  },
  {
    "url": "assets/js/17.952a0081.js",
    "revision": "58fc9992587946b32e7a8aef1df3e7cd"
  },
  {
    "url": "assets/js/18.78f51484.js",
    "revision": "23e42e959681ba5bddebd725c904e474"
  },
  {
    "url": "assets/js/19.4cd6aa4d.js",
    "revision": "2b052fdb4081462d6a951c455a442d2d"
  },
  {
    "url": "assets/js/2.54e2ad71.js",
    "revision": "9d3c89435d09607f7793b06d00d98c52"
  },
  {
    "url": "assets/js/20.5ab1a0a5.js",
    "revision": "4b2ca9ced891ef9f3d913f3fbfc32f6f"
  },
  {
    "url": "assets/js/3.a88712bf.js",
    "revision": "3aaa120d0b7964c4636d8866af37f9ea"
  },
  {
    "url": "assets/js/4.ffa03f7e.js",
    "revision": "87943da5eb4f492831e7b5ac325df9f0"
  },
  {
    "url": "assets/js/5.1ff4c5f7.js",
    "revision": "5abd138113899d5b4d187b3ec566d462"
  },
  {
    "url": "assets/js/6.65222074.js",
    "revision": "e0ecf744e317dcb3d6a16953eea5a83f"
  },
  {
    "url": "assets/js/7.4144ae2b.js",
    "revision": "951b9adfeb6beed4cc4322b959b0cb20"
  },
  {
    "url": "assets/js/8.6a5167dd.js",
    "revision": "12835aef3924576c4773f96c88dee0b7"
  },
  {
    "url": "assets/js/9.c0ac1dc8.js",
    "revision": "0602d71019c25ba3cc8f7e2e390ef9ae"
  },
  {
    "url": "assets/js/app.2fef3260.js",
    "revision": "4e7d28ceb627dbf2976ef8c29827e9b8"
  },
  {
    "url": "compatibility.html",
    "revision": "cb88e5d034255f971c3626ac743ab1f0"
  },
  {
    "url": "database.html",
    "revision": "91b6ae68049a96ff2ec19f931bd864d2"
  },
  {
    "url": "develop.html",
    "revision": "f3ee84f90946a0b76d294e6af67e0469"
  },
  {
    "url": "en/compatibility.html",
    "revision": "8c7f9d8c6a2636858eceb700eb2b6aa3"
  },
  {
    "url": "en/database.html",
    "revision": "721a2c4e10c746a17bcc524fb6b2ae94"
  },
  {
    "url": "en/example.html",
    "revision": "0068b0409944fd88acab333d4a4596b7"
  },
  {
    "url": "en/faq.html",
    "revision": "358116575ef0cb3fcc7d9ee27c8d8114"
  },
  {
    "url": "en/index.html",
    "revision": "56d5f104a7df7ce3a47eceba20c8dcd7"
  },
  {
    "url": "en/siterule.html",
    "revision": "5b2f9a4172317e919a21b74f81f13d45"
  },
  {
    "url": "example.html",
    "revision": "09d024a4f7bfb0d77ae5f1b832ab9a5d"
  },
  {
    "url": "faq.html",
    "revision": "76d2636e67c46658aa63e1a6d917920f"
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
    "revision": "0a43eda867bd32c946e8deb35c692d8f"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "bf343b50066028c75f7074b9aa148aac"
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
