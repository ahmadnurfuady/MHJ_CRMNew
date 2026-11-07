<template>
  <section
    ref="actionsRoot"
    class="won-document-actions"
    :class="documentsComplete ? 'won-document-actions--complete' : 'won-document-actions--pending'"
    aria-labelledby="won-document-title"
  >
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
          <span>PO Customer</span>
          <SolarIcon name="fa-chevron-down" class="menu-chevron" />
        </summary>
        <div class="document-menu__panel">
          <button type="button" class="is-disabled" disabled title="Belum tersedia">
            <SolarIcon name="fa-arrow-up-from-bracket" />
            <span><strong>Upload PO Customer</strong><small>Belum tersedia</small></span>
          </button>
          <button v-if="canEditProject" type="button" @click="openForm('customer-po', $event)">
            <SolarIcon name="fa-pen-to-square" />
            <span><strong>Isi Form Data Pelanggan</strong><small>Buat dokumen dari data peluang</small></span>
          </button>
          <button
            v-if="latestCustomerPo && canExportProject"
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
          <span>Surat Pesanan</span>
          <SolarIcon name="fa-chevron-down" class="menu-chevron" />
        </summary>
        <div class="document-menu__panel document-menu__panel--right">
          <button v-if="canEditProject" type="button" @click="chooseUpload('sales-order', $event)">
            <SolarIcon name="fa-arrow-up-from-bracket" />
            <span><strong>Upload Surat Pesanan</strong><small>PDF, Word, Excel, atau gambar</small></span>
          </button>
          <button v-if="canEditProject" type="button" @click="openForm('sales-order', $event)">
            <SolarIcon name="fa-pen-to-square" />
            <span><strong>Buat Draft Surat Pesanan</strong><small>Isi lalu unduh sebagai Word</small></span>
          </button>
          <button
            v-if="latestSalesOrder && canExportProject"
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
        Dokumen tersimpan di server; salinan lokal disimpan agar bisa diunduh ulang.
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
          <button class="btn btn-light" type="button" :disabled="saving" @click="closeForm">Batal</button>
          <div class="footer-actions">
            <button v-if="canExportProject" class="btn btn-outline-danger" type="button" :disabled="saving" @click="downloadDraft('pdf')">
              <SolarIcon name="fa-file-pdf" /> PDF
            </button>
            <button v-if="canExportProject" class="btn btn-outline-primary" type="button" :disabled="saving" @click="downloadDraft('docx')">
              <SolarIcon name="fa-file-word" /> Word
            </button>
            <button class="btn btn-primary" type="submit" :disabled="saving">
              {{ saving ? 'Menyimpan...' : 'Simpan' }}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import Swal from 'sweetalert2'

import Modal from '@/components/shared/Modal.vue'
import { savePoCustomer, saveSuratPesanan } from '@/services/projectOrderService'
import {
  downloadStoredDocument,
  getProjectDocuments,
  saveProjectDocument,
  type ProjectDocumentKind,
  type StoredProjectDocument,
} from '@/services/projectDocumentStorage'
import type { Projects } from '@/types/project'
import { getUserErrorMessage } from '@/utils/errorParser'
import { useProjectPermissions } from '@/module/project/projectPermission'

const props = defineProps<{ project: Projects }>()
const { canEditProject, canExportProject } = useProjectPermissions()
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
const actionsRoot = ref<HTMLElement | null>(null)

/** Tutup semua dropdown dokumen; kecuali yang sedang dibuka (accordion behavior). */
function closeDocumentMenus(except?: HTMLDetailsElement): void {
  actionsRoot.value
    ?.querySelectorAll<HTMLDetailsElement>('details.document-menu[open]')
    .forEach((menu) => {
      if (menu !== except) menu.open = false
    })
}

/** Saat satu dropdown dibuka, dropdown lain otomatis tertutup. */
function handleMenuToggle(event: Event): void {
  const menu = (event.target as HTMLElement).closest('details.document-menu') as HTMLDetailsElement | null
  if (menu?.open) closeDocumentMenus(menu)
}

