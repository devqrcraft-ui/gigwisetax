'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { STATES as ALL_STATES } from '@/lib/data';
import { estimateTaxRaw } from '@/lib/tax-rules';

// Єдине джерело ставок штатів: lib/data.ts (щоб калькулятори не розбігалися).
const STATE_TAXES: Record<string, number> = {
  'No state tax (AK, FL, NV, NH, SD, TN, TX, WA, WY)': 0,
  ...Object.fromEntries(ALL_STATES.filter(s => s.rate > 0).map(s => [s.name, Number((s.rate * 100).toFixed(2))])),
};

const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
const pct = (n: number) => (n * 100).toFixed(1) + '%';

const PLATFORMS = [
  { key: 'doordash', label: 'DoorDash', color: '#e8b84b', href: '/doordash-tax-calculator-2026' },
  { key: 'uber',     label: 'Uber / Uber Eats', color: '#60a5fa', href: '/uber-tax-calculator-2026' },
  { key: 'instacart',label: 'Instacart', color: '#4ade80', href: '/instacart-tax-calculator-2026' },
  { key: 'flex',     label: 'Amazon Flex', color: '#fb923c', href: '/amazon-flex-tax-calculator' },
  { key: 'other',    label: 'Other 1099 Income', color: '#a78bfa', href: null },
];

const QUARTERLY_DATES = [
  { label: 'Q1 2026', date: 'April 15, 2026' },
  { label: 'Q2 2026', date: 'June 15, 2026' },
  { label: 'Q3 2026', date: 'September 15, 2026' },
  { label: 'Q4 2026', date: 'January 15, 2027' },
];

const inputStyle = {
  background: '#07111F',
  border: '2px solid #1a2d45',
  borderRadius: '10px',
  color: '#C8D8EC',
  fontSize: '16px',
  minHeight: '48px',
  padding: '10px 14px',
  width: '100%',
  boxSizing: 'border-box' as const,
  outline: 'none',
};

const labelStyle = {
  color: '#C8D8EC',
  display: 'block',
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: '6px',
  opacity: 0.85,
};

