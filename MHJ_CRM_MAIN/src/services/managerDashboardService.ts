import { api } from '@/services/api'
import type { ActivityItem, ActivityType } from '@/types/dashboard/manager'

/**
 * Row mentah dari `GET /api/dashboard/systemactivity` (controller:
 * `DashboardController@systemactivity`). Backend return seluruh baris
 * `activity_logs` tanpa filter atau limit, sehingga pembatasan jumlah &
 * normalisasi dilakukan di sisi FE.
 */
interface SystemActivityRow {
  id: number | string
  user_id: number | string | null
  action: string
  entity_name: string
  entity_id: number | string
  details: string | null
  created_at: string
}

interface SystemActivityResponse {
  data: SystemActivityRow[]
}

interface ActivityDetails {
  before?: unknown
  after?: Record<string, unknown> | null
}

function parseDetails(raw: string | null): ActivityDetails {
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw) as unknown
    if (parsed && typeof parsed === 'object') return parsed as ActivityDetails
    return {}
  } catch {
    return {}
  }
}

type MeaningfulAction = 'i' | 'u' | 'd'

function normalizeAction(raw: string): MeaningfulAction | null {
  const value = (raw || '').toString().trim().toLowerCase()
  if (!value) return null
  if (value === 'i' || value.startsWith('ins') || value.startsWith('crea') || value.startsWith('add')) return 'i'
  if (value === 'u' || value.startsWith('upd') || value.startsWith('edit')) return 'u'
  if (value === 'd' || value.startsWith('del') || value.startsWith('rem')) return 'd'
  return null
}

function pickString(after: Record<string, unknown>, keys: string[]): string {
  for (const key of keys) {
    const val = after[key]
    if (typeof val === 'string' && val.trim()) return val.trim()
  }
  return ''
}

interface MappedActivity {
  title: string
  subtitle: string
  type: ActivityType
  icon: string
}

function mapRow(row: SystemActivityRow, action: MeaningfulAction): MappedActivity | null {
  const details = parseDetails(row.details)
  const after = (details.after && typeof details.after === 'object'
    ? details.after
    : {}) as Record<string, unknown>

  switch (row.entity_name) {
    case 'tasks': {
      const name = pickString(after, ['task_name', 'task_subject'])
      const hospital = pickString(after, ['hospital_name', 'company_name'])
      if (!name && action === 'd') return null
      return {
        title: name || 'Tugas',
        subtitle: hospital || 'Tugas CRM',
        type: 'task',
        icon: 'check-square',
      }
    }
    case 'contacts': {
      const first = pickString(after, ['first_name'])
      const last = pickString(after, ['last_name'])
      const name = [first, last].filter(Boolean).join(' ')
      return {
        title: name
          ? action === 'i'
            ? `Kontak baru: ${name}`
            : `Kontak diperbarui: ${name}`
          : action === 'i'
            ? 'Kontak baru ditambahkan'
            : 'Kontak diperbarui',
        subtitle: pickString(after, ['company_name', 'email']) || 'Kontak CRM',
        type: 'call',
        icon: 'phone',
      }
    }
    case 'companies': {
      const name = pickString(after, ['company_name'])
      return {
        title: name
          ? action === 'i'
            ? `Faskes baru: ${name}`
            : `Faskes diperbarui: ${name}`
          : 'Faskes diperbarui',
        subtitle: pickString(after, ['tipemarketing', 'city']) || 'Faskes',
        type: 'meeting',
        icon: 'camera',
      }
    }
    case 'm_projects': {
      const name = pickString(after, ['projects_name'])
      return {
        title: name
          ? action === 'i'
            ? `Peluang baru: ${name}`
            : `Peluang diperbarui: ${name}`
          : 'Peluang CRM diperbarui',
        subtitle: pickString(after, ['division_code', 'currency']) || 'Peluang penjualan',
        type: 'note',
        icon: 'letter',
      }
    }
    case 'master_information_cards': {
      const title = pickString(after, ['title', 'name'])
      return {
        title: title || 'Kartu informasi',
        subtitle: 'Promo & informasi',
        type: 'email',
        icon: 'letter',
      }
    }
    default:
      return null
  }
}

