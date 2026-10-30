<template>
  <div class="google-map-view" :style="{ cursor: cursor || undefined }">
    <div v-if="!apiKey" class="google-map-view__fallback">
      <SolarIcon
        name="map"
        :size="22"
        color="currentColor"
        secondary-color="currentColor"
        :secondary-opacity="0.45"
      />
      <span>Peta tidak tersedia. Google Maps API key belum diatur.</span>
    </div>

    <GoogleMap
      v-else
      ref="mapRef"
      :api-key="apiKey"
      :map-id="mapId"
      :center="center"
      :zoom="zoom"
      :map-type-id="mapTypeId"
      :disable-default-ui="disableDefaultUi"
      :zoom-control="zoomControl"
      :fullscreen-control="false"
      :street-view-control="false"
      :map-type-control="false"
      style="width: 100%; height: 100%"
      @click="handleMapClick"
    >
      <AdvancedMarker
        v-for="(marker, index) in markers"
        :key="`marker-${index}`"
        :options="advancedMarkerOptions(marker)"
        :pin-options="pinOptionsFor(marker)"
        @click="emit('marker-click', index)"
        @dragend="handleMarkerDragEnd(index, $event)"
      />

      <AdvancedMarker
        v-if="userLocation"
        :options="{ position: userLocation, gmpClickable: false, zIndex: 999 }"
      >
        <template #content>
          <span class="google-map-view__dot" :style="{ background: userLocationColor }"></span>
        </template>
      </AdvancedMarker>

      <Circle
        v-for="(circle, index) in circles"
        :key="`circle-${index}`"
        :options="circleOptionsFor(circle)"
      />

      <Polygon v-if="polygon" :options="polygonOptionsFor(polygon)" />
    </GoogleMap>
  </div>
</template>

<script setup lang="ts">
/// <reference types="google.maps" />
import { ref, watch } from 'vue'
import { GoogleMap, AdvancedMarker, Circle, Polygon } from 'vue3-google-map'

export interface GoogleMapMarker {
  lat: number
  lng: number
  title?: string
  color?: string
  draggable?: boolean
  glyphText?: string
}

export interface GoogleMapCircleOptions {
  center: { lat: number; lng: number }
  radius: number
  strokeColor?: string
  fillColor?: string
  strokeOpacity?: number
  fillOpacity?: number
  strokeWeight?: number
}

export interface GoogleMapPolygonOptions {
  paths: Array<{ lat: number; lng: number }>
  strokeColor?: string
  fillColor?: string
  strokeOpacity?: number
  fillOpacity?: number
}

const props = withDefaults(
  defineProps<{
    center: { lat: number; lng: number }
    zoom?: number
    mapTypeId?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain'
    markers?: GoogleMapMarker[]
    circles?: GoogleMapCircleOptions[]
    polygon?: GoogleMapPolygonOptions | null
    userLocation?: { lat: number; lng: number } | null
    userLocationColor?: string
    disableDefaultUi?: boolean
    zoomControl?: boolean
    mapId?: string
    /** CSS cursor opsional pada area peta, mis. "crosshair" saat mode pilih lokasi. */
    cursor?: string
  }>(),
  {
    zoom: 14,
    mapTypeId: 'roadmap',
    markers: () => [],
    circles: () => [],
    polygon: null,
    userLocation: null,
    userLocationColor: 'var(--app-primary, #18a6e4)',
    disableDefaultUi: false,
    zoomControl: true,
    mapId: 'MHJ_CRM_MAP',
    cursor: undefined,
  },
)

const emit = defineEmits<{
  click: [payload: { lat: number; lng: number }]
  'marker-click': [index: number]
  'marker-dragend': [payload: { index: number; lat: number; lng: number }]
  ready: [map: google.maps.Map]
}>()

// Browser API key (dibatasi HTTP referrer di Google Cloud Console) — BUKAN server key backend.
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_BROWSER_KEY as string

// Tipe "any" karena 'vue3-google-map' dideklarasikan sebagai modul tanpa tipe pada shims-vue.d.ts.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapRef = ref<any>(null)

watch(
  () => mapRef.value?.ready as boolean | undefined,
  (isReady) => {
    if (!isReady) return
    const map = mapRef.value?.map as google.maps.Map | undefined
    if (map) emit('ready', map)
  },
)

function toLatLngLiteral(
  position:
    | google.maps.LatLng
    | google.maps.LatLngLiteral
    | google.maps.LatLngAltitude
    | google.maps.LatLngAltitudeLiteral
    | null
    | undefined,
): { lat: number; lng: number } | null {
  if (!position) return null
  const maybeLatLng = position as google.maps.LatLng
  if (typeof maybeLatLng.lat === 'function') {
    return { lat: maybeLatLng.lat(), lng: maybeLatLng.lng() }
  }
  const literal = position as google.maps.LatLngLiteral
  return { lat: literal.lat, lng: literal.lng }
}

