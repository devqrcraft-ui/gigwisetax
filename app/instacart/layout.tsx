import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instacart Tax Calculator 2026 — Shopper Self-Employment Tax | GigWiseTax',
  description: 'Calculate Instacart shopper self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly payment schedule. Free, 2026 IRS rules.',
  alternates: { canonical: 'https://www.gigwisetax.com/instacart' },
  openGraph: {
    title: 'Instacart Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate Instacart shopper self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly payment schedule. Free, 2026 IRS rules.',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

const gigSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Instacart Shopper Tax Calculator 2026',
  description: 'Calculate Instacart shopper taxes, mileage deductions, and quarterly payments for 2026.',
  url: 'https://www.gigwisetax.com/instacart',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(gigSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},
          {"@type":"ListItem","position":2,"name":"Instacart Tax Calculator","item":"https://www.gigwisetax.com/instacart"}
        ]
      })}} />
      {children}
    </>
  )
}
