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

        <ol class="order-steps">
          <li
            v-for="(step, index) in orderSteps"
            :key="step.title"
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
                <span class="step-state">{{ step.label }}</span>
              </div>
              <p>{{ step.description }}</p>
              <time v-if="step.state === 'complete'" :datetime="salesOrder.createdAt">{{ submittedAt }}</time>
            </div>
          </li>
        </ol>
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
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { downloadStoredDocument, type StoredProjectDocument } from '@/services/projectDocumentStorage'
import type { Projects } from '@/types/project'

type OrderStepState = 'complete' | 'current' | 'pending'
interface OrderStep {
  title: string
  description: string
  state: OrderStepState
  label: string
}
type OrderStepDefinition = Pick<OrderStep, 'title' | 'description'>

const props = defineProps<{
  project: Projects
  salesOrder: StoredProjectDocument
}>()

const orderStepDefinitions: OrderStepDefinition[] = [
  {
    title: 'Data Customer dibuat & Surat Pesanan di-upload',
    description: 'Sales melengkapi Data Customer dan melampirkan Surat Pesanan dari pelanggan. Jika pelanggan belum memiliki SP, sales dapat membuat draft Surat Pesanan.',
  },
  {
    title: 'Surat Pesanan (SP) dibuat',
    description: 'Admin memeriksa Data Customer dan SP dari sales, membuat SP di program G0500, lalu menunggu pembayaran/DP serta pembuatan dan penandatanganan SPJB.',
  },
  {
    title: 'Delivery Order (DO) dibuat',
    description: 'Setelah DP diterima dan SPJB ditandatangani, admin akan membuat Delivery Order.',
  },
  {
    title: 'Produk dalam proses pengiriman',
    description: 'DO diperiksa dan diproses oleh departemen logistik/gudang, kemudian dibuatkan Surat Jalan (SJ).',
  },
  {
    title: 'Produk tiba di alamat tujuan',
    description: 'Sales atau koordinator engineer mengonfirmasi bahwa produk telah sampai di lokasi pelanggan.',
  },
  {
    title: 'Produk dalam proses instalasi',
    description: 'Koordinator engineer membuat tiket instalasi berisi jadwal dan engineer berdasarkan serial number alat.',
  },
  {
    title: 'Produk sudah terinstal',
    description: 'Engineer yang bertugas menyelesaikan tiket instalasi melalui aplikasi.',
  },
  {
    title: 'Training & BAST',
    description: 'Application Specialist membuat task training dan BAST berdasarkan serial number alat.',
  },
]

const completedStepCount = computed(() => {
  const savedStep = props.salesOrder.metadata?.completedOrderStep ?? 1
  return Math.min(orderStepDefinitions.length, Math.max(0, savedStep))
})

const orderSteps = computed<OrderStep[]>(() => orderStepDefinitions.map((step, index) => {
  if (index < completedStepCount.value) {
    return { ...step, state: 'complete', label: 'Selesai' }
  }
  if (index === completedStepCount.value) {
    return { ...step, state: 'current', label: 'Dalam proses' }
  }
  return { ...step, state: 'pending', label: 'Belum dimulai' }
}))

const isOrderComplete = computed(() => completedStepCount.value === orderStepDefinitions.length)
const orderStatusTitle = computed(() => isOrderComplete.value
  ? 'Seluruh Tahapan Pesanan Selesai'
  : 'Data Customer & Surat Pesanan Diterima'
)
const orderStatusDescription = computed(() => isOrderComplete.value
  ? 'Produk telah melalui seluruh proses pesanan, instalasi, training, dan BAST.'
  : 'Tahap awal selesai. Pesanan sedang menunggu pemeriksaan dan pembuatan SP oleh admin.'
)

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

const fileSize = computed(() => {
  const bytes = props.salesOrder.size
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
})
</script>

<style scoped>
.order-status-panel { display: grid; gap: 18px; }
.status-card { border: 1px solid #e2e9ee; border-radius: 16px; padding: 22px; background: #fff; box-shadow: 0 6px 20px rgba(27, 43, 65, .04); }
.status-summary { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 16px; border-color: #cdebdc; background: linear-gradient(105deg, #f4fcf7, #fff 64%); }
.status-summary__icon { display: grid; place-items: center; width: 58px; height: 58px; border-radius: 16px; color: #16884d; background: #dff6e9; }
.status-eyebrow { display: block; margin-bottom: 4px; color: #159ed8; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
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
.order-step.is-current .step-marker { border-color: #c9d0d5; color: #56616a; background: #dfe3e6; }
.step-content { min-width: 0; border: 1px solid #e1e6e9; border-radius: 12px; padding: 13px 14px; background: #eef1f3; }
.order-step.is-complete .step-content { border-color: #cde9da; background: #fff; box-shadow: 0 4px 13px rgba(35, 75, 53, .05); }
.order-step.is-current .step-content { border-color: #cfd5d9; background: #e4e7e9; }
.step-title-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.order-step strong { display: block; color: #34404a; font-size: 13px; line-height: 1.45; }
.order-step p { margin: 6px 0 5px; font-size: 11px; line-height: 1.55; }
.order-step time, .step-state { color: #91a0aa; font-size: 10px; }
.step-state { flex: 0 0 auto; border-radius: 999px; padding: 4px 8px; background: #dfe3e6; font-weight: 700; white-space: nowrap; }
.order-step.is-complete .step-state { color: #16884d; background: #e7f8ef; }
.order-step.is-current .step-state { color: #525d66; background: #d2d7da; }
.order-details { margin: 0; }
.order-details > div { display: grid; grid-template-columns: minmax(130px, .8fr) minmax(0, 1fr); align-items: center; gap: 14px; border-bottom: 1px solid #edf1f4; padding: 12px 0; }
.order-details dt { display: inline-flex; align-items: center; gap: 8px; color: #89949d; font-size: 11px; font-weight: 500; }
.order-details dt :deep(.solar-icon) { color: #159ed8; }
.order-details dd { overflow-wrap: anywhere; margin: 0; color: #29343d; font-size: 12px; font-weight: 700; text-align: right; }
.order-document { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 11px; margin-top: 18px; border: 1px solid #dfeaf0; border-radius: 12px; padding: 11px; background: #f7fbfd; }
.order-document__icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 10px; color: #159ed8; background: #e5f5fc; }
.order-document strong, .order-document small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.order-document strong { color: #33414c; font-size: 11px; }
.order-document small { margin-top: 3px; color: #93a0aa; font-size: 9px; }
.order-document button { display: grid; place-items: center; width: 36px; height: 36px; border: 0; border-radius: 9px; color: #087fae; background: #e4f4fb; }
.order-document button:hover { background: #d3edf8; }

@media (max-width: 767.98px) {
  .status-card { padding: 16px; }
  .status-summary { grid-template-columns: auto minmax(0, 1fr); }
  .status-summary__icon { width: 48px; height: 48px; }
  .status-badge { grid-column: 1 / -1; justify-self: start; }
  .order-status-grid { grid-template-columns: 1fr; }
  .status-heading { align-items: flex-start; }
  .step-title-row { display: grid; gap: 7px; }
  .step-state { justify-self: start; }
}

@media (max-width: 420px) {
  .order-details > div { grid-template-columns: 1fr; gap: 5px; }
  .order-details dd { text-align: left; }
}
</style>
