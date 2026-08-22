
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florida Gig Tax Guide 2026 2026 — GigWiseTax',
  description: 'Maximize your gig earnings in Florida with our 2026 tax guide.',
  alternates: { canonical: 'https://www.gigwisetax.com/florida-tax-guide' }
};

export default function HubPage() {
  return (
    <div className="max-w-4xl mx-auto p-8" style={{color: '#C8D8EC', background: '#07111f', minHeight: '100vh'}}>
      <div style={{background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.2)', color:'#22c55e', padding:'4px 12px', borderRadius:'20px', display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'12px', fontWeight:700, marginBottom:'20px'}}>
        <span>✓</span> 2026 IRS Guidance Compliant
      </div>
      <h1 className="text-4xl font-bold mb-6 text-white">Florida Gig Tax Guide 2026</h1>
      <p className="text-xl mb-8 opacity-80">Maximize your gig earnings in Florida with our 2026 tax guide.</p>
      <div className="prose prose-invert max-w-none text-lg leading-relaxed">
        <p>Florida freelancers benefit from no state income tax. However, federal compliance remains mandatory.</p><ul><li><b>Self-Employment Tax:</b> Still 15.3% of your net profit.</li><li><b>Standard Mileage:</b> 72.5 cents per mile for all delivery jobs.</li></ul>
      </div>
      <div className="mt-12 p-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 shadow-xl">
        <h3 className="text-2xl font-bold mb-3 text-white">Calculate Your Florida Taxes</h3>
        <p className="mb-6 opacity-90">Get an exact estimate of your SE tax, federal, and state taxes in seconds.</p>
        <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
          Go to Main Calculator ➔
        </a>
      </div>
    </div>
  );
}
