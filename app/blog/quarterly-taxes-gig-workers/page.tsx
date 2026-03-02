// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Pay Quarterly Taxes as a Gig Worker 2026 | GigWiseTax",
  description: "Complete guide to IRS estimated quarterly tax payments for gig workers in 2026. Who must pay, how to calculate, deadlines, and how to avoid penalties.",
  keywords: "quarterly taxes gig workers 2026, estimated tax payments 1099, how to pay quarterly taxes, IRS form 1040-ES",
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

export default function QuarterlyTaxesGigWorkers() {
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
            <span style={{ background: "#B22234", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 3, fontWeight: 800 }}>📅 Quarterly Taxes</span>
            <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}>6 min read</span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
            How to Pay Quarterly Taxes as a Gig Worker (2026)
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.7 }}>
            Step-by-step guide to IRS estimated tax payments — who must pay, how to calculate your amount, all four deadlines, and how to avoid the underpayment penalty.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px 64px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 28 }}>
        <div>
          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: "20px 24px", marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#B22234", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>⚡ Quick Answer</div>
            <p style={{ fontSize: 15, color: "#1a1a2e", lineHeight: 1.7, margin: 0 }}>
              If you expect to owe <strong>$1,000 or more</strong> in federal taxes for the year, you must make quarterly estimated payments. The four 2026 deadlines are <strong>April 15, June 16, September 15,</strong> and <strong>January 15, 2027</strong>. Pay via IRS Direct Pay — free, instant, no account required.
            </p>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Who Must Pay Quarterly Taxes?</h2>
              <p style={S.p}>The IRS requires estimated quarterly payments from anyone who:</p>
              <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
                {[
                  "Expects to owe at least $1,000 in federal tax for the year",
                  "Earns self-employment income (DoorDash, Uber, Etsy, Airbnb, etc.)",
                  "Has no employer withholding taxes from a paycheck",
                  "Has a side gig in addition to a W-2 job (if combined tax owed exceeds $1,000)",
                ].map(item => <li key={item} style={S.li}>{item}</li>)}
              </ul>
              <p style={S.p}>If you earned $600+ from any gig platform and that is your only income, you almost certainly need to pay quarterly.</p>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>2026 Quarterly Tax Deadlines</h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#1a1a2e" }}>
                      {["Quarter", "Income Period", "IRS Due Date", "Status"].map(h => (
                        <th key={h} style={{ padding: "10px 16px", color: "#fff", fontSize: 12, fontWeight: 700, textAlign: "left" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Q1 2026", "Jan 1 – Mar 31", "April 15, 2026", "⚠️ NEXT DUE", true],
                      ["Q2 2026", "Apr 1 – May 31", "June 16, 2026", "Upcoming", false],
                      ["Q3 2026", "Jun 1 – Aug 31", "Sept 15, 2026", "Upcoming", false],
                      ["Q4 2026", "Sep 1 – Dec 31", "Jan 15, 2027", "Upcoming", false],
                    ].map(([q, period, due, status, urgent]) => (
                      <tr key={q as string} style={{ borderBottom: "1px solid #f0f1f3", background: urgent ? "#fff9f9" : "#fff" }}>
                        <td style={{ padding: "12px 16px", fontWeight: 800, color: urgent ? "#B22234" : "#1a1a2e" }}>{q as string}</td>
                        <td style={{ padding: "12px 16px", fontSize: 14, color: "#6c757d" }}>{period as string}</td>
                        <td style={{ padding: "12px 16px", fontWeight: 700, color: urgent ? "#B22234" : "#1a1a2e" }}>{due as string}</td>
                        <td style={{ padding: "12px 16px" }}>
                          <span style={{ background: urgent ? "#fee2e2" : "#f0f4f8", color: urgent ? "#B22234" : "#374151", padding: "3px 10px", borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{status as string}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>How to Calculate Your Quarterly Payment</h2>
              <p style={S.p}>The simplest method for gig workers:</p>
              <ol style={{ paddingLeft: 20, marginBottom: 14 }}>
                {[
                  "Estimate your total net income for the year (after deductions like mileage).",
                  "Calculate 92.35% of that — this is your SE tax base.",
                  "Multiply by 15.3% to get your self-employment tax.",
                  "Estimate your federal income tax based on your bracket.",
                  "Add SE tax + federal income tax + state tax = total annual tax.",
                  "Divide by 4 = your quarterly payment amount.",
                ].map((step, i) => (
                  <li key={i} style={{ ...S.li, paddingLeft: 6 }}>
                    <strong style={{ color: "#B22234" }}>Step {i + 1}:</strong> {step}
                  </li>
                ))}
              </ol>
              <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#92400e" }}>💡 Shortcut:</strong>
                <span style={{ fontSize: 13, color: "#92400e" }}> Set aside 30% of every payment you receive. That covers most gig workers across all states. Use our free calculator for an exact number.</span>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>How to Actually Make the Payment</h2>
              <h3 style={S.h3}>Option 1: IRS Direct Pay (Recommended)</h3>
              <p style={S.p}>Go to <strong>irs.gov/payments</strong> → click "Make a Payment" → select "Estimated Tax" → enter your info. Free, instant, no account needed. You get a confirmation number.</p>
              <h3 style={S.h3}>Option 2: IRS2Go App</h3>
              <p style={S.p}>The official IRS mobile app lets you pay from your phone in minutes.</p>
              <h3 style={S.h3}>Option 3: Mail Form 1040-ES</h3>
              <p style={S.p}>Download Form 1040-ES from irs.gov, fill out the payment voucher, and mail a check. Allow 7–10 days for USPS delivery before the deadline.</p>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>What Happens If You Miss a Quarterly Payment?</h2>
              <p style={S.p}>The IRS charges an <strong>underpayment penalty</strong> — currently around 8% annually on the amount you should have paid. This is calculated per quarter, so missing Q1 costs more than missing Q4.</p>
              <p style={S.p}>You can avoid the penalty entirely by paying either: (a) 90% of your current year tax, or (b) 100% of last year&apos;s total tax — whichever is smaller. This is the "safe harbor" rule.</p>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#166534" }}>✓ Safe Harbor:</strong>
                <span style={{ fontSize: 13, color: "#166534" }}> If you paid 100% of last year&apos;s tax in quarterly installments this year, the IRS will not penalize you — even if you owe more when you file.</span>
              </div>
            </div>
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 6, padding: "24px 28px", textAlign: "center" }}>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Calculate Your Quarterly Payment — Free</h3>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, marginBottom: 18 }}>Pick your platform, enter your income, get your quarterly number instantly.</p>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "13px 32px", borderRadius: 4, fontSize: 15, fontWeight: 800, textDecoration: "none", display: "inline-block" }}>
              Open Free Calculator →
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: 16, position: "sticky" as const, top: 76 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#B22234", marginBottom: 6 }}>⚠️ Q1 DUE: APRIL 15</div>
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, marginBottom: 12 }}>First quarterly payment is due April 15. Calculate yours now.</p>
            <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "10px 16px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "block", textAlign: "center" }}>
              Calculate Q1 Now →
            </Link>
          </div>

          <div style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ background: "#1a1a2e", padding: "10px 16px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.55)", textTransform: "uppercase" as const, letterSpacing: "1px" }}>📖 More Guides</span>
            </div>
            {[
              { href: "/blog/doordash-taxes-2026", label: "🚗 DoorDash Tax Guide" },
              { href: "/blog/uber-tax-guide-2026", label: "🚕 Uber Tax Guide" },
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
