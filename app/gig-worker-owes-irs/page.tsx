import type { Metadata } from 'next'
import Link from 'next/link'
import { TAX_RULES_2026 } from '@/lib/tax-rules'
import TaxFreshness from '@/app/components/TaxFreshness'
import AuthorBox from '@/app/components/AuthorBox'
import BehindOnTaxes, { SponsoredInline } from '@/app/components/BehindOnTaxes'
import CommunityTaxBanner from '@/app/components/CommunityTaxBanner'

const PAGE_URL = 'https://www.gigwisetax.com/gig-worker-owes-irs'
const TITLE = 'Gig Worker Owes the IRS? Payment Plans & Options (2026)'
const DESC = 'Behind on taxes from DoorDash, Uber or other gig income? IRS payment plans, penalty rules and relief options for 2026, plus how to size up what you owe.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESC, url: PAGE_URL, siteName: 'GigWiseTax', type: 'article' },
}

const RATE = Math.round(TAX_RULES_2026.underpaymentRateQ4_2026 * 100)

const FAQ = [
  {
    q: 'What happens if a gig worker does not pay the taxes they owe?',
    a: 'Penalties and interest keep growing until the balance is paid. The IRS sends notices first, and if they are ignored it can take collection actions such as liens or levies. Responding early and asking for a payment plan is almost always cheaper than waiting.',
  },
  {
    q: 'Can I get an IRS payment plan if I am self-employed?',
    a: 'Yes. Self-employed individuals use the same payment plans as everyone else. Online, individuals who owe less than $100,000 in combined tax, penalties and interest can request a short-term plan of up to 180 days, and those who owe $50,000 or less and have filed all required returns can request a long-term monthly plan.',
  },
  {
    q: 'Does an IRS payment plan stop penalties and interest?',
    a: 'No. Interest and penalties continue until the balance is paid in full. If you filed your return on time, the failure-to-pay penalty rate drops from 0.5% to 0.25% per month while an installment agreement is in effect.',
  },
  {
    q: 'Should I file my return even if I cannot pay?',
    a: 'Yes. The failure-to-file penalty is 5% of the unpaid tax per month, while the failure-to-pay penalty is 0.5% per month. Filing on time, even without full payment, keeps the much larger penalty away and is also required for most payment plans.',
  },
  {
    q: 'How do I find out how much I owe?',
    a: 'Start with your own records: 1099 forms, platform earnings summaries and your mileage log. Our free calculator gives a planning estimate of self-employment tax, federal tax and state tax. For the exact balance the IRS shows, check your IRS Online Account or the notice you received.',
  },
]

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

const wrap = { background: '#07111F', color: 'rgba(255,255,255,0.88)', padding: '24px 16px 8px' } as const
const col = { maxWidth: 820, margin: '0 auto' } as const
const h2 = { fontSize: 22, fontWeight: 800, color: '#fff', margin: '36px 0 10px', lineHeight: 1.3 } as const
const p = { fontSize: 16, lineHeight: 1.75, margin: '0 0 14px' } as const
const a = { color: '#e8b84b', textDecoration: 'underline' } as const
const card = { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '14px 18px', margin: '0 0 12px' } as const
const th = { textAlign: 'left', padding: '10px 12px', fontSize: 14, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.15)' } as const
const td = { padding: '10px 12px', fontSize: 15, lineHeight: 1.6, verticalAlign: 'top', borderBottom: '1px solid rgba(255,255,255,0.08)' } as const

