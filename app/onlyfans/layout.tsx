import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OnlyFans Tax Calculator 2026 — Creator 1099 Tax Estimator | GigWiseTax',
  description: 'Calculate your OnlyFans self-employment taxes. SE tax 15.3% + federal + state for all 51 states. Includes creator deductions for equipment, home office, subscriptions. Free 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/onlyfans' },
  openGraph: {
    title: 'OnlyFans Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate your OnlyFans self-employment taxes. SE tax 15.3% + federal + state for all 51 states. Includes creator deductions for equipment, home office, subscriptions. Free 2026.',
    url: 'https://www.gigwisetax.com/onlyfans',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

const gigSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'OnlyFans Tax Calculator 2026',
  description: 'Calculate OnlyFans creator taxes, self-employment tax, and deductions for 2026.',
  url: 'https://www.gigwisetax.com/onlyfans',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"OnlyFans Tax Calculator","item":"https://www.gigwisetax.com/onlyfans"}]})}} />{children}</>
}
