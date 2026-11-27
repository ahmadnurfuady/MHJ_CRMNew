<template>
  <article class="map-card" aria-labelledby="distribution-map-title">
    <div class="map-header">
      <h2 id="distribution-map-title" class="section-title">Sales Map</h2>
      <div class="map-tabs" role="group" aria-label="Tampilan Sales Map">
        <button type="button" :aria-pressed="mode === 'visit'" :class="{ active: mode === 'visit' }" @click="mode = 'visit'">Kunjungan</button>
        <button type="button" :aria-pressed="mode === 'sales'" :class="{ active: mode === 'sales' }" @click="mode = 'sales'">Penjualan</button>
      </div>
    </div>
    <HospitalCoverageMap
      :mode="mode"
      :initial-center="[highlight.lat, highlight.lng]"
      :initial-zoom="highlight.zoom ?? 11"
    />
  </article>
</template>

<script setup lang="ts">
import HospitalCoverageMap from '@/module/dashboard/manager/HospitalCoverageMap.vue'
import { ref } from 'vue'

import type { MapHighlight } from '@/types/dashboard/manager'

defineProps<{
  highlight: MapHighlight
}>()
const mode = ref<'visit' | 'sales'>('visit')
</script>

<style scoped>
.map-card {
  display: grid;
  gap: 16px;
  border: 1px solid #e9edf1;
  border-radius: 18px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(27, 43, 65, 0.04);
}

.section-title {
  margin: 0;
  color: #1c2a36;
  font-size: 16px;
  font-weight: 700;
}

.map-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.map-tabs { display: inline-flex; gap: 4px; border: 1px solid #e1e8ed; border-radius: 10px; padding: 4px; background: #f4f7f9; }
.map-tabs button { border: 0; border-radius: 7px; padding: 7px 13px; color: #52606d; background: transparent; font-size: 12px; font-weight: 700; cursor: pointer; }
.map-tabs button.active { color: #fff; background: var(--app-primary, #18a6e4); }
.map-tabs button:focus-visible { outline: 2px solid var(--app-primary, #18a6e4); outline-offset: 2px; }

@media (max-width: 575px) {
  .map-card {
    padding: 16px 14px;
  }
}
</style>