/** Klik di luar area card dokumen menutup dropdown yang sedang terbuka. */
function handleOutsideClick(event: MouseEvent): void {
  if (actionsRoot.value && !actionsRoot.value.contains(event.target as Node)) {
    closeDocumentMenus()
  }
}

onMounted(() => {
  actionsRoot.value?.addEventListener('toggle', handleMenuToggle, true)
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  actionsRoot.value?.removeEventListener('toggle', handleMenuToggle, true)
  document.removeEventListener('click', handleOutsideClick)
})

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
const documentsComplete = computed(() => Boolean(latestCustomerPo.value && latestSalesOrder.value))

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
  if (!canEditProject.value) return
  closeMenu(event)
  const input = kind === 'customer-po' ? customerPoInput.value : salesOrderInput.value
  input?.click()
}

function openForm(kind: ProjectDocumentKind, event: Event): void {
  if (!canEditProject.value) return
  closeMenu(event)
  resetForm()
  formMode.value = kind
}

function closeForm(): void {
  if (!saving.value) formMode.value = null
}

async function handleUpload(kind: ProjectDocumentKind, event: Event): Promise<void> {
  if (!canEditProject.value) return
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

    // Hanya Surat Pesanan punya kolom file di backend. Upload PO Customer
    // tetap lokal: tanpa isi form, kirim ke SP hanya akan menimpa data
    // yang sudah ada dengan field kosong.
    if (kind === 'sales-order') {
      // Scan mentah tidak membawa isi form, tapi sp_surat_pesanan_crud
      // mewajibkan nomor/penandatangan/produk, jadi diambil dari data peluang.
      const customer = props.project.companyName || ''
      await saveSuratPesanan(
        {
          project_id: props.project.id,
          company_id: props.project.companyId ?? null,
          contact_id: props.project.contactId ?? null,
          nomor_sp: `SP/${new Date().getFullYear()}/${props.project.id}`,
          tanggal_dokumen: today(),
          nama_customer: customer,
          alamat: props.project.address || '',
          nama_kontak: props.project.contactName || '',
          penandatangan: props.project.contactName || customer,
          produk_pesanan: productText() || '-',
        },
        file,
        file.name,
      )
    }

    await Swal.fire({
      icon: 'success',
      title: 'Dokumen tersimpan',
      text: kind === 'sales-order'
        ? `${file.name} berhasil diunggah ke server.`
        : `${file.name} tersimpan lokal dan dapat diunduh kembali dari menu.`,
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
  if (!canExportProject.value) return
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

/** Payload PO Customer untuk `POST /api/project/pocustomer`. */
function poCustomerPayload(): Record<string, unknown> {
  return {
    project_id: props.project.id,
    company_id: props.project.companyId ?? null,
    contact_id: props.project.contactId ?? null,
    tanggal: form.documentDate,
    nama_pelanggan: form.customer,
    nama_barang: form.itemType,
    harga_jual: form.salePrice,
    komposisi_barang: form.itemComposition,
    harga_jual_total: form.totalSalePrice,
    diskon: form.discount,
    harga_netto: form.netBeforeTax,
    ppn: form.vat,
    biaya_pengiriman: form.shippingCostBearer,
    biaya_asuransi: form.insuranceCostBearer,
    is_room_preparation: form.roomPreparation,
    is_instalasi: form.installation,
    dateline_pengiriman: form.deliveryDeadline,
    telepon: form.phone,
    hp: form.mobile,
    fax: form.fax,
    alamat: form.address,
    alamat_pengiriman: form.shippingAddress,
    alamat_penagihan: form.billingAddress,
    jatuh_tempo: form.dueDatePayment,
    dp: form.downPayment,
    sisa: form.remainingPayment,
    direktur_sales: form.salesDirectorName,
    area_manager: form.areaManagerName,
    product_specialist: form.productSpecialistName,
    marketing: form.marketingName,
    garansi: form.warranty,
  }
}

/** Payload Surat Pesanan untuk `POST /api/project/suratpesanan`. */
function suratPesananPayload(): Record<string, unknown> {
  return {
    project_id: props.project.id,
    company_id: props.project.companyId ?? null,
    contact_id: props.project.contactId ?? null,
    nomor_sp: form.documentNumber,
    tanggal_dokumen: form.documentDate,
    nama_customer: form.customer,
    alamat: form.address,
    nama_kontak: form.contact,
    penandatangan: form.signerName,
    jabatan_penandatangan: form.signerTitle,
    produk_pesanan: form.product,
    jumlah: form.quantity,
    nilai_pesanan: form.totalValue,
    ketentuan_pembayaran: form.paymentTerms,
    harga_franco: form.destination,
    bank: form.bank,
    nomor_rekening: form.accountNumber,
    nama_rekening: form.accountName,
    garansi: form.warranty,
    catatan_tambahan: form.notes,
  }
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
  if (!canEditProject.value || !formMode.value) return
  saving.value = true
  try {
    const kind = formMode.value
    // PDF dibuat di belakang layar: Surat Pesanan butuh file terunggah agar
    // milestone 1 ter-centang di SP, dan salinan lokal dipakai menu "Unduh terakhir".
    const blob = createPdfBlob(kind)
    const label = kind === 'customer-po' ? 'Data-Pelanggan' : 'Surat-Pesanan'
    const fileName = `${label}-${safeFileName(form.customer)}-${form.documentDate}.pdf`
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

    if (kind === 'customer-po') {
      await savePoCustomer(poCustomerPayload())
    } else {
      await saveSuratPesanan(suratPesananPayload(), blob, fileName)
    }

    formMode.value = null
    await Swal.fire({
      icon: 'success',
      title: 'Data berhasil disimpan',
      text: kind === 'customer-po'
        ? 'Data Pelanggan / PO Customer tersimpan di server.'
        : 'Surat Pesanan tersimpan di server.',
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

/** Bangun dokumen Word (.doc, kompatibel Word/LibreOffice) dari isi form. */
function createWordBlob(kind: ProjectDocumentKind): Blob {
  const escapeHtml = (value: string) => pdfSafeText(value || '-')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const rowHtml = (rows: string[][]) => rows
    .filter(([, value]) => value)
    .map(([label = '', value = '']) => `<tr><td style="width:38%;font-weight:bold;padding:4px 8px;vertical-align:top">${escapeHtml(label)}</td><td style="width:4%;padding:4px 0;vertical-align:top">:</td><td style="padding:4px 8px;vertical-align:top">${escapeHtml(value).replace(/\n/g, '<br/>')}</td></tr>`)
    .join('')

  let body = ''
  if (kind === 'customer-po') {
    body = `
      <h1 style="text-align:center;font-size:18pt;margin:0 0 4px">DATA PELANGGAN</h1>
      <p style="text-align:right;font-size:10pt">Tgl. ${escapeHtml(formatDocumentDate(form.documentDate))}</p>
      <table style="width:100%;border-collapse:collapse;font-size:10pt">${rowHtml(customerRows())}</table>
      <h2 style="font-size:12pt;border-bottom:1px solid #999;padding-bottom:4px">CARA PEMBAYARAN</h2>
      <table style="width:100%;border-collapse:collapse;font-size:10pt">${rowHtml(customerPaymentRows())}</table>
      <h2 style="font-size:12pt;border-bottom:1px solid #999;padding-bottom:4px">PERSETUJUAN</h2>
      <table style="width:100%;border-collapse:collapse;font-size:10pt">
        <tr>${customerApprovalRows().map(([role = '']) => `<td style="border:1px solid #666;padding:6px;text-align:center;font-weight:bold;width:25%">${escapeHtml(role)}</td>`).join('')}</tr>
        <tr>${customerApprovalRows().map(([, name = '']) => `<td style="border:1px solid #666;padding:6px;height:70px;text-align:center;vertical-align:bottom">${escapeHtml(name)}</td>`).join('')}</tr>
      </table>`
  } else {
    body = `
      <h1 style="text-align:center;font-size:18pt;margin:0 0 4px">SURAT PESANAN</h1>
      <p style="text-align:right;font-size:10pt">Tgl. ${escapeHtml(formatDocumentDate(form.documentDate))}</p>
      <table style="width:100%;border-collapse:collapse;font-size:10pt">${rowHtml(salesOrderRows())}</table>
      <p style="margin-top:36px;font-size:10pt">Hormat kami,</p>
      <p style="margin-top:56px;font-size:10pt"><b>${escapeHtml(form.signerName || '-')}</b><br/>${escapeHtml(form.signerTitle || '')}</p>`
  }

  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"/><style>body{font-family:Calibri,Arial,sans-serif;color:#222}</style></head><body>${body}</body></html>`
  return new Blob(['﻿', html], { type: 'application/msword' })
}

function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob)
  const anchor = window.document.createElement('a')
  anchor.href = url
  anchor.download = fileName
  window.document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

/** Unduh draft langsung dari isi form tanpa menyimpan dulu. */
function downloadDraft(format: 'pdf' | 'docx'): void {
  if (!canExportProject.value || !formMode.value) return
  const kind = formMode.value
  const label = kind === 'customer-po' ? 'Data-Pelanggan' : 'Surat-Pesanan'
  const baseName = `${label}-${safeFileName(form.customer)}-${form.documentDate || today()}`
  if (format === 'pdf') {
    triggerDownload(createPdfBlob(kind), `${baseName}.pdf`)
  } else {
    triggerDownload(createWordBlob(kind), `${baseName}.doc`)
  }
}

watch(() => props.project.id, loadDocuments)
onMounted(loadDocuments)
</script>

<style scoped>
.won-document-actions { display: grid; grid-template-columns: minmax(260px, 1fr) auto; align-items: center; gap: 14px 22px; margin-top: 14px; border: 1px solid #e2ebf0; border-radius: 15px; padding: 15px 18px; background: #fff; box-shadow: 0 5px 18px rgba(27, 43, 65, .04); }
.won-document-actions--pending { border-color: rgba(220, 53, 69, .18); background: linear-gradient(105deg, #fff 0%, #fffafa 56%, rgba(220, 53, 69, .09) 100%); box-shadow: 0 8px 22px rgba(120, 54, 62, .06); }
.won-document-actions--complete { border-color: rgba(var(--app-primary-rgb, 21, 158, 216), .18); background: linear-gradient(105deg, #fff 0%, var(--app-primary-wash, #f8fcfe) 56%, rgba(var(--app-primary-rgb, 21, 158, 216), .09) 100%); box-shadow: 0 8px 22px rgba(31, 92, 120, .06); }
.won-document-actions--complete .document-icon { color: var(--app-primary, #159ed8); background: rgba(var(--app-primary-rgb, 21, 158, 216), .08); }
.won-document-actions--complete .document-menu summary { border-color: rgba(var(--app-primary-rgb, 21, 158, 216), .2); color: var(--app-primary-dark, #087fae); background: rgba(255, 255, 255, .72); }
.won-document-actions--complete .document-menu summary:hover { background: #fff; }
.won-document-actions--complete .local-storage-note i { color: var(--app-primary, #159ed8); }
.won-document-actions--pending .document-icon { color: #c94b58; background: rgba(220, 53, 69, .08); }
.won-document-actions--pending .document-intro h5 { color: #243448; }
.won-document-actions--pending .document-intro p { color: #7e8b97; }
.won-document-actions--pending .document-menu summary { border-color: rgba(220, 53, 69, .2); color: #a9404b; background: rgba(255, 255, 255, .72); }
.won-document-actions--pending .document-menu summary:hover { background: #fff; }
.won-document-actions--pending .order-status-note { color: #9d4e57; }
.won-document-actions--pending .order-status-note i { color: #c94b58; }
.won-document-actions--pending .local-storage-note { color: #98a1aa; }
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
.document-menu__panel button.is-disabled { cursor: not-allowed; opacity: .45; }
.document-menu__panel button.is-disabled:hover { background: transparent; }
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
.document-form .modal-footer { display: flex; flex: 0 0 auto; align-items: center; justify-content: space-between; gap: 10px; padding: 14px 24px; background: #fff; }
.document-form .footer-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-left: auto; }
.document-form .footer-actions .btn { display: inline-flex; align-items: center; gap: 6px; }
.document-form .btn { min-width: 100px; font-size: 14px; font-weight: 500; }

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
