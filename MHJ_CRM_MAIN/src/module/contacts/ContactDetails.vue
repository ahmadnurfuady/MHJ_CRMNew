<template>
  <div class="card mb-0">
    <div class="card-header contact-list-header">
      <div class="contact-title-group">
        <h5 class="mb-1">Kontak</h5>
        <p class="contact-total mb-0">
          {{ formatContactTotal(contactApi.pagination.total || filteredContact.length) }} total kontak
        </p>
      </div>
      <div class="contact-header-actions">
        <div class="contact-search" role="search">
          <label class="visually-hidden" for="contact-search-input">Cari kontak</label>
          <vue-feather type="search" size="17" />
          <input
            id="contact-search-input"
            v-model="searchQuery"
            type="search"
            placeholder="Cari nama, rumah sakit, atau nomor..."
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
          class="btn btn-primary add-contact-header-button"
          type="button"
          @click="openContactModal"
        >
          <vue-feather type="user-plus" size="17" />
          <span>Tambah Kontak Baru</span>
        </button>
      </div>
    </div>
    <div class="card-body p-0">
      <div class="table-responsive contact-table-wrap">
        <table class="table contact-table align-middle mb-0">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Rumah Sakit</th>
              <th>Jabatan</th>
              <th>Proyek</th>
              <th>Aktivitas</th>
              <th>Terakhir Dihubungi</th>
              <th class="text-center">Detail</th>
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
              <td data-label="Nama">
                <div class="contact-person">
                  <img
                    class="contact-avatar"
                    :src="getImages(contact.profile)"
                    :alt="fullName(contact)"
                  />
                  <div class="contact-person__identity">
                    <strong>{{ fullName(contact) }}</strong>
                    <span>{{ contact.email || "Email belum tersedia" }}</span>
                  </div>
                </div>
              </td>
              <td data-label="Rumah Sakit">
                <span class="cell-primary">{{ hospitalLabel(contact) }}</span>
              </td>
              <td data-label="Jabatan">
                {{ contact.jobTitle || "-" }}
              </td>
              <td data-label="Proyek">
                <span v-if="contact.project" class="project-badge">{{ contact.project }}</span>
                <span v-else class="empty-value">Belum ada proyek</span>
              </td>
              <td data-label="Aktivitas">
                <span v-if="contact.lastActivity" class="activity-label">
                  <span class="activity-dot"></span>{{ contact.lastActivity }}
                </span>
                <span v-else class="empty-value">Belum ada aktivitas</span>
              </td>
              <td data-label="Terakhir Dihubungi">
                <div v-if="contact.lastContactedAt" class="last-contacted">
                  <span>{{ formatContactDate(contact.lastContactedAt) }}</span>
                  <small>{{ relativeContactDate(contact.lastContactedAt) }}</small>
                </div>
                <span v-else class="empty-value">Belum pernah</span>
              </td>
              <td data-label="Detail" class="text-center">
                <button
                  class="btn btn-outline-primary btn-sm detail-button"
                  type="button"
                  :aria-label="`Lihat detail ${fullName(contact)}`"
                  @click="openContactDetail(contact)"
                >
                  <vue-feather type="eye" size="15" />
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
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import { useContact } from "@/store/contact";
import type { Contact } from "@/types/contacts";
import { getImages } from "@/utils/index";
const AddContactModal = defineAsyncComponent(
  () => import("@/module/contacts/AddContactModal.vue"),
);
const router = useRouter();
const contactStore = useContact();
const { contactState, contactApi, filteredContact } = storeToRefs(contactStore);
const { changeContactPage, openContactModal, searchContacts } = contactStore;
const searchQuery = ref("");
let searchTimer: ReturnType<typeof setTimeout> | undefined;

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
  return contact.company || (contact.companyId ? `Company ID ${contact.companyId}` : "-");
}

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

onMounted(() => {
  contactStore.initStore();
});

onBeforeUnmount(() => {
  if (searchTimer) clearTimeout(searchTimer);
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

.contact-search:focus-within {
  border-color: #18a6e4;
  box-shadow: 0 0 0 3px rgba(24, 166, 228, 0.14);
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
  color: #18a6e4;
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
  border-color: #18a6e4 !important;
  border-radius: 8px;
  margin: 0 !important;
  padding: 0 18px;
  background-color: #18a6e4 !important;
  color: #ffffff !important;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(24, 166, 228, 0.2);
}

.add-contact-header-button:hover,
.add-contact-header-button:focus {
  border-color: #1493cc !important;
  background-color: #1493cc !important;
  color: #ffffff !important;
}

.add-contact-header-button span,
.add-contact-header-button svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}

.contact-table-wrap {
  min-height: 240px;
}

.contact-table {
  min-width: 1080px;
}

.contact-table thead th {
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
  background: rgba(24, 166, 228, 0.035);
}

.contact-person {
  display: flex;
  min-width: 190px;
  align-items: center;
  gap: 10px;
}

.contact-avatar {
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  border: 2px solid rgba(24, 166, 228, 0.18);
  border-radius: 50%;
  object-fit: cover;
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

.contact-person__identity span {
  max-width: 190px;
  overflow: hidden;
  color: #64748b;
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-badge {
  display: inline-block;
  max-width: 170px;
  overflow: hidden;
  border-radius: 6px;
  padding: 5px 8px;
  background: rgba(24, 166, 228, 0.1);
  color: #0369a1;
  font-size: 11px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.activity-label {
  display: inline-flex;
  max-width: 170px;
  align-items: center;
  gap: 7px;
  color: #334155;
}

.activity-dot {
  width: 7px;
  height: 7px;
  flex: 0 0 7px;
  border-radius: 50%;
  background: #18a6e4;
  box-shadow: 0 0 0 3px rgba(24, 166, 228, 0.12);
}

.empty-value {
  color: #94a3b8;
  font-size: 12px;
}

.last-contacted span,
.last-contacted small {
  display: block;
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
  white-space: nowrap;
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
    min-width: 0;
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
    text-transform: uppercase;
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
