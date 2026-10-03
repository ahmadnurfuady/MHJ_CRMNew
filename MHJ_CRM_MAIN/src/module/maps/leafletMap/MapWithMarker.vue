<template>
  <Card
    :headerTitle="'Map With Marker'"
    :border="true"
    :padding="false"
    :cardBodyClass="'map-z-index'"
  >
    <l-map
      :use-global-leaflet="false"
      :zoom="simpleWithMarker.zoom"
      :center="simpleWithMarker.center"
      style="height: 500px"
    >
      <l-marker
        :lat-lng="simpleWithMarker.marker"
        :title="simpleWithMarker.title"
        :draggable="false"
      >
        <l-popup :content="simpleWithMarker.text" />
      </l-marker>
      <l-tile-layer :url="simpleWithMarker.url" />
    </l-map>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
import { LMap, LTileLayer, LPopup, LMarker } from '@vue-leaflet/vue-leaflet'
interface SimpleWithMarker {
  zoom: number
  center: [number, number]
  url: string
  marker: [number, number]
  text: string
  title: string
}
const simpleWithMarker = ref<SimpleWithMarker>({
  zoom: 13,
  center: [47.41322, -1.219482],
  url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  marker: [47.41322, -1.219482],
  text: 'my marker popup text',
  title: 'My marker popup title',
})
</script>
