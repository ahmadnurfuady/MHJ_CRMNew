<template>
  <component
    :is="inline ? 'section' : Modal"
    v-bind="containerProps"
    :class="{ 'inline-hospital-form': inline }"
    @closeModal="closeRumahSakitModal"
  >
    <form
      class="form-bookmark needs-validation mhj-form"
      @submit.prevent="submitRumahSakit"
    >
      <div class="modal-body custom-input rumah-sakit-form-body">
        <div class="row g-3">
          <div class="col-12">
            <InputWrapper title="Nama Faskes" required>
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.name"
                :formSubmitted="contactState.formSubmitted"
                inputId="rs-name"
                placeholder="Masukkan nama faskes..."
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Nomor Telepon" required>
              <div
                v-for="(phone, index) in contactState.rumahSakitForm
                  .phoneNumbers"
                :key="index"
                class="d-flex gap-2 mb-2"
              >
                <div class="flex-grow-1">
                  <InputField
                    v-model:modelValue="
                      contactState.rumahSakitForm.phoneNumbers[index]
                    "
                    :formSubmitted="contactState.formSubmitted"
                    :inputId="`rs-phone-${index}`"
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
                    :disabled="readOnly"
                  />
                </div>
                <button
                  v-if="
                    !readOnly &&
                    contactState.rumahSakitForm.phoneNumbers.length > 1
                  "
                  class="btn btn-outline-danger mhj-phone-remove-button"
                  type="button"
                  title="Hapus nomor"
                  aria-label="Hapus nomor telepon"
                  @click="removePhone(index)"
                >
                  <span class="mhj-phone-remove-symbol" aria-hidden="true">−</span>
                </button>
              </div>
              <button
                v-if="!readOnly"
                class="btn btn-link btn-sm mt-1 mhj-form-add-button"
                type="button"
                :disabled="!canAddPhone"
                :title="addPhoneHint || 'Tambah nomor telepon'"
                @click="addPhone"
              >
                <MhjIcon name="action_add" :size="14" />Tambah nomor telepon
              </button>
              <small v-if="!readOnly && addPhoneHint" class="d-block text-muted mt-1">
                {{ addPhoneHint }}
              </small>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Email Faskes" required>
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.email"
                :formSubmitted="contactState.formSubmitted"
                inputId="rs-email"
                inputType="email"
                placeholder="Contoh: info@rumahsakit.com"
                :validator="validateEmail"
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Alamat (Google Maps)" required>
              <div class="location-field">
                <div class="location-input-group">
                  <div
                    class="location-address-box"
                    @focusout="handleAddressFieldBlur"
                  >
                    <InputField
                      v-model:modelValue="
                        contactState.rumahSakitForm.mapAddress
                      "
                      :formSubmitted="contactState.formSubmitted"
                      inputId="rs-map-address"
                      placeholder="Ketik nama faskes atau alamat..."
                      :disabled="readOnly"
                    />
                    <button
                      v-if="
                        !readOnly &&
                        contactState.rumahSakitForm.mapAddress.data
                      "
                      class="location-clear-button"
                      type="button"
                      title="Hapus alamat dan cari ulang"
                      aria-label="Hapus alamat dan cari ulang"
                      @click="clearCurrentAddress"
                    >
                      <vue-feather type="x" size="16" />
                    </button>

                    <ul
                      v-if="
                        !readOnly &&
                        (addressSuggestions.length ||
                          searchingAddress ||
                          canSearchOutsideProvince)
                      "
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
                        v-for="(suggestion, suggestionIndex) in addressSuggestions"
                        :key="`${suggestion.latitude}-${suggestion.longitude}-${suggestionIndex}`"
                        class="address-suggestion-item"
                        @mousedown.prevent="selectAddressSuggestion(suggestion)"
                      >
                        <SolarIcon name="fa-location-dot" />
                        <span class="address-suggestion-copy">
                          <span>{{ suggestion.address }}</span>
                          <small>
                            {{ facilityTypeLabel(suggestion) }}
                            <template v-if="currentSearchArea().province">
                              · {{ suggestionScopeLabel(suggestion) }}
                            </template>
                            <template v-if="formatDistanceKm(suggestion.distanceKm)">
                              · {{ formatDistanceKm(suggestion.distanceKm) }}
                            </template>
                          </small>
                        </span>
                      </li>
                      <li
                        v-if="canSearchOutsideProvince && !searchingAddress"
                        class="address-search-more"
                      >
                        <button
                          type="button"
                          @mousedown.prevent="searchOutsideActiveProvince"
                        >
                          Cari lebih banyak di luar
                          {{ currentSearchArea().province }}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <button
                    v-if="!readOnly"
                    class="btn btn-outline-primary location-button"
                    type="button"
                    :disabled="locatingAddress"
                    :title="
                      contactState.rumahSakitForm.mapAddress.data.trim()
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
                    <span>{{
                      locatingAddress ? "Mencari..." : "Cari lokasi"
                    }}</span>
                  </button>
                </div>

                <div
                  v-if="selectedLocation"
                  class="location-preview map-z-index"
                >
                  <l-map
                    :use-global-leaflet="false"
                    :zoom="16"
                    :center="[selectedLocation!.lat, selectedLocation!.lng]"
                    :style="{
                      height: '220px',
                      cursor: readOnly ? 'default' : 'crosshair',
                    }"
                    @click="onMapClick"
                  >
                    <l-tile-layer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <l-marker
                      :lat-lng="[selectedLocation!.lat, selectedLocation!.lng]"
                      :draggable="!readOnly"
                      @dragend="onMarkerDragEnd"
                    />
                  </l-map>
                  <p class="location-preview-address">
                    <SolarIcon name="fa-location-dot" />
                    <span>
                      {{
                        contactState.rumahSakitForm.mapAddress.data ||
                        "Alamat tidak tersedia"
                      }}
                      <em v-if="pinUpdating">(memperbarui alamat...)</em>
                    </span>
                  </p>
                  <small v-if="!readOnly" class="location-preview-hint">
                    Klik di peta atau geser pin untuk membetulkan titik lokasi
                    secara manual. Double click dan tahan untuk menggeser peta.
                  </small>
                </div>

                <small
                  v-if="!addressSuggestions.length && !searchingAddress"
                  class="text-muted"
                >
                  Ketik nama faskes untuk melihat rekomendasi lokasi, atau
                  gunakan GPS.
                </small>
                <small v-if="searchOriginLoading" class="text-muted">
                  Mendeteksi kota dan provinsi dari lokasi Anda...
                </small>
                <small v-else-if="searchOrigin" class="location-search-priority">
                  Prioritas pencarian: {{ searchOrigin.city }},
                  {{ searchOrigin.province }}.
                </small>
                <small v-if="addressSearchNoResult" class="text-muted">
                  Fasilitas kesehatan tidak ditemukan, coba nama yang lebih
                  spesifik.
                </small>
                <small v-if="locationError" class="text-danger">{{
                  locationError
                }}</small>
                <small v-if="addressSearchError" class="text-danger">{{
                  addressSearchError
                }}</small>
              </div>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Alamat" required>
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.address"
                :formSubmitted="contactState.formSubmitted"
                inputId="rs-address"
                inputType="textarea"
                placeholder="Masukkan alamat lengkap faskes..."
                :rows="2"
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Provinsi" required>
              <Select
                v-model="contactState.rumahSakitForm.province"
                :options="provinceOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Pilih Provinsi"
                :formSubmitted="contactState.formSubmitted"
                :disabled="readOnly || regionFieldsLocked"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Kota/Kabupaten" required>
              <Select
                v-model="contactState.rumahSakitForm.city"
                :options="cityOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="
                  contactState.rumahSakitForm.province.data
                    ? 'Pilih Kota/Kabupaten'
                    : 'Pilih Provinsi terlebih dahulu'
                "
                :disabled="
                  readOnly ||
                  regionFieldsLocked ||
                  !contactState.rumahSakitForm.province.data
                "
                :formSubmitted="contactState.formSubmitted"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Jenis" required>
              <Select
                v-model="contactState.rumahSakitForm.jenis"
                :options="jenisOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Pilih Jenis"
                :formSubmitted="contactState.formSubmitted"
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Tipe" required>
              <Select
                v-model="contactState.rumahSakitForm.tipe"
                :options="tipeOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Pilih Tipe"
                :formSubmitted="contactState.formSubmitted"
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Penyelenggara" required>
              <Select
                v-model="contactState.rumahSakitForm.penyelenggara"
                :options="penyelenggaraOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Pilih Penyelenggara"
                :formSubmitted="contactState.formSubmitted"
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Tipe Marketing G0500" required>
              <Select
                v-model="contactState.rumahSakitForm.tipeMarketingGo500"
                :options="tipeMarketingOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Pilih Tipe Marketing"
                :formSubmitted="contactState.formSubmitted"
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>

          <div class="col-12 hospital-form-section">
            <span>Status</span>
            <small>Penilaian yang dikelola oleh bagian Finance</small>
          </div>
          <div class="col-12">
            <InputWrapper title="Grading / Status Finance">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.financeStatus"
                inputId="rs-finance-status"
                placeholder="Contoh: Grade A, Lancar, atau Dalam Peninjauan..."
                :required="false"
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Keterangan">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.keterangan"
                inputId="rs-keterangan"
                inputType="textarea"
                placeholder="Tambahkan keterangan (opsional)..."
                :required="false"
                :rows="3"
                :maxLength="150"
                :disabled="readOnly"
              />
              <small class="field-character-count">
                {{ contactState.rumahSakitForm.keterangan.data.length }}/150
              </small>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="SIRS" required>
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.sirs"
                :formSubmitted="contactState.formSubmitted"
                inputId="rs-sirs"
                placeholder="Masukkan kode SIRS (contoh: 3578012)..."
                :disabled="readOnly"
              />
            </InputWrapper>
          </div>
        </div>
      </div>

      <div v-if="!readOnly" class="modal-footer">
        <button
          class="btn btn-light"
          type="button"
          @click="cancelForm"
        >
          Batal
        </button>
        <button class="btn btn-primary" type="submit">
          {{ isEditing ? "Simpan Perubahan" : "Simpan" }}
        </button>
      </div>
    </form>

    <div
      v-if="showLocationPicker"
      class="location-picker-backdrop"
      @click="closeLocationPicker"
    ></div>
    <div
      v-if="showLocationPicker"
      class="location-picker"
      role="dialog"
      aria-modal="true"
      aria-label="Pilih faskes dari hasil pencarian"
    >
      <header class="location-picker__header">
        <div>
          <strong>Pilih Faskes</strong>
          <small>{{ locationPickerResults.length }} hasil ditemukan</small>
        </div>
        <button
          type="button"
          class="location-picker__close"
          aria-label="Tutup"
          @click="closeLocationPicker"
        >
          <vue-feather type="x" size="18" />
        </button>
      </header>
      <ul class="location-picker__list">
        <li
          v-for="(result, index) in locationPickerResults"
          :key="`${result.latitude}-${result.longitude}-${index}`"
          class="location-picker__item"
          @click="choosePickerResult(result)"
        >
          <strong class="location-picker__name">{{ result.name || result.address }}</strong>
          <span class="location-picker__address">{{ pickerAddressLabel(result) }}</span>
          <span class="location-picker__meta">
            <span class="location-picker__type">{{ facilityTypeLabel(result) }}</span>
            <span class="location-picker__place">
              <SolarIcon name="fa-location-dot" :size="12" />
              {{ pickerLocationLabel(result) }}
            </span>
            <span v-if="formatDistanceKm(result.distanceKm)" class="location-picker__distance">
              {{ formatDistanceKm(result.distanceKm) }}
            </span>
          </span>
        </li>
        <li
          v-if="canSearchOutsideProvince"
          class="address-search-more"
        >
          <button
            type="button"
            :disabled="pickerSearchingOutside"
            @click="searchOutsideFromPicker"
          >
            {{
              pickerSearchingOutside
                ? "Mencari di seluruh Indonesia..."
                : `Cari lebih banyak di luar ${currentSearchArea().province}`
            }}
          </button>
        </li>
      </ul>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useDebounceFn } from "@vueuse/core";
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";

