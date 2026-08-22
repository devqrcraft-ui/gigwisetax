
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Texas Gig Tax Guide 2026 2026 — GigWiseTax',
  description: 'No state income tax in Texas — how to maximize your take-home pay.',
  alternates: { canonical: 'https://www.gigwisetax.com/texas-tax-guide' }
};

export default function HubPage() {
  return (
    <div className="max-w-4xl mx-auto p-8" style={color: '#C8D8EC', background: '#07111f', minHeight: '100vh'}>
      <div style={background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.2)', color:'#22c55e', padding:'4px 12px', borderRadius:'20px', display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'12px', fontWeight:700, marginBottom:'20px'}>
        <span>✓</span> 2026 IRS Guidance Compliant
      </div>
      <h1 className="text-4xl font-bold mb-6 text-white">Texas Gig Tax Guide 2026</h1>
      <p className="text-xl mb-8 opacity-80">No state income tax in Texas — how to maximize your take-home pay.</p>
      <div className="prose prose-invert max-w-none text-lg leading-relaxed">
        <p>Texas is one of the most tax-friendly states for gig workers. With 0% state income tax, you keep more of your DoorDash or Uber earnings.</p><ul><li><b>Federal Focus:</b> Focus on minimizing your federal and SE tax.</li><li><b>Quarterly Payments:</b> Still required even without state tax.</li></ul>
      </div>
      <div className="mt-12 p-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 shadow-xl">
        <h3 className="text-2xl font-bold mb-3 text-white">Calculate Your Texas Taxes</h3>
        <p className="mb-6 opacity-90">Get an exact estimate of your SE tax, federal, and state taxes in seconds.</p>
        <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
          Go to Main Calculator ➔
        </a>
      </div>
    </div>
  );
}
