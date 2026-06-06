import { readFileSync, writeFileSync } from 'fs';

const FILE = 'C:/Users/RUSLAN/Desktop/gigwisetax/app/doordash/[state]/page.tsx';
let c = readFileSync(FILE, 'utf8');
const orig = c;

// 1. JSON.stringify → рядок
c = c.replace(
  `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}/>`,
  `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebApplication","name":"DoorDash Tax Calculator ' + state.name + ' 2026","url":"https://www.gigwisetax.com/doordash/' + state.slug + '","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}' }} />`
);
console.log('1. JSON.stringify fix:', !c.includes('JSON.stringify(schemaJson)') ? 'OK' : 'FAIL');

// 2. BreadcrumbList + BlogPosting після WebApplication
const webAppEnd = `"applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}' }} />`;
if (!c.includes(webAppEnd)) { console.error('webAppEnd not found'); process.exit(1); }
c = c.replace(webAppEnd, webAppEnd + `
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"DoorDash Tax Calculator","item":"https://www.gigwisetax.com/doordash"},{"@type":"ListItem","position":3,"name":"' + state.name + '","item":"https://www.gigwisetax.com/doordash/' + state.slug + '"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"DoorDash Tax Calculator ' + state.name + ' 2026","description":"Free DoorDash tax calculator for ' + state.name + ' 2026.","datePublished":"2026-01-01","dateModified":"2026-06-04","author":{"@type":"Person","name":"Ethan Blake"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/doordash/' + state.slug + '"}}' }} />`);
console.log('2. BreadcrumbList:', c.includes('BreadcrumbList') ? 'OK' : 'FAIL');
console.log('   BlogPosting:', c.includes('BlogPosting') ? 'OK' : 'FAIL');
console.log('   reviewedBy:', c.includes('reviewedBy') ? 'OK' : 'FAIL');

// 3. min read після answer-first
const answerEnd = `          </p>\n        </div>\n\n        {/* Key Takeaways */}`;
if (!c.includes(answerEnd)) { console.error('answerEnd not found'); process.exit(1); }
c = c.replace(answerEnd,
  `          </p>\n        </div>\n\n        <p style={{fontSize:13,color:'rgba(255,255,255,0.65)',margin:'-12px 0 16px',fontStyle:'italic' as const}}>By <a href="https://medium.com/@ethanblake_tax" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>Ethan Blake</a> &nbsp;·&nbsp; ~5 min read &nbsp;·&nbsp; Updated June 2026</p>\n\n        {/* Key Takeaways */}`);
console.log('3. min read:', c.includes('min read') ? 'OK' : 'FAIL');

// 4. IRS blockquote перед Breadcrumb
const breadcrumbComment = `        {/* Breadcrumb */}`;
if (!c.includes(breadcrumbComment)) { console.error('breadcrumb comment not found'); process.exit(1); }
c = c.replace(breadcrumbComment,
  `        <blockquote style={{borderLeft:'3px solid #e8b84b',padding:'12px 16px 12px 18px',margin:'0 0 20px',background:'rgba(232,184,75,0.05)',borderRadius:'0 6px 6px 0'}}>
          <p style={{margin:0,fontSize:14,color:'rgba(255,255,255,0.75)',fontStyle:'italic' as const,lineHeight:1.7}}>"Self-employed individuals are required to pay self-employment tax and income tax. Self-employment tax includes Social Security and Medicare taxes."</p>
          <cite style={{display:'block',marginTop:8,fontSize:12,color:'#e8b84b',fontStyle:'normal' as const}}>— <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>IRS.gov — Self-Employment Tax</a></cite>
        </blockquote>

        {/* Breadcrumb */}`);
console.log('4. blockquote IRS:', c.includes('IRS.gov') ? 'OK' : 'FAIL');

// 5. linear-gradient fix
c = c.replace(`background: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)'`, `background: '#07111F'`);
c = c.replace(`border: '1px solid #2d2d4e'`, `border: '1px solid rgba(255,255,255,0.12)'`);
console.log('5. gradient fix:', !c.includes('linear-gradient(135deg,#1a1a2e') ? 'OK' : 'FAIL');

// 6. rgba opacity fix
c = c.replace(/color: 'rgba\(255,255,255,0\.45\)'/g, "color: 'rgba(255,255,255,0.75)'");
c = c.replace(/color: 'rgba\(255,255,255,\.45\)'/g,  "color: 'rgba(255,255,255,.75)'");
c = c.replace(/color: 'rgba\(255,255,255,\.6\)'/g,   "color: 'rgba(255,255,255,.75)'");
c = c.replace(/color: 'rgba\(255,255,255,0\.6\)'/g,  "color: 'rgba(255,255,255,0.75)'");
console.log('6. rgba fix:', !c.includes("color: 'rgba(255,255,255,0.45)'") ? 'OK' : 'FAIL');

// 7. Breadcrumb Home color
c = c.replace(`<a href="/" style={{ color: '#B22234', textDecoration: 'none' }}>Home</a>`,
              `<a href="/" style={{ color: '#8fa8c8', textDecoration: 'none' }}>Home</a>`);
console.log('7. breadcrumb color:', !c.includes(`href="/" style={{ color: '#B22234'`) ? 'OK' : 'FAIL');

// 8. FAQ +2 питання
const oldFaqEnd = "                    a: `Federal SE tax is 15.3% regardless of state. In ${state.name} you additionally pay ${noStateTax ? 'no state income tax' : `${stateRateStr} state income tax`}.`,\n                  },\n                ].map";
const newFaqEnd = "                    a: `Federal SE tax is 15.3% regardless of state. In ${state.name} you additionally pay ${noStateTax ? 'no state income tax' : `${stateRateStr} state income tax`}.`,\n                  },\n                  {\n                    q: `What mileage rate can DoorDash drivers deduct in ${state.name} in 2026?`,\n                    a: `DoorDash drivers in ${state.name} can deduct 72.5 cents per mile for deliveries in 2026. On 10,000 delivery miles that is a $7,250 deduction directly reducing taxable profit.`,\n                  },\n                  {\n                    q: `Does the No Tax on Tips law apply to DoorDash drivers in ${state.name}?`,\n                    a: `Yes. Under the One Big Beautiful Budget Act 2026, tip income up to $25,000 is federally deductible for DoorDash drivers in ${state.name}, in addition to mileage and business expense deductions.`,\n                  },\n                ].map";
if (c.includes(oldFaqEnd)) {
  c = c.replace(oldFaqEnd, newFaqEnd);
  console.log('8. FAQ 5 questions: OK');
} else {
  console.log('8. FAQ: FAIL - старий рядок не знайдено, пропускаємо');
}

// ЗБЕРЕГТИ
if (c === orig) { console.error('ФАЙЛ НЕ ЗМІНИВСЯ'); process.exit(1); }
writeFileSync(FILE, c, 'utf8');
console.log('\nФайл збережено OK');
