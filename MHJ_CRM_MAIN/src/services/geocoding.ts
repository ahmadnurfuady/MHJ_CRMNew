import { api } from '@/services/api'
import { getUserErrorMessage } from '@/utils/errorParser'

interface NominatimReverseResult {
  display_name?: string
  address?: {
    country?: string
    state?: string
    city?: string
    town?: string
    municipality?: string
    county?: string
    village?: string
    postcode?: string
  }
}

interface BigDataCloudReverseResult {
  locality?: string
  city?: string
  principalSubdivision?: string
  postcode?: string
  countryName?: string
}

export interface ReverseGeocodeLocation {
  address: string
  country: string
  province: string
  city: string
  posCode: string
}

export interface AddressSearchResult extends ReverseGeocodeLocation {
  latitude: number
  longitude: number
  /** Nama tempat terpisah dari `address` (alamat lengkap) — hanya diisi oleh `searchHealthFacilities`. */
  name?: string
  facilityType?: string
  searchScope?: 'city' | 'province' | 'outside'
}

export interface HealthFacilitySearchOptions {
  city?: string
  province?: string
  includeOutsideProvince?: boolean
}

function uniqueAddressParts(parts: Array<string | undefined>): string {
  const seen = new Set<string>()

  return parts
    .map((part) => part?.trim())
    .filter((part): part is string => {
      if (!part) return false
      const key = part.toLocaleLowerCase('id-ID')
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    .join(', ')
}

async function reverseWithOpenStreetMap(
  latitude: number,
  longitude: number
): Promise<ReverseGeocodeLocation> {
  const params = new URLSearchParams({
    format: 'jsonv2',
    lat: String(latitude),
    lon: String(longitude),
    zoom: '18',
    addressdetails: '1',
    'accept-language': 'id'
  })
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params.toString()}`, {
    headers: { Accept: 'application/json' }
  })
  if (!response.ok) throw new Error('OpenStreetMap reverse geocoding failed')

  const result = (await response.json()) as NominatimReverseResult
  const address = result.address
  return {
    address: result.display_name?.trim() ?? '',
    country: address?.country?.trim() ?? '',
    province: address?.state?.trim() ?? '',
    city: (
      address?.city ||
      address?.town ||
      address?.municipality ||
      address?.county ||
      address?.village ||
      ''
    ).trim(),
    posCode: address?.postcode?.trim() ?? '',
  }
}

async function reverseWithBigDataCloud(
  latitude: number,
  longitude: number
): Promise<ReverseGeocodeLocation> {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    localityLanguage: 'id'
  })
  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?${params.toString()}`
  )
  if (!response.ok) throw new Error('BigDataCloud reverse geocoding failed')

  const result = (await response.json()) as BigDataCloudReverseResult
  return {
    address: uniqueAddressParts([
      result.locality,
      result.city,
      result.principalSubdivision,
      result.postcode,
      result.countryName
    ]),
    country: result.countryName?.trim() ?? '',
    province: result.principalSubdivision?.trim() ?? '',
    city: (result.city || result.locality || '').trim(),
    posCode: result.postcode?.trim() ?? '',
  }
}


