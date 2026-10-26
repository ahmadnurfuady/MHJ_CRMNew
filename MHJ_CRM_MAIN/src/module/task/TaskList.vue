<template>
  <div class="card mb-0">
    <div class="card-header task-list-header">
      <div class="task-title-group">
        <h5 class="mb-1">Tugas</h5>
        <p class="task-total mb-0">
          {{ formatTotal(filteredTasks.length) }} tugas ditampilkan
        </p>
      </div>

      <div class="task-header-actions">
        <div class="task-search" role="search">
          <label class="visually-hidden" for="task-search-input">Cari tugas</label>
          <SolarIcon
            name="magnifier"
            class="crm-search-icon"
            :size="18"
            color="var(--app-primary-deep, #032A4E)"
            secondary-color="var(--app-primary, #18A6E4)"
            :secondary-opacity="0.75"
            aria-hidden="true"
          />
          <input
            id="task-search-input"
            v-model="searchQuery"
            type="search"
            placeholder="Cari tugas, faskes, peluang, atau owner..."
            autocomplete="off"
          />
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm task-search__loading"
            aria-hidden="true"
          ></span>
          <button
            v-else-if="searchQuery"
            class="task-search__clear"
            type="button"
            aria-label="Hapus pencarian"
            @click="searchQuery = ''"
          >
            <vue-feather type="x" size="15" />
          </button>
        </div>

        <div class="task-view-switch" role="group" aria-label="Mode tampilan task">
          <button
            type="button"
            :class="{ 'task-view-switch__button--active': activeView === 'list' }"
            :aria-pressed="activeView === 'list'"
            @click="setActiveView('list')"
          >
            <vue-feather type="list" size="15" />
            <span>List</span>
          </button>
          <button
            type="button"
            :class="{ 'task-view-switch__button--active': activeView === 'calendar' }"
            :aria-pressed="activeView === 'calendar'"
            @click="setActiveView('calendar')"
          >
            <MhjIcon name="action_calendar_tugas" :size="15" />
            <span>Calendar</span>
          </button>
        </div>

        <button
          class="btn btn-primary add-task-header-button mhj-add-button"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#task-type-selector"
        >
          <SolarIcon name="add" :size="19" color="#fff" secondary-color="#fff" :secondary-opacity="1" aria-hidden="true" />
          <span>Buat Task Baru</span>
        </button>
      </div>
    </div>

    <div class="task-list-toolbar">
      <div class="task-period-filter" aria-label="Filter periode task">
        <span class="task-toolbar-label">Periode</span>
        <div class="task-period-options" role="group">
          <button
            v-for="option in periodOptions"
            :key="option.value"
            class="task-period-button"
            :class="{ 'task-period-button--active': periodFilter === option.value }"
            type="button"
            :aria-pressed="periodFilter === option.value"
            @click="periodFilter = option.value"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <div class="task-export-actions">
        <span class="task-export-hint">Ekspor mengikuti filter aktif</span>
        <button
          class="btn btn-outline-primary task-export-button"
          type="button"
          :disabled="!filteredTasks.length"
          @click="exportTasks('csv')"
        >
          <i class="fa-solid fa-file-csv export-format-icon" aria-hidden="true"></i>
          CSV
        </button>
        <button
          class="btn btn-outline-success task-export-button"
          type="button"
          :disabled="!filteredTasks.length"
          @click="exportTasks('excel')"
        >
          <i class="fa-solid fa-file-excel export-format-icon" aria-hidden="true"></i>
          Excel
        </button>
      </div>
    </div>

    <div class="card-body p-0">
      <div v-if="activeView === 'list'" class="table-responsive task-table-wrap">
        <table
          class="table mhj-data-table task-table align-middle mb-0"
          :style="{ width: `${taskTableWidth}px` }"
        >
          <colgroup>
            <col
              v-for="(width, index) in taskColumnWidths"
              :key="taskTableColumns[index]?.label"
              :style="{ width: `${width}px` }"
            />
          </colgroup>
          <thead>
            <tr>
              <th
                v-for="(column, index) in taskTableColumns"
                :key="column.label"
                class="task-table__resizable-header"
                :class="{ 'text-center': column.center }"
              >
                {{ column.label }}
                <button
                  v-if="index < taskTableColumns.length - 1"
                  class="task-table__resize-handle"
                  type="button"
                  :aria-label="`Ubah lebar kolom ${column.label}`"
                  :title="`Tarik untuk mengubah lebar kolom ${column.label}`"
                  @pointerdown="startTaskColumnResize(index, $event)"
                  @dblclick.stop="resetTaskColumnWidth(index)"
                ></button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading && !filteredTasks.length">
              <td colspan="8" class="task-table-state">
                <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                Memuat data tugas...
              </td>
            </tr>

            <tr v-for="(item, index) in filteredTasks" :key="`${item.kind ?? 'task'}-${item.id}-${index}`">
              <td data-label="Nama Task">
                <button
                  class="task-identity task-identity-button"
                  type="button"
                  :aria-label="`Lihat detail ${item.title}`"
                  @click="openTaskDetail(item)"
                >
                  <div class="task-icon">
                    <MhjIcon name="action_checklist" :size="18" />
                  </div>
                  <div class="task-identity__text">
                    <strong :title="item.title || 'Tanpa nama tugas'">
                      {{ item.title || 'Tanpa nama tugas' }}
                    </strong>
                    <span :title="item.category || 'Kategori belum tersedia'">
                      {{ item.category || 'Kategori belum tersedia' }} · {{ taskKindLabel(item) }}
                    </span>
                  </div>
                  <vue-feather
                    class="task-detail-indicator"
                    type="chevron-right"
                    size="17"
                    aria-hidden="true"
                  />
                </button>
              </td>

              <td data-label="Faskes">
                <div class="task-context">
                  <button
                    v-if="hospitalDetailId(item)"
                    class="task-context-link cell-primary"
                    type="button"
                    :title="item.hospital || item.subtitle || '-'"
                    :aria-label="`Buka detail faskes ${item.hospital || item.subtitle}`"
                    @click="openHospitalDetail(item)"
                  >
                    {{ item.hospital || item.subtitle || '-' }}
                  </button>
                  <span v-else class="cell-primary" :title="item.hospital || item.subtitle || '-'">
                    {{ item.hospital || item.subtitle || '-' }}
                  </span>
                  <small v-if="item.contact" :title="`Kontak: ${item.contact}`">
                    Kontak:
                    <button
                      v-if="contactDetailId(item)"
                      class="task-context-link task-contact-link"
                      type="button"
                      :aria-label="`Buka detail kontak ${item.contact}`"
                      @click="openContactDetail(item)"
                    >{{ item.contact }}</button>
                    <span v-else>{{ item.contact }}</span>
                  </small>
                </div>
              </td>

              <td data-label="Peluang">
                <span v-if="item.projectName" class="project-badge" :title="item.projectName">
                  {{ item.projectName }}
                </span>
                <span v-else class="empty-value">Tanpa peluang</span>
              </td>

              <td data-label="Jadwal">
                <div v-if="item.scheduledAt" class="task-schedule">
                  <span>{{ formatDate(item.scheduledAt) }}</span>
                  <small>{{ formatTime(item.scheduledAt) }}</small>
                </div>
                <span v-else class="empty-value">Belum dijadwalkan</span>
              </td>

              <td data-label="Owner">
                <div class="owner-label">
                  <vue-feather type="user" size="14" />
                  <span>{{ item.owner || 'Belum ditentukan' }}</span>
                </div>
              </td>

              <td data-label="Pipeline">
                <div v-if="item.stageTo" class="pipeline-change">
                  <span class="pipeline-badge">{{ stageLabel(item.stageTo) }}</span>
                  <small v-if="item.stageFrom && item.stageFrom !== item.stageTo">
                    dari {{ stageLabel(item.stageFrom) }}
                  </small>
                </div>
                <span v-else class="empty-value">Tidak berubah</span>
              </td>

              <td data-label="Catatan">
                <p class="task-notes mb-1" :title="item.description || '-'">
                  {{ item.description || '-' }}
                </p>
                <small v-if="item.products?.length" class="task-products">
                  {{ item.products.join(', ') }}
                </small>
                <small v-else-if="item.unrelatedProduct" class="task-products">
                  Tidak terkait produk
                </small>
              </td>

              <td data-label="Aksi" class="text-center">
                <div class="task-row-actions">
                  <button
                    class="btn btn-outline-primary btn-sm task-detail-button"
                    type="button"
                    :aria-label="`Lihat detail ${item.title}`"
                    @click="openTaskDetail(item)"
                  >
                    <SolarIcon
                      name="eye"
                      :size="17"
                      color="currentColor"
                      secondary-color="currentColor"
                      :secondary-opacity="0.42"
                      aria-hidden="true"
                    />
                    <span>Detail</span>
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm task-delete-button"
                    type="button"
                    :aria-label="`Hapus ${item.title}`"
                    @click="deleteTask(item)"
                  >
                    <vue-feather
                      type="trash-2"
                      size="15"
                      color="currentColor"
                      secondary-color="#fecaca"
                      :secondary-opacity="1"
                    />
                    <span class="visually-hidden">Hapus</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="!loading && !filteredTasks.length">
              <td colspan="8" class="task-table-state">
                <div class="empty-state-icon">
                  <vue-feather type="check-square" size="22" />
                </div>
                <strong>Tugas tidak ditemukan</strong>
                <span>Coba ubah pencarian atau filter periode yang digunakan.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <TaskCalendarView
        v-else
        :tasks="filteredTasks"
        :total-task-count="filteredTasks.length"
        :loading="loading"
        :load-error="store.error"
        @open-task="openTaskDetail"
      />
    </div>

    <div
      v-if="activeView === 'list' && paginationEnabled && (taskRows.length || pagination.page > 1)"
      class="card-footer d-flex flex-wrap align-items-center justify-content-between gap-2"
    >
      <span class="text-muted f-14">
        Halaman {{ pagination.page }} dari {{ effectiveLastPage }}
      </span>
      <div class="pagination-actions" role="group" aria-label="Pagination Tugas">
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="loading || pagination.page <= 1"
          @click="changePage(pagination.page - 1)"
        >
          <vue-feather type="chevron-left" size="15" class="me-1" />Sebelumnya
        </button>
        <div class="pagination-pages" aria-label="Pilih halaman">
          <template v-for="item in visibleTaskPages" :key="String(item)">
            <span v-if="typeof item === 'string'" class="pagination-ellipsis" aria-hidden="true">
              …
            </span>
            <button
              v-else
              class="btn btn-sm pagination-page-button"
              :class="{ 'pagination-page-button--active': item === pagination.page }"
              type="button"
              :disabled="loading || item === pagination.page"
              :aria-current="item === pagination.page ? 'page' : undefined"
              :aria-label="`Ke halaman ${item}`"
              @click="changePage(item)"
            >
              {{ item }}
            </button>
          </template>
        </div>
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="loading || pagination.page >= effectiveLastPage"
          @click="changePage(pagination.page + 1)"
        >
          Berikutnya<vue-feather type="chevron-right" size="15" class="ms-1" />
        </button>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useContact } from '@/store/contact'
