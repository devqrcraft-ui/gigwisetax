// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gig Worker Tax Calculators by Platform & State 2026 | GigWiseTax",
  description: "Free self-employment tax calculators for every gig platform in all 50 states. DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb and more. Updated for 2026.",
};

const PLATFORMS = [
  { slug: "doordash", name: "DoorDash", emoji: "🚗", searches: "400K/mo" },
  { slug: "uber", name: "Uber", emoji: "🚕", searches: "300K/mo" },
  { slug: "etsy", name: "Etsy", emoji: "🛍️", searches: "200K/mo" },
  { slug: "onlyfans", name: "OnlyFans", emoji: "⭐", searches: "150K/mo" },
  { slug: "instacart", name: "Instacart", emoji: "🛒", searches: "150K/mo" },
  { slug: "airbnb", name: "Airbnb", emoji: "🏠", searches: "120K/mo" },
  { slug: "amazon-flex", name: "Amazon Flex", emoji: "📦", searches: "80K/mo" },
  { slug: "lyft", name: "Lyft", emoji: "🚖", searches: "70K/mo" },
];

const TOP_STATES = [
  { slug: "california", name: "California", abbr: "CA", rate: "9.3%" },
  { slug: "new-york", name: "New York", abbr: "NY", rate: "6.85%" },
  { slug: "texas", name: "Texas", abbr: "TX", rate: "No Tax" },
  { slug: "florida", name: "Florida", abbr: "FL", rate: "No Tax" },
  { slug: "illinois", name: "Illinois", abbr: "IL", rate: "4.95%" },
  { slug: "washington", name: "Washington", abbr: "WA", rate: "No Tax" },
];

export default function CalculatorsIndex() {
  return (
    <div style={{ fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: "#eef0f4", minHeight: "100vh", color: "#1a1a2e" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What calculators does GigWiseTax offer?","acceptedAnswer":{"@type":"Answer","text":"GigWiseTax offers free tax calculators for DoorDash, Uber, Lyft, Instacart, Amazon Flex, Grubhub, Turo, Airbnb, Etsy, OnlyFans, and Walmart Spark — for all 50 US states plus DC."}},{"@type":"Question","name":"How accurate are the GigWiseTax calculators?","acceptedAnswer":{"@type":"Answer","text":"Calculators use 2026 IRS federal tax brackets, current standard deduction, SE tax rates, and state income tax rates from official sources. Results are estimates for planning purposes. Consult a CPA for filing."}},{"@type":"Question","name":"Do I need to create an account to use the calculators?","acceptedAnswer":{"@type":"Answer","text":"No account needed. All calculators work instantly with no sign-up. Your income data is never stored or transmitted — calculations run entirely in your browser for complete privacy."}}]}' }} />


      <header style={{ background: "#1a1a2e", position: "sticky" as const, top: 0, zIndex: 100, boxShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ fontWeight: 900, fontSize: 19, color: "#fff" }}>
              GIGWISE<span style={{ color: "#e8b84b" }}>TAX</span>
              <span style={{ color: "rgba(255,255,255,.2)", fontWeight: 300, fontSize: 14 }}>.COM</span>
            </div>
          </Link>
          <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "8px 18px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Calculator →</Link>
        </div>
      </header>

      <div style={{ background: "linear-gradient(135deg,#1e2d5a,#0d1b3e)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 20px" }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
            Gig Worker Tax Calculators — All Platforms × All States
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
            Free, no-signup tax calculators for every major gig platform in all 50 states + D.C. Pick your platform and state for an exact estimate.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px 64px" }}>
        {PLATFORMS.map(platform => (
          <div key={platform.slug} style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, overflow: "hidden", marginBottom: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
            <div style={{ background: "#1a1a2e", padding: "13px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{platform.emoji}</span>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{platform.name} Tax Calculator</span>
              </div>
              <span style={{ background: "#B22234", color: "#fff", fontSize: 11, padding: "2px 8px", borderRadius: 3, fontWeight: 700 }}>{platform.searches}</span>
            </div>
            <div style={{ padding: "14px 20px", display: "flex", gap: 10, flexWrap: "wrap" }}>
              {TOP_STATES.map(state => (
                <Link key={state.slug} href={`/${platform.slug}/${state.slug}`} style={{ background: "#f8fafc", border: "1px solid #e2e5e9", borderRadius: 4, padding: "8px 14px", textDecoration: "none", color: "#374151", fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                  {state.name}
                  <span style={{ color: state.rate === "No Tax" ? "#059669" : "#B22234", fontWeight: 700, fontSize: 11 }}>{state.rate}</span>
                </Link>
              ))}
              <Link href={`/${platform.slug}/california`} style={{ background: "#1a1a2e", color: "#e8b84b", borderRadius: 4, padding: "8px 14px", textDecoration: "none", fontSize: 13, fontWeight: 700 }}>
                All 50 States →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ background: "#1a1a2e", borderTop: "4px solid #B22234", padding: "24px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>
          © 2026 GigWiseTax.com — Independent estimation tool. Not affiliated with IRS or any government agency.
        </div>
      </footer>
    </div>
  );
}
