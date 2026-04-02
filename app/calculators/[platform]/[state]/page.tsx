// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const PLATFORMS = [
  { slug: "doordash", name: "DoorDash", emoji: "", searches: "400K/mo", type: "delivery" },
  { slug: "uber", name: "Uber", emoji: "", searches: "300K/mo", type: "rideshare" },
  { slug: "uber-eats", name: "Uber Eats", emoji: "", searches: "180K/mo", type: "delivery" },
  { slug: "etsy", name: "Etsy", emoji: "", searches: "200K/mo", type: "ecommerce" },
  { slug: "onlyfans", name: "OnlyFans", emoji: "", searches: "150K/mo", type: "creator" },
  { slug: "instacart", name: "Instacart", emoji: "", searches: "150K/mo", type: "delivery" },
  { slug: "airbnb", name: "Airbnb", emoji: "", searches: "120K/mo", type: "rental" },
  { slug: "amazon-flex", name: "Amazon Flex", emoji: "", searches: "80K/mo", type: "delivery" },
  { slug: "lyft", name: "Lyft", emoji: "", searches: "70K/mo", type: "rideshare" },
  { slug: "fiverr", name: "Fiverr", emoji: "", searches: "60K/mo", type: "freelance" },
  { slug: "upwork", name: "Upwork", emoji: "", searches: "55K/mo", type: "freelance" },
  { slug: "rover", name: "Rover", emoji: "", searches: "40K/mo", type: "services" },
];

