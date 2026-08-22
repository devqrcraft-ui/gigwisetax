import os
# 1. Додаємо 3D CSS
css_path = 'app/globals.css'
if os.path.exists(css_path):
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write('\n/* 3D UI v85 */\n.btn-3d-red{position:relative;display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;background:linear-gradient(180deg,#B22234 0%,#8B0000 100%);color:#fff!important;font-weight:800;border-radius:8px;border:1px solid #ff4d4d;box-shadow:0 4px 0 #5a0000,0 8px 15px rgba(0,0,0,0.4);transition:all .1s;cursor:pointer;text-transform:uppercase;text-shadow:0 1px 2px rgba(0,0,0,0.5)}\n.btn-3d-red:hover{transform:translateY(-3px);box-shadow:0 7px 0 #5a0000,0 12px 20px rgba(178,34,52,0.4);filter:brightness(1.1)}\n.btn-3d-red:active{transform:translateY(2px);box-shadow:0 2px 0 #5a0000}\n.glow-gold{animation:glow-gold-anim 2.5s infinite alternate}@keyframes glow-gold-anim{from{box-shadow:0 0 5px rgba(232,184,75,0.3)}to{box-shadow:0 0 20px rgba(232,184,75,0.7)}}\n')

# 2. Генеруємо 50 платформ
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
        <h1 style={{ fontSize: "36px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>[P] Tax Calculator 2026 ★</h1>
        <div style={{ background: "rgba(232,184,75,0.06)", border: "1px solid rgba(232,184,75,0.2)", borderRadius: "12px", padding: "30px", marginBottom: "40px" }}>
          <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "24px" }}>Estimate your 2026 taxes for <strong>[P]</strong>. ✓ 100% Private.</p>
          <a href="/" className="btn-3d-red glow-gold" style={{ display: "inline-block", textDecoration: "none" }}>Launch Full Calculator ➔</a>
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
