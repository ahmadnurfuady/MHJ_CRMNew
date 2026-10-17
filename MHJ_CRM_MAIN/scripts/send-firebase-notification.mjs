import { createSign } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

function parseArgs(argv) {
  const args = {}
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (!value.startsWith('--')) continue
    const key = value.slice(2)
    const next = argv[index + 1]
    if (!next || next.startsWith('--')) args[key] = true
    else {
      args[key] = next
      index += 1
    }
  }
  return args
}

function base64Url(value) {
  return Buffer.from(value).toString('base64url')
}

async function getAccessToken(serviceAccount) {
  const issuedAt = Math.floor(Date.now() / 1000)
  const tokenUri = serviceAccount.token_uri || 'https://oauth2.googleapis.com/token'
  const header = base64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = base64Url(
    JSON.stringify({
      iss: serviceAccount.client_email,
      scope: 'https://www.googleapis.com/auth/firebase.messaging',
      aud: tokenUri,
      iat: issuedAt,
      exp: issuedAt + 3600,
    }),
  )
  const unsignedToken = `${header}.${claims}`
  const signer = createSign('RSA-SHA256')
  signer.update(unsignedToken)
  signer.end()
  const assertion = `${unsignedToken}.${signer.sign(serviceAccount.private_key, 'base64url')}`

  const response = await fetch(tokenUri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(payload.error_description || 'Autentikasi Firebase gagal.')
  return payload.access_token
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (!args['service-account'] || !args.token) {
    throw new Error(
      'Gunakan --service-account <path-json> --token <fcm-token> [--title ...] [--body ...] [--url /path].',
    )
  }

  const serviceAccount = JSON.parse(
    await readFile(resolve(args['service-account']), 'utf8'),
  )
  if (!serviceAccount.client_email || !serviceAccount.private_key || !serviceAccount.project_id) {
    throw new Error('File service account tidak valid.')
  }

  const accessToken = await getAccessToken(serviceAccount)
  const message = {
    token: args.token,
    notification: {
      title: args.title || 'Tes MHJ CRM',
      body: args.body || 'Push notification Firebase berhasil terhubung.',
    },
    data: {
      title: args.title || 'Tes MHJ CRM',
      body: args.body || 'Push notification Firebase berhasil terhubung.',
      url: args.url || '/',
    },
    webpush: {
      notification: {
        icon: args.icon || '/favicon.ico',
      },
    },
  }

  const response = await fetch(
    `https://fcm.googleapis.com/v1/projects/${serviceAccount.project_id}/messages:send`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, validate_only: Boolean(args['dry-run']) }),
    },
  )
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(payload?.error?.message || `FCM gagal (${response.status}).`)

  console.log(args['dry-run'] ? 'Payload FCM valid.' : `Notifikasi terkirim: ${payload.name}`)
}

main().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})
