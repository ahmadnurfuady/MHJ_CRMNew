<template>
  <template v-if="contactState.activeContact">
    <div class="hospital-profile-summary">
      <div
        class="hospital-profile-icon"
        :style="avatarColorStyle(contactState.activeContact.firstName || contactState.activeContact.id)"
        aria-hidden="true"
      >
        <i class="fa-solid fa-hospital"></i>
      </div>
      <div class="hospital-identity">
        <h5 class="mb-0">{{ displayValue(contactState.activeContact.firstName) }}</h5>
        <p class="email_add_0 mb-0">
          {{ displayValue(contactState.activeContact.email) }}
        </p>
        <p class="hospital-location mb-0">
          <vue-feather type="map-pin" size="14" />
          {{ locationLabel }}
        </p>
      </div>
      <div class="hospital-primary-actions">
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

    <div class="email-general">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h6 class="mb-0">Informasi Rumah Sakit</h6>
        <span v-if="hospitalLoading" class="text-muted f-12">Memuat detail...</span>
      </div>

      <div class="company-detail-grid">
        <div class="company-detail-item">
          <span class="detail-label">Nama Rumah Sakit</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.firstName) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Pemilik Rumah Sakit</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.owner) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Email</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.email) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Telepon</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.contactNumber) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Website</span>
          <a
            v-if="contactState.activeContact.website"
            class="detail-value font-primary"
            :href="websiteHref(contactState.activeContact.website)"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ contactState.activeContact.website }}
          </a>
          <span v-else class="detail-value">-</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Industry</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.industry) }}</span>
        </div>
        <div class="company-detail-item company-detail-wide">
          <span class="detail-label">Alamat</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.address) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Negara</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.country) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Provinsi</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.province) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Kota</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.city) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Kode Pos</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.posCode) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Kode Kelurahan</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.kdKelurahan) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Grading / Status Finance</span>
          <span class="detail-value">
            {{ financeStatusLabel }}
          </span>
        </div>
        <div class="company-detail-item company-detail-wide">
          <span class="detail-label">Deskripsi</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.keterangan) }}</span>
        </div>
      </div>
    </div>

    <div class="hospital-danger-zone mt-4">
      <div>
        <strong>Hapus rumah sakit</strong>
        <p class="mb-0">Data rumah sakit yang dihapus tidak dapat dikembalikan.</p>
      </div>
      <button class="btn btn-outline-danger btn-sm" type="button" @click="deleteContact">
        <vue-feather type="trash-2" size="14" />Hapus Rumah Sakit
      </button>
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";

import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { avatarColorStyle } from "@/utils/avatar";

const contactStore = useContact();
const hospitalStore = useHospitalStore();
const { contactState } = storeToRefs(contactStore);
const { detailLoading: hospitalLoading } = storeToRefs(hospitalStore);

const { editContact, deleteContact, showHistory, printContact } = contactStore;

const financeStatusLabel = computed(
  () => contactState.value.activeContact?.financeStatus?.trim() || "Belum dinilai",
);

const locationLabel = computed(() => {
  const contact = contactState.value.activeContact;
  return [contact?.city, contact?.province]
    .map((value) => String(value ?? "").trim())
    .filter((value) => value && value !== "-")
    .join(", ") || "Lokasi belum tersedia";
});

function displayValue(value: unknown) {
  const normalized = String(value ?? "").trim();
  return normalized || "-";
}

function websiteHref(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}
</script>

<style scoped>
.hospital-profile-summary {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) auto;
  align-items: start;
  column-gap: 20px;
}

.hospital-profile-icon {
  display: grid;
  width: 100px;
  height: 100px;
  place-items: center;
  border-radius: 24px;
  color: #ffffff;
  font-size: 40px;
  box-shadow: 0 10px 24px rgba(22, 76, 105, 0.15);
}

.hospital-identity {
  display: flex;
  min-width: 0;
  align-self: center;
  flex-direction: column;
  gap: 4px;
}

.hospital-identity h5,
.hospital-identity p {
  overflow-wrap: anywhere;
}

.hospital-location {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #64748b;
}

.hospital-primary-actions {
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-items: end;
  gap: 6px;
}

.hospital-primary-actions .btn,
.hospital-danger-zone .btn {
  display: inline-flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 7px;
  padding: 7px 11px;
}

.hospital-primary-actions .btn {
  width: 104px;
  height: 32px;
}

.hospital-danger-zone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid rgba(231, 41, 41, 0.22);
  border-radius: 10px;
  padding: 16px;
  background: rgba(231, 41, 41, 0.035);
}

.hospital-danger-zone strong {
  display: block;
  margin-bottom: 3px;
  color: #991b1b;
}

.hospital-danger-zone p {
  color: #64748b;
  font-size: 12px;
}

.company-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem 2rem;
}

.company-detail-item {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}

.company-detail-wide {
  grid-column: 1 / -1;
}

.detail-label {
  color: #6c757d;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: capitalize;
}

.detail-value {
  color: inherit;
  overflow-wrap: anywhere;
}

@media (max-width: 767.98px) {
  .company-detail-grid {
    grid-template-columns: 1fr;
  }

  .company-detail-wide {
    grid-column: auto;
  }
}

@media (max-width: 575.98px) {
  .hospital-profile-summary {
    grid-template-columns: 72px minmax(0, 1fr);
    column-gap: 14px;
  }

  .hospital-profile-summary > img {
    width: 72px;
    height: 72px;
    object-fit: cover;
  }

  .hospital-primary-actions {
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 8px;
    margin-top: 14px;
  }

  .hospital-primary-actions .btn {
    width: 100%;
  }

  .hospital-danger-zone {
    align-items: stretch;
    flex-direction: column;
  }

  .hospital-danger-zone .btn {
    width: 100%;
  }
}
</style>
