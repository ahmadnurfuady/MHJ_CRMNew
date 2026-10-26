import { computed, ref, type Ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import type { Select, SelectField } from '@/types/common'

/**
 * Dropdown Peluang di form Kontak: dicari di server (search + company_ids) dan
 * difilter sesuai Faskes yang dipilih. Tanpa Faskes terpilih, semua Peluang ditampilkan.
 */
export function useProjectsByCompany(options: {
  /** Lookup penuh, dipakai saat belum ada pencarian / Faskes terpilih. */
  projectOptions: Ref<Select[]>
  /** Hasil pencarian server; null = pakai projectOptions. */
  searchResults: Ref<Select[] | null>
  searchProjects: (params: { search?: string; companyIds?: number[] }) => Promise<unknown>
  companyField: () => SelectField
  projectField: () => SelectField
  setProjectField: (field: SelectField) => void
}) {
  const { projectOptions, searchResults, searchProjects, companyField, projectField, setProjectField } =
    options
  const searchText = ref('')

  function companyIdSet(field: SelectField) {
    return new Set((field.selectedItems ?? []).map((item) => String(item.value)))
  }

  function companyIdList(field: SelectField) {
    return [...companyIdSet(field)].map(Number).filter((id) => Number.isSafeInteger(id) && id > 0)
  }

  function projectCompanyId(project: Select) {
    return (
      project.companyId ??
      projectOptions.value.find((option) => String(option.value) === String(project.value))
        ?.companyId
    )
  }

  const filteredProjectOptions = computed(() => {
    const base = searchResults.value ?? projectOptions.value
    const companyIds = companyIdSet(companyField())
    // Filter lokal tetap dipakai sebagai pengaman bila backend belum mendukung company_ids.
    if (!companyIds.size) return base
    return base.filter(
      (option) => option.companyId !== undefined && companyIds.has(String(option.companyId)),
    )
  })

  function refreshProjects(field: SelectField = companyField()) {
    return searchProjects({ search: searchText.value, companyIds: companyIdList(field) })
  }

  const debouncedRefresh = useDebounceFn(() => refreshProjects(), 400)

  /** Dipanggil dari event `search` dropdown Peluang (prop remoteSearch). */
  function onProjectSearch(value: string) {
    searchText.value = value
    void debouncedRefresh()
  }

  /**
   * Dipanggil dari @update:modelValue dropdown Faskes (aksi user saja, bukan saat form diisi):
   * memuat ulang Peluang untuk Faskes terpilih dan membuang Peluang terpilih
   * yang Faskes-nya sudah tidak dipilih lagi.
   */
  function pruneProjectsForCompanies(field: SelectField) {
    void refreshProjects(field)

    const companyIds = companyIdSet(field)
    if (!companyIds.size) return

    const current = projectField()
    const selectedItems = current.selectedItems ?? []
    const kept = selectedItems.filter((project) => {
      const companyId = projectCompanyId(project)
      // Peluang yang Faskes-nya tidak diketahui tidak dibuang.
      return companyId === undefined || companyIds.has(String(companyId))
    })
    if (kept.length === selectedItems.length) return

    setProjectField({
      ...current,
      selectedItems: kept,
      data: kept.map((item) => String(item.value)).join(','),
    })
  }

  /** Reset pencarian saat form dibuka / diisi ulang, sesuai Faskes yang sedang terpilih. */
  function resetProjectSearch() {
    searchText.value = ''
    return refreshProjects()
  }

  return { filteredProjectOptions, pruneProjectsForCompanies, onProjectSearch, resetProjectSearch }
}
