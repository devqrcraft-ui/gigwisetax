const fs = require('fs');
const platforms = ['doordash','uber','etsy','onlyfans','instacart','airbnb','amazon-flex','lyft'];
platforms.forEach(slug => {
  // Fix page.tsx
  const f1 = `app/${slug}/page.tsx`;
  try {
    let c = fs.readFileSync(f1, 'utf8');
    c = c.replace(
      /export async function generateStaticParams\(\)[^}]*\{[^}]*\}/,
      `export async function generateStaticParams() { return [{ platform: '${slug}' }] }`
    );
    c = c.replace(/params\.platform/g, `'${slug}'`);
    fs.writeFileSync(f1, c);
    console.log('fixed:', f1);
  } catch(e) { console.log('skip:', f1); }

  // Fix [state]/page.tsx
  const f2 = `app/${slug}/[state]/page.tsx`;
  try {
    let c = fs.readFileSync(f2, 'utf8');
    c = c.replace(/params\.platform/g, `'${slug}'`);
    fs.writeFileSync(f2, c);
    console.log('fixed:', f2);
  } catch(e) { console.log('skip:', f2); }
});
