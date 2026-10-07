<template>
  <div class="card">
    <div class="card-header card-no-border d-flex justify-content-between align-items-center">
      <h4 class="mb-0">Master Devisi</h4>
    </div>

    <div class="card-body pt-0">
      <div class="row g-2 mb-3">
        <div class="col-md-4">
          <input
            v-model="searchTerm"
            type="search"
            class="form-control"
            placeholder="Cari kode / nama / alias devisi..."
          />
        </div>
      </div>

      <div class="table-responsive custom-scrollbar">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col" style="width: 60px">No</th>
              <th scope="col" style="width: 160px">Kode Devisi</th>
              <th scope="col">Nama Devisi</th>
              <th scope="col">Nama Alias</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="4" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="mt-2 f-m-light">Memuat data devisi...</div>
              </td>
            </tr>
            <tr v-else-if="errorMessage">
              <td colspan="4" class="text-center text-danger py-4">{{ errorMessage }}</td>
            </tr>
            <tr v-else-if="filtered.length === 0">
              <td colspan="4" class="text-center py-4">Tidak ada devisi yang cocok.</td>
            </tr>
            <tr v-for="(item, index) in filtered" :key="item.KodeDevisi">
              <td>{{ index + 1 }}</td>
              <td class="fw-semibold">{{ item.KodeDevisi }}</td>
              <td>{{ item.NamaDevisi }}</td>
              <td>{{ item.NamaAlias || '-' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { masterDataService } from '@/services/masterDataService'
import type { MasterDevisiItem } from '@/types/master'

const items = ref<MasterDevisiItem[]>([])
const loading = ref(false)
const errorMessage = ref('')
const searchTerm = ref('')

const filtered = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  if (!term) return items.value
  return items.value.filter(
    (item) =>
      item.KodeDevisi.toLowerCase().includes(term) ||
      item.NamaDevisi.toLowerCase().includes(term) ||
      (item.NamaAlias ?? '').toLowerCase().includes(term)
  )
})

onMounted(async () => {
  loading.value = true
  try {
    items.value = await masterDataService.getDevisi()
  } catch (error) {
    console.error('Gagal memuat data devisi:', error)
    errorMessage.value = 'Gagal memuat data devisi. Periksa koneksi ke server.'
  } finally {
    loading.value = false
  }
})
</script>