function advancedMarkerOptions(marker: GoogleMapMarker): google.maps.marker.AdvancedMarkerElementOptions {
  return {
    position: { lat: marker.lat, lng: marker.lng },
    title: marker.title,
    gmpDraggable: marker.draggable ?? false,
    gmpClickable: true,
  }
}

function pinOptionsFor(marker: GoogleMapMarker): google.maps.marker.PinElementOptions | undefined {
  if (!marker.color) return undefined
  return {
    background: marker.color,
    borderColor: '#ffffff',
    glyphColor: '#ffffff',
    glyphText: marker.glyphText,
  }
}

function circleOptionsFor(circle: GoogleMapCircleOptions): google.maps.CircleOptions {
  const color = circle.strokeColor ?? 'var(--app-primary, #18a6e4)'
  return {
    center: circle.center,
    radius: circle.radius,
    strokeColor: color,
    strokeOpacity: circle.strokeOpacity ?? 0.8,
    strokeWeight: circle.strokeWeight ?? 2,
    fillColor: circle.fillColor ?? color,
    fillOpacity: circle.fillOpacity ?? 0.25,
  }
}

function polygonOptionsFor(polygon: GoogleMapPolygonOptions): google.maps.PolygonOptions {
  const color = polygon.strokeColor ?? 'var(--app-primary, #18a6e4)'
  return {
    paths: polygon.paths,
    strokeColor: color,
    strokeOpacity: polygon.strokeOpacity ?? 0.8,
    strokeWeight: 2,
    fillColor: polygon.fillColor ?? color,
    fillOpacity: polygon.fillOpacity ?? 0.2,
  }
}

function handleMapClick(event: google.maps.MapMouseEvent) {
  const position = toLatLngLiteral(event.latLng)
  if (position) emit('click', position)
}

function handleMarkerDragEnd(index: number, event: Event) {
  const target = event.target as unknown as {
    position?: google.maps.LatLng | google.maps.LatLngLiteral | null
  }
  const position = toLatLngLiteral(target?.position ?? null)
  if (position) emit('marker-dragend', { index, ...position })
}

function getMap(): google.maps.Map | undefined {
  return mapRef.value?.map as google.maps.Map | undefined
}

/** Menyamakan perilaku `fitBounds` Leaflet: satu titik → pan+zoom, banyak titik → fitBounds. */
function fitToPoints(
  points: Array<{ lat: number; lng: number }>,
  options: { padding?: number; maxZoom?: number } = {},
) {
  const map = getMap()
  if (!map || !points.length) return

  if (points.length === 1) {
    map.panTo(points[0])
    if (options.maxZoom) map.setZoom(options.maxZoom)
    return
  }

  const bounds = new google.maps.LatLngBounds()
  points.forEach((point) => bounds.extend(point))
  map.fitBounds(bounds, options.padding ?? 32)

  const maxZoom = options.maxZoom
  if (maxZoom) {
    const listener = map.addListener('idle', () => {
      if ((map.getZoom() ?? 0) > maxZoom) map.setZoom(maxZoom)
      listener.remove()
    })
  }
}

function panTo(center: { lat: number; lng: number }, zoom?: number) {
  const map = getMap()
  if (!map) return
  map.panTo(center)
  if (zoom !== undefined) map.setZoom(zoom)
}

function setZoomLevel(zoom: number) {
  getMap()?.setZoom(zoom)
}

function zoomBy(delta: number) {
  const map = getMap()
  if (!map) return
  map.setZoom((map.getZoom() ?? 0) + delta)
}

/** Dipanggil setelah container peta berubah ukuran (mis. modal expand), menyamakan `invalidateSize` Leaflet. */
function refreshSize() {
  const map = getMap()
  if (!map) return
  google.maps.event.trigger(map, 'resize')
}

defineExpose({
  getMap,
  fitToPoints,
  panTo,
  setZoomLevel,
  zoomIn: () => zoomBy(1),
  zoomOut: () => zoomBy(-1),
  refreshSize,
})
</script>

<style scoped>
.google-map-view {
  position: relative;
  width: 100%;
  height: 100%;
}

.google-map-view__fallback {
  display: flex;
  height: 100%;
  min-height: 120px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  color: #8b98a3;
  background: #f4f6f8;
  font-size: 12px;
  text-align: center;
}

.google-map-view__dot {
  display: block;
  width: 16px;
  height: 16px;
  border: 4px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.35);
}
</style>
