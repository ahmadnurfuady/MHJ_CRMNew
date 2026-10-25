<template>
  <div :class="{ 'container-fluid': !modalMode }">
    <div :class="{ row: !modalMode }">
      <div :class="{ 'col-12': !modalMode }">
        <div
          class="create-project-form custom-input"
          :class="{ card: !modalMode, 'project-modal-form': modalMode }"
        >
          <div :class="{ 'card-body': !modalMode }">
            <h5 v-if="!modalMode" class="mb-3">
              {{ isEditMode ? 'Edit Peluang' : 'Tambah Peluang' }}
            </h5>
            <div v-if="loadingProject" class="text-center py-5">
              <span class="spinner-border text-primary" role="status"></span>
            </div>
            <form v-else class="row g-3 needs-validation mhj-form" @submit.prevent="handleSubmit">
              <div v-if="dummyLookupLabels.length" class="col-12">
                <div class="dummy-source-notice" role="note">
                  <DummyDataBadge />
                  <span>
                    Master lokal sedang dipakai untuk:
                    {{ dummyLookupLabels.join(', ') }}.
                  </span>
                </div>
              </div>
              <div class="col-12">
                <InputWrapper :title="'Nama Peluang'" required>
                  <div class="input-group project-name-input">
                    <InputField
                      :modelValue="projectNameField"
                      :inputId="'project-name'"
                      :placeholder="'EKAT/PRVT_Nama Faskes_Nama Produk'"
                      :disabled="!isProjectNameEditing"
                      @update:modelValue="updateProjectName"
                    />
                    <button
                      class="btn project-name-edit"
                      type="button"
                      :title="isProjectNameEditing ? 'Selesai mengedit nama peluang' : 'Edit nama peluang'"
                      :aria-label="isProjectNameEditing ? 'Selesai mengedit nama peluang' : 'Edit nama peluang'"
                      :aria-pressed="isProjectNameEditing"
                      @click="toggleProjectNameEdit"
                    >
                      <vue-feather :type="isProjectNameEditing ? 'check' : 'edit-2'" size="15" />
                    </button>
                  </div>
                </InputWrapper>
              </div>

              <div class="col-md-6">
                <InputWrapper :title="'Faskes'" required>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Cari nama faskes di database...'"
                    v-model="projectForm.company"
                    :options="companyOptions"
                    :formSubmitted="formSubmitted"
                    :loading-more="loadingMoreCompanies"
                    @reach-bottom="loadMoreCompanies"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-6">
                <InputWrapper :title="'Kontak PIC'" required>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Cari PIC kontak di database...'"
                    v-model="projectForm.contact"
                    :options="contactOptions"
                    :multiSelect="true"
                    :removableTags="true"
                    :formSubmitted="formSubmitted"
                  />
                </InputWrapper>
                <button
                  class="btn btn-link btn-sm p-0 mt-1"
                  type="button"
                  @click="openContactModal"
                >
                  <MhjIcon name="action_add" :size="14" class="me-1" />Tambah Kontak Baru
                </button>
              </div>

              <div class="col-md-6">
                <InputWrapper :title="'Owner (Pemilik Peluang)'" required>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="
                      isEditMode
                        ? 'Owner tidak dapat diubah'
                        : 'Pilih diri sendiri atau atasan Anda'
                    "
                    v-model="projectForm.owner"
                    :options="ownerOptions"
                    :formSubmitted="formSubmitted"
                    :disabled="isEditMode"
                  />
                  <small class="d-block text-muted mt-1">
                    {{
                      isEditMode
                        ? 'Owner peluang bersifat tetap dan tidak dapat diubah saat edit.'
                        : 'Dapat diisi diri sendiri atau atasan Anda bila peluang dibuatkan atas nama atasan.'
                    }}
                  </small>
                </InputWrapper>
              </div>

              <div class="col-md-6">
                <InputWrapper :title="'Stage'" required>
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
                <InputWrapper :title="'Divisi'" required>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Pilih Divisi Produk'"
                    v-model="projectForm.division"
                    :options="projectStore.lookups.divisi"
                    :formSubmitted="formSubmitted"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-6">
                <InputWrapper :title="'Produk'" required>
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

              <div v-if="productLines.length" class="col-12">
                <div class="product-lines border rounded p-3">
                  <div class="row g-2 d-none d-md-flex product-lines__header">
                    <div class="col-md-6">Produk</div>
                    <div class="col-md-2">Qty <span class="text-danger">*</span></div>
                    <div class="col-md-4">Harga Satuan (Rp)</div>
                  </div>
                  <div
                    v-for="line in productLines"
                    :key="line.key"
                    class="row g-2 align-items-start product-line"
                  >
                    <div class="col-md-6 product-line__name" :title="line.product.label">
                      {{ line.product.label }}
                    </div>
                    <div class="col-md-2">
                      <label class="form-label d-md-none" :for="`project-quantity-${line.key}`">Qty</label>
                      <InputField
                        v-model:modelValue="line.quantity"
                        :formSubmitted="formSubmitted"
                        :inputId="`project-quantity-${line.key}`"
                        :placeholder="'Qty'"
                        :inputType="'number'"
                      />
                    </div>
                    <div class="col-md-4">
                      <label class="form-label d-md-none" :for="`project-price-${line.key}`">Harga Satuan (Rp)</label>
                      <InputField
                        v-model:modelValue="line.unitPrice"
                        :formSubmitted="formSubmitted"
                        :inputId="`project-price-${line.key}`"
                        :placeholder="'Masukkan harga satuan'"
                        :inputType="'number'"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <InputWrapper :title="'Value Deal (Total)'">
                  <InputField
                    :modelValue="valueField"
                    :inputId="'project-value'"
                    :placeholder="'Harga x Qty'"
                    :disabled="true"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Estimasi PO'" required>
                  <InputField
                    v-model:modelValue="projectForm.estimatedPo"
                    :formSubmitted="formSubmitted"
                    :inputId="'estimated-po'"
                    :placeholder="'Pilih tanggal'"
                    :inputType="'date'"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Kompetitor'" required>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Pilih nama kompetitor di database...'"
                    v-model="projectForm.competitor"
                    :options="projectStore.lookups.competitor"
                    :formSubmitted="formSubmitted"
                  />
                </InputWrapper>
              </div>

              <div class="col-md-4">
                <InputWrapper :title="'Sumber Pendanaan'" required>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Pilih sumber pendanaan di database...'"
                    v-model="projectForm.fundingSource"
                    :options="projectStore.lookups.sumberdana"
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
                <InputWrapper :title="'Notes/Catatan'">
                  <InputField
                    v-model:modelValue="projectForm.notes"
                    :inputId="'project-notes'"
                    :placeholder="'Tambahkan konteks peluang, kebutuhan faskes, spesifikasi alkes, dll.'"
                    :inputType="'textarea'"
                    :rows="3"
                    :required="false"
                  />
                </InputWrapper>
              </div>

              <div v-if="isEditMode" class="col-12">
                <div class="border rounded p-3">
                  <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
                    <div>
                      <h6 class="mb-1">Timeline</h6>
                      <p class="mb-0 text-muted small">
                        Catat meeting, demo, follow up, dan aktivitas peluang.
                      </p>
                    </div>
                    <button
                      class="btn btn-outline-primary btn-sm"
                      type="button"
                      @click="addTimelineEntry"
                    >
                      <MhjIcon name="action_add" :size="14" class="me-1" />Tambah aktivitas
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
                    @click="cancel"
                  >
                    Batal
                  </button>
                  <button class="btn btn-primary" type="submit" :disabled="projectStore.submitting">
                    <span
                      v-if="projectStore.submitting"
                      class="spinner-border spinner-border-sm me-2"
                      aria-hidden="true"
                    />
                    {{ isEditMode ? 'Simpan Perubahan' : 'Simpan Peluang' }}
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
import {
  computed,
  defineAsyncComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { initInputField, initSelectField } from '@/core/data/common'
import { lostReasons, type DealOption } from '@/core/data/projectDeal'
import { routes } from '@/router/routes'
import { confirmEditExit } from '@/utils/confirmEditExit'
import { useAuthStore } from '@/store/auth'
import { useContact } from '@/store/contact'
import { useHospitalStore } from '@/store/hospital'
import { useProjectStore, type BarangOption, type ProjectPayload } from '@/store/project'
import type { Contact } from '@/types/contacts'
import type { InputField as InputFieldState } from '@/types/common'
import type { Projects } from '@/types/project'
import { shortProjectTitle } from '@/utils/index'
import DummyDataBadge from '@/components/shared/DummyDataBadge.vue'

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

interface ProductLine {
  key: string
  product: BarangOption
  quantity: InputFieldState
  unitPrice: InputFieldState
}

const props = withDefaults(
  defineProps<{
    modalMode?: boolean
    initialHospital?: { id: number; name: string } | null
    editProjectId?: number | null
  }>(),
  {
    modalMode: false,
    initialHospital: null,
    editProjectId: null,
  }
)

const emit = defineEmits<{
  cancel: []
  saved: [project: Projects | null]
}>()

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
  (stage) => stage.code === 'qualified'
) as PipelineStageOption

