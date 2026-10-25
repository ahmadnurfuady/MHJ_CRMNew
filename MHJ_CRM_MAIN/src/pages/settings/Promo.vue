<template>
  <div class="container-fluid promo-page">
    <section class="promo-overview">
      <header class="promo-overview__heading">
        <div class="promo-heading">
          <span class="promo-heading__icon"><vue-feather type="calendar" size="20" /></span>
          <div>
            <p>Setting</p>
            <h3>Kalender Promo</h3>
            <span class="promo-heading__description">
              Atur materi, periode, dan target penerima promo.
            </span>
          </div>
        </div>
        <button class="btn btn-primary promo-add-button" type="button" @click="openCreate">
          <vue-feather type="plus" :size="17" color="#fff" secondary-color="#fff" />
          Tambah Promo
        </button>
      </header>

      <div class="promo-overview__metrics">
        <article class="promo-metric promo-metric--accent">
          <span class="promo-metric__label">Total promo</span>
          <strong class="promo-metric__value">{{ promos.length }}</strong>
          <small>{{ activeCount }} aktif · {{ promos.length - activeCount }} nonaktif</small>
        </article>

        <article class="promo-metric">
          <span class="promo-metric__label is-green">Promo aktif</span>
          <strong class="promo-metric__value">{{ activeCount }}</strong>
          <small>sedang tayang ke penerima</small>
        </article>

        <article class="promo-metric">
          <span class="promo-metric__label is-gray">Promo nonaktif</span>
          <strong class="promo-metric__value">{{ promos.length - activeCount }}</strong>
          <small>tidak tampil ke penerima</small>
        </article>
      </div>
    </section>

    <div class="card promo-list-card">
      <div class="card-body">
        <div class="promo-toolbar">
          <div class="promo-search">
            <vue-feather type="search" size="18" />
            <input v-model.trim="search" type="search" placeholder="Cari judul atau konten..." />
          </div>
          <div class="promo-filters" aria-label="Filter status promo">
            <button
              v-for="option in filterOptions"
              :key="option.value"
              class="promo-filter"
              :class="{ active: statusFilter === option.value }"
              type="button"
              @click="statusFilter = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div v-if="listLoading" class="promo-empty">
          <span><vue-feather type="loader" size="32" /></span>
          <h5>Memuat promo...</h5>
        </div>

        <div v-else-if="listError" class="promo-empty">
          <span><vue-feather type="alert-circle" size="32" /></span>
          <h5>{{ listError }}</h5>
          <button class="btn btn-primary" type="button" @click="fetchPromos">Coba lagi</button>
        </div>

        <div v-else-if="filteredPromos.length" class="row g-4">
          <div v-for="promo in filteredPromos" :key="promo.id" class="col-xxl-4 col-lg-6">
            <article class="promo-card">
              <div class="promo-card__media">
                <img
                  v-if="promo.image_path"
                  :src="promo.image_path"
                  :alt="`Banner ${promo.title}`"
                />
                <div v-else class="promo-card__placeholder" aria-hidden="true">
                  <span class="promo-card__shape promo-card__shape--one"></span>
                  <span class="promo-card__shape promo-card__shape--two"></span>
                  <vue-feather type="image" size="38" />
                  <span>Banner promo</span>
                </div>
                <span class="promo-status" :class="promo.is_active ? 'is-active' : 'is-inactive'">
                  {{ promo.is_active ? 'Aktif' : 'Nonaktif' }}
                </span>
              </div>

              <div class="promo-card__body">
                <h5>{{ promo.title }}</h5>
                <p class="promo-product">
                  <vue-feather type="users" size="17" />
                  {{ targetLabel(promo) }}
                </p>

                <div v-if="promo.start_date || promo.end_date" class="promo-period">
                  <vue-feather type="clock" size="20" />
                  <span>Berlaku</span>
                  <strong>{{ formatDateRange(promo.start_date, promo.end_date) }}</strong>
                </div>

                <div v-if="promo.content" class="promo-offer">
                  <vue-feather type="tag" size="19" />
                  <span>{{ promo.content }}</span>
                </div>

                <div class="promo-actions">
                  <button class="btn btn-light btn-sm" type="button" @click="toggleStatus(promo)">
                    <vue-feather :type="promo.is_active ? 'pause' : 'play'" size="15" />
                    {{ promo.is_active ? 'Nonaktifkan' : 'Aktifkan' }}
                  </button>
                  <div class="ms-auto d-flex gap-2">
                    <button
                      class="promo-icon-button"
                      type="button"
                      aria-label="Edit promo"
                      title="Edit promo"
                      @click="openEdit(promo)"
                    >
                      <vue-feather type="edit-2" size="16" />
                    </button>
                    <button
                      class="promo-icon-button is-danger"
                      type="button"
                      aria-label="Hapus promo"
                      title="Hapus promo"
                      @click="removePromo(promo)"
                    >
                      <vue-feather type="trash-2" size="16" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div v-else class="promo-empty">
          <span><vue-feather type="calendar" size="32" /></span>
          <h5>
            {{ promos.length ? 'Promo tidak ditemukan' : 'Belum ada promo' }}
          </h5>
          <p>
            {{
              promos.length
                ? 'Coba ubah kata pencarian atau filter status.'
                : 'Tambahkan promo pertama untuk mulai menyusun kalender promo.'
            }}
          </p>
          <button v-if="!promos.length" class="btn btn-primary" type="button" @click="openCreate">
            Tambah Promo
          </button>
        </div>
      </div>
    </div>

    <Modal
      :modal-open="modalOpen"
      :title="form.id ? 'Edit Promo' : 'Tambah Promo'"
      size-class="modal-xl"
      dialog-class="modal-dialog-scrollable promo-form-dialog"
      :modal-centered="true"
      @close-modal="closeModal"
    >
      <div class="modal-body promo-form-modal-body">
        <div class="promo-form custom-input">
          <form class="row g-3 needs-validation mhj-form" @submit.prevent="savePromo">
            <div class="col-md-8">
              <label for="promo-title" class="form-label"
                >Judul promo <span class="txt-danger">*</span></label
              >
              <input
                id="promo-title"
                v-model.trim="form.title"
                class="form-control"
                :class="{ 'is-invalid': submitted && !form.title }"
                type="text"
                maxlength="255"
                placeholder="Contoh: Promo Kemerdekaan MRI"
              />
              <div class="invalid-feedback">Judul promo wajib diisi.</div>
            </div>
            <div class="col-md-4">
              <label for="promo-sort-order" class="form-label">
                Urutan tampil <span class="txt-danger">*</span>
              </label>
              <input
                id="promo-sort-order"
                v-model.number="form.sort_order"
                class="form-control"
                :class="{ 'is-invalid': submitted && !isSortOrderValid }"
                type="number"
                min="0"
                step="1"
                placeholder="0"
              />
              <div class="invalid-feedback">Masukkan angka minimal 0.</div>
            </div>

            <div class="col-12">
              <label for="promo-content" class="form-label">Konten promo</label>
              <textarea
                id="promo-content"
                v-model.trim="form.content"
                class="form-control"
                rows="3"
                placeholder="Contoh: Potongan 15% untuk PO bulan Agustus"
              ></textarea>
              <small class="text-muted">Konten boleh dikosongkan.</small>
            </div>

            <div class="col-12">
              <label class="form-label">Banner promo</label>
              <input
                ref="fileInput"
                class="d-none"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                @change="onFileChange"
              />
              <button
                class="promo-upload"
                :class="{ 'has-image': form.image_path }"
                type="button"
                @click="fileInput?.click()"
                @dragover.prevent
                @drop.prevent="onFileDrop"
              >
                <img
                  v-if="form.image_path"
                  :src="form.image_path"
                  alt="Pratinjau gambar promo"
                />
                <span v-else class="promo-upload__empty">
                  <span class="promo-upload__icon"><vue-feather type="upload-cloud" /></span>
                  <strong>Klik atau jatuhkan gambar di sini</strong>
                  <small>PNG, JPG, atau WEBP · Maks. 1,5 MB · Rekomendasi 1280 × 600 px</small>
                </span>
                <span v-if="form.image_path" class="promo-upload__change">
                  <vue-feather type="camera" size="16" /> Ganti gambar
                </span>
              </button>
              <button
                v-if="form.image_path"
                class="btn btn-link btn-sm p-0 mt-1"
                type="button"
                @click="clearImage"
              >
                <vue-feather type="trash-2" size="14" class="me-1" />Hapus gambar
              </button>
              <div v-if="imageError" class="text-danger small mt-2">
                {{ imageError }}
              </div>
            </div>

            <div class="col-12">
              <label for="promo-target-type" class="form-label">
                Target promo <span class="txt-danger">*</span>
              </label>
              <select
                id="promo-target-type"
                v-model="form.target_type"
                class="form-select"
                @change="resetUnusedTargets"
              >
                <option v-for="target in targetTypes" :key="target.value" :value="target.value">
                  {{ target.label }}
                </option>
              </select>
            </div>
            <div v-if="needsBranch" :class="needsJabatan ? 'col-md-6' : 'col-12'">
              <label for="promo-branch" class="form-label"
                >Cabang <span class="txt-danger">*</span></label
              >
              <select
                id="promo-branch"
                v-model="form.target_branch_id"
                class="form-select"
                :class="{ 'is-invalid': submitted && form.target_branch_id === null }"
                :disabled="lookupsLoading"
              >
                <option :value="null">
                  {{ lookupsLoading ? 'Memuat cabang...' : 'Pilih cabang' }}
                </option>
                <option v-for="branch in branchOptions" :key="branch.value" :value="branch.value">
                  {{ branch.label }}
                </option>
              </select>
              <div class="invalid-feedback">Cabang target wajib dipilih.</div>
            </div>
            <div v-if="needsJabatan" :class="needsBranch ? 'col-md-6' : 'col-12'">
              <label for="promo-jabatan" class="form-label"
                >Jabatan <span class="txt-danger">*</span></label
              >
              <select
                id="promo-jabatan"
                v-model="form.target_jabatan_id"
                class="form-select"
                :class="{ 'is-invalid': submitted && form.target_jabatan_id === null }"
                :disabled="lookupsLoading"
              >
                <option :value="null">
                  {{ lookupsLoading ? 'Memuat jabatan...' : 'Pilih jabatan' }}
                </option>
                <option
                  v-for="jabatan in jabatanOptions"
                  :key="jabatan.value"
                  :value="jabatan.value"
                >
                  {{ jabatan.label }}
                </option>
              </select>
              <div class="invalid-feedback">Jabatan target wajib dipilih.</div>
            </div>
            <div v-if="lookupError" class="col-12">
              <div class="alert alert-light-danger mb-0 py-2" role="alert">
                <vue-feather type="alert-circle" size="16" />
                {{ lookupError }} Silakan buka ulang form atau muat ulang halaman.
              </div>
            </div>

            <div class="col-md-6">
              <label for="promo-start" class="form-label">Tanggal mulai</label>
              <input id="promo-start" v-model="form.start_date" class="form-control" type="date" />
            </div>
            <div class="col-md-6">
              <label for="promo-end" class="form-label">Tanggal selesai</label>
              <input
                id="promo-end"
                v-model="form.end_date"
                class="form-control"
                :class="{ 'is-invalid': submitted && !isDateRangeValid }"
                :min="form.start_date || undefined"
                type="date"
              />
              <div class="invalid-feedback">
                Tanggal selesai tidak boleh sebelum tanggal mulai.
              </div>
            </div>

            <div class="col-12">
              <div class="promo-active-setting">
                <div>
                  <label class="form-label mb-1" for="promo-active">Status promo</label>
                  <p>Promo aktif akan ditampilkan sebagai promo yang bisa ditawarkan.</p>
                </div>
                <div class="form-check form-switch mb-0">
                  <input
                    id="promo-active"
                    v-model="form.is_active"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                  />
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="common-flex justify-content-end">
                <button
                  class="btn btn-outline-danger"
                  type="button"
                  :disabled="saving"
                  @click="closeModal"
                >
                  Batal
                </button>
                <button class="btn btn-primary" type="submit" :disabled="saving">
                  <span
                    v-if="saving"
                    class="spinner-border spinner-border-sm me-2"
                    aria-hidden="true"
                  />
                  {{ form.id ? 'Simpan Perubahan' : 'Simpan Promo' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

import Modal from '@/components/shared/Modal.vue'
import { masterDataService } from '@/services/masterDataService'
import { promoService, type PromoPayload } from '@/services/promoService'
import type { MasterCabangItem } from '@/types/master'

interface PromoItem {
  id: number
  title: string
  content: string
  image_path: string
  is_active: boolean
  start_date: string
  end_date: string
  target_type: TargetType
  target_branch_id: number | null
  target_jabatan_id: number | null
  created_at: string
  updated_at: string
  sort_order: number
}

type PromoFilter = 'all' | 'active' | 'inactive'
type TargetType = 'all' | 'branch' | 'jabatan' | 'branch_jabatan'

interface PromoForm {
  id: number | null
  title: string
  content: string
  image_path: string
  is_active: boolean
  start_date: string
  end_date: string
  target_type: TargetType
  target_branch_id: number | null
  target_jabatan_id: number | null
  sort_order: number
}

interface LookupOption {
  value: number
  label: string
}

const MAX_IMAGE_SIZE = 1.5 * 1024 * 1024

const targetTypes: { value: TargetType; label: string }[] = [
  { value: 'all', label: 'Semua pengguna' },
  { value: 'branch', label: 'Cabang tertentu' },
  { value: 'jabatan', label: 'Jabatan tertentu' },
  { value: 'branch_jabatan', label: 'Cabang dan jabatan tertentu' },
]

function toNumberOrNull(value: unknown): number | null {
  if (value === null || value === undefined || value === '') return null
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

const MAX_ERROR_DETAIL_LENGTH = 600

/** Ambil pesan error asli dari response backend (Laravel), jatuh balik ke teks umum jika tidak ada. */
function extractErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as Record<string, unknown> | undefined
    const raw = data?.message ?? data?.error ?? data?.msg
    if (raw) {
      const text = Array.isArray(raw) ? raw.join(', ') : String(raw)
      if (text.trim()) {
        return text.length > MAX_ERROR_DETAIL_LENGTH
          ? `${text.slice(0, MAX_ERROR_DETAIL_LENGTH)}...`
          : text
      }
    }
  }
  return fallback
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/** Tampilkan popup error dengan detail pesan asli dari server (jika ada) dalam blok monospace. */
function showErrorDetail(title: string, error: unknown, fallback: string) {
  const detail = extractErrorMessage(error, fallback)
  return Swal.fire({
    icon: 'error',
    title,
    html: `<pre class="promo-error-detail">${escapeHtml(detail)}</pre>`,
    confirmButtonColor: 'var(--theme-default)',
  })
}

function normalizePromo(value: unknown, index: number): PromoItem {
  const raw = value && typeof value === 'object' ? (value as Record<string, unknown>) : {}
  const rawTarget = String(raw.target_type ?? 'all')
  const target_type = targetTypes.some((target) => target.value === rawTarget)
    ? (rawTarget as TargetType)
    : 'all'
  const now = new Date().toISOString()

  return {
    id: toNumberOrNull(raw.id) ?? index + 1,
    title: String(raw.title ?? ''),
    content: String(raw.content ?? raw.offer ?? ''),
    image_path: String(raw.image_url ?? raw.image_path ?? raw.image ?? ''),
    is_active: Boolean(raw.is_active ?? raw.active ?? true),
    start_date: String(raw.start_date ?? raw.startDate ?? ''),
    end_date: String(raw.end_date ?? raw.endDate ?? ''),
    target_type,
    target_branch_id: toNumberOrNull(raw.target_branch_id),
    target_jabatan_id: toNumberOrNull(raw.target_jabatan_id),
    created_at: String(raw.created_at ?? now),
    updated_at: String(raw.updated_at ?? now),
    sort_order: toNumberOrNull(raw.sort_order) ?? index + 1,
  }
}

const promos = ref<PromoItem[]>([])
const listLoading = ref(false)
const listError = ref('')
const saving = ref(false)
const search = ref('')
const statusFilter = ref<PromoFilter>('all')
const modalOpen = ref(false)
const submitted = ref(false)
const imageError = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const form = reactive<PromoForm>(emptyForm())
const selectedImageFile = ref<File | null>(null)
const removeExistingImage = ref(false)
const branchOptions = ref<LookupOption[]>([])
const jabatanOptions = ref<LookupOption[]>([])
const lookupsLoading = ref(false)
const lookupError = ref('')

const filterOptions: { label: string; value: PromoFilter }[] = [
  { label: 'Semua', value: 'all' },
  { label: 'Aktif', value: 'active' },
  { label: 'Nonaktif', value: 'inactive' },
]

const activeCount = computed(() => promos.value.filter((promo) => promo.is_active).length)
const needsBranch = computed(() => ['branch', 'branch_jabatan'].includes(form.target_type))
const needsJabatan = computed(() => ['jabatan', 'branch_jabatan'].includes(form.target_type))
const isDateRangeValid = computed(
  () => !form.start_date || !form.end_date || form.end_date >= form.start_date
)
const isSortOrderValid = computed(() => Number.isInteger(form.sort_order) && form.sort_order >= 0)
const filteredPromos = computed(() => {
  const keyword = search.value.toLocaleLowerCase('id-ID')
  return promos.value
    .filter((promo) => {
      const matchesSearch = `${promo.title} ${promo.content} ${targetLabel(promo)}`
        .toLocaleLowerCase('id-ID')
        .includes(keyword)
      const matchesStatus =
        statusFilter.value === 'all' ||
        (statusFilter.value === 'active' ? promo.is_active : !promo.is_active)
      return matchesSearch && matchesStatus
    })
    .sort((left, right) => left.sort_order - right.sort_order || left.id - right.id)
})

function emptyForm(): PromoForm {
  return {
    id: null,
    title: '',
    content: '',
    image_path: '',
    is_active: true,
    start_date: '',
    end_date: '',
    target_type: 'all',
    target_branch_id: null,
    target_jabatan_id: null,
    sort_order: promos.value?.length ?? 0,
  }
}

function setForm(values: PromoForm) {
  Object.assign(form, values)
  submitted.value = false
  imageError.value = ''
  selectedImageFile.value = null
  removeExistingImage.value = false
  if (fileInput.value) fileInput.value.value = ''
}

function openCreate() {
  setForm(emptyForm())
  modalOpen.value = true
}

function openEdit(promo: PromoItem) {
  setForm({
    id: promo.id,
    title: promo.title,
    content: promo.content,
    image_path: promo.image_path,
    is_active: promo.is_active,
    start_date: promo.start_date,
    end_date: promo.end_date,
    target_type: promo.target_type,
    target_branch_id: promo.target_branch_id,
    target_jabatan_id: promo.target_jabatan_id,
    sort_order: promo.sort_order,
  })
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}

function formatDateRange(start: string, end: string): string {
  const formatter = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
  if (!start && end) return `Sampai ${formatter.format(new Date(`${end}T00:00:00`))}`
  if (start && !end) return `Mulai ${formatter.format(new Date(`${start}T00:00:00`))}`

  const startDate = new Date(`${start}T00:00:00`)
  const endDate = new Date(`${end}T00:00:00`)
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return '-'

  if (
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth()
  ) {
    const monthYear = new Intl.DateTimeFormat('id-ID', {
      month: 'long',
      year: 'numeric',
    }).format(endDate)
    return `${startDate.getDate()} - ${endDate.getDate()} ${monthYear}`
  }

  return `${formatter.format(startDate)} - ${formatter.format(endDate)}`
}

function targetLabel(promo: PromoItem): string {
  if (promo.target_type === 'all') return 'Semua pengguna'

  const branch = branchOptions.value.find((option) => option.value === promo.target_branch_id)
  const jabatan = jabatanOptions.value.find((option) => option.value === promo.target_jabatan_id)
  if (promo.target_type === 'branch') {
    return branch?.label || `Cabang #${promo.target_branch_id ?? '-'}`
  }
  if (promo.target_type === 'jabatan') {
    return jabatan?.label || `Jabatan #${promo.target_jabatan_id ?? '-'}`
  }
  return `${branch?.label || `Cabang #${promo.target_branch_id ?? '-'}`} · ${
    jabatan?.label || `Jabatan #${promo.target_jabatan_id ?? '-'}`
  }`
}

function resetUnusedTargets() {
  if (!needsBranch.value) form.target_branch_id = null
  if (!needsJabatan.value) form.target_jabatan_id = null
}

function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) readImage(file)
}

function onFileDrop(event: DragEvent) {
  const file = event.dataTransfer?.files?.[0]
  if (file) readImage(file)
}

function readImage(file: File) {
  imageError.value = ''
  if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
    imageError.value = 'Format gambar harus PNG, JPG, atau WEBP.'
    return
  }
  if (file.size > MAX_IMAGE_SIZE) {
    imageError.value = 'Ukuran gambar maksimal 1,5 MB.'
    return
  }

  const reader = new FileReader()
  reader.onload = () => {
    form.image_path = typeof reader.result === 'string' ? reader.result : ''
    selectedImageFile.value = file
    removeExistingImage.value = false
  }
  reader.onerror = () => {
    imageError.value = 'Gambar gagal dibaca. Silakan pilih file lain.'
  }
  reader.readAsDataURL(file)
}

function clearImage() {
  form.image_path = ''
  selectedImageFile.value = null
  removeExistingImage.value = true
  imageError.value = ''
  if (fileInput.value) fileInput.value.value = ''
}

async function fetchPromos() {
  listLoading.value = true
  listError.value = ''
  try {
    const items = await promoService.getPromos()
    promos.value = items.map((item, index) => normalizePromo(item, index))
  } catch (error) {
    console.error('Gagal memuat promo:', error)
    listError.value = 'Daftar promo gagal dimuat. Silakan muat ulang halaman.'
  } finally {
    listLoading.value = false
  }
}

function buildPayload(): PromoPayload {
  return {
    title: form.title,
    content: form.content,
    is_active: form.is_active,
    start_date: form.start_date,
    end_date: form.end_date,
    target_type: form.target_type,
    target_branch_id: form.target_branch_id,
    target_jabatan_id: form.target_jabatan_id,
    sort_order: form.sort_order,
    image: selectedImageFile.value,
    removeImage: removeExistingImage.value,
  }
}

async function savePromo() {
  submitted.value = true
  const targetInvalid =
    (needsBranch.value && form.target_branch_id === null) ||
    (needsJabatan.value && form.target_jabatan_id === null)
  if (!form.title || !isSortOrderValid.value || !isDateRangeValid.value || targetInvalid) {
    return
  }

  saving.value = true
  try {
    if (form.id) {
      await promoService.updatePromo(form.id, buildPayload())
    } else {
      await promoService.createPromo(buildPayload())
    }
    await fetchPromos()
    modalOpen.value = false
    await Swal.fire({
      icon: 'success',
      title: form.id ? 'Promo diperbarui' : 'Promo ditambahkan',
      timer: 1800,
      showConfirmButton: false,
    })
  } catch (error) {
    console.error('Gagal menyimpan promo:', error)
    await showErrorDetail(
      'Promo gagal disimpan',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
  } finally {
    saving.value = false
  }
}

async function toggleStatus(promo: PromoItem) {
  const previousStatus = promo.is_active
  promo.is_active = !promo.is_active
  try {
    await promoService.updatePromo(promo.id, {
      title: promo.title,
      content: promo.content,
      is_active: promo.is_active,
      start_date: promo.start_date,
      end_date: promo.end_date,
      target_type: promo.target_type,
      target_branch_id: promo.target_branch_id,
      target_jabatan_id: promo.target_jabatan_id,
      sort_order: promo.sort_order,
    })
  } catch (error) {
    promo.is_active = previousStatus
    console.error('Gagal mengubah status promo:', error)
    await showErrorDetail(
      'Status promo gagal diubah',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
  }
}

async function removePromo(promo: PromoItem) {
  const confirmation = await Swal.fire({
    icon: 'warning',
    title: 'Hapus promo ini?',
    text: `${promo.title} akan dihapus dari daftar promo.`,
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#dc3545',
  })
  if (!confirmation.isConfirmed) return

  try {
    await promoService.deletePromo(promo.id)
    promos.value = promos.value.filter((item) => item.id !== promo.id)
    await Swal.fire({
      icon: 'success',
      title: 'Promo dihapus',
      timer: 1400,
      showConfirmButton: false,
    })
  } catch (error) {
    console.error('Gagal menghapus promo:', error)
    await showErrorDetail(
      'Promo gagal dihapus',
      error,
      'Terjadi kesalahan saat menghubungi server. Silakan coba lagi.'
    )
  }
}

function branchId(item: MasterCabangItem): number | null {
  const raw = item as MasterCabangItem & Record<string, unknown>
  return toNumberOrNull(raw.id ?? raw.ID ?? raw.Id ?? raw.KodeCabang)
}

async function loadTargetLookups() {
  lookupsLoading.value = true
  lookupError.value = ''
  try {
    const [branches, positions] = await Promise.all([
      masterDataService.getCabang(),
      masterDataService.getJabatan(),
    ])
    branchOptions.value = branches
      .map((branch) => ({
        value: branchId(branch),
        label: branch.NamaCabang || branch.KodeCabang,
      }))
      .filter((branch): branch is LookupOption => branch.value !== null)
    jabatanOptions.value = positions.map((position) => ({
      value: position.id,
      label: position.nama_jabatan,
    }))
  } catch (error) {
    console.error('Gagal memuat target promo:', error)
    lookupError.value = 'Daftar cabang atau jabatan gagal dimuat.'
  } finally {
    lookupsLoading.value = false
  }
}

onMounted(() => {
  fetchPromos()
  loadTargetLookups()
})
</script>

<style scoped>
.promo-page {
  --promo-blue: var(--theme-default, #1e80d1);
  --promo-ink: #1f2a37;
  --promo-muted: #758195;
  padding-bottom: 28px;
}

:global(.promo-error-detail) {
  max-height: 260px;
  margin: 0;
  overflow-y: auto;
  padding: 12px 14px;
  border: 1px solid #f1b4ba;
  border-radius: 8px;
  color: #7a1f27;
  background: #fdf1f2;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
}

.promo-overview {
  overflow: hidden;
  border: 1px solid #e2e8ee;
  border-radius: 18px;
  margin-bottom: 18px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(31, 52, 73, 0.045);
}

.promo-overview__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid #e8eef2;
  padding: 20px 24px;
}

.promo-heading {
  display: flex;
  align-items: center;
  gap: 14px;
}

.promo-heading__icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border: 1px solid #e2e8ed;
  border-radius: 12px;
  color: var(--promo-blue);
  background: #fff;
  box-shadow: 0 4px 14px rgba(26, 47, 67, 0.06);
}

.promo-heading p {
  margin: 0 0 2px;
  color: var(--promo-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.promo-heading h3 {
  margin: 0;
  color: var(--promo-ink);
  font-size: 23px;
}

.promo-heading__description {
  display: block;
  margin-top: 3px;
  color: var(--promo-muted);
  font-size: 12px;
}

.promo-add-button {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  box-sizing: border-box;
  padding: 0 18px;
  border-color: var(--promo-blue);
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  background: var(--promo-blue);
  box-shadow: 0 4px 10px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.promo-add-button:hover,
.promo-add-button:focus {
  border-color: var(--app-primary-hover, #1493cc) !important;
  color: #fff !important;
  background: var(--app-primary-hover, #1493cc) !important;
}

.promo-overview__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  padding: 22px 24px 24px;
}

.promo-metric {
  position: relative;
  overflow: hidden;
  min-height: 108px;
  border: 1px solid #dfe8ee;
  border-radius: 16px;
  padding: 18px 21px;
  background: #ffffff;
  box-shadow: 0 7px 20px rgba(31, 52, 73, 0.035);
}

.promo-metric--accent::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 5px;
  background: var(--promo-blue);
  content: '';
}

.promo-metric__label {
  display: block;
  margin-bottom: 13px;
  color: var(--app-primary-dark, #0284b8);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.promo-metric__label.is-green {
  color: #25a55f;
}
.promo-metric__label.is-gray {
  color: #7a8798;
}

.promo-metric__value {
  display: block;
  color: var(--promo-ink);
  font-size: clamp(25px, 2.6vw, 34px);
  font-weight: 700;
  line-height: 1.05;
}

.promo-metric > small {
  display: block;
  margin-top: 8px;
  color: var(--promo-muted);
  font-size: 10px;
}

.promo-list-card {
  border: 0;
  border-radius: 14px;
}

.promo-list-card > .card-body {
  padding: 24px;
}

.promo-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
}

.promo-search {
  display: flex;
  align-items: center;
  gap: 10px;
  width: min(100%, 390px);
  padding: 0 14px;
  border: 1px solid #e1e6ed;
  border-radius: 9px;
  color: #8a95a5;
  background: #fff;
}

.promo-search:focus-within {
  border-color: var(--promo-blue);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 32, 167, 220), 0.1);
}

.promo-search input {
  width: 100%;
  height: 42px;
  border: 0;
  outline: 0;
  color: var(--promo-ink);
  background: transparent;
  font-size: 14px;
}

.promo-filters {
  display: flex;
  gap: 5px;
  padding: 4px;
  border-radius: 9px;
  background: #f2f5f8;
}

.promo-filter {
  padding: 7px 13px;
  border: 0;
  border-radius: 7px;
  color: #697588;
  background: transparent;
  font-size: 13px;
  font-weight: 600;
}

.promo-filter.active {
  color: var(--promo-blue);
  background: #fff;
  box-shadow: 0 2px 8px rgba(31, 42, 55, 0.08);
}

.promo-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid #e4e9ef;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 5px 16px rgba(31, 42, 55, 0.06);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.promo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(31, 42, 55, 0.1);
}

.promo-card__media {
  position: relative;
  aspect-ratio: 2.15 / 1;
  overflow: hidden;
  background: var(--app-primary-wash, #e7f4fb);
}

.promo-card__media > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-card__placeholder {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.88);
  background: linear-gradient(135deg, var(--app-primary-dark, #176bb2) 0%, var(--app-primary, #229cce) 55%, var(--app-secondary, #5bc5dd) 100%);
}

.promo-card__placeholder svg,
.promo-card__placeholder > span:not(.promo-card__shape) {
  position: relative;
  z-index: 1;
}
.promo-card__placeholder > span:not(.promo-card__shape) {
  margin-top: 7px;
  font-size: 12px;
}

.promo-card__shape {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.promo-card__shape--one {
  width: 190px;
  height: 190px;
  right: -38px;
  top: -65px;
}
.promo-card__shape--two {
  width: 115px;
  height: 115px;
  left: -34px;
  bottom: -55px;
}

.promo-status {
  position: absolute;
  top: 13px;
  left: 13px;
  padding: 5px 10px;
  border-radius: 7px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 4px 9px rgba(31, 42, 55, 0.14);
}

.promo-status.is-active {
  background: #35b957;
}
.promo-status.is-inactive {
  background: #7f8a99;
}

.promo-card__body {
  padding: 18px;
}
.promo-card__body h5 {
  margin-bottom: 5px;
  color: var(--promo-ink);
  font-size: 17px;
}

.promo-product {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 17px;
  color: #9099a7;
  font-size: 13px;
}

.promo-period,
.promo-offer {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 11px 12px;
  border-radius: 7px;
  font-size: 13px;
}

.promo-product :deep(.vue-feather),
.promo-period :deep(.vue-feather) {
  flex-shrink: 0;
}

.promo-period {
  color: var(--app-primary-dark, #34548c);
  background: var(--app-primary-wash, #eaf2ff);
}

.promo-period span {
  font-size: 14px;
}
.promo-period strong {
  margin-left: auto;
  text-align: right;
  font-weight: 600;
}

.promo-offer {
  align-items: flex-start;
  margin-top: 10px;
  color: #f04444;
  background: #ffe9e9;
  line-height: 1.4;
}

.promo-offer span {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.promo-offer :deep(.vue-feather) {
  flex-shrink: 0;
  margin-top: 1px;
}

.promo-actions {
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid #edf0f4;
}

.promo-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #657185;
}

.promo-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 1px solid #e3e7ed;
  border-radius: 7px;
  color: #637287;
  background: #fff;
}

.promo-icon-button:hover {
  color: var(--promo-blue);
  border-color: var(--app-primary-border, #bcdff0);
  background: var(--app-primary-wash, #eef9fd);
}
.promo-icon-button.is-danger:hover {
  color: #dc3545;
  border-color: #f3c3c8;
  background: #fff1f2;
}

.promo-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 20px;
  text-align: center;
}

.promo-empty > span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
  border-radius: 50%;
  color: var(--promo-blue);
  background: var(--app-primary-wash, #ebf7fc);
}

.promo-empty h5 {
  margin-bottom: 6px;
}
.promo-empty p {
  margin: 0 0 17px;
  color: var(--promo-muted);
}

:deep(.promo-form-dialog .modal-content) {
  border: 0;
}

.promo-form-modal-body {
  padding: 22px 24px 24px;
}

.promo-upload {
  position: relative;
  display: block;
  width: 100%;
  min-height: 190px;
  overflow: hidden;
  padding: 0;
  border: 1.5px dashed #bdd0df;
  border-radius: 11px;
  color: #627084;
  background: #f8fbfd;
}

.promo-upload:hover,
.promo-upload:focus {
  border-color: var(--promo-blue);
  background: var(--app-primary-wash, #f2faff);
}

.promo-upload.has-image {
  border-style: solid;
}
.promo-upload > img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.promo-upload__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 190px;
  padding: 25px;
}

.promo-upload__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 47px;
  margin-bottom: 10px;
  border-radius: 50%;
  color: var(--promo-blue);
  background: var(--app-primary-soft, #e4f3fa);
}

.promo-upload__empty strong {
  color: #3d4c5e;
  font-size: 14px;
}
.promo-upload__empty small {
  margin-top: 6px;
  color: #8b96a5;
  font-size: 11px;
}

.promo-upload__change {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 7px;
  color: #fff;
  background: rgba(20, 35, 49, 0.78);
  font-size: 12px;
}

.promo-active-setting {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 16px;
  border: 1px solid #e3e8ee;
  border-radius: 9px;
  background: #fafbfc;
}

.promo-active-setting p {
  margin: 0;
  color: #8490a2;
  font-size: 12px;
}
.promo-active-setting .form-check-input {
  width: 42px;
  height: 22px;
}

@media (max-width: 767.98px) {
  .promo-overview__heading {
    align-items: flex-start;
    flex-direction: column;
  }
  .promo-add-button {
    width: 100%;
    justify-content: center;
  }
  .promo-overview__metrics {
    grid-template-columns: 1fr;
    padding: 18px;
  }
  .promo-toolbar {
    align-items: stretch;
    flex-direction: column;
  }
  .promo-search {
    width: 100%;
  }
  .promo-filters {
    align-self: flex-start;
  }
  .promo-list-card > .card-body {
    padding: 16px;
  }
  .promo-period {
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .promo-period strong {
    width: 100%;
    margin-left: 29px;
    text-align: left;
  }
  .promo-form-modal-body {
    padding: 16px;
  }
}

:global(body.dark-only) .promo-overview,
:global(body.dark-only) .promo-metric,
:global(body.dark-only) .promo-list-card,
:global(body.dark-only) .promo-card,
:global(body.dark-only) .promo-search,
:global(body.dark-only) .promo-filter.active,
:global(body.dark-only) .promo-icon-button {
  border-color: #334155;
  background: #1f2937;
}

:global(body.dark-only) .promo-overview__heading {
  border-color: #334155;
}

:global(body.dark-only) .promo-metric__value,
:global(body.dark-only) .promo-card__body h5,
:global(body.dark-only) .promo-search input,
:global(body.dark-only) .promo-heading h3 {
  color: #eef2f7;
}

:global(body.dark-only) .promo-heading__icon {
  border-color: #334155;
  background: #1f2937;
}

:global(body.dark-only) .promo-filters,
:global(body.dark-only) .promo-active-setting,
:global(body.dark-only) .promo-upload {
  background: #263242;
  border-color: #334155;
}
</style>
