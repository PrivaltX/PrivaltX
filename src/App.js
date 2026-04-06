import React, { useState } from 'react';

const LISTINGS = [
  { id: 1, fundName: 'Blackstone Capital Partners VIII', strategy: 'Buyout', geography: 'North America', vintageYear: 2019, nav: 8000000, positionSize: 3000000, unfundedCommitment: 500000, remainingLife: 3, askPrice: 2730000, discountToNav: 91, jCurve: 'Mid Stage — Recovery Phase', jCurveColor: '#D97706' },
  { id: 2, fundName: 'KKR European Fund V', strategy: 'Buyout', geography: 'Europe', vintageYear: 2018, nav: 12000000, positionSize: 5000000, unfundedCommitment: 800000, remainingLife: 2, askPrice: 4600000, discountToNav: 92, jCurve: 'Late Stage — Harvest Period', jCurveColor: '#059669' },
  { id: 3, fundName: 'Sequoia Capital Global Growth III', strategy: 'Venture Capital', geography: 'Global', vintageYear: 2021, nav: 6000000, positionSize: 2000000, unfundedCommitment: 1200000, remainingLife: 5, askPrice: 1700000, discountToNav: 85, jCurve: 'Early Stage — J-Curve Dip', jCurveColor: '#DC2626' },
  { id: 4, fundName: 'Apollo Infrastructure Partners II', strategy: 'Infrastructure', geography: 'North America', vintageYear: 2020, nav: 15000000, positionSize: 4000000, unfundedCommitment: 600000, remainingLife: 4, askPrice: 3720000, discountToNav: 93, jCurve: 'Mid Stage — Recovery Phase', jCurveColor: '#D97706' },
  { id: 5, fundName: 'Carlyle Asia Growth Partners IV', strategy: 'Growth Equity', geography: 'Asia Pacific', vintageYear: 2019, nav: 9000000, positionSize: 3500000, unfundedCommitment: 400000, remainingLife: 3, askPrice: 3150000, discountToNav: 90, jCurve: 'Mid Stage — Recovery Phase', jCurveColor: '#D97706' },
  { id: 6, fundName: 'Warburg Pincus Private Equity XIV', strategy: 'Growth Equity', geography: 'Global', vintageYear: 2018, nav: 20000000, positionSize: 6000000, unfundedCommitment: 0, remainingLife: 2, askPrice: 5640000, discountToNav: 94, jCurve: 'Late Stage — Harvest Period', jCurveColor: '#059669' },
];

function formatUSD(amount) {
  if (amount >= 1000000) return '$' + (amount / 1000000).toFixed(2) + 'M';
  return '$' + amount.toLocaleString();
}

