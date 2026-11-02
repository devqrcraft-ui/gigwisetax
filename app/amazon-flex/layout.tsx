import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Amazon Flex Tax Calculator 2026 | Free 1099 Estimate',
  description: 'Estimate 2026 Amazon Flex taxes on 1099 income. Includes self-employment, federal tax, mileage and a simplified state estimate. Free; no signup.',
  keywords: 'amazon flex tax calculator 2026, amazon flex self employment tax, amazon flex 1099 taxes, amazon flex quarterly taxes',
  authors: [{ name: 'the GigWiseTax Team' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: 'https://www.gigwisetax.com/amazon-flex' },
  openGraph: {
    title: 'Amazon Flex Tax Calculator 2026 | Free 1099 Estimate',
    description: 'Estimate 2026 Amazon Flex taxes on 1099 income. Includes self-employment, federal tax, mileage and a simplified state estimate. Free; no signup.',
    url: 'https://www.gigwisetax.com/amazon-flex',
    siteName: 'GigWiseTax',
    type: 'website',
    images: [{ url: 'https://www.gigwisetax.com/og-image.png', width: 1200, height: 630, alt: 'Amazon Flex Tax Calculator 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@gigwisetax', creator: '@gigwisetax', title: 'Amazon Flex Tax Calculator 2026 | Free 1099 Estimate', description: 'Estimate 2026 Amazon Flex self-employment and federal taxes. Add mileage and state for a planning estimate. Free; no signup.' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
