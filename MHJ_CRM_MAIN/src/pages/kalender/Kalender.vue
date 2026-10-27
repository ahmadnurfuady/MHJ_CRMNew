<template>
  <div class="container-fluid kalender-page">
    <div class="row">
      <div class="col-12">
        <div class="card mb-0">
          <div class="card-header kalender-header">
            <div class="kalender-title-group">
              <h5 class="mb-1">Kalender</h5>
              <p class="kalender-subtitle mb-0">
        Gabungan jadwal tugas dan peluang. Klik item untuk membuka detailnya.
              </p>
            </div>
          </div>

          <div class="kalender-toolbar">
            <div class="kalender-period-filter" aria-label="Filter periode kalender">
              <span class="kalender-toolbar-label">Periode</span>
              <div class="kalender-period-options" role="group">
                <button
                  v-for="option in periodOptions"
                  :key="option.value"
                  class="kalender-period-button"
                  :class="{ 'kalender-period-button--active': periodFilter === option.value }"
                  type="button"
                  :aria-pressed="periodFilter === option.value"
                  @click="periodFilter = option.value"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>

            <div class="kalender-export-actions">
              <span class="kalender-export-hint">Ekspor mengikuti filter aktif</span>
              <button
                class="btn btn-outline-primary kalender-export-button"
                type="button"
                :disabled="!filteredEntries.length"
                @click="exportEntries('csv')"
              >
                <i class="fa-solid fa-file-csv export-format-icon" aria-hidden="true"></i>
                CSV
              </button>
              <button
                class="btn btn-outline-success kalender-export-button"
                type="button"
                :disabled="!filteredEntries.length"
                @click="exportEntries('excel')"
              >
                <i class="fa-solid fa-file-excel export-format-icon" aria-hidden="true"></i>
                Excel
              </button>
            </div>
          </div>

          <UnifiedCalendarView
            :entries="filteredEntries"
            :load-error="loadError"
            :focus-range="focusRange"
            @open-entry="handleOpenEntry"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import UnifiedCalendarView from '@/module/calendar/UnifiedCalendarView.vue'
import {
  mapProjectToCalendarEntry,
  mapTaskToCalendarEntry,
  type CalendarEntry,
} from '@/module/calendar/calendarEntry'
import { useTask } from '@/store/task'
import { useProjectStore } from '@/store/project'
import { routes } from '@/router/routes'

type PeriodFilter = 'all' | 'daily' | 'weekly' | 'monthly' | 'yearly'
type ExportFormat = 'csv' | 'excel'

const router = useRouter()
const taskStore = useTask()
const projectStore = useProjectStore()

// Hanya ambil state yang kita butuhkan. error state di store global sengaja
// TIDAK di-expose ke sini — fetchTasks() memicu resolveTaskProjects() yang
// memanggil projectStore.fetchProjectById() untuk tiap project_id yang hilang;
// panggilan itu bisa gagal (ID project di task tidak ada) dan mencemari
// projectStore.error, padahal fetchProjects utama kita sukses. Kalender hanya
// peduli apakah SELURUH loadData() gagal (lihat loadData di bawah).
const { currentTask } = storeToRefs(taskStore)
const { items: projectItems } = storeToRefs(projectStore)

const loadError = ref<string | null>(null)
const periodFilter = ref<PeriodFilter>('all')

const periodOptions: Array<{ value: PeriodFilter; label: string }> = [
  { value: 'all', label: 'Semua' },
  { value: 'daily', label: 'Harian' },
  { value: 'weekly', label: 'Mingguan' },
  { value: 'monthly', label: 'Bulanan' },
  { value: 'yearly', label: 'Tahunan' },
]

function showLoadError(message: string) {
  return Swal.fire({
    icon: 'error',
    text: message,
    confirmButtonColor: 'var(--theme-default)',
  })
}

const calendarEntries = computed<CalendarEntry[]>(() => {
  const tasks = currentTask.value?.data ?? []
  const projects = projectItems.value ?? []

  const taskEntries = tasks
    .map(mapTaskToCalendarEntry)
    .filter((entry): entry is CalendarEntry => Boolean(entry))

  const projectEntries = projects
    .map(mapProjectToCalendarEntry)
    .filter((entry): entry is CalendarEntry => Boolean(entry))

  return [...taskEntries, ...projectEntries]
})

