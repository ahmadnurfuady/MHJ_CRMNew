<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6">
        <MapMarker />
      </div>
      <div class="col-xl-6">
        <PolylineMap />
      </div>
      <div class="col-xl-6">
        <PolygonMap />
      </div>
      <div class="col-xl-6">
        <CircleMap />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const MapMarker = defineAsyncComponent(() => import('@/module/maps/googleMap/MapMarker.vue'))
const PolylineMap = defineAsyncComponent(() => import('@/module/maps/googleMap/PolylineMap.vue'))
const PolygonMap = defineAsyncComponent(() => import('@/module/maps/googleMap/PolygonMap.vue'))
const CircleMap = defineAsyncComponent(() => import('@/module/maps/googleMap/CircleMap.vue'))
</script>
