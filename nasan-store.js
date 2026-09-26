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
  orders: [
    { id: '#1802', customer: 'Shwan R.', items: 2, summary: 'Aixun T3A · 2 items', when: 'Today, 11:20', status: 'Waiting', past: false },
    { id: '#1801', customer: 'Karwan H.', items: 1, summary: 'SUNSHINE P-3005D · 1 item', when: 'Today, 10:42', status: 'Preparing', past: false },
    { id: '#1799', customer: 'Aram S.', items: 2, summary: 'RF4 RF-6558PRO · 2 items', when: 'Yesterday, 16:05', status: 'Ready', past: false },
    { id: '#1782', customer: 'Dana M.', items: 1, summary: 'YX-AK49 microscope · 1 item', when: '2 Sep 2026', status: 'Picked up', past: true, shop: 'Barzar Jawazaka' },
    { id: '#1770', customer: 'Hemin A.', items: 3, summary: 'YIHUA 3010D-IV · 3 items', when: '24 Aug 2026', status: 'Picked up', past: true, shop: 'Bazar Hama Sur' },
    { id: '#1751', customer: 'Shwan K.', items: 5, summary: 'Relife tweezers set · 5 items', when: '11 Aug 2026', status: 'Picked up', past: true, shop: 'Kirkuk' },
  ],
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
      return JSON.parse(raw).map(a => (a.photo && /^data:/.test(a.photo) && a.photo.length < 200 ? { ...a, photo: '' } : a));
    }
  } catch (e) {}
  return [{
    first: 'Demo', middle: '', last: 'Account', email: 'demo@nasan.company', phone: '770 000 0000',
    hash: pwHash('demo@nasan.company', 'nasan2026'), photo: '', city: 'Sulaymaniyah',
    phoneVerified: true, emailVerified: true,
  }];
}
function saveAccounts() { try { localStorage.setItem(ACC_KEY, JSON.stringify(store.accounts)); } catch (e) {} }
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
  checkPassword(acc, pass) { return !!acc && acc.hash === pwHash(acc.email, pass); },
  registerAccount(form) {
    const rec = { ...form, email: form.email.trim().toLowerCase(), hash: pwHash(form.email.trim(), form.pass) };
    delete rec.pass; delete rec.confirm; delete rec.identifier;
    store.accounts.push(rec); saveAccounts();
    store.sessionEmail = rec.email; emit();
    return rec;
  },
  updateAccountRecord(email, patch) {
    const a = store.accounts.find(x => x.email === String(email || '').toLowerCase());
    if (!a) return;
    const p = { ...patch }; delete p.pass; delete p.confirm; delete p.identifier;
    if (p.email) p.email = p.email.trim().toLowerCase();
    Object.assign(a, p); saveAccounts();
    if (p.email) store.sessionEmail = p.email;
    emit();
  },
  startSession(acc) {
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
    emit();
  },
  addProduct(p) { store.products.unshift(p); emit(); },
  removeProduct(code) {
    store.products = store.products.filter(x => x.code !== code);
    emit();
  },

  setOrderStatus(id, status) {
    const o = store.orders.find(x => x.id === id);
    if (!o) return;
    o.status = status;
    o.past = status === 'Picked up' || status === 'Collected' || status === 'Cancelled';
    o.updatedAt = Date.now();
    emit();
  },
  addOrder(order) { store.orders.unshift(order); emit(); },
};

/* React hook: re-render on any store change */
function useStore() {
  const [, force] = React.useState(0);
  React.useEffect(() => NasanStore.subscribe(() => force(n => n + 1)), []);
  return store;
}

window.NasanStore = NasanStore;
window.useNasanStore = useStore;
module.exports = { NasanStore, useStore };