import { useHospitalStore } from '@/store/hospital'
import { useProjectStore } from '@/store/project'
import { useTask } from '@/store/task'
import { projectTab } from '@/core/data/project'
import { routes } from '@/router/routes'
import TaskCalendarView from '@/module/task/TaskCalendarView.vue'
import { parseLocalDate } from '@/module/task/taskCalendar'
import type { TaskDetails } from '@/types/tasks'

type PeriodFilter = 'all' | 'daily' | 'weekly' | 'monthly' | 'yearly'
type ExportFormat = 'csv' | 'excel'

const store = useTask()
const contactStore = useContact()
const hospitalStore = useHospitalStore()
const projectStore = useProjectStore()
const router = useRouter()
const route = useRoute()
const { currentTask, loading, pagination } = storeToRefs(store)
const searchQuery = ref('')
const periodFilter = ref<PeriodFilter>('all')
const periodOptions: Array<{ value: PeriodFilter; label: string }> = [
  { value: 'all', label: 'Semua' },
  { value: 'daily', label: 'Harian' },
  { value: 'weekly', label: 'Mingguan' },
  { value: 'monthly', label: 'Bulanan' },
  { value: 'yearly', label: 'Tahunan' },
]
const activeView = ref<'list' | 'calendar'>(route.query.view === 'calendar' ? 'calendar' : 'list')
const paginationEnabled = false
const taskTableColumns = [
  { label: 'Nama Task', defaultWidth: 280, minWidth: 220, center: false },
  { label: 'Faskes', defaultWidth: 220, minWidth: 140, center: false },
  { label: 'Peluang', defaultWidth: 180, minWidth: 120, center: false },
  { label: 'Jadwal', defaultWidth: 170, minWidth: 140, center: false },
  { label: 'Owner', defaultWidth: 170, minWidth: 130, center: false },
  { label: 'Pipeline', defaultWidth: 180, minWidth: 140, center: false },
  { label: 'Catatan', defaultWidth: 240, minWidth: 150, center: false },
  { label: 'Aksi', defaultWidth: 150, minWidth: 130, center: true },
] as const
const taskColumnWidths = ref<number[]>(taskTableColumns.map((column) => column.defaultWidth))
const taskTableWidth = computed(() =>
  taskColumnWidths.value.reduce((total, width) => total + width, 0),
)

