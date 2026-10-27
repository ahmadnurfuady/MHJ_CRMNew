<template>
  <Modal
    :title="t('contacts.addTitle')"
    :modalOpen="contactState.openAddContactModal"
    sizeClass="modal-xl"
    @closeModal="closeModal"
  >
    <form class="form-bookmark needs-validation mhj-form" @submit.prevent="handleSave">
      <div class="modal-body custom-input contact-form-body">
        <div class="row g-3">
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.firstName')" required>
              <InputField
                v-model:modelValue="contactState.contactForm.firstName"
                :formSubmitted="contactState.formSubmitted"
                inputId="contact-first-name"
                :placeholder="t('contacts.placeholders.firstName')"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.lastName')">
              <InputField
                v-model:modelValue="contactState.contactForm.lastName"
                inputId="contact-last-name"
                :placeholder="t('contacts.placeholders.lastName')"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper :title="t('contacts.jobTitle')">
              <InputField
                v-model:modelValue="contactState.contactForm.jobTitle"
                inputId="contact-job-title"
                :placeholder="t('contacts.placeholders.jobTitle')"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper :title="t('contacts.email')">
              <InputField
                v-model:modelValue="contactState.contactForm.email"
                :formSubmitted="contactState.formSubmitted"
                inputId="contact-email"
                inputType="email"
                placeholder="Contoh: nama@domain.com"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper :title="t('contacts.phone')" required>
              <div
                v-for="(phone, index) in contactState.contactForm.phoneNumbers"
                :key="index"
                class="d-flex gap-2 mb-2"
              >
                <div class="flex-grow-1">
                  <InputField
                    v-model:modelValue="
                      contactState.contactForm.phoneNumbers[index]
                    "
                    :formSubmitted="contactState.formSubmitted"
                    :inputId="`contact-phone-${index}`"
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
                  v-if="contactState.contactForm.phoneNumbers.length > 1"
                  class="btn btn-outline-danger mhj-phone-remove-button"
                  type="button"
                  :title="t('contacts.deletePhone')"
                  :aria-label="t('contacts.deletePhone')"
                  @click="removePhone(index)"
                >
                  <span class="mhj-phone-remove-symbol" aria-hidden="true">−</span>
                </button>
              </div>
              <button
                class="btn btn-link btn-sm mt-1 mhj-form-add-button"
                type="button"
                :disabled="!canAddPhone"
                :title="addPhoneHint || t('contacts.addPhone')"
                @click="addPhone"
              >
                <MhjIcon name="action_add" :size="14" />{{ t('contacts.addPhone') }}
              </button>
              <small v-if="addPhoneHint" class="d-block text-muted mt-1">
                {{ addPhoneHint }}
              </small>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper :title="t('contacts.mapAddress')" required>
              <div class="location-field">
                <div class="location-input-group">
                  <div
                    class="location-address-box"
                    @focusout="handleAddressFieldBlur"
                  >
                    <InputField
                      v-model:modelValue="contactState.contactForm.mapAddress"
                      :formSubmitted="contactState.formSubmitted"
                      inputId="contact-map-address"
                      placeholder="Ketik nama faskes atau alamat..."
                    />
                    <button
                      v-if="contactState.contactForm.mapAddress.data"
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
                        <SolarIcon name="fa-location-dot" />
                        <span>{{ suggestion.address }}</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    class="btn btn-outline-primary location-button"
                    type="button"
                    :disabled="locatingAddress"
                    :title="
                      contactState.contactForm.mapAddress.data.trim()
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
                  <l-map
                    :use-global-leaflet="false"
                    :zoom="16"
                    :center="selectedLocationCenter"
                    style="height: 220px; cursor: crosshair"
                    @click="onMapClick"
                  >
                    <l-tile-layer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <l-marker
                      :lat-lng="selectedLocationCenter"
                      :draggable="true"
                      @dragend="onMarkerDragEnd"
                    />
                  </l-map>
                  <p class="location-preview-address">
                    <SolarIcon name="fa-location-dot" />
                    <span>
                      {{
                        contactState.contactForm.mapAddress.data ||
                        "Alamat tidak tersedia"
                      }}
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
            <InputWrapper :title="t('contacts.address')">
              <InputField
                v-model:modelValue="contactState.contactForm.address"
                inputId="contact-address"
                inputType="textarea"
                :placeholder="t('contacts.placeholders.address')"
                :required="false"
                :rows="2"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper :title="t('contacts.province')" required>
              <Select
                v-model="contactState.contactForm.province"
                :options="provinceOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="t('contacts.placeholders.province')"
                :formSubmitted="contactState.formSubmitted"
                :disabled="regionFieldsLocked"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.city')" required>
              <Select
                v-model="contactState.contactForm.city"
                :options="cityOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="
                  contactState.contactForm.province.data
                    ? t('contacts.placeholders.city')
                    : t('contacts.placeholders.selectProvinceFirst')
                "
                :disabled="
                  regionFieldsLocked || !contactState.contactForm.province.data
                "
                :formSubmitted="contactState.formSubmitted"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.source')" required>
              <Select
                v-model="contactState.contactForm.source"
                :options="sourceOptions"
                display-key="label"
                getValueKey="value"
                :placeholder="t('contacts.placeholders.source')"
                :formSubmitted="contactState.formSubmitted"
              />
              <DummyDataBadge
                v-if="contactApi.sourceIsDummy"
                class="mt-2"
                label="Sumber: Data Dummy Lokal"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Jenis Kelamin" required>
              <Select
                v-model="contactState.contactForm.gender"
                :options="genderOptions"
                display-key="label"
                getValueKey="value"
                placeholder="Pilih jenis kelamin"
                :formSubmitted="contactState.formSubmitted"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper :title="t('contacts.company')">
              <Select
                v-model="contactState.contactForm.company"
                :options="companyOptions"
                @update:modelValue="pruneProjectsForCompanies"
                display-key="label"
                subtitle-key="address"
                getValueKey="value"
                :placeholder="t('contacts.placeholders.company')"
                :multiSelect="true"
                :removableTags="true"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.project')">
              <Select
                v-model="contactState.contactForm.project"
                :options="filteredProjectOptions"
                :remoteSearch="true"
                :searching="contactApi.projectSearching"
                @search="onProjectSearch"
                display-key="label"
                subtitle-key="address"
                getValueKey="value"
                :placeholder="
                  companySelected
                    ? t('contacts.placeholders.project')
                    : t('contacts.placeholders.selectCompanyFirst')
                "
                :disabled="!companySelected"
                :multiSelect="true"
                :removableTags="true"
                :required="false"
              />
            </InputWrapper>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-light" type="button" @click="closeModal">
          {{ t('common.cancel') }}
        </button>
        <button class="btn btn-primary" type="submit">
          {{ t('contacts.save') }}
        </button>
      </div>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useDebounceFn } from "@vueuse/core";
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";

