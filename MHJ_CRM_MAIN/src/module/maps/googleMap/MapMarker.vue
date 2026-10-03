<template>
  <Card
    :headerTitle="'Map at a specified location'"
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
        <AdvancedMarker :options="{ position: { lat: 23.0225, lng: 72.5714 } }" />
      </GoogleMap>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY as string
</script>
