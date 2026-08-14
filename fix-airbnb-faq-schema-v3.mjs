// fix-airbnb-faq-schema.mjs
// Run from repo root: node fix-airbnb-faq-schema.mjs
//
// Fixes: the FAQPage JSON-LD schema on app/airbnb/[state]/page.tsx is currently a
// hardcoded string with 3 generic questions, IDENTICAL on all 50 state pages, and
// completely disconnected from the visible FAQ (4 questions, already state-specific).
// This violates the site's own single-source-of-truth rule for FAQ content.
//
// This script:
//   1. Adds STATE_TOT_NOTES (verified occupancy-tax facts for CA/TX, honest fallback
//      for the other 48 — no fabricated numbers).
//   2. Extracts the existing inline FAQ array into a named `faqItems` const, adds a
//      5th question (occupancy tax) built from STATE_TOT_NOTES, and derives `faqSchema`
//      from that SAME array.
//   3. Replaces the old hardcoded 3-question schema <script> with one built from faqSchema.
//   4. Replaces the inline FAQ array in the visible JSX with a reference to faqItems.
//
// Each step matches an EXACT string from the current file. If any string isn't found
// (meaning the file has since changed), the script throws immediately instead of
// silently skipping or partially applying — check the error, don't force it through.

import { readFileSync, writeFileSync } from 'fs';

const FILE = 'app/airbnb/[state]/page.tsx';
// Work on the RAW text directly — do NOT normalize/convert the whole file's line
// endings. This file may have MIXED \n and \r\n (common after edits by different
// tools), and a blanket convert-back would touch thousands of unrelated lines,
// producing a huge noisy diff. Instead, for each anchor, try both the \n and the
// \r\n version against the untouched text, and replace only that exact match.
let text = readFileSync(FILE, 'utf8');

function mustReplace(label, oldStrLF, newStrLF) {
  const oldStrCRLF = oldStrLF.replace(/\n/g, '\r\n');
  const newStrCRLF = newStrLF.replace(/\n/g, '\r\n');

  if (oldStrLF === oldStrCRLF) {
    // no newlines in this anchor — LF/CRLF distinction doesn't apply, just match once
    const count = text.split(oldStrLF).length - 1;
    if (count !== 1) {
      throw new Error(`[${label}] expected exactly 1 match, found ${count}. File may have changed — aborting without writing anything.`);
    }
    text = text.replace(oldStrLF, newStrLF);
    console.log(`✓ ${label}`);
    return;
  }

  const countLF = text.split(oldStrLF).length - 1;
  const countCRLF = text.split(oldStrCRLF).length - 1;

  if (countLF === 1 && countCRLF === 0) {
    text = text.replace(oldStrLF, newStrLF);
    console.log(`✓ ${label} (LF)`);
  } else if (countCRLF === 1 && countLF === 0) {
    text = text.replace(oldStrCRLF, newStrCRLF);
    console.log(`✓ ${label} (CRLF)`);
  } else {
    throw new Error(`[${label}] expected exactly 1 match (LF:${countLF}, CRLF:${countCRLF}). File may have changed — aborting without writing anything.`);
  }
}

// ── 1. Insert STATE_TOT_NOTES after STATE_NOTES, before generateMetadata ──
mustReplace(
  'Insert STATE_TOT_NOTES',
  `  'wyoming':        (p, r, n) => \`Wyoming has NO state income tax — making it one of the best states for \${p} gig workers. You only pay federal SE tax (15.3%) and federal income tax. No state quarterly payments required.\`,
}


export async function generateMetadata(`,
  `  'wyoming':        (p, r, n) => \`Wyoming has NO state income tax — making it one of the best states for \${p} gig workers. You only pay federal SE tax (15.3%) and federal income tax. No state quarterly payments required.\`,
}

const STATE_TOT_NOTES: Record<string, string> = {
  'california': "California's Transient Occupancy Tax (TOT) is set locally, not statewide — rates run roughly 10-14% depending on city/county (Los Angeles County 12%, San Francisco 14%, many others 10%). Airbnb automatically collects and remits TOT in most major CA cities (LA, SF, San Diego), but coverage isn't universal — verify your specific jurisdiction.",
  'texas': "Texas charges a 6% state Hotel Occupancy Tax on all short-term rentals, which Airbnb has collected and remitted automatically since May 2017. On top of that, most Texas cities and counties add their own local hotel tax (commonly 6-9%) — Airbnb often does NOT collect this local portion, so hosts may need to register and file directly with their city.",
}


export async function generateMetadata(`
);

