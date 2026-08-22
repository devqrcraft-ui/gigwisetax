import os
# 1. Додаємо 3D CSS та Glow-ефекти
css_path = 'app/globals.css'
css_code = """
/* 3D UI v90 - Professional */
.btn-3d-pro {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: linear-gradient(180deg, #B22234 0%, #8B0000 100%);
  color: #ffffff !important;
  font-weight: 800;
  border-radius: 10px;
  border: 1px solid #ff4d4d;
  box-shadow: 0 5px 0 #5a0000, 0 10px 20px rgba(0,0,0,0.4);
  transition: all 0.1s ease;
  cursor: pointer;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.btn-3d-pro:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 0 #5a0000, 0 15px 25px rgba(178,34,52,0.4);
  filter: brightness(1.1);
}
.btn-3d-pro:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #5a0000, 0 2px 5px rgba(0,0,0,0.3);
}
.glow-gold { animation: glow-gold-anim 3s infinite alternate; }
@keyframes glow-gold-anim { from { box-shadow: 0 0 5px rgba(232,184,75,0.3); } to { box-shadow: 0 0 25px rgba(232,184,75,0.6); } }
"""
if os.path.exists(css_path):
    with open(css_path, 'a', encoding='utf-8') as f: f.write(css_code)

# 2. Генеруємо 50 нішевих сторінок з 3D UI
platforms = ["Rover","TaskRabbit","Wag","Care-com","Fiverr","Upwork","Toptal","Freelancer","99designs","Guru","Postmates","GoPuff","Shipt","Dolly","Lugg","TaskEasy","Thumbtack","Handy","HelloTech","Poshmark","Depop","Mercari","StockX","Grailed","OfferUp","Letgo","Vinted","Outschool","VIPKid","Teachable","Udemy","Skillshare","Gumroad","Substack","Patreon","BuyMeACoffee","Ko-fi","Twitch","YouTube","TikTok","Medium","Ghost","WordPress","Wix","Squarespace","Shopify-Seller","Amazon-Handmade","Etsy-Vintage","eBay-PowerSeller","Walmart-Marketplace"]
template = '''import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "[P] Tax Calculator 2026 ★ ✓ 100% Private",
  description: "Calculate your [P] taxes for 2026. ✓ Free ★ ✓ 100% Private ★ ✓ IRS 2026 Updated.",
  alternates: { canonical: "https://www.gigwisetax.com/[S]" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#07111F", color: "#C8D8EC", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>[P] Tax Calculator 2026 ★</h1>
        <div style={{ background: "rgba(232,184,75,0.06)", border: "1px solid rgba(232,184,75,0.2)", borderRadius: "14px", padding: "40px", marginBottom: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "30px" }}>Estimate your 2026 taxes for <strong>[P]</strong>. ✓ 100% Private.</p>
          <a href="/" className="btn-3d-pro glow-gold" style={{ display: "inline-flex", textDecoration: "none" }}>Launch Full Calculator ➔</a>
        </div>
      </div>
    </div>
  );
}'''
for p in platforms:
    slug = p.lower().replace(".","-")
    os.makedirs(f"app/{slug}", exist_ok=True)
    with open(f"app/{slug}/page.tsx", "w", encoding="utf-8") as f:
        f.write(template.replace("[P]", p).replace("[S]", slug))
