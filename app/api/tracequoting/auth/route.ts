import { NextResponse } from 'next/server'
import { COOKIE, checkPassword, configured, sessionToken } from '@/lib/tracequoting/auth'

export const runtime = 'nodejs'

// A fixed delay on every attempt: not a rate limiter, just enough that guessing over
// the network is tedious rather than instant.
const DELAY_MS = 400

export async function POST(request: Request) {
  let password: unknown
  try {
    password = (await request.json())?.password
  } catch {
    /* validated below */
  }
  await new Promise((r) => setTimeout(r, DELAY_MS))
  if (!configured()) {
    return NextResponse.json({ ok: false, error: 'Not configured.' }, { status: 503 })
  }
  if (!checkPassword(password)) {
    return NextResponse.json({ ok: false, error: 'That is not it.' }, { status: 401 })
  }
  const response = NextResponse.json({ ok: true })
  response.cookies.set(COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })
  return response
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true })
  response.cookies.delete(COOKIE)
  return response
}
