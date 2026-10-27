<template>
  <section ref="actionsRoot" class="won-document-actions" aria-labelledby="won-document-title">
    <div class="document-intro">
      <span class="document-icon"><SolarIcon name="fa-file-lines" /></span>
      <div>
        <h5 id="won-document-title">Dokumen Peluang</h5>
        <p>Upload dokumen yang sudah ada atau buat dokumen baru dari data peluang.</p>
      </div>
    </div>

    <div class="document-buttons">
      <details class="document-menu">
        <summary>
          <span><SolarIcon name="fa-file-invoice-dollar" />PO Customer</span>
          <SolarIcon name="fa-chevron-down" class="menu-chevron" />
        </summary>
        <div class="document-menu__panel">
          <button type="button" @click="chooseUpload('customer-po', $event)">
            <SolarIcon name="fa-arrow-up-from-bracket" />
            <span><strong>Upload PO Customer</strong><small>PDF, Word, Excel, atau gambar</small></span>
          </button>
          <button type="button" @click="openForm('customer-po', $event)">
            <SolarIcon name="fa-pen-to-square" />
            <span><strong>Isi Form Data Pelanggan</strong><small>Buat dokumen dari data peluang</small></span>
          </button>
          <button
            v-if="latestCustomerPo"
            class="latest-document"
            type="button"
            @click="downloadDocument(latestCustomerPo, $event)"
          >
            <SolarIcon name="fa-download" />
            <span><strong>Unduh terakhir</strong><small>{{ latestCustomerPo.fileName }}</small></span>
          </button>
        </div>
      </details>

      <details class="document-menu">
        <summary>
          <span><SolarIcon name="fa-file-word" />Surat Pesanan</span>
          <SolarIcon name="fa-chevron-down" class="menu-chevron" />
        </summary>
        <div class="document-menu__panel document-menu__panel--right">
          <button type="button" @click="chooseUpload('sales-order', $event)">
            <SolarIcon name="fa-arrow-up-from-bracket" />
            <span><strong>Upload Surat Pesanan</strong><small>PDF, Word, Excel, atau gambar</small></span>
          </button>
          <button type="button" @click="openForm('sales-order', $event)">
            <SolarIcon name="fa-pen-to-square" />
            <span><strong>Buat Draft Surat Pesanan</strong><small>Isi lalu unduh sebagai Word</small></span>
          </button>
          <button
            v-if="latestSalesOrder"
            class="latest-document"
            type="button"
            @click="downloadDocument(latestSalesOrder, $event)"
          >
            <SolarIcon name="fa-download" />
            <span><strong>Unduh terakhir</strong><small>{{ latestSalesOrder.fileName }}</small></span>
          </button>
        </div>
      </details>
    </div>

    <div class="document-notes">
      <p v-if="!latestSalesOrder" class="order-status-note">
        <SolarIcon name="fa-circle-exclamation" />
        Lengkapi atau upload Surat Pesanan untuk menampilkan tab Status Pesanan.
      </p>
      <p class="local-storage-note">
        <SolarIcon name="fa-circle-info" />
        Dokumen disimpan lokal sementara sampai endpoint backend tersedia.
      </p>
    </div>

    <input
      ref="customerPoInput"
      class="d-none"
      type="file"
      :accept="acceptedFileTypes"
      @change="handleUpload('customer-po', $event)"
    />
    <input
      ref="salesOrderInput"
      class="d-none"
      type="file"
      :accept="acceptedFileTypes"
      @change="handleUpload('sales-order', $event)"
    />

    <Modal
      :modal-open="formMode !== null"
      :title="formMode === 'customer-po' ? 'Isi Form Data Pelanggan / PO Customer' : 'Buat Draft Surat Pesanan'"
      size-class="modal-xl"
      dialog-class="modal-dialog-scrollable won-document-dialog"
      content-class="won-document-modal"
      :modal-centered="true"
      @close-modal="closeForm"
    >
      <form class="document-form mhj-form needs-validation" @submit.prevent="generateDocument">
        <div class="modal-body">
          <div class="form-grid">
            <template v-if="formMode === 'customer-po'">
              <label>
                <span>Tanggal <b>*</b></span>
                <input v-model="form.documentDate" class="form-control" type="date" required />
              </label>
              <label>
                <span>Nama pelanggan <b>*</b></span>
                <input v-model.trim="form.customer" class="form-control" type="text" required />
              </label>
              <label>
                <span>Nama barang / tipe <b>*</b></span>
                <input v-model.trim="form.itemType" class="form-control" type="text" required />
              </label>
              <label>
                <span>Harga jual</span>
                <input v-model.trim="form.salePrice" class="form-control" type="text" />
              </label>
              <label class="full-column">
                <span>Komposisi barang</span>
                <textarea v-model.trim="form.itemComposition" class="form-control" rows="3"></textarea>
              </label>
              <label>
                <span>Harga jual total</span>
                <input v-model.trim="form.totalSalePrice" class="form-control" type="text" />
              </label>
              <label>
                <span>Diskon</span>
                <input v-model.trim="form.discount" class="form-control" type="text" />
              </label>
              <label>
                <span>Harga netto belum termasuk PPN</span>
                <input v-model.trim="form.netBeforeTax" class="form-control" type="text" />
              </label>
              <label>
                <span>PPN</span>
                <input v-model.trim="form.vat" class="form-control" type="text" />
              </label>

              <fieldset class="option-group">
                <legend>Biaya pengiriman</legend>
                <label><input v-model="form.shippingCostBearer" type="radio" value="mhj" />Ditanggung MHJ</label>
                <label><input v-model="form.shippingCostBearer" type="radio" value="customer" />Ditanggung pelanggan</label>
              </fieldset>
              <fieldset class="option-group">
                <legend>Biaya asuransi</legend>
                <label><input v-model="form.insuranceCostBearer" type="radio" value="mhj" />Ditanggung MHJ</label>
                <label><input v-model="form.insuranceCostBearer" type="radio" value="customer" />Ditanggung pelanggan</label>
              </fieldset>
              <fieldset class="option-group full-column option-group--inline">
                <legend>Persiapan dan pemasangan</legend>
                <label><input v-model="form.roomPreparation" type="checkbox" />Room preparation</label>
                <label><input v-model="form.installation" type="checkbox" />Instalasi</label>
              </fieldset>

              <label>
                <span>Date line pengiriman</span>
                <input v-model="form.deliveryDeadline" class="form-control" type="date" />
              </label>
              <label>
                <span>Nomor telepon</span>
                <input v-model.trim="form.phone" class="form-control" type="text" />
              </label>
              <label class="full-column">
                <span>Alamat</span>
                <textarea v-model.trim="form.address" class="form-control" rows="2"></textarea>
              </label>
              <label class="full-column">
                <span>Alamat pengiriman</span>
                <textarea v-model.trim="form.shippingAddress" class="form-control" rows="2"></textarea>
              </label>
              <label class="full-column">
                <span>Alamat penagihan</span>
                <textarea v-model.trim="form.billingAddress" class="form-control" rows="2"></textarea>
              </label>
              <label>
                <span>Fax</span>
                <input v-model.trim="form.fax" class="form-control" type="text" />
              </label>
              <label>
                <span>HP</span>
                <input v-model.trim="form.mobile" class="form-control" type="text" />
              </label>

              <h6 class="form-section-title full-column">Cara Pembayaran</h6>
              <label class="full-column">
                <span>Jatuh tempo (1x pembayaran)</span>
                <input v-model.trim="form.dueDatePayment" class="form-control" type="text" />
              </label>
              <label>
                <span>DP</span>
                <input v-model.trim="form.downPayment" class="form-control" type="text" />
              </label>
              <label>
                <span>Sisa</span>
                <input v-model.trim="form.remainingPayment" class="form-control" type="text" />
              </label>

              <h6 class="form-section-title full-column">Persetujuan Internal</h6>
              <label>
                <span>Direktur sales</span>
                <input v-model.trim="form.salesDirectorName" class="form-control" type="text" />
              </label>
              <label>
                <span>Area manager</span>
                <input v-model.trim="form.areaManagerName" class="form-control" type="text" />
              </label>
              <label>
                <span>Product specialist</span>
                <input v-model.trim="form.productSpecialistName" class="form-control" type="text" />
              </label>
              <label>
                <span>Marketing</span>
                <input v-model.trim="form.marketingName" class="form-control" type="text" />
              </label>
              <label class="full-column">
                <span>Garansi</span>
                <input v-model.trim="form.warranty" class="form-control" type="text" />
              </label>
            </template>

            <template v-else>
              <label>
                <span>Nomor Surat Pesanan <b>*</b></span>
                <input v-model.trim="form.documentNumber" class="form-control" type="text" required />
              </label>
              <label>
                <span>Tanggal dokumen <b>*</b></span>
                <input v-model="form.documentDate" class="form-control" type="date" required />
              </label>
              <label class="full-column">
                <span>Customer / faskes <b>*</b></span>
                <input v-model.trim="form.customer" class="form-control" type="text" required />
              </label>
              <label class="full-column">
                <span>Alamat</span>
                <textarea v-model.trim="form.address" class="form-control" rows="2"></textarea>
              </label>
              <label>
                <span>Nama kontak</span>
                <input v-model.trim="form.contact" class="form-control" type="text" />
              </label>
              <label>
                <span>Penandatangan <b>*</b></span>
                <input v-model.trim="form.signerName" class="form-control" type="text" required />
              </label>
              <label class="full-column">
                <span>Alat / produk yang dipesan <b>*</b></span>
                <textarea v-model.trim="form.product" class="form-control" rows="3" required></textarea>
              </label>
              <label>
                <span>Jumlah</span>
                <input v-model.trim="form.quantity" class="form-control" type="text" placeholder="Contoh: 1 unit" />
              </label>
              <label>
                <span>Nilai pesanan</span>
                <input v-model.trim="form.totalValue" class="form-control" type="text" />
              </label>
              <label class="full-column">
                <span>Ketentuan pembayaran</span>
                <textarea v-model.trim="form.paymentTerms" class="form-control" rows="2"></textarea>
              </label>
              <label>
                <span>Harga franco</span>
                <input v-model.trim="form.destination" class="form-control" type="text" />
              </label>
              <label>
                <span>Jabatan penandatangan</span>
                <input v-model.trim="form.signerTitle" class="form-control" type="text" />
              </label>
              <label>
                <span>Bank</span>
                <input v-model.trim="form.bank" class="form-control" type="text" />
              </label>
              <label>
                <span>Nomor rekening</span>
                <input v-model.trim="form.accountNumber" class="form-control" type="text" />
              </label>
              <label>
                <span>Nama rekening</span>
                <input v-model.trim="form.accountName" class="form-control" type="text" />
              </label>
              <label>
                <span>Garansi</span>
                <input v-model.trim="form.warranty" class="form-control" type="text" />
              </label>
              <label class="full-column">
                <span>Catatan tambahan</span>
                <textarea v-model.trim="form.notes" class="form-control" rows="3"></textarea>
              </label>
            </template>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-light" type="button" @click="closeForm">Batal</button>
          <details class="export-menu" :class="{ disabled: saving }">
            <summary class="btn btn-primary" @click="saving && $event.preventDefault()">
              {{ saving ? 'Menyimpan...' : 'Simpan Dokumen' }}
            </summary>
            <div class="export-menu__panel">
              <button type="submit" @click="exportFormat = 'word'">
                <span><strong>Simpan sebagai Word</strong><small>Format .doc yang dapat diedit</small></span>
              </button>
              <button type="submit" @click="exportFormat = 'pdf'">
                <span><strong>Simpan sebagai PDF</strong><small>Format .pdf siap dikirim</small></span>
              </button>
            </div>
          </details>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import Swal from 'sweetalert2'

