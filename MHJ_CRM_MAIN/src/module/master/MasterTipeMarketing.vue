<template>
  <div class="card">
    <div class="card-header card-no-border d-flex justify-content-between align-items-center">
      <h4 class="mb-0">Master Tipe Marketing</h4>
    </div>

    <div class="card-body pt-0">
      <div class="table-responsive custom-scrollbar">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col" style="width: 60px">No</th>
              <th scope="col" style="width: 140px">Kode Tipe</th>
              <th scope="col">Nama Tipe Marketing</th>
              <th scope="col">Keterangan</th>
              <th scope="col" style="width: 130px" class="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="5" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="mt-2 f-m-light">Memuat data tipe marketing...</div>
              </td>
            </tr>
            <tr v-else-if="errorMessage">
              <td colspan="5" class="text-center text-danger py-4">{{ errorMessage }}</td>
            </tr>
            <tr v-else-if="items.length === 0">
              <td colspan="5" class="text-center py-4">Belum ada data tipe marketing.</td>
            </tr>
            <tr v-for="(item, index) in items" :key="item.KodeTipeMarketing">
              <td>{{ index + 1 }}</td>
              <td class="fw-semibold">{{ item.KodeTipeMarketing }}</td>
              <td>{{ item.namaTipeMarketing }}</td>
              <td>{{ item.Keterangan || '-' }}</td>
              <td class="text-center">
                <span v-if="isActive(item)" class="badge badge-light-success">Aktif</span>
                <span v-else class="badge badge-light-danger">Nonaktif</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { masterDataService } from '@/services/masterDataService'
import type { MasterTipeMarketingItem } from '@/types/master'

const items = ref<MasterTipeMarketingItem[]>([])
const loading = ref(false)
const errorMessage = ref('')

/** Aktif bila kolom `nonaktif` bernilai '0'; nilai lain (termasuk kosong) dianggap nonaktif. */
function isActive(item: MasterTipeMarketingItem): boolean {
  return String(item.nonaktif ?? '').trim() === '0'
}

onMounted(async () => {
  loading.value = true
  try {
    items.value = await masterDataService.getTipeMarketing()
  } catch (error) {
    console.error('Gagal memuat data tipe marketing:', error)
    errorMessage.value = 'Gagal memuat data tipe marketing. Periksa koneksi ke server.'
  } finally {
    loading.value = false
  }
})
</script>