import { initSelectField } from "@/core/data/common";
import { useCompanyRegions } from "@/composable/useCompanyRegions";
import { useHospitalLookups } from "@/composable/useHospitalLookups";
import { usePhoneNumberList } from "@/composable/usePhoneNumberList";
import {
  formatDistanceKm,
  geolocationErrorMessage,
  getCurrentPosition,
  reverseGeocodeLocation,
  searchAddress,
  searchHealthFacilities,
  type AddressSearchResult,
} from "@/services/geocoding";
import { useUserLocation } from "@/composable/useUserLocation";
import { useContact } from "@/store/contact";
import {
  indonesianMobilePhoneError,
  sanitizeIndonesianPhoneInput,
} from "@/utils/indonesianPhone";

const requiredPhoneValidator = (value: string) =>
  indonesianMobilePhoneError(value, true);
const optionalPhoneValidator = (value: string) =>
  indonesianMobilePhoneError(value);
import { validateEmail } from "@/utils/validators/InputFieldValidators";
import type { Select as SelectOption, SelectField } from "@/types/common";

const props = withDefaults(
  defineProps<{
    inline?: boolean;
    readOnly?: boolean;
  }>(),
  {
    inline: false,
    readOnly: false,
  },
);
const emit = defineEmits<{
  saved: [];
  cancel: [];
}>();

