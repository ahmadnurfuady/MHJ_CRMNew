<template>
  <div class="hospital-detail-page">
    <div class="page-toolbar">
      <router-link
        :to="routes.App.RumahSakit"
        class="back-button"
        aria-label="Kembali ke daftar rumah sakit"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </router-link>
      <div>
        <p>Rumah Sakit</p>
        <h3>Detail Rumah Sakit</h3>
      </div>
    </div>

    <div v-if="loading && !hospital" class="detail-state card">
      <span class="spinner-border text-primary" aria-hidden="true"></span>
      <strong>Memuat detail rumah sakit...</strong>
    </div>

    <div v-else-if="loadError || !hospital" class="detail-state card">
      <div class="state-icon error">
        <i class="fa-solid fa-circle-exclamation"></i>
      </div>
      <strong>Detail tidak dapat ditampilkan</strong>
      <p>{{ loadError || "Data rumah sakit tidak ditemukan." }}</p>
      <router-link :to="routes.App.RumahSakit" class="btn btn-primary btn-sm">
        Kembali ke daftar
      </router-link>
    </div>

    <template v-else>
      <section class="hospital-overview card">
        <div class="hospital-main">
          <div class="hospital-symbol">
            <i class="fa-solid fa-hospital"></i>
          </div>
          <div class="hospital-copy">
            <div class="hospital-title-row">
              <h4>{{ hospital.name }}</h4>
              <span
                :class="['status-badge', { inactive: hospital.aktif === 0 }]"
              >
                <i class="fa-solid fa-circle"></i>
                {{ hospital.aktif === 0 ? "Tidak aktif" : "Aktif" }}
              </span>
            </div>
            <p class="hospital-location">
              <i class="fa-solid fa-location-dot"></i>
              {{ locationLabel }}
            </p>
            <div class="hospital-tags">
              <span>{{
                hospital.hospitalClass || "Kelas belum tersedia"
              }}</span>
              <span>{{
                hospital.hospitalType || hospital.industry || "Rumah Sakit"
              }}</span>
            </div>
          </div>
          <button
            class="profile-link"
            type="button"
            @click="openProfile"
          >
            <span>Profil RS</span><i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div class="overview-metrics">
          <div class="overview-metric">
            <div class="metric-icon blue">
              <i class="fa-regular fa-clock"></i>
            </div>
            <div>
              <span>Visit terakhir</span><strong>{{ lastVisitLabel }}</strong>
            </div>
          </div>
          <div class="overview-metric">
            <div class="metric-icon violet">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div>
              <span>Nilai peluang</span
              ><strong>{{ formatCompactCurrency(totalProjectValue) }}</strong>
            </div>
          </div>
          <div class="overview-metric">
            <div class="metric-icon green">
              <i class="fa-regular fa-address-book"></i>
            </div>
            <div>
              <span>Total kontak</span><strong>{{ contactCount }}</strong>
            </div>
          </div>
          <div class="overview-metric">
            <div class="metric-icon amber">
              <i class="fa-solid fa-toolbox"></i>
            </div>
            <div>
              <span>Alat terpasang</span><strong>{{ installedCount }}</strong>
            </div>
          </div>
        </div>
      </section>

      <nav class="detail-tabs" aria-label="Navigasi detail rumah sakit">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          type="button"
          :class="{ active: activeTab === tab.value }"
          @click="activeTab = tab.value"
        >
          <i :class="tab.icon"></i>
          <span>{{ tab.label }}</span>
          <em>{{ tab.count }}</em>
        </button>
      </nav>

      <section v-if="activeTab === 'projects'" class="tab-panel projects-panel">
        <div class="panel-heading">
          <div>
            <p>Pipeline sales</p>
            <h5>Peluang Rumah Sakit</h5>
          </div>
          <div class="panel-heading-actions">
            <button
              type="button"
              class="panel-add-button"
              @click="createOpportunity"
            >
              <i class="fa-solid fa-plus"></i>
              Tambah Peluang
            </button>
            <div class="project-total">
              <span>Total nilai</span>
              <strong>{{ formatCurrency(totalProjectValue) }}</strong>
            </div>
          </div>
        </div>

        <div
          v-if="hospitalProjects.length"
          class="pipeline-summary"
          aria-label="Komposisi pipeline"
        >
          <span
            v-for="stage in populatedStages"
            :key="stage.value"
            :style="{
              background: stage.color,
              flexGrow: Math.max(stage.projects.length, 1),
            }"
            :title="`${stage.label}: ${stage.projects.length} peluang`"
          ></span>
        </div>

        <div v-if="hospitalProjects.length" class="stage-browser">
          <div class="stage-selector" aria-label="Pilih stage peluang">
            <button
              v-for="stage in stageGroups"
              :key="stage.value"
              type="button"
              class="stage-summary-card"
              :class="{ active: expandedStage === stage.value }"
              :aria-pressed="expandedStage === stage.value"
              :style="{ '--stage-color': stage.color }"
              @click="selectStage(stage.value)"
            >
              <span class="stage-summary-title">
                <i></i><span>{{ stage.label }}</span>
              </span>
              <strong>{{ formatCompactCurrency(stage.totalValue) }}</strong>
              <small>{{ stage.projects.length }} peluang</small>
            </button>
          </div>

          <section
            v-if="selectedStage"
            class="selected-stage-panel"
            :style="{ '--stage-color': selectedStage.color }"
          >
            <div class="selected-stage-heading">
              <div>
                <span>Stage terpilih</span>
                <h6>{{ selectedStage.label }}</h6>
              </div>
              <div>
                <strong>{{ selectedStage.projects.length }} peluang</strong>
                <span>{{ formatCurrency(selectedStage.totalValue) }}</span>
              </div>
            </div>

            <div v-if="selectedStage.projects.length" class="project-table">
              <div class="project-table-head" aria-hidden="true">
                <span>Nama peluang</span>
                <span>Owner</span>
                <span>Nilai</span>
                <span></span>
              </div>
              <button
                v-for="project in selectedStage.projects"
                :key="project.id"
                type="button"
                class="project-row"
                @click="openProject(project.id)"
              >
                <span class="project-name">
                  <strong>{{ project.projectName }}</strong>
                  <small>Klik untuk melihat detail peluang</small>
                </span>
                <span class="project-owner">
                  <i class="fa-regular fa-user"></i>
                  {{ project.ownerName || "Owner belum tersedia" }}
                </span>
                <strong class="project-value">
                  {{
                    formatCurrency(
                      project.amountValue ?? project.projectValue ?? 0,
                    )
                  }}
                </strong>
                <span class="project-open">
                  Buka<i class="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
            <div v-else class="stage-empty">
              <i class="fa-regular fa-folder-open"></i>
              <span>Belum ada peluang pada stage ini.</span>
            </div>
          </section>
        </div>
        <HospitalEmptyState
          v-else
          icon="fa-solid fa-folder-open"
          title="Belum ada peluang"
          description="Peluang yang terhubung dengan rumah sakit ini akan tampil di sini."
        />
      </section>

      <section v-else-if="activeTab === 'contacts'" class="tab-panel">
        <div class="panel-heading">
          <div>
            <p>Relasi utama</p>
            <h5>Kontak Rumah Sakit</h5>
          </div>
          <div class="panel-heading-actions">
            <span class="panel-count">{{ hospitalContacts.length }} kontak</span>
            <button
              type="button"
              class="panel-add-button"
              @click="createHospitalContact"
            >
              <i class="fa-solid fa-plus"></i>
              Tambah Kontak
            </button>
          </div>
        </div>
        <div v-if="hospitalContacts.length" class="contact-grid">
          <article
            v-for="contact in hospitalContacts"
            :key="contact.id"
            class="contact-card"
            role="link"
            tabindex="0"
            :aria-label="`Buka detail kontak ${fullName(contact)}`"
            @click="openContactDetail(contact)"
            @keydown.enter.self="openContactDetail(contact)"
          >
            <div class="contact-top">
              <div class="contact-avatar">
                {{ initials(`${contact.firstName} ${contact.lastName}`) }}
              </div>
              <div class="contact-identity">
                <strong>{{ fullName(contact) }}</strong>
                <span>{{
                  contact.jobTitle || contact.status || "Jabatan belum tersedia"
                }}</span>
              </div>
              <a
                v-if="contact.contactNumber"
                :href="`tel:${contact.contactNumber}`"
                class="phone-action"
                :aria-label="`Telepon ${fullName(contact)}`"
                @click.stop
              >
                <i class="fa-solid fa-phone"></i>
              </a>
            </div>
            <div class="contact-activity">
              <div
                :class="[
                  'mini-activity-icon',
                  { muted: !contact.lastActivity },
                ]"
              >
                <i
                  :class="
                    contact.lastActivity
                      ? 'fa-solid fa-user-group'
                      : 'fa-regular fa-clock'
                  "
                ></i>
              </div>
              <div>
                <strong>{{
                  contact.lastActivity || "Belum ada aktivitas"
                }}</strong>
                <span v-if="contact.lastContactedAt">{{
                  formatDate(contact.lastContactedAt)
                }}</span>
              </div>
            </div>
          </article>
        </div>
        <HospitalEmptyState
          v-else
          icon="fa-regular fa-address-book"
          title="Belum ada kontak"
          description="Kontak yang terhubung dengan rumah sakit ini akan tampil di sini."
        />
      </section>

      <section v-else-if="activeTab === 'installed'" class="tab-panel">
        <div class="panel-heading">
          <div>
            <p>Installed base</p>
            <h5>Alat Terpasang</h5>
          </div>
          <span class="panel-count">{{ installedProducts.length }} alat</span>
        </div>
        <div v-if="installedProducts.length" class="installed-grid">
          <article
            v-for="(item, index) in installedProducts"
            :key="`${item.serialNumber}-${index}`"
            class="installed-card"
          >
            <div class="equipment-icon" :class="index % 2 ? 'cyan' : 'amber'">
              <i class="fa-solid fa-kit-medical"></i>
            </div>
            <div>
              <strong>{{ item.product }}</strong>
              <span>{{
                item.serialNumber || "Nomor seri belum tersedia"
              }}</span>
            </div>
            <div class="equipment-meta">
              <span>{{ item.installedAt || "Tanggal belum tersedia" }}</span>
              <b>{{ item.status || "Aktif" }}</b>
            </div>
          </article>
        </div>
        <HospitalEmptyState
          v-else
          icon="fa-solid fa-kit-medical"
          title="Belum ada alat terpasang"
          description="Data produk atau alat yang sudah dipasang akan tampil di sini."
        />
      </section>

      <section v-else-if="activeTab === 'activities'" class="activity-layout">
        <article class="tab-panel activity-card">
          <div class="panel-heading">
            <div>
              <p>Timeline terbaru</p>
              <h5>Aktivitas Rumah Sakit</h5>
            </div>
            <span class="panel-count">{{ activities.length }} aktivitas</span>
          </div>
          <div v-if="activities.length" class="activity-timeline">
            <div
              v-for="(activity, index) in activities"
              :key="`${activity.title}-${index}`"
              class="activity-item"
            >
              <div class="activity-marker" :class="index % 2 ? 'green' : 'red'">
                <i
                  :class="
                    index % 2 ? 'fa-solid fa-phone' : 'fa-solid fa-user-group'
                  "
                ></i>
              </div>
              <div class="activity-content">
                <strong>{{ activity.title }}</strong>
                <p>{{ activity.description }}</p>
                <span
                  ><i class="fa-regular fa-calendar"></i
                  >{{ formatDate(activity.date) }}</span
                >
              </div>
            </div>
          </div>
          <HospitalEmptyState
            v-else
            icon="fa-regular fa-calendar-xmark"
            title="Belum ada aktivitas"
            description="Aktivitas kontak dan peluang terbaru akan dirangkum di sini."
          />
        </article>

        <article class="tab-panel comments-panel">
          <div class="panel-heading compact">
            <div>
              <p>Kolaborasi</p>
              <h5>Komentar</h5>
            </div>
          </div>
          <p v-if="!comments.length" class="empty-comments">
            Belum ada komentar pada rumah sakit ini.
          </p>
          <div
            v-for="comment in comments"
            :key="comment.id"
            class="comment-row"
          >
            <div class="comment-avatar">{{ initials(comment.author) }}</div>
            <div>
              <strong>{{ comment.author }}</strong>
              <p>{{ comment.message }}</p>
            </div>
          </div>
          <form class="comment-form" @submit.prevent="addComment">
            <input
              v-model.trim="newComment"
              type="text"
              placeholder="Tambahkan komentar..."
              aria-label="Komentar baru"
            />
            <button type="submit" :disabled="!newComment">Kirim</button>
          </form>
        </article>
      </section>

      <section v-else class="tab-panel profile-panel">
        <div class="panel-heading profile-heading">
          <div>
            <p>Informasi rumah sakit</p>
            <h5>Profil Rumah Sakit</h5>
          </div>
          <div class="profile-actions">
            <button
              v-if="!profileEditing"
              class="edit-profile"
              type="button"
              @click="editHospital"
            >
              <i class="fa-solid fa-pen-to-square"></i>Edit Rumah Sakit
            </button>
            <button
              class="close-profile"
              type="button"
              @click="profileEditing ? cancelHospitalEdit() : closeProfile()"
            >
              <i class="fa-solid fa-xmark"></i>
              {{ profileEditing ? "Batal Edit" : "Tutup profil" }}
            </button>
          </div>
        </div>
        <div v-if="!profileEditing" class="hospital-info-view">
          <div class="hospital-info-grid">
            <div class="hospital-info-item">
              <span>Nama Rumah Sakit</span>
              <strong>{{ displayValue(hospital.name) }}</strong>
            </div>
            <div class="hospital-info-item">
              <span>Penyelenggara</span>
              <strong>{{ displayValue(hospital.penyelenggara || hospital.owner) }}</strong>
            </div>
            <div class="hospital-info-item">
              <span>Nomor Telepon</span>
              <div
                v-if="hospitalPhoneNumbers.length"
                class="hospital-phone-list"
              >
                <div
                  v-for="phone in hospitalPhoneNumbers"
                  :key="phone"
                  class="hospital-phone-value"
                >
                  <strong>{{ phone }}</strong>
                  <div class="hospital-phone-actions">
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
            <div class="hospital-info-item">
              <span>Email Faskes</span>
              <a v-if="hospital.email" :href="`mailto:${hospital.email}`">
                {{ hospital.email }}
              </a>
              <strong v-else>-</strong>
            </div>
            <div class="hospital-info-item">
              <span>Provinsi</span>
              <strong>{{ displayValue(hospital.province) }}</strong>
            </div>
            <div class="hospital-info-item">
              <span>Kota/Kabupaten</span>
              <strong>{{ displayValue(hospital.city) }}</strong>
            </div>
            <div class="hospital-info-item">
              <span>Jenis</span>
              <strong>{{ displayValue(hospital.jenis || hospital.industry) }}</strong>
            </div>
            <div class="hospital-info-item">
              <span>Tipe</span>
              <strong>{{ displayValue(hospital.tipe || hospital.hospitalType) }}</strong>
            </div>
            <div class="hospital-info-item">
              <span>Tipe Marketing G0500</span>
              <strong>{{ displayValue(hospital.tipeMarketingGo500) }}</strong>
            </div>
            <div class="hospital-info-item">
              <span>SIRS</span>
              <strong>{{ displayValue(hospital.sirs) }}</strong>
            </div>
            <div class="hospital-info-item hospital-info-wide">
              <span>Alamat</span>
              <strong>{{ displayValue(hospital.address) }}</strong>
            </div>
            <div class="hospital-info-item hospital-info-wide">
              <span>Keterangan</span>
              <strong>{{ displayValue(hospital.description) }}</strong>
            </div>
          </div>

          <div class="hospital-map-section">
            <div class="hospital-info-item">
              <span>Alamat Google Maps</span>
              <strong>{{ displayValue(hospital.mapAddress || hospital.address) }}</strong>
            </div>
            <div v-if="profileLocation" class="hospital-profile-map">
              <l-map
                :use-global-leaflet="false"
                :zoom="16"
                :center="profileMapCenter"
                style="height: 310px"
              >
                <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <l-marker :lat-lng="profileMapCenter" />
              </l-map>
            </div>
            <div v-else class="hospital-map-empty">
              <span
                v-if="profileMapLoading"
                class="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <i v-else class="fa-solid fa-location-dot"></i>
              <span>{{
                profileMapLoading
                  ? "Mencari lokasi rumah sakit..."
                  : "Titik lokasi rumah sakit belum tersedia."
              }}</span>
            </div>
          </div>
        </div>

        <HospitalForm
          v-else
          inline
          @saved="handleHospitalSaved"
          @cancel="cancelHospitalEdit"
        />
      </section>
    </template>

    <ContactFormModal
      v-if="contactStore.contactState.openAddContactModal"
      @saved="handleContactCreated"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { companyDetails, type InstalledProduct } from "@/core/data/contactCrm";
