import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS, MILEAGE_RATE_2026 } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'

export async function generateStaticParams() { return [{ platform: 'amazon-flex' }] }

export async function generateMetadata({ params }: { params: { platform: string } }): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'amazon-flex')
  if (!p) return {}
  return {
    title: `Amazon Flex Tax Calculator 2026 — See Your Exact Tax in 30 Seconds`,
    description: `Amazon Flex drivers: calculate SE tax + state income tax instantly. Mileage deduction at $0.67/mile can save $10,000+/yr. Free for all 50 states. No signup.`,
    keywords: `amazon flex tax calculator, amazon flex driver taxes 2026, amazon flex self employment tax, amazon flex quarterly taxes, amazon flex 1099`,
    alternates: { canonical: `https://gigwisetax.com/${p.slug}` },
    openGraph: {
      title: `${p.name} Tax Calculator 2026 — Free, All 51 States`,
      description: `Estimate your ${p.name} self-employment taxes instantly. Includes SE tax, federal, state, and quarterly payments.`,
      url: `https://gigwisetax.com/${p.slug}`,
    },
  }
}


export default function PlatformPage({ params }: { params: { platform: string } }) {
  const platform = PLATFORMS.find(p => p.slug === 'amazon-flex')
  if (!platform) return notFound()

  const deductions = DEDUCTIONS['amazon-flex' as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash
  const isPlatformDriver = true
  const isRental = false
  const isCreator = false

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${platform.name} Tax Calculator 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free ${platform.name} self-employment tax calculator for 2026. All 51 states.`,
    url: `https://gigwisetax.com/${platform.slug}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on ${platform.name} income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a ${platform.name} independent contractor, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10–37% depending on total income), plus any state income tax. Most ${platform.name} workers should set aside 25–30% of net income for taxes.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does ${platform.name} withhold taxes?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `No. ${platform.name} classifies workers as independent contractors and does not withhold federal, state, or Social Security/Medicare taxes. You are responsible for calculating and paying your own taxes quarterly using IRS Form 1040-ES.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are ${platform.name} quarterly taxes due in 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `For 2026: Q1 taxes are due April 15, 2026. Q2 is due June 16, 2026. Q3 is due September 15, 2026. Q4 is due January 15, 2027.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the ${platform.name} 1099 threshold for 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `For 2026, ${platform.name} must issue a 1099-NEC if you earn $600 or more. However, you are required to report ALL income to the IRS even if you do not receive a 1099 form.`,
        },
      },
    ],
  }

  const card = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)', overflow: 'hidden' as const }
  const cardHd = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>

      <div style={{ background: '#0d1b3e', minHeight: '100vh' }}>

        {/* HERO */}
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 28px' }}>
            <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <a href="/calculators" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Calculators</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,.7)' }}>{platform.name}</span>
            </nav>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ width: 4, height: 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }}/>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px', margin: 0 }}>
                {platform.emoji} {platform.name} Tax Calculator 2026 — All 51 States
              </h1>
            </div>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, paddingLeft: 16, maxWidth: 780, marginBottom: 18, textAlign: 'justify' }}>
              Free {platform.name} self-employment tax calculator for 2026. Estimate your SE tax (15.3%), federal income tax, and state tax for all 51 jurisdictions.
              Get your quarterly estimated payment schedule with Google Calendar export. No signup required — results are instant.
              Powered by the <a href="/" style={{ color: 'rgba(255,255,255,.75)', fontWeight: 700 }}>GigWiseTax main calculator</a> — SE tax + federal + all 51 states.
            </p>
            <div style={{ paddingLeft: 16, display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
              {['📋 IRS Schedule SE', '🗺️ All 51 States', '🔒 No Signup', `📅 2026 Tax Rules`, platform.badge ? `⭐ ${platform.badge}` : '⚡ Instant Results'].filter(Boolean).map(b => (
                <span key={b} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 3, padding: '4px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)', fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>


        {/* MAIN GRID */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }} className="main-grid">

          {/* LEFT */}
          <div>
            {/* CALCULATOR */}
            <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>

            {/* TAX GUIDE */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📚 {platform.name} Tax Guide 2026</span>
              </div>
              <div style={{ padding: 24 }}>

                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 12 }}>
                  How {platform.name} Taxes Work in 2026
                </h2>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.8, textAlign: 'justify', marginBottom: 20 }}>
                  As a {platform.name} worker, you are classified as an <strong>independent contractor (1099)</strong> — not an employee.
                  This means {platform.name} does not withhold any federal, state, or Social Security/Medicare taxes from your payments.
                  You are responsible for calculating and paying your own taxes directly to the IRS four times per year.
                </p>

                <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, color: '#B22234', marginBottom: 8 }}>⚠️ Key Rule: Set Aside 25–30% of Every Payment</div>
                  <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                    Most {platform.name} workers should set aside <strong>25–30% of net income</strong> for taxes.
                    If you expect to owe $1,000 or more in taxes, you must make quarterly estimated payments or face IRS underpayment penalties.
                  </p>
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e', marginBottom: 12 }}>
                  What Taxes Do {platform.name} Workers Pay?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }} className="form-grid">
                  {[
                    { label: '📋 Self-Employment Tax', value: '15.3%', detail: '12.4% Social Security + 2.9% Medicare', color: '#B22234' },
                    { label: '🏛️ Federal Income Tax', value: '10–37%', detail: 'Based on total taxable income', color: '#1a1a2e' },
                    { label: '🗺️ State Income Tax', value: '0–13.3%', detail: 'Depends on your state (0 in TX, FL, NV)', color: '#1a1a2e' },
                    { label: '💡 SE Tax Deduction', value: '50% off', detail: 'Deduct half of SE tax from taxable income', color: '#059669' },
                  ].map(item => (
                    <div key={item.label} style={{ border: '1px solid #e2e5e9', borderRadius: 6, padding: 14, borderLeft: `4px solid ${item.color}` }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#6c757d', marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: item.color, marginBottom: 4 }}>{item.value}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af' }}>{item.detail}</div>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e', marginBottom: 12 }}>
                  2026 Quarterly Tax Deadlines for {platform.name} Workers
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20 }}>
                  <thead>
                    <tr style={{ background: '#1a1a2e' }}>
                      {['Quarter','Income Period','Due Date','Days Left'].map(h => (
                        <th key={h} style={{ padding: '10px 14px', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' as const, letterSpacing: '0.8px', textAlign: 'left' as const }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DEADLINES_2026.map((d, i) => (
                      <tr key={d.q} style={{ borderBottom: '1px solid #f0f1f3', background: i === 0 ? '#fff9f9' : '#fff' }}>
                        <td style={{ padding: '12px 14px', fontWeight: 800, color: i === 0 ? '#B22234' : '#1a1a2e', fontSize: 14 }}>
                          {i === 0 && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 5px', borderRadius: 2, marginRight: 6, fontWeight: 800 }}>NOW</span>}
                          {d.q} 2026
                        </td>
                        <td style={{ padding: '12px 14px', color: '#374151', fontSize: 13 }}>{d.period}</td>
                        <td style={{ padding: '12px 14px', fontWeight: 700, color: i === 0 ? '#B22234' : '#1a1a2e', fontSize: 14 }}>{d.due}</td>
                        <td style={{ padding: '12px 14px' }}>
                          <span style={{ background: i === 0 ? '#fee2e2' : '#f0f4f8', color: i === 0 ? '#B22234' : '#374151', padding: '3px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{d.days} days</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* DEDUCTIONS */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e', marginBottom: 12 }}>
                  Top Tax Deductions for {platform.name} Workers in 2026
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="form-grid">
                  {deductions.map((d: string) => (
                    <div key={d} style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: '#374151', fontWeight: 500 }}>
                      {d}
                    </div>
                  ))}
                </div>

                {/* 1099DEDUCTIONS CROSS-LINK */}
                <a href="https://1099deductions.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg,#0E2240,#07111F)', border: '1px solid rgba(184,146,74,0.35)', borderRadius: 8, padding: '14px 18px', marginBottom: 16, textDecoration: 'none' }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#D4AA66', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>Full Deductions Checklist</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>See complete IRS Schedule C write-offs on <span style={{ color: '#D4AA66' }}>1099Deductions.com</span></div>
                    <div style={{ fontSize: 12, color: '#7A96B8', marginTop: 2 }}>DoorDash, Uber, Airbnb, Etsy, OnlyFans — 17 job types. 100% free.</div>
                  </div>
                  <div style={{ fontSize: 22, color: '#D4AA66', marginLeft: 12 }}>→</div>
                </a>

                {isPlatformDriver && (
                  <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: '#0369a1', marginBottom: 8 }}>🚗 2026 IRS Mileage Rate: $0.67 per mile</div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                      The 2026 standard mileage rate is <strong>${MILEAGE_RATE_2026} per mile</strong>.
                      Track every delivery mile using a mileage app. On 10,000 miles, that's a <strong>$6,700 deduction</strong> — reducing your taxable income significantly.
                      Use the actual expense method if your vehicle costs exceed the standard rate.
                    </p>
                  </div>
                )}

                {isRental && (
                  <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: '#166534', marginBottom: 8 }}>🏠 Airbnb Hosts: 14-Day Rule</div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                      If you rent your property for <strong>14 days or fewer</strong> per year, rental income is tax-free (Section 280A exclusion).
                      Above 14 days, you must report income but can deduct a proportional share of mortgage interest, property taxes, utilities, and depreciation.
                    </p>
                  </div>
                )}

                {isCreator && (
                  <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: '#b45309', marginBottom: 8 }}>💡 {platform.name} Creator Tip: Home Office Deduction</div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                      If you use a dedicated space at home exclusively for your {platform.name} business, you can deduct home office expenses.
                      The simplified method allows <strong>$5 per square foot</strong> (up to 300 sq ft = $1,500 deduction).
                      Equipment, camera gear, and software are fully deductible in the year of purchase under Section 179.
                    </p>
                  </div>
                )}

                {/* FAQ */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e', marginBottom: 16 }}>
                  Frequently Asked Questions — {platform.name} Taxes 2026
                </h3>
                {[
                  {
                    q: `Does ${platform.name} withhold taxes from my payments?`,
                    a: `No. ${platform.name} classifies all workers as independent contractors (1099). They do not withhold federal income tax, state income tax, Social Security, or Medicare taxes. You must calculate and pay these yourself using IRS Form 1040-ES.`,
                  },
                  {
                    q: `How much should I set aside for ${platform.name} taxes?`,
                    a: `Set aside 25–30% of your net ${platform.name} income for taxes. This covers the 15.3% self-employment tax plus federal income tax. In high-tax states like California or New York, set aside 30–35%.`,
                  },
                  {
                    q: `What 1099 form does ${platform.name} send?`,
                    a: `${platform.name} issues a 1099-NEC (or 1099-K for some platforms) if you earn $600 or more in a calendar year. You must report ALL income even if you don't receive a 1099 form.`,
                  },
                  {
                    q: `What is the self-employment tax rate for ${platform.name} in 2026?`,
                    a: `The self-employment tax rate is 15.3% on net earnings (92.35% of gross income). This consists of 12.4% Social Security tax and 2.9% Medicare tax. The Social Security portion only applies to the first $176,100 of net earnings in 2026. You can deduct 50% of SE tax from your taxable income.`,
                  },
                  {
                    q: `Do I need to pay ${platform.name} taxes if I earn under $600?`,
                    a: `Yes. The $600 threshold only determines whether ${platform.name} must send you a 1099 form. You are required to report and pay taxes on ALL self-employment income, even $1, if your total self-employment profit exceeds $400 for the year.`,
                  },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #f0f1f3', paddingBottom: 16, marginBottom: 16 }}>
                    <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14, marginBottom: 8 }}>Q: {item.q}</div>
                    <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, textAlign: 'justify' }}>{item.a}</div>
                  </div>
                ))}

                {/* DISCLAIMER */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6, textAlign: 'justify' as const }}>
                  ⚠️ <strong>Disclaimer:</strong> This calculator provides estimates for planning purposes only. Tax laws are subject to change. Consult a licensed CPA or tax professional, or visit <a href="https://irs.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#B22234' }}>IRS.gov</a> for official guidance. GigWiseTax.com is not affiliated with {platform.name}, the IRS, or any government agency.
                </div>
              </div>
            </div>

            {/* OTHER PLATFORMS */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>🚀 Other Platform Calculators</span>
              </div>
              <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }} className="p-grid">
                {PLATFORMS.filter(p => p.slug !== 'amazon-flex').map(p => (
                  <a key={p.slug} href={`/${p.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ border: '1px solid #e2e5e9', borderRadius: 6, padding: '12px 8px', textAlign: 'center' as const, background: '#fff', position: 'relative' as const }}>
                      <div style={{ fontSize: 24, marginBottom: 5 }}>{p.emoji}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a2e', marginBottom: 2 }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: '#B22234', fontWeight: 600 }}>{p.searches}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {/* AD */}
            <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            {/* OTHER CALCULATORS */}
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const, marginBottom: 16 }}>
            <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>🔗 Other Gig Tax Calculators</span>
            </div>
              <a href="/doordash" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid #f0f1f3', color: '#374151' }}><span style={{ fontSize: 13 }}>🚗 DoorDash Tax Calculator</span><span style={{ fontSize: 11, color: '#B22234', fontWeight: 700 }}>→</span></a>
              <a href="/instacart" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid #f0f1f3', color: '#374151' }}><span style={{ fontSize: 13 }}>🛒 Instacart Tax Calculator</span><span style={{ fontSize: 11, color: '#B22234', fontWeight: 700 }}>→</span></a>
              <a href="/uber" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid #f0f1f3', color: '#374151' }}><span style={{ fontSize: 13 }}>🚕 Uber Tax Calculator</span><span style={{ fontSize: 11, color: '#B22234', fontWeight: 700 }}>→</span></a>
              <a href="/lyft" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid #f0f1f3', color: '#374151' }}><span style={{ fontSize: 13 }}>🚖 Lyft Tax Calculator</span><span style={{ fontSize: 11, color: '#B22234', fontWeight: 700 }}>→</span></a>
          </div>

          {/* OWN BANNER — privatepaycheck.com */}
            <a href="https://privatepaycheck.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', background: 'linear-gradient(135deg,#091526,#102040)', border: '1px solid rgba(245,200,66,0.35)', borderRadius: 10, padding: '20px 16px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#F5C842', marginBottom: 8, fontFamily: 'monospace' }}>W-2 Paycheck Tool</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>PrivatePaycheck<span style={{ color: '#F5C842' }}>.com</span></div>
              <div style={{ fontSize: 12, color: '#7A96B8', marginBottom: 12, lineHeight: 1.5 }}>Free paycheck calculator for W-2 employees. All 50 states, 2026 IRS brackets. No signup.</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 12 }}>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>Salary &amp; Hourly</span>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>All 50 States</span>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>100% Free</span>
              </div>
              <div style={{ background: '#F5C842', color: '#091526', fontSize: 12, fontWeight: 700, padding: '9px 0', borderRadius: 5, textAlign: 'center' as const }}>Calculate My Paycheck ›</div>
            </a>
            </div>

            {/* STATES LINKS */}
            <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>🗺️ Top States</span>
              </div>
              {[
                { slug: 'california', name: 'California', rate: '9.3%' },
                { slug: 'new-york', name: 'New York', rate: '6.85%' },
                { slug: 'texas', name: 'Texas', rate: 'No Tax' },
                { slug: 'florida', name: 'Florida', rate: 'No Tax' },
                { slug: 'illinois', name: 'Illinois', rate: '4.95%' },
                { slug: 'washington', name: 'Washington', rate: 'No Tax' },
                { slug: 'nevada', name: 'Nevada', rate: 'No Tax' },
                { slug: 'georgia', name: 'Georgia', rate: '5.5%' },
              ].map(s => (
                <a key={s.slug} href={`/${'amazon-flex'}/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#374151' }}>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{platform.emoji} {platform.name} in {s.name}</span>
                    <span style={{ fontSize: 11, color: s.rate === 'No Tax' ? '#059669' : '#B22234', fontWeight: 700 }}>{s.rate}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* AD 2 */}
            <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            </div>

            {/* MULTI-APP BANNER */}
            <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>💡 Drive for multiple apps?</span>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, marginBottom: 10 }}>
                  Working Uber + DoorDash, Instacart + Amazon Flex, or other combinations? Learn how to combine your gig income for taxes.
                </div>
                <a href="/multi-app-gig-taxes-2026" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#B22234', color: '#fff', padding: '9px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}>
                    → Multi-App Gig Tax Guide 2026
                  </div>
                </a>
              </div>
            </div>

            {/* TRUST */}
            <div style={{ background: '#f8fafc', border: '1px solid #d8dce6', borderRadius: 6, padding: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 10 }}>🔒 About This Tool</div>
              <div style={{ fontSize: 12, color: '#374151', lineHeight: 1.7, textAlign: 'justify' as const }}>
                GigWiseTax.com is an independent, free estimation tool. Not affiliated with {platform.name}, the IRS, or any government agency. No personal data is stored.
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.p-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
      </div>
    </>
  )
}
