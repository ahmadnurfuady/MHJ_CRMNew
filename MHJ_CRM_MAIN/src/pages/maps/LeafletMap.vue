<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6">
        <SimpleLeafletMap />
      </div>
      <div class="col-xl-6">
        <MultiLanguage />
      </div>
      <div class="col-xl-6">
        <PolygonLeafletMap />
      </div>
      <div class="col-xl-6">
        <MapWithMarker />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
// CSS Leaflet dipindah dari import global (main.ts) ke sini karena fitur produksi
// sudah bermigrasi ke Google Maps JS SDK — halaman demo ini tetap butuh style-nya sendiri.
import 'leaflet/dist/leaflet.css'

const SimpleLeafletMap = defineAsyncComponent(
  () => import('@/module/maps/leafletMap/SimpleLeafletMap.vue')
)
const MultiLanguage = defineAsyncComponent(
  () => import('@/module/maps/leafletMap/MultiLanguage.vue')
)
const PolygonLeafletMap = defineAsyncComponent(
  () => import('@/module/maps/leafletMap/PolygonLeafletMap.vue')
)
const MapWithMarker = defineAsyncComponent(
  () => import('@/module/maps/leafletMap/MapWithMarker.vue')
)
</script>
