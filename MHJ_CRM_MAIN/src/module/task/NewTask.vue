<template>
  <div
    :id="modalId"
    class="modal fade"
    tabindex="-1"
    :aria-labelledby="`${modalId}-title`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable task-form-dialog">
      <div class="modal-content task-form-modal">
        <div class="modal-header border-0 pb-0">
          <div>
            <span class="badge badge-light-primary mb-2">{{
              formMeta.badge
            }}</span>
            <h4 :id="`${modalId}-title`" class="modal-title">
              {{ formMeta.title }}
            </h4>
            <p class="mb-0 text-muted">
              {{ formMeta.description }}
            </p>
          </div>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Tutup"
          ></button>
        </div>

        <form
          class="needs-validation mhj-form"
          novalidate
          @submit.prevent="submitTask"
        >
          <div class="modal-body pt-4">
            <div
              v-if="validationMessage"
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <vue-feather type="alert-circle" class="me-2"></vue-feather>
              <span>{{ validationMessage }}</span>
            </div>

            <section class="form-section">
              <div class="section-heading">
                <span class="section-icon"
                  ><vue-feather type="clipboard"></vue-feather
                ></span>
                <div>
                  <h5>Informasi Task</h5>
                  <p>Kategori, penanggung jawab, dan jadwal aktivitas.</p>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label" :for="`${modalId}-task-name`"
                    >Nama Tugas</label
                  >
                  <input
                    :id="`${modalId}-task-name`"
                    class="form-control auto-filled-input"
                    type="text"
                    :value="taskName"
                    placeholder="Otomatis: Kategori_Produk_Perusahaan"
                    readonly
                  />
                  <small class="text-muted">
                    Nama terbentuk otomatis dari kategori, produk, dan
                    perusahaan.
                  </small>
                </div>

                <div class="col-md-6">
                  <label class="form-label"
                    >Kategori <span class="txt-danger">*</span></label
                  >
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
                    :class="{
                      'is-invalid': formSubmitted && !form.customCategory,
                    }"
                    type="text"
                    placeholder="Ketik kategori lainnya"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label" :for="`${modalId}-task-owner`"
                    >Owner {{ formMeta.shortLabel }}
                    <span class="txt-danger">*</span></label
                  >
                  <input
                    :id="`${modalId}-task-owner`"
                    v-model="form.owner"
                    class="form-control auto-filled-input"
                    :class="{ 'is-invalid': formSubmitted && !form.owner }"
                    type="text"
                    readonly
                  />
                  <small class="text-muted"
                    >Mengikuti user yang sedang login.</small
                  >
                </div>
              </div>
            </section>

            <section class="form-section">
              <div class="section-heading">
                <span class="section-icon"
                  ><vue-feather type="briefcase"></vue-feather
                ></span>
                <div>
                  <h5>Konteks Peluang</h5>
                  <p>
                    Hubungkan task ke peluang untuk mengisi data otomatis dan
                    memperbarui pipeline.
                  </p>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label d-block"
                    >{{ opportunityLabel }}
                    <span class="txt-danger">*</span></label
                  >
                  <div class="d-flex flex-wrap gap-3">
                    <label
                      class="project-choice"
                      :class="{ active: form.hasProject }"
                    >
                      <input
                        v-model="form.hasProject"
                        type="radio"
                        :value="true"
                      />
                      <span>{{ taskType === "sales" ? "Ada" : "Ya" }}</span>
                    </label>
                    <label
                      class="project-choice"
                      :class="{ active: !form.hasProject }"
                    >
                      <input
                        v-model="form.hasProject"
                        type="radio"
                        :value="false"
                      />
                      <span>{{
                        taskType === "sales" ? "Tidak ada" : "Tidak"
                      }}</span>
                    </label>
                  </div>
                </div>

                <div v-if="form.hasProject" class="col-12">
                  <label class="form-label"
                    >Pilih Peluang Real CRM
                    <span class="txt-danger">*</span></label
                  >
                  <Select
                    v-model="form.project"
                    :options="projectOptions"
                    placeholder="Pilih peluang dari database..."
                    display-key="label"
                    get-value-key="value"
                    :form-submitted="formSubmitted"
                  />
                </div>

                <template v-if="showContextFields">
                  <div class="col-12">
                    <label class="form-label"
                      >Rumah Sakit <span class="txt-danger">*</span></label
                    >
                    <Select
                      v-model="form.hospital"
                      :options="hospitalOptions"
                      placeholder="Cari dan pilih rumah sakit"
                      display-key="label"
                      get-value-key="value"
                      :form-submitted="formSubmitted"
                      :disabled="form.hasProject"
                      :disable-clear-button="form.hasProject"
                    />
                    <small v-if="form.hasProject" class="text-muted"
                      >Rumah sakit mengikuti peluang yang dipilih.</small
                    >
                  </div>

                  <div class="col-12">
                    <label class="form-label"
                      >Kontak <span class="txt-danger">*</span></label
                    >
                    <Select
                      v-model="form.contact"
                      :options="availableContacts"
                      placeholder="Nama Kontak / Dokter / PIC"
                      display-key="label"
                      get-value-key="value"
                      :multi-select="form.hasProject"
                      :form-submitted="formSubmitted"
                      :removable-tags="form.hasProject"
                    />
                  </div>

                  <div class="col-12">
                    <label
                      class="form-label"
                      :for="`${modalId}-task-contact-phone`"
                    >
                      Nomor Telepon / WA <span class="txt-danger">*</span>
                    </label>
                    <input
                      :id="`${modalId}-task-contact-phone`"
                      v-model.trim="form.contactPhone"
                      class="form-control"
                      :class="{
                        'is-invalid': formSubmitted && !form.contactPhone,
                      }"
                      type="tel"
                      placeholder="0812-xxxx-xxxx"
                    />
                  </div>

                  <div class="col-12">
                    <label class="form-label" :for="`${modalId}-task-schedule`">
                      Tanggal dan Waktu Kunjungan
                      <span class="txt-danger">*</span>
                    </label>
                    <input
                      :id="`${modalId}-task-schedule`"
                      v-model="form.scheduledAt"
                      class="form-control"
                      :class="{
                        'is-invalid': formSubmitted && !form.scheduledAt,
                      }"
                      type="datetime-local"
                    />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label"
                      >Divisi <span class="txt-danger">*</span></label
                    >
                    <Select
                      v-model="form.divisions"
                      :options="projectStore.lookups.divisi"
                      placeholder="Pilih Divisi"
                      display-key="label"
                      get-value-key="value"
                      :multi-select="!form.hasProject"
                      :form-submitted="formSubmitted"
                      :disabled="form.hasProject"
                      :disable-clear-button="form.hasProject"
                      :removable-tags="!form.hasProject"
                    />
                    <small v-if="form.hasProject" class="text-muted"
                      >Divisi mengikuti peluang dan tidak dapat diubah dari
                      task.</small
                    >
                  </div>

                  <div class="col-md-6">
                    <label class="form-label"
                      >Product
                      <span v-if="!form.unrelatedProduct" class="txt-danger"
                        >*</span
                      ></label
                    >
                    <Select
                      v-if="!form.unrelatedProduct"
                      v-model="form.products"
                      :options="availableProducts"
                      :placeholder="
                        availableProducts.length
                          ? 'Pilih satu atau lebih product'
                          : 'Tidak ada product untuk divisi ini'
                      "
                      display-key="label"
                      get-value-key="value"
                      :multi-select="true"
                      :disabled="!selectedDivisions.length"
                      :required="true"
                      :form-submitted="formSubmitted"
                      :removable-tags="true"
                    />
                    <div
                      class="form-check"
                      :class="{ 'mt-2': !form.unrelatedProduct }"
                    >
                      <input
                        :id="`${modalId}-unrelated-product`"
                        v-model="form.unrelatedProduct"
                        class="form-check-input"
                        type="checkbox"
                      />
                      <label
                        class="form-check-label"
                        :for="`${modalId}-unrelated-product`"
                        >Tidak Terkait Produk Tertentu</label
                      >
                    </div>
                  </div>

                  <div
                    v-if="form.hasProject && taskType === 'sales'"
                    class="col-12"
                  >
                    <div class="pipeline-box">
                      <div class="current-stage">
                        <span>Stage saat ini</span>
                        <strong>{{ currentStageLabel || "-" }}</strong>
                      </div>
                      <vue-feather
                        type="arrow-right"
                        class="pipeline-arrow"
                      ></vue-feather>
                      <div class="new-stage">
                        <label class="form-label"
                          >Pipeline Peluang
                          <span class="txt-danger">*</span></label
                        >
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
                      Menyimpan task akan memperbarui stage pada Daftar Peluang.
                    </small>
                  </div>

                  <div v-if="taskType === 'app-specialist'" class="col-12">
                    <label
                      class="form-label"
                      :for="`${modalId}-task-serial-number`"
                    >
                      Serial Number <span class="txt-danger">*</span>
                    </label>
                    <input
                      :id="`${modalId}-task-serial-number`"
                      v-model.trim="form.serialNumber"
                      class="form-control"
                      :class="{
                        'is-invalid': formSubmitted && !form.serialNumber,
                      }"
                      type="text"
                      :readonly="form.hasProject"
                      :placeholder="
                        form.hasProject
                          ? 'Terisi otomatis dari peluang'
                          : 'Masukkan serial number produk'
                      "
                    />
                    <small class="text-muted">
                      {{
                        form.hasProject
                          ? "Serial number mengikuti data produk pada peluang Sales."
                          : "Isi serial number perangkat yang ditangani."
                      }}
                    </small>
                  </div>
                </template>
              </div>
            </section>

            <section class="form-section">
              <div class="section-heading">
                <span class="section-icon"
                  ><vue-feather type="file-text"></vue-feather
                ></span>
                <div>
                  <h5>Catatan dan Bukti Kunjungan</h5>
                  <p>
                    Tambahkan detail aktivitas, foto langsung, dan posisi saat
                    ini.
                  </p>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label" :for="`${modalId}-task-notes`"
                    >Notes / Agenda</label
                  >
                  <textarea
                    :id="`${modalId}-task-notes`"
                    v-model.trim="form.notes"
                    class="form-control"
                    rows="4"
                    placeholder="Tambahkan agenda pertemuan atau detail tugas (opsional)..."
                  ></textarea>
                </div>

                <div class="col-lg-6">
                  <label class="form-label">Live Photo (Watermark GPS)</label>
                  <div class="evidence-box">
                    <template v-if="cameraOpen">
                      <video
                        ref="videoRef"
                        class="camera-preview"
                        autoplay
                        muted
                        playsinline
                      ></video>
                      <div class="evidence-actions evidence-actions--split">
                        <button
                          class="btn btn-primary evidence-main-button"
                          type="button"
                          @click="capturePhoto"
                        >
                          <vue-feather type="camera" class="me-2"></vue-feather>
                          Ambil Foto
                        </button>
                        <button
                          class="btn btn-outline-secondary evidence-main-button"
                          type="button"
                          @click="stopCamera"
                        >
                          Tutup Kamera
                        </button>
                      </div>
                    </template>
                    <template v-else-if="photoPreview">
                      <img
                        :src="photoPreview"
                        class="photo-preview"
                        alt="Preview foto kunjungan"
                      />
                      <div class="evidence-actions evidence-actions--primary">
                        <button
                          class="btn btn-outline-primary evidence-main-button"
                          type="button"
                          @click="openCamera"
                        >
                          <vue-feather
                            type="refresh-cw"
                            class="me-2"
                          ></vue-feather>
                          Foto Ulang
                        </button>
                        <button
                          class="btn btn-outline-danger icon-button"
                          type="button"
                          aria-label="Hapus foto"
                          @click="removePhoto"
                        >
                          <vue-feather type="x" size="17"></vue-feather>
                        </button>
                      </div>
                    </template>
                    <template v-else>
                      <button
                        class="btn btn-outline-primary evidence-main-button w-100"
                        type="button"
                        :disabled="cameraStarting"
                        @click="openCamera"
                      >
                        <span
                          v-if="cameraStarting"
                          class="spinner-border spinner-border-sm me-2"
                        ></span>
                        <vue-feather
                          v-else
                          type="camera"
                          class="me-2"
                        ></vue-feather>
                        {{
                          cameraStarting ? "Membuka kamera..." : "Buka Kamera"
                        }}
                      </button>
                      <p class="mb-0 text-muted">
                        Foto hanya dapat diambil langsung melalui kamera
                        perangkat.
                      </p>
                    </template>
                    <small v-if="cameraError" class="text-danger">{{
                      cameraError
                    }}</small>
                  </div>
                </div>

                <div class="col-lg-6">
                  <label class="form-label">GPS &amp; Pin Point</label>
                  <div class="evidence-box">
                    <div class="evidence-actions evidence-actions--primary">
                      <button
                        class="btn btn-outline-primary evidence-main-button"
                        type="button"
                        :disabled="locating"
                        @click="captureLocation"
                      >
                        <span
                          v-if="locating"
                          class="spinner-border spinner-border-sm me-2"
                        ></span>
                        <vue-feather
                          v-else
                          type="map-pin"
                          class="me-2"
                        ></vue-feather>
                        {{
                          locating
                            ? "Mengambil lokasi..."
                            : hasLocation
                              ? "Cari ulang lokasi"
                              : "Cari lokasi saat ini"
                        }}
                      </button>
                      <button
                        v-if="hasLocation"
                        class="btn btn-outline-danger icon-button"
                        type="button"
                        aria-label="Hapus lokasi"
                        @click="clearLocation"
                      >
                        <vue-feather type="x" size="17"></vue-feather>
                      </button>
                    </div>
                    <div v-if="hasLocation" class="location-result">
                      <label
                        class="form-label mb-1"
                        :for="`${modalId}-location-address`"
                        >Alamat lokasi</label
                      >
                      <div v-if="resolvingAddress" class="address-loading">
                        <span class="spinner-border spinner-border-sm"></span>
                        <span>Mencari alamat...</span>
                      </div>
                      <textarea
                        v-else
                        :id="`${modalId}-location-address`"
                        v-model.trim="form.locationAddress"
                        class="form-control location-address-input"
                        rows="3"
                        placeholder="Alamat tidak ditemukan. Tulis atau revisi alamat lokasi di sini."
                      ></textarea>
                    </div>
                    <p v-else class="mb-0 text-muted">
                      Izin lokasi browser diperlukan.
                    </p>
                    <small v-if="locationError" class="text-danger">{{
                      locationError
                    }}</small>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="modal-footer border-0 pt-0">
            <button class="btn btn-light" type="button" data-bs-dismiss="modal">
              Batal
            </button>
            <button class="btn btn-primary" type="submit">
              <vue-feather type="save" class="me-2"></vue-feather>
              {{
                isEditing
                  ? "Simpan Perubahan"
                  : `Simpan Tugas ${formMeta.shortLabel}`
              }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  reactive,
  ref,
  watch,
  onBeforeUnmount,
  onMounted,
  nextTick,
  defineAsyncComponent,
} from "vue";
import { Modal } from "bootstrap";
import Swal from "sweetalert2";
import { initSelectField } from "@/core/data/common";
import {
  contacts as fallbackContacts,
  hospitals as fallbackHospitals,
} from "@/core/data/projectDeal";
import type { DealOption } from "@/core/data/projectDeal";
import { projectTab } from "@/core/data/project";
import { useTask } from "@/store/task";
import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { useProjectStore } from "@/store/project";
import {
  geolocationErrorMessage,
  getCurrentPosition,
  reverseGeocodeAddress,
} from "@/services/geocoding";
import { storeToRefs } from "pinia";
import type { SelectField } from "@/types/common";
import type { Contact } from "@/types/contacts";
import type { TaskDetails, TaskKind, TaskPayload } from "@/types/tasks";

