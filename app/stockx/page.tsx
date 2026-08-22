import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "StockX Tax Calculator 2026 ★ ✓ 100% Private",
  description: "Calculate StockX taxes. ✓ Free ★ ✓ 100% Private ★ ✓ IRS 2026 Updated.",
  alternates: { canonical: "https://www.gigwisetax.com/stockx" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#07111F", color: "#C8D8EC", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>★ StockX Tax Calculator 2026</h1>
        <div style={{ background: "rgba(232,184,75,0.06)", border: "1px solid rgba(232,184,75,0.2)", borderRadius: "14px", padding: "40px", marginBottom: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "30px" }}>Estimate 2026 taxes for <strong>StockX</strong>. ✓ 100% Private.</p>
          <a href="/" className="btn-3d-pro glow-gold" style={{ display: "inline-flex", textDecoration: "none" }}>Launch Calculator ➔</a>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px", fontSize: "14px" }}>
          <p>Sister Tools: <a href="https://www.privatepaycheck.com" style={{color:"#e8b84b"}}>PrivatePaycheck</a> | <a href="https://www.compressto20kb.com" style={{color:"#e8b84b"}}>CompressTo20KB</a></p>
        </div>
      </div>
    </div>
   );
}