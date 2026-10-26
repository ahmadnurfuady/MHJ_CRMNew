import type { TaskDetails } from '@/types/tasks'
import type { Projects } from '@/types/project'

/**
 * Entry generik untuk tampilan kalender yang menggabungkan Tugas dan Peluang.
 * `kind` membedakan sumber data agar UI bisa memakai warna/ikon berbeda.
 */
export interface CalendarEntry {
  id: string
  kind: 'task' | 'project'
  title: string
  subtitle: string
  statusLabel: string
  statusKey: string
  date: Date
  dateKey: string
  rawTask?: TaskDetails
  rawProject?: Projects
}

function normalizeText(value: unknown, fallback = ''): string {
  if (value == null) return fallback
  const text = String(value).trim()
  return !text || text === '-' ? fallback : text
}

function toResourceKey(value: unknown, fallback = 'unknown'): string {
  return (
    normalizeText(value, fallback)
      .toLocaleLowerCase('id-ID')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '') || fallback
  )
}

/** Parse YYYY-MM-DD (atau YYYY-MM-DD HH:mm:ss) jadi tengah malam lokal. */
export function parseLocalDate(value: string | null | undefined): Date | null {
  if (!value) return null
  const [year, month, day] = String(value).slice(0, 10).split('-').map(Number)
  if (!year || !month || !day) return null
  const date = new Date(year, month - 1, day, 0, 0, 0, 0)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  )
    return null
  return date
}

export function dateKey(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function mapTaskToCalendarEntry(task: TaskDetails): CalendarEntry | null {
  const date =
    parseLocalDate(task.scheduledAt) || parseLocalDate(task.dueDate)
  if (!date) return null

  const status = normalizeText(task.status, 'Unknown')
  return {
    id: `task-${task.id}`,
    kind: 'task',
    title: normalizeText(task.title, 'Tugas tanpa judul'),
    subtitle: normalizeText(task.hospital, 'Tanpa faskes'),
    statusLabel: status,
    statusKey: toResourceKey(status),
    date,
    dateKey: dateKey(date),
    rawTask: task,
  }
}

export function mapProjectToCalendarEntry(
  project: Projects,
): CalendarEntry | null {
  const date =
    parseLocalDate(project.expectedCloseDate) ||
    parseLocalDate(project.createdAt) ||
    parseLocalDate(project.date)
  if (!date) return null

  const stage = normalizeText(project.stageName, 'Tanpa tahap')
  return {
    id: `project-${project.id}`,
    kind: 'project',
    title: normalizeText(project.projectName, 'Peluang tanpa nama'),
    subtitle: normalizeText(project.companyName, 'Tanpa faskes'),
    statusLabel: stage,
    statusKey: toResourceKey(stage),
    date,
    dateKey: dateKey(date),
    rawProject: project,
  }
}

/** Warna aksen per kind + status, dipakai sebagai border/dot kartu entry. */
export function entryAccent(entry: CalendarEntry): string {
  if (entry.kind === 'project') {
    const key = entry.statusKey
    if (key.includes('won') || key.includes('menang') || key.includes('closed_won'))
      return 'var(--success, #10b981)'
    if (key.includes('lost') || key.includes('kalah') || key.includes('closed_lost'))
      return 'var(--danger, #ef4444)'
    if (key.includes('negotiat') || key.includes('nego'))
      return 'var(--warning, #f59e0b)'
    return 'var(--app-primary-dark, #116e96)'
  }

  const key = entry.statusKey
  if (key.includes('cancel') || key.includes('batal'))
    return 'var(--danger, #ef4444)'
  if (key.includes('progress') || key.includes('proses'))
    return 'var(--app-primary-dark, #116e96)'
  if (key.includes('complete') || key.includes('selesai'))
    return 'var(--app-primary-strong, #1488bb)'
  if (key.includes('pending') || key.includes('menunggu'))
    return 'var(--app-primary, #18a6e4)'
  return 'var(--text-muted, #64748b)'
}