interface ProjectOption extends DealOption {
  id: number;
  status: string;
  hospital: DealOption | null;
  contacts: DealOption[];
  division: DealOption | null;
  serialNumber: string;
}

const props = withDefaults(
  defineProps<{
    taskType?: TaskKind;
    modalId?: string;
    task?: TaskDetails | null;
  }>(),
  {
    taskType: "sales",
    modalId: "taskmodel",
  },
);
const emit = defineEmits<{
  saved: [task: TaskDetails | null];
}>();

const Select = defineAsyncComponent(
  () => import("@/components/shared/formElements/Select.vue"),
);
const taskStore = useTask();
const contactStore = useContact();
const hospitalStore = useHospitalStore();
const projectStore = useProjectStore();
const { projectList } = storeToRefs(taskStore);
const taskType = computed(() => props.taskType);
const modalId = computed(() => props.modalId);
const isEditing = computed(() => Boolean(props.task?.id));

const formMeta = computed(() =>
  taskType.value === "sales"
    ? {
        badge: isEditing.value ? "Edit Sales Activity" : "Sales Activity",
        title: isEditing.value ? "Edit Tugas Sales" : "Form Tugas Sales",
        shortLabel: "Sales",
        description:
          "Catat aktivitas dan perbarui stage peluang dalam satu form.",
      }
    : {
        badge: isEditing.value
          ? "Edit Application Specialist Activity"
          : "Application Specialist Activity",
        title: isEditing.value
          ? "Edit Tugas Application Specialist"
          : "Form Tugas Application Specialist",
        shortLabel: "App Specialist",
        description:
          "Catat pendampingan aplikasi, produk, dan perangkat dalam satu form.",
      },
);
const opportunityLabel = computed(() =>
  taskType.value === "sales" ? "Peluang" : "Terkait Peluang Sales?",
);

