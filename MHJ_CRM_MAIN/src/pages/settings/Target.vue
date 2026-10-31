<template>
  <div class="container-fluid target-page">
    <section class="target-overview">
      <header class="target-overview__heading">
        <div class="target-heading">
          <span class="target-heading__icon"><vue-feather type="target" size="20" /></span>
          <div>
            <p>Setting</p>
            <h3>Target Finansial &amp; Realisasi</h3>
            <span class="target-heading__description">
              Catat target penjualan per bulan, cabang, dan divisi, lalu pantau realisasinya.
            </span>
          </div>
        </div>
        <div class="target-heading__actions">
          <select v-model.number="filterYear" class="form-select target-filter-select" @change="fetchList">
            <option v-for="year in yearOptions" :key="year" :value="year">{{ year }}</option>
          </select>
          <select v-model.number="filterMonth" class="form-select target-filter-select" @change="fetchList">
            <option :value="0">Semua Bulan</option>
            <option v-for="(label, idx) in monthLabels" :key="idx + 1" :value="idx + 1">
              {{ label }}
            </option>
          </select>
          <button class="btn btn-primary target-add-button mhj-add-button" type="button" @click="openCreate">
            <vue-feather type="plus" size="17" />
            Tambah Target
          </button>
        </div>
      </header>

      <div class="target-overview__metrics">
        <article class="target-metric target-metric--accent">
          <span class="target-metric__label">Total Target</span>
          <strong class="target-metric__value">{{ formatCurrency(kpi.total_target) }}</strong>
          <small>{{ kpi.total_baris }} baris target</small>
        </article>
        <article class="target-metric">
          <span class="target-metric__label is-green">Total Realisasi</span>
          <strong class="target-metric__value">{{ formatCurrency(kpi.total_realisasi) }}</strong>
          <small>akumulasi realisasi penjualan</small>
        </article>
        <article class="target-metric">
          <span class="target-metric__label is-blue">% Capaian</span>
          <strong class="target-metric__value">{{ formatPercent(kpi.avg_capaian) }}</strong>
          <span class="target-metric__badge" :class="achievementBadgeClass(kpi.avg_capaian)">
            {{ achievementBadgeLabel(kpi.avg_capaian) }}
          </span>
        </article>
        <article class="target-metric">
          <span class="target-metric__label" :class="kpi.gap >= 0 ? 'is-green' : 'is-red'">Selisih / Gap</span>
          <strong class="target-metric__value" :class="{ 'is-negative': kpi.gap < 0 }">
            {{ formatCurrency(kpi.gap) }}
          </strong>
          <small>{{ kpi.gap >= 0 ? 'Realisasi melampaui target' : 'Realisasi di bawah target' }}</small>
        </article>
      </div>
    </section>

    <div class="card target-list-card">
      <div class="card-body">
        <div class="target-toolbar">
          <div class="target-search">
            <vue-feather type="search" size="18" />
            <input
              v-model.trim="search"
              type="search"
              placeholder="Cari divisi, cabang, atau keterangan..."
              @input="onSearchInput"
            />
          </div>
          <div class="target-toolbar__right">
            <select v-model="filterCabang" class="form-select target-filter-select" @change="fetchList">
              <option value="">Semua Cabang</option>
              <option v-for="cabang in cabangOptions" :key="cabang.kode" :value="cabang.kode">
                {{ cabang.nama }}
              </option>
            </select>
            <select v-model="filterDevisi" class="form-select target-filter-select" @change="fetchList">
              <option value="">Semua Divisi</option>
              <option v-for="devisi in devisiOptions" :key="devisi.kode" :value="devisi.kode">
                {{ devisi.nama }}
              </option>
            </select>
          </div>
        </div>

        <div v-if="listLoading" class="target-empty">
          <span><vue-feather type="loader" size="32" /></span>
          <h5>Memuat target...</h5>
        </div>

        <div v-else-if="listError" class="target-empty">
          <span><vue-feather type="alert-circle" size="32" /></span>
          <h5>{{ listError }}</h5>
          <button class="btn btn-primary" type="button" @click="fetchList">Coba lagi</button>
        </div>

        <div v-else-if="!targets.length" class="target-empty">
          <span><vue-feather type="inbox" size="32" /></span>
          <h5>Belum ada target</h5>
          <p>Belum ada data target penjualan untuk filter yang dipilih.</p>
          <button class="btn btn-primary mhj-add-button" type="button" @click="openCreate">
            <vue-feather type="plus" size="16" />
            Tambah Target
          </button>
        </div>

        <div v-else class="target-grid-wrapper">
          <table class="target-grid">
            <thead>
              <tr>
                <th class="col-no">No</th>
                <th class="col-periode">Periode</th>
                <th class="col-cabang">Cabang</th>
                <th class="col-devisi">Divisi</th>
                <th class="col-money">Nominal Target</th>
                <th class="col-money">Realisasi</th>
                <th class="col-persen">% Capaian</th>
                <th class="col-money">Selisih</th>
                <th class="col-keterangan">Keterangan</th>
                <th class="col-aksi">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in paginatedTargets" :key="row.id">
                <td class="col-no">{{ (currentPage - 1) * pageSize + index + 1 }}</td>
                <td class="col-periode">
                  <span class="target-periode__month">{{ row.nama_bulan }}</span>
                  <small class="target-periode__year">{{ row.tahun }}</small>
                </td>
                <td class="col-cabang">{{ row.nama_cabang }}</td>
                <td class="col-devisi">{{ row.nama_devisi }}</td>
                <td class="col-money">{{ formatCurrency(row.nominal) }}</td>
                <td class="col-money">{{ formatCurrency(row.realisasi) }}</td>
                <td class="col-persen">
                  <span class="target-badge" :class="achievementBadgeClass(row.persentase_capaian)">
                    {{ formatPercent(row.persentase_capaian) }}
                  </span>
                </td>
                <td class="col-money" :class="{ 'is-negative': row.selisih < 0 }">
                  {{ formatCurrency(row.selisih) }}
                </td>
                <td class="col-keterangan">{{ row.keterangan || '-' }}</td>
                <td class="col-aksi">
                  <button class="target-action target-action--edit" type="button" title="Edit" @click="openEdit(row)">
                    <vue-feather type="edit-2" size="15" />
                  </button>
                  <button class="target-action target-action--delete" type="button" title="Hapus" @click="confirmDelete(row)">
                    <vue-feather type="trash-2" size="15" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="!listLoading && targets.length > pageSize" class="target-pagination">
          <small>
            Menampilkan {{ (currentPage - 1) * pageSize + 1 }} -
            {{ Math.min(currentPage * pageSize, targets.length) }}
            dari {{ targets.length }} data
          </small>
          <div class="target-pagination__buttons">
            <button
              class="btn btn-light target-page-btn"
              type="button"
              :disabled="currentPage === 1"
              @click="currentPage = Math.max(1, currentPage - 1)"
            >
              <vue-feather type="chevron-left" size="14" />
              Sebelumnya
            </button>
            <span class="target-page-label">Hal {{ currentPage }} / {{ totalPages }}</span>
            <button
              class="btn btn-light target-page-btn"
              type="button"
              :disabled="currentPage >= totalPages"
              @click="currentPage = Math.min(totalPages, currentPage + 1)"
            >
              Berikutnya
              <vue-feather type="chevron-right" size="14" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <Modal
      :modal-open="modalOpen"
      :title="form.id ? 'Edit Target' : 'Tambah Target'"
      size-class="modal-lg"
      dialog-class="modal-dialog-scrollable target-form-dialog"
      :modal-centered="true"
      @close-modal="closeModal"
    >
      <div class="modal-body target-form-modal-body">
        <form class="row g-3 needs-validation mhj-form target-form" @submit.prevent="saveTarget">
          <div class="col-md-6">
            <label for="target-cabang" class="form-label">
              Cabang <span class="txt-danger">*</span>
            </label>
            <select
              id="target-cabang"
              v-model="form.kode_cabang"
              class="form-select"
              :class="{ 'is-invalid': submitted && !form.kode_cabang }"
            >
              <option value="">Pilih Cabang</option>
              <option v-for="cabang in cabangOptions" :key="cabang.kode" :value="cabang.kode">
                {{ cabang.nama }}
              </option>
            </select>
            <div class="invalid-feedback">Cabang wajib dipilih.</div>
          </div>

          <div class="col-md-6">
            <label for="target-devisi" class="form-label">
              Divisi <span class="txt-danger">*</span>
            </label>
            <select
              id="target-devisi"
              v-model="form.kode_devisi"
              class="form-select"
              :class="{ 'is-invalid': submitted && !form.kode_devisi }"
            >
              <option value="">Pilih Divisi</option>
              <option v-for="devisi in devisiOptions" :key="devisi.kode" :value="devisi.kode">
                {{ devisi.nama }}
              </option>
            </select>
            <div class="invalid-feedback">Divisi wajib dipilih.</div>
          </div>

          <div class="col-md-6">
            <label for="target-tahun" class="form-label">
              Tahun <span class="txt-danger">*</span>
            </label>
            <select
              id="target-tahun"
              v-model.number="form.tahun"
              class="form-select"
              :class="{ 'is-invalid': submitted && !form.tahun }"
            >
              <option v-for="year in yearOptions" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="target-bulan" class="form-label">Bulan</label>
            <select id="target-bulan" v-model.number="form.bulan" class="form-select">
              <option :value="0">Tahunan</option>
              <option v-for="(label, idx) in monthLabels" :key="idx + 1" :value="idx + 1">
                {{ label }}
              </option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="target-nominal" class="form-label">
              Nominal Target (Rp) <span class="txt-danger">*</span>
            </label>
            <input
              id="target-nominal"
              v-model="form.nominal_display"
              class="form-control"
              :class="{ 'is-invalid': submitted && !isNominalValid }"
              type="text"
              inputmode="numeric"
              placeholder="Rp 0"
              @input="onCurrencyInput('nominal', $event)"
              @blur="onCurrencyBlur('nominal')"
            />
            <div class="invalid-feedback">Nominal target wajib diisi dan lebih dari 0.</div>
          </div>

          <div class="col-md-6">
            <label for="target-realisasi" class="form-label">
              Realisasi (Rp) <span class="txt-danger">*</span>
            </label>
            <input
              id="target-realisasi"
              v-model="form.realisasi_display"
              class="form-control"
              :class="{ 'is-invalid': submitted && !isRealisasiValid }"
              type="text"
              inputmode="numeric"
              placeholder="Rp 0"
              @input="onCurrencyInput('realisasi', $event)"
              @blur="onCurrencyBlur('realisasi')"
            />
            <div class="invalid-feedback">Realisasi wajib diisi (minimal 0).</div>
          </div>

          <div class="col-12">
            <label for="target-keterangan" class="form-label">Keterangan</label>
            <textarea
              id="target-keterangan"
              v-model.trim="form.keterangan"
              class="form-control"
              rows="3"
              placeholder="Contoh: Target promo akhir tahun"
            ></textarea>
            <small class="text-muted">Keterangan boleh dikosongkan.</small>
          </div>

          <div class="col-12 target-form-footer">
            <button class="btn btn-light" type="button" :disabled="saving" @click="closeModal">
              Batal
            </button>
            <button class="btn btn-primary" type="submit" :disabled="saving">
              <vue-feather v-if="!saving" type="save" size="16" />
              <vue-feather v-else type="loader" size="16" />
              {{ saving ? 'Menyimpan...' : form.id ? 'Simpan Perubahan' : 'Simpan Target' }}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import Swal from 'sweetalert2'

