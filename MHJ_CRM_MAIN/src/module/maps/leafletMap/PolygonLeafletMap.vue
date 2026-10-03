<template>
  <Card
    :headerTitle="'Map with Polygon - India'"
    :border="true"
    :padding="false"
    :cardBodyClass="'map-z-index'"
  >
    <l-map
      style="height: 500px"
      :zoom="polygon.zoom"
      :center="polygon.center"
      :use-global-leaflet="false"
    >
      <!-- Base map -->
      <l-tile-layer :url="polygon.url" />

      <!-- Polygon covering India -->
      <l-polygon
        :lat-lngs="polygon.lat"
        :color="polygon.color"
        :fillColor="polygon.fillColor"
        :fillOpacity="0.3"
      >
        <l-popup>
          <strong>India Region</strong><br />
          Polygon covering India boundary.
        </l-popup>
      </l-polygon>
    </l-map>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LMap, LTileLayer, LPolygon, LPopup } from '@vue-leaflet/vue-leaflet'
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

interface Polygon {
  zoom: number
  center: [number, number]
  lat: [number, number][]
  color: string
  fillColor: string
  url: string
}

const polygon = ref<Polygon>({
  zoom: 4,
  center: [22.9734, 78.6569],
  lat: [
    [35.65, 76.0],
    [34.0, 78.0],
    [32.0, 80.0],
    [28.0, 81.0],
    [27.0, 88.0],
    [24.0, 92.0],
    [22.0, 91.0],
    [21.0, 89.0],
    [20.0, 88.0],
    [17.0, 85.0],
    [15.0, 80.0],
    [12.0, 76.0],
    [8.0, 77.5],
    [10.0, 72.0],
    [15.0, 70.0],
    [22.0, 68.0],
    [25.0, 70.0],
    [28.0, 69.0],
    [30.0, 70.0],
    [32.0, 72.0],
    [34.0, 74.0],
    [35.65, 76.0],
  ],
  color: '#ff0000',
  fillColor: '#ff0000',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
})
</script>
