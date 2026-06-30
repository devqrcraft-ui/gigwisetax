import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'DoorDash Tax Calculator 2026 — $40K Net = $5,652 SE Tax',
  description: 'DoorDash dashers on $40K net owe $5,652 SE tax + $3,200 federal in 2026. Mileage 72.5¢/mile saves $2,900+. Free calculator, all 50 states + DC, no signup.',
  keywords: 'doordash tax calculator 2026, dasher self employment tax, doordash 1099 taxes, doordash quarterly taxes',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: 'https://www.gigwisetax.com/doordash' },
  openGraph: {
    title: 'DoorDash Tax Calculator 2026 — $40K Net = $5,652 SE Tax',
    description: 'DoorDash dashers on $40K net owe $5,652 SE tax + federal in 2026. Mileage 72.5¢/mile saves $2,900+. Free calculator, all 50 states + DC.',
    url: 'https://www.gigwisetax.com/doordash',
    siteName: 'GigWiseTax',
    type: 'website',
    images: [{ url: 'https://www.gigwisetax.com/og-image.png', width: 1200, height: 630, alt: 'DoorDash Tax Calculator 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@gigwisetax', creator: '@gigwisetax', title: 'DoorDash Tax Calculator 2026 — $40K Net = $5,652 SE Tax', description: 'Free DoorDash tax calculator. $40K net = $5,652 SE tax. All 50 States + DC.' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},
          {"@type":"ListItem","position":2,"name":"DoorDash Tax Calculator","item":"https://www.gigwisetax.com/doordash"}
        ]
      })}} />
      {children}
    </>
  )
}