export default function MultiPlatformCalculator() {
  const [income, setIncome] = useState<Record<string, string>>({
    doordash: '', uber: '', instacart: '', flex: '', other: '',
  });
  const [expenses, setExpenses] = useState('');
  const [state, setState] = useState('No state tax (AK, FL, NV, NH, SD, TN, TX, WA, WY)');
  const [filing, setFiling] = useState<'single' | 'married' | 'hoh'>('single');

  const calc = useMemo(() => {
    const gross = Object.values(income).reduce((s, v) => s + (parseFloat(v) || 0), 0);
    const exp   = parseFloat(expenses) || 0;
    const stateRate = (STATE_TAXES[state] ?? 0) / 100;
    const estimate = estimateTaxRaw(gross, stateRate, filing, exp);
    if (estimate.net === 0) return null;

    return {
      gross, net: estimate.net, exp, seTax: estimate.se, fedTax: estimate.federal,
      stateTax: estimate.state, totalTax: estimate.total, quarterly: estimate.quarterly,
      effective: estimate.total / estimate.net, taxable: estimate.taxable,
    };
  }, [income, expenses, state, filing]);

  const setInc = (key: string, val: string) => {
    const clean = val.replace(/[^0-9.]/g, '');
    setIncome(p => ({ ...p, [key]: clean }));
  };

  return (
    <main style={{ background: '#07111F', minHeight: '100vh', paddingBottom: '24px' }}>

      {/* Hero */}
      <section className="multi-calc-hero" style={{
        background: 'linear-gradient(135deg,#0d1e35 0%,#07111F 100%)',
        borderBottom: '1px solid #1a2d45',
        padding: '48px 20px 40px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#e8b84b', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px' }}>
          FREE 2026 CALCULATOR
        </p>
        <h1 style={{
          color: '#C8D8EC',
          fontSize: 'clamp(22px,5vw,40px)',
          fontWeight: 800, lineHeight: 1.2,
          margin: '0 auto 16px',
          maxWidth: '760px',
        }}>
          Multi-App Gig Tax Calculator 2026{' '}
          <span style={{ color: '#e8b84b' }}>— DoorDash, Uber, Instacart & More</span>
        </h1>
        <p style={{ color: '#C8D8EC', fontSize: 'clamp(15px,2vw,18px)', maxWidth: '620px', margin: '0 auto', opacity: 0.85 }}>
          Reconcile income from DoorDash, Uber, Instacart, Amazon Flex, and other apps in one estimate. Enter each app&apos;s annual gross once, add eligible business expenses once, and review the combined estimate and quarterly schedule. Don&apos;t count shared-trip miles twice.
        </p>
      </section>

      <div className="multi-calc-shell" style={{ maxWidth: '780px', margin: '0 auto', padding: '0 16px' }}>

        {/* ── Inputs ── */}
        <div className="multi-calc-card" style={{
          background: '#0d1e35', border: '1px solid #1a2d45',
          borderRadius: '16px', padding: 'clamp(20px,4vw,36px)', marginTop: '32px',
        }}>
          <h2 style={{ color: '#C8D8EC', fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>
            Step 1 — Enter your annual gross income by platform
          </h2>

          {/* Platform incomes — 2-col on wide, 1-col on mobile */}
          <div className="multi-calc-input-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px', marginBottom: '20px' }}>
            {PLATFORMS.map(p => (
              <div key={p.key}>
                <label style={{ ...labelStyle }}>
                  <span style={{ color: p.color }}>●</span> {p.label}
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#e8b84b', fontWeight: 700, fontSize: '16px' }}>$</span>
                  <input
                    type="number"
                    min={0}
                    placeholder="0"
                    value={income[p.key]}
                    onChange={e => setInc(p.key, e.target.value)}
                    style={{ ...inputStyle, paddingLeft: '28px' }}
                  />
                </div>
              </div>
            ))}

            {/* Expenses */}
            <div>
              <label style={{ ...labelStyle }}>
                Business Expenses (mileage, phone, supplies)
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#e8b84b', fontWeight: 700, fontSize: '16px' }}>$</span>
                <input
                  type="number"
                  min={0}
                  placeholder="0"
                  value={expenses}
                  onChange={e => setExpenses(e.target.value.replace(/[^0-9.]/g, ''))}
                  style={{ ...inputStyle, paddingLeft: '28px' }}
                />
              </div>
              <p style={{ color: '#C8D8EC', fontSize: '12px', margin: '6px 0 0', opacity: 0.6 }}>
                Mileage: 72.5¢–76¢/mile × business miles driven
              </p>
            </div>
          </div>

          <h2 style={{ color: '#C8D8EC', fontSize: '18px', fontWeight: 700, margin: '24px 0 16px' }}>
            Step 2 — Tax situation
          </h2>
          <div className="multi-calc-status-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
            <div>
              <label style={{ ...labelStyle }}>Filing Status</label>
              <select
                value={filing}
                onChange={e => setFiling(e.target.value as 'single' | 'married' | 'hoh')}
                style={{ ...inputStyle }}
              >
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div>
              <label style={{ ...labelStyle }}>State</label>
              <select
                value={state}
                onChange={e => setState(e.target.value)}
                style={{ ...inputStyle }}
              >
                {Object.keys(STATE_TAXES).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        {calc && (
          <div className="multi-calc-card" style={{
            background: '#0d1e35', border: '1px solid #1a2d45',
            borderRadius: '16px', padding: 'clamp(20px,4vw,36px)', marginTop: '20px',
          }}>
            <h2 style={{ color: '#C8D8EC', fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>
              Your 2026 Tax Estimate
            </h2>

            {/* Summary cards */}
            <div className="multi-calc-summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px', marginBottom: '28px' }}>
              {[
                { label: 'Total Gross Income', val: fmt(calc.gross), sub: 'All platforms combined', color: '#C8D8EC' },
                { label: 'Net After Expenses', val: fmt(calc.net), sub: fmt(calc.exp) + ' in deductions', color: '#C8D8EC' },
                { label: 'Self-Employment Tax', val: fmt(calc.seTax), sub: '15.3% × 92.35% of net', color: '#e8b84b' },
                { label: 'Federal Income Tax', val: fmt(calc.fedTax), sub: 'After SE deduction + std deduct', color: '#60a5fa' },
                { label: 'Estimated State Tax', val: fmt(calc.stateTax), sub: (STATE_TAXES[state] ?? 0) + '% simplified rate', color: '#4ade80' },
                { label: 'Total Tax Owed', val: fmt(calc.totalTax), sub: 'Effective rate: ' + pct(calc.effective), color: '#e8b84b' },
              ].map(c => (
                <div key={c.label} style={{
                  background: '#07111F', border: '1px solid #1a2d45',
                  borderRadius: '12px', padding: '16px',
                }}>
                  <p style={{ color: '#C8D8EC', fontSize: '12px', margin: '0 0 6px', opacity: 0.7 }}>{c.label}</p>
                  <p style={{ color: c.color, fontSize: '22px', fontWeight: 800, margin: '0 0 4px' }}>{c.val}</p>
                  <p style={{ color: '#C8D8EC', fontSize: '11px', margin: 0, opacity: 0.85 }}>{c.sub}</p>
                </div>
              ))}
            </div>

            {/* Quarterly payments */}
            <div style={{
              background: 'rgba(232,184,75,0.08)',
              border: '1px solid rgba(232,184,75,0.3)',
              borderRadius: '12px', padding: '20px', marginBottom: '20px',
            }}>
              <h3 style={{ color: '#e8b84b', fontSize: '16px', fontWeight: 700, margin: '0 0 16px' }}>
                Quarterly Payment Schedule — {fmt(calc.quarterly)} per quarter
              </h3>
              {calc.totalTax < 1000 && (
                <p style={{ color: '#C8D8EC', fontSize: '14px', margin: '0 0 12px', opacity: 0.8 }}>
                  Your estimated tax is under $1,000 — quarterly payments may not be required. Verify with a tax professional.
                </p>
              )}
              <div className="multi-calc-quarter-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '10px' }}>
                {QUARTERLY_DATES.map(q => (
                  <div key={q.date} style={{
                    background: '#07111F', border: '1px solid #1a2d45',
                    borderRadius: '10px', padding: '14px', textAlign: 'center',
                  }}>
                    <p style={{ color: '#e8b84b', fontSize: '12px', fontWeight: 700, margin: '0 0 4px' }}>{q.label}</p>
                    <p style={{ color: '#C8D8EC', fontSize: '18px', fontWeight: 800, margin: '0 0 4px' }}>{fmt(calc.quarterly)}</p>
                    <p style={{ color: '#C8D8EC', fontSize: '11px', margin: 0, opacity: 0.6 }}>Due {q.date}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: '#C8D8EC', fontSize: '13px', margin: '14px 0 0', opacity: 0.75 }}>
                If you expect to owe $1,000 or more, the IRS requires quarterly estimated payments to avoid underpayment penalties.
              </p>
            </div>

            {/* Platform breakdown */}
            <h3 style={{ color: '#C8D8EC', fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>
              Income Breakdown by Platform
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {PLATFORMS.filter(p => parseFloat(income[p.key] || '0') > 0).map(p => {
                const v = parseFloat(income[p.key] || '0');
                const share = calc.gross > 0 ? v / calc.gross : 0;
                return (
                  <div key={p.key} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: p.color, fontSize: '13px', fontWeight: 600, minWidth: '130px' }}>{p.label}</span>
                    <div style={{ flex: 1, background: '#07111F', borderRadius: '99px', height: '8px' }}>
                      <div style={{ background: p.color, height: '8px', borderRadius: '99px', width: (share * 100).toFixed(1) + '%' }} />
                    </div>
                    <span style={{ color: '#C8D8EC', fontSize: '13px', minWidth: '80px', textAlign: 'right' }}>{fmt(v)}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ color: '#C8D8EC', fontSize: '14px', fontWeight: 600, margin: '0 0 4px' }}>
                Platform-specific calculators with mileage tracking:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '10px' }}>
                {PLATFORMS.filter(p => p.href).map(p => (
                  <Link key={p.key} href={p.href!} className="multi-calc-platform-link" style={{
                    background: 'transparent',
                    border: '2px solid ' + p.color,
                    borderRadius: '10px',
                    color: p.color,
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 700,
                    minHeight: '44px',
                    padding: '10px 14px',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}>
                    {p.label} Calculator →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div style={{
          background: 'rgba(232,184,75,0.06)',
          border: '1px solid rgba(232,184,75,0.2)',
          borderRadius: '12px', padding: '16px', marginTop: '20px',
        }}>
          <p style={{ color: '#C8D8EC', fontSize: '13px', lineHeight: 1.7, margin: 0, opacity: 0.8 }}>
            <strong style={{ color: '#e8b84b' }}>Disclaimer:</strong> This calculator provides estimates for educational purposes only. It uses 2026 tax brackets and a simplified state tax rate. Actual tax liability depends on your specific deductions, credits, filing situation, and state rules. Consult a qualified tax professional for advice specific to your circumstances.
          </p>
        </div>

        {/* FAQ */}
        <section style={{ marginTop: '48px' }}>
          <h2 style={{ color: '#C8D8EC', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, marginBottom: '20px' }}>
            Multi-App Gig Tax FAQ
          </h2>
          {[
            { q: 'Why enter income from each app separately?', a: 'Separate fields make it easier to reconcile platform statements. This estimator adds the entered gross amounts, subtracts the eligible business expenses you enter once, and estimates a combined total. It is a planning tool, not tax-return preparation; do not count shared-trip miles twice.' },
            { q: 'What is the self-employment tax rate for gig workers in 2026?', a: 'The SE tax rate is 15.3% — 12.4% for Social Security (on earnings up to $184,500) and 2.9% for Medicare. You can deduct half of your SE tax from gross income, which reduces your federal and state tax.' },
            { q: 'How do I calculate quarterly taxes for multiple gig apps?', a: 'Add all net income, calculate total annual tax, divide by 4. Pay by Apr 15, Jun 15, Sep 15 2026, and Jan 15 2027. If you expect $1,000+ in tax owed, quarterly payments are required to avoid IRS penalties.' },
            { q: 'Can I deduct mileage for DoorDash and Uber at the same time?', a: 'Yes — but only once per mile. If you pick up a DoorDash and Uber Eats order on the same trip, you cannot deduct the mileage twice. Track miles per platform and total across all apps. The 2026 standard mileage rate is 72.5 cents per mile (January–June; 76 cents from July 1).' },
          ].map(item => (
            <div key={item.q} style={{
              background: '#0d1e35', border: '1px solid #1a2d45',
              borderRadius: '12px', padding: '20px', marginBottom: '8px',
            }}>
              <h3 style={{ color: '#e8b84b', fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>{item.q}</h3>
              <p style={{ color: '#C8D8EC', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
