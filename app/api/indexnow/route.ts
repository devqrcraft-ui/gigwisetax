import { NextResponse } from 'next/server';

export async function GET() {
  const KEY = '268d242c1b2c4c3b9b4c4c3b9b4c4c3b';
  const HOST = 'www.gigwisetax.com';
  
  const platforms = ['doordash', 'uber', 'etsy', 'onlyfans', 'instacart', 'airbnb', 'amazon-flex', 'lyft', 'grubhub', 'walmart-spark'];
  const states = ['alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire','new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio','oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota','tennessee','texas','utah','vermont','virginia','washington','west-virginia','wisconsin','wyoming','washington-dc'];

  const urlList = [
    `https://${HOST}/`,
    `https://${HOST}/ai-freelancer`,
    `https://${HOST}/calculators`,
    `https://${HOST}/deadlines`,
    `https://${HOST}/deductions`
  ];

  platforms.forEach(p => {
    urlList.add(`https://${HOST}/${p}` );
    states.forEach(s => {
      urlList.push(`https://${HOST}/${p}/${s}` );
    });
  });

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: urlList
      } ),
    });
    
    return NextResponse.json({ 
      success: response.ok, 
      status: response.status,
      total_urls: urlList.length,
      message: response.ok ? "All URLs sent to IndexNow" : "IndexNow API error"
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
