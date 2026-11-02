'use client'

import { useState } from 'react'

interface Props {
  platformName: string
  stateAbbr: string
  seTax: number
  federal: number
  stateTax: number
  stateTaxModeled: boolean
  scheduleE?: boolean
  total: number
  quarterly: number
}

const fmt = (n: number) => '$' + Math.round(n || 0).toLocaleString('en-US')

async function copyText(t: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(t)
    return true
  } catch (e) {
    try {
      const ta = document.createElement('textarea')
      ta.value = t
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.focus()
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch (e2) {
      return false
    }
  }
}

export default function ResultActions(p: Props) {
  const [note, setNote] = useState('')
  const flash = (m: string) => {
    setNote(m)
    setTimeout(() => setNote(''), 2500)
  }
  const build = () => {
    const url = window.location.origin + window.location.pathname
    const stateText = p.stateTaxModeled
      ? ', ' + p.stateAbbr + ' state (simplified input) ' + fmt(p.stateTax)
      : ', ' + p.stateAbbr + ' state tax not modeled'
    const taxDetails = p.scheduleE
      ? 'federal ' + fmt(p.federal)
      : 'SE tax ' + fmt(p.seTax) + ', federal ' + fmt(p.federal)
    const totalLabel = p.stateTaxModeled ? 'total' : p.scheduleE ? 'federal subtotal (state tax excluded)' : 'federal + SE subtotal (state tax excluded)'
    const text =
      'My 2026 ' + p.platformName + ' tax estimate (planning only): ' + taxDetails + stateText +
      ', ' + totalLabel + ' ' + fmt(p.total) + ' (about ' + fmt(p.quarterly) + ' per quarter). Not tax advice.'
    return { text, url }
  }
  const onCopy = async () => {
    const { text, url } = build()
    const ok = await copyText(text + '\n' + url)
    flash(ok ? 'Result copied' : 'Copy failed. Select the numbers and copy manually.')
  }
  const onShare = async () => {
    const { text, url } = build()
    const nav: any = navigator
    if (nav.share) {
      try {
        await nav.share({ title: p.platformName + ' tax estimate 2026', text, url })
        return
      } catch (e: any) {
        if (e && e.name === 'AbortError') return
      }
    }
    const ok = await copyText(text + '\n' + url)
    flash(ok ? 'Sharing is not available here. Result and link copied.' : 'Could not share or copy.')
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <button type="button" className="gtx-act gtx-act-main" onClick={onCopy}>Copy result</button>
      <button type="button" className="gtx-act" onClick={onShare}>Share</button>
      <span role="status" aria-live="polite" style={{ fontSize: 13, color: '#e8b84b' }}>{note}</span>
      <style>{`
        .gtx-act{min-height:44px;padding:0 18px;border-radius:6px;border:1px solid rgba(232,184,75,0.6);background:rgba(20,35,60,0.9);color:#e8b84b;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;transition:background .15s,transform .15s}
        .gtx-act-main{background:#e8b84b;color:#07111F}
        .gtx-act:hover{background:rgba(232,184,75,0.22);transform:translateY(-1px)}
        .gtx-act-main:hover{background:#f3c95e}
        .gtx-act:focus-visible{outline:2px solid #fff;outline-offset:2px}
      `}</style>
    </div>
  )
}
