<template>
  <template v-if="contactState.activeContact">
    <div class="d-flex">
      <img
        class="img-100 img-fluid m-r-20 rounded-circle update_img_0"
        :src="getImages(contactState.activeContact.profile)"
        :alt="contactState.activeContact.firstName"
      />
      <div class="flex-grow-1 mt-0">
        <h5>{{ displayValue(contactState.activeContact.firstName) }}</h5>
        <p class="email_add_0 mb-2">
          {{ displayValue(contactState.activeContact.email) }}
        </p>
        <ul class="main-contact-option">
          <li><a href="#" @click.prevent="editContact()">Edit</a></li>
          <li><a href="#" @click.prevent="deleteContact()">Hapus</a></li>
          <li><a href="#" @click.prevent="showHistory()">History</a></li>
          <li><a href="#" @click.prevent="printContact()">Print</a></li>
        </ul>
      </div>
    </div>

    <div class="email-general">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h6 class="mb-0">Informasi Company</h6>
        <span v-if="hospitalLoading" class="text-muted f-12">Memuat detail...</span>
      </div>

      <div class="company-detail-grid">
        <div class="company-detail-item">
          <span class="detail-label">Nama Company</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.firstName) }}</span>
        </div>
        <div class="company-detail-item">
          <span class="detail-label">Company Owner</span>
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
          <span class="detail-label">Status</span>
          <span class="detail-value">
            {{ contactState.activeContact.aktif === 1 ? "Aktif" : "Tidak aktif" }}
          </span>
        </div>
        <div class="company-detail-item company-detail-wide">
          <span class="detail-label">Deskripsi</span>
          <span class="detail-value">{{ displayValue(contactState.activeContact.keterangan) }}</span>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useContact } from "@/store/contact";
import { useHospitalStore } from "@/store/hospital";
import { getImages } from "@/utils/index";

const contactStore = useContact();
const hospitalStore = useHospitalStore();
const { contactState } = storeToRefs(contactStore);
const { detailLoading: hospitalLoading } = storeToRefs(hospitalStore);

const { editContact, deleteContact, showHistory, printContact } = contactStore;

function displayValue(value: unknown) {
  const normalized = String(value ?? "").trim();
  return normalized || "-";
}

function websiteHref(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}
</script>

<style scoped>
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
  text-transform: uppercase;
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
</style>
