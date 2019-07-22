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
    "revision": "d300e1b5907e79c8183dbad6fe9ebade"
  },
  {
    "url": "assets/css/0.styles.a4d9bff8.css",
    "revision": "47ad92bb4e1910bf8a121d88f708f9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b240d937.js",
    "revision": "be424dd95e7a2e0caa0b7ab5753bee08"
  },
  {
    "url": "assets/js/11.680cffd3.js",
    "revision": "e9146d37ae7fe211f25d7aae0ff5d011"
  },
  {
    "url": "assets/js/12.712f6acc.js",
    "revision": "55bdc66a85ec5528287aa11394930e3a"
  },
  {
    "url": "assets/js/13.874e0647.js",
    "revision": "f01614dedb4a02abf5bfef9dae65d773"
  },
  {
    "url": "assets/js/14.ec55bec3.js",
    "revision": "a5e4af0b78cb824b1cd911b62df17fae"
  },
  {
    "url": "assets/js/15.63d34e4d.js",
    "revision": "7517a499b56630c30f505f67357ff083"
  },
  {
    "url": "assets/js/16.3b75777f.js",
    "revision": "3c76d653bd60c306e44088aa5df0e0f0"
  },
  {
    "url": "assets/js/17.a77e8acd.js",
    "revision": "b9194044ed7721e7fbd13d0ff67a4e94"
  },
  {
    "url": "assets/js/18.37ab9cee.js",
    "revision": "a31fc85200443cf2faf9caa0b5ce31aa"
  },
  {
    "url": "assets/js/19.bd77326d.js",
    "revision": "b9bc10b99d2629467dfba05f0c09978e"
  },
  {
    "url": "assets/js/2.dfadd8ce.js",
    "revision": "10a4c820aab7971e39095b51452629fd"
  },
  {
    "url": "assets/js/20.36b96394.js",
    "revision": "55dc247961f93b76ab3d76f7255b5806"
  },
  {
    "url": "assets/js/3.a0651c09.js",
    "revision": "16240fa4969a41682ae2d20f5b793a31"
  },
  {
    "url": "assets/js/4.6e334a9b.js",
    "revision": "a8dabba7705b71a60d1d88474014c8ca"
  },
  {
    "url": "assets/js/5.5d843e41.js",
    "revision": "a844d2119bf41742609998dd4f030a06"
  },
  {
    "url": "assets/js/6.983cff3d.js",
    "revision": "827e3c5c0e9fd36173da20408e16ac77"
  },
  {
    "url": "assets/js/7.d84190d7.js",
    "revision": "9e7352b2a5f20677cfeccc3bc6684263"
  },
  {
    "url": "assets/js/8.2c215bcb.js",
    "revision": "3f5c0c5e0d6209f78d6390c379935838"
  },
  {
    "url": "assets/js/9.2a35f5d2.js",
    "revision": "79dc77df0c6a97b9df5d5f2ebb8ab272"
  },
  {
    "url": "assets/js/app.a83ba9d7.js",
    "revision": "bbf9ec3bfbd549f5ab83d50e3fad9f5b"
  },
  {
    "url": "compatibility.html",
    "revision": "177ecf3c424fa09586adb805a91485bd"
  },
  {
    "url": "database.html",
    "revision": "5b25a0b93d1db60f8af7c2f0d7c9a79a"
  },
  {
    "url": "develop.html",
    "revision": "8a010ca9622ff314c27d8da99db467b9"
  },
  {
    "url": "en/compatibility.html",
    "revision": "5237afe9ff2034b8d8254bc4b60d44c2"
  },
  {
    "url": "en/database.html",
    "revision": "5eed8433ac20be359ab52791c94bd8c0"
  },
  {
    "url": "en/example.html",
    "revision": "44ee048a69f5719d5a5e7e6e91ab4357"
  },
  {
    "url": "en/faq.html",
    "revision": "009fc8c22f8d3b6b374048d7e0d30f30"
  },
  {
    "url": "en/index.html",
    "revision": "fcbe860d2c172371c4385326b6866ade"
  },
  {
    "url": "en/siterule.html",
    "revision": "392bc3ac45999b70ad107b7ddffa5758"
  },
  {
    "url": "example.html",
    "revision": "0a20ba7ff657687d6b553b1b52305c2f"
  },
  {
    "url": "faq.html",
    "revision": "877c00cc4d0f4f5e63db075101f3ae6d"
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
    "revision": "ac0d432a20382c038f43fbc406308454"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "eacb6f12cd7bacedc7f8f3b3a7a2c128"
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
