import { api } from '@/services/api'
import { fetchDashboardBundle, type DashboardTaskRow } from '@/services/dashboardService'
import type {
  ActivityAction,
  ActivityItem,
  ActivityLogItem,
  ActivityType,
} from '@/types/dashboard/manager'

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
  before?: Record<string, unknown> | Record<string, unknown>[] | null
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

function normalizeAction(raw: string): ActivityAction | null {
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

function entityLabel(entityName: string): string {
  const labels: Record<string, string> = {
    tasks: 'Tugas',
    contacts: 'Kontak',
    companies: 'Faskes',
    m_projects: 'Peluang',
    master_information_cards: 'Promo & informasi',
  }
  return labels[entityName] || entityName.replaceAll('_', ' ')
}

function actionLabel(action: ActivityAction): string {
  if (action === 'i') return 'ditambahkan'
  if (action === 'u') return 'diperbarui'
  return 'dihapus'
}

function mapRow(row: SystemActivityRow, action: ActivityAction): MappedActivity {
  const details = parseDetails(row.details)
  const before = Array.isArray(details.before) ? details.before[0] : details.before
  const after = (details.after && typeof details.after === 'object' ? details.after : before) || {}

  switch (row.entity_name) {
    case 'tasks': {
      const name = pickString(after, ['task_name', 'task_subject'])
      const hospital = pickString(after, ['hospital_name', 'company_name'])
      return {
        title: name || `Tugas ${actionLabel(action)}`,
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
      return {
        title: `${entityLabel(row.entity_name)} ${actionLabel(action)}`,
        subtitle: `Data #${row.entity_id}`,
        type: 'note',
        icon: 'document-text',
      }
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
  return (await fetchSystemActivities()).slice(0, limit)
}

/** Seluruh activity log sistem, diurutkan dari aktivitas terbaru. */
export async function fetchSystemActivities(): Promise<ActivityLogItem[]> {
  const response = await api.get<SystemActivityResponse>('/dashboard/systemactivity')
  const rows = response.data?.data ?? []

  const items: ActivityLogItem[] = []
  for (const row of rows) {
    const action = normalizeAction(row.action)
    if (!action) continue
    const mapped = mapRow(row, action)
    items.push({
      id: row.id,
      type: mapped.type,
      icon: mapped.icon,
      title: mapped.title,
      subtitle: mapped.subtitle,
      time: timeAgo(row.created_at),
      action,
      entityName: row.entity_name,
      createdAt: row.created_at,
    })
  }
  return items.sort((a, b) => {
    const timeA = new Date(a.createdAt.replace(' ', 'T')).getTime() || 0
    const timeB = new Date(b.createdAt.replace(' ', 'T')).getTime() || 0
    return timeB - timeA
  })
}

/**
 * Row mentah dari bagian `tasks.tasks.data` pada `GET /api/dashboard`.
 * Hanya kolom yang dipakai untuk card Aktivitas Terbaru.
 */
type TaskListRow = DashboardTaskRow

function parseRowDate(row: TaskListRow): number {
  const raw = row.updated_at || row.created_at || row.due_date || ''
  if (!raw) return 0
  const ts = new Date(raw.replace(' ', 'T')).getTime()
  return Number.isFinite(ts) ? ts : 0
}

/**
 * Bagian tasks `GET /api/dashboard` → ActivityItem[] untuk card Aktivitas Terbaru.
 * Menampilkan tugas langsung (bukan baris activity_logs), diurutkan
 * berdasarkan tanggal pembaruan/pembuatan terbaru.
 */
export async function fetchRecentTasks(limit = 5): Promise<ActivityItem[]> {
  const rows = (await fetchDashboardBundle({ limit: 100, page: 1 })).tasks
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
