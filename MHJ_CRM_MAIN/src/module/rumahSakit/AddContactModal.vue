<template>
  <Modal
    title="Tambah Rumah Sakit"
    :modalOpen="contactState.openAddContactModal"
    sizeClass="modal-xl"
    @closeModal="closeRumahSakitModal"
  >
    <form class="form-bookmark needs-validation" @submit.prevent="saveRumahSakit">
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
              <button class="btn btn-outline-primary btn-sm" type="button" @click="addPhone">
                <vue-feather type="plus" size="14" class="me-1" />Tambah nomor
              </button>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Alamat (Google Maps)">
              <div class="input-group">
                <InputField
                  v-model:modelValue="contactState.rumahSakitForm.mapAddress"
                  inputId="rs-map-address"
                  placeholder="Cari nama tempat atau alamat di Google Maps"
                  :required="false"
                />
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  :disabled="!contactState.rumahSakitForm.mapAddress.data.trim()"
                  @click="searchGoogleMaps"
                >
                  <vue-feather type="map-pin" size="16" class="me-1" />Cari Maps
                </button>
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
import { computed, defineAsyncComponent, watch } from "vue";
import { storeToRefs } from "pinia";

import { initInputField, initSelectField } from "@/core/data/common";
import { cityOptionsByProvince, provinceOptions } from "@/core/data/contactCrm";
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

const cityOptions = computed(
  () =>
    cityOptionsByProvince[contactState.value.rumahSakitForm.province.data] || [],
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

function searchGoogleMaps() {
  const query = contactState.value.rumahSakitForm.mapAddress.data.trim();
  if (query)
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
      "_blank",
      "noopener,noreferrer",
    );
}
</script>

<style scoped>
.rumah-sakit-form-body {
  max-height: 70vh;
  overflow-y: auto;
}
</style>
