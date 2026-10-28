<template>
  <template v-if="contactState.activeContact">
    <section class="contact-header contact-profile-summary">
      <div class="contact-avatar-shell">
        <div
          class="contact-profile-avatar"
          :style="avatarColorStyle(fullName || contactState.activeContact.id)"
          role="img"
          :aria-label="`Inisial ${fullName}`"
        >
          {{
            personInitials(
              contactState.activeContact.firstName,
              contactState.activeContact.lastName,
            )
          }}
        </div>
        <span class="contact-avatar-status" aria-hidden="true"></span>
      </div>
      <div class="contact-identity">
        <span class="contact-profile-label">
          <vue-feather type="user" size="13" />
          Profil Kontak
        </span>
        <h4 class="contact-identity__row mb-0">{{ fullName }}</h4>
        <p class="contact-identity__row contact-role mb-0">
          {{ contactState.activeContact.jobTitle || "Jabatan belum diisi" }}
        </p>
        <div class="contact-profile-meta">
          <button
            class="contact-meta-jump"
            type="button"
            :aria-label="`Lihat detail ${faskesCount} faskes`"
            @click="scrollToDetail('contact-faskes-detail')"
          >
            <SolarIcon
              name="hospital"
              :size="18"
              color="var(--app-primary-dark, #087CAE)"
              secondary-color="var(--app-primary, #18A6E4)"
              :secondary-opacity="0.45"
              aria-hidden="true"
            />
            Faskes ({{ faskesCount }})
          </button>
          <button
            class="contact-meta-jump"
            type="button"
            :aria-label="`Lihat detail ${opportunityCount} peluang`"
            @click="scrollToDetail('contact-opportunity-detail')"
          >
            <SolarIcon
              name="chart"
              :size="18"
              color="var(--app-primary-dark, #087CAE)"
              secondary-color="var(--app-primary, #18A6E4)"
              :secondary-opacity="0.45"
              aria-hidden="true"
            />
            Peluang ({{ opportunityCount }})
          </button>
          <a
            v-if="contactState.activeContact.email"
            :href="`mailto:${contactState.activeContact.email}`"
          >
            <SolarIcon
              name="letter"
              :size="16"
              color="var(--app-primary-dark, #087CAE)"
              secondary-color="var(--app-primary, #18A6E4)"
              :secondary-opacity="0.45"
              aria-hidden="true"
            />
            {{ contactState.activeContact.email }}
          </a>
          <span v-if="contactLocation.city !== '-'">
            <SolarIcon
              name="map-point"
              :size="16"
              color="var(--app-primary-dark, #087CAE)"
              secondary-color="var(--app-primary, #18A6E4)"
              :secondary-opacity="0.45"
              aria-hidden="true"
            />
            {{ contactLocation.city }}
          </span>
        </div>
      </div>
      <div class="contact-primary-actions">
        <button class="profile-action profile-action--primary" type="button" @click="editContact">
          <vue-feather type="edit-2" size="14" />Edit
        </button>
        <button class="profile-action" type="button" @click="showHistory">
          <vue-feather type="clock" size="14" />Aktivitas
        </button>
      </div>
    </section>

    <section class="detail-section contact-information-card mt-4 mb-4">
      <header class="detail-section-header">
        <div class="detail-section-title">
          <span class="detail-section-icon" aria-hidden="true">
            <vue-feather type="user-check" size="19" />
          </span>
          <div>
            <h5>Informasi Kontak</h5>
            <p>Data pribadi dan informasi untuk menghubungi kontak.</p>
          </div>
        </div>
        <span v-if="contactApi.detailLoading" class="text-muted f-12">Memuat detail...</span>
      </header>
      <div class="detail-section-body">
        <div class="row g-3 contact-info-grid">
          <div class="col-md-6">
            <span>Nama Depan</span>
            <strong>{{ contactState.activeContact.firstName || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Nama Belakang</span>
            <strong>{{ contactState.activeContact.lastName || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Jabatan</span>
            <strong>{{ contactState.activeContact.jobTitle || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Penanggung Jawab</span>
            <strong>{{ ownerLabel }}</strong>
          </div>
          <div class="col-md-6">
            <span>Email</span>
            <strong>{{ contactState.activeContact.email || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Faskes</span>
            <strong>{{ companyLabel }}</strong>
          </div>
          <div class="col-md-6">
            <span>Gender</span>
            <strong>{{ displayValue(contactState.activeContact.gender) }}</strong>
          </div>
          <div class="col-12 contact-phone-field">
            <span>Nomor Telepon</span>
            <div v-if="contactPhoneNumbers.length" class="row g-3 contact-phone-list">
              <div
                v-for="phone in contactPhoneNumbers"
                :key="phone"
                class="col-12 col-md-6"
              >
                <div class="contact-phone-item">
                  <strong>{{ phone }}</strong>
                  <div class="contact-phone-actions">
                    <a
                      :href="indonesianPhoneCallUrl(phone)"
                      :aria-label="`Telepon ${phone}`"
                      :title="`Telepon ${phone}`"
                    >
                      <MhjIcon name="action_phone" :size="16" />
                    </a>
                    <a
                      :href="indonesianWhatsAppUrl(phone)"
                      :aria-label="`WhatsApp ${phone}`"
                      :title="`WhatsApp ${phone}`"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MhjIcon name="whatsapp" :size="16" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <strong v-else>-</strong>
          </div>
          <div class="col-12">
            <span>Alamat</span>
            <strong>{{ contactState.activeContact.address || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Negara</span>
            <strong>{{ contactLocation.country }}</strong>
          </div>
          <div class="col-md-6">
            <span>Provinsi</span>
            <strong>{{ contactLocation.province }}</strong>
          </div>
          <div class="col-md-6">
            <span>Kota</span>
            <strong>{{ contactLocation.city }}</strong>
          </div>
          <div class="col-md-6">
            <span>Sumber</span>
            <strong>{{ sourceLabel }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section id="contact-faskes-detail" class="company-dashboard">
      <div class="company-section-heading mb-3">
        <span class="detail-section-icon" aria-hidden="true">
          <vue-feather type="home" size="19" />
        </span>
        <div>
          <h5>Detail Faskes</h5>
          <p>
            Ringkasan faskes dan aktivitas peluang
          </p>
        </div>
      </div>

      <template v-if="companyDetail">
        <div
          v-if="companiesForContact.length > 1"
          class="company-switcher mb-4"
          role="tablist"
          aria-label="Pilih faskes kontak"
        >
          <button
            v-for="company in companiesForContact"
            :key="company.name"
            class="company-switcher__button"
            :class="{ 'company-switcher__button--active': company.name === selectedCompanyName }"
            type="button"
            role="tab"
            :aria-selected="company.name === selectedCompanyName"
            @click="selectCompany(company.name)"
          >
            <SolarIcon
              name="hospital"
              :size="16"
              color="currentColor"
              secondary-color="currentColor"
              :secondary-opacity="0.42"
              aria-hidden="true"
            />
            <span>{{ company.name }}</span>
          </button>
        </div>

        <div class="card border mb-4 company-profile-card">
          <div
            class="card-header d-flex justify-content-between align-items-center pb-2"
          >
            <div class="d-flex align-items-center gap-2 flex-wrap">
              <h6 class="mb-0">Profil Faskes</h6>
            </div>
            <span
              v-if="!canEditSelectedCompanyProfile"
              class="badge badge-light-secondary"
              >Read only</span
            >
          </div>
          <div class="card-body pt-3">
            <div class="row g-3 contact-info-grid">
              <div class="col-md-6">
                <span>Nama</span><strong>{{ companyDetail.name }}</strong>
              </div>
              <div class="col-md-6">
                <span>Jenis</span><strong>{{ companyDetail.type }}</strong>
              </div>
              <div class="col-md-6">
                <span>Telepon</span>
                <input
                  v-if="isEditingCompany"
                  v-model="companyDraft.phone"
                  class="form-control form-control-sm"
                />
                <strong v-else>{{ companyDetail.phone }}</strong>
              </div>
              <div class="col-md-6">
                <span>Website</span>
                <input
                  v-if="isEditingCompany"
                  v-model="companyDraft.website"
                  class="form-control form-control-sm"
                />
                <a
                  v-else-if="companyDetail.website"
                  :href="companyDetail.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ companyDetail.website }}</a
                >
                <strong v-else>-</strong>
              </div>
              <div class="col-12">
                <span>Alamat</span>
                <textarea
                  v-if="isEditingCompany"
                  v-model="companyDraft.address"
                  class="form-control form-control-sm"
                  rows="2"
                ></textarea>
                <strong v-else>{{ companyDetail.address }}</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="stage-summary-grid mb-4">
          <div
            v-for="summary in stageSummaries"
            :key="summary.stage"
            class="card border mb-0 stage-summary"
          >
            <div class="card-body">
              <div
                class="stage-summary-heading"
                :title="`${summary.stage} (${summary.quantity})`"
              >
                <span
                  class="badge stage-summary-badge"
                  :class="stageBadgeClass(summary.stage)"
                >{{ summary.stage }}</span>
                <span class="stage-summary-count">({{ summary.quantity }})</span>
              </div>
              <p class="stage-value mb-0 text-muted" :title="formatCurrency(summary.value)">
                {{ formatCurrency(summary.value) }}
              </p>
            </div>
          </div>
        </div>

        <div id="contact-opportunity-detail" class="card border mb-4 opportunity-card">
          <div class="card-header d-flex align-items-center gap-2 flex-wrap pb-2">
            <h6 class="mb-0">Peluang Berjalan per Stage</h6>
          </div>
          <div class="card-body pt-3">
            <template v-if="groupedProjects.length">
              <div
                v-for="group in groupedProjects"
                :key="group.stage"
                class="project-stage mb-3"
              >
                <div
                  class="d-flex justify-content-between align-items-center mb-2"
                >
                  <span class="badge" :class="stageBadgeClass(group.stage)">{{
                    group.stage
                  }}</span>
                  <small class="text-muted"
                    >{{ group.projects.length }} peluang</small
                  >
                </div>
                <div class="list-group">
                  <a
                    v-for="project in group.projects"
                    :key="project.id"
                    :href="projectUrl(project.id)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="list-group-item list-group-item-action d-flex justify-content-between align-items-center gap-3"
                  >
                    <span
                      ><strong class="opportunity-name">{{ project.name }}</strong
                      ><small class="d-block text-muted">{{
                        project.id
                      }}</small></span
                    >
                    <span class="text-nowrap"
                      >{{ formatCurrency(project.value) }}
                      <vue-feather type="external-link" size="13"
                    /></span>
                  </a>
                </div>
              </div>
            </template>
            <div v-else class="empty-company-section">
              <vue-feather type="folder" size="20" />
              <span>Belum ada peluang berjalan untuk kontak ini.</span>
            </div>
          </div>
        </div>


         <div class="card border mb-0 installed-product-card">
          <div class="card-header d-flex align-items-center gap-2 flex-wrap pb-2">
            <h6 class="mb-0">Histori Produk Terinstal</h6>
          </div>
          <div class="card-body pt-3">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>Produk</th>
                    <th>Serial Number</th>
                    <th>Tanggal Instalasi</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="product in companyDetail.installedProducts"
                    :key="product.serialNumber"
                  >
                    <td>{{ product.product }}</td>
                    <td>{{ product.serialNumber }}</td>
                    <td>{{ product.installedAt }}</td>
                    <td>
                      <span class="badge badge-light-success">{{
                        product.status
                      }}</span>
                    </td>
                  </tr>
                  <tr v-if="!companyDetail.installedProducts.length">
                    <td colspan="4" class="text-center text-muted">
                      Belum ada histori produk.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>

      <div v-else class="alert alert-light border">
        Pilih faskes pada data kontak untuk menampilkan dashboard
        faskes.
      </div>
    </section>

    <div class="contact-danger-zone mt-4">
      <div>
        <strong>Hapus kontak</strong>
        <p class="mb-0">Data kontak yang dihapus tidak dapat dikembalikan.</p>
      </div>
      <button class="btn btn-outline-danger btn-sm" type="button" @click="deleteContact">
        <vue-feather type="trash-2" size="14" />Hapus Kontak
      </button>
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import type { CompanyDetail, CompanyProject } from "@/core/data/contactCrm";
import { routes } from "@/router/routes";
import { useAuthStore } from "@/store/auth";
import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import type { Hospital } from "@/types/hospital";
import { useProjectStore } from "@/store/project";
import { avatarColorStyle, personInitials } from "@/utils/avatar";
import {
  indonesianPhoneCallUrl,
  indonesianWhatsAppUrl,
  splitPhoneNumbers,
} from "@/utils/indonesianPhone";

const contactStore = useContact();
const router = useRouter();
const authStore = useAuthStore();
const hospitalStore = useHospitalStore();
const projectStore = useProjectStore();
const { contactState, contactApi } = storeToRefs(contactStore);
const { editContact, fetchContactSources, showHistory } = contactStore;

onMounted(() => {
  if (!contactApi.value.sources.length) void fetchContactSources();
});

async function deleteContact() {
  const deleted = await contactStore.deleteContact();
  if (deleted) await router.push(routes.App.Contacts);
}

const fullName = computed(() =>
  `${contactState.value.activeContact?.firstName || ""} ${contactState.value.activeContact?.lastName || ""}`.trim(),
);
const contactPhoneNumbers = computed(() => {
  const contact = contactState.value.activeContact;
  if (!contact) return [];

  return splitPhoneNumbers(
    contact.telephone1 || contact.contactNumber,
    contact.telephone2,
    ...(contact.phoneNumbers || []),
  );
});
/**
 * Seluruh Faskes yang dipegang kontak, urut sesuai relasi contact_company pada
 * endpoint detail (`company_ids` + `company_names`). Kontak lama yang hanya
 * punya satu Faskes tetap terbaca lewat company_id / company.
 */
const relatedCompanies = computed(() => {
  const contact = contactState.value.activeContact;
  if (!contact) return [] as Array<{ id: number; name: string }>;

  const ids = contact.companyIds?.length
    ? contact.companyIds
    : contact.companyId
      ? [contact.companyId]
      : [];
  const names = contact.companyNames?.length
    ? contact.companyNames
    : contact.company
      ? [contact.company]
      : [];

  const result: Array<{ id: number; name: string }> = [];
  const seen = new Set<string>();

  for (let index = 0; index < Math.max(ids.length, names.length); index += 1) {
    const rawId = Number(ids[index]);
    const id = Number.isSafeInteger(rawId) && rawId > 0 ? rawId : Number.NaN;
    const name = String(names[index] ?? "").trim();
    if (!name && Number.isNaN(id)) continue;

    const key = name ? `name:${name.toLowerCase()}` : `id:${id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push({ id, name });
  }

  return result;
});

/** Faskes yang detailnya diambil saat user berpindah kartu (lihat selectCompany). */
const loadedCompanies = ref(new Map<number, Hospital>());

function findLiveCompany(id: number, normalizedName: string) {
  const candidates = [
    Number.isNaN(id) ? undefined : loadedCompanies.value.get(id),
    hospitalStore.selectedItem,
    ...hospitalStore.items,
  ];

  return candidates.find((company) => {
    if (!company) return false;
    return (
      (!Number.isNaN(id) && company.id === id) ||
      (Boolean(normalizedName) && company.name.trim().toLowerCase() === normalizedName)
    );
  });
}

function projectsForCompany(id: number, normalizedName: string) {
  return projectStore.items
    .filter(
      (project) =>
        (!Number.isNaN(id) && project.companyId === id) ||
        (Boolean(normalizedName) &&
          project.companyName?.trim().toLowerCase() === normalizedName),
    )
    .map((project) => ({
      id: String(project.id),
      name: project.projectName,
      stage: project.stageName || titleCase(project.status),
      value: project.amountValue ?? project.projectValue ?? 0,
    }));
}

const companiesForContact = computed<CompanyDetail[]>(() =>
  relatedCompanies.value.map(({ id, name }) => {
    const normalizedName = name.toLowerCase();
    const liveCompany = findLiveCompany(id, normalizedName);
    const projects = projectsForCompany(
      liveCompany ? liveCompany.id : id,
      liveCompany ? liveCompany.name.trim().toLowerCase() : normalizedName,
    );

    // Faskes yang detailnya belum termuat tetap ditampilkan supaya seluruh
    // Faskes kontak terlihat; profil lengkapnya menyusul setelah kartu dipilih.
    if (!liveCompany) {
      return {
        name: name || `ID Faskes ${id}`,
        type: "Faskes",
        address: "-",
        phone: "-",
        website: "",
        projects,
        installedProducts: [],
      };
    }

    return {
      name: liveCompany.name,
      type:
        liveCompany.hospitalType ||
        liveCompany.hospitalClass ||
        liveCompany.industry ||
        "Faskes",
      address: liveCompany.address || "-",
      phone: liveCompany.phone || "-",
      website: liveCompany.website || "",
      projects,
      installedProducts: [],
    };
  }),
);

/**
 * Detail Faskes non-utama belum tentu ikut termuat saat halaman dibuka, jadi
 * diambil saat kartunya dipilih. Sengaja tidak diambil di awal supaya tidak
 * bertabrakan dengan pemuatan Faskes utama di ContactDetailPage.
 */
async function selectCompany(name: string) {
  selectedCompanyName.value = name;

  const related = relatedCompanies.value.find((company) => company.name === name);
  const id = related?.id ?? Number.NaN;
  if (Number.isNaN(id)) return;
  if (loadedCompanies.value.has(id)) return;
  if (findLiveCompany(id, name.trim().toLowerCase())) return;

  const hospital = await hospitalStore.fetchHospitalById(id);
  if (hospital) loadedCompanies.value.set(id, hospital);
}

const selectedCompanyName = ref("");
watch(
  companiesForContact,
  (companies) => {
    if (!companies.some((company) => company.name === selectedCompanyName.value)) {
      selectedCompanyName.value = companies[0]?.name ?? "";
    }
  },
  { immediate: true },
);

const companyDetail = computed<CompanyDetail | undefined>(() =>
  companiesForContact.value.find((company) => company.name === selectedCompanyName.value),
);

const liveCompany = computed(() => {
  const normalizedName = selectedCompanyName.value.trim().toLowerCase();
  if (!normalizedName) return undefined;

  return [hospitalStore.selectedItem, ...hospitalStore.items].find((company) => {
    return company?.name.trim().toLowerCase() === normalizedName;
  });
});
const companyLabel = computed(() => {
  const contact = contactState.value.activeContact;
  if (contact?.companyNames?.length) return contact.companyNames.join(", ");
  return (
    liveCompany.value?.name ||
    contact?.company ||
    (contact?.companyId ? `ID Faskes ${contact.companyId}` : "-")
  );
});
const ownerLabel = computed(() => {
  const contact = contactState.value.activeContact;
  const directOwner = String(contact?.owner || "").trim();
  if (directOwner && directOwner !== "-") return directOwner;

  const createdById = Number(contact?.createdById);
  if (!Number.isFinite(createdById) || createdById <= 0) return "-";

  const owner = projectStore.lookups.owner.find(
    (option) => Number(option.value) === createdById,
  );
  return owner?.label || "-";
});
const sourceLabel = computed(() => {
  const contact = contactState.value.activeContact;
  const source = contactApi.value.sources.find(
    (option) => String(option.value) === String(contact?.sourceId),
  );
  return source?.label || contact?.source || "-";
});
function displayValue(value: unknown) {
  const normalized = String(value ?? "").trim();
  return normalized && normalized !== "-" ? normalized : "-";
}
function firstDisplayValue(...values: unknown[]) {
  const value = values.find((item) => {
    const normalized = String(item ?? "").trim();
    return normalized && normalized !== "-";
  });
  return displayValue(value);
}
const contactLocation = computed(() => {
  const contact = contactState.value.activeContact;
  const company = liveCompany.value;

  return {
    country: firstDisplayValue(contact?.country, company?.country),
    province: firstDisplayValue(contact?.province, company?.province),
    city: firstDisplayValue(contact?.city, company?.city),
  };
});
const faskesCount = computed(() => companiesForContact.value.length);
const opportunityCount = computed(() => contactProjects.value.length);

function scrollToDetail(sectionId: string) {
  const section = document.getElementById(sectionId)
    || document.getElementById("contact-faskes-detail");
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
}
const userRole = computed(() => {
  const user = authStore.user as typeof authStore.user & {
    role?: string;
    role_code?: string;
    type_account?: string;
    tipeakun?: string;
  };
  return String(user?.role || user?.role_code || user?.type_account || user?.tipeakun || "")
    .trim()
    .toLowerCase();
});
const canEditCompanyProfile = computed(() =>
  ["admin", "administrator", "super admin", "superadmin", "mgr", "manager"].includes(
    userRole.value,
  ),
);
const canEditSelectedCompanyProfile = computed(
  () =>
    canEditCompanyProfile.value &&
    Boolean(liveCompany.value),
);
const companyEditTitle = computed(() =>
  canEditSelectedCompanyProfile.value
    ? "Edit profil faskes"
    : "Profil faskes hanya dapat dilihat",
);
const isEditingCompany = ref(false);
const companyDraft = reactive({ phone: "", website: "", address: "" });

watch(
  companyDetail,
  (company) => {
    isEditingCompany.value = false;
    companyDraft.phone = company?.phone || "";
    companyDraft.website = company?.website || "";
    companyDraft.address = company?.address || "";
  },
  { immediate: true },
);

const PIPELINE_HIERARCHY = [
  "Qualified",
  "Presentation/Demo",
  "Quotation",
  "Negotiation",
  "Closed Won",
  "Closed Lost",
  "Closed Cancel",
] as const;

function normalizeStage(stage: string): string {
  const value = stage.trim().toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
  if (["qualified", "qualification"].includes(value)) return "Qualified";
  if (["presentation/demo", "presentation demo", "demo"].includes(value)) {
    return "Presentation/Demo";
  }
  if (["quotation", "proposal"].includes(value)) return "Quotation";
  if (value === "negotiation") return "Negotiation";
  if (["closed won", "won", "win"].includes(value)) return "Closed Won";
  if (["closed lost", "lost"].includes(value)) return "Closed Lost";
  if (["closed cancel", "closed cancelled", "cancel", "cancelled"].includes(value)) {
    return "Closed Cancel";
  }
  return titleCase(value);
}

/**
 * Peluang milik kontak ini sebagai PIC (contact_id di peluang), bukan lagi
 * seluruh peluang satu Faskes. Diambil dari projectStore.items yang sudah
 * dimuat saat halaman detail kontak dibuka.
 */
const contactProjects = computed<CompanyProject[]>(() => {
  const remoteId = contactState.value.activeContact?.remoteId;
  if (!remoteId) return [];

  return projectStore.items
    .filter((project) => project.contactId === remoteId)
    .map((project) => ({
      id: String(project.id),
      name: project.projectName,
      stage: project.stageName || titleCase(project.status),
      value: project.amountValue ?? project.projectValue ?? 0,
    }));
});

const projectsByStage = computed(() => {
  const groups = new Map<string, CompanyProject[]>();
  contactProjects.value.forEach((project) => {
    const stage = normalizeStage(project.stage);
    const current = groups.get(stage) || [];
    current.push(project);
    groups.set(stage, current);
  });
  return groups;
});

const groupedProjects = computed(() => {
  const ordered = PIPELINE_HIERARCHY.map((stage) => ({
    stage,
    projects: projectsByStage.value.get(stage) || [],
  })).filter((group) => group.projects.length);
  const knownStages = new Set<string>(PIPELINE_HIERARCHY);
  const otherStages = Array.from(projectsByStage.value, ([stage, projects]) => ({ stage, projects }))
    .filter((group) => !knownStages.has(group.stage))
    .sort((a, b) => a.stage.localeCompare(b.stage));
  return [...ordered, ...otherStages];
});

const stageSummaries = computed(() => {
  const officialStages = PIPELINE_HIERARCHY.map((stage) => ({
    stage,
    projects: projectsByStage.value.get(stage) || [],
  }));
  const knownStages = new Set<string>(PIPELINE_HIERARCHY);
  const otherStages = Array.from(projectsByStage.value, ([stage, projects]) => ({ stage, projects }))
    .filter((group) => !knownStages.has(group.stage))
    .sort((a, b) => a.stage.localeCompare(b.stage));

  return [...officialStages, ...otherStages].map((group) => ({
    stage: group.stage,
    quantity: group.projects.length,
    value: group.projects.reduce((total, project) => total + project.value, 0),
  }));
});

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function projectUrl(projectId: string) {
  return `${routes.Project.ProjectDetailsV2}?id=${encodeURIComponent(projectId)}`;
}

function titleCase(value: string) {
  return value.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function stageBadgeClass(stage: string) {
  if (stage === "Closed Won") return "badge-light-success";
  if (stage === "Closed Lost") return "badge-light-danger";
  if (stage === "Closed Cancel") return "badge-light-secondary";
  if (stage === "Negotiation") return "badge-light-warning";
  if (stage === "Quotation") return "badge-light-primary";
  return "badge-light-info";
}

async function toggleCompanyEdit() {
  if (!canEditSelectedCompanyProfile.value || !companyDetail.value) return;

  if (isEditingCompany.value) {
    const company = liveCompany.value;
    if (company) {
      try {
        await hospitalStore.updateHospital(company.id, {
          company_name: company.name,
          telephone: companyDraft.phone.trim(),
          email: company.email || undefined,
          website: companyDraft.website.trim(),
          description: company.description || undefined,
          address: companyDraft.address.trim(),
          country: company.country || undefined,
          province: company.province || undefined,
          city: company.city || undefined,
          pos_code: company.posCode || undefined,
        });
        await hospitalStore.fetchHospitalById(company.id);
      } catch {
        return;
      }
    } else {
      companyDetail.value.phone = companyDraft.phone.trim();
      companyDetail.value.website = companyDraft.website.trim();
      companyDetail.value.address = companyDraft.address.trim();
    }
  }

  isEditingCompany.value = !isEditingCompany.value;
}
</script>

<style scoped>
.contact-profile-summary {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  grid-template-columns: 108px minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
  border-radius: 18px;
  padding: 24px;
  background:
    radial-gradient(circle at 88% 18%, rgba(var(--app-primary-rgb, 24, 166, 228), 0.16), transparent 24%),
    linear-gradient(135deg, #ffffff 0%, var(--app-primary-wash, #f5fbfe) 58%, var(--app-primary-wash, #eef9fd) 100%);
  box-shadow: 0 12px 32px rgba(22, 76, 105, 0.08);
}

.contact-profile-summary::after {
  position: absolute;
  z-index: -1;
  right: -54px;
  bottom: -74px;
  width: 180px;
  height: 180px;
  border: 24px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.06);
  border-radius: 50%;
  content: "";
}

.contact-avatar-shell {
  position: relative;
  width: 96px;
  height: 96px;
}

.contact-profile-avatar {
  display: grid;
  width: 96px;
  height: 96px;
  place-items: center;
  border: 5px solid #ffffff;
  border-radius: 24px;
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(22, 76, 105, 0.15);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.8px;
}

.contact-avatar-status {
  position: absolute;
  right: -3px;
  bottom: -3px;
  width: 22px;
  height: 22px;
  border: 4px solid #ffffff;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.28);
}

.contact-identity {
  display: flex;
  min-width: 0;
  align-items: flex-start;
  align-self: center;
  flex-direction: column;
  gap: 5px;
}

.contact-profile-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
  color: var(--theme-default, #18a6e4);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-identity__row {
  display: flex;
  min-width: 0;
  align-items: center;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.contact-identity h4 {
  color: #102a43;
  font-size: clamp(21px, 2vw, 27px);
  font-weight: 700;
}

.contact-role {
  color: #627d98;
  font-size: 13px;
}

.contact-profile-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 7px;
}

.contact-profile-meta span,
.contact-profile-meta a,
.contact-profile-meta button {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.13);
  border-radius: 999px;
  padding: 6px 10px;
  color: #486581;
  background: rgba(255, 255, 255, 0.78);
  font-size: 11px;
  line-height: 1.2;
  text-decoration: none;
}

.contact-profile-meta button {
  font-family: inherit;
  cursor: pointer;
}

.contact-profile-meta a:hover,
.contact-profile-meta button:hover,
.contact-profile-meta button:focus-visible {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.34);
  color: var(--theme-default, #18a6e4);
  background: #ffffff;
}

.contact-profile-meta button:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.16);
  outline-offset: 2px;
}

.contact-primary-actions {
  display: flex;
  align-self: start;
  gap: 8px;
}

.profile-action,
.contact-danger-zone .btn {
  display: inline-flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 9px;
  padding: 8px 12px;
}

.profile-action {
  border: 1px solid #d8e5ec;
  color: #486581;
  background: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(22, 76, 105, 0.05);
  transition: border-color 0.18s ease, color 0.18s ease, transform 0.18s ease;
}

.profile-action:hover,
.profile-action:focus-visible {
  border-color: var(--theme-default, #18a6e4);
  color: var(--theme-default, #18a6e4);
  transform: translateY(-1px);
}

.profile-action:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.16);
  outline-offset: 2px;
}

.profile-action--primary,
.profile-action--primary:hover,
.profile-action--primary:focus-visible {
  border-color: var(--theme-default, #18a6e4);
  color: #ffffff;
  background: var(--theme-default, #18a6e4);
}

.detail-section {
  overflow: hidden;
  border: 1px solid #e3ebf0;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(31, 52, 73, 0.05);
}

.detail-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid #e8eef2;
  padding: 18px 20px;
  background: linear-gradient(90deg, #ffffff 0%, var(--app-primary-wash, #f8fcfe) 100%);
}

.detail-section-title,
.company-section-heading {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
}

.detail-section-icon {
  display: inline-flex;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: var(--theme-default, #18a6e4);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
}

.detail-section-title h5,
.company-section-heading h5 {
  margin: 0 0 3px;
  color: #102a43;
  font-size: 16px;
}

.detail-section-title p,
.company-section-heading p {
  margin: 0;
  color: #829ab1;
  font-size: 12px;
}

.detail-section-body {
  padding: 20px;
}

.contact-danger-zone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid rgba(231, 41, 41, 0.22);
  border-radius: 10px;
  padding: 16px;
  background: rgba(231, 41, 41, 0.035);
}

.contact-danger-zone strong {
  display: block;
  margin-bottom: 3px;
  color: #991b1b;
}

.contact-danger-zone p {
  color: #64748b;
  font-size: 12px;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(36px, 7vw, 96px);
  row-gap: 26px;
  margin: 0;
}

.contact-info-grid > div {
  display: flex;
  width: auto;
  max-width: none;
  min-height: 0;
  justify-content: flex-start;
  flex-direction: column;
  gap: 7px;
  border: 0;
  border-radius: 0;
  padding: 2px 4px;
  background: transparent;
}

.contact-info-grid > .col-12 {
  grid-column: 1 / -1;
}

.contact-info-grid span {
  color: #718096;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-transform: none;
}
.contact-info-grid strong,
.contact-info-grid a {
  color: #102a43;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.contact-phone-field {
  max-width: 100%;
}

.contact-phone-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(36px, 7vw, 96px);
  row-gap: 12px;
  margin-top: 1px;
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.contact-info-grid > .contact-phone-field {
  padding-right: 0;
  padding-left: 0;
}

.contact-phone-field > span {
  margin-right: 4px;
  margin-left: 4px;
}

.contact-phone-list > [class*="col-"] {
  width: 100%;
  max-width: none;
  padding-right: 4px;
  padding-left: 4px;
}

.contact-phone-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 8px;
}

.contact-phone-item strong {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-phone-actions {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 2px;
}

.contact-phone-actions a {
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #17212b;
  background: transparent;
  text-decoration: none;
}

.contact-phone-actions a:last-child {
  color: #16a34a;
}

.contact-phone-actions a:hover {
  background: var(--app-primary-wash, #e9f5fb);
}

.company-dashboard {
  scroll-margin-top: 96px;
  border: 1px solid #e3ebf0;
  border-radius: 16px;
  padding: 20px;
  background: linear-gradient(180deg, var(--app-primary-wash, #fafdff) 0%, #ffffff 180px);
  box-shadow: 0 8px 24px rgba(31, 52, 73, 0.045);
}

.opportunity-card {
  scroll-margin-top: 96px;
}

.company-dashboard .card {
  overflow: hidden;
  border-color: #e3ebf0 !important;
  border-radius: 13px;
  box-shadow: 0 5px 16px rgba(31, 52, 73, 0.04);
}

.company-dashboard .card-header {
  border-bottom: 1px solid #e8eef2;
  padding: 15px 17px;
  background: #ffffff;
}

.company-dashboard .card-header h6 {
  color: #243b53;
  font-weight: 700;
}

.company-switcher {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 10px;
}

.company-switcher__button {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  align-items: center;
  gap: 2px 8px;
  border: 1px solid #dce7ed;
  border-radius: 11px;
  padding: 11px 12px;
  color: #486581;
  background: #ffffff;
  text-align: left;
  transition: border-color 0.18s ease, background-color 0.18s ease;
}

.company-switcher__button span {
  min-width: 0;
  overflow: hidden;
  color: #243b53;
  font-size: 12px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.company-switcher__button small {
  grid-column: 2;
  color: #829ab1;
  font-size: 10px;
}

.company-switcher__button:hover,
.company-switcher__button:focus-visible,
.company-switcher__button--active {
  border-color: var(--theme-default, #18a6e4);
  color: var(--theme-default, #18a6e4);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.06);
}

.company-switcher__button:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.16);
  outline-offset: 2px;
}

.company-profile-card {
  border-top: 3px solid var(--theme-default, #18a6e4) !important;
}
/* Kartu stage: lebar minimum tetap supaya judul, nominal, dan badge tidak terpotong. */
.stage-summary-grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  overflow-x: auto;
  padding: 2px 2px 9px;
  scrollbar-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.35) transparent;
  scrollbar-width: thin;
}
.stage-summary {
  min-width: 220px;
  flex: 1 0 220px;
  border-top: 3px solid var(--theme-default, #18a6e4) !important;
  background: linear-gradient(145deg, #ffffff 0%, var(--app-primary-wash, #f8fcfe) 100%) !important;
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.stage-summary-grid::-webkit-scrollbar {
  height: 6px;
}
.stage-summary-grid::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.35);
}
.stage-summary-grid::-webkit-scrollbar-track {
  background: transparent;
}
.stage-summary:hover {
  box-shadow: 0 10px 22px rgba(31, 52, 73, 0.08);
  transform: translateY(-2px);
}
.stage-summary .card-body {
  padding: 17px;
}

.stage-summary-heading {
  display: flex;
  min-height: 32px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.stage-summary-badge {
  display: block;
  min-width: 0;
  overflow: hidden;
  padding: 7px 11px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.stage-summary-count {
  flex: 0 0 auto;
  color: #52677a;
  font-size: 13px;
  font-weight: 700;
}
.stage-value {
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.project-stage:last-child {
  margin-bottom: 0 !important;
}

.opportunity-card .list-group-item {
  border-color: #edf1f4;
  padding: 13px 14px;
}

.opportunity-card .list-group-item:hover {
  color: #102a43;
  background: var(--app-primary-wash, #f4fbfe);
}

.opportunity-name {
  font-weight: 600;
}

.installed-product-card .table thead th {
  border-bottom-color: #e3ebf0;
  color: #627d98;
  background: #f8fbfd;
  font-size: 11px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.installed-product-card .table tbody td {
  border-bottom-color: #edf2f5;
  color: #334e68;
}
.empty-company-section {
  display: flex;
  min-height: 110px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  border: 1px dashed #d9e1e6;
  border-radius: 10px;
  color: #7a8792;
  background: #fbfcfd;
  font-size: 12px;
  text-align: center;
}
.empty-company-section svg {
  color: var(--theme-default);
}

@media (max-width: 991.98px) {
  .contact-profile-summary {
    grid-template-columns: 96px minmax(0, 1fr);
  }

  .contact-primary-actions {
    grid-column: 1 / -1;
    justify-content: flex-end;
  }
}

@media (max-width: 575.98px) {
  .contact-profile-summary {
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 14px;
    border-radius: 14px;
    padding: 17px;
  }

  .contact-avatar-shell,
  .contact-profile-avatar {
    width: 72px;
    height: 72px;
  }

  .contact-profile-avatar {
    border-width: 4px;
    border-radius: 19px;
  }

  .contact-avatar-status {
    width: 18px;
    height: 18px;
    border-width: 3px;
  }

  .contact-profile-label {
    font-size: 10px;
  }

  .contact-identity h4 {
    font-size: 19px;
  }

  .contact-profile-meta {
    grid-column: 1 / -1;
  }

  .contact-profile-meta span,
  .contact-profile-meta a,
  .contact-profile-meta button {
    max-width: 100%;
  }

  .contact-primary-actions {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-top: 4px;
  }

  .profile-action {
    width: 100%;
    min-width: 0;
    padding-inline: 8px;
  }

  .detail-section-header,
  .detail-section-body,
  .company-dashboard {
    padding: 15px;
  }

  .detail-section-header {
    align-items: flex-start;
  }

  .detail-section-icon {
    width: 38px;
    height: 38px;
    flex-basis: 38px;
  }

  .company-dashboard {
    border-radius: 13px;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
  }

  .contact-info-grid > .col-12 {
    grid-column: auto;
  }

  .contact-info-grid > .contact-phone-field {
    grid-column: auto;
  }

  .contact-phone-list {
    grid-template-columns: 1fr;
  }

  .contact-danger-zone {
    align-items: stretch;
    flex-direction: column;
  }

  .contact-danger-zone .btn {
    width: 100%;
  }

}
</style>
