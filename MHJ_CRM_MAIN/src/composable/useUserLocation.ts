import { ref } from 'vue'
import { getCurrentPosition } from '@/services/geocoding'

export interface UserCoordinates {
  lat: number
  lon: number
}

// Cache & status sengaja disimpan di luar fungsi composable (module-scope), bukan di
// localStorage: dibagi oleh seluruh komponen dalam sesi aplikasi yang sama, sehingga
// GPS hanya diminta SEKALI per sesi — bukan sekali per komponen, dan hilang begitu
// tab/aplikasi ditutup.
let cachedCoords: UserCoordinates | null = null
let pendingRequest: Promise<UserCoordinates | null> | null = null
// Hanya penolakan izin (code 1) yang mengunci permintaan untuk sisa sesi. Timeout /
// posisi tidak tersedia (umum di laptop tanpa GPS) dicoba lagi pada pencarian berikutnya.
let permissionDenied = false

/**
 * Composable bias lokasi untuk pencarian alamat/faskes. TIDAK mengambil posisi secara
 * otomatis — panggil `ensureLocation()` secara lazy (mis. saat user mulai mengetik di
 * kolom pencarian), bukan saat form/modal dibuka. Jika izin GPS ditolak atau gagal,
 * mengembalikan `null` secara diam-diam sehingga pencarian tetap berjalan tanpa koordinat.
 */
export function useUserLocation() {
  const coords = ref<UserCoordinates | null>(cachedCoords)

  async function ensureLocation(): Promise<UserCoordinates | null> {
    if (cachedCoords) {
      coords.value = cachedCoords
      return cachedCoords
    }

    if (!pendingRequest) {
      // Izin sudah ditolak sebelumnya dalam sesi ini — jangan minta izin lagi.
      if (permissionDenied) return null
      // Untuk bias pencarian cukup akurasi kasar (wifi/IP) & posisi yang masih segar, agar
      // cepat dan tidak timeout di perangkat tanpa GPS.
      pendingRequest = getCurrentPosition({
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 5 * 60 * 1000
      })
        .then((position) => {
          cachedCoords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
          coords.value = cachedCoords
          return cachedCoords
        })
        .catch((error: GeolocationPositionError) => {
          if (error?.code === 1) permissionDenied = true
          return null
        })
        .finally(() => {
          pendingRequest = null
        })
    }

    return pendingRequest
  }

  return { coords, ensureLocation }
}
