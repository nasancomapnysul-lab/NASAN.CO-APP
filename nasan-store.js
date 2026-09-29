/* Shared live store — admin panel writes, app reads, both re-render.
   Plain pub/sub over a module-level object; no dependencies. */

const listeners = new Set();

const store = {
  products: [
    { code: '1912', name: 'Yaxun YX-1948D', sub: '30V 5A dual DC supply', brand: 'YAXUN', cat: 'Power', kind: 'supply', stock: 8, status: 'Live' },
    { code: '1908', name: 'Yaxun YX-858D+', sub: 'Hot air rework station', brand: 'YAXUN', cat: 'Hot air', kind: 'station', stock: 5, status: 'Live' },
    { code: '1904', name: 'Yaxun YX-AK25', sub: 'Binocular microscope', brand: 'YAXUN', cat: 'Microscope', kind: 'scope', stock: 3, status: 'Low stock' },
    { code: '1899', name: 'Yaxun YX-936B', sub: 'Soldering station 60W', brand: 'YAXUN', cat: 'Soldering', kind: 'station', stock: 12, status: 'Live' },
    { code: '1877', name: 'RF4 RF-B52', sub: 'Stereo microscope', brand: 'RF4', cat: 'Microscope', kind: 'scope', stock: 4, status: 'Live' },
    { code: '1860', name: 'Aixun T3A', sub: 'Soldering station', brand: 'AIXUN', cat: 'Soldering', kind: 'station', stock: 7, status: 'Live' },
    { code: '1844', name: 'Sunshine SS-227', sub: 'Soldering iron kit', brand: 'SUNSHINE', cat: 'Soldering', kind: 'station', stock: 15, status: 'Live' },
    { code: '1830', name: 'Quick TS1200A', sub: 'Soldering station', brand: 'QUICK', cat: 'Soldering', kind: 'station', stock: 2, status: 'Low stock' },
    { code: '1801', name: 'SUNSHINE P-3005D', sub: '30V 5A regulated DC supply', brand: 'SUNSHINE', cat: 'Power', kind: 'supply', stock: 12, status: 'Live' },
    { code: '1642', name: 'RF4 RF-6558PRO', sub: 'Trinocular microscope 6.5–58X', brand: 'RF4', cat: 'Microscope', kind: 'scope', stock: 4, status: 'Live' },
    { code: '1588', name: 'YX-AK49', sub: 'Trinocular microscope', brand: 'YAXUN', cat: 'Microscope', kind: 'scope', stock: 2, status: 'Low stock' },
    { code: '1470', name: 'YIHUA 3010D-IV', sub: '30V 10A digital supply', brand: 'YIHUA', cat: 'Power', kind: 'supply', stock: 9, status: 'Live' },
    { code: '1402', name: 'SUGON 3010PM', sub: '30V 10A supply', brand: 'SUGON', cat: 'Power', kind: 'supply', stock: 6, status: 'Live' },
    { code: '1355', name: 'RF-305A', sub: '30V 5A with short remover', brand: 'RF4', cat: 'Power', kind: 'supply', stock: 6, status: 'Live' },
    { code: '1290', name: 'Relife RL-069', sub: 'Precision tweezers', brand: 'RELIFE', cat: 'Hand tools', kind: 'hand', stock: 24, status: 'Live' },
    { code: '1188', name: 'Quick 861DW', sub: 'Hot air rework station', brand: 'QUICK', cat: 'Hot air', kind: 'station', stock: 3, status: 'Low stock' },
    { code: '1044', name: 'JYD-1503HD', sub: '15V DC regulated supply', brand: 'YYD', cat: 'Power', kind: 'supply', stock: 11, status: 'Live' },

    { code: '2041', name: 'Sugon T26D', sub: 'Nano soldering station 120W', brand: 'SUGON', cat: 'Soldering', kind: 'station', stock: 6, status: 'Live' },
    { code: '2038', name: 'Aixun T420D', sub: 'Dual-channel soldering station', brand: 'AIXUN', cat: 'Soldering', kind: 'station', stock: 4, status: 'Live' },
    { code: '2034', name: 'Quick 236', sub: 'Lead-free soldering station 90W', brand: 'QUICK', cat: 'Soldering', kind: 'station', stock: 9, status: 'Live' },
    { code: '2029', name: 'Relife RL-936B', sub: 'Adjustable soldering iron 65W', brand: 'RELIFE', cat: 'Soldering', kind: 'station', stock: 18, status: 'Live' },
    { code: '2025', name: 'Yihua 947-III', sub: 'Digital soldering station', brand: 'YIHUA', cat: 'Soldering', kind: 'station', stock: 13, status: 'Live' },

    { code: '2018', name: 'Sugon 8620DX', sub: 'Hot air gun with preheat', brand: 'SUGON', cat: 'Hot air', kind: 'station', stock: 5, status: 'Live' },
    { code: '2014', name: 'Aixun T3B', sub: 'Smart hot air rework station', brand: 'AIXUN', cat: 'Hot air', kind: 'station', stock: 7, status: 'Live' },
    { code: '2009', name: 'Yihua 992DA+', sub: '2-in-1 hot air and iron', brand: 'YIHUA', cat: 'Hot air', kind: 'station', stock: 10, status: 'Live' },
    { code: '2004', name: 'Sunshine SS-918', sub: 'Compact hot air station', brand: 'SUNSHINE', cat: 'Hot air', kind: 'station', stock: 3, status: 'Low stock' },

    { code: '1996', name: 'RF4 RF-7050TVD', sub: 'Trinocular scope with 4K camera', brand: 'RF4', cat: 'Microscope', kind: 'scope', stock: 2, status: 'Low stock' },
    { code: '1990', name: 'Sunshine SZM-45T', sub: 'Trinocular microscope 7–45X', brand: 'SUNSHINE', cat: 'Microscope', kind: 'scope', stock: 5, status: 'Live' },
    { code: '1984', name: 'Relife RL-M3T', sub: 'Trinocular microscope with boom', brand: 'RELIFE', cat: 'Microscope', kind: 'scope', stock: 4, status: 'Live' },
    { code: '1978', name: 'Yaxun YX-AK31', sub: 'Binocular scope with LED ring', brand: 'YAXUN', cat: 'Microscope', kind: 'scope', stock: 6, status: 'Live' },

    { code: '1968', name: 'Sugon 3005D', sub: '30V 5A short-circuit supply', brand: 'SUGON', cat: 'Power', kind: 'supply', stock: 8, status: 'Live' },
    { code: '1962', name: 'Aixun P3208', sub: '32V 8A intelligent supply', brand: 'AIXUN', cat: 'Power', kind: 'supply', stock: 5, status: 'Live' },
    { code: '1956', name: 'Relife RL-306A', sub: '30V 6A supply with USB test', brand: 'RELIFE', cat: 'Power', kind: 'supply', stock: 7, status: 'Live' },
    { code: '1950', name: 'Yihua 305D-III', sub: '30V 5A dual display supply', brand: 'YIHUA', cat: 'Power', kind: 'supply', stock: 11, status: 'Live' },
    { code: '1944', name: 'Quick PS3010', sub: '30V 10A bench supply', brand: 'QUICK', cat: 'Power', kind: 'supply', stock: 2, status: 'Low stock' },

    { code: '1936', name: 'Relife RL-101', sub: 'Curved anti-static tweezers', brand: 'RELIFE', cat: 'Hand tools', kind: 'hand', stock: 32, status: 'Live' },
    { code: '1930', name: 'Sunshine SS-101B', sub: 'Precision screwdriver set 25pcs', brand: 'SUNSHINE', cat: 'Hand tools', kind: 'hand', stock: 21, status: 'Live' },
    { code: '1926', name: 'Yaxun YX-8a', sub: 'Opening pry tool set', brand: 'YAXUN', cat: 'Hand tools', kind: 'hand', stock: 26, status: 'Live' },
    { code: '1922', name: 'Relife RL-062B', sub: 'Blade set for board cleaning', brand: 'RELIFE', cat: 'Hand tools', kind: 'hand', stock: 14, status: 'Live' },
    { code: '1918', name: 'Sunshine SS-004', sub: 'Anti-static brush and spudger', brand: 'SUNSHINE', cat: 'Hand tools', kind: 'hand', stock: 19, status: 'Live' },

    { code: '2140', name: 'Mechanic iShort Pro', sub: 'Short-circuit detector', brand: 'MECHANIC', cat: 'Power', kind: 'supply', stock: 9, status: 'Live' },
    { code: '2136', name: 'Mechanic BA-6', sub: 'Soldering iron tip set', brand: 'MECHANIC', cat: 'Soldering', kind: 'station', stock: 22, status: 'Live' },
    { code: '2132', name: 'Mechanic Fluxer UV', sub: 'No-clean flux paste', brand: 'MECHANIC', cat: 'Hand tools', kind: 'hand', stock: 40, status: 'Live' },

    { code: '2126', name: 'Wanlee WL-862D', sub: 'Hot air rework station', brand: 'WANLEE', cat: 'Hot air', kind: 'station', stock: 6, status: 'Live' },
    { code: '2122', name: 'Wanlee WL-948', sub: 'Digital soldering station', brand: 'WANLEE', cat: 'Soldering', kind: 'station', stock: 8, status: 'Live' },

    { code: '2116', name: 'Kada 863DA', sub: 'IR preheating station', brand: 'KADA', cat: 'Hot air', kind: 'station', stock: 3, status: 'Low stock' },
    { code: '2112', name: 'Kada 852D+', sub: '2-in-1 hot air and iron', brand: 'KADA', cat: 'Hot air', kind: 'station', stock: 7, status: 'Live' },

    { code: '2106', name: 'Soptop SZM-7045', sub: 'Trinocular microscope 7–45X', brand: 'SOPTOP', cat: 'Microscope', kind: 'scope', stock: 4, status: 'Live' },
    { code: '2102', name: 'Soptop CX3', sub: 'Binocular scope with boom stand', brand: 'SOPTOP', cat: 'Microscope', kind: 'scope', stock: 5, status: 'Live' },

    { code: '2096', name: '2UUL DA81', sub: 'Ultra-thin blade set', brand: '2UUL', cat: 'Hand tools', kind: 'hand', stock: 28, status: 'Live' },
    { code: '2092', name: '2UUL BT01', sub: 'Precision tweezers, titanium', brand: '2UUL', cat: 'Hand tools', kind: 'hand', stock: 16, status: 'Live' },
    { code: '2088', name: '2UUL SC09', sub: 'Screwdriver set with case', brand: '2UUL', cat: 'Hand tools', kind: 'hand', stock: 12, status: 'Live' },

    { code: '2082', name: 'Qianli iAtlas', sub: 'Board repair fixture', brand: 'QIANLI', cat: 'Hand tools', kind: 'hand', stock: 9, status: 'Live' },
    { code: '2078', name: 'Qianli iThor', sub: 'Screwdriver set 12pcs', brand: 'QIANLI', cat: 'Hand tools', kind: 'hand', stock: 18, status: 'Live' },

    { code: '2072', name: 'MA ANT Sisyphus', sub: 'Universal PCB holder', brand: 'MA ANT', cat: 'Hand tools', kind: 'hand', stock: 7, status: 'Live' },
    { code: '2068', name: 'MA ANT Flying Line', sub: 'Jump wire repair kit', brand: 'MA ANT', cat: 'Hand tools', kind: 'hand', stock: 24, status: 'Live' },

    { code: '2062', name: 'Kaisi K-9805', sub: 'Screwdriver set 38 in 1', brand: 'KAISI', cat: 'Hand tools', kind: 'hand', stock: 20, status: 'Live' },
    { code: '2058', name: 'Kaisi TX-15', sub: 'Anti-static repair mat', brand: 'KAISI', cat: 'Hand tools', kind: 'hand', stock: 11, status: 'Live' },

    { code: '2052', name: 'OSS Team T12', sub: 'Quick-heat soldering station', brand: 'OSS', cat: 'Soldering', kind: 'station', stock: 6, status: 'Live' },
    { code: '2048', name: 'OSS Team 8586D', sub: 'Hot air and iron combo', brand: 'OSS', cat: 'Hot air', kind: 'station', stock: 4, status: 'Live' },

    { code: '2044', name: 'JYD-3005D', sub: '30V 5A regulated supply', brand: 'JYD', cat: 'Power', kind: 'supply', stock: 10, status: 'Live' },

    { code: '2036', name: 'Aida A5 Pro', sub: 'Separating heating plate', brand: 'AIDA', cat: 'Hot air', kind: 'station', stock: 3, status: 'Low stock' },
    { code: '2032', name: 'Aifen A5', sub: 'Battery and cable tester', brand: 'AIFEN', cat: 'Power', kind: 'supply', stock: 8, status: 'Live' },
    { code: '2028', name: 'Flycdi FL-2000', sub: 'Micro drill and polisher', brand: 'FLYCDI', cat: 'Hand tools', kind: 'hand', stock: 13, status: 'Live' },
    { code: '2024', name: 'YYD-1502D', sub: '15V 2A compact supply', brand: 'YYD', cat: 'Power', kind: 'supply', stock: 14, status: 'Live' },
  ],
  orders: [],
  lang: 0,
  signedIn: false,
  account: {
    first: '', middle: '', last: '', phone: '', email: '', pass: '', confirm: '',
    shop: '', shopAddr: '', homeAddr: '', photo: '', identifier: '', city: '', phoneVerified: false,
  },
  accounts: [],
  sessionEmail: '',
  rev: 0,
};

