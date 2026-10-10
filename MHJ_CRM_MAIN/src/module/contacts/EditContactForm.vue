<template>
  <form class="custom-input contact-edit-form mhj-form" @submit.prevent="save">
    <div v-if="saveError" class="alert alert-danger" role="alert">{{ saveError }}</div>

    <div class="row g-3">
      <div class="col-md-6">
        <InputWrapper title="Nama Depan" required>
          <InputField
            v-model:modelValue="form.firstName"
            :formSubmitted="formSubmitted"
            inputId="edit-contact-first-name"
            placeholder="Masukkan nama depan"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Nama Belakang" required>
          <InputField
            v-model:modelValue="form.lastName"
            :formSubmitted="formSubmitted"
            inputId="edit-contact-last-name"
            placeholder="Masukkan nama belakang"
          />
        </InputWrapper>
      </div>

      <div class="col-md-6">
        <InputWrapper title="Jabatan">
          <InputField
            v-model:modelValue="form.jobTitle"
            inputId="edit-contact-job-title"
            placeholder="Masukkan jabatan"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Penanggung Jawab">
          <Select
            v-model="form.owner"
            :options="ownerOptions"
            display-key="label"
            getValueKey="value"
            placeholder="Cari nama pengguna"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-12">
        <InputWrapper title="Email">
          <InputField
            v-model:modelValue="form.email"
            inputId="edit-contact-email"
            inputType="email"
            placeholder="nama@perusahaan.com"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-12">
        <InputWrapper title="Telepon" required>
          <div
            v-for="(phone, index) in form.phoneNumbers"
            :key="index"
            class="d-flex gap-2 mb-2"
          >
            <div class="flex-grow-1">
              <InputField
                v-model:modelValue="form.phoneNumbers[index]"
                :formSubmitted="formSubmitted"
                :inputId="`edit-contact-phone-${index}`"
                inputType="tel"
                :maxLength="15"
                :formatValue="true"
                :formatFunction="sanitizeIndonesianPhoneInput"
                :validator="index === 0 ? requiredPhoneValidator : optionalPhoneValidator"
                :placeholder="
                  index === 0
                    ? 'Contoh: 081234567890 atau +6281234567890'
                    : 'Contoh nomor tambahan: 081234567890'
                "
                :required="index === 0"
              />
            </div>
            <button
              v-if="form.phoneNumbers.length > 1"
              class="btn btn-outline-danger remove-phone-button"
              type="button"
              title="Hapus nomor"
              @click="removePhone(index)"
            >
              <vue-feather type="minus" size="17" />
            </button>
          </div>
          <small class="d-block text-muted mb-3">
            Gunakan nomor HP Indonesia dengan awalan 08, 628, atau +628.
          </small>
          <button class="btn btn-primary add-phone-button" type="button" @click="addPhone">
            <vue-feather type="plus-circle" size="17" />
            <span>Tambah nomor telepon</span>
          </button>
        </InputWrapper>
      </div>

      <div class="col-12">
        <InputWrapper title="Alamat (Google Maps)">
          <div class="location-field">
            <div class="location-input-group">
              <div class="location-address-box">
                <InputField
                  v-model:modelValue="form.mapAddress"
                  inputId="edit-contact-map-address"
                  placeholder="Alamat lengkap akan muncul dari lokasi saat ini"
                  :required="false"
                />
                <button
                  v-if="form.mapAddress.data"
                  class="location-clear-button"
                  type="button"
                  title="Hapus alamat dan cari ulang"
                  aria-label="Hapus alamat dan cari ulang"
                  @click="clearCurrentAddress"
                >
                  <vue-feather type="x" size="16" />
                </button>
              </div>
              <button
                class="btn btn-outline-primary location-button"
                type="button"
                :disabled="locatingAddress"
                @click="captureCurrentAddress"
              >
                <span
                  v-if="locatingAddress"
                  class="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <vue-feather v-else type="map-pin" size="17" />
                <span>{{ locatingAddress ? 'Mencari...' : 'Cari lokasi' }}</span>
              </button>
            </div>
            <small class="text-muted">
              Alamat lengkap akan diisi dari GPS dan tetap dapat diperbaiki secara manual.
            </small>
            <small v-if="locationError" class="text-danger">{{ locationError }}</small>
          </div>
        </InputWrapper>
      </div>

      <div class="col-12">
        <InputWrapper title="Alamat">
          <InputField
            v-model:modelValue="form.address"
            inputId="edit-contact-address"
            inputType="textarea"
            placeholder="Masukkan alamat lengkap"
            :required="false"
            :rows="3"
          />
        </InputWrapper>
      </div>

      <div class="col-md-6">
        <InputWrapper title="Provinsi">
          <Select
            v-model="form.province"
            :options="provinceOptions"
            display-key="label"
            getValueKey="label"
            placeholder="Cari provinsi"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Kota">
          <Select
            v-model="form.city"
            :options="cityOptions"
            display-key="label"
            getValueKey="label"
            :placeholder="form.province.data ? 'Cari kota' : 'Pilih provinsi dahulu'"
            :disabled="!form.province.data"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-md-6">
        <InputWrapper title="Sumber">
          <Select
            v-model="form.source"
            :options="sourceOptions"
            display-key="label"
            getValueKey="value"
            placeholder="Pilih sumber kontak"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Jenis Kelamin">
          <Select
            v-model="form.gender"
            :options="genderOptions"
            display-key="label"
            getValueKey="value"
            placeholder="Pilih jenis kelamin"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-md-6">
        <InputWrapper title="Perusahaan">
          <Select
            v-model="form.company"
            :options="companyOptions"
            display-key="label"
            getValueKey="value"
            placeholder="Cari perusahaan"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Proyek">
          <Select
            v-model="form.project"
            :options="projectOptions"
            display-key="label"
            getValueKey="label"
            placeholder="Cari nama proyek"
            :required="false"
          />
        </InputWrapper>
      </div>
    </div>

    <div class="edit-actions">
      <button class="btn btn-light" type="button" :disabled="contactApi.submitting" @click="cancel">
        Batal
      </button>
      <button class="btn btn-primary" type="submit" :disabled="contactApi.submitting">
        <span
          v-if="contactApi.submitting"
          class="spinner-border spinner-border-sm me-2"
          aria-hidden="true"
        ></span>
        <vue-feather v-else type="save" size="16" class="me-2" />
        {{ contactApi.submitting ? 'Menyimpan...' : 'Simpan Perubahan' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";

import { initInputField, initSelectField } from "@/core/data/common";
import { genderOptions } from "@/core/data/contactCrm";
import { useCompanyRegions } from "@/composable/useCompanyRegions";
import { useContact, type ContactCrudPayload } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { useProjectStore } from "@/store/project";
import {
  indonesianMobilePhoneError,
  normalizeIndonesianMobilePhone,
  sanitizeIndonesianPhoneInput,
  splitPhoneNumbers,
} from "@/utils/indonesianPhone";
import {
  geolocationErrorMessage,
  getCurrentPosition,
  reverseGeocodeAddress,
} from "@/services/geocoding";

const InputWrapper = defineAsyncComponent(
  () => import("@/components/shared/formElements/InputWrapper.vue"),
);
const InputField = defineAsyncComponent(
  () => import("@/components/shared/formElements/InputField.vue"),
);
const Select = defineAsyncComponent(
  () => import("@/components/shared/formElements/Select.vue"),
);

const contactStore = useContact();
const hospitalStore = useHospitalStore();
const projectStore = useProjectStore();
const { contactState, contactApi } = storeToRefs(contactStore);
const {
  fetchContactSources,
  fetchContactStatuses,
  updateRemoteContact,
} = contactStore;

const { provinceOptions, cityOptionsByProvince, loadRegions } = useCompanyRegions();

const formSubmitted = ref(false);
const saveError = ref("");
const form = ref(createForm());
const locatingAddress = ref(false);
const locationError = ref("");
const requiredPhoneValidator = (value: string) =>
  indonesianMobilePhoneError(value, true);
const optionalPhoneValidator = (value: string) =>
  indonesianMobilePhoneError(value);
// GET /api/company (sama dengan sumber data Rumah Sakit/Perusahaan di form Project & Task).
const companyOptions = computed(() =>
  hospitalStore.items.map((hospital) => ({ value: hospital.id, label: hospital.name })),
);
// GET /api/project (sama dengan daftar di halaman Proyek List).
const projectOptions = computed(() =>
  projectStore.items.map((project) => ({ value: project.id, label: project.projectName })),
);
const ownerOptions = computed(() => projectStore.lookups.owner);
const statusOptions = computed(() => contactApi.value.statuses);
const sourceOptions = computed(() => contactApi.value.sources);
const cityOptions = computed(() => cityOptionsByProvince.value[form.value.province.data] || []);

function createForm() {
  return {
    firstName: initInputField(),
    lastName: initInputField(),
    jobTitle: initInputField(),
    owner: initSelectField(),
    email: initInputField(),
    phoneNumbers: [initInputField()],
    status: initSelectField(),
    gender: initSelectField(),
    source: initSelectField(),
    mapAddress: initInputField(),
    address: initInputField(),
    province: initSelectField(),
    city: initSelectField(),
    company: initSelectField(),
    project: initSelectField(),
  };
}

function nullableText(value: string): string | null {
  const text = value.trim();
  return text || null;
}

function nullableId(value: unknown): number | null {
  if (value === undefined || value === null || value === "") return null;
  const id = Number(value);
  return Number.isSafeInteger(id) && id >= 0 ? id : null;
}

function addPhone() {
  form.value.phoneNumbers.push(initInputField());
}

function removePhone(index: number) {
  form.value.phoneNumbers.splice(index, 1);
}

function expandCombinedPhoneRows() {
  const values = form.value.phoneNumbers.map((phone) => phone.data);
  if (!values.some((value) => /[,;|\n]/.test(value))) return;

  const phones = splitPhoneNumbers(...values);
  form.value.phoneNumbers = phones.length
    ? phones.map((phone) => ({ data: phone, errorMessage: "" }))
    : [initInputField()];
}

async function captureCurrentAddress() {
  locationError.value = "";
  locatingAddress.value = true;

  try {
    const position = await getCurrentPosition();
    const address = await reverseGeocodeAddress(
      position.coords.latitude,
      position.coords.longitude,
    );
    form.value.mapAddress.data = address;
    form.value.address.data = address;
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    locatingAddress.value = false;
  }
}

function clearCurrentAddress() {
  form.value.mapAddress.data = "";
  form.value.address.data = "";
  locationError.value = "";
}

// Mencegah watch provinsi mereset kota saat fillForm() sedang mengisi data awal.
let isFilling = false;

function fillForm() {
  const contact = contactState.value.activeContact;
  if (!contact) return;

  isFilling = true;

  form.value.firstName.data = contact.firstName || "";
  form.value.lastName.data = contact.lastName || "";
  form.value.jobTitle.data = contact.jobTitle || "";
  form.value.email.data = contact.email || "";
  form.value.mapAddress.data = contact.mapAddress || "";
  form.value.address.data = contact.address || "";

  const phones = splitPhoneNumbers(
    contact.telephone1 || contact.contactNumber,
    contact.telephone2,
    ...(contact.phoneNumbers || []),
  );
  form.value.phoneNumbers = phones.length
    ? phones.map((phone) => ({ data: phone, errorMessage: "" }))
    : [initInputField()];

  const status =
    statusOptions.value.find(
      (option) => String(option.value) === String(contact.statusId ?? 1),
    ) ?? statusOptions.value[0];
  if (status) {
    form.value.status = {
      selected: status,
      data: String(status.value),
      selectedItems: [],
      errorMessage: "",
      type: "dropdown",
    };
  }

  const gender = genderOptions.find(
    (option) => String(option.value).toLowerCase() === String(contact.gender || "").toLowerCase(),
  );
  form.value.gender = gender
    ? {
        selected: gender,
        data: String(gender.value),
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();

  const source = sourceOptions.value.find(
    (option) => String(option.value) === String(contact.sourceId),
  );
  if (source) {
    form.value.source = {
      selected: source,
      data: String(source.value),
      selectedItems: [],
      errorMessage: "",
      type: "dropdown",
    };
  }

  const owner = ownerOptions.value.find(
    (option) => option.label.trim().toLowerCase() === String(contact.owner || "").trim().toLowerCase(),
  );
  form.value.owner = owner
    ? {
        selected: owner,
        data: String(owner.value),
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();

  const company = companyOptions.value.find(
    (option) => String(option.value) === String(contact.companyId),
  );
  if (company) {
    form.value.company = {
      selected: company,
      data: String(company.value),
      selectedItems: [],
      errorMessage: "",
      type: "dropdown",
    };
  }

  const projectName = String(contact.project || "").trim().toLowerCase();
  const project = projectName
    ? projectOptions.value.find((option) => option.label.trim().toLowerCase() === projectName) ??
      projectOptions.value.find((option) => projectName.includes(option.label.trim().toLowerCase()))
    : undefined;
  form.value.project = project
    ? {
        selected: project,
        data: project.label,
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();

  const provinceLabel = String(contact.province || "").trim();
  const provinceOption = provinceLabel
    ? provinceOptions.value.find(
        (option) => option.label.trim().toLowerCase() === provinceLabel.toLowerCase(),
      )
    : undefined;
  form.value.province = provinceOption
    ? {
        selected: provinceOption,
        data: provinceOption.label,
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();

  const cityLabel = String(contact.city || "").trim();
  const cityPool = provinceOption ? cityOptionsByProvince.value[provinceOption.label] || [] : [];
  const cityOption = cityLabel
    ? cityPool.find((option) => option.label.trim().toLowerCase() === cityLabel.toLowerCase())
    : undefined;
  form.value.city = cityOption
    ? {
        selected: cityOption,
        data: cityOption.label,
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();

  isFilling = false;
}

async function save() {
  const contact = contactState.value.activeContact;
  if (!contact?.remoteId) return;

  formSubmitted.value = true;
  form.value.firstName.errorMessage = form.value.firstName.data.trim()
    ? ""
    : "Nama depan wajib diisi.";
  form.value.lastName.errorMessage = form.value.lastName.data.trim()
    ? ""
    : "Nama belakang wajib diisi.";

  let phoneNumbersValid = true;
  form.value.phoneNumbers.forEach((phone, index) => {
    phone.errorMessage = indonesianMobilePhoneError(phone.data, index === 0);
    if (phone.errorMessage) phoneNumbersValid = false;
  });

  form.value.status.errorMessage = form.value.status.data ? "" : "Status wajib dipilih.";
  if (
    form.value.firstName.errorMessage ||
    form.value.lastName.errorMessage ||
    !phoneNumbersValid ||
    form.value.status.errorMessage
  ) {
    return;
  }

  const normalizedPhoneNumbers = form.value.phoneNumbers
    .map((phone) => normalizeIndonesianMobilePhone(phone.data))
    .filter(Boolean);

  const payload: ContactCrudPayload = {
    company_id: nullableId(form.value.company.data || contact.companyId),
    first_name: form.value.firstName.data.trim(),
    last_name: form.value.lastName.data.trim(),
    job_title: nullableText(form.value.jobTitle.data),
    email: nullableText(form.value.email.data),
    status: String(form.value.status.data || contact.statusId || 1),
    telephone_1: normalizedPhoneNumbers[0] ?? "",
    telephone_2: nullableText(normalizedPhoneNumbers.slice(1).join(", ")),
    address: nullableText(form.value.address.data),
    province: nullableText(form.value.province.data),
    city: nullableText(form.value.city.data),
    // Form edit belum punya field Kode Kelurahan (sama seperti form tambah kontak), nilai lama dipertahankan.
    kelurahan: nullableText(contact.kdKelurahan || ""),
    source: nullableId(form.value.source.data || contact.sourceId),
    created_by: nullableId(form.value.owner.data) ?? contact.createdById ?? null,
  };

  saveError.value = "";
  try {
    await updateRemoteContact(contact.remoteId, payload);
    contactState.value.isEditContact = false;
  } catch {
    saveError.value = contactApi.value.error || "Gagal memperbarui kontak.";
  }
}

function cancel() {
  contactState.value.isEditContact = false;
  formSubmitted.value = false;
  saveError.value = "";
  locationError.value = "";
}

watch(
  () => [
    contactState.value.activeContact,
    companyOptions.value,
    statusOptions.value,
    sourceOptions.value,
    ownerOptions.value,
    projectOptions.value,
    provinceOptions.value,
    cityOptionsByProvince.value,
  ],
  fillForm,
  { immediate: true },
);

watch(
  () => form.value.province.data,
  (province, previousProvince) => {
    if (isFilling) return;
    if (previousProvince && province !== previousProvince) form.value.city = initSelectField();
  },
);

// Data lama dapat menyimpan beberapa nomor sekaligus di telephone_2.
// Jika nilai gabungan masuk kembali ke form, pecah langsung menjadi baris individual.
watch(
  () => form.value.phoneNumbers.map((phone) => phone.data),
  expandCombinedPhoneRows,
  { flush: "sync" },
);

onMounted(async () => {
  const requests: Promise<unknown>[] = [];
  if (!hospitalStore.items.length) requests.push(hospitalStore.fetchHospitals());
  if (!contactApi.value.sources.length) requests.push(fetchContactSources());
  if (!contactApi.value.statuses.length) requests.push(fetchContactStatuses());
  if (!projectStore.lookups.owner.length) requests.push(projectStore.fetchProjectLookups());
  if (!projectStore.loaded) requests.push(projectStore.fetchProjects());
  requests.push(loadRegions());
  await Promise.allSettled(requests);
  fillForm();
});
</script>

<style scoped>
.contact-edit-form {
  padding: 4px;
}

.edit-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
}

.add-phone-button {
  display: inline-flex;
  width: 100%;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
}

.remove-phone-button {
  display: inline-flex;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
}

.location-field {
  display: grid;
  gap: 7px;
}

.location-input-group {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
}

.location-address-box {
  position: relative;
  min-width: 0;
}

.location-address-box :deep(.form-control) {
  height: 46px;
  padding-right: 42px;
}

.location-clear-button {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-flex;
  width: 28px;
  height: 28px;
  padding: 0;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: #eef2f6;
  color: #667085;
}

.location-clear-button:hover {
  background: #e2e8f0;
  color: #344054;
}

.location-button {
  display: inline-flex;
  min-width: 156px;
  height: 46px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
}

@media (max-width: 575.98px) {
  .location-input-group {
    grid-template-columns: minmax(0, 1fr) 132px;
  }

  .location-button {
    min-width: 132px;
    padding-inline: 10px;
  }
}
</style>
