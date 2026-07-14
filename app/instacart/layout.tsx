import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Instacart Tax Calculator 2026 — $35K Net = $4,944 SE Tax',
  description: 'Instacart shoppers on $35K net owe $4,944 SE tax + federal in 2026. Mileage 72.5¢/mile, insulated bags, phone deductible. Free calculator, all 50 states + DC.',
  keywords: 'instacart tax calculator 2026, instacart shopper self employment tax, instacart 1099 taxes, instacart quarterly taxes',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: 'https://www.gigwisetax.com/instacart' },
  openGraph: {
    title: 'Instacart Tax Calculator 2026 — $35K Net = $4,944 SE Tax',
    description: 'Instacart shoppers on $35K net owe $4,944 SE tax + federal in 2026. Mileage 72.5¢/mile deductible. Free calculator, all 50 states + DC.',
    url: 'https://www.gigwisetax.com/instacart',
    siteName: 'GigWiseTax',
    type: 'website',
    images: [{ url: 'https://www.gigwisetax.com/og-image.png', width: 1200, height: 630, alt: 'Instacart Tax Calculator 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@gigwisetax', creator: '@gigwisetax', title: 'Instacart Tax Calculator 2026 — $35K Net = $4,944 SE Tax', description: 'Free Instacart tax calculator. $35K net = $4,944 SE tax. All 50 States + DC.' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