const fallbackCategoryOptions: DealOption[] = [
  { value: "prospecting", label: "Prospecting" },
  { value: "pengenalan", label: "Pengenalan" },
  { value: "pendekatan", label: "Pendekatan" },
  { value: "follow-up", label: "Follow Up" },
  { value: "presentasi-demo", label: "Presentasi/Demo" },
  { value: "kirim-penawaran", label: "Kirim Penawaran" },
  { value: "lainnya", label: "Lainnya: (Ketik Sendiri)" },
];

// Untuk integrasi backend nanti, isi ref ini dengan hasil API dalam format { value, label }.
// Fallback tetap dipakai jika data kategori dari backend kosong atau gagal dimuat.
const categoryOptions = ref<DealOption[]>([...fallbackCategoryOptions]);

const stageOptions: DealOption[] = projectTab
  .filter((stage) => stage.value !== "all")
  .map((stage) => ({ value: stage.value, label: stage.title }));

function defaultSchedule() {
  const date = new Date(Date.now() + 60 * 60 * 1000);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}

function loggedInOwner() {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "null") as {
      name?: string;
    } | null;
    return user?.name?.trim() || "";
  } catch {
    return "";
  }
}

function initialForm() {
  return {
    category: initSelectField(),
    customCategory: "",
    owner: loggedInOwner(),
    hasProject: false,
    project: initSelectField(),
    hospital: initSelectField(),
    contact: initSelectField(),
    contactPhone: "",
    scheduledAt: defaultSchedule(),
    divisions: initSelectField(),
    products: initSelectField(),
    unrelatedProduct: false,
    pipeline: initSelectField(),
    notes: "",
    photo: null as File | null,
    latitude: 0,
    longitude: 0,
    locationAccuracy: 0,
    locationAddress: "",
    serialNumber: "",
  };
}

