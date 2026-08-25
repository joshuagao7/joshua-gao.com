import { NextResponse } from 'next/server'
import { authed } from '@/lib/tracequoting/auth'
import * as comments from '@/lib/tracequoting/comments'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Shared review comments: GET lists, POST adds, PATCH marks complete / reopens,
// DELETE removes. All behind the same cookie as the viewer.
const NO_STORE = { 'Cache-Control': 'private, no-store' }
const unauth = () => new Response('Unauthorized', { status: 401 })
const notConfigured = () =>
  NextResponse.json({ error: 'Comments are not configured (SUPABASE_URL / SUPABASE_SERVICE_KEY).' }, { status: 503 })
const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : null)

async function body(request: Request): Promise<Record<string, unknown>> {
  try { return (await request.json()) ?? {} } catch { return {} }
}

export async function GET(request: Request) {
  if (!authed(request)) return unauth()
  if (!comments.configured()) return notConfigured()
  try {
    return NextResponse.json({ comments: await comments.list() }, { headers: NO_STORE })
  } catch (e) {
    console.error('tracequoting comments: list failed', e)
    return NextResponse.json({ error: 'Could not load comments.' }, { status: 502 })
  }
}

export async function POST(request: Request) {
  if (!authed(request)) return unauth()
  if (!comments.configured()) return notConfigured()
  const b = await body(request)
  const text = str(b.text, 2000)
  if (!text) return NextResponse.json({ error: 'empty comment' }, { status: 400 })
  try {
    const c = await comments.add({
      layer: str(b.layer, 120) || null, text, author: str(b.author, 80),
      x: num(b.x), y: num(b.y),
    })
    return NextResponse.json(c, { status: 201, headers: NO_STORE })
  } catch (e) {
    console.error('tracequoting comments: add failed', e)
    return NextResponse.json({ error: 'Could not save the comment.' }, { status: 502 })
  }
}

export async function PATCH(request: Request) {
  if (!authed(request)) return unauth()
  if (!comments.configured()) return notConfigured()
  const b = await body(request)
  const id = num(b.id)
  if (id == null) return NextResponse.json({ error: 'id required' }, { status: 400 })
  try {
    const c = await comments.setDone(id, !!b.done, str(b.author, 80))
    if (!c) return NextResponse.json({ error: 'no such comment' }, { status: 404 })
    return NextResponse.json(c, { headers: NO_STORE })
  } catch (e) {
    console.error('tracequoting comments: update failed', e)
    return NextResponse.json({ error: 'Could not update the comment.' }, { status: 502 })
  }
}

export async function DELETE(request: Request) {
  if (!authed(request)) return unauth()
  if (!comments.configured()) return notConfigured()
  const b = await body(request)
  const id = num(b.id)
  if (id == null) return NextResponse.json({ error: 'id required' }, { status: 400 })
  try {
    const ok = await comments.remove(id)
    return ok ? NextResponse.json({ ok: true }, { headers: NO_STORE })
              : NextResponse.json({ error: 'no such comment' }, { status: 404 })
  } catch (e) {
    console.error('tracequoting comments: delete failed', e)
    return NextResponse.json({ error: 'Could not delete the comment.' }, { status: 502 })
  }
}
