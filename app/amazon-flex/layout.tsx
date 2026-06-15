import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Amazon Flex Tax Calculator 2026 — $40K Net = $5,652 SE Tax',
  description: 'Amazon Flex drivers on $40K net owe $5,652 SE tax + federal in 2026. Mileage 72.5¢/mile saves $2,900+. Free calculator, all 51 states, no signup.',
  keywords: 'amazon flex tax calculator 2026, amazon flex self employment tax, amazon flex 1099 taxes, amazon flex quarterly taxes',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: 'https://www.gigwisetax.com/amazon-flex' },
  openGraph: {
    title: 'Amazon Flex Tax Calculator 2026 — $40K Net = $5,652 SE Tax',
    description: 'Amazon Flex drivers on $40K net owe $5,652 SE tax + federal in 2026. Mileage 72.5¢/mile saves $2,900+. Free calculator, all 51 states.',
    url: 'https://www.gigwisetax.com/amazon-flex',
    siteName: 'GigWiseTax',
    type: 'website',
    images: [{ url: 'https://www.gigwisetax.com/og-image.png', width: 1200, height: 630, alt: 'Amazon Flex Tax Calculator 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@gigwisetax', creator: '@gigwisetax', title: 'Amazon Flex Tax Calculator 2026 — $40K Net = $5,652 SE Tax', description: 'Free Amazon Flex tax calculator. $40K net = $5,652 SE tax. All 51 states.' },
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