import Modal from '@/components/shared/Modal.vue'
import {
  downloadStoredDocument,
  getProjectDocuments,
  saveProjectDocument,
  type ProjectDocumentKind,
  type StoredProjectDocument,
} from '@/services/projectDocumentStorage'
import type { Projects } from '@/types/project'
import { getUserErrorMessage } from '@/utils/errorParser'
import { getActiveFontFamily } from '@/config/appearance'

const props = defineProps<{ project: Projects }>()
const emit = defineEmits<{
  'documents-loaded': [documents: StoredProjectDocument[]]
  'sales-order-saved': [document: StoredProjectDocument]
}>()

const acceptedFileTypes = '.pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png'
const maxFileSize = 10 * 1024 * 1024
const customerPoInput = ref<HTMLInputElement | null>(null)
const salesOrderInput = ref<HTMLInputElement | null>(null)
const formMode = ref<ProjectDocumentKind | null>(null)
const documents = ref<StoredProjectDocument[]>([])
const saving = ref(false)
const exportFormat = ref<'word' | 'pdf'>('word')

const form = reactive({
  documentNumber: '',
  documentDate: '',
  customer: '',
  address: '',
  contact: '',
  signerName: '',
  signerTitle: '',
  product: '',
  quantity: '',
  totalValue: '',
  paymentTerms: '',
  destination: '',
  bank: 'BCA Cab. Tunjungan / Surabaya',
  accountName: 'PT. Mulya Husada Jaya',
  accountNumber: '014.126.7565',
  warranty: '',
  notes: '',
  itemType: '',
  itemComposition: '',
  salePrice: '',
  totalSalePrice: '',
  discount: '',
  netBeforeTax: '',
  vat: '',
  shippingCostBearer: '',
  insuranceCostBearer: '',
  roomPreparation: false,
  installation: false,
  deliveryDeadline: '',
  shippingAddress: '',
  billingAddress: '',
  phone: '',
  fax: '',
  mobile: '',
  dueDatePayment: '',
  downPayment: '',
  remainingPayment: '',
  salesDirectorName: '',
  areaManagerName: '',
  productSpecialistName: '',
  marketingName: '',
})

