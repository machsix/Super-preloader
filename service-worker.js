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
    "revision": "a84fb37fb76991f3052429b26accc3b1"
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
    "url": "assets/js/16.d3f7a668.js",
    "revision": "98e776811b7160c5e3d587819e4b29e2"
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
    "url": "assets/js/app.bdd8f775.js",
    "revision": "710969c7da5cf7490c43b2db4b8bd306"
  },
  {
    "url": "compatibility.html",
    "revision": "204a05d34ffc736907a730d33b11700a"
  },
  {
    "url": "database.html",
    "revision": "216f534376e8cc6a369ba5dac800de75"
  },
  {
    "url": "develop.html",
    "revision": "b41a422f0f9e20a8cc4ceac07d85173d"
  },
  {
    "url": "en/compatibility.html",
    "revision": "00b5691a90bbafac60ed1ee7b2283d4b"
  },
  {
    "url": "en/database.html",
    "revision": "558090242f6023d96e308cbb02258074"
  },
  {
    "url": "en/example.html",
    "revision": "a7b5e7810919f27c798706b204714c69"
  },
  {
    "url": "en/faq.html",
    "revision": "d26b8313ddb97daaf1d6752133bca7ae"
  },
  {
    "url": "en/index.html",
    "revision": "171890177496458edd58c1b6df2d2480"
  },
  {
    "url": "en/siterule.html",
    "revision": "70ce08adc273e18738360323aecf2dea"
  },
  {
    "url": "example.html",
    "revision": "c76d8cceeff1857ffbe758fe58f59cf2"
  },
  {
    "url": "faq.html",
    "revision": "d3b2e1751b86d96102f751d862a3ec38"
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
    "revision": "fd40568b1d24d8c1d5252f1cefa37ba1"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "90b03a2613180ae487be3c7d16ed1e09"
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
