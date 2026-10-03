<template>
  <Card
    :headerTitle="'Polygon on the map'"
    :border="true"
    :padding="false"
    :cardBodyClass="'map-z-index'"
  >
    <div class="map-js-height">
      <GoogleMap
        mapId="DEMO_MAP_ID"
        :api-key="apiKey"
        :center="{ lat: 20.5937, lng: 78.9629 }"
        :zoom="5"
        style="width: 100%; height: 100%"
        map-type-id="hybrid"
      >
        <Polygon :options="india" />
      </GoogleMap>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { GoogleMap, Polygon } from 'vue3-google-map'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY as string

const triangleCoords = [
  { lat: 28.6139, lng: 77.209 },
  { lat: 23.0225, lng: 72.5714 },
  { lat: 19.076, lng: 72.8777 },
  { lat: 13.0827, lng: 80.2707 },
  { lat: 22.5726, lng: 88.3639 },
  { lat: 28.6139, lng: 77.209 },
]

const india = {
  paths: triangleCoords,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
}
</script>
