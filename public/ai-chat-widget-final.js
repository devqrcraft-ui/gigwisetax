(function(){
if (window.__aiChatLoaded) return;
window.__aiChatLoaded = true;
const css = `
  #ai-fab{position:fixed;bottom:20px;right:20px;z-index:9999;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#e8b84b,#c9982a);box-shadow:0 4px 20px rgba(232,184,75,0.5);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;animation:fabpulse 2.5s ease-in-out infinite;}
  @keyframes fabpulse{0%,100%{box-shadow:0 4px 20px rgba(232,184,75,0.5)}50%{box-shadow:0 4px 32px rgba(232,184,75,0.85)}}
  #ai-fab svg{width:26px;height:26px;fill:#07111F;}
  #ai-badge{position:absolute;top:-6px;right:-6px;background:#e8b84b;color:#07111F;font-size:10px;font-weight:900;border-radius:10px;padding:2px 6px;display:none;}
  #ai-badge.show{display:block;}
  #ai-win{position:fixed;bottom:84px;right:16px;z-index:9998;width:340px;height:210px;background:#07111F;border:1.5px solid rgba(232,184,75,0.4);border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.7);display:none;flex-direction:column;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}
  #ai-win.open{display:flex;}
  #ai-fab.chat-open{display:none!important;}
  #ai-head{background:linear-gradient(135deg,#0d1b3e,#07111F);border-bottom:2px solid rgba(232,184,75,0.3);padding:12px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;}
  #ai-dot{width:9px;height:9px;border-radius:50%;background:#4ade80;flex-shrink:0;animation:dotpulse 2s infinite;}
  @keyframes dotpulse{0%,100%{opacity:1}50%{opacity:.4}}
  #ai-name{font-size:14px;font-weight:800;color:#e8b84b;flex:1;}
  #ai-sub{font-size:11px;color:rgba(255,255,255,.5);}
  #ai-close{background:none;border:none;color:rgba(255,255,255,.6);font-size:20px;cursor:pointer;padding:0 4px;line-height:1;}
  #ai-msgs{flex:1;overflow-y:auto;padding:14px 14px 8px;display:flex;flex-direction:column;gap:10px;scrollbar-width:thin;scrollbar-color:rgba(232,184,75,.2) transparent;}
  .ai-msg{max-width:88%;padding:10px 13px;border-radius:12px;font-size:15px;line-height:1.5;word-break:break-word;}
  .ai-msg.bot{background:rgba(232,184,75,0.08);border:1px solid rgba(232,184,75,0.2);color:#C8D8EC;align-self:flex-start;border-radius:4px 12px 12px 12px;}
  .ai-msg.user{background:rgba(232,184,75,0.18);color:#fff;font-weight:600;align-self:flex-end;border-radius:12px 4px 12px 12px;}
  .ai-typing{display:flex;gap:4px;align-items:center;padding:10px 13px;}
  .ai-typing span{width:7px;height:7px;border-radius:50%;background:#e8b84b;animation:typ 1.2s infinite;}
  .ai-typing span:nth-child(2){animation-delay:.2s;}
  .ai-typing span:nth-child(3){animation-delay:.4s;}
  @keyframes typ{0%,60%,100%{opacity:.2;transform:scale(.8)}30%{opacity:1;transform:scale(1)}}
  #ai-form{padding:10px 12px;border-top:1px solid rgba(232,184,75,0.15);display:flex;gap:8px;flex-shrink:0;background:rgba(255,255,255,0.02);}
  #ai-input{flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(232,184,75,0.25);border-radius:8px;color:#fff;font-size:15px;padding:10px 12px;outline:none;font-family:inherit;}
  #ai-input::placeholder{color:rgba(255,255,255,.35);}
  #ai-input:focus{border-color:#e8b84b;}
  #ai-send{background:#e8b84b;border:none;border-radius:8px;width:42px;height:42px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  #ai-send svg{width:18px;height:18px;fill:#07111F;}
  @media(max-width:540px){#ai-win{width:calc(100vw - 24px);right:12px;bottom:76px;height:160px;}.ai-msg{font-size:14px;}#ai-input{font-size:14px;}}
`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);

const fab=document.createElement('button');
fab.id='ai-fab';fab.setAttribute('aria-label','Ask GigWise AI');
fab.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14H7v-2h6v2zm2-4H7v-2h8v2zm0-4H7V6h8v2z"/></svg><div id="ai-badge">1</div>';
document.body.appendChild(fab);

const win=document.createElement('div');win.id='ai-win';
win.innerHTML=`<div id="ai-head"><div id="ai-dot"></div><div><div id="ai-name">GigWise AI</div><div id="ai-sub">Online · fast replies</div></div><button id="ai-close" aria-label="Close">×</button></div><div id="ai-msgs"></div><form id="ai-form" autocomplete="off"><input id="ai-input" type="text" placeholder="Ask a question..." maxlength="300"/><button type="submit" id="ai-send" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button></form>`;
document.body.appendChild(win);

const msgs=win.querySelector('#ai-msgs'),input=win.querySelector('#ai-input'),badge=fab.querySelector('#ai-badge');
function addMsg(t,r){const d=document.createElement('div');d.className='ai-msg '+r;d.textContent=t;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
function showTyping(){const d=document.createElement('div');d.className='ai-typing';d.innerHTML='<span></span><span></span><span></span>';msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;return d;}

let open=false;
function openChat(){open=true;win.classList.add('open');fab.classList.add('chat-open');badge.classList.remove('show');input.focus();}
function closeChat(){open=false;win.classList.remove('open');fab.classList.remove('chat-open');}
fab.addEventListener('click',()=>open?closeChat():openChat());
win.querySelector('#ai-close').addEventListener('click',closeChat);

const SYSTEM=`You are GigWise AI on gigwisetax.com — free gig worker & self-employment tax calculator for DoorDash, Uber, Etsy, Airbnb, OnlyFans, Instacart. USA only.
Rules:
- Answer ONLY about gig taxes: SE tax 15.3%, quarterly payments, 1099, deductions, Schedule C, state taxes, platform-specific taxes.
- Off-topic (weather, jokes, personal): reply "I only help with gig taxes. What platform do you work on?"
- Detect language from user message. Always reply in SAME language (English, Ukrainian, Spanish, Russian, etc).
- MAX 2 sentences. Always end with exactly ONE follow-up question.
- Never calculate exact numbers — say "Use our free calculator at gigwisetax.com."
- Never mention competitors.`;

const history=[];
async function sendToAI(userText){
  history.push({role:'user',content:userText});
  const typing=showTyping();
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:120,system:SYSTEM,messages:history})});
    const data=await res.json();
    const reply=data.content?.[0]?.text||"Use our calculator at gigwisetax.com!";
    history.push({role:'assistant',content:reply});
    typing.remove();addMsg(reply,'bot');
  }catch(e){typing.remove();addMsg("Use our free calculator at gigwisetax.com!","bot");}
}

win.querySelector('#ai-form').addEventListener('submit',async(e)=>{
  e.preventDefault();const text=input.value.trim();if(!text)return;input.value='';addMsg(text,'user');await sendToAI(text);
});

setTimeout(()=>{
  addMsg("SE tax is 15.3% for gig workers — use our calculator to see your exact bill. What platform do you work on?","bot");
  badge.classList.add('show');
  setTimeout(()=>{if(!open)openChat();},1500);
},25000);

})();