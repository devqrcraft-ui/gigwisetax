import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lyft Tax Calculator 2026 — Driver Self-Employment Tax | GigWiseTax',
  description: 'Calculate Lyft driver self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly payment schedule. Free Lyft tax calculator 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/lyft' },
  openGraph: {
    title: 'Lyft Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate Lyft driver self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly payment schedule. Free Lyft tax calculator 2026.',
    url: 'https://www.gigwisetax.com/lyft',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

const gigSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Lyft Driver Tax Calculator 2026',
  description: 'Calculate Lyft driver taxes, mileage deductions, and quarterly estimated payments for 2026.',
  url: 'https://www.gigwisetax.com/lyft',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};


  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Lyft Tax Calculator 2026",
        "url": "https://www.gigwisetax.com/lyft",
        "description": "Free Lyft driver tax calculator 2026. SE tax + federal + state for all 51 states. No signup.",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gigwisetax.com/" },
          { "@type": "ListItem", "position": 2, "name": "Calculators", "item": "https://www.gigwisetax.com/calculators" },
          { "@type": "ListItem", "position": 3, "name": "Lyft Tax Calculator", "item": "https://www.gigwisetax.com/lyft" }
        ]
      }
    ]
  };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
