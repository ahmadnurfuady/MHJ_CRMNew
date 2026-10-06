<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card create-project-form custom-input">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <form class="row g-3 needs-validation" @submit.prevent="handleSubmit">
                  <div class="col-12">
                    <InputWrapper :title="'Deal Name'">
                      <InputField
                        :modelValue="dealNameField"
                        :inputId="'deal-name'"
                        :placeholder="'Otomatis: EKAT/PRVT_Perusahaan_Produk'"
                        :disabled="true"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Perusahaan'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Cari perusahaan'"
                        v-model="projectForm.company"
                        :options="companyOptions"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Contact'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Cari kontak'"
                        v-model="projectForm.contact"
                        :options="contactOptions"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                    <button class="btn btn-link btn-sm p-0 mt-1" type="button" @click="openContactModal">
                      <vue-feather type="plus" size="14" class="me-1"></vue-feather>Tambah kontak baru
                    </button>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Stage'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih stage'"
                        v-model="projectForm.stage"
                        :options="stageOptions"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Owner'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih owner'"
                        v-model="projectForm.owner"
                        :options="leaderOptions"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Divisi'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih divisi'"
                        v-model="projectForm.divisi"
                        :options="divisiList"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Produk'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih produk'"
                        v-model="projectForm.produk"
                        :options="productOptions"
                        :multiSelect="true"
                        :disabled="!projectForm.divisi.selected"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-4">
                    <InputWrapper :title="'Qty'">
                      <InputField
                        v-model:modelValue="projectForm.qty"
                        :inputId="'qty'"
                        :placeholder="'Qty'"
                        :inputType="'number'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-4">
                    <InputWrapper :title="'Harga'">
                      <InputField
                        :modelValue="hargaField"
                        :inputId="'harga'"
                        :placeholder="'Otomatis dari produk'"
                        :disabled="true"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-4">
                    <InputWrapper :title="'Value'">
                      <InputField
                        :modelValue="valueField"
                        :inputId="'value'"
                        :placeholder="'Harga x Qty'"
                        :disabled="true"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Estimasi PO'">
                      <InputField
                        v-model:modelValue="projectForm.estimasiPo"
                        :inputId="'estimasi-po'"
                        :placeholder="'Pilih tanggal'"
                        :inputType="'date'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Kompetitor'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih kompetitor'"
                        v-model="projectForm.kompetitor"
                        :options="competitors"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-6">
                    <InputWrapper :title="'Sumber Pendanaan'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih sumber pendanaan'"
                        v-model="projectForm.sumberPendanaan"
                        :options="fundingSources"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div v-if="isLost" class="col-md-6">
                    <InputWrapper :title="'Alasan Kalah/Batal'">
                      <Select
                        getValueKey="label"
                        display-key="label"
                        :placeholder="'Pilih alasan'"
                        v-model="projectForm.alasanKalah"
                        :options="lostReasons"
                        :multiSelect="true"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <InputWrapper :title="'Notes/Comment'">
                      <InputField
                        v-model:modelValue="projectForm.notes"
                        :inputId="'notes'"
                        :placeholder="'Tulis catatan'"
                        :inputType="'textarea'"
                        :rows="3"
                        :required="false"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <div class="common-flex justify-content-end">
                      <button class="btn btn-primary" type="submit">Add</button>
                      <button class="btn btn-secondary" type="button" @click="router.push(routes.Project.ProjectList)">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      title="Tambah Kontak Person"
      sizeClass="modal-lg"
      :modalOpen="isContactModalOpen"
      @closeModal="closeContactModal"
    >
      <form class="needs-validation" novalidate @submit.prevent="submitNewContact">
        <div class="modal-body custom-input">
          <div class="row g-3">
            <div class="col-md-6">
              <InputWrapper :title="'Nama Depan'" required>
                <InputField
                  v-model:modelValue="newContact.firstName"
                  inputId="new-contact-first-name"
                  :placeholder="'Masukkan nama depan'"
                />
              </InputWrapper>
            </div>
            <div class="col-md-6">
              <InputWrapper :title="'Nama Belakang'" required>
                <InputField
                  v-model:modelValue="newContact.lastName"
                  inputId="new-contact-last-name"
                  :placeholder="'Masukkan nama belakang'"
                />
              </InputWrapper>
            </div>
            <div class="col-md-6">
              <InputWrapper :title="'Jabatan'">
                <InputField
                  v-model:modelValue="newContact.jobTitle"
                  inputId="new-contact-job-title"
                  :placeholder="'Contoh: Kepala Instalasi Radiologi'"
                  :required="false"
                />
              </InputWrapper>
            </div>
            <div class="col-md-6">
              <InputWrapper :title="'Nomor Telepon'" required>
                <InputField
                  v-model:modelValue="newContact.phone"
                  inputId="new-contact-phone"
                  :placeholder="'Contoh: 081234567890'"
                />
              </InputWrapper>
            </div>
            <div class="col-12">
              <InputWrapper :title="'Email'" required>
                <InputField
                  v-model:modelValue="newContact.email"
                  inputId="new-contact-email"
                  :inputType="'email'"
                  :placeholder="'Masukkan email'"
                />
              </InputWrapper>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div v-if="newContactError" class="text-danger me-auto">{{ newContactError }}</div>
          <button class="btn btn-light" type="button" @click="closeContactModal">Batal</button>
          <button class="btn btn-primary" type="submit" :disabled="contactStore.contactApi.submitting">
            <span v-if="contactStore.contactApi.submitting" class="spinner-border spinner-border-sm me-2"></span>
            Simpan Kontak
          </button>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { initInputField, initSelectField } from '@/core/data/common'
