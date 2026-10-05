<template>
  <div
    id="taskmodel"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="task-form-title"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable task-form-dialog">
      <div class="modal-content task-form-modal">
        <div class="modal-header border-0 pb-0">
          <div>
            <span class="badge badge-light-primary mb-2">Sales Activity</span>
            <h4 id="task-form-title" class="modal-title">Buat Task Sales</h4>
            <p class="mb-0 text-muted">
              Catat aktivitas dan perbarui stage project dalam satu form.
            </p>
          </div>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Tutup"></button>
        </div>

        <form class="needs-validation" novalidate @submit.prevent="submitTask">
          <div class="modal-body pt-4">
            <div v-if="validationMessage" class="alert alert-danger d-flex align-items-center" role="alert">
              <vue-feather type="alert-circle" class="me-2"></vue-feather>
              <span>{{ validationMessage }}</span>
            </div>

            <section class="form-section">
              <div class="section-heading">
                <span class="section-icon"><vue-feather type="clipboard"></vue-feather></span>
                <div>
                  <h5>Informasi Task</h5>
                  <p>Kategori, penanggung jawab, dan jadwal aktivitas.</p>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label" for="task-name">Nama Task</label>
                  <input
                    id="task-name"
                    class="form-control bg-light"
                    type="text"
                    :value="taskName"
                    placeholder="Otomatis: Kategori_Produk_Perusahaan"
                    readonly
                  />
                  <small class="text-muted">Nama terbentuk otomatis dari kategori, produk, dan perusahaan.</small>
                </div>

                <div class="col-md-6">
                  <label class="form-label">Kategori <span class="txt-danger">*</span></label>
                  <Select
                    v-model="form.category"
                    :options="categoryOptions"
                    placeholder="Pilih kategori aktivitas"
                    display-key="label"
                    get-value-key="value"
                    :form-submitted="formSubmitted"
                  />
                  <input
                    v-if="isCustomCategory"
                    v-model.trim="form.customCategory"
                    class="form-control mt-2"
                    :class="{ 'is-invalid': formSubmitted && !form.customCategory }"
                    type="text"
                    placeholder="Ketik kategori lainnya"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="task-owner">Owner <span class="txt-danger">*</span></label>
                  <input id="task-owner" v-model="form.owner" class="form-control bg-light" type="text" readonly />
                  <small class="text-muted">Mengikuti user yang sedang login.</small>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="task-schedule">
                    Tanggal dan Waktu <span class="txt-danger">*</span>
                  </label>
                  <input
                    id="task-schedule"
                    v-model="form.scheduledAt"
                    class="form-control"
                    :class="{ 'is-invalid': formSubmitted && !form.scheduledAt }"
                    type="datetime-local"
                  />
                </div>
              </div>
            </section>

            <section class="form-section">
              <div class="section-heading">
                <span class="section-icon"><vue-feather type="briefcase"></vue-feather></span>
                <div>
                  <h5>Konteks Project</h5>
                  <p>Hubungkan task ke project untuk mengisi data otomatis dan memperbarui pipeline.</p>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label d-block">Project <span class="txt-danger">*</span></label>
                  <div class="d-flex flex-wrap gap-3">
                    <label class="project-choice" :class="{ active: form.hasProject }">
                      <input v-model="form.hasProject" type="radio" :value="true" />
                      <span>Ada project</span>
                    </label>
                    <label class="project-choice" :class="{ active: !form.hasProject }">
                      <input v-model="form.hasProject" type="radio" :value="false" />
                      <span>Tidak ada project</span>
                    </label>
                  </div>
                </div>

                <div v-if="form.hasProject" class="col-12">
                  <label class="form-label">Cari Project <span class="txt-danger">*</span></label>
                  <Select
                    v-model="form.project"
                    :options="projectOptions"
                    placeholder="Ketik untuk mencari nama project"
                    display-key="label"
                    get-value-key="value"
                    :form-submitted="formSubmitted"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Rumah Sakit/Perusahaan <span class="txt-danger">*</span></label>
                  <Select
                    v-model="form.hospital"
                    :options="hospitals"
                    placeholder="Cari rumah sakit/perusahaan"
                    display-key="label"
                    get-value-key="value"
                    :form-submitted="formSubmitted"
                    :disable-clear-button="form.hasProject"
                  />
                  <small v-if="form.hasProject" class="text-muted">Terisi otomatis dari project.</small>
                </div>

                <div class="col-md-6">
                  <label class="form-label">Kontak Person <span class="txt-danger">*</span></label>
                  <Select
                    v-model="form.contact"
                    :options="contacts"
                    placeholder="Cari kontak person"
                    display-key="label"
                    get-value-key="value"
                    :form-submitted="formSubmitted"
                    :disable-clear-button="form.hasProject"
                  />
                  <small v-if="form.hasProject" class="text-muted">Terisi otomatis dari project.</small>
                </div>

                <div class="col-md-6">
                  <label class="form-label">Divisi <span class="txt-danger">*</span></label>
                  <Select
                    v-model="form.divisions"
                    :options="divisiList"
                    placeholder="Pilih satu atau lebih divisi"
                    display-key="label"
                    get-value-key="value"
                    :multi-select="true"
                    :form-submitted="formSubmitted"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Product <span v-if="!form.unrelatedProduct" class="txt-danger">*</span></label>
                  <Select
                    v-model="form.products"
                    :options="availableProducts"
                    :placeholder="availableProducts.length ? 'Pilih satu atau lebih product' : 'Tidak ada product untuk divisi ini'"
                    display-key="label"
                    get-value-key="value"
                    :multi-select="true"
                    :required="!form.unrelatedProduct"
                    :form-submitted="formSubmitted"
                  />
                  <div class="form-check mt-2">
                    <input
                      id="unrelated-product"
                      v-model="form.unrelatedProduct"
                      class="form-check-input"
                      type="checkbox"
                    />
                    <label class="form-check-label" for="unrelated-product">Tidak terkait produk</label>
                  </div>
                </div>

                <div v-if="form.hasProject" class="col-12">
                  <div class="pipeline-box">
                    <div class="current-stage">
                      <span>Stage saat ini</span>
                      <strong>{{ currentStageLabel || '-' }}</strong>
                    </div>
                    <vue-feather type="arrow-right" class="pipeline-arrow"></vue-feather>
                    <div class="new-stage">
                      <label class="form-label">Pipeline Project <span class="txt-danger">*</span></label>
                      <Select
                        v-model="form.pipeline"
                        :options="stageOptions"
                        placeholder="Pilih stage baru"
                        display-key="label"
                        get-value-key="value"
                        :form-submitted="formSubmitted"
                      />
                    </div>
                  </div>
                  <small class="text-muted">
                    Menyimpan task akan memperbarui stage pada Project List.
                  </small>
                </div>
              </div>
            </section>

            <section class="form-section">
              <div class="section-heading">
                <span class="section-icon"><vue-feather type="file-text"></vue-feather></span>
                <div>
                  <h5>Catatan dan Bukti Kunjungan</h5>
                  <p>Tambahkan detail aktivitas, foto langsung, dan posisi saat ini.</p>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label" for="task-notes">Notes <span class="txt-danger">*</span></label>
                  <textarea
                    id="task-notes"
                    v-model.trim="form.notes"
                    class="form-control"
                    :class="{ 'is-invalid': formSubmitted && !form.notes }"
                    rows="4"
                    placeholder="Tulis hasil aktivitas atau catatan tambahan"
                  ></textarea>
                </div>

                <div class="col-lg-6">
                  <label class="form-label" for="live-photo">Live Photo <span class="txt-danger">*</span></label>
                  <div class="evidence-box" :class="{ 'evidence-error': formSubmitted && !form.photo }">
                    <input
                      id="live-photo"
                      class="form-control"
                      type="file"
                      accept="image/*"
                      capture="environment"
                      @change="handlePhoto"
                    />
                    <img v-if="photoPreview" :src="photoPreview" class="photo-preview" alt="Preview foto kunjungan" />
                    <p v-else class="mb-0 text-muted">Gunakan kamera perangkat atau pilih foto.</p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <label class="form-label">GPS Location <span class="txt-danger">*</span></label>
                  <div class="evidence-box" :class="{ 'evidence-error': formSubmitted && !hasLocation }">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      :disabled="locating"
                      @click="captureLocation"
                    >
                      <span v-if="locating" class="spinner-border spinner-border-sm me-2"></span>
                      <vue-feather v-else type="map-pin" class="me-2"></vue-feather>
                      {{ locating ? 'Mengambil lokasi...' : hasLocation ? 'Perbarui lokasi' : 'Ambil lokasi saat ini' }}
                    </button>
                    <div v-if="hasLocation" class="location-result">
                      <strong>{{ form.latitude.toFixed(6) }}, {{ form.longitude.toFixed(6) }}</strong>
                      <span>Akurasi ±{{ Math.round(form.locationAccuracy) }} meter</span>
                    </div>
                    <p v-else class="mb-0 text-muted">Izin lokasi browser diperlukan.</p>
                    <small v-if="locationError" class="text-danger">{{ locationError }}</small>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="modal-footer border-0 pt-0">
            <button class="btn btn-light" type="button" data-bs-dismiss="modal">Batal</button>
            <button class="btn btn-primary" type="submit">
              <vue-feather type="save" class="me-2"></vue-feather>
              Simpan Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch, onBeforeUnmount, defineAsyncComponent } from 'vue'
