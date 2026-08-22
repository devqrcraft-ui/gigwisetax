import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guru Tax Calculator 2026 ★ ✓ 100% Private",
  description: "Calculate your Guru taxes for 2026. ✓ Free ★ ✓ 100% Private ★ ✓ IRS 2026 Updated.",
  alternates: { canonical: "https://www.gigwisetax.com/guru" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#07111F", color: "#C8D8EC", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>Guru Tax Calculator 2026 ★</h1>
        <div style={{ background: "rgba(232,184,75,0.06)", border: "1px solid rgba(232,184,75,0.2)", borderRadius: "12px", padding: "30px", marginBottom: "40px" }}>
          <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "24px" }}>Estimate your 2026 taxes for <strong>Guru</strong>. ✓ 100% Private.</p>
          <a href="/" className="btn-3d-red glow-gold" style={{ display: "inline-block", textDecoration: "none" }}>Launch Full Calculator ➔</a>
        </div>
      </div>
    </div>
  );
}