// @ts-nocheck
"use client";
"use client";
import { useState } from "react";

const PLATFORMS = [
  { name: "DoorDash", emoji: "🚗", searches: "400K/mo" },
  { name: "Uber", emoji: "🚕", searches: "300K/mo" },
  { name: "Etsy", emoji: "🛍️", searches: "200K/mo" },
  { name: "OnlyFans", emoji: "⭐", searches: "150K/mo", badge: "USA #1" },
  { name: "Instacart", emoji: "🛒", searches: "150K/mo" },
  { name: "Airbnb", emoji: "🏠", searches: "120K/mo" },
  { name: "Amazon Flex", emoji: "📦", searches: "80K/mo" },
  { name: "Lyft", emoji: "🚖", searches: "70K/mo" },
];

const STATES = [
  { code: "CA", name: "California", rate: 0.093 },
  { code: "NY", name: "New York", rate: 0.0685 },
  { code: "TX", name: "Texas", rate: 0 },
  { code: "FL", name: "Florida", rate: 0 },
  { code: "IL", name: "Illinois", rate: 0.0495 },
  { code: "WA", name: "Washington", rate: 0 },
  { code: "NV", name: "Nevada", rate: 0 },
  { code: "GA", name: "Georgia", rate: 0.055 },
  { code: "NC", name: "North Carolina", rate: 0.0525 },
  { code: "Other", name: "Other State", rate: 0.05 },
];

const DEADLINES = [
  { quarter: "Q1 2026", due: "April 15, 2026", days: 45, now: true },
  { quarter: "Q2 2026", due: "June 16, 2026", days: 107, now: false },
  { quarter: "Q3 2026", due: "Sept 15, 2026", days: 198, now: false },
  { quarter: "Q4 2026", due: "Jan 15, 2027", days: 320, now: false },
];

