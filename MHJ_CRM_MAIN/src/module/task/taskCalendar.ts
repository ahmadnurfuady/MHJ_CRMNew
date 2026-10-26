import type { TaskDetails } from '@/types/tasks'

export interface CalendarTask {
  id: string
  title: string
  scheduledAt: string | null
  dueDate: string | null
  status: string
  statusKey: string
  type: string
  typeKey: string
  category: string
  priority: string
  assigneeName: string
  projectName: string
  hospitalName: string
  product: string
  division: string
  description: string
  progress: number
  rawData: TaskDetails
}

export interface TaskAppointment {
  id: string
  text: string
  startDate: Date
  endDate: Date
  allDay: true
  statusKey: string
  taskData: CalendarTask
}

export function normalizeText(value: unknown, fallback = ''): string {
  if (value == null) return fallback
  const text = String(value).trim()
  return !text || text === '-' ? fallback : text
}

export function toResourceKey(value: unknown, fallback = 'unknown'): string {
  return (
    normalizeText(value, fallback)
      .toLocaleLowerCase('id-ID')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '') || fallback
  )
}

export function normalizeCalendarTask(task: TaskDetails): CalendarTask {
  const status = normalizeText(task.status, 'Unknown')
  const type = normalizeText(task.type, 'Unknown')

  return {
    id: String(task.id),
    title: normalizeText(task.title, 'Tugas tanpa judul'),
    scheduledAt: normalizeText(task.scheduledAt) || null,
    dueDate: normalizeText(task.dueDate || task.scheduledAt) || null,
    status,
    statusKey: toResourceKey(status),
    type,
    typeKey: toResourceKey(type),
    category: normalizeText(task.category, 'Tanpa kategori'),
    priority: normalizeText(task.priority, 'Normal'),
    assigneeName: normalizeText(task.owner, 'Belum ditugaskan'),
    projectName: normalizeText(task.projectName, 'Tanpa peluang'),
    hospitalName: normalizeText(task.hospital, 'Tanpa faskes'),
    product: task.unrelatedProduct
      ? 'Tidak terkait produk'
      : normalizeText(task.products?.join(', '), 'Tidak ada produk'),
    division: normalizeText(task.divisions?.join(', '), 'Tidak ada divisi'),
    description: normalizeText(task.description, 'Tidak ada deskripsi'),
    progress: Number.isFinite(Number(task.progress)) ? Number(task.progress) : 0,
    rawData: task,
  }
}

/** Parse YYYY-MM-DD sebagai tengah malam lokal agar tidak bergeser timezone. */
export function parseLocalDate(value: string | null | undefined): Date | null {
  if (!value) return null
  const [year, month, day] = String(value).slice(0, 10).split('-').map(Number)
  if (!year || !month || !day) return null

  const date = new Date(year, month - 1, day, 0, 0, 0, 0)
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day)
    return null

  return date
}

export function addLocalDays(date: Date, amount: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + amount)
  return result
}

export function mapTaskToAppointment(task: TaskDetails): TaskAppointment | null {
  const normalized = normalizeCalendarTask(task)
  const start = parseLocalDate(normalized.scheduledAt) || parseLocalDate(normalized.dueDate)
  const due = parseLocalDate(normalized.dueDate) || start
  if (!start || !due) return null

  const safeEnd = due < start ? start : due
  return {
    id: normalized.id,
    text: normalized.title,
    startDate: start,
    // DevExtreme memakai end eksklusif; tambah satu hari agar deadline inklusif.
    endDate: addLocalDays(safeEnd, 1),
    allDay: true,
    statusKey: normalized.statusKey,
    taskData: normalized,
  }
}
