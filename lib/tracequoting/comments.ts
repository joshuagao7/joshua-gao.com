// Review comments for /experiments/TraceQuoting, stored in Supabase (Postgres) through
// PostgREST with the service-role key. The table has row-level security enabled and no
// policies, so only this server-side code -- behind the password gate -- can touch it.
// Schema: lib/tracequoting/comments.sql. Same record shape the local viewer uses.

export type Comment = {
  id: number
  layer: string | null
  text: string
  author: string
  x: number | null
  y: number | null
  created: string
  done: boolean
  completed: string | null
  completedBy: string | null
}

const TABLE = 'tracequoting_comments'

export function configured(): boolean {
  return !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY)
}

async function rest(path: string, init: RequestInit = {}): Promise<unknown> {
  const url = `${process.env.SUPABASE_URL}/rest/v1/${path}`
  const key = process.env.SUPABASE_SERVICE_KEY || ''
  const res = await fetch(url, {
    ...init,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(init.headers || {}),
    },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`supabase ${res.status}: ${(await res.text()).slice(0, 200)}`)
  const text = await res.text()
  return text ? JSON.parse(text) : null
}

type Row = {
  id: number; layer: string | null; text: string; author: string | null
  x: number | null; y: number | null; created: string; done: boolean
  completed: string | null; completed_by: string | null
}

const fromRow = (r: Row): Comment => ({
  id: r.id, layer: r.layer, text: r.text, author: r.author || '',
  x: r.x, y: r.y, created: r.created, done: !!r.done,
  completed: r.completed, completedBy: r.completed_by,
})

export async function list(): Promise<Comment[]> {
  const rows = (await rest(`${TABLE}?select=*&order=id.asc`)) as Row[]
  return rows.map(fromRow)
}

export async function add(c: { layer: string | null; text: string; author: string; x: number | null; y: number | null }): Promise<Comment> {
  const rows = (await rest(TABLE, { method: 'POST', body: JSON.stringify([c]) })) as Row[]
  return fromRow(rows[0])
}

export async function setDone(id: number, done: boolean, author: string): Promise<Comment | null> {
  const patch = done
    ? { done: true, completed: new Date().toISOString(), completed_by: author || null }
    : { done: false, completed: null, completed_by: null }
  const rows = (await rest(`${TABLE}?id=eq.${id}`, { method: 'PATCH', body: JSON.stringify(patch) })) as Row[]
  return rows.length ? fromRow(rows[0]) : null
}

export async function remove(id: number): Promise<boolean> {
  const rows = (await rest(`${TABLE}?id=eq.${id}`, { method: 'DELETE' })) as Row[]
  return rows.length > 0
}
