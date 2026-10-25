<template>
  <div class="contact-detail-page">
    <div v-if="loading && !activeContact" class="detail-state card">
      <span class="spinner-border text-primary" aria-hidden="true"></span>
      <strong>Memuat detail kontak...</strong>
    </div>

    <div v-else-if="loadError || !activeContact" class="detail-state card">
      <div class="error-icon"><SolarIcon name="fa-circle-exclamation" /></div>
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
        <EditContactForm @cancel="cancelContactEdit" @saved="finishContactEdit" />
      </section>
      <GeneralDetails v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  defineAsyncComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { storeToRefs } from "pinia";
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
  type LocationQueryRaw,
} from "vue-router";
import { routes } from "@/router/routes";
import {
  usePageBackHandler,
  usePageTitle,
} from "@/composable/usePageHeader";
import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { useProjectStore } from "@/store/project";
import { confirmEditExit } from "@/utils/confirmEditExit";

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
const route = useRoute();
const router = useRouter();
// Judul "Detail Kontak" + tombol kembali tampil di baris BreadCrumbs global.
usePageTitle("Detail Kontak");
usePageBackHandler(() => handleBack());
const contactStore = useContact();
const hospitalStore = useHospitalStore();
const projectStore = useProjectStore();
const { contactState, contactApi } = storeToRefs(contactStore);
const loadError = ref("");
let allowEditNavigation = false;

const activeContact = computed(() => contactState.value.activeContact);
const loading = computed(
  () => contactApi.value.detailLoading || hospitalStore.detailLoading || projectStore.loading,
);
const backButtonLabel = computed(() =>
  contactState.value.historyVisible || contactState.value.isEditContact
    ? "Kembali ke detail kontak"
    : "Kembali ke halaman sebelumnya",
);

const CONTACT_SECTION_HASHES = new Set([
  "#contact-faskes-detail",
  "#contact-opportunity-detail",
]);

async function scrollToRequestedSection() {
  if (!CONTACT_SECTION_HASHES.has(route.hash)) return;
  await nextTick();

  // GeneralDetails dimuat secara async; beri beberapa frame sampai section tersedia.
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const section = document.querySelector<HTMLElement>(route.hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  }
}

function detailRouteQuery() {
  const query = { ...route.query, detail: String(props.contactId) } as LocationQueryRaw & {
    edit?: unknown;
  };
  delete query.edit;
  return query;
}

async function finishContactEdit() {
  allowEditNavigation = true;
  contactState.value.isEditContact = false;
  await router.replace({ path: routes.App.Contacts, query: detailRouteQuery() });
}

async function cancelContactEdit() {
  if (!(await confirmEditExit())) return;
  await finishContactEdit();
}

async function handleBack() {
  if (contactState.value.historyVisible) {
    contactState.value.historyVisible = false;
    return;
  }
  if (contactState.value.isEditContact) {
    await cancelContactEdit();
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
  contactState.value.isEditContact = String(route.query.edit ?? "") === "1";
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
    if (!contact.isDemo && Number.isFinite(companyId) && companyId > 0) {
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
    await scrollToRequestedSection();
  } catch (error) {
    loadError.value =
      error instanceof Error ? error.message : contactApi.value.error || "Gagal memuat detail kontak.";
  }
}

watch(() => props.contactId, loadContact, { immediate: true });
watch(() => route.hash, scrollToRequestedSection);

watch(
  () => contactState.value.isEditContact,
  (editing) => {
    if (editing && String(route.query.edit ?? "") !== "1") {
      allowEditNavigation = false;
      void router.push({
        path: routes.App.Contacts,
        query: { ...route.query, detail: String(props.contactId), edit: "1" },
      });
    }
  },
);

watch(
  () => route.query.edit,
  (edit) => {
    const routeIsEditing = String(edit ?? "") === "1";
    if (routeIsEditing && activeContact.value) {
      allowEditNavigation = false;
      contactState.value.isEditContact = true;
    } else if (!routeIsEditing && allowEditNavigation) {
      contactState.value.isEditContact = false;
    }
  },
);

async function confirmContactNavigation() {
  if (!contactState.value.isEditContact || allowEditNavigation) return true;
  const confirmed = await confirmEditExit();
  if (confirmed) {
    allowEditNavigation = true;
    contactState.value.isEditContact = false;
  }
  return confirmed;
}

onBeforeRouteUpdate((to, from) => {
  const leavingEdit = String(from.query.edit ?? "") === "1" && String(to.query.edit ?? "") !== "1";
  return leavingEdit ? confirmContactNavigation() : true;
});
onBeforeRouteLeave((_to, _from) => confirmContactNavigation());

function warnBeforeUnload(event: BeforeUnloadEvent) {
  if (!contactState.value.isEditContact) return;
  event.preventDefault();
  event.returnValue = "";
}

onMounted(() => window.addEventListener("beforeunload", warnBeforeUnload));
onBeforeUnmount(() => window.removeEventListener("beforeunload", warnBeforeUnload));
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
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.28);
  border-radius: 12px;
  padding: 0;
  background: #fff;
  box-shadow: none;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    box-shadow 0.18s ease;
}

.back-button :deep(.solar-icon) {
  transition:
    color 0.18s ease,
    transform 0.18s ease;
}

.back-button:hover :deep(.solar-icon),
.back-button:focus-visible :deep(.solar-icon) {
  color: #fff !important;
  transform: translateX(-2px);
}

.back-button:hover,
.back-button:focus-visible {
  border-color: var(--contact-primary);
  background: var(--contact-primary);
  box-shadow: 0 6px 16px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.back-button:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  outline-offset: 2px;
}

.detail-content {
  min-width: 0;
}

.content-card {
  min-height: 420px;
}

.edit-view {
  border: 1px solid #e5eaee;
  border-radius: 16px;
  padding: 24px;
  background: #fff;
  box-shadow: 0 7px 24px rgba(31, 52, 73, 0.05);
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
  .edit-view { border-radius: 12px; padding: 16px; }
  .section-heading { align-items: flex-start; }
}
</style>
