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
                    <InputWrapper :title="'Project Name'">
                      <InputField
                        :modelValue="projectNameField"
                        :inputId="'project-name'"
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
                    <button
                      class="btn btn-link btn-sm p-0 mt-1"
                      type="button"
                      @click="openContactModal"
                    >
                      <vue-feather type="plus" size="14" class="me-1"></vue-feather>Tambah kontak
                      baru
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
                        :options="ownerOptions"
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
                  <div class="col-md-4">
                    <InputWrapper :title="'Currency'">
                      <InputField
                        v-model:modelValue="projectForm.currency"
                        :inputId="'currency'"
                        :placeholder="'Contoh: IDR'"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-4">
                    <InputWrapper :title="'Priority'">
                      <InputField
                        v-model:modelValue="projectForm.priority"
                        :inputId="'priority'"
                        :placeholder="'Nilai priority'"
                        :inputType="'number'"
                        :required="false"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-md-4">
                    <InputWrapper :title="'Probability (%)'">
                      <InputField
                        v-model:modelValue="projectForm.probability"
                        :inputId="'probability'"
                        :placeholder="'0 - 100'"
                        :inputType="'number'"
                        :required="false"
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
                        :options="competitorOptions"
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
                        :options="sumberdanaOptions"
                        :formSubmitted="formSubmitted"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <div class="common-flex justify-content-end">
                      <button
                        class="btn btn-outline-danger"
                        type="button"
                        @click="router.push(routes.Project.ProjectList)"
                      >
                        Batal
                      </button>
                      <button class="btn btn-primary" type="submit">Tambah</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddContactModal
      v-if="contactStore.contactState.openAddContactModal"
      @saved="selectCreatedContact"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { initInputField, initSelectField } from '@/core/data/common'
import { projectTab } from '@/core/data/project'
import { competitors, divisiList, fundingSources, products } from '@/core/data/projectDeal'
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
const AddContactModal = defineAsyncComponent(
  () => import('@/module/contacts/AddContactModal.vue')
)

// Stage lokal hanya dipakai bila lookup backend belum selesai dimuat.
const fallbackStageOptions = projectTab
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
  currency: { data: 'IDR', errorMessage: '' },
  priority: initInputField(),
  probability: initInputField(),
  estimasiPo: initInputField(),
  kompetitor: initSelectField(),
  sumberPendanaan: initSelectField()
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

// Pilihan foreign key m_projects diambil dari backend. Data lokal dipakai sebagai
// tampilan cadangan untuk competitor/sumber dana selama lookup belum tersedia.
const stageOptions = computed<DealOption[]>(() =>
  projectStore.lookups.stage.length ? projectStore.lookups.stage : fallbackStageOptions
)
const ownerOptions = computed<DealOption[]>(() => projectStore.lookups.owner)
const competitorOptions = computed<DealOption[]>(() =>
  projectStore.lookups.competitor.length ? projectStore.lookups.competitor : competitors
)
const sumberdanaOptions = computed<DealOption[]>(() =>
  projectStore.lookups.sumberdana.length ? projectStore.lookups.sumberdana : fundingSources
)

// Perusahaan = Rumah Sakit dari backend (endpoint Company).
const companyOptions = computed<DealOption[]>(() =>
  hospitalStore.items.map((hospital) => ({
    value: hospital.id,
    label: hospital.name
  }))
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
      `Kontak #${contact.remoteId}`
  }
}

const contactOptions = computed<DealOption[]>(() =>
  contactStore.contactApi.items
    .filter((contact) => contact.origin === 'api' && contact.remoteId !== undefined)
    .map(toContactOption)
)

function openContactModal() {
  contactStore.openContactModal()
}

function selectCreatedContact(created: Contact) {
  const option = toContactOption(created)
  projectForm.value.contact = {
    selected: option,
    data: String(option.label),
    selectedItems: [],
    errorMessage: '',
    type: 'dropdown'
  }
}

