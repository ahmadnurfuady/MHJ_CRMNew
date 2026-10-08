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
          <div class="col-md-6">
            <span>Telepon 1</span>
            <strong>{{ contactState.activeContact.telephone1 || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Telepon 2</span>
            <strong>{{ contactState.activeContact.telephone2 || "-" }}</strong>
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
            Ringkasan perusahaan dan aktivitas project
          </p>
        </div>
        <button
          class="btn btn-primary btn-sm"
          type="button"
          :disabled="!canEditCompanyProfile"
          :title="companyEditTitle"
          @click="toggleCompanyEdit"
        >
          <vue-feather
            :type="isEditingCompany ? 'save' : 'edit'"
            size="14"
            class="me-1"
          />{{ isEditingCompany ? "Simpan Profil" : "Edit Profil Perusahaan" }}
        </button>
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
                  v-else
                  :href="companyDetail.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ companyDetail.website }}</a
                >
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
              <h4 class="stage-count mb-1">{{ summary.quantity }} Project</h4>
              <p class="stage-value mb-0 text-muted" :title="formatCurrency(summary.value)">
                {{ formatCurrency(summary.value) }}
              </p>
            </div>
          </div>
        </div>

        <div class="card border mb-4">
          <div class="card-header pb-2">
            <h6 class="mb-0">Project Berjalan per Stage</h6>
          </div>
          <div class="card-body pt-3">
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
                  >{{ group.projects.length }} project</small
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
import { companyDetails } from "@/core/data/contactCrm";
import { routes } from "@/router/routes";
import { useAuthStore } from "@/store/auth";
import { useContact } from "@/store/contact";
import { getImages } from "@/utils/index";

const contactStore = useContact();
const authStore = useAuthStore();
const { contactState, contactApi } = storeToRefs(contactStore);
const { editContact, deleteContact, showHistory, printContact } = contactStore;

const fullName = computed(() =>
  `${contactState.value.activeContact?.firstName || ""} ${contactState.value.activeContact?.lastName || ""}`.trim(),
);
const companyLabel = computed(() => {
  const contact = contactState.value.activeContact;
  return contact?.company || (contact?.companyId ? `Company ID ${contact.companyId}` : "-");
});
const sourceLabel = computed(() => {
  const contact = contactState.value.activeContact;
  return contact?.source || (contact?.sourceId ? `Source ID ${contact.sourceId}` : "-");
});
function displayValue(value: unknown) {
  const normalized = String(value ?? "").trim();
  return normalized && normalized !== "-" ? normalized : "-";
}
const companyDetail = computed(
  () => companyDetails[contactState.value.activeContact?.company || ""],
);
const userRole = computed(() =>
  (
    (authStore.user as typeof authStore.user & { role?: string })?.role || ""
  ).toLowerCase(),
);
const canEditCompanyProfile = computed(() =>
  ["admin", "administrator", "super admin"].includes(userRole.value),
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

const groupedProjects = computed(() => {
  const groups = new Map<
    string,
    NonNullable<typeof companyDetail.value>["projects"]
  >();
  companyDetail.value?.projects.forEach((project) => {
    const current = groups.get(project.stage) || [];
    current.push(project);
    groups.set(project.stage, current);
  });
  return Array.from(groups, ([stage, projects]) => ({ stage, projects }));
});

const stageSummaries = computed(() =>
  groupedProjects.value.map((group) => ({
    stage: group.stage,
    quantity: group.projects.length,
    value: group.projects.reduce((total, project) => total + project.value, 0),
  })),
);

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function projectUrl(projectId: string) {
  return `${routes.Project.ProjectDetails}?project=${encodeURIComponent(projectId)}`;
}

function stageBadgeClass(stage: string) {
  if (stage === "Closed Won") return "badge-light-success";
  if (stage === "Negotiation") return "badge-light-warning";
  if (stage === "Proposal") return "badge-light-primary";
  return "badge-light-info";
}

function toggleCompanyEdit() {
  if (!canEditCompanyProfile.value || !companyDetail.value) return;

  if (isEditingCompany.value) {
    companyDetail.value.phone = companyDraft.phone.trim();
    companyDetail.value.website = companyDraft.website.trim();
    companyDetail.value.address = companyDraft.address.trim();
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
