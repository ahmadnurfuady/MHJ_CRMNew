<template>
  <PiutangDetailPreview v-if="selectedPiutang" :piutang="selectedPiutang" />

  <div v-else-if="selectedPiutangId" class="container-fluid piutang-page">
    <div class="piutang-detail-state card">
      <span v-if="loading" class="spinner-border text-primary" aria-hidden="true"></span>
      <SolarIcon
        v-else
        name="fa-circle-exclamation"
        :size="28"
        color="var(--bs-danger, #dc3545)"
      />
      <strong>{{ loading ? 'Memuat detail piutang...' : 'Detail piutang tidak ditemukan' }}</strong>
      <p v-if="!loading">{{ loadError || 'Data piutang yang dipilih tidak tersedia.' }}</p>
    </div>
  </div>

  <div v-else class="container-fluid piutang-page">
    <Card
      card-class="piutang-panel"
      card-body-class="piutang-panel__body"
      header-title="Piutang"
      header-class="piutang-panel__title"
    >
      <template #header5>
        <div class="piutang-toolbar">
        <div class="piutang-search" role="search">
          <label class="visually-hidden" for="piutang-search-input">Cari piutang</label>
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
            id="piutang-search-input"
            v-model="searchQuery"
            type="search"
            placeholder="Cari nama faskes atau nomor nota..."
            autocomplete="off"
          />
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm piutang-search__loading"
            aria-hidden="true"
          ></span>
          <button
            v-else-if="searchQuery"
            class="piutang-search__clear"
            type="button"
            aria-label="Hapus pencarian"
            @click="searchQuery = ''"
          >
            <vue-feather type="x" size="15" />
          </button>
        </div>

          <div ref="filterRoot" class="piutang-filter">
          <button
            class="piutang-filter__trigger"
            type="button"
            aria-label="Filter daftar piutang"
            title="Filter piutang"
            :aria-expanded="filterOpen"
            aria-haspopup="true"
            @click="toggleFilter"
          >
            <SolarIcon
              name="filter"
              :size="22"
              color="var(--app-primary, #18a6e4)"
              secondary-color="var(--app-primary, #18a6e4)"
              :secondary-opacity="1"
            />
            <b v-if="activeFilterCount">{{ activeFilterCount }}</b>
          </button>

          <aside v-if="filterOpen" class="piutang-filter__dropdown" aria-label="Filter piutang">
            <header class="piutang-filter__header">
              <div>
                <small>FILTER PIUTANG</small>
                <strong>Daftar Piutang</strong>
              </div>
              <button
                type="button"
                class="piutang-filter__reset"
                :disabled="filterLoading || loading"
                @click="resetFilters"
              >
                Reset
              </button>
              <button
                type="button"
                class="piutang-filter__close"
                aria-label="Tutup filter"
                @click="cancelFilter"
              >
                <SolarIcon name="close" :size="20" color="currentColor" secondary-color="currentColor" />
              </button>
            </header>

            <div class="piutang-filter__body">
              <div v-if="filterLoading" class="piutang-filter__state" role="status">
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                Memuat pilihan filter...
              </div>
              <div v-else-if="filterError" class="piutang-filter__state piutang-filter__state--error">
                <span>{{ filterError }}</span>
                <button type="button" @click="loadFilterOptions()">Coba Lagi</button>
              </div>
              <fieldset v-for="group in filterGroups" v-else :key="group.key">
                <legend>{{ group.label }}</legend>
                <div class="piutang-filter__chips">
                  <button
                    v-for="option in filterOptions[group.key]"
                    :key="`${group.key}-${option.value}`"
                    type="button"
                    :class="{ active: isOptionActive(group.key, option.value) }"
                    :title="option.label"
                    @click="selectFilter(group.key, option.value)"
                  >
                    <span>{{ option.label }}</span>
                    <small v-if="option.count !== null">{{ formatTotal(option.count) }}</small>
                  </button>
                </div>
              </fieldset>
            </div>

            <footer class="piutang-filter__footer">
              <button
                type="button"
                class="piutang-filter__apply"
                :disabled="filterLoading || loading"
                @click="applyFilters"
              >
                <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                Terapkan Filter
              </button>
            </footer>
          </aside>
          </div>
        </div>
      </template>

      <div class="piutang-tabs" role="tablist" aria-label="Status piutang">
        <button
          v-for="tab in tabs"
          :key="tab.status"
          type="button"
          role="tab"
          class="piutang-tabs__button"
          :class="{ 'is-active': activeTab === tab.status }"
          :aria-selected="activeTab === tab.status"
          @click="selectTab(tab.status)"
        >
          <span>{{ tab.label }}</span>
          <span class="piutang-tabs__badge">{{ countByStatus(tab.status) }}</span>
        </button>
      </div>

      <div v-if="loading" class="piutang-empty" role="status">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <p>Memuat data piutang...</p>
      </div>

      <div v-else-if="groupedPiutang.length" class="piutang-list" role="tabpanel">
        <PiutangGroupCard
          v-for="group in pagedGroups"
          :key="group.faskes"
          :group="group"
          :source-tab="activeTab"
        />
      </div>

      <div v-else class="piutang-empty" role="status">
        <span class="piutang-empty__icon" aria-hidden="true">
          <SolarIcon
            name="bill-list"
            :size="32"
            color="currentColor"
            secondary-color="currentColor"
            :secondary-opacity="1"
          />
        </span>
        <p>{{ loadError || 'Belum ada piutang pada tab ini' }}</p>
      </div>

      <ListPagination
        v-if="groupedPiutang.length"
        v-model="currentPage"
        class="piutang-pagination"
        :total-pages="totalPages"
        :loading="loading"
        aria-label="Pagination Piutang"
      />
    </Card>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { api } from '@/api'
