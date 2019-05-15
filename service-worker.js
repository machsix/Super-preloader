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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4533bd986b0eed379daf8bc00e5e177"
  },
  {
    "url": "assets/css/0.styles.20b4f909.css",
    "revision": "18451d07b845d6190d6aaf807f1abbc6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d26bf9f0.js",
    "revision": "093eedeb69737e1fa45b27d7db7c0ca3"
  },
  {
    "url": "assets/js/11.62c48c76.js",
    "revision": "15b230a780cfee86ae8027d05692928e"
  },
  {
    "url": "assets/js/12.1071c2b1.js",
    "revision": "ad6704f3dd6396c22160384de864a0f2"
  },
  {
    "url": "assets/js/13.2ef04a1c.js",
    "revision": "9b2c0862c5e96594eec8948bd314c1a9"
  },
  {
    "url": "assets/js/14.750363d8.js",
    "revision": "6cae60e1371f89fbc1232de40cc484e0"
  },
  {
    "url": "assets/js/15.03182645.js",
    "revision": "04da3fa6d6cd9703535153b28e1d4e25"
  },
  {
    "url": "assets/js/16.1aba4c59.js",
    "revision": "aa0f0503ccece6ba8636f873fd4b6938"
  },
  {
    "url": "assets/js/17.c4a61d14.js",
    "revision": "9ce1900962be94dde2d54119234619d2"
  },
  {
    "url": "assets/js/18.fc868e3b.js",
    "revision": "a31fc85200443cf2faf9caa0b5ce31aa"
  },
  {
    "url": "assets/js/19.d703cde4.js",
    "revision": "613a005614f6df43ac7f7cdf5d78828c"
  },
  {
    "url": "assets/js/2.b54ce1c6.js",
    "revision": "e5c33ad5637829be01fc2580b886ceb8"
  },
  {
    "url": "assets/js/20.a16aea1c.js",
    "revision": "55dc247961f93b76ab3d76f7255b5806"
  },
  {
    "url": "assets/js/3.4801cd5f.js",
    "revision": "16240fa4969a41682ae2d20f5b793a31"
  },
  {
    "url": "assets/js/4.7116040e.js",
    "revision": "a8dabba7705b71a60d1d88474014c8ca"
  },
  {
    "url": "assets/js/5.55e81e27.js",
    "revision": "a844d2119bf41742609998dd4f030a06"
  },
  {
    "url": "assets/js/6.d13030d7.js",
    "revision": "2e7d508f22519c37983fb25bec649775"
  },
  {
    "url": "assets/js/7.a8efc374.js",
    "revision": "9e7352b2a5f20677cfeccc3bc6684263"
  },
  {
    "url": "assets/js/8.750628de.js",
    "revision": "3f5c0c5e0d6209f78d6390c379935838"
  },
  {
    "url": "assets/js/9.a96b14ee.js",
    "revision": "79dc77df0c6a97b9df5d5f2ebb8ab272"
  },
  {
    "url": "assets/js/app.2766cbfc.js",
    "revision": "f21c3177ea93da20ef66a6c792a3decd"
  },
  {
    "url": "compatibility.html",
    "revision": "22c7ba801cacfbe9bdbc1ebf37fd103c"
  },
  {
    "url": "database.html",
    "revision": "721f0cb3d38b43a46ea3ba0b1899abb6"
  },
  {
    "url": "develop.html",
    "revision": "3525745dfc20cf630be77a78068393e9"
  },
  {
    "url": "en/compatibility.html",
    "revision": "948244105bb8f0d6e98e057535aa235f"
  },
  {
    "url": "en/database.html",
    "revision": "789e655165a8ed761a606bc0fc701072"
  },
  {
    "url": "en/example.html",
    "revision": "a48c3d32c3d669fd9371f1e67fe55b1e"
  },
  {
    "url": "en/faq.html",
    "revision": "c678906b7ce1458226c2a846c54aa57c"
  },
  {
    "url": "en/index.html",
    "revision": "b1a4a38eaaa9cc7fda653b591112797d"
  },
  {
    "url": "en/siterule.html",
    "revision": "b1ea262d9a44240f0be0f640bb0e4592"
  },
  {
    "url": "example.html",
    "revision": "be1e2b23e97ea286ceddb67e832ecf30"
  },
  {
    "url": "faq.html",
    "revision": "2b812f9ee597a0f853d11ed2b6319875"
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
    "revision": "627f1694bec2874be9ca98a85d10bd4a"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "683e357c1283a9860fde51fb82b8db1e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