import Modal from '@/components/shared/Modal.vue'
import { targetService } from '@/services/targetService'
import type {
  TargetFormPayload,
  TargetItem,
  TargetKpi,
  TargetMasterOption,
} from '@/types/target'
import { parseBackendError } from '@/utils/errorParser'

const monthLabels = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

const currentYear = new Date().getFullYear()
const yearOptions = computed(() => {
  const list: number[] = []
  for (let y = currentYear + 1; y >= currentYear - 4; y -= 1) list.push(y)
  return list
})

const targets = ref<TargetItem[]>([])
const kpi = ref<TargetKpi>({
  total_target: 0,
  total_realisasi: 0,
  gap: 0,
  avg_capaian: 0,
  total_baris: 0,
})
const cabangOptions = ref<TargetMasterOption[]>([])
const devisiOptions = ref<TargetMasterOption[]>([])

const listLoading = ref(false)
const listError = ref('')
const search = ref('')
const filterYear = ref(currentYear)
const filterMonth = ref(0)
const filterCabang = ref('')
const filterDevisi = ref('')

const pageSize = 10
const currentPage = ref(1)

const totalPages = computed(() => Math.max(1, Math.ceil(targets.value.length / pageSize)))
const paginatedTargets = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return targets.value.slice(start, start + pageSize)
})

