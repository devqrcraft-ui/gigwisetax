import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Multi-App Gig Taxes 2026 — Uber + DoorDash + Instacart Combined | GigWiseTax',
  description: 'Working multiple gig apps? Learn how to combine Uber, DoorDash, Instacart, Amazon Flex income for taxes. One Schedule C or multiple? Quarterly payments, deductions, real examples.',
  alternates: { canonical: 'https://www.gigwisetax.com/multi-app-gig-taxes-2026' },
  openGraph: {
    title: 'Multi-App Gig Taxes 2026 — How to File When You Work Multiple Platforms',
    description: 'Complete guide to combining gig income from multiple apps for your 2026 tax return.',
    url: 'https://www.gigwisetax.com/multi-app-gig-taxes-2026',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I file separate Schedule C forms for each gig app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally no. If all your gig work falls under one business activity (e.g., delivery driving for DoorDash + Instacart + Amazon Flex), you combine all income on a single Schedule C. If your activities are truly separate businesses (e.g., driving + Etsy seller), you may file separate Schedule C forms. Most gig workers use one Schedule C."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate quarterly taxes when I work multiple gig apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add up all net income from every platform for the quarter, subtract business expenses (mileage, phone, supplies), then apply 15.3% SE tax + your estimated federal income tax rate. Divide the annual estimate by 4 for equal quarterly payments, or use the annualized method if income varies by season."
      }
    },
    {
      "@type": "Question",
      "name": "Can I deduct mileage for both Uber and DoorDash?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — you can deduct all business miles driven across all platforms, but you cannot count the same mile twice. Track miles per platform using a mileage app (Stride, Everlance) and combine the totals on Schedule C. The 2026 IRS rate is $0.725 per mile."
      }
    },
    {
      "@type": "Question",
      "name": "What if I worked in two different states for different apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may need to file a part-year or non-resident return in each state where you earned income. Each state has different rules. For example, a driver who worked Uber in California and DoorDash in Nevada owes California state tax on CA earnings only. Nevada has no state income tax."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I set aside for taxes working 3 gig apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Set aside 25–30% of combined net income from all platforms. The formula: combined net revenue minus all deductions (mileage, phone, supplies) equals taxable net. Apply 15.3% SE tax + 10–22% federal income tax + state tax. Use our calculator to get the exact number for your state."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to File Taxes Working Multiple Gig Apps in 2026",
  "description": "Step-by-step guide to combining income from DoorDash, Uber, Instacart and other gig platforms for your 2026 tax return.",
  "step": [
    { "@type": "HowToStep", "name": "Gather all 1099-NEC forms", "text": "Collect 1099-NEC from every platform that paid you $600 or more. Platforms below $600 still require you to report income — just without a 1099." },
    { "@type": "HowToStep", "name": "Total all platform income", "text": "Add gross income from every app. This is your total self-employment revenue before deductions." },
    { "@type": "HowToStep", "name": "Calculate combined deductions", "text": "Add mileage (all apps combined × $0.725), phone bill percentage, supplies, and other business costs. Do not count the same mile for two apps." },
    { "@type": "HowToStep", "name": "Report on Schedule C", "text": "Most gig workers report all delivery/driving income on one Schedule C. List total revenue and total deductions to arrive at net profit." },
    { "@type": "HowToStep", "name": "Calculate SE tax on net profit", "text": "Multiply net profit by 0.9235, then by 0.153. This is your self-employment tax. You deduct half of it on Form 1040." },
    { "@type": "HowToStep", "name": "Pay quarterly if you owe $1,000+", "text": "If total tax owed exceeds $1,000, pay quarterly estimates by April 15, June 16, September 15, and January 15, 2027 to avoid underpayment penalties." }
  ]
};

const COMBOS = [
  {
    apps: ['DoorDash', 'Instacart'],
    emoji: '',
    income: 55000,
    expenses: 14000,
    state: 'Texas',
    stateRate: 0,
    se: 5793,
    fed: 5700,
    stateTax: 0,
    total: 11493,
    quarterly: 2873,
    note: 'Both are delivery — one Schedule C. Combine all mileage.',
  },
  {
    apps: ['Uber', 'DoorDash'],
    emoji: '',
    income: 62000,
    expenses: 16000,
    state: 'California',
    stateRate: 9.3,
    se: 6543,
    fed: 6800,
    stateTax: 4300,
    total: 17643,
    quarterly: 4411,
    note: 'Rideshare + delivery = one Schedule C. High CA state tax — plan ahead.',
  },
  {
    apps: ['Instacart', 'Amazon Flex'],
    emoji: '',
    income: 48000,
    expenses: 11000,
    state: 'Florida',
    stateRate: 0,
    se: 5069,
    fed: 5100,
    stateTax: 0,
    total: 10169,
    quarterly: 2542,
    note: 'Both delivery — one Schedule C. No FL state tax.',
  },
  {
    apps: ['Uber', 'Etsy'],
    emoji: '',
    income: 70000,
    expenses: 18000,
    state: 'New York',
    stateRate: 6.85,
    se: 7185,
    fed: 8500,
    stateTax: 3600,
    total: 19285,
    quarterly: 4821,
    note: 'Driving + selling = may need 2 Schedule C forms. NY state tax is significant.',
  },
];