function todayForDateInput() {
  const today = new Date()
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
  return localToday.toISOString().slice(0, 10)
}

function selectedField(option?: DealOption) {
  const field = initSelectField()
  if (!option) return field
  return {
    ...field,
    selected: option,
    data: String(option.label),
  }
}

function multiSelectedField(options: DealOption[]) {
  const field = initSelectField()
  if (!options.length) return field
  return {
    ...field,
    selectedItems: options,
    data: options.map((option) => option.label).join(', '),
  }
}

const projectForm = ref({
  company: initSelectField(),
  contact: initSelectField(),
  stage: selectedField(defaultStage),
  owner: initSelectField(),
  division: initSelectField(),
  products: initSelectField(),
  estimatedPo: { data: todayForDateInput(), errorMessage: '' },
  competitor: initSelectField(),
  fundingSource: initSelectField(),
  lostReasons: initSelectField(),
  notes: initInputField(),
})

const formSubmitted = ref(false)
const timelineSequence = ref(1)
const timelineEntries = ref<TimelineEntry[]>([])
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const hospitalStore = useHospitalStore()
const contactStore = useContact()
const projectStore = useProjectStore()
const dummyLookupLabels = computed(() => {
  const labels: string[] = ['Alasan Kalah/Batal']
  if (projectStore.lookupSources.divisi === 'local-dummy') labels.push('Divisi')
  if (projectStore.lookupSources.barang === 'local-dummy') labels.push('Produk')
  if (projectStore.lookupSources.competitor === 'local-dummy') labels.push('Kompetitor')
  if (projectStore.lookupSources.sumberdana === 'local-dummy') labels.push('Sumber Pendanaan')
  return labels
})

