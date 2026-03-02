'use client';
import { useState, useMemo } from 'react';
import { calcFederalTax, calcSETax, STD_DEDUCTION, MILEAGE_RATE, QUARTERLY_DATES } from '../../lib/data';

const fmt = (v: number) => '$' + Math.round(v).toLocaleString();
const pct = (v: number) => (v * 100).toFixed(1) + '%';

interface Props {
  platformName: string;
  platformEmoji: string;
  stateName: string;
  stateRate: number;
  noTax: boolean;
  showMileage: boolean;
}

export default function GigCalculator({ platformName, platformEmoji, stateName, stateRate, noTax, showMileage }: Props) {
  const [income, setIncome] = useState('50000');
  const [miles, setMiles] = useState('15000');
  const [expenses, setExpenses] = useState('2000');
  const [status, setStatus] = useState<'single' | 'married'>('single');

  const calc = useMemo(() => {
    const gross = parseFloat(income) || 0;
    const mileageDeduction = showMileage ? (parseFloat(miles) || 0) * MILEAGE_RATE : 0;
    const expenseDeduction = parseFloat(expenses) || 0;
    const netIncome = Math.max(0, gross - mileageDeduction - expenseDeduction);

    const se = calcSETax(netIncome);
    const halfSE = se.total * 0.5;
    const stdDed = STD_DEDUCTION[status];
    const taxableIncome = Math.max(0, netIncome - halfSE - stdDed);
    const federalTax = calcFederalTax(taxableIncome, status);
    const stateTax = taxableIncome * stateRate;
    const totalTax = se.total + federalTax + stateTax;
    const takeHome = gross - totalTax - mileageDeduction - expenseDeduction;
    const effRate = gross > 0 ? totalTax / gross : 0;
    const quarterly = totalTax / 4;

    return { gross, mileageDeduction, expenseDeduction, netIncome, se, halfSE, federalTax, stateTax, totalTax, takeHome, effRate, quarterly };
  }, [income, miles, expenses, status, stateRate, showMileage]);

  const inp: React.CSSProperties = { width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: 16, fontWeight: 600, outline: 'none', boxSizing: 'border-box' };
  const lbl: React.CSSProperties = { fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6, display: 'block' };

  return (
    <div>
      {/* Inputs */}
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28, marginBottom: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
          <div>
            <label style={lbl}>{platformEmoji} Annual {platformName} Income</label>
            <input type="number" value={income} onChange={e => setIncome(e.target.value)} style={inp} placeholder="50000" />
          </div>
          {showMileage && (
            <div>
              <label style={lbl}>🚗 Miles Driven</label>
              <input type="number" value={miles} onChange={e => setMiles(e.target.value)} style={inp} placeholder="15000" />
            </div>
          )}
          <div>
            <label style={lbl}>💼 Business Expenses</label>
            <input type="number" value={expenses} onChange={e => setExpenses(e.target.value)} style={inp} placeholder="2000" />
          </div>
          <div>
            <label style={lbl}>📋 Filing Status</label>
            <select value={status} onChange={e => setStatus(e.target.value as 'single' | 'married')} style={{ ...inp, cursor: 'pointer' }}>
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Result */}
      <div style={{ background: 'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.1))', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 16, padding: '28px 32px', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>💵 Estimated Take-Home Pay</div>
          <div style={{ fontSize: 'clamp(36px,7vw,56px)', fontWeight: 900, color: '#4ade80', lineHeight: 1, fontFamily: "'Space Grotesk',sans-serif" }}>{fmt(calc.takeHome)}</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>after all taxes & deductions</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Total Tax Burden</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#f87171' }}>{fmt(calc.totalTax)}</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>Effective rate: {pct(calc.effRate)}</div>
        </div>
      </div>

      {/* Tax Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'SE Tax (SS+Medicare)', value: calc.se.total, sub: `15.3% on ${fmt(calc.se.base)}`, color: '#f87171' },
          { label: 'Federal Income Tax', value: calc.federalTax, sub: 'After deductions', color: '#fb923c' },
          { label: `${stateName} State Tax`, value: calc.stateTax, sub: noTax ? '🎉 No state tax!' : pct(stateRate), color: noTax ? '#4ade80' : '#fbbf24' },
          { label: 'Mileage Deduction', value: calc.mileageDeduction, sub: `${MILEAGE_RATE}/mile saved`, color: '#34d399', negative: true },
          { label: 'Expense Deduction', value: calc.expenseDeduction, sub: 'Business expenses', color: '#60a5fa', negative: true },
        ].map(item => (
          <div key={item.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '16px 14px' }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 6, lineHeight: 1.3 }}>{item.label}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: item.color }}>{item.negative ? '-' : ''}{fmt(item.value)}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{item.sub}</div>
          </div>
        ))}
      </div>

      {/* Quarterly Payments */}
      <div style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: 16, padding: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fbbf24', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
          📅 Quarterly Estimated Tax Payments
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 10 }}>
          {QUARTERLY_DATES.map(q => (
            <div key={q.period} style={{ background: 'rgba(251,191,36,0.08)', borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{q.period} ({q.months})</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#fbbf24' }}>{fmt(calc.quarterly)}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>Due: {q.due}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: '12px 0 0', lineHeight: 1.5 }}>
          ⚠️ If you expect to owe $1,000+ in taxes, the IRS requires quarterly estimated payments to avoid penalties.
        </p>
      </div>

      <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 16 }}>
        🔒 All calculations are performed in your browser — your income data never leaves your device.
      </p>
    </div>
  );
}
