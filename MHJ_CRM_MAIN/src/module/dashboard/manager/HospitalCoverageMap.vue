<template>
  <div
    v-if="isExpanded"
    class="hospital-map__backdrop"
    aria-hidden="true"
    @click="closeExpandedMap"
  ></div>

  <section
    class="hospital-map"
    :class="{ 'hospital-map--expanded': isExpanded }"
    aria-label="Peta cakupan faskes"
  >
    <div class="hospital-map__legend">
      <strong>Urgensi Kunjungan</strong>
      <span v-for="status in urgencyOptions" :key="status.id">
        <i :class="`urgency-dot urgency-dot--${status.id}`"></i>
        {{ status.label }}
      </span>
    </div>

    <div class="hospital-map__top-actions">
      <button
        type="button"
        class="map-action map-action--square"
        aria-label="Cari faskes atau wilayah"
        title="Cari faskes atau wilayah"
        :aria-expanded="showSearch"
        @click="toggleSearch"
      >
        <SolarIcon
          name="magnifier"
          :size="20"
          color="var(--app-primary-dark, #0e7490)"
          secondary-color="var(--app-primary, #18a6e4)"
          :secondary-opacity="0.75"
        />
      </button>
      <button
        type="button"
        class="map-action map-action--wide"
        :aria-expanded="showLayers"
        aria-controls="hospital-map-layers"
        @click="toggleLayerMenu"
      >
        <SolarIcon
          v-if="activeLayer.id === 'standard'"
          name="map"
          :size="19"
          color="var(--app-primary-dark, #0e7490)"
          secondary-color="var(--app-primary, #18a6e4)"
        />
        <MhjIcon
          v-else-if="activeLayer.id === 'satellite'"
          name="map_satellite"
          :size="20"
          class="map-layer-symbol map-layer-symbol--satellite"
          color="var(--app-primary-dark, #0e7490)"
          secondary-color="var(--app-primary, #18a6e4)"
        />
        <EarthDuotoneIcon
          v-else
          class="map-layer-symbol"
          :size="20"
          color="var(--app-primary-dark, #0e7490)"
          secondary-color="var(--app-primary, #18a6e4)"
          :secondary-opacity="0.55"
        />
        <span>{{ activeLayer.label }}</span>
        <SolarIcon
          :name="showLayers ? 'alt-arrow-up' : 'alt-arrow-down'"
          :size="15"
          color="currentColor"
          secondary-color="var(--app-primary, #18a6e4)"
        />
      </button>
      <button
        type="button"
        class="map-action map-action--square"
        aria-label="Filter peta faskes"
        title="Filter peta"
        @click="openFilter"
      >
        <MhjIcon
          name="action_filter"
          :size="22"
          color="var(--app-primary-dark, #0e7490)"
          secondary-color="var(--app-primary, #18a6e4)"
        />
        <b v-if="activeFilterCount">{{ activeFilterCount }}</b>
      </button>
    </div>

    <form v-if="showSearch" class="hospital-map__search" role="search" @submit.prevent="applySearch">
      <SolarIcon
        name="magnifier"
        :size="18"
        color="var(--app-primary-dark, #0e7490)"
        secondary-color="var(--app-primary, #18a6e4)"
        :secondary-opacity="0.75"
      />
      <input
        v-model.trim="searchQuery"
        type="search"
        placeholder="Cari nama faskes, kota, atau provinsi..."
        aria-label="Cari nama faskes, kota, atau provinsi"
      />
      <span>{{ filteredPoints.length }} faskes</span>
      <button type="button" aria-label="Tutup pencarian" @click="closeSearch">
        <SolarIcon name="close" :size="18" color="currentColor" secondary-color="currentColor" />
      </button>
    </form>

    <div
      v-if="showLayers"
      id="hospital-map-layers"
      class="hospital-map__layer-menu"
      role="radiogroup"
      aria-label="Pilihan tampilan peta"
    >
      <small>Pilihan Layer Peta</small>
      <button
        v-for="layer in layerOptions"
        :key="layer.id"
        type="button"
        role="radio"
        :aria-checked="selectedLayer === layer.id"
        :class="{ active: selectedLayer === layer.id }"
        @click="selectLayer(layer.id)"
      >
        <SolarIcon
          v-if="layer.id === 'standard'"
          :name="layer.icon"
          :size="23"
          color="currentColor"
          secondary-color="var(--app-primary, #18a6e4)"
        />
        <MhjIcon
          v-else-if="layer.id === 'satellite'"
          name="map_satellite"
          :size="23"
          class="map-layer-symbol map-layer-symbol--satellite"
          color="currentColor"
          secondary-color="var(--app-primary, #18a6e4)"
        />
        <EarthDuotoneIcon
          v-else
          class="map-layer-symbol"
          :size="23"
          color="currentColor"
          secondary-color="var(--app-primary, #18a6e4)"
          :secondary-opacity="0.55"
        />
        <span>
          <strong>{{ layer.label }}</strong>
          <small>{{ layer.description }}</small>
        </span>
        <SolarIcon
          v-if="selectedLayer === layer.id"
          name="check-circle"
          :size="19"
          color="var(--app-primary, #18a6e4)"
          secondary-color="var(--app-primary, #18a6e4)"
        />
      </button>
    </div>

    <div v-if="mapLoading && !hospitalPoints.length" class="hospital-map__state" role="status">
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      Memuat data dan koordinat faskes...
    </div>
    <div v-else-if="!hospitalPoints.length" class="hospital-map__state">
      Belum ada faskes dengan koordinat yang dapat ditampilkan.
    </div>

    <LMap
      :use-global-leaflet="false"
      :zoom="initialZoom"
      :center="initialCenter"
      :options="{ zoomControl: false, scrollWheelZoom: true }"
      @ready="handleMapReady"
    >
      <LTileLayer
        v-if="selectedLayer === 'standard'"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <LTileLayer
        v-else
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri"
      />
      <LTileLayer
        v-if="selectedLayer === 'hybrid'"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
        attribution="Labels &copy; Esri"
      />

      <LMarker
        v-for="point in filteredPoints"
        :key="point.hospital.id"
        :lat-lng="[point.lat, point.lng]"
        :title="point.hospital.name"
        @click="selectHospital(point.hospital)"
      >
        <LIcon :icon-size="[42, 42]" :icon-anchor="[21, 21]" class-name="hospital-marker-shell">
          <span class="hospital-marker" :class="`hospital-marker--${point.urgency.id}`">
            <span class="hospital-marker__plus">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </span>
        </LIcon>
      </LMarker>

      <LCircleMarker
        v-if="userLocation"
        :lat-lng="userLocation"
        :radius="8"
        color="#ffffff"
        fill-color="var(--app-primary, #18a6e4)"
        :fill-opacity="1"
        :weight="4"
      />
    </LMap>

    <div class="hospital-map__controls" aria-label="Kontrol peta">
      <button
        type="button"
        class="location-control"
        :class="{ locating }"
        :disabled="locating"
        :aria-label="locationControlLabel"
        @click="locateUser"
      >
        <MhjIcon
          name="action_location"
          :size="22"
          color="var(--app-primary-dark, #0e7490)"
          secondary-color="var(--app-primary, #18a6e4)"
        />
        <i v-if="userLocation"></i>
        <span class="map-control-tooltip" role="tooltip">{{ locationControlLabel }}</span>
      </button>
      <button
        type="button"
        class="map-expand-control"
        :aria-label="isExpanded ? 'Perkecil peta' : 'Perbesar peta'"
        :title="isExpanded ? 'Perkecil peta' : 'Perbesar peta'"
        @click="toggleExpandedMap"
      >
        <svg v-if="isExpanded" class="map-expand-icon" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
        </svg>
        <svg v-else class="map-expand-icon" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
        </svg>
      </button>
      <button type="button" aria-label="Tampilkan semua faskes" title="Tampilkan semua faskes" @click="fitHospitals">
        <SolarIcon
          name="map"
          :size="21"
          color="var(--app-primary-dark, #0e7490)"
          secondary-color="var(--app-primary, #18a6e4)"
        />
      </button>
      <button type="button" class="primary" aria-label="Perbesar zoom" title="Perbesar zoom" @click="zoomIn">
        <svg class="map-zoom-icon" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <button type="button" class="primary" aria-label="Perkecil zoom" title="Perkecil zoom" @click="zoomOut">
        <svg class="map-zoom-icon" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M5 12h14" />
        </svg>
      </button>
    </div>

    <div v-if="mapMessage" class="hospital-map__message" role="status">{{ mapMessage }}</div>

    <aside v-if="showFilter" class="hospital-map__filter" aria-label="Filter peta faskes">
      <header>
        <div>
          <small>FILTER PETA</small>
          <strong>Peta Cakupan Faskes</strong>
        </div>
        <button type="button" class="filter-reset" @click="resetFilters">Reset</button>
        <button type="button" class="filter-close" aria-label="Tutup filter" @click="showFilter = false">
          <SolarIcon name="close" :size="20" color="currentColor" secondary-color="currentColor" />
        </button>
      </header>

      <div class="filter-body">
        <fieldset>
          <legend>Urgensi Kunjungan</legend>
          <div class="filter-chips">
            <button type="button" :class="{ active: urgencyFilter === 'all' }" @click="urgencyFilter = 'all'">Semua</button>
            <button
              v-for="status in urgencyOptions"
              :key="status.id"
              type="button"
              :class="{ active: urgencyFilter === status.id }"
              @click="urgencyFilter = status.id"
            >
              <i :class="`urgency-dot urgency-dot--${status.id}`"></i>{{ status.label }}
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Status Kepemilikan Alat</legend>
          <div class="filter-chips">
            <button type="button" :class="{ active: equipmentFilter === 'all' }" @click="equipmentFilter = 'all'">Semua</button>
            <button type="button" :class="{ active: equipmentFilter === 'mhj' }" @click="equipmentFilter = 'mhj'">Ada Alat MHJ</button>
            <button type="button" :class="{ active: equipmentFilter === 'none' }" @click="equipmentFilter = 'none'">Belum Ada Alat</button>
          </div>
        </fieldset>

        <fieldset v-if="cityOptions.length">
          <legend>Kota / Wilayah</legend>
          <div class="filter-chips">
            <button type="button" :class="{ active: cityFilter === 'all' }" @click="cityFilter = 'all'">Semua</button>
            <button
              v-for="city in cityOptions"
              :key="city"
              type="button"
              :class="{ active: cityFilter === city }"
              @click="cityFilter = city"
            >{{ city }}</button>
          </div>
        </fieldset>

        <fieldset v-if="typeOptions.length">
          <legend>Tipe Faskes</legend>
          <div class="filter-chips">
            <button type="button" :class="{ active: typeFilter === 'all' }" @click="typeFilter = 'all'">Semua</button>
            <button
              v-for="type in typeOptions"
              :key="type"
              type="button"
              :class="{ active: typeFilter === type }"
              @click="typeFilter = type"
            >{{ type }}</button>
          </div>
        </fieldset>
      </div>

      <footer>
        <button type="button" @click="applyFilters">Terapkan Filter ({{ filteredPoints.length }} faskes)</button>
      </footer>
    </aside>

    <aside v-if="selectedHospital && !showFilter" class="hospital-map__detail">
      <button type="button" class="detail-close" aria-label="Tutup detail" @click="selectedHospital = null">
        <SolarIcon name="close" :size="18" color="currentColor" secondary-color="currentColor" />
      </button>
      <div class="detail-heading">
        <span>
          <MhjIcon
            name="coverage_point_on_map"
            :size="28"
            color="var(--app-primary-dark, #0e7490)"
            secondary-color="var(--app-primary, #18a6e4)"
          />
        </span>
        <div>
          <strong>{{ selectedHospital.name }}</strong>
          <small>{{ selectedHospital.city || selectedHospital.province || 'Wilayah belum tersedia' }}</small>
        </div>
      </div>
      <div class="detail-badges">
        <span v-if="selectedHospital.financeStatus" class="grade">{{ selectedHospital.financeStatus }}</span>
        <span :class="`urgency urgency--${getUrgency(selectedHospital).id}`">
          <i :class="`urgency-dot urgency-dot--${getUrgency(selectedHospital).id}`"></i>
          {{ getUrgency(selectedHospital).label }}
        </span>
      </div>
      <div class="detail-location">
        <MhjIcon
          name="action_location"
          :size="17"
          color="currentColor"
          secondary-color="var(--app-primary, #18a6e4)"
        />
        <span>{{ selectedHospital.address || selectedHospital.mapAddress || selectedCoordinates }}</span>
      </div>
      <div class="detail-metrics">
        <span><strong>{{ selectedHospital.totalInstalledEquipment ?? 0 }}</strong><small>Total Alat</small></span>
        <span><strong>{{ selectedHospital.totalProjects ?? 0 }}</strong><small>Total Proyek</small></span>
        <span><strong>{{ selectedHospital.totalContacts ?? 0 }}</strong><small>Kontak</small></span>
      </div>
      <div class="detail-actions">
        <button type="button" class="detail-button" @click="openHospitalDetail">Lihat Detail</button>
        <button type="button" class="detail-route" aria-label="Buka rute kunjungan" @click="openRoute">
          <MhjIcon
            name="action_route"
            :size="20"
            color="currentColor"
            secondary-color="var(--app-primary, #18a6e4)"
          />
          <span>Buka Rute</span>
        </button>
      </div>
    </aside>

    <span v-if="missingCoordinateCount" class="hospital-map__coordinate-note">
      {{ missingCoordinateCount }} faskes belum memiliki koordinat
    </span>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { LCircleMarker, LIcon, LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { EarthIcon as EarthDuotoneIcon } from '@solar-icons/vue/bold-duotone/earth'

import { useHospitalStore } from '@/store/hospital'
import type { Hospital } from '@/types/hospital'

type MapLayer = 'standard' | 'satellite' | 'hybrid'
type UrgencyId = 'fresh' | 'attention' | 'overdue'
type UrgencyFilter = UrgencyId | 'all'
type EquipmentFilter = 'all' | 'mhj' | 'none'

interface LeafletMapInstance {
  invalidateSize: (options?: { animate?: boolean }) => void
  fitBounds: (bounds: [number, number][], options?: { padding?: [number, number]; maxZoom?: number }) => void
  setView: (center: [number, number], zoom: number, options?: { animate?: boolean }) => void
  zoomIn: () => void
  zoomOut: () => void
}

interface UrgencyOption {
  id: UrgencyId
  label: string
}

const props = defineProps<{
  initialCenter: [number, number]
  initialZoom: number
}>()

const router = useRouter()
const hospitalStore = useHospitalStore()
const { items: hospitals } = storeToRefs(hospitalStore)

const mapInstance = ref<LeafletMapInstance | null>(null)
const mapLoading = ref(false)
const isExpanded = ref(false)
const showLayers = ref(false)
const showFilter = ref(false)
const showSearch = ref(false)
const searchQuery = ref('')
const selectedLayer = ref<MapLayer>('standard')
const selectedHospital = ref<Hospital | null>(null)
const userLocation = ref<[number, number] | null>(null)
const locating = ref(false)
const mapMessage = ref('')
const urgencyFilter = ref<UrgencyFilter>('all')
const equipmentFilter = ref<EquipmentFilter>('all')
const cityFilter = ref('all')
const typeFilter = ref('all')
let messageTimer: number | undefined
const detailHydrationAttempted = new Set<number>()

const urgencyOptions: UrgencyOption[] = [
  { id: 'fresh', label: '< 30 Hari' },
  { id: 'attention', label: '30 - 90 Hari' },
  { id: 'overdue', label: '> 90 Hari / Baru' },
]

const layerOptions: Array<{ id: MapLayer; label: string; description: string; icon: string }> = [
  { id: 'standard', label: 'Standar', description: 'Peta jalan & kota', icon: 'map' },
  { id: 'satellite', label: 'Citra Satelit', description: 'Foto udara resolusi tinggi', icon: 'satellite' },
  { id: 'hybrid', label: 'Satelit Hybrid', description: 'Satelit + label jalan', icon: 'global' },
]

const activeLayer = computed(() => layerOptions.find((layer) => layer.id === selectedLayer.value) ?? layerOptions[0]!)

function hasCoordinates(hospital: Hospital): boolean {
  return Number.isFinite(hospital.latitude) && Number.isFinite(hospital.longitude)
    && Math.abs(hospital.latitude ?? 91) <= 90
    && Math.abs(hospital.longitude ?? 181) <= 180
}

function hospitalType(hospital: Hospital): string {
  return hospital.tipe || hospital.hospitalType || hospital.jenis || hospital.industry || 'Tidak diketahui'
}

function getUrgency(hospital: Hospital): UrgencyOption {
  if (!hospital.lastVisitAt) return urgencyOptions[2]!
  const parsedDate = new Date(hospital.lastVisitAt.replace(' ', 'T'))
  if (Number.isNaN(parsedDate.getTime())) return urgencyOptions[2]!
  const elapsedDays = Math.floor((Date.now() - parsedDate.getTime()) / 86_400_000)
  if (elapsedDays < 30) return urgencyOptions[0]!
  if (elapsedDays <= 90) return urgencyOptions[1]!
  return urgencyOptions[2]!
}

const hospitalPoints = computed(() => hospitals.value.filter(hasCoordinates).map((hospital) => ({
  hospital,
  lat: hospital.latitude as number,
  lng: hospital.longitude as number,
  urgency: getUrgency(hospital),
})))

const filteredPoints = computed(() => hospitalPoints.value.filter((point) => {
  const hospital = point.hospital
  const query = searchQuery.value.toLocaleLowerCase('id-ID')
  if (query && ![hospital.name, hospital.city, hospital.province, hospital.address]
    .some((value) => value.toLocaleLowerCase('id-ID').includes(query))) return false
  if (urgencyFilter.value !== 'all' && point.urgency.id !== urgencyFilter.value) return false
  if (equipmentFilter.value === 'mhj' && !(hospital.totalInstalledEquipment && hospital.totalInstalledEquipment > 0)) return false
  if (equipmentFilter.value === 'none' && (hospital.totalInstalledEquipment ?? 0) > 0) return false
  if (cityFilter.value !== 'all' && hospital.city !== cityFilter.value) return false
  if (typeFilter.value !== 'all' && hospitalType(hospital) !== typeFilter.value) return false
  return true
}))

const cityOptions = computed(() => [...new Set(hospitalPoints.value.map(({ hospital }) => hospital.city).filter(Boolean))]
  .sort((a, b) => a.localeCompare(b, 'id-ID')))
const typeOptions = computed(() => [...new Set(hospitalPoints.value.map(({ hospital }) => hospitalType(hospital)).filter(Boolean))]
  .sort((a, b) => a.localeCompare(b, 'id-ID')))
const missingCoordinateCount = computed(() => hospitals.value.filter((hospital) => !hasCoordinates(hospital)).length)
const activeFilterCount = computed(() => [
  urgencyFilter.value !== 'all',
  equipmentFilter.value !== 'all',
  cityFilter.value !== 'all',
  typeFilter.value !== 'all',
].filter(Boolean).length)
const selectedCoordinates = computed(() => {
  if (!selectedHospital.value || !hasCoordinates(selectedHospital.value)) return 'Koordinat belum tersedia'
  return `${selectedHospital.value.latitude!.toFixed(5)}, ${selectedHospital.value.longitude!.toFixed(5)}`
})
const locationControlLabel = computed(() => {
  if (locating.value) return 'Mencari lokasi...'
  return userLocation.value ? 'Kembali ke lokasi saya' : 'Tampilkan lokasi saya'
})

function refreshMapSize(): void {
  void nextTick(() => window.requestAnimationFrame(() => mapInstance.value?.invalidateSize({ animate: false })))
}

function handleMapReady(map: LeafletMapInstance): void {
  mapInstance.value = map
  if (hospitalPoints.value.length) fitHospitals()
}

function fitHospitals(): void {
  const points = filteredPoints.value
  if (!mapInstance.value || !points.length) return
  mapInstance.value.fitBounds(points.map((point) => [point.lat, point.lng]), { padding: [48, 48], maxZoom: 12 })
}

function zoomIn(): void { mapInstance.value?.zoomIn() }
function zoomOut(): void { mapInstance.value?.zoomOut() }

function toggleExpandedMap(): void {
  isExpanded.value = !isExpanded.value
  showLayers.value = false
  refreshMapSize()
}

function closeExpandedMap(): void {
  isExpanded.value = false
  showFilter.value = false
  showLayers.value = false
  showSearch.value = false
  selectedHospital.value = null
  refreshMapSize()
}

function toggleLayerMenu(): void {
  showLayers.value = !showLayers.value
  showFilter.value = false
  showSearch.value = false
}

function selectLayer(layer: MapLayer): void {
  selectedLayer.value = layer
  showLayers.value = false
}

function openFilter(): void {
  if (!isExpanded.value) {
    isExpanded.value = true
    refreshMapSize()
  }
  showLayers.value = false
  showSearch.value = false
  selectedHospital.value = null
  showFilter.value = true
}

function resetFilters(): void {
  urgencyFilter.value = 'all'
  equipmentFilter.value = 'all'
  cityFilter.value = 'all'
  typeFilter.value = 'all'
}

function applyFilters(): void {
  showFilter.value = false
  selectedHospital.value = null
  void nextTick(fitHospitals)
}

function selectHospital(hospital: Hospital): void {
  selectedHospital.value = hospital
  showFilter.value = false
  showLayers.value = false
  showSearch.value = false
  if (!isExpanded.value) {
    isExpanded.value = true
    refreshMapSize()
  }
}

function openHospitalDetail(): void {
  if (!selectedHospital.value) return
  void router.push({ name: 'RumahSakit', query: { detail: String(selectedHospital.value.id) } })
}

function toggleSearch(): void {
  if (!isExpanded.value) {
    isExpanded.value = true
    refreshMapSize()
  }
  showSearch.value = !showSearch.value
  showLayers.value = false
  showFilter.value = false
  selectedHospital.value = null
}

function closeSearch(): void {
  showSearch.value = false
}

function applySearch(): void {
  void nextTick(fitHospitals)
}

function openRoute(): void {
  if (!selectedHospital.value || !hasCoordinates(selectedHospital.value)) {
    showMapMessage('Koordinat faskes belum tersedia.')
    return
  }
  const destination = `${selectedHospital.value.latitude},${selectedHospital.value.longitude}`
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
  const routeWindow = window.open(routeUrl, '_blank', 'noopener,noreferrer')
  if (routeWindow) routeWindow.opener = null
}

function showMapMessage(message: string): void {
  mapMessage.value = message
  if (messageTimer) window.clearTimeout(messageTimer)
  messageTimer = window.setTimeout(() => { mapMessage.value = '' }, 3500)
}

function requestCurrentPosition(options: PositionOptions): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

function focusUserLocation(position: GeolocationPosition): void {
  const { latitude, longitude } = position.coords
  userLocation.value = [latitude, longitude]
  mapInstance.value?.setView(userLocation.value, 16, { animate: true })
  showMapMessage('Lokasi kamu berhasil ditemukan.')
}

function showLocationError(error: GeolocationPositionError): void {
  if (error.code === error.PERMISSION_DENIED) {
    showMapMessage('Izin lokasi diblokir. Buka Site settings lalu izinkan Location.')
  } else if (error.code === error.TIMEOUT) {
    showMapMessage('Lokasi belum ditemukan. Aktifkan Location Services Windows lalu coba lagi.')
  } else {
    showMapMessage('Lokasi tidak tersedia. Periksa Location Services pada perangkat.')
  }
}

async function locateUser(): Promise<void> {
  if (!navigator.geolocation) {
    showMapMessage('Browser ini tidak mendukung pencarian lokasi.')
    return
  }
  if (!window.isSecureContext) {
    showMapMessage('Akses lokasi memerlukan HTTPS atau localhost yang aman.')
    return
  }

  locating.value = true
  showLayers.value = false
  showFilter.value = false
  showSearch.value = false
  selectedHospital.value = null
  showMapMessage('Menunggu izin lokasi dari browser...')

  try {
    // Panggil geolocation langsung dari event klik agar prompt izin native
    // tetap dianggap sebagai tindakan pengguna oleh semua browser.
    const networkPosition = await requestCurrentPosition({
      enableHighAccuracy: false,
      timeout: 15_000,
      maximumAge: 300_000,
    })
    focusUserLocation(networkPosition)
  } catch (networkError) {
    const error = networkError as GeolocationPositionError
    if (error.code === error.PERMISSION_DENIED) {
      showLocationError(error)
      return
    }

    showMapMessage('Mencoba pencarian lokasi yang lebih akurat...')
    try {
      const precisePosition = await requestCurrentPosition({
        enableHighAccuracy: true,
        timeout: 12_000,
        maximumAge: 30_000,
      })
      focusUserLocation(precisePosition)
    } catch (preciseError) {
      showLocationError(preciseError as GeolocationPositionError)
    }
  } finally {
    locating.value = false
  }
}

async function loadHospitals(): Promise<void> {
  mapLoading.value = true
  try {
    await hospitalStore.fetchHospitals({ page: 1, per_page: 100 })
    await hydrateMissingCoordinates()
    await nextTick()
    fitHospitals()

    const lastPage = Math.min(hospitalStore.pagination.lastPage, 25)
    for (let page = 2; page <= lastPage; page += 1) {
      await hospitalStore.fetchHospitals({ page, per_page: 100 }, { append: true })
      await hydrateMissingCoordinates()
    }
    await nextTick()
    fitHospitals()
  } catch {
    showMapMessage(hospitalStore.error || 'Data faskes gagal dimuat.')
  } finally {
    mapLoading.value = false
  }
}

/**
 * Respons daftar company tidak selalu membawa latitude/longitude, sementara
 * endpoint detail membawanya. Lengkapi hanya row yang belum punya koordinat,
 * dengan concurrency kecil agar API tidak dibanjiri request sekaligus.
 */
async function hydrateMissingCoordinates(): Promise<void> {
  const queue = hospitals.value
    .filter((hospital) => !hasCoordinates(hospital) && !detailHydrationAttempted.has(hospital.id))
    .map((hospital) => hospital.id)

  queue.forEach((id) => detailHydrationAttempted.add(id))
  if (!queue.length) return

  const workerCount = Math.min(5, queue.length)
  await Promise.all(Array.from({ length: workerCount }, async () => {
    while (queue.length) {
      const id = queue.shift()
      if (id === undefined) return
      try {
        await hospitalStore.fetchHospitalById(id)
      } catch {
        // Satu detail gagal tidak boleh menggagalkan marker rumah sakit lainnya.
      }
    }
  }))
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && isExpanded.value) closeExpandedMap()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  void loadHospitals()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  if (messageTimer) window.clearTimeout(messageTimer)
})
</script>

