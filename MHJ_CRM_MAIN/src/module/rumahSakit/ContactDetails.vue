<template>
  <div class="card mb-0">
    <div class="card-header hospital-list-header">
      <div class="hospital-title-group">
        <h5 class="mb-1">Rumah Sakit</h5>
        <p class="hospital-total mb-0">
          {{ formatTotal(hospitalPagination.total || filteredContact.length) }} total rumah sakit
        </p>
      </div>
      <div class="hospital-search" role="search">
        <label class="visually-hidden" for="hospital-search-input">Cari rumah sakit</label>
        <vue-feather type="search" size="17" />
        <input
          id="hospital-search-input"
          v-model="searchQuery"
          type="search"
          placeholder="Cari nama, provinsi, atau kota..."
          autocomplete="off"
        />
        <span
          v-if="hospitalLoading"
          class="spinner-border spinner-border-sm hospital-search__loading"
          aria-hidden="true"
        ></span>
        <button
          v-else-if="searchQuery"
          class="hospital-search__clear"
          type="button"
          aria-label="Hapus pencarian"
          @click="searchQuery = ''"
        >
          <vue-feather type="x" size="15" />
        </button>
      </div>
    </div>

    <div class="card-body p-0">
      <div class="table-responsive hospital-table-wrap">
        <table
          class="table mhj-data-table hospital-table align-middle mb-0"
          :style="{ width: `${hospitalTableWidth}px` }"
        >
          <colgroup>
            <col
              v-for="(width, index) in hospitalColumnWidths"
              :key="hospitalTableColumns[index]?.label"
              :style="{ width: `${width}px` }"
            />
          </colgroup>
          <thead>
            <tr>
              <th
                v-for="(column, index) in hospitalTableColumns"
                :key="column.label"
                class="hospital-table__resizable-header"
                :class="{ 'text-center': column.center }"
              >
                {{ column.label }}
                <button
                  v-if="index < hospitalTableColumns.length - 1"
                  class="hospital-table__resize-handle"
                  type="button"
                  :aria-label="`Ubah lebar kolom ${column.label}`"
                  :title="`Tarik untuk mengubah lebar kolom ${column.label}`"
                  @pointerdown="startHospitalColumnResize(index, $event)"
                  @dblclick.stop="resetHospitalColumnWidth(index)"
                ></button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="hospitalLoading && !filteredContact.length">
              <td colspan="10" class="hospital-table-state">
                <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                Memuat data rumah sakit...
              </td>
            </tr>
            <tr v-for="hospital in filteredContact" :key="hospital.id">
              <td data-label="Nama Rumah Sakit">
                <div class="hospital-identity">
                  <img
                    class="hospital-avatar"
                    :src="getImages(hospital.profile)"
                    :alt="hospital.firstName"
                  />
                  <div class="hospital-identity__text">
                    <strong>{{ displayValue(hospital.firstName) }}</strong>
                    <span>{{ hospital.email || "Email belum tersedia" }}</span>
                  </div>
                </div>
              </td>
              <td data-label="Provinsi">{{ displayValue(hospital.province) }}</td>
              <td data-label="Kota">{{ displayValue(hospital.city) }}</td>
              <td data-label="Kelas">{{ displayValue(hospital.hospitalClass) }}</td>
              <td data-label="Jenis Rumah Sakit">
                {{ hospitalType(hospital) }}
              </td>
              <td data-label="Total Kontak" class="text-center">
                <span class="metric-badge">{{ formatMetric(hospital.totalContacts) }}</span>
              </td>
              <td data-label="Total Proyek" class="text-center">
                <span class="metric-badge">{{ formatMetric(projectTotal(hospital)) }}</span>
              </td>
              <td data-label="Alat Terpasang" class="text-center">
                <span class="metric-badge">
                  {{ formatMetric(installedEquipmentTotal(hospital)) }}
                </span>
              </td>
              <td data-label="Kunjungan Terakhir">
                <div v-if="hospital.lastVisitAt" class="last-visit">
                  <span>{{ formatVisitDate(hospital.lastVisitAt) }}</span>
                  <small>{{ relativeVisitDate(hospital.lastVisitAt) }}</small>
                </div>
                <span v-else class="empty-value">Belum pernah</span>
              </td>
              <td data-label="Detail" class="text-center">
                <button
                  class="btn btn-outline-primary btn-sm detail-button"
                  type="button"
                  :aria-label="`Lihat detail ${hospital.firstName}`"
                  @click="openHospitalDetail(hospital)"
                >
                  <vue-feather type="eye" size="15" />
                  <span>Lihat Detail</span>
                </button>
              </td>
            </tr>
            <tr v-if="!hospitalLoading && !filteredContact.length">
              <td colspan="10" class="hospital-table-state">
                <div class="empty-state-icon">
                  <vue-feather type="home" size="22" />
                </div>
                <strong>Rumah sakit tidak ditemukan</strong>
                <span>Coba gunakan kata pencarian lain.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="filteredContact.length || hospitalPagination.page > 1"
      class="card-footer d-flex flex-wrap align-items-center justify-content-between gap-2"
    >
      <span class="text-muted f-14">
        Halaman {{ hospitalPagination.page }} dari {{ hospitalPagination.lastPage }}
      </span>
      <div class="pagination-actions" role="group" aria-label="Pagination Rumah Sakit">
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="hospitalLoading || hospitalPagination.page <= 1"
          @click="changeHospitalPage(hospitalPagination.page - 1)"
        >
          <vue-feather type="chevron-left" size="15" class="me-1" />Sebelumnya
        </button>
        <div class="pagination-pages" aria-label="Pilih halaman">
          <template v-for="item in visibleHospitalPages" :key="String(item)">
            <span v-if="typeof item === 'string'" class="pagination-ellipsis" aria-hidden="true">
              …
            </span>
            <button
              v-else
              class="btn btn-sm pagination-page-button"
              :class="{
                'pagination-page-button--active': item === hospitalPagination.page,
              }"
              type="button"
              :disabled="hospitalLoading || item === hospitalPagination.page"
              :aria-current="item === hospitalPagination.page ? 'page' : undefined"
              :aria-label="`Ke halaman ${item}`"
              @click="changeHospitalPage(item)"
            >
              {{ item }}
            </button>
          </template>
        </div>
        <button
          class="btn btn-outline-primary btn-sm pagination-button"
          type="button"
          :disabled="hospitalLoading || hospitalPagination.page >= hospitalPagination.lastPage"
          @click="changeHospitalPage(hospitalPagination.page + 1)"
        >
          Berikutnya<vue-feather type="chevron-right" size="15" class="ms-1" />
        </button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { companyDetails } from "@/core/data/contactCrm";