import { routes } from "@/router/routes";
import { searchAddress } from "@/services/geocoding";
import {
  indonesianPhoneCallUrl,
  indonesianWhatsAppUrl,
  splitPhoneNumbers,
} from "@/utils/indonesianPhone";
import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { useProjectStore } from "@/store/project";
import type { Contact } from "@/types/contacts";
import HospitalForm from "@/module/rumahSakit/AddContactModal.vue";
import ContactFormModal from "@/module/contacts/AddContactModal.vue";
import HospitalEmptyState from "@/module/rumahSakit/HospitalEmptyState.vue";

type DetailTab =
  | "projects"
  | "contacts"
  | "installed"
  | "activities"
  | "profile";
interface ActivityItem {
  title: string;
  description: string;
  date: string;
}
interface CommentItem {
  id: number;
  author: string;
  message: string;
}

const props = defineProps<{ hospitalId: number }>();
const router = useRouter();
const hospitalStore = useHospitalStore();
const projectStore = useProjectStore();
const contactStore = useContact();
const { selectedItem: hospital, detailLoading } = storeToRefs(hospitalStore);
const activeTab = ref<DetailTab>("projects");
const profileEditing = ref(false);
const profileLocation = ref<{ lat: number; lng: number } | null>(null);
const profileMapCenter = computed<[number, number]>(() =>
  profileLocation.value
    ? [profileLocation.value.lat, profileLocation.value.lng]
    : [0, 0],
);
const profileMapLoading = ref(false);
const expandedStage = ref("qualified");
const loadError = ref("");
const comments = ref<CommentItem[]>([]);
const newComment = ref("");

