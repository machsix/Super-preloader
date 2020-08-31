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
    "revision": "edc2987af1e675eef31f1fbf6b54776f"
  },
  {
    "url": "assets/css/0.styles.0eec608f.css",
    "revision": "a7efc6716dcbc68a4cbeb858eef87f8d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.de936fe8.js",
    "revision": "ce978db97a17914fcacff6693ece1e01"
  },
  {
    "url": "assets/js/11.fa687ee3.js",
    "revision": "9ef28e34d0a05bb1eba6613bcb29db8d"
  },
  {
    "url": "assets/js/12.84ca04f9.js",
    "revision": "cc1485b71f89a3c0151bf84efb1febb9"
  },
  {
    "url": "assets/js/13.aed5a420.js",
    "revision": "97577d992681e8505c7b120c6a91d9bc"
  },
  {
    "url": "assets/js/14.7fb4f9c4.js",
    "revision": "5e7647c33c71b77ae9c75f6669aef4b1"
  },
  {
    "url": "assets/js/15.bee25a41.js",
    "revision": "0cf0c425d6d7e9a009ec4ca1df57d71b"
  },
  {
    "url": "assets/js/16.8016a321.js",
    "revision": "bebf5d1e3f53c8eafaa953fdc9013d4e"
  },
  {
    "url": "assets/js/17.dc0f182c.js",
    "revision": "f9d3b66e1082e8c96939e694dc90a77c"
  },
  {
    "url": "assets/js/18.a13016e2.js",
    "revision": "ec5760dff338955634ff07f4c138a437"
  },
  {
    "url": "assets/js/19.94d5d895.js",
    "revision": "e762167700041f9063767ad75201f2f7"
  },
  {
    "url": "assets/js/2.e3117809.js",
    "revision": "ededef00c6d3a19c71ce4675ea944940"
  },
  {
    "url": "assets/js/20.7bc9347e.js",
    "revision": "1eed54e26e7aa9f91bb8b25baad2336f"
  },
  {
    "url": "assets/js/3.1d3118c1.js",
    "revision": "7580f23714b4fe228401e630051a000b"
  },
  {
    "url": "assets/js/4.7fba8e88.js",
    "revision": "6536f455cb1c626ab4aeb2164409dc80"
  },
  {
    "url": "assets/js/5.257d4ea8.js",
    "revision": "78998a18de7f89234b537d383eb1d09c"
  },
  {
    "url": "assets/js/6.e3f8e85b.js",
    "revision": "746fb9cc186572b8c30063c44582eb13"
  },
  {
    "url": "assets/js/7.229d9434.js",
    "revision": "e5018d41dcc8bcc94ec789c105079d53"
  },
  {
    "url": "assets/js/8.5a6569b1.js",
    "revision": "99cb887bd481752243692b340cd07cfb"
  },
  {
    "url": "assets/js/9.79e2725f.js",
    "revision": "4688c9338639de0138ae3a90f2ee4c37"
  },
  {
    "url": "assets/js/app.9c8eafa6.js",
    "revision": "7d8fdb539b16fd777ad60db875554fff"
  },
  {
    "url": "compatibility.html",
    "revision": "e89949d56bc633d1ca2b58a2aebee71c"
  },
  {
    "url": "database.html",
    "revision": "5c331cd4f3f66efd0e295c22e90ab184"
  },
  {
    "url": "example.html",
    "revision": "4c840d4059051c52e5203ea2fbece11c"
  },
  {
    "url": "faq.html",
    "revision": "aca280b970bdfdca7a9d8f354c900a71"
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
    "revision": "e0dfdd4c95c3589d88cfb1c3300a42a0"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "9adadf328126206c94c627f4e164218d"
  },
  {
    "url": "zh-cn/compatibility.html",
    "revision": "fe72a25de6d5c77e1cbcc4e0fed6a88c"
  },
  {
    "url": "zh-cn/database.html",
    "revision": "6f89853f6ef3bcc290dd20d693137aaf"
  },
  {
    "url": "zh-cn/develop.html",
    "revision": "79d7593ba91d02bc72bd715134de3bc1"
  },
  {
    "url": "zh-cn/example.html",
    "revision": "018f940fc31d09d7694bff0e8bb8c157"
  },
  {
    "url": "zh-cn/faq.html",
    "revision": "461e1a833c039e2e12b2741deed44540"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "29120331a2f305bcb39aa98e0304302b"
  },
  {
    "url": "zh-cn/siterule.html",
    "revision": "1a42616b873a975bde1c75b5845cdd55"
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
