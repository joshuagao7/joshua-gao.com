'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Gate() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (!password || busy) return
    setBusy(true)
    setError('')
    try {
      const res = await fetch('/api/tracequoting/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const body = await res.json().catch(() => ({}))
      if (res.ok && body.ok) {
        router.refresh()
        return
      }
      setError(body.error || 'That did not work.')
      setPassword('')
    } catch {
      setError('Could not reach the server.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="tq-gate">
      <form className="tq-gate-form" onSubmit={submit}>
        <h1 className="tq-gate-title">Trace Quoting</h1>
        <p className="tq-gate-sub">Private. Enter the password to continue.</p>
        <input
          className="tq-gate-input"
          type="password"
          value={password}
          autoFocus
          autoComplete="current-password"
          aria-label="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value)
            setError('')
          }}
        />
        <button className="tq-gate-button" type="submit" disabled={busy}>
          {busy ? 'One moment…' : 'Open'}
        </button>
        <p className="tq-gate-error" role="status">{error || ' '}</p>
      </form>
    </main>
  )
}