import DummyDataBadge from "@/components/shared/DummyDataBadge.vue";
import { initSelectField } from "@/core/data/common";
import { genderOptions } from "@/core/data/contactCrm";
import { useCompanyRegions } from "@/composable/useCompanyRegions";
import { usePhoneNumberList } from "@/composable/usePhoneNumberList";
import { useProjectsByCompany } from "@/composable/useProjectsByCompany";
import { INDONESIA_COUNTRY, useContact } from "@/store/contact";
import { useAuthStore } from "@/store/auth";
import { useProjectStore } from "@/store/project";
import {
  indonesianMobilePhoneError,
  sanitizeIndonesianPhoneInput,
} from "@/utils/indonesianPhone";

const requiredPhoneValidator = (value: string) =>
  indonesianMobilePhoneError(value, true);
const optionalPhoneValidator = (value: string) =>
  indonesianMobilePhoneError(value);
import {
  geolocationErrorMessage,
  getCurrentPosition,
  reverseGeocodeLocation,
  searchAddress,
  type AddressSearchResult,
} from "@/services/geocoding";
import type { Contact } from "@/types/contacts";

interface LeafletLatLngEvent {
  latlng: { lat: number; lng: number };
}

interface LeafletMarkerDragEndEvent {
  target: { getLatLng: () => { lat: number; lng: number } };
}

const emit = defineEmits<{
  saved: [contact: Contact];
}>();

const { t } = useI18n();

const InputWrapper = defineAsyncComponent(
  () => import("@/components/shared/formElements/InputWrapper.vue"),
);
const InputField = defineAsyncComponent(
  () => import("@/components/shared/formElements/InputField.vue"),
);
const Select = defineAsyncComponent(
  () => import("@/components/shared/formElements/Select.vue"),
);
const Modal = defineAsyncComponent(
  () => import("@/components/shared/Modal.vue"),
);

const contactStore = useContact();
const authStore = useAuthStore();
const projectStore = useProjectStore();
const { contactState, contactApi } = storeToRefs(contactStore);
const {
  fetchContactLookups,
  searchContactProjects,
  fetchContactSources,
  fetchContactStatuses,
  saveContact,
} = contactStore;

const { provinceOptions, cityOptionsByProvince, loadRegions, resolveRegionSelection } =
  useCompanyRegions();

