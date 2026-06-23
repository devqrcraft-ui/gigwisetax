import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'
export async function generateStaticParams() { return [{ platform: 'taskrabbit' }] }
export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'taskrabbit')
  if (!p) return {}
  return {
    title: `TaskRabbit Tax Calculator 2026 — $45K Income = $10,160 Tax Owed`,
    description: `TaskRabbit workers: $45K net = $6,360 SE tax + federal. Tools and mileage deductions save $2,000+. Free 2026 calculator, all 51 states, no signup.`,
    keywords: `taskrabbit tax calculator, taskrabbit 1099 taxes 2026, taskrabbit self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/taskrabbit` },
    openGraph: {
      title: `TaskRabbit Tax Calculator 2026 — Free, All 51 States`,
      description: `Estimate your TaskRabbit self-employment taxes instantly. Includes SE tax, federal, state, and quarterly payments.`,
      url: `https://www.gigwisetax.com/taskrabbit`,
    },
  }
}
export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'taskrabbit')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['taskrabbit' as keyof typeof DEDUCTIONS] || []
  const isPlatformDriver = true
  const isRental = false
  const isCreator = false
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `TaskRabbit Tax Calculator 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free TaskRabbit self-employment tax calculator for 2026. All 51 states.`,
    url: `https://www.gigwisetax.com/taskrabbit`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on TaskRabbit income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a TaskRabbit independent contractor, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37% depending on total income), plus any state income tax. Most TaskRabbit workers should set aside 25-30% of net income for taxes.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does TaskRabbit send a 1099?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. TaskRabbit sends a 1099-NEC if you earn $600 or more in a calendar year. You must report all income even if you do not receive a 1099.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are quarterly taxes due for TaskRabbit workers in 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Quarterly estimated tax due dates for 2026: April 15, June 16, September 15, and January 15, 2027. Pay if you expect to owe $1,000 or more for the year.`,
        },
      },
    ],
  }
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to File Taxes as a TaskRabbit Worker in 2026","description":"Step-by-step guide to filing self-employment taxes for TaskRabbit workers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Track your income","text":"Keep records of all TaskRabbit earnings. Download your annual tax summary or 1099-NEC from the TaskRabbit app."},{"@type":"HowToStep","position":2,"name":"Track deductible expenses","text":"Record business miles at 72.5 cents/mile, phone bill percentage, equipment, and other business expenses throughout the year."},{"@type":"HowToStep","position":3,"name":"Calculate self-employment tax","text":"Self-employment tax is 15.3% on net profit. You can deduct half of SE tax from gross income."},{"@type":"HowToStep","position":4,"name":"Pay quarterly estimated taxes","text":"Pay estimated taxes by April 15, June 16, September 15, and January 15 to avoid IRS penalties."},{"@type":"HowToStep","position":5,"name":"File Schedule C with your return","text":"Report all TaskRabbit income and deductions on Schedule C. Attach to Form 1040 by April 15, 2027."}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"TaskRabbit Tasker Tax Calculator 2026","item":"https://www.gigwisetax.com/taskrabbit"}]}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"TaskRabbit Tasker Tax Calculator 2026","url":"https://www.gigwisetax.com/taskrabbit","dateModified":"2026-06-11","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }}/>
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>


          {/* KEY TAKEAWAYS */}
          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li dangerouslySetInnerHTML={{__html: 'On <strong>$45,000 net income</strong>, TaskRabbit taskers owe approximately <strong>$10,160 total tax</strong> in 2026'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Quarterly estimated payment: <strong>$2,540</strong> due April 15, June 16, Sep 15, Jan 15'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Tools, equipment, work vehicle mileage, and uniforms are <strong>top TaskRabbit deductions</strong>'}}/>
          <li dangerouslySetInnerHTML={{__html: 'TaskRabbit charges a <strong>15% Trust & Support fee</strong> — deductible as a business expense'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Set aside <strong>25–28%</strong> of gross earnings each week to cover all quarterly tax payments'}}/>
            </ul>
          </div>
          {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — TaskRabbit</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              TaskRabbit workers pay 15.3% self-employment tax on net earnings, plus federal income tax. On $45,000 net income: approximately $6,360 SE tax + $3,800 federal income tax = <strong style={{ color:'#fff' }}>$10,160 total tax</strong>. Quarterly estimated payment: <strong style={{ color:'#e8b84b' }}>$2,540</strong>. Set aside 25% of every payment. Tools, equipment, and mileage are top TaskRabbit deductions.
            </p>
          </div>
    </div>
  )
}
