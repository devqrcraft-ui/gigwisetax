import HomeClient from './home-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gig Worker Tax Calculator 2026 — DoorDash, Uber, OnlyFans | GigWiseTax',
  description: 'Free self-employment tax calculator for gig workers. Calculate SE tax, federal, state taxes and quarterly payments for DoorDash, Uber, Etsy, OnlyFans and more. All 51 states.',
  alternates: { canonical: 'https://www.gigwisetax.com' },
  openGraph: {
    title: 'Gig Worker Tax Calculator 2026 — Free, All 51 States',
    description: 'Calculate SE tax, federal and state taxes for any gig platform. Free, private, no signup.',
    url: 'https://www.gigwisetax.com',
    siteName: 'GigWiseTax',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much self-employment tax do gig workers pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"Gig workers pay 15.3% self-employment (SE) tax on 92.35% of net earnings — 12.4% Social Security and 2.9% Medicare. You can deduct half of SE tax from your federal taxable income."}},{"@type":"Question","name":"Do I need to pay quarterly taxes as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you expect to owe $1,000 or more in taxes, the IRS requires quarterly estimated payments. 2026 deadlines: April 15, June 16, September 15, and January 15, 2027."}},{"@type":"Question","name":"What is the 1099 threshold for gig work in 2026?","acceptedAnswer":{"@type":"Answer","text":"Platforms must issue a 1099-NEC if you earn $600 or more. However, you must report all income to the IRS even without a 1099 form."}},{"@type":"Question","name":"How much should I set aside for taxes as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"Set aside 25-30% of net gig income for taxes. Higher earners in high-tax states like California or New York should set aside 35-40% to cover SE tax, federal, and state income tax."}}]}) }} />
      <HomeClient />

      <div style={{background:'#0a0f1e',color:'#e2e8f0',fontFamily:'system-ui,sans-serif'}}>

        <section style={{maxWidth:'960px',margin:'0 auto',padding:'48px 20px 28px'}}>
          <h2 style={{fontSize:'clamp(20px,3vw,28px)',fontWeight:800,color:'#ffffff',marginBottom:'8px'}}>Gig Worker Tax Center 2026</h2>
          <p style={{fontSize:'14px',opacity:0.6,marginBottom:'24px'}}>Every major platform. Every tax question. Free calculators for all 51 states.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:'12px'}}>
            {[
              {href:'/uber',       label:'Uber',         desc:'SE tax + quarterly estimates',   cta:'Open Uber Tax Calculator'},
              {href:'/doordash',   label:'DoorDash',     desc:'Delivery driver deductions',     cta:'Open DoorDash Tax Calculator'},
              {href:'/airbnb',     label:'Airbnb',       desc:'Host income + expenses',         cta:'Open Airbnb Tax Calculator'},
              {href:'/instacart',  label:'Instacart',    desc:'Shopper tax guide',              cta:'Open Instacart Tax Calculator'},
              {href:'/etsy',       label:'Etsy',         desc:'Seller income + deductions',     cta:'Open Etsy Tax Calculator'},
              {href:'/amazon-flex',label:'Amazon Flex',  desc:'Delivery SE tax',                cta:'Open Amazon Flex Calculator'},
              {href:'/onlyfans',   label:'OnlyFans',     desc:'Creator tax calculator',         cta:'Open OnlyFans Tax Calculator'},
              {href:'/lyft',       label:'Lyft',         desc:'Rideshare tax guide',            cta:'Open Lyft Tax Calculator'},
              {href:'/grubhub',    label:'Grubhub',      desc:'Delivery tax estimates',         cta:'Open Grubhub Tax Calculator'},
              {href:'/walmart-spark',label:'Walmart Spark',desc:'Spark driver taxes',           cta:'Open Walmart Spark Calculator'},
            ].map(p => (
              <a key={p.href} href={p.href} className="hub-card" style={{display:'block',padding:'16px 14px',borderRadius:'12px',color:'#e2e8f0',textDecoration:'none'}}>
                <div style={{fontSize:'15px',fontWeight:800,color:'#fff',marginBottom:'4px'}}>{p.label} Tax Calculator</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:1.4,marginBottom:'10px'}}>{p.desc}</div>
                <div style={{background:'#B22234',color:'#fff',fontSize:'12px',fontWeight:700,padding:'8px 0',borderRadius:'6px',textAlign:'center'}}>{p.cta} →</div>
              </a>
            ))}

          </div>
        </section>

        <section style={{maxWidth:'960px',margin:'0 auto',padding:'0 20px 28px'}}>
          <h2 style={{fontSize:'clamp(18px,3vw,24px)',fontWeight:800,color:'#a5b4fc',marginBottom:'16px'}}>Tax Calculators by Category</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'10px'}}>
            {[
              ['/1099-tax-calculator-2026','1099 Tax Calculator 2026','Self-employment income'],
              ['/deadlines','\uD83D\uDCC5 Tax Deadlines 2026','Quarterly payment dates'],
              ['/deductions','\uD83D\uDCDD Top Deductions','Write-offs for gig workers'],
              ['/gig-worker-taxes-2026','Gig Tax Guide 2026','Complete 2026 overview'],
              ['/calculators','All Calculators','Browse every tool'],
            ].map(([href, label, desc]) => (
              <a key={href} href={href} style={{display:'block',padding:'14px 12px',borderRadius:'10px',background:'rgba(99,102,241,0.05)',border:'1px solid rgba(99,102,241,0.15)',color:'#e2e8f0',textDecoration:'none'}}>
                <div style={{fontSize:'14px',fontWeight:700,color:'#a5b4fc',marginBottom:'3px'}}>{label}</div>
                <div style={{fontSize:'12px',opacity:0.55}}>{desc}</div>
              </a>
            ))}
          </div>
        </section>

        <section style={{maxWidth:'960px',margin:'0 auto',padding:'0 20px 52px'}}>
          <h2 style={{fontSize:'clamp(18px,3vw,24px)',fontWeight:800,color:'#a5b4fc',marginBottom:'16px'}}>Frequently Asked Questions — Gig Worker Taxes 2026</h2>
          <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
            <div><h3 style={{fontSize:'15px',fontWeight:700,color:'#c7d2fe',marginBottom:'6px'}}>How much self-employment tax do gig workers pay in 2026?</h3><p style={{fontSize:'14px',lineHeight:1.7,opacity:0.8,margin:0}}>Gig workers pay 15.3% SE tax on 92.35% of net earnings — 12.4% Social Security and 2.9% Medicare. You can deduct half of SE tax from your federal taxable income, which reduces your overall tax bill.</p></div>
            <div><h3 style={{fontSize:'15px',fontWeight:700,color:'#c7d2fe',marginBottom:'6px'}}>Do I need to pay quarterly taxes as a gig worker?</h3><p style={{fontSize:'14px',lineHeight:1.7,opacity:0.8,margin:0}}>Yes. If you expect to owe $1,000 or more in taxes, the IRS requires quarterly estimated payments. 2026 deadlines: April 15, June 16, September 15, and January 15, 2027.</p></div>
            <div><h3 style={{fontSize:'15px',fontWeight:700,color:'#c7d2fe',marginBottom:'6px'}}>What is the 1099 threshold for gig work in 2026?</h3><p style={{fontSize:'14px',lineHeight:1.7,opacity:0.8,margin:0}}>Platforms must issue a 1099-NEC if you earn $600 or more. However, you must report all income to the IRS even without receiving a 1099 form.</p></div>
            <div><h3 style={{fontSize:'15px',fontWeight:700,color:'#c7d2fe',marginBottom:'6px'}}>How much should I set aside for taxes as a gig worker?</h3><p style={{fontSize:'14px',lineHeight:1.7,opacity:0.8,margin:0}}>Set aside 25–30% of net gig income for taxes. Higher earners in high-tax states like California or New York should set aside 35–40% to cover SE tax, federal, and state income tax.</p></div>
          </div>
        </section>

      </div>
    </>
  );
}