import { Modal } from 'bootstrap'
import Swal from 'sweetalert2'
import { initSelectField } from '@/core/data/common'
import { contacts, divisiList, hospitals, products } from '@/core/data/projectDeal'
import type { DealOption } from '@/core/data/projectDeal'
import { projectTab } from '@/core/data/project'
import { useTask } from '@/store/task'
import { storeToRefs } from 'pinia'
import type { SelectField } from '@/types/common'

interface ProjectOption extends DealOption {
  id: number
  status: string
  hospital: DealOption
  contact: DealOption
  division: DealOption
}

const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const taskStore = useTask()
const { projectList } = storeToRefs(taskStore)

const fallbackCategoryOptions: DealOption[] = [
  { value: 'prospecting', label: 'PROSPECTING' },
  { value: 'pengenalan', label: 'PENGENALAN' },
  { value: 'pendekatan', label: 'PENDEKATAN' },
  { value: 'follow-up', label: 'FOLLOW UP' },
  { value: 'presentasi-demo', label: 'PRESENTASI/DEMO' },
  { value: 'kirim-penawaran', label: 'KIRIM PENAWARAN' },
  { value: 'lainnya', label: 'LAINNYA: (KETIK SENDIRI)' },
]

// Untuk integrasi backend nanti, isi ref ini dengan hasil API dalam format { value, label }.
// Fallback tetap dipakai jika data kategori dari backend kosong atau gagal dimuat.
const categoryOptions = ref<DealOption[]>([...fallbackCategoryOptions])

