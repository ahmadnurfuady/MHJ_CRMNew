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
