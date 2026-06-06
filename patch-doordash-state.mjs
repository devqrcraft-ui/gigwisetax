import { readFileSync, writeFileSync } from 'fs';

const FILE = 'C:/Users/RUSLAN/Desktop/gigwisetax/app/doordash/[state]/page.tsx';
let c = readFileSync(FILE, 'utf8');

// ============================================================
// 1. Додати BreadcrumbList + BlogPosting після FAQPage schema
// ============================================================
const faqSchemaEnd = `' }} />`;
const newSchemas = `' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"DoorDash Tax Calculator","item":"https://www.gigwisetax.com/doordash"},{"@type":"ListItem","position":3,"name":"' + state.name + '","item":"https://www.gigwisetax.com/doordash/' + state.slug + '"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"DoorDash Tax Calculator ' + state.name + ' 2026","description":"Free DoorDash tax calculator for ' + state.name + ' 2026. Estimate SE tax 15.3% + federal & state income tax.","datePublished":"2026-01-01","dateModified":"2026-06-04","author":{"@type":"Person","name":"Ethan Blake"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/doordash/' + state.slug + '"}}' }} />`;

// Знайти перший faqSchemaEnd і замінити
const faqIdx = c.indexOf(faqSchemaEnd);
if (faqIdx === -1) {
  console.error('ERROR: FAQPage schema end not found');
  process.exit(1);
}
c = c.slice(0, faqIdx + faqSchemaEnd.length) + '\n' +
    `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"DoorDash Tax Calculator","item":"https://www.gigwisetax.com/doordash"},{"@type":"ListItem","position":3,"name":"' + state.name + '","item":"https://www.gigwisetax.com/doordash/' + state.slug + '"}]}' }} />\n` +
    `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"DoorDash Tax Calculator ' + state.name + ' 2026","description":"Free DoorDash tax calculator for ' + state.name + ' 2026. Estimate SE tax, federal & state income tax.","datePublished":"2026-01-01","dateModified":"2026-06-04","author":{"@type":"Person","name":"Ethan Blake"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/doordash/' + state.slug + '"}}' }} />\n` +
    c.slice(faqIdx + faqSchemaEnd.length);

// ============================================================
// 2. Фікс JSON.stringify(schemaJson) → рядок
// ============================================================
c = c.replace(
  `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}/>`,
  `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebApplication","name":"DoorDash Tax Calculator ' + state.name + ' 2026","url":"https://www.gigwisetax.com/doordash/' + state.slug + '","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}' }} />`
);

// ============================================================
// 3. Додати min read під title тегом
// ============================================================
c = c.replace(
  `      <title>{`,
  `      <meta name="author" content="Ethan Blake" />
      <title>{`
);

// ============================================================
// 4. Додати min read + blockquote після Answer-First блоку
// Знаходимо кінець answer-first div
// ============================================================
const answerFirstEnd = `          </p>\n        </div>\n\n        {/* Key Takeaways */}`;
const answerFirstEndNew = `          </p>\n        </div>\n\n        {/* Reading time */}\n        <p style={{fontSize:13,color:'rgba(255,255,255,0.45)',margin:'-12px 0 16px',fontStyle:'italic' as const}}>By <a href="https://medium.com/@ethanblake_tax" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>Ethan Blake</a> &nbsp;·&nbsp; ~5 min read &nbsp;·&nbsp; Updated June 2026</p>\n\n        {/* Key Takeaways */}`;
c = c.replace(answerFirstEnd, answerFirstEndNew);

// ============================================================
// 5. Додати IRS blockquote після Key Takeaways блоку
// ============================================================
const afterTakeaways = `        {/* Breadcrumb */}`;
const blockquoteAndBreadcrumb = `        {/* IRS Blockquote */}
        <blockquote style={{borderLeft:'3px solid #e8b84b',paddingLeft:16,margin:'0 0 20px',background:'rgba(232,184,75,0.05)',borderRadius:'0 6px 6px 0',padding:'12px 16px 12px 18px'}}>
          <p style={{margin:0,fontSize:14,color:'rgba(255,255,255,0.75)',fontStyle:'italic' as const,lineHeight:1.7}}>"Self-employed individuals are required to pay self-employment tax and income tax. Self-employment tax includes Social Security and Medicare taxes."</p>
          <cite style={{display:'block',marginTop:8,fontSize:12,color:'#e8b84b',fontStyle:'normal' as const}}>— <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>IRS.gov — Self-Employment Tax</a></cite>
        </blockquote>

        {/* Breadcrumb */}`;
c = c.replace(afterTakeaways, blockquoteAndBreadcrumb);