const form = reactive(initialForm());
const formSubmitted = ref(false);
const validationMessage = ref("");
const locating = ref(false);
const locationError = ref("");
const resolvingAddress = ref(false);
const photoPreview = ref("");
const existingPhotoName = ref("");
const videoRef = ref<HTMLVideoElement | null>(null);
const cameraOpen = ref(false);
const cameraStarting = ref(false);
const cameraError = ref("");
const hydrating = ref(false);
let cameraStream: MediaStream | null = null;
let addressRequestId = 0;

function normalizeRelation(value: string) {
  return value.trim().toLocaleLowerCase("id-ID");
}

function toContactOption(contact: Contact): DealOption {
  return {
    value: contact.remoteId ?? contact.id,
    label:
      `${contact.firstName} ${contact.lastName}`.trim() ||
      contact.contactNumber ||
      contact.email ||
      `Kontak #${contact.remoteId ?? contact.id}`,
  };
}

const apiContactOptions = computed<DealOption[]>(() =>
  contactStore.contactApi.items
    .filter((contact) => contact.origin === "api")
    .map(toContactOption),
);
const contactOptions = computed<DealOption[]>(() =>
  apiContactOptions.value.length ? apiContactOptions.value : fallbackContacts,
);
const hospitalOptions = computed<DealOption[]>(() =>
  hospitalStore.items.length
    ? hospitalStore.items.map((hospital) => ({
        value: hospital.id,
        label: hospital.name,
      }))
    : fallbackHospitals,
);

function contactsForProject(projectName: string) {
  const normalizedProject = normalizeRelation(projectName);
  const related = contactStore.contactApi.items.filter((contact) => {
    if (contact.origin !== "api" || !contact.project) return false;
    const contactProjects = contact.project
      .split(/[,;|]/)
      .map(normalizeRelation)
      .filter(Boolean);
    return contactProjects.some(
      (project) =>
        project === normalizedProject || project.includes(normalizedProject),
    );
  });

  if (related.length) return related.map(toContactOption);
  const hasProjectRelations = contactStore.contactApi.items.some(
    (contact) => contact.origin === "api" && Boolean(contact.project),
  );
  return hasProjectRelations ? [] : contactOptions.value;
}

function hospitalForProject(projectName: string, fallbackIndex: number) {
  const normalizedProject = normalizeRelation(projectName);
  const relatedContact = contactStore.contactApi.items.find(
    (contact) =>
      contact.origin === "api" &&
      contact.project &&
      normalizeRelation(contact.project).includes(normalizedProject) &&
      contact.company,
  );
  const relatedHospital = relatedContact?.company
    ? hospitalOptions.value.find(
        (hospital) =>
          normalizeRelation(hospital.label) ===
          normalizeRelation(relatedContact.company || ""),
      )
    : undefined;
  return (
    relatedHospital ??
    hospitalOptions.value[fallbackIndex % hospitalOptions.value.length]
  );
}