const modalOpen = ref(false)
const saving = ref(false)
const submitted = ref(false)

interface TargetForm {
  id: number | null
  tahun: number
  bulan: number
  kode_cabang: string
  kode_devisi: string
  nominal: number
  nominal_display: string
  realisasi: number
  realisasi_display: string
  keterangan: string
}

const emptyForm = (): TargetForm => ({
  id: null,
  tahun: filterYear.value || currentYear,
  bulan: filterMonth.value || 0,
  kode_cabang: '',
  kode_devisi: '',
  nominal: 0,
  nominal_display: '',
  realisasi: 0,
  realisasi_display: 'Rp 0',
  keterangan: '',
})

const form = reactive<TargetForm>(emptyForm())

const isNominalValid = computed(() => form.nominal > 0)
const isRealisasiValid = computed(() => form.realisasi >= 0 && form.realisasi_display !== '')

/** Format number ke mata uang Rupiah (tanpa desimal). */
function formatCurrency(value: number | null | undefined): string {
  const num = Number(value ?? 0)
  if (!Number.isFinite(num)) return 'Rp 0'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(num)
}

function formatPercent(value: number | null | undefined): string {
  const num = Number(value ?? 0)
  if (!Number.isFinite(num)) return '0%'
  return `${num.toFixed(num % 1 === 0 ? 0 : 1)}%`
}