const stageOptions: DealOption[] = projectTab
  .filter((stage) => stage.value !== 'all')
  .map((stage) => ({ value: stage.value, label: stage.title }))

function defaultSchedule() {
  const date = new Date(Date.now() + 60 * 60 * 1000)
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 16)
}

function loggedInOwner() {
  try {
    const user = JSON.parse(localStorage.getItem('user') || 'null') as { name?: string } | null
    return user?.name || 'Mark Jenco'
  } catch {
    return 'Mark Jenco'
  }
}

function initialForm() {
  return {
    category: initSelectField(),
    customCategory: '',
    owner: loggedInOwner(),
    hasProject: true,
    project: initSelectField(),
    hospital: initSelectField(),
    contact: initSelectField(),
    scheduledAt: defaultSchedule(),
    divisions: initSelectField(),
    products: initSelectField(),
    unrelatedProduct: false,
    pipeline: initSelectField(),
    notes: '',
    photo: null as File | null,
    latitude: 0,
    longitude: 0,
    locationAccuracy: 0,
  }
}

const form = reactive(initialForm())
const formSubmitted = ref(false)
const validationMessage = ref('')
const locating = ref(false)
const locationError = ref('')
const photoPreview = ref('')

const projectOptions = computed<ProjectOption[]>(() =>
  projectList.value.map((project, index) => ({
    id: project.id,
    value: project.id,
    label: project.projectName,
    status: project.status,
    hospital: hospitals[index % hospitals.length] as DealOption,
    contact: contacts[index % contacts.length] as DealOption,
    division: divisiList[index % divisiList.length] as DealOption,
  }))
)

const selectedProject = computed(() => form.project.selected as ProjectOption | null)
const selectedDivisions = computed(() => form.divisions.selectedItems as DealOption[])
const selectedProducts = computed(() => form.products.selectedItems as DealOption[])
const availableProducts = computed(() => {
  const divisionCodes = selectedDivisions.value.map((division) => division.code)
  return products.filter((product) => !product.divisi || divisionCodes.includes(product.divisi))
})
const hasLocation = computed(() => Boolean(form.latitude && form.longitude))
const isCustomCategory = computed(() => form.category.selected?.value === 'lainnya')
const selectedCategoryLabel = computed(() =>
  isCustomCategory.value
    ? form.customCategory.trim()
    : String((form.category.selected as DealOption | null)?.label || '')
)
const currentStageLabel = computed(
  () => stageOptions.find((stage) => stage.value === selectedProject.value?.status)?.label || ''
)
const taskName = computed(() => {
  const category = selectedCategoryLabel.value
  const product = form.unrelatedProduct
    ? 'Tidak Terkait Produk'
    : selectedProducts.value.map((item) => item.label).join(', ')
  const hospital = (form.hospital.selected as DealOption | null)?.label || ''
  return [category, product, hospital].filter(Boolean).join('_')
})

