'use client';
import { useState } from 'react';

export default function DoorDashInlineCalc() {
  const [income, setIncome] = useState('');
  const [miles, setMiles] = useState('');
  const [result, setResult] = useState<{
    gross:number; netIncome:number; mileDeduct:number;
    seTax:number; fed:number; total:number; quarterly:number; pct:string;
  }|null>(null);

  function calc() {
    const gross = parseFloat(income.replace(/,/g,'')) || 0;
    const mi = parseFloat(miles.replace(/,/g,'')) || 0;
    const mileDeduct = mi * 0.725;
    const netIncome = Math.max(0, gross - mileDeduct);
    const seBase = netIncome * 0.9235;
    const seTax = seBase * 0.153;
    const seDeduct = seTax * 0.5;
    const fedTaxable = Math.max(0, netIncome - seDeduct - 15000);
    let fed = 0;
    if (fedTaxable > 48475) fed = 4807.5 + (fedTaxable - 48475) * 0.22;
    else if (fedTaxable > 11925) fed = 1190.5 + (fedTaxable - 11925) * 0.12;
    else fed = fedTaxable * 0.10;
    const total = seTax + fed;
    const quarterly = total / 4;
    setResult({ gross, netIncome, mileDeduct, seTax, fed, total, quarterly, pct: gross > 0 ? (total/gross*100).toFixed(1) : '0' });
  }

  const fmt = (n: number) => Math.round(n||0).toLocaleString('en-US', { style:'currency', currency:'USD', maximumFractionDigits:0 });

  return (
    <>
      <style>{`
        .dd-calc-wrap { background:#0d1b2e; border:2px solid #e8b84b; border-radius:12px; padding:24px; margin:32px 0; max-width:500px; box-sizing:border-box; }
        @media(max-width:540px) {
          .dd-calc-wrap { padding:16px; margin:20px 0; max-width:100%; }
          .dd-quarterly { font-size:28px !important; }
          .dd-btn { font-size:15px !important; min-height:44px; }
        }
      `}</style>
      <div className="dd-calc-wrap">
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
          <span style={{ fontSize:22 }}>🧮</span>
          <h3 style={{ color:'#e8b84b', margin:0, fontSize:18, fontWeight:800 }}>DoorDash Tax Calculator 2026</h3>
        </div>
        <p style={{ color:'#7a9abf', fontSize:13, margin:'0 0 20px' }}>Estimate SE tax + federal. Includes mileage deduction at $0.725/mile.</p>

        <div style={{ display:'grid', gap:12, marginBottom:16 }}>
          <div>
            <label style={{ color:'#C8D8EC', fontSize:13, display:'block', marginBottom:4 }}>Annual DoorDash earnings ($)</label>
            <input type="number" placeholder="e.g. 35000" value={income}
              onChange={e => setIncome(e.target.value)}
              style={{ width:'100%', padding:'12px 14px', borderRadius:8, border:'1px solid #e8b84b55',
                background:'#07111F', color:'#C8D8EC', fontSize:16, boxSizing:'border-box' }} />
          </div>
          <div>
            <label style={{ color:'#C8D8EC', fontSize:13, display:'block', marginBottom:4 }}>Business miles driven (optional)</label>
            <input type="number" placeholder="e.g. 12000" value={miles}
              onChange={e => setMiles(e.target.value)}
              style={{ width:'100%', padding:'12px 14px', borderRadius:8, border:'1px solid #e8b84b33',
                background:'#07111F', color:'#C8D8EC', fontSize:16, boxSizing:'border-box' }} />
          </div>
        </div>

        <button className="dd-btn" onClick={calc} style={{ width:'100%', padding:14, background:'#e8b84b', color:'#07111F',
          fontWeight:800, fontSize:16, border:'none', borderRadius:8, cursor:'pointer', marginBottom: result ? 20 : 0 }}>
          Calculate My Taxes →
        </button>

        {result && (
          <div style={{ borderTop:'1px solid #e8b84b33', paddingTop:20 }}>
            <div style={{ background:'#07111F', borderRadius:10, padding:16, marginBottom:14, textAlign:'center' }}>
              <div style={{ color:'#7a9abf', fontSize:12, marginBottom:4 }}>SET ASIDE EACH QUARTER</div>
              <div className="dd-quarterly" style={{ color:'#e8b84b', fontSize:36, fontWeight:900 }}>{fmt(result.quarterly)}</div>
              <div style={{ color:'#7a9abf', fontSize:12 }}>Total annual tax: {fmt(result.total)} ({result.pct}% effective rate)</div>
            </div>
            <div style={{ display:'grid', gap:8 }}>
              {[
                ['Gross earnings', fmt(result.gross)],
                ...(result.mileDeduct > 0 ? [['Mileage deduction (−)', fmt(result.mileDeduct)]] : []),
                ['Net taxable income', fmt(result.netIncome)],
                ['Self-employment tax (15.3%)', fmt(result.seTax)],
                ['Federal income tax (est.)', fmt(result.fed)],
              ].map(([label, val]) => (
                <div key={String(label)} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid #e8b84b11' }}>
                  <span style={{ color:'#7a9abf', fontSize:13 }}>{label}</span>
                  <span style={{ color:'#C8D8EC', fontSize:13, fontWeight:700 }}>{val}</span>
                </div>
              ))}
            </div>
            <p style={{ color:'#8899aa', fontSize:11, margin:'14px 0 0' }}>
              * Single filer estimate. Mileage rate $0.725/mile (2026 IRS rate). Consult a tax pro for exact figures.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
