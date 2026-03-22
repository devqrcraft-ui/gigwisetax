'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  {
    label: 'Calculators',
    items: [
      { label: '▸ DoorDash Tax Calculator',      href: '/doordash',      sub: '400K/mo' },
      { label: '▸ Uber Driver Tax Calculator',   href: '/uber',          sub: '300K/mo' },
      { label: '▸ Etsy Seller Tax Calculator',   href: '/etsy',          sub: '200K/mo' },
      { label: '▸ OnlyFans Tax Calculator',       href: '/onlyfans',      sub: 'USA #1'  },
      { label: '▸ Instacart Tax Calculator',     href: '/instacart',     sub: '150K/mo' },
      { label: '▸ Airbnb Host Tax Calculator',   href: '/airbnb',        sub: '120K/mo' },
      { label: '▸ Amazon Flex Tax Calculator',   href: '/amazon-flex',   sub: '80K/mo'  },
      { label: '▸ Lyft Driver Tax Calculator',   href: '/lyft',          sub: '70K/mo'  },
      { label: '▸ Grubhub Tax Calculator',       href: '/grubhub',       sub: 'NEW'     },
      { label: '▸ Walmart Spark Tax Calculator', href: '/walmart-spark', sub: 'NEW'     },
      { label: '🚘 Turo Host Tax Calculator',     href: '/turo',          sub: 'NEW'     },
    ],
  },
  {
    label: 'Tax Tools',
    items: [
      { label: '🔍 Tax Penalty Finder',           href: '/tax-penalty-finder',        sub: 'NEW'  },
      { label: '🏢 S-Corp vs Sole Prop',          href: '/s-corp-calculator',         sub: 'NEW'  },
      { label: '✅ Deductions Checklist',          href: '/deductions',                sub: 'NEW'  },
      { label: ' Quarterly Reminders',          href: '/quarterly-reminder',        sub: 'FREE' },
      { label: '▸ Multi-App Gig Taxes',          href: '/multi-app-gig-taxes-2026',  sub: 'NEW'  },
      { label: '🛡️ Safe Harbor Guide',            href: '/safe-harbor-quarterly-taxes', sub: 'NEW' },
      { label: '🔢 How We Calculate',             href: '/how-we-calculate-gig-taxes', sub: 'NEW'  },
      { label: '⚠️ Q1 — April 15, 2026',         href: '/deadlines#q1',         sub: 'URGENT' },
      { label: 'Q2 — June 16, 2026',             href: '/deadlines#q2',         sub: '104 days' },
      { label: 'Q3 — Sept 15, 2026',             href: '/deadlines#q3',         sub: '195 days' },
      { label: 'Q4 — Jan 15, 2027',              href: '/deadlines#q4',         sub: '317 days' },
    ],
  },
  {
    label: 'By State',
    items: [
      { label: '🌴 California (9.3%)',  href: '/doordash/california' },
      { label: '🗽 New York (6.85%)',   href: '/doordash/new-york'   },
      { label: '▸ Texas (No Tax)',      href: '/doordash/texas'      },
      { label: '🌊 Florida (No Tax)',   href: '/doordash/florida'    },
      { label: '🏙️ Illinois (4.95%)',   href: '/doordash/illinois'   },
      { label: '→ All 51 States',      href: '/calculators'          },
    ],
  },
  {
    label: 'Tax Center',
    items: [
      { label: '🏛️ Gig Worker Tax Center 2026', href: '/gig-worker-taxes-2026', sub: 'HUB' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: '▸ Amazon Flex Taxes 2026',  href: '/blog/amazon-flex-taxes-2026'         },
      { label: '▸ Mileage Rate 2026',       href: '/blog/mileage-rate-2026'              },
      { label: '▸ Grubhub vs DoorDash',     href: '/blog/grubhub-vs-doordash-taxes-2026' },
      { label: ' W-2 vs 1099 Guide',       href: '/blog/w2-vs-1099-guide-2026'          },
      { label: '📚 Quarterly Taxes Guide',   href: '/blog/quarterly-taxes-gig-workers'    },
      { label: '✍️ All Blog Posts',          href: '/blog'                                },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'ℹ️ About GigWiseTax', href: '/about'   },
      { label: ' Privacy Policy',   href: '/privacy' },
      { label: ' Terms of Service', href: '/terms'   },
      { label: '📧 Contact Us',       href: '/contact' },
    ],
  },
]

