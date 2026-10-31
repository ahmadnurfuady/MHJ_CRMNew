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
            color="var(--app-primary, #18A6E4)"
            aria-hidden="true"
          />
          <input
            id="contact-search-input"
            v-model="searchQuery"
            type="text"
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
        <div ref="filterRoot" class="contact-filter">
          <button
            class="contact-filter__trigger"
            type="button"
            aria-label="Filter kontak"
            title="Filter kontak"
            :aria-expanded="filterOpen"
            aria-haspopup="true"
            @click="filterOpen = !filterOpen"
          >
            <MhjIcon
              name="action_filter"
              :size="22"
              color="var(--app-primary-dark, #0e7490)"
              secondary-color="var(--app-primary, #18a6e4)"
            />
            <b v-if="selectedUserId !== null">1</b>
          </button>
          <div v-if="filterOpen" class="contact-filter__dropdown" role="menu">
            <div class="contact-filter__search" role="search">
              <input
                v-model="filterSearch"
                type="text"
                class="contact-filter__search-input"
                placeholder="Cari user..."
                autocomplete="off"
              />
            </div>
            <ul class="contact-filter__list" role="listbox">
              <li v-for="user in filteredUsers" :key="user.id">
                <button
                  class="contact-filter__card"
                  :class="{ 'contact-filter__card--active': selectedUserId === user.id }"
                  type="button"
                  role="option"
                  :aria-selected="selectedUserId === user.id"
                  :title="`${user.name} - ${user.jabatan} | ${user.divisi} | ${user.cabang}`"
                  @click="selectUser(user.id)"
                >
                  <span class="contact-filter__card-content">
                    <span class="contact-filter__card-name">{{ user.name }}</span>
                    <span class="contact-filter__card-meta">
                      {{ user.jabatan }} | {{ user.divisi }} | {{ user.cabang }}
                    </span>
                  </span>
                  <span
                    v-if="selectedUserId === user.id"
                    class="contact-filter__card-check"
                    aria-hidden="true"
                  >
                    <vue-feather type="check" size="14" />
                  </span>
                </button>
              </li>
              <li v-if="!filteredUsers.length" class="contact-filter__empty">
                Tidak ditemukan.
              </li>
            </ul>
          </div>
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
            <tr v-if="contactApi.loading && !paginatedContacts.length">
              <td colspan="6" class="contact-table-state">
                <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                Memuat data kontak...
              </td>
            </tr>
            <tr v-for="contact in paginatedContacts" :key="contact.id">
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
                <button
                  v-if="contactPeluangCount(contact) > 0"
                  class="project-badge project-navigation-link contact-peluang-inline"
                  type="button"
                  :aria-label="`Lihat ${contactPeluangCount(contact)} peluang ${fullName(contact)}`"
                  @click="openContactSection(contact, '#contact-opportunity-detail')"
                >
                  {{ contactPeluangCount(contact) }} Peluang
                </button>
              </td>
              <td data-label="Peluang" class="contact-peluang-cell">
                <button
                  v-if="contactPeluangCount(contact) > 0"
                  class="project-badge project-navigation-link mhj-cell-ellipsis"
                  type="button"
                  :aria-label="`Lihat ${contactPeluangCount(contact)} peluang ${fullName(contact)}`"
                  @click="openContactSection(contact, '#contact-opportunity-detail')"
                >
                  {{ contactPeluangCount(contact) }} Peluang
                </button>
                <span v-else class="empty-value">Belum ada peluang</span>
              </td>
              <td data-label="Aktivitas">
                <div v-if="activityLabel(contact)" class="activity-cell">
                  <span class="activity-label" :title="activityTooltip(contact)">
                    <span class="activity-dot"></span>
                    <span class="activity-label__text">{{ activityLabel(contact) }}</span>
                  </span>
                  <small v-if="activityTime(contact)" class="activity-time">
                    {{ activityTime(contact) }}
                  </small>
                </div>
                <span v-else class="empty-value">Belum ada aktivitas</span>
              </td>
              <td data-label="Detail" class="text-center contact-detail-cell">
                <button
                  class="btn btn-outline-primary btn-sm detail-button"
                  type="button"
                  :aria-label="`Lihat detail ${fullName(contact)}`"
                  @click="openContactDetail(contact)"
                >
                  <span>Lihat Detail</span>
                </button>
              </td>
            </tr>
            <tr v-if="!contactApi.loading && !filteredContact.length">
              <td colspan="6" class="contact-table-state">
                <div class="empty-state-icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path
                      d="M12 13c-4.42 0-8 2.24-8 5 0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2 0-2.76-3.58-5-8-5z"
                    />
                  </svg>
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
      v-if="filteredContact.length"
      class="card-footer d-flex flex-wrap align-items-center justify-content-between gap-2"
    >
      <span class="text-muted f-14">
        Halaman {{ currentContactPage }} dari {{ contactLastPage }}
      </span>
      <div class="pagination-actions" role="group" aria-label="Pagination Kontak">
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="contactApi.loading || currentContactPage <= 1"
          @click="changeContactPage(currentContactPage - 1)"
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
                'pagination-page-button--active': item === currentContactPage,
              }"
              type="button"
              :disabled="contactApi.loading || item === currentContactPage"
              :aria-current="item === currentContactPage ? 'page' : undefined"
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
            contactApi.loading || currentContactPage >= contactLastPage
          "
          @click="changeContactPage(currentContactPage + 1)"
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
import { timeAgo } from "@/services/activityLogService";
import { useContact } from "@/store/contact";
import type { Contact } from "@/types/contacts";
import { avatarColorStyle, personInitials } from "@/utils/avatar";
const AddContactModal = defineAsyncComponent(
  () => import("@/module/contacts/AddContactModal.vue"),
);
const router = useRouter();
const contactStore = useContact();
const { contactState, contactApi, filteredContact } = storeToRefs(contactStore);
const { openContactModal, searchContacts } = contactStore;
const searchQuery = ref("");
let searchTimer: ReturnType<typeof setTimeout> | undefined;

