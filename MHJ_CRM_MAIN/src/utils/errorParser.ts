/**
 * Satu pintu untuk mengubah error backend/browser menjadi pesan yang aman dan
 * mudah dipahami. Pesan teknis tetap disimpan pada `detail` untuk logging,
 * tetapi `message` aman ditampilkan kepada pengguna.
 */

export interface ParsedError {
  title: string
  message: string
  field?: string
  /** Hanya untuk logging/diagnostik. Jangan tampilkan nilai ini di UI. */
  detail?: string
}

const COLUMN_FRIENDLY_NAMES: Record<string, string> = {
  no_handphone: 'Nomor handphone',
  nohandphone: 'Nomor handphone',
  telephone: 'Nomor telepon',
  telephone_1: 'Nomor telepon utama',
  telephone_2: 'Nomor telepon tambahan',
  phone: 'Nomor telepon',
  firstname: 'Nama depan',
  first_name: 'Nama depan',
  lastname: 'Nama belakang',
  last_name: 'Nama belakang',
  name: 'Nama lengkap',
  company_name: 'Nama Faskes',
  email: 'Alamat email',
  password: 'Kata sandi',
  nik: 'NIK',
  role: 'Peran pengguna',
  stafflevel: 'Level staf',
  primaryteam: 'Tim utama',
  secondaryteam: 'Tim tambahan',
  tipemarketing: 'Tipe marketing',
  kodetipemarketing: 'Tipe marketing',
  cabang: 'Cabang',
  kodecabang: 'Cabang',
  devisi: 'Divisi',
  kodedevisi: 'Divisi',
  jabatan: 'Jabatan',
  idjabatan: 'Jabatan',
  company_id: 'Faskes',
  project_id: 'Peluang',
  address: 'Alamat',
  province: 'Provinsi',
  city: 'Kota/Kabupaten',
}

interface BackendErrorLike {
  code?: string
  name?: string
  message?: string
  response?: {
    status?: number
    config?: { url?: string }
    data?: unknown
  }
}