function achievementBadgeClass(percent: number | null | undefined): string {
  const num = Number(percent ?? 0)
  if (num >= 100) return 'is-success'
  if (num >= 50) return 'is-warning'
  return 'is-danger'
}

function achievementBadgeLabel(percent: number | null | undefined): string {
  const num = Number(percent ?? 0)
  if (num >= 100) return 'Tercapai'
  if (num >= 50) return 'Hampir'
  return 'Jauh'
}

function parseCurrencyInput(raw: string): number {
  const digits = raw.replace(/[^0-9]/g, '')
  if (!digits) return 0
  const parsed = Number(digits)
  return Number.isFinite(parsed) ? parsed : 0
}

function formatCurrencyInput(value: number): string {
  if (!value) return 'Rp 0'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

function onCurrencyInput(field: 'nominal' | 'realisasi', event: Event) {
  const target = event.target as HTMLInputElement
  const parsed = parseCurrencyInput(target.value)
  if (field === 'nominal') {
    form.nominal = parsed
    form.nominal_display = target.value
  } else {
    form.realisasi = parsed
    form.realisasi_display = target.value
  }
}

function onCurrencyBlur(field: 'nominal' | 'realisasi') {
  if (field === 'nominal') {
    form.nominal_display = form.nominal > 0 ? formatCurrencyInput(form.nominal) : ''
  } else {
    form.realisasi_display = formatCurrencyInput(form.realisasi)
  }
}

async function showErrorDetail(title: string, error: unknown, fallback: string) {
  const parsed = parseBackendError(error, title)
  await Swal.fire({
    icon: 'error',
    title: parsed.title === 'Permintaan Gagal' ? title : parsed.title,
    text: parsed.message || fallback,
    confirmButtonColor: 'var(--theme-default)',
  })
}

async function fetchMasters() {
  try {
    const [cabangs, devisis] = await Promise.all([
      targetService.getCabang(),
      targetService.getDevisi(),
    ])
    cabangOptions.value = cabangs
    devisiOptions.value = devisis
  } catch (error) {
    console.error('Gagal memuat master target:', error)
  }
}

let searchDebounce: ReturnType<typeof setTimeout> | null = null
function onSearchInput() {
  if (searchDebounce) clearTimeout(searchDebounce)
  searchDebounce = setTimeout(fetchList, 350)
}

async function fetchList() {
  listLoading.value = true
  listError.value = ''
  try {
    const res = await targetService.list({
      tahun: filterYear.value || null,
      bulan: filterMonth.value || null,
      kode_cabang: filterCabang.value || null,
      kode_devisi: filterDevisi.value || null,
      search: search.value || null,
      limit: 500,
    })
    targets.value = res.data
    kpi.value = res.kpi ?? {
      total_target: 0,
      total_realisasi: 0,
      gap: 0,
      avg_capaian: 0,
      total_baris: res.data.length,
    }
    currentPage.value = 1
  } catch (error) {
    console.error('Gagal memuat data target:', error)
    listError.value = 'Data target gagal dimuat. Silakan coba lagi.'
    targets.value = []
  } finally {
    listLoading.value = false
  }
}

function resetForm() {
  const defaults = emptyForm()
  Object.assign(form, defaults)
  submitted.value = false
}

function openCreate() {
  resetForm()
  modalOpen.value = true
}

async function openEdit(row: TargetItem) {
  resetForm()
  modalOpen.value = true
  try {
    const detail = await targetService.detail(row.id)
    form.id = detail.id
    form.tahun = detail.tahun
    form.bulan = detail.bulan ?? 0
    form.kode_cabang = detail.KodeCabang
    form.kode_devisi = detail.KodeDevisi
    form.nominal = Number(detail.nominal) || 0
    form.realisasi = Number(detail.realisasi) || 0
    form.nominal_display = formatCurrencyInput(form.nominal)
    form.realisasi_display = formatCurrencyInput(form.realisasi)
    form.keterangan = detail.keterangan ?? ''
  } catch (error) {
    console.error('Gagal memuat detail target:', error)
    modalOpen.value = false
    await showErrorDetail(
      'Detail target gagal dimuat',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
  }
}

function closeModal() {
  if (saving.value) return
  modalOpen.value = false
  resetForm()
}

function buildPayload(): TargetFormPayload {
  return {
    tahun: form.tahun,
    bulan: form.bulan ? form.bulan : null,
    kode_cabang: form.kode_cabang,
    kode_devisi: form.kode_devisi,
    nominal: form.nominal,
    realisasi: form.realisasi,
    keterangan: form.keterangan ? form.keterangan : null,
  }
}

async function saveTarget() {
  submitted.value = true
  if (!form.kode_cabang || !form.kode_devisi || !isNominalValid.value || !isRealisasiValid.value) {
    return
  }
  saving.value = true
  try {
    const payload = buildPayload()
    if (form.id) {
      await targetService.update(form.id, payload)
    } else {
      await targetService.create(payload)
    }
    modalOpen.value = false
    resetForm()
    await fetchList()
    await Swal.fire({
      icon: 'success',
      title: 'Target tersimpan',
      timer: 1500,
      showConfirmButton: false,
    })
  } catch (error) {
    console.error('Gagal menyimpan target:', error)
    await showErrorDetail(
      'Target gagal disimpan',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
  } finally {
    saving.value = false
  }
}

async function confirmDelete(row: TargetItem) {
  const confirmation = await Swal.fire({
    icon: 'warning',
    title: 'Hapus target ini?',
    text: `${row.nama_bulan} ${row.tahun} · ${row.nama_cabang} · ${row.nama_devisi}`,
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#d33',
  })
  if (!confirmation.isConfirmed) return
  try {
    await targetService.remove(row.id)
    await fetchList()
    await Swal.fire({
      icon: 'success',
      title: 'Target dihapus',
      timer: 1500,
      showConfirmButton: false,
    })
  } catch (error) {
    console.error('Gagal menghapus target:', error)
    await showErrorDetail(
      'Target gagal dihapus',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
  }
}

onMounted(async () => {
  await fetchMasters()
  await fetchList()
})
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
  flex-wrap: wrap;
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
  flex-wrap: wrap;
}

.target-filter-select {
  min-width: 150px;
  height: 42px;
}

.target-add-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 42px;
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  padding: 22px 24px 24px;
}

.target-metric {
  position: relative;
  overflow: hidden;
  min-height: 120px;
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
.target-metric__label.is-blue {
  color: var(--target-blue);
}
.target-metric__label.is-red {
  color: #d14343;
}

.target-metric__value {
  display: block;
  color: var(--target-ink);
  font-size: clamp(20px, 2vw, 26px);
  font-weight: 700;
  line-height: 1.1;
  word-break: break-word;
}

.target-metric__value.is-negative {
  color: #d14343;
}

.target-metric__badge {
  display: inline-block;
  margin-top: 10px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.target-metric__badge.is-success {
  color: #0f7a3a;
  background: #e4f7eb;
}
.target-metric__badge.is-warning {
  color: #9a6b00;
  background: #fff2d2;
}
.target-metric__badge.is-danger {
  color: #a51f1f;
  background: #fde0e0;
}

.target-metric > small {
  display: block;
  margin-top: 8px;
  color: var(--target-muted);
  font-size: 11px;
}

.target-list-card {
  border: 0;
  border-radius: 14px;
}

.target-list-card > .card-body {
  padding: 24px;
}

.target-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.target-toolbar__right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
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

.target-grid tbody td {
  padding: 10px 14px;
  border-bottom: 1px solid #eef2f5;
  color: var(--target-ink);
  vertical-align: middle;
}

.target-grid tbody tr:hover td {
  background: #f8fbfd;
}

.col-no {
  width: 50px;
  text-align: center;
}

.col-periode {
  min-width: 110px;
}

.target-periode__month {
  display: block;
  font-weight: 600;
}

.target-periode__year {
  color: var(--target-muted);
  font-size: 11px;
}

.col-cabang,
.col-devisi {
  min-width: 140px;
}

.col-money {
  min-width: 150px;
  text-align: right;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.col-money.is-negative {
  color: #d14343;
}

.col-persen {
  min-width: 110px;
  text-align: center;
}

.col-keterangan {
  min-width: 180px;
  color: var(--target-muted);
}

.col-aksi {
  width: 110px;
  text-align: center;
  white-space: nowrap;
}

.target-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.target-badge.is-success {
  color: #0f7a3a;
  background: #e4f7eb;
}
.target-badge.is-warning {
  color: #9a6b00;
  background: #fff2d2;
}
.target-badge.is-danger {
  color: #a51f1f;
  background: #fde0e0;
}

.target-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 0 2px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s ease;
}

.target-action--edit {
  color: var(--target-blue);
  border-color: #d7eaf6;
  background: #f1f8fd;
}

.target-action--edit:hover {
  background: var(--target-blue);
  color: #fff;
  border-color: var(--target-blue);
}

.target-action--delete {
  color: #d14343;
  border-color: #f3d2d2;
  background: #fdeeee;
}

.target-action--delete:hover {
  background: #d14343;
  color: #fff;
  border-color: #d14343;
}

.target-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
  color: var(--target-muted);
  font-size: 12px;
}

.target-pagination__buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.target-page-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #e1e6ed;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.target-page-label {
  padding: 0 8px;
  color: var(--target-ink);
  font-weight: 600;
}

.target-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
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

.target-form-modal-body {
  padding: 24px 26px 20px;
}

.target-form .form-label {
  font-weight: 600;
  color: var(--target-ink);
}

.target-form-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
  padding-top: 16px;
  border-top: 1px solid #eef2f5;
}

@media (max-width: 1199.98px) {
  .target-overview__metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767.98px) {
  .target-overview__heading {
    align-items: flex-start;
    flex-direction: column;
  }
  .target-heading__actions {
    width: 100%;
  }
  .target-filter-select,
  .target-add-button {
    flex: 1 1 auto;
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
  .target-list-card > .card-body {
    padding: 16px;
  }
}

:global(body.dark-only) .target-overview,
:global(body.dark-only) .target-metric,
:global(body.dark-only) .target-list-card,
:global(body.dark-only) .target-search {
  border-color: #334155;
  background: #1f2937;
}

:global(body.dark-only) .target-overview__heading,
:global(body.dark-only) .target-grid thead th,
:global(body.dark-only) .target-form-footer {
  border-color: #334155;
}

:global(body.dark-only) .target-metric__value,
:global(body.dark-only) .target-search input,
:global(body.dark-only) .target-heading h3,
:global(body.dark-only) .target-grid tbody td,
:global(body.dark-only) .target-page-label {
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

:global(body.dark-only) .target-grid tbody tr:hover td {
  background: #263242;
}
</style>
