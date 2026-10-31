<template>
  <form
    class="form-bookmark needs-validation custom-input contact-edit-form mhj-form"
    @submit.prevent="save"
  >
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
        <InputWrapper title="Nama Belakang">
          <InputField
            v-model:modelValue="form.lastName"
            inputId="edit-contact-last-name"
            placeholder="Masukkan nama belakang"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-12">
        <InputWrapper title="Jabatan">
          <InputField
            v-model:modelValue="form.jobTitle"
            inputId="edit-contact-job-title"
            placeholder="Masukkan jabatan"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-12">
        <InputWrapper title="Email">
          <InputField
            v-model:modelValue="form.email"
            :formSubmitted="formSubmitted"
            inputId="edit-contact-email"
            inputType="email"
            placeholder="nama@rumahsakit.com"
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
                    ? 'Contoh: 081234567890'
                    : 'Contoh nomor tambahan: 081234567890'
                "
                :required="index === 0"
              />
            </div>
            <button
              v-if="form.phoneNumbers.length > 1"
              class="btn btn-outline-danger mhj-phone-remove-button"
              type="button"
              title="Hapus nomor"
              aria-label="Hapus nomor telepon"
              @click="removePhone(index)"
            >
              <span class="mhj-phone-remove-symbol" aria-hidden="true">−</span>
            </button>
          </div>
          <small class="d-block text-muted mb-3">
            Minimal 8 digit, diawali dengan 08 atau 62.
          </small>
          <button
            class="btn btn-link btn-sm mt-1 mhj-form-add-button"
            type="button"
            :disabled="!canAddPhone"
            :title="addPhoneHint || 'Tambah nomor'"
            @click="addPhone"
          >
            <MhjIcon name="action_add" :size="14" />Tambah nomor
          </button>
          <small v-if="addPhoneHint" class="d-block text-muted mt-1">
            {{ addPhoneHint }}
          </small>
        </InputWrapper>
      </div>

      <div class="col-12">
        <InputWrapper title="Alamat (Google Maps)">
          <div class="location-field">
            <div class="location-input-group">
              <div
                class="location-address-box"
                @focusout="handleAddressFieldBlur"
              >
                <InputField
                  v-model:modelValue="form.mapAddress"
                  inputId="edit-contact-map-address"
                  placeholder="Ketik nama faskes atau alamat..."
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

                <ul
                  v-if="addressSuggestions.length || searchingAddress"
                  class="address-suggestions"
                >
                  <li
                    v-if="searchingAddress"
                    class="address-suggestion-status"
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    Mencari lokasi...
                  </li>
                  <li
                    v-for="suggestion in addressSuggestions"
                    :key="`${suggestion.latitude}-${suggestion.longitude}`"
                    class="address-suggestion-item"
                    @mousedown.prevent="selectAddressSuggestion(suggestion)"
                  >
                    <span class="address-suggestion-icon">
                      <SolarIcon name="fa-location-dot" />
                    </span>
                    <span class="address-suggestion-copy">
                      <strong class="address-suggestion-title">
                        {{ suggestionTitle(suggestion) }}
                      </strong>
                      <span
                        v-if="suggestionDetail(suggestion)"
                        class="address-suggestion-detail"
                      >
                        {{ suggestionDetail(suggestion) }}
                      </span>
                      <span class="address-suggestion-meta">
                        <span
                          v-if="suggestionRegion(suggestion)"
                          class="address-suggestion-chip"
                        >
                          {{ suggestionRegion(suggestion) }}
                        </span>
                        <small v-if="formatDistanceKm(suggestion.distanceKm)">
                          {{ formatDistanceKm(suggestion.distanceKm) }}
                        </small>
                      </span>
                    </span>
                    <vue-feather
                      type="chevron-right"
                      size="16"
                      class="address-suggestion-chevron"
                    />
                  </li>
                </ul>
              </div>
              <button
                class="btn btn-outline-primary location-button"
                type="button"
                :disabled="locatingAddress"
                :title="
                  form.mapAddress.data.trim()
                    ? 'Cari lokasi dari teks yang diketik'
                    : 'Gunakan lokasi GPS saat ini'
                "
                @click="handleLocateClick"
              >
                <span
                  v-if="locatingAddress"
                  class="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <SolarIcon
                  v-else
                  name="magnifier"
                  class="location-button__icon"
                  :size="18"
                  color="currentColor"
                  secondary-color="currentColor"
                  :secondary-opacity="0.42"
                  aria-hidden="true"
                />
                <span>{{ locatingAddress ? 'Mencari...' : 'Cari lokasi' }}</span>
              </button>
            </div>

            <div
              v-if="selectedLocation"
              class="location-preview map-z-index"
            >
              <GoogleMapView
                :center="selectedLocation"
                :zoom="16"
                :markers="[{ lat: selectedLocation.lat, lng: selectedLocation.lng, draggable: true }]"
                cursor="crosshair"
                style="height: 220px"
                @click="onMapClick"
                @marker-dragend="onMarkerDragEnd"
              />
              <p class="location-preview-address">
                <SolarIcon name="fa-location-dot" />
                <span>
                  {{ form.mapAddress.data || 'Alamat tidak tersedia' }}
                  <em v-if="pinUpdating">(memperbarui alamat...)</em>
                </span>
              </p>
              <small class="location-preview-hint">
                Klik di peta atau geser pin untuk membetulkan titik lokasi.
              </small>
            </div>

            <small
              v-if="!addressSuggestions.length && !searchingAddress"
              class="text-muted"
            >
              Ketik nama tempat atau alamat untuk melihat rekomendasi lokasi,
              atau gunakan GPS.
            </small>
            <small v-if="addressSearchNoResult" class="text-muted">
              Lokasi tidak ditemukan, coba kata kunci lain.
            </small>
            <small v-if="locationError" class="text-danger">{{ locationError }}</small>
            <small v-if="addressSearchError" class="text-danger">
              {{ addressSearchError }}
            </small>
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
            :rows="2"
          />
        </InputWrapper>
      </div>

      <div class="col-md-6">
        <InputWrapper title="Provinsi" required>
          <Select
            v-model="form.province"
            :options="provinceOptions"
            display-key="label"
            getValueKey="label"
            placeholder="Cari provinsi"
            :disabled="regionFieldsLocked"
            :formSubmitted="formSubmitted"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Kota" required>
          <Select
            v-model="form.city"
            :options="cityOptions"
            display-key="label"
            getValueKey="label"
            :placeholder="form.province.data ? 'Cari kota' : 'Pilih provinsi dahulu'"
            :disabled="regionFieldsLocked || !form.province.data"
            :formSubmitted="formSubmitted"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Sumber" required>
          <Select
            v-model="form.source"
            :options="sourceOptions"
            display-key="label"
            getValueKey="value"
            placeholder="Pilih sumber kontak"
            :formSubmitted="formSubmitted"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Jenis Kelamin" required>
          <Select
            v-model="form.gender"
            :options="genderOptions"
            display-key="label"
            getValueKey="value"
            placeholder="Pilih jenis kelamin"
            :formSubmitted="formSubmitted"
          />
        </InputWrapper>
      </div>

      <div class="col-md-6">
        <InputWrapper title="Faskes">
          <Select
            v-model="form.company"
            :options="companyOptions"
            @update:modelValue="pruneProjectsForCompanies"
            display-key="label"
            subtitle-key="address"
            getValueKey="value"
            placeholder="Cari faskes"
            :multiSelect="true"
            :removableTags="true"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Peluang">
          <Select
            v-model="form.project"
            :options="filteredProjectOptions"
            :remoteSearch="true"
            :searching="contactApi.projectSearching"
            @search="onProjectSearch"
            display-key="label"
            subtitle-key="address"
            getValueKey="value"
            :placeholder="companySelected ? 'Cari nama peluang' : 'Pilih Faskes dahulu'"
            :disabled="!companySelected"
            :multiSelect="true"
            :removableTags="true"
            :required="false"
          />
        </InputWrapper>
      </div>
    </div>

    <div class="modal-footer edit-actions">
      <button class="btn btn-light" type="button" :disabled="contactApi.submitting" @click="cancel">
        Batal
      </button>
      <button class="btn btn-primary" type="submit" :disabled="contactApi.submitting">
        {{ contactApi.submitting ? 'Menyimpan...' : 'Simpan Perubahan' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useDebounceFn } from "@vueuse/core";
import GoogleMapView from "@/components/GoogleMapView.vue";

import { initInputField, initSelectField } from "@/core/data/common";
import { genderOptions } from "@/core/data/contactCrm";
import { useCompanyRegions } from "@/composable/useCompanyRegions";
import { usePhoneNumberList } from "@/composable/usePhoneNumberList";
import { useProjectsByCompany } from "@/composable/useProjectsByCompany";
import { useUserLocation } from "@/composable/useUserLocation";
import {
  INDONESIA_COUNTRY,
  useContact,
  type ContactCrudPayload,
} from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { useProjectStore } from "@/store/project";
import {
  indonesianMobilePhoneError,
  normalizeIndonesianMobilePhone,
  sanitizeIndonesianPhoneInput,
  splitPhoneNumbers,
} from "@/utils/indonesianPhone";
import {
  formatDistanceKm,
  geolocationErrorMessage,
  getCurrentPosition,
  reverseGeocodeLocation,
  searchAddress,
  type AddressSearchResult,
} from "@/services/geocoding";
import { showSaveSuccess } from "@/utils/feedback";
import Swal from "sweetalert2";

const emit = defineEmits<{
  cancel: [];
  saved: [];
}>();

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
  fetchContactLookups,
  searchContactProjects,
  fetchContactSources,
  fetchContactStatuses,
  updateRemoteContact,
} = contactStore;

