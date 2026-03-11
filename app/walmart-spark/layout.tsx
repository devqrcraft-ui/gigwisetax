import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walmart Spark Driver Tax Calculator 2026 — 15.3% SE Tax | GigWiseTax",
  description: "Free Walmart Spark tax calculator 2026. Estimate SE tax (15.3%), federal & state income tax, mileage deduction (72.5¢/mile) for all 51 states. No registration needed.",
  alternates: { canonical: "https://www.gigwisetax.com/walmart-spark" },
  openGraph: {
    title: "Walmart Spark Driver Tax Calculator 2026 — 15.3% SE Tax | GigWiseTax",
    description: "Free Walmart Spark tax calculator 2026. Estimate SE tax (15.3%), federal & state income tax, mileage deduction (72.5¢/mile) for all 51 states. No registration needed.",
    url: "https://www.gigwisetax.com/walmart-spark",
    siteName: "GigWiseTax",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Walmart Spark send a 1099?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If you earn $600 or more, Walmart Spark issues a 1099-NEC. You must report all income even if no 1099 is received." } },
      { "@type": "Question", "name": "What mileage rate can Spark drivers use in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "The IRS standard mileage rate for 2026 is 72.5 cents per mile. Track every mile from accepting an order until returning home after the last delivery." } },
      { "@type": "Question", "name": "Do I need to pay quarterly taxes as a Spark driver?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If you expect to owe $1,000 or more, the IRS requires quarterly payments. Deadlines: Q1 Apr 15, Q2 Jun 16, Q3 Sep 15, Q4 Jan 15." } },
    ],
  };
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Walmart Spark Driver Tax Calculator 2026",
    "url": "https://www.gigwisetax.com/walmart-spark",
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
