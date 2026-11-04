<template>
  <article class="map-card" aria-labelledby="distribution-map-title">
    <h2 id="distribution-map-title" class="section-title">Sebaran Fasilitas Kesehatan</h2>
    <HospitalCoverageMap
      :initial-center="[highlight.lat, highlight.lng]"
      :initial-zoom="highlight.zoom ?? 11"
    />
  </article>
</template>

<script setup lang="ts">
import HospitalCoverageMap from '@/module/dashboard/manager/HospitalCoverageMap.vue'

import type { MapHighlight } from '@/types/dashboard/manager'

defineProps<{
  highlight: MapHighlight
}>()
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

@media (max-width: 575px) {
  .map-card {
    padding: 16px 14px;
  }
}
</style>
