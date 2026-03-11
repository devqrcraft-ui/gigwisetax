import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grubhub Driver Tax Calculator 2026 — SE Tax + All 51 States | GigWiseTax",
  description: "Free Grubhub tax calculator 2026. Estimate self-employment tax (15.3%), federal & state income tax, and mileage deduction (72.5¢/mile). No signup. Instant results.",
  alternates: { canonical: "https://www.gigwisetax.com/grubhub" },
  openGraph: {
    title: "Grubhub Driver Tax Calculator 2026 — SE Tax + All 51 States | GigWiseTax",
    description: "Free Grubhub tax calculator 2026. Estimate self-employment tax (15.3%), federal & state income tax, and mileage deduction (72.5¢/mile). No signup. Instant results.",
    url: "https://www.gigwisetax.com/grubhub",
    siteName: "GigWiseTax",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Grubhub take out taxes?", "acceptedAnswer": { "@type": "Answer", "text": "No. Grubhub pays drivers as independent contractors and does not withhold federal, state, or FICA taxes. You must pay SE tax (15.3%) and estimated quarterly taxes yourself." } },
      { "@type": "Question", "name": "How much should I set aside for Grubhub taxes?", "acceptedAnswer": { "@type": "Answer", "text": "Most Grubhub drivers should set aside 25-30% of net earnings. Use this calculator to get your exact estimate based on your state and filing status." } },
      { "@type": "Question", "name": "Will Grubhub send me a 1099?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you earn $600 or more. You will receive a 1099-NEC. You must report all income even if under $600." } },
    ],
  };
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Grubhub Driver Tax Calculator 2026",
    "url": "https://www.gigwisetax.com/grubhub",
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
