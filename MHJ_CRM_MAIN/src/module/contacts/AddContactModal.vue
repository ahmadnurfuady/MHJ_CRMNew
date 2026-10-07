<template>
  <Modal
    :title="t('contacts.addTitle')"
    :modalOpen="contactState.openAddContactModal"
    sizeClass="modal-xl"
    @closeModal="closeModal"
  >
    <form class="form-bookmark needs-validation" @submit.prevent="saveContact">
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
            <InputWrapper :title="t('contacts.lastName')" required>
              <InputField
                v-model:modelValue="contactState.contactForm.lastName"
                :formSubmitted="contactState.formSubmitted"
                inputId="contact-last-name"
                :placeholder="t('contacts.placeholders.lastName')"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper :title="t('contacts.jobTitle')">
              <InputField
                v-model:modelValue="contactState.contactForm.jobTitle"
                inputId="contact-job-title"
                :placeholder="t('contacts.placeholders.jobTitle')"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.owner')">
              <Select
                v-model="contactState.contactForm.owner"
                :options="ownerOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="t('contacts.placeholders.owner')"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper :title="t('contacts.email')" required>
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
                    :placeholder="
                      index === 0
                        ? t('contacts.placeholders.phone')
                        : t('contacts.placeholders.additionalPhone')
                    "
                    :required="index === 0"
                  />
                </div>
                <button
                  v-if="contactState.contactForm.phoneNumbers.length > 1"
                  class="btn btn-outline-danger px-3"
                  type="button"
                  :title="t('contacts.deletePhone')"
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
                <vue-feather type="plus" size="14" class="me-1" />{{
                  t('contacts.addPhone')
                }}
              </button>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper :title="t('contacts.mapAddress')">
              <div class="input-group">
                <InputField
                  v-model:modelValue="contactState.contactForm.mapAddress"
                  inputId="contact-map-address"
                  :placeholder="t('contacts.placeholders.mapAddress')"
                  :required="false"
                />
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  :disabled="!contactState.contactForm.mapAddress.data.trim()"
                  @click="searchGoogleMaps"
                >
                  <vue-feather type="map-pin" size="16" class="me-1" />{{
                    t('contacts.searchMaps')
                  }}
                </button>
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
            <InputWrapper :title="t('contacts.province')">
              <Select
                v-model="contactState.contactForm.province"
                :options="provinceOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="t('contacts.placeholders.province')"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.city')">
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
                :disabled="!contactState.contactForm.province.data"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper :title="t('contacts.source')">
              <Select
                v-model="contactState.contactForm.source"
                :options="sourceOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="t('contacts.placeholders.source')"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.gender')">
              <Select
                v-model="contactState.contactForm.gender"
                :options="genderOptions"
                display-key="label"
                getValueKey="value"
                :placeholder="t('contacts.placeholders.gender')"
                :required="false"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper :title="t('contacts.company')">
              <Select
                v-model="contactState.contactForm.company"
                :options="companyOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="t('contacts.placeholders.company')"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper :title="t('contacts.project')">
              <Select
                v-model="contactState.contactForm.project"
                :options="projectOptions"
                display-key="label"
                getValueKey="label"
                :placeholder="t('contacts.placeholders.project')"
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
          <vue-feather type="save" size="16" class="me-1" />{{ t('contacts.save') }}
        </button>
      </div>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, watch } from "vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

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
