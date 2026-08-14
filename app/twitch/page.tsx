import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'
export async function generateStaticParams() { return [{ platform: 'twitch' }] }
export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'twitch')
  if (!p) return {}
  return {
    title: `Twitch Streamer Tax Calculator 2026 — $30K Income = $5,546 Tax Owed`,
    description: `Twitch streamers: $30K net (subs, ads, bits, donations) = $4,239 SE tax + federal. Two separate 1099 forms explained. Free 2026 calculator, all 50 states + DC.`,
    keywords: `twitch tax calculator, twitch streamer taxes 2026, twitch 1099-MISC, twitch bits 1099-NEC, twitch self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/twitch` },
    openGraph: {
      title: `Twitch Streamer Tax Calculator 2026 — Free, All 50 States + DC`,
      description: `Estimate your Twitch self-employment taxes instantly. Includes SE tax, federal, state, and quarterly payments.`,
      url: `https://www.gigwisetax.com/twitch`,
    },
  }
}
export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'twitch')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['twitch' as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Twitch Streamer Tax Calculator 2026`,
    description: `Free Twitch streamer tax calculator for 2026. All 50 States + DC.`,
    url: `https://www.gigwisetax.com/twitch`,
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on Twitch income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a Twitch streamer, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37% depending on total income), plus any state income tax. Most streamers should set aside 25-30% of net income for taxes.`,
        },
      },
      {
        '@type': 'Question',
        name: `Why did I get two different 1099 forms from Twitch?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Twitch reports subscription revenue and ad revenue on Form 1099-MISC (Box 2, as royalties), while bits and other payments are reported separately on Form 1099-NEC. Both are self-employment income for tax purposes and must be combined on Schedule C, even though they arrive on different forms.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does Twitch withhold taxes?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `No. Twitch does not withhold federal or state taxes from any streamer earnings. You are responsible for tracking all income — subs, ads, bits, and donations — and paying self-employment and income tax yourself.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are quarterly taxes due for Twitch streamers in 2026?`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to File Taxes as a Twitch Streamer in 2026","description":"Step-by-step guide to filing self-employment taxes for Twitch streamers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Track your income","text":"Combine your 1099-MISC (subs and ad revenue) and 1099-NEC (bits and other payments) from Twitch. Both count as self-employment income."},{"@type":"HowToStep","position":2,"name":"Track deductible expenses","text":"Record streaming equipment, software subscriptions, internet percentage, and other business expenses throughout the year."},{"@type":"HowToStep","position":3,"name":"Calculate self-employment tax","text":"Self-employment tax is 15.3% on net profit. You can deduct half of SE tax from gross income."},{"@type":"HowToStep","position":4,"name":"Pay quarterly estimated taxes","text":"Pay estimated taxes by April 15, June 16, September 15, and January 15 to avoid IRS penalties."},{"@type":"HowToStep","position":5,"name":"File Schedule C with your return","text":"Report all Twitch income (from both 1099 forms) and deductions on Schedule C. Attach to Form 1040 by April 15, 2027."}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Twitch Streamer Tax Calculator 2026","item":"https://www.gigwisetax.com/twitch"}]}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"Twitch Streamer Tax Calculator 2026","url":"https://www.gigwisetax.com/twitch","dateModified":"2026-07-28","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }}/>
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>

          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li dangerouslySetInnerHTML={{__html: 'On <strong>$30,000 net income</strong>, Twitch streamers owe approximately <strong>$5,546 total tax</strong> in 2026'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Quarterly estimated payment: <strong>$1,387</strong> due April 15, June 16, Sep 15, Jan 15'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Twitch sends <strong>two separate 1099 forms</strong> — 1099-MISC for subs/ads, 1099-NEC for bits — both count as SE income'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Streaming equipment, software, and internet percentage are <strong>deductible</strong> business expenses'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Set aside <strong>25%</strong> of every payout — you are a 1099 contractor, no taxes withheld'}}/>
            </ul>
          </div>
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Twitch</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              Twitch streamers pay 15.3% self-employment tax on net earnings, plus federal income tax. On $30,000 net income (combined from subs, ads, bits, and donations): approximately $4,239 SE tax + $1,307 federal income tax = <strong style={{ color:'#fff' }}>$5,546 total tax</strong>. Quarterly estimated payment: <strong style={{ color:'#e8b84b' }}>$1,387</strong>. Subscription and ad revenue arrives on Form 1099-MISC, while bits arrive on a separate 1099-NEC — both must be combined on Schedule C.
            </p>
          </div>
    </div>
  )
}
