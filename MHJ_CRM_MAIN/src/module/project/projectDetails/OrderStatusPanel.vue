<template>
  <section class="order-status-panel" aria-labelledby="order-status-title">
    <article class="status-card status-summary">
      <div class="status-summary__icon" aria-hidden="true">
        <SolarIcon name="check-circle" :size="34" />
      </div>
      <div class="status-summary__copy">
        <span class="status-eyebrow">Status saat ini</span>
        <h5 id="order-status-title">{{ orderStatusTitle }}</h5>
        <p>{{ orderStatusDescription }}</p>
      </div>
      <span class="status-badge" :class="{ complete: isOrderComplete }">
        <SolarIcon :name="isOrderComplete ? 'check' : 'clock'" :size="15" />
        {{ isOrderComplete ? 'Selesai' : 'Dalam proses' }}
      </span>
    </article>

    <div class="order-status-grid">
      <article class="status-card progress-card">
        <div class="status-heading">
          <div>
            <span class="status-eyebrow">Progres pesanan</span>
            <h5>Tahapan Pesanan</h5>
          </div>
          <span class="progress-count">{{ completedStepCount }} dari {{ orderSteps.length }} tahap</span>
        </div>

        <ol v-if="orderSteps.length" class="order-steps">
          <li
            v-for="(step, index) in orderSteps"
            :key="step.key"
            class="order-step"
            :class="`is-${step.state}`"
          >
            <span class="step-marker">
              <SolarIcon v-if="step.state === 'complete'" name="check" :size="18" />
              <SolarIcon v-else-if="step.state === 'current'" name="clock" :size="18" />
              <span v-else>{{ index + 1 }}</span>
            </span>
            <div class="step-content">
              <div class="step-title-row">
                <strong>{{ step.title }}</strong>
                <div class="step-title-actions">
                  <span class="step-state">{{ step.label }}</span>
                  <button
                    type="button"
                    class="step-detail-button"
                    :aria-label="`Lihat dokumen tahap ${step.title}`"
                    @click="openStepDetail(step)"
                  >
                    <SolarIcon name="eye" :size="13" />
                    Detail
                    <b v-if="step.documentCount" class="step-detail-button__count">
                      {{ step.documentCount }}
                    </b>
                  </button>
                </div>
              </div>
              <p v-if="step.description">{{ step.description }}</p>
              <div v-if="step.startedLabel || step.completedLabel || step.referensi" class="step-meta">
                <span v-if="step.startedLabel" class="step-date step-date--start">
                  <SolarIcon name="calendar" :size="13" />
                  Mulai: {{ step.startedLabel }}
                </span>
                <span v-if="step.completedLabel" class="step-date step-date--done">
                  <SolarIcon name="check-circle" :size="13" />
                  Selesai: {{ step.completedLabel }}
                </span>
                <span v-if="step.referensi" class="step-ref">Ref ERP: {{ step.referensi }}</span>
              </div>
            </div>
          </li>
        </ol>
        <p v-else-if="loading" class="order-status-note">Memuat status pesanan...</p>
        <p v-else class="order-status-note">{{ loadError || 'Status pesanan belum tersedia.' }}</p>
      </article>

      <article class="status-card order-detail-card">
        <div class="status-heading">
          <div>
            <span class="status-eyebrow">Ringkasan</span>
            <h5>Detail Pesanan</h5>
          </div>
          <span class="document-source">{{ sourceLabel }}</span>
        </div>

        <dl class="order-details">
          <div>
            <dt><SolarIcon name="hashtag" :size="18" />Nomor pesanan</dt>
            <dd>{{ salesOrder.metadata?.documentNumber || 'Belum tersedia' }}</dd>
          </div>
          <div>
            <dt><SolarIcon name="hospital" :size="18" />Customer</dt>
            <dd>{{ salesOrder.metadata?.customer || project.companyName || 'Belum tersedia' }}</dd>
          </div>
          <div>
            <dt><SolarIcon name="wallet" :size="18" />Nilai pesanan</dt>
            <dd>{{ orderValue }}</dd>
          </div>
          <div>
            <dt><SolarIcon name="calendar" :size="18" />Tanggal submit</dt>
            <dd>{{ submittedAt }}</dd>
          </div>
        </dl>

        <div class="order-document">
          <span class="order-document__icon"><SolarIcon name="document-text" :size="24" /></span>
          <div>
            <strong>{{ salesOrder.fileName }}</strong>
            <small>{{ fileSize }}</small>
          </div>
          <button type="button" aria-label="Unduh Surat Pesanan" @click="downloadStoredDocument(salesOrder)">
            <SolarIcon name="download" :size="20" />
          </button>
        </div>
      </article>
    </div>

    <Modal
      :modal-open="Boolean(activeStep)"
      :title="`Dokumen · ${activeStep?.title ?? ''}`"
      size-class="modal-lg"
      modal-centered
      @close-modal="closeStepDetail"
    >
      <div v-if="activeStep" class="step-modal">
        <div class="step-modal__meta">
          <span class="step-modal__state" :class="`is-${activeStep.state}`">{{ activeStep.label }}</span>
          <span v-if="activeStep.department" class="step-modal__dept">
            <SolarIcon name="users-group" :size="13" />
            {{ activeStep.department }}
          </span>
        </div>

        <p v-if="activeStep.description" class="step-modal__desc">{{ activeStep.description }}</p>

        <div v-if="activeStepDocuments.length" class="step-modal__docs">
          <article
            v-for="document in activeStepDocuments"
            :key="document.id"
            class="step-doc"
          >
            <header class="step-doc__head">
              <span class="step-doc__icon">
                <SolarIcon :name="isImage(document) ? 'gallery' : 'document-text'" :size="20" />
              </span>
              <div class="step-doc__copy">
                <strong>{{ documentLabel(document) }}</strong>
                <small>{{ document.fileName }} · {{ formatBytes(document.size) }}</small>
              </div>
              <button
                type="button"
                class="step-doc__download"
                :aria-label="`Unduh ${document.fileName}`"
                @click="downloadStoredDocument(document)"
              >
                <SolarIcon name="download" :size="18" />
              </button>
            </header>

            <div class="step-doc__preview">
              <img v-if="isImage(document)" :src="previewUrl(document)" :alt="document.fileName" />
              <iframe
                v-else-if="isPdf(document)"
                :src="previewUrl(document)"
                :title="document.fileName"
              ></iframe>
              <p v-else class="step-doc__no-preview">
                Pratinjau tidak tersedia untuk tipe berkas ini. Gunakan tombol unduh di atas.
              </p>
            </div>
          </article>
        </div>

        <div v-else class="step-modal__empty">
          <span class="step-modal__empty-icon"><SolarIcon name="folder" :size="30" /></span>
          <strong>Belum ada dokumen</strong>
          <span>
            Tahap ini belum memiliki dokumen atau gambar yang diunggah
            {{ activeStep.department ? `oleh ${activeStep.department}` : 'oleh departemen terkait' }}.
          </span>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeStepDetail">Tutup</button>
      </div>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

