<template>
  <Card :headerTitle="'Simple Map'" :border="true" :padding="false" :cardBodyClass="'map-z-index'">
    <l-map
      :use-global-leaflet="false"
      :zoom="simple.zoom"
      :center="simple.center"
      style="height: 500px"
    >
      <l-tile-layer :url="simple.url"></l-tile-layer>
    </l-map>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const simple = ref({
  zoom: 5,
  center: [49.439557, 234.558105] as [number, number],
  url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
})
</script>
