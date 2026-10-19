import { api } from '@/services/api'

/** Entity yang didukung backend (whitelist di ActivityLogController). */
export type ActivityLogEntity =
  | 'contacts'
  | 'companies'
  | 'm_projects'
  | 'tasks'
  | 'master_information_cards'

export type ActivityLogAction = 'i' | 'u' | 'd' | 'I' | 'U' | 'D'

export interface ActivityLogRow {
  id: number
  user_id: number | null
  user_name: string | null
  action: ActivityLogAction
  entity_name: string
  entity_id: number
  /** JSON string berisi `{ before: ..., after: ... }` dari controller CRUD. */
  details: string | null
  frmdvc: string | null
  created_at: string
}

interface ActivityLogResponse {
  data: ActivityLogRow[]
  total: number
}

/**
 * GET /api/activity-logs — timeline aktivitas untuk entity tertentu.
 * `limit` default 50, maksimum 200 (dibatasi di BE).
 */
export async function fetchActivityLogs(
  entity: ActivityLogEntity,
  entityId: number,
  limit = 50,
): Promise<ActivityLogRow[]> {
  const response = await api.getbydata<ActivityLogResponse>('/activity-logs', {
    entity_name: entity,
    entity_id: entityId,
    limit,
  })
  return response.data?.data ?? []
}

export interface ActivityLogDetails {
  before?: Record<string, unknown> | Record<string, unknown>[] | null
  after?: Record<string, unknown> | null
}

/** Parse kolom `details` yang berupa JSON string menjadi objek. */
export function parseActivityDetails(details: string | null): ActivityLogDetails {
  if (!details) return {}
  try {
    const parsed = JSON.parse(details) as unknown
    if (parsed && typeof parsed === 'object') return parsed as ActivityLogDetails
    return {}
  } catch {
    return {}
  }
}

const ACTION_LABEL: Record<string, string> = {
  i: 'Dibuat',
  u: 'Diperbarui',
  d: 'Dihapus',
}

export function actionLabel(action: ActivityLogAction): string {
  return ACTION_LABEL[action.toLowerCase()] ?? action
}

/** Icon vue-feather yang pas untuk tiap jenis aksi. */
export function actionIcon(action: ActivityLogAction): string {
  switch (action.toLowerCase()) {
    case 'i':
      return 'plus-circle'
    case 'u':
      return 'edit-3'
    case 'd':
      return 'trash-2'
    default:
      return 'activity'
  }
}

/** Kelas warna untuk badge aksi (konsisten dengan sweetalert palette). */
export function actionBadgeTone(action: ActivityLogAction): 'success' | 'warning' | 'danger' | 'muted' {
  switch (action.toLowerCase()) {
    case 'i':
      return 'success'
    case 'u':
      return 'warning'
    case 'd':
      return 'danger'
    default:
      return 'muted'
  }
}

// ---------------------------------------------------------------------------
// Field metadata per entity: label manusiawi + format nilai.
// ---------------------------------------------------------------------------

export type FieldFormatter = 'text' | 'currency' | 'number' | 'date' | 'datetime' | 'bool' | 'id'

interface FieldMeta {
  label: string
  format?: FieldFormatter
}

/**
 * Mapping field → { label, format }. Field yang TIDAK ada di map akan
 * disembunyikan dari timeline supaya tidak muncul data mentah yang membingungkan
 * (mis. kolom audit, koordinat, kode internal, dll).
 */
