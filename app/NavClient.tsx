'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  {
    label: 'Calculators',
    items: [
      { label: '🚗 DoorDash Tax Calculator',    href: '/doordash',    sub: '400K/mo' },
      { label: '🚕 Uber Driver Tax Calculator', href: '/uber',        sub: '300K/mo' },
      { label: '🛍️ Etsy Seller Tax Calculator', href: '/etsy',        sub: '200K/mo' },
      { label: '⭐ OnlyFans Tax Calculator',     href: '/onlyfans',    sub: 'USA #1'  },
      { label: '🛒 Instacart Tax Calculator',   href: '/instacart',   sub: '150K/mo' },
      { label: '🏠 Airbnb Host Tax Calculator', href: '/airbnb',      sub: '120K/mo' },
      { label: '📦 Amazon Flex Tax Calculator', href: '/amazon-flex', sub: '80K/mo'  },
      { label: '🚖 Lyft Driver Tax Calculator', href: '/lyft',        sub: '70K/mo'  },
    ],
  },
  {
    label: 'Deadlines 2026',
    items: [
      { label: '⚠️ Q1 — April 15, 2026',     href: '/deadlines#q1', sub: '45 days'  },
      { label: 'Q2 — June 16, 2026',         href: '/deadlines#q2', sub: '107 days' },
      { label: 'Q3 — September 15, 2026',    href: '/deadlines#q3', sub: '198 days' },
      { label: 'Q4 — January 15, 2027',      href: '/deadlines#q4', sub: '320 days' },
      { label: '🗺️ All Deadlines by State',  href: '/deadlines',    sub: '51 states'},
    ],
  },
  {
    label: 'By State',
    items: [
      { label: '🌴 California (9.3%)',        href: '/doordash/california' },
      { label: '🗽 New York (6.85%)',         href: '/doordash/new-york'   },
      { label: '⭐ Texas (No Tax)',            href: '/doordash/texas'      },
      { label: '🌊 Florida (No Tax)',         href: '/doordash/florida'    },
      { label: '🏙️ Illinois (4.95%)',         href: '/doordash/illinois'   },
      { label: '→ All 51 States',            href: '/calculators'          },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: '📋 W-2 vs 1099 Guide',  href: '/blog/w2-vs-1099-guide-2026'       },
      { label: '📚 SE Tax Guide',       href: '/blog/quarterly-taxes-gig-workers' },
      { label: '✍️ Blog',               href: '/blog'                              },
    ],
  },
]