/* Registered accounts. Persisted on this device so a test account survives a
   reload. Passwords are stored as a salted hash, never as typed. This is a
   prototype stand-in — a real build keeps accounts on the server and hashes
   with bcrypt/argon2 there. */
const ACC_KEY = 'nasan-accounts-v1';
function pwHash(email, pass) {
  let h1 = 0x811c9dc5, h2 = 0x01000193;
  const str = 'nasan|' + email.toLowerCase() + '|' + pass;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619) >>> 0;
    h2 = Math.imul(h2 ^ (c + i), 2246822519) >>> 0;
  }
  return h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');
}
function normPhone(v) { return String(v || '').replace(/\D/g, '').replace(/^964/, '').replace(/^0/, ''); }
function loadAccounts() {
  try {
    const raw = localStorage.getItem(ACC_KEY);
    if (raw) {
      /* drop truncated/invalid photo data (a real 320px JPEG is tens of KB) */
      return JSON.parse(raw)
        .filter(a => a.email !== 'demo@nasan.company')
        .map(a => (a.photo && /^data:/.test(a.photo) && a.photo.length < 200 ? { ...a, photo: '' } : a));
    }
  } catch (e) {}
  return [];
}
function saveAccounts() { try { localStorage.setItem(ACC_KEY, JSON.stringify(store.accounts)); } catch (e) {} cloudSet('accounts', store.accounts); }
store.accounts = loadAccounts();