const taskRows = computed(() => currentTask.value?.data ?? [])
const usesClientPagination = computed(
  () => taskRows.value.length > pagination.value.perPage,
)
const effectiveLastPage = computed(() =>
  usesClientPagination.value
    ? Math.max(1, Math.ceil(filteredTasks.value.length / pagination.value.perPage))
    : Math.max(1, pagination.value.lastPage),
)

const visibleTaskPages = computed<Array<number | string>>(() => {
  const totalPages = effectiveLastPage.value
  const currentPage = Math.min(Math.max(1, pagination.value.page), totalPages)

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const pageSet = new Set([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ])
  if (currentPage <= 3) {
    pageSet.add(2)
    pageSet.add(3)
  }
  if (currentPage >= totalPages - 2) {
    pageSet.add(totalPages - 2)
    pageSet.add(totalPages - 1)
  }

  const pages = [...pageSet]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right)
  const items: Array<number | string> = []
  pages.forEach((page, index) => {
    const previousPage = pages[index - 1]
    if (previousPage !== undefined && page - previousPage > 1) {
      items.push(`ellipsis-${previousPage}-${page}`)
    }
    items.push(page)
  })
  return items
})
let activeTaskColumnResize:
  | { index: number; startX: number; startWidth: number }
  | undefined

function startTaskColumnResize(index: number, event: PointerEvent) {
  event.preventDefault()
  activeTaskColumnResize = {
    index,
    startX: event.clientX,
    startWidth: taskColumnWidths.value[index] ?? taskTableColumns[index].defaultWidth,
  }
  document.body.style.cursor = 'ew-resize'
  document.body.style.userSelect = 'none'
  window.addEventListener('pointermove', resizeTaskColumn)
  window.addEventListener('pointerup', stopTaskColumnResize)
  window.addEventListener('pointercancel', stopTaskColumnResize)
}

