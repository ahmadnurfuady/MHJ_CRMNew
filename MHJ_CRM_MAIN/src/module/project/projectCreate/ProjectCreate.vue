<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card create-project-form custom-input">
          <div class="card-body">
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
                    :placeholder="'Cari contact'"
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
                  <vue-feather type="plus" size="14" class="me-1" />Tambah contact baru
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
                    :placeholder="'Pilih satu divisi'"
                    v-model="projectForm.division"
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
                    :placeholder="productPlaceholder"
                    v-model="projectForm.products"
                    :options="productOptions"
                    :multiSelect="true"
                    :removableTags="true"
                    :disabled="!projectForm.division.selected"
                    :formSubmitted="formSubmitted"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Qty'">
                  <InputField
                    v-model:modelValue="projectForm.quantity"
                    :inputId="'project-quantity'"
                    :placeholder="'Qty'"
                    :inputType="'number'"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Harga'">
                  <InputField
                    :modelValue="priceField"
                    :inputId="'project-price'"
                    :placeholder="'Otomatis dari produk'"
                    :disabled="true"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Value'">
                  <InputField
                    :modelValue="valueField"
                    :inputId="'project-value'"
                    :placeholder="'Harga x Qty'"
                    :disabled="true"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Estimasi PO'">
                  <InputField
                    v-model:modelValue="projectForm.estimatedPo"
                    :inputId="'estimated-po'"
                    :placeholder="'Pilih tanggal'"
                    :inputType="'date'"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Kompetitor'">
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Pilih kompetitor'"
                    v-model="projectForm.competitor"
                    :options="competitors"
                    :formSubmitted="formSubmitted"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Sumber Pendanaan'">
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Pilih sumber pendanaan'"
                    v-model="projectForm.fundingSource"
                    :options="fundingSources"
                    :formSubmitted="formSubmitted"
                  />
                </InputWrapper>
              </div>

              <div v-if="isLostOrCancelled" class="col-12">
                <InputWrapper :title="'Alasan Kalah/Batal'">
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Pilih satu atau beberapa alasan'"
                    v-model="projectForm.lostReasons"
                    :options="lostReasons"
                    :multiSelect="true"
                    :removableTags="true"
                    :formSubmitted="formSubmitted"
                  />
                </InputWrapper>
              </div>

              <div class="col-12">
                <InputWrapper :title="'Notes/Comment'">
                  <InputField
                    v-model:modelValue="projectForm.notes"
                    :inputId="'project-notes'"
                    :placeholder="'Contoh: Client serius, tinggal nego harga'"
                    :inputType="'textarea'"
                    :rows="3"
                    :required="false"
                  />
                </InputWrapper>
              </div>

              <div class="col-12">
                <div class="border rounded p-3">
                  <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
                    <div>
                      <h6 class="mb-1">Timeline</h6>
                      <p class="mb-0 text-muted small">
                        Catat meeting, demo, follow up, dan aktivitas project.
                      </p>
                    </div>
                    <button
                      class="btn btn-outline-primary btn-sm"
                      type="button"
                      @click="addTimelineEntry"
                    >
                      <vue-feather type="plus" size="14" class="me-1" />Tambah aktivitas
                    </button>
                  </div>

                  <div v-if="!timelineEntries.length" class="text-muted small">
                    Belum ada aktivitas timeline.
                  </div>

                  <div
                    v-for="(entry, index) in timelineEntries"
                    :key="entry.id"
                    class="row g-2 align-items-end"
                    :class="{ 'mt-1': index > 0 }"
                  >
                    <div class="col-md-4">
                      <InputWrapper :title="'Tanggal'">
                        <InputField
                          v-model:modelValue="entry.date"
                          :inputId="`timeline-date-${entry.id}`"
                          :inputType="'date'"
                          :required="false"
                        />
                      </InputWrapper>
                    </div>
                    <div class="col-md-7">
                      <InputWrapper :title="'Aktivitas'">
                        <InputField
                          v-model:modelValue="entry.activity"
                          :inputId="`timeline-activity-${entry.id}`"
                          :placeholder="'Contoh: Meeting dengan user'"
                          :required="false"
                        />
                      </InputWrapper>
                    </div>
                    <div class="col-md-1 d-grid">
                      <button
                        class="btn btn-outline-danger"
                        type="button"
                        title="Hapus aktivitas"
                        @click="removeTimelineEntry(index)"
                      >
                        <vue-feather type="trash-2" size="16" />
                      </button>
                    </div>
                  </div>
                </div>
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
                  <button class="btn btn-primary" type="submit" :disabled="projectStore.submitting">
                    <span
                      v-if="projectStore.submitting"
                      class="spinner-border spinner-border-sm me-2"
                      aria-hidden="true"
                    />
                    Tambah Project
                  </button>
                </div>
              </div>
            </form>
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
import { computed, defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { initInputField, initSelectField } from '@/core/data/common'
import {
  competitors,
  divisiList,
  fundingSources,
  lostReasons,
  products,
  type DealOption,
} from '@/core/data/projectDeal'
import { routes } from '@/router/routes'
import { useAuthStore } from '@/store/auth'
import { useContact } from '@/store/contact'
import { useHospitalStore } from '@/store/hospital'
import { useProjectStore, type ProjectPayload } from '@/store/project'
import type { Contact } from '@/types/contacts'
import type { InputField as InputFieldState } from '@/types/common'

interface PipelineStageOption extends DealOption {
  code: string
  probability: number
}

interface CompanyOption extends DealOption {
  address: string
  kdKelurahan: string
}

interface TimelineEntry {
  id: number
  date: InputFieldState
  activity: InputFieldState
}

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const AddContactModal = defineAsyncComponent(() => import('@/module/contacts/AddContactModal.vue'))

const stageOptions: PipelineStageOption[] = [
  { value: 1, code: 'qualified', label: 'Qualified', probability: 10 },
  { value: 2, code: 'presentation_demo', label: 'Presentation/Demo', probability: 30 },
  { value: 3, code: 'quotation', label: 'Quotation', probability: 60 },
  { value: 4, code: 'negotiation', label: 'Negotiation', probability: 80 },
  { value: 5, code: 'closed_won', label: 'Closed Won', probability: 100 },
  { value: 6, code: 'closed_lost', label: 'Closed Lost', probability: 0 },
  { value: 7, code: 'closed_cancel', label: 'Closed Cancel', probability: 0 },
]

const defaultStage = stageOptions.find(
  (stage) => stage.code === 'negotiation'
) as PipelineStageOption

function selectedField(option?: DealOption) {
  const field = initSelectField()
  if (!option) return field
  return {
    ...field,
    selected: option,
    data: String(option.label),
  }
}

const projectForm = ref({
  company: initSelectField(),
  contact: initSelectField(),
  stage: selectedField(defaultStage),
  owner: initSelectField(),
  division: initSelectField(),
  products: initSelectField(),
  quantity: { data: '1', errorMessage: '' },
  estimatedPo: initInputField(),
  competitor: initSelectField(),
  fundingSource: initSelectField(),
  lostReasons: initSelectField(),
  notes: initInputField(),
})

const formSubmitted = ref(false)
const timelineSequence = ref(1)
const timelineEntries = ref<TimelineEntry[]>([])
const router = useRouter()
const authStore = useAuthStore()
const hospitalStore = useHospitalStore()
const contactStore = useContact()
const projectStore = useProjectStore()

function selectedOf(field: { selected: unknown }) {
  return field.selected as DealOption | null
}

function isGovernmentCompany(hospitalType: string, industry: string, name: string) {
  const classification = `${hospitalType} ${industry} ${name}`.toLocaleLowerCase('id-ID')
  return /government|pemerintah|negeri|publik|rsud|rsup|tni|polri/.test(classification)
}

const companyOptions = computed<CompanyOption[]>(() =>
  hospitalStore.items.map((hospital) => ({
    value: hospital.id,
    label: hospital.name,
    type: isGovernmentCompany(hospital.hospitalType, hospital.industry, hospital.name)
      ? 'Government'
      : 'Private',
    address: hospital.address,
    kdKelurahan: hospital.kdKelurahan,
  }))
)

function toContactOption(contact: Contact): DealOption {
  return {
    value: contact.remoteId ?? contact.id,
    label:
      `${contact.firstName} ${contact.lastName}`.trim() ||
      contact.contactNumber ||
      contact.email ||
      `Contact #${contact.remoteId ?? contact.id}`,
  }
}

const contactOptions = computed<DealOption[]>(() => {
  const contacts = contactStore.contactApi.items.filter(
    (contact) =>
      contact.origin === 'api' && (contact.remoteId !== undefined || contact.id !== undefined)
  )
  const companyId = selectedOf(projectForm.value.company)?.value
  if (companyId === undefined) return contacts.map(toContactOption)

  const relatedContacts = contacts.filter(
    (contact) => contact.companyId && String(contact.companyId) === String(companyId)
  )
  const hasCompanyRelations = contacts.some((contact) => Boolean(contact.companyId))
  return (hasCompanyRelations ? relatedContacts : contacts).map(toContactOption)
})

const ownerOptions = computed<DealOption[]>(() => projectStore.lookups.owner)
const selectedProducts = computed(() => projectForm.value.products.selectedItems as DealOption[])
const productOptions = computed(() =>
  products.filter((product) => product.divisi === selectedOf(projectForm.value.division)?.code)
)
const productPlaceholder = computed(() => {
  if (!projectForm.value.division.selected) return 'Pilih divisi terlebih dahulu'
  return productOptions.value.length
    ? 'Pilih satu atau beberapa produk'
    : 'Produk divisi belum tersedia'
})

const selectedCompany = computed(
  () => selectedOf(projectForm.value.company) as CompanyOption | null
)
const projectName = computed(() => {
  const company = selectedCompany.value
  if (!company) return ''
  const prefix = company.type === 'Government' ? 'EKAT' : 'PRVT'
  const productNames = selectedProducts.value.map((product) => product.label).join(', ')
  return [prefix, company.label, productNames].filter(Boolean).join('_')
})

const price = computed(() =>
  selectedProducts.value.reduce((total, product) => total + (product.price ?? 0), 0)
)
const quantity = computed(() => Number(projectForm.value.quantity.data) || 0)
const projectValue = computed(() => price.value * quantity.value)
const rupiah = (amount: number) => `Rp ${amount.toLocaleString('id-ID')}`
const projectNameField = computed(() => ({
  data: projectName.value,
  errorMessage: '',
}))
const priceField = computed(() => ({
  data: rupiah(price.value),
  errorMessage: '',
}))
const valueField = computed(() => ({
  data: rupiah(projectValue.value),
  errorMessage: '',
}))

const selectedStage = computed(
  () => selectedOf(projectForm.value.stage) as PipelineStageOption | null
)
const isLostOrCancelled = computed(() =>
  ['closed_lost', 'closed_cancel'].includes(selectedStage.value?.code ?? '')
)

watch(
  () => projectForm.value.company.selected,
  () => {
    projectForm.value.contact = initSelectField()
  }
)

watch(
  () => projectForm.value.division.selected,
  () => {
    projectForm.value.products = initSelectField()
  }
)

watch(isLostOrCancelled, (visible) => {
  if (!visible) projectForm.value.lostReasons = initSelectField()
})

function openContactModal() {
  contactStore.openContactModal()
}

function selectCreatedContact(created: Contact) {
  projectForm.value.contact = selectedField(toContactOption(created))
}

function addTimelineEntry() {
  timelineEntries.value.push({
    id: timelineSequence.value++,
    date: initInputField(),
    activity: initInputField(),
  })
}

function removeTimelineEntry(index: number) {
  timelineEntries.value.splice(index, 1)
}

function isFilled(field: { data: unknown }) {
  return Array.isArray(field.data) ? field.data.length > 0 : String(field.data ?? '').trim() !== ''
}

function numericId(value: unknown): number | undefined {
  if (value === undefined || value === null || value === '') return undefined
  const id = Number(value)
  return Number.isInteger(id) ? id : undefined
}

function normalizeLabel(value: string) {
  return value.toLocaleLowerCase('id-ID').replace(/[^a-z0-9]+/g, '')
}

function findLookupId(options: DealOption[], selected: DealOption | null) {
  if (!selected) return undefined
  const directId = numericId(selected.value)
  if (directId !== undefined) return directId

  const candidates = [selected.label, String(selected.value)]
  const normalizedCandidates = candidates.map(normalizeLabel)
  return numericId(
    options.find((option) => normalizedCandidates.includes(normalizeLabel(option.label)))?.value
  )
}

onMounted(async () => {
  const results = await Promise.allSettled([
    hospitalStore.fetchHospitals(),
    contactStore.fetchRemoteContacts(),
    projectStore.fetchProjectLookups(),
  ])

  const loggedInName = (() => {
    try {
      const user = JSON.parse(localStorage.getItem('user') || 'null') as {
        name?: string
      } | null
      return user?.name?.trim().toLocaleLowerCase('id-ID') ?? ''
    } catch {
      return ''
    }
  })()
  const loggedInOwner = ownerOptions.value.find(
    (owner) => owner.label.trim().toLocaleLowerCase('id-ID') === loggedInName
  )
  if (loggedInOwner) projectForm.value.owner = selectedField(loggedInOwner)

  if (results.some((result) => result.status === 'rejected')) {
    Swal.fire({
      icon: 'warning',
      text:
        hospitalStore.error ??
        contactStore.contactApi.error ??
        projectStore.error ??
        'Sebagian data pendukung project gagal dimuat.',
      confirmButtonColor: 'var(--theme-default)',
    })
  }
})

async function handleSubmit() {
  formSubmitted.value = true
  const form = projectForm.value
  const requiredFields: [string, { data: unknown }][] = [
    ['Perusahaan', form.company],
    ['Contact', form.contact],
    ['Stage', form.stage],
    ['Owner', form.owner],
    ['Divisi', form.division],
    ['Produk', form.products],
    ['Qty', form.quantity],
    ['Estimasi PO', form.estimatedPo],
    ['Kompetitor', form.competitor],
    ['Sumber Pendanaan', form.fundingSource],
  ]
  if (isLostOrCancelled.value) requiredFields.push(['Alasan Kalah/Batal', form.lostReasons])

  const emptyFields = requiredFields.filter(([, field]) => !isFilled(field)).map(([label]) => label)
  if (emptyFields.length) {
    await Swal.fire({
      icon: 'error',
      text: `Field berikut belum diisi: ${emptyFields.join(', ')}.`,
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  if (!Number.isInteger(quantity.value) || quantity.value < 1) {
    await Swal.fire({
      icon: 'error',
      text: 'Qty harus berupa bilangan bulat minimal 1.',
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  const company = selectedCompany.value as CompanyOption
  const contact = selectedOf(form.contact) as DealOption
  const owner = selectedOf(form.owner) as DealOption
  const competitor = selectedOf(form.competitor) as DealOption
  const fundingSource = selectedOf(form.fundingSource) as DealOption
  const companyId = numericId(company.value)
  const contactId = numericId(contact.value)
  const ownerId = findLookupId(projectStore.lookups.owner, owner)
  const stageId = numericId(selectedStage.value?.value)

  if (!companyId || !contactId || !ownerId || !stageId) {
    const missing = [
      !companyId && 'Perusahaan',
      !contactId && 'Contact',
      !ownerId && 'Owner',
      !stageId && `Stage "${selectedStage.value?.label ?? ''}"`,
    ].filter(Boolean)
    await Swal.fire({
      icon: 'error',
      text: `${missing.join(', ')} belum memiliki ID numerik dari database.`,
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  if (!projectName.value || projectName.value.length > 500) {
    await Swal.fire({
      icon: 'error',
      text: 'Project Name wajib diisi dan maksimal 500 karakter.',
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  const payload: ProjectPayload = {
    projects_name: projectName.value,
    company_id: companyId,
    contact_id: contactId,
    owner_id: ownerId,
    stage_id: stageId,
    currency: 'IDR',
    amount_value: projectValue.value,
    expected_close_date: form.estimatedPo.data,
    priority: null,
    competitor_id: numericId(competitor.value) ?? null,
    sumberdana_id: numericId(fundingSource.value) ?? null,
    probability: selectedStage.value?.probability ?? 0,
    aktif: 1,
    idold: null,
    created_by: numericId(authStore.user?.id) ?? null,
    division_code: selectedOf(form.division)?.code ?? null,
    product_names: selectedProducts.value.map((product) => product.label),
    quantity: quantity.value,
    unit_price: price.value,
    lost_reasons: (form.lostReasons.selectedItems as DealOption[]).map(
      (reason) => reason.label
    ),
    notes: form.notes.data.trim() || null,
    timeline: timelineEntries.value
      .map((entry) => ({
        date: entry.date.data.trim(),
        activity: entry.activity.data.trim(),
      }))
      .filter((entry) => entry.date || entry.activity),
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
