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
    "revision": "13b0bed265d900399e78b5d8b1ebf15e"
  },
  {
    "url": "assets/css/0.styles.59ea64c5.css",
    "revision": "47ad92bb4e1910bf8a121d88f708f9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.110ffbb5.js",
    "revision": "455644c6561d2790de5bf10b9aa49a4c"
  },
  {
    "url": "assets/js/11.d959a82f.js",
    "revision": "6b15eadf9d567b7335229ed4cfe594a2"
  },
  {
    "url": "assets/js/12.4ef2fc2e.js",
    "revision": "a831d3b0d51a37d19ee4b4804fae0db2"
  },
  {
    "url": "assets/js/13.482e0fd8.js",
    "revision": "3bfc9e8fbd23e420c3f3e2b134b06168"
  },
  {
    "url": "assets/js/14.587a7d40.js",
    "revision": "b4128c0e1d5042e8d32cccef8143915c"
  },
  {
    "url": "assets/js/15.8b37ce27.js",
    "revision": "1f22cf8b4c4536320e1dc8f1bafd638e"
  },
  {
    "url": "assets/js/16.cd27d31c.js",
    "revision": "8bd5a16889e59da3b4f20e14f73d3399"
  },
  {
    "url": "assets/js/17.820896ac.js",
    "revision": "58fc9992587946b32e7a8aef1df3e7cd"
  },
  {
    "url": "assets/js/18.8ce827c2.js",
    "revision": "23e42e959681ba5bddebd725c904e474"
  },
  {
    "url": "assets/js/19.2634eafa.js",
    "revision": "2b052fdb4081462d6a951c455a442d2d"
  },
  {
    "url": "assets/js/2.d4b76d41.js",
    "revision": "7cd34a8d9e6fe534538c99fb9a4ee98e"
  },
  {
    "url": "assets/js/20.7b7a3008.js",
    "revision": "4b2ca9ced891ef9f3d913f3fbfc32f6f"
  },
  {
    "url": "assets/js/3.401c6277.js",
    "revision": "3aaa120d0b7964c4636d8866af37f9ea"
  },
  {
    "url": "assets/js/4.75e1b150.js",
    "revision": "87943da5eb4f492831e7b5ac325df9f0"
  },
  {
    "url": "assets/js/5.02c66e06.js",
    "revision": "5abd138113899d5b4d187b3ec566d462"
  },
  {
    "url": "assets/js/6.455f6481.js",
    "revision": "e0ecf744e317dcb3d6a16953eea5a83f"
  },
  {
    "url": "assets/js/7.3247af97.js",
    "revision": "5eaaf76493d683cc242992b286f95df1"
  },
  {
    "url": "assets/js/8.3cb6a27c.js",
    "revision": "a3edfa50f6251a7c880b7f7ee05e38bb"
  },
  {
    "url": "assets/js/9.9eb321ad.js",
    "revision": "a491056f111b86cc0c7fbd10c5e28f5f"
  },
  {
    "url": "assets/js/app.1186e132.js",
    "revision": "c16baef5d2192a1d583964a5f389e8d6"
  },
  {
    "url": "compatibility.html",
    "revision": "c46b4b977e70700ded2521fc9ececd03"
  },
  {
    "url": "database.html",
    "revision": "69bfa68aa82125e41d9be587382fdfd8"
  },
  {
    "url": "develop.html",
    "revision": "0080aefb7be5159d24a82fa56b6e2fe3"
  },
  {
    "url": "en/compatibility.html",
    "revision": "c108715661c08299a49f0fac1df29b7d"
  },
  {
    "url": "en/database.html",
    "revision": "48296a8e1b033d4c3df4522e8ffbc641"
  },
  {
    "url": "en/example.html",
    "revision": "196341f43d2285a17ba7bab60357942c"
  },
  {
    "url": "en/faq.html",
    "revision": "16e48ccea16ab3392694191f0ccc17ee"
  },
  {
    "url": "en/index.html",
    "revision": "14079e32a52a169025cde3f426d4f6ef"
  },
  {
    "url": "en/siterule.html",
    "revision": "db4f1c3d558e373ba4c6e8535a29dc7d"
  },
  {
    "url": "example.html",
    "revision": "79ccd8d4245d731a4e2e2a97c5a302a0"
  },
  {
    "url": "faq.html",
    "revision": "7afe34a2701d2e8ca43310e86a9e4d0f"
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
    "revision": "e2bd444780b4bcaaac5e577bf992fba5"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "4165af17dcf0f6fdf45f37639b8c743a"
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