import Modal from '@/components/shared/Modal.vue'
import { downloadStoredDocument, type StoredProjectDocument } from '@/services/projectDocumentStorage'
import { fetchOrderTracking, type OrderMilestone } from '@/services/projectOrderService'
import type { Projects } from '@/types/project'

type OrderStepState = 'complete' | 'current' | 'pending'
interface OrderStep {
  key: string
  urutan: number
  milestoneId: number | null
  title: string
  description: string
  department: string
  state: OrderStepState
  label: string
  startedLabel: string
  completedLabel: string
  referensi: string | null
  documentCount: number
}

const props = withDefaults(
  defineProps<{
    project: Projects
    salesOrder: StoredProjectDocument
    documents?: StoredProjectDocument[]
  }>(),
  { documents: () => [] },
)

// Status pesanan diambil real dari BE (GET /api/project/ordertracking/{id})
// yang membaca P_order_tracking + m_order_milestones. Tidak lagi hardcode.
const milestones = ref<OrderMilestone[]>([])
const loading = ref(false)
const loadError = ref('')

async function loadTracking() {
  const id = Number(props.project?.id)
  if (!Number.isFinite(id) || id <= 0) return

  loading.value = true
  loadError.value = ''
  try {
    const result = await fetchOrderTracking(id)
    milestones.value = result.milestones
  } catch {
    loadError.value = 'Gagal memuat status pesanan.'
    milestones.value = []
  } finally {
    loading.value = false
  }
}