const latestCustomerPo = computed(() => documents.value.find((item) => item.kind === 'customer-po'))
const latestSalesOrder = computed(() => documents.value.find((item) => item.kind === 'sales-order'))

function today(): string {
  const now = new Date()
  return new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10)
}

function productText(): string {
  if (props.project.productDetails?.length) {
    return props.project.productDetails
      .map((item) => `${item.name} (${item.quantity} unit)`)
      .join('\n')
  }
  const productNames = props.project.productNames || ''
  try {
    const parsed = JSON.parse(productNames)
    if (Array.isArray(parsed)) return parsed.map(String).join('\n')
  } catch {
    // Respons API lama mengirim daftar produk sebagai teks biasa.
  }
  return productNames
}

function resetForm(): void {
  const totalValue = props.project.amountValue ?? props.project.projectValue ?? 0
  const firstProduct = productText().split('\n')[0]?.replace(/\s*\([^)]*\)\s*$/, '') || ''
  Object.assign(form, {
    documentNumber: `SP/${new Date().getFullYear()}/`,
    documentDate: today(),
    customer: props.project.companyName || '',
    address: props.project.address || '',
    contact: props.project.contactName || '',
    signerName: props.project.contactName || '',
    signerTitle: '',
    product: productText(),
    quantity: props.project.quantity ? `${props.project.quantity} unit` : '',
    totalValue: formatCurrency(totalValue),
    paymentTerms: '',
    destination: props.project.companyName || '',
    bank: 'BCA Cab. Tunjungan / Surabaya',
    accountName: 'PT. Mulya Husada Jaya',
    accountNumber: '014.126.7565',
    warranty: '',
    notes: '',
    itemType: firstProduct,
    itemComposition: '',
    salePrice: props.project.unitPrice ? formatCurrency(props.project.unitPrice) : '',
    totalSalePrice: totalValue ? formatCurrency(totalValue) : '',
    discount: '',
    netBeforeTax: totalValue ? formatCurrency(totalValue) : '',
    vat: '',
    shippingCostBearer: '',
    insuranceCostBearer: '',
    roomPreparation: false,
    installation: false,
    deliveryDeadline: props.project.expectedCloseDate?.slice(0, 10) || '',
    shippingAddress: props.project.address || '',
    billingAddress: props.project.address || '',
    phone: '',
    fax: '',
    mobile: props.project.contactPhone || '',
    dueDatePayment: '',
    downPayment: '',
    remainingPayment: '',
    salesDirectorName: '',
    areaManagerName: '',
    productSpecialistName: '',
    marketingName: props.project.ownerName || '',
  })
}

