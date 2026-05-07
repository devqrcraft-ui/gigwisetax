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
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>
    </div>
  )
}
