import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Uber Driver Tax Calculator 2026 — $35K Net = $4,944 SE Tax',
  description: 'Uber drivers on $35K net owe $4,944 SE tax + federal in 2026. Mileage 72.5¢/mile, phone, car depreciation deductible. Free calculator, all 51 states.',
  keywords: 'uber tax calculator 2026, uber driver self employment tax, uber 1099 taxes, uber quarterly taxes',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: 'https://www.gigwisetax.com/uber' },
  openGraph: {
    title: 'Uber Driver Tax Calculator 2026 — $35K Net = $4,944 SE Tax',
    description: 'Uber drivers on $35K net owe $4,944 SE tax + federal in 2026. Mileage 72.5¢/mile deductible. Free calculator, all 51 states.',
    url: 'https://www.gigwisetax.com/uber',
    siteName: 'GigWiseTax',
    type: 'website',
    images: [{ url: 'https://www.gigwisetax.com/og-image.png', width: 1200, height: 630, alt: 'Uber Driver Tax Calculator 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@gigwisetax', creator: '@gigwisetax', title: 'Uber Driver Tax Calculator 2026 — $35K Net = $4,944 SE Tax', description: 'Free Uber tax calculator. $35K net = $4,944 SE tax. All 51 states.' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},
          {"@type":"ListItem","position":2,"name":"Uber Tax Calculator","item":"https://www.gigwisetax.com/uber"}
        ]
      })}} />
      {children}
    </>
  )
}