import { routes } from "@/router/routes";
import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import type { Contact } from "@/types/contacts";
import { getImages } from "@/utils/index";

const router = useRouter();
const contactStore = useContact();
const hospitalStore = useHospitalStore();
const { filteredContact } = storeToRefs(contactStore);
const { pagination: hospitalPagination, loading: hospitalLoading } = storeToRefs(hospitalStore);
const { changeHospitalPage, searchHospitals } = contactStore;
const searchQuery = ref("");
let searchTimer: ReturnType<typeof setTimeout> | undefined;
const hospitalTableColumns = [
  { label: "Nama Rumah Sakit", defaultWidth: 280, minWidth: 220, center: false },
  { label: "Provinsi", defaultWidth: 150, minWidth: 110, center: false },
  { label: "Kota", defaultWidth: 150, minWidth: 110, center: false },
  { label: "Kelas", defaultWidth: 110, minWidth: 90, center: false },
  { label: "Jenis Rumah Sakit", defaultWidth: 180, minWidth: 130, center: false },
  { label: "Total Kontak", defaultWidth: 120, minWidth: 110, center: true },
  { label: "Total Proyek", defaultWidth: 120, minWidth: 110, center: true },
  { label: "Alat Terpasang", defaultWidth: 130, minWidth: 110, center: true },
  { label: "Kunjungan Terakhir", defaultWidth: 180, minWidth: 150, center: false },
  { label: "Detail", defaultWidth: 140, minWidth: 120, center: true },
] as const;
const hospitalColumnWidths = ref<number[]>(
  hospitalTableColumns.map((column) => column.defaultWidth),
);
const hospitalTableWidth = computed(() =>
  hospitalColumnWidths.value.reduce((total, width) => total + width, 0),
);
const visibleHospitalPages = computed<Array<number | string>>(() => {
  const totalPages = Math.max(1, hospitalPagination.value.lastPage);
  const currentPage = Math.min(Math.max(1, hospitalPagination.value.page), totalPages);

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
let activeHospitalColumnResize:
  | { index: number; startX: number; startWidth: number }
  | undefined;

function startHospitalColumnResize(index: number, event: PointerEvent) {
  event.preventDefault();
  activeHospitalColumnResize = {
    index,
    startX: event.clientX,
    startWidth:
      hospitalColumnWidths.value[index] ?? hospitalTableColumns[index].defaultWidth,
  };
  document.body.style.cursor = "ew-resize";
  document.body.style.userSelect = "none";
  window.addEventListener("pointermove", resizeHospitalColumn);
  window.addEventListener("pointerup", stopHospitalColumnResize);
  window.addEventListener("pointercancel", stopHospitalColumnResize);
}

function resizeHospitalColumn(event: PointerEvent) {
  if (!activeHospitalColumnResize) return;

  const { index, startX, startWidth } = activeHospitalColumnResize;
  const minWidth = hospitalTableColumns[index]?.minWidth ?? 90;
  const nextWidths = [...hospitalColumnWidths.value];
  nextWidths[index] = Math.max(minWidth, startWidth + event.clientX - startX);
  hospitalColumnWidths.value = nextWidths;
}

function stopHospitalColumnResize() {
  activeHospitalColumnResize = undefined;
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
  window.removeEventListener("pointermove", resizeHospitalColumn);
  window.removeEventListener("pointerup", stopHospitalColumnResize);
  window.removeEventListener("pointercancel", stopHospitalColumnResize);
}

function resetHospitalColumnWidth(index: number) {
  const nextWidths = [...hospitalColumnWidths.value];
  nextWidths[index] = hospitalTableColumns[index]?.defaultWidth ?? nextWidths[index];
  hospitalColumnWidths.value = nextWidths;
}

watch(searchQuery, (query) => {
  if (searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    void searchHospitals(query);
  }, 350);
});

function displayValue(value: unknown) {
  const normalized = String(value ?? "").trim();
  return normalized && normalized !== "-" ? normalized : "-";
}

function formatTotal(total: number) {
  return new Intl.NumberFormat("id-ID").format(total);
}

function formatMetric(total?: number) {
  return total === undefined ? "—" : formatTotal(total);
}

function hospitalType(hospital: Contact) {
  return displayValue(hospital.hospitalType || companyDetails[hospital.firstName]?.type);
}

function projectTotal(hospital: Contact) {
  return hospital.totalProjects ?? companyDetails[hospital.firstName]?.projects.length;
}

function installedEquipmentTotal(hospital: Contact) {
  return (
    hospital.totalInstalledEquipment ?? companyDetails[hospital.firstName]?.installedProducts.length
  );
}

function parseVisitDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatVisitDate(value: string) {
  const date = parseVisitDate(value);
  if (!date) return value;

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function relativeVisitDate(value: string) {
  const date = parseVisitDate(value);
  if (!date) return "";

  const diffInDays = Math.floor((Date.now() - date.getTime()) / 86_400_000);
  if (diffInDays <= 0) return "Hari ini";
  if (diffInDays === 1) return "Kemarin";
  if (diffInDays < 30) return `${diffInDays} hari lalu`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths} bulan lalu`;
  return `${Math.floor(diffInMonths / 12)} tahun lalu`;
}

function openHospitalDetail(hospital: Contact) {
  const id = hospital.remoteId ?? hospital.id;
  void router.push({ path: routes.App.RumahSakit, query: { detail: String(id) } });
}

onMounted(() => {
  contactStore.initStore();
});

onBeforeUnmount(() => {
  if (searchTimer) clearTimeout(searchTimer);
  stopHospitalColumnResize();
});
</script>

<style scoped>
.hospital-list-header {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) minmax(280px, 520px);
  align-items: center;
  gap: 24px;
  padding: 20px 24px;
}

.hospital-title-group {
  display: flex;
  align-items: flex-start;
  justify-self: start;
  flex-direction: column;
  text-align: left;
}

.hospital-title-group h5 {
  color: #0f172a;
  font-size: 18px;
  font-weight: 700;
}

.hospital-total {
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
}

.hospital-search {
  display: flex;
  width: 100%;
  height: 44px;
  min-width: 0;
  align-items: center;
  gap: 9px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0 11px;
  background: #ffffff;
  color: #64748b;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.hospital-search:focus-within {
  border-color: #18a6e4;
  box-shadow: 0 0 0 3px rgba(24, 166, 228, 0.14);
}

.hospital-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #0f172a;
  font-size: 13px;
}

.hospital-search input::placeholder {
  color: #94a3b8;
}

.hospital-search__loading {
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  color: #18a6e4;
}

.hospital-search__clear {
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

.hospital-table-wrap {
  min-height: 240px;
  overflow-x: auto;
}

.hospital-table {
  table-layout: fixed;
  min-width: 1420px;
}

.hospital-table thead th {
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

.hospital-table__resizable-header {
  position: relative;
  padding-right: 18px !important;
}

.hospital-table__resize-handle {
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

.hospital-table__resize-handle::after {
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

.hospital-table__resize-handle:hover::after,
.hospital-table__resize-handle:focus-visible::after {
  background: #18a6e4;
}

.hospital-table tbody td {
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
  padding: 14px 16px;
  color: #334155;
  font-size: 13px;
  vertical-align: middle;
}

.hospital-table tbody tr {
  transition: background-color 0.2s ease;
}

.hospital-table tbody tr:hover {
  background: rgba(24, 166, 228, 0.035);
}

.hospital-identity {
  display: flex;
  min-width: 210px;
  align-items: center;
  gap: 10px;
}

.hospital-avatar {
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  border: 2px solid rgba(24, 166, 228, 0.18);
  border-radius: 50%;
  object-fit: cover;
}

.hospital-identity__text {
  min-width: 0;
}

.hospital-identity__text strong,
.hospital-identity__text span,
.last-visit span,
.last-visit small {
  display: block;
}

.hospital-identity__text strong {
  color: #0f172a;
  font-weight: 600;
}

.hospital-identity__text span {
  max-width: 210px;
  overflow: hidden;
  color: #64748b;
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.last-visit small {
  margin-top: 2px;
  color: #64748b;
  font-size: 11px;
}

.metric-badge {
  display: inline-flex;
  min-width: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 5px 10px;
  background: rgba(24, 166, 228, 0.1);
  color: #0369a1;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.empty-value {
  color: #64748b;
  font-size: 12px;
}

.detail-button {
  display: inline-flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 7px;
  padding: 7px 10px;
  white-space: nowrap;
}

.hospital-table-state {
  height: 210px;
  color: #64748b !important;
  text-align: center;
}

.hospital-table-state strong,
.hospital-table-state span {
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
  background: rgba(24, 166, 228, 0.1);
  color: #18a6e4;
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
  border-color: #18a6e4;
  color: #18a6e4;
}

.pagination-page-button--active,
.pagination-page-button--active:disabled {
  border-color: #18a6e4;
  background: #18a6e4;
  color: #ffffff;
  opacity: 1;
}

.pagination-ellipsis {
  min-width: 20px;
  color: #64748b;
  text-align: center;
}

@media (max-width: 767.98px) {
  .hospital-list-header {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 18px;
  }
}

@media (max-width: 575.98px) {
  .hospital-table-wrap {
    padding: 12px;
    overflow: visible;
  }

  .hospital-table {
    width: 100% !important;
    min-width: 0;
    table-layout: auto;
  }

  .hospital-table colgroup,
  .hospital-table__resize-handle {
    display: none;
  }

  .hospital-table thead {
    display: none;
  }

  .hospital-table tbody,
  .hospital-table tr,
  .hospital-table td {
    display: block;
    width: 100%;
  }

  .hospital-table tbody tr {
    overflow: hidden;
    border: 1px solid var(--border-subtle, #e2e8f0);
    border-radius: 10px;
    margin-bottom: 12px;
  }

  .hospital-table tbody td {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border-bottom: 1px solid #f1f5f9;
    padding: 11px 13px;
    text-align: right;
  }

  .hospital-table tbody td::before {
    content: attr(data-label);
    flex: 0 0 38%;
    color: #64748b;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-align: left;
    text-transform: uppercase;
  }

  .hospital-table tbody td:first-child {
    background: #f8fafc;
  }

  .hospital-table tbody td:last-child {
    border-bottom: 0;
  }

  .hospital-identity {
    min-width: 0;
    justify-content: flex-end;
  }

  .hospital-table-state {
    display: table-cell !important;
    height: 180px;
  }

  .hospital-table-state::before {
    display: none;
  }
}
</style>