const loading = computed(
  () =>
    detailLoading.value ||
    projectStore.loading ||
    contactStore.contactApi.loading,
);

const normalizeName = (value: string) => value.trim().toLowerCase();

const hospitalProjects = computed(() => {
  if (!hospital.value) return [];
  const name = normalizeName(hospital.value.name);
  return projectStore.items.filter(
    (project) =>
      project.companyId === hospital.value?.id ||
      normalizeName(project.companyName || "") === name,
  );
});

const hospitalContacts = computed(() => {
  if (!hospital.value) return [];
  const companyId = String(hospital.value.id);
  const name = normalizeName(hospital.value.name);
  return contactStore.contactApi.items.filter(
    (contact) =>
      String(contact.companyId || "") === companyId ||
      normalizeName(contact.company || "") === name,
  );
});

const installedProducts = computed<InstalledProduct[]>(
  () =>
    (hospital.value
      ? companyDetails[hospital.value.name]?.installedProducts
      : []) ?? [],
);

const totalProjectValue = computed(() =>
  hospitalProjects.value.reduce(
    (total, project) =>
      total + (project.amountValue ?? project.projectValue ?? 0),
    0,
  ),
);

const contactCount = computed(
  () => hospital.value?.totalContacts ?? hospitalContacts.value.length,
);
const installedCount = computed(
  () =>
    hospital.value?.totalInstalledEquipment ?? installedProducts.value.length,
);