const editingId = computed<number | null>(() => {
  const explicitId = Number(props.editProjectId)
  if (Number.isFinite(explicitId) && explicitId > 0) return explicitId
  if (props.modalMode) return null
  const raw = route.query.id
  const value = Number(Array.isArray(raw) ? raw[0] : raw)
  return Number.isFinite(value) && value > 0 ? value : null
})
const isEditMode = computed(() => editingId.value !== null)
let allowEditNavigation = false
const loadingProject = ref(false)
const loadingMoreCompanies = ref(false)
// Saat prefill berjalan, watcher company/division di bawah tidak boleh ikut mengosongkan field terkait.
const prefilling = ref(false)
const productLines = ref<ProductLine[]>([])
const customProjectName = ref('')
const usesCustomProjectName = ref(false)
const isProjectNameEditing = ref(false)

function selectedOf(field: { selected: unknown }) {
  return field.selected as DealOption | null
}

function isGovernmentCompany(hospitalType: string, industry: string, name: string) {
  const classification = `${hospitalType} ${industry} ${name}`.toLocaleLowerCase('id-ID')
  return /government|pemerintah|negeri|publik|rsud|rsup|tni|polri/.test(classification)
}

const companyOptions = computed<CompanyOption[]>(() => {
  const selectedHospital = hospitalStore.selectedItem
  const hospitals =
    selectedHospital && !hospitalStore.items.some((hospital) => hospital.id === selectedHospital.id)
      ? [selectedHospital, ...hospitalStore.items]
      : hospitalStore.items

  return hospitals.map((hospital) => ({
    value: hospital.id,
    label: hospital.name,
    type: isGovernmentCompany(hospital.hospitalType, hospital.industry, hospital.name)
      ? 'Government'
      : 'Private',
    address: hospital.address,
    kdKelurahan: hospital.kdKelurahan,
  }))
})

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

/**
 * Kontak yang baru dibuat lewat modal di form ini. Disimpan terpisah karena
 * response detail backend kadang belum membawa company_id, sehingga kontak
 * tersebut akan tersaring keluar oleh filter rumah sakit di bawah dan tidak
 * bisa tampil sebagai pilihan terpilih.
 */