import { isRecord, pickString } from '@/api/response'
import ListPagination from '@/components/shared/ListPagination.vue'
import Card from '@/components/shared/card/Card.vue'
import { usePageBackRoute, usePageTitle } from '@/composable/usePageHeader'
import PiutangGroupCard from '@/pages/piutang/components/PiutangGroupCard.vue'
import type { PiutangGroup } from '@/pages/piutang/components/PiutangGroupCard.vue'
import PiutangDetailPreview from '@/pages/piutang/PiutangDetailPreview.vue'
import { routes } from '@/router/routes'
import { fetchPiutangList } from '@/services/piutangService'
import type { PiutangListParams } from '@/services/piutangService'
import type { Piutang, PiutangStatus } from '@/types/piutang'

const route = useRoute()
const router = useRouter()
const tabs: Array<{ status: PiutangStatus; label: string }> = [
  { status: 'on_progress', label: 'On Progress' },
  { status: 'terlambat', label: 'Terlambat' },
  { status: 'lunas', label: 'Lunas' },
]

function isPiutangStatus(value: unknown): value is PiutangStatus {
  return tabs.some((tab) => tab.status === value)
}

const selectedPiutangId = computed(() => {
  const detail = route.query.detail
  return typeof detail === 'string' && detail ? detail : null
})
const selectedPiutang = computed(
  () => piutangData.value.find((piutang) => piutang.id === selectedPiutangId.value) ?? null,
)
const sourceTab = computed<PiutangStatus>(() =>
  isPiutangStatus(route.query.tab) ? route.query.tab : 'on_progress',
)
usePageTitle(computed(() => (selectedPiutangId.value ? 'Detail Piutang' : 'Piutang')))
usePageBackRoute(
  computed(() =>
    selectedPiutangId.value
      ? { path: routes.CrmAdmin.Piutang, query: { tab: sourceTab.value } }
      : routes.CrmAdmin.Dashboard,
  ),
)

// Data piutang dari backend: GET /api/dashboardpiutang/daftar. Diambil penuh
// sekali, lalu disaring per tab di sisi FE. Badge tab memakai total_per_status
// dari server supaya jumlahnya tetap benar walau data satu tab kosong.
const piutangData = ref<Piutang[]>([])
const totalPerStatus = ref<Record<PiutangStatus, number>>({
  on_progress: 0,
  terlambat: 0,
  lunas: 0,
})
const loading = ref(true)
const loadError = ref('')
const currentPage = ref(1)
const PAGE_SIZE = 6
const searchQuery = ref('')
let searchTimer: ReturnType<typeof setTimeout> | undefined
let latestRequest = 0

type FilterKey =
  | 'installed_base'
  | 'visit_urgency'
  | 'grading'
  | 'tipe_rs'
  | 'penyelenggara'
  | 'cabang'
  | 'provinsi'
  | 'kota'
interface FilterOption { value: string; label: string; count: number | null }
type FilterSelection = Record<FilterKey, string[]>
type FilterOptions = Record<FilterKey, FilterOption[]>

