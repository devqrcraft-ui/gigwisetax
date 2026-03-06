import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Office Deduction for Gig Workers 2025 — Up to $1,500/yr | GigWiseTax',
  description: 'How gig workers claim the home office deduction in 2025. Simplified method vs actual expenses, exclusive use rule, what qualifies. Free calculator included.',
  keywords: 'home office deduction gig workers 2025, home office tax deduction, gig worker home office, IRS home office rules',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/home-office-deduction-gig-workers' },
}

export default function HomeOfficeBlog() {
  const s  = { maxWidth: 780, margin: '0 auto', padding: '40px 20px' }
  const h2 = { fontSize: 22, fontWeight: 800, color: '#1a1a2e', margin: '32px 0 12px' }
  const p  = { fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }
  const tip  = { background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 6, padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#14532d', lineHeight: 1.7 }
  const warn = { background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 6, padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#7f1d1d', lineHeight: 1.7 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '3px solid #B22234', padding: '40px 20px 32px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.7)' }}>Home Office Deduction</span>
          </nav>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['Home Office','Tax Deductions','Self-Employed','IRS Rules'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 3, padding: '3px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>
            Home Office Deduction for Gig Workers 2025 — Up to $1,500/Year
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, margin: 0 }}>Updated January 2025 · 8 min read · GigWiseTax.com</p>
        </div>
      </div>

      <div style={{ background: '#fff' }}>
        <div style={s}>
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 6, padding: '14px 18px', marginBottom: 24, fontSize: 14, color: '#92400e' }}>
            <strong>Quick Summary:</strong> Gig workers with a dedicated home workspace can deduct $5/sq ft up to 300 sq ft ($1,500 max) using the simplified method — or more using actual expenses. The key rule: the space must be used regularly and exclusively for business.
          </div>

          <p style={p}>The home office deduction is one of the most valuable tax breaks for gig workers — and one of the most misunderstood. Many workers skip it out of fear of an audit. But when claimed correctly, it's completely legitimate and can save $400–$1,500 per year.</p>

          <h2 style={h2}>Who Qualifies for the Home Office Deduction?</h2>
          <p style={p}>To qualify, you need a space in your home that you use <strong>regularly and exclusively</strong> for your gig work business. This means:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '0 0 20px' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 6, padding: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#16a34a', marginBottom: 8 }}>✅ QUALIFIES</div>
              {['Dedicated desk in spare bedroom used only for work','Craft room used exclusively for Etsy orders','Recording studio used only for content creation','Home office with door, used only for business'].map(i => (
                <div key={i} style={{ fontSize: 13, color: '#374151', marginBottom: 5 }}>• {i}</div>
              ))}
            </div>
            <div style={{ background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 6, padding: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#B22234', marginBottom: 8 }}>❌ DOES NOT QUALIFY</div>
              {['Kitchen table used for both eating and work','Living room couch where you sometimes check orders','Shared bedroom with a small desk in the corner','Space used for both business and personal storage'].map(i => (
                <div key={i} style={{ fontSize: 13, color: '#374151', marginBottom: 5 }}>• {i}</div>
              ))}
            </div>
          </div>

          <h2 style={h2}>Simplified Method: $5 Per Square Foot</h2>
          <p style={p}>The IRS simplified method lets you deduct $5 per square foot of your dedicated workspace, up to a maximum of 300 square feet. This gives a maximum deduction of $1,500 per year with no recordkeeping of actual expenses required.</p>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 20, margin: '0 0 20px' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', marginBottom: 12 }}>📐 Calculator Example:</div>
            {[{ sqft: 100, ded: '$500' }, { sqft: 150, ded: '$750' }, { sqft: 200, ded: '$1,000' }, { sqft: 300, ded: '$1,500 (max)' }].map(r => (
              <div key={r.sqft} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6', fontSize: 14 }}>
                <span style={{ color: '#374151' }}>{r.sqft} sq ft workspace</span>
                <span style={{ fontWeight: 700, color: '#16a34a' }}>{r.ded} deduction</span>
              </div>
            ))}
          </div>

          <div style={tip}>✅ <strong>Pro Tip:</strong> Measure your dedicated workspace with a tape measure and take a photo. Keep this documentation in case the IRS ever asks. It takes 5 minutes and protects a $1,500 deduction.</div>

          <h2 style={h2}>Actual Expense Method: Potentially More Valuable</h2>
          <p style={p}>If your home expenses are high, the actual expense method may save more than the simplified method. You calculate the percentage of your home used for business (workspace sq ft ÷ total home sq ft) and apply that percentage to:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, margin: '0 0 20px' }}>
            {['Rent or mortgage interest','Utilities (electric, gas, water)','Home insurance','Internet (business portion)','Home repairs and maintenance','Property taxes'].map(item => (
              <div key={item} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: '#374151', display: 'flex', gap: 8 }}>
                <span style={{ color: '#22c55e', fontWeight: 800 }}>✓</span>{item}
              </div>
            ))}
          </div>

          <div style={warn}>⚠️ <strong>Audit risk:</strong> The actual expense method requires detailed recordkeeping and is more likely to trigger IRS scrutiny. For most gig workers, the simplified method ($5/sq ft) offers the best balance of savings and simplicity.</div>

          <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 24, margin: '32px 0', textAlign: 'center' as const }}>
            <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>CLAIM ALL YOUR DEDUCTIONS</div>
            <p style={{ color: '#fff', fontSize: 15, margin: '0 0 16px' }}>See every deduction you qualify for — including home office</p>
            <Link href="/deductions" style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '13px', fontSize: 15, fontWeight: 800, textDecoration: 'none', marginBottom: 10 }}>
              ✅ Open Deductions Checklist →
            </Link>
            <Link href="/tax-penalty-finder" style={{ display: 'block', background: 'rgba(255,255,255,.1)', color: '#fff', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,.2)' }}>
              🔍 Find My Total Tax Savings →
            </Link>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>
            ⚠️ <strong>Disclaimer:</strong> This article is for informational purposes only. Home office rules are complex and fact-specific. Consult a licensed CPA before claiming this deduction.
          </div>
        </div>
      </div>
    </div>
  )
}