// Paket "leaflet" tidak menyediakan deklarasi tipenya sendiri di proyek ini, jadi cukup
// ambil bentuk minimal yang dipakai dari event klik peta & akhir drag marker.
interface LeafletLatLngEvent {
  latlng: { lat: number; lng: number };
}
interface LeafletMarkerDragEndEvent {
  target: { getLatLng: () => { lat: number; lng: number } };
}

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
const { contactState } = storeToRefs(contactStore);
const { saveRumahSakit, closeRumahSakitModal } = contactStore;
const inline = computed(() => props.inline);
const readOnly = computed(() => props.readOnly);
const isEditing = computed(() => contactState.value.hospitalEditId !== null);
const containerProps = computed(() =>
  props.inline
    ? {}
    : {
        title: isEditing.value ? "Edit Faskes" : "Tambah Faskes",
        modalOpen: contactState.value.openAddContactModal,
        sizeClass: "modal-xl",
      },
);
const locatingAddress = ref(false);
const locationError = ref("");

const addressSuggestions = ref<AddressSearchResult[]>([]);
const searchingAddress = ref(false);
const addressSearchError = ref("");
const addressSearchNoResult = ref(false);
const searchOrigin = ref<{ city: string; province: string } | null>(null);
const searchOriginLoading = ref(false);
const includeOutsideProvince = ref(false);
const showLocationPicker = ref(false);
const locationPickerResults = ref<AddressSearchResult[]>([]);
const pickerSearchingOutside = ref(false);
const selectedLocation = ref<{ lat: number; lng: number } | null>(
  contactState.value.hospitalEditLocation
    ? { ...contactState.value.hospitalEditLocation }
    : null,
);
const regionFieldsLocked = computed(() => selectedLocation.value !== null);
const pinUpdating = ref(false);
let suppressNextAddressSearch = false;
let suppressProvinceCityReset = false;
let searchOriginPromise: Promise<void> | null = null;
let facilitySearchSequence = 0;
const { ensureLocation } = useUserLocation();