const filterGroups: Array<{ key: FilterKey; label: string }> = [
  { key: 'installed_base', label: 'Status Kepemilikan Alat' },
  { key: 'visit_urgency', label: 'Urgensi Kunjungan' },
  { key: 'grading', label: 'Grading / Kelayakan Finansial' },
  { key: 'tipe_rs', label: 'Tipe Rumah Sakit' },
  { key: 'penyelenggara', label: 'Penyelenggara' },
  { key: 'cabang', label: 'Cabang' },
  { key: 'provinsi', label: 'Provinsi' },
  { key: 'kota', label: 'Kota / Kabupaten' },
]

function createDefaultFilters(): FilterSelection {
  return { installed_base: [], visit_urgency: [], grading: [], tipe_rs: [], penyelenggara: [], cabang: [], provinsi: [], kota: [] }
}
function createEmptyFilterOptions(): FilterOptions {
  return { installed_base: [], visit_urgency: [], grading: [], tipe_rs: [], penyelenggara: [], cabang: [], provinsi: [], kota: [] }
}
function cloneFilters(source: FilterSelection): FilterSelection {
  return Object.fromEntries(
    Object.entries(source).map(([key, values]) => [key, [...values]]),
  ) as FilterSelection
}

const filterRoot = ref<HTMLElement | null>(null)
const filterOpen = ref(false)
const filterLoading = ref(false)
const filterError = ref('')
const filterOptions = ref<FilterOptions>(createEmptyFilterOptions())
const appliedFilters = ref<FilterSelection>(createDefaultFilters())
const draftFilters = ref<FilterSelection>(createDefaultFilters())
const activeFilterCount = computed(() =>
  Object.values(appliedFilters.value).filter((values) => values.length > 0).length,
)

function buildListParams(): PiutangListParams {
  const filters = appliedFilters.value
  return {
    ...(searchQuery.value.trim() ? { search: searchQuery.value.trim() } : {}),
    ...(filters.installed_base.length ? { installed_base: filters.installed_base.join(',') } : {}),
    ...(filters.visit_urgency.length ? { visit_urgency: filters.visit_urgency.join(',') } : {}),
    ...(filters.grading.length ? { grading: filters.grading.join(',') } : {}),
    ...(filters.tipe_rs.length ? { tipe_rs: filters.tipe_rs.join(',') } : {}),
    ...(filters.penyelenggara.length ? { penyelenggara: filters.penyelenggara.join(',') } : {}),
    kode_cabang: filters.cabang.length ? filters.cabang.join(',') : '',
    ...(filters.provinsi.length ? { provinsi: filters.provinsi.join(',') } : {}),
    ...(filters.kota.length ? { kota: filters.kota.join(',') } : {}),
  }
}

async function loadPiutang() {
  const requestId = ++latestRequest
  loading.value = true
  loadError.value = ''
  try {
    const result = await fetchPiutangList(buildListParams())
    if (requestId !== latestRequest) return
    piutangData.value = result.items
    totalPerStatus.value = result.totalPerStatus
  } catch {
    if (requestId !== latestRequest) return
    loadError.value = 'Gagal memuat data piutang.'
    piutangData.value = []
  } finally {
    if (requestId === latestRequest) loading.value = false
  }
}