function localDayStart(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function activePeriodRange(filter: PeriodFilter) {
  if (filter === 'all') return null

  const now = new Date()
  const start = localDayStart(now)
  const end = new Date(start)

  if (filter === 'daily') {
    end.setDate(end.getDate() + 1)
  } else if (filter === 'weekly') {
    // Minggu dihitung per 7 tanggal dari tanggal 1 bulan berjalan:
    // minggu 1 = 1–7, minggu 2 = 8–14, minggu 3 = 15–21, minggu 4 = 22–28,
    // minggu 5 = 29 s/d akhir bulan. Jadi tidak ada minggu yang menyeberang bulan.
    const dayOfMonth = start.getDate()
    const weekIndex = Math.floor((dayOfMonth - 1) / 7)
    const weekStartDay = weekIndex * 7 + 1
    start.setDate(weekStartDay)
    end.setFullYear(start.getFullYear(), start.getMonth(), weekStartDay + 7)
    // Minggu terakhir (29+) di-clamp ke tanggal 1 bulan berikutnya supaya
    // tidak bocor ke bulan depan.
    const monthEnd = new Date(start.getFullYear(), start.getMonth() + 1, 1)
    if (end.getTime() > monthEnd.getTime()) {
      end.setTime(monthEnd.getTime())
    }
  } else if (filter === 'monthly') {
    start.setDate(1)
    end.setFullYear(start.getFullYear(), start.getMonth() + 1, 1)
  } else {
    start.setMonth(0, 1)
    end.setFullYear(start.getFullYear() + 1, 0, 1)
  }

  return { start, end }
}

const filteredEntries = computed<CalendarEntry[]>(() => {
  const range = activePeriodRange(periodFilter.value)
  if (!range) return calendarEntries.value

  return calendarEntries.value.filter((entry) => {
    const t = entry.date.getTime()
    return t >= range.start.getTime() && t < range.end.getTime()
  })
})

// Hanya mode harian & mingguan yang mengganti grid bulanan dengan strip
// focus range. Bulanan & tahunan tetap pakai grid bulanan (hanya entries
// yang di-filter).
const focusRange = computed(() => {
  if (periodFilter.value !== 'daily' && periodFilter.value !== 'weekly')
    return null
  return activePeriodRange(periodFilter.value)
})

async function loadData() {
  loadError.value = null

  const [taskResult, projectResult] = await Promise.allSettled([
    taskStore.fetchTasks(),
    projectStore.fetchProjects({ page: 1, per_page: 1000 }),
  ])

  const taskOk =
    taskResult.status === 'fulfilled' &&
    (currentTask.value?.data?.length ?? 0) >= 0
  const projectOk =
    projectResult.status === 'fulfilled' &&
    (projectItems.value?.length ?? 0) >= 0

  // Hanya tampilkan error kalau DUA-DUANYA gagal total. Kalau cuma salah satu,
  // tampilkan data yang berhasil dan beri notifikasi error yang konsisten dengan
  // halaman Peluang, Kontak, dan Faskes.
  if (!taskOk && !projectOk) {
    loadError.value = 'Gagal memuat data tugas dan peluang.'
    void showLoadError(loadError.value)
    return
  }

  const failed: string[] = []
  if (!taskOk) failed.push('tugas')
  if (!projectOk) failed.push('peluang')
  if (failed.length === 1) {
    void showLoadError(
      `Data ${failed[0]} tidak dapat dimuat. Kalender menampilkan sebagian data saja.`,
    )
  }
}

function handleOpenEntry(entry: CalendarEntry) {
  if (entry.kind === 'task' && entry.rawTask) {
    void router.push({
      path: routes.App.Task,
      query: { detail: String(entry.rawTask.id) },
    })
    return
  }

  if (entry.kind === 'project' && entry.rawProject) {
    void router.push({
      path: routes.Project.ProjectDetailsV2,
      query: { id: String(entry.rawProject.id) },
    })
  }
}

// ───── Export ─────────────────────────────────────────────────────────
function formatExportDate(date: Date) {
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)
}

const exportColumns: Array<{
  label: string
  value: (entry: CalendarEntry) => string | number
}> = [
  { label: 'Jenis', value: (e) => (e.kind === 'task' ? 'Tugas' : 'Peluang') },
  { label: 'ID', value: (e) => e.rawTask?.id ?? e.rawProject?.id ?? '' },
  { label: 'Judul', value: (e) => e.title },
  { label: 'Status / Tahap', value: (e) => e.statusLabel },
  { label: 'Tanggal', value: (e) => formatExportDate(e.date) },
  { label: 'Faskes', value: (e) => e.subtitle },
  {
    label: 'Owner',
    value: (e) =>
      e.rawTask?.owner || e.rawProject?.ownerName || '',
  },
  {
    label: 'Peluang Terkait',
    value: (e) => e.rawTask?.projectName || '',
  },
  {
    label: 'Divisi',
    value: (e) =>
      e.rawTask?.divisions?.join(', ') || e.rawProject?.divisionCode || '',
  },
]

