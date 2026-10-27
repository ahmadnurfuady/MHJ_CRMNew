<template>
  <div class="card mb-0">
    <div class="card-header contact-list-header">
      <div class="contact-title-group">
        <h5 class="mb-1">Kontak</h5>
        <p class="contact-total mb-0">
          {{ formatContactTotal(contactTotal) }} total kontak
        </p>
      </div>
      <div class="contact-header-actions">
        <div class="contact-search" role="search">
          <label class="visually-hidden" for="contact-search-input">Cari kontak</label>
          <SolarIcon
            name="magnifier"
            class="crm-search-icon"
            :size="18"
            color="var(--app-primary-deep, #032A4E)"
            secondary-color="var(--app-primary, #18A6E4)"
            :secondary-opacity="0.75"
            aria-hidden="true"
          />
          <input
            id="contact-search-input"
            v-model="searchQuery"
            type="search"
            placeholder="Cari nama, faskes, atau nomor..."
            autocomplete="off"
          />
          <span
            v-if="contactApi.loading"
            class="spinner-border spinner-border-sm contact-search__loading"
            aria-hidden="true"
          ></span>
          <button
            v-else-if="searchQuery"
            class="contact-search__clear"
            type="button"
            aria-label="Hapus pencarian"
            @click="searchQuery = ''"
          >
            <vue-feather type="x" size="15" />
          </button>
        </div>
        <button
          class="btn btn-primary add-contact-header-button mhj-add-button"
          type="button"
          @click="openContactModal"
        >
          <SolarIcon
            name="add"
            class="add-contact-header-button__icon"
            :size="19"
            color="#ffffff"
            secondary-color="#ffffff"
            :secondary-opacity="1"
            aria-hidden="true"
          />
          <span>Tambah Kontak Baru</span>
        </button>
      </div>
    </div>
    <div class="card-body p-0">
      <div class="table-responsive contact-table-wrap">
        <table
          class="table mhj-data-table contact-table align-middle mb-0"
          :style="{ width: `${contactTableWidth}px` }"
        >
          <colgroup>
            <col
              v-for="(width, index) in contactColumnWidths"
              :key="contactTableColumns[index]?.label"
              :style="{ width: `${width}px` }"
            />
          </colgroup>
          <thead>
            <tr>
              <th
                v-for="(column, index) in contactTableColumns"
                :key="column.label"
                class="contact-table__resizable-header"
                :class="{ 'text-center': index === contactTableColumns.length - 1 }"
              >
                {{ column.label }}
                <button
                  v-if="index < contactTableColumns.length - 1"
                  class="contact-table__resize-handle"
                  type="button"
                  :aria-label="`Ubah lebar kolom ${column.label}`"
                  :title="`Tarik untuk mengubah lebar kolom ${column.label}`"
                  @pointerdown="startColumnResize(index, $event)"
                  @dblclick.stop="resetColumnWidth(index)"
                ></button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="contactApi.loading && !filteredContact.length">
              <td colspan="7" class="contact-table-state">
                <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                Memuat data kontak...
              </td>
            </tr>
            <tr v-for="contact in filteredContact" :key="contact.id">
              <td
                class="entity-detail-cell"
                data-label="Nama"
                role="link"
                tabindex="0"
                :title="`Buka detail ${fullName(contact)}`"
                :aria-label="`Buka detail kontak ${fullName(contact)}`"
                @click="openContactDetail(contact)"
                @keydown.enter="openContactDetail(contact)"
              >
                <div class="contact-person">
                  <div
                    class="contact-avatar"
                    :style="avatarColorStyle(fullName(contact) || contact.id)"
                    aria-hidden="true"
                  >
                    {{ personInitials(contact.firstName, contact.lastName) }}
                  </div>
                  <div class="contact-person__identity">
                    <strong class="entity-detail-name mhj-cell-ellipsis">
                      {{ fullName(contact) }}
                    </strong>
                    <DummyDataBadge v-if="contact.isDemo" />
                    <span
                      class="mhj-cell-ellipsis"
                      :title="contact.email || 'Email belum tersedia'"
                    >
                      {{ contact.email || "Email belum tersedia" }}
                    </span>
                  </div>
                </div>
              </td>
              <td data-label="Faskes">
                <button
                  class="cell-primary cell-navigation-link mhj-cell-ellipsis contact-table__bounded-text"
                  type="button"
                  :title="hospitalLabel(contact)"
                  :aria-label="`Lihat detail faskes ${hospitalLabel(contact)}`"
                  @click="openContactSection(contact, '#contact-faskes-detail')"
                >
                  {{ hospitalLabel(contact) }}
                </button>
              </td>
              <td data-label="Jabatan">
                <span
                  class="mhj-cell-ellipsis contact-table__bounded-text"
                  :title="contact.jobTitle || '-'"
                >
                  {{ contact.jobTitle || "-" }}
                </span>
              </td>
              <td data-label="Peluang">
                <button
                  v-if="contactPeluang(contact).length"
                  class="project-badge project-navigation-link mhj-cell-ellipsis"
                  type="button"
                  :title="contactPeluang(contact).map((project) => project.projectName).join(', ')"
                  :aria-label="`Lihat ${contactPeluang(contact).length} peluang ${fullName(contact)}`"
                  @click="openContactSection(contact, '#contact-opportunity-detail')"
                >
                  {{ contactPeluang(contact).length }} Peluang
                </button>
                <span v-else class="empty-value">Belum ada peluang</span>
              </td>
              <td data-label="Aktivitas">
                <div v-if="activityLabel(contact)" class="activity-cell">
                  <span class="activity-label" :title="activityTooltip(contact)">
                    <span class="activity-dot"></span>
                    <span class="activity-label__text">{{ activityLabel(contact) }}</span>
                  </span>
                  <small v-if="activityTime(contact)">{{ activityTime(contact) }}</small>
                </div>
                <span v-else class="empty-value">Belum ada aktivitas</span>
              </td>
              <td data-label="Terakhir Dihubungi">
                <div v-if="contact.lastContactedAt" class="last-contacted">
                  <span>{{ formatContactDate(contact.lastContactedAt) }}</span>
                  <small>{{ relativeContactDate(contact.lastContactedAt) }}</small>
                </div>
                <span v-else class="empty-value">Belum pernah</span>
              </td>
              <td data-label="Detail" class="text-center contact-detail-cell">
                <button
                  class="btn btn-outline-primary btn-sm detail-button"
                  type="button"
                  :aria-label="`Lihat detail ${fullName(contact)}`"
                  @click="openContactDetail(contact)"
                >
                  <SolarIcon
                    name="eye"
                    :size="17"
                    color="currentColor"
                    secondary-color="currentColor"
                    :secondary-opacity="0.42"
                    aria-hidden="true"
                  />
                  <span>Lihat Detail</span>
                </button>
              </td>
            </tr>
            <tr v-if="!contactApi.loading && !filteredContact.length">
              <td colspan="7" class="contact-table-state">
                <div class="empty-state-icon">
                  <vue-feather type="users" size="22" />
                </div>
                <strong>Kontak tidak ditemukan</strong>
                <span>Belum ada kontak pada kategori ini.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      v-if="filteredContact.length || contactApi.pagination.page > 1"
      class="card-footer d-flex flex-wrap align-items-center justify-content-between gap-2"
    >
      <span class="text-muted f-14">
        Halaman {{ contactApi.pagination.page }} dari {{ contactApi.pagination.lastPage }}
      </span>
      <div class="pagination-actions" role="group" aria-label="Pagination Kontak">
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="contactApi.loading || contactApi.pagination.page <= 1"
          @click="changeContactPage(contactApi.pagination.page - 1)"
        >
          <vue-feather type="chevron-left" size="15" class="me-1" />Sebelumnya
        </button>
        <div class="pagination-pages" aria-label="Pilih halaman">
          <template v-for="item in visibleContactPages" :key="String(item)">
            <span v-if="typeof item === 'string'" class="pagination-ellipsis" aria-hidden="true">
              …
            </span>
            <button
              v-else
              class="btn btn-sm pagination-page-button"
              :class="{
                'pagination-page-button--active': item === contactApi.pagination.page,
              }"
              type="button"
              :disabled="contactApi.loading || item === contactApi.pagination.page"
              :aria-current="item === contactApi.pagination.page ? 'page' : undefined"
              :aria-label="`Ke halaman ${item}`"
              @click="changeContactPage(item)"
            >
              {{ item }}
            </button>
          </template>
        </div>
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="
            contactApi.loading || contactApi.pagination.page >= contactApi.pagination.lastPage
          "
          @click="changeContactPage(contactApi.pagination.page + 1)"
        >
          Berikutnya<vue-feather type="chevron-right" size="15" class="ms-1" />
        </button>
      </div>
    </div>
  </div>

  <AddContactModal v-if="contactState.openAddContactModal" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import DummyDataBadge from "@/components/shared/DummyDataBadge.vue";