/* Stay signed in across reloads and app restarts: the session (which account,
   or a Google sign-in snapshot) is kept on this device until Sign out. */
const SES_KEY = 'nasan-session-v1';
function saveSession() {
  try {
    if (!store.signedIn) return localStorage.removeItem(SES_KEY);
    const snap = { ...store.account }; delete snap.pass; delete snap.confirm; delete snap.identifier;
    localStorage.setItem(SES_KEY, JSON.stringify({ email: store.sessionEmail, account: snap }));
  } catch (e) {}
}
(function restoreSession() {
  try {
    const raw = localStorage.getItem(SES_KEY);
    if (!raw) return;
    const ses = JSON.parse(raw);
    const rec = ses.email && store.accounts.find(a => a.email === ses.email);
    Object.assign(store.account, rec ? { ...rec } : (ses.account || {}), { pass: '', confirm: '', identifier: '' });
    delete store.account.hash;
    store.sessionEmail = rec ? rec.email : '';
    store.signedIn = true;
  } catch (e) {}
})();

/* Orders are kept on this device, tagged with the account that placed them. */
const ORD_KEY = 'nasan-orders-v1';
function saveOrders() { try { localStorage.setItem(ORD_KEY, JSON.stringify(store.orders)); } catch (e) {} cloudSet('orders', store.orders); }
try { const r = localStorage.getItem(ORD_KEY); if (r) store.orders = JSON.parse(r); } catch (e) {}
function currentOwner() {
  if (!store.signedIn) return '';
  return (store.sessionEmail || store.account.email || store.account.phone || 'google').toLowerCase();
}