const C = {
  bg: '#FAFAF8', white: '#FFFFFF', navy: '#0B1426', blue: '#2563EB', blueBg: '#EEF2FF',
  border: '#E8E6E1', borderLight: '#F0EDE8', textPrimary: '#0B1426', textSecondary: '#6B7280',
  textTertiary: '#9CA3AF', green: '#059669', greenBg: '#ECFDF5', red: '#DC2626',
  amber: '#D97706', serif: "'EB Garamond', Georgia, serif",
  sans: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const S = {
  page: { background: C.bg, minHeight: '100vh', fontFamily: C.sans, color: C.navy, margin: 0, padding: 0 },
  nav: { background: 'rgba(250,250,248,0.95)', borderBottom: `1px solid ${C.border}`, position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' },
  navInner: { width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', boxSizing: 'border-box' },
  btnPrimary: { background: C.navy, color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 28px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: C.sans },
  btnSecondary: { background: 'transparent', color: C.navy, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 28px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: C.sans },
  section: { width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '100px 64px', boxSizing: 'border-box' },
  tag: { fontSize: '13px', color: C.blue, fontWeight: '600', marginBottom: '16px' },
  divider: { width: '32px', height: '3px', background: C.blue, borderRadius: '2px', marginBottom: '32px' },
  h1: { fontFamily: C.serif, fontSize: '76px', fontWeight: '800', color: C.navy, lineHeight: '0.98', letterSpacing: '-2.5px', margin: '0 0 28px' },
  h2: { fontFamily: C.serif, fontSize: '48px', fontWeight: '700', color: C.navy, letterSpacing: '-1.5px', margin: '0 0 16px', lineHeight: '1.1' },
  body: { fontSize: '17px', color: C.textSecondary, lineHeight: '1.7' },
  input: { width: '100%', background: C.white, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '13px 16px', color: C.navy, fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: C.sans },
  label: { display: 'block', color: C.textSecondary, fontSize: '13px', fontWeight: '500', marginBottom: '8px' },
};

function scrollTo(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

function TopNav({ onLaunch }) {
  return (
    <nav style={S.nav}><div style={S.navInner}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
        <div style={{ fontFamily: C.serif, fontSize: '26px', fontWeight: '700', color: C.navy }}>Priv<span style={{ color: C.blue }}>Alt</span>X</div>
        <div style={{ display: 'flex', gap: '36px' }}>
          {['Platform','Markets','Technology','About'].map(l => (
            <button key={l} style={{ color: C.textTertiary, fontSize: '14px', cursor: 'pointer', fontWeight: '500', background: 'none', border: 'none', padding: 0 }} onClick={() => scrollTo(l.toLowerCase())}
              onMouseEnter={e => e.target.style.color = C.navy} onMouseLeave={e => e.target.style.color = C.textTertiary}>{l}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span style={{ color: C.textSecondary, fontSize: '14px', cursor: 'pointer', fontWeight: '500' }} onClick={onLaunch}>Sign In</span>
        <button style={S.btnPrimary} onClick={onLaunch}>Request Access</button>
      </div>
    </div></nav>
  );
}

function LandingPage({ onLaunch }) {
  return (
    <div style={S.page}>
      <TopNav onLaunch={onLaunch} />
      <div style={{ ...S.section, paddingTop: '120px', paddingBottom: '100px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.blueBg, padding: '6px 16px', borderRadius: '100px', marginBottom: '48px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.blue }}></div>
          <span style={{ color: C.blue, fontSize: '13px', fontWeight: '600' }}>Now accepting qualified investors</span>
        </div>
        <div style={S.divider}></div>
        <h1 style={S.h1}>The private<br />markets <em style={{ fontStyle: 'italic', color: C.blue }}>liquidity</em><br />platform.</h1>
        <p style={{ ...S.body, maxWidth: '500px', marginBottom: '48px', fontSize: '18px' }}>AI-powered secondary marketplace for private equity LP positions. Settlement in 7 days. Transparent pricing. Institutional grade.</p>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '96px' }}>
          <button style={{ background: C.navy, color: '#fff', border: 'none', borderRadius: '8px', padding: '16px 36px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', fontFamily: C.sans }} onClick={onLaunch}>Access the platform →</button>
          <button style={S.btnSecondary} onClick={() => scrollTo('technology')}>Learn how it works</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {[{ value: '$210B+', label: 'Annual secondary volume', sub: 'Growing at 11% CAGR' },{ value: '$3.6T', label: 'Trapped private capital', sub: 'Seeking liquidity today' },{ value: '7 Days', label: 'Average settlement', sub: 'vs 2–6 months traditional' },{ value: '<1%', label: 'Platform fee', sub: 'vs 2–5% broker fees' }].map((s, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '32px 28px' }}>
              <div style={{ fontFamily: C.serif, fontSize: '42px', fontWeight: '700', color: C.navy, marginBottom: '8px', letterSpacing: '-1px' }}>{s.value}</div>
              <div style={{ fontSize: '14px', color: C.textSecondary, fontWeight: '500' }}>{s.label}</div>
              <div style={{ fontSize: '12px', color: C.textTertiary, marginTop: '6px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '48px', marginTop: '80px', paddingTop: '48px', borderTop: `1px solid ${C.border}` }}>
          {[{ l: 'Founded by', v: 'Chartered Accountant' },{ l: 'Background', v: 'Franklin Templeton' },{ l: 'Infrastructure', v: 'Blockchain-native' },{ l: 'Compliance', v: 'KYC/AML verified' }].map((t, i) => (
            <div key={i} style={{ fontSize: '13px', color: C.textTertiary }}><strong style={{ color: C.textSecondary, fontWeight: '600' }}>{t.l}</strong> {t.v}</div>
          ))}
        </div>
      </div>

      <div id="platform" style={{ borderTop: `1px solid ${C.border}` }}><div style={S.section}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={S.tag}>Platform</div><div style={S.divider}></div>
            <h2 style={S.h2}>Built for institutional private markets</h2>
            <p style={{ ...S.body, marginBottom: '40px' }}>The first open secondary marketplace purpose-built for PE LP positions — combining AI-powered pricing, blockchain settlement, and structured GP consent.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[{ icon: '🏦', title: 'LP Sellers', desc: 'Pension funds, endowments, and family offices exit positions in days.' },{ icon: '🔍', title: 'Institutional Buyers', desc: 'Secondary firms acquire verified positions at AI-priced ranges.' },{ icon: '⚙️', title: 'General Partners', desc: 'Digital GP consent workflow — weeks of paperwork reduced to days.' }].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: C.white, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '20px 24px' }}>
                  <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
                  <div><div style={{ color: C.navy, fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{item.title}</div><div style={{ color: C.textSecondary, fontSize: '14px' }}>{item.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: C.white, border: `2px solid ${C.blue}`, borderRadius: '12px', padding: '36px' }}>
            <div style={{ fontSize: '12px', color: C.blue, fontWeight: '600', letterSpacing: '0.06em', marginBottom: '24px' }}>LIVE MARKETPLACE PREVIEW</div>
            {LISTINGS.slice(0, 3).map(l => (
              <div key={l.id} style={{ borderBottom: `1px solid ${C.borderLight}`, paddingBottom: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div><div style={{ color: C.navy, fontSize: '14px', fontWeight: '600', marginBottom: '6px' }}>{l.fundName}</div>
                    <div style={{ display: 'flex', gap: '8px' }}><span style={{ background: C.blueBg, color: C.blue, fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '100px' }}>{l.strategy}</span><span style={{ color: l.jCurveColor, fontSize: '11px', fontWeight: '500' }}>{l.jCurve}</span></div>
                  </div>
                  <div style={{ textAlign: 'right' }}><div style={{ color: C.navy, fontSize: '16px', fontWeight: '700', fontFamily: C.serif }}>{formatUSD(l.askPrice)}</div><div style={{ color: C.green, fontSize: '12px', fontWeight: '500' }}>{l.discountToNav}% of NAV</div></div>
                </div>
              </div>
            ))}
            <button style={{ width: '100%', ...S.btnPrimary, padding: '14px' }} onClick={onLaunch}>View all listings →</button>
          </div>
        </div>
      </div></div>

      <div id="markets" style={{ borderTop: `1px solid ${C.border}` }}><div style={S.section}>
        <div style={S.tag}>Markets</div><div style={S.divider}></div>
        <h2 style={S.h2}>$210B+ and accelerating</h2>
        <p style={{ ...S.body, maxWidth: '560px', marginBottom: '64px' }}>The secondary PE market is the fastest-growing segment in private markets — driven by LPs seeking liquidity after exit volumes collapsed 54% since 2021.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
          {[{ year: '2019', value: '$79B', note: 'Pre-pandemic baseline', hl: false },{ year: '2021', value: '$134B', note: 'Post-pandemic surge', hl: false },{ year: '2024', value: '$162B', note: 'New record high', hl: false },{ year: '2025E', value: '$210B+', note: 'Estimated, +30% YoY', hl: true },{ year: '2030P', value: '$300B+', note: 'Projected at 11% CAGR', hl: false },{ year: 'Trapped', value: '$3.6T', note: 'Unrealised PE capital', hl: true }].map((m, i) => (
            <div key={i} style={{ background: m.hl ? C.blueBg : C.white, border: `1px solid ${m.hl ? '#C7D2FE' : C.border}`, borderRadius: '12px', padding: '28px' }}>
              <div style={{ color: C.textTertiary, fontSize: '13px', marginBottom: '8px', fontWeight: '500' }}>{m.year}</div>
              <div style={{ fontFamily: C.serif, fontSize: '36px', fontWeight: '700', color: m.hl ? C.blue : C.navy, letterSpacing: '-1px', marginBottom: '6px' }}>{m.value}</div>
              <div style={{ color: C.textTertiary, fontSize: '13px' }}>{m.note}</div>
            </div>
          ))}
        </div>
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          <div><div style={{ color: C.navy, fontSize: '18px', fontWeight: '700', fontFamily: C.serif, marginBottom: '8px' }}>The LP liquidity crisis is real</div>
            <div style={{ color: C.textSecondary, fontSize: '15px', maxWidth: '560px', lineHeight: '1.7' }}>PE exit volumes dropped 54% from $528B in 2021 to $244B in 2025. 12,500+ companies remain unexited. Average hold period has grown from 4 to 7+ years.</div></div>
          <button style={{ ...S.btnPrimary, flexShrink: 0 }} onClick={onLaunch}>Access markets →</button>
        </div>
      </div></div>

      <div id="technology" style={{ borderTop: `1px solid ${C.border}` }}><div style={S.section}>
        <div style={S.tag}>Technology</div><div style={S.divider}></div>
        <h2 style={S.h2}>Secondary markets, finally built right</h2>
        <p style={{ ...S.body, maxWidth: '520px', marginBottom: '64px' }}>Three layers of technology working together to replace a broken, manual process.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
          {[{ step: '01', title: 'AI Pricing Engine', desc: 'ML models analyse NAV, J-curve, strategy, geography, and comparable deals to generate a fair bid-ask range instantly.' },{ step: '02', title: 'Blockchain Settlement', desc: 'Smart contracts automate escrow, ownership transfer, and compliance. GP consent via digital workflow. Months become days.' },{ step: '03', title: 'Buyer Verification', desc: 'Three-layer verification — legal (KYC/AML), financial (capital adequacy), and suitability. Verified once, reusable across all funds.' }].map((t, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '36px 32px' }}>
              <div style={{ fontSize: '13px', color: C.blue, fontWeight: '600', marginBottom: '20px' }}>{t.step}</div>
              <h3 style={{ fontFamily: C.serif, fontSize: '22px', fontWeight: '700', color: C.navy, marginBottom: '14px' }}>{t.title}</h3>
              <p style={{ fontSize: '14px', color: C.textSecondary, lineHeight: '1.7', margin: 0 }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '36px' }}>
            <div style={{ fontSize: '13px', color: C.red, fontWeight: '600', marginBottom: '24px' }}>Traditional broker</div>
            {[['Settlement','2–6 months'],['Fees','2–5% of deal value'],['Process','Phone calls, manual paperwork'],['Minimum','$1M–$5M'],['Pricing','Opaque, broker-negotiated'],['GP Consent','Weeks of email chains'],['Buyer Verification','Manual, from scratch']].map(([k,v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${C.borderLight}` }}><span style={{ color: C.textSecondary, fontSize: '14px' }}>{k}</span><span style={{ color: C.red, fontSize: '14px', fontWeight: '600' }}>{v}</span></div>
            ))}
          </div>
          <div style={{ background: C.blueBg, border: '1px solid #C7D2FE', borderRadius: '12px', padding: '36px' }}>
            <div style={{ fontSize: '13px', color: C.blue, fontWeight: '600', marginBottom: '24px' }}>PrivAltX platform</div>
            {[['Settlement','7–14 days'],['Fees','Under 1%'],['Process','AI-powered, automated'],['Minimum','From $100K'],['Pricing','AI engine, transparent'],['GP Consent','Digital, days'],['Buyer Verification','Once, reusable']].map(([k,v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(37,99,235,0.1)' }}><span style={{ color: C.textSecondary, fontSize: '14px' }}>{k}</span><span style={{ color: C.green, fontSize: '14px', fontWeight: '600' }}>{v}</span></div>
            ))}
          </div>
        </div>
      </div></div>

      <div id="about" style={{ borderTop: `1px solid ${C.border}` }}><div style={S.section}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={S.tag}>About</div><div style={S.divider}></div>
            <h2 style={S.h2}>Built from inside private markets</h2>
            <p style={{ ...S.body, marginBottom: '24px' }}>PrivAltX was founded by a Chartered Accountant with deep experience in institutional asset management, private equity operations, and blockchain technology.</p>
            <p style={{ ...S.body, marginBottom: '40px' }}>The problem is not new. The technology to solve it finally is.</p>
            <div style={{ display: 'flex', gap: '48px' }}>
              {[{ v: 'CA', l: 'Chartered Accountant' },{ v: 'FT', l: 'Franklin Templeton' },{ v: 'Web3', l: 'Blockchain Native' }].map((x, i) => (
                <div key={i}><div style={{ fontFamily: C.serif, fontSize: '28px', fontWeight: '700', color: C.blue, marginBottom: '4px' }}>{x.v}</div><div style={{ color: C.textTertiary, fontSize: '13px' }}>{x.l}</div></div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[{ t: 'Mission', d: 'Make private markets liquid. Give LPs the exit they deserve. Give buyers access to a $210B+ market currently locked behind phone calls.' },{ t: 'Vision', d: 'Become the Bloomberg Terminal for secondary private markets — the indispensable pricing and trading infrastructure.' },{ t: 'Values', d: 'Institutional trust. Radical transparency. Technology that serves the market, not the middleman.' }].map((x, i) => (
              <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '24px 28px' }}>
                <div style={{ color: C.blue, fontSize: '12px', fontWeight: '600', letterSpacing: '0.04em', marginBottom: '8px' }}>{x.t.toUpperCase()}</div>
                <div style={{ color: C.textSecondary, fontSize: '15px', lineHeight: '1.6' }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div></div>

      <div style={{ borderTop: `1px solid ${C.border}`, textAlign: 'center' }}><div style={{ ...S.section, paddingTop: '100px', paddingBottom: '100px' }}>
        <h2 style={{ fontFamily: C.serif, fontSize: '56px', fontWeight: '700', color: C.navy, letterSpacing: '-2px', marginBottom: '20px', lineHeight: '1.05' }}>Private markets weren't liquid.<br /><em style={{ fontStyle: 'italic', color: C.blue }}>Until now.</em></h2>
        <p style={{ ...S.body, marginBottom: '48px' }}>Join institutional investors already accessing secondary market liquidity on PrivAltX.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button style={{ background: C.navy, color: '#fff', border: 'none', borderRadius: '8px', padding: '18px 40px', fontSize: '17px', fontWeight: '600', cursor: 'pointer', fontFamily: C.sans }} onClick={onLaunch}>Access the platform →</button>
          <button style={{ ...S.btnSecondary, padding: '18px 40px', fontSize: '17px' }} onClick={() => scrollTo('about')}>Learn more</button>
        </div>
      </div></div>

      <div style={{ borderTop: `1px solid ${C.border}`, padding: '64px 64px 40px', boxSizing: 'border-box' }}><div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }}>
          <div><div style={{ fontFamily: C.serif, fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: C.navy }}>Priv<span style={{ color: C.blue }}>Alt</span>X</div>
            <p style={{ color: C.textTertiary, fontSize: '14px', lineHeight: '1.7', maxWidth: '260px', marginBottom: '24px' }}>The Private Alternatives Exchange. AI-powered secondary marketplace for institutional PE positions.</p>
            <div style={{ color: C.textTertiary, fontSize: '13px' }}>privaltx.com</div></div>
          {[{ t: 'Platform', l: ['Marketplace','LP Seller Portal','GP Dashboard','AI Pricing','Settlement'] },{ t: 'Markets', l: ['Secondary PE','Private Credit','Real Estate','Infrastructure','Market Data'] },{ t: 'Company', l: ['About','Careers','Press','Blog','Contact'] },{ t: 'Legal', l: ['Privacy Policy','Terms of Use','Disclosures','Compliance','Risk Factors'] }].map(col => (
            <div key={col.t}><div style={{ color: C.navy, fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>{col.t}</div>
              {col.l.map(link => (<div key={link} style={{ color: C.textTertiary, fontSize: '14px', marginBottom: '12px', cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = C.textSecondary} onMouseLeave={e => e.target.style.color = C.textTertiary}>{link}</div>))}</div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '28px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ color: C.textTertiary, fontSize: '13px' }}>© 2026 PrivAltX. All rights reserved. For qualified institutional investors only.</div>
          <div style={{ color: C.textTertiary, fontSize: '13px' }}>Built with AI · Deployed on blockchain</div>
        </div>
      </div></div>
    </div>
  );
}

function PlatformNav({ subtitle, onBack }) {
  return (
    <nav style={{ background: 'rgba(250,250,248,0.95)', borderBottom: `1px solid ${C.border}`, padding: '0 64px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box', backdropFilter: 'blur(12px)' }}>
      <div style={{ fontFamily: C.serif, fontSize: '26px', fontWeight: '700', color: C.navy }}>Priv<span style={{ color: C.blue }}>Alt</span>X</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {subtitle && <span style={{ color: C.textTertiary, fontSize: '14px' }}>{subtitle}</span>}
        <button onClick={onBack} style={{ background: 'transparent', color: C.textSecondary, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '8px 18px', fontSize: '14px', cursor: 'pointer', fontFamily: C.sans }}>← Back</button>
      </div>
    </nav>
  );
}

function PlatformApp({ onBack }) {
  const [screen, setScreen] = useState('home');
  const [positionData, setPositionData] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);

  if (screen === 'home') return (
    <div style={S.page}><PlatformNav subtitle="Platform access" onBack={onBack} />
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
        <div style={S.tag}>Platform access</div><div style={{ ...S.divider, margin: '0 auto 32px' }}></div>
        <h1 style={{ fontFamily: C.serif, fontSize: '48px', fontWeight: '700', color: C.navy, letterSpacing: '-1.5px', marginBottom: '16px', lineHeight: '1.1' }}>How are you accessing PrivAltX?</h1>
        <p style={{ color: C.textSecondary, fontSize: '17px', marginBottom: '56px' }}>Select your role to continue</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {[{ icon: '🏦', title: 'LP Seller', desc: 'List your fund position with AI-powered pricing and 7-day settlement.', cta: 'List my position →', s: 'seller' },{ icon: '🔍', title: 'Institutional Buyer', desc: 'Browse verified LP positions for immediate acquisition at AI-priced ranges.', cta: 'Browse marketplace →', s: 'marketplace' }].map(role => (
            <div key={role.title} onClick={() => setScreen(role.s)} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '40px', cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.blue} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
              <div style={{ fontSize: '36px', marginBottom: '20px' }}>{role.icon}</div>
              <h3 style={{ fontFamily: C.serif, color: C.navy, fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>{role.title}</h3>
              <p style={{ color: C.textSecondary, fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>{role.desc}</p>
              <span style={{ color: C.blue, fontSize: '15px', fontWeight: '600' }}>{role.cta}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (screen === 'seller') return <SellerScreen onSubmit={d => { setPositionData(d); setScreen('pricing'); }} onBack={() => setScreen('home')} />;
  if (screen === 'pricing' && positionData) return <PricingScreen data={positionData} onConfirm={() => setScreen('confirmed')} onBack={() => setScreen('seller')} />;
  if (screen === 'confirmed') return (
    <div style={{ ...S.page, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '24px', color: C.green, fontWeight: '700' }}>✓</div>
      <h2 style={{ fontFamily: C.serif, color: C.navy, fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>Position listed successfully</h2>
      <p style={{ color: C.textSecondary, fontSize: '17px', marginBottom: '48px' }}>Your position is now live. Qualified buyers will be notified.</p>
      <div style={{ display: 'flex', gap: '16px' }}><button onClick={() => setScreen('home')} style={S.btnPrimary}>Return to platform</button><button onClick={onBack} style={S.btnSecondary}>Back to home</button></div>
    </div>
  );
  if (screen === 'marketplace') return <MarketplaceScreen onSelect={l => { setSelectedListing(l); setScreen('settlement'); }} onBack={() => setScreen('home')} />;
  if (screen === 'settlement' && selectedListing) return <SettlementScreen listing={selectedListing} onComplete={() => setScreen('done')} onBack={() => setScreen('marketplace')} />;
  if (screen === 'done') return (
    <div style={{ ...S.page, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: C.blueBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '24px' }}>🎉</div>
      <h2 style={{ fontFamily: C.serif, color: C.navy, fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>Transaction complete</h2>
      <p style={{ color: C.textSecondary, fontSize: '17px', marginBottom: '40px' }}>Settlement completed in 7 days vs 2–6 months traditional.</p>
      <div style={{ background: C.blueBg, border: '1px solid #C7D2FE', borderRadius: '16px', padding: '40px 64px', marginBottom: '48px' }}>
        <div style={{ fontFamily: C.serif, color: C.blue, fontSize: '64px', fontWeight: '700', marginBottom: '8px' }}>26×</div>
        <div style={{ color: C.textSecondary, fontSize: '15px' }}>faster than traditional settlement</div>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}><button onClick={() => setScreen('home')} style={S.btnPrimary}>Return to platform</button><button onClick={onBack} style={S.btnSecondary}>Back to home</button></div>
    </div>
  );
  return null;
}

function SellerScreen({ onSubmit, onBack }) {
  const [form, setForm] = useState({ fundName: '', vintageYear: '', strategy: '', geography: '', nav: '', positionSize: '', unfundedCommitment: '', remainingLife: '' });
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div style={S.page}><PlatformNav subtitle="LP Seller Portal" onBack={onBack} />
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px' }}>
        <div style={S.tag}>List your position</div><div style={S.divider}></div>
        <h1 style={{ fontFamily: C.serif, fontSize: '40px', fontWeight: '700', color: C.navy, marginBottom: '12px' }}>Fund position details</h1>
        <p style={{ color: C.textSecondary, fontSize: '16px', marginBottom: '48px' }}>Enter your position details. Our AI engine generates a fair market price range instantly.</p>
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div><label style={S.label}>Fund Name *</label><input type="text" name="fundName" value={form.fundName} onChange={set} placeholder="e.g. Blackstone Capital Partners VIII" style={S.input} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div><label style={S.label}>Vintage Year</label><select name="vintageYear" value={form.vintageYear} onChange={set} style={S.input}><option value="">Select</option>{[2016,2017,2018,2019,2020,2021,2022,2023,2024].map(y => <option key={y} value={y}>{y}</option>)}</select></div>
            <div><label style={S.label}>Strategy</label><select name="strategy" value={form.strategy} onChange={set} style={S.input}><option value="">Select</option>{['Buyout','Venture Capital','Growth Equity','Distressed','Real Estate','Infrastructure','Private Credit'].map(s => <option key={s} value={s}>{s}</option>)}</select></div>
          </div>
          <div><label style={S.label}>Geography</label><select name="geography" value={form.geography} onChange={set} style={S.input}><option value="">Select</option>{['North America','Europe','Asia Pacific','Global','Emerging Markets'].map(g => <option key={g} value={g}>{g}</option>)}</select></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div><label style={S.label}>Current NAV (USD) *</label><input type="number" name="nav" value={form.nav} onChange={set} placeholder="e.g. 5000000" style={S.input} /><div style={{ color: C.textTertiary, fontSize: '12px', marginTop: '6px' }}>Full amount in USD</div></div>
            <div><label style={S.label}>Position Size (USD) *</label><input type="number" name="positionSize" value={form.positionSize} onChange={set} placeholder="e.g. 2000000" style={S.input} /><div style={{ color: C.textTertiary, fontSize: '12px', marginTop: '6px' }}>Amount to sell</div></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div><label style={S.label}>Unfunded Commitment</label><input type="number" name="unfundedCommitment" value={form.unfundedCommitment} onChange={set} placeholder="e.g. 1000000" style={S.input} /></div>
            <div><label style={S.label}>Remaining Life</label><select name="remainingLife" value={form.remainingLife} onChange={set} style={S.input}><option value="">Select</option>{[1,2,3,4,5,6,7,8].map(y => <option key={y} value={y}>{y} {y > 1 ? 'years' : 'year'}</option>)}</select></div>
          </div>
          <div style={{ background: C.blueBg, border: '1px solid #C7D2FE', borderRadius: '8px', padding: '16px' }}>
            <p style={{ color: C.textSecondary, fontSize: '13px', margin: 0 }}><span style={{ color: C.blue, fontWeight: '600' }}>Note:</span> Buyer inherits all unfunded commitment obligations upon transfer.</p>
          </div>
          <button onClick={() => { if (!form.fundName || !form.nav || !form.positionSize) { alert('Please fill Fund Name, NAV, and Position Size.'); return; } onSubmit(form); }} style={{ ...S.btnPrimary, padding: '16px', fontSize: '16px', width: '100%' }}>Get AI price suggestion →</button>
        </div>
      </div>
    </div>
  );
}

function PricingScreen({ data, onConfirm, onBack }) {
  const ps = parseFloat(data.positionSize), uf = parseFloat(data.unfundedCommitment) || 0, age = 2026 - (parseInt(data.vintageYear) || 2020);
  const jStage = age <= 3 ? 'Early Stage — J-Curve Dip' : age <= 6 ? 'Mid Stage — Recovery Phase' : 'Late Stage — Harvest Period';
  const jColor = age <= 3 ? C.red : age <= 6 ? C.amber : C.green;
  let bd = age <= 3 ? 0.72 : age <= 6 ? 0.85 : 0.91;
  if (data.strategy === 'Venture Capital') bd -= 0.05; if (data.strategy === 'Distressed') bd -= 0.08;
  if (data.geography === 'Emerging Markets') bd -= 0.03; if (uf > ps * 0.5) bd -= 0.04;
  const lo = Math.max(bd - 0.05, 0.60), hi = Math.min(bd + 0.03, 0.98), bid = ps * lo, ask = ps * hi, mid = (bid + ask) / 2;
  return (
    <div style={S.page}><PlatformNav subtitle="AI Pricing Engine" onBack={onBack} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <div style={S.tag}>AI price analysis</div><div style={S.divider}></div>
        <h1 style={{ fontFamily: C.serif, fontSize: '36px', fontWeight: '700', color: C.navy, marginBottom: '8px' }}>{data.fundName || 'Fund Position'}</h1>
        <p style={{ color: C.textSecondary, fontSize: '16px', marginBottom: '48px' }}>{data.strategy} · {data.vintageYear} Vintage · {data.geography}</p>
        <div style={{ background: C.white, border: `2px solid ${C.blue}`, borderRadius: '12px', padding: '36px', marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: C.blue, fontWeight: '600', letterSpacing: '0.04em', marginBottom: '28px' }}>SUGGESTED PRICE RANGE</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '32px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <div><div style={{ color: C.textTertiary, fontSize: '13px', marginBottom: '8px' }}>Bid (Low)</div><div style={{ fontFamily: C.serif, color: C.navy, fontSize: '40px', fontWeight: '700' }}>{formatUSD(bid)}</div><div style={{ color: C.textTertiary, fontSize: '13px' }}>{(lo*100).toFixed(1)}% of NAV</div></div>
            <div style={{ color: C.textTertiary, fontSize: '24px', marginBottom: '16px' }}>—</div>
            <div><div style={{ color: C.textTertiary, fontSize: '13px', marginBottom: '8px' }}>Ask (High)</div><div style={{ fontFamily: C.serif, color: C.blue, fontSize: '40px', fontWeight: '700' }}>{formatUSD(ask)}</div><div style={{ color: C.textTertiary, fontSize: '13px' }}>{(hi*100).toFixed(1)}% of NAV</div></div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}><div style={{ color: C.textTertiary, fontSize: '13px', marginBottom: '8px' }}>Recommended</div><div style={{ fontFamily: C.serif, color: C.green, fontSize: '36px', fontWeight: '700' }}>{formatUSD(mid)}</div></div>
          </div>
          <div style={{ background: C.borderLight, borderRadius: '4px', height: '4px', marginBottom: '8px' }}><div style={{ background: C.blue, height: '4px', borderRadius: '4px', width: (hi*100)+'%' }}></div></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: C.textTertiary, fontSize: '12px' }}>0% of NAV</span><span style={{ color: C.textTertiary, fontSize: '12px' }}>100% of NAV</span></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
          {[{ l: 'J-Curve position', v: jStage, c: jColor, s: `Fund age: ${age} years` },{ l: 'NAV discount', v: `${((1-hi)*100).toFixed(1)}% – ${((1-lo)*100).toFixed(1)}%`, c: C.navy, s: 'vs. reported NAV' },{ l: 'Total buyer exposure', v: formatUSD(ps+uf), c: C.amber, s: 'Position + unfunded' }].map((x, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '24px' }}>
              <div style={{ color: C.textTertiary, fontSize: '11px', fontWeight: '600', letterSpacing: '0.06em', marginBottom: '10px' }}>{x.l.toUpperCase()}</div>
              <div style={{ color: x.c, fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{x.v}</div>
              <div style={{ color: C.textTertiary, fontSize: '12px' }}>{x.s}</div>
            </div>
          ))}
        </div>
        <button onClick={onConfirm} style={{ ...S.btnPrimary, width: '100%', padding: '16px', fontSize: '16px', marginBottom: '12px' }}>Confirm listing at {formatUSD(mid)} →</button>
        <p style={{ color: C.textTertiary, fontSize: '13px', textAlign: 'center' }}>Price suggestions are indicative only.</p>
      </div>
    </div>
  );
}

function MarketplaceScreen({ onSelect, onBack }) {
  const [fs, setFs] = useState('All'), [fg, setFg] = useState('All');
  const filtered = LISTINGS.filter(l => (fs === 'All' || l.strategy === fs) && (fg === 'All' || l.geography === fg));
  const sel = { background: C.white, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '10px 16px', color: C.navy, fontSize: '14px', outline: 'none', cursor: 'pointer', fontFamily: C.sans };
  return (
    <div style={S.page}><PlatformNav subtitle="Institutional Buyer Portal" onBack={onBack} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 40px' }}>
        <div style={S.tag}>Secondary marketplace</div><div style={S.divider}></div>
        <h1 style={{ fontFamily: C.serif, fontSize: '40px', fontWeight: '700', color: C.navy, marginBottom: '12px' }}>Available positions</h1>
        <p style={{ color: C.textSecondary, fontSize: '16px', marginBottom: '48px' }}>Verified LP positions. KYC-cleared. GP consent pre-approved.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '36px' }}>
          {[{ v: LISTINGS.length, l: 'Live listings', c: C.navy },{ v: '$23.5M', l: 'Total value', c: C.blue },{ v: '9.2%', l: 'Avg. discount', c: C.green },{ v: '7 days', l: 'Avg. settlement', c: C.amber }].map((s, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '24px' }}>
              <div style={{ fontFamily: C.serif, color: s.c, fontSize: '28px', fontWeight: '700', marginBottom: '6px' }}>{s.v}</div>
              <div style={{ color: C.textTertiary, fontSize: '13px' }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', alignItems: 'center' }}>
          <select value={fs} onChange={e => setFs(e.target.value)} style={sel}>{['All','Buyout','Venture Capital','Growth Equity','Infrastructure'].map(s => <option key={s}>{s}</option>)}</select>
          <select value={fg} onChange={e => setFg(e.target.value)} style={sel}>{['All','North America','Europe','Asia Pacific','Global'].map(g => <option key={g}>{g}</option>)}</select>
          <span style={{ color: C.textTertiary, fontSize: '14px', marginLeft: 'auto' }}>{filtered.length} positions</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map(l => (
            <div key={l.id} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.blue} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <h3 style={{ color: C.navy, fontSize: '16px', fontWeight: '600', margin: 0 }}>{l.fundName}</h3>
                  <span style={{ background: C.blueBg, color: C.blue, fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>{l.strategy}</span>
                  <span style={{ background: C.borderLight, color: C.textTertiary, fontSize: '11px', padding: '3px 10px', borderRadius: '100px' }}>{l.geography}</span>
                </div>
                <div style={{ display: 'flex', gap: '24px', marginBottom: '8px' }}>
                  <span style={{ color: C.textTertiary, fontSize: '13px' }}>Vintage: <span style={{ color: C.textSecondary }}>{l.vintageYear}</span></span>
                  <span style={{ color: C.textTertiary, fontSize: '13px' }}>NAV: <span style={{ color: C.textSecondary }}>{formatUSD(l.nav)}</span></span>
                  <span style={{ color: C.textTertiary, fontSize: '13px' }}>Unfunded: <span style={{ color: C.amber }}>{l.unfundedCommitment > 0 ? formatUSD(l.unfundedCommitment) : 'None'}</span></span>
                  <span style={{ color: C.textTertiary, fontSize: '13px' }}>Life: <span style={{ color: C.textSecondary }}>{l.remainingLife}yr</span></span>
                </div>
                <span style={{ fontSize: '12px', fontWeight: '600', color: l.jCurveColor }}>{l.jCurve}</span>
              </div>
              <div style={{ textAlign: 'right', marginLeft: '40px', flexShrink: 0 }}>
                <div style={{ color: C.textTertiary, fontSize: '12px', marginBottom: '6px' }}>Asking price</div>
                <div style={{ fontFamily: C.serif, color: C.navy, fontSize: '26px', fontWeight: '700', marginBottom: '4px' }}>{formatUSD(l.askPrice)}</div>
                <div style={{ color: C.green, fontSize: '13px', fontWeight: '500', marginBottom: '16px' }}>{l.discountToNav}% of NAV</div>
                <button onClick={() => onSelect(l)} style={{ ...S.btnPrimary, padding: '10px 20px', fontSize: '13px' }}>Express interest →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettlementScreen({ listing, onComplete, onBack }) {
  const [step, setStep] = useState(0);
  const steps = [
    { day: 'Day 1', title: 'Interest expressed', desc: 'Expression of interest submitted. Seller notified.', detail: 'Buyer identity pre-verified via PrivAltX KYC stack.' },
    { day: 'Day 2', title: 'KYC & accreditation verified', desc: 'Automated checks completed. Buyer confirmed as Qualified Purchaser.', detail: 'Identity · Sanctions · Accreditation · Source of funds' },
    { day: 'Day 3', title: 'GP consent requested', desc: 'Digital consent request sent to GP with full buyer profile.', detail: 'No phone calls. No paper. Response tracked in real time.' },
    { day: 'Day 5', title: 'GP consent received', desc: 'General Partner has approved the transfer.', detail: 'Consent recorded on blockchain. Immutable audit trail.' },
    { day: 'Day 6', title: 'Smart contract initiated', desc: 'Escrow deployed. Funds locked. Transfer docs auto-generated.', detail: 'Funds in escrow · Legal docs generated · Fund admin notified' },
    { day: 'Day 7', title: 'Settlement complete', desc: 'Ownership transferred. Funds released. Cap table updated.', detail: 'Position transferred · Seller paid · Obligations updated' },
  ];
  return (
    <div style={S.page}><PlatformNav subtitle="Settlement flow" onBack={onBack} />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px' }}>
        <div style={S.tag}>Settlement in progress</div><div style={S.divider}></div>
        <h1 style={{ fontFamily: C.serif, fontSize: '36px', fontWeight: '700', color: C.navy, marginBottom: '8px' }}>{listing.fundName}</h1>
        <p style={{ color: C.textSecondary, fontSize: '16px', marginBottom: '36px' }}>{formatUSD(listing.askPrice)} · {listing.strategy}</p>
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '20px 28px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: C.red, fontSize: '14px' }}>Traditional: <strong>2–6 months</strong></div>
          <div style={{ color: C.textTertiary }}>vs</div>
          <div style={{ color: C.green, fontSize: '14px' }}>PrivAltX: <strong>7 days</strong></div>
          <div style={{ color: C.blue, fontSize: '17px', fontWeight: '700', fontFamily: C.serif }}>26× faster</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
          {steps.map((s, i) => {
            const done = i <= step, cur = i === step;
            return (
              <div key={i} style={{ background: cur ? C.blueBg : C.white, border: `1px solid ${cur ? '#C7D2FE' : done ? '#BBF7D0' : C.border}`, borderRadius: '10px', padding: '20px 24px', opacity: i > step ? 0.4 : 1, transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: done ? C.green : C.borderLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: '600', color: done ? '#fff' : C.textTertiary }}>{done ? '✓' : i+1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: done ? '6px' : 0 }}><span style={{ color: C.blue, fontSize: '12px', fontWeight: '600' }}>{s.day}</span><span style={{ color: done ? C.navy : C.textTertiary, fontSize: '15px', fontWeight: '600' }}>{s.title}</span></div>
                    {done && <p style={{ color: C.textSecondary, fontSize: '13px', margin: '0 0 4px' }}>{s.desc}</p>}
                    {done && <p style={{ color: C.textTertiary, fontSize: '12px', margin: 0 }}>{s.detail}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}><span style={{ color: C.textTertiary, fontSize: '13px' }}>Progress</span><span style={{ color: C.navy, fontSize: '13px', fontWeight: '600' }}>{Math.round(((step+1)/steps.length)*100)}%</span></div>
          <div style={{ background: C.borderLight, borderRadius: '4px', height: '4px' }}><div style={{ background: C.blue, height: '4px', borderRadius: '4px', width: (((step+1)/steps.length)*100)+'%', transition: 'width 0.5s' }}></div></div>
        </div>
        <button onClick={() => step < steps.length-1 ? setStep(step+1) : onComplete()} style={{ ...S.btnPrimary, width: '100%', padding: '16px', fontSize: '16px' }}>
          {step < steps.length-1 ? 'Advance to next step →' : 'Complete transaction ✓'}
        </button>
        <p style={{ color: C.textTertiary, fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>Simulated settlement flow for demonstration purposes.</p>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState('landing');
  return (<div>{view === 'landing' && <LandingPage onLaunch={() => setView('platform')} />}{view === 'platform' && <PlatformApp onBack={() => setView('landing')} />}</div>);
}