const fmt = (n: number) => '$' + n.toLocaleString('en-US');

const CSS = `
  body { background: #0d1117; }
  .wrap { max-width: 960px; margin: 0 auto; padding: 48px 24px 80px; color: #d1d5db; font-family: 'Segoe UI', sans-serif; }
  .badge { display: inline-block; background: rgba(232,184,75,.12); border: 1px solid rgba(232,184,75,.3); color: #e8b84b; font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: 4px 14px; border-radius: 20px; margin-bottom: 16px; }
  h1 { font-size: clamp(22px,5vw,36px); font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 12px; }
  h1 em { color: #e8b84b; font-style: normal; }
  .lead { font-size: 15px; color: #9ca3af; line-height: 1.75; margin-bottom: 12px; max-width: 720px; }
  .disclaimer { font-size: 13px; color: rgba(255,255,255,.7); margin-bottom: 36px; }
  h2 { font-size: 20px; font-weight: 800; color: #fff; margin: 0 0 16px; }
  h3 { font-size: 15px; font-weight: 700; color: #e8b84b; margin: 0 0 10px; }
  .section { margin-bottom: 52px; }
  .rule-box { background: rgba(34,197,94,.05); border: 1px solid rgba(34,197,94,.2); border-radius: 10px; padding: 18px 22px; margin-bottom: 16px; }
  .rule-title { font-size: 14px; font-weight: 700; color: #4ade80; margin-bottom: 6px; }
  .rule-desc { font-size: 13px; color: #9ca3af; line-height: 1.65; }
  .warn-box { background: rgba(178,34,52,.07); border: 1px solid rgba(178,34,52,.25); border-radius: 10px; padding: 18px 22px; margin-bottom: 16px; }
  .warn-title { font-size: 14px; font-weight: 700; color: #fca5a5; margin-bottom: 6px; }
  .warn-desc { font-size: 13px; color: #9ca3af; line-height: 1.65; }
  .combo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
  .combo { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 20px; }
  .combo-apps { font-size: 20px; margin-bottom: 8px; }
  .combo-title { font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 4px; }
  .combo-state { font-size: 13px; color: rgba(255,255,255, 0.75); margin-bottom: 14px; }
  .row { display: flex; justify-content: space-between; font-size: 13px; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,.04); }
  .row:last-of-type { border-bottom: none; }
  .rl { color: rgba(255,255,255,0.5); }
  .rv { font-weight: 600; color: #d1d5db; }
  .rv.red { color: #f87171; }
  .rv.green { color: #4ade80; }
  .rv.yellow { color: #e8b84b; }
  .combo-note { font-size: 13px; color: rgba(255,255,255, 0.75); margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,.06); line-height: 1.5; }
  .combo-cta { display: block; margin-top: 12px; background: #B22234; color: #fff; text-align: center; padding: 9px 0; border-radius: 6px; font-size: 13px; font-weight: 700; text-decoration: none; }
  .steps { counter-reset: step; margin-bottom: 24px; }
  .step { display: flex; gap: 16px; margin-bottom: 16px; }
  .step-num { width: 32px; height: 32px; background: rgba(232,184,75,.12); border: 2px solid rgba(232,184,75,.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; color: #e8b84b; flex-shrink: 0; }
  .step-body { padding-top: 4px; }
  .step-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .step-desc { font-size: 13px; color: #9ca3af; line-height: 1.6; }
  .faq-item { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07); border-radius: 10px; padding: 16px 20px; margin-bottom: 10px; }
  .faq-q { font-size: 14px; font-weight: 700; color: #e8b84b; margin-bottom: 8px; }
  .faq-a { font-size: 13px; color: #9ca3af; line-height: 1.7; }
  .links-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; margin-top: 32px; }
  .link-btn { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 10px; padding: 14px 10px; text-decoration: none; text-align: center; }
  .link-btn:hover { border-color: rgba(232,184,75,.4); }
  .link-emoji { font-size: 20px; margin-bottom: 6px; }
  .link-name { font-size: 12px; font-weight: 700; color: #fff; }
  .note { background: rgba(255,255,255,.03); border-left: 3px solid rgba(232,184,75,.5); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 13px; color: #9ca3af; margin: 16px 0; line-height: 1.6; }
  @media(max-width:640px){.combo-grid{grid-template-columns:1fr;}.links-grid{grid-template-columns:repeat(2,1fr);}}
`;