import { projectTab } from '@/core/data/project'
import { competitors, divisiList, fundingSources, lostReasons, products } from '@/core/data/projectDeal'
import type { DealOption } from '@/core/data/projectDeal'
import type { Contact } from '@/types/contacts'
import { routes } from '@/router/routes'
import { useHospitalStore } from '@/store/hospital'
import { useContact } from '@/store/contact'
import { useProjectStore, type ProjectPayload } from '@/store/project'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

// Stage sama dengan tab di Project List (tanpa "All").
const stageOptions = projectTab
  .filter((tab) => tab.value !== 'all')
  .map((tab) => ({ value: tab.value, label: tab.title }))

const projectForm = ref({
  company: initSelectField(),
  contact: initSelectField(),
  stage: initSelectField(),
  owner: initSelectField(),
  divisi: initSelectField(),
  produk: initSelectField(),
  qty: { data: '1', errorMessage: '' },
  estimasiPo: initInputField(),
  kompetitor: initSelectField(),
  sumberPendanaan: initSelectField(),
  alasanKalah: initSelectField(),
  notes: initInputField(),
})

const formSubmitted = ref<boolean>(false)

// Pilihan single select ada di `selected` (objek opsi), bukan di `data`.
function selectedOf(field: { selected: unknown }) {
  return field.selected as DealOption | null
}

const router = useRouter()
const hospitalStore = useHospitalStore()
const contactStore = useContact()
const projectStore = useProjectStore()

// Owner = leader dari backend, sehingga pilihannya langsung membawa leader_id.
const leaderOptions = computed<DealOption[]>(() => projectStore.lookups.leader)

// Perusahaan = Rumah Sakit dari backend (endpoint Company).
const companyOptions = computed<DealOption[]>(() =>
  hospitalStore.items.map((hospital) => ({ value: hospital.id, label: hospital.name }))
)

// Contact = semua kontak personal dari backend. Tidak dihubungkan ke perusahaan.
function toContactOption(contact: Contact): DealOption {
  return {
    value: contact.remoteId as number,
    // Nama kosong membuat opsi tampak kosong, jadi pakai cadangan dari kolom lain.
    label:
      `${contact.firstName} ${contact.lastName}`.trim() ||
      contact.contactNumber ||
      contact.email ||
      `Kontak #${contact.remoteId}`,
  }
}

const contactOptions = computed<DealOption[]>(() =>
  contactStore.contactApi.items
    .filter((contact) => contact.origin === 'api' && contact.remoteId !== undefined)
    .map(toContactOption)
)

// Modal tambah kontak cepat. Kontak yang baru disimpan langsung terpilih di form.
const isContactModalOpen = ref(false)
const newContactError = ref('')
const newContact = reactive({
  firstName: initInputField(),
  lastName: initInputField(),
  jobTitle: initInputField(),
  email: initInputField(),
  phone: initInputField(),
})

function resetNewContact() {
  newContactError.value = ''
  Object.assign(newContact, {
    firstName: initInputField(),
    lastName: initInputField(),
    jobTitle: initInputField(),
    email: initInputField(),
    phone: initInputField(),
  })
}

function openContactModal() {
  resetNewContact()
  isContactModalOpen.value = true
}

function closeContactModal() {
  isContactModalOpen.value = false
}

function validateNewContact() {
  const requiredFields = [newContact.firstName, newContact.lastName, newContact.phone, newContact.email]
  requiredFields.forEach((field) => {
    field.errorMessage = field.data.trim() ? '' : 'Wajib diisi.'
  })
  const email = newContact.email.data.trim()
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    newContact.email.errorMessage = 'Format email tidak valid.'
  }
  return requiredFields.every((field) => !field.errorMessage)
}

async function submitNewContact() {
  newContactError.value = ''
  if (!validateNewContact()) return

  try {
    const created = await contactStore.createRemoteContact({
      first_name: newContact.firstName.data.trim(),
      last_name: newContact.lastName.data.trim(),
      job_title: newContact.jobTitle.data.trim(),
      email: newContact.email.data.trim(),
      telephone_1: newContact.phone.data.trim(),
      telephone_2: null,
      address: '',
      province: '',
      city: '',
    })
    if (created) {
      const option = toContactOption(created)
      projectForm.value.contact = {
        selected: option,
        data: String(option.label),
        selectedItems: [],
        errorMessage: '',
        type: 'dropdown',
      }
    }
    closeContactModal()
  } catch {
    newContactError.value = contactStore.contactApi.error ?? 'Gagal menyimpan kontak.'
  }
}