const { provinceOptions, cityOptionsByProvince, loadRegions, resolveRegionSelection } =
  useCompanyRegions();

const formSubmitted = ref(false);
const form = ref(createForm());
const locatingAddress = ref(false);
const locationError = ref("");
const addressSuggestions = ref<AddressSearchResult[]>([]);
const searchingAddress = ref(false);
const addressSearchError = ref("");
const addressSearchNoResult = ref(false);
const selectedLocation = ref<{ lat: number; lng: number } | null>(null);
const regionFieldsLocked = computed(() => selectedLocation.value !== null);
const pinUpdating = ref(false);
let suppressNextAddressSearch = false;
const { ensureLocation } = useUserLocation();
const requiredPhoneValidator = (value: string) =>
  indonesianMobilePhoneError(value, true);
const optionalPhoneValidator = (value: string) =>
  indonesianMobilePhoneError(value);
// Lookup langsung dari API (GET /api/contact/company & GET /api/contact/project), lihat fetchContactLookups.
const companyOptions = computed(() => contactApi.value.companyLookup);
const projectOptions = computed(() => contactApi.value.projectLookup);
// Peluang selalu milik sebuah Faskes, jadi dropdown-nya baru aktif setelah Faskes dipilih.
const companySelected = computed(
  () => (form.value.company.selectedItems ?? []).length > 0,
);
const {
  filteredProjectOptions,
  pruneProjectsForCompanies,
  onProjectSearch,
  resetProjectSearch,
} = useProjectsByCompany({
  projectOptions,
  searchResults: computed(() => contactApi.value.projectSearchResults),
  searchProjects: searchContactProjects,
  companyField: () => form.value.company,
  projectField: () => form.value.project,
  setProjectField: (field) => (form.value.project = field),
});
// Snapshot ID relasi saat form diisi; *_ids hanya dikirim bila pilihan berubah,
// supaya relasi yang belum dikirim API tidak terhapus saat simpan.
let initialCompanyIds = "";
let initialProjectIds = "";