import { companyDetails } from "@/core/data/contactCrm";
import {
  fetchLatestActivities,
  formatTimelineDate,
  timeAgo,
  type LatestActivity,
} from "@/services/activityLogService";
import { useContact } from "@/store/contact";
import { useProjectStore } from "@/store/project";
import type { Contact } from "@/types/contacts";
import type { Projects } from "@/types/project";
import { avatarColorStyle, personInitials } from "@/utils/avatar";
const AddContactModal = defineAsyncComponent(
  () => import("@/module/contacts/AddContactModal.vue"),
);
const router = useRouter();
const contactStore = useContact();
const projectStore = useProjectStore();
const { contactState, contactApi, filteredContact } = storeToRefs(contactStore);
const { changeContactPage, openContactModal, searchContacts } = contactStore;
const searchQuery = ref("");
let searchTimer: ReturnType<typeof setTimeout> | undefined;
const contactTableColumns = [
  { label: "Nama", defaultWidth: 300, minWidth: 220 },
  { label: "Faskes", defaultWidth: 220, minWidth: 140 },
  { label: "Jabatan", defaultWidth: 320, minWidth: 140 },
  { label: "Peluang", defaultWidth: 130, minWidth: 110 },
  { label: "Aktivitas", defaultWidth: 230, minWidth: 170 },
  { label: "Terakhir Dihubungi", defaultWidth: 220, minWidth: 180 },
  { label: "Detail", defaultWidth: 180, minWidth: 160 },
] as const;
const contactColumnWidths = ref<number[]>(
  contactTableColumns.map((column) => column.defaultWidth),
);
const contactTableWidth = computed(() =>
  contactColumnWidths.value.reduce((total, width) => total + width, 0),
);
const contactTotal = computed(() =>
  Math.max(
    filteredContact.value.length,
    contactApi.value.pagination.total +
      (filteredContact.value.some((contact) => contact.isDemo) ? 1 : 0),
  ),
);
const visibleContactPages = computed<Array<number | string>>(() => {
  const totalPages = Math.max(1, contactApi.value.pagination.lastPage);
  const currentPage = Math.min(
    Math.max(1, contactApi.value.pagination.page),
    totalPages,
  );

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pageSet = new Set([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);

  if (currentPage <= 3) {
    pageSet.add(2);
    pageSet.add(3);
  }
  if (currentPage >= totalPages - 2) {
    pageSet.add(totalPages - 2);
    pageSet.add(totalPages - 1);
  }

  const pages = [...pageSet]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right);
  const items: Array<number | string> = [];

  pages.forEach((page, index) => {
    const previousPage = pages[index - 1];
    if (previousPage !== undefined && page - previousPage > 1) {
      items.push(`ellipsis-${previousPage}-${page}`);
    }
    items.push(page);
  });

  return items;
});
let activeColumnResize:
  | { index: number; startX: number; startWidth: number }
  | undefined;

