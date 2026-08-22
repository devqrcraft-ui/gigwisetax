import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ko-fi Tax Calculator 2026 ★ ✓ 100% Private",
  description: "Calculate your Ko-fi taxes for 2026. ✓ Free ★ ✓ 100% Private ★ ✓ IRS 2026 Updated.",
  alternates: { canonical: "https://www.gigwisetax.com/ko-fi" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#07111F", color: "#C8D8EC", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>Ko-fi Tax Calculator 2026 ★</h1>
        <div style={{ background: "rgba(232,184,75,0.06)", border: "1px solid rgba(232,184,75,0.2)", borderRadius: "14px", padding: "40px", marginBottom: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "30px" }}>Estimate your 2026 taxes for <strong>Ko-fi</strong>. ✓ 100% Private.</p>
          <a href="/" className="btn-3d-pro glow-gold" style={{ display: "inline-flex", textDecoration: "none" }}>Launch Full Calculator ➔</a>
        </div>
      </div>
    </div>
  );
}