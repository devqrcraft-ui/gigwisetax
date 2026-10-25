// scripts/check-hardcoded.ts — шукає застарілі/захардкоджені податкові числа в app/ і lib/.
// Запуск: npx tsx scripts/check-hardcoded.ts   (код виходу 1 при знахідках)
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOTS = ['app', 'lib']
const SKIP = ['node_modules', '.next']
const RULES: { code: string; re: RegExp; not?: RegExp; why: string }[] = [
  { code: 'MILE_725_ALL', re: /\*\s*0\.725\b/, why: 'ставка 72.5 на всі милі; потрібен mileageDeduct / mileageDeductEvenSplit з lib/examples' },
  { code: 'STALE_TOTAL', re: /\$(8,074|7,750|2,019|4,944)\b/, why: 'число з старого ручного прикладу; рахувати через example()' },
  { code: 'JUN16', re: /June 16, 2026/, why: 'Q2 estimated tax = June 15, 2026' },
  { code: 'NEC600_2026', re: /\$600 or more/, not: /\$2,000|2025|before|prior/i, why: 'для виплат 2026 поріг $2,000' },
  { code: 'DATEMOD_JUN', re: /2026-06-11/, why: 'dateModified брати з TAX_RULES_2026.verifiedOn' },
]

function walk(d: string, out: string[] = []): string[] {
  for (const n of readdirSync(d)) {
    if (SKIP.includes(n)) continue
    const p = join(d, n)
    const s = statSync(p)
    if (s.isDirectory()) walk(p, out)
    else if (/\.(tsx?|jsx?|json)$/.test(n)) out.push(p)
  }
  return out
}

let found = 0
const perCode: Record<string, number> = {}
for (const root of ROOTS) {
  for (const f of walk(root)) {
    const lines = readFileSync(f, 'utf8').split(/\r?\n/)
    lines.forEach((line: string, i: number) => {
      for (const r of RULES) {
        if (r.re.test(line) && !(r.not && r.not.test(line))) {
          found++
          perCode[r.code] = (perCode[r.code] || 0) + 1
          console.log(`${r.code}\t${f.replace(/\\/g, '/')}:${i + 1}\t${line.trim().slice(0, 90)}`)
        }
      }
    })
  }
}
console.log('---')
console.log('TOTAL', found, JSON.stringify(perCode))
process.exit(found ? 1 : 0)
