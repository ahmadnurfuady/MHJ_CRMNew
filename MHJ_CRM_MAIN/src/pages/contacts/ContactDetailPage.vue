<template>
  <div class="contact-detail-page">
    <div class="detail-toolbar">
      <button type="button" class="back-button" :aria-label="backButtonLabel" @click="handleBack">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <div>
        <p>Contacts</p>
        <h3>Detail Kontak</h3>
      </div>
    </div>

    <div v-if="loading && !activeContact" class="detail-state card">
      <span class="spinner-border text-primary" aria-hidden="true"></span>
      <strong>Memuat detail kontak...</strong>
    </div>

    <div v-else-if="loadError || !activeContact" class="detail-state card">
      <div class="error-icon"><i class="fa-solid fa-circle-exclamation"></i></div>
      <strong>Detail kontak tidak dapat ditampilkan</strong>
      <p>{{ loadError || "Data kontak tidak ditemukan." }}</p>
      <router-link :to="routes.App.Contacts" class="btn btn-primary btn-sm">
        Kembali ke daftar
      </router-link>
    </div>

    <div v-else class="detail-content">
      <section v-if="contactState.historyVisible" class="content-card history-view">
        <ContactHistory />
      </section>
      <section v-else-if="contactState.isEditContact" class="content-card edit-view">
        <div class="section-heading">
          <div><p>Perbarui data</p><h5>Edit Kontak</h5></div>
        </div>
        <EditContactForm />
      </section>
      <GeneralDetails v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { useProjectStore } from "@/store/project";

const GeneralDetails = defineAsyncComponent(
  () => import("@/module/contacts/GeneralDetails.vue"),
);
const EditContactForm = defineAsyncComponent(
  () => import("@/module/contacts/EditContactForm.vue"),
);
const ContactHistory = defineAsyncComponent(
  () => import("@/module/contacts/ContactHistory.vue"),
);

const props = defineProps<{ contactId: number }>();
const router = useRouter();
const contactStore = useContact();
const hospitalStore = useHospitalStore();
const projectStore = useProjectStore();
const { contactState, contactApi } = storeToRefs(contactStore);
const loadError = ref("");

const activeContact = computed(() => contactState.value.activeContact);
const loading = computed(
  () => contactApi.value.detailLoading || hospitalStore.detailLoading || projectStore.loading,
);
const backButtonLabel = computed(() =>
  contactState.value.historyVisible || contactState.value.isEditContact
    ? "Kembali ke detail kontak"
    : "Kembali ke halaman sebelumnya",
);

function handleBack() {
  if (contactState.value.historyVisible) {
    contactState.value.historyVisible = false;
    return;
  }
  if (contactState.value.isEditContact) {
    contactState.value.isEditContact = false;
    return;
  }

  if (window.history.state?.back) {
    router.back();
    return;
  }
  void router.push(routes.App.Contacts);
}

async function loadContact() {
  loadError.value = "";
  contactState.value.activeContact = undefined;
  contactState.value.isEditContact = false;
  contactState.value.historyVisible = false;

  try {
    const contact = await contactStore.fetchRemoteContactById(props.contactId);
    if (!contact) throw new Error("Data kontak tidak ditemukan.");
    contactState.value.activeContact = contact;

    const companyId = Number(contact.companyId);
    const requests: Promise<unknown>[] = [
      projectStore.fetchProjects({ per_page: 100 }),
      projectStore.fetchProjectLeaders(),
    ];
    if (Number.isFinite(companyId) && companyId > 0) {
      requests.push(hospitalStore.fetchHospitalById(companyId));
    }
    await Promise.allSettled(requests);

    const associatedContact = hospitalStore.contactAssociations.find(
      (item) => String(item.id) === String(contact.remoteId),
    );
    if (associatedContact) {
      contact.country = associatedContact.country || contact.country;
      contact.province = associatedContact.province || contact.province;
      contact.city = associatedContact.city || contact.city;
      contact.gender = associatedContact.gender || contact.gender;
      contact.createdById = associatedContact.createdById ?? contact.createdById;
      contact.project = associatedContact.projectName || contact.project;
      contact.projectId = associatedContact.projectId
        ? String(associatedContact.projectId)
        : contact.projectId;
      contact.latitude = associatedContact.latitude ?? contact.latitude;
      contact.longitude = associatedContact.longitude ?? contact.longitude;
    }

    const contactLeader = projectStore.lookups.owner.find(
      (leader) => String(leader.value) === String(contact.createdById),
    );
    if (contactLeader?.label) contact.owner = contactLeader.label;
  } catch (error) {
    loadError.value =
      error instanceof Error ? error.message : contactApi.value.error || "Gagal memuat detail kontak.";
  }
}

watch(() => props.contactId, loadContact, { immediate: true });
</script>

<style scoped>
.contact-detail-page {
  --contact-primary: var(--theme-default, #18a6e4);
  padding-bottom: 28px;
}

.detail-toolbar {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.detail-toolbar p {
  margin: 0 0 2px;
  color: #73808d;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: capitalize;
}

.detail-toolbar h3 {
  margin: 0;
  color: #17212b;
  font-size: 23px;
}

.back-button {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid #e2e8ed;
  border-radius: 12px;
  color: var(--contact-primary);
  background: #fff;
  box-shadow: 0 4px 14px rgba(26, 47, 67, 0.06);
  padding: 0;
}

.detail-content {
  border: 1px solid #e5eaee;
  border-radius: 16px;
  padding: 24px;
  background: #fff;
  box-shadow: 0 7px 24px rgba(31, 52, 73, 0.05);
}

.content-card {
  min-height: 420px;
}

.history-view {
  min-height: 0;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid #e8ecef;
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.section-heading p {
  margin: 0 0 3px;
  color: var(--contact-primary);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: capitalize;
}

.section-heading h5 {
  margin: 0;
}

.detail-state {
  display: flex;
  min-height: 330px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e5eaee;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
}

.detail-state p {
  margin: 0;
  color: #73808d;
}

.error-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: #d93b43;
  background: #fde7e8;
  font-size: 19px;
}

@media (max-width: 575.98px) {
  .detail-toolbar h3 { font-size: 19px; }
  .detail-content { border-radius: 12px; padding: 16px; }
  .section-heading { align-items: flex-start; }
}
</style>
