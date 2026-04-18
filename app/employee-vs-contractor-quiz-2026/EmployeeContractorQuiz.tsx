'use client';
import { useState } from 'react';
import Link from 'next/link';

const QUESTIONS = [
  { id:1, question:'Who controls when and where you work?', options:[{label:'The platform sets my schedule and location',weight:0},{label:'I choose my own hours and areas',weight:2}] },
  { id:2, question:'Whose equipment do you primarily use?', options:[{label:'Company-provided equipment or vehicle',weight:0},{label:'My own car, phone, or tools',weight:2}] },
  { id:3, question:'Do you work for multiple clients or platforms simultaneously?', options:[{label:'No — only this one company exclusively',weight:0},{label:'Yes — I work multiple apps or have other clients',weight:2}] },
  { id:4, question:'How are you paid?', options:[{label:'Regular salary or hourly wage (W-2)',weight:0},{label:'Per delivery, per ride, or per task (1099)',weight:2}] },
  { id:5, question:'Can you turn down work without penalty?', options:[{label:'No — I must accept assignments or face consequences',weight:0},{label:'Yes — I accept or decline jobs freely',weight:2}] },
  { id:6, question:'Does the company provide benefits like health insurance or paid time off?', options:[{label:'Yes — I receive standard employee benefits',weight:0},{label:'No — I pay for my own insurance and have no PTO',weight:2}] },
  { id:7, question:'Can you subcontract or send a substitute to do the work?', options:[{label:'No — I must personally perform all work',weight:0},{label:'Yes — I could hire someone to substitute',weight:2}] },
];

