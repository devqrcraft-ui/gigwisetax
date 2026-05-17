export default function NotFound() {
  return (
    <div style={{minHeight:'100vh',background:'#07111F',display:'flex',alignItems:'center',justifyContent:'center',padding:'24px',fontFamily:'system-ui,sans-serif'}}>
      <div style={{maxWidth:560,width:'100%',textAlign:'center'}}>
        <div style={{fontSize:80,fontWeight:900,color:'#e8b84b',lineHeight:1,marginBottom:8}}>404</div>
        <div style={{fontSize:13,color:'rgba(255,255,255,0.4)',marginBottom:24,letterSpacing:2,textTransform:'uppercase'}}>Page Not Found</div>
        <h1 style={{fontSize:22,fontWeight:700,color:'#C8D8EC',marginBottom:12,lineHeight:1.4}}>This page doesn't exist</h1>
        <p style={{fontSize:14,color:'rgba(255,255,255,0.55)',lineHeight:1.8,marginBottom:32}}>The page you're looking for may have moved or been removed. Try one of our popular tools below.</p>
        <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:32}}>
          <a href='/doordash' style={{display:'block',background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'14px 20px',textDecoration:'none',color:'#C8D8EC',fontSize:14,fontWeight:600}}>🚗 DoorDash Tax Calculator 2026</a>
          <a href='/uber' style={{display:'block',background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'14px 20px',textDecoration:'none',color:'#C8D8EC',fontSize:14,fontWeight:600}}>🚕 Uber Driver Tax Calculator 2026</a>
          <a href='/1099-tax-calculator' style={{display:'block',background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'14px 20px',textDecoration:'none',color:'#C8D8EC',fontSize:14,fontWeight:600}}>🧮 Free 1099 Tax Calculator 2026</a>
          <a href='/blog' style={{display:'block',background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'14px 20px',textDecoration:'none',color:'#C8D8EC',fontSize:14,fontWeight:600}}>📝 Gig Worker Tax Blog</a>
        </div>
        <a href='/' style={{display:'inline-block',background:'#e8b84b',color:'#07111F',fontWeight:700,fontSize:14,padding:'12px 32px',borderRadius:8,textDecoration:'none'}}>← Back to Home</a>
      </div>
    </div>
  );
}
