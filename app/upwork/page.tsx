import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'

export async function generateStaticParams() { return [{ platform: 'upwork' }] }

export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'upwork')
  if (!p) return {}
  return {
    title: 'Upwork Tax Calculator 2026 — 1099 Self-Employment Tax | GigWiseTax',
    description: 'Free Upwork tax calculator 2026. SE tax 15.3% + federal + state. All 51 states. No signup.',
    keywords: 'upwork tax calculator, upwork 1099 taxes 2026, upwork self employment tax',
    alternates: { canonical: 'https://www.gigwisetax.com/upwork' },
    openGraph: {
      title: 'Upwork Tax Calculator 2026 — Free, All 51 States',
      description: 'Estimate your Upwork self-employment taxes instantly.',
      url: 'https://www.gigwisetax.com/upwork',
    },
  }
}

export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'upwork')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['upwork' as keyof typeof DEDUCTIONS] || []
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Upwork Tax Calculator 2026',
    applicationCategory: 'FinanceApplication',
    description: 'Free Upwork self-employment tax calculator for 2026. All 51 states.',
    url: 'https://www.gigwisetax.com/upwork',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much tax do I pay on Upwork income?', acceptedAnswer: { '@type': 'Answer', text: 'As an Upwork freelancer, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37%), plus any state income tax. Set aside 25-30% of net income for taxes.' } },
      { '@type': 'Question', name: 'Does Upwork send a 1099?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Upwork sends a 1099-K if you earn $5,000 or more in a calendar year. You must report all income even without a 1099.' } },
      { '@type': 'Question', name: 'Can I deduct the Upwork service fee?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Upwork service fee (5-20%) is a deductible business expense on Schedule C. You can also deduct home office, equipment, internet, and software.' } },
      { '@type': 'Question', name: 'When are quarterly taxes due for Upwork freelancers in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Quarterly estimated tax due dates for 2026: April 15, June 16, September 15, and January 15, 2027.' } },
    ],
  }
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to File Taxes as a Upwork Worker in 2026","description":"Step-by-step guide to filing self-employment taxes for Upwork workers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Track your income","text":"Keep records of all Upwork earnings. Download your annual tax summary or 1099-NEC from the Upwork app."},{"@type":"HowToStep","position":2,"name":"Track deductible expenses","text":"Record business miles at 72.5 cents/mile, phone bill percentage, equipment, and other business expenses throughout the year."},{"@type":"HowToStep","position":3,"name":"Calculate self-employment tax","text":"Self-employment tax is 15.3% on net profit. You can deduct half of SE tax from gross income."},{"@type":"HowToStep","position":4,"name":"Pay quarterly estimated taxes","text":"Pay estimated taxes by April 15, June 16, September 15, and January 15 to avoid IRS penalties."},{"@type":"HowToStep","position":5,"name":"File Schedule C with your return","text":"Report all Upwork income and deductions on Schedule C. Attach to Form 1040 by April 15, 2027."}]}' }} />
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>

          {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Upwork</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              Upwork workers pay 15.3% self-employment tax on net earnings, plus federal income tax. On $60,000 net income: approximately $8,478 SE tax + $5,800 federal income tax = <strong style={{ color:'#fff' }}>$14,278 total tax</strong>. Quarterly estimated payment: <strong style={{ color:'#e8b84b' }}>$3,570</strong>. Set aside 25% of every payment. Home office, software, and professional development are top Upwork deductions.
            </p>
          </div>
    </div>
  )
}
