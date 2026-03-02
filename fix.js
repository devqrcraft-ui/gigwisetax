const fs = require('fs');
const files = [
  'app/[platform]/page.tsx',
  'app/[platform]/[state]/page.tsx',
  'app/doordash/page.tsx',
  'app/doordash/[state]/page.tsx',
  'app/uber/page.tsx',
  'app/uber/[state]/page.tsx',
  'app/etsy/page.tsx',
  'app/etsy/[state]/page.tsx',
  'app/onlyfans/page.tsx',
  'app/onlyfans/[state]/page.tsx',
  'app/instacart/page.tsx',
  'app/instacart/[state]/page.tsx',
  'app/airbnb/page.tsx',
  'app/airbnb/[state]/page.tsx',
  'app/amazon-flex/page.tsx',
  'app/amazon-flex/[state]/page.tsx',
  'app/lyft/page.tsx',
  'app/lyft/[state]/page.tsx',
];
files.forEach(f => {
  try {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/!!st\.noTax/g, 'st.rate === 0');
    c = c.replace(/st\.noTax/g, 'st.rate === 0');
    fs.writeFileSync(f, c);
    console.log('fixed:', f);
  } catch(e) { console.log('skip:', f); }
});
