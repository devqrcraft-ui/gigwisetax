// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OnlyFans Taxes 2026: How to File as a Creator | GigWiseTax",
  description: "OnlyFans tax guide 2026. Self-employment tax, Schedule C deductions, quarterly payments, privacy, and state taxes for OnlyFans creators. Free calculator.",
  keywords: "onlyfans taxes 2026, onlyfans tax calculator, how to file onlyfans taxes, onlyfans 1099, onlyfans self employment tax",
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

export default function OnlyFansTaxGuide2026() {
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
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            <span style={{ background: "#B22234", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 3, fontWeight: 800 }}>⭐ OnlyFans</span>
            <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}>7 min read</span>
            <span style={{ background: "#1a1a2e", color: "#e8b84b", fontSize: 11, padding: "3px 10px", borderRadius: 3, fontWeight: 800 }}>USA #1 Guide</span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
            OnlyFans Taxes 2026: How to File as a Creator
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.7 }}>
            Self-employment tax, Schedule C deductions, quarterly payments, privacy tips, and state taxes for OnlyFans creators. No judgment — just clear numbers.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px 64px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 28 }}>
        <div>
          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: "20px 24px", marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#B22234", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>⚡ Quick Answer</div>
            <p style={{ fontSize: 15, color: "#1a1a2e", lineHeight: 1.7, margin: 0 }}>
              OnlyFans creators are self-employed and owe <strong>15.3% SE tax</strong> plus federal and state income tax — typically <strong>25–40% total</strong> depending on income and state. OnlyFans sends a <strong>1099-NEC</strong> if you earned $600+. Set aside 30–35% of every payout immediately.
            </p>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Does OnlyFans Report Your Income to the IRS?</h2>
              <p style={S.p}>Yes. OnlyFans issues a <strong>1099-NEC</strong> to any creator who earns $600 or more in a calendar year. A copy also goes directly to the IRS. Even if you earn less than $600, you are still legally required to report all income.</p>
              <p style={S.p}>OnlyFans classifies all creators as independent contractors. They do not withhold any taxes from your payouts.</p>
              <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#92400e" }}>🔒 Privacy Note:</strong>
                <span style={{ fontSize: 13, color: "#92400e" }}> Your Schedule C lists your business as "content creation" or "social media creator" — you do not need to mention OnlyFans by name on your tax return.</span>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>How Much Tax Do OnlyFans Creators Pay?</h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#1a1a2e" }}>
                      {["Annual Income", "SE Tax", "Federal Tax", "Total (No State)", "Total (CA)"].map(h => (
                        <th key={h} style={{ padding: "10px 14px", color: "#fff", fontSize: 12, fontWeight: 700, textAlign: "left" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["$30,000", "$4,239", "$1,800", "~$6,039 (20%)", "~$8,900 (30%)"],
                      ["$60,000", "$8,478", "$7,200", "~$15,678 (26%)", "~$21,200 (35%)"],
                      ["$100,000", "$14,130", "$15,400", "~$29,530 (30%)", "~$40,700 (41%)"],
                    ].map(([inc, se, fed, tot, ca], i) => (
                      <tr key={inc as string} style={{ borderBottom: "1px solid #f0f1f3", background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                        <td style={{ padding: "10px 14px", fontWeight: 700 }}>{inc as string}</td>
                        <td style={{ padding: "10px 14px" }}>{se as string}</td>
                        <td style={{ padding: "10px 14px" }}>{fed as string}</td>
                        <td style={{ padding: "10px 14px" }}>{tot as string}</td>
                        <td style={{ padding: "10px 14px", fontWeight: 800, color: "#B22234" }}>{ca as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>OnlyFans Tax Deductions — What You Can Write Off</h2>
              <p style={S.p}>As a self-employed creator, all ordinary and necessary business expenses are deductible on Schedule C.</p>
              <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
                {[
                  "Camera, lighting, tripod, and other filming equipment",
                  "Ring lights, backdrops, and studio props",
                  "Costumes, clothing, and accessories used exclusively for content",
                  "Hair, makeup, and beauty products used for filming",
                  "Editing software subscriptions (Adobe, Final Cut, etc.)",
                  "Phone, internet, and streaming services (business-use %)",
                  "Home office deduction (if you have a dedicated space)",
                  "OnlyFans subscription for competitive research",
                  "Advertising and paid promotions",
                  "Tax preparation fees",
                ].map(item => <li key={item} style={S.li}>{item}</li>)}
              </ul>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#166534" }}>✓ Keep Receipts:</strong>
                <span style={{ fontSize: 13, color: "#166534" }}> The IRS may question clothing deductions if they can be worn in everyday life. Keep records showing items are used exclusively for content creation.</span>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Filing Your OnlyFans Taxes — Step by Step</h2>
              <ol style={{ paddingLeft: 20 }}>
                {[
                  "Download your 1099-NEC from OnlyFans (available in your Creator Dashboard in January).",
                  "Total all your earnings — subscriptions, tips, PPV, and custom content.",
                  "Subtract all deductible business expenses.",
                  "File Schedule C (net profit = income minus expenses).",
                  "File Schedule SE to calculate your self-employment tax.",
                  "Deduct half of SE tax on Form 1040 (line 15).",
                  "Pay any remaining balance by April 15, 2026.",
                ].map((step, i) => (
                  <li key={i} style={{ ...S.li, paddingLeft: 6 }}>
                    <strong style={{ color: "#B22234" }}>Step {i + 1}:</strong> {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 6, padding: "24px 28px", textAlign: "center" }}>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Calculate Your OnlyFans Tax — Free & Private</h3>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, marginBottom: 18 }}>No signup. No data stored. All 51 states included.</p>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "13px 32px", borderRadius: 4, fontSize: 15, fontWeight: 800, textDecoration: "none", display: "inline-block" }}>
              Open Free Calculator →
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: 16, position: "sticky" as const, top: 76 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#B22234", marginBottom: 6 }}>⚠️ Q1 DUE: APRIL 15</div>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "10px 16px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "block", textAlign: "center" }}>
              Calculate Q1 Payment →
            </Link>
          </div>
          <div style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase" as const, letterSpacing: "1px" }}>📖 More Guides</span>
            </div>
            {[
              { href: "/blog/doordash-taxes-2026", label: "🚗 DoorDash Tax Guide" },
              { href: "/blog/uber-tax-guide-2026", label: "🚕 Uber Tax Guide" },
              { href: "/blog/quarterly-taxes-gig-workers", label: "📅 Quarterly Taxes" },
              { href: "/blog/etsy-seller-taxes-2026", label: "🛍️ Etsy Seller Guide" },
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