function divisionForProject(projectName: string, fallbackIndex: number) {
  const normalizedProject = normalizeRelation(projectName);
  const barang = projectStore.lookups.barang;
  const divisi = projectStore.lookups.divisi;
  const relatedProduct = barang.find((product) =>
    normalizedProject.includes(normalizeRelation(product.label)),
  );
  return (
    divisi.find((division) => division.code === relatedProduct?.divisiCode) ??
    divisi[fallbackIndex % (divisi.length || 1)]
  );
}

const projectOptions = computed<ProjectOption[]>(() =>
  projectList.value.map((project, index) => {
    const hospital = project.companyName
      ? {
          value: project.companyId ?? project.companyName,
          label: project.companyName,
        }
      : (hospitalForProject(project.projectName, index) ?? null);
    const contacts = project.contactName
      ? [
          {
            value: project.contactId ?? project.contactName,
            label: project.contactName,
          },
        ]
      : contactsForProject(project.projectName);
    const division = project.divisionCode
      ? (projectStore.lookups.divisi.find(
          (item) => item.code === project.divisionCode,
        ) ?? null)
      : (divisionForProject(project.projectName, index) ?? null);

    return {
      id: project.id,
      value: project.id,
      label: project.projectName,
      status: project.status,
      hospital,
      contacts,
      division,
      serialNumber: project.serialNumber || "",
    };
  }),
);

const selectedProject = computed(
  () => form.project.selected as ProjectOption | null,
);
const showContextFields = computed(
  () => !form.hasProject || Boolean(selectedProject.value),
);
const availableContacts = computed(() =>
  form.hasProject
    ? (selectedProject.value?.contacts ?? [])
    : contactOptions.value,
);
const selectedDivisions = computed<DealOption[]>(() => {
  if (form.hasProject) {
    const division = form.divisions.selected as DealOption | null;
    return division ? [division] : [];
  }
  return form.divisions.selectedItems as DealOption[];
});
const selectedContacts = computed<DealOption[]>(() => {
  if (form.hasProject) return form.contact.selectedItems as DealOption[];
  const contact = form.contact.selected as DealOption | null;
  return contact ? [contact] : [];
});
const selectedCompanyLabel = computed(() => {
  const selectedHospital = (form.hospital.selected as DealOption | null)?.label;
  if (selectedHospital) return selectedHospital;

  const selectedIds = new Set(
    selectedContacts.value.map((contact) => String(contact.value)),
  );
  const selectedLabels = new Set(
    selectedContacts.value.map((contact) =>
      normalizeRelation(String(contact.label)),
    ),
  );
  const relatedContact = contactStore.contactApi.items.find((contact) => {
    const id = String(contact.remoteId ?? contact.id);
    const name = normalizeRelation(`${contact.firstName} ${contact.lastName}`);
    return selectedIds.has(id) || selectedLabels.has(name);
  });

  return relatedContact?.company || "";
});
const selectedContactPhone = computed(() => {
  const selectedIds = new Set(
    selectedContacts.value.map((contact) => String(contact.value)),
  );
  const selectedLabels = new Set(
    selectedContacts.value.map((contact) =>
      normalizeRelation(String(contact.label)),
    ),
  );

  const phones = contactStore.contactApi.items
    .filter((contact) => {
      const id = String(contact.remoteId ?? contact.id);
      const name = normalizeRelation(
        `${contact.firstName} ${contact.lastName}`,
      );
      return selectedIds.has(id) || selectedLabels.has(name);
    })
    .map(
      (contact) =>
        contact.telephone1 ||
        contact.contactNumber ||
        contact.phoneNumbers?.[0] ||
        "",
    )
    .map((phone) => phone.trim())
    .filter(Boolean);

  return [...new Set(phones)].join(", ");
});
const selectedProducts = computed(
  () => form.products.selectedItems as DealOption[],
);
const availableProducts = computed(() => {
  const divisionCodes = selectedDivisions.value.map(
    (division) => division.code,
  );
  return projectStore.lookups.barang.filter(
    (product) =>
      !product.divisiCode || divisionCodes.includes(product.divisiCode),
  );
});
const hasLocation = computed(() => Boolean(form.latitude && form.longitude));
const isCustomCategory = computed(
  () => form.category.selected?.value === "lainnya",
);
const selectedCategoryLabel = computed(() =>
  isCustomCategory.value
    ? form.customCategory.trim()
    : String((form.category.selected as DealOption | null)?.label || ""),
);
const currentStageLabel = computed(
  () =>
    stageOptions.find((stage) => stage.value === selectedProject.value?.status)
      ?.label || "",
);
const taskName = computed(() => {
  const category = selectedCategoryLabel.value;
  const product = form.unrelatedProduct
    ? "Tidak Terkait Produk"
    : selectedProducts.value.map((item) => item.label).join(", ");
  return [category, product, selectedCompanyLabel.value]
    .filter(Boolean)
    .join("_");
});

function selectField(option: DealOption | null): SelectField {
  return {
    selected: option,
    selectedItems: [],
    data: option?.value ? String(option.value) : "",
    errorMessage: "",
    type: "dropdown",
  };
}

function multiSelectField(options: DealOption[]): SelectField {
  return {
    selected: null,
    selectedItems: options,
    data: options.map((option) => String(option.value)).join(","),
    errorMessage: "",
    type: "dropdown",
  };
}