const { provinceOptions, cityOptionsByProvince, loadRegions, resolveRegionSelection } =
  useCompanyRegions();
const {
  jenisOptions,
  tipeOptions,
  penyelenggaraOptions,
  tipeMarketingOptions,
  loadHospitalLookups,
} = useHospitalLookups();

const cityOptions = computed(
  () =>
    cityOptionsByProvince.value[
      contactState.value.rumahSakitForm.province.data
    ] || [],
);

onMounted(async () => {
  void ensureSearchOrigin();
  await Promise.all([loadRegions(), loadHospitalLookups()]);
  reconcileLookupSelections();
  await loadStoredLocationPreview();
});

async function ensureSearchOrigin() {
  if (searchOrigin.value || searchOriginPromise) return searchOriginPromise;

  searchOriginLoading.value = true;
  searchOriginPromise = (async () => {
    try {
      const position = await getCurrentPosition();
      const location = await reverseGeocodeLocation(
        position.coords.latitude,
        position.coords.longitude,
      );
      if (location.city || location.province) {
        searchOrigin.value = {
          city: location.city,
          province: location.province,
        };
      }
    } catch {
      // Jika izin GPS ditolak, pilihan kota/provinsi pada form menjadi fallback.
    } finally {
      searchOriginLoading.value = false;
    }
  })();

  return searchOriginPromise;
}