export default function NavClient() {
  const [openNav, setOpenNav] = useState<string|null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header style={{ background:'#1a1a2e', position:'sticky', top:0, zIndex:100, boxShadow:'0 2px 16px rgba(0,0,0,.4)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 20px', display:'flex', alignItems:'center', justifyContent:'space-between', height:60 }}>

        <Link href="/" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:38, height:38, background:'linear-gradient(135deg,#B22234,#3C3B6E)', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="4" width="16" height="2" rx="1" fill="white" opacity=".9"/>
              <rect x="2" y="9" width="16" height="2" rx="1" fill="white" opacity=".9"/>
              <rect x="2" y="14" width="10" height="2" rx="1" fill="white" opacity=".9"/>
            </svg>
          </div>
          <div>
            <div style={{ fontWeight:900, fontSize:19, color:'#fff', letterSpacing:'-0.5px', lineHeight:1.1 }}>
              GIGWISE<span style={{ color:'#e8b84b' }}>TAX</span><span style={{ color:'rgba(255,255,255,.2)', fontWeight:300, fontSize:13 }}>.COM</span>
            </div>
            <div style={{ fontSize:9, color:'rgba(255,255,255,.3)', letterSpacing:'2px', textTransform:'uppercase' }}>Free · Independent · United States</div>
          </div>
        </Link>

        <nav style={{ display:'flex', gap:2 }} className="desktop-nav">
          {NAV.map(item => (
            <div key={item.label} style={{ position:'relative' }}
              onMouseEnter={() => setOpenNav(item.label)}
              onMouseLeave={() => setOpenNav(null)}
            >
              <div style={{ padding:'8px 14px', cursor:'pointer', fontSize:13.5, fontWeight:500,
                color: openNav===item.label ? '#fff' : 'rgba(255,255,255,.65)',
                borderBottom: openNav===item.label ? '2px solid #e8b84b' : '2px solid transparent',
                whiteSpace:'nowrap', userSelect:'none' }}>
                {item.label} <span style={{ fontSize:9, opacity:.5 }}>▾</span>
              </div>
              {openNav===item.label && (
                <div style={{ position:'absolute', top:'100%', left:0, background:'#fff', border:'1px solid #e2e5e9',
                  borderRadius:6, minWidth:240, zIndex:200, boxShadow:'0 10px 32px rgba(0,0,0,.15)', overflow:'hidden' }}>
                  <div style={{ background:'#1a1a2e', padding:'8px 14px', fontSize:10, fontWeight:700, color:'rgba(255,255,255,.45)', textTransform:'uppercase', letterSpacing:'1px' }}>{item.label}</div>
                  {item.items.map(sub => (
                    <Link key={sub.href} href={sub.href} style={{ textDecoration:'none' }} onClick={() => setOpenNav(null)}>
                      <div style={{ padding:'10px 14px', borderBottom:'1px solid #f3f4f6', display:'flex', justifyContent:'space-between', alignItems:'center' }}
                        onMouseEnter={e => (e.currentTarget.style.background='#f0f4ff')}
                        onMouseLeave={e => (e.currentTarget.style.background='transparent')}>
                        <span style={{ fontSize:13, color:'#1a1a2e', fontWeight:500 }}>{sub.label}</span>
                        {sub.sub && <span style={{ fontSize:11, color:'#B22234', fontWeight:600, marginLeft:8 }}>{sub.sub}</span>}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div style={{ display:'flex', gap:10, alignItems:'center' }} className="desktop-cta">
          <span style={{ fontSize:12, color:'rgba(255,255,255,.3)' }}>🔒 No data stored</span>
          <Link href="/" style={{ textDecoration:'none' }}>
            <div style={{ background:'#B22234', color:'#fff', padding:'8px 18px', borderRadius:4, fontSize:13, fontWeight:700, cursor:'pointer' }}>Calculate Now →</div>
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display:'none', background:'none', border:'none', color:'#fff', fontSize:24, cursor:'pointer', padding:'4px 8px' }}
          className="mobile-hamburger" aria-label="Menu">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background:'#12122a', borderTop:'1px solid rgba(255,255,255,.08)', maxHeight:'80vh', overflowY:'auto' }}>
          {NAV.map(item => (
            <div key={item.label}>
              <div style={{ padding:'12px 20px', fontSize:13, fontWeight:700, color:'rgba(255,255,255,.5)', textTransform:'uppercase', letterSpacing:'1px', borderBottom:'1px solid rgba(255,255,255,.06)' }}>{item.label}</div>
              {item.items.map(sub => (
                <Link key={sub.href} href={sub.href} style={{ textDecoration:'none' }} onClick={() => setMobileOpen(false)}>
                  <div style={{ padding:'11px 28px', fontSize:14, color:'rgba(255,255,255,.75)', borderBottom:'1px solid rgba(255,255,255,.04)', display:'flex', justifyContent:'space-between' }}>
                    {sub.label}
                    {sub.sub && <span style={{ fontSize:11, color:'#B22234', fontWeight:600 }}>{sub.sub}</span>}
                  </div>
                </Link>
              ))}
            </div>
          ))}
          <div style={{ padding:16 }}>
            <Link href="/" style={{ textDecoration:'none' }} onClick={() => setMobileOpen(false)}>
              <div style={{ background:'#B22234', color:'#fff', padding:'12px', borderRadius:4, fontSize:14, fontWeight:700, textAlign:'center' }}>Calculate Now →</div>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