export default function GigWorkerOwesIrs() {
  return (
    <main style={wrap}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <div style={col}>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', margin: '0 0 8px' }}>
          <Link href="/" style={a}>Home</Link> › Owe the IRS
        </p>
        <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.25, margin: '0 0 14px' }}>
          I&apos;m a Gig Worker and I Owe the IRS: What Are My Options in 2026?
        </h1>
        <p style={p}>
          Gig income has no tax withheld, so a bill can pile up after a few quarters of missed estimated payments.
          This guide explains, in plain numbers, what the IRS charges, which payment options exist and where to get help.
          It is general information and not tax advice.
        </p>

        <div style={{ ...card, borderColor: 'rgba(232,184,75,0.4)', background: 'rgba(232,184,75,0.07)' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#e8b84b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>The short answer</div>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, lineHeight: 1.75 }}>
            <li>File every required return, even if you cannot pay in full. Late filing costs ten times more per month than late payment.</li>
            <li>Pay what you can now. Penalties and interest are charged on the unpaid balance.</li>
            <li>If you cannot pay in full, ask the IRS for a payment plan. A short-term plan of up to 180 days has no setup fee.</li>
            <li>Do not ignore IRS notices. The late-payment penalty rate rises to 1% per month once a final notice of intent to levy has been issued and 10 days pass.</li>
          </ul>
        </div>

        <h2 style={h2}>Why gig workers end up owing</h2>
        <p style={p}>
          As a self-employed worker you owe self-employment tax of 15.3% on 92.35% of your net earnings, plus federal and state income tax.
          Nothing is withheld, so the IRS expects estimated payments during the year. For 2026 they are due April 15, June 15,
          September 15 and January 15, 2027. Miss one or underestimate and the balance shows up at filing time.
        </p>
        <p style={p}>
          To see how big the problem is, run your numbers in our <Link href="/" style={a}>free gig-tax calculator</Link>, check the
          <Link href="/deadlines" style={a}> 2026 deadlines</Link> and read how <Link href="/safe-harbor-quarterly-taxes" style={a}>safe-harbor rules</Link> can
          protect you from the estimated-tax penalty next year.
        </p>

        <h2 style={h2}>What the IRS charges: penalties and interest</h2>
        <div style={{ overflowX: 'auto', margin: '0 0 8px' }}>
          <table style={{ width: '100%', minWidth: 520, borderCollapse: 'collapse' }}>
            <thead>
              <tr><th style={th}>Charge</th><th style={th}>Rate</th></tr>
            </thead>
            <tbody>
              <tr><td style={td}>Failure to file</td><td style={td}>5% of the unpaid tax per month (4.5% in months when the failure-to-pay penalty also applies), up to 25%.</td></tr>
              <tr><td style={td}>Failure to pay</td><td style={td}>0.5% per month, up to 25%. It falls to 0.25% per month while an installment agreement is in effect (if you filed on time) and rises to 1% per month 10 days after a final notice of intent to levy.</td></tr>
              <tr><td style={td}>Combined maximum</td><td style={td}>47.5% of the unpaid tax (22.5% for late filing and 25% for late payment).</td></tr>
              <tr><td style={td}>Interest</td><td style={td}>Set by the IRS every quarter and compounded daily. The underpayment rate is {RATE}% per year for the fourth quarter of 2026.</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', margin: '0 0 14px' }}>
          Source: IRS. The quarterly interest rate changes, so check the current rate before you rely on it.
        </p>

        <h2 style={h2}>Your options with the IRS</h2>
        <div style={card}>
          <strong style={{ color: '#fff' }}>Short-term payment plan.</strong> Up to 180 days to pay in full. Individuals who owe less than $100,000 in combined tax, penalties and interest can request it online. There is no setup fee, although card processing fees may apply.
        </div>
        <div style={card}>
          <strong style={{ color: '#fff' }}>Long-term payment plan (installment agreement).</strong> Monthly payments. Individuals who owe $50,000 or less and have filed all required returns can request it online. Setup fees depend on how you apply and pay, and interest and penalties continue.
        </div>
        <div style={card}>
          <strong style={{ color: '#fff' }}>Offer in compromise.</strong> Lets some taxpayers settle for less than the full amount. The IRS generally accepts an offer when it represents the most it can expect to collect in a reasonable time, and it asks you to explore other payment options first. Penalties and interest keep accruing while the offer is reviewed. Use the IRS Pre-Qualifier tool before applying.
        </div>
        <div style={card}>
          <strong style={{ color: '#fff' }}>Temporary hardship.</strong> If paying would leave you unable to cover basic living expenses, the IRS can temporarily delay collection. Penalties and interest still accrue.
        </div>
        <div style={card}>
          <strong style={{ color: '#fff' }}>Penalty relief.</strong> Taxpayers with a clean recent history, for example no penalties in the previous three years and all returns filed, may qualify for first-time penalty abatement. Reasonable cause can also support relief.
        </div>

        <h2 style={h2}>Step by step: what to do this week</h2>
        <ol style={{ margin: '0 0 14px', paddingLeft: 22, fontSize: 16, lineHeight: 1.8 }}>
          <li>Collect your income records: 1099-NEC or 1099-K forms, platform earnings summaries and your mileage log.</li>
          <li>Estimate what you owe with our <Link href="/" style={a}>calculator</Link> and compare it with any IRS notice you received.</li>
          <li>File any missing returns. Filing is required for most payment plans.</li>
          <li>Pay what you can, even a partial amount, to reduce the balance that penalties and interest are charged on.</li>
          <li>Request a plan at <a style={a} href="https://www.irs.gov/payments/payment-plans-installment-agreements" target="_blank" rel="noopener noreferrer">IRS.gov payment plans</a> if you cannot pay in full.</li>
          <li>Make your next estimated payments on time so the balance does not grow again.</li>
        </ol>

        <h2 style={h2}>Do you need help? Free and paid options</h2>
        <p style={p}>
          You can often work directly with the IRS. Two free resources exist for harder cases:
          the <a style={a} href="https://www.taxpayeradvocate.irs.gov" target="_blank" rel="noopener noreferrer">Taxpayer Advocate Service</a>, an independent organization within the IRS,
          and <a style={a} href="https://www.taxpayeradvocate.irs.gov/litc" target="_blank" rel="noopener noreferrer">Low Income Taxpayer Clinics</a>, which are independent from the IRS and serve people whose income is below a set level.
        </p>
        <p style={p}>
          Paid help includes CPAs, enrolled agents, tax attorneys and tax resolution companies. Before you pay anyone, ask for a written fee schedule,
          ask exactly what is included, and be cautious about anyone who guarantees a settlement. Many options above can be requested directly from the IRS.
        </p>
        <p style={p}>
          If you would rather have a professional handle the IRS contact, you can start with a free consultation: <SponsoredInline page="guide-inline" kind="consultation" />
        </p>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '18px 0 8px' }}>What a consultation with a tax resolution company involves</h3>
        <p style={p}>
          Community Tax describes its process like this: you schedule a free consultation and learn about your rights and options.
          If you want to move forward, you pay for a paid review of your situation, which it calls an IRS investigation, and further services may follow.
          Results depend on your facts and on the IRS&apos;s decision, and nothing is guaranteed. Ask for the fee and what it covers in writing before you pay anyone.
        </p>
        <BehindOnTaxes page="guide" guideLink={false} />
        <CommunityTaxBanner page="guide-banner" />
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', margin: '10px 0 0' }}>
          GigWiseTax may earn a commission from the sponsored links above. That does not change the information on this page.
        </p>

        <h2 style={h2}>Frequently asked questions</h2>
        {FAQ.map(f => (
          <div key={f.q} style={card}>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#e8b84b', margin: '0 0 6px' }}>{f.q}</h3>
            <p style={{ ...p, margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <h2 style={h2}>Sources</h2>
        <ul style={{ margin: '0 0 8px', paddingLeft: 20, fontSize: 15, lineHeight: 1.9 }}>
          <li><a style={a} href="https://www.irs.gov/payments/payment-plans-installment-agreements" target="_blank" rel="noopener noreferrer">IRS: payment plans and installment agreements</a></li>
          <li><a style={a} href="https://www.irs.gov/node/17574" target="_blank" rel="noopener noreferrer">IRS: late-filing and late-payment penalties</a></li>
          <li><a style={a} href={TAX_RULES_2026.sources.underpaymentRate} target="_blank" rel="noopener noreferrer">IRS: quarterly interest rates</a></li>
          <li><a style={a} href="https://www.irs.gov/OIC" target="_blank" rel="noopener noreferrer">IRS: offer in compromise</a></li>
          <li><a style={a} href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer">IRS: estimated taxes</a></li>
        </ul>
      </div>
      <div style={col}>
        <TaxFreshness />
        <AuthorBox />
      </div>
    </main>
  )
}
