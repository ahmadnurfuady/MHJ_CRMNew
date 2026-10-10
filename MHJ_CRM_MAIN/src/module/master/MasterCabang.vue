<template>
  <div class="card">
    <div class="card-header card-no-border d-flex justify-content-between align-items-center">
      <h4 class="mb-0">Master Cabang</h4>
    </div>

    <div class="card-body pt-0">
      <div class="row g-2 mb-3">
        <div class="col-md-4">
          <input
            v-model="searchTerm"
            type="search"
            class="form-control"
            placeholder="Cari kode / nama cabang..."
          />
        </div>
      </div>

      <div class="table-responsive custom-scrollbar">
        <table class="table table-hover mhj-data-table align-middle">
          <thead>
            <tr>
              <th scope="col" style="width: 60px">No</th>
              <th scope="col" style="width: 160px">Kode Cabang</th>
              <th scope="col">Nama Cabang</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="3" class="text-center py-5">
                <LoadingSpinner text="Memuat data cabang..." />
              </td>
            </tr>
            <tr v-else-if="errorMessage">
              <td colspan="3" class="text-center text-danger py-4">{{ errorMessage }}</td>
            </tr>
            <tr v-else-if="filtered.length === 0">
              <td colspan="3" class="text-center py-4">Tidak ada cabang yang cocok.</td>
            </tr>
            <tr v-for="(item, index) in filtered" :key="item.KodeCabang">
              <td>{{ index + 1 }}</td>
              <td>{{ item.KodeCabang }}</td>
              <td class="fw-semibold">{{ item.NamaCabang }}</td>
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
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import type { MasterCabangItem } from '@/types/master'

const items = ref<MasterCabangItem[]>([])
const loading = ref(false)
const errorMessage = ref('')
const searchTerm = ref('')

const filtered = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  if (!term) return items.value
  return items.value.filter(
    (item) =>
      item.KodeCabang.toLowerCase().includes(term) ||
      item.NamaCabang.toLowerCase().includes(term),
  )
})

onMounted(async () => {
  loading.value = true
  try {
    items.value = await masterDataService.getCabang()
  } catch (error) {
    console.error('Gagal memuat data cabang:', error)
    errorMessage.value = 'Gagal memuat data cabang. Periksa koneksi ke server.'
  } finally {
    loading.value = false
  }
})
</script>
