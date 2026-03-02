import type { Metadata } from 'next'
import NavClient from './NavClient'
import './globals.css'

export const metadata: Metadata = {
  title: 'GigWiseTax — Free Gig Worker Tax Calculator 2026',
  description: 'Free self-employment tax calculator for DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb. All 51 states. No signup.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin:0, fontFamily:"'Segoe UI','Helvetica Neue',Arial,sans-serif", background:'#eef0f4' }}>

        <div style={{ background:'#0d1b3e', borderBottom:'4px solid #B22234' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'7px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ fontSize:20 }}>🇺🇸</span>
              <span style={{ color:'rgba(255,255,255,.6)', fontSize:12 }}>Independent Tax Estimation Tool for U.S. Gig Workers — Free, No Registration</span>
            </div>
            <div style={{ display:'flex', gap:12, alignItems:'center' }}>
              <span style={{ color:'rgba(255,255,255,.35)', fontSize:11 }}>Tax Year 2026</span>
              <span style={{ background:'#B22234', color:'#fff', padding:'3px 10px', borderRadius:3, fontSize:11, fontWeight:700 }}>⚠️ Q1 DUE: APR 15</span>
            </div>
          </div>
        </div>

        <NavClient />

        <main>{children}</main>

        <footer style={{ background:'#1a1a2e', borderTop:'4px solid #B22234' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 20px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:28 }}>
            <div>
              <div style={{ fontWeight:900, fontSize:17, color:'#fff', marginBottom:10 }}>GIGWISE<span style={{ color:'#e8b84b' }}>TAX</span><span style={{ color:'rgba(255,255,255,.2)', fontWeight:300, fontSize:12 }}>.COM</span></div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,.4)', lineHeight:1.8, marginBottom:14 }}>Free self-employment tax calculators for gig workers. All 51 states. Tax year 2026.</div>
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}>🧮 Calculators</div>
              {['/doordash','/uber','/etsy','/onlyfans','/instacart','/airbnb'].map(h => (
                <a key={h} href={h} style={{ textDecoration:'none', display:'block', fontSize:13, color:'rgba(255,255,255,.3)', marginBottom:8 }}>{h.replace('/','').charAt(0).toUpperCase()+h.slice(2)}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}>📅 Deadlines</div>
              {[['Q1 — April 15','/deadlines#q1'],['Q2 — June 16','/deadlines#q2'],['Q3 — Sept 15','/deadlines#q3'],['Q4 — Jan 15','/deadlines#q4']].map(([l,h]) => (
                <a key={h} href={h} style={{ textDecoration:'none', display:'block', fontSize:13, color:'rgba(255,255,255,.3)', marginBottom:8 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}>🔧 Tools</div>
              {[['📋 W-2 vs 1099','/blog/w2-vs-1099-guide-2026'],['📚 SE Tax Guide','/blog/quarterly-taxes-gig-workers'],['✍️ Blog','/blog']].map(([l,h]) => (
                <a key={h} href={h} style={{ textDecoration:'none', display:'block', fontSize:13, color:'rgba(255,255,255,.3)', marginBottom:8 }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop:'1px solid rgba(255,255,255,.06)' }}>
            <div style={{ maxWidth:1200, margin:'0 auto', padding:'14px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
              <span style={{ fontSize:12, color:'rgba(255,255,255,.18)' }}>© 2026 GigWiseTax.com — Not affiliated with IRS or any government agency.</span>
              <span style={{ fontSize:12, color:'rgba(255,255,255,.18)' }}>🇺🇸 Made for U.S. Gig Workers</span>
            </div>
          </div>
        </footer>

        <style>{`@media(max-width:900px){.desktop-nav{display:none!important}.desktop-cta{display:none!important}.mobile-hamburger{display:block!important}}`}</style>
      </body>
    </html>
  )
}