function startColumnResize(index: number, event: PointerEvent) {
  event.preventDefault();
  activeColumnResize = {
    index,
    startX: event.clientX,
    startWidth: contactColumnWidths.value[index] ?? contactTableColumns[index].defaultWidth,
  };
  document.body.style.cursor = "ew-resize";
  document.body.style.userSelect = "none";
  window.addEventListener("pointermove", resizeContactColumn);
  window.addEventListener("pointerup", stopColumnResize);
  window.addEventListener("pointercancel", stopColumnResize);
}

function resizeContactColumn(event: PointerEvent) {
  if (!activeColumnResize) return;

  const { index, startX, startWidth } = activeColumnResize;
  const minWidth = contactTableColumns[index]?.minWidth ?? 90;
  const nextWidths = [...contactColumnWidths.value];
  nextWidths[index] = Math.max(minWidth, startWidth + event.clientX - startX);
  contactColumnWidths.value = nextWidths;
}

function stopColumnResize() {
  activeColumnResize = undefined;
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
  window.removeEventListener("pointermove", resizeContactColumn);
  window.removeEventListener("pointerup", stopColumnResize);
  window.removeEventListener("pointercancel", stopColumnResize);
}

function resetColumnWidth(index: number) {
  const nextWidths = [...contactColumnWidths.value];
  nextWidths[index] = contactTableColumns[index]?.defaultWidth ?? nextWidths[index];
  contactColumnWidths.value = nextWidths;
}