const hospitalPhoneNumbers = computed(() =>
  splitPhoneNumbers(hospital.value?.phone),
);

const locationLabel = computed(() => {
  const value = hospital.value;
  if (!value) return "Lokasi belum tersedia";
  return (
    [value.address, value.city, value.province]
      .map((item) => item?.trim())
      .filter(Boolean)
      .join(", ") || "Lokasi belum tersedia"
  );
});

const lastVisitLabel = computed(() =>
  relativeDate(hospital.value?.lastVisitAt || ""),
);

const stageConfig = [
  { value: "qualified", label: "Qualified", color: "#3295f6" },
  { value: "presentation_demo", label: "Presentation/Demo", color: "#efb51d" },
  { value: "quotation", label: "Quotation", color: "#cad100" },
  { value: "negotiation", label: "Negotiation", color: "#b620ea" },
  { value: "closed_won", label: "Won", color: "#24b968" },
  { value: "closed_lost", label: "Lost", color: "#ef5056" },
  { value: "closed_cancel", label: "Cancel", color: "#aaa432" },
];

const stageGroups = computed(() =>
  stageConfig.map((stage) => {
    const projects = hospitalProjects.value.filter(
      (project) => project.status === stage.value,
    );
    return {
      ...stage,
      projects,
      totalValue: projects.reduce(
        (total, project) =>
          total + (project.amountValue ?? project.projectValue ?? 0),
        0,
      ),
    };
  }),
);

const populatedStages = computed(() =>
  stageGroups.value.filter((stage) => stage.projects.length),
);

const selectedStage = computed(
  () =>
    stageGroups.value.find((stage) => stage.value === expandedStage.value) ??
    stageGroups.value[0],
);

const activities = computed<ActivityItem[]>(() => {
  const contactActivities = hospitalContacts.value
    .filter((contact) => contact.lastActivity)
    .map((contact) => ({
      title: contact.lastActivity as string,
      description: `Aktivitas bersama ${fullName(contact)}.`,
      date: contact.lastContactedAt || "",
    }));
  const projectActivities = hospitalProjects.value
    .filter((project) => project.createdAt)
    .map((project) => ({
      title: `Peluang ${project.projectName} dibuat`,
      description: `Peluang masuk ke stage ${project.stageName || titleCase(project.status)}.`,
      date: project.createdAt || "",
    }));

  return [...contactActivities, ...projectActivities]
    .sort((a, b) => dateValue(b.date) - dateValue(a.date))
    .slice(0, 10);
});

const tabs = computed(() => [
  {
    value: "projects" as const,
    label: "Peluang",
    count: Math.max(
      hospital.value?.totalProjects ?? 0,
      hospitalProjects.value.length,
    ),
    icon: "fa-solid fa-briefcase",
  },
  {
    value: "contacts" as const,
    label: "Kontak",
    count: contactCount.value,
    icon: "fa-regular fa-address-book",
  },
  {
    value: "installed" as const,
    label: "Terpasang",
    count: installedCount.value,
    icon: "fa-solid fa-kit-medical",
  },
  {
    value: "activities" as const,
    label: "Aktivitas",
    count: activities.value.length,
    icon: "fa-regular fa-calendar-check",
  },
]);

function selectStage(stage: string) {
  expandedStage.value = stage;
}

function openProject(id: number) {
  void router.push({ name: "Project Details V2", query: { id: String(id) } });
}

function openContactDetail(contact: Contact) {
  const id = contact.remoteId ?? contact.id;
  if (!Number.isFinite(id) || id <= 0) return;
  void router.push({ path: routes.App.Contacts, query: { detail: String(id) } });
}

function createOpportunity() {
  if (!hospital.value) return;
  projectStore.openCreateModal({
    id: hospital.value.id,
    name: hospital.value.name,
  });
}

function createHospitalContact() {
  if (!hospital.value) return;
  contactStore.openContactModalForCompany({
    id: hospital.value.id,
    name: hospital.value.name,
  });
}

async function handleContactCreated() {
  await Promise.allSettled([
    contactStore.fetchRemoteContacts({ per_page: 100 }),
    hospitalStore.fetchHospitalById(props.hospitalId),
  ]);
}

function prepareProfileForm() {
  if (!hospital.value) return;
  contactStore.prepareHospitalForm(hospital.value);
}

async function loadProfileMap() {
  const currentHospital = hospital.value;
  if (!currentHospital) return;

  if (
    currentHospital.latitude !== undefined &&
    currentHospital.longitude !== undefined
  ) {
    profileLocation.value = {
      lat: currentHospital.latitude,
      lng: currentHospital.longitude,
    };
    return;
  }

  const address = (currentHospital.mapAddress || currentHospital.address).trim();
  profileLocation.value = null;
  if (!address) return;

  profileMapLoading.value = true;
  try {
    const [best] = await searchAddress(address);
    if (best) {
      profileLocation.value = {
        lat: best.latitude,
        lng: best.longitude,
      };
    }
  } catch {
    profileLocation.value = null;
  } finally {
    profileMapLoading.value = false;
  }
}

function openProfile() {
  prepareProfileForm();
  profileEditing.value = false;
  activeTab.value = "profile";
  void loadProfileMap();
}