const FIELD_META: Record<ActivityLogEntity, Record<string, FieldMeta>> = {
  contacts: {
    first_name: { label: 'Nama Depan' },
    last_name: { label: 'Nama Belakang' },
    email: { label: 'Email' },
    phone: { label: 'Telepon' },
    jobtitle: { label: 'Jabatan' },
    department: { label: 'Departemen' },
    company_id: { label: 'Rumah Sakit', format: 'id' },
    address_1: { label: 'Alamat' },
    city: { label: 'Kota' },
    province: { label: 'Provinsi' },
    country: { label: 'Negara' },
    note: { label: 'Catatan' },
    tags: { label: 'Tag' },
  },
  companies: {
    company_name: { label: 'Nama Rumah Sakit' },
    phone: { label: 'Telepon' },
    email: { label: 'Email' },
    website: { label: 'Website' },
    industry: { label: 'Industri' },
    address_1: { label: 'Alamat' },
    city: { label: 'Kota' },
    province: { label: 'Provinsi' },
    country: { label: 'Negara' },
    postal_code: { label: 'Kode Pos' },
    note: { label: 'Catatan' },
    tags: { label: 'Tag' },
  },
  m_projects: {
    projects_name: { label: 'Nama Peluang' },
    company_id: { label: 'Rumah Sakit', format: 'id' },
    contact_id: { label: 'Kontak', format: 'id' },
    owner_id: { label: 'Pemilik', format: 'id' },
    stage_id: { label: 'Tahap', format: 'id' },
    currency: { label: 'Mata Uang' },
    amount_value: { label: 'Nilai', format: 'currency' },
    expected_close_date: { label: 'Target Tutup', format: 'date' },
    priority: { label: 'Prioritas' },
    competitor_id: { label: 'Kompetitor', format: 'id' },
    sumberdana_id: { label: 'Sumber Dana', format: 'id' },
    probability: { label: 'Probabilitas (%)', format: 'number' },
    division_code: { label: 'Divisi' },
    aktif: { label: 'Status Aktif', format: 'bool' },
  },
  tasks: {
    task_subject: { label: 'Judul Tugas' },
    task_description: { label: 'Deskripsi' },
    description: { label: 'Deskripsi' },
    task_type: { label: 'Tipe Tugas' },
    due_date: { label: 'Tenggat', format: 'date' },
    start_date: { label: 'Mulai', format: 'date' },
    end_date: { label: 'Selesai', format: 'date' },
    priority: { label: 'Prioritas' },
    status: { label: 'Status' },
    stage: { label: 'Tahap' },
    stage_id: { label: 'Tahap', format: 'id' },
    assigned_to: { label: 'Diteruskan ke', format: 'id' },
    project_id: { label: 'Peluang', format: 'id' },
    contact_id: { label: 'Kontak', format: 'id' },
    company_id: { label: 'Rumah Sakit', format: 'id' },
    photo_path: { label: 'Foto Lokasi' },
    note: { label: 'Catatan' },
  },
  master_information_cards: {
    name: { label: 'Nama' },
    description: { label: 'Deskripsi' },
    note: { label: 'Catatan' },
  },
}

/** Field yang di-skip saat menghitung diff — kolom audit / internal. */
const DIFF_SKIP = new Set([
  'choice',
  'id',
  'idold',
  'created_by',
  'updated_by',
  'updated_at',
  'created_at',
  'latitude',
  'longitude',
  'remote_ip',
])

/** Format nilai menjadi string yang enak dibaca sesuai `format`. */
function formatValue(value: unknown, format?: FieldFormatter): string {
  if (value === null || value === undefined || value === '') return '—'

  switch (format) {
    case 'currency': {
      const num = Number(value)
      if (Number.isNaN(num)) return String(value)
      return `Rp ${num.toLocaleString('id-ID', { maximumFractionDigits: 0 })}`
    }
    case 'number': {
      const num = Number(value)
      if (Number.isNaN(num)) return String(value)
      return num.toLocaleString('id-ID', { maximumFractionDigits: 2 })
    }
    case 'date': {
      const date = new Date(String(value))
      if (Number.isNaN(date.getTime())) return String(value)
      return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(date)
    }
    case 'datetime': {
      const date = new Date(String(value))
      if (Number.isNaN(date.getTime())) return String(value)
      return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date)
    }
    case 'bool': {
      const str = String(value).toLowerCase()
      if (['1', 'true', 'y', 'ya', 'yes'].includes(str)) return 'Ya'
      if (['0', 'false', 'n', 'no', 'tidak'].includes(str)) return 'Tidak'
      return String(value)
    }
    case 'id': {
      const num = Number(value)
      if (!Number.isNaN(num)) return `#${num}`
      return String(value)
    }
    default: {
      const text = typeof value === 'object' ? JSON.stringify(value) : String(value)
      return text.length > 120 ? `${text.slice(0, 117)}…` : text
    }
  }
}

