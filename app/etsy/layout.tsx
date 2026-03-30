import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etsy Tax Calculator 2026 — Seller Self-Employment Tax | GigWiseTax',
  description: 'Calculate your Etsy seller self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Includes Schedule C deductions for materials, shipping, fees. Free, 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/etsy' },
  openGraph: {
    title: 'Etsy Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate your Etsy seller self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Includes Schedule C deductions for materials, shipping, fees. Free, 2026.',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},
          {"@type":"ListItem","position":2,"name":"Etsy Tax Calculator","item":"https://www.gigwisetax.com/etsy"}
        ]
      })}} />
      {children}
    </>
  )
}
