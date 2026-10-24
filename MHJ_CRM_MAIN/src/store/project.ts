import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { api } from '@/api'
import {
  extractItem,
  extractList,
  isRecord,
  normalizeOptions,
  pick,
  pickString,
  type Dict
} from '@/api/response'
import { runApiAction } from '@/store/apiAction'
import { masterDataService } from '@/services/masterDataService'
import {
  competitors as competitorFallback,
  divisiList as divisiFallback,
  fundingSources as sumberdanaFallback,
  products as barangFallback
} from '@/core/data/projectDeal'
import type { ListParams, Pagination } from '@/types/api'
import type { Profile, ProjectContact, ProjectProductDetail, Projects } from '@/types/project'
import type { Select } from '@/types/common'

export interface DivisiOption extends Select {
  code: string
}

export interface BarangOption extends Select {
  code: string
  divisiCode: string
  price: number
}

// Gambar placeholder karena tabel projects belum memiliki kolom banner.
const DEFAULT_BANNER = 'project/list/1.png'

// Pipeline Project memakai ProjectController berdedikasi (prefix /project).
const ENDPOINT = 'project'

/** Payload form Project; sebelum dikirim dipetakan ke kontrak legacy DealsController. */
export interface ProjectPayload {
  projects_name: string
  company_id: number | null
  contact_id: number | null
  contact_ids: number[]
  owner_id: number | null
  owner_name: string | null
  stage_id: number | null
  currency: string | null
  amount_value: number | null
  expected_close_date: string | null
  priority: number | null
  competitor_id: number | null
  sumberdana_id: number | null
  probability: number | null
  aktif: number
  idold: number | null
  created_by: number | null
  updated_by?: number | null
  division_code: string | null
  product_names: string[]
  product_details: ProjectProductPayload[]
  quantity: number
  unit_price: number
  lost_reasons: string[]
  notes: string | null
  address?: string | null
  kd_kelurahan?: string | null
  timeline: ProjectTimelinePayload[]
}

export interface ProjectProductPayload {
  product_code: string
  product_name: string
  quantity: number
  unit_price: number
  subtotal: number
}

export interface ProjectTimelinePayload {
  date: string
  activity: string
}

const PIPELINE_STAGES: Record<number, string> = {
  1: 'Qualified',
  2: 'Presentation/Demo',
  3: 'Quotation',
  4: 'Negotiation',
  5: 'Closed Won',
  6: 'Closed Lost',
  7: 'Closed Cancel'
}

/** Mengubah nama status menjadi slug, mis. "Closed Won" menjadi "closed_won". */
function toSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

function optionalNumber(raw: Dict, ...keys: string[]): number | undefined {
  const value = pick(raw, ...keys)
  if (value === undefined || value === '') return undefined
  const number = Number(value)
  return Number.isFinite(number) ? number : undefined
}

