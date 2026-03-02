// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etsy Seller Taxes 2026 — Complete Guide for Shop Owners | GigWiseTax",
  description: "How Etsy reports your income to the IRS, what you can deduct as an Etsy seller, self-employment tax, quarterly payments, and state taxes. Updated for 2026.",
  keywords: "etsy seller taxes 2026, etsy tax calculator, etsy 1099, how much taxes etsy seller, etsy self employment tax",
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

export default function EtsySellerTaxes2026() {
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
            <span style={{ background: "#B22234", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 3, fontWeight: 800 }}>🛍️ Etsy</span>
            <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}>6 min read</span>
            <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.5)", fontSize: 11, padding: "3px 10px", borderRadius: 3 }}>Updated Jan 2026</span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
            Etsy Seller Taxes 2026 — Full Guide for Shop Owners
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.7 }}>
            How Etsy reports your income, what you can deduct, self-employment tax, quarterly payments, and sales tax explained simply.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px 64px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 28 }}>
        <div>
          <div style={{ background: "#fff9f9", border: "2px solid #B22234", borderRadius: 6, padding: "20px 24px", marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#B22234", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>⚡ Quick Answer</div>
            <p style={{ fontSize: 15, color: "#1a1a2e", lineHeight: 1.7, margin: 0 }}>
              Etsy sellers owe <strong>15.3% self-employment tax</strong> plus federal and state income tax on net profit. Etsy sends a <strong>1099-K</strong> if you process $5,000+ in sales. You report profit (revenue minus expenses) on Schedule C. Set aside <strong>25–35%</strong> of net earnings and pay quarterly to avoid penalties.
            </p>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>How Does Etsy Report Your Income?</h2>
              <p style={S.p}>Etsy is a payment processor, so it issues a <strong>1099-K</strong> for sellers who exceed $5,000 in gross sales processed through Etsy Payments in a calendar year. Below that threshold, Etsy does not send a 1099 — but you are still required to report all income.</p>
              <p style={S.p}>Important: the 1099-K shows your <strong>gross sales</strong> — before Etsy fees, shipping costs, and returns. You do not pay tax on gross sales. You pay tax on <strong>net profit</strong> (sales minus all business expenses).</p>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>What Can Etsy Sellers Deduct?</h2>
              <p style={S.p}>Every dollar you deduct reduces your taxable profit. Here are the most common write-offs for Etsy sellers:</p>
              <h3 style={S.h3}>Direct Cost of Goods</h3>
              <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
                {["Raw materials and supplies", "Packaging, boxes, tape, and labels", "Printing costs for digital products", "Wholesale inventory purchases"].map(i => <li key={i} style={S.li}>{i}</li>)}
              </ul>
              <h3 style={S.h3}>Etsy Fees</h3>
              <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
                {["Etsy listing fees ($0.20 per item)", "Etsy transaction fees (6.5%)", "Etsy Payments processing fees", "Etsy Ads and offsite ads charges"].map(i => <li key={i} style={S.li}>{i}</li>)}
              </ul>
              <h3 style={S.h3}>Business Operating Expenses</h3>
              <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
                {["Home office (dedicated workspace)", "Camera and equipment for product photos", "Editing software subscriptions", "Shipping costs not reimbursed by buyers", "Postage and shipping supplies", "Phone and internet (business %)", "Business bank account fees"].map(i => <li key={i} style={S.li}>{i}</li>)}
              </ul>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Etsy Sales Tax — Handled for You</h2>
              <p style={S.p}>Good news: Etsy automatically collects and remits sales tax on your behalf in most U.S. states under <strong>marketplace facilitator laws</strong>. You do not need to collect or remit sales tax yourself for those states.</p>
              <p style={S.p}>Sales tax collected by Etsy is not your income — it flows through your account but does not appear on your 1099-K as taxable revenue.</p>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 4, padding: "12px 16px" }}>
                <strong style={{ fontSize: 13, color: "#166534" }}>✓ Note:</strong>
                <span style={{ fontSize: 13, color: "#166534" }}> If you sell outside Etsy (your own website, craft fairs), you are responsible for collecting and remitting sales tax in those transactions yourself.</span>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={{ padding: "18px 24px 22px" }}>
              <h2 style={S.h2}>Hobby vs. Business — Important Distinction</h2>
              <p style={S.p}>The IRS distinguishes between a hobby and a business. If you run your Etsy shop like a business (profit motive, regular activity, keeping records), you can deduct losses against other income. If the IRS classifies you as a hobby, you can only deduct expenses up to your income — no loss deductions.</p>
              <p style={S.p}>Tip: if you are profitable 3 of the last 5 years, the IRS presumes you are running a business.</p>
            </div>
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 6, padding: "24px 28px", textAlign: "center" }}>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Calculate Your Etsy Tax Estimate — Free</h3>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, marginBottom: 18 }}>Enter your net Etsy income and get your full tax breakdown including quarterly payments.</p>
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
              { href: "/blog/onlyfans-tax-guide-2026", label: "⭐ OnlyFans Tax Guide" },
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
