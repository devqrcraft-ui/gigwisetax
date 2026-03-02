'use client'

import { useState } from 'react'
import Link from 'next/link'
import './globals.css'

const NAV = [
  {
    label: 'Calculators',
    items: [
      { label: '🚗 DoorDash Tax Calculator',     href: '/doordash',      sub: '400K searches/mo' },
      { label: '🚕 Uber Driver Tax Calculator',  href: '/uber',          sub: '300K searches/mo' },
      { label: '🛍️ Etsy Seller Tax Calculator',  href: '/etsy',          sub: '200K searches/mo' },
      { label: '⭐ OnlyFans Tax Calculator',      href: '/onlyfans',      sub: '150K/mo · USA #1' },
      { label: '🛒 Instacart Tax Calculator',    href: '/instacart',     sub: '150K searches/mo' },
      { label: '🏠 Airbnb Host Tax Calculator',  href: '/airbnb',        sub: '120K searches/mo' },
      { label: '📦 Amazon Flex Tax Calculator',  href: '/amazon-flex',   sub: '80K searches/mo'  },
      { label: '🚖 Lyft Driver Tax Calculator',  href: '/lyft',          sub: '70K searches/mo'  },
    ],
  },
  {
    label: 'Deadlines 2026',
    items: [
      { label: '⚠️ Q1 — April 15, 2026',        href: '/deadlines#q1',  sub: '45 days left' },
      { label: 'Q2 — June 16, 2026',            href: '/deadlines#q2',  sub: '107 days left' },
      { label: 'Q3 — September 15, 2026',       href: '/deadlines#q3',  sub: '198 days left' },
      { label: 'Q4 — January 15, 2027',         href: '/deadlines#q4',  sub: '320 days left' },
      { label: '🗺️ All Deadlines by State',      href: '/deadlines',     sub: 'All 51 states' },
    ],
  },
  {
    label: 'By State',
    items: [
      { label: '🌴 California (9.3%)',           href: '/doordash/california' },
      { label: '🗽 New York (6.85%)',            href: '/doordash/new-york'   },
      { label: '⭐ Texas (No State Tax)',         href: '/doordash/texas'      },
      { label: '🌊 Florida (No State Tax)',      href: '/doordash/florida'    },
      { label: '🏙️ Illinois (4.95%)',            href: '/doordash/illinois'   },
      { label: '→ All 51 States',               href: '/calculators'          },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: '💵 Paycheck Calculator',        href: '/paycheck'     },
      { label: '📋 W-2 vs 1099 Guide',         href: '/blog/w2-vs-1099' },
      { label: '📚 SE Tax Guide',              href: '/blog/quarterly-taxes-gig-workers' },
      { label: '✍️ Blog',                       href: '/blog'         },
    ],
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [openNav, setOpenNav] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: '#eef0f4' }}>

        {/* ━━━ GOV TOP BAR ━━━ */}
        <div style={{ background: '#0d1b3e', borderBottom: '4px solid #B22234' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>🇺🇸</span>
              <span style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>
                Independent Tax Estimation Tool for U.S. Gig Workers — Free, No Registration
              </span>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,.35)', fontSize: 11 }}>Tax Year 2026</span>
              <span style={{ background: '#B22234', color: '#fff', padding: '3px 10px', borderRadius: 3, fontSize: 11, fontWeight: 700 }}>
                ⚠️ Q1 DUE: APR 15
              </span>
            </div>
          </div>
        </div>

        {/* ━━━ MAIN HEADER ━━━ */}
        <header style={{ background: '#1a1a2e', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 16px rgba(0,0,0,.4)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

            {/* LOGO */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, background: 'linear-gradient(135deg,#B22234,#3C3B6E)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="2" rx="1" fill="white" opacity=".9"/>
                  <rect x="2" y="9" width="16" height="2" rx="1" fill="white" opacity=".9"/>
                  <rect x="2" y="14" width="10" height="2" rx="1" fill="white" opacity=".9"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: 19, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.1 }}>
                  GIGWISE<span style={{ color: '#e8b84b' }}>TAX</span>
                  <span style={{ color: 'rgba(255,255,255,.2)', fontWeight: 300, fontSize: 13 }}>.COM</span>
                </div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  Free · Independent · United States
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav style={{ display: 'flex', gap: 2 }} className="desktop-nav">
              {NAV.map(item => (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setOpenNav(item.label)}
                  onMouseLeave={() => setOpenNav(null)}
                >
                  <div style={{
                    padding: '8px 14px', cursor: 'pointer', fontSize: 13.5, fontWeight: 500,
                    color: openNav === item.label ? '#fff' : 'rgba(255,255,255,.65)',
                    borderBottom: openNav === item.label ? '2px solid #e8b84b' : '2px solid transparent',
                    transition: 'all .15s', whiteSpace: 'nowrap', userSelect: 'none',
                  }}>
                    {item.label} <span style={{ fontSize: 9, opacity: .5 }}>▾</span>
                  </div>

                  {/* DROPDOWN */}
                  {openNav === item.label && (
                    <div style={{
                      position: 'absolute', top: '100%', left: 0,
                      background: '#fff', border: '1px solid #e2e5e9',
                      borderRadius: 6, minWidth: 240, zIndex: 200,
                      boxShadow: '0 10px 32px rgba(0,0,0,.15)', overflow: 'hidden',
                    }}>
                      <div style={{ background: '#1a1a2e', padding: '8px 14px', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.45)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {item.label}
                      </div>
                      {item.items.map(sub => (
                        <Link key={sub.href} href={sub.href} style={{ textDecoration: 'none' }}>
                          <div style={{ padding: '10px 14px', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background .1s' }}
                            onMouseEnter={e => (e.currentTarget.style.background = '#f0f4ff')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            <span style={{ fontSize: 13, color: '#1a1a2e', fontWeight: 500 }}>{sub.label}</span>
                            {sub.sub && <span style={{ fontSize: 11, color: '#B22234', fontWeight: 600, marginLeft: 8, whiteSpace: 'nowrap' }}>{sub.sub}</span>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT: trust + CTA */}
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="desktop-cta">
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,.3)' }}>🔒 No data stored</span>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#B22234', color: '#fff', padding: '8px 18px', borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Calculate Now →
                </div>
              </Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ display: 'none', background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', padding: '4px 8px' }}
              className="mobile-hamburger"
              aria-label="Menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div style={{ background: '#12122a', borderTop: '1px solid rgba(255,255,255,.08)', maxHeight: '80vh', overflowY: 'auto' }}>
              {NAV.map(item => (
                <div key={item.label}>
                  <div style={{ padding: '12px 20px', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                    {item.label}
                  </div>
                  {item.items.map(sub => (
                    <Link key={sub.href} href={sub.href} style={{ textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
                      <div style={{ padding: '11px 28px', fontSize: 14, color: 'rgba(255,255,255,.75)', borderBottom: '1px solid rgba(255,255,255,.04)', display: 'flex', justifyContent: 'space-between' }}>
                        {sub.label}
                        {sub.sub && <span style={{ fontSize: 11, color: '#B22234', fontWeight: 600 }}>{sub.sub}</span>}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
              <div style={{ padding: 16 }}>
                <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
                  <div style={{ background: '#B22234', color: '#fff', padding: '12px', borderRadius: 4, fontSize: 14, fontWeight: 700, textAlign: 'center' }}>
                    Calculate Now →
                  </div>
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* ━━━ PAGE CONTENT ━━━ */}
        <main>{children}</main>

        {/* ━━━ FOOTER ━━━ */}
        <footer style={{ background: '#1a1a2e', borderTop: '4px solid #B22234', marginTop: 0 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 28 }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: 17, color: '#fff', marginBottom: 10 }}>
                GIGWISE<span style={{ color: '#e8b84b' }}>TAX</span><span style={{ color: 'rgba(255,255,255,.2)', fontWeight: 300, fontSize: 12 }}>.COM</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', lineHeight: 1.8, marginBottom: 14, textAlign: 'justify' }}>
                Free self-employment tax calculators for gig workers across all 50 states and D.C. Updated for tax year 2026. No signup, no fees — ever.
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['🔒 No Data Stored', '🆓 Free Forever', '🇺🇸 USA Only'].map(b => (
                  <span key={b} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 3, padding: '3px 8px', fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{b}</span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>🧮 Calculators</div>
              {[
                { label: '🚗 DoorDash', href: '/doordash' },
                { label: '🚕 Uber', href: '/uber' },
                { label: '🛍️ Etsy', href: '/etsy' },
                { label: '⭐ OnlyFans', href: '/onlyfans' },
                { label: '🛒 Instacart', href: '/instacart' },
                { label: '🏠 Airbnb', href: '/airbnb' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.3)', marginBottom: 8, cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.3)')}
                  >{l.label}</div>
                </Link>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>📅 Deadlines</div>
              {[
                { label: 'Q1 — April 15', href: '/deadlines#q1' },
                { label: 'Q2 — June 16', href: '/deadlines#q2' },
                { label: 'Q3 — Sept 15', href: '/deadlines#q3' },
                { label: 'Q4 — Jan 15', href: '/deadlines#q4' },
                { label: '📍 By State', href: '/deadlines' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.3)', marginBottom: 8, cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.3)')}
                  >{l.label}</div>
                </Link>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>🔧 Tools</div>
              {[
                { label: '💵 Paycheck Calculator', href: '/paycheck' },
                { label: '📋 W-2 vs 1099', href: '/blog/w2-vs-1099' },
                { label: '📚 SE Tax Guide', href: '/blog/quarterly-taxes-gig-workers' },
                { label: '✍️ Blog', href: '/blog' },
                { label: '❓ FAQ', href: '/faq' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.3)', marginBottom: 8, cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.3)')}
                  >{l.label}</div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,.18)' }}>
                © 2026 GigWiseTax.com — Independent estimation tool. Not affiliated with IRS or any government agency.
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18 }}>🇺🇸</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,.18)' }}>Made for U.S. Gig Workers</span>
              </div>
            </div>
          </div>
        </footer>

        <style>{`
          @media (max-width: 900px) {
            .desktop-nav { display: none !important; }
            .desktop-cta { display: none !important; }
            .mobile-hamburger { display: block !important; }
          }
        `}</style>

      </body>
    </html>
  )
}