function optionForLabel(
  options: DealOption[],
  label: string,
): DealOption | null {
  const normalized = normalizeRelation(label);
  if (!normalized) return null;
  return (
    options.find(
      (option) => normalizeRelation(String(option.label)) === normalized,
    ) ?? {
      value: label,
      label,
    }
  );
}

function optionsForLabels(
  options: DealOption[],
  labels: string[] = [],
): DealOption[] {
  return labels
    .map((label) => optionForLabel(options, label))
    .filter((option): option is DealOption => Boolean(option));
}

function contactLabels(value = "") {
  const exact = optionForLabel(contactOptions.value, value);
  if (
    exact &&
    contactOptions.value.some((option) => option.value === exact.value)
  )
    return [value];
  return value
    .split(/[,;|]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function toDateTimeLocal(value = "") {
  const normalized = value.trim().replace(" ", "T");
  const match = normalized.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2})/);
  if (match?.[1]) return match[1];
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return defaultSchedule();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}

async function hydrateForm(task: TaskDetails) {
  hydrating.value = true;
  Object.assign(form, initialForm());

  const category = categoryOptions.value.find(
    (option) =>
      normalizeRelation(String(option.label)) ===
      normalizeRelation(task.category || ""),
  );
  form.category = selectField(
    category ??
      categoryOptions.value.find((item) => item.value === "lainnya") ??
      null,
  );
  form.customCategory = category ? "" : task.category || "";
  form.owner = task.owner || loggedInOwner();
  form.hasProject = Boolean(task.projectId || task.projectName);

  const hospital = optionForLabel(
    hospitalOptions.value,
    task.hospital || task.subtitle || "",
  );
  const contacts = optionsForLabels(
    contactOptions.value,
    contactLabels(task.contact),
  );
  const divisions = optionsForLabels(
    projectStore.lookups.divisi,
    task.divisions,
  );
  const products = optionsForLabels(projectStore.lookups.barang, task.products);

  if (form.hasProject) {
    const project = projectOptions.value.find(
      (option) =>
        option.id === task.projectId || option.label === task.projectName,
    ) ?? {
      id: task.projectId ?? 0,
      value: task.projectId ?? task.projectName ?? "",
      label: task.projectName || `Peluang #${task.projectId}`,
      status: task.stageFrom || task.stageTo || "",
      hospital,
      contacts,
      division: divisions[0] ?? null,
      serialNumber: task.serialNumber || "",
    };
    form.project = selectField(project);
  }

  form.hospital = selectField(hospital);
  form.contact = form.hasProject
    ? multiSelectField(contacts)
    : selectField(contacts[0] ?? null);
  form.contactPhone = task.contactPhone || "";
  form.scheduledAt = toDateTimeLocal(task.scheduledAt || task.dueDate);
  form.divisions = form.hasProject
    ? selectField(divisions[0] ?? null)
    : multiSelectField(divisions);
  form.products = multiSelectField(products);
  form.unrelatedProduct = Boolean(task.unrelatedProduct);
  form.pipeline = selectField(
    stageOptions.find((stage) => stage.value === task.stageTo) ?? null,
  );
  form.notes = task.description || "";
  form.latitude = task.latitude || 0;
  form.longitude = task.longitude || 0;
  form.locationAccuracy = task.locationAccuracy || 0;
  form.locationAddress = task.locationAddress || "";
  form.serialNumber = task.serialNumber || "";
  form.photo = null;
  existingPhotoName.value = task.photoName || "";
  photoPreview.value = task.photoUrl || "";
  validationMessage.value = "";
  formSubmitted.value = false;

  await nextTick();
  hydrating.value = false;
}

watch(
  () => form.category.selected,
  () => {
    if (!isCustomCategory.value) form.customCategory = "";
  },
);

watch(
  () => form.project.selected,
  () => {
    if (hydrating.value) return;
    const project = selectedProject.value;
    if (!project) return;
    form.hospital = selectField(project.hospital);
    form.contact = multiSelectField(project.contacts);
    form.divisions = selectField(project.division);
    const relatedProducts = projectStore.lookups.barang.filter(
      (product) => product.divisiCode === project.division?.code,
    );
    form.products = multiSelectField(relatedProducts);
    form.unrelatedProduct = relatedProducts.length === 0;
    const currentStage =
      stageOptions.find((stage) => stage.value === project.status) ?? null;
    form.pipeline = selectField(currentStage);
    form.serialNumber = project.serialNumber;
  },
);

watch(
  () => form.hasProject,
  (hasProject) => {
    if (hydrating.value) return;
    form.project = initSelectField();
    form.pipeline = initSelectField();
    form.hospital = initSelectField();
    form.contact = initSelectField();
    form.contactPhone = "";
    form.divisions = initSelectField();
    form.products = initSelectField();
    form.unrelatedProduct = false;
    form.serialNumber = "";
    if (!hasProject) validationMessage.value = "";
  },
);

watch(selectedContactPhone, (phone) => {
  if (!hydrating.value) form.contactPhone = phone;
});

watch(
  () => [form.divisions.selected, form.divisions.selectedItems],
  () => {
    if (hydrating.value) return;
    const validValues = new Set(
      availableProducts.value.map((product) => product.value),
    );
    const validSelection = selectedProducts.value.filter((product) =>
      validValues.has(product.value),
    );
    if (validSelection.length !== selectedProducts.value.length) {
      form.products = multiSelectField(validSelection);
    }
  },
);

watch(
  () => form.unrelatedProduct,
  (unrelated) => {
    if (hydrating.value) return;
    if (unrelated) form.products = initSelectField();
  },
);

