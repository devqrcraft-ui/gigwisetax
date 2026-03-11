import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turo Host Tax Calculator 2026 — Income Tax + Depreciation | GigWiseTax",
  description: "Free Turo tax calculator 2026. Estimate income tax, self-employment tax, and car depreciation deductions for all 51 states. Instant results, no signup required.",
  alternates: { canonical: "https://www.gigwisetax.com/turo" },
  openGraph: {
    title: "Turo Host Tax Calculator 2026 — Income Tax + Depreciation | GigWiseTax",
    description: "Free Turo tax calculator 2026. Estimate income tax, self-employment tax, and car depreciation deductions for all 51 states. Instant results, no signup required.",
    url: "https://www.gigwisetax.com/turo",
    siteName: "GigWiseTax",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is Turo income taxable?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All income from renting your car on Turo is taxable. Turo issues a 1099-K if you receive $600 or more in 2026." } },
      { "@type": "Question", "name": "What is the biggest tax deduction for Turo hosts?", "acceptedAnswer": { "@type": "Answer", "text": "Depreciation is typically the largest deduction. Under MACRS, a car depreciates over 5 years. Section 179 may allow full deduction in year one for vehicles over 6,000 lbs." } },
      { "@type": "Question", "name": "Is Turo rental income subject to self-employment tax?", "acceptedAnswer": { "@type": "Answer", "text": "It depends. Occasional rental of 1-2 cars may qualify as passive rental income with no SE tax. Actively managing multiple cars as a business is subject to 15.3% SE tax." } },
    ],
  };
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Turo Host Tax Calculator 2026",
    "url": "https://www.gigwisetax.com/turo",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      {children}
    </>
  );
}
