// Запуск: npx tsx scripts/check-irs.ts
// Тягне офіційні числа з IRS/SSA і порівнює з lib/tax-rules.ts. Нічого не переписує сам:
// розбіжність = код виходу 1; числа оновлює людина + verify-tax.ts.
import { TAX_RULES_2026 as R } from '../lib/tax-rules'

const UA = 'Mozilla/5.0 (compatible; GigWiseTaxRulesWatch/1.0; +https://www.gigwisetax.com)'
const SRC = {
  mileage: 'https://www.irs.gov/tax-professionals/standard-mileage-rates',
  inflation: R.sources.brackets,
  // ssa.gov віддає 403 ботам; IRS Topic 751 містить ту саму базу SS.
  ssa: 'https://www.irs.gov/taxtopics/tc751',
}

async function text(url: string): Promise<string> {
  const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html' } })
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`)
  const html = await res.text()
  return html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/\s+/g, ' ')
}
const money = (s: string) => Number(s.replace(/[$,]/g, ''))

type Check = { name: string; ours: unknown; irs: unknown; ok: boolean; note?: string }
const checks: Check[] = []
const add = (name: string, ours: unknown, irs: unknown, note?: string) =>
  checks.push({ name, ours, irs, ok: irs !== null && String(ours) === String(irs), note })

async function mileage() {
  const t = await text(SRC.mileage)
  const h2 = t.match(/2026 \(July 1 [–-] Dec\. 31\)\s*\|?\s*([\d.]+)/)
  const h1 = t.match(/2026 \(Jan\. 1 [–-] June 30\)\s*\|?\s*([\d.]+)/)
  add('mileage 2026 H1 (cents)', R.mileage.h1 * 100, h1 ? Number(h1[1]) : null)
  add('mileage 2026 H2 (cents)', R.mileage.h2 * 100, h2 ? Number(h2[1]) : null)
  if (/\b2027 \(/.test(t)) add('mileage: 2027 rate is published', 'not loaded', '2027 row present', 'додати 2027 в tax-rules.ts')
}

async function inflation() {
  const t = await text(SRC.inflation)
  const sd = t.match(/\$([\d,]+) for married couples filing jointly\. For single taxpayers and married individuals filing separately, the standard deduction rises to \$([\d,]+).*?heads of households, the standard deduction will be \$([\d,]+)/)
  add('std deduction single', R.standardDeduction.single, sd ? money(sd[2]) : null)
  add('std deduction married', R.standardDeduction.married, sd ? money(sd[1]) : null)
  add('std deduction hoh', R.standardDeduction.hoh, sd ? money(sd[3]) : null)
  // у релізі: "35% for incomes over $256,225 ($512,450 ...)" -> межі single / married
  const rate = (r: number) => t.match(new RegExp(`${r}% for incomes over \\$([\\d,]+) \\(\\$([\\d,]+) for married`))
  const single = R.bracketsSingle.map(b => b[0]), married = R.bracketsMarried.map(b => b[0])
  const cuts: [number, number][] = [[12, 0], [22, 1], [24, 2], [32, 3], [35, 4]]
  for (const [r, i] of cuts) {
    const m = rate(r)
    add(`bracket ${r}% starts above (single)`, single[i], m ? money(m[1]) : null)
    add(`bracket ${r}% starts above (married)`, married[i], m ? money(m[2]) : null)
  }
  const top = t.match(/37% for individual single taxpayers with incomes greater than \$([\d,]+) \(\$([\d,]+) for married/)
  add('bracket 37% starts above (single)', single[5], top ? money(top[1]) : null)
  add('bracket 37% starts above (married)', married[5], top ? money(top[2]) : null)
}

async function ssa() {
  const t = await text(SRC.ssa)
  const m = t.match(/earnings in 2026, this base limit is \$(\d{3},\d{3})/)
  add('SS wage base 2026', R.ssWageBase, m ? money(m[1]) : null, m ? undefined : 'IRS змінила текст Topic 751: перевірити парсер')
}

async function main() {
  for (const [name, fn] of [['IRS mileage', mileage], ['IRS inflation release', inflation], ['SSA wage base', ssa]] as const) {
    try { await fn() } catch (e) { checks.push({ name: name + ' (fetch)', ours: '-', irs: null, ok: false, note: String(e) }) }
  }
  let bad = 0
  for (const c of checks) {
    if (!c.ok) bad++
    console.log(`${c.ok ? 'OK   ' : 'DRIFT'} ${c.name}: ours=${c.ours} irs=${c.irs ?? 'не знайдено'}${c.note ? ' (' + c.note + ')' : ''}`)
  }
  console.log(bad ? `\n${bad} з ${checks.length} розбіжностей (rules verified ${R.verifiedOn})` : `\nOK: ${checks.length} значень збігаються з IRS/SSA (rules verified ${R.verifiedOn})`)
  process.exit(bad ? 1 : 0)
}
main()
