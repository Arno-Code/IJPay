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
    "revision": "1e92e1e98f25b9c92b99d2dbfaeb35af"
  },
  {
    "url": "assets/css/0.styles.5bac9d13.css",
    "revision": "82d730bc45ce5de9394a0090f7d833c6"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.37b45183.js",
    "revision": "b5ad0a53ac6c30796ebb4522ed36713d"
  },
  {
    "url": "assets/js/11.f39e3953.js",
    "revision": "e5af142f79ec627191d6e7a1d530f40a"
  },
  {
    "url": "assets/js/12.b7616c25.js",
    "revision": "9dc8f86f2c2321f01c80e0304f357c15"
  },
  {
    "url": "assets/js/13.e94b0a62.js",
    "revision": "ea25d77610def79a192e82e638253d1f"
  },
  {
    "url": "assets/js/14.3914e1ee.js",
    "revision": "b9c69a169ec38bd450860fb737be0533"
  },
  {
    "url": "assets/js/15.679c73df.js",
    "revision": "eb53adc5416ac917a492149e7626532a"
  },
  {
    "url": "assets/js/16.c9169c7f.js",
    "revision": "5b61954c9ab61543984a6abf9a96dedf"
  },
  {
    "url": "assets/js/17.a191822f.js",
    "revision": "8fe424783248c134923a43a70f4743bb"
  },
  {
    "url": "assets/js/18.4a9eed44.js",
    "revision": "0df1255c2f325aac86c91c38d97ed5ed"
  },
  {
    "url": "assets/js/19.ef7ca9b0.js",
    "revision": "6b99ec0d3efad5e3373e10b40e95ce5d"
  },
  {
    "url": "assets/js/20.b5bd327b.js",
    "revision": "fe7baf877879db7601bd78dfbece7b13"
  },
  {
    "url": "assets/js/21.9846bf49.js",
    "revision": "38f0972c63b8774e8cc1f227fdc2368b"
  },
  {
    "url": "assets/js/22.481d29e6.js",
    "revision": "f058a47e161229c3fb8480c8e91a16eb"
  },
  {
    "url": "assets/js/23.3b89722c.js",
    "revision": "cbd2054e7103c6da15a8d474b5162ad6"
  },
  {
    "url": "assets/js/24.c5edf914.js",
    "revision": "0c2e4a8e7e54671492b05b923e00e476"
  },
  {
    "url": "assets/js/25.c0025c7d.js",
    "revision": "468a7267261c267ee938f688324e10dc"
  },
  {
    "url": "assets/js/26.e22f6852.js",
    "revision": "6c78fb36a3f2727a483a351a831135f9"
  },
  {
    "url": "assets/js/27.5586f7d9.js",
    "revision": "2753fec5bbedf53153c1dc84e740ac13"
  },
  {
    "url": "assets/js/28.39a3c2b6.js",
    "revision": "a9c128888e3edf2d83f614d22695be2b"
  },
  {
    "url": "assets/js/29.527c09bc.js",
    "revision": "f494840bf6ee329828d8e06477c01672"
  },
  {
    "url": "assets/js/3.2405bf87.js",
    "revision": "ff78f5ac518e1ea924b339393b89e18b"
  },
  {
    "url": "assets/js/4.ae528797.js",
    "revision": "b1930a3b89ce0a7f3b4734465641522d"
  },
  {
    "url": "assets/js/5.d0d6249b.js",
    "revision": "4f8fca454834d9faba1b12818c91e965"
  },
  {
    "url": "assets/js/6.756380d3.js",
    "revision": "c0488d6d506b37e2e1f468750604e8ea"
  },
  {
    "url": "assets/js/7.0fdcdeda.js",
    "revision": "1699fde8e20d9344cba322633bee430f"
  },
  {
    "url": "assets/js/8.0e3935aa.js",
    "revision": "377a1e99b7e6c9585de2701fc5d54a76"
  },
  {
    "url": "assets/js/9.a268daaa.js",
    "revision": "13bdcea24870591cc8cf0fd0a2a1d6f2"
  },
  {
    "url": "assets/js/app.3a43ca92.js",
    "revision": "11199ae1557d37658a89c5ebddc98996"
  },
  {
    "url": "assets/js/vendors~notification.241402c3.js",
    "revision": "805674791258660334e65e8dacf35a0f"
  },
  {
    "url": "guide/alipay/extension.html",
    "revision": "b4690adab6dd19769dc45743aef5aa3d"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "c4e5bf1866b9ba707b1f4ec51398e0ce"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "3e55e18f760688ef61f2264ee30f4a09"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "38e7228076aa633237a3256fd4d93d8d"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "4cd7da0fef876826a289b8be81714c5a"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "5307d65831837e93b40bea5c9d0e93c3"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "aa3e6a0eceea185b7cf12e24aa4dcf58"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "a40807c0ae40c9b05bbb44b14b10f6d3"
  },
  {
    "url": "guide/http.html",
    "revision": "44f6570ff0a999a39f6b10668b9479ec"
  },
  {
    "url": "guide/index.html",
    "revision": "6f4d77f46564cdac1ce825d4f1cee8c0"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "f3f2152898f5cc99de3871a2e7220162"
  },
  {
    "url": "guide/maven.html",
    "revision": "345ec5a7f45dfbe88a3f1f812fd5e1a5"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "2503216177c17a6bf178567be56e5cae"
  },
  {
    "url": "guide/resource.html",
    "revision": "525187852d0eab97f18553ddf20e0c4a"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "13ae2089402a82d890b68b54734f3e9d"
  },
  {
    "url": "guide/weixin/tnwx.html",
    "revision": "34b15cd717cc2c4d6b1948b737b7671e"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "5de3ec6ff9e227fe10fdda36744a4a90"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "93fbb86957b88c48090cbee1768449ab"
  },
  {
    "url": "guide/wxpay/external.html",
    "revision": "f4ea1a6d3bf0c403dd00e1188f6d0646"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "20ef686ab4e5e3931d2ff76d55817a0e"
  },
  {
    "url": "guide/wxpay/question.html",
    "revision": "65d53a970bf6e056fe541d9cb76058fe"
  },
  {
    "url": "index.html",
    "revision": "d20a25e4caeff79a53338ff5021a682b"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "311a9f9b98f805954aeb9711c2b7959f"
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