// ============================================================
// 6. Фікс linear-gradient заборонений → bg #07111F
// ============================================================
c = c.replace(
  `background: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)'`,
  `background: '#07111F'`
);
c = c.replace(
  `border: '1px solid #2d2d4e'`,
  `border: '1px solid rgba(255,255,255,0.12)'`
);

// ============================================================
// 7. Фікс rgba(255,255,255,0.45) → 0.75 (ЗАЛІЗО: мін 0.65)
// ============================================================
c = c.replace(/rgba\(255,255,255,0\.45\)/g, 'rgba(255,255,255,0.75)');
c = c.replace(/rgba\(255,255,255,\.45\)/g, 'rgba(255,255,255,.75)');
// Але тільки для color, не для border
// Більш точно — тільки в color contexts:
c = c.replace(/color: 'rgba\(255,255,255,0\.45\)'/g, "color: 'rgba(255,255,255,0.75)'");
c = c.replace(/color: 'rgba\(255,255,255,\.6\)'/g, "color: 'rgba(255,255,255,.75)'");

// ============================================================
// 8. Breadcrumb колір #B22234 → #8fa8c8
// ============================================================
c = c.replace(
  `style={{ color: '#B22234', textDecoration: 'none' }}>Home</a> /\n          <a href={\`/${platform.slug}\`} style={{ color: '#B22234', textDecoration: 'none' }}`,
  `style={{ color: '#8fa8c8', textDecoration: 'none' }}>Home</a> /\n          <a href={\`/${platform.slug}\`} style={{ color: '#8fa8c8', textDecoration: 'none' }}`
);

// ============================================================
// 9. Розширити FAQ до 5 питань (додати 2 нових)
// ============================================================
const faqEnd = `                  {
                    q: \`What is the self-employment tax rate for \${platform.name} in \${state.name}?\`,
                    a: \`Federal SE tax is 15.3% regardless of state. In \${state.name} you additionally pay \${noStateTax ? 'no state income tax' : \`\${stateRateStr} state income tax\`}.\`,
                  },
                ].map((item, i) => (`;

const faqEndNew = `                  {
                    q: \`What is the self-employment tax rate for \${platform.name} in \${state.name}?\`,
                    a: \`Federal SE tax is 15.3% regardless of state. In \${state.name} you additionally pay \${noStateTax ? 'no state income tax' : \`\${stateRateStr} state income tax\`}.\`,
                  },
                  {
                    q: \`What mileage rate can \${platform.name} drivers deduct in \${state.name} in 2026?\`,
                    a: \`DoorDash drivers in \${state.name} can deduct 72.5 cents per mile driven for deliveries in 2026 using the IRS standard mileage rate. On 10,000 delivery miles that is a \$7,250 deduction — reducing your taxable profit by that amount.\`,
                  },
                  {
                    q: \`Does the No Tax on Tips law apply to \${platform.name} drivers in \${state.name}?\`,
                    a: \`Yes. Under the One Big Beautiful Budget Act 2026, tip income up to \$25,000 is federally deductible for gig workers including DoorDash drivers in \${state.name}. This is in addition to standard business expense deductions.\`,
                  },
                ].map((item, i) => (`;

c = c.replace(faqEnd, faqEndNew);

// ============================================================
// ЗБЕРЕЖЕННЯ
// ============================================================
writeFileSync(FILE, c, 'utf8');
console.log('OK: doordash/[state]/page.tsx patched');

// ПЕРЕВІРКА
const result = readFileSync(FILE, 'utf8');
const checks = [
  ['BreadcrumbList', result.includes('BreadcrumbList')],
  ['BlogPosting', result.includes('BlogPosting')],
  ['reviewedBy', result.includes('reviewedBy')],
  ['blockquote IRS', result.includes('IRS.gov')],
  ['min read', result.includes('min read')],
  ['NO JSON.stringify(schemaJson)', !result.includes('JSON.stringify(schemaJson)')],
  ['NO linear-gradient 1a1a2e', !result.includes('linear-gradient(135deg,#1a1a2e')],
  ['NO rgba 0.45', !result.includes('0.45)')],
  ['5 FAQ questions', (result.match(/q: `/g) || []).length >= 5],
];

console.log('\n=== ПЕРЕВІРКА ===');
checks.forEach(([name, ok]) => console.log(`${ok ? '✓' : '✗'} ${name}`));
const allOk = checks.every(([, ok]) => ok);
console.log(`\n${allOk ? '✓ ALL OK' : '✗ Є ПРОБЛЕМИ'}`);
