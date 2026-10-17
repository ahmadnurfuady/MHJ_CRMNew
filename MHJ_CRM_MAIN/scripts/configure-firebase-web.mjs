import { createSign } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const FIREBASE_SCOPE = 'https://www.googleapis.com/auth/firebase'
const FIREBASE_API = 'https://firebase.googleapis.com/v1beta1'

function parseArgs(argv) {
  const args = {}
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (!value.startsWith('--')) continue
    const key = value.slice(2)
    const next = argv[index + 1]
    if (!next || next.startsWith('--')) {
      args[key] = true
    } else {
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
  const header = base64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = base64Url(
    JSON.stringify({
      iss: serviceAccount.client_email,
      scope: FIREBASE_SCOPE,
      aud: serviceAccount.token_uri || 'https://oauth2.googleapis.com/token',
      iat: issuedAt,
      exp: issuedAt + 3600,
    }),
  )
  const unsignedToken = `${header}.${claims}`
  const signer = createSign('RSA-SHA256')
  signer.update(unsignedToken)
  signer.end()
  const assertion = `${unsignedToken}.${signer.sign(serviceAccount.private_key, 'base64url')}`

  const response = await fetch(serviceAccount.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })

  if (!response.ok) {
    throw new Error(`Autentikasi service account gagal (${response.status}).`)
  }

  const payload = await response.json()
  return payload.access_token
}

async function firebaseRequest(path, accessToken, options = {}) {
  const response = await fetch(`${FIREBASE_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    const message = payload?.error?.message || `Firebase API gagal (${response.status}).`
    throw new Error(message)
  }
  return payload
}

async function waitForOperation(name, accessToken) {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const operation = await firebaseRequest(`/${name}`, accessToken)
    if (operation.done) {
      if (operation.error) throw new Error(operation.error.message || 'Pembuatan Web App gagal.')
      return operation.response
    }
    await new Promise((resolvePromise) => setTimeout(resolvePromise, 1000))
  }
  throw new Error('Pembuatan Firebase Web App melewati batas waktu.')
}

function setEnvValue(source, key, value) {
  const line = `${key}=${value || ''}`
  const pattern = new RegExp(`^${key}=.*$`, 'm')
  if (pattern.test(source)) return source.replace(pattern, line)
  return `${source.trimEnd()}\n${line}\n`
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (!args['service-account']) {
    throw new Error(
      'Gunakan --service-account <path-json> [--env <path-env>] [--create].',
    )
  }

  const serviceAccountPath = resolve(args['service-account'])
  const envPath = resolve(args.env || '.env')
  const serviceAccount = JSON.parse(await readFile(serviceAccountPath, 'utf8'))
  if (!serviceAccount.client_email || !serviceAccount.private_key || !serviceAccount.project_id) {
    throw new Error('File service account tidak valid.')
  }

  const accessToken = await getAccessToken(serviceAccount)
  const projectId = serviceAccount.project_id
  let list = await firebaseRequest(`/projects/${projectId}/webApps`, accessToken)
  let apps = (list.apps || []).filter((app) => app.state !== 'DELETED')

  if (apps.length === 0) {
    if (!args.create) {
      throw new Error('Firebase Web App belum ada. Jalankan lagi dengan opsi --create.')
    }

    const operation = await firebaseRequest(`/projects/${projectId}/webApps`, accessToken, {
      method: 'POST',
      body: JSON.stringify({ displayName: args.name || 'MHJ CRM Web' }),
    })
    await waitForOperation(operation.name, accessToken)
    list = await firebaseRequest(`/projects/${projectId}/webApps`, accessToken)
    apps = (list.apps || []).filter((app) => app.state !== 'DELETED')
  }

  const selectedApp =
    apps.find((app) => app.displayName === (args.name || 'MHJ CRM Web')) || apps[0]
  const config = await firebaseRequest(`/${selectedApp.name}/config`, accessToken)

  const values = {
    VITE_FIREBASE_API_KEY: config.apiKey,
    VITE_FIREBASE_AUTH_DOMAIN: config.authDomain,
    VITE_FIREBASE_PROJECT_ID: config.projectId,
    VITE_FIREBASE_STORAGE_BUCKET: config.storageBucket || '',
    VITE_FIREBASE_MESSAGING_SENDER_ID: config.messagingSenderId,
    VITE_FIREBASE_APP_ID: config.appId,
  }

  let envSource = await readFile(envPath, 'utf8').catch(() => '')
  for (const [key, value] of Object.entries(values)) {
    envSource = setEnvValue(envSource, key, value)
  }
  await writeFile(envPath, envSource, 'utf8')

  console.log(`Firebase Web App siap: ${selectedApp.displayName || selectedApp.appId}`)
  console.log(`Konfigurasi publik diperbarui di: ${envPath}`)
  console.log('Private key service account tidak disalin.')
}

main().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})