const STATES = [
  { slug: "california", name: "California", abbr: "CA", rate: 0.093, hasTax: true, note: "California has a progressive income tax up to 13.3%." },
  { slug: "new-york", name: "New York", abbr: "NY", rate: 0.0685, hasTax: true, note: "New York City residents pay an additional city tax." },
  { slug: "texas", name: "Texas", abbr: "TX", rate: 0, hasTax: false, note: "Texas has no state income tax — a major advantage for gig workers." },
  { slug: "florida", name: "Florida", abbr: "FL", rate: 0, hasTax: false, note: "Florida has no state income tax." },
  { slug: "illinois", name: "Illinois", abbr: "IL", rate: 0.0495, hasTax: true, note: "Illinois has a flat 4.95% income tax rate." },
  { slug: "washington", name: "Washington", abbr: "WA", rate: 0, hasTax: false, note: "Washington has no state income tax." },
  { slug: "nevada", name: "Nevada", abbr: "NV", rate: 0, hasTax: false, note: "Nevada has no state income tax." },
  { slug: "georgia", name: "Georgia", abbr: "GA", rate: 0.055, hasTax: true, note: "Georgia has a flat 5.5% income tax rate." },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC", rate: 0.0525, hasTax: true, note: "North Carolina has a flat 5.25% income tax rate." },
  { slug: "ohio", name: "Ohio", abbr: "OH", rate: 0.04, hasTax: true, note: "Ohio has a progressive income tax up to 3.99%." },
  { slug: "arizona", name: "Arizona", abbr: "AZ", rate: 0.025, hasTax: true, note: "Arizona has a flat 2.5% income tax rate." },
  { slug: "colorado", name: "Colorado", abbr: "CO", rate: 0.044, hasTax: true, note: "Colorado has a flat 4.4% income tax rate." },
  { slug: "virginia", name: "Virginia", abbr: "VA", rate: 0.0575, hasTax: true, note: "Virginia has a progressive income tax up to 5.75%." },
  { slug: "michigan", name: "Michigan", abbr: "MI", rate: 0.0425, hasTax: true, note: "Michigan has a flat 4.25% income tax rate." },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", rate: 0.0307, hasTax: true, note: "Pennsylvania has a flat 3.07% income tax rate." },
  { slug: "minnesota", name: "Minnesota", abbr: "MN", rate: 0.0985, hasTax: true, note: "Minnesota has a progressive income tax up to 9.85%." },
  { slug: "oregon", name: "Oregon", abbr: "OR", rate: 0.099, hasTax: true, note: "Oregon has a progressive income tax up to 9.9%." },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA", rate: 0.05, hasTax: true, note: "Massachusetts has a flat 5% income tax rate." },
  { slug: "tennessee", name: "Tennessee", abbr: "TN", rate: 0, hasTax: false, note: "Tennessee has no state income tax." },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ", rate: 0.0897, hasTax: true, note: "New Jersey has a progressive income tax up to 10.75%." },
  { slug: "maryland", name: "Maryland", abbr: "MD", rate: 0.0575, hasTax: true, note: "Maryland has a progressive income tax up to 5.75% plus county tax." },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI", rate: 0.0765, hasTax: true, note: "Wisconsin has a progressive income tax up to 7.65%." },
  { slug: "missouri", name: "Missouri", abbr: "MO", rate: 0.048, hasTax: true, note: "Missouri has a progressive income tax up to 4.8%." },
  { slug: "indiana", name: "Indiana", abbr: "IN", rate: 0.0305, hasTax: true, note: "Indiana has a flat 3.05% income tax rate." },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC", rate: 0.07, hasTax: true, note: "South Carolina has a progressive income tax up to 7%." },
  { slug: "alabama", name: "Alabama", abbr: "AL", rate: 0.05, hasTax: true, note: "Alabama has a progressive income tax up to 5%." },
  { slug: "utah", name: "Utah", abbr: "UT", rate: 0.0465, hasTax: true, note: "Utah has a flat 4.65% income tax rate." },
  { slug: "kentucky", name: "Kentucky", abbr: "KY", rate: 0.045, hasTax: true, note: "Kentucky has a flat 4.5% income tax rate." },
  { slug: "louisiana", name: "Louisiana", abbr: "LA", rate: 0.06, hasTax: true, note: "Louisiana has a progressive income tax up to 6%." },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM", rate: 0.059, hasTax: true, note: "New Mexico has a progressive income tax up to 5.9%." },
  { slug: "arkansas", name: "Arkansas", abbr: "AR", rate: 0.044, hasTax: true, note: "Arkansas has a progressive income tax up to 4.4%." },
  { slug: "kansas", name: "Kansas", abbr: "KS", rate: 0.057, hasTax: true, note: "Kansas has a progressive income tax up to 5.7%." },
  { slug: "iowa", name: "Iowa", abbr: "IA", rate: 0.06, hasTax: true, note: "Iowa has a flat 6% income tax rate." },
  { slug: "connecticut", name: "Connecticut", abbr: "CT", rate: 0.0699, hasTax: true, note: "Connecticut has a progressive income tax up to 6.99%." },
  { slug: "mississippi", name: "Mississippi", abbr: "MS", rate: 0.05, hasTax: true, note: "Mississippi has a flat 5% income tax rate." },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK", rate: 0.0475, hasTax: true, note: "Oklahoma has a progressive income tax up to 4.75%." },
  { slug: "idaho", name: "Idaho", abbr: "ID", rate: 0.058, hasTax: true, note: "Idaho has a flat 5.8% income tax rate." },
  { slug: "wyoming", name: "Wyoming", abbr: "WY", rate: 0, hasTax: false, note: "Wyoming has no state income tax." },
  { slug: "alaska", name: "Alaska", abbr: "AK", rate: 0, hasTax: false, note: "Alaska has no state income tax." },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD", rate: 0, hasTax: false, note: "South Dakota has no state income tax." },
  { slug: "montana", name: "Montana", abbr: "MT", rate: 0.069, hasTax: true, note: "Montana has a progressive income tax up to 6.9%." },
  { slug: "nebraska", name: "Nebraska", abbr: "NE", rate: 0.0664, hasTax: true, note: "Nebraska has a progressive income tax up to 6.64%." },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV", rate: 0.065, hasTax: true, note: "West Virginia has a progressive income tax up to 6.5%." },
  { slug: "hawaii", name: "Hawaii", abbr: "HI", rate: 0.11, hasTax: true, note: "Hawaii has a progressive income tax up to 11% — one of the highest in the nation." },
  { slug: "maine", name: "Maine", abbr: "ME", rate: 0.0715, hasTax: true, note: "Maine has a progressive income tax up to 7.15%." },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI", rate: 0.0599, hasTax: true, note: "Rhode Island has a progressive income tax up to 5.99%." },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND", rate: 0.029, hasTax: true, note: "North Dakota has a progressive income tax up to 2.9%." },
  { slug: "vermont", name: "Vermont", abbr: "VT", rate: 0.0875, hasTax: true, note: "Vermont has a progressive income tax up to 8.75%." },
  { slug: "delaware", name: "Delaware", abbr: "DE", rate: 0.066, hasTax: true, note: "Delaware has a progressive income tax up to 6.6%." },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH", rate: 0, hasTax: false, note: "New Hampshire has no earned income tax." },
  { slug: "district-of-columbia", name: "Washington D.C.", abbr: "DC", rate: 0.0895, hasTax: true, note: "D.C. has a progressive income tax up to 8.95%." },
];