const ownerOptions = computed(() => projectStore.lookups.owner);
// Lookup langsung dari API (GET /api/contact/company & GET /api/contact/project), lihat fetchContactLookups.
const companyOptions = computed(() => contactApi.value.companyLookup);
const projectOptions = computed(() => contactApi.value.projectLookup);
const {
  filteredProjectOptions,
  pruneProjectsForCompanies,
  onProjectSearch,
  resetProjectSearch,
} = useProjectsByCompany({
  projectOptions,
  searchResults: computed(() => contactApi.value.projectSearchResults),
  searchProjects: searchContactProjects,
  companyField: () => contactState.value.contactForm.company,
  projectField: () => contactState.value.contactForm.project,
  setProjectField: (field) => (contactState.value.contactForm.project = field),
});
const sourceOptions = computed(() => contactApi.value.sources);
const statusOptions = computed(() => contactApi.value.statuses);
// Peluang selalu milik sebuah Faskes, jadi dropdown-nya baru aktif setelah
// Faskes dipilih (sama seperti pola Provinsi -> Kota/Kabupaten di form ini).
const companySelected = computed(
  () => (contactState.value.contactForm.company.selectedItems ?? []).length > 0,
);
const locatingAddress = ref(false);
const locationError = ref("");
const addressSuggestions = ref<AddressSearchResult[]>([]);
const searchingAddress = ref(false);
const addressSearchError = ref("");
const addressSearchNoResult = ref(false);
const selectedLocation = ref<{ lat: number; lng: number } | null>(null);
const regionFieldsLocked = computed(() => selectedLocation.value !== null);
const selectedLocationCenter = computed<[number, number]>(() =>
  selectedLocation.value
    ? [selectedLocation.value.lat, selectedLocation.value.lng]
    : [0, 0],
);
const pinUpdating = ref(false);
let suppressNextAddressSearch = false;
let suppressProvinceCityReset = false;
const loggedInOwnerName = computed(
  () => authStore.user?.name || authStore.user?.email || "Penanggung Jawab",
);

function selectLoggedInOwner() {
  const user = authStore.user;
  if (!user) return;

  const normalizedName = user.name.trim().toLowerCase();
  const option =
    ownerOptions.value.find(
      (item) =>
        String(item.value) === String(user.id) ||
        item.label.trim().toLowerCase() === normalizedName,
    ) ?? { value: user.id, label: loggedInOwnerName.value };

  contactState.value.contactForm.owner = {
    selected: option,
    data: String(option.value),
    selectedItems: [],
    errorMessage: "",
    type: "dropdown",
  };
}

function selectDefaultStatus() {
  if (contactState.value.contactForm.status.selected) return;
  const option =
    statusOptions.value.find((item) => String(item.value) === "1") ??
    statusOptions.value[0];
  if (!option) return;

  contactState.value.contactForm.status = {
    selected: option,
    data: String(option.value),
    selectedItems: [],
    errorMessage: "",
    type: "dropdown",
  };
}

onMounted(async () => {
  const requests: Promise<unknown>[] = [];
  if (!projectStore.lookups.owner.length) requests.push(projectStore.fetchProjectLookups());
  requests.push(fetchContactLookups());
  if (!contactApi.value.sources.length) requests.push(fetchContactSources());
  if (!contactApi.value.statuses.length) requests.push(fetchContactStatuses());
  requests.push(loadRegions());
  await Promise.allSettled(requests);
  // Form bisa dibuka dari halaman Faskes dengan Faskes sudah terpilih.
  void resetProjectSearch();
  selectLoggedInOwner();
  selectDefaultStatus();
});

async function handleSave() {
  const created = await saveContact();
  if (created) emit("saved", created);
}

const cityOptions = computed(
  () =>
    cityOptionsByProvince.value[contactState.value.contactForm.province.data] ||
    [],
);

watch(
  () => contactState.value.contactForm.province.data,
  (province, previousProvince) => {
    if (suppressProvinceCityReset) {
      suppressProvinceCityReset = false;
      return;
    }
    if (previousProvince && province !== previousProvince)
      contactState.value.contactForm.city = initSelectField();
  },
);

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
    const results = await searchAddress(trimmed);
    addressSuggestions.value = results;
    addressSearchNoResult.value = results.length === 0;
  } catch {
    addressSuggestions.value = [];
    addressSearchError.value = "Pencarian lokasi gagal. Coba lagi.";
  } finally {
    searchingAddress.value = false;
  }
}, 500);

