/**
 * Emoji ditolak backend untuk seluruh input teks CRM (lihat
 * `siapcrmapi/app/Rules/SafeText.php` dan middleware `SanitizeCrmInput`).
 * Helper ini memakai aturan yang sama di frontend supaya karakter emoji tidak
 * pernah sampai ke request dan user tahu alasannya sebelum menekan Simpan.
 *
 * Yang dibuang: piktogram (\p{Extended_Pictographic}), emoji berwarna
 * (\p{Emoji_Presentation}), bendera (\p{Regional_Indicator}), serta penanda
 * variation selector / keycap / zero width joiner yang menyusunnya. Huruf
 * beraksen, angka, dan tanda baca biasa (. , - _ + ( ) / & # : @ ') tidak ikut
 * terhapus.
 */
const EMOJI_PATTERN =
  /[\p{Extended_Pictographic}\p{Emoji_Presentation}\p{Regional_Indicator}\u{FE0F}\u{FE0E}\u{20E3}\u{200D}]/u

const EMOJI_PATTERN_GLOBAL = new RegExp(EMOJI_PATTERN.source, 'gu')

export const EMOJI_ERROR_MESSAGE = 'Emoji tidak boleh dipakai pada isian ini.'

export function containsEmoji(value: unknown): boolean {
  if (typeof value !== 'string' || !value) return false
  return EMOJI_PATTERN.test(value)
}

/** Membuang seluruh karakter emoji, sisa spasi ganda dibiarkan apa adanya. */
export function stripEmoji(value: string): string {
  if (!value) return value
  return value.replace(EMOJI_PATTERN_GLOBAL, '')
}

/** Pesan error siap pakai untuk prop `validator` pada InputField. */
export function emojiError(value: string): string {
  return containsEmoji(value) ? EMOJI_ERROR_MESSAGE : ''
}
