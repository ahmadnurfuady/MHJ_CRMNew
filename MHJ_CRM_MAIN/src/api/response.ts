import type { Pagination } from '@/types/api'

export type Dict = Record<string, unknown>

export function isRecord(value: unknown): value is Dict {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function readMeta(source: Dict): Partial<Pagination> | undefined {
  const page = source.current_page ?? source.page
  const perPage = source.per_page ?? source.perPage
  const total = source.total
  const lastPage = source.last_page ?? source.lastPage

  if ([page, perPage, total, lastPage].every((value) => value === undefined)) return undefined

  return {
    page: Number(page ?? 1),
    perPage: Number(perPage ?? 10),
    total: Number(total ?? 0),
    lastPage: Number(lastPage ?? 1),
  }
}

/**
 * Mengambil daftar dari berbagai bentuk response backend:
 * array langsung, { data: [] }, { data: { data: [] } } (paginator), { items: [] },
 * { companies: { data: [] } } (paginator di dalam key), atau { <key>: [] } sesuai `keys`.
 */
export function extractList(
  payload: unknown,
  keys: string[] = []
): { items: unknown[]; meta?: Partial<Pagination> } {
  if (Array.isArray(payload)) return { items: payload }
  if (!isRecord(payload)) return { items: [] }

  const containers: Dict[] = [payload]
  if (isRecord(payload.data)) containers.push(payload.data)

  for (const container of containers) {
    for (const key of [...keys, 'data', 'items']) {
      const value = container[key]
      if (Array.isArray(value)) {
        return { items: value, meta: readMeta(container) }
      }
      // Paginator dibungkus di dalam key, mis. { companies: { data: [...], total: 10 } }.
      if (isRecord(value) && Array.isArray(value.data)) {
        return { items: value.data, meta: readMeta(value) }
      }
    }
  }

  return { items: [] }
}

/** Mengambil satu objek dari response, mis. { company: {...} } atau { data: {...} }. */
export function extractItem(payload: unknown, keys: string[] = []): Dict | null {
  if (!isRecord(payload)) return null

  for (const key of keys) {
    if (isRecord(payload[key])) return payload[key] as Dict
  }
  if (isRecord(payload.data)) return payload.data
  if ('id' in payload) return payload

  return null
}

/** Mengambil field pertama yang terisi dari beberapa kemungkinan nama kolom backend. */
export function pick(raw: Dict, ...keys: string[]): unknown {
  for (const key of keys) {
    const value = raw[key]
    if (value !== undefined && value !== null) return value
  }
  return undefined
}

export function pickString(raw: Dict, ...keys: string[]): string {
  const value = pick(raw, ...keys)
  return value === undefined ? '' : String(value)
}

export function pickNumber(raw: Dict, ...keys: string[]): number {
  const value = Number(pick(raw, ...keys))
  return Number.isFinite(value) ? value : 0
}

/** Mengubah data pendukung (status, leader, deals, ...) menjadi pilihan { value, label }. */
export function normalizeOptions(payload: unknown, keys: string[] = []): { value: string; label: string }[] {
  const { items } = extractList(payload, keys)
  return items.filter(isRecord).map((raw) => ({
    value: pickString(raw, 'value', 'code', 'kode', 'id_status', 'id_deals', 'id'),
    label: pickString(
      raw,
      'label',
      'name',
      'nama',
      'title',
      'status_name',
      'leader_name',
      'deal_name',
      'status',
      'description'
    ),
  }))
}

/** Pesan error yang ramah untuk ditampilkan komponen. */
export function getApiErrorMessage(
  error: unknown,
  fallback = 'Permintaan gagal. Silakan coba lagi.'
): string {
  const err = error as { response?: { data?: unknown }; message?: string } | undefined
  const data = err?.response?.data

  if (isRecord(data)) {
    const message = data.message ?? data.msg ?? data.error
    if (typeof message === 'string' && message) return message
    if (Array.isArray(message) && message.length) return message.join(', ')
  }

  if (err?.message && !err.response) return err.message
  return fallback
}
