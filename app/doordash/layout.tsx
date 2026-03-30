import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DoorDash Tax Calculator 2026 — Free Dasher Tax Estimator | GigWiseTax',
  description: 'Calculate your DoorDash self-employment taxes in seconds. SE tax (15.3%), federal & state income tax for all 51 states. Free, no signup, updated for 2026 IRS rules.',
  alternates: { canonical: 'https://www.gigwisetax.com/doordash' },
  openGraph: {
    title: 'DoorDash Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate your DoorDash self-employment taxes in seconds. SE tax (15.3%), federal & state income tax for all 51 states. Free, no signup, updated for 2026 IRS rules.',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"DoorDash Tax Calculator","item":"https://www.gigwisetax.com/doordash"}]})}} />{children}</>
}