function editHospital() {
  prepareProfileForm();
  profileEditing.value = true;
}

function cancelHospitalEdit() {
  prepareProfileForm();
  profileEditing.value = false;
}

function handleHospitalSaved() {
  prepareProfileForm();
  profileEditing.value = false;
  void loadProfileMap();
}

function closeProfile() {
  cancelHospitalEdit();
  activeTab.value = "projects";
}

function displayValue(value: unknown): string {
  const normalized = String(value ?? "").trim();
  return normalized || "-";
}

function fullName(contact: Contact): string {
  return `${contact.firstName} ${contact.lastName}`.trim() || "Tanpa nama";
}

function initials(name: string): string {
  return (
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "?"
  );
}

function titleCase(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCompactCurrency(value: number): string {
  if (!value) return "Rp 0";
  const units = [
    { limit: 1_000_000_000_000, divisor: 1_000_000_000_000, label: "T" },
    { limit: 1_000_000_000, divisor: 1_000_000_000, label: "M" },
    { limit: 1_000_000, divisor: 1_000_000, label: "Jt" },
  ];
  const unit = units.find((item) => Math.abs(value) >= item.limit);
  if (!unit) return formatCurrency(value);
  const amount = new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 1,
  }).format(value / unit.divisor);
  return `Rp ${amount}${unit.label}`;
}

