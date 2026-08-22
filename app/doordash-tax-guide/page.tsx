
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DoorDash Driver Tax Guide 2026 2026 — GigWiseTax Guide',
  description: 'Maximize your DoorDash earnings by claiming every legal tax deduction.',
  alternates: { canonical: 'https://www.gigwisetax.com/doordash-tax-guide' }
};

export default function HubPage() {
  return (
    <div className="max-w-4xl mx-auto p-8" style={color: '#C8D8EC', background: '#07111f'}>
      <div style={background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.2)', color:'#22c55e', padding:'4px 12px', borderRadius:'20px', display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'12px', fontWeight:700, marginBottom:'20px'}>
        <span>✓</span> 2026 IRS Guidance Compliant
      </div>
      <h1 className="text-4xl font-bold mb-6">DoorDash Driver Tax Guide 2026</h1>
      <p className="text-xl mb-8 opacity-80">Maximize your DoorDash earnings by claiming every legal tax deduction.</p>
      <div className="prose prose-invert max-w-none">
        <p>DoorDash (Dashers) are independent contractors. You must pay self-employment tax on all earnings over $400.</p><ul><li>Insulated bags and gear</li><li>Parking fees during deliveries</li><li>Tolls and road fees</li></ul>
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
