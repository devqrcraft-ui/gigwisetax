// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uber Driver Tax Guide 2026 — Complete Tax Guide | GigWiseTax",
  description: "Complete 2026 tax guide for Uber and Uber Eats drivers. SE tax, federal & state taxes, mileage deduction, quarterly payments. Free calculator included.",
  keywords: "uber driver taxes 2026, uber tax calculator, uber 1099, how much taxes uber driver, uber quarterly taxes",
  openGraph: {
    title: "Uber Driver Tax Guide 2026 — Everything You Need to Know",
    description: "SE tax, federal income tax, state taxes, and every deduction available to Uber drivers in 2026.",
    url: "https://www.gigwisetax.com/blog/uber-tax-guide-2026",
  },
};

const S = {
  page: { fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: "#eef0f4", minHeight: "100vh", color: "#1a1a2e" },
  govBar: { background: "#0d1b3e", borderBottom: "4px solid #B22234", padding: "7px 0" },
  header: { background: "#1a1a2e", position: "sticky" as const, top: 0, zIndex: 100, boxShadow: "0 2px 16px rgba(0,0,0,0.4)" },
  card: { background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden", marginBottom: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" },
  h2: { fontSize: 22, fontWeight: 800, color: "#1a1a2e", margin: "0 0 14px", lineHeight: 1.3 },
  h3: { fontSize: 17, fontWeight: 700, color: "#1a1a2e", margin: "20px 0 10px" },
  p: { fontSize: 15, color: "#374151", lineHeight: 1.8, marginBottom: 14 },
  li: { fontSize: 15, color: "#374151", lineHeight: 1.8, marginBottom: 6 },
};

