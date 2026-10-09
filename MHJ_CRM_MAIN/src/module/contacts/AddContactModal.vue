<template>
  <Modal
    :title="t('contacts.addTitle')"
    :modalOpen="contactState.openAddContactModal"
    sizeClass="modal-xl"
    @closeModal="closeModal"
  >
    <form class="form-bookmark needs-validation" @submit.prevent="handleSave">
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
            <InputWrapper title="Penanggung Jawab">
              <Select
                v-model="contactState.contactForm.owner"
                :options="ownerOptions"
                display-key="label"
                getValueKey="value"
                :placeholder="loggedInOwnerName"
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
                class="btn btn-outline-primary add-phone-button"
                type="button"
                @click="addPhone"
              >
                <vue-feather type="plus" size="17" />
                <span>{{ t('contacts.addPhone') }}</span>
              </button>
            </InputWrapper>
          </div>

          <div class="col-12">
            <InputWrapper :title="t('contacts.mapAddress')">
              <div class="location-field">
                <div class="location-input-group">
                  <div class="location-address-box">
                    <InputField
                      v-model:modelValue="contactState.contactForm.mapAddress"
                      inputId="contact-map-address"
                      placeholder="Alamat lengkap akan muncul dari lokasi saat ini"
                      :required="false"
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
                getValueKey="value"
                :placeholder="t('contacts.placeholders.source')"
                :required="false"
              />
            </InputWrapper>
          </div>
          <div class="col-md-6">
            <InputWrapper title="Status" required>
              <Select
                v-model="contactState.contactForm.status"
                :options="statusOptions"
                display-key="label"
                getValueKey="value"
                placeholder="Pilih status kontak"
                :formSubmitted="contactState.formSubmitted"
              />
            </InputWrapper>
          </div>

          <div class="col-md-6">
            <InputWrapper :title="t('contacts.company')">
              <Select
                v-model="contactState.contactForm.company"
                :options="companyOptions"
                display-key="label"
                getValueKey="value"
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
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

import { initInputField, initSelectField } from "@/core/data/common";
import {
  cityOptionsByProvince,
  projectOptions,
  provinceOptions,
} from "@/core/data/contactCrm";
import { useContact } from "@/store/contact";
import { useAuthStore } from "@/store/auth";
import { useProjectStore } from "@/store/project";
import {
  geolocationErrorMessage,
  getCurrentPosition,
  reverseGeocodeAddress,
} from "@/services/geocoding";
import type { Contact } from "@/types/contacts";

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
  fetchContactCompanies,
  fetchContactSources,
  fetchContactStatuses,
  saveContact,
} = contactStore;

const ownerOptions = computed(() => projectStore.lookups.owner);
const companyOptions = computed(() => contactApi.value.companies);
const sourceOptions = computed(() => contactApi.value.sources);
const statusOptions = computed(() => contactApi.value.statuses);
const locatingAddress = ref(false);
const locationError = ref("");
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
  if (!contactApi.value.companies.length) requests.push(fetchContactCompanies());
  if (!contactApi.value.sources.length) requests.push(fetchContactSources());
  if (!contactApi.value.statuses.length) requests.push(fetchContactStatuses());
  await Promise.allSettled(requests);
  selectLoggedInOwner();
  selectDefaultStatus();
});

async function handleSave() {
  const created = await saveContact();
  if (created) emit("saved", created);
}

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

async function captureCurrentAddress() {
  locationError.value = "";
  locatingAddress.value = true;

  try {
    const position = await getCurrentPosition();
    const address = await reverseGeocodeAddress(
      position.coords.latitude,
      position.coords.longitude,
    );
    contactState.value.contactForm.mapAddress.data = address;
    contactState.value.contactForm.address.data = address;
  } catch (error) {
    locationError.value = geolocationErrorMessage(error);
  } finally {
    locatingAddress.value = false;
  }
}

function clearCurrentAddress() {
  contactState.value.contactForm.mapAddress.data = "";
  contactState.value.contactForm.address.data = "";
  locationError.value = "";
}

function closeModal() {
  locationError.value = "";
  contactState.value.openAddContactModal = false;
  contactState.value.formSubmitted = false;
}
</script>

<style scoped>
.contact-form-body {
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