/** Mengubah created_at menjadi tanggal yang mudah dibaca, mis. "29 Apr 2026". */
function formatDate(value: string): string {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

function normalizeProjectContacts(raw: Dict): ProjectContact[] {
  const result: ProjectContact[] = []
  const source = pick(
    raw,
    'contacts',
    'project_contacts',
    'deal_contacts',
    'contact_list',
    'contact_names',
    'contacts_name'
  )

  let values: unknown[] = []
  if (Array.isArray(source)) values = source
  else if (isRecord(source)) values = Object.values(source)
  else if (typeof source === 'string' && source.trim()) {
    try {
      const parsed: unknown = JSON.parse(source)
      values = Array.isArray(parsed) ? parsed : [parsed]
    } catch {
      values = source.split(/[,;|]/).map((name) => ({ name: name.trim() }))
    }
  }

  values.forEach((value) => {
    if (typeof value === 'string') {
      if (value.trim()) result.push({ name: value.trim() })
      return
    }
    if (!isRecord(value)) return
    const firstName = pickString(value, 'first_name', 'firstName')
    const lastName = pickString(value, 'last_name', 'lastName')
    const name =
      pickString(value, 'contact_name', 'name', 'full_name', 'label') ||
      `${firstName} ${lastName}`.trim()
    if (!name) return
    result.push({
      id: optionalNumber(value, 'contact_id', 'id', 'ID'),
      name,
      phone: pickString(value, 'contact_phone', 'phone', 'telephone_1', 'mobile'),
      jobTitle: pickString(value, 'job_title', 'position', 'jabatan') || undefined
    })
  })

  const contactName = pickString(raw, 'contact_name')
  if (contactName && !result.some((contact) => contact.name === contactName)) {
    result.unshift({
      id: optionalNumber(raw, 'contact_id'),
      name: contactName,
      phone: pickString(raw, 'contact_phone', 'phone', 'telephone_1', 'mobile')
    })
  }

  return result.filter(
    (contact, index, contacts) =>
      contacts.findIndex((candidate) =>
        contact.id && candidate.id
          ? candidate.id === contact.id
          : candidate.name.toLocaleLowerCase('id-ID') === contact.name.toLocaleLowerCase('id-ID')
      ) === index
  )
}

function normalizeProjectProducts(raw: Dict): ProjectProductDetail[] {
  const source = pick(raw, 'product_details', 'project_products', 'deal_products', 'products')
  let values: unknown[] = []

  if (Array.isArray(source)) values = source
  else if (isRecord(source)) values = Object.values(source)
  else if (typeof source === 'string' && source.trim()) {
    try {
      const parsed: unknown = JSON.parse(source)
      values = Array.isArray(parsed) ? parsed : []
    } catch {
      values = []
    }
  }

  return values.flatMap((value) => {
    if (!isRecord(value)) return []
    const name = pickString(value, 'product_name', 'name', 'label', 'NamaBrg')
    if (!name) return []
    return [{
      code: pickString(value, 'product_code', 'code', 'value', 'KodeBrg') || undefined,
      name,
      quantity: optionalNumber(value, 'quantity', 'qty') ?? 1,
      unitPrice: optionalNumber(value, 'unit_price', 'price', 'harga') ?? 0
    }]
  })
}

/** Mengubah satu baris dbo.m_projects / view project menjadi model tampilan. */
export function normalizeProject(raw: Dict): Projects {
  const ownerName = pickString(
    raw,
    'owner_name',
    'leader_name',
    'sales_name',
    'pic_name',
    'created_by_name'
  )
  const stageId = optionalNumber(raw, 'stage_id', 'pipeline_id', 'status_id')
  const stageName =
    pickString(raw, 'stage_name', 'pipeline_name', 'status_name', 'stage', 'status') ||
    PIPELINE_STAGES[stageId ?? 0] ||
    ''
  const ownerId = optionalNumber(raw, 'leader_id', 'owner_id')
  const amountValue = optionalNumber(
    raw,
    'amount_value',
    'project_value',
    'deal_value',
    'total_value',
    'value',
    'amount',
    'budget',
    'nilai'
  )
  const currency = pickString(raw, 'currency') || 'IDR'
  const expectedCloseDate = pickString(raw, 'expected_close_date')
  const probability = optionalNumber(raw, 'probability')
  const companyName = pickString(
    raw,
    'company_name',
    'hospital_name',
    'rumah_sakit_name',
    'customer_name'
  )
  const createdAt = pickString(raw, 'created_at', 'created_date', 'date_created')
  const updatedAt = pickString(
    raw,
    'updated_at',
    'modified_at',
    'last_updated_at',
    'last_update',
    'updated_date'
  )
  const stageEnteredAt = pickString(
    raw,
    'stage_entered_at',
    'stage_changed_at',
    'stage_started_at',
    'pipeline_entered_at',
    'pipeline_changed_at',
    'status_changed_at'
  )
  const contacts = normalizeProjectContacts(raw)
  const productDetails = normalizeProjectProducts(raw)

  return {
    id: optionalNumber(raw, 'id', 'ID') ?? 0,
    // API /deals masih memakai nama legacy `deal_name` untuk dbo.m_projects.
    projectName: pickString(raw, 'projects_name', 'deal_name', 'project_name'),
    projectDescription: companyName,
    projectBanner: DEFAULT_BANNER,
    date: formatDate(createdAt),
    progress: probability ?? 0,
    status: toSlug(stageName) || String(stageId ?? ''),
    budget: amountValue !== undefined ? `${currency} ${amountValue.toLocaleString('id-ID')}` : '',
    projectValue: amountValue ?? 0,
    companyId: optionalNumber(raw, 'company_id'),
    companyName,
    contactId: optionalNumber(raw, 'contact_id'),
    contactName: pickString(raw, 'contact_name'),
    contacts,
    ownerId,
    ownerName,
    ownerJabatan: pickString(raw, 'owner_jabatan') || undefined,
    ownerAlias: pickString(raw, 'owner_alias') || undefined,
    ownerJabatanLevel: optionalNumber(raw, 'owner_jabatan_level'),
    stageId,
    stageName,
    currency,
    amountValue,
    expectedCloseDate,
    priority: optionalNumber(raw, 'priority'),
    competitorId: optionalNumber(raw, 'competitor_id'),
    competitorName: pickString(raw, 'competitor_name'),
    sumberdanaId: optionalNumber(raw, 'sumberdana_id'),
    sumberdanaName: pickString(raw, 'sumberdana_name'),
    probability,
    aktif: optionalNumber(raw, 'aktif'),
    idold: optionalNumber(raw, 'idold'),
    divisionCode: pickString(raw, 'division_code'),
    productNames: pickString(raw, 'product_names', 'deal_name'),
    productDetails,
    lostReasons: pickString(raw, 'lost_reasons'),
    teamMember: ownerName ? [{ name: ownerName } as Profile] : [],
    // Nama user pembuat/pengubah dari hasil JOIN BE. Sengaja TIDAK fallback
    // ke `created_by`/`updated_by` karena isinya hanya id numerik — kalau nama
    // tidak tersedia, biarkan kosong agar UI menampilkan "Belum tersedia".
    createdBy: pickString(raw, 'created_by_name', 'createdby_name', 'created_user_name'),
    updatedBy: pickString(raw, 'updated_by_name', 'updatedby_name', 'updated_user_name'),
    createdAt,
    updatedAt: updatedAt || createdAt,
    stageEnteredAt: stageEnteredAt || updatedAt || createdAt,
    quantity: optionalNumber(raw, 'quantity', 'qty'),
    unitPrice: optionalNumber(raw, 'unit_price', 'price', 'harga'),
    notes: pickString(raw, 'notes', 'note', 'description'),
    contactPhone: pickString(raw, 'contact_phone', 'phone', 'telephone_1', 'mobile'),
    serialNumber: pickString(raw, 'serial_number', 'serialNumber', 'no_serial', 'nomor_seri'),
    address: pickString(raw, 'address'),
    kdKelurahan: pickString(raw, 'kd_kelurahan')
  }
}

export const useProjectStore = defineStore('project', () => {
  const items = ref<Projects[]>([])
  const summaryItems = ref<Projects[]>([])
  const selectedItem = ref<Projects | null>(null)
  const selectedDetails = ref<Dict[]>([])
  const createModalOpen = ref(false)
  const createModalHospital = ref<{ id: number; name: string } | null>(null)
  const loading = ref(false)
  const summaryLoading = ref(false)
  const submitting = ref(false)
  const error = ref<string | null>(null)
  const pagination = reactive<Pagination>({
    page: 1,
    perPage: 10,
    total: 0,
    lastPage: 1
  })
  // Menandai bahwa daftar sudah pernah berhasil dimuat dari API.
  const loaded = ref(false)
  const lastParams = ref<ListParams>({})

  function openCreateModal(hospital?: { id: number; name: string }) {
    createModalHospital.value = hospital ?? null
    createModalOpen.value = true
  }

  function closeCreateModal() {
    createModalOpen.value = false
    createModalHospital.value = null
  }

  // Data pendukung yang dipakai form project.
  const lookups = reactive<{
    owner: Select[]
    /** Kandidat owner peluang: user login + atasannya (hirarki ke atas). */
    ownerCandidates: Select[]
    competitor: Select[]
    sumberdana: Select[]
    divisi: DivisiOption[]
    barang: BarangOption[]
  }>({
    owner: [],
    ownerCandidates: [],
    competitor: [],
    sumberdana: [],
    divisi: [],
    barang: []
  })

  /** GET /api/project. */
  function fetchProjects(params: ListParams = {}) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data peluang.',
      task: async () => {
        const response = await api.getbydata(ENDPOINT, { ...params })
        const { items: rawItems, meta } = extractList(response.data, [
          'deals',
          'projects',
          'companies'
        ])
        items.value = rawItems.filter(isRecord).map(normalizeProject)
        if (meta) Object.assign(pagination, meta)
        lastParams.value = params
        loaded.value = true
        return items.value
      }
    })
  }

  /** Dataset ringkasan terpisah agar KPI dan stage tidak terbatas halaman aktif. */
  async function fetchProjectSummary() {
    summaryLoading.value = true
    try {
      const response = await api.getbydata(ENDPOINT, { page: 1, per_page: 1000 })
      const { items: rawItems } = extractList(response.data, [
        'deals',
        'projects',
        'companies'
      ])
      summaryItems.value = rawItems.filter(isRecord).map(normalizeProject)
      return summaryItems.value
    } catch {
      if (!summaryItems.value.length) summaryItems.value = [...items.value]
      return summaryItems.value
    } finally {
      summaryLoading.value = false
    }
  }

  /** GET /api/project/fetchprojectbyid. */
  function fetchProjectById(id: number) {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat detail peluang.',
      task: async () => {
        const response = await api.getbydata(`${ENDPOINT}/fetchprojectbyid`, {
          id
        })
        const raw = extractItem(response.data, ['deal', 'deals', 'project', 'projects'])
        const detailResult = extractList(response.data, [
          'projectdetails',
          'project_details',
          'm_projectsdet',
          'dealdetails',
          'deal_details',
          'details',
          'taskassoc'
        ])
        selectedDetails.value = detailResult.items.filter(isRecord).map((task) => ({
          ...task,
          activity: pickString(task, 'activity', 'task_name', 'title'),
          activity_date: pickString(task, 'activity_date', 'due_date', 'created_at'),
          activity_description: pickString(task, 'activity_description', 'description', 'notes')
        }))
        selectedItem.value = raw ? normalizeProject(raw) : null
        return selectedItem.value
      }
    })
  }

  /** POST /api/project/input dengan choice "i", lalu ambil ulang baris lengkapnya. */
  function createProject(payload: ProjectPayload) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menyimpan peluang.',
      task: async () => {
        const response = await api.post(`${ENDPOINT}/input`, {
          choice: 'i',
          // Alias nama legacy ikut dikirim berdampingan dengan payload asli untuk jaga-jaga.
          deal_name: payload.projects_name,
          pipeline_id: payload.stage_id,
          source_id: null,
          ...payload
        })
        const raw = extractItem(response.data, ['deal', 'deals', 'project', 'projects', 'result'])
        const newId = raw ? optionalNumber(raw, 'id') : undefined

        let created: Projects | null = null
        if (newId) {
          try {
            created = await fetchProjectById(newId)
          } catch {
            created = null
          }
        }

        if (created) {
          items.value = [created, ...items.value]
          summaryItems.value = [created, ...summaryItems.value.filter((item) => item.id !== created.id)]
          pagination.total += 1
          pagination.lastPage = Math.max(
            1,
            Math.ceil(pagination.total / Math.max(1, pagination.perPage))
          )
        } else {
          await fetchProjects(lastParams.value)
          await fetchProjectSummary()
        }
        return created
      }
    })
  }

  /** POST /api/project/input dengan choice "u", lalu ambil ulang baris lengkapnya. */
  function updateProject(id: number, payload: Partial<ProjectPayload>) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal memperbarui peluang.',
      task: async () => {
        await api.post(`${ENDPOINT}/input`, {
          choice: 'u',
          id,
          deal_name: payload.projects_name,
          pipeline_id: payload.stage_id,
          source_id: null,
          ...payload
        })

        let updated: Projects | null = null
        try {
          updated = await fetchProjectById(id)
        } catch {
          updated = null
        }

        if (updated) {
          items.value = items.value.map((item) => (item.id === id ? (updated as Projects) : item))
          summaryItems.value = summaryItems.value.map((item) =>
            item.id === id ? (updated as Projects) : item
          )
          if (selectedItem.value?.id === id) selectedItem.value = updated
          return updated
        }

        await fetchProjects(lastParams.value)
        await fetchProjectSummary()
        return null
      }
    })
  }

  /** POST /api/project/input dengan choice "d". */
  function deleteProject(id: number) {
    return runApiAction({
      flag: submitting,
      error,
      fallbackMessage: 'Gagal menghapus peluang.',
      task: async () => {
        await api.post(`${ENDPOINT}/input`, { choice: 'd', id })
        items.value = items.value.filter((item) => item.id !== id)
        summaryItems.value = summaryItems.value.filter((item) => item.id !== id)
        pagination.total = Math.max(0, pagination.total - 1)
        pagination.lastPage = Math.max(
          1,
          Math.ceil(pagination.total / Math.max(1, pagination.perPage))
        )
        if (selectedItem.value?.id === id) selectedItem.value = null
      }
    })
  }

  /** GET /api/project/leader. Dipakai sebagai master Penanggung Jawab. */
  async function fetchProjectLeaders() {
    const response = await api.get(`${ENDPOINT}/leader`)
    lookups.owner = normalizeOptions(response.data, ['leaders', 'leader', 'users']).filter(
      (option) => option.value && option.label
    )
    return lookups.owner
  }

  /**
   * GET /api/project/ownercandidates. Daftar akun yang boleh dijadikan Owner
   * peluang: user yang sedang login + seluruh atasannya pada rantai jabatan.
   * Metadata jabatan (nama, alias, level) ikut dibawa supaya FE bisa
   * menampilkan "Nama (DBD · L0)" di dropdown.
   */
  async function fetchOwnerCandidates() {
    const response = await api.get(`${ENDPOINT}/ownercandidates`)
    const base = normalizeOptions(response.data, [
      'candidates',
      'leaders',
      'leader',
      'users'
    ])

    // Ekstrak raw array untuk mengambil field tambahan (alias, jabatan_level,
    // nama_jabatan) yang dibuang normalizeOptions.
    const raw = (response.data as unknown)
    const list = Array.isArray(raw)
      ? raw
      : (Array.isArray((raw as Record<string, unknown>)?.candidates)
          ? ((raw as Record<string, unknown>).candidates as unknown[])
          : [])
    const metaByValue = new Map<string, {
      alias: string | null
      level: number | null
      jabatan: string | null
    }>()
    for (const item of list) {
      if (!item || typeof item !== 'object') continue
      const r = item as Record<string, unknown>
      const value = String(r.value ?? r.id ?? '')
      if (!value) continue
      const level = r.jabatan_level
      metaByValue.set(value, {
        alias: typeof r.jabatan_alias === 'string' ? r.jabatan_alias : null,
        jabatan: typeof r.nama_jabatan === 'string' ? r.nama_jabatan : null,
        level: typeof level === 'number'
          ? level
          : (level === null || level === undefined ? null : Number(level))
      })
    }

    lookups.ownerCandidates = base
      .filter((option) => option.value && option.label)
      .map((option) => {
        const meta = metaByValue.get(String(option.value))
        if (!meta) return option
        // Komponen Select hanya merender `option[displayKey]` sebagai teks
        // tunggal, jadi info alias + level dirangkai ke dalam label itu
        // sendiri agar langsung tampil di dropdown.
        const chips: string[] = []
        if (meta.alias) chips.push(meta.alias)
        if (meta.level !== null && meta.level !== undefined) chips.push(`L${meta.level}`)
        const label = chips.length ? `${option.label} (${chips.join(' · ')})` : option.label
        return { ...option, label, ...meta }
      })
    return lookups.ownerCandidates
  }

  /** GET /api/project/leader, /api/master-data/competitor, /api/master-data/sumberdana. */
  function fetchProjectLookups() {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data pendukung peluang.',
      task: async () => {
        await fetchProjectLeaders()

        // Kandidat owner tidak boleh menggagalkan pemuatan lookup lain.
        try {
          await fetchOwnerCandidates()
        } catch (ownerError) {
          console.warn('Endpoint kandidat owner tidak tersedia.', ownerError)
          lookups.ownerCandidates = []
        }

        try {
          const competitorResponse = await api.get('master-data/competitor')
          const competitorOptions = normalizeOptions(competitorResponse.data, [
            'competitors',
            'competitor'
          ]).filter((option) => option.value && option.label)
          lookups.competitor = competitorOptions.length ? competitorOptions : [...competitorFallback]
        } catch (lookupError) {
          console.warn('Endpoint kompetitor tidak tersedia, memakai lookup lokal.', lookupError)
          lookups.competitor = [...competitorFallback]
        }

        try {
          const sumberdanaResponse = await api.get('master-data/sumberdana')
          const sumberdanaOptions = normalizeOptions(sumberdanaResponse.data, [
            'sumberdana'
          ]).filter((option) => option.value && option.label)
          lookups.sumberdana = sumberdanaOptions.length ? sumberdanaOptions : [...sumberdanaFallback]
        } catch (lookupError) {
          console.warn('Endpoint sumber pendanaan tidak tersedia, memakai lookup lokal.', lookupError)
          lookups.sumberdana = [...sumberdanaFallback]
        }
      }
    })
  }

  /** GET /api/master-data/devisi & /api/master-data/barang, dipakai lintas form (Project, Task). */
  function fetchProjectCatalog() {
    return runApiAction({
      flag: loading,
      error,
      fallbackMessage: 'Gagal memuat data divisi/produk.',
      task: async () => {
        try {
          const devisiItems = await masterDataService.getDevisi()
          const divisiOptions: DivisiOption[] = devisiItems
            .map((item) => {
              const code = String(item.KodeDevisi ?? '').trim()
              const label = (item.NamaAlias?.trim() || item.NamaDevisi || code).trim()
              return { value: code, label, code }
            })
            // Entri "none" dari master data bukan divisi sungguhan, jangan tampil di dropdown.
            .filter((option) => option.value && option.label && option.label.toLowerCase() !== 'none')
          lookups.divisi = divisiOptions.length
            ? divisiOptions
            : divisiFallback.map((item) => ({
                value: item.value,
                label: item.label,
                code: item.code ?? String(item.value)
              }))
        } catch (lookupError) {
          console.warn('Endpoint devisi tidak tersedia, memakai lookup lokal.', lookupError)
          lookups.divisi = divisiFallback.map((item) => ({
            value: item.value,
            label: item.label,
            code: item.code ?? String(item.value)
          }))
        }

        try {
          const barangResponse = await api.get('master-data/barang')
          const barangItems = extractList(barangResponse.data, ['barang']).items.filter(isRecord)
          const barangOptions: BarangOption[] = barangItems
            // dbo.barang nonaktif tidak perlu muncul di dropdown produk aktif.
            .filter((raw) => pickString(raw, 'NonAktif', 'nonaktif') !== '1')
            .map((raw) => {
              const code = pickString(raw, 'KodeBrg', 'KodeBarang', 'kode_barang', 'Kode', 'kode', 'id', 'ID')
              const label = pickString(raw, 'NamaBrg', 'NamaBarang', 'nama_barang', 'Nama', 'nama', 'name', 'label')
              const divisiCode = pickString(
                raw,
                'KodeDevisi',
                'kode_devisi',
                'kd_devisi',
                'divisi',
                'DivisiCode',
                'division_code'
              )
              const priceValue = pick(
                raw,
                'HrgJual_1',
                'HrgJual1',
                'Harga',
                'harga',
                'HargaSatuan',
                'harga_satuan',
                'price',
                'unit_price'
              )
              const price = Number(priceValue)
              return {
                value: code || label,
                label,
                code,
                divisiCode,
                price: Number.isFinite(price) ? price : 0
              }
            })
            .filter((option) => option.label)
          lookups.barang = barangOptions.length
            ? barangOptions
            : barangFallback.map((item) => ({
                value: item.value,
                label: item.label,
                code: String(item.value),
                divisiCode: item.divisi ?? '',
                price: item.price ?? 0
              }))
        } catch (lookupError) {
          console.warn('Endpoint barang tidak tersedia, memakai lookup lokal.', lookupError)
          lookups.barang = barangFallback.map((item) => ({
            value: item.value,
            label: item.label,
            code: String(item.value),
            divisiCode: item.divisi ?? '',
            price: item.price ?? 0
          }))
        }
      }
    })
  }

  return {
    items,
    summaryItems,
    selectedItem,
    selectedDetails,
    createModalOpen,
    createModalHospital,
    loading,
    summaryLoading,
    submitting,
    error,
    pagination,
    loaded,
    lookups,
    openCreateModal,
    closeCreateModal,
    fetchProjects,
    fetchProjectSummary,
    fetchProjectLeaders,
    fetchOwnerCandidates,
    fetchProjectById,
    createProject,
    updateProject,
    deleteProject,
    fetchProjectLookups,
    fetchProjectCatalog
  }
})
