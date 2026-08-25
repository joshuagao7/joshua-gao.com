import { createHmac, timingSafeEqual } from 'crypto'

// /experiments/TraceQuoting is a private page behind one shared password. The cookie
// stores an HMAC of the password rather than the password itself, so a leaked cookie
// cannot be read back into the passphrase. Same scheme the site's first gated page
// used before it moved to accounts.
//
// No default password: if TRACEQUOTING_PASSWORD is unset, nothing gets in.

export const COOKIE = 'tracequoting_session'

const password = () => process.env.TRACEQUOTING_PASSWORD || ''
const secret = () => process.env.TRACEQUOTING_SECRET || `tracequoting:${password()}:v1`

export const configured = () => password().length > 0

export function sessionToken(): string {
  return createHmac('sha256', secret()).update(password()).digest('hex')
}

function equal(a: string, b: string): boolean {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

export function checkPassword(attempt: unknown): boolean {
  return configured() && typeof attempt === 'string' && equal(attempt, password())
}

export function checkToken(token: string | undefined): boolean {
  return configured() && !!token && equal(token, sessionToken())
}

/** The session cookie out of a raw Cookie header. */
export function tokenFrom(request: Request): string | undefined {
  const raw = request.headers.get('cookie') || ''
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === COOKIE) return decodeURIComponent(v.join('='))
  }
  return undefined
}

export function authed(request: Request): boolean {
  return checkToken(tokenFrom(request))
}
