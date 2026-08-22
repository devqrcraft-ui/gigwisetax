
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'California Gig Tax Guide 2026 2026 — GigWiseTax Guide',
  description: 'State-specific tax rules for gig workers in California, including AB5 and state brackets.',
  alternates: { canonical: 'https://www.gigwisetax.com/california-tax-guide' }
};

export default function HubPage() {
  return (
    <div className="max-w-4xl mx-auto p-8" style={{color: '#C8D8EC', background: '#07111f'}}>
      <div style={{background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.2)', color:'#22c55e', padding:'4px 12px', borderRadius:'20px', display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'12px', fontWeight:700, marginBottom:'20px'}}>
        <span>✓</span> 2026 IRS Guidance Compliant
      </div>
      <h1 className="text-4xl font-bold mb-6">California Gig Tax Guide 2026</h1>
      <p className="text-xl mb-8 opacity-80">State-specific tax rules for gig workers in California, including AB5 and state brackets.</p>
      <div className="prose prose-invert max-w-none">
        <p>California has the highest state income tax (up to 13.3%). Understanding your CA tax liability is critical for gig workers.</p><ul><li>CA State Disability Insurance (SDI)</li><li>Progressive state tax brackets</li><li>Local city taxes (SF, LA)</li></ul>
      </div>
      <div className="mt-12 p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
        <h3 className="text-xl font-bold mb-2">Calculate Your Total Taxes</h3>
        <p className="mb-4">Use our main tool to see your final bill after all deductions.</p>
        <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
          Go to Main Calculator ➔
        </a>
      </div>
    </div>
  );
}