export default function MultiAppPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(howToSchema)}} />

      <div className="wrap">
        <div className="badge">Multi-App Gig Taxes 2026</div>
        <h1>Working <em>Multiple Gig Apps?</em><br/>Here Is How Your Taxes Work</h1>
        <p className="lead">
          Millions of gig workers combine DoorDash + Uber, Instacart + Amazon Flex, or even driving + Etsy.
          The IRS treats all of it as self-employment income — but how you report it, deduct it,
          and pay quarterly taxes depends on what apps you use and what state you live in.
        </p>
        <p className="disclaimer">
          Based on IRS Schedule C, Schedule SE, and 2026 tax brackets. Not affiliated with the IRS. Estimates only — not tax advice.
        </p>

        {/* RULE 1 */}
        <div className="section">
          <h2>The #1 Rule: One Business = One Schedule C</h2>
          <div className="rule-box">
            <div className="rule-title"> Same type of work across apps → combine on one Schedule C</div>
            <div className="rule-desc">
              DoorDash + Instacart + Amazon Flex are all delivery driving. The IRS considers this one trade or business.
              Report all income on one Schedule C. Combine all mileage, phone deductions, and supplies into one total.
            </div>
          </div>
          <div className="rule-box">
            <div className="rule-title"> Rideshare + delivery → usually still one Schedule C</div>
            <div className="rule-desc">
              Uber + DoorDash are both transportation/delivery services. Most tax professionals file these together on one Schedule C as &quot;Transportation Services.&quot;
            </div>
          </div>
          <div className="warn-box">
            <div className="warn-title"> Completely different business types → may need separate Schedule C</div>
            <div className="warn-desc">
              Uber driving + Etsy shop are different businesses. You may need two Schedule C forms — one for transportation services, one for your product business. Ask a CPA if unsure.
            </div>
          </div>
          <div className="note">
             When in doubt, one Schedule C is simpler and fully legal for most gig workers who do delivery + rideshare combinations.
          </div>
        </div>

        {/* REAL EXAMPLES */}
        <div className="section">
          <h2>Real Tax Estimates: Popular App Combinations</h2>
          <p style={{fontSize:13,color:'rgba(255,255,255,0.5)',marginBottom:20}}>
            Based on 2026 IRS brackets. SE tax 15.3% + federal + state. Net income after expenses shown.
          </p>
          <div className="combo-grid">
            {COMBOS.map((c,i) => (
              <div className="combo" key={i}>
                <div className="combo-apps">{c.emoji}</div>
                <div className="combo-title">{c.apps.join(' + ')}</div>
                <div className="combo-state">{c.state} · {fmt(c.income)} gross · {fmt(c.expenses)} expenses</div>
                <div className="row"><span className="rl">Net income</span><span className="rv yellow">{fmt(c.income - c.expenses)}</span></div>
                <div className="row"><span className="rl">SE Tax (15.3%)</span><span className="rv red">{fmt(c.se)}</span></div>
                <div className="row"><span className="rl">Federal Tax</span><span className="rv red">{fmt(c.fed)}</span></div>
                <div className="row"><span className="rl">State Tax</span><span className="rv red">{c.stateRate === 0 ? '$0' : fmt(c.stateTax)}</span></div>
                <div className="row"><span className="rl" style={{fontWeight:700,color:'#fff'}}>Total Tax</span><span className="rv red" style={{fontSize:16}}>{fmt(c.total)}</span></div>
                <div className="row"><span className="rl">Quarterly Payment</span><span className="rv yellow">{fmt(c.quarterly)}</span></div>
                <div className="combo-note"> {c.note}</div>
                <a href="/" className="combo-cta">→ Calculate Your Own Numbers</a>
              </div>
            ))}
          </div>
        </div>

        {/* HOW TO FILE */}
        <div className="section">
          <h2>How to File Taxes With Multiple Gig Apps (Step by Step)</h2>
          <div className="steps">
            {[
              ['Collect all 1099-NEC forms', 'Every platform that paid you $600+ sends a 1099-NEC by January 31. Uber, DoorDash, Instacart, Amazon all send these. Even if you earned under $600 on one app, you must still report that income.'],
              ['Add up all platform income', 'Total gross revenue from every app. Do not subtract expenses yet — that comes next.'],
              ['Calculate combined deductions', 'Add all business miles across every app × $0.725 (2026 IRS rate). Add phone bill (% used for work), supplies, hot bags, car washes, and other costs. Do NOT count the same mile twice across apps.'],
              ['Report on Schedule C', 'Enter total revenue and total deductions. Net profit = revenue minus deductions. This is what SE tax is calculated on.'],
              ['Calculate SE tax', 'Net profit × 0.9235 × 0.153 = your SE tax. You deduct 50% of this on Form 1040 Line 15.'],
              ['Pay quarterly to avoid penalties', 'If total tax owed exceeds $1,000, pay quarterly. Q1 due April 15 · Q2 June 16 · Q3 Sept 15 · Q4 Jan 15, 2027.'],
            ].map(([title, desc], i) => (
              <div className="step" key={i}>
                <div className="step-num">{i+1}</div>
                <div className="step-body">
                  <div className="step-title">{title}</div>
                  <div className="step-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MILEAGE */}
        <div className="section">
          <h2>Mileage Deduction Across Multiple Apps</h2>
          <div className="warn-box">
            <div className="warn-title"> Track miles per app separately — combine at tax time</div>
            <div className="warn-desc">
              Use Stride, Everlance, or a simple mileage log. Record which app you were active on per trip.
              At tax time, add all business miles together and enter one total on Schedule C.
              The 2026 IRS standard mileage rate is <strong>$0.725 per mile</strong>.
            </div>
          </div>
          <div className="rule-box" style={{marginTop:12}}>
            <div className="rule-title">Example: Uber + DoorDash driver, 18,000 miles/year</div>
            <div className="rule-desc">
              18,000 × $0.725 = <strong>$12,600 mileage deduction</strong>. This reduces your taxable net profit by $12,600,
              saving roughly $1,900 in SE tax alone — plus federal and state income tax savings.
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Multi-App Tax Questions</h2>
          {[
            ['Do I file separate Schedule C forms for each gig app?', 'Generally no. If all your gig work falls under one business activity (delivery driving for DoorDash + Instacart + Amazon Flex), combine everything on one Schedule C. If your activities are truly separate businesses (driving + Etsy seller), you may need two. Most gig workers use one Schedule C.'],
            ['How do I calculate quarterly taxes working multiple apps?', 'Add up all net income from every platform for the quarter, subtract business expenses, then apply 15.3% SE tax + estimated federal income tax. Divide the annual estimate by 4 for equal quarterly payments.'],
            ['Can I deduct mileage for both Uber and DoorDash?', 'Yes — combine all business miles across platforms. You cannot count the same mile twice. Track with a mileage app and enter one total on Schedule C. The 2026 rate is $0.725/mile.'],
            ['What if I worked in two states for different apps?', 'You may need to file part-year or non-resident returns in each state. Each state has different rules. For example, a driver who worked in California and Nevada owes CA state tax on CA earnings only — Nevada has no state income tax.'],
            ['How much should I set aside working 3 gig apps?', 'Set aside 25–30% of combined net income. Total revenue minus deductions (mileage, phone, supplies) = taxable net. Apply 15.3% SE + 10–22% federal + state. Use the calculator for your exact state.'],
          ].map(([q, a], i) => (
            <div className="faq-item" key={i}>
              <div className="faq-q">{q}</div>
              <div className="faq-a">{a}</div>
            </div>
          ))}
        </div>

        {/* CTA LINKS */}
        <div className="section">
          <h2>Calculate Your Multi-App Taxes</h2>
          <p style={{fontSize:13,color:'rgba(255,255,255,0.5)',marginBottom:16}}>Use our platform calculators — enter your combined income for accurate results.</p>
          <div className="links-grid">
            {[
              { name:'DoorDash',href:'/doordash'},
              { name:'Uber',href:'/uber'},
              { name:'Instacart',href:'/instacart'},
              { name:'Amazon Flex',href:'/amazon-flex'},
              { name:'Lyft',href:'/lyft'},
              { name:'Etsy',href:'/etsy'},
              { name:'Airbnb',href:'/airbnb'},
              { name:'OnlyFans',href:'/onlyfans'},
            ].map((p,i) => (
              <a key={i} href={p.href} className="link-btn">
                <div className="link-emoji"></div>
                <div className="link-name">{p.name}</div>
              </a>
            ))}
          </div>
          <div style={{marginTop:20,display:'flex',gap:12,flexWrap:'wrap'}}>
            <a href="/safe-harbor-quarterly-taxes" style={{fontSize:13,color:'#e8b84b',textDecoration:'none',fontWeight:700}}>→ Safe Harbor & Penalty Guide</a>
            <a href="/tax-penalty-finder" style={{fontSize:13,color:'#e8b84b',textDecoration:'none',fontWeight:700}}>→ Penalty Finder Tool</a>
            <a href="/" style={{fontSize:13,color:'#e8b84b',textDecoration:'none',fontWeight:700}}>→ Main Tax Calculator</a>
          </div>
        </div>

      </div>
    </>
  );
}
