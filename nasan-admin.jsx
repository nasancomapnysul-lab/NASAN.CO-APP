/* nasan admin panel — manage products, brands, orders.
   Runs in a browser window, not a phone frame. Editable: rows open an
   inspector, fields are real inputs held in local state. */

const A = {
  teal: '#3FB2BD',
  tealDeep: '#2C8F99',
  ink: '#20262A',
  ink70: 'rgba(32,38,42,0.66)',
  ink45: 'rgba(32,38,42,0.45)',
  line: 'rgba(32,38,42,0.10)',
  paper: '#F6F5F2',
  white: '#fff',
  sans: '-apple-system, "SF Pro Text", system-ui, sans-serif',
};

const SEED_PRODUCTS = [
  { code: '1801', name: 'SUNSHINE P-3005D', brand: 'Sunshine', cat: 'Power', stock: 12, status: 'Live' },
  { code: '1642', name: 'RF4 RF-6558PRO', brand: 'RF4', cat: 'Microscope', stock: 4, status: 'Live' },
  { code: '1588', name: 'YX-AK49', brand: 'Yaxun', cat: 'Microscope', stock: 2, status: 'Low stock' },
  { code: '1470', name: 'YIHUA 3010D-IV', brand: 'Yihua', cat: 'Power', stock: 9, status: 'Live' },
  { code: '1402', name: 'SUGON 3010PM', brand: 'Sugon', cat: 'Power', stock: 0, status: 'Out of stock' },
  { code: '1355', name: 'RF-305A', brand: 'RF4', cat: 'Power', stock: 6, status: 'Live' },
  { code: '1290', name: 'Relife RL-069', brand: 'Relife', cat: 'Hand tools', stock: 24, status: 'Live' },
  { code: '1188', name: 'Quick 861DW', brand: 'Quick', cat: 'Hot air', stock: 3, status: 'Low stock' },
];

const SEED_ORDERS = [
  { id: '#1801', customer: 'Karwan H.', items: 1, when: 'Today, 10:42', status: 'Preparing' },
  { id: '#1799', customer: 'Aram S.', items: 2, when: 'Yesterday, 16:05', status: 'Ready' },
  { id: '#1782', customer: 'Dana M.', items: 1, when: '2 Sep 2026', status: 'Picked up' },
  { id: '#1770', customer: 'Hemin A.', items: 3, when: '24 Aug 2026', status: 'Picked up' },
];

const BRANDS_ADMIN = ['Yaxun', 'RF4', 'Sunshine', 'Aixun', 'Yihua', 'Quick', 'Relife', 'Aida', 'YYD', 'Aifen', 'Flycdi'];

const STATUS_TONE = {
  'Live': ['rgba(63,178,189,0.14)', '#2C8F99'],
  'Low stock': ['rgba(214,158,46,0.16)', '#946200'],
  'Out of stock': ['rgba(32,38,42,0.08)', 'rgba(32,38,42,0.55)'],
  'Draft': ['rgba(32,38,42,0.08)', 'rgba(32,38,42,0.55)'],
  'Waiting': ['rgba(214,158,46,0.16)', '#946200'],
  'Received': ['rgba(63,178,189,0.10)', '#2C8F99'],
  'Picked up': ['rgba(32,38,42,0.08)', 'rgba(32,38,42,0.55)'],
  'Preparing': ['rgba(63,178,189,0.14)', '#2C8F99'],
  'Ready': ['rgba(63,178,189,0.20)', '#1F6E76'],
  'Collected': ['rgba(32,38,42,0.08)', 'rgba(32,38,42,0.55)'],
};

function Tag({ label }) {
  const [bg, fg] = STATUS_TONE[label] || STATUS_TONE.Draft;
  return (
    <span style={{
      font: `600 10.5px/1 ${A.sans}`, letterSpacing: '0.05em', textTransform: 'uppercase',
      padding: '5px 9px', borderRadius: 6, background: bg, color: fg, whiteSpace: 'nowrap',
    }}>{label}</span>
  );
}

const catLabel = (c) => (c === 'Power' ? 'Power supply' : c);

function Field({ label, value, onChange, type = 'text', options, optionLabel }) {
  const base = {
    width: '100%', boxSizing: 'border-box', height: 40, padding: '0 12px',
    borderRadius: 10, border: `1px solid ${A.line}`, background: A.white,
    font: `400 14px/1 ${A.sans}`, color: A.ink, outline: 'none',
  };
  return (
    <label style={{ display: 'block', marginTop: 14 }}>
      <span style={{ display: 'block', marginBottom: 7, font: `500 10.5px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: A.ink45 }}>{label}</span>
      {options ? (
        <select value={value} onChange={e => onChange(e.target.value)} style={base}>
          {options.map(o => <option key={o} value={o}>{optionLabel ? optionLabel(o) : o}</option>)}
        </select>
      ) : (
        <input type={type} value={value} onChange={e => onChange(type === 'number' ? Number(e.target.value) : e.target.value)} style={base} />
      )}
    </label>
  );
}

const SCREEN_NAME = {
  splash: 'Welcome', home: 'Home', brands: 'Brands', search: 'Search', orders: 'Orders', lcd: 'LCD',
  account: 'You', catalog: 'Catalog', product: 'Product', cart: 'Cart', about: 'About', contact: 'Contact', menu: 'Slide bar',
};
const LANG_NAME = ['English', 'Kurdish', 'Arabic'];

function ago(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  if (s < 5) return 'just now';
  if (s < 60) return s + 's ago';
  const m = Math.floor(s / 60);
  if (m < 60) return m + 'm ago';
  return Math.floor(m / 60) + 'h ago';
}

function Stat({ label, value, note, live }) {
  return (
    <div style={{ padding: '16px 18px', borderRadius: 14, background: A.white, border: `1px solid ${A.line}`, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, font: `600 10.5px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: A.ink45 }}>
        {live && <span style={{ width: 7, height: 7, borderRadius: 7, background: '#2EB872', animation: 'nsPulse 1.6s ease-in-out infinite' }} />}
        {label}
      </div>
      <div key={value} style={{ marginTop: 10, font: `700 30px/1 ${A.sans}`, letterSpacing: '-0.03em', color: A.ink, animation: 'nsPop .35s cubic-bezier(.2,.8,.25,1) both' }}>{value}</div>
      {note && <div style={{ marginTop: 7, font: `400 12px/1.3 ${A.sans}`, color: A.ink45 }}>{note}</div>}
    </div>
  );
}

