import type { Ref } from 'vue'
import { getApiErrorMessage } from '@/api/response'

/**
 * Menjalankan request API dengan pola yang sama di setiap store:
 * flag aktif sebelum request, error disimpan ke state, flag dimatikan di finally,
 * dan error dilempar kembali agar komponen tetap bisa menampilkan notifikasi.
 */
export async function runApiAction<T>(options: {
  flag: Ref<boolean>
  error: Ref<string | null>
  fallbackMessage: string
  task: () => Promise<T>
}): Promise<T> {
  options.flag.value = true
  options.error.value = null
  try {
    return await options.task()
  } catch (err) {
    options.error.value = getApiErrorMessage(err, options.fallbackMessage)
    throw err
  } finally {
    options.flag.value = false
  }
}
