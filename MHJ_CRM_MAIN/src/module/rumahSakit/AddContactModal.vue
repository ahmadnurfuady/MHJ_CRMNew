<template>
  <Modal
    title="Tambah Rumah Sakit"
    :modalOpen="contactState.openAddContactModal"
    sizeClass="modal-xl"
    @closeModal="closeRumahSakitModal"
  >
    <form class="form-bookmark needs-validation mhj-form" @submit.prevent="saveRumahSakit">
      <div class="modal-body custom-input rumah-sakit-form-body">
        <div class="row g-3">
          <div class="col-12">
            <InputWrapper title="Nama Rumah Sakit" required>
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.name"
                :formSubmitted="contactState.formSubmitted"
                inputId="rs-name"
                placeholder="Masukkan nama rumah sakit"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Telp" required>
              <div
                v-for="(phone, index) in contactState.rumahSakitForm.phoneNumbers"
                :key="index"
                class="d-flex gap-2 mb-2"
              >
                <div class="flex-grow-1">
                  <InputField
                    v-model:modelValue="contactState.rumahSakitForm.phoneNumbers[index]"
                    :formSubmitted="contactState.formSubmitted"
                    :inputId="`rs-phone-${index}`"
                    inputType="tel"
                    :placeholder="
                      index === 0 ? 'Masukkan nomor telepon' : 'Nomor telepon tambahan'
                    "
                    :required="index === 0"
                  />
                </div>
                <button
                  v-if="contactState.rumahSakitForm.phoneNumbers.length > 1"
                  class="btn btn-outline-danger px-3"
                  type="button"
                  title="Hapus nomor"
                  @click="removePhone(index)"
                >
                  <vue-feather type="trash-2" size="16" />
                </button>
              </div>
              <button
                class="btn btn-outline-primary add-phone-button"
                type="button"
                @click="addPhone"
              >
                <vue-feather type="plus" size="17" />
                <span>Tambah nomor</span>
              </button>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Alamat (Google Maps)">
              <div class="location-field">
                <div class="location-input-group">
                  <div class="location-address-box">
                    <InputField
                      v-model:modelValue="contactState.rumahSakitForm.mapAddress"
                      inputId="rs-map-address"
                      placeholder="Alamat lengkap akan muncul dari lokasi saat ini"
                      :required="false"
                    />
                    <button
                      v-if="contactState.rumahSakitForm.mapAddress.data"
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
                v-model:modelValue="contactState.rumahSakitForm.address"
                inputId="rs-address"
                inputType="textarea"
                placeholder="Ketik alamat lengkap"
                :required="false"
                :rows="2"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Provinsi">
              <Select
                v-model="contactState.rumahSakitForm.province"
                :options="provinceOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Cari provinsi"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="City">
              <Select
                v-model="contactState.rumahSakitForm.city"
                :options="cityOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="
                  contactState.rumahSakitForm.province.data
                    ? 'Cari kota'
                    : 'Pilih provinsi dahulu'
                "
                :disabled="!contactState.rumahSakitForm.province.data"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Jenis">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.jenis"
                inputId="rs-jenis"
                placeholder="Masukkan jenis"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Tipe">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.tipe"
                inputId="rs-tipe"
                placeholder="Masukkan tipe"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Penyelenggara">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.penyelenggara"
                inputId="rs-penyelenggara"
                placeholder="Masukkan penyelenggara"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Tipe Marketing GO500">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.tipeMarketingGo500"
                inputId="rs-tipe-marketing"
                placeholder="Masukkan tipe marketing GO500"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="SIRS">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.sirs"
                inputId="rs-sirs"
                placeholder="Masukkan kode SIRS"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Keterangan">
              <InputField
                v-model:modelValue="contactState.rumahSakitForm.keterangan"
                inputId="rs-keterangan"
                inputType="textarea"
                placeholder="Tulis keterangan"
                :required="false"
                :rows="3"
              />
            </InputWrapper>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-light" type="button" @click="closeRumahSakitModal">Batal</button>
        <button class="btn btn-primary" type="submit">
          <vue-feather type="save" size="16" class="me-1" />Simpan Rumah Sakit
        </button>
      </div>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch } from "vue";
import { storeToRefs } from "pinia";

import { initInputField, initSelectField } from "@/core/data/common";
import { useCompanyRegions } from "@/composable/useCompanyRegions";
import {
  geolocationErrorMessage,
  getCurrentPosition,
  reverseGeocodeAddress,
} from "@/services/geocoding";
import { useContact } from "@/store/contact";

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
const locatingAddress = ref(false);
const locationError = ref("");

const { provinceOptions, cityOptionsByProvince } = useCompanyRegions();

const cityOptions = computed(
  () =>
    cityOptionsByProvince.value[contactState.value.rumahSakitForm.province.data] ||
    [],
);

watch(
  () => contactState.value.rumahSakitForm.province.data,
  (province, previousProvince) => {
    if (previousProvince && province !== previousProvince)
      contactState.value.rumahSakitForm.city = initSelectField();
  },
);

function addPhone() {
  contactState.value.rumahSakitForm.phoneNumbers.push(initInputField());
}

function removePhone(index: number) {
  contactState.value.rumahSakitForm.phoneNumbers.splice(index, 1);
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
    contactState.value.rumahSakitForm.mapAddress.data = address;
    contactState.value.rumahSakitForm.address.data = address;
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    locatingAddress.value = false;
  }
}

function clearCurrentAddress() {
  contactState.value.rumahSakitForm.mapAddress.data = "";
  contactState.value.rumahSakitForm.address.data = "";
  locationError.value = "";
}
</script>

<style scoped>
.rumah-sakit-form-body {
  max-height: 70vh;
  overflow-y: auto;
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
