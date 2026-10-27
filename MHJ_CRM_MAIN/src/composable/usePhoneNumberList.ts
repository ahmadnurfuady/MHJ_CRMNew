import { computed } from 'vue'

import { initInputField } from '@/core/data/common'
import type { InputField } from '@/types/common'
import { indonesianMobilePhoneError } from '@/utils/indonesianPhone'

/** Batas baris nomor telepon pada satu form (Kontak maupun Faskes). */
export const MAX_PHONE_NUMBERS = 5

/**
 * Aturan daftar nomor telepon yang dipakai form Kontak & Faskes:
 * maksimal 5 nomor, dan baris baru hanya bisa ditambah setelah semua baris yang
 * ada terisi nomor Indonesia yang valid (lihat `indonesianMobilePhoneError`).
 *
 * `getPhones` dibuat sebagai fungsi supaya composable ini bisa dipakai pada
 * array di dalam store Pinia (`contactState.contactForm.phoneNumbers`) maupun
 * pada `ref` lokal komponen (`form.value.phoneNumbers`).
 */
export function usePhoneNumberList(getPhones: () => InputField[]) {
  const phoneNumbers = computed(() => getPhones())

  /** Baris pertama yang belum terisi nomor valid; -1 bila semuanya valid. */
  const incompleteIndex = computed(() =>
    phoneNumbers.value.findIndex(
      (phone) => indonesianMobilePhoneError(String(phone?.data ?? ''), true) !== ''
    )
  )

  const limitReached = computed(() => phoneNumbers.value.length >= MAX_PHONE_NUMBERS)
  const canAddPhone = computed(() => !limitReached.value && incompleteIndex.value === -1)

  /** Alasan tombol tambah dimatikan, ditampilkan sebagai teks bantu di bawah tombol. */
  const addPhoneHint = computed(() => {
    if (limitReached.value) return `Maksimal ${MAX_PHONE_NUMBERS} nomor telepon.`
    if (incompleteIndex.value !== -1) {
      return 'Lengkapi nomor telepon di atas dengan nomor yang valid sebelum menambah nomor baru.'
    }
    return ''
  })

  function addPhone(): boolean {
    const phones = getPhones()
    if (limitReached.value) return false

    const index = incompleteIndex.value
    if (index !== -1) {
      // Tandai baris yang menghalangi agar user tahu bagian mana yang harus dibetulkan.
      phones[index].errorMessage = indonesianMobilePhoneError(
        String(phones[index]?.data ?? ''),
        true
      )
      return false
    }

    phones.push(initInputField())
    return true
  }

  function removePhone(index: number): void {
    const phones = getPhones()
    if (phones.length <= 1) return
    phones.splice(index, 1)
  }

  return {
    maxPhoneNumbers: MAX_PHONE_NUMBERS,
    phoneNumbers,
    canAddPhone,
    limitReached,
    addPhoneHint,
    addPhone,
    removePhone,
  }
}
