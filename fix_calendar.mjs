import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('app/home-client.tsx', 'utf8');

const gcalDates = {
  'Q1 2026': { start: '20260415', end: '20260416' },
  'Q2 2026': { start: '20260616', end: '20260617' },
  'Q3 2026': { start: '20260915', end: '20260916' },
  'Q4 2026': { start: '20270115', end: '20270116' },
};

const makeUrl = (q) => {
  const d = gcalDates[q];
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(q+' IRS Estimated Tax Payment Due')}&dates=${d.start}/${d.end}&details=${encodeURIComponent('IRS quarterly estimated tax payment due. Pay at: https://www.irs.gov/payments')}&sf=true&output=xml`;
};

c = c.replace(
  '<div style={btnRed({ fontSize: 13, padding: \'6px 0\' })}>+ Calendar</div>',
  `<div style={{...btnRed({ fontSize: 13, padding: '6px 0' }), cursor:'pointer'}} onClick={()=>{ const urls = {'Q1 2026':'${makeUrl('Q1 2026')}','Q2 2026':'${makeUrl('Q2 2026')}','Q3 2026':'${makeUrl('Q3 2026')}','Q4 2026':'${makeUrl('Q4 2026')}'}; window.open(urls[d.q],'_blank'); }}>+ Calendar</div>`
);

c = c.replace(
  '<div style={btnRed({ fontSize: 12, padding: \'7px 0\' })}> + Calendar</div>',
  `<div style={{...btnRed({ fontSize: 12, padding: '7px 0' }), cursor:'pointer'}} onClick={()=>{ const urls = {'Q1 2026':'${makeUrl('Q1 2026')}','Q2 2026':'${makeUrl('Q2 2026')}','Q3 2026':'${makeUrl('Q3 2026')}','Q4 2026':'${makeUrl('Q4 2026')}'}; window.open(urls[d.q],'_blank'); }}> + Calendar</div>`
);

writeFileSync('app/home-client.tsx', c);
console.log('Done');
