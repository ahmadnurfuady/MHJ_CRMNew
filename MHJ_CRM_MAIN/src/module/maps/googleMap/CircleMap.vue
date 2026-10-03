<template>
  <Card
    :headerTitle="'Circle on the map'"
    :border="true"
    :padding="false"
    :cardBodyClass="'map-z-index'"
  >
    <div class="map-js-height">
      <GoogleMap
        mapId="DEMO_MAP_ID"
        :api-key="apiKey"
        :center="center"
        :zoom="4"
        style="width: 100%; height: 100%"
        map-type-id="hybrid"
      >
        <Circle v-for="(circle, index) in circles" :key="index" :options="circle" />
      </GoogleMap>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { GoogleMap, Circle } from 'vue3-google-map'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY as string

interface City {
  center: {
    lat: number
    lng: number
  }
  population: number
}

interface CircleOptions {
  center: {
    lat: number
    lng: number
  }
  radius: number
  strokeColor: string
  strokeOpacity: number
  strokeWeight: number
  fillColor: string
  fillOpacity: number
}

const center = { lat: 37.09, lng: -95.712 }

const cities: Record<string, City> = {
  chicago: {
    center: { lat: 41.878, lng: -87.629 },
    population: 2714856,
  },
  newyork: {
    center: { lat: 40.714, lng: -74.005 },
    population: 8405837,
  },
  losangeles: {
    center: { lat: 34.052, lng: -118.243 },
    population: 3857799,
  },
  vancouver: {
    center: { lat: 49.25, lng: -123.1 },
    population: 603502,
  },
}

const circles: Record<string, CircleOptions> = {}

for (const key in cities) {
  const city = cities[key]
  circles[key] = {
    center: city.center,
    radius: Math.sqrt(city.population) * 100,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  }
}
</script>