type UnknownRecord = Record<string, unknown>

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function getFriendlyColumnName(rawColumn: string): string {
  let clean = rawColumn.trim().replace(/^[\["'`]|[\]"'`]$/g, '')
  if (/^FK_/i.test(clean)) clean = clean.split('_').at(-1) ?? clean
  return COLUMN_FRIENDLY_NAMES[clean.toLowerCase()] || clean.replaceAll('_', ' ')
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const result = value.trim()
  return result || null
}

function extractResponseMessage(data: unknown, depth = 0): string | null {
  if (typeof data === 'string') return asNonEmptyString(data)
  if (!isRecord(data) || depth > 2) return null

  for (const key of ['message', 'msg', 'error', 'ErrorMessage', 'errorMessage']) {
    const value = data[key]
    const text = asNonEmptyString(value)
    if (text) return text
    if (Array.isArray(value)) {
      const messages = value.map(asNonEmptyString).filter((item): item is string => Boolean(item))
      if (messages.length) return messages.join(', ')
    }
  }

  for (const key of ['data', 'result', 'response']) {
    const nested = extractResponseMessage(data[key], depth + 1)
    if (nested) return nested
  }

  return null
}

function extractValidationError(data: unknown, depth = 0): { field?: string; message: string } | null {
  if (!isRecord(data) || depth > 2) return null
  if (!isRecord(data.errors)) {
    for (const key of ['data', 'result', 'response']) {
      const nested = extractValidationError(data[key], depth + 1)
      if (nested) return nested
    }
    return null
  }

  const firstEntry = Object.entries(data.errors)[0]
  if (!firstEntry) return null
  const [field, value] = firstEntry
  const rawMessage = Array.isArray(value) ? value.find((item) => typeof item === 'string') : value
  const message = asNonEmptyString(rawMessage)
  if (!message) return null
  return { field, message }
}

function translateValidationMessage(rawMessage: string, field?: string): string {
  const friendlyField = getFriendlyColumnName(field || 'Data')

  if (/required|wajib diisi|tidak boleh kosong/i.test(rawMessage)) {
    return `${friendlyField} wajib diisi.`
  }
  if (/valid email|email.*valid|format.*email/i.test(rawMessage)) {
    return 'Format alamat email belum benar. Contoh: nama@perusahaan.com.'
  }
  if (/already been taken|sudah digunakan|sudah terdaftar|duplicate/i.test(rawMessage)) {
    return `${friendlyField} sudah terdaftar. Gunakan data lain.`
  }
  if (/does not exist|not exist|tidak ditemukan|invalid selection|pilihan.*tidak valid/i.test(rawMessage)) {
    return `Pilihan ${friendlyField.toLowerCase()} tidak tersedia. Silakan pilih kembali.`
  }
  if (/must be a number|must be numeric|harus berupa angka|integer/i.test(rawMessage)) {
    return `${friendlyField} harus diisi dengan angka.`
  }
  if (/at least|min(?:imum)?\s*:?\s*\d+/i.test(rawMessage)) {
    return `${friendlyField} belum memenuhi batas minimum yang diperbolehkan.`
  }
  if (/may not be greater|max(?:imum)?\s*:?\s*\d+|terlalu panjang/i.test(rawMessage)) {
    return `${friendlyField} melebihi batas karakter yang diperbolehkan.`
  }

  return isTechnicalMessage(rawMessage)
    ? `${friendlyField} belum dapat diproses. Periksa kembali isian Anda.`
    : rawMessage
}

/** Mendeteksi pesan yang tidak aman/berguna bila ditampilkan langsung ke pengguna. */
export function isTechnicalMessage(message: string): boolean {
  return /(?:SQLSTATE|ODBC|PDOException|QueryException|Microsoft.+SQL Server|Stack trace|\bat .+\(.+?:\d+\)|\bselect\b.+\bfrom\b|\binsert\s+into\b|\bupdate\b.+\bset\b|\bdelete\s+from\b|\bexec(?:ute)?\s+(?:dbo\.)?sp_|stored procedure|invalid object name|unknown column|undefined table|syntax error|constraint\s+["'`\[]|\bORA-\d+|\bSQL:\s*|Illuminate[\\/]|vendor[\\/]|node_modules[\\/]|\.php:\d+|TypeError:|ReferenceError:|Cannot read propert|Call to undefined|Class .+ not found)/i.test(
    message,
  )
}

function parseErrorMessageString(rawMessage: string, defaultTitle: string): ParsedError {
  const raw = rawMessage.trim()

  if (/token_expired|token_invalid|token_absent|jwt.*expired|unauthenticated/i.test(raw)) {
    return {
      title: 'Sesi Telah Berakhir',
      message: 'Sesi login Anda telah berakhir. Silakan masuk kembali.',
      detail: raw,
    }
  }

  if (/timeout|timed out|ECONNABORTED/i.test(raw)) {
    return {
      title: 'Server Terlalu Lama Merespons',
      message: 'Proses memerlukan waktu terlalu lama. Periksa koneksi Anda, lalu coba lagi.',
      detail: raw,
    }
  }

  if (/Network Error|Failed to fetch|Load failed|ERR_(?:CONNECTION|INTERNET|NETWORK)/i.test(raw)) {
    return {
      title: 'Tidak Dapat Terhubung',
      message: 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda lalu coba lagi.',
      detail: raw,
    }
  }

  if (/NotAllowedError|permission denied|user denied permission/i.test(raw)) {
    return {
      title: 'Izin Belum Diberikan',
      message: 'Aplikasi belum mendapat izin yang dibutuhkan. Periksa izin pada browser lalu coba lagi.',
      detail: raw,
    }
  }

  const requiredMatch = raw.match(/The ([\w.]+) field is required/i)
  if (requiredMatch) {
    const friendlyName = getFriendlyColumnName(requiredMatch[1])
    return {
      title: 'Data Belum Lengkap',
      field: friendlyName,
      message: `${friendlyName} wajib diisi.`,
      detail: raw,
    }
  }

  const nullMatch = raw.match(/Cannot insert the value NULL into column ['"\[]?([^'"\],]+)|column ['"\[]?([^'"\],]+)['"\]]? (?:cannot be null|may not be null)/i)
  if (nullMatch) {
    const rawColumn = nullMatch[1] || nullMatch[2]
    const friendlyName = getFriendlyColumnName(rawColumn)
    return {
      title: 'Data Belum Lengkap',
      field: friendlyName,
      message: `${friendlyName} wajib diisi.`,
      detail: raw,
    }
  }

  if (/FOREIGN KEY|REFERENCE constraint/i.test(raw)) {
    const columnMatch = raw.match(/column ['"\[]?([^'"\],\s]+)|FOREIGN KEY constraint ["'\[]([^"'\]]+)/i)
    const friendlyName = getFriendlyColumnName(columnMatch?.[1] || columnMatch?.[2] || 'pilihan')
    return {
      title: 'Pilihan Tidak Tersedia',
      field: friendlyName,
      message: `Pilihan ${friendlyName.toLowerCase()} sudah tidak tersedia. Silakan pilih kembali.`,
      detail: raw,
    }
  }

  if (/Violation of UNIQUE KEY constraint|duplicate key|Duplicate entry|unique constraint/i.test(raw)) {
    const columnMatch = raw.match(/(?:column|key)\s+['"`\[]?([\w.-]+)/i)
    const friendlyName = columnMatch ? getFriendlyColumnName(columnMatch[1]) : 'Data yang sama'
    return {
      title: 'Data Sudah Terdaftar',
      message: `${friendlyName} sudah digunakan. Periksa data Anda lalu coba lagi.`,
      detail: raw,
    }
  }

  if (/String or binary data would be truncated|value too long|data too long/i.test(raw)) {
    return {
      title: 'Isian Terlalu Panjang',
      message: 'Salah satu isian melebihi batas karakter. Ringkas isian tersebut lalu coba lagi.',
      detail: raw,
    }
  }

  if (/deadlock|database is locked|lock wait timeout/i.test(raw)) {
    return {
      title: 'Data Sedang Diproses',
      message: 'Data sedang digunakan oleh proses lain. Tunggu sebentar lalu coba lagi.',
      detail: raw,
    }
  }

  if (isTechnicalMessage(raw)) {
    return {
      title: 'Sistem Sedang Mengalami Gangguan',
      message: 'Data belum dapat diproses karena layanan sedang mengalami gangguan. Silakan coba lagi beberapa saat lagi atau hubungi administrator.',
      detail: raw,
    }
  }

  return {
    title: defaultTitle,
    message: raw || 'Permintaan belum berhasil. Silakan coba lagi.',
    detail: raw || undefined,
  }
}

export function parseBackendError(error: unknown, defaultTitle = 'Permintaan Gagal'): ParsedError {
  if (!error) {
    return { title: defaultTitle, message: 'Permintaan belum berhasil. Silakan coba lagi.' }
  }

  if (typeof error === 'string') return parseErrorMessageString(error, defaultTitle)

  const err = error as BackendErrorLike
  const status = err.response?.status
  const responseData = err.response?.data
  const validationError = extractValidationError(responseData)

  if (validationError) {
    const friendlyField = validationError.field
      ? getFriendlyColumnName(validationError.field)
      : undefined
    return {
      title: 'Periksa Kembali Data Anda',
      field: friendlyField,
      message: translateValidationMessage(validationError.message, validationError.field),
      detail: validationError.message,
    }
  }

  if (status === 401) {
    return { title: 'Sesi Telah Berakhir', message: 'Sesi login Anda telah berakhir. Silakan masuk kembali.' }
  }
  if (status === 403) {
    return { title: 'Akses Ditolak', message: 'Anda tidak memiliki izin untuk melakukan tindakan ini.' }
  }
  if (status === 404) {
    return { title: 'Data Tidak Ditemukan', message: 'Data atau layanan yang diminta tidak ditemukan.' }
  }
  if (status === 405) {
    return { title: 'Tindakan Belum Tersedia', message: 'Tindakan ini belum tersedia. Hubungi administrator jika masalah berlanjut.' }
  }
  if (status === 408 || status === 504 || err.code === 'ECONNABORTED') {
    return {
      title: 'Server Terlalu Lama Merespons',
      message: 'Proses memerlukan waktu terlalu lama. Periksa koneksi Anda, lalu coba lagi.',
    }
  }
  if (status === 429) {
    return { title: 'Terlalu Banyak Permintaan', message: 'Tunggu sebentar sebelum mencoba kembali.' }
  }
  if (err.code === 'ERR_NETWORK' || err.code === 'ECONNREFUSED' || (!err.response && err.name === 'AxiosError')) {
    return {
      title: 'Tidak Dapat Terhubung',
      message: 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda lalu coba lagi.',
    }
  }

  const rawMessage = extractResponseMessage(responseData) || asNonEmptyString(err.message)
  if (rawMessage) {
    const parsed = parseErrorMessageString(rawMessage, defaultTitle)
    if (status !== undefined && status >= 500 && parsed.title === defaultTitle) {
      return {
        title: 'Sistem Sedang Mengalami Gangguan',
        message: 'Layanan sedang mengalami gangguan. Silakan coba lagi beberapa saat lagi.',
        detail: rawMessage,
      }
    }
    return parsed
  }

  if (status !== undefined && status >= 500) {
    return {
      title: 'Sistem Sedang Mengalami Gangguan',
      message: 'Layanan sedang mengalami gangguan. Silakan coba lagi beberapa saat lagi.',
    }
  }

  return { title: defaultTitle, message: 'Permintaan belum berhasil. Silakan coba lagi.' }
}

/** Shortcut untuk tempat UI yang hanya membutuhkan teks pesan. */
export function getUserErrorMessage(error: unknown, fallback = 'Permintaan gagal. Silakan coba lagi.'): string {
  return parseBackendError(error, fallback).message
}