function currentSearchArea() {
  return {
    city:
      searchOrigin.value?.city ||
      contactState.value.rumahSakitForm.city.data.trim(),
    province:
      searchOrigin.value?.province ||
      contactState.value.rumahSakitForm.province.data.trim(),
  };
}

const canSearchOutsideProvince = computed(
  () =>
    Boolean(currentSearchArea().province) &&
    !includeOutsideProvince.value &&
    contactState.value.rumahSakitForm.mapAddress.data.trim().length >= 3,
);

function suggestionScopeLabel(suggestion: AddressSearchResult) {
  const area = currentSearchArea();
  if (suggestion.searchScope === "city") return area.city || "Kota aktif";
  if (suggestion.searchScope === "province")
    return `${area.province || "Provinsi aktif"} lainnya`;
  return `Di luar ${area.province || "provinsi aktif"}`;
}

function facilityTypeLabel(suggestion: AddressSearchResult) {
  const labels: Record<string, string> = {
    hospital: "Rumah Sakit",
    clinic: "Klinik/Puskesmas",
    pharmacy: "Apotek",
    doctors: "Praktik Dokter",
    doctor: "Praktik Dokter",
    dentist: "Dokter Gigi",
    laboratory: "Laboratorium",
    health_post: "Pos Kesehatan",
    midwife: "Bidan",
    physiotherapist: "Fisioterapi",
    optometrist: "Optometri",
    rehabilitation: "Rehabilitasi",
  };
  return labels[suggestion.facilityType ?? ""] || "Fasilitas Kesehatan";
}

/**
 * Khusus popup hasil "Cari lokasi": tampilkan kota/kabupaten asli tiap faskes (mis.
 * "Waru" atau "Rogojampi"), bukan label generik "Jawa Timur lainnya" yang dipakai
 * dropdown saat mengetik. Dropdown sengaja tidak diubah.
 */
function pickerLocationLabel(result: AddressSearchResult) {
  return result.city || result.province || "Lokasi tidak diketahui";
}

/** Alamat lengkap Nominatim biasanya diawali nama faskes itu sendiri — buang supaya tidak diulang di bawah nama pada kartu popup. */
function pickerAddressLabel(result: AddressSearchResult) {
  const name = result.name?.trim();
  if (name && result.address.startsWith(`${name}, `)) {
    return result.address.slice(name.length + 2);
  }
  return result.address;
}

function openLocationPicker(results: AddressSearchResult[]) {
  locationPickerResults.value = results;
  showLocationPicker.value = true;
}

function closeLocationPicker() {
  showLocationPicker.value = false;
  locationPickerResults.value = [];
}

function choosePickerResult(result: AddressSearchResult) {
  selectAddressSuggestion(result);
  closeLocationPicker();
}

function reconcileSelectField(field: SelectField, options: SelectOption[]) {
  const current = String(field.data ?? "").trim().toLowerCase();
  if (!current) return;

  const matchingOption = options.find(
    (option) =>
      String(option.label).trim().toLowerCase() === current ||
      String(option.value).trim().toLowerCase() === current,
  );
  if (!matchingOption) return;

  field.selected = matchingOption;
  field.data = String(matchingOption.label);
}

function reconcileLookupSelections() {
  const form = contactState.value.rumahSakitForm;
  reconcileSelectField(form.jenis, jenisOptions.value);
  reconcileSelectField(form.tipe, tipeOptions.value);
  reconcileSelectField(form.penyelenggara, penyelenggaraOptions.value);
  reconcileSelectField(form.tipeMarketingGo500, tipeMarketingOptions.value);
}

async function loadStoredLocationPreview() {
  if (selectedLocation.value) {
    try {
      const location = await reverseGeocodeLocation(
        selectedLocation.value.lat,
        selectedLocation.value.lng,
      );
      applyRegionFromGeocode(location.province, location.city);
    } catch {
      // Data wilayah tersimpan tetap dipakai jika reverse geocoding tidak tersedia.
    }
    return;
  }
  const query =
    contactState.value.rumahSakitForm.mapAddress.data.trim() ||
    contactState.value.rumahSakitForm.address.data.trim();
  if (query.length < 3) return;

  try {
    const [best] = await searchAddress(query);
    if (!best) return;
    selectedLocation.value = {
      lat: best.latitude,
      lng: best.longitude,
    };
    applyRegionFromGeocode(best.province, best.city);
  } catch {
    // Profil tetap dapat dibuka walaupun layanan pencarian peta sedang gagal.
  }
}