function optionCount(raw: Record<string, unknown>): number | null {
  const value = raw.hospital_count ?? raw.total_faskes
  if (value === null || value === undefined || value === '') return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

async function loadFilterOptions(options: { background?: boolean } = {}) {
  const params: Record<string, string> = {}
  if (draftFilters.value.cabang.length) params.cabang = draftFilters.value.cabang.join(',')
  if (draftFilters.value.provinsi.length) params.provinsi = draftFilters.value.provinsi.join(',')

  if (!options.background) filterLoading.value = true
  filterError.value = ''
  try {
    const response = await api.getbydata('dashboardpiutang/filters', params)
    const payload = isRecord(response.data) && isRecord(response.data.data) ? response.data.data : response.data
    if (!isRecord(payload)) throw new Error('Format opsi filter tidak valid.')

    const nextOptions = createEmptyFilterOptions()
    const hospitalTypeValues = new Set(['A', 'B', 'C', 'D', 'D Pratama'])
    filterGroups.forEach(({ key }) => {
      let items = Array.isArray(payload[key]) ? payload[key] : []
      if (key === 'tipe_rs' || key === 'penyelenggara') {
        const mixedOptions = Array.isArray(payload.tipe_penyelenggara) ? payload.tipe_penyelenggara : []
        items = mixedOptions.filter((item) => {
          if (!isRecord(item)) return false
          const value = pickString(item, 'value')
          return value === 'all' || (key === 'tipe_rs' ? hospitalTypeValues.has(value) : !hospitalTypeValues.has(value))
        })
      }
      nextOptions[key] = items
        .filter(isRecord)
        .map((raw) => ({ value: pickString(raw, 'value'), label: pickString(raw, 'label'), count: optionCount(raw) }))
        .filter((option) => option.value && option.label)
    })
    filterOptions.value = nextOptions
  } catch (error) {
    console.error('Gagal memuat opsi filter Piutang.', error)
    filterError.value = 'Pilihan filter gagal dimuat.'
  } finally {
    if (!options.background) filterLoading.value = false
  }
}

function isOptionActive(key: FilterKey, value: string): boolean {
  const selected = draftFilters.value[key]
  return value === 'all' ? selected.length === 0 : selected.includes(value)
}

function selectFilter(key: FilterKey, value: string) {
  const selected = draftFilters.value[key]
  draftFilters.value[key] = value === 'all'
    ? []
    : selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value]

  if (key === 'cabang') {
    draftFilters.value.provinsi = []
    draftFilters.value.kota = []
    void loadFilterOptions({ background: true })
  } else if (key === 'provinsi') {
    draftFilters.value.kota = []
    void loadFilterOptions({ background: true })
  }
}

function toggleFilter() {
  if (filterOpen.value) return cancelFilter()
  draftFilters.value = cloneFilters(appliedFilters.value)
  filterOpen.value = true
  const firstLoad = !filterOptions.value.installed_base.length
  void loadFilterOptions({ background: !firstLoad })
}

function cancelFilter() {
  filterOpen.value = false
  draftFilters.value = cloneFilters(appliedFilters.value)
}

function applyFilters() {
  appliedFilters.value = cloneFilters(draftFilters.value)
  filterOpen.value = false
  currentPage.value = 1
  void loadPiutang()
}

function resetFilters() {
  draftFilters.value = createDefaultFilters()
  appliedFilters.value = createDefaultFilters()
  currentPage.value = 1
  void loadPiutang()
  void loadFilterOptions({ background: true })
}

function onClickOutsideFilter(event: MouseEvent) {
  if (filterOpen.value && filterRoot.value && !filterRoot.value.contains(event.target as Node)) {
    cancelFilter()
  }
}

function formatTotal(total: number): string {
  return new Intl.NumberFormat('id-ID').format(total)
}

onMounted(() => {
  void loadPiutang()
  void loadFilterOptions()
  document.addEventListener('click', onClickOutsideFilter)
})

onBeforeUnmount(() => {
  if (searchTimer) clearTimeout(searchTimer)
  document.removeEventListener('click', onClickOutsideFilter)
})

const activeTab = ref<PiutangStatus>(
  isPiutangStatus(route.query.tab) ? route.query.tab : 'on_progress',
)

const filteredPiutang = computed(() =>
  piutangData.value.filter((piutang) => piutang.status === activeTab.value),
)

// Kelompokkan nota/faktur per faskes: satu faskes = satu kartu, nota-notanya
// jadi list di dalam kartu (mengikuti pola UI APK). Urutan grup mengikuti
// kemunculan pertama faskes pada data. Pagination dihitung per grup, bukan
// per nota, supaya satu faskes tidak terbelah antar halaman.
const groupedPiutang = computed<PiutangGroup[]>(() => {
  const groups = new Map<string, PiutangGroup>()
  for (const item of filteredPiutang.value) {
    const key = item.faskes || '—'
    const existing = groups.get(key)
    if (existing) {
      existing.items.push(item)
      existing.total += item.totalPiutang
    } else {
      groups.set(key, { faskes: item.faskes, items: [item], total: item.totalPiutang })
    }
  }
  return [...groups.values()]
})

const totalPages = computed(() => Math.max(1, Math.ceil(groupedPiutang.value.length / PAGE_SIZE)))
const pagedGroups = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return groupedPiutang.value.slice(start, start + PAGE_SIZE)
})

function countByStatus(status: PiutangStatus): number {
  return totalPerStatus.value[status] ?? 0
}

function selectTab(status: PiutangStatus) {
  activeTab.value = status
}

watch(activeTab, (status) => {
  currentPage.value = 1
  if (route.query.tab === status) return
  void router.replace({ query: { ...route.query, tab: status } })
})

