import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About GigWiseTax — Free Tax Calculator for U.S. Gig Workers',
  description: 'GigWiseTax.com is a free, independent tax estimation tool for U.S. gig economy workers. No signup. No data stored. Built by gig workers, for gig workers.',
}

export default function AboutPage() {
  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is GigWiseTax?","acceptedAnswer":{"@type":"Answer","text":"GigWiseTax is a free tax calculator and guide for gig economy workers in all 50 US states. It covers DoorDash, Uber, Lyft, Instacart, Amazon Flex, Grubhub, Turo, Airbnb, Etsy, OnlyFans, and Walmart Spark."}},{"@type":"Question","name":"Is GigWiseTax free to use?","acceptedAnswer":{"@type":"Answer","text":"Yes. All calculators and tax guides on GigWiseTax are completely free. No account or sign-up required. Your income data is never stored or shared — all calculations happen in your browser."}},{"@type":"Question","name":"Is GigWiseTax affiliated with the IRS or any gig platform?","acceptedAnswer":{"@type":"Answer","text":"No. GigWiseTax is an independent tool and is not affiliated with the IRS, DoorDash, Uber, or any other platform or government agency. Always verify tax obligations with a licensed CPA for your specific situation."}}]}' }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> › About
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: 0 }}>
            About GigWiseTax
          </h1>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, marginTop: 10, marginBottom: 0 }}>
            Free. Independent. Built for gig workers.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 32 }}>
          {[
            { icon: '🔒', label: 'No Data Stored', desc: 'Your numbers never leave your browser' },
            { icon: '💸', label: 'Free Forever', desc: 'No hidden fees, no premium tier required' },
            { icon: '🗺️', label: 'All 51 States', desc: 'Every U.S. jurisdiction covered' },
          ].map(s => (
            <div key={s.label} style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, padding: '20px 16px', textAlign: 'center' as const }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: '#6c757d' }}>{s.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, padding: 32, boxShadow: '0 1px 6px rgba(0,0,0,.05)', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 16, marginTop: 0 }}>Why We Built This</h2>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.9, marginBottom: 14 }}>
            Millions of Americans drive for DoorDash, deliver for Instacart, sell on Etsy, or host on Airbnb — and most of them are surprised every April when they owe thousands in unexpected taxes. As independent contractors, gig workers receive no tax withholding, no employer match, and no guidance on quarterly payments.
          </p>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.9, marginBottom: 14 }}>
            Most free tax tools either require account registration, sell your data, or stop at the federal level without covering all 51 state jurisdictions. Paid tools like FlyFin or Keeper Tax charge $100–$400/year — a significant cost for someone making $35,000 delivering groceries.
          </p>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.9, marginBottom: 0 }}>
            We built GigWiseTax.com to fill that gap: a completely free, private, no-signup tool that helps every gig worker quickly estimate what they owe and when to pay it. We believe financial clarity shouldn't have a paywall.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, padding: 32, boxShadow: '0 1px 6px rgba(0,0,0,.05)', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 16, marginTop: 0 }}>How We Stay Free</h2>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.9, marginBottom: 14 }}>
            GigWiseTax.com is supported by clearly labeled <strong>affiliate partnerships</strong> with tax software companies like TurboTax, QuickBooks, and H&R Block. When you click a sponsored link and make a purchase, we may earn a commission — at no extra cost to you.
          </p>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.9, marginBottom: 0 }}>
            Our calculators, content, and tools are completely independent and not influenced by these partnerships. We recommend products we believe are genuinely useful for gig workers.
          </p>
        </div>

        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, padding: 32, boxShadow: '0 1px 6px rgba(0,0,0,.05)', marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 16, marginTop: 0 }}>What We Cover</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              '🚗 DoorDash driver taxes',
              '🚕 Uber & Lyft driver taxes',
              '🛍️ Etsy seller taxes',
              '⭐ OnlyFans creator taxes',
              '🛒 Instacart & Walmart Spark',
              '🏠 Airbnb & Turo host taxes',
              '📦 Amazon Flex taxes',
              '🍔 Grubhub driver taxes',
              '🗺️ All 51 U.S. states + D.C.',
              '📅 2026 quarterly deadlines',
              '🚗 IRS mileage deduction (72.5¢)',
              '📋 Schedule SE calculations',
            ].map(item => (
              <div key={item} style={{ fontSize: 13, color: '#374151', padding: '8px 12px', background: '#f8fafc', borderRadius: 4, border: '1px solid #e2e5e9' }}>{item}</div>
            ))}
          </div>
        </div>

        <div style={{ background: '#1a1a2e', borderRadius: 8, padding: 32, marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 12, marginTop: 0 }}>Important Disclaimer</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', lineHeight: 1.8, marginBottom: 0 }}>
            GigWiseTax.com provides estimates for informational purposes only. We are not a licensed CPA, tax attorney, or Enrolled Agent. Our calculators do not constitute tax advice. Always consult a qualified tax professional for your specific situation. Tax laws change frequently — verify all figures with the IRS at <a href="https://irs.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b' }}>irs.gov</a>.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#B22234', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>📧 Contact Us</div>
          </Link>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1a2e', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>🧮 Try a Calculator</div>
          </Link>
          {[['Privacy Policy','/privacy'],['Terms of Service','/terms']].map(([l,h]) => (
            <Link key={l} href={h} style={{ fontSize: 13, color: '#6c757d', textDecoration: 'underline', display: 'flex', alignItems: 'center' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
