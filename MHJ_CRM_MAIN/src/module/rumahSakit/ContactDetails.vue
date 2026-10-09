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
        <table class="table hospital-table align-middle mb-0">
          <thead>
            <tr>
              <th>Nama Rumah Sakit</th>
              <th>Provinsi</th>
              <th>Kota</th>
              <th>Kelas</th>
              <th>Jenis Rumah Sakit</th>
              <th class="text-center">Total Kontak</th>
              <th class="text-center">Total Proyek</th>
              <th class="text-center">Alat Terpasang</th>
              <th>Kunjungan Terakhir</th>
              <th class="text-center">Detail</th>
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
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
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
}

.hospital-table {
  min-width: 1420px;
}

.hospital-table thead th {
  border-bottom: 1px solid var(--border-subtle, #e2e8f0);
  padding: 14px 16px;
  background: #f8fafc;
  color: #475569;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  white-space: nowrap;
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
    min-width: 0;
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