watch(() => props.project?.id, loadTracking, { immediate: true })

/** Format "DD MMMM YYYY, HH:mm" dari string tanggal. '' bila kosong/invalid. */
function formatDateLabel(source?: string | null, fallback?: string | null): string {
  if (!source) return fallback ?? ''
  const date = new Date(source)
  if (Number.isNaN(date.getTime())) return fallback ?? ''
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

const completedStepCount = computed(() => milestones.value.filter((item) => item.is_completed).length)

const orderSteps = computed<OrderStep[]>(() => milestones.value.map((milestone, index) => {
  // State ambil dari BE kalau ada (`status`), fallback ke logic lokal untuk
  // kompatibilitas bila endpoint belum di-deploy ulang.
  const state: OrderStepState = milestone.status === 'done' || milestone.is_completed
    ? 'complete'
    : milestone.status === 'process'
      ? 'current'
      : 'pending'

  const startedLabel = formatDateLabel(milestone.started_at, milestone.started_date)
  const completedLabel = state === 'complete'
    ? formatDateLabel(milestone.completed_at, milestone.completed_date)
    : ''

  const milestoneId = Number(milestone.milestone_id)
  const urutan = Number(milestone.urut) || index + 1

  return {
    key: `${milestone.milestone_id ?? 'step'}-${urutan}`,
    urutan,
    milestoneId: Number.isFinite(milestoneId) ? milestoneId : null,
    title: milestone.nama,
    description: milestone.keterangan ?? '',
    department: milestone.department ?? '',
    state,
    label: state === 'complete' ? 'Selesai' : state === 'current' ? 'Dalam proses' : 'Belum dimulai',
    startedLabel,
    completedLabel,
    referensi: milestone.no_referensi_erp,
    documentCount: documentsForStep(urutan).length,
  }
}))

/**
 * Dokumen per tahap.
 *
 * Saat ini DB belum punya tabel dokumen per-milestone, jadi yang bisa
 * ditampilkan hanya dokumen level-peluang yang sudah ada: PO Customer dan
 * Surat Pesanan — keduanya milik tahap 1 ("Data pelanggan + surat pesanan
 * diupload"). Tahap lain sengaja menampilkan empty state sampai BE
 * menyediakan penyimpanan dokumen per tahap.
 */
function documentsForStep(urutan: number): StoredProjectDocument[] {
  if (urutan !== 1) return []
  const order: Record<string, number> = { 'customer-po': 0, 'sales-order': 1 }
  return [...props.documents].sort((first, second) => (order[first.kind] ?? 9) - (order[second.kind] ?? 9))
}

const activeStep = ref<OrderStep | null>(null)
const activeStepDocuments = computed(() =>
  activeStep.value ? documentsForStep(activeStep.value.urutan) : [],
)

// Object URL dibuat lazy per dokumen dan dibersihkan saat modal ditutup supaya
// blob tidak menumpuk di memori selama halaman dibuka.
const previewUrls = new Map<string, string>()

function previewUrl(document: StoredProjectDocument): string {
  const cached = previewUrls.get(document.id)
  if (cached) return cached
  const url = URL.createObjectURL(document.blob)
  previewUrls.set(document.id, url)
  return url
}

function releasePreviewUrls(): void {
  previewUrls.forEach((url) => URL.revokeObjectURL(url))
  previewUrls.clear()
}

function openStepDetail(step: OrderStep): void {
  activeStep.value = step
}

function closeStepDetail(): void {
  activeStep.value = null
  releasePreviewUrls()
}

onBeforeUnmount(releasePreviewUrls)

function isImage(document: StoredProjectDocument): boolean {
  return document.mimeType.startsWith('image/')
}

function isPdf(document: StoredProjectDocument): boolean {
  return document.mimeType === 'application/pdf'
}

function documentLabel(document: StoredProjectDocument): string {
  return document.kind === 'customer-po' ? 'PO Customer' : 'Surat Pesanan'
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const isOrderComplete = computed(
  () => milestones.value.length > 0 && completedStepCount.value === milestones.value.length,
)
const orderStatusTitle = computed(() => isOrderComplete.value
  ? 'Seluruh Tahapan Pesanan Selesai'
  : 'Pesanan Sedang Diproses'
)
const orderStatusDescription = computed(() => {
  if (isOrderComplete.value) {
    return 'Produk telah melalui seluruh proses pesanan, instalasi, training, dan BAST.'
  }
  const current = orderSteps.value.find((step) => step.state === 'current')
  return current
    ? `Tahap saat ini: ${current.title}.`
    : 'Menunggu pembaruan status pesanan dari tim terkait.'
})

const submittedAt = computed(() => {
  const date = new Date(props.salesOrder.createdAt)
  if (Number.isNaN(date.getTime())) return '-'
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
})

const sourceLabel = computed(() => props.salesOrder.source === 'upload' ? 'Dokumen di-upload' : 'Dibuat dari form')

const orderValue = computed(() => {
  if (props.salesOrder.metadata?.totalValue) return props.salesOrder.metadata.totalValue
  const value = props.project.amountValue ?? props.project.projectValue
  if (value === undefined || value === null) return 'Belum tersedia'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: props.project.currency || 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
})

const fileSize = computed(() => formatBytes(props.salesOrder.size))
</script>

<style scoped>
.order-status-panel { display: grid; gap: 18px; }
.status-card { border: 1px solid #e2e9ee; border-radius: 16px; padding: 22px; background: #fff; box-shadow: 0 6px 20px rgba(27, 43, 65, .04); }
.status-summary { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 16px; border-color: #cdebdc; background: linear-gradient(105deg, #f4fcf7, #fff 64%); }
.status-summary__icon { display: grid; place-items: center; width: 58px; height: 58px; border-radius: 16px; color: #16884d; background: #dff6e9; }
.status-eyebrow { display: block; margin-bottom: 4px; color: var(--app-primary, #159ed8); font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.status-summary h5, .status-heading h5 { margin: 0; color: #17212b; font-size: 18px; }
.status-summary p { margin: 6px 0 0; color: #77838e; font-size: 12px; }
.status-badge { display: inline-flex; align-items: center; gap: 7px; border-radius: 999px; padding: 8px 12px; color: #5f6972; background: #e8ebee; font-size: 11px; font-weight: 700; white-space: nowrap; }
.status-badge.complete { color: #16884d; background: #e7f8ef; }
.order-status-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr); align-items: start; gap: 18px; }
.status-heading { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 22px; }
.progress-count, .document-source { border-radius: 999px; padding: 6px 10px; color: #557080; background: #eef4f7; font-size: 10px; font-weight: 700; white-space: nowrap; }
.order-steps { margin: 0; padding: 0; list-style: none; }
.order-step { position: relative; display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 13px; padding-bottom: 14px; color: #7f8a93; }
.order-step:not(:last-child)::before { position: absolute; top: 38px; bottom: -2px; left: 20px; width: 2px; background: #dce2e6; content: ''; }
.order-step.is-complete:not(:last-child)::before { background: #a8dfc1; }
.step-marker { z-index: 1; display: grid; place-items: center; width: 42px; height: 42px; border: 2px solid #dce2e6; border-radius: 50%; color: #8d979f; background: #eef1f3; font-size: 11px; font-weight: 700; }
.order-step.is-complete .step-marker { border-color: #bfe8d2; color: #16884d; background: #e7f8ef; }
.order-step.is-current .step-marker { border-color: #facc15; color: #a16207; background: #fef3c7; animation: step-pulse 2s ease-in-out infinite; }
.step-content { min-width: 0; border: 1px solid #e1e6e9; border-radius: 12px; padding: 13px 14px; background: #eef1f3; }
.order-step.is-complete .step-content { border-color: #cde9da; background: #fff; box-shadow: 0 4px 13px rgba(35, 75, 53, .05); }
.order-step.is-current .step-content { border-color: #facc15; background: #fffbeb; box-shadow: 0 4px 13px rgba(161, 98, 7, .07); }
@keyframes step-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, .45); }
  50%      { box-shadow: 0 0 0 7px rgba(250, 204, 21, 0); }
}
.step-title-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.order-step strong { display: block; color: #34404a; font-size: 13px; line-height: 1.45; }
.order-step p { margin: 6px 0 5px; font-size: 11px; line-height: 1.55; }
.order-step time, .step-state { color: #91a0aa; font-size: 10px; }
.step-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px; margin-top: 2px; }
.step-ref { color: var(--app-primary-dark, #087fae); font-size: 10px; font-weight: 700; }
.order-status-note { margin: 4px 0 0; color: #77838e; font-size: 12px; }
.step-state { flex: 0 0 auto; border-radius: 999px; padding: 4px 8px; background: #dfe3e6; font-weight: 700; white-space: nowrap; }
.order-step.is-complete .step-state { color: #16884d; background: #e7f8ef; }
.order-step.is-current .step-state { color: #92400e; background: #fde68a; }
.step-date { display: inline-flex; align-items: center; gap: 4px; border-radius: 8px; padding: 3px 7px; font-size: 10px; font-weight: 600; white-space: nowrap; }
.step-date :deep(.solar-icon) { flex: 0 0 auto; }
.step-date--start { color: #a16207; background: #fef3c7; }
.step-date--done { color: #16884d; background: #e7f8ef; }
.order-step.is-pending .step-date--start { color: #64748b; background: #e2e8f0; }

/* ── Tombol Detail per tahap + modal dokumennya ─────────────────────── */
.step-title-actions { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 7px; }
.step-detail-button { display: inline-flex; align-items: center; gap: 5px; border: 1px solid #d5dde3; border-radius: 999px; padding: 4px 10px; color: #4a5a66; background: #fff; font-size: 10px; font-weight: 700; white-space: nowrap; transition: border-color .15s ease, color .15s ease, background-color .15s ease; }
.step-detail-button:hover, .step-detail-button:focus-visible { border-color: var(--app-primary, #18a6e4); color: var(--app-primary-dark, #087fae); background: var(--app-primary-wash, #e5f5fc); outline: none; }
.step-detail-button__count { display: inline-grid; place-items: center; min-width: 16px; height: 16px; padding: 0 4px; border-radius: 8px; color: #fff; background: var(--app-primary, #18a6e4); font-size: 9px; font-weight: 700; font-style: normal; line-height: 1; }

.step-modal { padding: 18px 20px; }
.step-modal__meta { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 12px; }
.step-modal__state { border-radius: 999px; padding: 4px 10px; background: #dfe3e6; color: #5f6972; font-size: 10px; font-weight: 700; }
.step-modal__state.is-complete { color: #16884d; background: #e7f8ef; }
.step-modal__state.is-current { color: #92400e; background: #fde68a; }
.step-modal__dept { display: inline-flex; align-items: center; gap: 5px; border-radius: 999px; padding: 4px 10px; color: var(--app-primary-dark, #087fae); background: var(--app-primary-wash, #e5f5fc); font-size: 10px; font-weight: 700; }
.step-modal__desc { margin: 0 0 16px; color: #77838e; font-size: 12px; line-height: 1.55; }

.step-modal__docs { display: grid; gap: 14px; }
.step-doc { border: 1px solid #e1e8ed; border-radius: 12px; overflow: hidden; background: #fff; }
.step-doc__head { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 11px; border-bottom: 1px solid #edf1f4; padding: 11px 13px; background: #f8fbfd; }
.step-doc__icon { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 10px; color: var(--app-primary, #159ed8); background: var(--app-primary-wash, #e5f5fc); }
.step-doc__copy { min-width: 0; }
.step-doc__copy strong, .step-doc__copy small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.step-doc__copy strong { color: #33414c; font-size: 12px; }
.step-doc__copy small { margin-top: 2px; color: #93a0aa; font-size: 10px; }
.step-doc__download { display: grid; place-items: center; width: 34px; height: 34px; border: 0; border-radius: 9px; color: var(--app-primary-dark, #087fae); background: var(--app-primary-wash, #e4f4fb); }
.step-doc__download:hover { background: var(--app-primary-soft, #d3edf8); }
.step-doc__preview { display: grid; place-items: center; max-height: 420px; overflow: auto; padding: 12px; background: #f4f7f9; }
.step-doc__preview img { max-width: 100%; max-height: 396px; border-radius: 8px; object-fit: contain; }
.step-doc__preview iframe { width: 100%; height: 396px; border: 0; border-radius: 8px; background: #fff; }
.step-doc__no-preview { margin: 0; padding: 22px 12px; color: #77838e; font-size: 12px; text-align: center; }

.step-modal__empty { display: grid; justify-items: center; gap: 6px; border: 1px dashed #d8e1e7; border-radius: 12px; padding: 32px 20px; text-align: center; }
.step-modal__empty-icon { display: grid; place-items: center; width: 56px; height: 56px; margin-bottom: 4px; border-radius: 14px; color: #93a4b0; background: #eef2f5; }
.step-modal__empty strong { color: #34404a; font-size: 13px; }
.step-modal__empty > span:last-child { max-width: 380px; color: #87929c; font-size: 11px; line-height: 1.55; }
.order-details { margin: 0; }
.order-details > div { display: grid; grid-template-columns: minmax(130px, .8fr) minmax(0, 1fr); align-items: center; gap: 14px; border-bottom: 1px solid #edf1f4; padding: 12px 0; }
.order-details dt { display: inline-flex; align-items: center; gap: 8px; color: #89949d; font-size: 11px; font-weight: 500; }
.order-details dt :deep(.solar-icon) { color: var(--app-primary, #159ed8); }
.order-details dd { overflow-wrap: anywhere; margin: 0; color: #29343d; font-size: 12px; font-weight: 700; text-align: right; }
.order-document { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 11px; margin-top: 18px; border: 1px solid #dfeaf0; border-radius: 12px; padding: 11px; background: #f7fbfd; }
.order-document__icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 10px; color: var(--app-primary, #159ed8); background: var(--app-primary-wash, #e5f5fc); }
.order-document strong, .order-document small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.order-document strong { color: #33414c; font-size: 11px; }
.order-document small { margin-top: 3px; color: #93a0aa; font-size: 9px; }
.order-document button { display: grid; place-items: center; width: 36px; height: 36px; border: 0; border-radius: 9px; color: var(--app-primary-dark, #087fae); background: var(--app-primary-wash, #e4f4fb); }
.order-document button:hover { background: var(--app-primary-soft, #d3edf8); }

@media (max-width: 767.98px) {
  .status-card { padding: 16px; }
  .status-summary { grid-template-columns: auto minmax(0, 1fr); }
  .status-summary__icon { width: 48px; height: 48px; }
  .status-badge { grid-column: 1 / -1; justify-self: start; }
  .order-status-grid { grid-template-columns: 1fr; }
  .status-heading { align-items: flex-start; }
  .step-title-row { display: grid; gap: 7px; }
  .step-state { justify-self: start; }
  .step-title-actions { justify-self: start; }
  .step-doc__preview iframe { height: 300px; }
}

@media (max-width: 420px) {
  .order-details > div { grid-template-columns: 1fr; gap: 5px; }
  .order-details dd { text-align: left; }
}
</style>