export default function EmployeeContractorQuiz() {
  const [answers, setAnswers] = useState<{questionId:number;weight:number}[]>([]);
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);

  const score = answers.reduce((s,a)=>s+a.weight,0);
  const pct   = score / (QUESTIONS.length * 2);

  function handleAnswer(weight:number) {
    const q = QUESTIONS[current];
    const updated = [...answers.filter(a=>a.questionId!==q.id),{questionId:q.id,weight}];
    setAnswers(updated);
    if (current+1>=QUESTIONS.length) setDone(true);
    else setCurrent(current+1);
  }

  function getResult() {
    if (pct>=0.75) return { label:'Independent Contractor', color:'#e8b84b', summary:'Your answers suggest an independent contractor situation. You are likely responsible for SE tax (15.3%), quarterly estimated payments, and tracking deductible business expenses like mileage and phone costs.', cta:{href:'/doordash-tax-calculator-2026',text:'Calculate your 1099 taxes →'}, cta2:{href:'/uber-tax-calculator-2026',text:'Uber driver tax calculator →'} };
    if (pct<=0.35) return { label:'Employee', color:'#4ade80', summary:'Your answers suggest an employee situation. If you receive a W-2 with taxes withheld, you generally do not owe SE tax. If you believe you are misclassified, consult a tax professional or employment attorney.', cta:{href:'/doordash-tax-calculator-2026',text:'Have 1099 side income? Calculate it →'}, cta2:null };
    return { label:'Mixed / Unclear', color:'#93c5fd', summary:'Your answers suggest a mixed situation. Worker classification depends on specific facts, state laws, and IRS guidelines. Consider consulting a tax professional.', cta:{href:'/doordash-tax-calculator-2026',text:'Estimate your 1099 taxes →'}, cta2:{href:'/multi-platform-gig-tax-calculator-2026',text:'Multi-app tax calculator →'} };
  }

  const q = QUESTIONS[current];
  const progressPct = Math.round((current/QUESTIONS.length)*100);

  const btnBase: React.CSSProperties = {
    background:'transparent', border:'2px solid #1a2d45', borderRadius:'12px',
    color:'#C8D8EC', cursor:'pointer', fontSize:'16px', fontWeight:500,
    lineHeight:1.4, minHeight:'56px', padding:'14px 18px',
    textAlign:'left', width:'100%', transition:'all 0.2s',
  };

  return (
    <main style={{background:'#07111F',minHeight:'100vh',paddingBottom:'80px'}}>
      <section style={{background:'linear-gradient(135deg,#0d1e35 0%,#07111F 100%)',borderBottom:'1px solid #1a2d45',padding:'48px 20px 40px',textAlign:'center'}}>
        <p style={{color:'#e8b84b',fontSize:'13px',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',margin:'0 0 12px'}}>2026 EDUCATIONAL GUIDE</p>
        <h1 style={{color:'#C8D8EC',fontSize:'clamp(22px,5vw,40px)',fontWeight:800,lineHeight:1.2,margin:'0 auto 16px',maxWidth:'700px'}}>
          Employee or Independent Contractor?{' '}
          <span style={{color:'#e8b84b'}}>2026 Educational Quiz</span> for Gig Workers
        </h1>
        <p style={{color:'#C8D8EC',fontSize:'clamp(15px,2vw,18px)',maxWidth:'600px',margin:'0 auto',opacity:0.85}}>7 questions to help you understand how the IRS distinguishes employees from independent contractors.</p>
        <div style={{display:'inline-block',background:'rgba(232,184,75,0.12)',border:'1px solid rgba(232,184,75,0.3)',borderRadius:'8px',padding:'8px 16px',color:'#e8b84b',fontSize:'13px',fontWeight:600,marginTop:'20px'}}>Educational guide only — not legal or tax advice</div>
      </section>

      <div style={{maxWidth:'680px',margin:'0 auto',padding:'0 16px'}}>
        {!done ? (
          <div style={{background:'#0d1e35',border:'1px solid #1a2d45',borderRadius:'16px',padding:'clamp(20px,4vw,36px)',marginTop:'32px'}}>
            <div style={{marginBottom:'24px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
                <span style={{color:'#C8D8EC',fontSize:'14px',opacity:0.7}}>Question {current+1} of {QUESTIONS.length}</span>
                <span style={{color:'#e8b84b',fontSize:'14px',fontWeight:700}}>{progressPct}%</span>
              </div>
              <div style={{background:'#1a2d45',borderRadius:'99px',height:'6px'}}>
                <div style={{background:'#e8b84b',height:'6px',borderRadius:'99px',width:progressPct+'%',transition:'width 0.3s ease'}} />
              </div>
            </div>
            <h2 style={{color:'#C8D8EC',fontSize:'clamp(17px,2.5vw,21px)',fontWeight:700,lineHeight:1.4,marginBottom:'24px'}}>{q.question}</h2>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {q.options.map(opt=>(
                <button key={opt.label} onClick={()=>handleAnswer(opt.weight)} style={btnBase}
                  onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor='#e8b84b';(e.currentTarget as HTMLButtonElement).style.background='rgba(232,184,75,0.08)';}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor='#1a2d45';(e.currentTarget as HTMLButtonElement).style.background='transparent';}}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (()=>{
          const r = getResult();
          return (
            <div style={{background:'#0d1e35',border:'1px solid #1a2d45',borderRadius:'16px',padding:'clamp(20px,4vw,36px)',marginTop:'32px'}}>
              <p style={{color:'#C8D8EC',fontSize:'14px',opacity:0.7,marginBottom:'8px'}}>Your result</p>
              <h2 style={{color:r.color,fontSize:'clamp(22px,4vw,32px)',fontWeight:800,marginBottom:'20px'}}>Your situation looks more like an <span style={{textDecoration:'underline'}}>{r.label}</span></h2>
              <p style={{color:'#C8D8EC',fontSize:'16px',lineHeight:1.7,marginBottom:'24px'}}>{r.summary}</p>
              <div style={{background:'#1a2d45',borderRadius:'99px',height:'10px',marginBottom:'28px'}}>
                <div style={{background:r.color,height:'10px',borderRadius:'99px',width:Math.round(pct*100)+'%'}} />
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'24px'}}>
                <Link href={r.cta.href} style={{background:'#e8b84b',borderRadius:'12px',color:'#07111F',display:'block',fontSize:'16px',fontWeight:700,minHeight:'52px',padding:'14px 20px',textAlign:'center',textDecoration:'none'}}>{r.cta.text}</Link>
                {r.cta2 && <Link href={r.cta2.href} style={{background:'transparent',border:'2px solid #e8b84b',borderRadius:'12px',color:'#e8b84b',display:'block',fontSize:'16px',fontWeight:700,minHeight:'52px',padding:'14px 20px',textAlign:'center',textDecoration:'none'}}>{r.cta2.text}</Link>}
              </div>
              <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:'10px',padding:'14px 16px',marginBottom:'16px'}}>
                <p style={{color:'#C8D8EC',fontSize:'13px',lineHeight:1.6,margin:0,opacity:0.85}}><strong style={{color:'#e8b84b'}}>Disclaimer:</strong> This quiz is an educational guide only and does not constitute legal, tax, or employment advice. Consult a qualified professional for advice specific to your circumstances.</p>
              </div>
              <button onClick={()=>{setAnswers([]);setCurrent(0);setDone(false);}} style={{background:'transparent',border:'1px solid #1a2d45',borderRadius:'10px',color:'#C8D8EC',cursor:'pointer',fontSize:'14px',padding:'10px 20px',width:'100%'}}>Retake the quiz</button>
            </div>
          );
        })()}

        <section style={{marginTop:'48px'}}>
          <h2 style={{color:'#C8D8EC',fontSize:'clamp(20px,3vw,28px)',fontWeight:700,marginBottom:'20px'}}>Frequently Asked Questions</h2>
          {[
            {q:'What is the difference between an employee and an independent contractor?',a:'Employees have taxes withheld by their employer and receive W-2 forms. Independent contractors receive 1099 forms, pay SE tax of 15.3%, set their own hours, use their own tools, and often work for multiple clients.'},
            {q:'Do gig workers (DoorDash, Uber, Instacart) count as employees or independent contractors?',a:'Most gig platform workers are classified as independent contractors. You receive a 1099-NEC, owe SE tax on net earnings, and can deduct business expenses like mileage, phone bills, and hot bags.'},
            {q:'How do I know if I owe self-employment tax?',a:'If your net self-employment income is $400 or more in a year, the IRS requires you to pay SE tax of 15.3% on 92.35% of your net earnings. You also likely owe quarterly estimated payments if you expect to owe $1,000 or more.'},
            {q:'What is the ABC test for worker classification?',a:'The ABC test (used in California and other states) presumes a worker is an employee unless the company proves: (A) the worker is free from control, (B) the work is outside the usual business, and (C) the worker has an independently established business.'},
          ].map(item=>(
            <div key={item.q} style={{background:'#0d1e35',border:'1px solid #1a2d45',borderRadius:'12px',padding:'20px',marginBottom:'12px'}}>
              <h3 style={{color:'#e8b84b',fontSize:'16px',fontWeight:700,marginBottom:'10px'}}>{item.q}</h3>
              <p style={{color:'#C8D8EC',fontSize:'15px',lineHeight:1.7,margin:0}}>{item.a}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
