import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const fixes = [
  {
    file: join(process.env.USERPROFILE, 'Desktop/gigwisetax/app/uber/page.tsx'),
    oldTitle: 'title: `Uber Tax Calculator 2026 — How Much Do Drivers Actually Owe?`,',
    newTitle: 'title: `Uber Tax Calculator 2026 — See Your Exact Tax Bill & Take-Home Pay`,',
    oldDesc: 'description: `Uber drivers pay 15.3% SE tax + income tax. Calculate your exact 2026 tax bill in seconds — includes mileage deduction ($0.725/mile), quarterly dates. Free, all 50 states.`,',
    newDesc: 'description: `Earning $40k as Uber driver? You owe ~$5,650 SE tax. Free Uber tax calculator 2026 — mileage deduction $0.725/mile, quarterly payments, all 50 states.`,',
  },
  {
    file: join(process.env.USERPROFILE, 'Desktop/gigwisetax/app/blog/instacart-shopper-taxes-2026/page.tsx'),
    oldTitle: `title: 'Instacart Shopper Taxes 2026 — Gig Worker Tax Guide | GigWiseTax',`,
    newTitle: `title: 'Instacart Shopper Taxes 2026: Free Calculator — How Much Do You Owe?',`,
    oldDesc: `description: 'How Instacart shoppers and delivery workers pay taxes in 2026. SE tax 15.3%, mileage deduction $0.725/mile, quarterly estimated taxes, Schedule C, and 1099-NEC filing guide.',`,
    newDesc: `description: 'Instacart shoppers pay 15.3% SE tax on net earnings. Free calculator: see exactly how much to set aside for 2026. Mileage deduction $0.725/mile. All 50 states.',`,
  },
];

let totalChanged = 0;

for (const fix of fixes) {
  if (!existsSync(fix.file)) { console.error('NOT FOUND:', fix.file); continue; }
  let c = readFileSync(fix.file, 'utf8');
  const before = c;
  c = c.replace(fix.oldTitle, fix.newTitle);
  c = c.replace(fix.oldDesc, fix.newDesc);
  if (c === before) {
    console.log('НІЧОГО НЕ ЗМІНИЛОСЬ:', fix.file);
  } else {
    writeFileSync(fix.file, c, 'utf8');
    console.log('DONE:', fix.file.split('\\').pop());
    totalChanged++;
  }
}

console.log(`\nРезультат: ${totalChanged}/2 файлів оновлено`);