/*
 * NONAKTIF — diganti pencarian lewat backend (lihat `searchHealthFacilities` di bawah)
 * yang memanggil endpoint `GET /geocoding/health-facilities` (HealthFacilitySearchController
 * di siapcrmapi). Logika filtering/scope kota-provinsi di bawah ini sudah dipindahkan &
 * direplikasi di backend (HealthFacilityResultMapper). Dipertahankan sebagai referensi/
 * fallback, jangan dihapus.
 *
const HEALTH_AMENITY_TYPES = new Set([
  'hospital',
  'clinic',
  'doctors',
  'dentist',
  'pharmacy',
  'laboratory'
])

const HEALTHCARE_SEARCH_TERMS = [
  '',
  'hospital',
  'clinic',
  'pharmacy',
  'dentist',
  'laboratory',
  'doctor',
  'health centre'
]

function isNominatimHealthFacility(result: NominatimSearchResult): boolean {
  const category = result.category?.toLocaleLowerCase('id-ID') ?? ''
  const type = result.type?.toLocaleLowerCase('id-ID') ?? ''
  const amenity = result.extratags?.amenity?.toLocaleLowerCase('id-ID') ?? ''
  const healthcare = result.extratags?.healthcare?.toLocaleLowerCase('id-ID') ?? ''

  return (
    category === 'healthcare' ||
    Boolean(healthcare) ||
    (category === 'amenity' && HEALTH_AMENITY_TYPES.has(type)) ||
    HEALTH_AMENITY_TYPES.has(amenity)
  )
}

function facilityNameContains(result: NominatimSearchResult, query: string): boolean {
  const facilityName = (result.name || result.display_name?.split(',')[0] || '')
    .trim()
    .toLocaleLowerCase('id-ID')
  return facilityName.includes(query.trim().toLocaleLowerCase('id-ID'))
}

function normalizeAreaName(value: string | undefined): string {
  return (value ?? '')
    .toLocaleLowerCase('id-ID')
    .replace(/\b(kota|kabupaten|kab\.?|provinsi)\b/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function sameArea(left: string | undefined, right: string | undefined): boolean {
  const normalizedLeft = normalizeAreaName(left)
  const normalizedRight = normalizeAreaName(right)
  if (!normalizedLeft || !normalizedRight) return false
  return normalizedLeft === normalizedRight ||
    normalizedLeft.includes(normalizedRight) ||
    normalizedRight.includes(normalizedLeft)
}

function resultScope(
  result: NominatimSearchResult,
  options: HealthFacilitySearchOptions
): 'city' | 'province' | 'outside' {
  const address = result.address
  const resultCity = address?.city || address?.town || address?.municipality || address?.county
  if (sameArea(resultCity, options.city)) return 'city'
  if (sameArea(address?.state, options.province)) return 'province'
  return 'outside'
}

async function fetchNominatimFacilityGroup(
  query: string,
  facilityTerm: string,
  options: HealthFacilitySearchOptions
): Promise<NominatimSearchResult[]> {
  const area = options.includeOutsideProvince ? '' : options.province?.trim() ?? ''
  const params = new URLSearchParams({
    format: 'jsonv2',
    q: [facilityTerm, query, area, 'Indonesia'].filter(Boolean).join(' '),
    addressdetails: '1',
    extratags: '1',
    namedetails: '1',
    limit: '40',
    countrycodes: 'id',
    'accept-language': 'id'
  })
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: { Accept: 'application/json' }
  })
  if (!response.ok) throw new Error('Pencarian fasilitas kesehatan gagal.')
  return (await response.json()) as NominatimSearchResult[]
}

async function fetchNominatimHealthFacilities(
  query: string,
  options: HealthFacilitySearchOptions
): Promise<AddressSearchResult[]> {
  const responses = await Promise.allSettled(
    HEALTHCARE_SEARCH_TERMS.map((term) => fetchNominatimFacilityGroup(query, term, options))
  )
  const successfulResponses = responses.filter(
    (response): response is PromiseFulfilledResult<NominatimSearchResult[]> =>
      response.status === 'fulfilled'
  )
  if (!successfulResponses.length) throw new Error('Pencarian fasilitas kesehatan gagal.')

  return successfulResponses
    .flatMap((response) => response.value)
    .filter((result) => isNominatimHealthFacility(result))
    .filter((result) => facilityNameContains(result, query))
    .filter((result) => result.lat && result.lon && result.display_name)
    .map((result) => {
      const address = result.address
      const latitude = Number(result.lat)
      const longitude = Number(result.lon)
      return {
        address: result.display_name?.trim() ?? result.name?.trim() ?? '',
        latitude,
        longitude,
        country: address?.country?.trim() ?? 'Indonesia',
        province: address?.state?.trim() ?? '',
        city: (
          address?.city ||
          address?.town ||
          address?.municipality ||
          address?.county ||
          address?.village ||
          ''
        ).trim(),
        posCode: address?.postcode?.trim() ?? '',
        facilityType: (result.extratags?.healthcare || result.extratags?.amenity || result.type || '')
          .trim(),
        searchScope: resultScope(result, options)
      }
    })
    .filter(
      (result) =>
        options.includeOutsideProvince || !options.province || result.searchScope !== 'outside'
    )
    .sort((left, right) => {
      const rank = { city: 0, province: 1, outside: 2 }
      return rank[left.searchScope ?? 'outside'] - rank[right.searchScope ?? 'outside']
    })
}
*/

