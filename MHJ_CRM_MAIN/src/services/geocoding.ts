interface NominatimReverseResult {
  display_name?: string
}

interface BigDataCloudReverseResult {
  locality?: string
  city?: string
  principalSubdivision?: string
  postcode?: string
  countryName?: string
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

async function reverseWithOpenStreetMap(latitude: number, longitude: number): Promise<string> {
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
  return result.display_name?.trim() ?? ''
}

async function reverseWithBigDataCloud(latitude: number, longitude: number): Promise<string> {
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
  return uniqueAddressParts([
    result.locality,
    result.city,
    result.principalSubdivision,
    result.postcode,
    result.countryName
  ])
}

/** Mengubah koordinat GPS menjadi alamat manusiawi selengkap yang tersedia dari provider. */
export async function reverseGeocodeAddress(
  latitude: number,
  longitude: number
): Promise<string> {
  try {
    const fullAddress = await reverseWithOpenStreetMap(latitude, longitude)
    if (fullAddress) return fullAddress
  } catch {
    // Provider cadangan menjaga fitur tetap berjalan bila provider utama tidak tersedia.
  }

  try {
    const fallbackAddress = await reverseWithBigDataCloud(latitude, longitude)
    if (fallbackAddress) return fallbackAddress
  } catch {
    // Pesan yang ditampilkan ke pengguna diseragamkan di bawah.
  }

  throw new Error(
    'Lokasi ditemukan, tetapi alamat lengkap gagal dimuat. Silakan isi alamat secara manual.'
  )
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