onMounted(async () => {
  const results = await Promise.allSettled([
    hospitalStore.fetchHospitals(),
    contactStore.fetchRemoteContacts(),
    projectStore.fetchProjectLookups(),
  ])
  if (results.some((result) => result.status === 'rejected')) {
    Swal.fire({
      icon: 'error',
      text:
        hospitalStore.error ??
        contactStore.contactApi.error ??
        projectStore.error ??
        'Gagal memuat perusahaan, kontak, dan data pendukung project.',
      confirmButtonColor: 'var(--theme-default)',
    })
  }
})

// Produk hanya bisa dipilih setelah divisi dipilih, dan difilter menurut kode divisi.
const productOptions = computed(() =>
  products.filter((item) => item.divisi == selectedOf(projectForm.value.divisi)?.code)
)

watch(
  () => projectForm.value.divisi.selected,
  () => {
    projectForm.value.produk = initSelectField()
  }
)

const selectedProducts = computed(() => projectForm.value.produk.selectedItems as DealOption[])

// Deal Name = EKAT/PRVT_Perusahaan_Produk (EKAT = Government, PRVT = Private).
const dealName = computed(() => {
  const company = selectedOf(projectForm.value.company)
  if (!company) return ''
  const prefix = company.type == 'Government' ? 'EKAT' : 'PRVT'
  const productNames = selectedProducts.value.map((item) => item.label).join(', ')
  return [prefix, company.label, productNames].filter(Boolean).join('_')
})

// Harga dari produk terpilih; Value = Harga x Qty.
const harga = computed(() =>
  selectedProducts.value.reduce((sum, item) => sum + (item.price ?? 0), 0)
)
const qty = computed(() => Number(projectForm.value.qty.data) || 0)
const value = computed(() => harga.value * qty.value)

const format = (amount: number) => amount.toLocaleString('id-ID')
const dealNameField = computed(() => ({ data: dealName.value, errorMessage: '' }))
const hargaField = computed(() => ({ data: format(harga.value), errorMessage: '' }))
const valueField = computed(() => ({ data: format(value.value), errorMessage: '' }))

// Alasan kalah/batal hanya tampil untuk stage Closed Lost dan Closed Cancel.
const stageValue = computed(() => String(projectForm.value.stage.selected?.value ?? ''))
const isLost = computed(() => ['closed_lost', 'closed_cancel'].includes(stageValue.value))

// Field tunggal berisi string, field multi-select berisi array.
function isFilled(field: { data: unknown }) {
  return Array.isArray(field.data) ? field.data.length > 0 : String(field.data ?? '').trim() !== ''
}

// Mencocokkan nama pilihan form dengan data pendukung backend (tanpa peduli huruf besar/kecil).
function findIdByLabel(options: DealOption[], label: string) {
  const target = label.trim().toLowerCase()
  if (!target) return undefined
  return options.find((option) => option.label.trim().toLowerCase() === target)?.value
}

async function handleSubmit() {
  formSubmitted.value = true

  const form = projectForm.value
  const requiredFields: [string, { data: unknown }][] = [
    ['Perusahaan', form.company],
    ['Contact', form.contact],
    ['Stage', form.stage],
    ['Owner', form.owner],
    ['Divisi', form.divisi],
    ['Produk', form.produk],
    ['Qty', form.qty],
    ['Estimasi PO', form.estimasiPo],
    ['Kompetitor', form.kompetitor],
    ['Sumber Pendanaan', form.sumberPendanaan],
  ]
  const emptyFields = requiredFields.filter(([, field]) => !isFilled(field)).map(([label]) => label)
  if (emptyFields.length) {
    Swal.fire({
      icon: 'error',
      text: `Field berikut belum diisi: ${emptyFields.join(', ')}.`,
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  // Hanya field yang punya kolom di tabel project yang dikirim; sisanya belum didukung backend.
  const stageLabel = selectedOf(form.stage)?.label ?? ''
  const statusId = findIdByLabel(projectStore.lookups.status, stageLabel)
  const leaderId = selectedOf(form.owner)?.value
  if (!statusId || !leaderId) {
    const missing = [!statusId && `Stage "${stageLabel}"`, !leaderId && 'Owner'].filter(Boolean)
    // Membantu mencocokkan nama: lihat daftar status yang diterima dari backend.
    console.warn('Status dari backend:', projectStore.lookups.status)
    Swal.fire({
      icon: 'error',
      text: `${missing.join(', ')} tidak ditemukan di data backend.`,
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  const payload: ProjectPayload = {
    project_name: dealName.value,
    leader_id: leaderId,
    status_id: statusId,
    description: form.notes.data.trim(),
  }

  try {
    await projectStore.createProject(payload)
    await Swal.fire({
      icon: 'success',
      title: 'Project berhasil ditambahkan',
      confirmButtonColor: 'var(--theme-default)',
    })
    router.push(routes.Project.ProjectList)
  } catch {
    Swal.fire({
      icon: 'error',
      text: projectStore.error ?? 'Gagal menyimpan project.',
      confirmButtonColor: 'var(--theme-default)',
    })
  }
}
</script>
