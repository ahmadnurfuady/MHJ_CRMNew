<template>
  <div class="card mb-0">
    <div class="card-header task-list-header">
      <div class="task-title-group">
        <h5 class="mb-1">Tugas</h5>
        <p class="task-total mb-0">
          {{ formatTotal(pagination.total || taskRows.length) }} total tugas
        </p>
      </div>

      <div class="task-header-actions">
        <div class="task-search" role="search">
          <label class="visually-hidden" for="task-search-input">Cari tugas</label>
          <vue-feather type="search" size="17" />
          <input
            id="task-search-input"
            v-model="searchQuery"
            type="search"
            placeholder="Cari tugas, rumah sakit, proyek, atau owner..."
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

        <button
          class="btn btn-primary add-task-header-button"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#taskmodel"
        >
          <vue-feather type="plus" size="17" />
          <span>Buat Task Baru</span>
        </button>
      </div>
    </div>

    <div class="card-body p-0">
      <div class="table-responsive task-table-wrap">
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
                    <vue-feather type="check-square" size="18" />
                  </div>
                  <div class="task-identity__text">
                    <strong>{{ item.title || 'Tanpa nama tugas' }}</strong>
                    <span>{{ item.category || 'Kategori belum tersedia' }}</span>
                  </div>
                  <vue-feather class="task-detail-indicator" type="chevron-right" size="16" />
                </button>
              </td>

              <td data-label="Rumah Sakit">
                <div class="task-context">
                  <span class="cell-primary">{{ item.hospital || item.subtitle || '-' }}</span>
                  <small v-if="item.contact">Kontak: {{ item.contact }}</small>
                </div>
              </td>

              <td data-label="Proyek">
                <span v-if="item.projectName" class="project-badge">{{ item.projectName }}</span>
                <span v-else class="empty-value">Tanpa proyek</span>
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
                <p class="task-notes mb-1">{{ item.description || '-' }}</p>
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
                    <vue-feather type="eye" size="15" />
                    <span>Detail</span>
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm task-delete-button"
                    type="button"
                    :aria-label="`Hapus ${item.title}`"
                    @click="deleteTask(item)"
                  >
                    <vue-feather type="trash-2" size="15" />
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
                <span>Coba gunakan kata pencarian lain atau buat tugas baru.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="taskRows.length || pagination.page > 1"
      class="card-footer d-flex flex-wrap align-items-center justify-content-between gap-2"
    >
      <span class="text-muted f-14">
        Halaman {{ pagination.page }} dari {{ pagination.lastPage }}
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
          :disabled="loading || pagination.page >= pagination.lastPage"
          @click="changePage(pagination.page + 1)"
        >
          Berikutnya<vue-feather type="chevron-right" size="15" class="ms-1" />
        </button>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <div
      v-if="detailModalOpen && selectedTask"
      class="modal fade show d-block task-detail-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Detail tugas"
      @click.self="closeTaskDetail"
    >
      <div class="modal-dialog modal-xl task-detail-dialog">
        <div class="modal-content task-detail-modal">
          <TaskDetail
            :key="selectedTask.id"
            :task="selectedTask"
            :loading="detailLoading"
            @close="closeTaskDetail"
          />
        </div>
      </div>
    </div>
    <div
      v-if="detailModalOpen && selectedTask"
      class="modal-backdrop fade show task-detail-backdrop"
      aria-hidden="true"
    ></div>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, onBeforeUnmount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTask } from '@/store/task'
import { projectTab } from '@/core/data/project'
import type { TaskDetails } from '@/types/tasks'

const TaskDetail = defineAsyncComponent(() => import('@/module/task/TaskDetail.vue'))