function dateValue(value: string): number {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function formatDate(value: string): string {
  if (!value) return "Tanggal belum tersedia";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function relativeDate(value: string): string {
  if (!value) return "Belum ada visit";
  const timestamp = dateValue(value);
  if (!timestamp) return value;
  const days = Math.max(0, Math.floor((Date.now() - timestamp) / 86_400_000));
  if (days === 0) return "Hari ini";
  if (days === 1) return "Kemarin";
  if (days < 30) return `${days} hari lalu`;
  if (days < 365) return `${Math.floor(days / 30)} bulan lalu`;
  return `${Math.floor(days / 365)} tahun lalu`;
}

function addComment() {
  if (!newComment.value) return;
  comments.value.push({
    id: Date.now(),
    author: "Saya",
    message: newComment.value,
  });
  newComment.value = "";
}

async function loadDetail() {
  loadError.value = "";
  activeTab.value = "projects";
  hospitalStore.selectedItem = null;
  const results = await Promise.allSettled([
    hospitalStore.fetchHospitalById(props.hospitalId),
    projectStore.fetchProjects({ per_page: 100 }),
    contactStore.fetchRemoteContacts({ per_page: 100 }),
  ]);

  if (results[0]?.status === "rejected" || !hospitalStore.selectedItem) {
    loadError.value =
      hospitalStore.error || "Data rumah sakit tidak ditemukan.";
  }

  const firstPopulatedStage = stageGroups.value.find(
    (stage) => stage.projects.length,
  );
  if (firstPopulatedStage) expandedStage.value = firstPopulatedStage.value;
}

watch(() => props.hospitalId, loadDetail, { immediate: true });
</script>

<style scoped>
.hospital-detail-page {
  --primary: var(--theme-default, #18a6e4);
  --ink: #17212b;
  --muted: #73808d;
  padding-bottom: 28px;
}
.page-toolbar {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}
.page-toolbar p {
  margin: 0 0 2px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: capitalize;
}
.page-toolbar h3 {
  margin: 0;
  color: var(--ink);
  font-size: 23px;
}
.back-button {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid #e2e8ed;
  border-radius: 12px;
  color: var(--primary);
  background: #fff;
  box-shadow: 0 4px 14px rgba(26, 47, 67, 0.06);
}
.card {
  border: 1px solid #e5eaee;
  box-shadow: 0 7px 24px rgba(31, 52, 73, 0.05);
}
.hospital-overview {
  overflow: hidden;
  margin-bottom: 18px;
  border-radius: 16px;
  background: #fff;
}
.hospital-main {
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr) auto;
  align-items: center;
  gap: 17px;
  padding: 22px 24px;
  background: linear-gradient(
    120deg,
    rgba(24, 166, 228, 0.08),
    rgba(255, 255, 255, 0.8) 55%
  );
}
.hospital-symbol {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: 17px;
  color: var(--primary);
  background: #dff5fd;
  font-size: 27px;
}
.hospital-copy {
  min-width: 0;
}
.hospital-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.hospital-title-row h4 {
  overflow: hidden;
  margin: 0;
  color: var(--ink);
  font-size: 21px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 9px;
  border-radius: 999px;
  color: #14804a;
  background: #e3f7ec;
  font-size: 10px;
  font-weight: 700;
}
.status-badge i {
  font-size: 6px;
}
.status-badge.inactive {
  color: #a33a3a;
  background: #fdeaea;
}
.hospital-location {
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
  margin: 7px 0 10px;
  color: var(--muted);
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hospital-location i {
  color: var(--primary);
}
.hospital-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.hospital-tags span {
  padding: 5px 10px;
  border: 1px solid #dce9ef;
  border-radius: 999px;
  color: #37718b;
  background: #f4fbfe;
  font-size: 10px;
  font-weight: 600;
}
.profile-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 1px solid color-mix(in srgb, var(--primary) 55%, #d8e3e9);
  border-radius: 10px;
  padding: 10px 14px;
  color: #167fac !important;
  background: #f3fbfe;
  box-shadow: 0 4px 14px rgba(24, 166, 228, 0.12);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.profile-link i {
  color: #167ac0 !important;
  transition: transform 0.2s ease;
}
.profile-link > span {
  color: inherit !important;
}
.profile-link:hover,
.profile-link:focus-visible {
  color: #fff !important;
  background: var(--primary);
  box-shadow: 0 7px 18px rgba(24, 166, 228, 0.24);
  transform: translateY(-1px);
}
.profile-link:hover i,
.profile-link:focus-visible i,
.profile-link:hover > span,
.profile-link:focus-visible > span {
  color: #fff !important;
  transform: translateX(2px);
}
.profile-link:focus-visible {
  outline: 3px solid rgba(24, 166, 228, 0.2);
  outline-offset: 2px;
}
.overview-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid #e9edf0;
}
.overview-metric {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
  padding: 16px 20px;
  border-right: 1px solid #edf0f2;
}
.overview-metric:last-child {
  border-right: 0;
}
.metric-icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  border-radius: 11px;
}
.metric-icon.blue {
  color: #178bc0;
  background: #e1f4fc;
}
.metric-icon.violet {
  color: #8057d7;
  background: #eee9fb;
}
.metric-icon.green {
  color: #168b4c;
  background: #e1f5e9;
}
.metric-icon.amber {
  color: #b1760b;
  background: #fff1d5;
}
.overview-metric span,
.overview-metric strong {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.overview-metric span {
  margin-bottom: 2px;
  color: var(--muted);
  font-size: 10px;
  text-transform: capitalize;
}
.overview-metric strong {
  color: var(--ink);
  font-size: 14px;
}
.detail-tabs {
  display: flex;
  overflow-x: auto;
  margin-bottom: 18px;
  border: 1px solid #e4e9ed;
  border-radius: 13px;
  padding: 5px;
  background: #fff;
  scrollbar-width: none;
}
.detail-tabs::-webkit-scrollbar {
  display: none;
}
.detail-tabs button {
  display: flex;
  min-width: 145px;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 9px;
  padding: 11px 14px;
  color: #78838d;
  background: transparent;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}
.detail-tabs button:not(.active):hover,
.detail-tabs button:not(.active):focus-visible {
  color: #087bad;
  background: #eaf8fd;
  box-shadow: 0 3px 10px rgba(24, 166, 228, 0.12);
  transform: translateY(-1px);
}
.detail-tabs button:not(.active):hover > i,
.detail-tabs button:not(.active):hover > span,
.detail-tabs button:not(.active):focus-visible > i,
.detail-tabs button:not(.active):focus-visible > span {
  color: #087bad !important;
}
.detail-tabs button:not(.active):hover em,
.detail-tabs button:not(.active):focus-visible em {
  color: #087bad;
  background: #fff;
}
.detail-tabs button:focus-visible {
  outline: 2px solid rgba(24, 166, 228, 0.35);
  outline-offset: -2px;
}
.detail-tabs button i {
  font-size: 13px;
}
.detail-tabs button em {
  min-width: 22px;
  border-radius: 999px;
  padding: 2px 6px;
  background: #f0f3f5;
  font-size: 10px;
  font-style: normal;
}
.detail-tabs button.active {
  color: #fff;
  background: var(--primary);
  box-shadow: 0 5px 13px rgba(24, 166, 228, 0.22);
}
.detail-tabs button.active > i,
.detail-tabs button.active > span {
  color: #fff !important;
}
.detail-tabs button.active em {
  color: var(--primary);
  background: #fff;
}
.detail-tabs button.active:hover {
  filter: brightness(0.96);
  transform: translateY(-1px);
}
.tab-panel {
  border: 1px solid #e5eaee;
  border-radius: 15px;
  padding: 22px;
  background: #fff;
  box-shadow: 0 7px 22px rgba(31, 52, 73, 0.04);
}
.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}
.panel-heading p {
  margin: 0 0 3px;
  color: var(--primary);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: capitalize;
}
.panel-heading h5 {
  margin: 0;
  color: var(--ink);
  font-size: 18px;
}
.panel-heading-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}
.panel-add-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 8px 14px;
  border: 1px solid var(--primary);
  border-radius: 9px;
  color: #fff;
  background: var(--primary);
  font-size: 12px;
  font-weight: 700;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.panel-add-button:hover,
.panel-add-button:focus-visible {
  color: var(--primary);
  background: #fff;
  box-shadow: 0 5px 14px rgba(24, 166, 228, 0.16);
  transform: translateY(-1px);
}
.panel-add-button:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--primary) 24%, transparent);
  outline-offset: 2px;
}
.project-total {
  text-align: right;
}
.project-total span,
.project-total strong {
  display: block;
}
.project-total span {
  color: var(--muted);
  font-size: 10px;
  text-transform: capitalize;
}
.project-total strong {
  color: var(--ink);
  font-size: 18px;
}
.panel-count {
  padding: 6px 10px;
  border-radius: 999px;
  color: #5f6d78;
  background: #f0f3f5;
  font-size: 11px;
  font-weight: 700;
}
.pipeline-summary {
  display: flex;
  gap: 3px;
  height: 8px;
  margin-bottom: 18px;
  border-radius: 999px;
  background: #edf1f3;
}
.pipeline-summary span {
  min-width: 14px;
  border-radius: 999px;
}
.stage-browser {
  display: grid;
  gap: 16px;
}
.stage-selector {
  display: grid;
  grid-template-columns: repeat(7, minmax(120px, 1fr));
  gap: 9px;
}
.stage-summary-card {
  position: relative;
  display: grid;
  min-width: 0;
  gap: 4px;
  overflow: hidden;
  border: 1px solid #e2e7eb;
  border-radius: 11px;
  padding: 13px 12px 12px 15px;
  color: var(--ink);
  background: #fff;
  text-align: left;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.stage-summary-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: var(--stage-color);
}
.stage-summary-card:hover {
  border-color: color-mix(in srgb, var(--stage-color) 45%, #dce3e8);
  transform: translateY(-1px);
  box-shadow: 0 7px 18px rgba(31, 52, 73, 0.08);
}
.stage-summary-card.active {
  border-color: color-mix(in srgb, var(--stage-color) 60%, #dce3e8);
  background: color-mix(in srgb, var(--stage-color) 5%, #fff);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--stage-color) 13%, transparent);
}
.stage-summary-title {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 7px;
  color: #53616d;
  font-size: 10px;
  font-weight: 700;
}
.stage-summary-title i {
  width: 7px;
  height: 7px;
  flex: 0 0 7px;
  border-radius: 50%;
  background: var(--stage-color);
}
.stage-summary-title span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.stage-summary-card > strong {
  overflow: hidden;
  margin-top: 5px;
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.stage-summary-card > small {
  color: var(--muted);
  font-size: 9px;
}
.selected-stage-panel {
  overflow: hidden;
  border: 1px solid #e1e7eb;
  border-top: 3px solid var(--stage-color);
  border-radius: 12px;
  background: #fff;
}
.selected-stage-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid #e8edf0;
  padding: 15px 18px;
  background: #fafcfd;
}
.selected-stage-heading > div:last-child {
  text-align: right;
}
.selected-stage-heading span,
.selected-stage-heading strong {
  display: block;
}
.selected-stage-heading span {
  color: var(--muted);
  font-size: 9px;
}
.selected-stage-heading h6 {
  margin: 3px 0 0;
  color: var(--ink);
  font-size: 14px;
}
.selected-stage-heading > div:last-child strong {
  margin-bottom: 2px;
  color: var(--stage-color);
  font-size: 10px;
}
.project-table {
  padding: 0 18px 7px;
}
.project-table-head,
.project-row {
  display: grid;
  grid-template-columns:
    minmax(280px, 2fr) minmax(150px, 1fr) minmax(120px, 0.7fr)
    78px;
  align-items: center;
  gap: 16px;
}
.project-table-head {
  padding: 10px 12px 7px;
  color: #8a959e;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.project-row {
  width: 100%;
  border: 0;
  border-top: 1px solid #eef1f3;
  padding: 12px;
  color: var(--ink);
  background: transparent;
  text-align: left;
  transition: background 0.2s ease;
}
.project-row:hover,
.project-row:focus-visible {
  background: color-mix(in srgb, var(--stage-color) 5%, #fff);
}
.project-row:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--stage-color) 55%, transparent);
  outline-offset: -2px;
}
.project-name {
  min-width: 0;
}
.project-name strong,
.project-name small {
  display: block;
}
.project-name strong {
  overflow: hidden;
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.project-name small {
  margin-top: 3px;
  color: #9aa3aa;
  font-size: 8px;
}
.project-owner {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 7px;
  overflow: hidden;
  color: #66747f;
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.project-owner i {
  flex: 0 0 auto;
  color: var(--stage-color);
}
.project-value {
  color: #384651;
  font-size: 10px;
  font-weight: 700;
  text-align: right;
  white-space: nowrap;
}
.project-open {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;
  color: var(--primary);
  font-size: 10px;
  font-weight: 700;
}
.stage-empty {
  display: flex;
  min-height: 110px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  color: var(--muted);
  font-size: 10px;
  text-align: center;
}
.stage-empty i {
  color: color-mix(in srgb, var(--stage-color) 75%, #79858f);
  font-size: 20px;
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.contact-card {
  border: 1px solid #e2e7eb;
  border-radius: 14px;
  padding: 15px;
  background: #fff;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.contact-card:hover,
.contact-card:focus-visible {
  border-color: color-mix(in srgb, var(--primary) 45%, #e2e7eb);
  box-shadow: 0 8px 22px rgb(24 166 228 / 10%);
  transform: translateY(-1px);
  outline: none;
}
.contact-top {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr) 34px;
  align-items: center;
  gap: 10px;
}
.contact-avatar {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(145deg, #2299f5, #8dc8ff);
  font-weight: 700;
}
.contact-identity {
  min-width: 0;
}
.contact-identity strong,
.contact-identity span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.contact-identity strong {
  color: var(--ink);
  font-size: 12px;
}
.contact-identity span {
  margin-top: 3px;
  color: var(--muted);
  font-size: 10px;
}
.phone-action {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  color: var(--primary);
  background: #e5f6fd;
}
.contact-activity {
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: center;
  gap: 9px;
  margin-top: 13px;
  border-top: 1px solid #e8ecef;
  padding-top: 12px;
}
.mini-activity-icon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #ee3138;
  background: #ffe0e1;
  font-size: 11px;
}
.mini-activity-icon.muted {
  color: #9da5ac;
  background: #edf0f2;
}
.contact-activity strong,
.contact-activity span {
  display: block;
}
.contact-activity strong {
  color: #353f48;
  font-size: 10px;
}
.contact-activity span {
  margin-top: 2px;
  color: #939ca4;
  font-size: 9px;
}
.installed-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.installed-card {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  align-items: center;
  gap: 13px;
  border: 1px solid #e2e7eb;
  border-radius: 14px;
  padding: 15px;
}
.equipment-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  color: #bd7d0a;
  background: #fff0d2;
}
.equipment-icon.cyan {
  color: #1595c9;
  background: #ddf4fd;
}
.installed-card strong,
.installed-card span {
  display: block;
}
.installed-card strong {
  color: var(--ink);
  font-size: 12px;
}
.installed-card span {
  margin-top: 3px;
  color: var(--muted);
  font-size: 10px;
}
.equipment-meta {
  text-align: right;
}
.equipment-meta b {
  display: inline-flex;
  margin-top: 5px;
  border-radius: 999px;
  padding: 3px 8px;
  color: #16824b;
  background: #e2f6ea;
  font-size: 9px;
}
.activity-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.7fr);
  gap: 16px;
}
.activity-timeline {
  position: relative;
  display: grid;
  gap: 14px;
}
.activity-timeline::before {
  content: "";
  position: absolute;
  top: 22px;
  bottom: 22px;
  left: 20px;
  width: 2px;
  background: #e3e9ed;
}
.activity-item {
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: start;
  gap: 13px;
}
.activity-marker {
  z-index: 1;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 5px solid #fff;
  border-radius: 50%;
  color: #e6333b;
  background: #ffdddf;
  box-shadow: 0 0 0 1px #f5d4d6;
}
.activity-marker.green {
  color: #168b4c;
  background: #def4e6;
  box-shadow: 0 0 0 1px #d1eadb;
}
.activity-content {
  border: 1px solid #e6ebee;
  border-radius: 12px;
  padding: 12px 14px;
  background: #fcfdfe;
}
.activity-content strong {
  display: block;
  color: var(--ink);
  font-size: 12px;
}
.activity-content p {
  margin: 4px 0 9px;
  color: var(--muted);
  font-size: 10px;
}
.activity-content span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 7px;
  padding: 4px 7px;
  color: #66747f;
  background: #eef2f4;
  font-size: 9px;
}
.activity-content span i {
  color: var(--primary);
}
.panel-heading.compact {
  margin-bottom: 14px;
}
.empty-comments {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 11px;
}
.comment-row {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 9px;
  margin-bottom: 13px;
}
.comment-avatar {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #fff;
  background: var(--primary);
  font-size: 9px;
  font-weight: 700;
}
.comment-row strong {
  display: block;
  color: var(--ink);
  font-size: 10px;
}
.comment-row p {
  margin: 2px 0 0;
  color: var(--muted);
  font-size: 10px;
}
.comment-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 7px;
  margin-top: 15px;
}
.comment-form input {
  min-width: 0;
  border: 1px solid #dfe5e9;
  border-radius: 999px;
  padding: 9px 12px;
  outline: 0;
  font-size: 10px;
}
.comment-form input:focus {
  border-color: var(--primary);
}
.comment-form button {
  border: 0;
  color: #236184;
  background: transparent;
  font-size: 10px;
  font-weight: 700;
}
.comment-form button:disabled {
  opacity: 0.4;
}
.profile-heading {
  padding-bottom: 15px;
  border-bottom: 1px solid #e8ecef;
}
.profile-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.edit-profile,
.close-profile {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid #dce3e7;
  border-radius: 9px;
  padding: 8px 11px;
  color: #5e6a74;
  background: #fff;
  font-size: 10px;
}
.edit-profile {
  border-color: var(--primary);
  color: #087bad;
  font-weight: 700;
}
.edit-profile:hover,
.edit-profile:focus-visible {
  color: #fff;
  background: var(--primary);
}
.edit-profile:focus-visible,
.close-profile:focus-visible {
  outline: 3px solid rgba(24, 166, 228, 0.2);
  outline-offset: 2px;
}
.hospital-info-view {
  padding: 2px 4px 4px;
}
.hospital-info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 68px;
  row-gap: 24px;
}
.hospital-info-item {
  min-width: 0;
}
.hospital-info-item > span,
.hospital-info-item > strong,
.hospital-info-item > a {
  display: block;
  overflow-wrap: anywhere;
}
.hospital-info-item > span {
  margin-bottom: 7px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.hospital-info-item > strong,
.hospital-info-item > a,
.hospital-phone-value strong {
  color: var(--ink);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.hospital-info-item > a {
  color: var(--primary);
}
.hospital-info-wide {
  grid-column: 1 / -1;
}
.hospital-phone-list {
  display: grid;
  gap: 7px;
}
.hospital-phone-value {
  display: flex;
  align-items: center;
  gap: 8px;
}
.hospital-phone-actions {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 2px;
}
.hospital-phone-actions a {
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
.hospital-phone-actions a:last-child {
  color: #16a34a;
}
.hospital-phone-actions a:hover,
.hospital-phone-actions a:focus-visible {
  background: #e9f5fb;
}
.hospital-phone-actions a:focus-visible {
  outline: 2px solid rgba(24, 166, 228, 0.28);
  outline-offset: 1px;
}
.hospital-map-section {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid #edf0f2;
}
.hospital-profile-map {
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin-top: 14px;
  border: 1px solid #dfe7eb;
  border-radius: 13px;
}
.hospital-map-empty {
  display: flex;
  min-height: 150px;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 14px;
  border: 1px dashed #ccd8df;
  border-radius: 13px;
  color: var(--muted);
  background: #fbfcfd;
  font-size: 12px;
}
.hospital-map-empty i {
  color: var(--primary);
}
.state-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-bottom: 12px;
  color: var(--primary);
  background: #e4f6fd;
  font-size: 19px;
}
.detail-state {
  display: flex;
  min-height: 330px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
}
.detail-state p {
  margin: 0;
  color: var(--muted);
}
.state-icon.error {
  color: #d93b43;
  background: #fde7e8;
}

@media (max-width: 991.98px) {
  .overview-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .overview-metric:nth-child(2) {
    border-right: 0;
  }
  .overview-metric:nth-child(-n + 2) {
    border-bottom: 1px solid #edf0f2;
  }
  .stage-selector {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .project-table-head,
  .project-row {
    grid-template-columns:
      minmax(220px, 1.5fr) minmax(130px, 1fr) minmax(110px, 0.7fr)
      64px;
    gap: 12px;
  }
  .installed-grid {
    grid-template-columns: 1fr;
  }
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .activity-layout {
    grid-template-columns: 1fr;
  }
  .hospital-info-grid {
    column-gap: 36px;
  }
}

@media (max-width: 575.98px) {
  .hospital-detail-page {
    margin-inline: -6px;
  }
  .page-toolbar h3 {
    font-size: 19px;
  }
  .hospital-main {
    grid-template-columns: 52px minmax(0, 1fr);
    gap: 12px;
    padding: 17px;
  }
  .hospital-symbol {
    width: 50px;
    height: 50px;
    border-radius: 14px;
    font-size: 22px;
  }
  .hospital-title-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }
  .hospital-title-row h4 {
    max-width: 100%;
    font-size: 16px;
  }
  .profile-link {
    grid-column: 1 / -1;
    justify-content: center;
    border: 1px solid color-mix(in srgb, var(--primary) 55%, #d8e3e9);
    border-radius: 10px;
    box-shadow: 0 4px 14px rgba(24, 166, 228, 0.12);
  }
  .overview-metric {
    padding: 13px;
  }
  .metric-icon {
    display: none;
  }
  .detail-tabs {
    margin-inline: -4px;
    border-radius: 0;
    border-right: 0;
    border-left: 0;
    padding: 0;
  }
  .detail-tabs button {
    min-width: 104px;
    border-radius: 0;
    padding: 11px 8px;
  }
  .detail-tabs button i {
    display: none;
  }
  .tab-panel {
    border-radius: 12px;
    padding: 16px;
  }
  .panel-heading {
    align-items: flex-end;
  }
  .panel-heading-actions {
    align-items: flex-end;
    flex-direction: column-reverse;
    gap: 7px;
  }
  .panel-add-button {
    min-height: 36px;
    padding-inline: 11px;
  }
  .project-total strong {
    font-size: 15px;
  }
  .stage-selector {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .selected-stage-heading {
    padding: 13px 14px;
  }
  .project-table {
    padding: 5px 10px 9px;
  }
  .project-table-head {
    display: none;
  }
  .project-row {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px 12px;
    border: 1px solid #edf0f2;
    border-radius: 10px;
    margin-top: 8px;
    padding: 11px;
  }
  .project-name {
    grid-column: 1 / -1;
  }
  .project-name strong {
    white-space: normal;
  }
  .project-owner {
    font-size: 9px;
  }
  .project-value {
    text-align: right;
  }
  .project-open {
    display: none;
  }
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .installed-card {
    grid-template-columns: 44px minmax(0, 1fr);
  }
  .equipment-meta {
    grid-column: 2;
    text-align: left;
  }
  .hospital-info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .hospital-info-wide {
    grid-column: auto;
  }
  .profile-heading {
    align-items: flex-start;
  }
  .profile-actions {
    align-items: flex-end;
    flex-direction: column;
  }
  .close-profile {
    padding: 7px 9px;
  }
}
</style>
