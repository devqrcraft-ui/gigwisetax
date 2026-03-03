import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gig Worker Tax Blog 2026 — GigWiseTax.com',
  description: 'Free guides on gig worker taxes, quarterly payments, deductions, and IRS deadlines for 2026. DoorDash, Uber, Etsy, OnlyFans, and more.',
}

const POSTS = [
  {
    slug: 'amazon-flex-taxes-2026',
    title: 'Amazon Flex Taxes 2026: Complete Guide for Drivers',
    desc: 'How to calculate, pay, and minimize taxes as an Amazon Flex driver. SE tax, mileage deductions, quarterly payments, and every deduction you qualify for.',
    date: 'January 15, 2026',
    readTime: '8 min read',
    tags: ['Amazon Flex', 'Delivery', 'Mileage'],
    emoji: '📦',
  },
  {
    slug: 'mileage-rate-2026',
    title: 'IRS Mileage Rate 2026: 72.5¢/Mile — What Gig Workers Need to Know',
    desc: 'The IRS standard mileage rate for 2026 is 72.5 cents per mile. Here\'s how to use it, when to use actual expenses instead, and how to track miles properly.',
    date: 'January 3, 2026',
    readTime: '5 min read',
    tags: ['Mileage', 'IRS', 'Deductions'],
    emoji: '🚗',
  },
  {
    slug: 'onlyfans-taxes-2026',
    title: 'OnlyFans Taxes 2026: What Creators Need to Know',
    desc: 'OnlyFans income is self-employment income. Learn how to calculate SE tax, what you can deduct (equipment, lighting, subscriptions), and how to pay quarterly.',
    date: 'January 8, 2026',
    readTime: '7 min read',
    tags: ['OnlyFans', 'Creator', '1099'],
    emoji: '⭐',
  },
  {
    slug: 'quarterly-taxes-gig-workers',
    title: 'How to Pay Quarterly Taxes as a Gig Worker in 2026',
    desc: 'Step-by-step guide to IRS estimated tax payments. Deadlines, how to calculate, how to pay online, and how to avoid underpayment penalties.',
    date: 'December 28, 2025',
    readTime: '9 min read',
    tags: ['Quarterly Taxes', 'IRS', 'Deadlines'],
    emoji: '📅',
  },
  {
    slug: 'w2-vs-1099-guide-2026',
    title: 'W-2 vs 1099: Tax Differences Every Gig Worker Must Know',
    desc: 'Side-by-side comparison of employee vs. independent contractor taxes. Why gig workers pay more, and how to legally reduce your bill.',
    date: 'December 15, 2025',
    readTime: '6 min read',
    tags: ['1099', 'W-2', 'Self-Employment'],
    emoji: '📋',
  },
  {
    slug: 'grubhub-vs-doordash-taxes-2026',
    title: 'Grubhub vs DoorDash Taxes 2026: Are They Different?',
    desc: 'Both platforms classify drivers as 1099 contractors. But your deductions, income patterns, and best strategies may differ. Full comparison here.',
    date: 'January 20, 2026',
    readTime: '6 min read',
    tags: ['Grubhub', 'DoorDash', 'Comparison'],
    emoji: '🍔',
  },
  {
    slug: 'home-office-deduction-gig-workers-2026',
    title: 'Home Office Deduction for Gig Workers 2026: Full Guide',
    desc: 'Can Uber drivers, Etsy sellers, and OnlyFans creators deduct a home office? Yes — if you meet IRS requirements. Here\'s exactly how to qualify and calculate.',
    date: 'January 25, 2026',
    readTime: '7 min read',
    tags: ['Home Office', 'Deductions', 'Schedule C'],
    emoji: '🏠',
  },
  {
    slug: 'walmart-spark-taxes-2026',
    title: 'Walmart Spark Driver Taxes 2026: The Complete Guide',
    desc: 'Walmart Spark is booming — but most drivers don\'t know they owe quarterly taxes. Here\'s everything you need to know about Spark taxes, deductions, and deadlines.',
    date: 'February 1, 2026',
    readTime: '8 min read',
    tags: ['Walmart Spark', 'Delivery', '1099'],
    emoji: '🛒',
  },
]

export default function BlogPage() {
  return (
    <div style={{ background: '#eef0f4', minHeight: '100vh' }}>

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> › Blog
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: 0 }}>
            ✍️ Gig Worker Tax Blog 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, marginTop: 10, marginBottom: 0 }}>
            Free guides on taxes, deductions, and quarterly payments for DoorDash, Uber, Etsy, OnlyFans, Instacart, and more.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,.05)', height: '100%', display: 'flex', flexDirection: 'column' as const, cursor: 'pointer' }}              >
                <div style={{ background: '#1a1a2e', padding: '20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 32 }}>{post.emoji}</span>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
                    {post.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(232,184,75,.15)', color: '#e8b84b', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 3, border: '1px solid rgba(232,184,75,.3)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' as const }}>
                  <h2 style={{ fontSize: 15, fontWeight: 800, color: '#1a1a2e', lineHeight: 1.4, margin: '0 0 10px' }}>{post.title}</h2>
                  <p style={{ fontSize: 13, color: '#6c757d', lineHeight: 1.7, flex: 1, margin: '0 0 16px' }}>{post.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>{post.date}</span>
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>{post.readTime}</span>
                  </div>
                </div>
                <div style={{ padding: '12px 20px', borderTop: '1px solid #f0f1f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#B22234', fontWeight: 700 }}>Read Guide →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