watch(
  () => contactState.value.rumahSakitForm.province.data,
  (province, previousProvince) => {
    if (suppressProvinceCityReset) {
      suppressProvinceCityReset = false;
      return;
    }
    if (previousProvince && province !== previousProvince)
      contactState.value.rumahSakitForm.city = initSelectField();
  },
);

/** Dipakai setiap lokasi (GPS/klik peta/pencarian) terselesaikan: cocokkan & isi Provinsi/Kota. */
function applyRegionFromGeocode(provinceName: string, cityName: string) {
  const { province, city } = resolveRegionSelection(provinceName, cityName);
  if (!province) return;

  suppressProvinceCityReset =
    contactState.value.rumahSakitForm.province.data !== province.label;
  contactState.value.rumahSakitForm.province = {
    selected: province,
    data: province.label,
    selectedItems: [],
    errorMessage: "",
    type: "dropdown",
  };
  if (city) {
    contactState.value.rumahSakitForm.city = {
      selected: city,
      data: city.label,
      selectedItems: [],
      errorMessage: "",
      type: "dropdown",
    };
  }
}

async function executeFacilitySearch(query: string, searchOutside = false) {
  const trimmed = query.trim();
  if (trimmed.length < 3) {
    addressSuggestions.value = [];
    addressSearchNoResult.value = false;
    return;
  }

  const sequence = ++facilitySearchSequence;
  searchingAddress.value = true;
  addressSearchError.value = "";
  addressSearchNoResult.value = false;
  try {
    await ensureSearchOrigin();
    const location = await ensureLocation();
    const results = await searchHealthFacilities(trimmed, {
      ...currentSearchArea(),
      includeOutsideProvince: searchOutside,
      latitude: location?.lat,
      longitude: location?.lon,
    });
    if (sequence !== facilitySearchSequence) return;
    addressSuggestions.value = results;
    addressSearchNoResult.value = results.length === 0;
  } catch {
    if (sequence !== facilitySearchSequence) return;
    addressSuggestions.value = [];
    addressSearchError.value = "Pencarian lokasi gagal. Coba lagi.";
  } finally {
    if (sequence === facilitySearchSequence) searchingAddress.value = false;
  }
}

const runAddressSearch = useDebounceFn(async (query: string) => {
  await executeFacilitySearch(query, false);
}, 500);

function searchOutsideActiveProvince() {
  includeOutsideProvince.value = true;
  void executeFacilitySearch(
    contactState.value.rumahSakitForm.mapAddress.data,
    true,
  );
}

/** Tombol "Cari lebih banyak di luar [provinsi]" versi popup — sama seperti punya dropdown, cuma targetnya locationPickerResults, bukan addressSuggestions. */
async function searchOutsideFromPicker() {
  const query = contactState.value.rumahSakitForm.mapAddress.data;
  includeOutsideProvince.value = true;
  pickerSearchingOutside.value = true;

  try {
    const location = await ensureLocation();
    const results = await searchHealthFacilities(query, {
      ...currentSearchArea(),
      includeOutsideProvince: true,
      latitude: location?.lat,
      longitude: location?.lon,
    });
    locationPickerResults.value = results;
  } catch {
    locationError.value = "Pencarian lokasi gagal. Coba lagi.";
  } finally {
    pickerSearchingOutside.value = false;
  }
}

watch(
  () => contactState.value.rumahSakitForm.mapAddress.data,
  (value) => {
    if (props.readOnly) return;
    if (suppressNextAddressSearch) {
      suppressNextAddressSearch = false;
      return;
    }
    // Teks diketik ulang secara manual: pin peta sebelumnya tidak lagi mewakili teks ini.
    selectedLocation.value = null;
    includeOutsideProvince.value = false;
    void runAddressSearch(String(value ?? ""));
  },
);

watch(
  () => contactState.value.hospitalEditLocation,
  (location) => {
    selectedLocation.value = location ? { ...location } : null;
  },
);

