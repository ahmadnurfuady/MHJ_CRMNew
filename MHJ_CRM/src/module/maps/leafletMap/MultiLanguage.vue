<template>
  <Card
    :headerTitle="'Multi Language Map'"
    :border="true"
    :padding="false"
    :cardBodyClass="'map-z-index'"
  >
    <label>{{ $t('selectLanguage') }}</label>
    <select v-model="language">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
    </select>
    <l-map
      :use-global-leaflet="false"
      :zoom="polygon.zoom"
      :center="polygon.center"
      style="height: 470px"
    >
      <l-tile-layer :url="polygon.url" />
      <l-polygon :lat-lngs="polygon.lat" :color="polygon.color">
        <l-popup>{{ $t('polygonLabel') }}</l-popup>
      </l-polygon>
    </l-map>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { LMap, LTileLayer, LPopup, LPolygon } from '@vue-leaflet/vue-leaflet'

interface Polygon {
  zoom: number
  center: [number, number]
  lat: [number, number][]
  color: string
  url: string
}

const { locale } = useI18n()
const language = ref<'en' | 'fr' | 'de'>('en')

const tileLayers = {
  en: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  fr: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
  de: 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png',
}

const polygon = ref<Polygon>({
  zoom: 11,
  center: [47.2219, -1.545266],
  lat: [
    [47.2263299, -1.6222],
    [47.21024, -1.6270065],
    [47.1969447, -1.6136169],
    [47.1852793, -1.6143036],
    [47.1794457, -1.6098404],
    [47.1775788, -1.5985107],
    [47.1676598, -1.5753365],
    [47.1593731, -1.5521622],
    [47.1593731, -1.5319061],
    [47.1722111, -1.5143967],
    [47.1960115, -1.4841843],
    [47.2095404, -1.4848709],
    [47.2291277, -1.4683914],
    [47.2533687, -1.5116501],
    [47.2577961, -1.5531921],
    [47.26828069, -1.5621185],
    [47.2657179, -1.589241],
    [47.2589612, -1.6204834],
    [47.237287, -1.6266632],
    [47.2263299, -1.6222],
  ],
  color: '#ff00ff',
  url: tileLayers[language.value],
})

watch(language, (newLang) => {
  polygon.value.url = tileLayers[newLang]
  locale.value = newLang
})
</script>
