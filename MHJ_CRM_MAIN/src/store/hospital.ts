import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/api'
import {
  extractList,
  isRecord,
  pick,
  pickNumber,
  pickString,
  type Dict,
} from '@/api/response'
import type { ListParams, Pagination } from '@/types/api'
import type {
  Hospital,
  HospitalContactAssociation,
  HospitalPayload,
} from '@/types/hospital'
import { runApiAction } from '@/store/apiAction'
import {
  createDemoHospital,
  HOSPITAL_DEMO_ENABLED,
  isDemoHospitalId,
} from '@/core/data/hospitalDemo'

// Rumah Sakit memakai endpoint Company di backend (nama endpoint tidak diganti).
const ENDPOINT = 'company'

function pickOptionalNumber(raw: Dict, ...keys: string[]): number | undefined {
  const value = pick(raw, ...keys)
  if (value === undefined || value === '') return undefined

  const normalized = Number(typeof value === 'string' ? value.trim().replace(',', '.') : value)
  return Number.isFinite(normalized) ? normalized : undefined
}

/** Mendukung koordinat langsung maupun object bersarang seperti coordinates/location. */
function pickCoordinate(raw: Dict, axis: 'latitude' | 'longitude'): number | undefined {
  const directKeys = axis === 'latitude'
    ? ['Latitude', 'latitude', 'lat', 'Lat', 'LAT', 'coordinate_lat', 'coordinate_latitude']
    : ['Longitude', 'longitude', 'lng', 'Lng', 'LNG', 'lon', 'long', 'coordinate_lng', 'coordinate_longitude']
  const direct = pickOptionalNumber(raw, ...directKeys)
  if (direct !== undefined) return direct

  for (const containerKey of ['coordinates', 'coordinate', 'location', 'map_location']) {
    const container = raw[containerKey]
    if (isRecord(container)) {
      const nested = pickOptionalNumber(container, ...directKeys)
      if (nested !== undefined) return nested
    }
  }
  return undefined
}

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
    mapAddress: pickString(raw, 'Map Address', 'map_address', 'mapAddress', 'Address', 'address'),
    country: pickString(raw, 'Country', 'country'),
    province: pickString(raw, 'Province', 'province'),
    city: pickString(raw, 'City', 'city'),
    posCode: pickString(raw, 'Pos Code', 'pos_code'),
    kdKelurahan: pickString(raw, 'Kd Kelurahan', 'kd_kelurahan'),
    aktif: pickNumber(raw, 'Aktif', 'aktif'),
    financeStatus: pickString(
      raw,
      'Status Finance',
      'status_finance',
      'statusFinance',
      'Finance Status',
      'finance_status',
      'Grading',
      'grading',
      'Grade',
      'grade',
    ),
    hospitalClass: pickString(
      raw,
      'Hospital Class',
      'hospital_class',
      'hospitalClass',
      'Kelas',
      'kelas',
      'kelas_rs',
      'rs_class',
      'class_name',
    ),
    hospitalType: pickString(
      raw,
      'Hospital Type',
      'hospital_type',
      'hospitalType',
      'Jenis',
      'jenis',
      'jenis_rs',
      'rs_type',
      'type_name',
      'Type',
      'type',
    ),
    jenis: pickString(raw, 'Jenis', 'jenis', 'Industry', 'industry', 'industry_name'),
    tipe: pickString(
      raw,
      'Tipe',
      'tipe',
      'Type',
      'type',
      'Hospital Type',
      'hospital_type',
    ),
    penyelenggara: pickString(
      raw,
      'Penyelenggara',
      'penyelenggara',
      'Company Owner',
      'company_owner',
      'owner',
    ),
    tipeMarketingGo500: pickString(
      raw,
      'Tipe Marketing G0500',
      'tipe_marketing_go500',
      'tipeMarketingGo500',
    ),
    sirs: pickString(raw, 'SIRS', 'sirs'),
    latitude: pickCoordinate(raw, 'latitude'),
    longitude: pickCoordinate(raw, 'longitude'),
    totalContacts: pickOptionalNumber(
      raw,
      'Total Contacts',
      'total_contacts',
      'totalContacts',
      'contact_count',
      'contacts_count',
    ),
    totalProjects: pickOptionalNumber(
      raw,
      'Total Projects',
      'total_projects',
      'totalProjects',
      'project_count',
      'projects_count',
      'count_active_projects',
    ),
    totalInstalledEquipment: pickOptionalNumber(
      raw,
      'Total Installed Equipment',
      'total_installed_equipment',
      'totalInstalledEquipment',
      'installed_equipment_count',
      'installed_products_count',
      'equipment_count',
    ),
    lastVisitAt: pickString(
      raw,
      'Last Visit At',
      'last_visit_at',
      'lastVisitAt',
      'last_visit',
      'last_visited_at',
      'latest_visit_at',
    ),
  }
}

