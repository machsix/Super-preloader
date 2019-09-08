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
    "revision": "10b1cd50be68da51116abbed3f64fa6a"
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
    "url": "assets/js/17.ce154881.js",
    "revision": "72583569bcc47161a33a399bf3f791e9"
  },
  {
    "url": "assets/js/18.0d687301.js",
    "revision": "618020fd43c300675717d5e037453520"
  },
  {
    "url": "assets/js/19.4cd6aa4d.js",
    "revision": "2b052fdb4081462d6a951c455a442d2d"
  },
  {
    "url": "assets/js/2.54e2ad71.js",
    "revision": "7cd34a8d9e6fe534538c99fb9a4ee98e"
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
    "url": "assets/js/9.c31dac6a.js",
    "revision": "76b5a7117f3d70f61970127b67b13217"
  },
  {
    "url": "assets/js/app.daf8c024.js",
    "revision": "717535aae1a1ec746dbfc1c44ce59fd2"
  },
  {
    "url": "compatibility.html",
    "revision": "1518445681b44d7ab5834cf64c21ca6f"
  },
  {
    "url": "database.html",
    "revision": "d6837a58c2d82148349c8a50fef18c51"
  },
  {
    "url": "develop.html",
    "revision": "43240e7d4b6450bcc0dfd06c9224840d"
  },
  {
    "url": "en/compatibility.html",
    "revision": "a8d913313ac4ae964fc5d32d34a07e7b"
  },
  {
    "url": "en/database.html",
    "revision": "46cbe19a9a61e15a1057c73bd83fbb98"
  },
  {
    "url": "en/example.html",
    "revision": "6f34b11ccb8878c0236afd27a45c1260"
  },
  {
    "url": "en/faq.html",
    "revision": "993a3ad5873b2e7afd1de95da3dd8684"
  },
  {
    "url": "en/index.html",
    "revision": "c5b3e2ddbb00197fb6d18b9ec30912b5"
  },
  {
    "url": "en/siterule.html",
    "revision": "8b7c39ce4f7cede76396c7d9bc58de79"
  },
  {
    "url": "example.html",
    "revision": "243096b9f3327ed629f7d6a5929effd0"
  },
  {
    "url": "faq.html",
    "revision": "a6c320bb7c818066d44cfe674460c5c3"
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
    "revision": "9d94d0ba26a9d0c17ffa660935a99841"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "c2a6488f3d69abe7ea6ed58f1b61c9a0"
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
