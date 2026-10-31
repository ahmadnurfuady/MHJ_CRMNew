<template>
  <div class="container-fluid target-page">
    <section class="target-overview">
      <header class="target-overview__heading">
        <div class="target-heading">
          <span class="target-heading__icon"><vue-feather type="target" size="20" /></span>
          <div>
            <p>Setting</p>
            <h3>Target Tahunan</h3>
            <span class="target-heading__description">
              Kelola target per tahun, divisi, cabang, dan indikator melalui grid.
            </span>
          </div>
        </div>
        <div class="target-heading__actions">
          <select
            v-model.number="selectedYearId"
            class="form-select target-year-select"
            :disabled="yearsLoading"
            @change="onYearChange"
          >
            <option :value="0">
              {{ yearsLoading ? 'Memuat tahun...' : 'Pilih tahun target' }}
            </option>
            <option v-for="year in years" :key="year.id" :value="year.id">
              {{ year.year_name }}{{ year.is_locked ? ' (Terkunci)' : '' }}
            </option>
          </select>
          <button
            class="btn btn-primary target-add-button mhj-add-button"
            type="button"
            :disabled="!canEdit"
            @click="saveDraft"
          >
            <vue-feather type="save" size="17" />
            {{ saving ? 'Menyimpan...' : 'Simpan Draft' }}
          </button>
          <button
            class="btn btn-outline-primary target-submit-button"
            type="button"
            :disabled="!canEdit || !dirtyRows.size"
            @click="submitForApproval"
          >
            <vue-feather type="send" size="16" />
            Ajukan Persetujuan
          </button>
        </div>
      </header>

      <div class="target-overview__metrics">
        <article class="target-metric target-metric--accent">
          <span class="target-metric__label">Kombinasi divisi-cabang</span>
          <strong class="target-metric__value">{{ divisionBranches.length }}</strong>
          <small>{{ filledCount }} terisi · {{ emptyCount }} kosong</small>
        </article>
        <article class="target-metric">
          <span class="target-metric__label is-green">Terisi</span>
          <strong class="target-metric__value">{{ filledCount }}</strong>
          <small>kombinasi sudah memiliki target</small>
        </article>
        <article class="target-metric">
          <span class="target-metric__label is-gray">Status versi</span>
          <strong class="target-metric__value">{{ statusLabel(currentStatus) }}</strong>
          <small>{{ currentVersion ? `Versi ${currentVersion.version_number} · ${currentVersion.version_name}` : 'Belum ada versi aktif' }}</small>
        </article>
      </div>
    </section>

    <div class="card target-grid-card">
      <div class="card-body">
        <div class="target-toolbar">
          <div class="target-search">
            <vue-feather type="search" size="18" />
            <input v-model.trim="search" type="search" placeholder="Cari divisi atau cabang..." />
          </div>
          <div class="target-toolbar__right">
            <select v-model="divisionFilter" class="form-select target-filter-select">
              <option value="all">Semua divisi</option>
              <option v-for="division in divisionOptions" :key="division" :value="division">
                {{ division }}
              </option>
            </select>
            <select v-model="branchFilter" class="form-select target-filter-select">
              <option value="all">Semua cabang</option>
              <option v-for="branch in branchOptions" :key="branch" :value="branch">
                {{ branch }}
              </option>
            </select>
            <button
              class="btn btn-light target-copy-button"
              type="button"
              :disabled="!canEdit"
              @click="copyPreviousYear"
            >
              <vue-feather type="copy" size="15" />
              Salin Tahun Lalu
            </button>
          </div>
        </div>

        <div v-if="gridLoading" class="target-empty">
          <span><vue-feather type="loader" size="32" /></span>
          <h5>Memuat target...</h5>
        </div>

        <div v-else-if="gridError" class="target-empty">
          <span><vue-feather type="alert-circle" size="32" /></span>
          <h5>{{ gridError }}</h5>
          <button class="btn btn-primary" type="button" @click="loadGrid">Coba lagi</button>
        </div>

        <div v-else-if="!selectedYearId" class="target-empty">
          <span><vue-feather type="calendar" size="32" /></span>
          <h5>Pilih tahun target</h5>
          <p>Pilih periode tahun untuk mulai menginput atau melihat target.</p>
        </div>

        <div v-else class="target-grid-wrapper">
          <table class="target-grid">
            <thead>
              <tr>
                <th class="col-division">Divisi</th>
                <th class="col-branch">Cabang</th>
                <th v-for="indicator in activeIndicators" :key="indicator.id" class="col-value">
                  {{ indicator.indicator_name }}
                  <small>{{ indicator.unit_name }}</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="combo in filteredCombos" :key="combo.id">
                <td class="col-division">{{ combo.division_name }}</td>
                <td class="col-branch">{{ combo.branch_name }}</td>
                <td v-for="indicator in activeIndicators" :key="indicator.id" class="col-value">
                  <input
                    :value="displayValue(combo.id, indicator.id)"
                    class="target-cell-input"
                    :class="{ 'is-dirty': isDirty(combo.id, indicator.id) }"
                    type="text"
                    inputmode="decimal"
                    :disabled="!canEdit"
                    :placeholder="'0'"
                    @input="onCellInput(combo.id, indicator.id, $event)"
                    @blur="onCellBlur(combo.id, indicator.id)"
                  />
                </td>
              </tr>
              <tr v-if="!filteredCombos.length">
                <td :colspan="2 + activeIndicators.length" class="target-grid-empty">
                  Tidak ada kombinasi divisi-cabang yang cocok dengan filter.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p v-if="selectedYearId && !gridLoading && !gridError" class="target-grid-note">
          <vue-feather type="info" size="14" />
          Sel dengan tanda biru berarti ada perubahan yang belum disimpan. Target yang sudah
          diajukan, disetujui, atau dikunci tidak dapat diedit pada grid ini.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'