watch(
  () => contactState.value.contactForm.mapAddress.data,
  (value) => {
    if (suppressNextAddressSearch) {
      suppressNextAddressSearch = false;
      return;
    }
    if (String(value ?? "").trim()) {
      contactState.value.contactForm.mapAddress.errorMessage = "";
    }
    selectedLocation.value = null;
    contactState.value.contactForm.latitude.data = "";
    contactState.value.contactForm.longitude.data = "";
    void runAddressSearch(String(value ?? ""));
  },
);

const { canAddPhone, addPhoneHint, addPhone, removePhone } = usePhoneNumberList(
  () => contactState.value.contactForm.phoneNumbers,
);

function setLocationRegions(provinceName: string, cityName: string) {
  const { province, city } = resolveRegionSelection(provinceName, cityName);

  suppressProvinceCityReset =
    contactState.value.contactForm.province.data !== (province?.label ?? "");
  contactState.value.contactForm.province = province
    ? {
        selected: province,
        data: province.label,
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();

  contactState.value.contactForm.city = city
    ? {
        selected: city,
        data: city.label,
        selectedItems: [],
        errorMessage: "",
        type: "dropdown",
      }
    : initSelectField();
}

function handleAddressFieldBlur() {
  window.setTimeout(() => {
    addressSuggestions.value = [];
    addressSearchNoResult.value = false;
  }, 150);
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
  contactState.value.contactForm.mapAddress.data = location.address;
  contactState.value.contactForm.mapAddress.errorMessage = "";
  contactState.value.contactForm.address.data = location.address;
  contactState.value.contactForm.address.errorMessage = "";
  contactState.value.contactForm.latitude.data = String(latitude);
  contactState.value.contactForm.longitude.data = String(longitude);
  contactState.value.contactForm.country.data = INDONESIA_COUNTRY;
  contactState.value.contactForm.posCode.data = location.posCode;
  contactState.value.contactForm.kdKelurahan.data = "";
  selectedLocation.value = { lat: latitude, lng: longitude };
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;
  locationError.value = "";
  setLocationRegions(location.province, location.city);
}

function selectAddressSuggestion(suggestion: AddressSearchResult) {
  applyLocationFields(
    suggestion,
    suggestion.latitude,
    suggestion.longitude,
  );
}

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

function onMapClick(event: LeafletLatLngEvent) {
  void applyPickedLocation(event.latlng.lat, event.latlng.lng);
}

function onMarkerDragEnd(event: LeafletMarkerDragEndEvent) {
  const { lat, lng } = event.target.getLatLng();
  void applyPickedLocation(lat, lng);
}

async function searchTypedAddress(query: string) {
  locationError.value = "";
  locatingAddress.value = true;
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;

  try {
    const [best] = await searchAddress(query);
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
    const location = await reverseGeocodeLocation(
      latitude,
      longitude,
    );
    applyLocationFields(location, latitude, longitude);
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    locatingAddress.value = false;
  }
}

function handleLocateClick() {
  const query = contactState.value.contactForm.mapAddress.data.trim();
  if (query) {
    void searchTypedAddress(query);
  } else {
    void captureCurrentAddress();
  }
}

function clearCurrentAddress() {
  suppressNextAddressSearch = true;
  contactState.value.contactForm.mapAddress.data = "";
  contactState.value.contactForm.address.data = "";
  contactState.value.contactForm.latitude.data = "";
  contactState.value.contactForm.longitude.data = "";
  contactState.value.contactForm.country.data = "";
  contactState.value.contactForm.posCode.data = "";
  contactState.value.contactForm.kdKelurahan.data = "";
  contactState.value.contactForm.mapAddress.errorMessage = "";
  selectedLocation.value = null;
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;
  addressSearchError.value = "";
  locationError.value = "";
}

function closeModal() {
  locationError.value = "";
  addressSuggestions.value = [];
  addressSearchError.value = "";
  addressSearchNoResult.value = false;
  selectedLocation.value = null;
  contactState.value.openAddContactModal = false;
  contactState.value.formSubmitted = false;
}
</script>

<style scoped>
.contact-form-body {
  max-height: 70vh;
  overflow-y: auto;
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
  max-height: 220px;
  margin: 0;
  overflow-y: auto;
  list-style: none;
  border: 1px solid #e3e8eb;
  border-radius: 10px;
  padding: 6px;
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
  gap: 8px;
  padding: 10px;
  border-radius: 8px;
  color: #344054;
  font-size: 12px;
  cursor: pointer;
}

.address-suggestion-item i {
  margin-top: 2px;
  color: var(--theme-default, #18a6e4);
}

.address-suggestion-item:hover {
  background: var(--app-primary-wash, #f3fbfe);
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