<style scoped>
.hospital-map {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  height: 430px;
  border: 1px solid #e1e8ed;
  border-radius: 14px;
  background: #edf3f5;
}

.hospital-map--expanded {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1061;
  width: min(1120px, calc(100vw - 48px));
  height: min(680px, calc(100vh - 80px));
  transform: translate(-50%, -50%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.28);
}

.hospital-map__backdrop {
  position: fixed;
  inset: 0;
  z-index: 1060;
  background: rgba(15, 23, 42, 0.38);
  backdrop-filter: blur(2px);
}

.hospital-map :deep(.leaflet-container) {
  width: 100%;
  height: 100%;
  font-family: inherit;
}

.hospital-map__legend,
.hospital-map__layer-menu,
.hospital-map__filter,
.hospital-map__detail {
  color: #263442;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 8px 24px rgba(31, 41, 55, 0.16);
}

.hospital-map__legend {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 500;
  display: grid;
  gap: 6px;
  border-radius: 12px;
  padding: 11px 13px;
  font-size: 11px;
}

.hospital-map__legend strong { margin-bottom: 1px; font-size: 11.5px; }
.hospital-map__legend span { display: flex; align-items: center; gap: 7px; color: #52606d; }
.urgency-dot { display: inline-block; flex: 0 0 auto; width: 9px; height: 9px; border-radius: 50%; }
.urgency-dot--fresh { background: #14b88a; }
.urgency-dot--attention { background: #f59e0b; }
.urgency-dot--overdue { background: #ef4444; }

.hospital-map__top-actions {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 501;
  display: flex;
  gap: 8px;
}

.map-action,
.hospital-map__controls button {
  border: 1px solid rgba(220, 228, 234, 0.9);
  color: #304250;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 4px 14px rgba(31, 41, 55, 0.16);
  cursor: pointer;
}

.map-action { display: flex; align-items: center; justify-content: center; gap: 8px; height: 38px; border-radius: 12px; }
.map-action--wide { min-width: 132px; padding: 0 12px; font-size: 11.5px; font-weight: 700; }
.map-action--square { position: relative; width: 38px; padding: 0; }
.map-action--square b { position: absolute; top: -5px; right: -5px; display: grid; place-items: center; min-width: 17px; height: 17px; border-radius: 9px; padding: 0 4px; color: #fff; background: #ef4444; font-size: 9px; }

.hospital-map__search {
  position: absolute;
  top: 58px;
  right: 12px;
  z-index: 504;
  display: grid;
  grid-template-columns: auto minmax(180px, 1fr) auto auto;
  align-items: center;
  gap: 9px;
  width: min(440px, calc(100% - 24px));
  min-height: 44px;
  border: 1px solid #dfe7ec;
  border-radius: 13px;
  padding: 7px 8px 7px 12px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 8px 24px rgba(31, 41, 55, 0.18);
}

.hospital-map__search input {
  min-width: 0;
  border: 0;
  outline: 0;
  color: #263442;
  background: transparent;
  font-size: 12px;
}

.hospital-map__search input::placeholder { color: #9aa6af; }
.hospital-map__search > span { color: #71808c; font-size: 10px; font-weight: 700; white-space: nowrap; }
.hospital-map__search button { display: grid; place-items: center; width: 30px; height: 30px; border: 0; border-radius: 8px; padding: 0; color: #7d8994; background: #f4f6f8; cursor: pointer; }

.hospital-map__layer-menu {
  position: absolute;
  top: 58px;
  right: 58px;
  z-index: 502;
  width: 250px;
  border-radius: 14px;
  padding: 12px;
}

.hospital-map__layer-menu > small { display: block; margin: 0 4px 7px; color: #82909c; font-size: 10px; font-weight: 700; }
.hospital-map__layer-menu button { display: grid; grid-template-columns: 28px 1fr 20px; align-items: center; width: 100%; border: 1px solid transparent; border-radius: 10px; padding: 9px; color: #647480; background: transparent; text-align: left; cursor: pointer; }
.hospital-map__layer-menu button.active { border-color: var(--app-primary, #18a6e4); color: var(--app-primary-dark, #0e7490); background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.16); }
.hospital-map__layer-menu button > span { display: grid; gap: 1px; }
.hospital-map__layer-menu button strong { font-size: 11.5px; }
.hospital-map__layer-menu button small { color: #9ba6af; font-size: 9.5px; }
.map-layer-symbol { display: block; flex: 0 0 auto; width: 23px; height: 23px; color: currentColor; object-fit: contain; }
.map-action--wide .map-layer-symbol { width: 20px; height: 20px; }
.map-layer-symbol--satellite { padding: 1px; }

.hospital-map__controls { position: absolute; right: 12px; bottom: 12px; z-index: 500; display: grid; gap: 7px; }
.hospital-map__controls button { position: relative; display: grid; place-items: center; width: 38px; height: 38px; border-radius: 11px; padding: 0; }
.hospital-map__controls button:hover { color: var(--app-primary, #18a6e4); }
.hospital-map__controls button:disabled { cursor: wait; opacity: .82; }
.hospital-map__controls button.primary { border-color: var(--app-primary, #18a6e4); color: #fff; background: var(--app-primary, #18a6e4); }
.map-zoom-icon { width: 24px; height: 24px; fill: none; stroke: #fff; stroke-width: 3.4; stroke-linecap: round; }
.map-expand-icon { width: 22px; height: 22px; fill: none; stroke: var(--app-primary-dark, #0e7490); stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round; }
.hospital-map__controls button.locating :deep(svg) { animation: map-spin 1s linear infinite; }
.hospital-map__controls button i { position: absolute; top: 5px; right: 5px; width: 7px; height: 7px; border: 2px solid #fff; border-radius: 50%; background: #14b88a; }
.map-control-tooltip { position: absolute; top: 50%; right: calc(100% + 10px); z-index: 3; width: max-content; max-width: 160px; border-radius: 7px; padding: 6px 9px; color: #fff; background: rgba(31, 49, 64, .94); box-shadow: 0 4px 12px rgba(15,23,42,.18); font-size: 9.5px; font-weight: 650; line-height: 1.25; opacity: 0; pointer-events: none; transform: translate(5px,-50%); transition: opacity .16s ease, transform .16s ease; }
.map-control-tooltip::after { position: absolute; top: 50%; left: 100%; border-width: 5px 0 5px 5px; border-style: solid; border-color: transparent transparent transparent rgba(31,49,64,.94); content: ''; transform: translateY(-50%); }
.location-control:hover .map-control-tooltip,.location-control:focus-visible .map-control-tooltip { opacity: 1; transform: translate(0,-50%); }
.hospital-map:not(.hospital-map--expanded) .hospital-map__controls button:nth-child(n + 3) { display: none; }

.hospital-marker { display: grid; place-items: center; width: 42px; height: 42px; border: 4px solid #fff; border-radius: 50%; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.3); }
.hospital-marker--fresh { background: #14b88a; }
.hospital-marker--attention { background: #f59e0b; }
.hospital-marker--overdue { background: #ef4444; }
.hospital-marker__plus { display: grid; place-items: center; width: 20px; height: 20px; border-radius: 4px; background: #fff; }
.hospital-marker__plus svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 3.6; stroke-linecap: round; }
.hospital-marker--fresh .hospital-marker__plus { color: #14b88a; }
.hospital-marker--attention .hospital-marker__plus { color: #f59e0b; }
.hospital-marker--overdue .hospital-marker__plus { color: #ef4444; }
:deep(.hospital-marker-shell) { border: 0; background: transparent; }

.hospital-map__state { position: absolute; inset: 0; z-index: 490; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 24px; color: #6b7a86; background: rgba(247, 250, 252, 0.88); font-size: 12px; text-align: center; }
.hospital-map__message { position: absolute; left: 50%; bottom: 14px; z-index: 510; max-width: calc(100% - 130px); border-radius: 9px; padding: 8px 12px; color: #fff; background: rgba(30, 41, 59, 0.9); font-size: 11px; transform: translateX(-50%); }

.hospital-map__filter {
  position: absolute;
  top: 58px;
  right: 58px;
  bottom: 12px;
  z-index: 505;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  width: min(420px, calc(100% - 82px));
  overflow: hidden;
  border-radius: 16px;
}

.hospital-map__filter header { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 10px; border-bottom: 1px solid #edf1f4; padding: 14px 16px; }
.hospital-map__filter header > div { display: grid; gap: 2px; }
.hospital-map__filter header small { color: var(--app-primary, #18a6e4); font-size: 9px; font-weight: 800; letter-spacing: 0.08em; }
.hospital-map__filter header strong { font-size: 15px; }
.filter-reset,.filter-close { border: 0; background: transparent; cursor: pointer; }
.filter-reset { color: #e15b64; font-size: 11px; font-weight: 700; }
.filter-close { display: grid; place-items: center; width: 28px; height: 28px; padding: 0; color: #82909c; }
.filter-body { display: grid; align-content: start; gap: 16px; overflow-y: auto; padding: 14px 16px; }
.filter-body fieldset { min-width: 0; margin: 0; border: 0; padding: 0; }
.filter-body legend { margin-bottom: 8px; color: #334155; font-size: 11.5px; font-weight: 700; }
.filter-chips { display: flex; flex-wrap: wrap; gap: 7px; }
.filter-chips button { display: inline-flex; align-items: center; gap: 6px; min-height: 32px; border: 1px solid #e1e7ed; border-radius: 17px; padding: 6px 11px; color: #647180; background: #f5f7f9; font-size: 10px; cursor: pointer; }
.filter-chips button.active { border-color: var(--app-primary, #18a6e4); color: var(--app-primary-dark, #0e7490); background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.16); font-weight: 700; }
.hospital-map__filter footer { border-top: 1px solid #edf1f4; padding: 12px 16px; }
.hospital-map__filter footer button,.detail-button { width: 100%; border: 0; border-radius: 10px; padding: 10px 14px; color: #fff; background: var(--app-primary, #18a6e4); font-size: 11.5px; font-weight: 700; cursor: pointer; }
.detail-button { font-size: 12.5px; line-height: 1.25; }

.hospital-map__detail { position: absolute; left: 16px; bottom: 16px; z-index: 503; width: min(600px, calc(100% - 94px)); min-height: 232px; border-radius: 17px; padding: 18px; }
.detail-close { position: absolute; top: 10px; right: 10px; display: grid; place-items: center; width: 28px; height: 28px; border: 0; color: #8b98a3; background: transparent; cursor: pointer; }
.detail-heading { display: flex; align-items: center; gap: 13px; padding-right: 30px; }
.detail-heading > span { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 12px; color: var(--app-primary-dark, #0e7490); background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.16); }
.detail-heading > div { display: grid; gap: 3px; min-width: 0; }
.detail-heading strong { overflow: hidden; color: #243240; font-size: 15.5px; font-weight: 700; line-height: 1.25; text-overflow: ellipsis; white-space: nowrap; }
.detail-heading small { color: #768591; font-size: 11px; font-weight: 500; line-height: 1.3; }
.detail-badges { display: flex; justify-content: space-between; gap: 8px; margin: 12px 0; }
.detail-badges > span { display: inline-flex; align-items: center; gap: 5px; border-radius: 12px; padding: 4px 8px; font-size: 10px; font-weight: 650; line-height: 1.2; }
.detail-badges .grade { color: #15966e; background: #e3f8f0; }
.detail-badges .urgency { color: #6d7882; background: #f3f5f7; }
.detail-location { display: flex; align-items: center; gap: 7px; min-width: 0; margin: -2px 0 12px; color: #71808c; }
.detail-location span { overflow: hidden; font-size: 10.5px; font-weight: 500; text-overflow: ellipsis; white-space: nowrap; }
.detail-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-bottom: 12px; }
.detail-metrics span { display: grid; gap: 3px; border: 1px solid #e7ebef; border-radius: 10px; padding: 10px 8px; text-align: center; }
.detail-metrics strong { color: var(--app-primary, #18a6e4); font-size: 16px; font-weight: 800; line-height: 1.2; }
.detail-metrics small { color: #667887; font-size: 10.5px; font-weight: 650; line-height: 1.25; }
.detail-actions { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 9px; }
.detail-route { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-width: 126px; border: 1px solid var(--app-primary, #18a6e4); border-radius: 10px; padding: 9px 12px; color: var(--app-primary-dark, #0e7490); background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.16); font-size: 11px; font-weight: 700; cursor: pointer; }

.hospital-map__coordinate-note { position: absolute; left: 12px; bottom: 12px; z-index: 499; border-radius: 8px; padding: 6px 9px; color: #64748b; background: rgba(255,255,255,.92); font-size: 9px; box-shadow: 0 3px 10px rgba(15,23,42,.12); }
.hospital-map__detail ~ .hospital-map__coordinate-note { display: none; }

/* Overlay peta tetap memakai palet terang, termasuk saat halaman beralih ke dark mode. */
:global(body.dark-only .hospital-map .hospital-marker--fresh .hospital-marker__plus) { color: #14b88a !important; }
:global(body.dark-only .hospital-map .hospital-marker--attention .hospital-marker__plus) { color: #f59e0b !important; }
:global(body.dark-only .hospital-map .hospital-marker--overdue .hospital-marker__plus) { color: #ef4444 !important; }
:global(body.dark-only .hospital-map .hospital-map__legend span) { color: #52606d !important; }
:global(body.dark-only .hospital-map .map-action--wide span) { color: #304250 !important; }
:global(body.dark-only .hospital-map .hospital-map__layer-menu > small) { color: #82909c !important; }
:global(body.dark-only .hospital-map .hospital-map__layer-menu button > span) { color: inherit !important; }
:global(body.dark-only .hospital-map .hospital-map__layer-menu button small) { color: #9ba6af !important; }
:global(body.dark-only .hospital-map .hospital-map__search > span),
:global(body.dark-only .hospital-map .detail-location span) { color: #71808c !important; }
:global(body.dark-only .hospital-map .hospital-map__filter header small) { color: var(--app-primary, #18a6e4) !important; }
:global(body.dark-only .hospital-map .detail-heading > span),
:global(body.dark-only .hospital-map .detail-route span) { color: var(--app-primary-dark, #0e7490) !important; }
:global(body.dark-only .hospital-map .detail-heading small) { color: #768591 !important; }
:global(body.dark-only .hospital-map .detail-badges .grade) { color: #15966e !important; }
:global(body.dark-only .hospital-map .detail-badges .urgency) { color: #6d7882 !important; }
:global(body.dark-only .hospital-map .detail-metrics > span) { color: #263442 !important; }
:global(body.dark-only .hospital-map .detail-metrics small) { color: #667887 !important; }
:global(body.dark-only .hospital-map .hospital-map__coordinate-note) { color: #64748b !important; }
:global(body.dark-only .hospital-map .map-control-tooltip) { color: #fff !important; }

@keyframes map-spin { to { transform: rotate(360deg); } }

@media (max-width: 640px) {
  .hospital-map--expanded { width: calc(100vw - 24px); height: min(680px, calc(100vh - 48px)); }
  .hospital-map__legend { top: 10px; left: 10px; padding: 9px 10px; }
  .hospital-map__top-actions { top: 10px; right: 10px; }
  .map-action--wide { min-width: 42px; width: 42px; padding: 0; }
  .map-action--wide span { display: none; }
  .hospital-map__layer-menu { top: 56px; right: 10px; }
  .hospital-map__search { top: 56px; right: 10px; width: calc(100% - 20px); }
  .hospital-map__filter { top: 56px; right: 10px; bottom: 10px; width: calc(100% - 20px); }
  .hospital-map__detail { left: 10px; bottom: 10px; width: calc(100% - 66px); }
  .hospital-map:not(.hospital-map--expanded) .hospital-map__legend { display: none; }
}

@media (max-width: 480px) {
  .detail-actions { grid-template-columns: 1fr; }
  .detail-route { min-width: 0; }
}
</style>