import { targetService } from '@/services/targetService'
import type {
  DivisionBranchItem,
  TargetIndicatorItem,
  TargetPlanItem,
  TargetPlanSaveRow,
  TargetStatus,
  TargetVersionItem,
  TargetYearItem,
} from '@/types/target'
import { parseBackendError } from '@/utils/errorParser'

/** Kunci sel pada grid: kombinasi division_branch + indikator. */
function cellKey(divisionBranchId: number, indicatorId: number): string {
  return `${divisionBranchId}:${indicatorId}`
}

/** Tampilkan pesan yang sudah diterjemahkan tanpa membocorkan detail server. */
function showErrorDetail(title: string, error: unknown, fallback: string) {
  const parsed = parseBackendError(error, title)
  return Swal.fire({
    icon: 'error',
    title: parsed.title === 'Permintaan Gagal' ? title : parsed.title,
    text: parsed.message || fallback,
    confirmButtonColor: 'var(--theme-default)',
  })
}

const years = ref<TargetYearItem[]>([])
const indicators = ref<TargetIndicatorItem[]>([])
const divisionBranches = ref<DivisionBranchItem[]>([])
const currentVersion = ref<TargetVersionItem | null>(null)
const plans = ref<TargetPlanItem[]>([])

const selectedYearId = ref(0)
const yearsLoading = ref(false)
const gridLoading = ref(false)
const gridError = ref('')
const saving = ref(false)
const search = ref('')
const divisionFilter = ref('all')
const branchFilter = ref('all')

/** Nilai sel yang sedang diedit (belum disimpan). */
const editedValues = reactive<Record<string, string>>({})
/** Kunci sel yang berubah sejak terakhir disimpan. */
const dirtyRows = ref<Set<string>>(new Set())

const activeIndicators = computed(() => indicators.value.filter((item) => item.is_active))
const currentStatus = computed<TargetStatus>(() => currentVersion.value?.status ?? 'draft')
const canEdit = computed(() => {
  const year = years.value.find((item) => item.id === selectedYearId.value)
  return (
    Boolean(selectedYearId.value) &&
    !year?.is_locked &&
    (currentStatus.value === 'draft' || !currentVersion.value)
  )
})