export default function NavClient() {
  const [openNav, setOpenNav]     = useState<string|null>(null)
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
            <div style={{ fontSize:9, color:'rgba(255,255,255,.3)', letterSpacing:'2px', textTransform:'uppercase' as const }}>Free · Independent · United States</div>
          </div>
        </Link>

        <nav style={{ display:'flex', gap:2 }} className="desktop-nav">
          {NAV.map(item => (
            <div key={item.label} style={{ position:'relative' as const }}
              onMouseEnter={() => setOpenNav(item.label)}
              onMouseLeave={(e) => {
                const related = e.relatedTarget as Node;
                if (!e.currentTarget.contains(related)) setOpenNav(null);
              }}
            >
              <div style={{ padding:'8px 14px', cursor:'pointer', fontSize:13.5, fontWeight:500,
                color: openNav===item.label ? '#fff' : 'rgba(255,255,255,.65)',
                borderBottom: openNav===item.label ? '2px solid #e8b84b' : '2px solid transparent',
                whiteSpace:'nowrap' as const, userSelect:'none' as const }}>
                {item.label} <span style={{ fontSize:9, opacity:.5 }}>▾</span>
              </div>
              {openNav===item.label && (
                <div style={{ position:'absolute' as const, top:'100%', left:0, background:'#fff', border:'1px solid #e2e5e9',
                  borderRadius:6, minWidth:260, zIndex:200, boxShadow:'0 10px 32px rgba(0,0,0,.15)', overflow:'hidden' as const, marginTop:0 }}>
                  <div style={{ background:'#1a1a2e', padding:'8px 14px', fontSize:10, fontWeight:700, color:'rgba(255,255,255,.45)', textTransform:'uppercase' as const, letterSpacing:'1px' }}>{item.label}</div>
                  {item.items.map(sub => (
                    <Link key={sub.href} href={sub.href} style={{ textDecoration:'none' }} onClick={() => setOpenNav(null)}>
                      <div style={{ padding:'10px 14px', borderBottom:'1px solid #f3f4f6', display:'flex', justifyContent:'space-between', alignItems:'center' }}
                        onMouseEnter={e => (e.currentTarget.style.background='#f0f4ff')}
                        onMouseLeave={e => (e.currentTarget.style.background='transparent')}>
                        <span style={{ fontSize:13, color:'#1a1a2e', fontWeight:500 }}>{sub.label}</span>
                        {sub.sub && (
                          <span style={{ fontSize:11, color: sub.sub==='NEW'||sub.sub==='FREE' ? '#059669' : sub.sub==='URGENT' ? '#B22234' : '#6b7280', fontWeight:600, marginLeft:8 }}>
                            {sub.sub}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div style={{ display:'flex', gap:10, alignItems:'center' }} className="desktop-cta">
          <span style={{ fontSize:12, color:'rgba(255,255,255,.3)' }}> No data stored</span>
          <Link href="/tax-penalty-finder" style={{ textDecoration:'none' }}>
            <div style={{ background:'#B22234', color:'#fff', padding:'8px 18px', borderRadius:4, fontSize:13, fontWeight:700, cursor:'pointer' }}>
              Find My Savings →
            </div>
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display:'none', background:'none', border:'none', color:'#fff', fontSize:24, cursor:'pointer', padding:'4px 8px' }}
          className="mobile-hamburger" aria-label="Menu">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background:'#12122a', borderTop:'1px solid rgba(255,255,255,.08)', maxHeight:'80vh', overflowY:'auto' as const }}>
          {NAV.map(item => (
            <div key={item.label}>
              <div style={{ padding:'10px 16px 6px', fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase' as const, letterSpacing:'1px', borderBottom:'1px solid rgba(255,255,255,.06)' }}>{item.label}</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', padding:'4px 12px 8px' }}>
              {item.items.map(sub => (
                <Link key={sub.href} href={sub.href} style={{ textDecoration:'none' }} onClick={() => setMobileOpen(false)}>
                  <div style={{ padding:'8px 10px', fontSize:13, color:'rgba(255,255,255,.8)', display:'flex', flexDirection:'column', gap:2, borderRadius:4, margin:'2px' }}
                    onTouchStart={e => (e.currentTarget.style.background='rgba(255,255,255,.06)')}
                    onTouchEnd={e => (e.currentTarget.style.background='transparent')}>
                    <span style={{ lineHeight:1.3 }}>{sub.label}</span>
                    {sub.sub && <span style={{ fontSize:10, color: sub.sub==='NEW'||sub.sub==='FREE' ? '#059669' : sub.sub==='URGENT' ? '#B22234' : '#6b7280', fontWeight:700 }}>{sub.sub}</span>}
                  </div>
                </Link>
              ))}
              </div>
            </div>
          ))}
          <div style={{ padding:16 }}>
            <Link href="/tax-penalty-finder" style={{ textDecoration:'none' }} onClick={() => setMobileOpen(false)}>
              <div style={{ background:'#B22234', color:'#fff', padding:'12px', borderRadius:4, fontSize:14, fontWeight:700, textAlign:'center' as const }}>Find My Tax Savings →</div>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
