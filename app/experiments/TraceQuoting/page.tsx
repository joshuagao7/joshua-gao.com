import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { COOKIE, checkToken } from '@/lib/tracequoting/auth'
import Gate from './Gate'
import './tracequoting.css'

// Unlisted page: no inbound links, and kept out of search indexes.
export const metadata: Metadata = {
  title: 'Trace Quoting',
  robots: { index: false, follow: false, nocache: true },
}

// Rendered per request so the cookie is checked every time, never baked into a
// cached page. A visitor without one gets the gate and nothing else -- the viewer
// and every byte of geometry come from /api/tracequoting/*, which checks again.
export const dynamic = 'force-dynamic'

export default async function TraceQuotingPage() {
  const jar = await cookies()
  if (!checkToken(jar.get(COOKIE)?.value)) return <Gate />
  return <iframe className="tq-frame" src="/api/tracequoting/app" title="Trace Quoting" />
}