export async function generateStaticParams() {
  const params = [];
  for (const platform of PLATFORMS) {
    for (const state of STATES) {
      params.push({ platform: platform.slug, state: state.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === params.platform);
  const s = STATES.find(x => x.slug === params.state);
  if (!p || !s) return {
    alternates: { canonical: `https://www.gigwisetax.com/calculators/${params.platform}/${params.state}` },
     title: "Not Found" };

  const noTax = !s.hasTax;
  const title = `${p.name} Tax Calculator ${s.name} 2026 — ${noTax ? "No State Tax" : `${(s.rate * 100).toFixed(1)}% State Rate`} | GigWiseTax`;
  const description = `Free ${p.name} tax calculator for ${s.name} gig workers. ${noTax ? `${s.name} has no state income tax — you only pay federal SE tax (15.3%) and federal income tax.` : `Includes ${(s.rate * 100).toFixed(1)}% ${s.name} state tax + 15.3% SE tax.`} Quarterly payment schedule included.`;

  return {
    title,
    description,
    keywords: `${p.name.toLowerCase()} tax calculator ${s.name.toLowerCase()}, ${p.name.toLowerCase()} taxes ${s.abbr} 2026, gig worker taxes ${s.name.toLowerCase()}`,
    openGraph: { title, description, url: `https://www.gigwisetax.com/calculators/${params.platform}/${params.state}` },
  };
}

function calcTax(income: number, stateRate: number, filing: string) {
  const seBase = income * 0.9235;
  const seTax = seBase * 0.153;
  const taxable = income - seTax * 0.5;
  const fedRate = filing === "single" ? (taxable < 47000 ? 0.12 : 0.22) : 0.12;
  const federal = Math.max(0, taxable - (filing === "single" ? 14600 : 29200)) * fedRate;
  const stateTax = taxable * stateRate;
  const total = federal + seTax + stateTax;
  return { seTax, federal, stateTax, total, quarterly: total / 4, rate: ((total / income) * 100).toFixed(1) };
}

const fmt = (n: number) => "$" + Math.round(n || 0).toLocaleString("en-US");

export default function CalculatorPage({ params }) {
  const p = PLATFORMS.find(x => x.slug === params.platform);
  const s = STATES.find(x => x.slug === params.state);
  if (!p || !s) notFound();

  const examples = [30000, 50000, 75000, 100000];

  const S = {
    page: { fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: "#07111F", minHeight: "100vh", color: "rgba(255,255,255,0.9)" },
    card: { background: "#0d1b3e", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden" as const, marginBottom: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" },
    h2: { fontSize: 20, fontWeight: 800, color: "rgba(255,255,255,0.9)", margin: "0 0 14px", lineHeight: 1.3 },
    p: { fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 14 },
  };

  return (
    <div style={S.page}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I calculate gig worker taxes?","acceptedAnswer":{"@type":"Answer","text":"Enter your gross earnings, select your platform and state. The calculator applies self-employment tax (15.3%), federal income tax brackets, standard deduction, and your state tax rate to show your exact tax owed and take-home pay."}},{"@type":"Question","name":"What is self-employment tax for gig workers in 2026?","acceptedAnswer":{"@type":"Answer","text":"Self-employment tax is 15.3% on net earnings up to $176,100 (12.4% Social Security + 2.9% Medicare). Above that threshold, only the 2.9% Medicare portion applies. You can deduct half of SE tax on your return."}},{"@type":"Question","name":"How often do gig workers pay taxes?","acceptedAnswer":{"@type":"Answer","text":"Gig workers who expect to owe $1,000 or more must pay quarterly estimated taxes. 2026 due dates: April 15, June 16, September 15, and January 15, 2027. Underpayment results in IRS penalties."}}]}' }} />
      {/* GOV BAR */}
      <div style={{ background: "#0d1b3e", borderBottom: "4px solid #B22234", padding: "7px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}></span>
          <span style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>Independent Tax Estimation Tool for U.S. Gig Workers — Free, No Registration</span>
        </div>
      </div>

      {/* HEADER */}
      <header style={{ background: "#1a1a2e", position: "sticky" as const, top: 0, zIndex: 100, boxShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ fontWeight: 900, fontSize: 19, color: "rgba(255,255,255,0.9)" }}>
              GIGWISE<span style={{ color: "#e8b84b" }}>TAX</span>
              <span style={{ color: "rgba(255,255,255,.82)", fontWeight: 300, fontSize: 14 }}>.COM</span>
            </div>
          </Link>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href="/calculators" style={{ color: "rgba(255,255,255,.5)", fontSize: 13, textDecoration: "none", padding: "8px 14px" }}>← All Calculators</Link>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "8px 18px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Calculator →</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg,#1e2d5a,#0d1b3e)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 20px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            <span style={{ background: "#B22234", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 3, fontWeight: 800 }}>{p.name}</span>
            <span style={{ background: '#0d2340', color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}> {s.name}</span>
            {!s.hasTax && <span style={{ background: "#0d7a40", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 3, fontWeight: 800 }}>✓ No State Tax</span>}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
            {p.name} Tax Calculator — {s.name} 2026
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
            {s.hasTax
              ? `Free ${p.name} self-employment tax calculator for ${s.name} workers. Includes 15.3% federal SE tax, ${(s.rate * 100).toFixed(1)}% ${s.name} state income tax, and quarterly payment schedule.`
              : `Free ${p.name} self-employment tax calculator for ${s.name} workers. ${s.name} has no state income tax — you only pay 15.3% SE tax and federal income tax. Great news for Dashers!`}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 20px 64px", display: "grid", gridTemplateColumns: "1fr 280px", gap: 24 }} className="blog-grid">
        <div>
          {/* STATE TAX INFO */}
          <div style={{ ...S.card, borderLeft: s.hasTax ? "4px solid #B22234" : "4px solid #0d7a40" }}>
            <div style={{ padding: "18px 22px" }}>
              <h2 style={S.h2}> {s.name} State Tax for {p.name} Workers</h2>
              <p style={S.p}>{s.note}</p>
              <p style={S.p}>
                {s.hasTax
                  ? `As a ${p.name} driver in ${s.name}, you pay the standard 15.3% federal self-employment tax PLUS ${(s.rate * 100).toFixed(1)}% state income tax on your net profit. This means your total effective tax rate is typically between ${(15.3 + s.rate * 100 * 0.5).toFixed(0)}–${(15.3 + s.rate * 100 + 10).toFixed(0)}% depending on your total income.`
                  : `${s.name} is one of the best states to be a ${p.name} driver from a tax perspective. Without state income tax, your only major tax obligations are the 15.3% federal self-employment tax and federal income tax. This typically saves ${s.name} gig workers $1,500–$5,000 per year compared to high-tax states.`}
              </p>
            </div>
          </div>

          {/* TAX TABLE */}
          <div style={S.card}>
            <div style={{ background: "#1a1a2e", padding: "13px 20px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 3, height: 18, background: "#e8b84b", borderRadius: 2 }} />
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}> {p.name} Tax Estimates — {s.name} 2026</span>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.05)", borderBottom: "2px solid rgba(255,255,255,0.15)" }}>
                    {["Annual Income", "SE Tax (15.3%)", "Federal Tax", s.hasTax ? `${s.abbr} State Tax` : "State Tax", "Total Tax", "Quarterly", "Rate"].map(h => (
                      <th key={h} style={{ padding: "10px 14px", fontSize: 11, fontWeight: 700, color: "#8fa8c8", textTransform: "uppercase" as const, letterSpacing: "0.7px", textAlign: "left" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {examples.map((income, i) => {
                    const t = calcTax(income, s.rate, "single");
                    return (
                      <tr key={income} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)" }}>
                        <td style={{ padding: "12px 14px", fontWeight: 800, fontSize: 15 }}>{fmt(income)}</td>
                        <td style={{ padding: "12px 14px", fontSize: 14 }}>{fmt(t.seTax)}</td>
                        <td style={{ padding: "12px 14px", fontSize: 14 }}>{fmt(t.federal)}</td>
                        <td style={{ padding: "12px 14px", fontSize: 14, color: !s.hasTax ? "#059669" : "rgba(255,255,255,0.75)" }}>{!s.hasTax ? "$0 ✓" : fmt(t.stateTax)}</td>
                        <td style={{ padding: "12px 14px", fontWeight: 800, color: "#B22234", fontSize: 15 }}>{fmt(t.total)}</td>
                        <td style={{ padding: "12px 14px", fontWeight: 700, fontSize: 14 }}>{fmt(t.quarterly)}</td>
                        <td style={{ padding: "12px 14px" }}>
                          <span style={{ background: "rgba(178,34,52,0.2)", color: "#B22234", padding: "3px 8px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.rate}%</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div style={{ padding: "8px 14px", fontSize: 11, color: "#7a9abf" }}>*Single filer estimates. Actual tax may vary based on deductions.</div>
            </div>
          </div>

          {/* DEDUCTIONS */}
          <div style={S.card}>
            <div style={{ padding: "18px 22px" }}>
              <h2 style={S.h2}> Top Deductions for {p.name} Workers in {s.name}</h2>
              <p style={S.p}>Reducing your taxable income is your most powerful tool. Every dollar deducted saves you {s.hasTax ? `${(15.3 + s.rate * 100).toFixed(0)}¢` : "~25¢"} in taxes.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { title: " Mileage", val: "67¢/mile (2026 IRS rate)", desc: "Track every mile for " + p.name },
                  { title: " Phone & Data", val: "Business % deductible", desc: "App usage qualifies" },
                  { title: " Home Office", val: "Dedicated space only", desc: "For remote gig workers" },
                  { title: " Half of SE Tax", val: "7.65% deduction", desc: "Above-the-line deduction" },
                ].map(d => (
                  <div key={d.title} style={{ background: '#0a1e35', border: '1px solid #1e3a5a', borderRadius: 6, padding: "14px 16px" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{d.title}</div>
                    <div style={{ fontSize: 13, color: "#B22234", fontWeight: 600, marginBottom: 4 }}>{d.val}</div>
                    <div style={{ fontSize: 12, color: "#7a9abf" }}>{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QUARTERLY */}
          <div style={S.card}>
            <div style={{ padding: "18px 22px" }}>
              <h2 style={S.h2}> 2026 Quarterly Tax Deadlines</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
                {[
                  { q: "Q1", due: "April 15, 2026", urgent: true },
                  { q: "Q2", due: "June 16, 2026", urgent: false },
                  { q: "Q3", due: "Sept 15, 2026", urgent: false },
                  { q: "Q4", due: "Jan 15, 2027", urgent: false },
                ].map(d => (
                  <div key={d.q} style={{ border: d.urgent ? "2px solid #B22234" : "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "14px 16px", background: d.urgent ? "rgba(178,34,52,0.12)" : "rgba(255,255,255,0.03)" }}>
                    <div style={{ fontWeight: 800, marginBottom: 4 }}>{d.q} 2026</div>
                    <div style={{ fontWeight: 700, color: d.urgent ? "#B22234" : "#1a1a2e" }}>{d.due}</div>
                    {d.urgent && <div style={{ fontSize: 11, color: "#B22234", marginTop: 4, fontWeight: 700 }}> NEXT DUE</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 6, padding: "24px 28px", textAlign: "center" }}>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>
              Calculate Your Exact {p.name} Tax in {s.name}
            </h3>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, marginBottom: 18 }}>Enter your income and get your exact quarterly payment amount. Free, no signup.</p>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "13px 32px", borderRadius: 4, fontSize: 15, fontWeight: 800, textDecoration: "none", display: "inline-block" }}>
              Open Free Calculator →
            </Link>
          </div>
        </div>

        {/* SIDEBAR */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* STATE INFO */}
          <div style={{ background: s.hasTax ? "rgba(178,34,52,0.1)" : "rgba(5,150,105,0.1)", border: `2px solid ${s.hasTax ? "#B22234" : "#0d7a40"}`, borderRadius: 6, padding: 16, position: "sticky" as const, top: 76 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: s.hasTax ? "#B22234" : "#0d7a40", marginBottom: 8 }}>
               {s.name} ({s.abbr})
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "rgba(255,255,255,0.9)", marginBottom: 4 }}>
              {s.hasTax ? `${(s.rate * 100).toFixed(1)}%` : "0%"}
            </div>
            <div style={{ fontSize: 12, color: "#8fa8c8", marginBottom: 12 }}>State income tax rate</div>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "10px 16px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "block", textAlign: "center" }}>
              Calculate Now →
            </Link>
          </div>

          {/* OTHER STATES */}
          <div style={{ background: "#0d1b3e", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase" as const, letterSpacing: "1px" }}> {p.name} in Other States</span>
            </div>
            {STATES.slice(0, 8).filter(st => st.slug !== s.slug).slice(0, 7).map(st => (
              <Link key={st.slug} href={`/calculators/${p.slug}/${st.slug}`} style={{ padding: "9px 14px", borderBottom: '1px solid rgba(255,255,255,0.07)', display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", color: 'rgba(255,255,255,0.85)', fontSize: 13 }}>
                <span>{st.name}</span>
                <span style={{ color: st.hasTax ? "#B22234" : "#059669", fontWeight: 700, fontSize: 12 }}>{st.hasTax ? `${(st.rate * 100).toFixed(1)}%` : "No Tax"}</span>
              </Link>
            ))}
          </div>

          {/* OTHER PLATFORMS */}
          <div style={{ background: "#0d1b3e", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase" as const, letterSpacing: "1px" }}> Other Platforms in {s.name}</span>
            </div>
            {PLATFORMS.filter(pl => pl.slug !== p.slug).slice(0, 6).map(pl => (
              <Link key={pl.slug} href={`/calculators/${pl.slug}/${s.slug}`} style={{ padding: "9px 14px", borderBottom: '1px solid rgba(255,255,255,0.07)', display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", color: 'rgba(255,255,255,0.85)', fontSize: 13 }}>
                <span>{pl.emoji} {pl.name}</span>
                <span style={{ color: "#B22234" }}>›</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#1a1a2e", borderTop: "4px solid #B22234", padding: "24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>
          © 2026 GigWiseTax.com — Independent estimation tool. Not affiliated with IRS or any government agency.
        </div>
      </footer>
    </div>
  );
}
