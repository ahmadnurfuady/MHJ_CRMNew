import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/api'
import {
  extractList,
  isRecord,
  pickNumber,
  pickString,
  type Dict,
} from '@/api/response'
import type { ListParams, Pagination } from '@/types/api'
import type { Hospital, HospitalPayload } from '@/types/hospital'
import { runApiAction } from '@/store/apiAction'

// Rumah Sakit memakai endpoint Company di backend (nama endpoint tidak diganti).
const ENDPOINT = 'company'

/** Menemukan satu row company pada response detail yang mungkin dibungkus data/company. */
function findCompanyRecord(payload: unknown, depth = 0): Dict | null {
  if (depth > 4) return null

  if (Array.isArray(payload)) {
    for (const item of payload) {
      const found = findCompanyRecord(item, depth + 1)
      if (found) return found
    }
    return null
  }

  if (!isRecord(payload)) return null

  const companyFields = ['id', 'ID', 'company_name', 'Company Name', 'name']
  if (companyFields.some((field) => field in payload)) return payload

  for (const key of ['company', 'companies', 'data', 'item']) {
    const found = findCompanyRecord(payload[key], depth + 1)
    if (found) return found
  }

  return null
}

/**
 * Mengubah satu baris company menjadi Hospital.
 * Response API memakai judul dengan spasi ("Company Name"), sedangkan kolom DB memakai snake_case.
 * Keduanya dicoba agar cocok dengan respons yang sebenarnya.
 */
export function normalizeHospital(raw: Dict): Hospital {
  return {
    id: pickNumber(raw, 'id', 'ID'),
    name: pickString(raw, 'Company Name', 'company_name', 'name'),
    owner: pickString(raw, 'Company Owner', 'company_owner', 'owner'),
    phone: pickString(raw, 'telephone', 'Telephone', 'phone'),
    email: pickString(raw, 'Email', 'email'),
    website: pickString(raw, 'Website', 'website'),
    industry: pickString(raw, 'Industry', 'industry', 'industry_name'),
    description: pickString(raw, 'Description', 'description'),
    address: pickString(raw, 'Address', 'address'),
    country: pickString(raw, 'Country', 'country'),
    province: pickString(raw, 'Province', 'province'),
    city: pickString(raw, 'City', 'city'),
    posCode: pickString(raw, 'Pos Code', 'pos_code'),
    kdKelurahan: pickString(raw, 'Kd Kelurahan', 'kd_kelurahan'),
    aktif: pickNumber(raw, 'Aktif', 'aktif'),
  }
}

export const useHospitalStore = defineStore('hospital', () => {
  const items = ref<Hospital[]>([])
  const selectedItem = ref<Hospital | null>(null)
  const loading = ref(false)
  const detailLoading = ref(false)
  const submitting = ref(false)
  const error = ref<string | null>(null)
  const pagination = reactive<Pagination>({ page: 1, perPage: 10, total: 0, lastPage: 1 })
  const lastParams = ref<ListParams>({})

  /** GET /api/company. Mendukung page, per_page, dan search jika backend menerimanya. */
  function fetchHospitals(params: ListParams = {}) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data Rumah Sakit.',
      task: async () => {
        const response = await api.getbydata(ENDPOINT, { ...params })
        const { items: rawItems, meta } = extractList(response.data, ['companies'])
        items.value = rawItems.filter(isRecord).map(normalizeHospital)
        const page = meta?.page ?? params.page ?? 1
        const perPage = meta?.perPage ?? params.per_page ?? pagination.perPage
        const knownTotal = meta?.total
        const visitedTotal = (page - 1) * perPage + items.value.length

        pagination.page = page
        pagination.perPage = perPage
        pagination.total = knownTotal ?? Math.max(pagination.total, visitedTotal)
        pagination.lastPage =
          meta?.lastPage ??
          (knownTotal !== undefined
            ? Math.max(1, Math.ceil(knownTotal / perPage))
            : items.value.length >= perPage
              ? Math.max(pagination.lastPage, page + 1)
              : page)
        lastParams.value = {
          ...params,
          page: pagination.page,
          per_page: pagination.perPage,
        }
        return items.value
      },
    })
  }

  /** GET /api/company/fetchcompanybyid?id=<id>. */
  function fetchHospitalById(id: number) {
    return runApiAction({
      flag: detailLoading,
      error,
      fallbackMessage: 'Gagal memuat detail Rumah Sakit.',
      task: async () => {
        const response = await api.getbydata(`${ENDPOINT}/fetchcompanybyid`, { id })
        const raw = findCompanyRecord(response.data)
        selectedItem.value = raw ? normalizeHospital(raw) : null
        if (selectedItem.value) {
          items.value = items.value.map((item) =>
            item.id === id ? selectedItem.value as Hospital : item,
          )
        }
        return selectedItem.value
      },
    })
  }

  /** POST /api/company/input dengan choice "i". */
  function createHospital(payload: HospitalPayload) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menyimpan Rumah Sakit.',
      task: async () => {
        const response = await api.post(`${ENDPOINT}/input`, { choice: 'i', ...payload })
        const raw = findCompanyRecord(response.data)
        const created = raw ? normalizeHospital(raw) : null

        if (created && created.id) {
          items.value = [created, ...items.value]
        } else {
          // Backend tidak mengembalikan data baru: ambil ulang daftar.
          await fetchHospitals(lastParams.value)
        }
        return created
      },
    })
  }

  /** POST /api/company/input dengan choice "u". */
  function updateHospital(id: number, payload: HospitalPayload) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal memperbarui Rumah Sakit.',
      task: async () => {
        const response = await api.post(`${ENDPOINT}/input`, { choice: 'u', id, ...payload })
        const raw = findCompanyRecord(response.data)
        if (!raw) {
          // Backend tidak mengembalikan data baru: ambil ulang daftar.
          await fetchHospitals(lastParams.value)
          return null
        }

        const updated = normalizeHospital(raw)
        items.value = items.value.map((item) => (item.id === id ? updated : item))
        if (selectedItem.value?.id === id) selectedItem.value = updated
        return updated
      },
    })
  }

  /** POST /api/company/input dengan choice "d". */
  function deleteHospital(id: number) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menghapus Rumah Sakit.',
      task: async () => {
        await api.post(`${ENDPOINT}/input`, { choice: 'd', id })
        items.value = items.value.filter((item) => item.id !== id)
        if (selectedItem.value?.id === id) selectedItem.value = null
      },
    })
  }

  return {
    items,
    selectedItem,
    loading,
    detailLoading,
    submitting,
    error,
    pagination,
    fetchHospitals,
    fetchHospitalById,
    createHospital,
    updateHospital,
    deleteHospital,
  }
})