function closeMenu(event: Event): void {
  const target = event.currentTarget as HTMLElement | null
  target?.closest('details')?.removeAttribute('open')
}

function chooseUpload(kind: ProjectDocumentKind, event: Event): void {
  closeMenu(event)
  const input = kind === 'customer-po' ? customerPoInput.value : salesOrderInput.value
  input?.click()
}

function openForm(kind: ProjectDocumentKind, event: Event): void {
  closeMenu(event)
  resetForm()
  formMode.value = kind
}

function closeForm(): void {
  if (!saving.value) formMode.value = null
}

async function handleUpload(kind: ProjectDocumentKind, event: Event): Promise<void> {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return
  if (file.size > maxFileSize) {
    await Swal.fire('File terlalu besar', 'Ukuran file maksimal 10 MB.', 'warning')
    return
  }

  try {
    const document: StoredProjectDocument = {
      id: `${props.project.id}-${kind}-${Date.now()}`,
      projectId: props.project.id,
      kind,
      source: 'upload',
      fileName: file.name,
      mimeType: file.type || 'application/octet-stream',
      size: file.size,
      createdAt: new Date().toISOString(),
      blob: file,
      metadata: kind === 'sales-order' ? { completedOrderStep: 1 } : undefined,
    }
    await saveProjectDocument(document)
    documents.value = [document, ...documents.value]
    if (kind === 'sales-order') emit('sales-order-saved', document)
    await Swal.fire({
      icon: 'success',
      title: 'Dokumen tersimpan',
      text: `${file.name} tersimpan lokal dan dapat diunduh kembali dari menu.`,
      timer: 2200,
      showConfirmButton: false,
    })
  } catch (error) {
    await showStorageError(error)
  }
}

async function loadDocuments(): Promise<void> {
  try {
    documents.value = await getProjectDocuments(props.project.id)
  } catch {
    documents.value = []
  }
  emit('documents-loaded', documents.value)
}

function downloadDocument(document: StoredProjectDocument, event: Event): void {
  closeMenu(event)
  downloadStoredDocument(document)
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: props.project.currency || 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
    .replaceAll('\n', '<br>')
}

function documentHtml(kind: ProjectDocumentKind): string {
  return kind === 'customer-po' ? customerPoHtml() : salesOrderHtml()
}

function rowsHtml(rows: string[][]): string {
  return rows
    .filter((row) => row[1])
    .map((row) => `<tr><td class="field-label">${escapeHtml(row[0])}</td><td class="colon">:</td><td class="field-value">${escapeHtml(row[1])}</td></tr>`)
    .join('')
}

function bearerLabel(value: string): string {
  if (value === 'mhj') return 'Ditanggung MHJ'
  if (value === 'customer') return 'Ditanggung pelanggan'
  return ''
}

function customerRows(): string[][] {
  return [
    ['Nama Pelanggan', form.customer],
    ['Nama Barang / Tipe', form.itemType],
    ['Komposisi Barang', form.itemComposition],
    ['Harga Jual', form.salePrice],
    ['Harga Jual Total', form.totalSalePrice],
    ['Diskon', form.discount],
    ['Harga Netto Belum Termasuk PPN', form.netBeforeTax],
    ['PPN', form.vat],
    ['Biaya Pengiriman', bearerLabel(form.shippingCostBearer)],
    ['Biaya Asuransi', bearerLabel(form.insuranceCostBearer)],
    ['Persiapan dan Pemasangan', [form.roomPreparation ? 'Room preparation' : '', form.installation ? 'Instalasi' : ''].filter(Boolean).join(', ')],
    ['Date Line Pengiriman', formatDocumentDate(form.deliveryDeadline)],
    ['Alamat', form.address],
    ['Alamat Pengiriman', form.shippingAddress],
    ['Alamat Penagihan', form.billingAddress],
    ['Nomor Telepon', form.phone],
    ['Fax', form.fax],
    ['HP', form.mobile],
    ['Garansi', form.warranty],
  ]
}

function customerPaymentRows(): string[][] {
  return [
    ['Jatuh Tempo (1x Pembayaran)', form.dueDatePayment],
    ['DP', form.downPayment],
    ['Sisa', form.remainingPayment],
  ]
}

function customerApprovalRows(): string[][] {
  return [
    ['Direktur Sales', form.salesDirectorName],
    ['Area Manager', form.areaManagerName],
    ['Product Specialist', form.productSpecialistName],
    ['Marketing', form.marketingName],
  ]
}