interface HealthFacilityApiResult {
  name: string
  display_address: string
  latitude: number
  longitude: number
  country: string
  province: string | null
  city: string | null
  postal_code: string | null
  facility_type: string
  facility_type_label: string
  scope: 'city' | 'province' | 'outside'
  scope_label: string
  provider: string
}

interface HealthFacilitySearchApiResponse {
  success: boolean
  message: string
  data: {
    query: string
    origin: Record<string, unknown>
    include_outside_province: boolean
    total: number
    results: HealthFacilityApiResult[]
  } | null
}

/**
 * Mencari seluruh kategori Faskes lewat endpoint backend `GET /geocoding/health-facilities`
 * (siapcrmapi: `App\Http\Controllers\HealthFacilitySearchController`). Kota/provinsi
 * pengguna (hasil GPS atau isian form) dikirim sebagai prioritas; backend yang menangani
 * panggilan ke provider OSM, cache, rate-limit, dan filtering scope kota/provinsi.
 */
export async function searchHealthFacilities(
  query: string,
  options: HealthFacilitySearchOptions = {}
): Promise<AddressSearchResult[]> {
  const trimmed = query.trim()
  if (!trimmed) return []

  const params: Record<string, string> = { q: trimmed }
  if (options.city?.trim()) params.city = options.city.trim()
  if (options.province?.trim()) params.province = options.province.trim()
  if (options.includeOutsideProvince) params.include_outside_province = '1'

  const response = await api.getbydata<HealthFacilitySearchApiResponse>(
    'geocoding/health-facilities',
    params
  )
  const results = response.data.data?.results ?? []

  return results.map((result) => ({
    address: result.display_address?.trim() || result.name?.trim() || '',
    latitude: result.latitude,
    longitude: result.longitude,
    name: result.name?.trim() || undefined,
    country: result.country?.trim() || 'Indonesia',
    province: result.province?.trim() ?? '',
    city: result.city?.trim() ?? '',
    posCode: result.postal_code?.trim() ?? '',
    facilityType: result.facility_type,
    searchScope: result.scope
  }))
}

interface AddressSearchApiResult {
  display_address: string
  latitude: number
  longitude: number
  country: string | null
  province: string | null
  city: string | null
  postal_code: string | null
}

interface AddressSearchApiResponse {
  success: boolean
  message: string
  data: {
    query: string
    total: number
    results: AddressSearchApiResult[]
  } | null
}

/**
 * Mencari kandidat lokasi (nama tempat/alamat apa saja, tanpa filter kategori faskes)
 * lengkap dengan koordinatnya lewat endpoint backend `GET /geocoding/address-search`
 * (siapcrmapi: `App\Http\Controllers\AddressSearchController`). Dipakai form Kontak dan
 * form lain yang butuh cari alamat umum. Untuk pencarian yang dibatasi ke faskes
 * (hospital/clinic/pharmacy/dll) lihat `searchHealthFacilities`.
 */
export async function searchAddress(query: string): Promise<AddressSearchResult[]> {
  const trimmed = query.trim()
  if (!trimmed) return []

  const response = await api.getbydata<AddressSearchApiResponse>(
    'geocoding/address-search',
    { q: trimmed }
  )
  const results = response.data.data?.results ?? []

  return results.map((result) => ({
    address: result.display_address?.trim() || '',
    latitude: result.latitude,
    longitude: result.longitude,
    country: result.country?.trim() || '',
    province: result.province?.trim() || '',
    city: result.city?.trim() || '',
    posCode: result.postal_code?.trim() || ''
  }))
}

// ---------------------------------------------------------------------------
// Endpoint baru: /api/geo/* (GeoSearchController)
// ---------------------------------------------------------------------------

export interface GeoReverseResult {
  alamat: string | null
  kelurahan: string | null
  kecamatan: string | null
  kota: string | null
  provinsi: string | null
  kode_pos: string | null
  negara: string | null
}

export interface GeoFaskesItem {
  nama: string | null
  lat: number
  lon: number
  alamat: string | null
  tipe: string | null
  telepon: string | null
  website: string | null
}

