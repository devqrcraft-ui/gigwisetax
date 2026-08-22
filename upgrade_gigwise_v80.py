import os
# 1. Додаємо 3D CSS
css_path = 'app/globals.css'
with open(css_path, 'a', encoding='utf-8') as f:
    f.write('\n/* 3D UI v80 */\n.btn-3d-red{position:relative;display:inline-flex;align-items:center;padding:12px 24px;background:linear-gradient(180deg,#B22234 0%,#8B0000 100%);color:#fff!important;font-weight:800;border-radius:8px;border:1px solid #ff4d4d;box-shadow:0 4px 0 #5a0000,0 8px 15px rgba(0,0,0,0.4);transition:all .1s;cursor:pointer;text-transform:uppercase}\n.btn-3d-red:hover{transform:translateY(-3px);box-shadow:0 7px 0 #5a0000,0 12px 20px rgba(178,34,52,0.4);filter:brightness(1.1)}\n.btn-3d-red:active{transform:translateY(2px);box-shadow:0 2px 0 #5a0000}\n')

# 2. Генеруємо 50 платформ
platforms = ["Rover","TaskRabbit","Wag","Care-com","Fiverr","Upwork","Toptal","Freelancer","99designs","Guru","Postmates","GoPuff","Shipt","Dolly","Lugg","TaskEasy","Thumbtack","Handy","HelloTech","Poshmark","Depop","Mercari","StockX","Grailed","OfferUp","Letgo","Vinted","Outschool","VIPKid","Teachable","Udemy","Skillshare","Gumroad","Substack","Patreon","BuyMeACoffee","Ko-fi","Twitch","YouTube","TikTok","Medium","Ghost","WordPress","Wix","Squarespace","Shopify-Seller","Amazon-Handmade","Etsy-Vintage","eBay-PowerSeller","Walmart-Marketplace"]
template = 'import React from "react";\nimport {{ Metadata }} from "next";\nexport const metadata: Metadata = {{ title: "{p} Tax 2026 ★ ✓ 100% Private", description: "Calculate {p} taxes." }};\nexport default function Page() {{ return <div style={{background:"#07111F",color:"#fff",padding:"60px",minHeight:"100vh"}}><h1 style={{fontSize:"40px"}}>★ {p} Tax 2026</h1><a href="/" className="btn-3d-red">Launch Calculator ➔</a></div> }}'
for p in platforms:
    slug = p.lower().replace(".","-")
    os.makedirs(f"app/{slug}", exist_ok=True)
    with open(f"app/{slug}/page.tsx", "w", encoding="utf-8") as f: f.write(template.format(p=p))
