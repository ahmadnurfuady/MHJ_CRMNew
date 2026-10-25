const integerFormatter = new Intl.NumberFormat('id-ID', {
  maximumFractionDigits: 0,
})

/**
 * Menampilkan bilangan bulat dengan pemisah ribuan Indonesia.
 * Contoh: 9000000 -> "9.000.000".
 */
export function formatThousands(value: number | string | null | undefined): string {
  if (value === null || value === undefined || value === '') return ''

  const numericValue =
    typeof value === 'number' ? value : Number(String(value).replace(/[^\d-]/g, ''))

  return Number.isFinite(numericValue) ? integerFormatter.format(numericValue) : ''
}

/** Mengubah nilai input berformat Indonesia kembali menjadi angka mentah. */
export function parseThousands(value: string): number | '' {
  const digits = value.replace(/\D/g, '')
  return digits ? Number(digits) : ''
}

/**
 * Menormalkan isi input sekaligus menambahkan titik setiap tiga digit.
 * Fungsi ini sengaja hanya menerima bilangan bulat untuk field jumlah/nominal.
 */
export function formatThousandsInput(value: string): string {
  const numericValue = parseThousands(value)
  return numericValue === '' ? '' : formatThousands(numericValue)
}
