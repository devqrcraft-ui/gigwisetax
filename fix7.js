const fs = require('fs');
const platforms = ['doordash','uber','etsy','onlyfans','instacart','airbnb','amazon-flex','lyft'];
platforms.forEach(slug => {
  const f = `app/${slug}/[state]/page.tsx`;
  try {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/params: \{ platform: string;? ?state: string \}/g, 'params: { state: string }');
    c = c.replace(/params: \{ platform: string, state: string \}/g, 'params: { state: string }');
    fs.writeFileSync(f, c);
    console.log('виправлено:', f);
  } catch(e) { console.log('пропущено:', f); }
});
