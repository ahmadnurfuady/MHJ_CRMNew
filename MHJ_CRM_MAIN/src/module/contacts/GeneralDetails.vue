<template>
  <template v-if="contactState.activeContact">
    <div class="contact-header d-flex flex-wrap gap-3 align-items-start">
      <img
        class="img-100 img-fluid rounded-circle"
        :src="getImages(contactState.activeContact.profile)"
        :alt="contactState.activeContact.firstName"
      />
      <div class="flex-grow-1">
        <div class="d-flex flex-wrap justify-content-between gap-2">
          <div>
            <h5 class="mb-1">{{ fullName }}</h5>
            <p class="mb-1 text-muted">
              {{ contactState.activeContact.jobTitle || "Jabatan belum diisi" }}
            </p>
            <p class="mb-0">
              <vue-feather type="briefcase" size="14" class="me-1" />
              {{
                contactState.activeContact.company || "Perusahaan belum dipilih"
              }}
            </p>
          </div>
          <div class="d-flex flex-wrap gap-2 align-items-start">
            <button
              class="btn btn-outline-primary btn-sm"
              type="button"
              @click="editContact"
            >
              <vue-feather type="edit-2" size="14" class="me-1" />Edit Kontak
            </button>
            <button
              class="btn btn-outline-secondary btn-sm"
              type="button"
              @click="showHistory"
            >
              History
            </button>
            <button
              class="btn btn-outline-secondary btn-sm"
              type="button"
              @click="printContact"
            >
              Print
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              type="button"
              @click="deleteContact"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card border mt-4 mb-4">
      <div class="card-header pb-2">
        <h6 class="mb-0">Informasi Kontak</h6>
      </div>
      <div class="card-body pt-3">
        <div class="row g-3 contact-info-grid">
          <div class="col-md-6">
            <span>Email</span
            ><strong>{{ contactState.activeContact.email || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Owner</span
            ><strong>{{ contactState.activeContact.owner || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Telepon</span>
            <strong>{{ phoneNumbers.join(", ") || "-" }}</strong>
          </div>
          <div class="col-md-6">
            <span>Jenis Kelamin</span><strong>{{ genderLabel }}</strong>
          </div>
          <div class="col-md-6">
            <span>Provinsi / Kota</span><strong>{{ locationLabel }}</strong>
          </div>
          <div class="col-md-6">
            <span>Source</span
            ><strong>{{ contactState.activeContact.source || "-" }}</strong>
          </div>
          <div class="col-12">
            <span>Alamat</span
            ><strong>{{ contactState.activeContact.address || "-" }}</strong>
          </div>
          <div class="col-12">
            <span>Google Maps</span>
            <a
              v-if="contactState.activeContact.mapAddress"
              :href="googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ contactState.activeContact.mapAddress }}
              <vue-feather type="external-link" size="13" />
            </a>
            <strong v-else>-</strong>
          </div>
          <div class="col-12">
            <span>Project Terkait</span
            ><strong>{{ contactState.activeContact.project || "-" }}</strong>
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

        <div class="row g-3 mb-4">
          <div
            v-for="summary in stageSummaries"
            :key="summary.stage"
            class="col-sm-6 col-xl-3"
          >
            <div class="card border mb-0 h-100 stage-summary">
              <div class="card-body">
                <span
                  class="badge mb-2"
                  :class="stageBadgeClass(summary.stage)"
                  >{{ summary.stage }}</span
                >
                <h4 class="mb-1">{{ summary.quantity }} Project</h4>
                <p class="mb-0 text-muted">
                  {{ formatCurrency(summary.value) }}
                </p>
              </div>
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
const { contactState } = storeToRefs(contactStore);
const { editContact, deleteContact, showHistory, printContact } = contactStore;

const fullName = computed(() =>
  `${contactState.value.activeContact?.firstName || ""} ${contactState.value.activeContact?.lastName || ""}`.trim(),
);
const phoneNumbers = computed(
  () =>
    contactState.value.activeContact?.phoneNumbers ||
    [contactState.value.activeContact?.contactNumber || ""].filter(Boolean),
);
const genderLabel = computed(() => {
  const gender = contactState.value.activeContact?.gender;
  if (gender === "L" || gender === "Male") return "Laki-laki";
  if (gender === "P" || gender === "Female") return "Perempuan";
  return gender || "-";
});
const locationLabel = computed(
  () =>
    [
      contactState.value.activeContact?.province,
      contactState.value.activeContact?.city,
    ]
      .filter((value) => value && value !== "-")
      .join(" / ") || "-",
);
const googleMapsUrl = computed(
  () =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactState.value.activeContact?.mapAddress || "")}`,
);
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
.stage-summary {
  border-left: 3px solid var(--theme-default) !important;
}
.project-stage:last-child {
  margin-bottom: 0 !important;
}
</style>