function normalizeContactAssociation(raw: Dict): HospitalContactAssociation {
  return {
    id: pickNumber(raw, 'id', 'ID'),
    country: pickString(raw, 'country', 'Country'),
    province: pickString(raw, 'province', 'Province'),
    city: pickString(raw, 'city', 'City'),
    createdById: pickOptionalNumber(raw, 'created_by', 'created_by_id'),
    gender: pickString(raw, 'gender', 'Gender'),
    projectName: pickString(raw, 'project_name', 'projects_name'),
    projectId: pickOptionalNumber(raw, 'project_id'),
    latitude: pickCoordinate(raw, 'latitude'),
    longitude: pickCoordinate(raw, 'longitude'),
  }
}

export const useHospitalStore = defineStore('hospital', () => {
  const items = ref<Hospital[]>([])
  const selectedItem = ref<Hospital | null>(null)
  const contactAssociations = ref<HospitalContactAssociation[]>([])
  const loading = ref(false)
  const detailLoading = ref(false)
  const submitting = ref(false)
  const error = ref<string | null>(null)
  const pagination = reactive<Pagination>({ page: 1, perPage: 10, total: 0, lastPage: 1 })
  const lastParams = ref<ListParams>({})

  /**
   * GET /api/company. Mendukung page, per_page, dan search jika backend menerimanya.
   * `append: true` dipakai untuk infinite scroll (mis. dropdown Perusahaan): halaman baru
   * ditambahkan ke daftar yang sudah ada, bukan menggantinya.
   */
  function fetchHospitals(params: ListParams = {}, { append = false } = {}) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data Rumah Sakit.',
      task: async () => {
        const response = await api.getbydata(ENDPOINT, { ...params })
        const { items: rawItems, meta } = extractList(response.data, ['companies'])
        const normalized = rawItems.filter(isRecord).map(normalizeHospital)
        items.value = append ? [...items.value, ...normalized] : normalized
        const page = meta?.page ?? params.page ?? 1
        const perPage = meta?.perPage ?? params.per_page ?? pagination.perPage
        const knownTotal = meta?.total
        const visitedTotal = append ? items.value.length : (page - 1) * perPage + normalized.length

        pagination.page = page
        pagination.perPage = perPage
        pagination.total = knownTotal ?? Math.max(pagination.total, visitedTotal)
        pagination.lastPage =
          meta?.lastPage ??
          (knownTotal !== undefined
            ? Math.max(1, Math.ceil(knownTotal / perPage))
            : normalized.length >= perPage
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
        if (isDemoHospitalId(id)) {
          contactAssociations.value = []
          selectedItem.value = HOSPITAL_DEMO_ENABLED ? createDemoHospital() : null
          return selectedItem.value
        }

        const response = await api.getbydata(`${ENDPOINT}/fetchcompanybyid`, { id })
        const raw = findCompanyRecord(response.data)
        const { items: rawContacts } = extractList(response.data, ['contactassoc'])
        const normalizedContacts = rawContacts
          .filter(isRecord)
          .map(normalizeContactAssociation)
        contactAssociations.value = normalizedContacts
        selectedItem.value = raw ? normalizeHospital(raw) : null

        // Sebagian response detail menyimpan koordinat hanya pada contactassoc.
        // Gunakan koordinat asosiasi sebagai fallback yang sama seperti halaman detail RS.
        if (
          selectedItem.value
          && (selectedItem.value.latitude === undefined || selectedItem.value.longitude === undefined)
        ) {
          const locationFallback = normalizedContacts.find(
            (contact) => contact.latitude !== undefined && contact.longitude !== undefined,
          )
          if (locationFallback) {
            selectedItem.value = {
              ...selectedItem.value,
              latitude: locationFallback.latitude,
              longitude: locationFallback.longitude,
            }
          }
        }
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
        if (isDemoHospitalId(id)) {
          throw new Error('Data demo lokal tidak dapat disimpan ke API.')
        }

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
        if (isDemoHospitalId(id)) {
          throw new Error('Data demo lokal tidak dapat dihapus melalui API.')
        }

        await api.post(`${ENDPOINT}/input`, { choice: 'd', id })
        items.value = items.value.filter((item) => item.id !== id)
        if (selectedItem.value?.id === id) selectedItem.value = null
      },
    })
  }

  return {
    items,
    selectedItem,
    contactAssociations,
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