watch(searchQuery, () => {
  if (searchTimer) clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    currentPage.value = 1
    void loadPiutang()
  }, 350)
})

watch(
  () => route.query.tab,
  (tab) => {
    if (isPiutangStatus(tab)) activeTab.value = tab
  },
)
</script>

<style scoped>
.piutang-page {
  padding-block: 12px 28px;
}

.piutang-page :deep(.piutang-panel) {
  overflow: hidden;
  border: 1px solid var(--bs-border-color, #e9edf1);
  border-radius: 18px;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.piutang-page :deep(.piutang-panel .card-header) {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) minmax(0, 474px);
  align-items: center;
  gap: 24px;
  padding: 20px 24px;
}

.piutang-page :deep(.piutang-panel__title) {
  color: var(--bs-heading-color, #1e293b);
  font-size: 20px;
  font-weight: 700;
}

.piutang-page :deep(.piutang-panel__body) {
  padding: 0 24px 24px;
}

.piutang-toolbar {
  display: grid;
  grid-template-columns: minmax(260px, 420px) max-content;
  align-items: center;
  justify-content: end;
  gap: 10px;
}

.piutang-search {
  display: flex;
  width: 100%;
  height: 44px;
  min-width: 0;
  align-items: center;
  gap: 9px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0 11px;
  background: #ffffff;
  color: #64748b;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.piutang-search .crm-search-icon {
  flex: 0 0 18px;
}

.piutang-search:focus-within {
  border-color: var(--app-primary, #18a6e4);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.14);
}

.piutang-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #0f172a;
  font-size: 13px;
}

.piutang-search input::placeholder {
  color: #94a3b8;
}

.piutang-search__loading {
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  color: var(--app-primary, #18a6e4);
}

.piutang-search__clear {
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

.piutang-filter {
  position: relative;
  z-index: 5;
}

.piutang-filter__trigger {
  position: relative;
  display: flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 0;
  background: #ffffff;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease,
    transform 0.2s ease;
}

.piutang-filter__trigger:hover,
.piutang-filter__trigger[aria-expanded='true'] {
  border-color: var(--app-primary, #18a6e4);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.07);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.piutang-filter__trigger:hover {
  transform: translateY(-1px);
}

.piutang-filter__trigger:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.4);
  outline-offset: 2px;
}

.piutang-filter__trigger b {
  position: absolute;
  top: -5px;
  right: -5px;
  display: grid;
  min-width: 17px;
  height: 17px;
  place-items: center;
  border-radius: 9px;
  padding: 0 4px;
  background: #ef4444;
  color: #ffffff;
  font-size: 9px;
}

.piutang-filter__dropdown {
  position: absolute;
  z-index: 1050;
  top: calc(100% + 10px);
  right: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  width: min(460px, calc(100vw - 32px));
  max-height: min(680px, calc(100vh - 120px));
  max-width: calc(100vw - 32px);
  overflow: hidden;
  border: 1px solid #e1e8ed;
  border-radius: 16px;
  color: #263442;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.16), 0 4px 12px rgba(15, 23, 42, 0.08);
}

.piutang-filter__header {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid #edf1f4;
}

.piutang-filter__header > div { display: grid; gap: 2px; }
.piutang-filter__header small { color: var(--app-primary, #18a6e4); font-size: 9px; font-weight: 800; letter-spacing: 0.08em; }
.piutang-filter__header strong { color: #263442; font-size: 15px; }
.piutang-filter__reset,
.piutang-filter__close { border: 0; background: transparent; cursor: pointer; }
.piutang-filter__reset { color: #e15b64; font-size: 11px; font-weight: 700; }
.piutang-filter__close { display: grid; width: 28px; height: 28px; place-items: center; padding: 0; color: #82909c; }

.piutang-filter__body {
  display: grid;
  align-content: start;
  gap: 16px;
  overflow-y: auto;
  padding: 14px 16px;
}

.piutang-filter__body fieldset { min-width: 0; margin: 0; border: 0; padding: 0; }
.piutang-filter__body legend { margin-bottom: 8px; color: #334155; font-size: 11.5px; font-weight: 700; }
.piutang-filter__chips { display: flex; flex-wrap: wrap; gap: 7px; }
.piutang-filter__chips button {
  display: inline-flex;
  max-width: 100%;
  min-height: 32px;
  align-items: center;
  gap: 7px;
  border: 1px solid #e1e7ed;
  border-radius: 17px;
  padding: 6px 11px;
  color: #647180;
  background: #f5f7f9;
  font-size: 10px;
  cursor: pointer;
}

.piutang-filter__chips button.active {
  border-color: var(--app-primary, #18a6e4);
  color: var(--app-primary-dark, #0e7490);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.16);
  font-weight: 700;
}

.piutang-filter__chips button span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.piutang-filter__chips button small { flex: 0 0 auto; border-radius: 10px; padding: 1px 5px; color: #71808c; background: rgba(255, 255, 255, 0.75); font-size: 8.5px; font-weight: 700; }
.piutang-filter__state {
  display: flex;
  min-height: 120px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #71808c;
  font-size: 12px;
  text-align: center;
}
.piutang-filter__state--error { flex-direction: column; }
.piutang-filter__state button { border: 0; color: var(--app-primary, #18a6e4); background: transparent; font-size: 11px; font-weight: 700; }
.piutang-filter__footer { padding: 12px 16px; border-top: 1px solid #edf1f4; }
.piutang-filter__apply {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0;
  border-radius: 10px;
  padding: 10px 14px;
  color: #ffffff;
  background: var(--app-primary, #18a6e4);
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;
}
.piutang-filter__apply:disabled,
.piutang-filter__reset:disabled { cursor: wait; opacity: 0.65; }

.piutang-tabs {
  display: flex;
  align-items: flex-end;
  gap: 26px;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: 1px solid var(--bs-border-color, #e2e8f0);
}

.piutang-tabs__button {
  position: relative;
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  border: 0;
  padding: 0 0 2px;
  background: transparent;
  color: var(--bs-secondary-color, #64748b);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.piutang-tabs__button::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: transparent;
  content: '';
}

.piutang-tabs__button:hover,
.piutang-tabs__button:focus-visible,
.piutang-tabs__button.is-active {
  color: var(--app-primary, var(--theme-default, #18a6e4));
}

.piutang-tabs__button:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.24);
  outline-offset: -2px;
}

.piutang-tabs__button.is-active::after {
  background: var(--app-primary, var(--theme-default, #18a6e4));
}

.piutang-tabs__badge {
  display: inline-grid;
  min-width: 22px;
  height: 22px;
  place-items: center;
  border-radius: 999px;
  padding-inline: 6px;
  background: var(--bs-tertiary-bg, #f1f5f9);
  color: inherit;
  font-size: 11px;
  line-height: 1;
}

.piutang-tabs__button.is-active .piutang-tabs__badge {
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.piutang-list {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
  padding-top: 20px;
}

.piutang-pagination {
  margin-top: 20px;
}

.piutang-empty {
  display: grid;
  min-height: 240px;
  place-items: center;
  align-content: center;
  gap: 10px;
  color: var(--bs-secondary-color, #64748b);
  text-align: center;
}

.piutang-empty__icon {
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 50%;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary, var(--theme-default, #18a6e4));
}

.piutang-empty p {
  margin: 0;
  font-size: 13px;
}

.piutang-detail-state {
  display: flex;
  min-height: 300px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--bs-border-color, #e5eaee);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
}

.piutang-detail-state p {
  margin: 0;
  color: var(--bs-secondary-color, #73808d);
}

:global(body.dark-only) .piutang-page :deep(.piutang-panel) {
  border-color: var(--bs-border-color, #34404c);
  box-shadow: none;
}

:global(body.dark-only) .piutang-search,
:global(body.dark-only) .piutang-filter__trigger,
:global(body.dark-only) .piutang-filter__dropdown {
  border-color: var(--bs-border-color, #34404c);
  background: var(--bs-body-bg, #1f2937);
}

:global(body.dark-only) .piutang-search input,
:global(body.dark-only) .piutang-filter__header strong,
:global(body.dark-only) .piutang-filter__body legend {
  color: var(--bs-body-color, #e5e7eb);
}

@media (max-width: 575.98px) {
  .piutang-page :deep(.piutang-panel .card-header) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-inline: 18px;
  }

  .piutang-page :deep(.piutang-panel__body) {
    padding-inline: 18px;
  }

  .piutang-tabs {
    gap: 20px;
  }

  .piutang-toolbar {
    grid-template-columns: minmax(0, 1fr) max-content;
  }

  .piutang-filter__dropdown {
    position: fixed;
    top: 88px;
    right: 16px;
    left: 16px;
    width: auto;
    max-width: none;
  }
}
</style>
