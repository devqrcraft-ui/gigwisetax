/**
 * ЄДИНЕ ДЖЕРЕЛО ПОДАТКОВИХ ПРАВИЛ gigwisetax (tax year 2026).
 * Змінилось правило IRS -> міняємо ТІЛЬКИ тут (+ `verifiedOn`), потім `npx tsx scripts/verify-tax.ts`.
 * Усі generateMetadata / FAQ / приклади беруть числа через estimateTax(), а не руками.
 */
export const TAX_RULES_2026 = {
  verifiedOn: '2026-10-09',
  sources: {
    brackets: 'https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill',
    ssWageBase: 'https://www.ssa.gov/oact/cola/cbb.html',
    mileage: 'https://www.irs.gov/tax-professionals/standard-mileage-rates',
    underpaymentRate: 'https://www.irs.gov/newsroom/interest-rates-remain-the-same-for-the-fourth-quarter-of-2026',
  },
  standardDeduction: { single: 16100, married: 32200, hoh: 24150 },
  ssWageBase: 184500,
  // [верхня межа, ставка]
  bracketsSingle: [[12400, .10], [50400, .12], [105700, .22], [201775, .24], [256225, .32], [640600, .35], [Infinity, .37]],
  bracketsMarried: [[24800, .10], [100800, .12], [211400, .22], [403550, .24], [512450, .32], [768700, .35], [Infinity, .37]],
  mileage: { h1: 0.725, h2: 0.76, h2Starts: '2026-07-01' },
  form1099Threshold: { year2026: 2000, year2025AndEarlier: 600 },
  q2Deadline: 'June 15, 2026',
  underpaymentRateQ4_2026: 0.07,
} as const

type Filing = 'single' | 'married' | 'hoh'

export function federalTax(taxable: number, filing: Filing = 'single'): number {
  const br = (filing === 'married' ? TAX_RULES_2026.bracketsMarried : TAX_RULES_2026.bracketsSingle) as readonly (readonly [number, number])[]
  let tax = 0, prev = 0
  for (const [max, rate] of br) {
    if (taxable > prev) tax += (Math.min(taxable, max) - prev) * rate
    prev = max
  }
  return tax
}

/** Та сама логіка, що в GigCalculator.tsx: net -> SE (зі стелею SS) -> стандартний відрахунок -> федеральний -> штат (плоска ставка x taxable). */
export function estimateTaxRaw(gross: number, stateRate = 0, filing: Filing = 'single', mileDeduct = 0) {
  const net = Math.max(0, gross - mileDeduct)
  const seBase = net * 0.9235
  const se = Math.min(seBase, TAX_RULES_2026.ssWageBase) * 0.124 + seBase * 0.029
  const taxable = Math.max(0, net - se / 2 - TAX_RULES_2026.standardDeduction[filing])
  const federal = federalTax(taxable, filing)
  const state = taxable * stateRate
  const total = se + federal + state
  return { net, se, federal, state, total, quarterly: total / 4, takeHome: gross - total }
}

/** Округлені значення так само, як їх показує калькулятор (Math.round на кожному полі окремо). */
export function estimateTax(gross: number, stateRate = 0, filing: Filing = 'single', mileDeduct = 0) {
  const r = estimateTaxRaw(gross, stateRate, filing, mileDeduct)
  return {
    se: Math.round(r.se), federal: Math.round(r.federal), state: Math.round(r.state),
    total: Math.round(r.total), quarterly: Math.round(r.quarterly), takeHome: Math.round(r.takeHome),
  }
}

export function mileageRate(date: Date = new Date()): number {
  return date >= new Date(TAX_RULES_2026.mileage.h2Starts) ? TAX_RULES_2026.mileage.h2 : TAX_RULES_2026.mileage.h1
}