function Traffic({ events, products }) {
  const [, tick] = React.useState(0);
  const [sim, setSim] = React.useState(false);
  const [spin, setSpin] = React.useState(false);
  const [est, setEst] = React.useState(null);
  React.useEffect(() => { const id = setInterval(() => tick(n => n + 1), 1000); return () => clearInterval(id); }, []);
  React.useEffect(() => { try { navigator.storage && navigator.storage.estimate && navigator.storage.estimate().then(setEst); } catch (e) {} }, []);
  React.useEffect(() => {
    if (!sim || !window.NasanStore) return;
    const devs = Array.from({ length: 9 }, (_, k) => ({ d: 'v' + Math.random().toString(36).slice(2, 7), dv: k % 3 ? 'mobile' : 'desktop', br: ['Chrome', 'Safari', 'Samsung'][k % 3], src: ['direct', 'tiktok', 'instagram', 'google', 'facebook'][k % 5] }));
    const screens = ['home', 'home', 'catalog', 'product', 'product', 'product', 'lcd', 'brands', 'search', 'cart'];
    const clicks = ['category_click', 'category_click', 'whatsapp', 'search', 'brand_click', 'lcd'];
    const id = setInterval(() => {
      const v = devs[Math.floor(Math.random() * devs.length)];
      if (Math.random() < 0.35) { window.NasanStore.track('click', clicks[Math.floor(Math.random() * clicks.length)], v.d, v); return; }
      const sc = screens[Math.floor(Math.random() * screens.length)];
      const p = products[Math.floor(Math.random() * products.length)];
      window.NasanStore.track(sc, sc === 'product' && p ? p.code : '', v.d, v);
    }, 1200);
    return () => clearInterval(id);
  }, [sim]);

  const now = Date.now();
  const day0 = new Date(); day0.setHours(0, 0, 0, 0);
  const D0 = day0.getTime(), DAY = 86400000;
  const isView = e => e.s !== 'ping' && e.s !== 'order' && e.s !== 'click' && e.s !== 'load';
  const views = events.filter(isView);
  const today = views.filter(e => e.t >= D0);
  const week = views.filter(e => e.t >= D0 - 6 * DAY);
  const live = new Set(events.filter(e => now - e.t < 60000).map(e => e.d)).size;
  const visitorsToday = new Set(today.map(e => e.d)).size;
  const devicesAll = new Set(views.map(e => e.d)).size;
  const loads = events.filter(e => e.s === 'load').map(e => Number(e.x)).filter(Boolean);
  const avgLoad = loads.length ? Math.round(loads.reduce((a, b) => a + b, 0) / loads.length) : 0;

  const nav = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  const myLoad = nav ? Math.round(nav.loadEventEnd || nav.duration) : 0;
  const res = performance.getEntriesByType ? performance.getEntriesByType('resource') : [];
  const measurable = res.filter(r => r.transferSize > 0 || r.decodedBodySize > 0);
  const cached = measurable.filter(r => r.transferSize === 0 && r.decodedBodySize > 0);
  const fresh = measurable.filter(r => r.transferSize > 0);
  const kb = arr => Math.round(arr.reduce((a, r) => a + (r.decodedBodySize || r.transferSize || 0), 0) / 1024);
  const cachePct = measurable.length ? Math.round(cached.length / measurable.length * 100) : 0;
  const unmeasured = res.length - measurable.length;
  const usedKB = est ? Math.round((est.usage || 0) / 1024) : 0;
  const quotaMB = est ? (est.quota || 0) / 1048576 : 0;

  const days = Array.from({ length: 7 }, (_, k) => {
    const from = D0 - (6 - k) * DAY;
    const d = new Date(from);
    return { label: String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'), n: views.filter(e => e.t >= from && e.t < from + DAY).length };
  });
  const dayMax = Math.max(1, ...days.map(d => d.n));

  const tally = (arr, key) => { const m = {}; arr.forEach(e => { const k = key(e); if (k) m[k] = (m[k] || 0) + 1; }); return Object.entries(m).sort((a, b) => b[1] - a[1]); };
  const topProd = tally(week.filter(e => e.s === 'product'), e => e.x).slice(0, 8)
    .map(([code, n]) => [((products.find(p => p.code === code) || {}).name) || code, n]);
  const topClick = tally(events.filter(e => e.s === 'click' && e.t >= D0 - 6 * DAY), e => String(e.x).split(':')[0]).slice(0, 8);
  const todayAll = events.filter(e => e.t >= D0 && e.s !== 'ping');
  const perDev = (field) => {
    const seen = {}; todayAll.forEach(e => { if (!seen[e.d]) seen[e.d] = e[field] || 'unknown'; });
    const m = {}; Object.values(seen).forEach(v => { m[v] = (m[v] || 0) + 1; });
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  };

  const C = { bg: '#0E1317', card: '#121A1F', line: 'rgba(255,255,255,0.08)', track: 'rgba(255,255,255,0.08)', text: '#E8EDEF', dim: 'rgba(232,237,239,0.55)', acc: A.teal, good: '#3DDC84' };
  const card = { padding: '20px 20px', borderRadius: 14, background: C.card, border: `1px solid ${C.line}`, minWidth: 0 };
  const h = { font: `700 15px/1.2 ${A.sans}`, color: C.text, display: 'flex', alignItems: 'center', gap: 9 };
  const ico = (d, c) => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={c || C.acc} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>;
  const bar = (pct, color) => (
    <div style={{ height: 9, borderRadius: 9, background: C.track, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: Math.max(0, Math.min(100, pct)) + '%', borderRadius: 9, background: color || C.acc, transition: 'width .5s cubic-bezier(.2,.8,.25,1)' }} />
    </div>
  );
  const listCard = (title, icon, rows, empty) => {
    const max = rows.length ? rows[0][1] : 1;
    return (
      <div style={card}>
        <div style={h}>{icon}{title}</div>
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 13 }}>
          {!rows.length && <div style={{ font: `400 13px/1.5 ${A.sans}`, color: C.dim }}>{empty}</div>}
          {rows.map(([k, n]) => (
            <div key={k}>
              <div style={{ display: 'flex', gap: 12, font: `400 14px/1.4 ${A.sans}`, color: C.text }}>
                <span style={{ flex: 1, minWidth: 0, textWrap: 'pretty' }}>{k}</span>
                <span style={{ color: C.acc, fontWeight: 600 }}>{n}</span>
              </div>
              <div style={{ marginTop: 7 }}>{bar(n / max * 100)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const stat = (value, label, note, accent) => (
    <div style={card}>
      <div key={value} style={{ font: `700 32px/1 ${A.sans}`, letterSpacing: '-0.02em', color: accent ? C.acc : C.text, animation: 'nsPop .35s cubic-bezier(.2,.8,.25,1) both' }}>{value}</div>
      <div style={{ marginTop: 12, font: `400 14px/1.2 ${A.sans}`, color: C.dim }}>{label}</div>
      {note && <div style={{ marginTop: 8, font: `400 13px/1.2 ${A.sans}`, color: C.acc }}>{note}</div>}
    </div>
  );
  const pill = (label, onClick, on) => <span onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', padding: '11px 18px', borderRadius: 100, border: '1px solid ' + (on ? C.acc : 'rgba(255,255,255,0.16)'), color: on ? C.acc : C.text, font: `600 13.5px/1 ${A.sans}`, background: 'transparent' }}>{label}</span>;
  const speedTxt = !myLoad ? '—' : myLoad < 1500 ? 'Fast' : myLoad < 3500 ? 'OK' : 'Slow';
  const speedCol = !myLoad ? C.dim : myLoad < 1500 ? C.good : myLoad < 3500 ? '#E0A526' : '#E5534B';
  const doRefresh = () => { setSpin(true); tick(n => n + 1); try { navigator.storage && navigator.storage.estimate && navigator.storage.estimate().then(setEst); } catch (e) {} setTimeout(() => setSpin(false), 600); };

  return (
    <div style={{ margin: '-20px -26px -30px', padding: '22px 22px 28px', background: C.bg, minHeight: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {ico('M4 19V11M9 19V5M14 19v-6M19 19V8')}
        <span style={{ font: `700 22px/1 ${A.sans}`, letterSpacing: '-0.02em', color: C.text }}>Site Dashboard</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
          {pill(<><span style={{ display: 'inline-flex', transform: spin ? 'rotate(360deg)' : 'none', transition: 'transform .6s' }}>↻</span> Refresh</>, doRefresh, true)}
          {pill('← Back to Products', () => window.__nasanAdminTab && window.__nasanAdminTab('Products'))}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 12 }}>
        {stat(today.length, 'Views today', 'visitors: ' + visitorsToday)}
        {stat(live, 'Live now', 'tabs open', true)}
        {stat(week.length, 'Views this week')}
        {stat(views.length, 'All-time views', 'devices: ' + devicesAll)}
        {stat(avgLoad ? avgLoad + ' ms' : '—', 'Avg load', avgLoad ? loads.length + ' loads' : 'no data')}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <div style={card}>
          <div style={h}>{ico('M13 2L4 14h7l-1 8 9-12h-7l1-8z', '#F29B38')}Load speed (this device)</div>
          <div style={{ marginTop: 16, display: 'flex', font: `400 15px/1 ${A.sans}`, color: C.text }}>
            <span>{myLoad ? myLoad + ' ms' : '—'}</span><span style={{ marginLeft: 'auto', color: speedCol, fontWeight: 700 }}>{speedTxt}</span>
          </div>
          <div style={{ marginTop: 12 }}>{bar(myLoad ? Math.max(8, 100 - myLoad / 50) : 0, speedCol)}</div>
          <div style={{ marginTop: 12, font: `400 13px/1.5 ${A.sans}`, color: C.dim }}>Under 1.5s is fast. This is your device's load time now.</div>
        </div>
        <div style={card}>
          <div style={h}>{ico('M21 12a9 9 0 11-3.2-6.9M21 4v5h-5')}Cache vs fresh (this load)</div>
          <div style={{ marginTop: 16, display: 'flex', font: `400 15px/1 ${A.sans}` }}>
            <span style={{ color: C.good, fontWeight: 700 }}>{cachePct}% from cache</span><span style={{ marginLeft: 'auto', color: C.dim }}>{100 - cachePct}% fresh</span>
          </div>
          <div style={{ marginTop: 12, height: 9, borderRadius: 9, background: 'rgba(255,255,255,0.22)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: cachePct + '%', background: C.good, borderRadius: 9 }} />
          </div>
          <div style={{ marginTop: 10, display: 'flex', font: `400 12.5px/1 ${A.sans}`, color: C.dim }}>
            <span>cache: {cached.length} files · {kb(cached)} KB</span><span style={{ marginLeft: 'auto' }}>fresh: {fresh.length} files · {kb(fresh)} KB</span>
          </div>
          <div style={{ marginTop: 10, font: `400 13px/1.5 ${A.sans}`, color: C.dim }}>Refresh the page — the green share rises as files load from cache = faster.{unmeasured > 0 ? ' (' + unmeasured + ' external files can\'t be measured.)' : ''}</div>
        </div>
        <div style={card}>
          <div style={h}>{ico('M5 3h11l3 3v15H5zM8 3v5h7V3M8 21v-7h8v7', '#B58CF0')}Storage used</div>
          <div style={{ marginTop: 16, display: 'flex', font: `400 15px/1 ${A.sans}`, color: C.text }}>
            <span>{est ? (usedKB > 1024 ? (usedKB / 1024).toFixed(1) + ' MB' : usedKB + ' KB') : '—'}</span>
            <span style={{ marginLeft: 'auto', color: C.dim }}>{est ? 'of ' + (quotaMB > 1024 ? (quotaMB / 1024).toFixed(1) + ' GB' : quotaMB.toFixed(0) + ' MB') : ''}</span>
          </div>
          <div style={{ marginTop: 12 }}>{bar(est && est.quota ? Math.max(1, est.usage / est.quota * 100) : 0)}</div>
          <div style={{ marginTop: 12, font: `400 13px/1.5 ${A.sans}`, color: C.dim }}>Cache + saved data this app uses on your device ({est && est.quota ? (est.usage / est.quota * 100).toFixed(1) : '0.0'}% of allowance).</div>
        </div>
      </div>

      <div style={card}>
        <div style={h}>Last 7 days</div>
        <div style={{ marginTop: 18, height: 150, display: 'flex', alignItems: 'flex-end', gap: 8 }}>
          {days.map(d => (
            <div key={d.label} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'stretch' }}>
              <div style={{ textAlign: 'center', font: `500 13px/1 ${A.sans}`, color: C.acc, marginBottom: 8 }}>{d.n}</div>
              <div style={{ height: Math.max(4, d.n / dayMax * 110), borderRadius: '6px 6px 0 0', background: 'linear-gradient(180deg, ' + C.acc + ', ' + A.tealDeep + ')', transition: 'height .5s cubic-bezier(.2,.8,.25,1)' }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          {days.map(d => <span key={d.label} style={{ flex: 1, textAlign: 'center', font: `400 12.5px/1 ${A.sans}`, color: C.dim }}>{d.label}</span>)}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        {listCard('Most viewed products', ico('M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-9 0 4-4 6-4 12 0 5 3 8 7 8z', '#F2743A'), topProd, 'No product views this week yet.')}
        {listCard('Most clicked', ico('M9 11V5a2 2 0 114 0v6M13 10a2 2 0 114 0v2M17 12a2 2 0 114 0v3a7 7 0 01-7 7h-1a7 7 0 01-6-3l-3-5a2 2 0 013-2l2 2', '#F2B53A'), topClick, 'No clicks this week yet.')}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        {listCard('Devices', ico('M7 2h10v20H7zM11 18h2', '#8C9CF2'), perDev('dv'), 'No visits today.')}
        {listCard('Browsers', ico('M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.6 2.6 2.6 15 0 18M12 3c-2.6 2.6-2.6 15 0 18', '#5AB0F2'), perDev('br'), 'No visits today.')}
        {listCard('Traffic sources', ico('M12 3v18M8 7h8M8 12h8M8 17h8', '#E5534B'), perDev('src'), 'No visits today.')}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, font: `400 13px/1.55 ${A.sans}`, color: C.dim }}>
        <span style={{ flex: 1 }}>“Visitors” counts unique <b style={{ color: C.text }}>devices</b> (a browser can't read a real IP address). Right now this counts this device and open tabs; once connected to Supabase it counts every customer's phone. Device, browser and source breakdowns reset per day.</span>
        {pill(sim ? 'Stop test visitors' : 'Run test visitors', () => setSim(v => !v), sim)}
        {pill('Clear', () => window.NasanStore && window.NasanStore.clearTraffic())}
      </div>
    </div>
  );
}

const LINKS_TO_CHECK = [
  ['WhatsApp', 'https://wa.me/9647704149292'],
  ['Google Maps', 'https://www.google.com/maps'],
  ['TikTok', 'https://www.tiktok.com/@nasan.company'],
  ['Instagram', 'https://www.instagram.com/nasan.company.iq'],
  ['Facebook', 'https://www.facebook.com/'],
  ['X', 'https://x.com/nasancompany', true],
  ['nasan.company', 'https://www.nasan.company/'],
];

function Dot({ tone }) {
  const c = { ok: '#2EB872', warn: '#E0A526', bad: '#D2483C', idle: 'rgba(32,38,42,0.25)' }[tone] || '#2EB872';
  return <span style={{ width: 8, height: 8, borderRadius: 8, flex: 'none', background: c, boxShadow: '0 0 0 3px ' + c + '22' }} />;
}

function Diagnostics({ st }) {
  const [, tick] = React.useState(0);
  const [fps, setFps] = React.useState(0);
  const [links, setLinks] = React.useState({});
  const [checking, setChecking] = React.useState(false);
  React.useEffect(() => { const id = setInterval(() => tick(n => n + 1), 1000); return () => clearInterval(id); }, []);
  React.useEffect(() => {
    let raf, frames = 0, t0 = performance.now(), alive = true;
    const loop = (now) => {
      frames++;
      if (now - t0 >= 1000) { alive && setFps(Math.round(frames * 1000 / (now - t0))); frames = 0; t0 = now; }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { alive = false; cancelAnimationFrame(raf); };
  }, []);

  const runLinks = async () => {
    setChecking(true);
    const out = {};
    await Promise.all(LINKS_TO_CHECK.map(async ([name, url, untestable]) => {
      if (untestable) { out[name] = { skip: true }; setLinks(l => ({ ...l, [name]: out[name] })); return; }
      const t0 = performance.now();
      try {
        const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 6000);
        await fetch(url, { mode: 'no-cors', cache: 'no-store', signal: ctl.signal });
        clearTimeout(to);
        out[name] = { ok: true, ms: Math.round(performance.now() - t0) };
      } catch (e) { out[name] = { ok: false, ms: Math.round(performance.now() - t0) }; }
      setLinks(l => ({ ...l, [name]: out[name] }));
    }));
    setChecking(false);
  };
  React.useEffect(() => { runLinks(); }, []);

  const nav = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  const loadMs = nav ? Math.round(nav.loadEventEnd || nav.domComplete || nav.duration) : 0;
  const domMs = nav ? Math.round(nav.domContentLoadedEventEnd) : 0;
  const mem = performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : null;
  const conn = navigator.connection || {};
  const online = navigator.onLine;
  let storeKB = 0;
  try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); storeKB += (k.length + (localStorage.getItem(k) || '').length) * 2; } } catch (e) {}
  storeKB = Math.round(storeKB / 1024);
  const up = Math.round((Date.now() - (st.bootedAt || Date.now())) / 1000);
  const upTxt = up < 60 ? up + 's' : up < 3600 ? Math.floor(up / 60) + 'm ' + (up % 60) + 's' : Math.floor(up / 3600) + 'h ' + Math.floor((up % 3600) / 60) + 'm';

  const products = st.products || [];
  const codes = {}; products.forEach(p => { codes[p.code] = (codes[p.code] || 0) + 1; });
  const dup = Object.keys(codes).filter(c => codes[c] > 1);
  const checks = [
    ['Products without a name', products.filter(p => !p.name || !p.name.trim()).map(p => p.code)],
    ['Duplicate product codes', dup],
    ['Marked Live but stock is 0', products.filter(p => p.status === 'Live' && Number(p.stock) === 0).map(p => p.code)],
    ['Still in Draft (hidden from app)', products.filter(p => p.status === 'Draft').map(p => p.code)],
    ['Low stock (3 or fewer)', products.filter(p => Number(p.stock) > 0 && Number(p.stock) <= 3).map(p => p.code)],
  ];
  const errors = (st.errors || []).slice().reverse();
  const errToday = errors.filter(e => Date.now() - e.t < 86400000).length;
  const linkVals = Object.values(links).filter(l => !l.skip);
  const linkBad = linkVals.filter(l => !l.ok).length;
  const linkTestable = LINKS_TO_CHECK.filter(l => !l[2]).length;
  const overall = !online || errToday > 5 || dup.length ? 'bad' : errToday || linkBad || checks[2][1].length ? 'warn' : 'ok';
  const overallTxt = { ok: 'All systems normal', warn: 'Working, with warnings', bad: 'Needs attention' }[overall];

  const card = { padding: '18px 20px', borderRadius: 14, background: A.white, border: `1px solid ${A.line}`, minWidth: 0 };
  const h = { font: `700 14px/1 ${A.sans}`, letterSpacing: '-0.01em', color: A.ink };
  const row = (i) => ({ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderTop: i ? `1px solid ${A.line}` : 'none', font: `400 13px/1.3 ${A.sans}`, color: A.ink70 });
  const tone = (ms, good, ok) => (ms <= good ? 'ok' : ms <= ok ? 'warn' : 'bad');

  const metrics = [
    ['Page load', loadMs ? loadMs + ' ms' : '—', tone(loadMs, 2000, 4500)],
    ['Ready to use', domMs ? domMs + ' ms' : '—', tone(domMs, 1500, 3500)],
    ['Smoothness', fps + ' fps', fps >= 50 ? 'ok' : fps >= 30 ? 'warn' : 'bad'],
    ['Connection', online ? (conn.effectiveType ? conn.effectiveType.toUpperCase() : 'Online') : 'Offline', online ? 'ok' : 'bad'],
    ['Memory', mem != null ? mem + ' MB' : 'n/a', mem == null ? 'idle' : mem < 150 ? 'ok' : mem < 300 ? 'warn' : 'bad'],
    ['Saved on device', storeKB + ' KB', storeKB < 3000 ? 'ok' : storeKB < 4500 ? 'warn' : 'bad'],
    ['Firebase', { online: 'Live', connecting: 'Connecting…', offline: 'Offline', denied: 'Access denied', error: 'Config error', off: 'Not connected' }[st.cloud || 'off'], { online: 'ok', connecting: 'warn', offline: 'bad', denied: 'bad', error: 'bad', off: 'idle' }[st.cloud || 'off']],
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ ...card, display: 'flex', alignItems: 'center', gap: 14 }}>
        <Dot tone={overall} />
        <div style={{ flex: 1 }}>
          <div style={{ font: `700 17px/1.1 ${A.sans}`, letterSpacing: '-0.02em', color: A.ink }}>{overallTxt}</div>
          <div style={{ marginTop: 5, font: `400 12.5px/1.3 ${A.sans}`, color: A.ink45 }}>Up {upTxt} · {errToday} error{errToday === 1 ? '' : 's'} in 24h · {linkVals.length - linkBad}/{linkTestable} links reachable</div>
        </div>
        <span onClick={runLinks} style={{ cursor: 'pointer', padding: '9px 16px', borderRadius: 100, background: A.ink, color: '#fff', font: `600 12.5px/1 ${A.sans}`, opacity: checking ? 0.6 : 1 }}>{checking ? 'Checking…' : 'Run checks'}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        {metrics.map(([k, v, tn]) => (
          <div key={k} style={{ ...card, padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, font: `600 10.5px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: A.ink45 }}><Dot tone={tn} />{k}</div>
            <div style={{ marginTop: 10, font: `700 22px/1 ${A.sans}`, letterSpacing: '-0.02em', color: A.ink }}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 14 }}>
        <div style={card}>
          <div style={h}>Links &amp; services</div>
          <div style={{ marginTop: 8 }}>
            {LINKS_TO_CHECK.map(([name], i) => {
              const l = links[name];
              return (
                <div key={name} style={row(i)}>
                  <Dot tone={!l || l.skip ? 'idle' : l.ok ? tone(l.ms, 800, 2000) : 'bad'} />
                  <span style={{ flex: 1, color: A.ink, fontWeight: 500 }}>{name}</span>
                  <span style={{ font: `400 12px/1 ${A.sans}`, color: A.ink45 }}>{!l ? 'checking…' : l.skip ? 'not testable from browser' : l.ok ? l.ms + ' ms' : 'unreachable'}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={card}>
          <div style={h}>Catalog health</div>
          <div style={{ marginTop: 8 }}>
            {checks.map(([label, list], i) => (
              <div key={label} style={row(i)}>
                <Dot tone={!list.length ? 'ok' : i < 2 ? 'bad' : 'warn'} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: A.ink, fontWeight: 500 }}>{label}</div>
                  {!!list.length && <div style={{ marginTop: 3, font: `400 11.5px/1.3 ${A.sans}`, color: A.ink45, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{list.slice(0, 8).map(c => '[ ' + c + ' ]').join('  ')}{list.length > 8 ? '  +' + (list.length - 8) : ''}</div>}
                </div>
                <span style={{ font: `600 12.5px/1 ${A.sans}`, color: list.length ? A.ink : A.ink45 }}>{list.length}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={card}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={h}>Error log</span>
          <span style={{ font: `400 12px/1 ${A.sans}`, color: A.ink45 }}>{errors.length} recorded</span>
          <span onClick={() => window.NasanStore && window.NasanStore.clearErrors()} style={{ marginLeft: 'auto', cursor: 'pointer', padding: '7px 13px', borderRadius: 100, border: `1px solid ${A.line}`, font: `600 12px/1 ${A.sans}`, color: A.ink }}>Clear</span>
        </div>
        <div style={{ marginTop: 8 }}>
          {!errors.length && <div style={{ ...row(0), color: A.ink45 }}><Dot tone="ok" />No errors. Anything that breaks in the app is recorded here with the time and place.</div>}
          {errors.slice(0, 8).map((e, i) => (
            <div key={e.t + i} style={row(i)}>
              <Dot tone="bad" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: A.ink, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.msg}</div>
                <div style={{ marginTop: 3, font: `400 11.5px/1 ${A.sans}`, color: A.ink45 }}>{e.kind}{e.where ? ' · ' + e.where : ''}</div>
              </div>
              <span style={{ flex: 'none', font: `400 11.5px/1 ${A.sans}`, color: A.ink45 }}>{ago(Date.now() - e.t)}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ font: `400 12px/1.5 ${A.sans}`, color: A.ink45 }}>
        Speed, memory and connection are measured on this device. With Supabase, each customer's phone reports its own errors and load times here.
      </div>
    </div>
  );
}

/* ── Translation manager ── */
const TR_LANGS = [['English', 0, 'ltr'], ['Kurdish Sorani', 1, 'rtl'], ['Arabic', 2, 'rtl']];
const TR_SKIP = /^(sub_|brandSub_)/;

function Translations({ st }) {
  const STR = window.NASAN_STR || {};
  const keys = Object.keys(STR).filter(k => !TR_SKIP.test(k) && Array.isArray(STR[k]));
  const [li, setLi] = React.useState(1);
  const [q, setQ] = React.useState('');
  const [onlyMissing, setOnlyMissing] = React.useState(false);
  const saved = (st.trOverrides || {})[li] || {};
  const [draft, setDraft] = React.useState(saved);
  const [flash, setFlash] = React.useState(false);
  React.useEffect(() => { setDraft((st.trOverrides || {})[li] || {}); }, [li]);
  const dirty = JSON.stringify(draft) !== JSON.stringify(saved);
  const dir = TR_LANGS[li][2];
  const rows = keys.filter(k => {
    const en = String(STR[k][0] || '');
    if (q && !(en + ' ' + (STR[k][li] || '') + ' ' + (draft[k] || '')).toLowerCase().includes(q.toLowerCase())) return false;
    if (onlyMissing && li && STR[k][li] && STR[k][li] !== STR[k][0]) return false;
    return true;
  });
  const edited = Object.keys(saved).length;
  const save = () => {
    window.NasanStore && window.NasanStore.saveTranslations(li, draft);
    setFlash(true); setTimeout(() => setFlash(false), 1600);
  };
  const tabSt = (on) => ({ padding: '12px 2px', marginRight: 22, cursor: 'pointer', font: `600 13.5px/1 ${A.sans}`, color: on ? A.tealDeep : A.ink45, borderBottom: '2px solid ' + (on ? A.teal : 'transparent') });
  const inp = { width: '100%', boxSizing: 'border-box', height: 40, padding: '0 12px', borderRadius: 10, border: `1px solid ${A.line}`, background: A.white, font: `400 13.5px/1 ${A.sans}`, color: A.ink, outline: 'none' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <div style={{ display: 'flex', borderBottom: `1px solid ${A.line}` }}>
        {TR_LANGS.map(([name, i]) => <span key={name} onClick={() => setLi(i)} style={tabSt(li === i)}>{name}</span>)}
      </div>
      <div style={{ padding: '14px 0', font: `400 13px/1.5 ${A.sans}`, color: A.ink70, borderBottom: `1px solid ${A.line}` }}>
        Edit any text below. Your correction replaces the built-in text for this language only; other languages stay the same. Leave a box empty to use the default.
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '14px 0' }}>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search text…" style={{ ...inp, width: 260, background: A.paper }} />
        {li > 0 && <span onClick={() => setOnlyMissing(v => !v)} style={{ cursor: 'pointer', padding: '10px 14px', borderRadius: 100, border: `1px solid ${A.line}`, background: onlyMissing ? A.ink : A.white, color: onlyMissing ? '#fff' : A.ink, font: `600 12px/1 ${A.sans}` }}>Only untranslated</span>}
        <span style={{ marginLeft: 'auto', font: `400 12px/1 ${A.sans}`, color: A.ink45 }}>{rows.length} texts · {edited} customised</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) 28px', gap: '0 18px', padding: '0 0 10px', font: `600 10.5px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: A.ink45 }}>
        <span>English</span><span>{li ? 'Translation' : 'Your wording'}</span><span />
      </div>
      <div style={{ flex: 1 }}>
        {rows.map(k => {
          const def = String(STR[k][li] || STR[k][0] || '');
          const v = draft[k] || '';
          return (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) 28px', gap: '0 18px', alignItems: 'center', padding: '9px 0', borderTop: `1px solid ${A.line}` }}>
              <div style={{ font: `500 13px/1.4 ${A.sans}`, color: A.ink, textWrap: 'pretty' }}>{String(STR[k][0])}</div>
              <input dir={dir} value={v} placeholder={def} onChange={e => { const val = e.target.value; setDraft(d => ({ ...d, [k]: val })); }}
                style={{ ...inp, textAlign: dir === 'rtl' ? 'right' : 'left', borderColor: v ? 'rgba(63,178,189,0.55)' : A.line, background: v ? 'rgba(63,178,189,0.06)' : A.white }} />
              {v ? <span title="Reset to default" onClick={() => setDraft(d => { const n = { ...d }; delete n[k]; return n; })} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={A.ink45} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </span> : <span />}
            </div>
          );
        })}
      </div>
      <div style={{ position: 'sticky', bottom: -30, margin: '16px -26px -30px', padding: '14px 26px 18px', background: 'rgba(246,245,242,0.94)', backdropFilter: 'blur(8px)', borderTop: `1px solid ${A.line}` }}>
        <div onClick={dirty ? save : undefined} style={{ textAlign: 'center', padding: '14px 0', borderRadius: 12, background: flash ? A.tealDeep : dirty ? A.teal : 'rgba(32,38,42,0.08)', color: dirty || flash ? '#0E2124' : A.ink45, font: `700 14px/1 ${A.sans}`, cursor: dirty ? 'pointer' : 'default', transition: 'background .2s' }}>
          {flash ? 'Saved — live in the app' : 'Save translations'}
        </div>
      </div>
    </div>
  );
}

/* ── Site settings ── */
function pinHash(p) { let h = 5381; const s = 'nasan-admin:' + p; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); }

function SettingsRow({ label, hint, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px minmax(0, 1fr)', gap: 20, padding: '16px 0', borderTop: `1px solid ${A.line}`, alignItems: 'start' }}>
      <div>
        <div style={{ font: `600 13.5px/1.3 ${A.sans}`, color: A.ink }}>{label}</div>
        {hint && <div style={{ marginTop: 4, font: `400 12px/1.45 ${A.sans}`, color: A.ink45 }}>{hint}</div>}
      </div>
      <div style={{ minWidth: 0 }}>{children}</div>
    </div>
  );
}
function Toggle({ on, onChange }) {
  return (
    <span onClick={() => onChange(!on)} style={{ display: 'inline-flex', width: 44, height: 26, borderRadius: 26, padding: 3, boxSizing: 'border-box', cursor: 'pointer', background: on ? A.teal : 'rgba(32,38,42,0.18)', transition: 'background .2s' }}>
      <span style={{ width: 20, height: 20, borderRadius: 20, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,.2)', transform: on ? 'translateX(18px)' : 'none', transition: 'transform .2s cubic-bezier(.2,.8,.25,1)' }} />
    </span>
  );
}

const ACCENTS = [['#3FB2BD', '#2C8F99', 'nasan teal'], ['#2E7CF6', '#1F5FC4', 'Blue'], ['#1F9D6B', '#167A52', 'Green'], ['#E0762B', '#B85C1C', 'Orange'], ['#7A5AF0', '#5C40C9', 'Violet']];

function Settings({ st }) {
  const [sec, setSec] = React.useState('General');
  const [msg, setMsg] = React.useState('');
  const [pin1, setPin1] = React.useState('');
  const S = st.settings || {};
  const set = (section, key) => (val) => window.NasanStore && window.NasanStore.setSetting(section, key, val);
  const products = st.products || [];
  const inp = { width: '100%', maxWidth: 420, boxSizing: 'border-box', height: 40, padding: '0 12px', borderRadius: 10, border: `1px solid ${A.line}`, background: A.white, font: `400 13.5px/1 ${A.sans}`, color: A.ink, outline: 'none' };
  const text = (section, key, ph, extra = {}) => <input value={(S[section] || {})[key] ?? ''} placeholder={ph} onChange={e => set(section, key)(e.target.value)} style={{ ...inp, ...extra }} />;
  const btn = (label, onClick, dark) => <span onClick={onClick} style={{ display: 'inline-flex', cursor: 'pointer', padding: '10px 16px', borderRadius: 100, border: dark ? 'none' : `1px solid ${A.line}`, background: dark ? A.ink : A.white, color: dark ? '#fff' : A.ink, font: `600 12.5px/1 ${A.sans}` }}>{label}</span>;
  const note = (m) => { setMsg(m); setTimeout(() => setMsg(''), 2600); };
  const secs = ['General', 'Design', 'Hero', 'Social', 'Assistant', 'Security', 'Backup'];
  const fileRef = React.useRef(null);

  const download = () => {
    const blob = new Blob([window.NasanStore.exportBackup()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'nasan-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    note('Backup downloaded');
  };
  const restore = (e) => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => { try { const n = window.NasanStore.importBackup(String(r.result)); note('Restored ' + n.products + ' products and ' + n.orders + ' orders'); } catch (x) { note(x.message || 'Could not read that file'); } };
    r.readAsText(f); e.target.value = '';
  };

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: `1px solid ${A.line}`, flexWrap: 'wrap' }}>
        {secs.map(n => <span key={n} onClick={() => setSec(n)} style={{ padding: '12px 2px', marginRight: 24, cursor: 'pointer', font: `600 13.5px/1 ${A.sans}`, color: sec === n ? A.tealDeep : A.ink45, borderBottom: '2px solid ' + (sec === n ? A.teal : 'transparent') }}>{n}</span>)}
      </div>
      {msg && <div style={{ marginTop: 14, padding: '11px 14px', borderRadius: 10, background: 'rgba(63,178,189,0.12)', font: `500 13px/1.3 ${A.sans}`, color: A.tealDeep, animation: 'nsRiseIn .3s both' }}>{msg}</div>}
      <div style={{ marginTop: 6 }}>

        {sec === 'General' && <>
          <SettingsRow label="Store name">{text('general', 'storeName', 'nasan Company')}</SettingsRow>
          <SettingsRow label="WhatsApp number" hint="Country code, no + or spaces. Every WhatsApp button in the app uses this.">{text('general', 'whatsapp', '9647704149292')}</SettingsRow>
          <SettingsRow label="Contact email">{text('general', 'email', 'info@nasan.company')}</SettingsRow>
          <SettingsRow label="Main city">{text('general', 'city', 'Sulaymaniyah')}</SettingsRow>
          <SettingsRow label="Maintenance mode" hint="Shows a notice in the app that the catalog is being updated."><Toggle on={!!(S.general || {}).maintenance} onChange={set('general', 'maintenance')} /></SettingsRow>
        </>}

        {sec === 'Design' && <>
          <SettingsRow label="Accent colour" hint="Buttons, prices, highlights and the LCD icon. Changes the app live.">
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {ACCENTS.map(([c, d, n]) => {
                const on = (S.design || {}).accent === c;
                return (
                  <span key={c} onClick={() => { set('design', 'accent')(c); set('design', 'accentDeep')(d); }} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', padding: '7px 12px 7px 7px', borderRadius: 100, border: '1px solid ' + (on ? c : A.line), background: A.white }}>
                    <span style={{ width: 22, height: 22, borderRadius: 22, background: c }} />
                    <span style={{ font: `500 12.5px/1 ${A.sans}`, color: A.ink }}>{n}</span>
                  </span>
                );
              })}
            </div>
          </SettingsRow>
          <SettingsRow label="Welcome animation" hint="Play the logo animation when the app opens."><Toggle on={(S.design || {}).welcome !== false} onChange={set('design', 'welcome')} /></SettingsRow>
        </>}

        {sec === 'Hero' && <>
          <SettingsRow label="New arrival product" hint="The dark card on the home page. Shop now opens this product.">
            <select value={(S.hero || {}).code || '1402'} onChange={e => set('hero', 'code')(e.target.value)} style={{ ...inp, appearance: 'auto' }}>
              {products.map(p => <option key={p.code} value={p.code}>[ {p.code} ] {p.name}</option>)}
            </select>
          </SettingsRow>
          <SettingsRow label="Home headline" hint="Edit the headline and every other text in Translations.">
            {btn('Open Translations', () => window.__nasanAdminTab && window.__nasanAdminTab('Translations'))}
          </SettingsRow>
        </>}

        {sec === 'Social' && <>
          {['TikTok', 'Instagram', 'Facebook', 'X'].map(n => (
            <SettingsRow key={n} label={n} hint={n === 'TikTok' ? 'Used in the slide bar and Contact page.' : null}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                {text('social', n, 'https://…')}
                <a href={(S.social || {})[n]} target="_blank" rel="noopener noreferrer" style={{ font: `600 12.5px/1 ${A.sans}`, color: A.tealDeep, textDecoration: 'none', whiteSpace: 'nowrap' }}>Open ↗</a>
              </div>
            </SettingsRow>
          ))}
        </>}

        {sec === 'Assistant' && <>
          <SettingsRow label="WhatsApp messages" hint="When a customer asks for a price or a product, the message is written for them."><Toggle on={(S.assistant || {}).enabled !== false} onChange={set('assistant', 'enabled')} /></SettingsRow>
          <SettingsRow label="Attach product code" hint="Adds the [ code ] to every WhatsApp message so staff can find it fast."><Toggle on={(S.assistant || {}).autoAttach !== false} onChange={set('assistant', 'autoAttach')} /></SettingsRow>
          <SettingsRow label="Message wording" hint="Edit the price request and other message texts in Translations (search “Hello nasan”).">
            {btn('Open Translations', () => window.__nasanAdminTab && window.__nasanAdminTab('Translations'))}
          </SettingsRow>
        </>}

        {sec === 'Security' && <SecuritySection S={S} set={set} note={note} inp={inp} btn={btn} />}

        {sec === 'Backup' && <>
          <SettingsRow label="Download backup" hint="Products, orders, accounts, settings and translations in one file.">{btn('Download backup', download, true)}</SettingsRow>
          <SettingsRow label="Restore from file" hint="Replaces current data with the backup.">
            {btn('Choose backup file…', () => fileRef.current && fileRef.current.click())}
            <input ref={fileRef} type="file" accept="application/json,.json" onChange={restore} style={{ display: 'none' }} />
          </SettingsRow>
          <SettingsRow label="Reset settings" hint="Puts every setting back to default. Products and orders are kept.">
            {btn('Reset settings', () => { window.NasanStore.resetSettings(); note('Settings reset'); })}
          </SettingsRow>
        </>}
      </div>
    </div>
  );
}

function adminHash(email, pass) { return pinHash(String(email || '').trim().toLowerCase() + '|' + pass); }
const ADMIN_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function PassInput({ value, onChange, placeholder, style, onEnter, autoFocus }) {
  const [show, setShow] = React.useState(false);
  return (
    <div style={{ position: 'relative', ...style }}>
      <input autoFocus={autoFocus} type={show ? 'text' : 'password'} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        onKeyDown={e => { if (e.key === 'Enter' && onEnter) onEnter(); }}
        style={{ width: '100%', boxSizing: 'border-box', height: 'inherit', minHeight: 40, padding: '0 42px 0 12px', borderRadius: 'inherit', border: 'inherit', background: 'inherit', color: 'inherit', font: 'inherit', outline: 'none' }} />
      <span onClick={() => setShow(v => !v)} title={show ? 'Hide' : 'Show'} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', display: 'flex', opacity: 0.6 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" />{!show && <path d="M4 4l16 16" />}
        </svg>
      </span>
    </div>
  );
}

function SecuritySection({ S, set, note, inp, btn }) {
  const sec = S.security || {};
  const { list, active } = getTeam({ settings: S });
  const hasPass = !!active.passHash;
  const [email, setEmail] = React.useState(active.email || '');
  const [cur, setCur] = React.useState('');
  const [p1, setP1] = React.useState('');
  const [p2, setP2] = React.useState('');
  const [err, setErr] = React.useState('');
  const [eCur, setECur] = React.useState('');
  const [eErr, setEErr] = React.useState('');
  const box = { ...inp, maxWidth: 320 };
  const green = '#1E8A52', red = '#B4443A';
  const curOk = !hasPass || (cur && adminHash(active.email, cur) === active.passHash);

  const changePass = () => {
    setErr('');
    if (hasPass && !cur) return setErr('Type your current password first');
    if (!curOk) return setErr('Current password is wrong');
    if (p1.length < 8) return setErr('New password must be at least 8 characters');
    if (hasPass && adminHash(active.email, p1) === active.passHash) return setErr('New password must be different from the current one');
    if (p1 !== p2) return setErr('The new passwords don\'t match');
    saveTeam(list.map(p => (p.id === active.id ? { ...p, passHash: adminHash(p.email, p1) } : p)), active.id);
    setCur(''); setP1(''); setP2('');
    note('Password changed. Use the new one next time you sign in.');
  };
  const changeEmail = () => {
    setEErr('');
    const e = email.trim().toLowerCase();
    if (!ADMIN_EMAIL_RE.test(e)) return setEErr('Enter a full email address');
    if (e === (active.email || '').toLowerCase()) return setEErr('This is already your email');
    if (list.some(p => p.id !== active.id && (p.email || '').toLowerCase() === e)) return setEErr('Another profile uses this email');
    if (!eCur || adminHash(active.email, eCur) !== active.passHash) return setEErr('Current password is wrong');
    saveTeam(list.map(p => (p.id === active.id ? { ...p, email: e, passHash: adminHash(e, eCur) } : p)), active.id);
    setECur('');
    note('Sign-in email changed to ' + e);
  };
  const hint = (ok, txt) => <div style={{ marginTop: 6, font: `500 12px/1.2 ${A.sans}`, color: ok ? green : red }}>{txt}</div>;

  return <>
    <div style={{ marginTop: 18, font: `700 15px/1 ${A.sans}`, color: A.ink }}>Change password</div>
    <div style={{ marginTop: 5, marginBottom: 6, font: `400 12.5px/1.4 ${A.sans}`, color: A.ink45 }}>For {active.name || 'this profile'} · {active.email || 'no email yet'}</div>
    {hasPass && (
      <SettingsRow label="1. Current password" hint="The password you sign in with now.">
        <PassInput value={cur} onChange={v => { setCur(v); setErr(''); }} placeholder="Current password" style={box} />
        {cur && hint(curOk, curOk ? '✓ Correct' : 'Not correct')}
      </SettingsRow>
    )}
    <SettingsRow label={(hasPass ? '2. ' : '') + 'New password'} hint="At least 8 characters.">
      <PassInput value={p1} onChange={v => { setP1(v); setErr(''); }} placeholder="New password" style={box} />
      {p1 && hint(p1.length >= 8, p1.length >= 8 ? '✓ Long enough' : (8 - p1.length) + ' more characters')}
    </SettingsRow>
    <SettingsRow label={(hasPass ? '3. ' : '') + 'Type new password again'} hint="Must match the new password.">
      <PassInput value={p2} onChange={v => { setP2(v); setErr(''); }} placeholder="Repeat new password" onEnter={changePass} style={box} />
      {p2 && hint(p1 === p2, p1 === p2 ? '✓ Matches' : 'Doesn\'t match')}
    </SettingsRow>
    <SettingsRow label="">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
        {btn('Change password', changePass, true)}
        {err && <div style={{ font: `500 12.5px/1.3 ${A.sans}`, color: red }}>{err}</div>}
      </div>
    </SettingsRow>

    <div style={{ marginTop: 26, font: `700 15px/1 ${A.sans}`, color: A.ink }}>Change sign-in email</div>
    <SettingsRow label="New email">
      <input value={email} onChange={e => { setEmail(e.target.value); setEErr(''); }} placeholder="you@nasan.company" style={box} />
    </SettingsRow>
    <SettingsRow label="Current password" hint="Needed to confirm it's you.">
      <PassInput value={eCur} onChange={v => { setECur(v); setEErr(''); }} placeholder="Current password" onEnter={changeEmail} style={box} />
    </SettingsRow>
    <SettingsRow label="">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
        {btn('Change email', changeEmail)}
        {eErr && <div style={{ font: `500 12.5px/1.3 ${A.sans}`, color: red }}>{eErr}</div>}
      </div>
    </SettingsRow>

    <div style={{ marginTop: 26, font: `700 15px/1 ${A.sans}`, color: A.ink }}>Sign-in safety</div>
    <SettingsRow label="Auto-lock" hint="Sign out of the panel after this many idle minutes.">
      <select value={sec.lockMins || 15} onChange={e => set('security', 'lockMins')(Number(e.target.value))} style={{ ...inp, maxWidth: 160, appearance: 'auto' }}>
        {[5, 15, 30, 60].map(m => <option key={m} value={m}>{m} minutes</option>)}
      </select>
    </SettingsRow>
    <SettingsRow label="Wrong password limit" hint="After this many tries the sign-in waits 60 seconds.">
      <select value={sec.maxTries || 5} onChange={e => set('security', 'maxTries')(Number(e.target.value))} style={{ ...inp, maxWidth: 160, appearance: 'auto' }}>
        {[3, 5, 10].map(m => <option key={m} value={m}>{m} tries</option>)}
      </select>
    </SettingsRow>
    {hasPass && (
      <SettingsRow label="Sign out now" hint="Locks the panel on this device.">
        {btn('Sign out of admin', () => window.__nasanAdminLock && window.__nasanAdminLock())}
      </SettingsRow>
    )}
    <SettingsRow label="Customer sessions" hint="Signs every customer out on this device.">
      {btn('Sign out all', () => { try { localStorage.removeItem('nasan-session-v1'); } catch (e) {} window.NasanStore.signOut && window.NasanStore.signOut(); note('All customer sessions signed out'); })}
    </SettingsRow>
    <div style={{ marginTop: 14, padding: '12px 14px', borderRadius: 10, background: 'rgba(224,165,38,0.12)', font: `400 12.5px/1.5 ${A.sans}`, color: '#7A5A10' }}>
      This sign-in protects the panel on this device. Real protection for every device needs the Supabase admin login, which uses this same email.
    </div>
  </>;
}

function AdminSignIn({ st, prefill, onOk }) {
  const { list } = getTeam(st);
  const accounts = list.filter(p => p.email && p.passHash);
  const sec = (st.settings && st.settings.security) || {};
  const mode = 'in';
  const NSx = window.NasanStore;
  const cloud = !!(NSx && NSx.adminCloud && NSx.adminCloud());
  const first = !cloud && !accounts.length;
  const [busy, setBusy] = React.useState(false);
  const [resetMsg, setResetMsg] = React.useState('');
  const [email, setEmail] = React.useState(prefill || '');
  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [pass2, setPass2] = React.useState('');
  const [err, setErr] = React.useState('');
  const [bad, setBad] = React.useState(false);
  const [tries, setTries] = React.useState(0);
  const [waitUntil, setWaitUntil] = React.useState(0);
  const [forgot, setForgot] = React.useState(false);
  const [, tick] = React.useState(0);
  React.useEffect(() => { if (!waitUntil) return; const id = setInterval(() => { tick(n => n + 1); if (Date.now() > waitUntil) { setWaitUntil(0); setTries(0); setErr(''); } }, 500); return () => clearInterval(id); }, [waitUntil]);
  const wait = waitUntil ? Math.ceil((waitUntil - Date.now()) / 1000) : 0;
  const shake = () => { setBad(true); setTimeout(() => setBad(false), 400); };

  const signIn = () => {
    if (wait > 0) return;
    const e = email.trim().toLowerCase();
    if (!ADMIN_EMAIL_RE.test(e)) { setErr('Enter your full email address'); return shake(); }
    if (!pass) { setErr('Enter your password'); return shake(); }
    if (cloud) {
      if (busy) return;
      setBusy(true); setErr('');
      NSx.adminSignIn(e, pass).then(r => {
        setBusy(false);
        if (r.ok) {
          const acc2 = accounts.find(p => p.email.toLowerCase() === e);
          if (acc2) saveTeam(list, acc2.id);
          else { const owner = { ...(list[0] || { id: 'p1', name: 'Owner', role: 'Owner', city: 'Sulaymaniyah' }), email: e }; delete owner.passHash; saveTeam([owner, ...list.slice(1)], owner.id); }
          onOk(); return;
        }
        setPass(''); shake(); setErr(r.err);
      });
      return;
    }
    if (first) {
      if (pass.length < 8) { setErr('Password must be at least 8 characters'); return shake(); }
      const k = 0;
      const owner = { ...(list[k] || { id: 'p1', name: 'Owner', role: 'Owner', city: 'Sulaymaniyah' }), email: e, passHash: adminHash(e, pass) };
      saveTeam([owner, ...list.slice(1)], owner.id);
      onOk(); return;
    }
    const acc = accounts.find(p => p.email.toLowerCase() === e);
    if (acc && adminHash(e, pass) === acc.passHash) { saveTeam(list, acc.id); onOk(); return; }
    const n = tries + 1; setTries(n); setPass(''); shake();
    const max = sec.maxTries || 5;
    if (n >= max) { setWaitUntil(Date.now() + 60000); setErr('Too many tries. Wait 60 seconds.'); }
    else setErr('Wrong email or password');
  };
  const create = () => {
    const e = email.trim().toLowerCase();
    if (!name.trim()) { setErr('Enter your name'); return shake(); }
    if (!ADMIN_EMAIL_RE.test(e)) { setErr('Enter your full email address'); return shake(); }
    if (accounts.some(p => p.email.toLowerCase() === e)) { setErr('An admin with this email already exists'); return shake(); }
    if (pass.length < 8) { setErr('Password must be at least 8 characters'); return shake(); }
    if (pass !== pass2) { setErr('Passwords don\'t match'); return shake(); }
    const hasAny = accounts.length > 0;
    const id = 'p' + Date.now().toString(36);
    const rec = { id, name: name.trim(), role: hasAny ? 'Staff' : 'Owner', city: 'Sulaymaniyah', email: e, passHash: adminHash(e, pass) };
    const base = hasAny ? list : list.filter(p => p.email || p.passHash);
    saveTeam([...base, rec], id);
    onOk();
  };

  const field = { width: '100%', boxSizing: 'border-box', height: 46, padding: '0 14px', borderRadius: 10, border: `1px solid ${A.line}`, background: A.white, color: A.ink, font: `400 14.5px/1 ${A.sans}`, outline: 'none' };
  const lab = (x) => <span style={{ display: 'block', marginBottom: 7, font: `600 12.5px/1 ${A.sans}`, color: A.ink }}>{x}</span>;
  const isNew = mode === 'new';
  return (
    <div style={{ height: '100%', minHeight: 720, background: A.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: A.sans }}>
      <div style={{ width: 380, padding: '32px 30px 26px', borderRadius: 18, background: A.white, border: `1px solid ${A.line}`, boxShadow: '0 12px 40px rgba(20,26,28,0.08)', animation: bad ? 'nsShake .35s' : 'nsRiseIn .35s both' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="./nasan-logo.png" alt="" style={{ width: 34, height: 34, objectFit: 'contain' }} />
          <span style={{ font: `700 15px/1 ${A.sans}`, color: A.ink }}>nasan <span style={{ color: A.ink45, fontWeight: 500 }}>admin</span></span>
        </div>
        <div style={{ marginTop: 22, font: `700 22px/1.15 ${A.sans}`, letterSpacing: '-0.02em', color: A.ink }}>{isNew ? 'Create admin account' : 'Sign in'}</div>
        <div style={{ marginTop: 6, font: `400 13.5px/1.45 ${A.sans}`, color: A.ink70 }}>{cloud ? 'Use the admin email and password from Firebase Authentication.' : first ? 'First sign-in on this device sets your admin email and password.' : 'Use your admin email and password.'}</div>

        {forgot && !isNew ? (
          <div style={{ marginTop: 20, padding: '14px 16px', borderRadius: 12, background: A.paper, font: `400 13px/1.55 ${A.sans}`, color: A.ink70 }}>
            {cloud ? (
              <React.Fragment>
                We'll email a reset link to the address above.
                <div onClick={() => { const e = email.trim().toLowerCase(); if (!ADMIN_EMAIL_RE.test(e)) { setResetMsg('Enter your email above first'); return; } NSx.adminReset(e).then(ok => setResetMsg(ok ? 'Reset link sent. Check your inbox.' : 'Could not send. Check the email.')); }}
                  style={{ marginTop: 10, font: `600 13px/1 ${A.sans}`, color: A.ink, cursor: 'pointer' }}>Send reset link</div>
                {resetMsg && <div style={{ marginTop: 8, color: A.tealDeep }}>{resetMsg}</div>}
              </React.Fragment>
            ) : <React.Fragment>Ask the store owner to reset your password from <b style={{ color: A.ink }}>Settings → Security</b>. If you are the owner, restore a backup file or clear this site's data on this device.</React.Fragment>}
            <div onClick={() => setForgot(false)} style={{ marginTop: 10, font: `600 13px/1 ${A.sans}`, color: A.tealDeep, cursor: 'pointer' }}>← Back to sign in</div>
          </div>
        ) : (
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {isNew && <label>{lab('Full name')}<input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={field} /></label>}
            <label>{lab('Email')}<input autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@nasan.company" onKeyDown={e => { if (e.key === 'Enter' && !isNew) signIn(); }} style={field} /></label>
            <label>
              <span style={{ display: 'flex', marginBottom: 7, font: `600 12.5px/1 ${A.sans}`, color: A.ink }}>
                Password
                {!isNew && <span onClick={(e) => { e.preventDefault(); setForgot(true); }} style={{ marginLeft: 'auto', fontWeight: 500, color: A.tealDeep, cursor: 'pointer' }}>Forgot password?</span>}
              </span>
              <PassInput value={pass} onChange={setPass} placeholder={isNew ? 'At least 8 characters' : 'Password'} onEnter={isNew ? undefined : signIn} style={field} />
            </label>
            {isNew && <label>{lab('Repeat password')}<PassInput value={pass2} onChange={setPass2} placeholder="Repeat password" onEnter={create} style={field} /></label>}
          </div>
        )}

        {err && !forgot && <div style={{ marginTop: 12, font: `500 12.5px/1.35 ${A.sans}`, color: '#B4443A' }}>{wait > 0 ? 'Too many tries. Wait ' + wait + 's.' : err}</div>}
        {!forgot && (
          <div onClick={isNew ? create : signIn} style={{ marginTop: 18, padding: '14px 0', borderRadius: 10, textAlign: 'center', background: wait > 0 ? 'rgba(32,38,42,0.1)' : A.ink, color: wait > 0 ? A.ink45 : '#fff', font: `600 14.5px/1 ${A.sans}`, cursor: wait > 0 ? 'default' : 'pointer' }}>
            {isNew ? 'Create account' : busy ? 'Signing in…' : 'Sign in'}
          </div>
        )}

      </div>
    </div>
  );
}

function AdminSetup({ onOk }) {
  const [email, setEmail] = React.useState('');
  const [p1, setP1] = React.useState('');
  const [p2, setP2] = React.useState('');
  const [err, setErr] = React.useState('');
  const go = () => {
    const e = email.trim().toLowerCase();
    if (!ADMIN_EMAIL_RE.test(e)) return setErr('Enter a full email address');
    if (p1.length < 8) return setErr('Password must be at least 8 characters');
    if (p1 !== p2) return setErr('Passwords don\'t match');
    const NS = window.NasanStore;
    NS.setSetting('security', 'adminEmail', e);
    NS.setSetting('security', 'passHash', adminHash(e, p1));
    NS.setSetting('security', 'loginOn', true);
    onOk();
  };
  const field = { height: 48, borderRadius: 12, border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.06)', color: '#fff', font: `500 15px/1 ${A.sans}` };
  return (
    <div style={{ height: '100%', minHeight: 720, background: '#141A1C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: A.sans }}>
      <div style={{ width: 340, animation: 'nsRiseIn .4s both' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="./nasan-logo.png" alt="" style={{ width: 56, height: 56, objectFit: 'contain' }} />
          <div style={{ marginTop: 16, font: `700 21px/1 ${A.sans}`, color: '#fff' }}>Create admin sign-in</div>
          <div style={{ marginTop: 8, font: `400 13px/1.45 ${A.sans}`, color: 'rgba(255,255,255,0.55)' }}>First time here. Choose the email and password you'll use to open the admin panel.</div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Admin email"
            style={{ ...field, width: '100%', boxSizing: 'border-box', padding: '0 14px', outline: 'none' }} />
          <PassInput value={p1} onChange={setP1} placeholder="Password (8+ characters)" style={{ ...field }} />
          <PassInput value={p2} onChange={setP2} placeholder="Repeat password" onEnter={go} style={{ ...field }} />
          {p1 && <div style={{ font: `500 12px/1.2 ${A.sans}`, color: p1.length >= 8 ? '#6FD99A' : '#F08A80' }}>{p1.length >= 8 ? '✓ Long enough' : (8 - p1.length) + ' more characters'}{p2 ? (p1 === p2 ? ' · ✓ matches' : ' · doesn\'t match') : ''}</div>}
        </div>
        {err && <div style={{ marginTop: 10, font: `500 12.5px/1.35 ${A.sans}`, color: '#F08A80' }}>{err}</div>}
        <div onClick={go} style={{ marginTop: 14, padding: '15px 0', borderRadius: 12, textAlign: 'center', background: A.teal, color: '#0E2124', font: `700 14.5px/1 ${A.sans}`, cursor: 'pointer' }}>Create and open panel</div>
      </div>
    </div>
  );
}

function AdminLogin({ sec, onOk }) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [err, setErr] = React.useState('');
  const [bad, setBad] = React.useState(false);
  const [tries, setTries] = React.useState(0);
  const [waitUntil, setWaitUntil] = React.useState(0);
  const [, tick] = React.useState(0);
  React.useEffect(() => { if (!waitUntil) return; const id = setInterval(() => { tick(n => n + 1); if (Date.now() > waitUntil) { setWaitUntil(0); setTries(0); setErr(''); } }, 500); return () => clearInterval(id); }, [waitUntil]);
  const wait = waitUntil ? Math.ceil((waitUntil - Date.now()) / 1000) : 0;
  const go = () => {
    if (wait > 0) return;
    const e = email.trim().toLowerCase();
    if (!ADMIN_EMAIL_RE.test(e)) { setErr('Enter your full admin email'); return; }
    if (!pass) { setErr('Enter your password'); return; }
    if (e === sec.adminEmail && adminHash(e, pass) === sec.passHash) { onOk(); return; }
    const n = tries + 1; setTries(n); setPass(''); setBad(true); setTimeout(() => setBad(false), 400);
    const max = sec.maxTries || 5;
    if (n >= max) { setWaitUntil(Date.now() + 60000); setErr('Too many tries. Wait 60 seconds.'); }
    else setErr('Email or password is wrong · ' + (max - n) + ' tr' + (max - n === 1 ? 'y' : 'ies') + ' left');
  };
  const field = { height: 48, borderRadius: 12, border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.06)', color: '#fff', font: `500 15px/1 ${A.sans}` };
  return (
    <div style={{ height: '100%', minHeight: 720, background: '#141A1C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: A.sans }}>
      <div style={{ width: 340, animation: bad ? 'nsShake .35s' : 'nsRiseIn .4s both' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="./nasan-logo.png" alt="" style={{ width: 56, height: 56, objectFit: 'contain' }} />
          <div style={{ marginTop: 16, font: `700 21px/1 ${A.sans}`, color: '#fff' }}>nasan admin</div>
          <div style={{ marginTop: 8, font: `400 13px/1.4 ${A.sans}`, color: 'rgba(255,255,255,0.55)' }}>Sign in to manage the store</div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Admin email" onKeyDown={e => { if (e.key === 'Enter') go(); }}
            style={{ ...field, width: '100%', boxSizing: 'border-box', padding: '0 14px', outline: 'none' }} />
          <PassInput value={pass} onChange={setPass} placeholder="Password" onEnter={go} style={{ ...field, color: '#fff' }} />
        </div>
        {err && <div style={{ marginTop: 10, font: `500 12.5px/1.35 ${A.sans}`, color: '#F08A80' }}>{wait > 0 ? 'Too many tries. Wait ' + wait + 's.' : err}</div>}
        <div onClick={go} style={{ marginTop: 14, padding: '15px 0', borderRadius: 12, textAlign: 'center', background: wait > 0 ? 'rgba(255,255,255,0.12)' : A.teal, color: wait > 0 ? 'rgba(255,255,255,0.5)' : '#0E2124', font: `700 14.5px/1 ${A.sans}`, cursor: wait > 0 ? 'default' : 'pointer' }}>Sign in</div>
        <div style={{ marginTop: 14, textAlign: 'center', font: `400 11.5px/1.5 ${A.sans}`, color: 'rgba(255,255,255,0.35)' }}>Forgot your password? Restore a backup or clear this site's data on this device.</div>
      </div>
    </div>
  );
}

function PinGate({ onOk, hash }) {
  const [v, setV] = React.useState('');
  const [bad, setBad] = React.useState(false);
  const tryIt = (val) => { if (pinHash(val) === hash) onOk(); else { setBad(true); setV(''); setTimeout(() => setBad(false), 900); } };
  return (
    <div style={{ height: '100%', minHeight: 720, background: '#141A1C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: A.sans }}>
      <div style={{ width: 320, textAlign: 'center', animation: bad ? 'nsShake .35s' : 'nsRiseIn .4s both' }}>
        <img src="./nasan-logo.png" alt="" style={{ width: 56, height: 56, objectFit: 'contain' }} />
        <div style={{ marginTop: 18, font: `700 20px/1 ${A.sans}`, color: '#fff' }}>Admin locked</div>
        <div style={{ marginTop: 8, font: `400 13px/1.4 ${A.sans}`, color: 'rgba(255,255,255,0.55)' }}>Enter your PIN to continue</div>
        <input autoFocus type="password" inputMode="numeric" maxLength={8} value={v}
          onChange={e => setV(e.target.value.replace(/\D/g, ''))} onKeyDown={e => { if (e.key === 'Enter') tryIt(v); }}
          style={{ marginTop: 22, width: '100%', boxSizing: 'border-box', height: 48, borderRadius: 12, border: '1px solid ' + (bad ? '#D2483C' : 'rgba(255,255,255,0.14)'), background: 'rgba(255,255,255,0.06)', color: '#fff', textAlign: 'center', letterSpacing: '0.5em', font: `600 20px/1 ${A.sans}`, outline: 'none' }} />
        <div onClick={() => tryIt(v)} style={{ marginTop: 12, padding: '14px 0', borderRadius: 12, background: A.teal, color: '#0E2124', font: `700 14px/1 ${A.sans}`, cursor: 'pointer' }}>Unlock</div>
      </div>
    </div>
  );
}

function Customers({ st }) {
  const accounts = st.accounts || [];
  const [pick, setPick] = React.useState(null);
  const [q, setQ] = React.useState('');
  const [filter, setFilter] = React.useState('All');
  const [confirmDel, setConfirmDel] = React.useState(false);
  const [reason, setReason] = React.useState('');
  const [msg, setMsg] = React.useState('');
  React.useEffect(() => { setConfirmDel(false); setReason(''); }, [pick]);
  const ownerOf = (a) => (a.email || a.phone || '').toLowerCase();
  const isSus = (a) => a.status === 'suspended';
  const list = accounts.filter(a =>
    (filter === 'All' || (filter === 'Suspended' ? isSus(a) : filter === 'Shops' ? a.hasShop || a.shop : !isSus(a))) &&
    ([a.first, a.middle, a.last, a.email, a.phone, a.city, a.shop].join(' ')).toLowerCase().includes(q.toLowerCase()));
  const cur = pick != null ? accounts.find(a => ownerOf(a) === pick) : null;
  const ordersOf = (a) => (st.orders || []).filter(o => o.owner === ownerOf(a) || (a.phone && o.owner === String(a.phone).toLowerCase()));
  const name = (a) => [a.first, a.middle, a.last].filter(Boolean).join(' ') || a.email;
  const date = (ms) => ms ? new Date(ms).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';
  const views = (st.traffic || []);
  const note = (m) => { setMsg(m); setTimeout(() => setMsg(''), 2400); };
  const inp = { width: 260, boxSizing: 'border-box', height: 38, padding: '0 12px', borderRadius: 10, border: `1px solid ${A.line}`, background: A.paper, font: `400 13px/1 ${A.sans}`, color: A.ink, outline: 'none' };
  const av = (a, size) => (
    <span style={{ position: 'relative', width: size, height: size, borderRadius: size, flex: 'none', overflow: 'hidden', background: A.ink, color: A.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', font: `700 ${Math.round(size / 2.8)}px/1 ${A.sans}`, filter: isSus(a) ? 'grayscale(1)' : 'none', opacity: isSus(a) ? 0.6 : 1 }}>
      {a.photo ? <img src={a.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : ((a.first || a.email || '?')[0] + ((a.last || '')[0] || '')).toUpperCase()}
    </span>
  );
  const badge = (a) => isSus(a)
    ? <span style={{ padding: '4px 8px', borderRadius: 6, background: 'rgba(210,72,60,0.12)', color: '#B4443A', font: `600 10px/1 ${A.sans}`, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Suspended</span>
    : <span style={{ padding: '4px 8px', borderRadius: 6, background: 'rgba(46,184,114,0.12)', color: '#1E8A52', font: `600 10px/1 ${A.sans}`, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Active</span>;
  const section = (title) => <div style={{ marginTop: 18, marginBottom: 2, font: `600 10.5px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: A.ink45 }}>{title}</div>;
  const field = (k, v, extra) => (
    <div key={k} style={{ display: 'flex', gap: 10, padding: '9px 0', borderTop: `1px solid ${A.line}`, font: `400 13px/1.35 ${A.sans}` }}>
      <span style={{ width: 108, flex: 'none', color: A.ink45 }}>{k}</span>
      <span style={{ color: v ? A.ink : A.ink45, minWidth: 0, overflowWrap: 'anywhere', flex: 1 }}>{v || '—'}</span>
      {extra}
    </div>
  );
  const yes = (b) => b ? <span style={{ color: '#1E8A52', font: `600 11.5px/1 ${A.sans}` }}>✓ verified</span> : null;

  return (
    <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search name, email, phone, city…" style={inp} />
          {['All', 'Active', 'Suspended', 'Shops'].map(f => (
            <span key={f} onClick={() => setFilter(f)} style={{ cursor: 'pointer', padding: '9px 13px', borderRadius: 100, border: `1px solid ${filter === f ? A.ink : A.line}`, background: filter === f ? A.ink : A.white, color: filter === f ? '#fff' : A.ink, font: `600 12px/1 ${A.sans}` }}>
              {f}{f === 'Suspended' ? ' · ' + accounts.filter(isSus).length : ''}
            </span>
          ))}
        </div>
        {msg && <div style={{ marginTop: 12, padding: '10px 14px', borderRadius: 10, background: 'rgba(63,178,189,0.12)', font: `500 13px/1.3 ${A.sans}`, color: A.tealDeep }}>{msg}</div>}
        <div style={{ marginTop: 14 }}>
          {!list.length && <div style={{ padding: '30px 0', font: `400 13.5px/1.6 ${A.sans}`, color: A.ink45 }}>{accounts.length ? 'No customers match.' : 'No customer accounts yet. When someone signs up in the app they appear here.'}</div>}
          {list.map((a, i) => {
            const on = ownerOf(a) === pick;
            const n = ordersOf(a).length;
            return (
              <div key={ownerOf(a) + i} onClick={() => setPick(on ? null : ownerOf(a))} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 12px', margin: '0 -12px', borderRadius: 12, cursor: 'pointer',
                background: on ? 'rgba(63,178,189,0.10)' : 'transparent', borderTop: i && !on ? `1px solid ${A.line}` : '1px solid transparent',
              }}>
                {av(a, 36)}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, font: `600 13.5px/1.2 ${A.sans}`, color: A.ink }}>{name(a)}{isSus(a) && badge(a)}</div>
                  <div style={{ marginTop: 4, font: `400 12px/1.2 ${A.sans}`, color: A.ink45, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.email}{a.phone ? ' · +964 ' + a.phone : ''}</div>
                </div>
                <span style={{ font: `400 12px/1 ${A.sans}`, color: A.ink45 }}>{a.city || ''}</span>
                <span style={{ minWidth: 70, textAlign: 'right', font: `600 12.5px/1 ${A.sans}`, color: n ? A.tealDeep : A.ink45 }}>{n} order{n === 1 ? '' : 's'}</span>
              </div>
            );
          })}
        </div>
      </div>

      {cur && (() => {
        const ords = ordersOf(cur);
        const items = ords.reduce((s2, o) => s2 + (Number(o.items) || 0), 0);
        const active = ords.filter(o => !o.past).length;
        const cancelled = ords.filter(o => o.status === 'Cancelled').length;
        const mapUrl = cur.lat && cur.lng ? 'https://www.google.com/maps?q=' + cur.lat + ',' + cur.lng : '';
        return (
        <aside style={{ width: 340, flex: 'none', padding: 20, borderRadius: 16, background: A.white, border: `1px solid ${A.line}`, animation: 'nsRiseIn .3s both', maxHeight: 640, overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {av(cur, 58)}
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ font: `700 16px/1.2 ${A.sans}`, color: A.ink }}>{name(cur)}</div>
              <div style={{ marginTop: 6, display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                {badge(cur)}
                <span style={{ font: `400 12px/1 ${A.sans}`, color: A.ink45 }}>{cur.hasShop || cur.shop ? 'Shop owner' : 'Customer'}</span>
              </div>
            </div>
            <span onClick={() => setPick(null)} style={{ cursor: 'pointer', padding: 4 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={A.ink45} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </span>
          </div>
          {isSus(cur) && cur.statusReason && <div style={{ marginTop: 12, padding: '10px 12px', borderRadius: 10, background: 'rgba(210,72,60,0.08)', font: `400 12.5px/1.45 ${A.sans}`, color: '#8A2E26' }}>Reason: {cur.statusReason}<br /><span style={{ color: A.ink45 }}>Since {date(cur.statusAt)}</span></div>}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 16 }}>
            {[['Orders', ords.length], ['Active', active], ['Items', items]].map(([k, v]) => (
              <div key={k} style={{ padding: '10px 10px', borderRadius: 10, background: A.paper, textAlign: 'center' }}>
                <div style={{ font: `700 18px/1 ${A.sans}`, color: A.ink }}>{v}</div>
                <div style={{ marginTop: 5, font: `400 11px/1 ${A.sans}`, color: A.ink45 }}>{k}</div>
              </div>
            ))}
          </div>

          {section('Personal')}
          {field('First name', cur.first)}
          {field('Middle name', cur.middle)}
          {field('Last name', cur.last)}
          {field('Email', cur.email, yes(cur.emailVerified))}
          {field('Phone', cur.phone ? '+964 ' + cur.phone : '', yes(cur.phoneVerified))}
          {field('City', cur.city)}
          {field('Language', ['English', 'Kurdish Sorani', 'Arabic'][cur.lang || 0])}

          {section('Shop')}
          {field('Has a shop', cur.hasShop || cur.shop ? 'Yes' : 'No')}
          {(cur.hasShop || cur.shop) && field('Shop name', cur.shop)}
          {(cur.hasShop || cur.shop) && field('Shop address', cur.street || cur.address)}

          {section('Location')}
          {field('Live location', cur.locShared ? 'Shared' : 'Not shared')}
          {mapUrl && field('Coordinates', cur.lat + ', ' + cur.lng, <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{ font: `600 12px/1 ${A.sans}`, color: A.tealDeep, textDecoration: 'none', whiteSpace: 'nowrap' }}>Map ↗</a>)}

          {section('Activity')}
          {field('Created', date(cur.createdAt))}
          {field('Last sign-in', date(cur.lastSignIn))}
          {field('Sign-ins', String(cur.signIns || 1))}
          {field('Device', cur.device)}
          {field('Cancelled orders', String(cancelled))}

          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            {cur.phone && <a href={'https://wa.me/964' + String(cur.phone).replace(/\D/g, '')} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', padding: '11px 0', borderRadius: 100, background: '#25D366', color: '#08301A', textDecoration: 'none', font: `600 12.5px/1 ${A.sans}` }}>WhatsApp</a>}
            {cur.email && <a href={'mailto:' + cur.email} style={{ flex: 1, textAlign: 'center', padding: '11px 0', borderRadius: 100, border: `1px solid ${A.line}`, color: A.ink, textDecoration: 'none', font: `600 12.5px/1 ${A.sans}` }}>Email</a>}
          </div>

          {section('Orders')}
          {!ords.length && <div style={{ padding: '8px 0', font: `400 12.5px/1.4 ${A.sans}`, color: A.ink45 }}>No orders yet.</div>}
          {ords.map(o => (
            <div key={o.id} onClick={() => window.__nasanAdminTab && window.__nasanAdminTab('Orders')} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 0', borderTop: `1px solid ${A.line}`, cursor: 'pointer', font: `400 12.5px/1.3 ${A.sans}` }}>
              <span style={{ color: A.ink, fontWeight: 600 }}>{o.id}</span>
              <span style={{ flex: 1, minWidth: 0, color: A.ink45, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.summary}</span>
              <Tag label={o.status} />
            </div>
          ))}

          {section('Account actions')}
          {isSus(cur) ? (
            <div onClick={() => { window.NasanStore.setAccountStatus(cur.email, 'active'); note(name(cur) + ' can sign in again'); }} style={{ marginTop: 10, textAlign: 'center', padding: '12px 0', borderRadius: 100, background: A.ink, color: '#fff', font: `600 13px/1 ${A.sans}`, cursor: 'pointer' }}>Unsuspend account</div>
          ) : (
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <input value={reason} onChange={e => setReason(e.target.value)} placeholder="Reason (optional, shown here only)" style={{ ...inp, width: '100%', background: A.white }} />
              <div onClick={() => { window.NasanStore.setAccountStatus(cur.email, 'suspended', reason.trim()); note(name(cur) + ' is suspended and signed out'); }} style={{ textAlign: 'center', padding: '12px 0', borderRadius: 100, border: '1px solid #E0A526', background: 'rgba(224,165,38,0.10)', color: '#7A5A10', font: `600 13px/1 ${A.sans}`, cursor: 'pointer' }}>Suspend account</div>
            </div>
          )}
          {!confirmDel ? (
            <div onClick={() => setConfirmDel(true)} style={{ marginTop: 8, textAlign: 'center', padding: '12px 0', borderRadius: 100, border: '1px solid rgba(210,72,60,0.4)', color: '#B4443A', font: `600 13px/1 ${A.sans}`, cursor: 'pointer' }}>Delete account</div>
          ) : (
            <div style={{ marginTop: 8, padding: 12, borderRadius: 12, background: 'rgba(210,72,60,0.08)', animation: 'nsRiseIn .25s both' }}>
              <div style={{ font: `400 12.5px/1.45 ${A.sans}`, color: '#8A2E26' }}>Delete <b>{name(cur)}</b> permanently? They are signed out and can't sign in again. Their past orders stay in Orders, marked "deleted".</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <div onClick={() => setConfirmDel(false)} style={{ flex: 1, textAlign: 'center', padding: '10px 0', borderRadius: 100, background: A.white, border: `1px solid ${A.line}`, font: `600 12.5px/1 ${A.sans}`, color: A.ink, cursor: 'pointer' }}>Cancel</div>
                <div onClick={() => { const nm = name(cur); window.NasanStore.deleteAccount(cur.email); setPick(null); note(nm + ' was deleted'); }} style={{ flex: 1, textAlign: 'center', padding: '10px 0', borderRadius: 100, background: '#D2483C', font: `600 12.5px/1 ${A.sans}`, color: '#fff', cursor: 'pointer' }}>Delete forever</div>
              </div>
            </div>
          )}
        </aside>
        );
      })()}
    </div>
  );
}

function OwnerAvatar({ o, size }) {
  const ini = (o.name || '?').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span style={{ width: size, height: size, borderRadius: size, flex: 'none', overflow: 'hidden', background: A.teal, color: '#0E2124', display: 'flex', alignItems: 'center', justifyContent: 'center', font: `700 ${Math.round(size / 2.6)}px/1 ${A.sans}` }}>
      {o.photo ? <img src={o.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : ini}
    </span>
  );
}

function getTeam(st) {
  const S = st.settings || {};
  const tm = S.team || {};
  const list = tm.list && tm.list.length ? tm.list : [{ id: 'p1', ...(S.owner || { name: 'Yadgar', role: 'Owner', city: 'Sulaymaniyah' }) }];
  const sec = S.security || {};
  const list2 = list.map(p => p);
  if (sec.adminEmail && sec.passHash && !list2.some(p => p.passHash)) {
    const k = Math.max(0, list2.findIndex(p => p.id === tm.active));
    list2[k] = { ...list2[k], email: list2[k].email || sec.adminEmail, passHash: sec.passHash };
  }
  const active = list2.find(p => p.id === tm.active) || list2[0];
  return { list: list2, active };
}
function saveTeam(list, activeId) {
  window.NasanStore.setSetting('team', 'list', list);
  window.NasanStore.setSetting('team', 'active', activeId);
}

function OwnerProfile({ profile, isNew, onSave, onDelete, onClose }) {
  const saved = profile || {};
  const [askDel, setAskDel] = React.useState(false);
  const [f, setF] = React.useState({ ...saved });
  const [err, setErr] = React.useState('');
  const fileRef = React.useRef(null);
  const set = (k) => (e) => setF(x => ({ ...x, [k]: e.target.value }));
  const pickPhoto = (e) => {
    const file = e.target.files && e.target.files[0]; e.target.value = '';
    if (!file) return;
    if (!/^image\//.test(file.type)) return setErr('Please choose an image file');
    const img = new Image(); const url = URL.createObjectURL(file);
    img.onload = () => {
      const S = 320, c = document.createElement('canvas'); c.width = S; c.height = S;
      const k = Math.max(S / img.width, S / img.height), w = img.width * k, h = img.height * k;
      c.getContext('2d').drawImage(img, (S - w) / 2, (S - h) / 2, w, h);
      setF(x => ({ ...x, photo: c.toDataURL('image/jpeg', 0.85) })); setErr(''); URL.revokeObjectURL(url);
    };
    img.onerror = () => setErr('Could not read that image');
    img.src = url;
  };
  const save = () => {
    if (!(f.name || '').trim()) return setErr('Name is required');
    if (f.email && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(f.email.trim())) return setErr('Enter a full email address');
    const e = (f.email || '').trim().toLowerCase();
    if (!e) return setErr('Sign-in email is required');
    const np = f.newPass || '';
    if ((isNew || !saved.passHash) && np.length < 8) return setErr('Password must be at least 8 characters');
    if (np && np.length < 8) return setErr('New password must be at least 8 characters');
    const clean = {}; Object.keys(f).forEach(k => { if (k !== 'newPass') clean[k] = typeof f[k] === 'string' ? f[k].trim() : f[k]; });
    clean.email = e;
    if (np) clean.passHash = adminHash(e, np);
    else if (saved.passHash && saved.email && saved.email.toLowerCase() !== e) return setErr('Enter a new password when changing the email');
    onSave(clean);
  };
  const inp = { width: '100%', boxSizing: 'border-box', height: 40, padding: '0 12px', borderRadius: 10, border: `1px solid ${A.line}`, background: A.white, font: `400 13.5px/1 ${A.sans}`, color: A.ink, outline: 'none' };
  const lab = (text) => <span style={{ display: 'block', marginBottom: 6, font: `500 10.5px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: A.ink45 }}>{text}</span>;
  return (
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 50, background: 'rgba(14,19,23,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'nsRiseIn .2s both' }}>
      <div onClick={e => e.stopPropagation()} style={{ width: 460, maxHeight: '92%', overflowY: 'auto', borderRadius: 18, background: A.paper, boxShadow: '0 24px 60px rgba(0,0,0,.3)', padding: '22px 24px 20px', animation: 'nsPop .3s cubic-bezier(.2,.8,.25,1) both' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ font: `700 18px/1 ${A.sans}`, letterSpacing: '-0.02em', color: A.ink }}>{isNew ? 'New profile' : 'Edit profile'}</span>
          <span onClick={onClose} style={{ marginLeft: 'auto', cursor: 'pointer', padding: 4 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={A.ink45} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </span>
        </div>
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span onClick={() => fileRef.current && fileRef.current.click()} style={{ position: 'relative', cursor: 'pointer' }}>
            <OwnerAvatar o={f} size={84} />
            <span style={{ position: 'absolute', right: -2, bottom: -2, width: 28, height: 28, borderRadius: 28, background: A.ink, border: '3px solid ' + A.paper, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4zM12 17a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" /></svg>
            </span>
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span onClick={() => fileRef.current && fileRef.current.click()} style={{ cursor: 'pointer', padding: '9px 14px', borderRadius: 100, background: A.ink, color: '#fff', font: `600 12.5px/1 ${A.sans}` }}>{f.photo ? 'Change photo' : 'Upload photo'}</span>
            {f.photo && <span onClick={() => setF(x => ({ ...x, photo: '' }))} style={{ cursor: 'pointer', font: `500 12px/1 ${A.sans}`, color: '#B4443A', paddingLeft: 4 }}>Remove photo</span>}
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={pickPhoto} style={{ display: 'none' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 12px', marginTop: 20 }}>
          <label style={{ gridColumn: '1 / -1' }}>{lab('Full name')}<input value={f.name || ''} onChange={set('name')} style={inp} /></label>
          <label>{lab('Role')}<input value={f.role || ''} onChange={set('role')} placeholder="Owner" style={inp} /></label>
          <label>{lab('City')}<input value={f.city || ''} onChange={set('city')} placeholder="Sulaymaniyah" style={inp} /></label>
          <label>{lab('Email')}<input value={f.email || ''} onChange={set('email')} placeholder="you@nasan.company" style={inp} /></label>
          <label>{lab('Phone')}
            <div style={{ display: 'flex', alignItems: 'center', height: 40, borderRadius: 10, border: `1px solid ${A.line}`, background: A.white, overflow: 'hidden' }}>
              <span style={{ padding: '0 10px', font: `600 13px/1 ${A.sans}`, color: A.ink45, borderRight: `1px solid ${A.line}`, height: '100%', display: 'flex', alignItems: 'center' }}>+964</span>
              <input value={f.phone || ''} onChange={e => setF(x => ({ ...x, phone: e.target.value.replace(/\D/g, '').replace(/^0/, '').slice(0, 10) }))} placeholder="770 123 4567" style={{ ...inp, border: 'none', height: '100%' }} />
            </div>
          </label>
          <label style={{ gridColumn: '1 / -1' }}>{lab(isNew || !saved.passHash ? 'Password (8+ characters)' : 'New password (leave empty to keep)')}
            <PassInput value={f.newPass || ''} onChange={v => setF(x => ({ ...x, newPass: v }))} placeholder={isNew || !saved.passHash ? 'Password' : 'New password'} style={inp} />
          </label>
          <label style={{ gridColumn: '1 / -1' }}>{lab('About you')}
            <textarea value={f.bio || ''} onChange={set('bio')} rows={3} placeholder="A short note about you" style={{ ...inp, height: 'auto', padding: '10px 12px', lineHeight: 1.5, resize: 'vertical', fontFamily: A.sans }} />
          </label>
        </div>
        {err && <div style={{ marginTop: 12, font: `500 12.5px/1.3 ${A.sans}`, color: '#B4443A' }}>{err}</div>}
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          <div onClick={onClose} style={{ flex: 1, textAlign: 'center', padding: '13px 0', borderRadius: 100, border: `1px solid ${A.line}`, background: A.white, color: A.ink, font: `600 13.5px/1 ${A.sans}`, cursor: 'pointer' }}>Cancel</div>
          <div onClick={save} style={{ flex: 1, textAlign: 'center', padding: '13px 0', borderRadius: 100, background: A.teal, color: '#0E2124', font: `700 13.5px/1 ${A.sans}`, cursor: 'pointer' }}>{isNew ? 'Add profile' : 'Save profile'}</div>
        </div>
        {onDelete && (!askDel
          ? <div onClick={() => setAskDel(true)} style={{ marginTop: 12, textAlign: 'center', font: `500 12.5px/1 ${A.sans}`, color: '#B4443A', cursor: 'pointer', padding: '6px 0' }}>Delete this profile</div>
          : <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', font: `500 12.5px/1 ${A.sans}`, color: '#8A2E26' }}>
              Delete {saved.name || 'this profile'}?
              <span onClick={() => setAskDel(false)} style={{ cursor: 'pointer', padding: '7px 12px', borderRadius: 100, border: `1px solid ${A.line}`, color: A.ink }}>No</span>
              <span onClick={onDelete} style={{ cursor: 'pointer', padding: '7px 12px', borderRadius: 100, background: '#D2483C', color: '#fff' }}>Delete</span>
            </div>)}
      </div>
    </div>
  );
}

function ProfileSwitcher({ st, onEdit, onAdd, onClose }) {
  const { list, active } = getTeam(st);
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 40 }} />
      <div style={{ position: 'absolute', left: 10, right: 10, bottom: 76, zIndex: 41, padding: 8, borderRadius: 14, background: '#1E2629', border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 18px 40px rgba(0,0,0,.45)', animation: 'nsRiseIn .22s cubic-bezier(.2,.8,.25,1) both' }}>
        <div style={{ padding: '8px 8px 6px', font: `600 10px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Switch profile</div>
        {list.map(p => {
          const on = p.id === active.id;
          return (
            <div key={p.id} onClick={() => { onClose(); if (!on) { if (p.email && p.passHash) window.__nasanAdminLock && window.__nasanAdminLock(p.email); else saveTeam(list, p.id); } }} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 8px', borderRadius: 10, cursor: 'pointer', background: on ? 'rgba(63,178,189,0.14)' : 'transparent' }}
              onMouseEnter={e => { if (!on) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }} onMouseLeave={e => { if (!on) e.currentTarget.style.background = 'transparent'; }}>
              <OwnerAvatar o={p} size={30} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ font: `600 12.5px/1.1 ${A.sans}`, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name || 'Unnamed'}</div>
                <div style={{ marginTop: 4, font: `400 10.5px/1 ${A.sans}`, color: 'rgba(255,255,255,0.45)' }}>{p.role || 'Staff'}</div>
              </div>
              {on && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={A.teal} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6.5" /></svg>}
            </div>
          );
        })}
        <div style={{ height: 1, margin: '6px 4px', background: 'rgba(255,255,255,0.08)' }} />
        {[['Edit ' + (active.name || 'profile'), onEdit, 'M4 20h4L19 9l-4-4L4 16v4z'], ['Add new profile', onAdd, 'M12 5v14M5 12h14'], ['Sign out', () => { onClose(); window.__nasanAdminLock && window.__nasanAdminLock(); }, 'M15 12H4M8 8l-4 4 4 4M13 4h6v16h-6']].map(([l, fn, d]) => (
          <div key={l} onClick={fn} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 8px', borderRadius: 10, cursor: 'pointer', font: `500 12.5px/1 ${A.sans}`, color: '#fff' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
            <span style={{ width: 30, display: 'flex', justifyContent: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
            </span>
            {l}
          </div>
        ))}
      </div>
    </>
  );
}

function NasanAdmin() {
  const [tab, setTab] = React.useState('Traffic');
  window.__nasanAdminTab = setTab;
  const [ownerOpen, setOwnerOpen] = React.useState(false); // false | 'edit' | 'new'
  const [switchOpen, setSwitchOpen] = React.useState(false);
  const [unlocked, setUnlocked] = React.useState(false);
  const lastAct = React.useRef(Date.now());
  const st = window.useNasanStore ? window.useNasanStore() : { products: SEED_PRODUCTS, orders: SEED_ORDERS };
  const team = getTeam(st);
  const products = st.products;
  const orders = st.orders;
  const [sel, setSel] = React.useState(0);
  const [query, setQuery] = React.useState('');
  const [saved, setSaved] = React.useState(false);

  const brandCount = {};
  products.forEach(p => { const b = String(p.brand || '').trim(); if (b) brandCount[b] = (brandCount[b] || 0) + 1; });
  const brandList = Object.keys(brandCount).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
  const list = products.filter(p =>
    (p.name + p.code + p.brand).toLowerCase().includes(query.toLowerCase()));
  const item = products[sel];

  const patch = (key, val) => {
    const p = products[sel];
    if (!p || !window.NasanStore) return;
    window.NasanStore.updateProduct(p.code, { [key]: val });
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };
  const addProduct = () => {
    const next = { code: String(1920 + products.length), name: 'New product', sub: 'Describe this product', brand: 'Yaxun', cat: 'Power', kind: 'station', stock: 0, status: 'Draft' };
    window.NasanStore && window.NasanStore.addProduct(next);
    setSel(0);
    setTab('Products');
  };
  const removeProduct = () => {
    const p = products[sel];
    if (!p || !window.NasanStore) return;
    window.NasanStore.removeProduct(p.code);
    setSel(0);
  };

  const navItems = [
    ['Traffic', 'M4 19V11M9 19V5M14 19v-6M19 19V8'],
    ['Diagnostics', 'M3 12h4l2-6 4 12 2-6h6'],
    ['Products', 'M4 7h16M4 12h16M4 17h10'],
    ['Orders', 'M4 6h16v14H4zM8 3v5M16 3v5'],
    ['Brands', 'M4 5h16v5H4zM4 14h16v5H4z'],
    ['Customers', 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1.6-4 14.4-4 16 0'],
    ['Translations', 'M4 5h8M8 3v2M5.5 5c1 4 3.5 6.5 6.5 7.5M10.5 5C9.5 9 7 11.5 4 12.5M13 21l4-10 4 10M14.5 17.5h5'],
    ['Settings', 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z'],
  ];
  const sec = st.settings && st.settings.security || {};
  const [prefill, setPrefill] = React.useState('');
  const locked = !unlocked;
  window.__nasanAdminLock = (email) => { setPrefill(email || ''); setUnlocked(false); };
  React.useEffect(() => {
    const bump = () => { lastAct.current = Date.now(); };
    window.addEventListener('pointerdown', bump); window.addEventListener('keydown', bump);
    const id = setInterval(() => {
      const s2 = window.NasanStore && window.NasanStore.get().settings.security;
      if (s2 && Date.now() - lastAct.current > (s2.lockMins || 15) * 60000) setUnlocked(false);
    }, 20000);
    return () => { window.removeEventListener('pointerdown', bump); window.removeEventListener('keydown', bump); clearInterval(id); };
  }, []);
  if (locked) return <AdminSignIn key={prefill} st={st} prefill={prefill} onOk={() => { lastAct.current = Date.now(); setUnlocked(true); }} />;

  const th = { textAlign: 'left', padding: '0 0 10px', font: `600 10.5px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: A.ink45 };
  const td = { padding: '13px 0', borderTop: `1px solid ${A.line}`, font: `400 13.5px/1.3 ${A.sans}`, color: A.ink70, verticalAlign: 'middle' };

  return (
    <div style={{ position: 'relative', display: 'flex', height: '100%', minHeight: 720, background: A.paper, fontFamily: A.sans, color: A.ink }}>
      {ownerOpen && (
        <OwnerProfile
          key={ownerOpen + team.active.id}
          isNew={ownerOpen === 'new'}
          profile={ownerOpen === 'new' ? { role: 'Staff', city: team.active.city || 'Sulaymaniyah' } : team.active}
          onClose={() => setOwnerOpen(false)}
          onDelete={ownerOpen === 'edit' && team.list.length > 1 ? () => {
            const rest = team.list.filter(p => p.id !== team.active.id);
            saveTeam(rest, rest[0].id); setOwnerOpen(false);
          } : null}
          onSave={(f) => {
            if (ownerOpen === 'new') {
              const id = 'p' + Date.now().toString(36);
              saveTeam([...team.list, { ...f, id }], id);
            } else {
              saveTeam(team.list.map(p => (p.id === team.active.id ? { ...f, id: p.id } : p)), team.active.id);
            }
            setOwnerOpen(false);
          }} />
      )}
      <style>{'@keyframes nsPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.86)}}@keyframes nsPop{0%{transform:scale(.9)}60%{transform:scale(1.04)}100%{transform:scale(1)}}@keyframes nsRiseIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes nsShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}'}</style>

      {/* sidebar */}
      <aside style={{ position: 'relative', width: 232, flex: 'none', background: '#141A1C', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '22px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="./nasan-logo.png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          <div>
            <div style={{ font: `700 15px/1 ${A.sans}`, color: '#fff' }}>nasan</div>
            <div style={{ marginTop: 4, font: `500 9.5px/1 ${A.sans}`, letterSpacing: '0.2em', textTransform: 'uppercase', color: A.teal }}>Admin</div>
          </div>
        </div>
        <div style={{ padding: '10px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navItems.map(([label, d]) => {
            const on = tab === label;
            return (
              <div key={label} onClick={() => setTab(label)} style={{
                display: 'flex', alignItems: 'center', gap: 11, padding: '11px 12px', borderRadius: 10, cursor: 'pointer',
                background: on ? 'rgba(63,178,189,0.14)' : 'transparent',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={on ? A.teal : 'rgba(255,255,255,0.6)'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
                <span style={{ font: `${on ? 600 : 500} 13.5px/1 ${A.sans}`, color: on ? '#fff' : 'rgba(255,255,255,0.7)' }}>{label}</span>
              </div>
            );
          })}
        </div>
        {switchOpen && <ProfileSwitcher st={st} onClose={() => setSwitchOpen(false)} onEdit={() => { setSwitchOpen(false); setOwnerOpen('edit'); }} onAdd={() => { setSwitchOpen(false); setOwnerOpen('new'); }} />}
        <div onClick={() => setSwitchOpen(v => !v)} title="Switch or edit profile" style={{ marginTop: 'auto', padding: '16px 16px', borderTop: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 11 }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
          <OwnerAvatar o={team.active} size={36} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: `600 12.5px/1.1 ${A.sans}`, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{team.active.name || 'Your name'}</div>
            <div style={{ marginTop: 5, font: `400 11px/1 ${A.sans}`, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{[team.active.role, team.active.city].filter(Boolean).join(' · ')}</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: switchOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}><path d="M7 14l5-5 5 5" /></svg>
        </div>
      </aside>

      {/* main */}
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 26px', borderBottom: `1px solid ${A.line}`, display: 'flex', alignItems: 'center', gap: 16, background: A.white }}>
          <span style={{ font: `700 18px/1 ${A.sans}`, letterSpacing: '-0.02em' }}>{tab}</span>
          <span style={{ font: `400 12.5px/1 ${A.sans}`, color: A.ink45, whiteSpace: 'nowrap', flex: 'none' }}>
            {tab === 'Traffic' ? 'real time' : tab === 'Diagnostics' ? 'site health' : tab === 'Translations' ? 'English · Kurdish · Arabic' : tab === 'Settings' ? 'live in the app' : tab === 'Customers' ? `${(st.accounts || []).length} accounts` : tab === 'Brands' ? `${brandList.length} brands` : tab === 'Products' ? `${products.length} items` : tab === 'Orders' ? `${orders.length} orders` : ''}
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
            {tab === 'Products' && <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products or codes"
              style={{ width: 230, height: 36, padding: '0 12px', borderRadius: 9, border: `1px solid ${A.line}`, background: A.paper, font: `400 13px/1 ${A.sans}`, color: A.ink, outline: 'none' }} />}
            {tab === 'Products' && <div onClick={addProduct} style={{ padding: '10px 16px', borderRadius: 9, background: A.ink, color: '#fff', font: `600 13px/1 ${A.sans}`, cursor: 'pointer' }}>+ Add product</div>}
          </div>
        </div>

        <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
          <div style={{ flex: 1, minWidth: 0, overflow: 'auto', padding: '20px 26px 30px' }}>

            {tab === 'Traffic' && <Traffic events={st.traffic || []} products={products} />}
            {tab === 'Diagnostics' && <Diagnostics st={st} />}

            {tab === 'Products' && (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ ...th, width: 74 }}>Code</th>
                    <th style={{ ...th, width: '34%', minWidth: 150 }}>Product</th>
                    <th style={{ ...th, width: 84 }}>Brand</th>
                    <th style={{ ...th, width: 96 }}>Category</th>
                    <th style={{ ...th, width: 56 }}>Stock</th>
                    <th style={{ ...th, width: 104 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map(p => {
                    const i = products.indexOf(p);
                    const on = i === sel;
                    return (
                      <tr key={p.code} onClick={() => setSel(i)} style={{ cursor: 'pointer', background: on ? 'rgba(63,178,189,0.07)' : 'transparent' }}>
                        <td style={{ ...td, font: `600 12.5px/1 ui-monospace, Menlo, monospace`, color: A.tealDeep }}>[ {p.code} ]</td>
                        <td style={{ ...td, font: `600 13.5px/1.3 ${A.sans}`, color: A.ink, paddingRight: 14, minWidth: 150 }}>{p.name}</td>
                        <td style={td}>{p.brand}</td>
                        <td style={td}>{catLabel(p.cat)}</td>
                        <td style={td}>{p.stock}</td>
                        <td style={td}><Tag label={p.status} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}

            {tab === 'Orders' && (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ ...th, width: 80 }}>Order</th>
                    <th style={th}>Customer</th>
                    <th style={{ ...th, width: 70 }}>Items</th>
                    <th style={{ ...th, width: 150 }}>Placed</th>
                    <th style={{ ...th, width: 130 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td style={{ ...td, font: `600 12.5px/1 ui-monospace, Menlo, monospace`, color: A.tealDeep }}>{o.id}</td>
                      <td style={{ ...td, font: `600 13.5px/1.3 ${A.sans}`, color: A.ink }}>{o.customer}</td>
                      <td style={td}>{o.items}</td>
                      <td style={td}>{o.when}</td>
                      <td style={td}>
                        <select value={o.status} onChange={e => window.NasanStore && window.NasanStore.setOrderStatus(o.id, e.target.value)}
                          style={{ height: 32, padding: '0 8px', borderRadius: 8, border: `1px solid ${A.line}`, background: A.white, font: `500 12.5px/1 ${A.sans}`, color: A.ink }}>
                          {['Waiting', 'Received', 'Preparing', 'Ready', 'Picked up', 'Cancelled'].map(v => <option key={v}>{v}</option>)}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {tab === 'Brands' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
                {brandList.map(b => (
                  <div key={b} onClick={() => { setQuery(b); setSel(Math.max(0, products.findIndex(p => p.brand === b))); setTab('Products'); }} style={{ padding: 16, borderRadius: 14, background: A.white, border: `1px solid ${A.line}`, cursor: 'pointer', transition: 'border-color .15s, transform .15s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = A.teal; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = A.line; e.currentTarget.style.transform = 'none'; }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: A.ink, color: A.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', font: `700 13px/1 ${A.sans}` }}>{b.slice(0, 2).toUpperCase()}</div>
                      <div style={{ font: `600 14px/1.2 ${A.sans}`, color: A.ink }}>{b}</div>
                    </div>
                    <div style={{ marginTop: 12, font: `400 12px/1.3 ${A.sans}`, color: A.ink45 }}>
                      {brandCount[b]} product{brandCount[b] === 1 ? '' : 's'} · View →
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === 'Translations' && <Translations st={st} />}
            {tab === 'Settings' && <Settings st={st} />}
            {tab === 'Customers' && <Customers st={st} />}
          </div>

          {/* inspector */}
          {tab === 'Products' && item && (
            <aside style={{ width: 300, boxSizing: 'border-box', flex: 'none', borderLeft: `1px solid ${A.line}`, background: A.white, overflow: 'auto', padding: '20px 20px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ font: `600 13px/1 ${A.sans}`, color: A.ink }}>Edit product</span>
                <Tag label={item.status} />
              </div>
              <div style={{ marginTop: 16, height: 120, borderRadius: 14, background: A.paper, border: `1px dashed ${A.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', font: `400 12px/1.4 ${A.sans}`, color: A.ink45, textAlign: 'center', padding: 12, boxSizing: 'border-box' }}>
                Drop a product photo here
              </div>
              <Field label="Product code" value={item.code} onChange={v => patch('code', v)} />
              <Field label="Name" value={item.name} onChange={v => patch('name', v)} />
              <Field label="Description" value={item.sub || ''} onChange={v => patch('sub', v)} />
              <Field label="Brand" value={item.brand} onChange={v => patch('brand', v)} options={BRANDS_ADMIN.concat(['Sugon'])} />
              <Field label="Category" value={item.cat} onChange={v => patch('cat', v)} options={['Power', 'Microscope', 'Soldering', 'Hot air', 'Hand tools']} optionLabel={catLabel} />
              <Field label="Stock" value={item.stock} onChange={v => patch('stock', v)} type="number" />
              <Field label="Status" value={item.status} onChange={v => patch('status', v)} options={['Live', 'Low stock', 'Out of stock', 'Draft']} />
              <div style={{ marginTop: 20, textAlign: 'center', padding: '13px 0', borderRadius: 100, background: saved ? A.tealDeep : A.ink, color: '#fff', font: `600 13.5px/1 ${A.sans}`, cursor: 'pointer', transition: 'background .25s' }}>
                {saved ? 'Saved — live in the app' : 'Changes save as you type'}
              </div>
              <div onClick={removeProduct} style={{ marginTop: 10, textAlign: 'center', font: `500 12.5px/1 ${A.sans}`, color: '#B4443A', cursor: 'pointer', padding: '10px 0' }}>Delete product</div>
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}

window.NasanAdmin = NasanAdmin;
module.exports = { NasanAdmin };