function customerPoHtml(): string {
  const approvals = customerApprovalRows()
  const fontFamily = getActiveFontFamily()

  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @page{size:A4;margin:18mm 20mm}body{font-family:${fontFamily};font-size:10.5pt;line-height:1.4;color:#111;margin:0}
    h1{text-align:center;font-size:16pt;margin:0 0 12px;letter-spacing:.4px}.document-date{text-align:right;margin:0 0 18px}
    .document-date span{display:inline-block;min-width:180px;border-bottom:1px solid #555;padding:0 5px 2px}.form-table{width:100%;border-collapse:collapse;margin:0 0 14px}
    .form-table td{border:0;padding:4px 2px;vertical-align:top}.field-label{width:31%;font-weight:600}.colon{width:12px}.field-value{border-bottom:1px solid #aaa!important;white-space:normal}
    h2{margin:20px 0 8px;border-bottom:1.5px solid #222;padding-bottom:4px;font-size:11pt;letter-spacing:.3px}.approval-table{width:100%;border-collapse:collapse;margin-top:24px}
    .approval-table td{width:25%;height:90px;border:1px solid #777;padding:7px;text-align:center;vertical-align:top}.approval-name{display:block;margin-top:52px;font-weight:600}
  </style></head><body>
    <h1>DATA PELANGGAN</h1>
    <p class="document-date">Tgl. <span>${escapeHtml(formatDocumentDate(form.documentDate))}</span></p>
    <table class="form-table">${rowsHtml(customerRows())}</table>
    <h2>CARA PEMBAYARAN</h2>
    <table class="form-table">${rowsHtml(customerPaymentRows())}</table>
    <table class="approval-table"><tr>${approvals.map(([role, name]) => `<td>${escapeHtml(role)}<span class="approval-name">Nama: ${escapeHtml(name)}</span></td>`).join('')}</tr></table>
  </body></html>`
}

function salesOrderRows(): string[][] {
  return [
    ['Nomor', form.documentNumber],
    ['Customer / Faskes', form.customer],
    ['Alamat', form.address],
    ['Kontak', form.contact],
    ['Alat yang Dipesan', form.product],
    ['Jumlah', form.quantity],
    ['Nilai Pesanan', form.totalValue],
    ['Ketentuan Pembayaran', form.paymentTerms],
    ['Harga Franco', form.destination],
    ['Bank', form.bank],
    ['Nama Rekening', form.accountName],
    ['Nomor Rekening', form.accountNumber],
    ['Garansi', form.warranty],
    ['Catatan', form.notes],
  ]
}

function salesOrderHtml(): string {
  const fontFamily = getActiveFontFamily()

  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @page{size:A4;margin:22mm 24mm}body{font-family:${fontFamily};font-size:11pt;line-height:1.55;color:#111;margin:0}
    h1{text-align:center;font-size:16pt;margin:0;text-decoration:underline;letter-spacing:.5px}.document-number{text-align:center;margin:3px 0 28px}
    .document-date{text-align:right;margin:0 0 18px}.intro{margin:0 0 14px;text-align:justify}.form-table{width:100%;border-collapse:collapse;margin:14px 0 22px}
    .form-table td{border:0;padding:4px 2px;vertical-align:top}.field-label{width:32%;font-weight:600}.colon{width:12px}.field-value{border-bottom:1px dotted #888!important}
    .closing{text-align:justify;margin-top:24px}.signature{margin-top:34px;margin-left:auto;width:250px;text-align:center}.signature-space{height:68px}
  </style></head><body>
    <h1>SURAT PESANAN</h1>
    <p class="document-number">Nomor: ${escapeHtml(form.documentNumber)}</p>
    <p class="document-date">${escapeHtml(form.customer)}, ${escapeHtml(formatDocumentDate(form.documentDate))}</p>
    <p class="intro">Yang bertanda tangan di bawah ini menyatakan bahwa kami memesan alat kedokteran berupa:</p>
    <table class="form-table">${rowsHtml(salesOrderRows().filter(([label]) => label !== 'Nomor'))}</table>
    <p class="closing">Demikianlah surat pesanan ini dibuat untuk segera direalisasi. Atas perhatian dan kerja samanya kami ucapkan terima kasih.</p>
    <div class="signature"><p>Hormat kami,</p><div class="signature-space"></div><p><u>${escapeHtml(form.signerName)}</u><br>${escapeHtml(form.signerTitle)}</p></div>
  </body></html>`
}

function pdfSafeText(value: string): string {
  return value
    .replaceAll('\u00a0', ' ')
    .replace(/[–—]/g, '-')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7e\n]/g, '?')
}

function pdfEscape(value: string): string {
  return pdfSafeText(value).replace(/([\\()])/g, '\\$1')
}

function wrapPdfText(value: string, maxCharacters: number): string[] {
  const paragraphs = pdfSafeText(value || '-').split('\n')
  const lines: string[] = []
  paragraphs.forEach((paragraph) => {
    const words = paragraph.trim().split(/\s+/).filter(Boolean)
    if (!words.length) {
      lines.push('-')
      return
    }
    let line = ''
    words.forEach((word) => {
      if (!line) {
        line = word
      } else if (`${line} ${word}`.length <= maxCharacters) {
        line += ` ${word}`
      } else {
        lines.push(line)
        line = word
      }
    })
    if (line) lines.push(line)
  })
  return lines
}

function buildPdfBlob(pageStreams: string[]): Blob {
  const encoder = new TextEncoder()
  const objectBodies: string[] = []
  objectBodies[1] = '<< /Type /Catalog /Pages 2 0 R >>'
  objectBodies[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'
  objectBodies[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'

  const pageReferences: string[] = []
  pageStreams.forEach((stream, index) => {
    const pageObject = 5 + index * 2
    const streamObject = pageObject + 1
    pageReferences.push(`${pageObject} 0 R`)
    objectBodies[pageObject] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${streamObject} 0 R >>`
    objectBodies[streamObject] = `<< /Length ${encoder.encode(stream).length} >>\nstream\n${stream}\nendstream`
  })
  objectBodies[2] = `<< /Type /Pages /Kids [${pageReferences.join(' ')}] /Count ${pageReferences.length} >>`

  let pdf = '%PDF-1.4\n%MHJ\n'
  const offsets: number[] = [0]
  for (let index = 1; index < objectBodies.length; index += 1) {
    offsets[index] = encoder.encode(pdf).length
    pdf += `${index} 0 obj\n${objectBodies[index]}\nendobj\n`
  }
  const xrefOffset = encoder.encode(pdf).length
  pdf += `xref\n0 ${objectBodies.length}\n0000000000 65535 f \n`
  for (let index = 1; index < objectBodies.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`
  }
  pdf += `trailer\n<< /Size ${objectBodies.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`
  return new Blob([pdf], { type: 'application/pdf' })
}

function createPdfBlob(kind: ProjectDocumentKind): Blob {
  const pages: string[][] = [[]]
  let pageIndex = 0
  let y = 798

  const command = (value: string) => pages[pageIndex].push(value)
  const newPage = () => {
    pages.push([])
    pageIndex += 1
    y = 798
  }
  const ensureSpace = (height: number) => {
    if (y - height < 48) newPage()
  }
  const addText = (value: string, x: number, size = 10, bold = false) => {
    command(`BT /${bold ? 'F2' : 'F1'} ${size} Tf ${x} ${y} Td (${pdfEscape(value)}) Tj ET`)
  }
  const addCenteredText = (value: string, size: number, bold = false) => {
    const safeValue = pdfSafeText(value)
    const estimatedWidth = safeValue.length * size * 0.52
    addText(safeValue, Math.max(50, (595 - estimatedWidth) / 2), size, bold)
  }
  const addWrapped = (value: string, x: number, maxCharacters: number, size = 10, bold = false) => {
    const lines = wrapPdfText(value, maxCharacters)
    lines.forEach((line) => {
      addText(line, x, size, bold)
      y -= size + 4
    })
    return lines.length
  }
  const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    command(`0.65 G 0.5 w ${x1} ${y1} m ${x2} ${y2} l S 0 G`)
  }
  const addRows = (rows: string[][]) => {
    rows.filter(([, value]) => value).forEach(([label, value]) => {
      const valueLines = wrapPdfText(value, 58)
      const rowHeight = Math.max(18, valueLines.length * 14 + 3)
      ensureSpace(rowHeight)
      addText(label, 50, 9.5, true)
      addText(':', 205, 9.5)
      valueLines.forEach((line, index) => {
        const lineY = y - index * 14
        command(`BT /F1 10 Tf 220 ${lineY} Td (${pdfEscape(line)}) Tj ET`)
      })
      y -= rowHeight
    })
  }
  const addSection = (title: string) => {
    ensureSpace(38)
    y -= 8
    addText(title, 50, 11, true)
    y -= 7
    drawLine(50, y, 545, y)
    y -= 18
  }

  if (kind === 'customer-po') {
    addCenteredText('DATA PELANGGAN', 16, true)
    y -= 32
    addText(`Tgl. ${formatDocumentDate(form.documentDate)}`, 370, 10)
    y -= 28
    addRows(customerRows())
    addSection('CARA PEMBAYARAN')
    addRows(customerPaymentRows())
    ensureSpace(125)
    y -= 12
    const approvals = customerApprovalRows()
    const boxWidth = 123.75
    const boxHeight = 92
    approvals.forEach(([role, name], index) => {
      const x = 50 + index * boxWidth
      command(`0.45 G 0.6 w ${x} ${y - boxHeight} ${boxWidth} ${boxHeight} re S 0 G`)
      const roleLines = wrapPdfText(role, 18)
      roleLines.forEach((line, roleIndex) => {
        command(`BT /F2 8 Tf ${x + 8} ${y - 14 - roleIndex * 10} Td (${pdfEscape(line)}) Tj ET`)
      })
      command(`BT /F1 8 Tf ${x + 8} ${y - boxHeight + 12} Td (${pdfEscape(`Nama: ${name}`)}) Tj ET`)
    })
  } else {
    addCenteredText('SURAT PESANAN', 16, true)
    y -= 19
    addCenteredText(`Nomor: ${form.documentNumber}`, 10)
    y -= 34
    addText(`${form.customer}, ${formatDocumentDate(form.documentDate)}`, 330, 10)
    y -= 30
    addWrapped('Yang bertanda tangan di bawah ini menyatakan bahwa kami memesan alat kedokteran berupa:', 50, 88, 10)
    y -= 9
    addRows(salesOrderRows().filter(([label]) => label !== 'Nomor'))
    ensureSpace(150)
    y -= 12
    addWrapped('Demikianlah surat pesanan ini dibuat untuk segera direalisasi. Atas perhatian dan kerja samanya kami ucapkan terima kasih.', 50, 88, 10)
    y -= 18
    addText('Hormat kami,', 405, 10)
    y -= 68
    addText(form.signerName || '-', 390, 10, true)
    drawLine(382, y - 3, 535, y - 3)
    y -= 17
    addText(form.signerTitle || '-', 390, 9)
  }

  return buildPdfBlob(pages.map((page) => page.join('\n')))
}

function formatDocumentDate(value: string): string {
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) return value
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    .format(new Date(year, month - 1, day))
}

function safeFileName(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-|-$/g, '') || 'dokumen'
}

async function generateDocument(): Promise<void> {
  if (!formMode.value) return
  saving.value = true
  try {
    const kind = formMode.value
    const format = exportFormat.value
    const blob = format === 'pdf'
      ? createPdfBlob(kind)
      : new Blob([documentHtml(kind)], { type: 'application/msword;charset=utf-8' })
    const label = kind === 'customer-po' ? 'Data-Pelanggan' : 'Surat-Pesanan'
    const extension = format === 'pdf' ? 'pdf' : 'doc'
    const fileName = `${label}-${safeFileName(form.customer)}-${form.documentDate}.${extension}`
    const document: StoredProjectDocument = {
      id: `${props.project.id}-${kind}-${Date.now()}`,
      projectId: props.project.id,
      kind,
      source: 'generated',
      fileName,
      mimeType: blob.type,
      size: blob.size,
      createdAt: new Date().toISOString(),
      blob,
      metadata: kind === 'sales-order'
        ? {
            documentNumber: form.documentNumber,
            customer: form.customer,
            totalValue: form.totalValue,
            completedOrderStep: 1,
          }
        : undefined,
    }
    await saveProjectDocument(document)
    documents.value = [document, ...documents.value]
    if (kind === 'sales-order') emit('sales-order-saved', document)
    downloadStoredDocument(document)
    formMode.value = null
    await Swal.fire({
      icon: 'success',
      title: 'Dokumen berhasil dibuat',
      text: `${fileName} sudah diunduh dan tersimpan lokal.`,
      timer: 2200,
      showConfirmButton: false,
    })
  } catch (error) {
    await showStorageError(error)
  } finally {
    saving.value = false
  }
}

async function showStorageError(error: unknown): Promise<void> {
  const message = getUserErrorMessage(error, 'Dokumen gagal disimpan di browser.')
  await Swal.fire('Gagal menyimpan dokumen', message, 'error')
}

watch(() => props.project.id, loadDocuments)
onMounted(loadDocuments)
</script>

<style scoped>
.won-document-actions { display: grid; grid-template-columns: minmax(260px, 1fr) auto; align-items: center; gap: 14px 22px; margin-top: 14px; border: 1px solid #e2ebf0; border-radius: 15px; padding: 15px 18px; background: #fff; box-shadow: 0 5px 18px rgba(27, 43, 65, .04); }
.document-intro { display: flex; align-items: center; gap: 12px; min-width: 0; }
.document-icon { display: grid; flex: 0 0 auto; place-items: center; width: 42px; height: 42px; border-radius: 12px; color: var(--app-primary, #159ed8); background: var(--app-primary-wash, #eaf7fd); }
.document-intro h5 { margin: 0 0 3px; color: #243448; font-size: 14px; font-weight: 600; }
.document-intro p { margin: 0; color: #7e8b97; font-size: 11px; }
.document-buttons { display: flex; gap: 10px; }
.document-menu { position: relative; }
.document-menu summary { display: flex; align-items: center; justify-content: space-between; gap: 18px; min-width: 190px; border: 1px solid var(--app-primary-border, #cde8f4); border-radius: 10px; padding: 10px 13px; color: var(--app-primary-dark, #087fae); background: var(--app-primary-wash, #f1faff); cursor: pointer; font-size: 12px; font-weight: 600; list-style: none; user-select: none; }
.document-menu summary::-webkit-details-marker { display: none; }
.document-menu summary > span { display: inline-flex; align-items: center; gap: 8px; }
.menu-chevron { font-size: 9px; transition: transform .18s ease; }
.document-menu[open] .menu-chevron { transform: rotate(180deg); }
.document-menu__panel { position: absolute; z-index: 40; top: calc(100% + 7px); left: 0; width: 270px; overflow: hidden; border: 1px solid #dfe8ed; border-radius: 12px; padding: 6px; background: #fff; box-shadow: 0 14px 34px rgba(27, 51, 69, .16); }
.document-menu__panel--right { right: 0; left: auto; }
.document-menu__panel button { display: grid; grid-template-columns: 30px minmax(0, 1fr); align-items: center; gap: 8px; width: 100%; border: 0; border-radius: 8px; padding: 9px; color: #334352; background: transparent; text-align: left; }
.document-menu__panel button:hover { background: var(--app-primary-wash, #f1f8fb); }
.document-menu__panel button > i { color: var(--app-primary, #159ed8); text-align: center; }
.document-menu__panel strong, .document-menu__panel small { display: block; overflow: hidden; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
.document-menu__panel strong { font-size: 11px; }
.document-menu__panel small { margin-top: 2px; color: #89949e; font-size: 9px; font-weight: 400; }
.document-menu__panel .latest-document { margin-top: 4px; border-top: 1px solid #edf1f4; border-radius: 0 0 8px 8px; }
.document-notes { display: grid; grid-column: 1 / -1; gap: 4px; margin: -3px 0 0 54px; }
.document-notes p { margin: 0; }
.order-status-note { color: #8a5a00; font-size: 10px; font-weight: 600; }
.order-status-note i { margin-right: 4px; color: #d89516; }
.local-storage-note { color: #98a1aa; font-size: 9px; }
.local-storage-note i { margin-right: 4px; color: var(--app-secondary, #77b9d5); }
:deep(.won-document-dialog) { min-height: 0; }
:deep(.won-document-modal) { max-height: calc(100vh - 2rem); overflow: hidden; border: 0; border-radius: 18px; }
.document-form { display: flex; min-height: 0; flex: 1 1 auto; flex-direction: column; overflow: hidden; }
.document-form .modal-body { min-height: 0; overflow-y: auto; overscroll-behavior: contain; padding: 22px 24px 24px; }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px 24px; }
.form-grid label { min-width: 0; }
.form-grid label > span { display: block; margin-bottom: 4px; color: #2f3337; font-size: 14px; font-weight: 500; }
.form-grid label b { color: #dc3545; font-weight: 600; }
.form-grid .full-column { grid-column: 1 / -1; }
.form-grid .form-control { min-height: 44px; border-color: #d9dee5; border-radius: 5px; padding: 10px 12px; color: #2f3337; font-size: 14px; font-weight: 400; }
.form-grid textarea.form-control { min-height: 82px; resize: vertical; }
.form-grid .form-control:focus { border-color: var(--app-primary, #25a9e0); box-shadow: 0 0 0 3px rgba(37, 169, 224, .1); }
.option-group { min-width: 0; margin: 0; border: 1px solid #d9dee5; border-radius: 8px; padding: 12px 14px; }
.option-group legend { float: none; width: auto; margin: 0 0 8px; color: #2f3337; font-size: 14px; font-weight: 500; }
.option-group label { display: flex; align-items: center; gap: 8px; margin: 7px 0; color: #4b5563; font-size: 14px; }
.option-group input { width: 16px; height: 16px; }
.option-group input { accent-color: var(--app-primary, #25a9e0); }
.option-group--inline { display: flex; flex-wrap: wrap; gap: 5px 24px; }
.option-group--inline legend { flex: 0 0 100%; }
.form-section-title { margin: 8px 0 0; border-bottom: 1px solid #e5ebef; padding-bottom: 9px; color: var(--app-primary, #168fca); font-size: 14px; font-weight: 600; }
.document-form .modal-footer { flex: 0 0 auto; padding: 14px 24px; background: #fff; }
.document-form .btn { min-width: 100px; font-size: 14px; font-weight: 500; }
.export-menu { position: relative; }
.export-menu summary { display: flex; align-items: center; min-width: 190px; justify-content: center; list-style: none; cursor: pointer; }
.export-menu summary::-webkit-details-marker { display: none; }
.export-menu.disabled summary { cursor: wait; opacity: .65; }
.export-menu__panel { position: absolute; z-index: 60; right: 0; bottom: calc(100% + 8px); width: 265px; overflow: hidden; border: 1px solid #dfe7ec; border-radius: 11px; padding: 6px; background: #fff; box-shadow: 0 13px 32px rgba(27, 51, 69, .18); }
.export-menu__panel button { display: block; width: 100%; border: 0; border-radius: 8px; padding: 10px; color: #334352; background: transparent; text-align: left; }
.export-menu__panel button:hover { background: var(--app-primary-wash, #f1f8fb); }
.export-menu__panel strong, .export-menu__panel small { display: block; }
.export-menu__panel strong { font-size: 13px; font-weight: 600; }
.export-menu__panel small { margin-top: 2px; color: #89949e; font-size: 11px; }

@media (max-width: 767.98px) {
  .won-document-actions { grid-template-columns: 1fr; padding: 14px; }
  .document-buttons { display: grid; grid-template-columns: 1fr 1fr; }
  .document-menu summary { min-width: 0; }
  .document-menu__panel { width: min(270px, calc(100vw - 42px)); }
  .document-notes { margin: -2px 0 0; }
  .form-grid { grid-template-columns: 1fr; }
  .form-grid .full-column { grid-column: auto; }
  :deep(.won-document-dialog) { min-height: calc(100% - 1rem); margin: .5rem; }
  :deep(.won-document-modal) { max-height: calc(100vh - 1rem); border-radius: 14px; }
  .document-form .modal-body { padding: 16px; }
  .document-form .modal-footer { padding: 12px 16px; }
}

@media (max-width: 480px) {
  .document-buttons { grid-template-columns: 1fr; }
  .document-menu summary { width: 100%; }
  .document-menu__panel, .document-menu__panel--right { right: auto; left: 0; }
}
</style>
