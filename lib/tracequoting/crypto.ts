import { createDecipheriv } from 'crypto'

// The trace geometry is NDA material and this repository is public, so every data
// file is committed only as AES-256-GCM ciphertext (bin/tracequoting-sync.mjs) and
// decrypted per request behind the password gate. Blob layout, base64-encoded:
// 12-byte IV, 16-byte auth tag, ciphertext.

export function dataKey(): Buffer | null {
  const hex = process.env.TRACEQUOTING_DATA_KEY || ''
  if (!/^[0-9a-f]{64}$/i.test(hex)) return null
  return Buffer.from(hex, 'hex')
}

export function decrypt(b64: string): Buffer {
  const key = dataKey()
  if (!key) throw new Error('TRACEQUOTING_DATA_KEY is not set')
  const buf = Buffer.from(b64, 'base64')
  const iv = buf.subarray(0, 12)
  const tag = buf.subarray(12, 28)
  const ct = buf.subarray(28)
  const d = createDecipheriv('aes-256-gcm', key, iv)
  d.setAuthTag(tag)
  return Buffer.concat([d.update(ct), d.final()])
}
