// ============================================================
// FILE 1: app/blog/page.tsx — Blog Index
// ============================================================
// Save as: app/blog/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gig Worker Tax Blog 2026 — DoorDash, Uber, OnlyFans, Etsy | GigWiseTax',
  description: 'Free tax guides for gig workers in 2026. Learn how to file taxes for DoorDash, Uber, Etsy, OnlyFans, Instacart, and Airbnb. Quarterly tax deadlines, deductions, and SE tax explained.',
  alternates: { canonical: 'https://gigwisetax.com/blog' },
}

const POSTS = [
  {
    slug: 'doordash-taxes-2026',
    title: 'DoorDash Taxes 2026: Complete Guide for Dashers',
    desc: 'Everything DoorDash drivers need to know about self-employment tax, quarterly payments, deductions, and the 2026 mileage rate ($0.725/mile).',
    date: 'January 15, 2026',
    emoji: '🚗',
    readTime: '8 min read',
    tags: ['DoorDash', 'Mileage', 'SE Tax'],
  },
  {
    slug: 'uber-tax-guide-2026',
    title: 'Uber Driver Tax Guide 2026 — How to File Your 1099',
    desc: 'Complete Uber driver tax guide for 2026. Includes SE tax calculation, top deductions, quarterly payment schedule, and how to file Schedule C.',
    date: 'January 20, 2026',
    emoji: '🚕',
    readTime: '7 min read',
    tags: ['Uber', '1099', 'Schedule C'],
  },
  {
    slug: 'onlyfans-tax-guide-2026',
    title: 'OnlyFans Tax Guide 2026 — How to File as a Creator (USA)',
    desc: 'The only OnlyFans tax guide you need for 2026. Covers SE tax, top deductions for creators, home office, equipment, and quarterly payment deadlines.',
    date: 'January 22, 2026',
    emoji: '⭐',
    readTime: '9 min read',
    tags: ['OnlyFans', 'Creator', '1099-NEC'],
    badge: 'USA #1',
  },
  {
    slug: 'etsy-seller-taxes-2026',
    title: 'Etsy Seller Taxes 2026 — Complete 1099 Filing Guide',
    desc: 'How Etsy sellers pay taxes in 2026. Covers Schedule C, SE tax, COGS deductions, home office, shipping costs, and quarterly estimated payments.',
    date: 'January 25, 2026',
    emoji: '🛍️',
    readTime: '8 min read',
    tags: ['Etsy', 'COGS', 'Schedule C'],
  },
  {
    slug: 'quarterly-taxes-gig-workers',
    title: '2026 Quarterly Tax Guide for Gig Workers — All Deadlines',
    desc: 'Complete guide to quarterly estimated taxes for gig workers in 2026. Covers Q1–Q4 deadlines, how to calculate payments, and how to avoid IRS penalties.',
    date: 'January 10, 2026',
    emoji: '📅',
    readTime: '6 min read',
    tags: ['Quarterly', 'IRS', 'Deadlines'],
  },
  {
    slug: 'airbnb-host-taxes-2026',
    title: 'Airbnb Host Tax Guide 2026 — What Hosts Need to Know',
    desc: 'How Airbnb hosts pay taxes in 2026. 14-day rule, Schedule E vs Schedule C, allowable deductions, and state-specific occupancy taxes explained.',
    date: 'February 1, 2026',
    emoji: '🏠',
    readTime: '9 min read',
    tags: ['Airbnb', 'Schedule E', 'Rental'],
  },
  {
    slug: 'instacart-shopper-taxes-2026',
    title: 'Instacart Shopper Taxes 2026 — Gig Worker Tax Guide',
    desc: 'How Instacart shoppers and delivery workers file taxes in 2026. Includes SE tax, mileage deduction, and quarterly payment schedule.',
    date: 'February 5, 2026',
    emoji: '🛒',
    readTime: '7 min read',
    tags: ['Instacart', 'Mileage', '1099'],
  },
  {
    slug: 'w2-vs-1099-guide-2026',
    title: 'W-2 vs 1099 in 2026 — What Gig Workers Need to Know',
    desc: 'Understand the key differences between W-2 employment and 1099 self-employment in 2026. Covers taxes, deductions, and quarterly payment rules.',
    date: 'February 10, 2026',
    emoji: '📋',
    readTime: '6 min read',
    tags: ['W-2', '1099', 'Self-Employment'],
  },
]

export default function BlogIndex() {
  const card = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }

  return (
    <div style={{ background: '#eef0f4', minHeight: '100vh' }}>
      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{ width: 4, height: 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }}/>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: 0 }}>
              ✍️ Gig Worker Tax Blog — 2026 Guides
            </h1>
          </div>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, paddingLeft: 16, maxWidth: 700, textAlign: 'justify' }}>
            Free tax guides for DoorDash, Uber, Etsy, OnlyFans, Instacart, and Airbnb workers.
            Learn how self-employment taxes work, which deductions to claim, and when to pay your quarterly taxes in 2026.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: 20 }}>
          {POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ ...card, height: '100%', transition: 'transform .18s, box-shadow .18s' }}>
                <div style={{ background: '#1a1a2e', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 24 }}>{post.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
                      {post.tags.map(t => (
                        <span key={t} style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 10, padding: '2px 7px', borderRadius: 2, fontWeight: 600 }}>{t}</span>
                      ))}
                      {post.badge && <span style={{ background: '#B22234', color: '#fff', fontSize: 10, padding: '2px 7px', borderRadius: 2, fontWeight: 700 }}>{post.badge}</span>}
                    </div>
                  </div>
                </div>
                <div style={{ padding: 20 }}>
                  <h2 style={{ fontSize: 16, fontWeight: 800, color: '#1a1a2e', marginBottom: 10, lineHeight: 1.35 }}>{post.title}</h2>
                  <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, marginBottom: 14, textAlign: 'justify' }}>{post.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>{post.date}</span>
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>{post.readTime}</span>
                  </div>
                  <div style={{ marginTop: 12, background: '#B22234', color: '#fff', padding: '8px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>
                    Read Guide →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