const S: Record<string, any> = {
  page: { fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: "#eef0f4", minHeight: "100vh", color: "#1a1a2e" },

  // GOVT TOP BAR
  govBar: { background: "#0d1b3e", borderBottom: "4px solid #B22234", padding: "7px 0" },
  govBarInner: { maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 },

  // HEADER
  header: { background: "#1a1a2e", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 16px rgba(0,0,0,0.4)" },
  headerInner: { maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 },

  // HERO
  hero: { background: "linear-gradient(135deg,#1e2d5a,#0d1b3e)", borderBottom: "1px solid rgba(255,255,255,0.07)" },
  heroInner: { maxWidth: 1200, margin: "0 auto", padding: "32px 20px" },

  // LAYOUT
  wrap: { maxWidth: 1200, margin: "0 auto", padding: "24px 20px 48px" },

  // CARD
  card: { background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden", marginBottom: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" },
  cardHead: { background: "#1a1a2e", padding: "13px 20px", display: "flex", alignItems: "center", gap: 10 },
  cardAccent: { width: 3, height: 18, background: "#e8b84b", borderRadius: 2, flexShrink: 0 },
  cardTitle: { color: "#fff", fontWeight: 700, fontSize: 15 },
  cardBody: { padding: 20 },

  // BRICK BUTTON — full width, rectangular
  btnRed: { background: "#B22234", color: "#fff", padding: "12px 20px", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer", textAlign: "center", width: "100%", border: "none", letterSpacing: "0.3px", display: "block" },
  btnDark: { background: "#1a1a2e", color: "#fff", padding: "12px 20px", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer", textAlign: "center", width: "100%", border: "none", letterSpacing: "0.3px", display: "block" },
  btnGreen: { background: "#0d7a40", color: "#fff", padding: "12px 20px", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer", textAlign: "center", width: "100%", border: "none", letterSpacing: "0.3px", display: "block" },
  btnBlue: { background: "#165c96", color: "#fff", padding: "12px 20px", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer", textAlign: "center", width: "100%", border: "none", letterSpacing: "0.3px", display: "block" },
  btnOutline: { background: "transparent", color: "#1a1a2e", padding: "8px 14px", borderRadius: 4, fontSize: 12, fontWeight: 600, cursor: "pointer", textAlign: "center", width: "100%", border: "1.5px solid #d8dce6", display: "block" },

  // LABEL
  label: { display: "block", fontSize: 11, fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 },

  // INPUT
  input: { width: "100%", border: "1px solid #d1d5db", borderRadius: 4, padding: "10px 12px", fontSize: 14, color: "#1a1a2e", boxSizing: "border-box", background: "#fff" },
  select: { width: "100%", border: "1px solid #d1d5db", borderRadius: 4, padding: "10px 12px", fontSize: 14, color: "#1a1a2e", background: "#fff", cursor: "pointer", boxSizing: "border-box" },
};

const css = `
*{box-sizing:border-box;margin:0;padding:0}
.btn-red:hover{background:#8b1a24!important}
.btn-dark:hover{background:#2d3a5e!important}
.btn-green:hover{background:#065c2e!important}
.btn-blue:hover{background:#0e3e6e!important}
.nav-wrap:hover .dropdown{display:block!important}
.dd-item:hover{background:#f0f4ff!important}
.platform-btn:hover{border-color:#B22234!important;background:#fff9f9!important}
.tab-item:hover{color:#1a1a2e!important}
.sidebar-row:hover{color:#B22234!important}
.footer-link:hover{color:rgba(255,255,255,.7)!important}
@media(max-width:960px){
  .main-grid{grid-template-columns:1fr!important}
  .hero-grid{grid-template-columns:1fr!important}
  .form-grid{grid-template-columns:1fr!important}
  .results-row{grid-template-columns:1fr 1fr!important}
  .q-grid{grid-template-columns:1fr 1fr!important}
  .p-grid{grid-template-columns:repeat(2,1fr)!important}
  .footer-cols{grid-template-columns:1fr 1fr!important}
  .desktop-only{display:none!important}
}
@media(max-width:540px){
  .results-row{grid-template-columns:1fr!important}
  .q-grid{grid-template-columns:1fr 1fr!important}
  .p-grid{grid-template-columns:repeat(2,1fr)!important}
  .footer-cols{grid-template-columns:1fr!important}
  .hero-title{font-size:22px!important}
}
`;

export default function App() {
  const [tab, setTab] = useState("calc");
  const [platform, setPlatform] = useState("DoorDash");
  const [income, setIncome] = useState("");
  const [stateCode, setStateCode] = useState("CA");
  const [filing, setFiling] = useState("single");
  const [result, setResult] = useState<{seTax:number,federal:number,stateTax:number,total:number,quarterly:number,rate:string}|null>(null);

  const fmt = (n: number) => "$" + Math.round(n || 0).toLocaleString("en-US");

  const calc = () => {
    const net = parseFloat(income) || 0;
    if (!net) return;
    const st = STATES.find(s => s.code === stateCode);
    const seBase = net * 0.9235;
    const seTax = seBase * 0.153;
    const taxable = net - seTax * 0.5;
    const fedRate = filing === "single" ? 0.22 : 0.12;
    const federal = taxable * fedRate;
    const stateTax = taxable * (st?.rate || 0.05);
    const total = federal + seTax + stateTax;
    setResult({ seTax, federal, stateTax, total, quarterly: total / 4, rate: ((total / net) * 100).toFixed(1) });
  };

  return (
    <>
      <style>{css}</style>
      <div style={S.page}>

        {/* ━━ GOVERNMENT TOP BAR ━━ */}
        <div style={S.govBar}>
          <div style={S.govBarInner}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>🇺🇸</span>
              <span style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>
                Independent Tax Estimation Tool for U.S. Gig Workers — Free, No Registration
              </span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ color: "rgba(255,255,255,.35)", fontSize: 11 }}>Tax Year 2026</span>
              <span style={{ background: "#B22234", color: "#fff", padding: "3px 10px", borderRadius: 3, fontSize: 11, fontWeight: 700 }}>
                ⚠️ Q1 DUE: APR 15
              </span>
            </div>
          </div>
        </div>

        {/* ━━ HEADER ━━ */}
        <header style={S.header}>
          <div style={S.headerInner}>
            {/* LOGO — no emoji, clean text */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 38, height: 38, background: "linear-gradient(135deg,#B22234,#3C3B6E)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="2" rx="1" fill="white" opacity=".9"/>
                  <rect x="2" y="9" width="16" height="2" rx="1" fill="white" opacity=".9"/>
                  <rect x="2" y="14" width="10" height="2" rx="1" fill="white" opacity=".9"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: 19, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1 }}>
                  GIGWISE<span style={{ color: "#e8b84b" }}>TAX</span>
                  <span style={{ color: "rgba(255,255,255,.2)", fontWeight: 300, fontSize: 14 }}>.COM</span>
                </div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase" }}>
                  Free · Independent · United States
                </div>
              </div>
            </div>

            {/* NAV */}
            <nav className="desktop-only" style={{ display: "flex", gap: 2 }}>
              {[
                { label: "Calculators", items: PLATFORMS.map(p => `${p.emoji} ${p.name}`) },
                { label: "Deadlines 2026", items: ["Q1 — April 15", "Q2 — June 16", "Q3 — Sept 15", "Q4 — Jan 15"] },
                { label: "By State", items: STATES.slice(0, 6).map(s => s.name) },
                { label: "Resources", items: ["Paycheck Calculator", "W-2 vs 1099", "SE Tax Guide", "Blog"] },
              ].map(item => (
                <div key={item.label} className="nav-wrap" style={{ position: "relative" }}>
                  <div style={{ padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.65)", borderRadius: 4, whiteSpace: "nowrap" }}>
                    {item.label} <span style={{ fontSize: 9, opacity: .5 }}>▾</span>
                  </div>
                  <div className="dropdown" style={{ display: "none", position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #e2e5e9", borderRadius: 6, minWidth: 190, zIndex: 200, boxShadow: "0 10px 32px rgba(0,0,0,.15)", overflow: "hidden" }}>
                    <div style={{ background: "#1a1a2e", padding: "7px 14px", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</div>
                    {item.items.map(sub => (
                      <div key={sub} className="dd-item" style={{ padding: "9px 14px", fontSize: 13, color: "#374151", cursor: "pointer", borderBottom: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between" }}>
                        {sub}<span style={{ color: "#ccc" }}>›</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            <div className="desktop-only" style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>🔒 No data stored</span>
              <div className="btn-red" style={{ ...S.btnRed, width: "auto", padding: "8px 18px", fontSize: 13 }}>
                Calculate Now →
              </div>
            </div>
          </div>
        </header>

        {/* ━━ HERO ━━ */}
        <div style={S.hero}>
          <div style={S.heroInner}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 4, height: 36, background: "#B22234", borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
              <h1 className="hero-title" style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.2 }}>
                Free Gig Worker Tax Calculator — United States 2026
              </h1>
            </div>
            <p style={{ color: "rgba(255,255,255,.55)", fontSize: 14, lineHeight: 1.8, textAlign: "justify", paddingLeft: 16, maxWidth: 760, marginBottom: 18 }}>
              Estimate self-employment taxes for DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb and more. Includes federal SE tax (15.3%), state income tax for all 51 jurisdictions, and a full quarterly payment schedule with Google Calendar export. No signup, no app, no fees — ever.
            </p>
            <div style={{ paddingLeft: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["📋 IRS Schedule SE Formula", "🗺️ All 51 States", "🔒 No Registration", "📅 Updated Jan 2026", "📆 Google Calendar Export"].map(b => (
                <span key={b} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 3, padding: "4px 10px", fontSize: 11, color: "rgba(255,255,255,.55)", fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ━━ SPONSORED STRIP ━━ */}
        <div style={{ background: "#fffbeb", borderBottom: "1px solid #fde68a" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "9px 20px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: "#b45309", letterSpacing: "1px", textTransform: "uppercase", whiteSpace: "nowrap" }}>Sponsored</span>
            <span style={{ fontSize: 13, color: "#78350f", flex: 1 }}>
              <strong>TurboTax Self-Employed</strong> — File your 1099 taxes online. Finds every deduction. Built for gig workers.
            </span>
            <div className="btn-red" style={{ ...S.btnRed, width: "auto", padding: "7px 18px", fontSize: 12 }}>Start Free →</div>
          </div>
        </div>

        {/* ━━ MAIN GRID ━━ */}
        <div className="main-grid" style={{ ...S.wrap, display: "grid", gridTemplateColumns: "1fr 300px", gap: 24 }}>

          {/* ── LEFT ── */}
          <div>

            {/* TABS */}
            <div style={{ display: "flex", borderBottom: "2px solid #d8dce6", marginBottom: 20 }}>
              {[
                { id: "calc", label: "🧮 Tax Calculator" },
                { id: "deadlines", label: "📅 2026 Deadlines" },
                { id: "platforms", label: "🚀 All Platforms" },
              ].map(t => (
                <div key={t.id} className="tab-item" onClick={() => setTab(t.id)} style={{ padding: "10px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", color: tab === t.id ? "#1a1a2e" : "#9ca3af", borderBottom: tab === t.id ? "2px solid #B22234" : "2px solid transparent", marginBottom: -2, transition: "all .15s", whiteSpace: "nowrap" }}>
                  {t.label}
                </div>
              ))}
            </div>

            {/* ═══ TAB: CALCULATOR ═══ */}
            {tab === "calc" && (
              <>
                {/* FORM CARD */}
                <div style={S.card}>
                  <div style={S.cardHead}>
                    <div style={S.cardAccent} />
                    <span style={S.cardTitle}>📊 Self-Employment Tax Estimator</span>
                    <span style={{ marginLeft: "auto", background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.45)", fontSize: 11, padding: "3px 9px", borderRadius: 3 }}>IRS Schedule SE</span>
                  </div>
                  <div style={S.cardBody}>
                    <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
                      <div>
                        <label style={S.label}>🚗 Gig Platform</label>
                        <select style={S.select} value={platform} onChange={e => setPlatform(e.target.value)}>
                          {PLATFORMS.map(p => <option key={p.name} value={p.name}>{p.emoji} {p.name}{p.badge ? " — USA #1" : ""}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={S.label}>🗺️ State of Residence</label>
                        <select style={S.select} value={stateCode} onChange={e => setStateCode(e.target.value)}>
                          {STATES.map(s => <option key={s.code} value={s.code}>{s.name} {s.rate === 0 ? "(No State Tax)" : `(${(s.rate * 100).toFixed(1)}%)`}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={S.label}>💵 Annual Net Income (USD)</label>
                        <div style={{ position: "relative" }}>
                          <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#6b7280", fontWeight: 700 }}>$</span>
                          <input style={{ ...S.input, paddingLeft: 24 }} type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="45,000" />
                        </div>
                      </div>
                      <div>
                        <label style={S.label}>📋 Filing Status</label>
                        <select style={S.select} value={filing} onChange={e => setFiling(e.target.value)}>
                          <option value="single">Single</option>
                          <option value="married">Married Filing Jointly</option>
                          <option value="hoh">Head of Household</option>
                        </select>
                      </div>
                    </div>
                    {/* BRICK BUTTON */}
                    <div className="btn-dark" style={S.btnDark} onClick={calc}>📊 Calculate My Tax Estimate</div>
                  </div>
                </div>

                {/* RESULTS CARD */}
                {result && (
                  <div style={S.card}>
                    <div style={S.cardHead}>
                      <div style={S.cardAccent} />
                      <span style={S.cardTitle}>📈 Your Tax Estimate</span>
                    </div>

                    {/* 4 RESULT BOXES IN 1 ROW */}
                    <div className="results-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid #e2e5e9" }}>
                      {[
                        { label: "SE Tax (15.3%)", val: fmt(result.seTax), sub: "Schedule SE" },
                        { label: "Federal Tax", val: fmt(result.federal), sub: "Estimated" },
                        { label: `${stateCode} State Tax`, val: fmt(result.stateTax), sub: "Estimated" },
                        { label: "Total Annual Tax", val: fmt(result.total), sub: `${result.rate}% effective`, hi: true },
                      ].map((r, i) => (
                        <div key={r.label} style={{ padding: "18px 14px", borderRight: i < 3 ? "1px solid #e2e5e9" : "none", background: r.hi ? "#fff5f5" : "#f8fafc", borderLeft: r.hi ? "4px solid #B22234" : "none" }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 8, lineHeight: 1.4 }}>{r.label}</div>
                          <div style={{ fontSize: 22, fontWeight: 900, color: r.hi ? "#B22234" : "#1a1a2e", marginBottom: 4 }}>{r.val}</div>
                          <div style={{ fontSize: 11, color: "#9ca3af" }}>{r.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* QUARTERLY — 4 BOXES IN 1 ROW */}
                    <div style={{ padding: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>📆 Quarterly Payment Schedule</span>
                        <div className="btn-red" style={{ ...S.btnRed, width: "auto", padding: "7px 14px", fontSize: 12 }}>+ Add All to Google Calendar</div>
                      </div>
                      <div className="q-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                        {DEADLINES.map((d, i) => (
                          <div key={d.quarter} style={{ border: i === 0 ? "2px solid #B22234" : "1px solid #e2e5e9", borderRadius: 6, padding: 14, background: i === 0 ? "#fff5f5" : "#fff", position: "relative" }}>
                            {i === 0 && <div style={{ position: "absolute", top: -10, left: 8, background: "#B22234", color: "#fff", fontSize: 9, padding: "2px 6px", borderRadius: 3, fontWeight: 800 }}>⚠️ NEXT</div>}
                            <div style={{ fontSize: 12, fontWeight: 800, color: "#1a1a2e", marginBottom: 3 }}>{d.quarter}</div>
                            <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8 }}>{d.due}</div>
                            <div style={{ fontSize: 20, fontWeight: 900, color: i === 0 ? "#B22234" : "#1a1a2e", marginBottom: 10 }}>{fmt(result.quarterly)}</div>
                            {/* BRICK BUTTON INSIDE CARD */}
                            <div className="btn-dark" style={{ ...S.btnDark, padding: "7px 0", fontSize: 11 }}>+ Calendar</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 14, background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 4, padding: "10px 14px", fontSize: 12, color: "#92400e", textAlign: "justify", lineHeight: 1.6 }}>
                        ⚠️ <strong>Disclaimer:</strong> Estimates for planning purposes only. Consult a licensed CPA or visit IRS.gov for official guidance. Results are not tax advice.
                      </div>
                    </div>
                  </div>
                )}

                {/* PLATFORM GRID — 4 per row */}
                <div style={S.card}>
                  <div style={S.cardHead}>
                    <div style={S.cardAccent} />
                    <span style={S.cardTitle}>🚀 Select Your Platform</span>
                    <span style={{ marginLeft: "auto", fontSize: 12, color: "rgba(255,255,255,.35)" }}>51-state tax included for all</span>
                  </div>
                  <div style={{ padding: 16 }}>
                    <div className="p-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                      {PLATFORMS.map(p => (
                        <div key={p.name} className="platform-btn" onClick={() => setPlatform(p.name)} style={{ border: platform === p.name ? "2px solid #B22234" : "1px solid #e2e5e9", borderRadius: 6, padding: "14px 8px", textAlign: "center", cursor: "pointer", background: platform === p.name ? "#fff5f5" : "#fff", transition: "all .18s", position: "relative" }}>
                          {p.badge && <div style={{ position: "absolute", top: 5, right: 5, background: "#1a1a2e", color: "#e8b84b", fontSize: 8, padding: "1px 4px", borderRadius: 2, fontWeight: 800 }}>USA #1</div>}
                          <div style={{ fontSize: 26, marginBottom: 6 }}>{p.emoji}</div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a2e", marginBottom: 2 }}>{p.name}</div>
                          <div style={{ fontSize: 11, color: "#B22234", fontWeight: 600 }}>{p.searches}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* COMPARE TABLE */}
                <div style={S.card}>
                  <div style={{ padding: "13px 20px", borderBottom: "1px solid #e2e5e9", display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 3, height: 18, background: "#B22234", borderRadius: 2 }} />
                    <span style={{ fontWeight: 700, fontSize: 15 }}>🏆 How We Compare to Competitors</span>
                  </div>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                      <thead>
                        <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e5e9" }}>
                          {["Feature", "GigWiseTax ✓", "FlyFin", "Everlance", "TurboTax Blog"].map((h, i) => (
                            <th key={h} style={{ padding: "10px 14px", fontWeight: 700, fontSize: 12, color: i === 1 ? "#1a1a2e" : "#6c757d", textAlign: i === 0 ? "left" : "center", background: i === 1 ? "#fff5f5" : "transparent", borderBottom: i === 1 ? "3px solid #B22234" : "none" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["🆓 Free to use", true, false, false, true],
                          ["🔓 No registration required", true, false, false, true],
                          ["🗺️ All 51 states included", true, false, false, false],
                          ["⭐ OnlyFans tax calculator", true, false, false, false],
                          ["📆 Google Calendar export", true, false, false, false],
                          ["🧮 Interactive tool (not article)", true, false, false, false],
                          ["📱 No app download required", true, false, false, true],
                        ].map(([feat, ...vals]) => (
                          <tr key={feat} style={{ borderBottom: "1px solid #f0f1f3" }}>
                            <td style={{ padding: "10px 14px", fontSize: 13, color: "#374151", fontWeight: 500 }}>{feat}</td>
                            {vals.map((v, i) => (
                              <td key={i} style={{ padding: "10px 14px", textAlign: "center", background: i === 0 ? "#fff9f9" : "transparent" }}>
                                <span style={{ fontSize: 15, fontWeight: 800, color: v ? "#059669" : "#d1d5db" }}>{v ? "✓" : "✗"}</span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* ═══ TAB: DEADLINES ═══ */}
            {tab === "deadlines" && (
              <div style={S.card}>
                <div style={S.cardHead}>
                  <div style={S.cardAccent} />
                  <span style={S.cardTitle}>📅 2026 IRS Estimated Tax Deadlines</span>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                    <thead>
                      <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e5e9" }}>
                        {["Quarter", "IRS Due Date", "Days Left", "Action"].map(h => (
                          <th key={h} style={{ padding: "11px 18px", fontSize: 11, fontWeight: 700, color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.8px", textAlign: "left" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {DEADLINES.map((d, i) => (
                        <tr key={d.quarter} style={{ borderBottom: "1px solid #f0f1f3", background: i === 0 ? "#fff9f9" : "#fff" }}>
                          <td style={{ padding: "16px 18px", fontWeight: 800, fontSize: 15 }}>
                            {i === 0 && <span style={{ background: "#B22234", color: "#fff", fontSize: 9, padding: "2px 5px", borderRadius: 2, marginRight: 8, fontWeight: 800 }}>NOW</span>}
                            {d.quarter}
                          </td>
                          <td style={{ padding: "16px 18px", fontWeight: 700, color: i === 0 ? "#B22234" : "#1a1a2e", fontSize: 15 }}>{d.due}</td>
                          <td style={{ padding: "16px 18px" }}>
                            <span style={{ background: i === 0 ? "#fee2e2" : "#f0f4f8", color: i === 0 ? "#B22234" : "#374151", padding: "4px 12px", borderRadius: 12, fontSize: 12, fontWeight: 700 }}>
                              {d.days} days
                            </span>
                          </td>
                          <td style={{ padding: "16px 18px", width: 160 }}>
                            <div className="btn-dark" style={{ ...S.btnDark, fontSize: 12, padding: "8px 0" }}>📆 + Add to Calendar</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ═══ TAB: PLATFORMS ═══ */}
            {tab === "platforms" && (
              <div style={S.card}>
                <div style={S.cardHead}>
                  <div style={S.cardAccent} />
                  <span style={S.cardTitle}>🚀 All Supported Platforms</span>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                    <thead>
                      <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e5e9" }}>
                        {["Platform", "Monthly Searches", "SE Tax Rate", "State Tax", "Competition"].map(h => (
                          <th key={h} style={{ padding: "11px 16px", fontSize: 11, fontWeight: 700, color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.8px", textAlign: "left" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {PLATFORMS.map((p, i) => (
                        <tr key={p.name} style={{ borderBottom: "1px solid #f0f1f3", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                          <td style={{ padding: "13px 16px", fontWeight: 700, fontSize: 14 }}>
                            <span style={{ fontSize: 20, marginRight: 10 }}>{p.emoji}</span>
                            {p.name}
                            {p.badge && <span style={{ background: "#1a1a2e", color: "#e8b84b", fontSize: 9, padding: "2px 5px", borderRadius: 2, marginLeft: 8, fontWeight: 800 }}>USA #1</span>}
                          </td>
                          <td style={{ padding: "13px 16px", fontWeight: 700, color: "#1a1a2e" }}>{p.searches}</td>
                          <td style={{ padding: "13px 16px", color: "#374151" }}>15.3%</td>
                          <td style={{ padding: "13px 16px", color: "#059669", fontWeight: 600 }}>Included ✓</td>
                          <td style={{ padding: "13px 16px" }}>
                            <span style={{ background: "#dcfce7", color: "#166534", padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 700 }}>Low ✓</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* AD PLACEHOLDER 1 */}
            <div style={{ background: "#fff", border: "2px dashed #d8dce6", borderRadius: 6, overflow: "hidden" }}>
              <div style={{ background: "#f8fafc", padding: "6px 14px", borderBottom: "1px solid #e2e5e9", fontSize: 10, fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px" }}>
                Sponsored — 300×250
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ background: "#f0f4f8", borderRadius: 4, height: 80, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: "#9ca3af", fontStyle: "italic" }}>Ad image / logo here</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>📊 QuickBooks Self-Employed</div>
                <div style={{ fontSize: 13, color: "#374151", marginBottom: 14, lineHeight: 1.6, textAlign: "justify" }}>
                  Track mileage, expenses, and quarterly taxes automatically. Built for gig workers and 1099 contractors.
                </div>
                {/* BRICK BUTTON FULL WIDTH */}
                <div className="btn-green" style={S.btnGreen}>✓ Try Free for 30 Days</div>
                <div style={{ fontSize: 10, color: "#c4c9d4", marginTop: 6, textAlign: "center" }}>Affiliate — commission may apply</div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden" }}>
              <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase", letterSpacing: "1px" }}>📌 Popular Calculators</span>
              </div>
              {PLATFORMS.map(p => (
                <div key={p.name} className="sidebar-row" onClick={() => { setPlatform(p.name); setTab("calc"); }} style={{ padding: "10px 16px", borderBottom: "1px solid #f0f1f3", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: "#374151", transition: "color .15s" }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{p.emoji} {p.name} Tax Calculator</span>
                  <span style={{ fontSize: 11, color: "#B22234", fontWeight: 700 }}>{p.searches}</span>
                </div>
              ))}
            </div>

            {/* AD PLACEHOLDER 2 */}
            <div style={{ background: "#fff", border: "2px dashed #d8dce6", borderRadius: 6, overflow: "hidden" }}>
              <div style={{ background: "#f8fafc", padding: "6px 14px", borderBottom: "1px solid #e2e5e9", fontSize: 10, fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px" }}>
                Sponsored — 300×200
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ background: "#f0f4f8", borderRadius: 4, height: 60, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: "#9ca3af", fontStyle: "italic" }}>Ad image / logo here</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>🏛️ H&R Block — Tax Filing</div>
                <div style={{ fontSize: 13, color: "#374151", marginBottom: 14, lineHeight: 1.6, textAlign: "justify" }}>
                  File your 1099-NEC and Schedule C online. Expert review available. Starting at $0 for simple returns.
                </div>
                {/* BRICK BUTTON FULL WIDTH */}
                <div className="btn-blue" style={S.btnBlue}>🏛️ File Now — Start Free</div>
              </div>
            </div>

            {/* TRUST */}
            <div style={{ background: "#f8fafc", border: "1px solid #d8dce6", borderRadius: 6, padding: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6c757d", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>🔒 About This Tool</div>
              <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.7, textAlign: "justify" }}>
                GigWiseTax.com is an independent estimation tool. Not affiliated with the IRS or any government agency. No personal data is stored. Results are estimates only — not tax advice.
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                {["Privacy", "Terms", "Contact"].map(l => (
                  <span key={l} style={{ fontSize: 11, color: "#6c757d", cursor: "pointer", textDecoration: "underline" }}>{l}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ━━ FOOTER ━━ */}
        <footer style={{ background: "#1a1a2e", borderTop: "4px solid #B22234" }}>
          <div className="footer-cols" style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 28 }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: 18, color: "#fff", letterSpacing: "-0.3px", marginBottom: 10 }}>
                GIGWISE<span style={{ color: "#e8b84b" }}>TAX</span><span style={{ color: "rgba(255,255,255,.2)", fontWeight: 300, fontSize: 13 }}>.COM</span>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.8, marginBottom: 14, textAlign: "justify" }}>
                Free self-employment tax calculators for gig workers across all 50 states and D.C. Covers DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb, Amazon Flex, and Lyft. Updated for tax year 2026.
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["🔒 No Data Stored", "🆓 Free Forever", "🇺🇸 USA Only"].map(b => (
                  <span key={b} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 3, padding: "3px 8px", fontSize: 11, color: "rgba(255,255,255,.35)", fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>
            {[
              { title: "🧮 Calculators", links: PLATFORMS.map(p => `${p.emoji} ${p.name}`) },
              { title: "📅 Deadlines", links: ["Q1 — April 15", "Q2 — June 16", "Q3 — Sept 15", "Q4 — Jan 15", "By State"] },
              { title: "🔧 Tools", links: ["💵 Paycheck Calc", "📋 W-2 vs 1099", "📚 SE Tax Guide", "✍️ Blog", "❓ FAQ"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>{col.title}</div>
                {col.links.map(l => (
                  <div key={l} className="footer-link" style={{ fontSize: 13, color: "rgba(255,255,255,.28)", marginBottom: 8, cursor: "pointer", transition: "color .15s" }}>{l}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.18)" }}>© 2026 GigWiseTax.com — Independent estimation tool. Not affiliated with IRS or any government agency.</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>🇺🇸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,.18)" }}>Made for U.S. Gig Workers</span>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
