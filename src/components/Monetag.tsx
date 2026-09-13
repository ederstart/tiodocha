'use client'
import { useEffect } from 'react'

export function Monetag() {
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1))
    idle(() => {
      const s = document.createElement('script')
      s.src = 'https://a.monetag.com/xxxxxx.js'
      s.async = true
      s.defer = true
      document.head.appendChild(s)
    })
  }, [])
  return <div id="monetag-slot" aria-hidden style={{ minHeight: 1 }} />
}
