if(!self.define){let e,n={};const i=(i,a)=>(i=new URL(i+".js",a).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let r={};const d=e=>i(e,s),f={module:{uri:s},exports:r,require:d};n[s]=Promise.all(a.map((e=>f[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e5b96673"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"131.bundle.js",revision:"ddb72d9bfba0c22fbf3413be0c44d111"},{url:"30.bundle.js",revision:"ebdae3f01e83a746e020770f13dfc0e2"},{url:"app.webmanifest",revision:"f5c1722b1acab8df6ea9e0e574ed4769"},{url:"app~4e5ec22b.bundle.js",revision:"8f295e183e67a2ca8672902c945f040b"},{url:"app~a51fa3f5.bundle.js",revision:"3e9e95ca0c532d0dcaeaa8441df03f4a"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"1c7ee47a56ba4937f85b5d3444b56662"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e0c2779b.bundle.js",revision:"f6edc9c270678eb2fe79ce167358f050"},{url:"app~e0c2779b.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icons/icon-192x192.png",revision:"c55be1180100603dec310ae2d1546ec5"},{url:"icons/icon-256x256.png",revision:"dd1cb553571742fb9893518ab7f46900"},{url:"icons/icon-384x384.png",revision:"efe7d4672fea4a535d72a423ff5ace28"},{url:"icons/icon-512x512.png",revision:"61a8a5c4a60ad8639d82a0d07543a9b3"},{url:"icons/vontoz.png",revision:"54daf4fd8c0bf6c66b32aec3aa2397b9"},{url:"index.html",revision:"514ef62ede5a047459548f0a3c70ca6c"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"HEatLerApps",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map