function selectField(option: DealOption | null): SelectField {
  return {
    selected: option,
    selectedItems: [],
    data: option?.value ? String(option.value) : '',
    errorMessage: '',
    type: 'dropdown',
  }
}

function multiSelectField(options: DealOption[]): SelectField {
  return {
    selected: null,
    selectedItems: options,
    data: options.map((option) => String(option.value)).join(','),
    errorMessage: '',
    type: 'dropdown',
  }
}

watch(
  () => form.category.selected,
  () => {
    if (!isCustomCategory.value) form.customCategory = ''
  }
)

watch(
  () => form.project.selected,
  () => {
    const project = selectedProject.value
    if (!project) return
    form.hospital = selectField(project.hospital)
    form.contact = selectField(project.contact)
    form.divisions = multiSelectField([project.division])
    const relatedProducts = products.filter((product) => product.divisi === project.division.code)
    form.products = multiSelectField(relatedProducts)
    form.unrelatedProduct = relatedProducts.length === 0
    const currentStage = stageOptions.find((stage) => stage.value === project.status) ?? null
    form.pipeline = selectField(currentStage)
  }
)

watch(
  () => form.hasProject,
  (hasProject) => {
    form.project = initSelectField()
    form.pipeline = initSelectField()
    form.hospital = initSelectField()
    form.contact = initSelectField()
    form.divisions = initSelectField()
    form.products = initSelectField()
    form.unrelatedProduct = false
    if (!hasProject) validationMessage.value = ''
  }
)

watch(
  () => form.divisions.selectedItems,
  () => {
    const validValues = new Set(availableProducts.value.map((product) => product.value))
    const validSelection = selectedProducts.value.filter((product) => validValues.has(product.value))
    if (validSelection.length !== selectedProducts.value.length) {
      form.products = multiSelectField(validSelection)
    }
  }
)

watch(
  () => form.unrelatedProduct,
  (unrelated) => {
    if (unrelated) form.products = initSelectField()
  }
)

function handlePhoto(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0] ?? null
  form.photo = file
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value)
  photoPreview.value = file ? URL.createObjectURL(file) : ''
}

function captureLocation() {
  locationError.value = ''
  if (!navigator.geolocation) {
    locationError.value = 'Browser ini tidak mendukung GPS.'
    return
  }

  locating.value = true
  navigator.geolocation.getCurrentPosition(
    (position) => {
      form.latitude = position.coords.latitude
      form.longitude = position.coords.longitude
      form.locationAccuracy = position.coords.accuracy
      locating.value = false
    },
    (error) => {
      const messages: Record<number, string> = {
        1: 'Izin lokasi ditolak. Aktifkan izin lokasi pada browser.',
        2: 'Lokasi tidak tersedia. Periksa GPS atau koneksi perangkat.',
        3: 'Pengambilan lokasi terlalu lama. Silakan coba lagi.',
      }
      locationError.value = messages[error.code] || 'Lokasi gagal diambil.'
      locating.value = false
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
  )
}

function validateForm() {
  if (!form.category.selected) return 'Kategori wajib dipilih.'
  if (isCustomCategory.value && !form.customCategory) return 'Kategori lainnya wajib diisi.'
  if (!form.owner) return 'Owner tidak tersedia.'
  if (form.hasProject && !selectedProject.value) return 'Project wajib dipilih.'
  if (!form.hospital.selected) return 'Rumah sakit/perusahaan wajib dipilih.'
  if (!form.contact.selected) return 'Kontak person wajib dipilih.'
  if (!form.scheduledAt) return 'Tanggal dan waktu wajib diisi.'
  if (!selectedDivisions.value.length) return 'Minimal satu divisi wajib dipilih.'
  if (!form.unrelatedProduct && !selectedProducts.value.length) {
    return 'Pilih minimal satu product atau centang Tidak terkait produk.'
  }
  if (form.hasProject && !form.pipeline.selected) return 'Pipeline project wajib dipilih.'
  if (!form.notes) return 'Notes wajib diisi.'
  if (!form.photo) return 'Live photo wajib diambil atau dipilih.'
  if (!hasLocation.value) return 'GPS location wajib diambil.'
  return ''
}

async function submitTask() {
  formSubmitted.value = true
  validationMessage.value = validateForm()
  if (validationMessage.value) return

  const project = selectedProject.value
  const stageTo = String(form.pipeline.selected?.value ?? '')
  let result
  try {
    result = await taskStore.createSalesTask({
      title: taskName.value,
      category: selectedCategoryLabel.value,
      owner: form.owner,
      projectId: project?.id ?? null,
      projectName: project?.label ?? '',
      hospital: String((form.hospital.selected as DealOption).label),
      contact: String((form.contact.selected as DealOption).label),
      scheduledAt: form.scheduledAt,
      divisions: selectedDivisions.value.map((item) => String(item.label)),
      products: selectedProducts.value.map((item) => String(item.label)),
      unrelatedProduct: form.unrelatedProduct,
      stageFrom: project?.status ?? '',
      stageTo,
      notes: form.notes,
      photoName: form.photo?.name ?? '',
      latitude: form.latitude,
      longitude: form.longitude,
      locationAccuracy: form.locationAccuracy,
    })
  } catch {
    validationMessage.value = taskStore.error ?? 'Task gagal disimpan. Silakan coba lagi.'
    return
  }

  if (!result) {
    validationMessage.value = 'Task gagal disimpan. Silakan coba lagi.'
    return
  }

  const stageChanged = project && project.status !== stageTo
  const modalElement = document.getElementById('taskmodel')
  if (modalElement) Modal.getOrCreateInstance(modalElement).hide()

  await Swal.fire({
    icon: 'success',
    title: 'Task berhasil disimpan',
    text: stageChanged
      ? `Stage ${project.label} diperbarui ke ${String(form.pipeline.selected?.label)}.`
      : 'Aktivitas baru sudah masuk ke daftar task.',
    confirmButtonColor: 'var(--theme-default)',
  })

  resetForm()
}

function resetForm() {
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value)
  Object.assign(form, initialForm())
  photoPreview.value = ''
  validationMessage.value = ''
  locationError.value = ''
  formSubmitted.value = false
}

