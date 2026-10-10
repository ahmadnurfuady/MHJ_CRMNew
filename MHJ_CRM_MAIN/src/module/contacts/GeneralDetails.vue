<template>
  <template v-if="contactState.activeContact">
    <div class="contact-header contact-profile-summary">
      <img
        class="img-100 img-fluid rounded-circle"
        :src="getImages(contactState.activeContact.profile)"
        :alt="contactState.activeContact.firstName"
      />
      <div class="contact-identity">
        <h5 class="contact-identity__row mb-0">{{ fullName }}</h5>
        <p class="contact-identity__row mb-0 text-muted">
          {{ contactState.activeContact.jobTitle || "Jabatan belum diisi" }}
        </p>
        <p class="contact-identity__row mb-0">
          <vue-feather type="briefcase" size="14" class="me-1" />
          {{ companyLabel }}
        </p>
      </div>
      <div class="contact-primary-actions">
        <button class="btn btn-outline-primary btn-sm" type="button" @click="editContact">
          <vue-feather type="edit-2" size="14" />Edit
        </button>
        <button class="btn btn-outline-primary btn-sm" type="button" @click="showHistory">
          <vue-feather type="clock" size="14" />History
        </button>
        <button class="btn btn-outline-primary btn-sm" type="button" @click="printContact">
          <vue-feather type="printer" size="14" />Print
        </button>
      </div>
    </div>

    <div class="card border mt-4 mb-4">
      <div class="card-header d-flex align-items-center justify-content-between pb-2">
        <h6 class="mb-0">Informasi Kontak</h6>
        <span v-if="contactApi.detailLoading" class="text-muted f-12">Memuat detail...</span>
      </div>
      <div class="card-body pt-3">
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
            <span>Status</span>
            <strong>{{ contactState.activeContact.status || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Email</span>
            <strong>{{ contactState.activeContact.email || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Company</span>
            <strong>{{ companyLabel }}</strong>
          </div>
          <div class="col-12 col-md-6 contact-phone-field">
            <span>Nomor Telepon</span>
            <div v-if="contactPhoneNumbers.length" class="contact-phone-list">
              <div
                v-for="phone in contactPhoneNumbers"
                :key="phone"
                class="contact-phone-item"
              >
                <strong>{{ phone }}</strong>
                <div class="contact-phone-actions">
                  <a
                    :href="indonesianPhoneCallUrl(phone)"
                    :aria-label="`Telepon ${phone}`"
                    :title="`Telepon ${phone}`"
                  >
                    <vue-feather type="phone" size="16" />
                  </a>
                  <a
                    :href="indonesianWhatsAppUrl(phone)"
                    :aria-label="`WhatsApp ${phone}`"
                    :title="`WhatsApp ${phone}`"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
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
            <strong>{{ contactState.activeContact.country || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Provinsi</span>
            <strong>{{ contactState.activeContact.province || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Kota</span>
            <strong>{{ displayValue(contactState.activeContact.city) }}</strong>
          </div>
          <div class="col-md-6">
            <span>Kode Pos</span>
            <strong>{{ contactState.activeContact.posCode || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Kode Kelurahan</span>
            <strong>{{ contactState.activeContact.kdKelurahan || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Source</span>
            <strong>{{ sourceLabel }}</strong>
          </div>
          <div class="col-md-6">
            <span>Status Aktif</span>
            <strong>{{ contactState.activeContact.aktif === 1 ? "Aktif" : "Tidak aktif" }}</strong>
          </div>
        </div>
      </div>
    </div>

    <section class="company-dashboard">
      <div
        class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3"
      >
        <div>
          <h5 class="mb-1">Detail Perusahaan</h5>
          <p class="text-muted mb-0">
            Ringkasan perusahaan dan aktivitas proyek
          </p>
        </div>

      </div>

      <template v-if="companyDetail">
        <div class="card border mb-4">
          <div
            class="card-header d-flex justify-content-between align-items-center pb-2"
          >
            <h6 class="mb-0">Profil Perusahaan</h6>
            <span
              v-if="!canEditCompanyProfile"
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
              <span
                class="badge stage-badge mb-2"
                :class="stageBadgeClass(summary.stage)"
                :title="summary.stage"
                >{{ summary.stage }}</span
              >
              <h4 class="stage-count mb-1">{{ summary.quantity }} Proyek</h4>
              <p class="stage-value mb-0 text-muted" :title="formatCurrency(summary.value)">
                {{ formatCurrency(summary.value) }}
              </p>
            </div>
          </div>
        </div>

        <div class="card border mb-4">
          <div class="card-header pb-2">
            <h6 class="mb-0">Proyek Berjalan per Stage</h6>
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
                    >{{ group.projects.length }} proyek</small
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
                      ><strong>{{ project.name }}</strong
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
              <span>Belum ada proyek berjalan untuk perusahaan ini.</span>
            </div>
          </div>
        </div>


         <div class="card border mb-0">
          <div class="card-header pb-2">
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
        Pilih perusahaan pada data kontak untuk menampilkan dashboard
        perusahaan.
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
import { computed, reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { companyDetails, type CompanyDetail } from "@/core/data/contactCrm";
import { routes } from "@/router/routes";
import { useAuthStore } from "@/store/auth";
import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { useProjectStore } from "@/store/project";
import { getImages } from "@/utils/index";
import {
  indonesianPhoneCallUrl,
  indonesianWhatsAppUrl,
  splitPhoneNumbers,
} from "@/utils/indonesianPhone";

const contactStore = useContact();
const authStore = useAuthStore();
const hospitalStore = useHospitalStore();
const projectStore = useProjectStore();
const { contactState, contactApi } = storeToRefs(contactStore);
const { editContact, deleteContact, showHistory, printContact } = contactStore;

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
const liveCompany = computed(() => {
  const contact = contactState.value.activeContact;
  if (!contact) return undefined;
  const companyId = Number(contact.companyId);
  const normalizedName = (contact.company || "").trim().toLowerCase();

  return [hospitalStore.selectedItem, ...hospitalStore.items].find((company) => {
    if (!company) return false;
    return (
      (Number.isFinite(companyId) && companyId > 0 && company.id === companyId) ||
      (normalizedName && company.name.trim().toLowerCase() === normalizedName)
    );
  });
});
const companyLabel = computed(() => {
  const contact = contactState.value.activeContact;
  return (
    liveCompany.value?.name ||
    contact?.company ||
    (contact?.companyId ? `Company ID ${contact.companyId}` : "-")
  );
});
const sourceLabel = computed(() => {
  const contact = contactState.value.activeContact;
  return contact?.source || (contact?.sourceId ? `Source ID ${contact.sourceId}` : "-");
});
function displayValue(value: unknown) {
  const normalized = String(value ?? "").trim();
  return normalized && normalized !== "-" ? normalized : "-";
}
const companyDetail = computed<CompanyDetail | undefined>(() => {
  const contact = contactState.value.activeContact;
  if (!contact) return undefined;

  const sample = companyDetails[contact.company || ""];
  const company = liveCompany.value;
  if (!company) return sample;

  const projects = projectStore.items
    .filter(
      (project) =>
        project.companyId === company.id ||
        project.companyName?.trim().toLowerCase() === company.name.trim().toLowerCase(),
    )
    .map((project) => ({
      id: String(project.id),
      name: project.projectName,
      stage: project.stageName || titleCase(project.status),
      value: project.amountValue ?? project.projectValue ?? 0,
    }));

  return {
    name: company.name,
    type: company.hospitalType || company.hospitalClass || company.industry || "Rumah Sakit",
    address: company.address || "-",
    phone: company.phone || "-",
    website: company.website || "",
    projects: projects.length ? projects : sample?.projects ?? [],
    installedProducts: sample?.installedProducts ?? [],
  };
});
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
const companyEditTitle = computed(() =>
  canEditCompanyProfile.value
    ? "Edit profil perusahaan"
    : "Profil perusahaan hanya dapat diedit oleh admin",
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

const projectsByStage = computed(() => {
  const groups = new Map<string, NonNullable<typeof companyDetail.value>["projects"]>();
  companyDetail.value?.projects.forEach((project) => {
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
  if (!canEditCompanyProfile.value || !companyDetail.value) return;

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
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) auto;
  align-items: start;
  column-gap: 20px;
}

.contact-identity {
  display: flex;
  min-width: 0;
  align-items: flex-start;
  align-self: center;
  flex-direction: column;
  gap: 4px;
}

.contact-identity__row {
  display: flex;
  min-width: 0;
  align-items: center;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.contact-primary-actions {
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-items: end;
  gap: 6px;
}

.contact-primary-actions .btn,
.contact-danger-zone .btn {
  display: inline-flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 7px;
  padding: 7px 11px;
}

.contact-primary-actions .btn {
  min-width: 104px;
  height: 32px;
  align-self: center;
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

.contact-info-grid > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.contact-info-grid span {
  color: var(--bs-secondary-color);
  font-size: 12px;
  text-transform: uppercase;
}
.contact-info-grid strong,
.contact-info-grid a {
  font-weight: 500;
  overflow-wrap: anywhere;
}

.contact-phone-field {
  max-width: 100%;
}

.contact-phone-list {
  display: grid;
  gap: 8px;
  margin-top: 2px;
}

.contact-phone-item {
  display: flex;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid #e7edf2;
  border-radius: 10px;
  padding: 7px 9px 7px 14px;
  background: #f7f9fc;
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
  gap: 5px;
}

.contact-phone-actions a {
  display: inline-flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #17212b;
  background: #ffffff;
  text-decoration: none;
}

.contact-phone-actions a:last-child {
  color: #16a34a;
}

.contact-phone-actions a:hover {
  background: #e9f5fb;
}
/* Kartu stage: lebar minimum tetap supaya judul, nominal, dan badge tidak terpotong. */
.stage-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.stage-summary {
  min-width: 0;
  border-left: 3px solid var(--theme-default) !important;
}
.stage-badge {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.stage-count {
  font-size: 1.25rem;
  white-space: nowrap;
}
.stage-value {
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.project-stage:last-child {
  margin-bottom: 0 !important;
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

@media (max-width: 575.98px) {
  .contact-profile-summary {
    grid-template-columns: 72px minmax(0, 1fr);
    column-gap: 14px;
  }

  .contact-profile-summary > img {
    width: 72px;
    height: 72px;
    object-fit: cover;
  }

  .contact-primary-actions {
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 8px;
    margin-top: 14px;
  }

  .contact-primary-actions .btn {
    width: 100%;
    min-width: 0;
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