export default function UberTaxGuide2026() {
  return (
    <div style={S.page}>
      <div style={S.govBar}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}>🇺🇸</span>
          <span style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>Independent Tax Estimation Tool for U.S. Gig Workers — Free, No Registration</span>
        </div>
      </div>

      <header style={S.header}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ fontWeight: 900, fontSize: 19, color: "#fff" }}>
              GIGWISE<span style={{ color: "#e8b84b" }}>TAX</span>
              <span style={{ color: "rgba(255,255,255,.2)", fontWeight: 300, fontSize: 14 }}>.COM</span>
            </div>
          </Link>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href="/blog" style={{ color: "rgba(255,255,255,.5)", fontSize: 13, textDecoration: "none", padding: "8px 14px" }}>← Blog</Link>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "8px 18px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Calculator →</Link>
          </div>
        </div>
      </header>

      <div style={{ background: "linear-gradient(135deg,#1e2d5a,#0d1b3e)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 20px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            <span style={{ background: "#B22234", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 3, fontWeight: 800 }}>🚕 Uber</span>
            <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}>7 min read</span>
            <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}>Updated Jan 2026</span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
            Uber Driver Tax Guide 2026 — Everything You Need to Know
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.7 }}>
            SE tax, federal income tax, state taxes, mileage deduction, and every write-off available to Uber and Uber Eats drivers in 2026.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px 64px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 28 }}>
        <div>
          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: "20px 24px", marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#B22234", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>⚡ Quick Answer</div>
            <p style={{ fontSize: 15, color: "#1a1a2e", lineHeight: 1.7, margin: 0 }}>
              Uber drivers pay <strong>15.3% self-employment tax</strong> plus federal and state income tax. Most drivers owe <strong>25–35%</strong> total. Uber does not withhold any taxes — you must pay quarterly estimates. The mileage deduction (67¢/mile in 2026) is your biggest money-saver.
            </p>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>How Does Uber Report Your Income?</h2>
              <p style={S.p}>Uber classifies all drivers as independent contractors. In January, Uber sends a <strong>1099-K</strong> (if you processed $5,000+ in payments) or a <strong>1099-NEC</strong> for other income like bonuses and referrals.</p>
              <p style={S.p}>Important: the 1099-K from Uber reflects gross fares — before Uber's service fees. You report your actual net earnings (after Uber's cut) as income on Schedule C.</p>
              <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#92400e" }}>💡 Note:</strong>
                <span style={{ fontSize: 13, color: "#92400e" }}> Uber's service fee (typically 25–30%) is NOT your income. Use your driver app's annual tax summary to find your actual net earnings.</span>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Uber Driver Tax Breakdown 2026</h2>
              <h3 style={S.h3}>Self-Employment Tax — 15.3%</h3>
              <p style={S.p}>Applies to 92.35% of your net profit. On $50,000 net: SE tax ≈ <strong>$7,065</strong>. You can deduct half of this on your 1040 (above-the-line deduction).</p>
              <h3 style={S.h3}>Federal Income Tax</h3>
              <p style={S.p}>After the standard deduction ($14,600 for single filers in 2026) and SE deduction, most Uber drivers fall in the 12% or 22% bracket.</p>
              <h3 style={S.h3}>State Tax</h3>
              <p style={S.p}>Ranges from 0% (Texas, Florida, Nevada) to 13.3% (California top rate). Most drivers pay 3–9% depending on state and income.</p>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Top Tax Deductions for Uber Drivers</h2>
              <h3 style={S.h3}>🚗 Mileage — The Biggest Deduction</h3>
              <p style={S.p}>Track miles from when you go online to when you go offline — not just during trips. The 2026 IRS rate is <strong>67 cents per mile</strong>. A driver logging 25,000 miles saves <strong>$16,750</strong> in taxable income.</p>
              <h3 style={S.h3}>Other Write-Offs</h3>
              <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
                {[
                  "Phone and data plan (business-use percentage)",
                  "Phone mount, chargers, car accessories for passengers",
                  "Water bottles and mints provided to riders",
                  "Car washes and detailing (business use)",
                  "Parking and tolls while on trips",
                  "Portion of car insurance (business-use %)",
                  "Tax software or CPA fees",
                ].map(item => (
                  <li key={item} style={S.li}>{item}</li>
                ))}
              </ul>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#166534" }}>✓ Mileage vs. Actual:</strong>
                <span style={{ fontSize: 13, color: "#166534" }}> You can choose between the standard mileage rate OR actual car expenses (gas, insurance, depreciation). Choose whichever gives you the larger deduction — usually mileage wins for most drivers.</span>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Quarterly Tax Schedule for Uber Drivers</h2>
              <p style={S.p}>If you expect to owe $1,000+ in federal taxes, make quarterly payments to avoid a penalty. Pay via <strong>IRS Direct Pay</strong> (free at irs.gov).</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginTop: 16 }}>
                {[
                  { q: "Q1", due: "April 15, 2026", urgent: true },
                  { q: "Q2", due: "June 16, 2026", urgent: false },
                  { q: "Q3", due: "Sept 15, 2026", urgent: false },
                  { q: "Q4", due: "Jan 15, 2027", urgent: false },
                ].map(d => (
                  <div key={d.q} style={{ border: d.urgent ? "2px solid #B22234" : "1px solid #e2e5e9", borderRadius: 6, padding: "14px 16px", background: d.urgent ? "#fff5f5" : "#fff" }}>
                    <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{d.q} 2026</div>
                    <div style={{ fontWeight: 700, color: d.urgent ? "#B22234" : "#1a1a2e" }}>{d.due}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 6, padding: "24px 28px", textAlign: "center" }}>
            <div style={{ fontSize: 24, marginBottom: 10 }}>🧮</div>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Calculate Your Uber Tax Estimate — Free</h3>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, marginBottom: 18 }}>Includes all 51 states and quarterly payment schedule. No signup.</p>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "13px 32px", borderRadius: 4, fontSize: 15, fontWeight: 800, textDecoration: "none", display: "inline-block" }}>
              Open Free Calculator →
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden", position: "sticky" as const, top: 76 }}>
            <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase" as const, letterSpacing: "1px" }}>📌 In This Guide</span>
            </div>
            {["How Uber Reports Your Income", "Tax Breakdown 2026", "Top Tax Deductions", "Quarterly Tax Schedule"].map((item, i) => (
              <div key={item} style={{ padding: "10px 16px", borderBottom: "1px solid #f0f1f3", fontSize: 13, color: "#374151" }}>
                <span style={{ color: "#B22234", fontWeight: 700, marginRight: 8 }}>{i + 1}.</span>{item}
              </div>
            ))}
          </div>

          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#B22234", marginBottom: 10 }}>⚠️ Q1 DUE: APRIL 15</div>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "10px 16px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "block", textAlign: "center" }}>
              Calculate Q1 Payment →
            </Link>
          </div>

          <div style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase" as const, letterSpacing: "1px" }}>📖 More Guides</span>
            </div>
            {[
              { href: "/blog/doordash-taxes-2026", label: "🚗 DoorDash Tax Guide 2026" },
              { href: "/blog/quarterly-taxes-gig-workers", label: "📅 Quarterly Taxes Guide" },
              { href: "/blog/onlyfans-tax-guide-2026", label: "⭐ OnlyFans Tax Guide" },
              { href: "/blog/etsy-seller-taxes-2026", label: "🛍️ Etsy Seller Tax Guide" },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ padding: "10px 16px", borderBottom: "1px solid #f0f1f3", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", color: "#374151", fontSize: 13 }}>
                {item.label}<span style={{ color: "#B22234" }}>›</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ background: "#1a1a2e", borderTop: "4px solid #B22234", padding: "24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>
          © 2026 GigWiseTax.com — Independent estimation tool. Not affiliated with IRS or any government agency.
        </div>
      </footer>
    </div>
  );
}