/* ── Live traffic ──
   Every screen view and a 15s heartbeat are logged with an anonymous device id.
   Saved to localStorage and shared across open tabs (storage event), so the admin
   panel in one tab sees the app in another tab update live. With Supabase this
   same log goes to a shared table and covers every phone. */
const TRF_KEY = 'nasan-traffic-v1';
const DEV_KEY = 'nasan-device-v1';
let deviceId = '';
try { deviceId = localStorage.getItem(DEV_KEY) || ''; } catch (e) {}
if (!deviceId) { deviceId = 'd' + Math.random().toString(36).slice(2, 9); try { localStorage.setItem(DEV_KEY, deviceId); } catch (e) {} }
try { const r = localStorage.getItem('nasan-products-v1'); if (r) { const p = JSON.parse(r); if (Array.isArray(p) && p.length) store.products = p; } } catch (e) {}
store.traffic = [];
try { const r = localStorage.getItem(TRF_KEY); if (r) store.traffic = JSON.parse(r); } catch (e) {}
const CTX = (() => {
  const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || '';
  const dv = /iPad|Tablet/i.test(ua) ? 'tablet' : /Mobi|iPhone|Android/i.test(ua) ? 'mobile' : 'desktop';
  const br = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /SamsungBrowser/.test(ua) ? 'Samsung' : /CriOS|Chrome\//.test(ua) ? 'Chrome' : /FxiOS|Firefox\//.test(ua) ? 'Firefox' : /Safari\//.test(ua) ? 'Safari' : 'Other';
  let src = 'direct';
  try {
    const r = document.referrer ? new URL(document.referrer).hostname : '';
    if (r && r !== location.hostname) src = /google\./.test(r) ? 'google' : /facebook|fb\./.test(r) ? 'facebook' : /instagram/.test(r) ? 'instagram' : /tiktok/.test(r) ? 'tiktok' : /t\.co|twitter|x\.com/.test(r) ? 'x' : /whatsapp|wa\.me/.test(r) ? 'whatsapp' : r.replace(/^www\./, '');
    const u = new URLSearchParams(location.search).get('utm_source'); if (u) src = u;
  } catch (e) {}
  return { dv, br, src };
})();
/* page load time for this device, logged once */
try {
  window.addEventListener('load', () => setTimeout(() => {
    const n = performance.getEntriesByType('navigation')[0];
    const ms = n ? Math.round(n.loadEventEnd || n.duration) : 0;
    if (ms > 0) { cloudEvent({ t: Date.now(), d: deviceId, s: 'load', x: String(ms), dv: CTX.dv, br: CTX.br, src: CTX.src }); saveTraffic(); }
  }, 50));
  /* outbound link clicks anywhere in the app */
  document.addEventListener('click', (e) => {
    const a = e.target && e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const h = a.getAttribute('href') || '';
    const kind = /wa\.me|whatsapp/.test(h) ? 'whatsapp' : /tiktok/.test(h) ? 'tiktok' : /instagram/.test(h) ? 'instagram' : /facebook/.test(h) ? 'facebook' : /x\.com|twitter/.test(h) ? 'x' : /maps|goo\.gl/.test(h) ? 'maps' : /^tel:/.test(h) ? 'call' : '';
    if (kind) NasanStore.click(kind);
  }, true);
} catch (e) {}
function saveTraffic() {
  if (store.traffic.length > 1500) store.traffic = store.traffic.slice(-1200);
  try { localStorage.setItem(TRF_KEY, JSON.stringify(store.traffic)); } catch (e) {}
}
try {
  window.addEventListener('storage', (e) => {
    if (e.key === TRF_KEY && e.newValue) { try { store.traffic = JSON.parse(e.newValue); emit(); } catch (x) {} }
    if (e.key === 'nasan-orders-v1' && e.newValue) { try { store.orders = JSON.parse(e.newValue); emit(); } catch (x) {} }
  });
} catch (e) {}

/* ── Diagnostics: app errors are caught and kept (last 100) ── */
const ERR_KEY = 'nasan-errors-v1';
store.errors = [];
try { const r = localStorage.getItem(ERR_KEY); if (r) store.errors = JSON.parse(r); } catch (e) {}
store.bootedAt = Date.now();
function logError(kind, msg, where) {
  store.errors.push({ t: Date.now(), kind, msg: String(msg || 'Unknown error').slice(0, 300), where: String(where || '').slice(0, 160) });
  if (store.errors.length > 100) store.errors = store.errors.slice(-100);
  try { localStorage.setItem(ERR_KEY, JSON.stringify(store.errors)); } catch (e) {}
  try { emit(); } catch (e) {}
}
try {
  window.addEventListener('error', (e) => logError('Error', e.message, (e.filename || '').split('/').pop() + (e.lineno ? ':' + e.lineno : '')));
  window.addEventListener('unhandledrejection', (e) => logError('Promise', e.reason && (e.reason.message || e.reason), ''));
  window.addEventListener('online', () => emit());
  window.addEventListener('offline', () => emit());
} catch (e) {}

