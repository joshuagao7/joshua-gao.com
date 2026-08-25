# Trace Quoting — `/experiments/TraceQuoting`

An unlisted, password-gated copy of the Force Platform trace viewer
(`~/dev/Hardware/traces/viewer`), for sharing the Rev 2.2 layer set with people quoting
the print and cut work.

## How it is protected

- **Password gate.** `TRACEQUOTING_PASSWORD` (Vercel env). The cookie is an HMAC of the
  password, not the password. No default: unset means nobody gets in.
- **Encrypted at rest.** This repository is public. Every data file — the viewer HTML,
  the manifest, the nine layer files — is committed only as AES-256-GCM ciphertext under
  `lib/tracequoting/data/`, keyed by `TRACEQUOTING_DATA_KEY` (Vercel env, 64 hex chars),
  and decrypted per request behind the gate. Plaintext geometry never enters git.
- **Unlisted.** `robots: noindex`, `X-Robots-Tag` on every response, no inbound links.

## Updating the viewer or the layers

```sh
# in ~/dev/Hardware/traces: regenerate, then
node bin/tracequoting-sync.mjs            # reads ../Hardware/traces/viewer by default
git add lib/tracequoting/data && git commit -m "TraceQuoting: sync" && git push
```

The sync takes only layers that `tools/export_rev.py` stamped with a `stack` position,
inlines `dxf.js` into the viewer, and rewrites `lib/tracequoting/data/` from scratch.

## Downloads

The hosted viewer writes DXFs in the browser (`dxf.js`, generated from an ezdxf R2000
template by `tools/make_dxfjs.py`), since there is no Python on Vercel. Its output was
checked against the ezdxf-built shipped files: same layers, colours, entity counts and
coordinates to 0.000000 mm.

## Routes

| | |
|---|---|
| `GET /experiments/TraceQuoting` | gate, or the viewer in a full-window frame |
| `POST /api/tracequoting/auth` | `{password}` → session cookie (30 days); `DELETE` clears it |
| `GET /api/tracequoting/app` | the viewer HTML (cookie required) |
| `GET /api/tracequoting/data/manifest.json`, `…/layers/<id>.json` | decrypted data (cookie required) |
