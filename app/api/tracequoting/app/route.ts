import { authed } from '@/lib/tracequoting/auth'
import { decrypt } from '@/lib/tracequoting/crypto'
import files from '@/lib/tracequoting/data'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// The viewer itself. It fetches everything else through /api/tracequoting/data/,
// which data-base on <html> points it at.
export async function GET(request: Request) {
  if (!authed(request)) return new Response('Unauthorized', { status: 401 })
  const { enc } = await files['index.html']()
  const html = decrypt(enc)
    .toString('utf8')
    .replace(/<html\b/, '<html data-base="/api/tracequoting/data/"')
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
