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

interface NominatimSearchResult {
  display_name?: string
  name?: string
  lat?: string
  lon?: string
  category?: string
  type?: string
  extratags?: Record<string, string | undefined>
  address?: NominatimReverseResult['address']
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

/**
 * OpenStreetMap tidak mengenali singkatan "RS/RSU/RSUD" sebagai "Rumah Sakit", sehingga
 * pencarian dengan singkatan sering tidak menemukan apa-apa atau malah salah sasaran.
 */
function expandHospitalAbbreviation(query: string): string | null {
  const match = query.match(/^(rsud|rsu|rs)\b(.*)$/i)
  if (!match) return null

  switch (match[1]!.toLowerCase()) {
    case 'rsud':
      return `Rumah Sakit Umum Daerah${match[2]}`
    case 'rsu':
      return `Rumah Sakit Umum${match[2]}`
    default:
      return `Rumah Sakit${match[2]}`
  }
}

/**
 * Alamat lengkap ala Indonesia ("Jl. KH. ... No.20, Kec. ..., ... 55122") sering membuat
 * pencarian teks bebas di Nominatim gagal total karena gabungan prefiks jalan, singkatan
 * wilayah administratif, dan kode pos di akhir tanpa koma. Menghapus elemen-elemen itu
 * dan mencoba ulang jauh lebih sering berhasil menemukan jalannya.
 */
function normalizeAddressForSearch(query: string): string | null {
  const simplified = query
    .replace(/^\s*(jl\.?|jalan)\s+/i, '')
    .replace(/\b(kec\.?|kecamatan)\s+/gi, '')
    .replace(/\b(kel\.?|kelurahan)\s+/gi, '')
    .replace(/\b(kab\.?|kabupaten)\s+/gi, '')
    .replace(/,?\s*\d{5}\s*$/, '')
    .replace(/\s+,/g, ',')
    .replace(/,\s*,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .replace(/^,\s*/, '')
    .replace(/,\s*$/, '')
    .trim()

  return simplified && simplified !== query.trim() ? simplified : null
}

async function fetchNominatimSearch(query: string): Promise<NominatimSearchResult[]> {
  const params = new URLSearchParams({
    format: 'jsonv2',
    q: query,
    addressdetails: '1',
    limit: '5',
    countrycodes: 'id',
    'accept-language': 'id'
  })
  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: { Accept: 'application/json' }
  })
  if (!response.ok) throw new Error('Pencarian lokasi gagal.')
  return (await response.json()) as NominatimSearchResult[]
}

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

/** Mencari seluruh kategori Faskes, dengan kota/provinsi pengguna sebagai prioritas. */
export async function searchHealthFacilities(
  query: string,
  options: HealthFacilitySearchOptions = {}
): Promise<AddressSearchResult[]> {
  const trimmed = query.trim()
  if (!trimmed) return []
  return fetchNominatimHealthFacilities(trimmed, options)
}

/** Mencari kandidat lokasi (nama faskes/alamat) lengkap dengan koordinatnya lewat OpenStreetMap. */
export async function searchAddress(query: string): Promise<AddressSearchResult[]> {
  const trimmed = query.trim()
  if (!trimmed) return []

  const expandedQuery = expandHospitalAbbreviation(trimmed)
  const primaryQuery = expandedQuery ?? trimmed

  const candidates = [primaryQuery]
  if (expandedQuery) candidates.push(trimmed)
  for (const candidate of [primaryQuery, trimmed]) {
    const normalized = normalizeAddressForSearch(candidate)
    if (normalized && !candidates.includes(normalized)) candidates.push(normalized)
  }

  let results: NominatimSearchResult[] = []
  for (const candidate of candidates) {
    results = await fetchNominatimSearch(candidate)
    if (results.length > 0) break
  }

  return results
    .filter((result) => result.lat && result.lon && result.display_name)
    .map((result) => {
      const address = result.address
      return {
        address: result.display_name?.trim() ?? '',
        latitude: Number(result.lat),
        longitude: Number(result.lon),
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
        posCode: address?.postcode?.trim() ?? ''
      }
    })
}

/** Mengubah koordinat GPS menjadi alamat sekaligus bagian wilayah terstruktur. */
export async function reverseGeocodeLocation(
  latitude: number,
  longitude: number
): Promise<ReverseGeocodeLocation> {
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

  return error instanceof Error ? error.message : 'Lokasi gagal diambil.'
}