watch(searchQuery, (query) => {
  if (searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    void searchContacts(query);
  }, 350);
});

function fullName(contact: Contact) {
  return `${contact.firstName || ""} ${contact.lastName || ""}`.trim() || "Tanpa nama";
}

function formatContactTotal(total: number) {
  return new Intl.NumberFormat("id-ID").format(total);
}

function hospitalLabel(contact: Contact) {
  return contact.companyNames?.length
    ? contact.companyNames.join(", ")
    : contact.company || "-";
}

/** Peluang terkait rumah sakit kontak, sama seperti ringkasan di halaman detail kontak. */
const projectsByCompany = computed(() => {
  const map = new Map<string, Projects[]>();
  projectStore.items.forEach((project) => {
    const keys = [
      project.companyId ? `id:${project.companyId}` : undefined,
      project.companyName ? `name:${project.companyName.trim().toLowerCase()}` : undefined,
    ].filter((key): key is string => Boolean(key));

    keys.forEach((key) => {
      const list = map.get(key) ?? [];
      list.push(project);
      map.set(key, list);
    });
  });
  return map;
});

function contactPeluang(contact: Contact): Array<{ projectName: string }> {
  if (contact.companyNames?.length) {
    return contact.companyNames.flatMap((companyName) =>
      (companyDetails[companyName]?.projects ?? []).map((project) => ({
        projectName: project.name,
      })),
    );
  }

  const companyId = Number(contact.companyId);
  if (Number.isFinite(companyId) && companyId > 0) {
    const byId = projectsByCompany.value.get(`id:${companyId}`);
    if (byId?.length) return byId;
  }

  const companyName = (contact.company || "").trim().toLowerCase();
  if (!companyName) return [];
  return projectsByCompany.value.get(`name:${companyName}`) ?? [];
}

/**
 * Aktivitas terakhir per kontak untuk seluruh baris halaman aktif. Sumbernya
 * sama dengan panel Riwayat di halaman detail (activity_logs + catatan), lihat
 * fetchLatestActivities di services/activityLogService.
 */
const latestActivities = ref(new Map<number, LatestActivity>());
/** Hanya respons permintaan terakhir yang dipakai saat user cepat ganti halaman / mencari. */
let activityRequestSeq = 0;
const ACTIVITY_REFRESH_INTERVAL_MS = 60_000;
let activityRefreshTimer: number | undefined;

function refreshActivitiesOnFocus() {
  if (document.visibilityState === "hidden") return;
  void loadLatestActivities();
}

async function loadLatestActivities() {
  const remoteIds = filteredContact.value
    .filter((contact) => contact.origin === "api" && !contact.isDemo)
    .map((contact) => Number(contact.remoteId))
    .filter((id) => Number.isSafeInteger(id) && id > 0);

  const seq = ++activityRequestSeq;

  if (!remoteIds.length) {
    latestActivities.value = new Map();
    return;
  }

  const activities = await fetchLatestActivities("contacts", remoteIds);
  if (seq !== activityRequestSeq) return;
  latestActivities.value = activities;
}

function contactActivity(contact: Contact): LatestActivity | undefined {
  const remoteId = Number(contact.remoteId);
  if (!Number.isSafeInteger(remoteId) || remoteId <= 0) return undefined;
  return latestActivities.value.get(remoteId);
}

/** Log historis dipakai lebih dahulu; `lastActivity` dari list tetap jadi cadangan. */
function activityLabel(contact: Contact) {
  return contactActivity(contact)?.label || contact.lastActivity || "";
}

function activityTime(contact: Contact) {
  const createdAt = contactActivity(contact)?.createdAt;
  return createdAt ? timeAgo(createdAt) : "";
}