/* ── Site settings + translation overrides (edited in admin, applied live) ── */
const SET_KEY = 'nasan-settings-v1';
const TR_KEY = 'nasan-tr-v1';
const DEFAULT_SETTINGS = {
  general: { storeName: 'nasan Company', whatsapp: '9647704149292', email: 'info@nasan.company', city: 'Sulaymaniyah', maintenance: false },
  design: { accent: '#3FB2BD', accentDeep: '#2C8F99', radius: 'Rounded', welcome: true },
  hero: { code: '1402', label: '', lcdCode: '' },
  social: {
    TikTok: 'https://www.tiktok.com/@nasan.company',
    Instagram: 'https://www.instagram.com/nasan.company.iq',
    Facebook: 'https://www.facebook.com/share/1JHQbX6fyc/',
    X: 'https://x.com/nasancompany',
  },
  assistant: { enabled: true, greeting: 'Hello nasan Company, ', autoAttach: true },
  security: { loginOn: false, adminEmail: '', passHash: '', pinOn: false, pinHash: '', lockMins: 15, maxTries: 5 },
  owner: { name: 'Yadgar', role: 'Owner', city: 'Sulaymaniyah', email: '', phone: '', bio: '', photo: '' },
  team: { list: [], active: '' },
};
function merge(base, over) {
  const o = {};
  Object.keys(base).forEach(k => { o[k] = { ...base[k], ...((over || {})[k] || {}) }; });
  return o;
}
store.settings = merge(DEFAULT_SETTINGS, {});
store.trOverrides = { 0: {}, 1: {}, 2: {} };
try { const r = localStorage.getItem(SET_KEY); if (r) store.settings = merge(DEFAULT_SETTINGS, JSON.parse(r)); } catch (e) {}
try { const r = localStorage.getItem(TR_KEY); if (r) store.trOverrides = { 0: {}, 1: {}, 2: {}, ...JSON.parse(r) }; } catch (e) {}
function saveSettings() { try { localStorage.setItem(SET_KEY, JSON.stringify(store.settings)); } catch (e) {} cloudSet('settings', store.settings); }
function saveTr() { try { localStorage.setItem(TR_KEY, JSON.stringify(store.trOverrides)); } catch (e) {} cloudSet('translations', store.trOverrides); }
function saveProducts() { try { localStorage.setItem('nasan-products-v1', JSON.stringify(store.products)); } catch (e) {} cloudSet('products', store.products); }
try {
  window.addEventListener('storage', (e) => {
    if (e.key === SET_KEY && e.newValue) { try { store.settings = merge(DEFAULT_SETTINGS, JSON.parse(e.newValue)); emit(); } catch (x) {} }
    if (e.key === TR_KEY && e.newValue) { try { store.trOverrides = { 0: {}, 1: {}, 2: {}, ...JSON.parse(e.newValue) }; emit(); } catch (x) {} }
  });
} catch (e) {}

/* ── Firebase Realtime Database + Auth ──
   Public (anyone can read, only the admin can write): products, settings, translations.
   Admin only: nasan/admin (security + team), the full orders, accounts and traffic lists.
   Customers write their own order / account records under unguessable keys and can
   only read a record if they know its key. Rules: firebase-rules.json. */