const justCreatedContactIds = ref<Set<string>>(new Set())

const contactOptions = computed<DealOption[]>(() => {
  const contacts = contactStore.contactApi.items.filter(
    (contact) =>
      contact.origin === 'api' && (contact.remoteId !== undefined || contact.id !== undefined)
  )
  const companyId = selectedOf(projectForm.value.company)?.value
  if (companyId === undefined) return contacts.map(toContactOption)

  const relatedContacts = contacts.filter(
    (contact) =>
      justCreatedContactIds.value.has(String(contact.remoteId ?? contact.id)) ||
      (contact.companyId && String(contact.companyId) === String(companyId))
  )
  const hasCompanyRelations = contacts.some((contact) => Boolean(contact.companyId))
  return (hasCompanyRelations ? relatedContacts : contacts).map(toContactOption)
})

/**
 * Saat membuat peluang, owner dibatasi ke user login + atasannya
 * (GET /api/project/ownercandidates). Saat edit, field terkunci sehingga
 * daftar lengkap dipakai agar nama owner lama tetap tampil walaupun berada
 * di luar hirarki user yang sedang membuka form.
 */
const ownerOptions = computed<DealOption[]>(() => {
  if (isEditMode.value) return projectStore.lookups.owner
  const candidates = projectStore.lookups.ownerCandidates
  return candidates.length ? candidates : projectStore.lookups.owner
})
const selectedProducts = computed(() => projectForm.value.products.selectedItems as BarangOption[])
const productOptions = computed(() =>
  projectStore.lookups.barang.filter(
    (product) => product.divisiCode === selectedOf(projectForm.value.division)?.code
  )
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
const automaticProjectName = computed(() => {
  const company = selectedCompany.value
  if (!company) return ''
  const prefix = company.type === 'Government' ? 'EKAT' : 'PRVT'
  const productNames = selectedProducts.value.map((product) => product.label).join(', ')
  return [prefix, company.label, productNames].filter(Boolean).join('_')
})
const projectName = computed(() =>
  usesCustomProjectName.value ? customProjectName.value.trim() : automaticProjectName.value
)
const totalQuantity = computed(() =>
  productLines.value.reduce((total, line) => total + (Number(line.quantity.data) || 0), 0)
)
const projectValue = computed(() =>
  productLines.value.reduce(
    (total, line) => total + (Number(line.quantity.data) || 0) * (Number(line.unitPrice.data) || 0),
    0
  )
)
const rupiah = (amount: number) => `Rp ${amount.toLocaleString('id-ID')}`
const projectNameField = computed(() => ({
  data: usesCustomProjectName.value ? customProjectName.value : automaticProjectName.value,
  errorMessage:
    formSubmitted.value && !projectName.value ? 'Nama Peluang wajib diisi.' : '',
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
    if (prefilling.value) return
    projectForm.value.contact = initSelectField()
  }
)

watch(
  () => projectForm.value.division.selected,
  () => {
    if (prefilling.value) return
    projectForm.value.products = initSelectField()
  }
)

watch(
  selectedProducts,
  (products) => {
    const existingLines = new Map(productLines.value.map((line) => [line.key, line]))
    productLines.value = products.map((product) => {
      const key = String(product.code || product.value)
      return existingLines.get(key) ?? {
        key,
        product,
        quantity: { data: '1', errorMessage: '' },
        unitPrice: { data: String(product.price ?? 0), errorMessage: '' },
      }
    })
  },
  { deep: true }
)

watch(isLostOrCancelled, (visible) => {
  if (!visible) projectForm.value.lostReasons = initSelectField()
})

function openContactModal() {
  const company = selectedCompany.value
  if (company) {
    contactStore.openContactModalForCompany({
      id: Number(company.value),
      name: company.label,
    })
    return
  }
  contactStore.openContactModal()
}

async function cancel() {
  if (isEditMode.value && !(await confirmEditExit())) return
  allowEditNavigation = true
  if (props.modalMode) {
    emit('cancel')
    return
  }
  if (isEditMode.value && editingId.value) {
    router.push({ path: routes.Project.ProjectDetailsV2, query: { id: String(editingId.value) } })
  } else {
    router.push(routes.Project.ProjectList)
  }
}

function selectCreatedContact(created: Contact) {
  const option = toContactOption(created)
  justCreatedContactIds.value = new Set([
    ...justCreatedContactIds.value,
    String(option.value),
  ])
  const current = projectForm.value.contact.selectedItems as DealOption[]
  projectForm.value.contact = multiSelectedField([
    ...current.filter((item) => String(item.value) !== String(option.value)),
    option,
  ])
}

function updateProjectName(field: InputFieldState) {
  usesCustomProjectName.value = true
  customProjectName.value = String(field.data ?? '')
}

async function toggleProjectNameEdit() {
  if (!isProjectNameEditing.value) {
    if (!usesCustomProjectName.value) customProjectName.value = automaticProjectName.value
    usesCustomProjectName.value = true
    isProjectNameEditing.value = true
    await nextTick()
    document.getElementById('project-name')?.focus()
    return
  }
  isProjectNameEditing.value = false
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

function findOptionById<T extends DealOption>(options: T[], id?: number): T | undefined {
  if (id === undefined) return undefined
  return options.find((option) => numericId(option.value) === id)
}

function findOptionByLabel<T extends DealOption>(options: T[], label?: string): T | undefined {
  if (!label) return undefined
  const normalized = normalizeLabel(label)
  return options.find((option) => normalizeLabel(option.label) === normalized)
}

/** lost_reasons disimpan sebagai JSON array atau string dipisah koma. */
function parseNameList(raw?: string): string[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed.map((item) => String(item).trim()).filter(Boolean)
  } catch {
    // Bukan JSON, anggap daftar dipisah koma.
  }
  return raw.split(',').map((item) => item.trim()).filter(Boolean)
}

/**
 * product_names bisa berupa JSON array, atau jatuh balik ke deal_name
 * berformat "PREFIX_Perusahaan_Produk" (lihat computed projectName) bila kolom kosong.
 */
function parseProductNames(raw?: string): string[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed.map((item) => String(item).trim()).filter(Boolean)
  } catch {
    // Bukan JSON, lanjut ke fallback deal_name di bawah.
  }
  return shortProjectTitle(raw)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

/** Isi ulang form dari data peluang existing saat edit, memetakan id/nama ke opsi dropdown. */
async function prefillForm(project: Projects) {
  prefilling.value = true

  const company = findOptionById(companyOptions.value, project.companyId)
  if (company) projectForm.value.company = selectedField(company)

  const contacts = (project.contacts?.length
    ? project.contacts.map((item) =>
        findOptionById(contactOptions.value, item.id) ??
        findOptionByLabel(contactOptions.value, item.name)
      )
    : [
        findOptionById(contactOptions.value, project.contactId) ??
        findOptionByLabel(contactOptions.value, project.contactName),
      ]
  ).filter((option): option is DealOption => Boolean(option))
  if (contacts.length) projectForm.value.contact = multiSelectedField(contacts)

  const stage = stageOptions.find((option) => option.value === project.stageId)
  if (stage) projectForm.value.stage = selectedField(stage)

  const owner =
    findOptionById(ownerOptions.value, project.ownerId) ??
    findOptionByLabel(ownerOptions.value, project.ownerName)
  if (owner) projectForm.value.owner = selectedField(owner)

  const division = projectStore.lookups.divisi.find((option) => option.code === project.divisionCode)
  if (division) projectForm.value.division = selectedField(division)

  const products = parseProductNames(project.productNames)
    .map((label) => findOptionByLabel(productOptions.value, label))
    .filter((option): option is BarangOption => Boolean(option))
  if (products.length) projectForm.value.products = multiSelectedField(products)
  await nextTick()
  productLines.value.forEach((line) => {
    const savedDetail = project.productDetails?.find(
      (detail) =>
        (detail.code && detail.code === line.product.code) ||
        normalizeLabel(detail.name) === normalizeLabel(line.product.label)
    )
    line.quantity = {
      data: String(savedDetail?.quantity ?? project.quantity ?? 1),
      errorMessage: '',
    }
    line.unitPrice = {
      data: String(
        savedDetail?.unitPrice ??
          (productLines.value.length === 1 && project.unitPrice !== undefined
            ? project.unitPrice
            : line.product.price ?? 0)
      ),
      errorMessage: '',
    }
  })
  customProjectName.value = project.projectName
  usesCustomProjectName.value = true
  projectForm.value.estimatedPo = {
    data: (project.expectedCloseDate ?? '').slice(0, 10),
    errorMessage: '',
  }

  const competitor =
    findOptionById(projectStore.lookups.competitor, project.competitorId) ??
    findOptionByLabel(projectStore.lookups.competitor, project.competitorName)
  if (competitor) projectForm.value.competitor = selectedField(competitor)

  const fundingSource =
    findOptionById(projectStore.lookups.sumberdana, project.sumberdanaId) ??
    findOptionByLabel(projectStore.lookups.sumberdana, project.sumberdanaName)
  if (fundingSource) projectForm.value.fundingSource = selectedField(fundingSource)

  const lostReasonItems = parseNameList(project.lostReasons)
    .map((label) => findOptionByLabel(lostReasons, label))
    .filter((option): option is DealOption => Boolean(option))
  if (lostReasonItems.length) projectForm.value.lostReasons = multiSelectedField(lostReasonItems)

  projectForm.value.notes = {
    data: project.notes && project.notes !== '-' ? project.notes : '',
    errorMessage: '',
  }

  // Tunggu flush watcher company/division yang tertunda sebelum guard prefilling dilepas.
  await nextTick()
  prefilling.value = false
}

/** Infinite scroll dropdown Perusahaan: ambil halaman berikutnya dan tambahkan ke daftar yang ada. */
async function loadMoreCompanies() {
  if (loadingMoreCompanies.value) return
  if (hospitalStore.pagination.page >= hospitalStore.pagination.lastPage) return

  loadingMoreCompanies.value = true
  try {
    await hospitalStore.fetchHospitals(
      { page: hospitalStore.pagination.page + 1, per_page: hospitalStore.pagination.perPage },
      { append: true },
    )
  } finally {
    loadingMoreCompanies.value = false
  }
}

function prefillInitialHospital() {
  if (isEditMode.value) return

  const rawRouteId = Array.isArray(route.query.hospital_id)
    ? route.query.hospital_id[0]
    : route.query.hospital_id
  const hospitalId = Number(props.initialHospital?.id ?? rawRouteId)
  if (!Number.isFinite(hospitalId) || hospitalId <= 0) return

  const rawRouteName = Array.isArray(route.query.hospital_name)
    ? route.query.hospital_name[0]
    : route.query.hospital_name
  const hospitalName = props.initialHospital?.name ?? rawRouteName
  const option =
    findOptionById(companyOptions.value, hospitalId) ??
    (hospitalName
      ? {
          value: hospitalId,
          label: hospitalName,
          type: 'Private',
          address: '',
          kdKelurahan: '',
        }
      : undefined)

  if (option) projectForm.value.company = selectedField(option)
}

onMounted(async () => {
  const tasks: Promise<unknown>[] = [
    hospitalStore.fetchHospitals({ per_page: 15 }),
    contactStore.fetchRemoteContacts(),
    projectStore.fetchProjectLookups(),
    projectStore.fetchProjectCatalog(),
  ]
  if (editingId.value !== null) {
    loadingProject.value = true
    tasks.push(projectStore.fetchProjectById(editingId.value))
  }

  const results = await Promise.allSettled(tasks)

  if (editingId.value !== null) {
    loadingProject.value = false
    if (projectStore.selectedItem) {
      await prefillForm(projectStore.selectedItem)
    } else {
      Swal.fire({
        icon: 'error',
        text: projectStore.error ?? 'Data peluang tidak ditemukan.',
        confirmButtonColor: 'var(--theme-default)',
      })
    }
  } else {
    prefillInitialHospital()
    // Owner wajib = user yang sedang login. Cari option berdasarkan ID
    // dulu (reliable) baru fallback ke matching nama (kalau ID tidak ada
    // di lookup owner).
    const loggedInUserId = numericId(authStore.user?.id)
    const loggedInName = (() => {
      const authName = (authStore.user as { name?: string } | null | undefined)?.name
      if (authName) return authName.trim().toLocaleLowerCase('id-ID')
      try {
        const user = JSON.parse(localStorage.getItem('user') || 'null') as {
          name?: string
        } | null
        return user?.name?.trim().toLocaleLowerCase('id-ID') ?? ''
      } catch {
        return ''
      }
    })()
    const loggedInOwner =
      findOptionById(ownerOptions.value, loggedInUserId) ??
      ownerOptions.value.find(
        (owner) => owner.label.trim().toLocaleLowerCase('id-ID') === loggedInName
      )
    if (loggedInOwner) projectForm.value.owner = selectedField(loggedInOwner)
  }

  if (results.some((result) => result.status === 'rejected')) {
    Swal.fire({
      icon: 'warning',
      text:
        hospitalStore.error ??
        contactStore.contactApi.error ??
        projectStore.error ??
        'Sebagian data pendukung peluang gagal dimuat.',
      confirmButtonColor: 'var(--theme-default)',
    })
  }
})

async function handleSubmit() {
  formSubmitted.value = true
  const form = projectForm.value
  const requiredFields: [string, { data: unknown; errorMessage?: string }][] = [
    ['Faskes', form.company],
    ['Kontak PIC', form.contact],
    ['Stage', form.stage],
    ['Owner (Pemilik Peluang)', form.owner],
    ['Divisi', form.division],
    ['Produk', form.products],
    ['Estimasi PO', form.estimatedPo],
    ['Kompetitor', form.competitor],
    ['Sumber Pendanaan', form.fundingSource],
  ]
  if (isLostOrCancelled.value) requiredFields.push(['Alasan Kalah/Batal', form.lostReasons])

  requiredFields.forEach(([label, field]) => {
    field.errorMessage = isFilled(field) ? '' : `${label} wajib diisi.`
  })
  const emptyFields = requiredFields.filter(([, field]) => !isFilled(field)).map(([label]) => label)
  if (emptyFields.length) {
    await Swal.fire({
      icon: 'error',
      text: `Field berikut belum diisi: ${emptyFields.join(', ')}.`,
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  const invalidQuantity = productLines.value.find(
    (line) => !Number.isInteger(Number(line.quantity.data)) || Number(line.quantity.data) < 1
  )
  if (invalidQuantity) {
    await Swal.fire({
      icon: 'error',
      text: `Qty untuk ${invalidQuantity.product.label} harus berupa bilangan bulat minimal 1.`,
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  const invalidPrice = productLines.value.find(
    (line) => !Number.isFinite(Number(line.unitPrice.data)) || Number(line.unitPrice.data) < 0
  )
  if (invalidPrice) {
    await Swal.fire({
      icon: 'error',
      text: `Harga satuan untuk ${invalidPrice.product.label} harus berupa angka minimal 0.`,
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  const company = selectedCompany.value as CompanyOption
  const contacts = form.contact.selectedItems as DealOption[]
  const owner = selectedOf(form.owner) as DealOption
  const competitor = selectedOf(form.competitor) as DealOption
  const fundingSource = selectedOf(form.fundingSource) as DealOption
  const companyId = numericId(company.value)
  const contactIds = contacts
    .map((contact) => numericId(contact.value))
    .filter((id): id is number => id !== undefined)
  const ownerId = findLookupId(ownerOptions.value, owner)
  const stageId = numericId(selectedStage.value?.value)

  if (!companyId || contactIds.length !== contacts.length || !ownerId || !stageId) {
    const missing = [
      !companyId && 'Faskes',
      contactIds.length !== contacts.length && 'Kontak PIC',
      !ownerId && 'Owner (Pemilik Peluang)',
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
      text: 'Nama Peluang wajib diisi dan maksimal 500 karakter.',
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }

  const payload: ProjectPayload = {
    projects_name: projectName.value,
    company_id: companyId,
    contact_id: contactIds[0],
    contact_ids: contactIds,
    owner_id: ownerId,
    owner_name: owner.label || null,
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
    // created_by diisi BE dari user login saat insert; updated_by menandai
    // siapa yang mengubah saat edit (bisa berbeda dari pembuat peluang).
    created_by: isEditMode.value ? null : (numericId(authStore.user?.id) ?? null),
    updated_by: isEditMode.value ? (numericId(authStore.user?.id) ?? null) : null,
    division_code: selectedOf(form.division)?.code ?? null,
    product_names: selectedProducts.value.map((product) => product.label),
    product_details: productLines.value.map((line) => ({
      product_code: line.product.code || String(line.product.value),
      product_name: line.product.label,
      quantity: Number(line.quantity.data),
      unit_price: Number(line.unitPrice.data),
      subtotal: Number(line.quantity.data) * Number(line.unitPrice.data),
    })),
    quantity: totalQuantity.value,
    unit_price: totalQuantity.value ? projectValue.value / totalQuantity.value : 0,
    lost_reasons: (form.lostReasons.selectedItems as DealOption[]).map(
      (reason) => reason.label
    ),
    notes: form.notes.data.trim() || null,
    address: company.address || null,
    kd_kelurahan: company.kdKelurahan || null,
    timeline: timelineEntries.value
      .map((entry) => ({
        date: entry.date.data.trim(),
        activity: entry.activity.data.trim(),
      }))
      .filter((entry) => entry.date || entry.activity),
  }

  try {
    if (isEditMode.value && editingId.value) {
      await projectStore.updateProject(editingId.value, payload)
      await Swal.fire({
        icon: 'success',
        title: 'Peluang berhasil diperbarui',
        confirmButtonColor: 'var(--theme-default)',
      })
      allowEditNavigation = true
      router.push({
        path: routes.Project.ProjectDetailsV2,
        query: { id: String(editingId.value) },
      })
    } else {
      const created = await projectStore.createProject(payload)
      await Swal.fire({
        icon: 'success',
        title: 'Peluang berhasil ditambahkan',
        confirmButtonColor: 'var(--theme-default)',
      })
      if (props.modalMode) {
        emit('saved', created)
      } else {
        router.push(routes.Project.ProjectList)
      }
    }
  } catch {
    Swal.fire({
      icon: 'error',
      text: projectStore.error ?? (isEditMode.value ? 'Gagal memperbarui peluang.' : 'Gagal menyimpan peluang.'),
      confirmButtonColor: 'var(--theme-default)',
    })
  }
}

onBeforeRouteLeave(async () => {
  if (!isEditMode.value || props.modalMode || allowEditNavigation) return true
  const confirmed = await confirmEditExit()
  if (confirmed) allowEditNavigation = true
  return confirmed
})

function warnBeforeUnload(event: BeforeUnloadEvent) {
  if (!isEditMode.value || props.modalMode || allowEditNavigation) return
  event.preventDefault()
  event.returnValue = ''
}

onMounted(() => window.addEventListener('beforeunload', warnBeforeUnload))
onBeforeUnmount(() => window.removeEventListener('beforeunload', warnBeforeUnload))
</script>

<style scoped>
.dummy-source-notice {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  border: 1px solid #f3d488;
  border-radius: 10px;
  padding: 9px 11px;
  color: #70531b;
  background: #fffbeb;
  font-size: 12px;
}

.project-name-input :deep(.form-control) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.project-name-edit {
  display: inline-flex;
  flex: 0 0 44px;
  align-items: center;
  justify-content: center;
  width: 44px;
  padding: 0;
  color: #ffffff !important;
  background-color: var(--bg-sidebar, var(--theme-default)) !important;
  border-color: var(--bg-sidebar, var(--theme-default)) !important;
}

.project-name-edit:hover,
.project-name-edit:focus-visible {
  color: #ffffff !important;
  background-color: var(--color-primary-dark, var(--theme-default)) !important;
  border-color: var(--color-primary-dark, var(--theme-default)) !important;
}

.project-name-edit:focus-visible {
  box-shadow: 0 0 0 0.2rem rgba(var(--app-primary-rgb), 0.24);
}

.project-name-edit :deep(svg) {
  display: block !important;
  width: 17px !important;
  height: 17px !important;
  color: #ffffff !important;
  stroke: #ffffff !important;
  fill: none !important;
  opacity: 1 !important;
  visibility: visible !important;
}

.project-name-edit :deep(.vue-feather) {
  display: inline-flex !important;
  width: 17px !important;
  height: 17px !important;
  align-items: center;
  justify-content: center;
  overflow: visible !important;
  color: #ffffff !important;
  line-height: 1;
  opacity: 1 !important;
  visibility: visible !important;
}

.product-lines__header {
  margin-bottom: 0.35rem;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 600;
}

.product-line + .product-line {
  margin-top: 0.65rem;
  padding-top: 0.65rem;
  border-top: 1px solid #e2e8f0;
}

.product-line__name {
  align-self: center;
  overflow: hidden;
  font-weight: 500;
  text-overflow: ellipsis;
}

@media (max-width: 767.98px) {
  .product-line__name {
    margin-bottom: 0.25rem;
  }
}
</style>