function stopCamera() {
  cameraStream?.getTracks().forEach((track) => track.stop());
  cameraStream = null;
  if (videoRef.value) videoRef.value.srcObject = null;
  cameraOpen.value = false;
  cameraStarting.value = false;
}

async function openCamera() {
  cameraError.value = "";
  stopCamera();
  if (!navigator.mediaDevices?.getUserMedia) {
    cameraError.value = "Browser ini tidak mendukung akses kamera langsung.";
    return;
  }

  cameraStarting.value = true;
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false,
    });
    cameraOpen.value = true;
    await nextTick();
    if (videoRef.value) {
      videoRef.value.srcObject = cameraStream;
      await videoRef.value.play();
    }
  } catch {
    stopCamera();
    cameraError.value =
      "Kamera tidak dapat dibuka. Pastikan izin kamera sudah diberikan.";
  } finally {
    cameraStarting.value = false;
  }
}

async function capturePhoto() {
  const video = videoRef.value;
  if (!video?.videoWidth || !video.videoHeight) {
    cameraError.value = "Kamera belum siap. Silakan coba beberapa saat lagi.";
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");
  if (!context) {
    cameraError.value = "Foto gagal diproses. Silakan coba lagi.";
    return;
  }
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.9),
  );
  if (!blob) {
    cameraError.value = "Foto gagal diproses. Silakan coba lagi.";
    return;
  }

  form.photo = new File([blob], `live-photo-${Date.now()}.jpg`, {
    type: "image/jpeg",
  });
  existingPhotoName.value = form.photo.name;
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value);
  photoPreview.value = URL.createObjectURL(form.photo);
  cameraError.value = "";
  stopCamera();
}

function removePhoto() {
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value);
  form.photo = null;
  existingPhotoName.value = "";
  photoPreview.value = "";
  cameraError.value = "";
}

async function resolveLocationAddress(latitude: number, longitude: number) {
  const requestId = ++addressRequestId;
  resolvingAddress.value = true;
  form.locationAddress = "";
  try {
    const address = await reverseGeocodeAddress(latitude, longitude);
    if (requestId !== addressRequestId) return;
    form.locationAddress = address;
    if (!form.locationAddress) {
      locationError.value =
        "Alamat tidak ditemukan. Silakan isi alamat lokasi secara manual.";
    }
  } catch {
    if (requestId !== addressRequestId) return;
    locationError.value =
      "Lokasi ditemukan, tetapi alamat gagal dimuat. Silakan isi secara manual.";
  } finally {
    if (requestId === addressRequestId) resolvingAddress.value = false;
  }
}

async function captureLocation() {
  locationError.value = "";
  locating.value = true;
  try {
    const position = await getCurrentPosition();
    form.latitude = position.coords.latitude;
    form.longitude = position.coords.longitude;
    form.locationAccuracy = position.coords.accuracy;
    await resolveLocationAddress(
      position.coords.latitude,
      position.coords.longitude,
    );
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    locating.value = false;
  }
}

function clearLocation() {
  addressRequestId += 1;
  resolvingAddress.value = false;
  form.latitude = 0;
  form.longitude = 0;
  form.locationAccuracy = 0;
  form.locationAddress = "";
  locationError.value = "";
}

function validateForm() {
  const errors: string[] = [];
  const categoryMissing = !form.category.selected;
  const projectMissing = form.hasProject && !selectedProject.value;
  const contactMissing = !selectedContacts.value.length;
  const divisionMissing = !selectedDivisions.value.length;
  const productMissing =
    !form.unrelatedProduct && !selectedProducts.value.length;
  const hospitalMissing = !selectedCompanyLabel.value;
  const pipelineMissing =
    taskType.value === "sales" && form.hasProject && !form.pipeline.selected;
  const serialNumberMissing =
    taskType.value === "app-specialist" && !form.serialNumber;

  form.category.errorMessage = categoryMissing ? "Kategori wajib dipilih." : "";
  form.project.errorMessage = projectMissing ? "Peluang wajib dipilih." : "";
  form.contact.errorMessage = contactMissing ? "Kontak wajib dipilih." : "";
  form.divisions.errorMessage = divisionMissing ? "Divisi wajib dipilih." : "";
  form.products.errorMessage = productMissing ? "Product wajib dipilih." : "";
  form.pipeline.errorMessage = pipelineMissing
    ? "Pipeline peluang wajib dipilih."
    : "";
  form.hospital.errorMessage = hospitalMissing
    ? "Rumah sakit wajib dipilih."
    : "";

  if (categoryMissing) errors.push("Kategori wajib dipilih.");
  if (isCustomCategory.value && !form.customCategory)
    errors.push("Kategori lainnya wajib diisi.");
  if (!form.owner)
    errors.push(`Owner ${formMeta.value.shortLabel} tidak tersedia.`);
  if (projectMissing) errors.push("Peluang wajib dipilih.");
  if (hospitalMissing) errors.push("Rumah sakit wajib dipilih.");
  if (contactMissing) errors.push("Kontak wajib dipilih.");
  if (!form.contactPhone) errors.push("Nomor Telepon / WA wajib diisi.");
  if (!form.scheduledAt)
    errors.push("Tanggal dan waktu kunjungan wajib diisi.");
  if (divisionMissing) errors.push("Minimal satu divisi wajib dipilih.");
  if (productMissing)
    errors.push(
      "Pilih minimal satu product atau centang Tidak Terkait Produk Tertentu.",
    );
  if (pipelineMissing) errors.push("Pipeline peluang wajib dipilih.");
  if (serialNumberMissing) errors.push("Serial number wajib diisi.");
  return errors[0] ?? "";
}

