<template>
  <form class="custom-input contact-edit-form" @submit.prevent="save">
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

      <div class="col-md-6">
        <InputWrapper title="Telepon Utama" required>
          <InputField
            v-model:modelValue="form.telephone1"
            :formSubmitted="formSubmitted"
            inputId="edit-contact-telephone-1"
            inputType="tel"
            placeholder="Masukkan nomor telepon utama"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Telepon Tambahan">
          <InputField
            v-model:modelValue="form.telephone2"
            inputId="edit-contact-telephone-2"
            inputType="tel"
            placeholder="Masukkan nomor telepon tambahan"
            :required="false"
          />
        </InputWrapper>
      </div>

      <div class="col-md-6">
        <InputWrapper title="Status" required>
          <Select
            v-model="form.status"
            :options="statusOptions"
            display-key="label"
            getValueKey="value"
            placeholder="Pilih status kontak"
            :formSubmitted="formSubmitted"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Source">
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
        <InputWrapper title="Rumah Sakit/Perusahaan">
          <Select
            v-model="form.company"
            :options="companyOptions"
            display-key="label"
            getValueKey="value"
            placeholder="Pilih rumah sakit/perusahaan"
            :required="false"
          />
        </InputWrapper>
      </div>
      <div class="col-md-6">
        <InputWrapper title="Kode Kelurahan">
          <InputField
            v-model:modelValue="form.kdKelurahan"
            inputId="edit-contact-kd-kelurahan"
            placeholder="Masukkan kode kelurahan"
            :required="false"
            :maxLength="15"
          />
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
import { useContact, type ContactCrudPayload } from "@/store/contact";

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
const { contactState, contactApi } = storeToRefs(contactStore);
const {
  fetchContactCompanies,
  fetchContactSources,
  fetchContactStatuses,
  updateRemoteContact,
} = contactStore;

const formSubmitted = ref(false);
const saveError = ref("");
const form = ref(createForm());
const companyOptions = computed(() => contactApi.value.companies);
const statusOptions = computed(() => contactApi.value.statuses);
const sourceOptions = computed(() => contactApi.value.sources);

function createForm() {
  return {
    firstName: initInputField(),
    lastName: initInputField(),
    jobTitle: initInputField(),
    email: initInputField(),
    telephone1: initInputField(),
    telephone2: initInputField(),
    status: initSelectField(),
    source: initSelectField(),
    company: initSelectField(),
    kdKelurahan: initInputField(),
    address: initInputField(),
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

function fillForm() {
  const contact = contactState.value.activeContact;
  if (!contact) return;

  form.value.firstName.data = contact.firstName || "";
  form.value.lastName.data = contact.lastName || "";
  form.value.jobTitle.data = contact.jobTitle || "";
  form.value.email.data = contact.email || "";
  form.value.telephone1.data = contact.telephone1 || contact.contactNumber || "";
  form.value.telephone2.data = contact.telephone2 || "";
  form.value.kdKelurahan.data = contact.kdKelurahan || "";
  form.value.address.data = contact.address || "";

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
  form.value.telephone1.errorMessage = form.value.telephone1.data.trim()
    ? ""
    : "Nomor telepon utama wajib diisi.";
  form.value.status.errorMessage = form.value.status.data ? "" : "Status wajib dipilih.";
  if (
    form.value.firstName.errorMessage ||
    form.value.lastName.errorMessage ||
    form.value.telephone1.errorMessage ||
    form.value.status.errorMessage
  ) {
    return;
  }

  const payload: ContactCrudPayload = {
    company_id: nullableId(form.value.company.data || contact.companyId),
    first_name: form.value.firstName.data.trim(),
    last_name: form.value.lastName.data.trim(),
    job_title: nullableText(form.value.jobTitle.data),
    email: nullableText(form.value.email.data),
    status: String(form.value.status.data || contact.statusId || 1),
    telephone_1: form.value.telephone1.data.trim(),
    telephone_2: nullableText(form.value.telephone2.data),
    address: nullableText(form.value.address.data),
    kelurahan: nullableText(form.value.kdKelurahan.data),
    source: nullableId(form.value.source.data || contact.sourceId),
    created_by: contact.createdById ?? null,
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
}

watch(
  () => [
    contactState.value.activeContact,
    companyOptions.value,
    statusOptions.value,
    sourceOptions.value,
  ],
  fillForm,
  { immediate: true },
);

onMounted(async () => {
  const requests: Promise<unknown>[] = [];
  if (!contactApi.value.companies.length) requests.push(fetchContactCompanies());
  if (!contactApi.value.sources.length) requests.push(fetchContactSources());
  if (!contactApi.value.statuses.length) requests.push(fetchContactStatuses());
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
</style>