/** Format relatif ala APK ("5 menit lalu", "3 jam lalu", "2 hari lalu"). */
function timeAgo(value: string): string {
  if (!value) return ''
  const date = new Date(value.replace(' ', 'T'))
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

/**
 * `GET /api/dashboard/systemactivity` → ActivityItem[] siap pakai di dashboard.
 * Filter action yang tidak informatif (`read`), lalu ambil `limit` entri
 * terbaru. Sumber data: `DashboardController@systemactivity`.
 */
export async function fetchRecentActivities(limit = 5): Promise<ActivityItem[]> {
  const response = await api.get<SystemActivityResponse>('/dashboard/systemactivity')
  const rows = response.data?.data ?? []

  const items: ActivityItem[] = []
  for (let i = rows.length - 1; i >= 0 && items.length < limit; i--) {
    const row = rows[i]
    const action = normalizeAction(row.action)
    if (!action) continue
    const mapped = mapRow(row, action)
    if (!mapped) continue
    items.push({
      id: row.id,
      type: mapped.type,
      icon: mapped.icon,
      title: mapped.title,
      subtitle: mapped.subtitle,
      time: timeAgo(row.created_at),
    })
  }
  return items
}

/**
 * Row mentah dari `GET /api/tasks` (controller: `TaskController@index`).
 * Hanya kolom yang dipakai untuk card Aktivitas Terbaru.
 */
interface TaskListRow {
  id: number | string
  task_name?: string | null
  task_subject?: string | null
  hospital_name?: string | null
  company_name?: string | null
  projects_name?: string | null
  project_name?: string | null
  status?: string | null
  status_name?: string | null
  due_date?: string | null
  created_at?: string | null
  updated_at?: string | null
}

interface TaskListResponse {
  tasks?: { data?: TaskListRow[] } | TaskListRow[]
  data?: TaskListRow[]
  list?: TaskListRow[]
}

function pickTaskRows(payload: TaskListResponse | TaskListRow[] | undefined): TaskListRow[] {
  if (!payload) return []
  if (Array.isArray(payload)) return payload
  const t = payload.tasks
  if (Array.isArray(t)) return t
  if (t && Array.isArray(t.data)) return t.data
  if (Array.isArray(payload.data)) return payload.data
  if (Array.isArray(payload.list)) return payload.list
  return []
}

function parseRowDate(row: TaskListRow): number {
  const raw = row.updated_at || row.created_at || row.due_date || ''
  if (!raw) return 0
  const ts = new Date(raw.replace(' ', 'T')).getTime()
  return Number.isFinite(ts) ? ts : 0
}

/**
 * `GET /api/tasks` → ActivityItem[] untuk card Aktivitas Terbaru.
 * Menampilkan tugas langsung (bukan baris activity_logs), diurutkan
 * berdasarkan tanggal pembaruan/pembuatan terbaru.
 */
export async function fetchRecentTasks(limit = 5): Promise<ActivityItem[]> {
  const response = await api.get<TaskListResponse>('/tasks')
  const rows = pickTaskRows(response.data)
  const sorted = [...rows].sort((a, b) => parseRowDate(b) - parseRowDate(a))

  const items: ActivityItem[] = []
  for (const row of sorted) {
    if (items.length >= limit) break
    const title = (row.task_name || row.task_subject || '').toString().trim()
    if (!title) continue
    const subtitle = (
      row.hospital_name ||
      row.company_name ||
      row.projects_name ||
      row.project_name ||
      row.status_name ||
      row.status ||
      'Tugas CRM'
    )
      .toString()
      .trim()
    const timeSource = row.updated_at || row.created_at || row.due_date || ''
    items.push({
      id: row.id,
      type: 'task',
      icon: 'check-square',
      title,
      subtitle,
      time: timeAgo(timeSource),
    })
  }
  return items
}