const divisionOptions = computed(() =>
  [...new Set(divisionBranches.value.map((item) => item.division_name))].sort((a, b) =>
    a.localeCompare(b, 'id-ID')
  )
)
const branchOptions = computed(() =>
  [...new Set(divisionBranches.value.map((item) => item.branch_name))].sort((a, b) =>
    a.localeCompare(b, 'id-ID')
  )
)

const filteredCombos = computed(() => {
  const keyword = search.value.toLocaleLowerCase('id-ID')
  return divisionBranches.value.filter((combo) => {
    const matchesSearch = `${combo.division_name} ${combo.branch_name}`
      .toLocaleLowerCase('id-ID')
      .includes(keyword)
    const matchesDivision =
      divisionFilter.value === 'all' || combo.division_name === divisionFilter.value
    const matchesBranch = branchFilter.value === 'all' || combo.branch_name === branchFilter.value
    return matchesSearch && matchesDivision && matchesBranch
  })
})

const filledCount = computed(() => {
  const filled = new Set(plans.value.filter((plan) => plan.target_value !== null).map((plan) => plan.division_branch_id))
  return filled.size
})
const emptyCount = computed(() => Math.max(divisionBranches.value.length - filledCount.value, 0))

function statusLabel(status: TargetStatus): string {
  const labels: Record<TargetStatus, string> = {
    draft: 'Draft',
    submitted: 'Diajukan',
    approved: 'Disetujui',
    locked: 'Terkunci',
  }
  return labels[status]
}

function planValue(divisionBranchId: number, indicatorId: number): number | null {
  const plan = plans.value.find(
    (item) => item.division_branch_id === divisionBranchId && item.indicator_id === indicatorId
  )
  return plan?.target_value ?? null
}

function displayValue(divisionBranchId: number, indicatorId: number): string {
  const key = cellKey(divisionBranchId, indicatorId)
  if (key in editedValues) return editedValues[key] ?? ''
  const value = planValue(divisionBranchId, indicatorId)
  if (value === null) return ''
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(value)
}

function isDirty(divisionBranchId: number, indicatorId: number): boolean {
  return dirtyRows.value.has(cellKey(divisionBranchId, indicatorId))
}

/** Terima input angka lokal (mis. "5.000.000" atau "2,5") dan simpan mentah. */
function onCellInput(divisionBranchId: number, indicatorId: number, event: Event) {
  const raw = (event.target as HTMLInputElement).value
  const key = cellKey(divisionBranchId, indicatorId)
  editedValues[key] = raw
  const normalized = raw.replace(/\./g, '').replace(',', '.').trim()
  const parsed = normalized === '' ? null : Number(normalized)
  const saved = planValue(divisionBranchId, indicatorId)
  const changed = parsed !== saved && !(parsed === null && saved === null)
  if (changed) dirtyRows.value.add(key)
  else dirtyRows.value.delete(key)
}

function onCellBlur(divisionBranchId: number, indicatorId: number) {
  const key = cellKey(divisionBranchId, indicatorId)
  const raw = editedValues[key]
  if (raw === undefined) return
  const normalized = raw.replace(/\./g, '').replace(',', '.').trim()
  const parsed = normalized === '' ? null : Number(normalized)
  if (parsed !== null && Number.isFinite(parsed)) {
    editedValues[key] = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(parsed)
  }
}

async function loadLookups() {
  yearsLoading.value = true
  try {
    const [yearItems, indicatorItems, comboItems] = await Promise.all([
      targetService.getYears(),
      targetService.getIndicators(),
      targetService.getDivisionBranches(),
    ])
    years.value = yearItems
    indicators.value = indicatorItems
    divisionBranches.value = comboItems.filter((item) => item.is_active)
    const active = yearItems.find((item) => item.is_active && !item.is_locked) ?? yearItems[0]
    if (active) {
      selectedYearId.value = active.id
      await loadGrid()
    }
  } catch (error) {
    console.error('Gagal memuat lookup target:', error)
    gridError.value = 'Data master target gagal dimuat. Silakan muat ulang halaman.'
  } finally {
    yearsLoading.value = false
  }
}