function exportRows() {
  return [
    exportColumns.map((column) => column.label),
    ...filteredEntries.value.map((entry) =>
      exportColumns.map((column) => String(column.value(entry) ?? '')),
    ),
  ]
}

function safeCsvValue(value: string) {
  const spreadsheetSafe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value
  return `"${spreadsheetSafe.replaceAll('"', '""')}"`
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function downloadFile(content: string, mimeType: string, extension: string) {
  const stamp = [
    new Date().getFullYear(),
    String(new Date().getMonth() + 1).padStart(2, '0'),
    String(new Date().getDate()).padStart(2, '0'),
  ].join('-')
  const filename = `kalender-${periodFilter.value}-${stamp}.${extension}`
  const url = URL.createObjectURL(new Blob([content], { type: mimeType }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

function exportEntries(format: ExportFormat) {
  if (!filteredEntries.value.length) return
  const rows = exportRows()

  if (format === 'csv') {
    const csv = `﻿${rows.map((row) => row.map(safeCsvValue).join(',')).join('\r\n')}`
    downloadFile(csv, 'text/csv;charset=utf-8', 'csv')
    return
  }

  const tableRows = rows
    .map(
      (row, rowIndex) => `<Row>${row
        .map(
          (cell) =>
            `<Cell${rowIndex === 0 ? ' ss:StyleID="Header"' : ''}><Data ss:Type="String">${escapeXml(cell)}</Data></Cell>`,
        )
        .join('')}</Row>`,
    )
    .join('')
  const workbook = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal"><Alignment ss:Vertical="Center"/><Font ss:FontName="Calibri" ss:Size="11"/></Style>
  <Style ss:ID="Header"><Font ss:FontName="Calibri" ss:Size="11" ss:Bold="1"/><Interior ss:Color="#DDEBF7" ss:Pattern="Solid"/></Style>
 </Styles>
 <Worksheet ss:Name="Kalender"><Table>${tableRows}</Table></Worksheet>
</Workbook>`
  downloadFile(`﻿${workbook}`, 'application/vnd.ms-excel;charset=utf-8', 'xls')
}

onMounted(() => {
  void loadData()
})
</script>

<style scoped>
.kalender-page {
  padding-block: 12px;
}

.kalender-header {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-block: 16px;
}

.kalender-title-group h5 {
  color: var(--text-primary, #1e293b);
  font-weight: 700;
}

.kalender-subtitle {
  color: var(--text-muted, #64748b);
  font-size: 12px;
}

.kalender-toolbar {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 12px 24px;
  background: #f8fafc;
}

.kalender-period-filter,
.kalender-export-actions,
.kalender-period-options {
  display: flex;
  align-items: center;
}

.kalender-period-filter,
.kalender-export-actions {
  gap: 10px;
}

.kalender-toolbar-label,
.kalender-export-hint {
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.kalender-period-options {
  gap: 2px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 3px;
  background: #ffffff;
}

.kalender-period-button {
  min-height: 32px;
  border: 0;
  border-radius: 6px;
  padding: 0 11px;
  background: transparent;
  color: #475569;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition:
    color 0.16s ease,
    background-color 0.16s ease,
    box-shadow 0.16s ease;
}

.kalender-period-button:hover,
.kalender-period-button:focus-visible {
  color: var(--app-primary-dark, #0284c7);
}

.kalender-period-button:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.24);
  outline-offset: 1px;
}

.kalender-period-button--active,
.kalender-period-button--active:hover {
  background: var(--app-primary, #18a6e4);
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.kalender-export-button {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
}

.kalender-export-button .export-format-icon {
  width: 16px;
  flex: 0 0 16px;
  font-size: 16px;
  text-align: center;
}

@media (max-width: 767.98px) {
  .kalender-toolbar,
  .kalender-period-filter,
  .kalender-export-actions {
    width: 100%;
  }

  .kalender-toolbar,
  .kalender-period-filter {
    align-items: stretch;
    flex-direction: column;
  }

  .kalender-period-options {
    width: 100%;
    overflow-x: auto;
  }

  .kalender-period-button {
    flex: 1 0 auto;
  }

  .kalender-export-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 8px;
  }

  .kalender-export-hint {
    grid-column: 1 / -1;
    text-align: center;
  }
}
</style>
