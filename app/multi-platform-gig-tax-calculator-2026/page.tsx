import type { Metadata } from 'next';
import MultiPlatformCalculator from './MultiPlatformCalculator';

export const metadata: Metadata = {
  title: 'Multi-App Gig Tax Calculator 2026 — DoorDash, Uber, Instacart & More | GigWiseTax',
  description:
    'Calculate combined 1099 taxes for multiple gig apps in 2026. Add income from DoorDash, Uber, Instacart, Amazon Flex and more. See SE tax, federal, state, and quarterly payments in seconds.',
  alternates: { canonical: 'https://www.gigwisetax.com/multi-platform-gig-tax-calculator-2026' },
  openGraph: {
    title: 'Multi-App Gig Tax Calculator 2026 — DoorDash, Uber, Instacart & More',
    description: 'Free combined 1099 tax calculator for gig workers using multiple platforms. SE tax 15.3%, federal, state, and quarterly estimates.',
    url: 'https://www.gigwisetax.com/multi-platform-gig-tax-calculator-2026',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I add up all gig app income for taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The IRS considers all 1099 income together. Income from DoorDash, Uber, Instacart, Amazon Flex, and any other platform is combined on Schedule C (or multiple Schedule Cs) and subject to self-employment tax of 15.3% on 92.35% of your net earnings, plus federal and state income tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the self-employment tax rate for gig workers in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The SE tax rate is 15.3% — 12.4% for Social Security (on earnings up to $176,100) and 2.9% for Medicare. It applies to 92.35% of your net self-employment income. You can deduct half of SE tax from your gross income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate quarterly taxes for multiple gig apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add your total net income from all platforms, calculate your annual tax liability (SE + federal + state), then divide by 4. Pay by Apr 15, Jun 16, Sep 15 2026, and Jan 15 2027. If you expect to owe $1,000 or more, quarterly payments are required by the IRS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deduct expenses from multiple gig apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Common deductions include mileage (70 cents/mile in 2026 for DoorDash, Uber, Instacart deliveries), phone bills, insulated bags, and a portion of your car expenses. Each platform may have separate Schedule C filings or you can combine similar work.',
      },
    },
  ],
};

export default function MultiPlatformCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MultiPlatformCalculator />
    </>
  );
}
