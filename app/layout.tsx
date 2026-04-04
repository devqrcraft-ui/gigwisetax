import Script from 'next/script'
import type { Metadata } from 'next'
import NavClient from './NavClient'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gig Worker Tax Calculator 2026 — SE Tax + All 51 States, Free & Private | GigWiseTax',
  description: 'Free gig worker tax calculator 2026. Estimate SE tax 15.3%, federal and state income tax for DoorDash, Uber, Etsy, Airbnb — all 51 states. No signup.',
  metadataBase: new URL('https://www.gigwisetax.com'),
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gigwisetax.com',
    siteName: 'GigWiseTax',
    title: 'Gig Worker Tax Calculator 2026 — SE Tax + All 51 States, Free & Private | GigWiseTax',
    description: 'Free gig worker tax calculator 2026. Estimate SE tax 15.3%, federal and state income tax for DoorDash, Uber, Etsy, Airbnb — all 51 states. No signup.',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.gigwisetax.com/og-image.png'],
    title: 'Gig Worker Tax Calculator 2026 — SE Tax + All 51 States, Free & Private | GigWiseTax',
    description: 'Free SE tax calculator 2026 — 15.3% SE tax, all 51 states, no signup required.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="icon" href="/favicon.ico" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"GigWiseTax — Gig Worker Tax Calculator","url":"https://www.gigwisetax.com","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"WebSite","name":"GigWiseTax","url":"https://www.gigwisetax.com",
          "description":"Free self-employment tax calculator for U.S. gig workers. All 51 states. No signup required.",
          "potentialAction":{"@type":"SearchAction","target":"https://www.gigwisetax.com/calculators?q={search_term_string}","query-input":"required name=search_term_string"}
        })}} />
      </head>
      <body style={{ margin:0, padding:0, boxSizing:'border-box', fontFamily:"'Segoe UI','Helvetica Neue',Arial,sans-serif", background:'#0d1117', overflowX:'hidden', minHeight:'100vh' }}>
        <style>{'.gwt-footer-link:hover{color:#e8b84b!important;text-decoration:underline!important}.gwt-nav-link:hover{color:#e8b84b!important;background:rgba(232,184,75,0.08)!important;border-radius:4px}'}</style>

        <div style={{ background:'#0d1b3e', borderBottom:'4px solid #B22234' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'7px 12px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:8, overflow:'hidden' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, minWidth:0, overflow:'hidden' }}>
              <span style={{ fontSize:20, flexShrink:0 }}></span>
              <span style={{ color:'rgba(255,255,255,.85)', fontSize:14, overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',minWidth:0 }}>Independent Tax Estimation Tool for U.S. Gig Workers — Free, No Registration</span>
            </div>
            <div style={{ display:'flex', gap:12, alignItems:'center', flexShrink:0 }}>
              <span style={{ color:'rgba(255,255,255,.8)', fontSize:13 }}>Tax Year 2026</span>
              <span style={{ background:'#B22234', color:'#fff', padding:'3px 10px', borderRadius:3, fontSize:13, fontWeight:700 }}> Q1 DUE: APR 15</span>
            </div>
          </div>
        </div>

        <NavClient />
        <div style={{
          background: '#07111F',
          borderBottom: '1px solid rgba(232,184,75,0.2)',
          padding: '8px 16px',
          overflowX: 'hidden' as const,
        }}>
          <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: '6px 24px',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <span style={{ fontSize: 13, color: 'rgba(200,216,236,.85)', whiteSpace: 'nowrap' as const }}>⭐ <strong style={{ color: '#e8b84b' }}>"Saved me $3,200 on DoorDash taxes"</strong> — Alex M., CA</span>
            <span style={{ fontSize: 13, color: 'rgba(200,216,236,.6)', display: 'none' }} className="trust-sep">|</span>
            <span style={{ fontSize: 13, color: 'rgba(200,216,236,.85)', whiteSpace: 'nowrap' as const }}>🔒 100% Private — No data stored</span>
            <span style={{ fontSize: 13, color: 'rgba(200,216,236,.85)', whiteSpace: 'nowrap' as const }}>✓ IRS 2026 — Updated April 2026</span>
            <span style={{ fontSize: 13, color: 'rgba(200,216,236,.85)', whiteSpace: 'nowrap' as const }}>📊 All 51 states covered</span>
          </div>
        </div>
        <main>{children}</main>

        <footer style={{ background:'#1a1a2e', borderTop:'4px solid #B22234' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 20px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:28 }} className="footer-grid">
            <div>
              <div style={{ fontWeight:900, fontSize:17, color:'#fff', marginBottom:10 }}>GIGWISE<span style={{ color:'#e8b84b' }}>TAX</span><span style={{ color:'rgba(255,255,255,.7)', fontWeight:300, fontSize:14 }}>.COM</span></div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,.75)', lineHeight:1.8, marginBottom:14 }}>Free self-employment tax calculators for gig workers. All 51 states. Tax year 2026.</div>
              <div style={{ fontSize:14, color:'rgba(255,255,255,.65)', lineHeight:1.7 }}>Not tax advice. Estimates only. Consult a CPA.</div>
            </div>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.75)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}> Calculators</div>
              {[['/doordash','DoorDash'],['/uber','Uber'],['/etsy','Etsy'],['/onlyfans','OnlyFans'],['/instacart','Instacart'],['/airbnb','Airbnb'],['/grubhub','Grubhub'],['/walmart-spark','Walmart Spark'],['/turo','Turo']].map(([h,l]) => (
                <a key={h} href={h} className="gwt-footer-link" style={{ textDecoration:'none', display:'block', fontSize:15, color:'rgba(255,255,255,.85)', marginBottom:12, minHeight:'24px' }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.75)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}> Deadlines</div>
              {[['Q1 — April 15','/deadlines#q1'],['Q2 — June 16','/deadlines#q2'],['Q3 — Sept 15','/deadlines#q3'],['Q4 — Jan 15','/deadlines#q4']].map(([l,h]) => (
                <a key={h} href={h} className="gwt-footer-link" style={{ textDecoration:'none', display:'block', fontSize:15, color:'rgba(255,255,255,.85)', marginBottom:12, minHeight:'24px' }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.75)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}> Blog</div>
              {[['/blog/mileage-rate-2026','Mileage Rate 2026'],['/blog/amazon-flex-taxes-2026','Amazon Flex Taxes'],['/blog/grubhub-vs-doordash-taxes-2026','Grubhub vs DoorDash'],['/blog/w2-vs-1099-guide-2026','W-2 vs 1099 Guide'],['/blog/quarterly-taxes-gig-workers','Quarterly Taxes Guide'],['/blog','All Articles →']].map(([h,l]) => (
                <a key={h} href={h} className="gwt-footer-link" style={{ textDecoration:'none', display:'block', fontSize:15, color:'rgba(255,255,255,.85)', marginBottom:12, minHeight:'24px' }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.75)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}> Legal</div>
              {[['/about','About Us'],['/privacy','Privacy Policy'],['/terms','Terms of Service']].map(([h,l]) => (
                <a key={h} href={h} className="gwt-footer-link" style={{ textDecoration:'none', display:'block', fontSize:15, color:'rgba(255,255,255,.85)', marginBottom:12, minHeight:'24px' }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop:'1px solid rgba(255,255,255,.06)', padding:'16px 20px' }}>
            <div style={{ maxWidth:1200, margin:'0 auto' }}>
              <div style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.75)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:8 }}>Guides &amp; Resources</div>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:16 }}>
                {[
                  { label:' Multi-App Taxes',   href:'/multi-app-gig-taxes-2026'    },
                  { label:' Safe Harbor Guide', href:'/safe-harbor-quarterly-taxes'  },
                  { label:' How We Calculate',  href:'/how-we-calculate-gig-taxes'   },
                  { label:' Penalty Finder',    href:'/tax-penalty-finder'           },
                ].map(l => (
                  <a key={l.href} href={l.href}
                    className="gwt-footer-link" style={{ fontSize:14, color:'rgba(255,255,255,.85)', textDecoration:'none', background:'#0d2340', border:'1px solid #2a6496', borderRadius:6, padding:'6px 12px', fontWeight:500 }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop:'1px solid rgba(255,255,255,.06)' }}>
            <div style={{ maxWidth:1200, margin:'0 auto', padding:'14px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
              <span style={{ fontSize:14, color:'rgba(255,255,255,.55)' }}>© 2026 GigWiseTax.com — Not affiliated with IRS or any government agency. Not tax advice.</span>
              <span style={{ fontSize:14, color:'rgba(255,255,255,.55)' }}> Made for U.S. Gig Workers ·  No data stored</span>
            </div>
          </div>
        </footer>

        <Analytics />
        <SpeedInsights />

        <style>{`@media(max-width:900px){.desktop-nav{display:none!important}.desktop-cta{display:none!important}.mobile-hamburger{display:block!important}}
@media(max-width:640px){.footer-grid{grid-template-columns:1fr 1fr!important;gap:14px!important;}}@media(max-width:400px){.footer-grid{grid-template-columns:1fr!important;}}`}</style>
        <Script src="/ai-chat-widget-final.js?v=4" strategy="lazyOnload" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KR8CY8PKT0" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">{
          `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KR8CY8PKT0');`
        }</Script>
      <script dangerouslySetInnerHTML={{ __html: `
document.addEventListener('dragstart',function(e){e.preventDefault();});
document.addEventListener('selectstart',function(e){if(!['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName))e.preventDefault();});
document.addEventListener('contextmenu',function(e){e.preventDefault();});
` }} />
</body>
    </html>
  )
}