function activityTooltip(contact: Contact) {
  const activity = contactActivity(contact);
  if (!activity) return contact.lastActivity || "";

  return [
    activity.label,
    activity.authorName ? `oleh ${activity.authorName}` : "",
    activity.createdAt ? formatTimelineDate(activity.createdAt) : "",
    activity.source ? `(${activity.source})` : "",
  ]
    .filter(Boolean)
    .join(" · ");
}

// Kolom aktivitas selalu mengikuti baris yang sedang tampil (ganti halaman / cari).
watch(
  () =>
    filteredContact.value
      .map((contact) => `${contact.origin ?? ""}:${contact.remoteId ?? ""}`)
      .join(","),
  () => void loadLatestActivities(),
  { immediate: true },
);

function parseContactDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatContactDate(value: string) {
  const date = parseContactDate(value);
  if (!date) return value;

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function relativeContactDate(value: string) {
  const date = parseContactDate(value);
  if (!date) return "";

  const diffInDays = Math.floor((Date.now() - date.getTime()) / 86_400_000);
  if (diffInDays <= 0) return "Hari ini";
  if (diffInDays === 1) return "Kemarin";
  if (diffInDays < 30) return `${diffInDays} hari lalu`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths} bulan lalu`;
  return `${Math.floor(diffInMonths / 12)} tahun lalu`;
}

function openContactDetail(contact: Contact) {
  const id = contact.remoteId ?? contact.id;
  void router.push({ path: routes.App.Contacts, query: { detail: String(id) } });
}

function openContactSection(contact: Contact, hash: string) {
  const id = contact.remoteId ?? contact.id;
  void router.push({
    path: routes.App.Contacts,
    query: { detail: String(id) },
    hash,
  });
}

onMounted(() => {
  contactStore.initStore();
  if (!projectStore.loaded) void projectStore.fetchProjects({ per_page: 100 });

  // Aktivitas bisa bertambah dari halaman detail, pengguna lain, atau APK.
  // Daftar disegarkan berkala dan saat tab kembali aktif supaya kolom
  // Aktivitas tidak tertinggal dari riwayat di halaman detail.
  activityRefreshTimer = window.setInterval(
    () => void loadLatestActivities(),
    ACTIVITY_REFRESH_INTERVAL_MS,
  );
  window.addEventListener("focus", refreshActivitiesOnFocus);
  document.addEventListener("visibilitychange", refreshActivitiesOnFocus);
});

onBeforeUnmount(() => {
  if (searchTimer) clearTimeout(searchTimer);
  if (activityRefreshTimer) clearInterval(activityRefreshTimer);
  window.removeEventListener("focus", refreshActivitiesOnFocus);
  document.removeEventListener("visibilitychange", refreshActivitiesOnFocus);
  stopColumnResize();
});
</script>

<style scoped>
.contact-list-header {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) minmax(0, 650px);
  align-items: center;
  gap: 24px;
  padding: 20px 24px;
}

.contact-title-group h5 {
  color: #0f172a;
  font-size: 18px;
  font-weight: 700;
}

.contact-title-group {
  display: flex;
  align-items: flex-start;
  justify-self: start;
  flex-direction: column;
  text-align: left;
}

.contact-total {
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
}

.contact-header-actions {
  display: grid;
  grid-template-columns: minmax(260px, 420px) max-content;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 10px;
}

.contact-search {
  display: flex;
  width: 100%;
  height: 44px;
  min-width: 0;
  box-sizing: border-box;
  align-items: center;
  gap: 9px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0 11px;
  background: #ffffff;
  color: #64748b;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.contact-search .crm-search-icon {
  flex: 0 0 18px;
}

.contact-search:focus-within {
  border-color: var(--app-primary, #18a6e4);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.14);
}

.contact-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #0f172a;
  font-size: 13px;
}

.contact-search input::placeholder {
  color: #94a3b8;
}

.contact-search__loading {
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  color: var(--app-primary, #18a6e4);
}

.contact-search__clear {
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  background: #f1f5f9;
  color: #64748b;
}

.add-contact-header-button {
  display: inline-flex;
  width: auto;
  height: 44px !important;
  min-height: 44px !important;
  max-height: 44px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-color: var(--app-primary, #18a6e4) !important;
  border-radius: 8px;
  margin: 0 !important;
  padding: 0 18px;
  background-color: var(--app-primary, #18a6e4) !important;
  color: #ffffff !important;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.add-contact-header-button:hover,
.add-contact-header-button:focus {
  border-color: var(--app-primary-hover, #1493cc) !important;
  background-color: var(--app-primary-hover, #1493cc) !important;
  color: #ffffff !important;
}

.add-contact-header-button span,
.add-contact-header-button svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}

.add-contact-header-button .add-contact-header-button__icon {
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  filter: brightness(0) invert(1);
}

.contact-table-wrap {
  min-height: 240px;
  overflow-x: auto;
}

.contact-table {
  table-layout: fixed;
  min-width: 1080px;
}

.contact-table thead th {
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
  padding: 0.75rem;
  background: #ffffff;
  color: #051a1a;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
}

.contact-table thead th:last-child {
  padding-right: 28px;
  padding-left: 20px;
}

.contact-table__resizable-header {
  position: relative;
  padding-right: 18px !important;
}

.contact-table__resize-handle {
  position: absolute;
  z-index: 2;
  top: 0;
  right: -4px;
  width: 9px;
  height: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: ew-resize;
  touch-action: none;
}

.contact-table__resize-handle::after {
  position: absolute;
  top: 20%;
  right: 3px;
  width: 1px;
  height: 60%;
  border-radius: 999px;
  background: #cbd5e1;
  content: "";
  transition: background-color 0.15s ease;
}

.contact-table__resize-handle:hover::after,
.contact-table__resize-handle:focus-visible::after {
  background: var(--app-primary, #18a6e4);
}

.contact-table tbody td {
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
  padding: 14px 16px;
  color: #334155;
  font-size: 13px;
  vertical-align: middle;
}

.contact-table tbody tr {
  transition: background-color 0.2s ease;
}

.contact-table tbody tr:hover {
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.035);
}

.contact-person {
  display: flex;
  min-width: 190px;
  align-items: center;
  gap: 10px;
}

.contact-avatar {
  display: grid;
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  place-items: center;
  border: 2px solid rgba(255, 255, 255, 0.78);
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 5px 12px rgba(15, 23, 42, 0.14);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.25px;
}

.contact-person__identity {
  min-width: 0;
}

.contact-person__identity strong,
.contact-person__identity span {
  display: block;
}

.contact-person__identity strong,
.cell-primary {
  color: #0f172a;
  font-weight: 600;
}

.entity-detail-cell {
  cursor: pointer;
}

.entity-detail-cell:hover .entity-detail-name,
.entity-detail-cell:focus-visible .entity-detail-name {
  color: var(--theme-default, #18a6e4);
}

.entity-detail-cell:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.22);
  outline-offset: -2px;
}

.contact-person__identity span {
  max-width: 190px;
  overflow: hidden;
  color: #64748b;
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-person__identity .dummy-data-badge {
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  margin: 3px 0;
  overflow: visible;
  color: #8a5a00;
  font-size: 10px;
  text-overflow: clip;
}

/* Nama Rumah Sakit dan Jabatan memakai batas teks yang sama. */
.contact-table__bounded-text {
  max-width: 100%;
}

.contact-table .mhj-cell-ellipsis {
  max-width: 100%;
}

.cell-navigation-link {
  display: block;
  width: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: color 0.18s ease;
}

.cell-navigation-link:hover,
.cell-navigation-link:focus-visible {
  color: var(--theme-default, #18a6e4);
}

.cell-navigation-link:focus-visible,
.project-navigation-link:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.3);
  outline-offset: 3px;
}

.project-badge {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  border-radius: 6px;
  padding: 5px 8px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary-dark, #0369a1);
  font-size: 11px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-navigation-link {
  border: 0;
  cursor: pointer;
  transition: background-color 0.18s ease, color 0.18s ease;
}

.project-navigation-link:hover,
.project-navigation-link:focus-visible {
  color: var(--app-primary-dark, #075985);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
}

/* Label aktivitas + waktu relatifnya, sejajar dengan pola kolom "Terakhir Dihubungi". */
.activity-cell {
  width: 100%;
  min-width: 0;
}

.activity-cell small {
  display: block;
  overflow: hidden;
  color: #94a3b8;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.activity-label {
  display: inline-flex;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  align-items: center;
  gap: 7px;
  color: #334155;
}

.activity-label__text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.activity-dot {
  width: 7px;
  height: 7px;
  flex: 0 0 7px;
  border-radius: 50%;
  background: var(--app-primary, #18a6e4);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.empty-value {
  color: #94a3b8;
  font-size: 12px;
}

.last-contacted span,
.last-contacted small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.last-contacted {
  width: 100%;
  min-width: 0;
  line-height: 1.35;
}

.last-contacted span {
  color: #334155;
  font-weight: 500;
}

.last-contacted small {
  margin-top: 2px;
  color: #64748b;
  font-size: 11px;
}

.detail-button {
  display: inline-flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 7px;
  padding: 7px 10px;
  border-color: var(--theme-default, #18a6e4) !important;
  color: var(--theme-default, #1688bd) !important;
  background: #fff !important;
  white-space: nowrap;
}

.contact-detail-cell {
  padding-right: 28px !important;
  padding-left: 20px !important;
}

.detail-button > span,
.detail-button :deep(.solar-icon) {
  color: inherit !important;
}

.detail-button :deep(.solar-icon path) {
  stroke: none !important;
}

.detail-button:hover,
.detail-button:focus,
.detail-button:focus-visible,
.detail-button:active {
  border-color: var(--theme-default, #18a6e4) !important;
  color: #fff !important;
  background: var(--theme-default, #18a6e4) !important;
}

.detail-button:focus-visible {
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.22) !important;
}

.contact-table-state {
  height: 210px;
  color: #64748b !important;
  text-align: center;
}

.contact-table-state strong,
.contact-table-state span {
  display: block;
}

.empty-state-icon {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary, #18a6e4);
}

.pagination-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.pagination-button {
  display: inline-flex;
  width: auto;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem !important;
  padding-inline: 0.875rem;
}

.pagination-pages {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.pagination-page-button {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem !important;
  padding: 0;
  background: #ffffff;
  color: #475569;
  font-weight: 600;
}

.pagination-page-button:hover:not(:disabled) {
  border-color: var(--app-primary, #18a6e4);
  color: var(--app-primary, #18a6e4);
}

.pagination-page-button--active,
.pagination-page-button--active:disabled {
  border-color: var(--app-primary, #18a6e4);
  background: var(--app-primary, #18a6e4);
  color: #ffffff;
  opacity: 1;
}

.pagination-ellipsis {
  min-width: 20px;
  color: #64748b;
  text-align: center;
}

@media (max-width: 991.98px) {
  .contact-list-header {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 18px;
  }

  .contact-header-actions {
    grid-template-columns: minmax(0, 1fr) max-content;
    justify-content: stretch;
  }

  .contact-search {
    width: 100%;
  }
}

@media (max-width: 575.98px) {
  .contact-header-actions {
    grid-template-columns: 1fr;
  }

  .add-contact-header-button {
    width: 100%;
  }

  .contact-table-wrap {
    padding: 12px;
    overflow: visible;
  }

  .contact-table {
    width: 100% !important;
    min-width: 0;
    table-layout: auto;
  }

  .contact-table colgroup,
  .contact-table__resize-handle {
    display: none;
  }

  .contact-table thead {
    display: none;
  }

  .contact-table tbody,
  .contact-table tr,
  .contact-table td {
    display: block;
    width: 100%;
  }

  .contact-table tbody tr {
    overflow: hidden;
    border: 1px solid var(--border-subtle, #e2e8f0);
    border-radius: 10px;
    margin-bottom: 12px;
  }

  .contact-table tbody td {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border-bottom: 1px solid #f1f5f9;
    padding: 11px 13px;
    text-align: right;
  }

  .contact-table tbody td::before {
    content: attr(data-label);
    flex: 0 0 38%;
    color: #64748b;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-align: left;
    text-transform: capitalize;
  }

  .contact-table tbody td:first-child {
    background: #f8fafc;
  }

  .contact-table tbody td:last-child {
    border-bottom: 0;
  }

  .contact-person {
    min-width: 0;
    justify-content: flex-end;
  }

  .contact-table-state {
    display: table-cell !important;
    height: 180px;
  }

  .contact-table-state::before {
    display: none;
  }
}
</style>
