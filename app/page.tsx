import HomeClient from './home-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gig Worker Tax Calculator 2026 — DoorDash, Uber, OnlyFans | GigWiseTax',
  description: 'Free self-employment tax calculator for gig workers. Calculate SE tax, federal, state taxes and quarterly payments for DoorDash, Uber, Etsy, OnlyFans and more. All 51 states.',
  alternates: { canonical: 'https://gigwisetax.com' },
  openGraph: {
    title: 'Gig Worker Tax Calculator 2026 — Free, All 51 States',
    description: 'Calculate SE tax, federal and state taxes for any gig platform. Free, private, no signup.',
    url: 'https://gigwisetax.com',
    siteName: 'GigWiseTax',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much self-employment tax do gig workers pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"Gig workers pay 15.3% self-employment (SE) tax on 92.35% of net earnings — 12.4% Social Security and 2.9% Medicare. You can deduct half of SE tax from your federal taxable income."}},{"@type":"Question","name":"Do I need to pay quarterly taxes as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you expect to owe $1,000 or more in taxes, the IRS requires quarterly estimated payments. 2026 deadlines: April 15, June 16, September 15, and January 15, 2027."}},{"@type":"Question","name":"What is the 1099 threshold for gig work in 2026?","acceptedAnswer":{"@type":"Answer","text":"Platforms must issue a 1099-NEC if you earn $600 or more. However, you must report all income to the IRS even without a 1099 form."}},{"@type":"Question","name":"How much should I set aside for taxes as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"Set aside 25-30% of net gig income for taxes. Higher earners in high-tax states like California or New York should set aside 35-40% to cover SE tax, federal, and state income tax."}}]}) }} />
      <HomeClient />
    </>
  );
}