// ── Filter user (dropdown) ──────────────────────────────────────────
interface FilterUser {
  id: number;
  name: string;
  jabatan: string;
  divisi: string;
  cabang: string;
}

const filterOpen = ref(false);
const filterSearch = ref("");
const selectedUserId = ref<number | null>(null);
const filterRoot = ref<HTMLElement | null>(null);

const filterUsers = ref<FilterUser[]>([
  {
    id: 1,
    name: "Andi Pratama",
    jabatan: "Sales Executive",
    divisi: "Marketing",
    cabang: "Jakarta",
  },
]);

const filteredUsers = computed(() => {
  const query = filterSearch.value.trim().toLowerCase();
  if (!query) return filterUsers.value;
  return filterUsers.value.filter((user) =>
    [user.name, user.jabatan, user.divisi, user.cabang]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
});

function selectUser(id: number) {
  selectedUserId.value = selectedUserId.value === id ? null : id;
  filterOpen.value = false;
}

function onClickOutsideFilter(event: MouseEvent) {
  if (!filterOpen.value) return;
  if (filterRoot.value && !filterRoot.value.contains(event.target as Node)) {
    filterOpen.value = false;
  }
}
const CONTACTS_PER_PAGE = 10;
const currentContactPage = ref(1);
const contactTableColumns = [
  { label: "Nama", defaultWidth: 300, minWidth: 220 },
  { label: "Faskes", defaultWidth: 220, minWidth: 140 },
  { label: "Jabatan", defaultWidth: 320, minWidth: 140 },
  { label: "Peluang", defaultWidth: 130, minWidth: 110 },
  { label: "Aktivitas", defaultWidth: 230, minWidth: 170 },
  // Kolom "Terakhir Dihubungi" sementara disembunyikan.
  { label: "Detail", defaultWidth: 180, minWidth: 160 },
] as const;
const contactColumnWidths = ref<number[]>(
  contactTableColumns.map((column) => column.defaultWidth),
);
const contactTableWidth = computed(() =>
  contactColumnWidths.value.reduce((total, width) => total + width, 0),
);
const contactTotal = computed(() => filteredContact.value.length);
const contactLastPage = computed(() =>
  Math.max(1, Math.ceil(contactTotal.value / CONTACTS_PER_PAGE)),
);
const paginatedContacts = computed(() => {
  const start = (currentContactPage.value - 1) * CONTACTS_PER_PAGE;
  return filteredContact.value.slice(start, start + CONTACTS_PER_PAGE);
});
const visibleContactPages = computed<Array<number | string>>(() => {
  const totalPages = contactLastPage.value;
  const currentPage = Math.min(
    Math.max(1, currentContactPage.value),
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

function changeContactPage(page: number) {
  const targetPage = Math.min(Math.max(1, page), contactLastPage.value);
  if (targetPage === currentContactPage.value) return;
  currentContactPage.value = targetPage;
}
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
  currentContactPage.value = 1;
  searchTimer = setTimeout(() => {
    void searchContacts(query);
  }, 350);
});

watch(
  () => filteredContact.value.length,
  () => {
    if (currentContactPage.value > contactLastPage.value) {
      currentContactPage.value = contactLastPage.value;
    }
  },
);

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

/**
 * Jumlah peluang kontak langsung dari sp_view_listcontact (kolom total_peluang).
 * Hindari matching lokal via projectStore agar hitungannya identik dengan
 * response BE dan placeholder "-" tidak saling match antar kontak.
 */
function contactPeluangCount(contact: Contact): number {
  return contact.totalPeluang ?? 0;
}

/**
 * Aktivitas terakhir per kontak langsung dari sp_view_listcontact:
 * `last_activity_text`/`aktifitas_terakhir` + `last_activity_at`. Hindari call
 * tambahan ke /api/activity-logs/latest karena data sudah ada di response list.
 */
function activityLabel(contact: Contact) {
  return contact.lastActivity || "";
}

function activityTime(contact: Contact) {
  return contact.lastContactedAt ? timeAgo(contact.lastContactedAt) : "";
}

function activityTooltip(contact: Contact) {
  return contact.lastActivity || "";
}

function parseContactDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatContactDate(value: string) {
  const date = parseContactDate(value);
  if (!date) return value;

  // Kalau tanggalnya di hari yang sama, tampilkan "Hari ini".
  const now = new Date();
  if (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  ) {
    return "Hari ini";
  }

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
  document.addEventListener("click", onClickOutsideFilter);
});

onBeforeUnmount(() => {
  if (searchTimer) clearTimeout(searchTimer);
  stopColumnResize();
  document.removeEventListener("click", onClickOutsideFilter);
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
  grid-template-columns: minmax(260px, 420px) max-content max-content;
  width: 100%;
  min-width: 0;
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

/* Buang tombol X bawaan browser (Chrome/Edge/IE) agar tidak dobel dengan
   tombol clear kustom di sebelah kanan. */
.contact-search input::-webkit-search-cancel-button,
.contact-search input::-webkit-search-decoration,
.contact-search input::-webkit-search-results-button,
.contact-search input::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none;
  display: none;
}

.contact-search input::-ms-clear,
.contact-search input::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
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

/* Icon user solid, satu warna primer penuh. */
.empty-state-icon svg {
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
    grid-template-columns: minmax(0, 1fr) max-content max-content;
    justify-content: stretch;
  }

  .contact-search {
    width: 100%;
  }
}

/* Tombol peluang inline hanya muncul di kartu mobile. */
.contact-peluang-inline {
  display: none;
}

/* Mobile: tabel diubah jadi kartu supaya tidak perlu geser horizontal.
   Tablet/iPad (576px-991px) tetap memakai tabel seperti desktop. */
@media (max-width: 575.98px) {
  .contact-table-wrap {
    padding: 16px 14px;
    overflow: visible;
    background: #f1f5f9;
  }

  /* Layar sangat sempit: perkecil padding supaya kartu tidak kepotong. */
  @media (max-width: 400px) {
    .contact-table-wrap {
      padding: 12px 8px;
    }
  }

  .contact-table {
    display: block;
    width: 100% !important;
    min-width: 0;
  }

  .contact-table colgroup,
  .contact-table__resize-handle {
    display: none;
  }

  .contact-table thead {
    display: none;
  }

  .contact-table tbody td {
    max-width: 100%;
  }

  .contact-table tbody,
  .contact-table tr,
  .contact-table td {
    display: block;
    width: 100%;
  }

  /* Satu baris data = satu kartu. */
  .contact-table tbody tr {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 100%;
    margin-bottom: 18px;
    border: 1px solid var(--border-subtle, #e2e8f0);
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
  }

  .contact-table tbody tr:last-child {
    margin-bottom: 0;
  }

  .contact-table tbody tr:hover {
    background: #ffffff;
  }

  /* Semua label bawaan disembunyikan: desain baru tidak pakai baris label-nilai. */
  .contact-table tbody td::before {
    display: none;
    content: none;
  }

  /* ── Header kartu: avatar + nama/email ─────────────────────────── */
  .contact-table tbody td.entity-detail-cell {
    order: 0;
    border-bottom: 0;
    padding: 16px 16px 4px;
    background: #ffffff;
  }

  .contact-person {
    display: flex;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    gap: 12px;
    align-items: center;
    box-sizing: border-box;
  }

  .contact-avatar {
    width: 46px;
    height: 46px;
    flex: 0 0 auto;
    font-size: 14px;
  }

  .contact-person__identity {
    flex: 1 1 0;
    min-width: 0;
    max-width: 100%;
    text-align: left;
  }

  .contact-person__identity strong,
  .contact-person__identity span {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contact-person__identity strong {
    font-size: 15px;
  }

  .contact-person__identity span {
    font-size: 12px;
  }

  /* ── Faskes ─────────────────────────────────────────────────────── */
  .contact-table tbody td[data-label="Faskes"] {
    order: 1;
    border-bottom: 0;
    padding: 2px 16px 0;
  }

  .contact-table .cell-navigation-link {
    width: auto;
    max-width: 100%;
    overflow: hidden;
    color: #475569;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ── Jabatan + peluang inline ──────────────────────────────────── */
  .contact-table tbody td[data-label="Jabatan"] {
    order: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 8px;
    border-bottom: 0;
    padding: 4px 16px 0;
  }

  .contact-table tbody td[data-label="Jabatan"] > span {
    width: auto;
    flex: 1 1 auto;
    min-width: 0;
    max-width: calc(100% - 96px);
    overflow: hidden;
    color: #64748b;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contact-table tbody td[data-label="Jabatan"] .contact-peluang-inline {
    display: inline-flex;
    flex: 0 1 auto;
    max-width: 100%;
    align-items: center;
    overflow: hidden;
    border-radius: 999px;
    padding: 3px 10px;
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Kolom Peluang desktop disembunyikan di mobile karena sudah inline. */
  .contact-table tbody td.contact-peluang-cell {
    display: none;
  }

  /* ── Aktivitas: label + waktu satu baris ─────────────────────────── */
  .contact-table tbody td[data-label="Aktivitas"] {
    order: 3;
    border-bottom: 0;
    padding: 8px 16px 0;
  }

  .contact-table .activity-cell {
    display: flex;
    width: 100%;
    max-width: 100%;
    align-items: center;
    gap: 10px;
    text-align: left;
  }

  .contact-table .activity-label {
    width: auto;
    flex: 1 1 auto;
    min-width: 0;
    justify-content: flex-start;
    font-size: 12px;
  }

  .contact-table .activity-cell .activity-time {
    flex: 0 0 auto;
    margin: 0;
    font-size: 12px;
    text-align: right;
    white-space: nowrap;
  }

  /* ── Terakhir dihubungi - tanggal ───────────────────────────────── */
  .contact-table tbody td[data-label="Terakhir Dihubungi"] {
    order: 4;
    border-bottom: 0;
    padding: 8px 16px 0;
  }

  .contact-table .last-contacted {
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 8px;
    text-align: left;
  }

  .contact-table .last-contacted .last-contacted__label {
    flex: 0 1 auto;
    color: #94a3b8;
    font-size: 12px;
    font-weight: 500;
    white-space: normal;
  }

  .contact-table .last-contacted .last-contacted__date {
    overflow: hidden;
    color: #334155;
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Waktu relatif hanya tampil di desktop; di mobile sudah "Hari ini" bila perlu. */
  .contact-table .last-contacted small {
    display: none;
  }

  .contact-table tbody td[data-label="Terakhir Dihubungi"] .empty-value {
    width: 100%;
    text-align: left;
  }

  /* ── Tombol detail ─────────────────────────────────────────────── */
  .contact-table tbody td.contact-detail-cell {
    order: 5;
    border-bottom: 0;
    padding: 12px 16px 16px !important;
    background: #ffffff;
  }

  .contact-detail-cell .detail-button {
    width: 100%;
    justify-content: center;
    border-radius: 10px;
    padding: 9px 12px;
    font-weight: 600;
  }

  /* Baris loading / kosong tetap tampil penuh. */
  .contact-table-state {
    display: table-cell !important;
    height: 180px;
    padding: 24px !important;
    background: #ffffff;
    text-align: center;
  }
}

@media (max-width: 575.98px) {
  .contact-header-actions {
    grid-template-columns: 1fr;
  }

  .add-contact-header-button {
    width: 100%;
  }

  .card-footer {
    flex-direction: column;
    align-items: stretch !important;
    gap: 12px !important;
    padding: 14px 12px;
  }

  .card-footer > .text-muted {
    width: 100%;
    text-align: center;
  }

  .pagination-actions {
    width: 100%;
    justify-content: center;
    gap: 8px;
  }

  .pagination-pages {
    order: -1;
    flex: 0 0 100%;
    justify-content: center;
  }

  .pagination-button {
    max-width: 145px;
    flex: 1 1 0;
    padding-inline: 10px;
  }
}

/* ── Filter dropdown ─────────────────────────────────────────────── */
.contact-filter {
  position: relative;
  z-index: 20;
}

.contact-filter__trigger {
  position: relative;
  display: flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 0;
  background: #ffffff;
  color: #304250;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.contact-filter__trigger:hover,
.contact-filter__trigger[aria-expanded="true"] {
  border-color: var(--app-primary, #18a6e4);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.07);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.contact-filter__trigger:hover {
  transform: translateY(-1px);
}

.contact-filter__trigger:focus-visible {
  outline: 2px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.4);
  outline-offset: 2px;
}

/* Badge jumlah filter aktif (sama seperti di peta). */
.contact-filter__trigger b {
  position: absolute;
  top: -5px;
  right: -5px;
  display: grid;
  min-width: 17px;
  height: 17px;
  place-items: center;
  border-radius: 9px;
  padding: 0 4px;
  background: #ef4444;
  color: #ffffff;
  font-size: 9px;
}

.contact-filter__dropdown {
  position: absolute;
  z-index: 1050;
  top: calc(100% + 10px);
  right: 0;
  width: 360px;
  max-width: calc(100vw - 32px);
  overflow: hidden;
  margin: 0;
  border: 1px solid #dbe4ee;
  border-radius: 14px;
  padding: 0;
  background: #ffffff;
  box-shadow:
    0 18px 45px rgba(15, 23, 42, 0.16),
    0 4px 12px rgba(15, 23, 42, 0.08);
  list-style: none;
}

.contact-filter__search {
  padding: 14px;
  border-bottom: 1px solid #e2e8f0;
  background: #ffffff;
}

.contact-filter__search-input {
  width: 100%;
  min-width: 0;
  height: 42px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 0 13px;
  outline: none;
  background: #f8fafc;
  color: #0f172a;
  font-size: 0.875rem;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.contact-filter__search-input:focus {
  border-color: var(--theme-default, #18a6e4);
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.contact-filter__search-input::placeholder {
  color: #94a3b8;
}

.contact-filter__list {
  max-height: 290px;
  overflow-y: auto;
  margin: 0;
  padding: 12px;
  background: #f8fafc;
  list-style: none;
}

.contact-filter__list > li + li {
  margin-top: 8px;
}

.contact-filter__card {
  display: flex;
  width: 100%;
  min-height: 62px;
  align-items: center;
  gap: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 12px 14px;
  background: #ffffff;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
  transition:
    border-color 0.16s ease,
    background-color 0.16s ease,
    box-shadow 0.16s ease,
    transform 0.16s ease;
}

.contact-filter__card:hover,
.contact-filter__card:focus-visible {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.55);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.04);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.09);
  outline: none;
  transform: translateY(-1px);
}

.contact-filter__card--active {
  border-color: var(--app-primary, #18a6e4);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.07);
  box-shadow: 0 0 0 2px rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
}

.contact-filter__card-content {
  min-width: 0;
  flex: 1 1 auto;
}

.contact-filter__card-check {
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--app-primary, #18a6e4);
  color: #ffffff;
}

.contact-filter__card-check svg {
  stroke-width: 2.5;
}

.contact-filter__card:hover .contact-filter__card-name,
.contact-filter__card:focus-visible .contact-filter__card-name,
.contact-filter__card--active .contact-filter__card-name {
  color: #0f172a;
}

.contact-filter__card:hover .contact-filter__card-meta,
.contact-filter__card:focus-visible .contact-filter__card-meta,
.contact-filter__card--active .contact-filter__card-meta {
  color: #475569;
}

.contact-filter__card:focus-visible {
  outline: none;
}

.contact-filter__card-name,
.contact-filter__card-meta {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-filter__card-name {
  margin-bottom: 4px;
  color: #0f172a;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
}

.contact-filter__card-meta {
  color: #64748b;
  font-size: 12px;
  line-height: 1.4;
}

.contact-filter__empty {
  padding: 20px 12px;
  color: #94a3b8;
  font-size: 13px;
  text-align: center;
}

/* Jaga pagination tetap berada di atas navigation/gesture bar perangkat.
   Berlaku untuk mobile dan tablet; browser yang tidak menyediakan safe-area
   tetap mendapat jarak bawah minimum. */
@media (max-width: 991.98px) {
  .card-footer {
    padding-bottom: max(
      32px,
      calc(14px + env(safe-area-inset-bottom, 0px))
    );
    scroll-margin-bottom: max(
      20px,
      env(safe-area-inset-bottom, 0px)
    );
  }
}
</style>