watch(
  () => [
    contactState.value.rumahSakitForm.jenis.data,
    contactState.value.rumahSakitForm.tipe.data,
    contactState.value.rumahSakitForm.penyelenggara.data,
    contactState.value.rumahSakitForm.tipeMarketingGo500.data,
    jenisOptions.value.length,
    tipeOptions.value.length,
    penyelenggaraOptions.value.length,
    tipeMarketingOptions.value.length,
  ],
  reconcileLookupSelections,
  { flush: "post" },
);

function handleAddressFieldBlur() {
  window.setTimeout(() => {
    addressSuggestions.value = [];
    addressSearchNoResult.value = false;
  }, 150);
}

function selectAddressSuggestion(suggestion: AddressSearchResult) {
  suppressNextAddressSearch = true;
  contactState.value.rumahSakitForm.mapAddress.data = suggestion.address;
  contactState.value.rumahSakitForm.mapAddress.errorMessage = "";
  contactState.value.rumahSakitForm.address.data = suggestion.address;
  contactState.value.rumahSakitForm.address.errorMessage = "";
  selectedLocation.value = {
    lat: suggestion.latitude,
    lng: suggestion.longitude,
  };
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;
  locationError.value = "";
  applyRegionFromGeocode(suggestion.province, suggestion.city);
}

/** Dipakai saat pin ditandai manual (klik peta / geser marker): set titik, lalu isi ulang teks alamat dari koordinat itu. */
async function applyPickedLocation(lat: number, lng: number) {
  suppressNextAddressSearch = true;
  selectedLocation.value = { lat, lng };
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;
  locationError.value = "";
  pinUpdating.value = true;

  try {
    const location = await reverseGeocodeLocation(lat, lng);
    contactState.value.rumahSakitForm.mapAddress.data = location.address;
    contactState.value.rumahSakitForm.mapAddress.errorMessage = "";
    contactState.value.rumahSakitForm.address.data = location.address;
    contactState.value.rumahSakitForm.address.errorMessage = "";
    applyRegionFromGeocode(location.province, location.city);
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    pinUpdating.value = false;
  }
}

function onMapClick(event: LeafletLatLngEvent) {
  if (props.readOnly) return;
  void applyPickedLocation(event.latlng.lat, event.latlng.lng);
}

function onMarkerDragEnd(event: LeafletMarkerDragEndEvent) {
  if (props.readOnly) return;
  const { lat, lng } = event.target.getLatLng();
  void applyPickedLocation(lat, lng);
}

async function submitRumahSakit() {
  if (props.readOnly) return;
  const saved = await saveRumahSakit(selectedLocation.value, !props.inline);
  if (saved && props.inline) emit("saved");
}

function cancelForm() {
  if (props.inline) {
    emit("cancel");
    return;
  }
  closeRumahSakitModal();
}

const { canAddPhone, addPhoneHint, addPhone, removePhone } = usePhoneNumberList(
  () => contactState.value.rumahSakitForm.phoneNumbers,
);

async function searchTypedAddress(query: string) {
  locationError.value = "";
  locatingAddress.value = true;
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;

  try {
    await ensureSearchOrigin();
    const location = await ensureLocation();
    const results = await searchHealthFacilities(query, {
      ...currentSearchArea(),
      includeOutsideProvince: includeOutsideProvince.value,
      latitude: location?.lat,
      longitude: location?.lon,
    });
    if (!results.length) {
      locationError.value =
        "Fasilitas kesehatan tidak ditemukan. Coba nama yang lebih spesifik.";
      return;
    }
    openLocationPicker(results);
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
    suppressNextAddressSearch = true;
    contactState.value.rumahSakitForm.mapAddress.data = location.address;
    contactState.value.rumahSakitForm.address.data = location.address;
    selectedLocation.value = { lat: latitude, lng: longitude };
    addressSuggestions.value = [];
    addressSearchNoResult.value = false;
    applyRegionFromGeocode(location.province, location.city);
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    locatingAddress.value = false;
  }
}

