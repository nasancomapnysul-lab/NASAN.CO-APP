/* nasan offline support v4
   - React / Firebase / fonts (fixed versions) stay on the phone after the first open
   - a.js?v=NN stays on the phone: a new number in index.html downloads the new one once
   - the start page comes fresh from the internet, or the saved copy if the internet is slow (1.2 s)
   - pictures open from the phone at once and refresh in the background
   - only runs on app.nasan.company; anywhere else it removes itself */
const C = 'nasan-v4';
const HOST = 'app.nasan.company';
const LIBS = [
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check-compat.js',
];
self.addEventListener('install', e => {
  if (location.hostname !== HOST) { self.skipWaiting(); return; }
  e.waitUntil(caches.open(C).then(c => Promise.all([
    c.addAll(['./', './nasan-logo.png', './manifest.json']).catch(() => {}),
    ...LIBS.map(u => fetch(u, { mode: 'cors' }).then(r => r.ok && c.put(u, r)).catch(() => {})),
  ])).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => {
    if (location.hostname !== HOST) return Promise.all(ks.map(k => caches.delete(k))).then(() => self.registration.unregister());
    return Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))).then(() => self.clients.claim());
  }));
});
const fixed = u => (u.hostname === 'unpkg.com' && /@\d+\.\d+\.\d+\//.test(u.pathname)) || (u.hostname === 'www.gstatic.com' && /^\/firebasejs\/\d+\.\d+\.\d+\//.test(u.pathname)) || u.hostname === 'fonts.gstatic.com';
const keep = (key, r) => { if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); caches.open(C).then(c => c.put(key, cp)).catch(() => {}); } return r; };
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || location.hostname !== HOST) return;
  const u = new URL(req.url);
  if (fixed(u)) { e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => keep(req, r)))); return; }
  if (u.origin !== location.origin) return;
  if (/\/a\.js$/.test(u.pathname) && u.searchParams.has('v')) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok) caches.open(C).then(c => c.keys().then(ks => ks.forEach(k => { if (/\/a\.js(\?|$)/.test(k.url) && k.url !== req.url) c.delete(k); }))).catch(() => {});
      return keep(req, r);
    })));
    return;
  }
  if (/\.(png|jpe?g|webp|gif|svg|ico)$/i.test(u.pathname)) {
    e.respondWith(caches.match(req).then(hit => { const net = fetch(req).then(r => keep(req, r)).catch(() => hit); return hit || net; }));
    return;
  }
  const page = req.mode === 'navigate';
  e.respondWith(new Promise(resolve => {
    let done = false;
    const fromCache = () => caches.match(req, { ignoreSearch: page }).then(r => r || (page ? caches.match('./') : undefined));
    const t = setTimeout(() => { fromCache().then(r => { if (r && !done) { done = true; resolve(r); } }); }, page ? 1200 : 3000);
    fetch(page ? new Request(u.href, { cache: 'no-cache', redirect: 'manual', credentials: 'same-origin' }) : req).then(r => {
      clearTimeout(t);
      if (r.ok) keep(page ? u.origin + u.pathname : req, r);
      if (!done) { done = true; resolve(r); }
    }).catch(() => { clearTimeout(t); if (!done) fromCache().then(r => { done = true; resolve(r || Response.error()); }); });
  }));
});