function selectedIdList(field: { selectedItems?: { value: string | number }[] }): number[] {
  return (field.selectedItems ?? [])
    .map((item) => nullableId(item.value))
    .filter((id): id is number => id !== null);
}

function idListKey(ids: (string | number)[]): string {
  return ids.map(String).sort().join(",");
}

function multiSelectField(options: { value: string | number; label: string }[]) {
  if (!options.length) return initSelectField();
  return {
    ...initSelectField(),
    selectedItems: options,
    data: options.map((option) => String(option.value)).join(","),
  };
}
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
    country: initInputField(),
    posCode: initInputField(),
    kdKelurahan: initInputField(),
    province: initSelectField(),
    city: initSelectField(),
    latitude: initInputField(),
    longitude: initInputField(),
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

function nullableNumber(value: unknown): number | null {
  if (value === undefined || value === null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

const { canAddPhone, addPhoneHint, addPhone, removePhone } = usePhoneNumberList(
  () => form.value.phoneNumbers,
);

function expandCombinedPhoneRows() {
  const values = form.value.phoneNumbers.map((phone) => phone.data);
  if (!values.some((value) => /[,;|\n]/.test(value))) return;

  const phones = splitPhoneNumbers(...values);
  form.value.phoneNumbers = phones.length
    ? phones.map((phone) => ({ data: phone, errorMessage: "" }))
    : [initInputField()];
}

function normalizeRegionName(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("id-ID")
    .replace(/^(kota|kabupaten)\s+/, "");
}

function setLocationRegions(provinceName: string, cityName: string) {
  const { province, city } = resolveRegionSelection(provinceName, cityName);

  suppressProvinceCityReset = form.value.province.data !== (province?.label ?? "");
  form.value.province = province
    ? {
        selected: province,
        data: province.label,
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();

  form.value.city = city
    ? {
        selected: city,
        data: city.label,
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();
}

function applyLocationFields(
  location: {
    address: string;
    country: string;
    province: string;
    city: string;
    posCode: string;
  },
  latitude: number,
  longitude: number,
) {
  suppressNextAddressSearch = true;
  form.value.mapAddress.data = location.address;
  form.value.mapAddress.errorMessage = "";
  form.value.address.data = location.address;
  form.value.address.errorMessage = "";
  form.value.latitude.data = String(latitude);
  form.value.longitude.data = String(longitude);
  form.value.country.data = INDONESIA_COUNTRY;
  form.value.posCode.data = location.posCode;
  form.value.kdKelurahan.data = "";
  selectedLocation.value = { lat: latitude, lng: longitude };
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;
  locationError.value = "";
  setLocationRegions(location.province, location.city);
}

function suggestionTitle(suggestion: AddressSearchResult): string {
  return suggestion.name || (suggestion.address.split(",")[0] ?? "").trim();
}

function suggestionDetail(suggestion: AddressSearchResult): string {
  if (suggestion.name) return suggestion.address;
  return suggestion.address.split(",").slice(1).join(",").trim();
}

function suggestionRegion(suggestion: AddressSearchResult): string {
  const area = [suggestion.city, suggestion.province].filter(Boolean).join(", ");
  return [area, suggestion.posCode].filter(Boolean).join(" ");
}

function selectAddressSuggestion(suggestion: AddressSearchResult) {
  applyLocationFields(suggestion, suggestion.latitude, suggestion.longitude);
}

function handleAddressFieldBlur() {
  window.setTimeout(() => {
    addressSuggestions.value = [];
    addressSearchNoResult.value = false;
  }, 150);
}

const runAddressSearch = useDebounceFn(async (query: string) => {
  const trimmed = query.trim();
  if (trimmed.length < 3) {
    addressSuggestions.value = [];
    addressSearchNoResult.value = false;
    return;
  }

  searchingAddress.value = true;
  addressSearchError.value = "";
  addressSearchNoResult.value = false;
  try {
    const location = await ensureLocation();
    const results = await searchAddress(
      trimmed,
      location ? { lat: location.lat, lon: location.lon } : undefined,
    );
    addressSuggestions.value = results;
    addressSearchNoResult.value = results.length === 0;
  } catch {
    addressSuggestions.value = [];
    addressSearchError.value = "Pencarian lokasi gagal. Coba lagi.";
  } finally {
    searchingAddress.value = false;
  }
}, 500);

async function applyPickedLocation(latitude: number, longitude: number) {
  suppressNextAddressSearch = true;
  selectedLocation.value = { lat: latitude, lng: longitude };
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;
  locationError.value = "";
  pinUpdating.value = true;

  try {
    const location = await reverseGeocodeLocation(latitude, longitude);
    applyLocationFields(location, latitude, longitude);
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    pinUpdating.value = false;
  }
}

function onMapClick(position: { lat: number; lng: number }) {
  void applyPickedLocation(position.lat, position.lng);
}

function onMarkerDragEnd(payload: { index: number; lat: number; lng: number }) {
  void applyPickedLocation(payload.lat, payload.lng);
}

async function searchTypedAddress(query: string) {
  locationError.value = "";
  locatingAddress.value = true;
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;

  try {
    const location = await ensureLocation();
    const [best] = await searchAddress(
      query,
      location ? { lat: location.lat, lon: location.lon } : undefined,
    );
    if (!best) {
      locationError.value = "Lokasi tidak ditemukan. Coba kata kunci lain.";
      return;
    }
    selectAddressSuggestion(best);
  } catch {
    locationError.value = "Pencarian lokasi gagal. Coba lagi.";
  } finally {
    locatingAddress.value = false;
  }
}

async function captureCurrentAddress() {
  locationError.value = "";
  locatingAddress.value = true;

  try {
    const position = await getCurrentPosition();
    const { latitude, longitude } = position.coords;
    const location = await reverseGeocodeLocation(latitude, longitude);
    applyLocationFields(location, latitude, longitude);
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    locatingAddress.value = false;
  }
}

function handleLocateClick() {
  const query = form.value.mapAddress.data.trim();
  if (query) {
    void searchTypedAddress(query);
  } else {
    void captureCurrentAddress();
  }
}

function clearCurrentAddress() {
  suppressNextAddressSearch = true;
  form.value.mapAddress.data = "";
  form.value.address.data = "";
  form.value.latitude.data = "";
  form.value.longitude.data = "";
  form.value.country.data = "";
  form.value.posCode.data = "";
  form.value.kdKelurahan.data = "";
  form.value.mapAddress.errorMessage = "";
  selectedLocation.value = null;
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;
  addressSearchError.value = "";
  locationError.value = "";
}

// Mencegah watch provinsi mereset kota saat data awal atau hasil Maps sedang diterapkan.
let isFilling = false;
let suppressProvinceCityReset = false;

watch(
  () => form.value.mapAddress.data,
  (value) => {
    if (isFilling) return;
    if (suppressNextAddressSearch) {
      suppressNextAddressSearch = false;
      return;
    }
    if (String(value ?? "").trim()) {
      form.value.mapAddress.errorMessage = "";
    }
    selectedLocation.value = null;
    form.value.latitude.data = "";
    form.value.longitude.data = "";
    void runAddressSearch(String(value ?? ""));
  },
);

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
  const companyLocation = [hospitalStore.selectedItem, ...hospitalStore.items].find(
    (company) => company && String(company.id) === String(contact.companyId),
  );
  form.value.country.data = contact.country || companyLocation?.country || "";
  form.value.posCode.data = contact.posCode || companyLocation?.posCode || "";
  form.value.kdKelurahan.data = contact.kdKelurahan || companyLocation?.kdKelurahan || "";
  form.value.latitude.data = contact.latitude == null ? "" : String(contact.latitude);
  form.value.longitude.data = contact.longitude == null ? "" : String(contact.longitude);

  if (contact.latitude != null && contact.longitude != null) {
    selectedLocation.value = { lat: Number(contact.latitude), lng: Number(contact.longitude) };
  } else {
    selectedLocation.value = null;
  }

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

  const rawGender = String(contact.gender || "").trim().toLowerCase();
  const normalizedGender = rawGender.includes("laki")
    ? "laki-laki"
    : rawGender.includes("perempuan") || rawGender.includes("wanita")
      ? "perempuan"
      : rawGender;
  const gender = genderOptions.find(
    (option) => String(option.value).toLowerCase() === normalizedGender,
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

  // Daftar relasi dari contact_company / contact_project; fallback ke kolom tunggal lama.
  const companyIds = contact.companyIds ?? (contact.companyId ? [contact.companyId] : []);
  // ID yang belum ada di daftar opsi (mis. halaman Faskes belum dimuat) tetap dipertahankan.
  const companies = companyIds.map(
    (id, index) =>
      companyOptions.value.find((option) => String(option.value) === String(id)) ?? {
        value: Number(id),
        label:
          contact.companyNames?.[index] ||
          (String(id) === String(contact.companyId) && contact.company) ||
          `Faskes #${id}`,
        address: "",
      },
  );
  form.value.company = multiSelectField(companies);
  initialCompanyIds = idListKey(companies.map((option) => option.value));

  const projectName = String(contact.project || "").trim().toLowerCase();
  const projectIds = contact.projectIds ?? (contact.projectId ? [contact.projectId] : []);
  let projects = projectIds.map(
    (id, index) =>
      projectOptions.value.find((option) => String(option.value) === String(id)) ?? {
        value: Number(id),
        label:
          contact.projectNames?.[index] ||
          (String(id) === String(contact.projectId) && contact.project) ||
          `Peluang #${id}`,
        address: "",
      },
  );
  if (!projects.length && projectName) {
    const byName =
      projectOptions.value.find((option) => option.label.trim().toLowerCase() === projectName) ??
      projectOptions.value.find((option) => projectName.includes(option.label.trim().toLowerCase()));
    if (byName) projects = [byName];
  }
  form.value.project = multiSelectField(projects);
  initialProjectIds = idListKey(projects.map((option) => option.value));

  const provinceLabel = String(contact.province || companyLocation?.province || "").trim();
  const cityLabel = String(contact.city || companyLocation?.city || "").trim();
  setLocationRegions(provinceLabel, cityLabel);

  isFilling = false;
}

async function save() {
  const contact = contactState.value.activeContact;
  if (!contact?.remoteId) return;

  formSubmitted.value = true;
  form.value.firstName.errorMessage = form.value.firstName.data.trim()
    ? ""
    : "Nama depan wajib diisi.";
  form.value.email.errorMessage = "";

  let phoneNumbersValid = true;
  form.value.phoneNumbers.forEach((phone, index) => {
    phone.errorMessage = indonesianMobilePhoneError(phone.data, index === 0);
    if (phone.errorMessage) phoneNumbersValid = false;
  });

  form.value.status.errorMessage = form.value.status.data ? "" : "Status wajib dipilih.";
  form.value.province.errorMessage = form.value.province.data ? "" : "Provinsi wajib dipilih.";
  form.value.city.errorMessage = form.value.city.data ? "" : "Kota wajib dipilih.";
  form.value.source.errorMessage = form.value.source.data ? "" : "Sumber wajib dipilih.";
  form.value.gender.errorMessage = form.value.gender.data ? "" : "Jenis kelamin wajib dipilih.";
  const errors: string[] = [];
  if (form.value.firstName.errorMessage) errors.push(form.value.firstName.errorMessage);
  if (!phoneNumbersValid) errors.push("Nomor telepon belum valid.");
  if (form.value.status.errorMessage) errors.push(form.value.status.errorMessage);
  if (form.value.province.errorMessage) errors.push(form.value.province.errorMessage);
  if (form.value.city.errorMessage) errors.push(form.value.city.errorMessage);
  if (form.value.source.errorMessage) errors.push(form.value.source.errorMessage);
  if (form.value.gender.errorMessage) errors.push(form.value.gender.errorMessage);
  if (errors.length) {
    void Swal.fire({
      icon: "warning",
      title: "Data belum lengkap",
      html: errors.map((e) => `• ${e}`).join("<br>"),
      confirmButtonColor: "var(--theme-default)",
    });
    return;
  }

  const normalizedPhoneNumbers = form.value.phoneNumbers
    .map((phone) => normalizeIndonesianMobilePhone(phone.data))
    .filter(Boolean);
  const selectedGender = form.value.gender.selected;
  const companyIds = selectedIdList(form.value.company);
  const projectIds = selectedIdList(form.value.project);
  const firstProject = form.value.project.selectedItems?.[0];

  const payload: ContactCrudPayload = {
    // Kolom tunggal di tabel contacts diisi pilihan pertama; seluruh pilihan dikirim via *_ids.
    company_id: companyIds[0] ?? null,
    first_name: form.value.firstName.data.trim(),
    last_name: form.value.lastName.data.trim(),
    job_title: nullableText(form.value.jobTitle.data),
    email: nullableText(form.value.email.data),
    status: String(form.value.status.data || contact.statusId || 1),
    telephone_1: normalizedPhoneNumbers[0] ?? "",
    telephone_2: nullableText(normalizedPhoneNumbers.slice(1).join(" ")),
    address: nullableText(form.value.address.data),
    country: INDONESIA_COUNTRY,
    province: nullableText(form.value.province.data),
    city: nullableText(form.value.city.data),
    pos_code: nullableText(form.value.posCode.data),
    kelurahan: nullableText(form.value.kdKelurahan.data),
    gender: nullableText(selectedGender?.label || form.value.gender.data),
    project_name: nullableText(firstProject?.label ?? ""),
    project_id: projectIds[0] ?? null,
    latitude: nullableNumber(form.value.latitude.data),
    longitude: nullableNumber(form.value.longitude.data),
    source: nullableId(form.value.source.data || contact.sourceId),
    created_by: nullableId(form.value.owner.data) ?? contact.createdById ?? null,
  };
  if (idListKey(companyIds) !== initialCompanyIds) payload.company_ids = companyIds;
  if (idListKey(projectIds) !== initialProjectIds) payload.project_ids = projectIds;

  try {
    await updateRemoteContact(contact.remoteId, payload);
    await showSaveSuccess({ entity: "Kontak", action: "updated" });
    emit("saved");
  } catch {
    void Swal.fire({
      icon: "error",
      title: "Gagal menyimpan",
      text: contactApi.value.error || "Gagal memperbarui kontak.",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}

function cancel() {
  emit("cancel");
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
    hospitalStore.selectedItem,
    hospitalStore.items,
  ],
  fillForm,
  { immediate: true },
);

watch(
  () => form.value.province.data,
  (province, previousProvince) => {
    if (isFilling) return;
    if (suppressProvinceCityReset) {
      suppressProvinceCityReset = false;
      return;
    }
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
  requests.push(fetchContactLookups());
  requests.push(loadRegions());
  await Promise.allSettled(requests);
  fillForm();
  void resetProjectSearch();
});
</script>

<style scoped>
.contact-edit-form {
  padding: 4px;
}

.edit-actions {
  margin-top: 24px;
}

.location-field {
  display: grid;
  gap: 7px;
}

.location-input-group {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
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

.address-suggestions {
  position: absolute;
  z-index: 30;
  top: calc(100% + 4px);
  right: 0;
  left: 0;
  display: grid;
  gap: 8px;
  max-height: 360px;
  margin: 0;
  overflow-y: auto;
  list-style: none;
  border: 1px solid #e3e8eb;
  border-radius: 12px;
  padding: 8px;
  background: #fff;
  box-shadow: 0 10px 24px rgba(16, 24, 40, 0.12);
}

.address-suggestion-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  color: #667085;
  font-size: 12px;
}

.address-suggestion-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid #e3e8eb;
  border-radius: 12px;
  background: #fbfcfd;
  color: #344054;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.address-suggestion-item:hover {
  border-color: var(--theme-default, #18a6e4);
  background: var(--app-primary-wash, #f3fbfe);
}

.address-suggestion-icon {
  display: inline-flex;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--app-primary-wash, #e8f6fd);
  color: var(--theme-default, #18a6e4);
}

.address-suggestion-copy {
  display: grid;
  flex: 1;
  min-width: 0;
  gap: 4px;
}

.address-suggestion-title {
  overflow: hidden;
  color: #101828;
  font-size: 14px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.address-suggestion-detail {
  display: -webkit-box;
  overflow: hidden;
  color: #667085;
  font-size: 12px;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.address-suggestion-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.address-suggestion-meta:empty {
  display: none;
}

.address-suggestion-chip {
  padding: 2px 8px;
  border-radius: 6px;
  background: #eef2f6;
  color: #344054;
  font-size: 11px;
  font-weight: 500;
}

.address-suggestion-meta small {
  color: var(--theme-default, #18a6e4);
  font-size: 11px;
  font-weight: 600;
}

.address-suggestion-chevron {
  flex: 0 0 16px;
  margin-top: 2px;
  color: #98a2b3;
}

.location-clear-button {
  position: absolute;
  top: 23px;
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

.location-clear-button :deep(svg) {
  display: block;
}

.location-clear-button:hover {
  background: #e2e8f0;
  color: #344054;
}

.location-preview {
  overflow: hidden;
  border: 1px solid #e3e8eb;
  border-radius: 10px;
}

.location-preview-address {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 10px 12px;
  border-top: 1px solid #e3e8eb;
  background: #fbfcfd;
  color: #344054;
  font-size: 12px;
}

.location-preview-address i {
  margin-top: 2px;
  color: var(--theme-default, #18a6e4);
}

.location-preview-address em {
  color: #94a3b8;
  font-style: normal;
}

.location-preview-hint {
  display: block;
  padding: 0 12px 10px;
  background: #fbfcfd;
  color: #94a3b8;
  font-size: 11px;
}

.location-button {
  display: inline-flex;
  min-width: 156px;
  height: 46px !important;
  min-height: 46px !important;
  max-height: 46px;
  box-sizing: border-box;
  align-items: center;
  align-self: start;
  justify-content: center;
  gap: 8px;
  margin: 0 !important;
  padding-block: 0;
  white-space: nowrap;
}

.location-button__icon {
  flex: 0 0 18px;
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
