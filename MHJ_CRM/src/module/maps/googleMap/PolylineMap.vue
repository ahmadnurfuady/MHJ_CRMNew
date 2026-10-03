<template>
  <Card
    :headerTitle="'Polyline on the map'"
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
        <Polyline :options="flightPath" />
      </GoogleMap>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { GoogleMap, Polyline } from 'vue3-google-map'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY as string

const flightPlanCoordinates = [
  { lat: 23.0225, lng: 72.5714 },
  { lat: 21.1702, lng: 72.8311 },
  { lat: 19.076, lng: 72.8777 },
]

const flightPath = {
  path: flightPlanCoordinates,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2,
}
</script>