async function submitTask() {
  formSubmitted.value = true;
  validationMessage.value = validateForm();
  if (validationMessage.value) return;

  const project = selectedProject.value;
  const stageTo =
    taskType.value === "sales"
      ? String(form.pipeline.selected?.value ?? "")
      : "";
  const payload: TaskPayload = {
    taskType: taskType.value,
    title: taskName.value,
    category: selectedCategoryLabel.value,
    owner: form.owner,
    assignedId: props.task?.assignedId ?? null,
    projectId: form.hasProject
      ? project?.id || props.task?.projectId || null
      : null,
    projectName: form.hasProject
      ? (project?.label ?? props.task?.projectName ?? "")
      : "",
    hospital: selectedCompanyLabel.value,
    contact: selectedContacts.value
      .map((item) => String(item.label))
      .join(", "),
    contactPhone: form.contactPhone,
    scheduledAt: form.scheduledAt,
    divisions: selectedDivisions.value.map((item) => String(item.label)),
    products: selectedProducts.value.map((item) => String(item.label)),
    unrelatedProduct: form.unrelatedProduct,
    stageFrom: form.hasProject
      ? (project?.status ?? props.task?.stageFrom ?? "")
      : "",
    stageTo,
    notes: form.notes,
    photo: form.photo,
    photoName: form.photo?.name ?? existingPhotoName.value,
    latitude: form.latitude,
    longitude: form.longitude,
    locationAccuracy: form.locationAccuracy,
    locationAddress: form.locationAddress,
    serialNumber: form.serialNumber,
  };
  let result;
  try {
    result =
      isEditing.value && props.task
        ? await taskStore.updateTask({ ...payload, id: props.task.id })
        : await taskStore.createTask(payload);
  } catch {
    validationMessage.value =
      taskStore.error ??
      (isEditing.value
        ? "Perubahan task gagal disimpan. Silakan coba lagi."
        : "Task gagal disimpan. Silakan coba lagi.");
    return;
  }

  if (!result) {
    validationMessage.value = isEditing.value
      ? "Perubahan task gagal disimpan. Silakan coba lagi."
      : "Task gagal disimpan. Silakan coba lagi.";
    return;
  }

  const stageChanged =
    taskType.value === "sales" && project && project.status !== stageTo;
  const modalElement = document.getElementById(modalId.value);
  if (modalElement) Modal.getOrCreateInstance(modalElement).hide();

  await Swal.fire({
    icon: "success",
    title: isEditing.value
      ? `Task ${formMeta.value.shortLabel} berhasil diperbarui`
      : `Task ${formMeta.value.shortLabel} berhasil disimpan`,
    text: stageChanged
      ? `Stage ${project.label} diperbarui ke ${String(form.pipeline.selected?.label)}.`
      : isEditing.value
        ? "Perubahan task sudah tersimpan."
        : "Aktivitas baru sudah masuk ke daftar task.",
    confirmButtonColor: "var(--theme-default)",
  });

  emit("saved", result);
  if (!isEditing.value) resetForm();
}

function resetForm() {
  stopCamera();
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value);
  Object.assign(form, initialForm());
  photoPreview.value = "";
  existingPhotoName.value = "";
  validationMessage.value = "";
  locationError.value = "";
  cameraError.value = "";
  formSubmitted.value = false;
}

function handleModalHidden() {
  stopCamera();
}

function handleModalShow() {
  if (props.task) void hydrateForm(props.task);
}

onMounted(async () => {
  const requests: Promise<unknown>[] = [];
  if (!projectStore.loaded)
    requests.push(projectStore.fetchProjects({ per_page: 100 }));
  if (!contactStore.contactApi.items.length) {
    requests.push(contactStore.fetchRemoteContacts({ per_page: 100 }));
  }
  if (!hospitalStore.items.length)
    requests.push(hospitalStore.fetchHospitals({ per_page: 100 }));
  if (!projectStore.lookups.divisi.length)
    requests.push(projectStore.fetchProjectCatalog());
  const modalElement = document.getElementById(modalId.value);
  modalElement?.addEventListener("hidden.bs.modal", handleModalHidden);
  modalElement?.addEventListener("show.bs.modal", handleModalShow);
  await Promise.allSettled(requests);
  if (props.task) await hydrateForm(props.task);
});

onBeforeUnmount(() => {
  stopCamera();
  if (photoPreview.value) URL.revokeObjectURL(photoPreview.value);
  const modalElement = document.getElementById(modalId.value);
  modalElement?.removeEventListener("hidden.bs.modal", handleModalHidden);
  modalElement?.removeEventListener("show.bs.modal", handleModalShow);
});
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

.auto-filled-input,
.auto-filled-input:focus {
  color: #000 !important;
  font-weight: 400;
  background: #eef2f5 !important;
  opacity: 1;
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

.evidence-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
}

.evidence-actions--primary {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
}

.evidence-actions--split {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.evidence-main-button {
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 9px;
  white-space: nowrap;
}

.icon-button {
  display: inline-flex;
  width: 54px;
  height: 54px;
  flex: 0 0 54px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 9px;
}

.camera-preview {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 9px;
  background: #111827;
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
  gap: 6px;
}

.address-loading {
  display: flex;
  min-height: 86px;
  align-items: center;
  justify-content: center;
  gap: 9px;
  color: #767b84;
  border: 1px solid #d9dee5;
  border-radius: 9px;
  background: #f8fafc;
}

.location-address-input {
  min-height: 86px;
  resize: vertical;
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

  .evidence-actions--split {
    grid-template-columns: 1fr;
  }
}
</style>
