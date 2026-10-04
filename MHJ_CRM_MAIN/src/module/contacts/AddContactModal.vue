<template>
  <Modal
    title="Tambah Kontak Person"
    :modalOpen="contactState.openAddContactModal"
    sizeClass="modal-xl"
    @closeModal="closeModal"
  >
    <form class="form-bookmark needs-validation" @submit.prevent="saveContact">
      <div class="modal-body custom-input contact-form-body">
        <div class="row g-3">
          <div class="col-md-6">
            <InputWrapper title="Nama Depan" required>
              <InputField
                v-model:modelValue="contactState.contactForm.firstName"
                :formSubmitted="contactState.formSubmitted"
                inputId="contact-first-name"
                placeholder="Masukkan nama depan"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Nama Belakang" required>
              <InputField
                v-model:modelValue="contactState.contactForm.lastName"
                :formSubmitted="contactState.formSubmitted"
                inputId="contact-last-name"
                placeholder="Masukkan nama belakang"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Jabatan">
              <InputField
                v-model:modelValue="contactState.contactForm.jobTitle"
                inputId="contact-job-title"
                placeholder="Contoh: Kepala Instalasi Radiologi"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Owner">
              <Select
                v-model="contactState.contactForm.owner"
                :options="ownerOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Cari nama user"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Email" required>
              <InputField
                v-model:modelValue="contactState.contactForm.email"
                :formSubmitted="contactState.formSubmitted"
                inputId="contact-email"
                inputType="email"
                placeholder="nama@perusahaan.com"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Telepon" required>
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
                    :placeholder="
                      index === 0
                        ? 'Masukkan nomor telepon'
                        : 'Nomor telepon tambahan'
                    "
                    :required="index === 0"
                  />
                </div>
                <button
                  v-if="contactState.contactForm.phoneNumbers.length > 1"
                  class="btn btn-outline-danger px-3"
                  type="button"
                  title="Hapus nomor"
                  @click="removePhone(index)"
                >
                  <vue-feather type="trash-2" size="16" />
                </button>
              </div>
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="addPhone"
              >
                <vue-feather type="plus" size="14" class="me-1" />Tambah nomor
              </button>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper title="Alamat (Google Maps)">
              <div class="input-group">
                <InputField
                  v-model:modelValue="contactState.contactForm.mapAddress"
                  inputId="contact-map-address"
                  placeholder="Cari nama tempat atau alamat di Google Maps"
                  :required="false"
                />
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  :disabled="!contactState.contactForm.mapAddress.data.trim()"
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
                v-model:modelValue="contactState.contactForm.address"
                inputId="contact-address"
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
                v-model="contactState.contactForm.province"
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
                v-model="contactState.contactForm.city"
                :options="cityOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="
                  contactState.contactForm.province.data
                    ? 'Cari kota'
                    : 'Pilih provinsi dahulu'
                "
                :disabled="!contactState.contactForm.province.data"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Source">
              <Select
                v-model="contactState.contactForm.source"
                :options="sourceOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Pilih sumber kontak"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Jenis Kelamin">
              <Select
                v-model="contactState.contactForm.gender"
                :options="genderOptions"
                display-key="label"
                getValueKey="value"
                placeholder="Pilih L / P"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper title="Perusahaan">
              <Select
                v-model="contactState.contactForm.company"
                :options="companyOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Cari perusahaan"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Project">
              <Select
                v-model="contactState.contactForm.project"
                :options="projectOptions"
                display-key="label"
                getValueKey="label"
                placeholder="Cari nama project"
                :required="false"
              />
            </InputWrapper>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-light" type="button" @click="closeModal">
          Batal
        </button>
        <button class="btn btn-primary" type="submit">
          <vue-feather type="save" size="16" class="me-1" />Simpan Kontak
        </button>
      </div>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, watch } from "vue";
import { storeToRefs } from "pinia";

import { initInputField, initSelectField } from "@/core/data/common";
import {
  cityOptionsByProvince,
  companyOptions,
  genderOptions,
  ownerOptions,
  projectOptions,
  provinceOptions,
  sourceOptions,
} from "@/core/data/contactCrm";
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
const { saveContact } = contactStore;

const cityOptions = computed(
  () =>
    cityOptionsByProvince[contactState.value.contactForm.province.data] || [],
);

watch(
  () => contactState.value.contactForm.province.data,
  (province, previousProvince) => {
    if (previousProvince && province !== previousProvince)
      contactState.value.contactForm.city = initSelectField();
  },
);

function addPhone() {
  contactState.value.contactForm.phoneNumbers.push(initInputField());
}

function removePhone(index: number) {
  contactState.value.contactForm.phoneNumbers.splice(index, 1);
}

function searchGoogleMaps() {
  const query = contactState.value.contactForm.mapAddress.data.trim();
  if (query)
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
      "_blank",
      "noopener,noreferrer",
    );
}

function closeModal() {
  contactState.value.openAddContactModal = false;
  contactState.value.formSubmitted = false;
}
</script>

<style scoped>
.contact-form-body {
  max-height: 70vh;
  overflow-y: auto;
}
</style>
