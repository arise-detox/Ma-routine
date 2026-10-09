const CACHE='ma-routine-v9';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./fonts/poppins-400.woff2','./fonts/poppins-500.woff2','./fonts/poppins-600.woff2'];
const NETWORK_TIMEOUT=3500;
// Ce service worker ne touche qu'aux caches « ma-routine- » : les autres applis du domaine partagent la même origine
// (arise-detox.github.io) et gardent chacun leurs propres caches.
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('ma-routine-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Page : réseau d'abord (nouvelle version dès qu'elle est publiée), mais bascule sur la copie enregistrée
// après 3,5 s ou hors ligne : l'appli doit s'ouvrir tout de suite, même avec un réseau faible.
function networkWithTimeout(request){
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(new Error('timeout')),NETWORK_TIMEOUT);
    fetch(request).then(res=>{clearTimeout(timer);resolve(res)},err=>{clearTimeout(timer);reject(err)});
  });
}
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    // seule l'appli (racine ou index.html) est servie depuis le cache ; la page de présentation et les autres pages passent au réseau
    if(!(url.pathname.endsWith('/')||url.pathname.endsWith('/index.html')))return;
    e.respondWith(networkWithTimeout(req).then(res=>{
      if(res.ok){const copy=res.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put('./index.html',copy)))}
      return res;
    }).catch(()=>caches.match('./index.html',{ignoreSearch:true})));
    return;
  }
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{
    if(res.ok){const copy=res.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)))}
    return res;
  })));
});
