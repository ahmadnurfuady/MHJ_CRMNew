import { api } from '@/services/api'

/** Entity yang didukung backend (whitelist di ActivityLogController). */
export type ActivityLogEntity =
  | 'contacts'
  | 'companies'
  | 'm_projects'
  | 'tasks'
  | 'master_information_cards'

/** Action tersimpan di DB bisa single-letter (web lama) atau full-word (APK). */
export type ActivityLogRawAction = string

/** Action yang sudah dinormalkan untuk pemakaian FE. */
export type NormalizedAction = 'i' | 'u' | 'd' | 'r' | 'other'

export interface ActivityLogRow {
  id: number
  user_id: number | null
  user_name: string | null
  action: ActivityLogRawAction
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
 * Normalisasi nilai `action` dari berbagai konvensi (web single-letter vs APK
 * full-word) menjadi satu representasi.
 */
export function normalizeAction(action: string | null | undefined): NormalizedAction {
  const value = (action || '').toString().trim().toLowerCase()
  if (!value) return 'other'
  if (value === 'i' || value.startsWith('ins') || value.startsWith('crea') || value.startsWith('add')) return 'i'
  if (value === 'u' || value.startsWith('upd') || value.startsWith('edit') || value.startsWith('chg')) return 'u'
  if (value === 'd' || value.startsWith('del') || value.startsWith('rem')) return 'd'
  if (value === 'r' || value.startsWith('rea') || value.startsWith('view')) return 'r'
  return 'other'
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

// ---------------------------------------------------------------------------
// Mapping parent_type pada tabel dbvnotes ke activity entity.
// APK & SP sering menyimpan dengan nama berbeda, jadi kita normalisasi.
// ---------------------------------------------------------------------------

const ENTITY_TO_NOTE_PARENT: Record<ActivityLogEntity, string[]> = {
  contacts: ['contact', 'contacts', 'kontak'],
  companies: ['company', 'companies', 'rumah_sakit', 'hospital'],
  m_projects: ['project', 'projects', 'm_projects', 'deal', 'deals', 'peluang'],
  tasks: ['task', 'tasks', 'tugas'],
  master_information_cards: ['information_card', 'master_information_cards', 'card'],
}

// ---------------------------------------------------------------------------
// Related items (projek & tugas yang referensikan entity ini).
// ---------------------------------------------------------------------------

interface RelatedItemRow {
  kind: 'related_project' | 'related_task' | 'entity_created'
  ref_id: number
  title: string
  author_name: string | null
  created_at: string | null
  frmdvc: string | null
}

async function fetchRelatedItems(
  entity: ActivityLogEntity,
  entityId: number,
): Promise<RelatedItemRow[]> {
  if (entity === 'tasks' || entity === 'master_information_cards') return []
  try {
    const response = await api.getbydata<{ data: RelatedItemRow[] }>('/activity-logs/related', {
      entity_name: entity,
      entity_id: entityId,
    })
    return Array.isArray(response.data?.data) ? response.data.data : []
  } catch {
    return []
  }
}

/** Raw row dari `GET /api/history?noteable_type=&noteable_id=`. */
interface NoteRow {
  id: number
  parent_type?: string
  parent_id?: number
  notes?: string | null
  body?: string | null
  created_at?: string
  created_by?: number | null
  sender_name?: string | null
  frmdvc?: string | null
  attachment?: string | null
}

async function fetchNotesForParent(parentType: string, parentId: number): Promise<NoteRow[]> {
  try {
    const response = await api.getbydata<NoteRow[] | { data: NoteRow[] }>('/history', {
      noteable_type: parentType,
      noteable_id: parentId,
    })
    const payload = response.data as NoteRow[] | { data?: NoteRow[] } | null
    if (Array.isArray(payload)) return payload
    if (payload && Array.isArray(payload.data)) return payload.data
    return []
  } catch {
    return []
  }
}

/** Ambil notes untuk sebuah entity dengan mencoba semua alias parent_type. */
async function fetchAllNotes(entity: ActivityLogEntity, entityId: number): Promise<NoteRow[]> {
  const parents = ENTITY_TO_NOTE_PARENT[entity] ?? []
  const results = await Promise.all(parents.map((pt) => fetchNotesForParent(pt, entityId)))
  const seen = new Set<number>()
  const merged: NoteRow[] = []
  for (const list of results) {
    for (const row of list) {
      if (seen.has(row.id)) continue
      seen.add(row.id)
      merged.push(row)
    }
  }
  return merged
}

// ---------------------------------------------------------------------------
// Unified timeline item (activity log + note digabung dalam satu list).
// ---------------------------------------------------------------------------

export type TimelineItemKind =
  | 'activity'
  | 'note'
  | 'related_project'
  | 'related_task'
  | 'entity_created'

export interface TimelineItem {
  /** Composite key supaya aman kalau id antar sumber kebetulan sama. */
  key: string
  kind: TimelineItemKind
  type: NormalizedAction | 'note' | 'project' | 'task'
  title: string
  subtitle?: string
  authorName: string
  createdAt: string
  source: 'APK' | 'WEB' | null
}

/** Judul manusiawi berdasarkan entity + action untuk entri activity_logs. */
function buildActivityTitle(entity: ActivityLogEntity, action: NormalizedAction, details: ActivityLogDetails): string {
  const after = (details.after && typeof details.after === 'object' ? details.after : {}) as Record<string, unknown>
  const name = pickName(entity, after)

  const base: Record<ActivityLogEntity, { i: string; u: string; d: string; r: string }> = {
    contacts: {
      i: 'Kontak Didaftarkan di SiapCRM',
      u: 'Kontak Diperbarui',
      d: 'Kontak Dihapus',
      r: 'Kontak Dibuka',
    },
    companies: {
      i: 'Faskes Didaftarkan di SiapCRM',
      u: 'Data Faskes Diperbarui',
      d: 'Faskes Dihapus',
      r: 'Faskes Dibuka',
    },
    m_projects: {
      i: name ? `Peluang Proyek: ${name}` : 'Peluang Baru Dibuat',
      u: 'Peluang Diperbarui',
      d: 'Peluang Dihapus',
      r: 'Peluang Dibuka',
    },
    tasks: {
      i: name ? `Tugas Dibuat: ${name}` : 'Tugas Baru Dibuat',
      u: 'Tugas Diperbarui',
      d: 'Tugas Dihapus',
      r: 'Tugas Dibuka',
    },
    master_information_cards: {
      i: name ? `Kartu Informasi: ${name}` : 'Kartu Informasi Dibuat',
      u: 'Kartu Informasi Diperbarui',
      d: 'Kartu Informasi Dihapus',
      r: 'Kartu Informasi Dibuka',
    },
  }
  const bucket = base[entity]
  if (!bucket) return 'Aktivitas tercatat'
  if (action === 'other') return 'Aktivitas tercatat'
  return bucket[action] ?? 'Aktivitas tercatat'
}

/** Field "nama" per entity untuk ditempel ke judul. */
function pickName(entity: ActivityLogEntity, after: Record<string, unknown>): string {
  const candidate = (() => {
    switch (entity) {
      case 'contacts':
        return [after.first_name, after.last_name].filter(Boolean).join(' ')
      case 'companies':
        return after.company_name
      case 'm_projects':
        return after.projects_name
      case 'tasks':
        return after.task_subject || after.task_name
      case 'master_information_cards':
        return after.name || after.title
    }
  })()
  return typeof candidate === 'string' ? candidate.trim() : ''
}

/** Ambil badge sumber (APK/WEB) secara normal. */
function normalizeSource(frmdvc: string | null | undefined): 'APK' | 'WEB' | null {
  if (!frmdvc) return null
  const value = frmdvc.toString().trim().toUpperCase()
  if (value === 'APK' || value === 'MOBILE' || value === 'ANDROID' || value === 'IOS') return 'APK'
  if (value === 'WEB') return 'WEB'
  return null
}

function activityToTimelineItem(entity: ActivityLogEntity, row: ActivityLogRow): TimelineItem {
  const action = normalizeAction(row.action)
  const details = parseActivityDetails(row.details)
  return {
    key: `a-${row.id}`,
    kind: 'activity',
    type: action,
    title: buildActivityTitle(entity, action, details),
    authorName: row.user_name || 'Pengguna sistem',
    createdAt: row.created_at,
    source: normalizeSource(row.frmdvc),
  }
}

function noteToTimelineItem(row: NoteRow): TimelineItem {
  const body = (row.notes ?? row.body ?? '').toString().trim()
  const shortBody = body.length > 120 ? `${body.slice(0, 117)}…` : body
  return {
    key: `n-${row.id}`,
    kind: 'note',
    type: 'note',
    title: shortBody ? `Catatan: ${shortBody}` : 'Catatan',
    subtitle: body !== shortBody ? body : undefined,
    authorName: row.sender_name || 'Pengguna sistem',
    createdAt: row.created_at || '',
    source: normalizeSource(row.frmdvc),
  }
}

function relatedToTimelineItem(row: RelatedItemRow): TimelineItem {
  // Map kind → key prefix + display type.
  const spec = (() => {
    switch (row.kind) {
      case 'related_project':
        return { prefix: 'p', kind: 'related_project' as const, type: 'project' as const }
      case 'related_task':
        return { prefix: 't', kind: 'related_task' as const, type: 'task' as const }
      case 'entity_created':
        return { prefix: 'e', kind: 'entity_created' as const, type: 'i' as const }
    }
  })()

  return {
    key: `${spec.prefix}-${row.ref_id}`,
    kind: spec.kind,
    type: spec.type,
    title: row.title,
    authorName: row.author_name || 'Pengguna sistem',
    createdAt: row.created_at || '',
    source: normalizeSource(row.frmdvc),
  }
}

/**
 * Timeline final = activity_logs + notes (dbvnotes) + related items
 * (projek/tugas yang me-refer entity ini), diurut desc by created_at.
 */
export async function fetchUnifiedTimeline(
  entity: ActivityLogEntity,
  entityId: number,
  limit = 100,
): Promise<TimelineItem[]> {
  const [activities, notes, related] = await Promise.all([
    fetchActivityLogs(entity, entityId, limit),
    fetchAllNotes(entity, entityId),
    fetchRelatedItems(entity, entityId),
  ])

  const items: TimelineItem[] = []
  let hasInsertActivity = false
  for (const row of activities) {
    const normalized = normalizeAction(row.action)
    if (normalized === 'i') hasInsertActivity = true
    items.push(activityToTimelineItem(entity, row))
  }
  for (const row of notes) {
    items.push(noteToTimelineItem(row))
  }
  for (const row of related) {
    // Skip entry sintetik "entity_created" bila activity_logs sudah punya 'i'.
    if (row.kind === 'entity_created' && hasInsertActivity) continue
    items.push(relatedToTimelineItem(row))
  }

  items.sort((a, b) => {
    const timeA = new Date(a.createdAt).getTime() || 0
    const timeB = new Date(b.createdAt).getTime() || 0
    return timeB - timeA
  })
  return items
}

// ---------------------------------------------------------------------------
// Helpers tampilan.
// ---------------------------------------------------------------------------

export function timelineIcon(type: TimelineItem['type']): string {
  switch (type) {
    case 'i':
      return 'user-plus'
    case 'u':
      return 'edit-3'
    case 'd':
      return 'trash-2'
    case 'r':
      return 'eye'
    case 'note':
      return 'message-square'
    case 'project':
      return 'briefcase'
    case 'task':
      return 'check-square'
    default:
      return 'activity'
  }
}

export function timelineTone(type: TimelineItem['type']): 'success' | 'warning' | 'danger' | 'info' | 'muted' {
  switch (type) {
    case 'i':
      return 'success'
    case 'u':
      return 'warning'
    case 'd':
      return 'danger'
    case 'r':
      return 'muted'
    case 'note':
      return 'info'
    case 'project':
      return 'info'
    case 'task':
      return 'warning'
    default:
      return 'muted'
  }
}

/** Format relatif "Baru saja", "5 menit lalu", "2 jam lalu", "3 hari lalu". */
export function timeAgo(value: string): string {
  if (!value) return ''
  const date = new Date(value)
  const ts = date.getTime()
  if (!Number.isFinite(ts)) return ''
  const diffMs = Date.now() - ts
  if (diffMs < 0) return 'Baru saja'
  const sec = Math.floor(diffMs / 1000)
  if (sec < 45) return 'Baru saja'
  const min = Math.floor(sec / 60)
  if (min < 60) return `${min} menit lalu`
  const hour = Math.floor(min / 60)
  if (hour < 24) return `${hour} jam lalu`
  const day = Math.floor(hour / 24)
  if (day < 30) return `${day} hari lalu`
  const month = Math.floor(day / 30)
  if (month < 12) return `${month} bulan lalu`
  const year = Math.floor(day / 365)
  return `${year} tahun lalu`
}

export function formatTimelineDate(value: string): string {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}
