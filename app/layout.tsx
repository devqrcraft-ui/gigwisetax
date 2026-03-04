import type { Metadata } from 'next'
import NavClient from './NavClient'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GigWiseTax — Free Gig Worker Tax Calculator 2026',
  description: 'Free self-employment tax calculator for DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb. All 51 states. No signup.',
  metadataBase: new URL('https://www.gigwisetax.com'),
  alternates: { canonical: 'https://www.gigwisetax.com' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gigwisetax.com',
    siteName: 'GigWiseTax',
    title: 'GigWiseTax — Free Gig Worker Tax Calculator 2026',
    description: 'Free self-employment tax calculator for DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb. All 51 states. No signup.',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.gigwisetax.com/og-image.png'],
    title: 'GigWiseTax — Free Gig Worker Tax Calculator 2026',
    description: 'Free SE tax calculator for gig workers. All 51 states. No signup.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics G-KR8CY8PKT0 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KR8CY8PKT0"></script>
        <script
          dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KR8CY8PKT0');
          ` }}
        />
        {/* JSON-LD: Organization schema for Google trust */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GigWiseTax",
            "url": "https://www.gigwisetax.com",
            "description": "Free self-employment tax calculator for U.S. gig workers. All 51 states. No signup required.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.gigwisetax.com/calculators?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}}
        />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax do gig workers pay?","acceptedAnswer":{"@type":"Answer","text":"Gig workers pay 15.3% self-employment tax plus federal and state income tax."}},{"@type":"Question","name":"Do I need to pay quarterly taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you expect to owe $1,000 or more, the IRS requires quarterly payments."}},{"@type":"Question","name":"What can DoorDash drivers deduct?","acceptedAnswer":{"@type":"Answer","text":"Mileage, phone bills, hot bags and other business expenses."}}]}) }} />
      </head>
      <body style={{ margin:0, padding:0, boxSizing:"border-box", fontFamily:"'Segoe UI','Helvetica Neue',Arial,sans-serif", background:'#0d1117', overflowX:'hidden' }}>

        <div style={{ background:'#0d1117', overflowX:'hidden', maxWidth:'100vw' }}><div style={{ background:'#0d1b3e', borderBottom:'4px solid #B22234' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'7px 16px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}>
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
              <div style={{ fontSize:12, color:'rgba(255,255,255,.25)', lineHeight:1.7 }}>Not tax advice. Estimates only. Consult a CPA.</div>
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}>🧮 Calculators</div>
              {[
                ['/doordash','DoorDash'],
                ['/uber','Uber'],
                ['/etsy','Etsy'],
                ['/onlyfans','OnlyFans'],
                ['/instacart','Instacart'],
                ['/airbnb','Airbnb'],
                ['/grubhub','Grubhub'],
                ['/walmart-spark','Walmart Spark'],
                ['/turo','Turo'],
              ].map(([h,l]) => (
                <a key={h} href={h} style={{ textDecoration:'none', display:'block', fontSize:13, color:'rgba(255,255,255,.3)', marginBottom:8 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}>📅 Deadlines</div>
              {[['Q1 — April 15','/deadlines#q1'],['Q2 — June 16','/deadlines#q2'],['Q3 — Sept 15','/deadlines#q3'],['Q4 — Jan 15','/deadlines#q4']].map(([l,h]) => (
                <a key={h} href={h} style={{ textDecoration:'none', display:'block', fontSize:13, color:'rgba(255,255,255,.3)', marginBottom:8 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}>✍️ Blog</div>
              {[
                ['/blog/mileage-rate-2026','Mileage Rate 2026'],
                ['/blog/amazon-flex-taxes-2026','Amazon Flex Taxes'],
                ['/blog/grubhub-vs-doordash-taxes-2026','Grubhub vs DoorDash'],
                ['/blog/w2-vs-1099-guide-2026','W-2 vs 1099 Guide'],
                ['/blog/quarterly-taxes-gig-workers','Quarterly Taxes Guide'],
                ['/blog','All Articles →'],
              ].map(([h,l]) => (
                <a key={h} href={h} style={{ textDecoration:'none', display:'block', fontSize:13, color:'rgba(255,255,255,.3)', marginBottom:8 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}>🔒 Legal</div>
              {[
                ['/about','About Us'],
                ['/privacy','Privacy Policy'],
                ['/terms','Terms of Service'],
              ].map(([h,l]) => (
                <a key={h} href={h} style={{ textDecoration:'none', display:'block', fontSize:13, color:'rgba(255,255,255,.3)', marginBottom:8 }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop:'1px solid rgba(255,255,255,.06)' }}>
            <div style={{ maxWidth:1200, margin:'0 auto', padding:'14px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
              <span style={{ fontSize:12, color:'rgba(255,255,255,.18)' }}>© 2026 GigWiseTax.com — Not affiliated with IRS or any government agency. Not tax advice.</span>
              <span style={{ fontSize:12, color:'rgba(255,255,255,.18)' }}>🇺🇸 Made for U.S. Gig Workers · 🔒 No data stored</span>
            </div>
          </div>
        </footer>

        {/* Vercel Analytics — tracks page views, no personal data */}
        <Analytics />
        {/* Vercel Speed Insights — tracks Core Web Vitals */}
        <SpeedInsights />

        <style>{`@media(max-width:900px){.desktop-nav{display:none!important}.desktop-cta{display:none!important}.mobile-hamburger{display:block!important}}`}</style>
      </div></body>
    </html>
  )
}
