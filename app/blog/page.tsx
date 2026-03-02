// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gig Worker Tax Blog 2026 — GigWiseTax",
  description: "Free guides on self-employment taxes for DoorDash, Uber, Etsy, OnlyFans, Instacart and more gig workers in the USA. Updated for 2026.",
};

const POSTS = [
  {
    slug: "doordash-taxes-2026",
    title: "DoorDash Taxes 2026: Complete Guide for Dashers",
    desc: "How much to set aside, quarterly deadlines, mileage deductions, and Schedule C walkthrough for DoorDash drivers.",
    tag: "DoorDash",
    emoji: "🚗",
    reads: "8 min read",
    searches: "400K/mo",
  },
  {
    slug: "uber-tax-guide-2026",
    title: "Uber Driver Tax Guide 2026 — Everything You Need to Know",
    desc: "SE tax, federal income tax, state taxes, and every deduction available to Uber and Uber Eats drivers in 2026.",
    tag: "Uber",
    emoji: "🚕",
    reads: "7 min read",
    searches: "300K/mo",
  },
  {
    slug: "quarterly-taxes-gig-workers",
    title: "How to Pay Quarterly Taxes as a Gig Worker (2026)",
    desc: "Step-by-step guide to IRS estimated tax payments — who must pay, how to calculate, and how to avoid penalties.",
    tag: "Quarterly",
    emoji: "📅",
    reads: "6 min read",
    searches: "250K/mo",
  },
  {
    slug: "onlyfans-tax-guide-2026",
    title: "OnlyFans Taxes 2026: How to File as a Creator",
    desc: "Self-employment tax, Schedule C deductions, quarterly payments, and state taxes for OnlyFans creators.",
    tag: "OnlyFans",
    emoji: "⭐",
    reads: "7 min read",
    searches: "150K/mo",
  },
  {
    slug: "etsy-seller-taxes-2026",
    title: "Etsy Seller Taxes 2026 — Full Guide for Shop Owners",
    desc: "How Etsy reports your income, what you can deduct, and how to pay self-employment tax as an Etsy seller.",
    tag: "Etsy",
    emoji: "🛍️",
    reads: "6 min read",
    searches: "200K/mo",
  },
];

const S = {
  page: { fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: "#eef0f4", minHeight: "100vh", color: "#1a1a2e" },
  govBar: { background: "#0d1b3e", borderBottom: "4px solid #B22234", padding: "7px 0" },
  header: { background: "#1a1a2e", position: "sticky" as const, top: 0, zIndex: 100, boxShadow: "0 2px 16px rgba(0,0,0,0.4)" },
};

export default function BlogIndex() {
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
            <div style={{ fontWeight: 900, fontSize: 19, color: "#fff", letterSpacing: "-0.5px" }}>
              GIGWISE<span style={{ color: "#e8b84b" }}>TAX</span>
              <span style={{ color: "rgba(255,255,255,.2)", fontWeight: 300, fontSize: 14 }}>.COM</span>
            </div>
          </Link>
          <Link href="/" style={{ background: "#B22234", color: "#fff", padding: "8px 18px", borderRadius: 4, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
            ← Calculator
          </Link>
        </div>
      </header>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg,#1e2d5a,#0d1b3e)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
            <div style={{ width: 4, height: 36, background: "#B22234", borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>
              Gig Worker Tax Blog — 2026 Guides
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 14, paddingLeft: 16, maxWidth: 700 }}>
            Free, no-fluff tax guides for DoorDash, Uber, Etsy, OnlyFans and every major gig platform. Written for real workers, updated for 2026.
          </p>
        </div>
      </div>

      {/* POSTS */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px 64px" }}>
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ background: "#fff", border: "1px solid #d8dce6", borderRadius: 6, marginBottom: 16, boxShadow: "0 1px 6px rgba(0,0,0,0.05)", overflow: "hidden", transition: "box-shadow .18s" }}>
              <div style={{ padding: "20px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ fontSize: 36, flexShrink: 0 }}>{post.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <span style={{ background: "#1a1a2e", color: "#e8b84b", fontSize: 10, padding: "2px 8px", borderRadius: 3, fontWeight: 800 }}>{post.tag}</span>
                    <span style={{ background: "#f0f4f8", color: "#6c757d", fontSize: 11, padding: "2px 8px", borderRadius: 3 }}>{post.reads}</span>
                    <span style={{ background: "#dcfce7", color: "#166534", fontSize: 11, padding: "2px 8px", borderRadius: 3, fontWeight: 700 }}>🔍 {post.searches}</span>
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a2e", marginBottom: 8, lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: 14, color: "#6c757d", lineHeight: 1.6 }}>{post.desc}</p>
                </div>
                <div style={{ color: "#B22234", fontSize: 20, flexShrink: 0 }}>›</div>
              </div>
            </div>
          </Link>
        ))}
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