onBeforeUnmount(() => {
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value)
})
</script>

<style scoped>
.task-form-modal {
  max-height: calc(100vh - 2rem);
  overflow: hidden;
  border: 0;
  border-radius: 18px;
}

.task-form-modal > form {
  display: flex;
  min-height: 0;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: hidden;
}

.task-form-modal .modal-body {
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.task-form-modal .modal-footer {
  flex: 0 0 auto;
  background: var(--white, #fff);
}

.form-section {
  padding: 22px;
  margin-bottom: 20px;
  border: 1px solid var(--recent-dashed-border, #e6e8eb);
  border-radius: 14px;
  background: var(--white, #fff);
}

.section-heading {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.section-heading h5,
.section-heading p {
  margin: 0;
}

.section-heading p {
  color: #767b84;
  font-size: 13px;
}

.section-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  border-radius: 10px;
  color: var(--theme-default);
  background: rgba(0, 102, 102, 0.1);
}

.project-choice {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 170px;
  padding: 12px 16px;
  border: 1px solid #dfe3e8;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;
}

.project-choice.active {
  color: var(--theme-default);
  border-color: var(--theme-default);
  background: rgba(0, 102, 102, 0.07);
}

.pipeline-box {
  display: grid;
  grid-template-columns: minmax(180px, 0.8fr) auto minmax(260px, 1.2fr);
  gap: 18px;
  align-items: center;
  padding: 18px;
  border-radius: 12px;
  background: #f7f9fa;
}

.current-stage {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.current-stage span {
  color: #767b84;
  font-size: 12px;
}

.current-stage strong {
  font-size: 15px;
}

.new-stage .form-label {
  margin-bottom: 6px;
}

.pipeline-arrow {
  color: var(--theme-default);
}

.evidence-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 145px;
  padding: 16px;
  border: 1px dashed #cbd1d8;
  border-radius: 12px;
}

.evidence-error {
  border-color: var(--bs-danger);
}

.photo-preview {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 9px;
}

.location-result {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.location-result span {
  color: #767b84;
  font-size: 12px;
}

@media (max-width: 767px) {
  .task-form-dialog {
    min-height: calc(100% - 1rem);
    margin: 0.5rem;
  }

  .task-form-modal {
    max-height: calc(100vh - 1rem);
  }

  .form-section {
    padding: 16px;
  }

  .pipeline-box {
    grid-template-columns: 1fr;
  }

  .pipeline-arrow {
    transform: rotate(90deg);
  }
}
</style>
