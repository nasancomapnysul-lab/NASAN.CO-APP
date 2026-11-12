/* nasan offline support
   - React / Firebase / fonts (fixed versions) are kept on the phone: no download after the first open
   - the app's own files are fetched fresh, but if the network is slow (3 s) the saved copy opens instead */
const C = 'nasan-v3';
/* on any old address (github.io): remove this offline copy so the old address stops opening the app */
if (self.location.hostname !== 'app.nasan.company' && self.location.hostname !== 'localhost') {
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.map(x => caches.delete(x)))).then(() => self.registration.unregister()).then(() => self.clients.matchAll()).then(cs => cs.forEach(c => c.navigate('https://app.nasan.company/')))); });
}
const CORE = ['./', './index.html', './a.js', './nasan-logo.png', './icon-192.png', './icon-512.png', './manifest.json'];
const LIBS = [
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check-compat.js',
];
if (self.location.hostname === 'app.nasan.company' || self.location.hostname === 'localhost') self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => Promise.all([c.addAll(CORE), ...LIBS.map(u => fetch(u, { mode: 'cors' }).then(r => r.ok && c.put(u, r)).catch(() => {}))])).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
const fixed = u => (u.hostname === 'unpkg.com' && /@\d+\.\d+\.\d+\//.test(u.pathname)) || (u.hostname === 'www.gstatic.com' && /^\/firebasejs\/\d+\.\d+\.\d+\//.test(u.pathname)) || u.hostname === 'fonts.gstatic.com';
if (self.location.hostname === 'app.nasan.company' || self.location.hostname === 'localhost') self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (fixed(u)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(C).then(c => c.put(req, cp)); } return r; })));
    return;
  }
  if (u.origin !== location.origin) return;
  e.respondWith(new Promise(resolve => {
    let done = false;
    const fromCache = () => caches.match(req).then(r => r || caches.match('./index.html'));
    const t = setTimeout(() => { fromCache().then(r => { if (r && !done) { done = true; resolve(r); } }); }, 3000);
    fetch(req).then(r => {
      clearTimeout(t);
      if (r.ok) { const cp = r.clone(); caches.open(C).then(c => c.put(req, cp)); }
      if (!done) { done = true; resolve(r); }
    }).catch(() => { clearTimeout(t); if (!done) fromCache().then(r => { done = true; resolve(r || Response.error()); }); });
  }));
});
