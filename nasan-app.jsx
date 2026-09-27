/* Interactive walkthrough: one iPhone, real navigation.
   splash → home → brands / search / orders / you, slide bar, cart */

/* phone: full-screen mode for testing on a real device — no bezel, no walkthrough
   chips. Off by default, so the design canvas is unchanged. */
function NasanApp({ phone } = {}) {
  const D = phone ? (({ children }) => <div style={{ width: '100%', height: '100%' }}>{children}</div>) : window.IOSDevice;
  const st = window.useNasanStore ? window.useNasanStore() : { lang: 0 };
  const li = st.lang || 0;
  const [langOpen, setLangOpen] = React.useState(false);
  const [dir, setDir] = React.useState('fwd');
  const [tick, setTick] = React.useState(0);
  const [screen, setScreen] = React.useState(() => { const s0 = window.NasanStore && window.NasanStore.get().settings; return s0 && s0.design && s0.design.welcome === false ? 'home' : 'splash'; });
  const [menu, setMenu] = React.useState(false);
  const [replay, setReplay] = React.useState(0);
  const [cart, setCart] = React.useState([]);
  const addToCart = (item) => setCart(list => {
    const i = list.findIndex(x => x[2] === item[2]);
    if (i < 0) return [...list, item];
    return list.map((x, j) => (j === i ? [x[0], x[1], x[2], x[3], x[4] + 1] : x));
  });
  const setQty = (idx, d) => setCart(list => list
    .map((x, i) => (i === idx ? [x[0], x[1], x[2], x[3], Math.max(0, x[4] + d)] : x))
    .filter(x => x[4] > 0));
  const cartCount = cart.reduce((n, x) => n + x[4], 0);

  const [scope, setScope] = React.useState({});
  /* History stack of { screen, scope } so every back arrow returns to where you
     actually came from (You → Cart → back lands on You, not Home). Tab-bar
     taps reset the stack, like a native tab app. */
  const histRef = React.useRef([]);
  const TABS = ['home', 'lcd', 'brands', 'search', 'orders', 'account'];
  const ORDER = ['splash', 'home', 'catalog', 'product', 'brands', 'search', 'orders', 'lcd', 'account', 'cart', 'about', 'contact'];
  const back = () => {
    setMenu(false);
    const prev = histRef.current.pop();
    setDir('back');
    if (!prev) { setScope({}); return setScreen('home'); }
    setScope(prev.scope);
    setScreen(prev.screen);
  };
  const go = (s, opts = {}) => {
    setMenu(false);
    try {
      const C = window.NasanStore && window.NasanStore.click;
      if (C && typeof s === 'string') {
        if (s.startsWith('cat:')) C('category_click', s.slice(4));
        else if (s.startsWith('brand:')) C('brand_click', s.slice(6).split('|')[0]);
        else if (s === 'search') C('search');
        else if (s === 'cart') C('cart');
        else if (s === 'lcd') C('lcd');
      }
    } catch (e) {}
    const base = typeof s === 'string' ? s.split(':')[0] : s;
    const dest = base === 'cat' || base === 'brand' ? 'catalog' : base;
    if (TABS.includes(dest) && !opts.push) histRef.current = [];
    else if (screen !== 'splash' && !(dest === screen && dest !== 'product' && dest !== 'catalog')) histRef.current.push({ screen, scope });
    setDir(TABS.includes(dest) && ORDER.indexOf(dest) < ORDER.indexOf(screen) ? 'back' : 'fwd');
    if (typeof s === 'string' && s.startsWith('cat:')) {
      const c = s.slice(4);
      setScope({ cat: c === 'All' ? null : c }); return setScreen('catalog');
    }
    if (typeof s === 'string' && s.startsWith('product:')) {
      setScope(sc => ({ ...sc, code: s.slice(8) })); return setScreen('product');
    }
    if (typeof s === 'string' && s.startsWith('brand:')) {
      const [b, c] = s.slice(6).split('|');
      setScope({ brand: b, cat: c || null }); return setScreen('catalog');
    }
    setScreen(s);
  };
  React.useEffect(() => {
    if (!window.NasanStore || !window.NasanStore.track) return;
    window.NasanStore.track(menu ? 'menu' : screen, scope.code || scope.brand || scope.cat || '');
  }, [screen, menu, scope.code, scope.brand, scope.cat]);
  React.useEffect(() => {
    const id = setInterval(() => {
      if (document.visibilityState === 'visible' && window.NasanStore && window.NasanStore.track) window.NasanStore.track('ping');
    }, 15000);
    return () => clearInterval(id);
  }, []);
  const TAB = { Shop: 'home', Brands: 'brands', Search: 'search', Orders: 'orders', LCD: 'lcd', You: 'account', Cart: 'cart', Product: 'product' };
  const onNav = (tab) => {
    if (typeof tab === 'string' && (tab.startsWith('cat:') || tab.startsWith('brand:') || tab.startsWith('product:'))) return go(tab);
    go(TAB[tab] || 'home');
  };
  const nav = { onMenu: () => setMenu(true), onNav, cartCount, onLang: () => setLangOpen(true) };

  const body = {
    splash: <window.NasanSplash key={'s' + replay} bare onDone={() => { histRef.current = []; setScreen('home'); }} />,
    home: <window.NasanHomeEditorial bare {...nav} />,
    brands: <window.NasanBrands bare {...nav} />,
    search: <window.NasanSearch bare {...nav} />,
    orders: <window.NasanOrders bare {...nav} />,
    lcd: <window.NasanLCD bare onAdd={addToCart} {...nav} />,
    account: <window.NasanAccount bare {...nav} />,
    cart: <window.NasanCart bare onBack={back} onNav={onNav} items={cart} onQty={setQty} onPlaced={() => setCart([])} onLang={() => setLangOpen(true)} />,
    catalog: <window.NasanCatalog bare onBack={back} brand={scope.brand} cat={scope.cat} {...nav} />,
    product: <window.NasanHomeDark bare code={scope.code} onBack={back} onAdd={addToCart} {...nav} />,
    about: <window.NasanAbout bare onBack={back} onNav={onNav} />,
    contact: <window.NasanContact bare onBack={back} />,
  }[screen];

  const chip = (label, k, onClick, active) => (
    <div key={label} onClick={onClick} style={{
      padding: '8px 14px', borderRadius: 100, cursor: 'pointer',
      background: active ? '#20262A' : '#fff',
      color: active ? '#fff' : 'rgba(32,38,42,0.7)',
      border: '1px solid rgba(32,38,42,0.12)',
      font: '600 12.5px/1 -apple-system, system-ui, sans-serif',
    }}>{label}</div>
  );

  return (
    <div style={phone ? { width: '100%', height: '100%' } : { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, flex: 'none' }}>
      <div style={phone ? { width: '100%', height: '100%' } : { flex: 'none' }}>
      <D>
        <div dir={li ? 'rtl' : 'ltr'} style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
          <window.LangCtx.Provider value={li}>
          {st.settings && st.settings.general && st.settings.general.maintenance && screen !== 'splash' && (
            <div style={{ position: 'absolute', left: 12, right: 12, bottom: 96, zIndex: 55, padding: '11px 14px', borderRadius: 14, background: '#20262A', color: '#fff', font: '500 12.5px/1.4 -apple-system, system-ui, sans-serif', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,.18)', pointerEvents: 'none' }}>
              {['We are updating the catalog. Some products may change shortly.', 'کاتالۆگەکە نوێ دەکەینەوە. هەندێک بەرهەم لەوانەیە بگۆڕێن.', 'نقوم بتحديث الكتالوج. قد تتغير بعض المنتجات قريباً.'][li]}
            </div>
          )}
          <div key={screen + ':' + (scope.code || scope.brand || scope.cat || '') + ':' + tick} style={{
            height: '100%',
            animation: (dir === 'fwd' ? 'nsPageIn' : 'nsPageBack') + ' .28s cubic-bezier(.2,.8,.25,1) both',
          }}>{body}</div>
          {menu && (
            <div style={{ position: 'absolute', inset: 0, zIndex: 60, animation: 'nsFade .18s ease both' }}>
              <window.NasanMenu bare onClose={() => setMenu(false)} onNav={go} />
            </div>
          )}
          {langOpen && (
            <window.LangSheet current={li} onClose={() => setLangOpen(false)}
              onPick={(i) => { window.NasanStore && window.NasanStore.setLang(i); setLangOpen(false); }} />
          )}
          </window.LangCtx.Provider>
        </div>
      </D>
      </div>
      {!phone && <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 402 }}>
        {[['Welcome', 'splash'], ['Home', 'home'], ['Brands', 'brands'], ['Search', 'search'],
          ['Orders', 'orders'], ['LCD', 'lcd'], ['You', 'account'], ['Catalog', 'catalog'], ['Product', 'product'], ['Cart' + (cartCount ? ' (' + cartCount + ')' : ''), 'cart'], ['About', 'about'], ['Contact', 'contact']]
          .map(([l, k]) => chip(l, k, () => { if (k === 'splash') setReplay(r => r + 1); histRef.current = []; setMenu(false); setDir('fwd'); setScreen(k); }, screen === k && !menu))}
        {chip('Slide bar', 'menu', () => setMenu(m => !m), menu)}
      </div>}
    </div>
  );
}

window.NasanApp = NasanApp;
module.exports = { NasanApp };
