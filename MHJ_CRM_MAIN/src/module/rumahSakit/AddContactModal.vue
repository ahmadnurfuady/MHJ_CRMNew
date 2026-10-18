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
            <InputWrapper title="Nama Rumah Sakit" required>
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.name"
                :formSubmitted="contactState.formSubmitted"
                inputId="rs-name"
                placeholder="Masukkan nama rumah sakit / faskes..."
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
                    :formatValue="true"
                    :formatFunction="sanitizeIndonesianPhoneInput"
                    :placeholder="
                      index === 0
                        ? 'Contoh: 021-1234567 / 08123456789'
                        : 'Nomor telepon tambahan'
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
                  class="btn btn-outline-danger px-3"
                  type="button"
                  title="Hapus nomor"
                  @click="removePhone(index)"
                >
                  <vue-feather type="trash-2" size="16" />
                </button>
              </div>
              <button
                v-if="!readOnly"
                class="btn btn-outline-primary add-phone-button"
                type="button"
                @click="addPhone"
              >
                <vue-feather type="plus" size="17" />
                <span>Tambah nomor telepon</span>
              </button>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Email Faskes">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.email"
                inputId="rs-email"
                inputType="email"
                placeholder="Contoh: info@rumahsakit.com"
                :required="false"
                :validator="optionalEmailValidator"
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
                        (addressSuggestions.length || searchingAddress)
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
                <small v-if="addressSearchNoResult" class="text-muted">
                  Lokasi tidak ditemukan, coba kata kunci lain.
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
                placeholder="Masukkan alamat lengkap rumah sakit..."
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
                :disabled="readOnly"
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
                  readOnly || !contactState.rumahSakitForm.province.data
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
          <vue-feather type="save" size="16" class="me-1" />
          {{ isEditing ? "Simpan Perubahan" : "Simpan" }}
        </button>
      </div>
    </form>
  </component>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useDebounceFn } from "@vueuse/core";
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";

import { initInputField, initSelectField } from "@/core/data/common";
import { useCompanyRegions } from "@/composable/useCompanyRegions";
import { useHospitalLookups } from "@/composable/useHospitalLookups";
import {
  geolocationErrorMessage,
  getCurrentPosition,
  reverseGeocodeLocation,
  searchAddress,
  type AddressSearchResult,
} from "@/services/geocoding";
import { useContact } from "@/store/contact";
import { sanitizeIndonesianPhoneInput } from "@/utils/indonesianPhone";
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
        title: isEditing.value ? "Edit Rumah Sakit" : "Tambah Rumah Sakit",
        modalOpen: contactState.value.openAddContactModal,
        sizeClass: "modal-xl",
      },
);
const locatingAddress = ref(false);
const locationError = ref("");
const optionalEmailValidator = (value: string) =>
  value.trim() ? validateEmail(value).errorMessage : "";

const addressSuggestions = ref<AddressSearchResult[]>([]);
const searchingAddress = ref(false);
const addressSearchError = ref("");
const addressSearchNoResult = ref(false);
const selectedLocation = ref<{ lat: number; lng: number } | null>(
  contactState.value.hospitalEditLocation
    ? { ...contactState.value.hospitalEditLocation }
    : null,
);
const pinUpdating = ref(false);
let suppressNextAddressSearch = false;
let suppressProvinceCityReset = false;

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
  await Promise.all([loadRegions(), loadHospitalLookups()]);
  reconcileLookupSelections();
  await loadStoredLocationPreview();
});

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
  if (selectedLocation.value) return;
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

  suppressProvinceCityReset = true;
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
  () => contactState.value.rumahSakitForm.mapAddress.data,
  (value) => {
    if (props.readOnly) return;
    if (suppressNextAddressSearch) {
      suppressNextAddressSearch = false;
      return;
    }
    // Teks diketik ulang secara manual: pin peta sebelumnya tidak lagi mewakili teks ini.
    selectedLocation.value = null;
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
    locationError.value =
      error instanceof Error
        ? error.message
        : "Gagal memuat alamat dari titik ini.";
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

function addPhone() {
  contactState.value.rumahSakitForm.phoneNumbers.push(initInputField());
}

function removePhone(index: number) {
  contactState.value.rumahSakitForm.phoneNumbers.splice(index, 1);
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

.add-phone-button {
  display: inline-flex;
  min-width: 184px;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  border-color: var(--theme-default, #18a6e4) !important;
  color: var(--theme-default, #1688bd) !important;
  background: #fff !important;
}

.add-phone-button > span,
.add-phone-button :deep(svg) {
  color: inherit !important;
  stroke: currentColor !important;
}

.add-phone-button:hover,
.add-phone-button:focus,
.add-phone-button:focus-visible,
.add-phone-button:active {
  border-color: var(--theme-default, #18a6e4) !important;
  color: #fff !important;
  background: var(--theme-default, #18a6e4) !important;
}

.add-phone-button:focus-visible {
  box-shadow: 0 0 0 3px rgba(24, 166, 228, 0.22) !important;
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
  background: #f3fbfe;
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
  .add-phone-button {
    width: 100%;
  }

  .location-input-group {
    grid-template-columns: minmax(0, 1fr) 132px;
  }

  .location-button {
    min-width: 132px;
    padding-inline: 10px;
  }
}
</style>
