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

function NasanAdmin() {
  const [tab, setTab] = React.useState('Products');
  const st = window.useNasanStore ? window.useNasanStore() : { products: SEED_PRODUCTS, orders: SEED_ORDERS };
  const products = st.products;
  const orders = st.orders;
  const [sel, setSel] = React.useState(0);
  const [query, setQuery] = React.useState('');
  const [saved, setSaved] = React.useState(false);

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
    ['Products', 'M4 7h16M4 12h16M4 17h10'],
    ['Orders', 'M4 6h16v14H4zM8 3v5M16 3v5'],
    ['Brands', 'M4 5h16v5H4zM4 14h16v5H4z'],
    ['Customers', 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1.6-4 14.4-4 16 0'],
    ['Content', 'M5 4h14v16H5zM8 9h8M8 13h5'],
  ];

  const th = { textAlign: 'left', padding: '0 0 10px', font: `600 10.5px/1 ${A.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: A.ink45 };
  const td = { padding: '13px 0', borderTop: `1px solid ${A.line}`, font: `400 13.5px/1.3 ${A.sans}`, color: A.ink70, verticalAlign: 'middle' };

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: 720, background: A.paper, fontFamily: A.sans, color: A.ink }}>

      {/* sidebar */}
      <aside style={{ width: 232, flex: 'none', background: '#141A1C', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '22px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="./assets/nasan-logo.png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
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
        <div style={{ marginTop: 'auto', padding: '18px 20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ font: `600 12.5px/1 ${A.sans}`, color: '#fff' }}>Yadgar</div>
          <div style={{ marginTop: 5, font: `400 11px/1 ${A.sans}`, color: 'rgba(255,255,255,0.4)' }}>Owner · Sulaymaniyah</div>
        </div>
      </aside>

      {/* main */}
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 26px', borderBottom: `1px solid ${A.line}`, display: 'flex', alignItems: 'center', gap: 16, background: A.white }}>
          <span style={{ font: `700 18px/1 ${A.sans}`, letterSpacing: '-0.02em' }}>{tab}</span>
          <span style={{ font: `400 12.5px/1 ${A.sans}`, color: A.ink45 }}>
            {tab === 'Products' ? `${products.length} items` : tab === 'Orders' ? `${orders.length} orders` : ''}
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products or codes"
              style={{ width: 230, height: 36, padding: '0 12px', borderRadius: 9, border: `1px solid ${A.line}`, background: A.paper, font: `400 13px/1 ${A.sans}`, color: A.ink, outline: 'none' }} />
            <div onClick={addProduct} style={{ padding: '10px 16px', borderRadius: 9, background: A.ink, color: '#fff', font: `600 13px/1 ${A.sans}`, cursor: 'pointer' }}>+ Add product</div>
          </div>
        </div>

        <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
          <div style={{ flex: 1, minWidth: 0, overflow: 'auto', padding: '20px 26px 30px' }}>

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
                          {['Waiting', 'Received', 'Preparing', 'Ready', 'Picked up'].map(v => <option key={v}>{v}</option>)}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {tab === 'Brands' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
                {BRANDS_ADMIN.map(b => (
                  <div key={b} style={{ padding: 16, borderRadius: 14, background: A.white, border: `1px solid ${A.line}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: A.ink, color: A.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', font: `700 13px/1 ${A.sans}` }}>{b.slice(0, 2).toUpperCase()}</div>
                      <div style={{ font: `600 14px/1.2 ${A.sans}`, color: A.ink }}>{b}</div>
                    </div>
                    <div style={{ marginTop: 12, font: `400 12px/1.3 ${A.sans}`, color: A.ink45 }}>
                      {products.filter(p => p.brand === b).length} products
                    </div>
                  </div>
                ))}
              </div>
            )}

            {(tab === 'Customers' || tab === 'Content') && (
              <div style={{ padding: '40px 0', font: `400 14px/1.6 ${A.sans}`, color: A.ink45, maxWidth: 460 }}>
                {tab === 'Customers'
                  ? 'Customer accounts, order history and WhatsApp contact live here. Say the word and I will build this screen out.'
                  : 'About text, shop locations, contact details and the home hero are edited here. Say the word and I will build this screen out.'}
              </div>
            )}
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