function resizeTaskColumn(event: PointerEvent) {
  if (!activeTaskColumnResize) return

  const { index, startX, startWidth } = activeTaskColumnResize
  const minWidth = taskTableColumns[index]?.minWidth ?? 90
  const nextWidths = [...taskColumnWidths.value]
  nextWidths[index] = Math.max(minWidth, startWidth + event.clientX - startX)
  taskColumnWidths.value = nextWidths
}

function stopTaskColumnResize() {
  activeTaskColumnResize = undefined
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
  window.removeEventListener('pointermove', resizeTaskColumn)
  window.removeEventListener('pointerup', stopTaskColumnResize)
  window.removeEventListener('pointercancel', stopTaskColumnResize)
}

function resetTaskColumnWidth(index: number) {
  const nextWidths = [...taskColumnWidths.value]
  nextWidths[index] = taskTableColumns[index]?.defaultWidth ?? nextWidths[index]
  taskColumnWidths.value = nextWidths
}

const filteredTasks = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const range = activePeriodRange(periodFilter.value)

  return taskRows.value.filter((item) => {
    if (range) {
      const taskDate = parseDate(item.scheduledAt || item.dueDate || item.createdAt || '')
      if (!taskDate || taskDate < range.start || taskDate >= range.end) return false
    }

    if (!query) return true
    return [
      item.title,
      item.category,
      item.hospital,
      item.subtitle,
      item.contact,
      item.projectName,
      item.owner,
      item.description,
      item.serialNumber,
      item.products?.join(' '),
      item.divisions?.join(' '),
      taskKindLabel(item),
    ].some((value) => String(value ?? '').toLowerCase().includes(query))
  })
})

watch([searchQuery, periodFilter], () => {
  pagination.value.page = 1
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
    const daysFromMonday = (start.getDay() + 6) % 7
    start.setDate(start.getDate() - daysFromMonday)
    end.setTime(start.getTime())
    end.setDate(end.getDate() + 7)
  } else if (filter === 'monthly') {
    start.setDate(1)
    end.setFullYear(start.getFullYear(), start.getMonth() + 1, 1)
  } else {
    start.setMonth(0, 1)
    end.setFullYear(start.getFullYear() + 1, 0, 1)
  }

  return { start, end }
}

watch(
  () => route.query.view,
  (view) => {
    activeView.value = view === 'calendar' ? 'calendar' : 'list'
  },
)

function setActiveView(view: 'list' | 'calendar') {
  if (activeView.value === view) return
  activeView.value = view
  void router.replace({
    path: routes.App.Task,
    query: {
      ...route.query,
      view: view === 'calendar' ? 'calendar' : undefined,
    },
  })
}

function formatTotal(total: number) {
  return new Intl.NumberFormat('id-ID').format(total)
}

function parseDate(value: string) {
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value.trim())
  const date = dateOnly ? parseLocalDate(value) : new Date(value.trim().replace(' ', 'T'))
  if (!date) return null
  return Number.isNaN(date.getTime()) ? null : date
}

