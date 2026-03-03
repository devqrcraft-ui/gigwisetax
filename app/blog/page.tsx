import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gig Worker Tax Blog 2026 — Free Guides | GigWiseTax',
  description: 'Free tax guides for gig workers in 2026. DoorDash, Uber, OnlyFans, Etsy tax tips.',
}

const posts = [
  { slug: 'quarterly-taxes-gig-workers', title: 'Quarterly Taxes for Gig Workers 2026', desc: 'How to pay quarterly estimated taxes. Deadlines and how to avoid IRS penalties.', tag: 'Must Read', tagColor: '#ff4444', date: 'Jan 2026' },
  { slug: 'self-employment-tax-deductions-2026', title: 'Complete Self-Employment Tax Deductions 2026', desc: 'Every deduction available to gig workers — mileage, home office, QBI, and more.', tag: 'Big Savings', tagColor: '#e8b84b', date: 'Jan 2026' },
  { slug: 'onlyfans-tax-guide-2026', title: 'OnlyFans Taxes 2026 — Complete Creator Guide', desc: 'How to file OnlyFans taxes. 1099 form, deductions, quarterly payments.', tag: 'Creators', tagColor: '#a5b4fc', date: 'Jan 2026' },
  { slug: 'amazon-flex-taxes-2026', title: 'Amazon Flex Taxes 2026 — Driver Tax Guide', desc: 'Tax guide for Amazon Flex drivers. Mileage deduction, SE tax, quarterly payments.', tag: 'Drivers', tagColor: '#86efac', date: 'Jan 2026' },
  { slug: 'mileage-rate-2026', title: 'IRS Mileage Rate 2026 — $0.725 per Mile', desc: 'The 2026 IRS standard mileage rate. How to track and deduct mileage.', tag: 'Mileage', tagColor: '#86efac', date: 'Jan 2026' },
  { slug: 'grubhub-vs-doordash-taxes-2026', title: 'Grubhub vs DoorDash Taxes 2026', desc: 'Tax differences between Grubhub and DoorDash platforms.', tag: 'Comparison', tagColor: '#a5b4fc', date: 'Jan 2026' },
  { slug: 'w2-vs-1099-guide-2026', title: 'W-2 vs 1099: Tax Differences Explained 2026', desc: 'How 1099 gig work affects your taxes vs traditional W-2 employment.', tag: 'Basics', tagColor: '#fca5a5', date: 'Jan 2026' },
]

export default function BlogPage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 12 }}>Gig Worker Tax Blog</h1>
      <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
        Free tax guides for 1099 workers. Updated for 2026. No signup required.
      </p>
      <div style={{ display: 'grid', gap: 16 }}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ background: post.tagColor + '22', color: post.tagColor, padding: '3px 10px', borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{post.tag}</span>
                <span style={{ color: 'rgba(255,255,255,.3)', fontSize: 13 }}>{post.date}</span>
              </div>
              <h2 style={{ fontSize: 19, fontWeight: 800, marginBottom: 8, color: '#fff', lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{post.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center', marginTop: 40 }}>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Ready to Calculate Your Taxes?</div>
        <a href="/" style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>Free Calculator</a>
      </div>
    </main>
  )
}