onMounted(async () => {
  const results = await Promise.allSettled([
    hospitalStore.fetchHospitals(),
    contactStore.fetchRemoteContacts(),
    projectStore.fetchProjectLookups()
  ])
  if (results.some((result) => result.status === 'rejected')) {
    Swal.fire({
      icon: 'error',
      text:
        hospitalStore.error ??
        contactStore.contactApi.error ??
        projectStore.error ??
        'Gagal memuat perusahaan, kontak, dan data pendukung project.',
      confirmButtonColor: 'var(--theme-default)'
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

// Project Name = EKAT/PRVT_Perusahaan_Produk (EKAT = Government, PRVT = Private).
const projectName = computed(() => {
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
const projectNameField = computed(() => ({
  data: projectName.value,
  errorMessage: ''
}))
const hargaField = computed(() => ({
  data: format(harga.value),
  errorMessage: ''
}))
const valueField = computed(() => ({
  data: format(value.value),
  errorMessage: ''
}))

// Field tunggal berisi string, field multi-select berisi array.
function isFilled(field: { data: unknown }) {
  return Array.isArray(field.data) ? field.data.length > 0 : String(field.data ?? '').trim() !== ''
}

// Mengambil foreign key numerik langsung, atau mencocokkan label pilihan cadangan
// dengan lookup backend.
function findIdByLabel(options: DealOption[], label: string) {
  const target = label.trim().toLowerCase()
  if (!target) return undefined
  return options.find((option) => option.label.trim().toLowerCase() === target)?.value
}

function numericId(value: unknown): number | undefined {
  if (value === undefined || value === null || value === '') return undefined
  const id = Number(value)
  return Number.isInteger(id) ? id : undefined
}

function resolveForeignKey(selected: DealOption | null, lookup: DealOption[]) {
  if (!selected) return undefined
  return numericId(selected.value) ?? numericId(findIdByLabel(lookup, selected.label))
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
    ['Currency', form.currency],
    ['Estimasi PO', form.estimasiPo],
    ['Kompetitor', form.kompetitor],
    ['Sumber Pendanaan', form.sumberPendanaan]
  ]
  const emptyFields = requiredFields.filter(([, field]) => !isFilled(field)).map(([label]) => label)
  if (emptyFields.length) {
    Swal.fire({
      icon: 'error',
      text: `Field berikut belum diisi: ${emptyFields.join(', ')}.`,
      confirmButtonColor: 'var(--theme-default)'
    })
    return
  }

  const currency = form.currency.data.trim().toUpperCase()
  const priority = numericId(form.priority.data)
  const probability = numericId(form.probability.data)
  if (currency.length > 10) {
    Swal.fire({
      icon: 'error',
      text: 'Currency maksimal 10 karakter.',
      confirmButtonColor: 'var(--theme-default)'
    })
    return
  }
  if (probability !== undefined && (probability < 0 || probability > 100)) {
    Swal.fire({
      icon: 'error',
      text: 'Probability harus berada di antara 0 sampai 100.',
      confirmButtonColor: 'var(--theme-default)'
    })
    return
  }

  const selectedStage = selectedOf(form.stage)
  const selectedOwner = selectedOf(form.owner)
  const companyId = numericId(selectedOf(form.company)?.value)
  const contactId = numericId(selectedOf(form.contact)?.value)
  const stageId = resolveForeignKey(selectedStage, projectStore.lookups.stage)
  const ownerId = resolveForeignKey(selectedOwner, projectStore.lookups.owner)
  if (!companyId || !contactId || !stageId || !ownerId) {
    const missing = [
      !companyId && 'Perusahaan',
      !contactId && 'Contact',
      !stageId && `Stage "${selectedStage?.label ?? ''}"`,
      !ownerId && 'Owner'
    ].filter(Boolean)
    console.warn('Lookup project dari backend:', projectStore.lookups)
    Swal.fire({
      icon: 'error',
      text: `${missing.join(', ')} tidak ditemukan di data backend.`,
      confirmButtonColor: 'var(--theme-default)'
    })
    return
  }

  const competitorId = resolveForeignKey(
    selectedOf(form.kompetitor),
    projectStore.lookups.competitor
  )
  const sumberdanaId = resolveForeignKey(
    selectedOf(form.sumberPendanaan),
    projectStore.lookups.sumberdana
  )
  if (!competitorId || !sumberdanaId) {
    const missing = [!competitorId && 'Kompetitor', !sumberdanaId && 'Sumber Pendanaan'].filter(
      Boolean
    )
    Swal.fire({
      icon: 'error',
      text: `${missing.join(' dan ')} belum memiliki ID dari backend.`,
      confirmButtonColor: 'var(--theme-default)'
    })
    return
  }

  const payload: ProjectPayload = {
    projects_name: projectName.value,
    company_id: companyId,
    contact_id: contactId,
    owner_id: ownerId,
    stage_id: stageId,
    currency,
    amount_value: value.value,
    expected_close_date: form.estimasiPo.data,
    priority,
    competitor_id: competitorId,
    sumberdana_id: sumberdanaId,
    probability,
    aktif: 1
  }

  try {
    await projectStore.createProject(payload)
    await Swal.fire({
      icon: 'success',
      title: 'Project berhasil ditambahkan',
      confirmButtonColor: 'var(--theme-default)'
    })
    router.push(routes.Project.ProjectList)
  } catch {
    Swal.fire({
      icon: 'error',
      text: projectStore.error ?? 'Gagal menyimpan project.',
      confirmButtonColor: 'var(--theme-default)'
    })
  }
}
</script>
