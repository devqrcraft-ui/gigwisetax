import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airbnb Tax Calculator 2026 — Free, Instant Results for All 51 States | GigWiseTax',
  description: 'Calculate Airbnb host taxes for 2026. SE tax, federal & state for all 51 states. Includes 14-day rule, Schedule E deductions, depreciation. Free Airbnb tax estimator.',
  alternates: { canonical: 'https://www.gigwisetax.com/airbnb' },
  openGraph: {
    title: 'Airbnb Tax Calculator 2026 — Free, Instant Results for All 51 States | GigWiseTax',
    description: 'Calculate Airbnb host taxes for 2026. SE tax, federal & state for all 51 states. Includes 14-day rule, Schedule E deductions, depreciation. Free Airbnb tax estimator.',
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
          {"@type":"ListItem","position":2,"name":"Airbnb Tax Calculator","item":"https://www.gigwisetax.com/airbnb"}
        ]
      })}} />
      {children}
    </>
  )
}
