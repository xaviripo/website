!function(){"use strict";const t=["client/client.418cd0b8.js","client/index.714ff478.js","client/about.c1daf6ba.js","client/index.8be97cb6.js","client/[slug].f00728af.js","client/shop.df24f67c.js","client/404.752b185a.js","client/client.2226f603.js"].concat(["service-worker-index.html",".nojekyll",".well-known/apple-developer-merchantid-domain-association","CNAME","bootstrap/css/bootstrap-grid.css","bootstrap/css/bootstrap-grid.css.map","bootstrap/css/bootstrap-grid.min.css","bootstrap/css/bootstrap-grid.min.css.map","bootstrap/css/bootstrap-reboot.css","bootstrap/css/bootstrap-reboot.css.map","bootstrap/css/bootstrap-reboot.min.css","bootstrap/css/bootstrap-reboot.min.css.map","bootstrap/css/bootstrap.css","bootstrap/css/bootstrap.css.map","bootstrap/css/bootstrap.min.css","bootstrap/css/bootstrap.min.css.map","bootstrap/js/bootstrap.bundle.js","bootstrap/js/bootstrap.bundle.js.map","bootstrap/js/bootstrap.bundle.min.js","bootstrap/js/bootstrap.bundle.min.js.map","bootstrap/js/bootstrap.js","bootstrap/js/bootstrap.js.map","bootstrap/js/bootstrap.min.js","bootstrap/js/bootstrap.min.js.map","favicon.png","global.css"]),s=new Set(t);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1604146193765").then(s=>s.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const s of t)"cache1604146193765"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const o=new URL(t.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&s.has(o.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1604146193765").then(async s=>{try{const o=await fetch(t.request);return s.put(t.request,o.clone()),o}catch(o){const a=await s.match(t.request);if(a)return a;throw o}}))))})}();