export interface FieldDiff {
  field: string
  label: string
  format?: FieldFormatter
  before: unknown
  after: unknown
  beforeDisplay: string
  afterDisplay: string
}

/**
 * Normalisasi untuk membandingkan nilai. Angka berbentuk string "17100000.00"
 * dan "17100000" diperlakukan setara. Nilai kosong dinormalkan ke string kosong.
 */
function normalizeValue(value: unknown): string {
  if (value === null || value === undefined) return ''
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : ''

  const text = String(value).trim()
  if (text === '') return ''

  if (/^-?\d+(\.\d+)?$/.test(text)) {
    const num = Number(text)
    if (!Number.isNaN(num)) return String(num)
  }

  return text
}

/**
 * Bandingkan before/after per field. Hanya field yang punya meta di `FIELD_META`
 * untuk entity tersebut yang ditampilkan — menghindari data mentah yang tidak
 * dipahami user non-teknis (mis. kolom audit atau kode internal).
 */
export function computeDiff(
  entity: ActivityLogEntity,
  details: ActivityLogDetails,
): FieldDiff[] {
  const beforeRaw = Array.isArray(details.before) ? details.before[0] : details.before
  const after = details.after
  if (!after || typeof after !== 'object') return []

  const before = (beforeRaw && typeof beforeRaw === 'object' ? beforeRaw : {}) as Record<
    string,
    unknown
  >
  const meta = FIELD_META[entity] ?? {}

  const diffs: FieldDiff[] = []
  Object.entries(after).forEach(([key, value]) => {
    if (DIFF_SKIP.has(key)) return
    const fieldMeta = meta[key]
    if (!fieldMeta) return

    const previous = before[key]
    if (normalizeValue(previous) === normalizeValue(value)) return

    diffs.push({
      field: key,
      label: fieldMeta.label,
      format: fieldMeta.format,
      before: previous,
      after: value,
      beforeDisplay: formatValue(previous, fieldMeta.format),
      afterDisplay: formatValue(value, fieldMeta.format),
    })
  })
  return diffs
}

/**
 * Daftar nilai awal untuk aksi "Dibuat" — berisi field KEY saja (nama / judul /
 * nilai utama) supaya ringkas, tidak membanjiri UI dengan semua kolom.
 */
export interface CreationHighlight {
  label: string
  display: string
}

/** Field prioritas yang ditampilkan di ringkasan "Dibuat" per entity. */
const CREATION_HIGHLIGHT_FIELDS: Record<ActivityLogEntity, string[]> = {
  contacts: ['first_name', 'last_name', 'email', 'phone', 'company_id'],
  companies: ['company_name', 'city', 'province', 'phone'],
  m_projects: ['projects_name', 'company_id', 'amount_value', 'expected_close_date'],
  tasks: ['task_subject', 'due_date', 'assigned_to', 'priority', 'status'],
  master_information_cards: ['name'],
}

export function creationHighlights(
  entity: ActivityLogEntity,
  details: ActivityLogDetails,
): CreationHighlight[] {
  const after = details.after
  if (!after || typeof after !== 'object') return []
  const meta = FIELD_META[entity] ?? {}
  const fields = CREATION_HIGHLIGHT_FIELDS[entity] ?? []
  const payload = after as Record<string, unknown>

  const highlights: CreationHighlight[] = []
  fields.forEach((key) => {
    const value = payload[key]
    if (value === null || value === undefined || value === '') return
    const fieldMeta = meta[key]
    if (!fieldMeta) return
    highlights.push({
      label: fieldMeta.label,
      display: formatValue(value, fieldMeta.format),
    })
  })
  return highlights
}
