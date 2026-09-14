import fs from 'fs';

const path = 'app/page.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const idx = lines.findIndex(l => l.includes('"@type":"WebPage"') && l.includes('aggregateRating'));
if (idx === -1) {
  console.error('LINE NOT FOUND');
  process.exit(1);
}

const newJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "GigWiseTax — 1099 Self-Employment Tax Calculator",
  "url": "https://www.gigwisetax.com",
  "description": "Free 1099 self-employment tax calculator. Calculates SE tax 15.3%, federal and state taxes for DoorDash, Uber, Instacart, OnlyFans and all gig workers. All 50 States + DC.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "128" }
});

lines[idx] = "      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: `" + newJson.replace(/`/g, '\\`') + "` }} />";

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('OK: replaced line', idx);
