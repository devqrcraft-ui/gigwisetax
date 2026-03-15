import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gig Worker Tax Guides 2026 — DoorDash, Uber, Etsy, OnlyFans & More',
  description: 'Free 2026 tax guides for every gig platform: DoorDash, Uber, Lyft, Instacart, Amazon Flex, Airbnb, Etsy, OnlyFans. Deductions, quarterly taxes, Schedule C explained.',
  keywords: 'gig worker tax blog 2026, 1099 tax guides, self employment tax tips, delivery driver taxes',
}

const posts = [
  {
    "slug": "quarterly-taxes-gig-workers",
    "title": "Quarterly Taxes for Gig Workers 2026",
    "desc": "Deadlines, amounts, how to avoid IRS penalties.",
    "tag": "Must Read",
    "tagColor": "#ff4444",
    "date": "Jan 2026"
  },
  {
    "slug": "self-employment-tax-deductions-2026",
    "title": "Complete Tax Deductions List 2026",
    "desc": "Every deduction — mileage, home office, QBI, health insurance.",
    "tag": "Big Savings",
    "tagColor": "#e8b84b",
    "date": "Jan 2026"
  },
  {
    "slug": "onlyfans-tax-guide-2026",
    "title": "OnlyFans Taxes 2026 — Creator Guide",
    "desc": "1099 form, deductions for creators, quarterly payments.",
    "tag": "Creators",
    "tagColor": "#a5b4fc",
    "date": "Jan 2026"
  },
  {
    "slug": "airbnb-host-taxes-2026",
    "title": "Airbnb Host Taxes 2026 — Complete Guide",
    "desc": "Schedule E vs C, cleaning deductions, depreciation.",
    "tag": "Hosts",
    "tagColor": "#86efac",
    "date": "Mar 2026"
  },
  {
    "slug": "instacart-tax-guide-2026",
    "title": "Instacart Shopper Taxes 2026",
    "desc": "Mileage deduction, 1099-NEC, quarterly payments guide.",
    "tag": "Shoppers",
    "tagColor": "#86efac",
    "date": "Mar 2026"
  },
  {
    "slug": "lyft-driver-taxes-2026",
    "title": "Lyft Driver Taxes 2026",
    "desc": "Mileage, deadhead miles, 1099-NEC guide.",
    "tag": "Drivers",
    "tagColor": "#a5b4fc",
    "date": "Mar 2026"
  },
  {
    "slug": "grubhub-driver-taxes-2026",
    "title": "Grubhub Driver Taxes 2026",
    "desc": "Complete tax guide for Grubhub delivery drivers.",
    "tag": "Drivers",
    "tagColor": "#a5b4fc",
    "date": "Mar 2026"
  },
  {
    "slug": "walmart-spark-taxes-2026",
    "title": "Walmart Spark Driver Taxes 2026",
    "desc": "Tax guide for Walmart Spark delivery drivers.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "Mar 2026"
  },
  {
    "slug": "turo-host-taxes-2026",
    "title": "Turo Host Taxes 2026",
    "desc": "Depreciation, insurance, platform fees — complete Turo guide.",
    "tag": "Hosts",
    "tagColor": "#e8b84b",
    "date": "Mar 2026"
  },
  {
    "slug": "amazon-flex-taxes-2026",
    "title": "Amazon Flex Taxes 2026",
    "desc": "Mileage deduction, SE tax, quarterly payments.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "Jan 2026"
  },
  {
    "slug": "mileage-rate-2026",
    "title": "IRS Mileage Rate 2026 — $0.67/Mile",
    "desc": "How to track and deduct mileage for maximum savings.",
    "tag": "Mileage",
    "tagColor": "#e8b84b",
    "date": "Jan 2026"
  },
  {
    "slug": "grubhub-vs-doordash-taxes-2026",
    "title": "Grubhub vs DoorDash Taxes 2026",
    "desc": "Tax differences between the two delivery platforms.",
    "tag": "Comparison",
    "tagColor": "#a5b4fc",
    "date": "Jan 2026"
  },
  {
    "slug": "w2-vs-1099-guide-2026",
    "title": "W-2 vs 1099 Tax Differences 2026",
    "desc": "How 1099 gig work affects your taxes vs W-2.",
    "tag": "Basics",
    "tagColor": "#fca5a5",
    "date": "Jan 2026"
  }
]

export default function BlogPage() {
  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What gig platforms does GigWiseTax cover?","acceptedAnswer":{"@type":"Answer","text":"GigWiseTax covers DoorDash, Uber, Lyft, Instacart, Amazon Flex, Grubhub, Turo, Airbnb, Etsy, OnlyFans, Walmart Spark, and more. Each platform has a dedicated tax calculator and guide for all 50 states."}},{"@type":"Question","name":"Are gig worker tax guides free on GigWiseTax?","acceptedAnswer":{"@type":"Answer","text":"Yes. All tax guides, calculators, and blog articles on GigWiseTax are completely free. There is no account required. Your income data never leaves your browser."}},{"@type":"Question","name":"How current is the tax information on GigWiseTax?","acceptedAnswer":{"@type":"Answer","text":"All guides reflect 2026 IRS rules including the current standard mileage rate (67 cents/mile), updated federal tax brackets, and the latest state tax rates. Pages are updated whenever the IRS releases new guidance."}}]}' }} />
      <main style={{ maxWidth: 900, margin: '0 auto', width: '100%', color: '#fff', padding: '48px 16px' }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 12 }}>Gig Worker Tax Blog</h1>
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
          Free, no-nonsense tax guides for 1099 workers. Updated for 2026 IRS rules. No signup required.
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
    </div>
  )
}
