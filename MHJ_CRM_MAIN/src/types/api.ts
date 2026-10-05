/** Parameter query untuk endpoint list yang mendukung pagination dan pencarian. */
export interface ListParams {
  page?: number
  per_page?: number
  search?: string
}

/** Status pagination yang dipakai store. */
export interface Pagination {
  page: number
  perPage: number
  total: number
  lastPage: number
}

/** Bentuk state async yang sama untuk semua store API. */
export interface ApiListState<T> {
  items: T[]
  selectedItem: T | null
  loading: boolean
  submitting: boolean
  error: string | null
  pagination: Pagination
}