// ── 2. Insert faqItems + faqSchema const block before "return (" ──
mustReplace(
  'Insert faqItems/faqSchema before return',
  `  const card   = { background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, marginBottom: 12, boxShadow: '0 2px 12px rgba(0,0,0,.3)', overflow: 'hidden' as const }
  const cardHd = { background: 'rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  return (
    <>`,
  `  const card   = { background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, marginBottom: 12, boxShadow: '0 2px 12px rgba(0,0,0,.3)', overflow: 'hidden' as const }
  const cardHd = { background: 'rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  const faqItems = [
    {
      q: \`How much is \${platform.name} tax in \${state.name}?\`,
      a: noStateTax
        ? \`In \${state.name}, \${platform.name} workers pay 15.3% self-employment tax plus federal income tax. There is no \${state.name} state income tax, making it one of the most tax-friendly states for gig workers.\`
        : \`In \${state.name}, \${platform.name} workers pay 15.3% self-employment tax, federal income tax (10–37%), plus \${stateRateStr} \${state.name} state income tax. On $50,000 net income, expect to owe approximately $\${(11565 + Math.round(50000 * state.rate)).toLocaleString()} total.\`,
    },
    {
      q: \`Do I need to make quarterly payments in \${state.name}?\`,
      a: noStateTax
        ? \`In \${state.name}, you must make federal quarterly estimated payments (IRS Form 1040-ES) if you expect to owe $1,000 or more. No state quarterly payments are required.\`
        : \`Yes. In \${state.name}, you must make both federal quarterly estimated payments (IRS Form 1040-ES) and \${state.name} state quarterly payments if you expect to owe $1,000 or more.\`,
    },
    {
      q: \`What is the self-employment tax rate in \${state.name} for \${platform.name} workers?\`,
      a: \`The federal self-employment tax rate is 15.3% regardless of state. This covers Social Security (12.4%) and Medicare (2.9%). In \${state.name}, you additionally pay \${noStateTax ? 'no state income tax' : \`\${stateRateStr} state income tax\`}.\`,
    },
    {
      q: \`Does \${platform.name} take out taxes in \${state.name}?\`,
      a: \`No. \${platform.name} classifies workers as independent contractors, not employees. No taxes are withheld from your payments. You are responsible for paying all federal SE tax, federal income tax\${noStateTax ? '' : \`, and \${state.name} state income tax\`} yourself, typically through quarterly estimated payments.\`,
    },
    {
      q: \`Do I need to collect occupancy or lodging tax on my \${state.name} Airbnb?\`,
      a: STATE_TOT_NOTES[stateSlug] || \`\${state.name} short-term rental hosts should check whether their state or city charges a transient occupancy / hotel tax separate from income tax. Airbnb auto-collects this in some jurisdictions but not all — confirm in your Airbnb host dashboard under Taxes, and check your city or county tax office directly.\`,
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>`
);

// ── 3. Replace hardcoded schema <script> with one built from faqSchema ──
mustReplace(
  'Replace hardcoded FAQPage schema',
  `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How are Airbnb hosts taxed?","acceptedAnswer":{"@type":"Answer","text":"Airbnb hosts report rental income on Schedule E (passive) or Schedule C (active/hotel-like). If you rent fewer than 15 days per year, the income is tax-free. Otherwise, you owe income tax on net profit minus allowable deductions."}},{"@type":"Question","name":"What can Airbnb hosts deduct on taxes?","acceptedAnswer":{"@type":"Answer","text":"Airbnb hosts can deduct mortgage interest, property taxes, insurance, cleaning fees, supplies, repairs, depreciation, Airbnb service fees, and utilities proportional to rental use. These deductions can significantly reduce taxable income."}},{"@type":"Question","name":"Does Airbnb report income to the IRS?","acceptedAnswer":{"@type":"Answer","text":"Yes. Airbnb issues a 1099-K to hosts who earn over $600 per year and reports this to the IRS. All rental income must be reported even if you do not receive a 1099."}}]}' }} />`,
  `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />`
);

// ── 4. Replace inline FAQ array in visible JSX with faqItems reference ──
mustReplace(
  'Replace inline visible-FAQ array with faqItems',
  `                {[
                  {
                    q: \`How much is \${platform.name} tax in \${state.name}?\`,
                    a: noStateTax
                      ? \`In \${state.name}, \${platform.name} workers pay 15.3% self-employment tax plus federal income tax. There is no \${state.name} state income tax, making it one of the most tax-friendly states for gig workers.\`
                      : \`In \${state.name}, \${platform.name} workers pay 15.3% self-employment tax, federal income tax (10–37%), plus \${stateRateStr} \${state.name} state income tax. On $50,000 net income, expect to owe approximately $\${(11565 + Math.round(50000 * state.rate)).toLocaleString()} total.\`,
                  },
                  {
                    q: \`Do I need to make quarterly payments in \${state.name}?\`,
                    a: noStateTax
                      ? \`In \${state.name}, you must make federal quarterly estimated payments (IRS Form 1040-ES) if you expect to owe $1,000 or more. No state quarterly payments are required.\`
                      : \`Yes. In \${state.name}, you must make both federal quarterly estimated payments (IRS Form 1040-ES) and \${state.name} state quarterly payments if you expect to owe $1,000 or more.\`,
                  },
                  {
                    q: \`What is the self-employment tax rate in \${state.name} for \${platform.name} workers?\`,
                    a: \`The federal self-employment tax rate is 15.3% regardless of state. This covers Social Security (12.4%) and Medicare (2.9%). In \${state.name}, you additionally pay \${noStateTax ? 'no state income tax' : \`\${stateRateStr} state income tax\`}.\`,
                  },
                  {
                    q: \`Does \${platform.name} take out taxes in \${state.name}?\`,
                    a: \`No. \${platform.name} classifies workers as independent contractors, not employees. No taxes are withheld from your payments. You are responsible for paying all federal SE tax, federal income tax\${noStateTax ? '' : \`, and \${state.name} state income tax\`} yourself, typically through quarterly estimated payments.\`,
                  },
                ].map((item, i) => (`,
  `                {faqItems.map((item, i) => (`
);

writeFileSync(FILE, text, 'utf8');
console.log('\nAll 4 patches applied successfully — only the patched regions were touched, no file-wide line-ending changes.');
console.log('Next: git diff "app/airbnb/[state]/page.tsx" — check it, then npm run dev and test /airbnb/california and /airbnb/ohio before committing.');