/** Tombol "Cari lokasi": cari berdasarkan teks yang diketik; GPS hanya jadi fallback bila kolom masih kosong. */
function handleLocateClick() {
  const query = contactState.value.rumahSakitForm.mapAddress.data.trim();
  if (query) {
    void searchTypedAddress(query);
  } else {
    void captureCurrentAddress();
  }
}

function clearCurrentAddress() {
  suppressNextAddressSearch = true;
  contactState.value.rumahSakitForm.mapAddress.data = "";
  contactState.value.rumahSakitForm.address.data = "";
  selectedLocation.value = null;
  addressSuggestions.value = [];
  addressSearchNoResult.value = false;
  locationError.value = "";
}
</script>

<style scoped>
.hospital-form-section {
  display: flex;
  align-items: baseline;
  gap: 8px;
  border-bottom: 1px solid #e2e8f0;
  padding-top: 8px;
  padding-bottom: 8px;
}

.hospital-form-section span {
  color: #0f172a;
  font-size: 14px;
  font-weight: 700;
}

.hospital-form-section small {
  color: #64748b;
}

.rumah-sakit-form-body {
  max-height: 70vh;
  overflow-y: auto;
}

.inline-hospital-form .rumah-sakit-form-body {
  max-height: none;
  padding: 0;
  overflow: visible;
}

.inline-hospital-form .modal-footer {
  margin-top: 22px;
  padding: 18px 0 0;
  border-top: 1px solid #e8ecef;
}

.location-field {
  display: grid;
  gap: 7px;
}

.field-character-count {
  display: block;
  margin-top: 4px;
  color: #94a3b8;
  text-align: right;
}

.location-input-group {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 10px;
}

.location-input-group > .location-address-box {
  flex: 1 1 0;
  min-width: 200px;
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

.address-suggestions {
  position: absolute;
  z-index: 20;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
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

.address-suggestion-copy {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.address-suggestion-copy small {
  color: var(--theme-default, #18a6e4);
  font-size: 10px;
  font-weight: 600;
}

.address-search-more {
  padding: 6px;
  border-top: 1px solid #e3e8eb;
}

.address-search-more button {
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 9px 10px;
  background: var(--app-primary-wash, #eef9fd);
  color: var(--theme-default, #18a6e4);
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.address-search-more button:hover {
  background: var(--app-primary-soft, #def3fb);
}

.location-search-priority {
  display: block;
  color: var(--theme-default, #18a6e4);
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
  .location-button {
    min-width: 132px;
    padding-inline: 10px;
  }

}

.location-picker-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1070;
  background: rgba(15, 23, 42, 0.45);
}

.location-picker {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1071;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  width: min(560px, calc(100vw - 32px));
  max-height: min(520px, calc(100vh - 64px));
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.28);
}

.location-picker__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid #e3e8eb;
}

.location-picker__header strong {
  display: block;
  color: #1d2939;
  font-size: 15px;
}

.location-picker__header small {
  display: block;
  margin-top: 2px;
  color: #667085;
  font-size: 11.5px;
}

.location-picker__close {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 8px;
  padding: 0;
  color: #667085;
  background: #f2f4f7;
  cursor: pointer;
}

.location-picker__close:hover {
  background: #e4e7ec;
  color: #344054;
}

.location-picker__list {
  margin: 0;
  overflow-y: auto;
  list-style: none;
  padding: 8px;
}

.location-picker__item {
  display: grid;
  gap: 4px;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
}

.location-picker__item:hover {
  background: var(--app-primary-wash, #f3fbfe);
}

.location-picker__item + .location-picker__item {
  margin-top: 2px;
}

.location-picker__name {
  color: #1d2939;
  font-size: 13px;
}

.location-picker__address {
  color: #667085;
  font-size: 11.5px;
  line-height: 1.4;
}

.location-picker__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
}

.location-picker__type {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 2px 9px;
  color: var(--theme-default, #18a6e4);
  background: var(--app-primary-wash, #f3fbfe);
  font-size: 10.5px;
  font-weight: 600;
}

.location-picker__place {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #475467;
  font-size: 11px;
  font-weight: 500;
}

.location-picker__distance {
  color: var(--theme-default, #18a6e4);
  font-size: 11px;
  font-weight: 600;
}

@media (max-width: 575.98px) {
  .location-picker {
    width: calc(100vw - 24px);
    max-height: calc(100vh - 48px);
  }
}
</style>