store.cloud = 'off';
store.cloudAdmin = false;
let cloudDb = null, cloudAuth = null, adminLive = false;
const cloudApplying = {};
const cloudNull = new Set();
const ADMIN_UID = () => window.NASAN_ADMIN_UID || '';
const PUBLIC_NODES = ['products', 'settings', 'translations'];
function cloudClean(v) { return v === undefined ? null : JSON.parse(JSON.stringify(v)); }
function logErrorSafe(k, m, w) { try { logError(k, m, w); } catch (e) {} }
function newKey() { return cloudDb ? cloudDb.ref('nasan/orders').push().key : 'k' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10); }
function publicSettings(s) { const c = cloudClean(s) || {}; delete c.security; delete c.team; return c; }
function toMap(list) {
  const m = {};
  (list || []).forEach(x => { if (!x.ck) x.ck = newKey(); m[x.ck] = cloudClean(x); });
  return m;
}
function cloudSet(node, val) {
  if (!cloudDb || cloudApplying[node]) return;
  const admin = store.cloudAdmin;
  try {
    if (node === 'settings') {
      if (!admin) return;
      cloudDb.ref('nasan/settings').set(publicSettings(val));
      cloudDb.ref('nasan/admin').update(cloudClean({ security: (val || {}).security || {}, team: (val || {}).team || {} }));
    } else if (node === 'products' || node === 'translations') {
      if (admin) cloudDb.ref('nasan/' + node).set(cloudClean(val));
    } else if (node === 'orders' || node === 'accounts') {
      if (admin && val && val.length) cloudDb.ref('nasan/' + node).update(toMap(val));
    } else if (node === 'traffic') {
      if (admin) cloudDb.ref('nasan/traffic').set(null);
    }
  } catch (e) { logErrorSafe('Cloud', e.message, node); }
}
function cloudPut(node, rec) {
  if (!cloudDb || !rec) return;
  if (!rec.ck) rec.ck = newKey();
  cloudDb.ref('nasan/' + node + '/' + rec.ck).set(cloudClean(rec)).catch(e => logErrorSafe('Cloud', e.message, node));
}
function cloudRemove(node, rec) {
  if (cloudDb && rec && rec.ck && store.cloudAdmin) cloudDb.ref('nasan/' + node + '/' + rec.ck).remove().catch(() => {});
}
function cloudEvent(evt) {
  if (cloudDb) {
    try { const r = cloudDb.ref('nasan/traffic').push(); evt.k = r.key; r.set(evt).catch(() => {}); } catch (e) {}
  }
  store.traffic.push(evt);
}
/* customer device: follow its own orders so admin status changes arrive live */
const followed = new Set();
function followOwnOrders() {
  if (!cloudDb || store.cloudAdmin) return;
  store.orders.forEach(o => {
    if (!o.ck || followed.has(o.ck)) return;
    followed.add(o.ck);
    cloudDb.ref('nasan/orders/' + o.ck).on('value', snap => {
      const v = snap.val(); if (!v) return;
      const i = store.orders.findIndex(x => x.ck === o.ck); if (i < 0) return;
      store.orders[i] = { ...store.orders[i], ...v };
      try { localStorage.setItem(ORD_KEY, JSON.stringify(store.orders)); } catch (e) {}
      emit();
    }, () => {});
  });
}
function applyNode(node, v) {
  cloudApplying[node] = true;
  try {
    if (node === 'products' && Array.isArray(v)) { store.products = v; try { localStorage.setItem('nasan-products-v1', JSON.stringify(v)); } catch (e) {} }
    if (node === 'settings' && v) {
      store.settings = merge(DEFAULT_SETTINGS, { ...v, security: store.settings.security, team: store.settings.team });
      try { localStorage.setItem(SET_KEY, JSON.stringify(store.settings)); } catch (e) {}
    }
    if (node === 'translations') { store.trOverrides = { 0: {}, 1: {}, 2: {}, ...(v || {}) }; try { localStorage.setItem(TR_KEY, JSON.stringify(store.trOverrides)); } catch (e) {} }
  } finally { cloudApplying[node] = false; }
  emit();
}
function startAdminListeners() {
  if (adminLive) return; adminLive = true;
  cloudNull.forEach(node => cloudSet(node, node === 'products' ? store.products : node === 'settings' ? store.settings : store.trOverrides));
  cloudNull.clear();
  cloudDb.ref('nasan/admin').on('value', snap => {
    const v = snap.val();
    if (!v) { cloudSet('settings', store.settings); return; }
    cloudApplying.settings = true;
    try { store.settings = merge(DEFAULT_SETTINGS, { ...store.settings, security: v.security || store.settings.security, team: v.team || store.settings.team }); } finally { cloudApplying.settings = false; }
    try { localStorage.setItem(SET_KEY, JSON.stringify(store.settings)); } catch (e) {}
    emit();
  });
  ['orders', 'accounts'].forEach(node => {
    cloudDb.ref('nasan/' + node).on('value', snap => {
      const v = snap.val();
      const local = node === 'orders' ? store.orders : store.accounts;
      if (!v) { if (local.length) cloudSet(node, local); return; }
      const list = Object.keys(v).map(k => ({ ...v[k], ck: k }));
      if (node === 'orders') {
        list.sort((x, y) => (y.createdAt || y.updatedAt || 0) - (x.createdAt || x.updatedAt || 0));
        store.orders = list; try { localStorage.setItem(ORD_KEY, JSON.stringify(list)); } catch (e) {}
      } else {
        store.accounts = list; try { localStorage.setItem(ACC_KEY, JSON.stringify(list)); } catch (e) {}
      }
      emit();
    }, err => logErrorSafe('Cloud', err && err.message, node));
  });
  const seen = new Set(store.traffic.map(e => e.k).filter(Boolean));
  cloudDb.ref('nasan/traffic').orderByChild('t').limitToLast(1500).on('child_added', snap => {
    if (seen.has(snap.key)) return;
    seen.add(snap.key);
    const e = snap.val(); if (!e) return;
    if (store.traffic.some(x => x.k === snap.key)) return;
    store.traffic.push({ ...e, k: snap.key });
    store.traffic.sort((p, q) => p.t - q.t);
    if (store.traffic.length > 1500) store.traffic = store.traffic.slice(-1200);
    try { localStorage.setItem(TRF_KEY, JSON.stringify(store.traffic)); } catch (x) {}
    emit();
  }, () => {});
}
function cloudStart() {
  const cfg = window.NASAN_FIREBASE;
  const fb = window.firebase;
  if (!cfg || !cfg.databaseURL || !fb || !fb.database) return;
  try {
    const app = fb.apps && fb.apps.length ? fb.app() : fb.initializeApp(cfg);
    cloudDb = app.database();
    if (fb.auth) cloudAuth = app.auth();
  } catch (e) { store.cloud = 'error'; logErrorSafe('Cloud', e.message, 'init'); return; }
  store.cloud = 'connecting'; emit();
  cloudDb.ref('.info/connected').on('value', s => { store.cloud = s.val() ? 'online' : 'offline'; emit(); });
  PUBLIC_NODES.forEach(node => {
    cloudDb.ref('nasan/' + node).on('value', snap => {
      const v = snap.val();
      if (v === null) { cloudNull.add(node); if (store.cloudAdmin) cloudSet(node, node === 'products' ? store.products : node === 'settings' ? store.settings : store.trOverrides); return; }
      cloudNull.delete(node);
      applyNode(node, v);
    }, err => { store.cloud = 'denied'; logErrorSafe('Cloud', err && err.message, node); emit(); });
  });
  if (cloudAuth) {
    cloudAuth.onAuthStateChanged(u => {
      store.cloudAdmin = !!(u && ADMIN_UID() && u.uid === ADMIN_UID());
      store.cloudUser = u ? u.email : '';
      if (store.cloudAdmin) startAdminListeners();
      emit();
    });
  }
  followOwnOrders();
}

