import { authed } from '@/lib/tracequoting/auth'
import { decrypt } from '@/lib/tracequoting/crypto'
import files from '@/lib/tracequoting/data'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// manifest.json and layers/<id>.json, decrypted per request. Only names the sync
// script wrote exist; anything else is a 404 whether or not the caller is signed in.
export async function GET(request: Request, ctx: { params: Promise<{ path: string[] }> }) {
  if (!authed(request)) return new Response('Unauthorized', { status: 401 })
  const { path } = await ctx.params
  const name = (path || []).join('/')
  const load = files[name]
  if (!load) return new Response('Not found', { status: 404 })
  const { enc } = await load()
  return new Response(new Uint8Array(decrypt(enc)), {
    headers: {
      'Content-Type': name.endsWith('.json') ? 'application/json' : 'application/octet-stream',
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
