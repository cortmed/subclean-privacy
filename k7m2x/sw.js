/* Denge — çevrimdışı önbellek. Güncelleme yayınlarken CACHE adını değiştir. */
const CACHE='denge-v11';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-180.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return;
  const u=new URL(req.url);
  const isStatic=/gstatic\.com\/firebasejs|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(u.host+u.pathname);
  if(u.origin===location.origin){
    // önce ağ (güncellemeler hemen gelsin), olmazsa önbellek
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));return r})
      .catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));
  }else if(isStatic){
    // kütüphane ve yazı tipleri: önce önbellek
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));return res})));
  }
  // Firestore/Anthropic istekleri dokunulmadan geçer
});