const store = useTask()
const { currentTask, loading, pagination } = storeToRefs(store)
const searchQuery = ref('')
const selectedTask = ref<TaskDetails | null>(null)
const detailModalOpen = ref(false)
const detailLoading = ref(false)
const taskTableColumns = [
  { label: 'Nama Task', defaultWidth: 280, minWidth: 220, center: false },
  { label: 'Rumah Sakit', defaultWidth: 220, minWidth: 140, center: false },
  { label: 'Proyek', defaultWidth: 180, minWidth: 120, center: false },
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

const visibleTaskPages = computed<Array<number | string>>(() => {
  const totalPages = Math.max(1, pagination.value.lastPage)
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
  if (!query) return taskRows.value

  return taskRows.value.filter((item) =>
    [
      item.title,
      item.category,
      item.hospital,
      item.subtitle,
      item.contact,
      item.projectName,
      item.owner,
      item.description,
    ].some((value) => String(value ?? '').toLowerCase().includes(query))
  )
})

function formatTotal(total: number) {
  return new Intl.NumberFormat('id-ID').format(total)
}

function parseDate(value: string) {
  const date = new Date(value)
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

function stageLabel(value: string) {
  return projectTab.find((stage) => stage.value === value)?.title || value
}

function deleteTask(item: TaskDetails) {
  const index = currentTask.value?.data?.indexOf(item) ?? -1
  if (index >= 0) store.warningAlert(index)
}

function mergeTaskDetail(base: TaskDetails, detail: TaskDetails) {
  const merged = { ...base }
  for (const [key, value] of Object.entries(detail) as [keyof TaskDetails, unknown][]) {
    const hasValue =
      value !== undefined &&
      value !== null &&
      value !== '' &&
      (!Array.isArray(value) || value.length > 0)
    if (hasValue) Object.assign(merged, { [key]: value })
  }
  return merged
}

async function openTaskDetail(item: TaskDetails) {
  selectedTask.value = item
  detailModalOpen.value = true
  detailLoading.value = true
  try {
    const detail = await store.fetchTaskById(item.id)
    if (detail && selectedTask.value?.id === item.id) {
      selectedTask.value = mergeTaskDetail(item, detail)
    }
  } catch {
    // Data dari baris tabel tetap ditampilkan bila endpoint detail belum lengkap/gagal.
  } finally {
    detailLoading.value = false
  }
}

function closeTaskDetail() {
  detailModalOpen.value = false
  detailLoading.value = false
}

function changePage(page: number) {
  if (page < 1 || page > pagination.value.lastPage || page === pagination.value.page) return
  void store.fetchTasks({ page })
}

onBeforeUnmount(() => {
  stopTaskColumnResize()
})
</script>

<style scoped>
.task-list-header {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) minmax(0, 700px);
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
  grid-template-columns: minmax(280px, 440px) max-content;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 10px;
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

.task-search:focus-within {
  border-color: #18a6e4;
  box-shadow: 0 0 0 3px rgba(24, 166, 228, 0.14);
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
  color: #18a6e4;
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
  border-color: #18a6e4 !important;
  border-radius: 8px;
  margin: 0 !important;
  padding: 0 18px;
  background-color: #18a6e4 !important;
  color: #ffffff !important;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(24, 166, 228, 0.2);
}

.add-task-header-button span,
.add-task-header-button svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}

.add-task-header-button:hover,
.add-task-header-button:focus {
  border-color: #1493cc !important;
  background-color: #1493cc !important;
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
  background: #18a6e4;
}

.task-table tbody td {
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
  background: rgba(24, 166, 228, 0.035);
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
  color: #0284c7;
}

.task-identity-button:focus-visible {
  border-radius: 8px;
  outline: 3px solid rgba(24, 166, 228, 0.18);
}

.task-detail-indicator {
  flex: 0 0 16px;
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
  background: rgba(24, 166, 228, 0.1);
  color: #18a6e4;
}

.task-identity__text,
.task-context,
.task-schedule,
.pipeline-change {
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
  max-width: 180px;
  overflow: hidden;
  border-radius: 6px;
  padding: 5px 8px;
  background: rgba(24, 166, 228, 0.1);
  color: #0369a1;
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
  display: -webkit-box;
  max-width: 260px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
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
}

.task-delete-button {
  width: 34px;
  height: 32px;
  padding: 0;
}

.task-detail-overlay {
  z-index: 1060;
  overflow-x: hidden;
  overflow-y: auto;
}

.task-detail-backdrop {
  z-index: 1055;
}

.task-detail-dialog {
  max-width: 920px;
}

.task-detail-modal {
  overflow: hidden;
  border: 0;
  border-radius: 16px;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.2);
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
  background: rgba(24, 166, 228, 0.1);
  color: #18a6e4;
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
  border-color: #18a6e4;
  color: #18a6e4;
}

.pagination-page-button--active,
.pagination-page-button--active:disabled {
  border-color: #18a6e4;
  background: #18a6e4;
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
    grid-template-columns: minmax(0, 1fr) max-content;
    justify-content: stretch;
  }
}

@media (max-width: 575.98px) {
  .task-detail-dialog {
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0;
  }

  .task-detail-modal {
    min-height: 100%;
    height: 100%;
    border-radius: 0;
  }

  .task-header-actions {
    grid-template-columns: 1fr;
  }

  .add-task-header-button {
    width: 100%;
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
    text-transform: uppercase;
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