export interface GeoSearchNearbyResult {
  nama: string | null
  lat: number
  lon: number
  alamat: string | null
  kota: string | null
  provinsi: string | null
}

async function reverseViaBackend(
  latitude: number,
  longitude: number
): Promise<ReverseGeocodeLocation> {
  const response = await api.getbydata<GeoReverseResult>('geo/reverse', {
    lat: latitude,
    lon: longitude
  })
  const data = response.data
  return {
    address: data.alamat ?? '',
    country: data.negara ?? 'Indonesia',
    province: data.provinsi ?? '',
    city: data.kota ?? '',
    posCode: data.kode_pos ?? ''
  }
}

export async function searchNearbyFaskes(
  latitude: number,
  longitude: number,
  options: { radius?: number; types?: string[]; limit?: number } = {}
): Promise<GeoFaskesItem[]> {
  const params: Record<string, string | number> = {
    lat: latitude,
    lon: longitude
  }
  if (options.radius) params.radius = options.radius
  if (options.types?.length) params.types = options.types.join(',')
  if (options.limit) params.limit = options.limit

  const response = await api.getbydata<{
    lokasi: GeoReverseResult | null
    radius: number
    jumlah: number
    data: GeoFaskesItem[]
  }>('geo/faskes', params)
  return response.data.data ?? []
}

export async function searchNearbyPlaces(
  latitude: number,
  longitude: number,
  query: string,
  options: { radiusKm?: number; limit?: number } = {}
): Promise<{ sumber: string; data: GeoSearchNearbyResult[] }> {
  const params: Record<string, string | number> = {
    lat: latitude,
    lon: longitude,
    q: query
  }
  if (options.radiusKm) params.radius_km = options.radiusKm
  if (options.limit) params.limit = options.limit

  const response = await api.getbydata<{
    lokasi: GeoReverseResult | null
    q: string
    radius_km: number
    sumber: string
    jumlah: number
    data: GeoSearchNearbyResult[]
  }>('geo/cari', params)
  return {
    sumber: response.data.sumber ?? '',
    data: response.data.data ?? []
  }
}

/** Mengubah koordinat GPS menjadi alamat sekaligus bagian wilayah terstruktur. */
export async function reverseGeocodeLocation(
  latitude: number,
  longitude: number
): Promise<ReverseGeocodeLocation> {
  try {
    const location = await reverseViaBackend(latitude, longitude)
    if (location.address) return location
  } catch {
    // Backend tidak tersedia — fallback ke provider langsung.
  }

  try {
    const location = await reverseWithOpenStreetMap(latitude, longitude)
    if (location.address) return location
  } catch {
    // Provider cadangan menjaga fitur tetap berjalan bila provider utama tidak tersedia.
  }

  try {
    const location = await reverseWithBigDataCloud(latitude, longitude)
    if (location.address) return location
  } catch {
    // Pesan yang ditampilkan ke pengguna diseragamkan di bawah.
  }

  throw new Error(
    'Lokasi ditemukan, tetapi alamat lengkap gagal dimuat. Silakan isi alamat secara manual.'
  )
}

/** Mengubah koordinat GPS menjadi alamat manusiawi selengkap yang tersedia dari provider. */
export async function reverseGeocodeAddress(
  latitude: number,
  longitude: number
): Promise<string> {
  return (await reverseGeocodeLocation(latitude, longitude)).address
}

export function getCurrentPosition(): Promise<GeolocationPosition> {
  if (!navigator.geolocation) {
    return Promise.reject(new Error('Browser ini tidak mendukung GPS.'))
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    })
  })
}

export function geolocationErrorMessage(error: unknown): string {
  if (typeof error === 'object' && error) {
    const code = Number((error as { code?: number }).code)
    const messages: Record<number, string> = {
      1: 'Izin lokasi ditolak. Aktifkan izin lokasi pada browser.',
      2: 'Lokasi tidak tersedia. Periksa GPS atau koneksi perangkat.',
      3: 'Pengambilan lokasi terlalu lama. Silakan coba lagi.'
    }
    if (messages[code]) return messages[code]
  }

  return getUserErrorMessage(error, 'Lokasi gagal diambil.')
}
