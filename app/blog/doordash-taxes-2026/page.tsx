// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DoorDash Taxes 2026: Complete Guide for Dashers | GigWiseTax",
  description: "How much to set aside for DoorDash taxes in 2026. SE tax (15.3%), quarterly deadlines, mileage deductions, Schedule C walkthrough. Free calculator included.",
  keywords: "doordash taxes 2026, doordash tax calculator, how much taxes doordash, doordash 1099, doordash quarterly taxes",
  openGraph: {
    title: "DoorDash Taxes 2026: Complete Guide for Dashers",
    description: "How much to set aside, quarterly deadlines, mileage deductions, and Schedule C walkthrough for DoorDash drivers.",
    url: "https://www.gigwisetax.com/blog/doordash-taxes-2026",
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

export default function DoorDashTaxes2026() {
  return (
    <div style={S.page}>
      {/* GOV BAR */}
      <div style={S.govBar}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}>🇺🇸</span>
          <span style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>Independent Tax Estimation Tool for U.S. Gig Workers — Free, No Registration</span>
        </div>
      </div>

      {/* HEADER */}
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

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg,#1e2d5a,#0d1b3e)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 20px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            <span style={{ background: "#B22234", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 3, fontWeight: 800 }}>🚗 DoorDash</span>
            <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}>8 min read</span>
            <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}>Updated Jan 2026</span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
            DoorDash Taxes 2026: Complete Guide for Dashers
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.7 }}>
            How much to set aside, quarterly deadlines, mileage deductions, and a full Schedule C walkthrough for DoorDash drivers.
          </p>
        </div>
      </div>

      {/* CONTENT + SIDEBAR */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px 64px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 28 }}>

        {/* MAIN CONTENT */}
        <div>

          {/* QUICK ANSWER BOX */}
          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: "20px 24px", marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#B22234", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>⚡ Quick Answer</div>
            <p style={{ fontSize: 15, color: "#1a1a2e", lineHeight: 1.7, margin: 0 }}>
              As a DoorDash driver, expect to pay <strong>25–35% of your net earnings</strong> in taxes. This includes 15.3% self-employment tax plus federal and state income tax. Set aside at least <strong>30%</strong> of every payment and make quarterly estimated payments to avoid an IRS penalty.
            </p>
          </div>

          {/* SECTION 1 */}
          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Does DoorDash Take Out Taxes?</h2>
              <p style={S.p}>No — DoorDash does not withhold any taxes. You are an independent contractor (1099-NEC), not a W-2 employee. That means 100% of your tax responsibility falls on you.</p>
              <p style={S.p}>DoorDash will send you a <strong>1099-NEC form</strong> in January if you earned $600 or more during the year. You report this on Schedule C of your federal return.</p>
              <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#92400e" }}>💡 Tip:</strong>
                <span style={{ fontSize: 13, color: "#92400e" }}> Even if you earned less than $600, you are still legally required to report all income to the IRS.</span>
              </div>
            </div>
          </div>

          {/* SECTION 2 */}
          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>How Much Are DoorDash Taxes in 2026?</h2>
              <p style={S.p}>Your total tax bill has three parts:</p>

              <h3 style={S.h3}>1. Self-Employment Tax (SE Tax) — 15.3%</h3>
              <p style={S.p}>This covers Social Security (12.4%) and Medicare (2.9%). It applies to 92.35% of your net earnings. Example: on $40,000 net income, your SE tax is approximately <strong>$5,652</strong>.</p>
              <p style={S.p}>The good news: you can deduct half of SE tax from your adjusted gross income.</p>

              <h3 style={S.h3}>2. Federal Income Tax — 10–24%</h3>
              <p style={S.p}>Depends on your total income and filing status. Most Dashers earning $30,000–$60,000 fall in the 12–22% federal bracket after the standard deduction.</p>

              <h3 style={S.h3}>3. State Income Tax — 0–13%</h3>
              <p style={S.p}>Texas, Florida, Nevada, and Washington have zero state income tax. California tops the list at 9.3%+ for most Dashers.</p>

              {/* TAX BREAKDOWN TABLE */}
              <div style={{ overflowX: "auto", marginTop: 16 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 400 }}>
                  <thead>
                    <tr style={{ background: "#1a1a2e" }}>
                      {["Annual Income", "SE Tax", "Federal Tax", "CA State Tax", "Total (CA)"].map(h => (
                        <th key={h} style={{ padding: "10px 14px", color: "#fff", fontSize: 12, fontWeight: 700, textAlign: "left" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["$20,000", "$2,826", "$1,200", "$745", "~$4,771 (24%)"],
                      ["$40,000", "$5,652", "$4,400", "$2,110", "~$12,162 (30%)"],
                      ["$60,000", "$8,478", "$8,800", "$3,780", "~$21,058 (35%)"],
                      ["$80,000", "$11,304", "$13,600", "$5,580", "~$30,484 (38%)"],
                    ].map(([income, se, fed, state, total], i) => (
                      <tr key={income} style={{ borderBottom: "1px solid #f0f1f3", background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                        <td style={{ padding: "10px 14px", fontWeight: 700, fontSize: 14 }}>{income}</td>
                        <td style={{ padding: "10px 14px", fontSize: 14 }}>{se}</td>
                        <td style={{ padding: "10px 14px", fontSize: 14 }}>{fed}</td>
                        <td style={{ padding: "10px 14px", fontSize: 14 }}>{state}</td>
                        <td style={{ padding: "10px 14px", fontWeight: 800, color: "#B22234", fontSize: 14 }}>{total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 6 }}>*Estimates only. Assumes single filer, no additional deductions applied.</div>
              </div>
            </div>
          </div>

          {/* SECTION 3 */}
          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>DoorDash Tax Deductions — Reduce Your Bill</h2>
              <p style={S.p}>As a self-employed driver, you can deduct business expenses on Schedule C. These deductions reduce your taxable income dollar-for-dollar.</p>

              <h3 style={S.h3}>🚗 Mileage Deduction (Most Valuable)</h3>
              <p style={S.p}>The IRS standard mileage rate for 2026 is <strong>67 cents per mile</strong>. Track every mile you drive for DoorDash — from the moment you accept an order to the moment you drop it off. A Dasher driving 20,000 miles saves <strong>$13,400</strong> in taxable income.</p>

              <h3 style={S.h3}>📱 Phone & Data Plan</h3>
              <p style={S.p}>The percentage of your phone use that is business-related is deductible. Most Dashers claim 50–80% of their monthly phone bill.</p>

              <h3 style={S.h3}>🌡️ Other Deductible Expenses</h3>
              <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
                {[
                  "Hot bags, insulated carriers, and delivery gear",
                  "Parking fees and tolls (while on delivery)",
                  "Car washes related to the vehicle used for delivery",
                  "Portion of health insurance premiums (if self-employed)",
                  "Tax preparation software or CPA fees",
                ].map(item => (
                  <li key={item} style={S.li}>{item}</li>
                ))}
              </ul>

              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#166534" }}>✓ Pro Tip:</strong>
                <span style={{ fontSize: 13, color: "#166534" }}> Use a mileage tracking app like MileIQ or Everlance. The IRS requires a mileage log — screenshots of your earnings are not enough.</span>
              </div>
            </div>
          </div>

          {/* SECTION 4 */}
          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>2026 Quarterly Tax Deadlines for Dashers</h2>
              <p style={S.p}>If you expect to owe $1,000 or more in taxes, the IRS requires quarterly estimated payments. Missing these results in a penalty of ~8% annually on the underpaid amount.</p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginTop: 16 }}>
                {[
                  { q: "Q1 2026", due: "April 15, 2026", income: "Jan 1 – Mar 31", urgent: true },
                  { q: "Q2 2026", due: "June 16, 2026", income: "Apr 1 – May 31", urgent: false },
                  { q: "Q3 2026", due: "Sept 15, 2026", income: "Jun 1 – Aug 31", urgent: false },
                  { q: "Q4 2026", due: "Jan 15, 2027", income: "Sep 1 – Dec 31", urgent: false },
                ].map(d => (
                  <div key={d.q} style={{ border: d.urgent ? "2px solid #B22234" : "1px solid #e2e5e9", borderRadius: 6, padding: "14px 16px", background: d.urgent ? "#fff5f5" : "#fff", position: "relative" }}>
                    {d.urgent && <div style={{ position: "absolute", top: -10, left: 10, background: "#B22234", color: "#fff", fontSize: 9, padding: "2px 6px", borderRadius: 3, fontWeight: 800 }}>⚠️ NEXT DUE</div>}
                    <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{d.q}</div>
                    <div style={{ fontWeight: 700, color: d.urgent ? "#B22234" : "#1a1a2e", fontSize: 14, marginBottom: 4 }}>{d.due}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>Income: {d.income}</div>
                  </div>
                ))}
              </div>
              <p style={{ ...S.p, marginTop: 16 }}>Pay via <strong>IRS Direct Pay</strong> at irs.gov/payments — free, instant, no account needed.</p>
            </div>
          </div>

          {/* SECTION 5 */}
          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>How to File DoorDash Taxes — Step by Step</h2>
              <ol style={{ paddingLeft: 20 }}>
                {[
                  { step: "Gather your 1099-NEC from DoorDash (available in the Dasher portal by late January)." },
                  { step: "Total all your DoorDash income for the year — include tips and bonuses." },
                  { step: "Add up all deductible business expenses (mileage is usually the biggest)." },
                  { step: "File Schedule C (Profit or Loss from Business) with your Form 1040." },
                  { step: "File Schedule SE to calculate your self-employment tax." },
                  { step: "Pay any balance due by April 15, 2026." },
                ].map(({ step }, i) => (
                  <li key={i} style={{ ...S.li, paddingLeft: 6 }}>
                    <strong style={{ color: "#B22234" }}>Step {i + 1}:</strong> {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 6, padding: "24px 28px", textAlign: "center" }}>
            <div style={{ fontSize: 24, marginBottom: 10 }}>🧮</div>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Calculate Your Exact DoorDash Tax Estimate</h3>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, marginBottom: 18 }}>Free, no signup. Includes all 51 states and quarterly payment schedule.</p>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "13px 32px", borderRadius: 4, fontSize: 15, fontWeight: 800, textDecoration: "none", display: "inline-block" }}>
              Open Free Calculator →
            </Link>
          </div>
        </div>

        {/* SIDEBAR */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden", position: "sticky" as const, top: 76 }}>
            <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase" as const, letterSpacing: "1px" }}>📌 In This Guide</span>
            </div>
            {[
              "Does DoorDash Take Out Taxes?",
              "How Much Are DoorDash Taxes?",
              "DoorDash Tax Deductions",
              "Quarterly Tax Deadlines",
              "How to File Step by Step",
            ].map((item, i) => (
              <div key={item} style={{ padding: "10px 16px", borderBottom: "1px solid #f0f1f3", fontSize: 13, color: "#374151" }}>
                <span style={{ color: "#B22234", fontWeight: 700, marginRight: 8 }}>{i + 1}.</span>{item}
              </div>
            ))}
          </div>

          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#B22234", marginBottom: 10 }}>⚠️ Q1 DUE: APRIL 15</div>
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, marginBottom: 12 }}>Q1 estimated taxes are due April 15. Don&apos;t miss it — 8% penalty applies.</p>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "10px 16px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "block", textAlign: "center" }}>
              Calculate Q1 Payment →
            </Link>
          </div>

          <div style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase" as const, letterSpacing: "1px" }}>📖 More Guides</span>
            </div>
            {[
              { href: "/blog/uber-tax-guide-2026", label: "🚕 Uber Tax Guide 2026" },
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

      {/* FOOTER */}
      <footer style={{ background: "#1a1a2e", borderTop: "4px solid #B22234", padding: "24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>
          © 2026 GigWiseTax.com — Independent estimation tool. Not affiliated with IRS or any government agency.
        </div>
      </footer>
    </div>
  );
}