async function loadGrid() {
  if (!selectedYearId.value) return
  gridLoading.value = true
  gridError.value = ''
  try {
    const versions = await targetService.getVersions(selectedYearId.value)
    currentVersion.value =
      versions.sort((a, b) => b.version_number - a.version_number)[0] ?? null
    plans.value = currentVersion.value
      ? await targetService.getPlans(currentVersion.value.id)
      : []
    Object.keys(editedValues).forEach((key) => delete editedValues[key])
    dirtyRows.value.clear()
  } catch (error) {
    console.error('Gagal memuat target:', error)
    gridError.value = 'Data target gagal dimuat. Silakan coba lagi.'
  } finally {
    gridLoading.value = false
  }
}

function onYearChange() {
  loadGrid()
}

function collectRows(): TargetPlanSaveRow[] {
  const rows: TargetPlanSaveRow[] = []
  dirtyRows.value.forEach((key) => {
    const [divisionBranchId, indicatorId] = key.split(':').map(Number)
    if (!divisionBranchId || !indicatorId) return
    const raw = editedValues[key]?.replace(/\./g, '').replace(',', '.').trim() ?? ''
    const parsed = raw === '' ? null : Number(raw)
    if (parsed === null || !Number.isFinite(parsed)) return
    rows.push({
      division_branch_id: divisionBranchId,
      indicator_id: indicatorId,
      target_value: parsed,
      notes: '',
    })
  })
  return rows
}