function formatDate(value: string) {
  const date = parseDate(value)
  if (!date) return value

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

function formatTime(value: string) {
  const date = parseDate(value)
  if (!date) return ''

  return new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

function formatExportDateTime(value?: string) {
  if (!value) return ''
  const date = parseDate(value)
  if (!date) return value

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

const exportColumns: Array<{
  label: string
  value: (task: TaskDetails) => string | number
}> = [
  { label: 'ID', value: (task) => task.id },
  { label: 'Nama Task', value: (task) => task.title || '' },
  { label: 'Jenis Task', value: (task) => taskKindLabel(task) },
  { label: 'Kategori', value: (task) => task.category || '' },
  { label: 'Faskes', value: (task) => task.hospital || task.subtitle || '' },
  { label: 'Kontak', value: (task) => task.contact || '' },
  { label: 'Telepon / WA', value: (task) => task.contactPhone || '' },
  { label: 'Peluang Sales', value: (task) => task.projectName || '' },
  { label: 'Serial Number', value: (task) => task.serialNumber || '' },
  { label: 'Jadwal', value: (task) => formatExportDateTime(task.scheduledAt || task.dueDate) },
  { label: 'Owner', value: (task) => task.owner || '' },
  { label: 'Divisi', value: (task) => task.divisions?.join(', ') || '' },
  {
    label: 'Produk',
    value: (task) =>
      task.unrelatedProduct ? 'Tidak terkait produk' : task.products?.join(', ') || '',
  },
  { label: 'Pipeline Awal', value: (task) => stageLabel(task.stageFrom || '') },
  { label: 'Pipeline Akhir', value: (task) => stageLabel(task.stageTo || '') },
  { label: 'Catatan', value: (task) => task.description || '' },
  { label: 'Alamat Lokasi', value: (task) => task.locationAddress || '' },
  { label: 'Latitude', value: (task) => task.latitude || '' },
  { label: 'Longitude', value: (task) => task.longitude || '' },
]

function exportRows() {
  return [
    exportColumns.map((column) => column.label),
    ...filteredTasks.value.map((task) =>
      exportColumns.map((column) => String(column.value(task) ?? '')),
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

function downloadTaskFile(content: string, mimeType: string, extension: string) {
  const stamp = [
    new Date().getFullYear(),
    String(new Date().getMonth() + 1).padStart(2, '0'),
    String(new Date().getDate()).padStart(2, '0'),
  ].join('-')
  const filename = `task-${periodFilter.value}-${stamp}.${extension}`
  const url = URL.createObjectURL(new Blob([content], { type: mimeType }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

function exportTasks(format: ExportFormat) {
  if (!filteredTasks.value.length) return
  const rows = exportRows()

  if (format === 'csv') {
    const csv = `\ufeff${rows.map((row) => row.map(safeCsvValue).join(',')).join('\r\n')}`
    downloadTaskFile(csv, 'text/csv;charset=utf-8', 'csv')
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
 <Worksheet ss:Name="Tasks"><Table>${tableRows}</Table></Worksheet>
</Workbook>`
  downloadTaskFile(`\ufeff${workbook}`, 'application/vnd.ms-excel;charset=utf-8', 'xls')
}

function stageLabel(value: string) {
  return projectTab.find((stage) => stage.value === value)?.title || value
}

function taskKindLabel(item: TaskDetails) {
  return item.kind === 'app-specialist' ? 'App Specialist' : 'Sales'
}

function deleteTask(item: TaskDetails) {
  const index = currentTask.value?.data?.indexOf(item) ?? -1
  if (index >= 0) store.warningAlert(index)
}

function openTaskDetail(item: TaskDetails) {
  void router.push({
    path: routes.App.Task,
    query: { ...route.query, detail: String(item.id) },
  })
}

function normalizeRelationName(value: string) {
  return value.trim().toLocaleLowerCase('id-ID')
}

function relatedProject(item: TaskDetails) {
  if (!item.projectId) return undefined
  return projectStore.items.find((project) => project.id === item.projectId)
}

function hospitalDetailId(item: TaskDetails): number | undefined {
  const relationId = item.hospitalId ?? relatedProject(item)?.companyId
  if (relationId) return relationId

  const hospitalName = normalizeRelationName(item.hospital || '')
  if (!hospitalName) return undefined
  return hospitalStore.items.find(
    (hospital) => normalizeRelationName(hospital.name) === hospitalName
  )?.id
}

function contactDetailId(item: TaskDetails): number | undefined {
  const relationId = item.contactId ?? relatedProject(item)?.contactId
  if (relationId) return relationId

  const contactNames = (item.contact || '')
    .split(/[,;|]/)
    .map(normalizeRelationName)
    .filter(Boolean)
  if (!contactNames.length) return undefined

  const contact = contactStore.contactApi.items.find((candidate) => {
    const fullName = normalizeRelationName(`${candidate.firstName} ${candidate.lastName}`)
    return contactNames.includes(fullName)
  })
  return contact?.remoteId
}

function openHospitalDetail(item: TaskDetails) {
  const id = hospitalDetailId(item)
  if (!id) return
  void router.push({ path: routes.App.RumahSakit, query: { detail: String(id) } })
}

function openContactDetail(item: TaskDetails) {
  const id = contactDetailId(item)
  if (!id) return
  void router.push({ path: routes.App.Contacts, query: { detail: String(id) } })
}

function changePage(page: number) {
  if (page < 1 || page > effectiveLastPage.value || page === pagination.value.page) return
  if (usesClientPagination.value) {
    pagination.value.page = page
    return
  }
  void store.fetchTasks({ page })
}

onMounted(() => {
  const requests: Promise<unknown>[] = []
  if (!hospitalStore.items.length) {
    requests.push(hospitalStore.fetchHospitals({ per_page: 100 }))
  }
  if (!contactStore.contactApi.items.length) {
    requests.push(contactStore.fetchRemoteContacts({ per_page: 100 }))
  }
  void Promise.allSettled(requests)
})

onBeforeUnmount(() => {
  stopTaskColumnResize()
})
</script>

<style scoped>
.task-list-header {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) minmax(0, 900px);
  align-items: center;
  gap: 24px;
  padding: 20px 24px;
}

.task-title-group {
  display: flex;
  align-items: flex-start;
  justify-self: start;
  flex-direction: column;
  text-align: left;
}

.task-title-group h5 {
  color: #0f172a;
  font-size: 18px;
  font-weight: 700;
}

.task-total {
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
}

.task-header-actions {
  display: grid;
  grid-template-columns: minmax(240px, 1fr) max-content max-content;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 10px;
}

.task-list-toolbar {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid #eef2f7;
  border-bottom: 1px solid #e2e8f0;
  padding: 12px 24px;
  background: #f8fafc;
}

.task-period-filter,
.task-export-actions,
.task-period-options {
  display: flex;
  align-items: center;
}

.task-period-filter,
.task-export-actions {
  gap: 10px;
}

.task-toolbar-label,
.task-export-hint {
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.task-period-options {
  gap: 3px;
  border: 1px solid #dbe3ec;
  border-radius: 8px;
  padding: 3px;
  background: #ffffff;
}

.task-period-button {
  min-height: 32px;
  border: 0;
  border-radius: 6px;
  padding: 0 11px;
  background: transparent;
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition:
    color 0.16s ease,
    background-color 0.16s ease,
    box-shadow 0.16s ease;
}

.task-period-button:hover,
.task-period-button:focus-visible {
  color: var(--app-primary-dark, #0284c7);
}

.task-period-button:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.24);
  outline-offset: 1px;
}

.task-period-button--active,
.task-period-button--active:hover {
  background: var(--app-primary, #18a6e4);
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.task-export-button {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 7px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.task-export-button .export-format-icon {
  width: 16px;
  flex: 0 0 16px;
  font-size: 16px;
  text-align: center;
}

.task-view-switch {
  display: inline-flex;
  height: 44px;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 3px;
  background: #f8fafc;
}

.task-view-switch button {
  display: inline-flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 0;
  border-radius: 6px;
  padding: 0 11px;
  background: transparent;
  color: #64748b;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.task-view-switch .task-view-switch__button--active {
  background: #ffffff;
  color: var(--app-primary-dark, #0284c7);
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.12);
}

.task-search {
  display: flex;
  width: 100%;
  height: 44px;
  min-width: 0;
  box-sizing: border-box;
  align-items: center;
  gap: 9px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0 11px;
  background: #ffffff;
  color: #64748b;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.task-search .crm-search-icon {
  flex: 0 0 18px;
}

.task-search:focus-within {
  border-color: var(--app-primary, #18a6e4);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.14);
}

.task-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #0f172a;
  font-size: 13px;
}

.task-search input::placeholder {
  color: #94a3b8;
}

.task-search__loading {
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  color: var(--app-primary, #18a6e4);
}

.task-search__clear {
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  background: #f1f5f9;
  color: #64748b;
}

.add-task-header-button {
  display: inline-flex;
  width: auto;
  height: 44px !important;
  min-height: 44px !important;
  max-height: 44px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-color: var(--app-primary, #18a6e4) !important;
  border-radius: 8px;
  margin: 0 !important;
  padding: 0 18px;
  background-color: var(--app-primary, #18a6e4) !important;
  color: #ffffff !important;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.add-task-header-button span,
.add-task-header-button svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}

.add-task-header-button:hover,
.add-task-header-button:focus {
  border-color: var(--app-primary-hover, #1493cc) !important;
  background-color: var(--app-primary-hover, #1493cc) !important;
}

.task-table-wrap {
  min-height: 240px;
  overflow-x: auto;
}

.task-table {
  table-layout: fixed;
  min-width: 1300px;
}

.task-table thead th {
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
  padding: 0.75rem;
  background: #ffffff;
  color: #051a1a;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
}

.task-table__resizable-header {
  position: relative;
  padding-right: 18px !important;
}

.task-table__resize-handle {
  position: absolute;
  z-index: 2;
  top: 0;
  right: -4px;
  width: 9px;
  height: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: ew-resize;
  touch-action: none;
}

.task-table__resize-handle::after {
  position: absolute;
  top: 20%;
  right: 3px;
  width: 1px;
  height: 60%;
  border-radius: 999px;
  background: #cbd5e1;
  content: '';
  transition: background-color 0.15s ease;
}

.task-table__resize-handle:hover::after,
.task-table__resize-handle:focus-visible::after {
  background: var(--app-primary, #18a6e4);
}

.task-table tbody td {
  min-width: 0;
  overflow: hidden;
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
  padding: 14px 16px;
  color: #334155;
  font-size: 13px;
  vertical-align: middle;
}

.task-table tbody tr {
  transition: background-color 0.2s ease;
}

.task-table tbody tr:hover {
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.035);
}

.task-identity {
  display: flex;
  min-width: 220px;
  align-items: center;
  gap: 10px;
}

.task-identity-button {
  width: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  text-align: left;
}

.task-identity-button:hover .task-identity__text strong,
.task-identity-button:focus-visible .task-identity__text strong {
  color: var(--app-primary-dark, #0284c7);
}

.task-identity-button:focus-visible {
  border-radius: 8px;
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
}

.task-detail-indicator {
  flex: 0 0 17px;
  margin-left: auto;
  color: #94a3b8;
}

.task-icon {
  display: inline-flex;
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary, #18a6e4);
}

.task-identity__text,
.task-context,
.task-schedule,
.pipeline-change {
  width: 100%;
  min-width: 0;
}

.task-identity__text strong,
.task-identity__text span,
.task-context span,
.task-context small,
.task-schedule span,
.task-schedule small,
.pipeline-change small {
  display: block;
}

.task-identity__text strong,
.cell-primary {
  color: #0f172a;
  font-weight: 600;
}

.task-context-link {
  display: block;
  max-width: 100%;
  overflow: hidden;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.18s ease;
}

.task-context-link:hover,
.task-context-link:focus-visible {
  color: var(--app-primary-dark, #0284c7);
}

.task-context-link:focus-visible {
  border-radius: 3px;
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.22);
  outline-offset: 2px;
}

.task-contact-link {
  display: inline;
  color: #64748b;
  font-size: 11px;
}

.task-identity__text strong,
.task-identity__text span,
.cell-primary,
.task-context small,
.task-products {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-identity__text span,
.task-context small,
.task-schedule small,
.pipeline-change small,
.task-products {
  margin-top: 2px;
  color: #64748b;
  font-size: 11px;
}

.project-badge,
.pipeline-badge {
  display: inline-block;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 6px;
  padding: 5px 8px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary-dark, #0369a1);
  font-size: 11px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pipeline-badge {
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
}

.owner-label {
  display: inline-flex;
  max-width: 170px;
  align-items: center;
  gap: 6px;
  color: #334155;
}

.owner-label span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-notes {
  display: block;
  max-width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.empty-value {
  color: #94a3b8;
  font-size: 12px;
}

.task-row-actions {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.task-detail-button,
.task-delete-button {
  display: inline-flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 7px;
  padding: 7px 10px;
  white-space: nowrap;
}

.task-detail-button {
  min-width: 76px;
  border-color: var(--theme-default, #18a6e4) !important;
  background: #fff !important;
  color: var(--theme-default, #1688bd) !important;
}

.task-detail-button > span,
.task-detail-button :deep(.solar-icon) {
  color: inherit !important;
}

.task-detail-button :deep(.solar-icon path) {
  stroke: none !important;
}

.task-detail-button:hover,
.task-detail-button:focus,
.task-detail-button:focus-visible,
.task-detail-button:active {
  border-color: var(--theme-default, #18a6e4) !important;
  background: var(--theme-default, #18a6e4) !important;
  color: #fff !important;
}

.task-detail-button:focus-visible {
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.22) !important;
}

.task-delete-button {
  width: 34px;
  height: 32px;
  border-color: #dc3545 !important;
  padding: 0;
  background: #fff !important;
  color: #dc3545 !important;
}

.task-delete-button :deep(.solar-icon) {
  --solar-secondary-color: #fecaca !important;
  --solar-secondary-opacity: 1 !important;
  color: #dc3545 !important;
}

.task-delete-button:hover,
.task-delete-button:focus,
.task-delete-button:focus-visible,
.task-delete-button:active {
  border-color: #dc3545 !important;
  background: #dc3545 !important;
  color: #fff !important;
}

.task-delete-button:hover :deep(.solar-icon),
.task-delete-button:focus :deep(.solar-icon),
.task-delete-button:focus-visible :deep(.solar-icon),
.task-delete-button:active :deep(.solar-icon) {
  --solar-secondary-color: #fff !important;
  --solar-secondary-opacity: 0.62 !important;
  color: #fff !important;
}

.task-delete-button:focus-visible {
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.22) !important;
}

.task-table-state {
  height: 210px;
  color: #64748b !important;
  text-align: center;
}

.task-table-state strong,
.task-table-state span {
  display: block;
}

.empty-state-icon {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary, #18a6e4);
}

.pagination-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.pagination-button {
  display: inline-flex;
  width: auto;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem !important;
  padding-inline: 0.875rem;
}

.pagination-pages {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.pagination-page-button {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem !important;
  padding: 0;
  background: #ffffff;
  color: #475569;
  font-weight: 600;
}

.pagination-page-button:hover:not(:disabled) {
  border-color: var(--app-primary, #18a6e4);
  color: var(--app-primary, #18a6e4);
}

.pagination-page-button--active,
.pagination-page-button--active:disabled {
  border-color: var(--app-primary, #18a6e4);
  background: var(--app-primary, #18a6e4);
  color: #ffffff;
  opacity: 1;
}

.pagination-ellipsis {
  min-width: 20px;
  color: #64748b;
  text-align: center;
}

@media (max-width: 991.98px) {
  .task-list-header {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 18px;
  }

  .task-header-actions {
    grid-template-columns: minmax(0, 1fr) max-content max-content;
    justify-content: stretch;
  }

  .task-list-toolbar {
    flex-wrap: wrap;
    padding: 12px 18px;
  }
}

@media (max-width: 575.98px) {
  .task-header-actions {
    grid-template-columns: 1fr;
  }

  .task-view-switch {
    width: 100%;
  }

  .task-view-switch button {
    flex: 1;
  }

  .add-task-header-button {
    width: 100%;
  }

  .task-list-toolbar,
  .task-period-filter,
  .task-export-actions {
    width: 100%;
  }

  .task-list-toolbar,
  .task-period-filter {
    align-items: stretch;
    flex-direction: column;
  }

  .task-period-options {
    width: 100%;
    overflow-x: auto;
  }

  .task-period-button {
    flex: 1 0 auto;
  }

  .task-export-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .task-export-hint {
    grid-column: 1 / -1;
  }

  .task-table-wrap {
    padding: 12px;
    overflow: visible;
  }

  .task-table {
    width: 100% !important;
    min-width: 0;
    table-layout: auto;
  }

  .task-table colgroup,
  .task-table__resize-handle {
    display: none;
  }

  .task-table thead {
    display: none;
  }

  .task-table tbody,
  .task-table tr,
  .task-table td {
    display: block;
    width: 100%;
  }

  .task-table tbody tr {
    overflow: hidden;
    border: 1px solid var(--border-subtle, #e2e8f0);
    border-radius: 10px;
    margin-bottom: 12px;
  }

  .task-table tbody td {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border-bottom: 1px solid #f1f5f9;
    padding: 11px 13px;
    text-align: right;
  }

  .task-table tbody td::before {
    content: attr(data-label);
    flex: 0 0 34%;
    color: #64748b;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-align: left;
    text-transform: capitalize;
  }

  .task-table tbody td:first-child {
    background: #f8fafc;
  }

  .task-table tbody td:last-child {
    border-bottom: 0;
  }

  .task-identity {
    min-width: 0;
    justify-content: flex-end;
    text-align: right;
  }

  .task-context-link {
    margin-left: auto;
    text-align: right;
  }

  .task-row-actions {
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .task-table-state {
    display: table-cell !important;
    height: 180px;
  }

  .task-table-state::before {
    display: none;
  }
}
</style>
