import type { Piutang } from '@/types/piutang'

const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

const tanggalFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

function parseIsoDate(value: string): Date {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function formatDuration(totalDays: number): string {
  if (totalDays < 30) return `${totalDays} hari`

  const months = Math.floor(totalDays / 30)
  const days = totalDays % 30
  return days > 0 ? `${months} bulan ${days} hari` : `${months} bulan`
}

export function formatRupiah(value: number): string {
  return rupiahFormatter.format(value).replace(/\u00a0/g, ' ')
}

export function formatTermin(piutang: Piutang): string {
  // Label dari backend (detail_termin) dipakai langsung bila ada.
  if (piutang.detailTermin && piutang.detailTermin.trim()) return piutang.detailTermin.trim()

  if (piutang.tipeBayar === 'sekali') return 'Sekali bayar'
  if (piutang.tipeBayar === 'pelunasan') return 'Pelunasan'

  const total = piutang.terminTotal ?? 0
  if (piutang.status === 'lunas') return `${total} dari ${total} termin`

  return `Termin ${piutang.terminKe ?? 0} dari ${total}`
}

export function formatLabelWaktu(piutang: Piutang, today = new Date()): string {
  // Label waktu dari backend (label_timeline) dipakai langsung bila ada.
  if (piutang.labelWaktu && piutang.labelWaktu.trim()) return piutang.labelWaktu.trim()

  if (piutang.status === 'lunas' && piutang.tanggalLunas) {
    return `Lunas ${tanggalFormatter.format(parseIsoDate(piutang.tanggalLunas))}`
  }

  if (!piutang.jatuhTempo) return 'Jatuh tempo belum ditentukan'

  const millisecondsPerDay = 24 * 60 * 60 * 1000
  const difference = Math.round(
    (parseIsoDate(piutang.jatuhTempo).getTime() - startOfDay(today).getTime()) /
      millisecondsPerDay,
  )
  const duration = formatDuration(Math.abs(difference))

  if (piutang.status === 'terlambat' || difference < 0) return `Terlambat ${duration}`
  if (difference === 0) return 'Jatuh tempo hari ini'
  return `${duration} lagi jatuh tempo`
}