async function saveDraft(): Promise<boolean> {
  if (!currentVersion.value && !selectedYearId.value) return false
  const rows = collectRows()
  if (!rows.length) {
    await Swal.fire({
      icon: 'info',
      title: 'Tidak ada perubahan',
      text: 'Belum ada nilai target yang diubah.',
      timer: 1600,
      showConfirmButton: false,
    })
    return false
  }

  saving.value = true
  try {
    await targetService.savePlans(currentVersion.value?.id ?? 0, rows)
    await loadGrid()
    await Swal.fire({
      icon: 'success',
      title: 'Draft tersimpan',
      timer: 1600,
      showConfirmButton: false,
    })
    return true
  } catch (error) {
    console.error('Gagal menyimpan target:', error)
    await showErrorDetail(
      'Target gagal disimpan',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
    return false
  } finally {
    saving.value = false
  }
}

async function submitForApproval() {
  if (!currentVersion.value) return
  const confirmation = await Swal.fire({
    icon: 'question',
    title: 'Ajukan target ini?',
    text: 'Target yang diajukan tidak dapat diedit sampai proses persetujuan selesai.',
    showCancelButton: true,
    confirmButtonText: 'Ya, ajukan',
    cancelButtonText: 'Batal',
    confirmButtonColor: 'var(--theme-default)',
  })
  if (!confirmation.isConfirmed) return

  try {
    const saved = await saveDraft()
    if (!saved && dirtyRows.value.size) return
    await targetService.submitVersion(currentVersion.value.id)
    await loadGrid()
    await Swal.fire({
      icon: 'success',
      title: 'Target diajukan',
      timer: 1600,
      showConfirmButton: false,
    })
  } catch (error) {
    console.error('Gagal mengajukan target:', error)
    await showErrorDetail(
      'Target gagal diajukan',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
  }
}

async function copyPreviousYear() {
  const currentIndex = years.value.findIndex((item) => item.id === selectedYearId.value)
  const source = years.value[currentIndex + 1]
  if (!source) {
    await Swal.fire({
      icon: 'info',
      title: 'Tidak ada tahun sebelumnya',
      text: 'Tidak ditemukan periode lain untuk disalin.',
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  const confirmation = await Swal.fire({
    icon: 'question',
    title: `Salin target ${source.year_name}?`,
    text: 'Target tersalin akan berstatus Draft dan tidak menimpa target yang sudah ada.',
    showCancelButton: true,
    confirmButtonText: 'Ya, salin',
    cancelButtonText: 'Batal',
    confirmButtonColor: 'var(--theme-default)',
  })
  if (!confirmation.isConfirmed) return

  try {
    await targetService.copyFromPreviousYear({
      source_year_id: source.id,
      target_year_id: selectedYearId.value,
    })
    await loadGrid()
    await Swal.fire({
      icon: 'success',
      title: 'Target tersalin',
      timer: 1600,
      showConfirmButton: false,
    })
  } catch (error) {
    console.error('Gagal menyalin target:', error)
    await showErrorDetail(
      'Target gagal disalin',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
  }
}

onMounted(loadLookups)
</script>

<style scoped>
.target-page {
  --target-blue: var(--theme-default, #1e80d1);
  --target-ink: #1f2a37;
  --target-muted: #758195;
  padding-bottom: 28px;
}

.target-overview {
  overflow: hidden;
  border: 1px solid #e2e8ee;
  border-radius: 18px;
  margin-bottom: 18px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(31, 52, 73, 0.045);
}

.target-overview__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid #e8eef2;
  padding: 20px 24px;
}

.target-heading {
  display: flex;
  align-items: center;
  gap: 14px;
}

.target-heading__icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border: 1px solid #e2e8ed;
  border-radius: 12px;
  color: var(--target-blue);
  background: #fff;
  box-shadow: 0 4px 14px rgba(26, 47, 67, 0.06);
}

.target-heading p {
  margin: 0 0 2px;
  color: var(--target-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.target-heading h3 {
  margin: 0;
  color: var(--target-ink);
  font-size: 23px;
}

.target-heading__description {
  display: block;
  margin-top: 3px;
  color: var(--target-muted);
  font-size: 12px;
}

.target-heading__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
}

.target-year-select {
  width: 220px;
  height: 44px;
}

.target-add-button,
.target-submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  box-sizing: border-box;
  padding: 0 18px;
  border-radius: 8px;
  font-weight: 700;
  white-space: nowrap;
}

.target-add-button {
  border-color: var(--target-blue);
  color: #fff;
  background: var(--target-blue);
  box-shadow: 0 4px 10px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.target-add-button:hover,
.target-add-button:focus {
  border-color: var(--app-primary-hover, #1493cc) !important;
  color: #fff !important;
  background: var(--app-primary-hover, #1493cc) !important;
}

.target-overview__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  padding: 22px 24px 24px;
}

.target-metric {
  position: relative;
  overflow: hidden;
  min-height: 108px;
  border: 1px solid #dfe8ee;
  border-radius: 16px;
  padding: 18px 21px;
  background: #ffffff;
  box-shadow: 0 7px 20px rgba(31, 52, 73, 0.035);
}

.target-metric--accent::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 5px;
  background: var(--target-blue);
  content: '';
}

.target-metric__label {
  display: block;
  margin-bottom: 13px;
  color: var(--app-primary-dark, #0284b8);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.target-metric__label.is-green {
  color: #25a55f;
}
.target-metric__label.is-gray {
  color: #7a8798;
}

.target-metric__value {
  display: block;
  color: var(--target-ink);
  font-size: clamp(25px, 2.6vw, 34px);
  font-weight: 700;
  line-height: 1.05;
}

.target-metric > small {
  display: block;
  margin-top: 8px;
  color: var(--target-muted);
  font-size: 10px;
}

.target-grid-card {
  border: 0;
  border-radius: 14px;
}

.target-grid-card > .card-body {
  padding: 24px;
}

.target-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 20px;
}

.target-toolbar__right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.target-search {
  display: flex;
  align-items: center;
  gap: 10px;
  width: min(100%, 340px);
  padding: 0 14px;
  border: 1px solid #e1e6ed;
  border-radius: 9px;
  color: #8a95a5;
  background: #fff;
}

.target-search:focus-within {
  border-color: var(--target-blue);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 32, 167, 220), 0.1);
}

.target-search input {
  width: 100%;
  height: 42px;
  border: 0;
  outline: 0;
  color: var(--target-ink);
  background: transparent;
  font-size: 14px;
}

.target-filter-select {
  width: 180px;
  height: 42px;
}

.target-copy-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 42px;
  white-space: nowrap;
}

.target-grid-wrapper {
  overflow-x: auto;
  border: 1px solid #e4e9ef;
  border-radius: 12px;
}

.target-grid {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.target-grid thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 12px 14px;
  border-bottom: 1px solid #e4e9ef;
  color: #5b6b7f;
  background: #f6f9fb;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: uppercase;
  white-space: nowrap;
}

.target-grid thead th small {
  display: block;
  color: #8a95a5;
  font-size: 10px;
  font-weight: 600;
  text-transform: none;
}

.target-grid tbody td {
  padding: 8px 14px;
  border-bottom: 1px solid #eef2f5;
  color: var(--target-ink);
}

.target-grid tbody tr:hover td {
  background: #f8fbfd;
}

.col-division,
.col-branch {
  min-width: 160px;
  white-space: nowrap;
}

.col-value {
  min-width: 170px;
}

.target-cell-input {
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: 7px;
  color: var(--target-ink);
  background: transparent;
  font-size: 13px;
  text-align: right;
}

.target-cell-input:hover:not(:disabled) {
  border-color: #dbe4ec;
  background: #fff;
}

.target-cell-input:focus {
  border-color: var(--target-blue);
  outline: 0;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 32, 167, 220), 0.12);
}

.target-cell-input.is-dirty {
  border-color: var(--target-blue);
  background: var(--app-primary-wash, #eef9fd);
}

.target-cell-input:disabled {
  color: #9aa5b3;
  cursor: not-allowed;
}

.target-grid-empty {
  padding: 40px 20px !important;
  color: var(--target-muted);
  text-align: center;
}

.target-grid-note {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 16px 0 0;
  color: var(--target-muted);
  font-size: 12px;
}

.target-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 20px;
  text-align: center;
}

.target-empty > span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
  border-radius: 50%;
  color: var(--target-blue);
  background: var(--app-primary-wash, #ebf7fc);
}

.target-empty h5 {
  margin-bottom: 6px;
}
.target-empty p {
  margin: 0 0 17px;
  color: var(--target-muted);
}

@media (max-width: 991.98px) {
  .target-heading__actions {
    flex-wrap: wrap;
  }
}

@media (max-width: 767.98px) {
  .target-overview__heading {
    align-items: flex-start;
    flex-direction: column;
  }
  .target-heading__actions {
    width: 100%;
    flex-direction: column;
  }
  .target-year-select,
  .target-add-button,
  .target-submit-button {
    width: 100%;
  }
  .target-overview__metrics {
    grid-template-columns: 1fr;
    padding: 18px;
  }
  .target-toolbar,
  .target-toolbar__right {
    align-items: stretch;
    flex-direction: column;
  }
  .target-search,
  .target-filter-select {
    width: 100%;
  }
  .target-grid-card > .card-body {
    padding: 16px;
  }
}

:global(body.dark-only) .target-overview,
:global(body.dark-only) .target-metric,
:global(body.dark-only) .target-grid-card,
:global(body.dark-only) .target-search,
:global(body.dark-only) .target-cell-input:hover:not(:disabled),
:global(body.dark-only) .target-cell-input:focus {
  border-color: #334155;
  background: #1f2937;
}

:global(body.dark-only) .target-overview__heading,
:global(body.dark-only) .target-grid thead th {
  border-color: #334155;
}

:global(body.dark-only) .target-metric__value,
:global(body.dark-only) .target-search input,
:global(body.dark-only) .target-cell-input,
:global(body.dark-only) .target-heading h3 {
  color: #eef2f7;
}

:global(body.dark-only) .target-heading__icon {
  border-color: #334155;
  background: #1f2937;
}

:global(body.dark-only) .target-grid thead th {
  color: #94a3b8;
  background: #263242;
}

:global(body.dark-only) .target-grid tbody td {
  border-color: #2c3a4e;
}
</style>
