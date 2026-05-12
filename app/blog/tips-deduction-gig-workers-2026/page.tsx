import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tips Deduction for Gig Workers 2026: Up to $25,000 Tax-Free (OBBBA)',
  description: 'OBBBA 2026: gig workers can deduct up to $25,000 in tips from federal taxes. DoorDash, Uber, Instacart drivers eligible. How to claim it on Schedule C.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/tips-deduction-gig-workers-2026' },
  openGraph: {
    title: 'Tips Deduction for Gig Workers 2026: Up to $25,000 Tax-Free (OBBBA)',
    description: 'OBBBA 2026: gig workers can deduct up to $25,000 in tips from federal taxes. DoorDash, Uber, Instacart drivers eligible.',
    type: 'article',
    url: 'https://www.gigwisetax.com/blog/tips-deduction-gig-workers-2026',
  },
}

export default function TipsDeductionPage() {
  const prose = { fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 16 }
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }
  const h3 = { fontSize: 17, fontWeight: 700, color: '#e8b84b', marginBottom: 10, marginTop: 20 }
  const accent = { background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 16 }

  return (
    <div style={{ background: '#07111F', minHeight: '100vh' }}>
      <style>{'.blog-grid{display:grid;grid-template-columns:1fr 280px;gap:24px}@media(max-width:700px){.blog-grid{grid-template-columns:1fr!important}}'}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the tips deduction for gig workers in 2026?","acceptedAnswer":{"@type":"Answer","text":"Under the One Big Beautiful Bill Act (OBBBA) 2026, eligible workers including gig workers can deduct up to $25,000 in tips from their federal taxable income. This means if you earned $8,000 in DoorDash tips, that entire amount reduces your taxable income."}},{"@type":"Question","name":"Do DoorDash drivers qualify for the no-tax-on-tips deduction?","acceptedAnswer":{"@type":"Answer","text":"Yes. DoorDash delivery drivers who receive customer tips qualify for the OBBBA tips deduction up to $25,000. Tips received through the DoorDash app count as qualifying tip income for this deduction."}},{"@type":"Question","name":"How do I claim the tips deduction as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"Report total income including tips on Schedule C. Then deduct the qualifying tip amount (up to $25,000) as a separate line item on your federal return. The deduction reduces your adjusted gross income directly."}},{"@type":"Question","name":"Does the tips deduction apply to self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"No. The OBBBA tips deduction reduces your federal income tax only. You still owe 15.3% self-employment tax on your net gig income including tips. Only federal income tax is reduced."}},{"@type":"Question","name":"Which gig platforms qualify for the tips deduction in 2026?","acceptedAnswer":{"@type":"Answer","text":"Any gig worker who receives customer tips qualifies, including DoorDash, Uber Eats, Instacart, Lyft, Grubhub, and other platforms where customers tip directly. The deduction applies to tips received in 2026 and reported on your 2026 tax return."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Tips Deduction for Gig Workers 2026","item":"https://gigwisetax.com/blog/tips-deduction-gig-workers-2026"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Tips Deduction for Gig Workers 2026: Up to $25,000 Tax-Free (OBBBA)","description":"OBBBA 2026: gig workers can deduct up to $25,000 in tips from federal taxes. DoorDash, Uber, Instacart drivers eligible.","url":"https://gigwisetax.com/blog/tips-deduction-gig-workers-2026","datePublished":"2026-05-12","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://gigwisetax.com"}}' }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 6px' }}>›</span>
            <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
            <span style={{ margin: '0 6px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.7)' }}>Tips Deduction 2026</span>
          </nav>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 14 }}>
            <span style={{ background: 'rgba(232,184,75,0.15)', color: '#e8b84b', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>OBBBA 2026</span>
            <span style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,.55)', fontSize: 12, padding: '3px 10px', borderRadius: 20 }}>Updated May 2026</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, color: '#fff', lineHeight: 1.25, marginBottom: 14 }}>
            Tips Deduction for Gig Workers 2026: Up to $25,000 Tax-Free
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>
            The OBBBA made tips tax-free for eligible workers — including DoorDash, Uber Eats, and Instacart drivers. Here is exactly how it works, who qualifies, and how to claim it.
          </p>
        </div>
      </div>
