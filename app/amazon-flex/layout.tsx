import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon Flex Tax Calculator 2026 — Driver SE Tax Estimator | GigWiseTax',
  description: 'Calculate Amazon Flex driver self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly taxes. Free Amazon Flex tax calculator 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/amazon-flex' },
  openGraph: {
    title: 'Amazon Flex Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate Amazon Flex driver self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly taxes. Free Amazon Flex tax calculator 2026.',
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
          {"@type":"ListItem","position":2,"name":"Amazon Flex Tax Calculator","item":"https://www.gigwisetax.com/amazon-flex"}
        ]
      })}} />
      {children}
    </>
  )
}