function emit() {
  store.rev++;
  listeners.forEach(fn => { try { fn(store.rev); } catch (e) { /* listener detached */ } });
}

const NasanStore = {
  get: () => store,
  subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },

  setLang(i) { store.lang = i; emit(); },

  setSignedIn(v) { store.signedIn = !!v; saveSession(); emit(); },
  patchAccount(patch) { Object.assign(store.account, patch); if (store.signedIn) saveSession(); emit(); },

  /* identifier = full email or full Iraqi mobile number */
  findAccount(identifier) {
    const v = String(identifier || '').trim();
    if (!v) return null;
    if (v.includes('@')) return store.accounts.find(a => a.email.toLowerCase() === v.toLowerCase()) || null;
    const d = normPhone(v);
    return d ? store.accounts.find(a => normPhone(a.phone) === d) || null : null;
  },
  setAccountStatus(email, status, reason) {
    const a = store.accounts.find(x => x.email === String(email || '').toLowerCase());
    if (!a) return;
    a.status = status; a.statusReason = reason || ''; a.statusAt = Date.now();
    saveAccounts(); cloudPut('accounts', a);
    if (status === 'suspended' && store.signedIn && store.sessionEmail === a.email) NasanStore.signOut();
    emit();
  },
  deleteAccount(email) {
    const e = String(email || '').toLowerCase();
    const a = store.accounts.find(x => x.email === e);
    if (!a) return;
    store.accounts = store.accounts.filter(x => x.email !== e);
    cloudRemove('accounts', a);
    saveAccounts();
    store.orders.forEach(o => { if (o.owner === e || (a.phone && o.owner === String(a.phone).toLowerCase())) { o.customer = (o.customer || 'Customer') + ' (deleted)'; o.ownerDeleted = true; } });
    saveOrders();
    if (store.signedIn && store.sessionEmail === e) NasanStore.signOut();
    emit();
  },
  checkPassword(acc, pass) { return !!acc && acc.hash === pwHash(acc.email, pass); },
  registerAccount(form) {
    const rec = { ...form, email: form.email.trim().toLowerCase(), hash: pwHash(form.email.trim(), form.pass), createdAt: Date.now(), lastSignIn: Date.now(), device: (typeof CTX !== 'undefined' ? CTX.dv + ' · ' + CTX.br : ''), status: 'active' };
    delete rec.pass; delete rec.confirm; delete rec.identifier;
    store.accounts.push(rec); saveAccounts(); cloudPut('accounts', rec);
    store.sessionEmail = rec.email; emit();
    return rec;
  },
  updateAccountRecord(email, patch) {
    const a = store.accounts.find(x => x.email === String(email || '').toLowerCase());
    if (!a) return;
    const p = { ...patch }; delete p.pass; delete p.confirm; delete p.identifier;
    if (p.email) p.email = p.email.trim().toLowerCase();
    Object.assign(a, p); saveAccounts(); cloudPut('accounts', a);
    if (p.email) store.sessionEmail = p.email;
    emit();
  },
  startSession(acc) {
    if (acc && acc.status === 'suspended') return false;
    const rec = store.accounts.find(x => x.email === acc.email);
    if (rec) { rec.lastSignIn = Date.now(); rec.signIns = (rec.signIns || 0) + 1; saveAccounts(); cloudPut('accounts', rec); }
    store.sessionEmail = acc.email;
    Object.assign(store.account, { ...acc, pass: '', confirm: '', identifier: '' });
    delete store.account.hash;
    store.signedIn = true; saveSession(); emit();
  },
  signOut() {
    store.signedIn = false; store.sessionEmail = ''; saveSession();
    Object.keys(store.account).forEach(k => { store.account[k] = typeof store.account[k] === 'boolean' ? false : ''; });
    emit();
  },

  updateProduct(code, patch) {
    const p = store.products.find(x => x.code === code);
    if (!p) return;
    Object.assign(p, patch);
    saveProducts(); emit();
  },
  addProduct(p) { store.products.unshift(p); saveProducts(); emit(); },
  removeProduct(code) {
    store.products = store.products.filter(x => x.code !== code);
    saveProducts(); emit();
  },

  setOrderStatus(id, status) {
    const o = store.orders.find(x => x.id === id);
    if (!o) return;
    o.status = status;
    o.past = status === 'Picked up' || status === 'Collected' || status === 'Cancelled';
    o.updatedAt = Date.now();
    try { localStorage.setItem(ORD_KEY, JSON.stringify(store.orders)); } catch (e) {}
    cloudPut('orders', o); emit();
  },
  addOrder(order) {
    const owner = currentOwner();
    if (!owner) return false;
    let id = order.id;
    while (store.orders.some(x => x.id === id)) id = '#' + (1802 + Math.floor(Math.random() * 8000));
    const rec = { ...order, id, owner, createdAt: Date.now(), customer: [store.account.first, store.account.last].filter(Boolean).join(' ') || order.customer };
    store.orders.unshift(rec);
    cloudPut('orders', rec); followOwnOrders();
    cloudEvent({ t: Date.now(), d: deviceId, s: 'order', x: id, lang: store.lang || 0 });
    saveTraffic();
    saveOrders(); emit();
    return id;
  },
  currentOwner,
  track(screen, detail, dev, ctx) {
    const c = ctx || CTX;
    cloudEvent({ t: Date.now(), d: dev || deviceId, s: screen, x: detail || '', lang: store.lang || 0, dv: c.dv, br: c.br, src: c.src });
    saveTraffic(); emit();
  },
  click(kind, detail) { NasanStore.track('click', kind + (detail ? ':' + detail : '')); },
  deviceId: () => deviceId,
  clearTraffic() { store.traffic = []; saveTraffic(); cloudSet('traffic', null); emit(); },
  logError,
  defaults: () => DEFAULT_SETTINGS,
  setSetting(section, key, val) {
    store.settings = { ...store.settings, [section]: { ...store.settings[section], [key]: val } };
    saveSettings(); emit();
  },
  saveTranslations(li, map) {
    const clean = {};
    Object.keys(map).forEach(k => { const v = (map[k] || '').trim(); if (v) clean[k] = v; });
    store.trOverrides = { ...store.trOverrides, [li]: clean };
    saveTr(); emit();
  },
  exportBackup() {
    return JSON.stringify({
      app: 'nasan', version: 1, exportedAt: new Date().toISOString(),
      products: store.products, orders: store.orders, settings: store.settings,
      translations: store.trOverrides,
      accounts: (store.accounts || []).map(a => ({ ...a, photo: a.photo && a.photo.length > 200000 ? '' : a.photo })),
    }, null, 2);
  },
  importBackup(text) {
    const d = JSON.parse(text);
    if (!d || d.app !== 'nasan') throw new Error('This is not a nasan backup file');
    if (Array.isArray(d.products)) store.products = d.products;
    if (Array.isArray(d.orders)) { store.orders = d.orders; saveOrders(); }
    if (d.settings) { store.settings = merge(DEFAULT_SETTINGS, d.settings); saveSettings(); }
    if (d.translations) { store.trOverrides = { 0: {}, 1: {}, 2: {}, ...d.translations }; saveTr(); }
    emit();
    return { products: (d.products || []).length, orders: (d.orders || []).length };
  },
  resetSettings() { store.settings = merge(DEFAULT_SETTINGS, {}); saveSettings(); emit(); },
  clearErrors() { store.errors = []; try { localStorage.setItem(ERR_KEY, '[]'); } catch (e) {} emit(); },
  /* Admin sign-in through Firebase Auth. Resolves { ok, err }. */
  adminCloud() { return !!cloudAuth; },
  /* Re-read everything from Firebase once (Refresh button). */
  cloudRefresh() {
    if (!cloudDb) return Promise.resolve(false);
    const nodes = ['products', 'settings', 'translations'].concat(store.cloudAdmin ? ['orders', 'accounts'] : []);
    return Promise.all(nodes.map(node => cloudDb.ref('nasan/' + node).once('value').then(snap => {
      const v = snap.val(); if (v === null) return;
      if (node === 'orders' || node === 'accounts') {
        const list = Object.keys(v).map(k => ({ ...v[k], ck: k }));
        if (node === 'orders') { list.sort((x, y) => (y.createdAt || y.updatedAt || 0) - (x.createdAt || x.updatedAt || 0)); store.orders = list; try { localStorage.setItem(ORD_KEY, JSON.stringify(list)); } catch (e) {} }
        else { store.accounts = list; try { localStorage.setItem(ACC_KEY, JSON.stringify(list)); } catch (e) {} }
      } else applyNode(node, v);
    }).catch(() => {}))).then(() => { emit(); return true; });
  },
  isCloudAdmin() { return store.cloudAdmin; },
  adminSignIn(email, pass) {
    if (!cloudAuth) return Promise.resolve({ ok: false, err: 'offline' });
    return cloudAuth.signInWithEmailAndPassword(email, pass).then(c => {
      if (!c.user || c.user.uid !== ADMIN_UID()) { cloudAuth.signOut(); return { ok: false, err: 'This account is not the nasan admin' }; }
      store.cloudAdmin = true; startAdminListeners(); emit();
      return { ok: true };
    }).catch(e => {
      const c = (e && e.code) || '';
      const msg = /too-many/.test(c) ? 'Too many tries. Wait a few minutes.'
        : /network/.test(c) ? 'No internet connection'
        : 'Wrong email or password';
      return { ok: false, err: msg };
    });
  },
  adminSignOut() { store.cloudAdmin = false; if (cloudAuth) cloudAuth.signOut(); emit(); },
  adminReset(email) {
    if (!cloudAuth) return Promise.resolve(false);
    return cloudAuth.sendPasswordResetEmail(email).then(() => true).catch(() => false);
  },
  myOrders() { const o = currentOwner(); return o ? store.orders.filter(x => x.owner === o) : []; },
};

/* React hook: re-render on any store change */
function useStore() {
  const [, force] = React.useState(0);
  React.useEffect(() => NasanStore.subscribe(() => force(n => n + 1)), []);
  return store;
}

window.NasanStore = NasanStore;
window.useNasanStore = useStore;
NasanStore.cloudStatus = () => store.cloud;
try { cloudStart(); } catch (e) {}
module.exports = { NasanStore, useStore };
