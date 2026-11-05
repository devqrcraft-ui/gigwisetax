import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  alternates: { canonical: 'https://www.gigwisetax.com/blog' },
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
    "title": "IRS Mileage Rate 2026 — 72.5¢ / 76¢ per Mile",
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
    "slug": "doordash-taxes-2026",
    "title": "DoorDash Taxes 2026: 1099, Mileage & Quarterly Tax Guide",
    "desc": "How DoorDash income is taxed, what mileage you can deduct and when to pay.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "Nov 2026"
  },
  {
    "slug": "doordash-tax-calculator-2026",
    "title": "DoorDash Tax Calculator 2026 — Free SE Tax Estimator",
    "desc": "Estimate self-employment tax on DoorDash earnings.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "Jun 2026"
  },
  {
    "slug": "self-employment-tax-rate-2026",
    "title": "Self-Employment Tax Rate 2026: 15.3% Explained + Calculator",
    "desc": "How the 15.3% self-employment tax is calculated, with a calculator.",
    "tag": "Guide",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "gig-worker-tax-deadlines-2026",
    "title": "Gig Worker Tax Deadlines 2026 — Quarterly Payment Dates",
    "desc": "Estimated tax due dates for 2026 and what each quarter covers.",
    "tag": "Guide",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "uber-tax-guide-2026",
    "title": "Uber Driver Tax Guide 2026 — How to File Your 1099",
    "desc": "Filing your 1099 income, deductions and estimated payments as an Uber driver.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "May 2026"
  },
  {
    "slug": "uber-eats-tax-guide-2026",
    "title": "Uber Eats Driver Taxes 2026 Guide",
    "desc": "Taxes for Uber Eats delivery drivers: income, mileage and quarterly payments.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "May 2026"
  },
  {
    "slug": "doordash-vs-uber-eats-taxes-2026",
    "title": "DoorDash vs Uber Eats Taxes 2026: Which Platform Pays More After Tax?",
    "desc": "Side-by-side tax comparison for DoorDash and Uber Eats drivers.",
    "tag": "Comparison",
    "tagColor": "#a5b4fc",
    "date": "May 2026"
  },
  {
    "slug": "amazon-flex-tax-guide-2026",
    "title": "Amazon Flex Tax Guide 2026 — Save More With Every Deduction",
    "desc": "Deductions, mileage and tax basics for Amazon Flex drivers.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "May 2026"
  },
  {
    "slug": "walmart-spark-tax-guide-2026",
    "title": "Walmart Spark Driver Tax Guide 2026: Deductions + Free Calculator",
    "desc": "Deductions and a free calculator for Walmart Spark drivers.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "May 2026"
  },
  {
    "slug": "walmart-spark-driver-taxes-2026",
    "title": "Walmart Spark Driver Taxes 2026 — Complete Tax Guide",
    "desc": "A complete tax guide for Walmart Spark drivers.",
    "tag": "Drivers",
    "tagColor": "#86efac",
    "date": "May 2026"
  },
  {
    "slug": "instacart-shopper-taxes-2026",
    "title": "Instacart Shopper Tax Calculator 2026: Deductions & Estimate",
    "desc": "Estimate taxes and find deductions as an Instacart shopper.",
    "tag": "Shoppers",
    "tagColor": "#a5b4fc",
    "date": "Nov 2026"
  },
  {
    "slug": "instacart-tax-deductions-2026",
    "title": "Instacart Tax Deductions 2026: Shopper Checklist + Free Calculator",
    "desc": "A deductions checklist and free calculator for Instacart shoppers.",
    "tag": "Shoppers",
    "tagColor": "#a5b4fc",
    "date": "May 2026"
  },
  {
    "slug": "shipt-taxes-2026",
    "title": "Shipt Shopper Taxes 2026 — Free Tax Calculator + Guide",
    "desc": "Tax guide and free calculator for Shipt shoppers.",
    "tag": "Shoppers",
    "tagColor": "#a5b4fc",
    "date": "Jun 2026"
  },
  {
    "slug": "etsy-seller-taxes-2026",
    "title": "Etsy Seller Taxes 2026 — Complete 1099 Filing Guide",
    "desc": "How Etsy sellers report income and file 1099 forms.",
    "tag": "Creators",
    "tagColor": "#a5b4fc",
    "date": "May 2026"
  },
  {
    "slug": "etsy-taxes-2026",
    "title": "Etsy Seller Taxes 2026: Income, Tax Owed and Quarterly Payments",
    "desc": "A worked example of what an Etsy seller owes in 2026.",
    "tag": "Creators",
    "tagColor": "#a5b4fc",
    "date": "May 2026"
  },
  {
    "slug": "fiverr-taxes-2026",
    "title": "Fiverr Taxes 2026: Freelancer Tax Guide",
    "desc": "Taxes for Fiverr freelancers with a worked example.",
    "tag": "Freelancers",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "upwork-taxes-2026",
    "title": "Upwork Taxes 2026: Freelancer Tax Guide",
    "desc": "Taxes for Upwork freelancers with a worked example.",
    "tag": "Freelancers",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "taskrabbit-taxes-2026",
    "title": "TaskRabbit Taxes 2026: Tasker Tax Guide",
    "desc": "Taxes for TaskRabbit taskers with a worked example.",
    "tag": "Freelancers",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "rover-taxes-2026",
    "title": "Rover Taxes 2026: Pet Sitter Tax Guide",
    "desc": "Taxes for Rover sitters with a worked example.",
    "tag": "Freelancers",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "airbnb-tax-calculator-2026",
    "title": "Airbnb Tax Calculator 2026: Schedule E vs Schedule C",
    "desc": "Estimate Airbnb host taxes and see how Schedule E and C differ.",
    "tag": "Hosts",
    "tagColor": "#a5b4fc",
    "date": "Nov 2026"
  },
  {
    "slug": "airbnb-tax-deductions-2026",
    "title": "Airbnb Tax Deductions 2026: Eligible Expenses & Records",
    "desc": "Which Airbnb host expenses are deductible and what records to keep.",
    "tag": "Hosts",
    "tagColor": "#a5b4fc",
    "date": "Nov 2026"
  },
  {
    "slug": "1099-vs-w2-taxes-2026",
    "title": "1099 vs W-2 Taxes 2026: Which Costs You More?",
    "desc": "How 1099 and W-2 taxes differ for the same income.",
    "tag": "Guide",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "best-apps-for-gig-workers-2026",
    "title": "Best Apps for Gig Workers 2026 — Track Miles, Taxes & Income",
    "desc": "Apps for tracking miles, taxes and income as a gig worker.",
    "tag": "Guide",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "best-tax-software-for-gig-workers-2026",
    "title": "Best Tax Software for Gig Workers 2026 — Ranked & Compared",
    "desc": "Tax software options for gig workers, compared.",
    "tag": "Guide",
    "tagColor": "#e8b84b",
    "date": "May 2026"
  },
  {
    "slug": "pay-subcontractors-gig-business-2026",
    "title": "How to Pay Subcontractors as a Gig Business Owner (2026)",
    "desc": "Paying subcontractors, W-9 and 1099 basics for gig business owners.",
    "tag": "Guide",
    "tagColor": "#e8b84b",
    "date": "Aug 2026"
  }
]

export default function BlogPage() {
  return (
    <div style={{ background: '#07111F', minHeight: '100vh' }}>

      
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
        <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#07111F)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center', marginTop: 40 }}>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Ready to Calculate Your Taxes?</div>
          <a href="/" style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>Free Calculator</a>
        </div>
      </main>
    </div>
  )
}
