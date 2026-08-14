import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'

export async function generateStaticParams() { return [{ platform: 'poshmark' }] }

export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'poshmark')
  if (!p) return {}
  return {
    title: `Poshmark Tax Calculator 2026 — $60K Sales = $3,888 Tax Owed`,
    description: `Poshmark resellers: $60K gross sales, $25K cost of goods = $23K net profit = $3,888 total tax. Free 2026 calculator with COGS, all 50 states + DC.`,
    keywords: `poshmark tax calculator, poshmark 1099-K taxes 2026, poshmark reseller taxes, poshmark cost of goods sold, poshmark self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/poshmark` },
    openGraph: {
      title: `Poshmark Tax Calculator 2026 — Free, All 50 States + DC`,
      description: `Estimate your Poshmark reseller taxes instantly, including cost of goods sold. SE tax, federal, state, and quarterly payments.`,
      url: `https://www.gigwisetax.com/poshmark`,
    },
  }
}

export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'poshmark')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['poshmark' as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Poshmark Tax Calculator 2026`,
    description: `Free Poshmark reseller tax calculator for 2026, including cost of goods sold. All 50 States + DC.`,
    url: `https://www.gigwisetax.com/poshmark`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on Poshmark income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You pay 15.3% self-employment tax plus federal income tax on your net profit — not your gross sales. Net profit is your sale price minus Poshmark's commission (20% on sales of $15+, a flat $2.95 under $15) minus what you originally paid for the inventory (cost of goods sold).`,
        },
      },
      {
        '@type': 'Question',
        name: `Does Poshmark send a 1099-K?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Poshmark issues a 1099-K if your gross sales exceed $20,000 and you have more than 200 transactions in a year, per the federal threshold restored by the 2025 OBBBA law. Some states (including Massachusetts, Vermont, and Virginia) require it at much lower thresholds. The 1099-K reports gross sales before Poshmark's commission and before your cost of goods — it is not your taxable profit.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is cost of goods sold (COGS) for a Poshmark seller?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `COGS is what you originally paid for the items you sold — thrift store receipts, wholesale invoices, or clearance prices. You subtract COGS from your revenue after Poshmark's commission to get your taxable net profit. Selling your own used clothing for less than you paid is generally not taxable income.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are quarterly taxes due for Poshmark sellers in 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Quarterly estimated tax due dates for 2026: April 15, June 16, September 15, and January 15, 2027. Pay if you expect to owe $1,000 or more for the year.`,
        },
      },
    ],
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to File Taxes as a Poshmark Seller in 2026","description":"Step-by-step guide to filing self-employment taxes for Poshmark resellers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Track your gross sales","text":"Download your annual sales summary from Poshmark. If you exceed $20,000 and 200 transactions, you will also receive a 1099-K."},{"@type":"HowToStep","position":2,"name":"Track cost of goods sold","text":"Keep receipts for every item you resell — thrift store, wholesale, or clearance prices. This is subtracted before you owe any tax."},{"@type":"HowToStep","position":3,"name":"Calculate self-employment tax","text":"Self-employment tax is 15.3% on net profit (sales minus Poshmark commission minus COGS). You can deduct half of SE tax from gross income."},{"@type":"HowToStep","position":4,"name":"Pay quarterly estimated taxes","text":"Pay estimated taxes by April 15, June 16, September 15, and January 15 to avoid IRS penalties."},{"@type":"HowToStep","position":5,"name":"File Schedule C with your return","text":"Report gross sales, Poshmark fees, COGS, and other business expenses on Schedule C. Attach to Form 1040 by April 15, 2027."}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Poshmark Reseller Tax Calculator 2026","item":"https://www.gigwisetax.com/poshmark"}]}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"Poshmark Reseller Tax Calculator 2026","url":"https://www.gigwisetax.com/poshmark","dateModified":"2026-07-27","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }}/>
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>

          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li dangerouslySetInnerHTML={{__html: 'On <strong>$60,000 gross sales with $25,000 in cost of goods</strong>, net profit is $23,000 — owing approximately <strong>$3,888 total tax</strong> in 2026'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Quarterly estimated payment: <strong>$972</strong> due April 15, June 16, Sep 15, Jan 15'}}/>
          <li dangerouslySetInnerHTML={{__html: 'The 1099-K reports <strong>gross sales</strong>, not your profit — Poshmark commission and cost of goods come off first'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Federal 1099-K threshold: <strong>$20,000 and 200+ transactions</strong> — some states require it far lower'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Selling your own used clothing for less than you paid is <strong>generally not taxable</strong>'}}/>
            </ul>
          </div>
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Poshmark</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              Poshmark resellers pay 15.3% self-employment tax plus federal income tax on net profit — sales minus Poshmark's 20% commission minus cost of goods sold, not gross sales. On $60,000 gross sales with $25,000 COGS: net profit $23,000 → approximately $3,250 SE tax + $638 federal income tax = <strong style={{ color:'#fff' }}>$3,888 total tax</strong>. Quarterly estimated payment: <strong style={{ color:'#e8b84b' }}>$972</strong>.
            </p>
          </div>
    </div>
  )
}
