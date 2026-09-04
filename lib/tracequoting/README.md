# Trace Quoting — `/experiments/TraceQuoting`

An unlisted, password-gated copy of the Force Platform trace viewer
(`~/dev/Hardware/traces/viewer`), for sharing the Rev 2.2 layer set with people quoting
the print and cut work.

## How it is protected

- **Password gate.** `TRACEQUOTING_PASSWORD` (Vercel env). The cookie is an HMAC of the
  password, not the password. No default: unset means nobody gets in.
- **Encrypted at rest.** This repository is public. Every data file — the viewer HTML,
  the manifest, the layer files, the webbed outlines — is committed only as AES-256-GCM ciphertext under
  `lib/tracequoting/data/`, keyed by `TRACEQUOTING_DATA_KEY` (Vercel env, 64 hex chars),
  and decrypted per request behind the gate. Plaintext geometry never enters git.
- **Unlisted.** `robots: noindex`, `X-Robots-Tag` on every response, no inbound links.

## Updating the viewer or the layers

```sh
# in ~/dev/Hardware/traces: regenerate, then
node bin/tracequoting-sync.mjs            # reads ../Hardware/traces/viewer by default
git add lib/tracequoting/data && git commit -m "TraceQuoting: sync" && git push
```

The sync takes the layers that `tools/export_rev.py` stamped with a `stack` position,
plus the three day-one originals (Drawing Assembly, Drawing Assembly-2, Force Platform —
Ground Mylar and Traces) for the viewer's **Original designs** dropdown at the bottom of
the layer list, plus the swapped outlines (`swap/<id>.<keys>.json`: the whole part as a
part-changing switch — **Webbing**, **Ground tab up** — or a combination of them leaves it,
what Download swaps in for the part when that combination is on), inlines `dxf.js` into
the viewer, and rewrites `lib/tracequoting/data/` from scratch.

## Downloads

The hosted viewer writes DXFs in the browser (`dxf.js`, generated from an ezdxf R2000
template by `tools/make_dxfjs.py`), since there is no Python on Vercel. Its output was
checked against the ezdxf-built shipped files: same layers, colours, entity counts and
coordinates to 0.000000 mm. With **Webbing** on, a conductive layer's file is written from
its webbed outline instead of the part, named `… [webbed].dxf`, and carries a `WEBBING`
comment: it ties the traces into one sheet for handling and shorts them all together, so it
is never a print file. With **Ground tab up** on, sheet 2's ground and unified cut are
written from their extended outlines — the ground's two connector fingers carried past the
column tips and joined by a bar, the cut following — named `… [ground tab up].dxf` with a
`GROUND TAB UP` comment; the bar is snipped off at the end.

## Review comments

The viewer's **Comments** panel is shared by everyone behind the gate: a comment names a
layer, can carry a pin on the canvas (x, y in that layer's own mm frame), and records who
wrote it and when; ticking it records who completed it and when. Stored in Supabase
(`public.tracequoting_comments`, schema in `comments.sql`, RLS on with no policies) and
reached only through `/api/tracequoting/comments` with the service-role key, so nothing is
exposed client-side. Env: `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`. Locally the viewer keeps
the same records in `viewer/comments.json` via `serve.py`.

## Routes

| | |
|---|---|
| `GET /experiments/TraceQuoting` | gate, or the viewer in a full-window frame |
| `POST /api/tracequoting/auth` | `{password}` → session cookie (30 days); `DELETE` clears it |
| `GET /api/tracequoting/app` | the viewer HTML (cookie required) |
| `GET /api/tracequoting/data/manifest.json`, `…/layers/<id>.json` | decrypted data (cookie required) |
| `GET/POST/PATCH/DELETE /api/tracequoting/comments` | shared review comments (cookie required) |
