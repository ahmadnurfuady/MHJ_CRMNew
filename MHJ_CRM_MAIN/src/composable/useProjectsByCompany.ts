import { computed, type Ref } from 'vue'

import type { Select, SelectField } from '@/types/common'

/**
 * Dropdown Peluang di form Kontak difilter sesuai Faskes yang dipilih.
 * Tanpa Faskes terpilih, semua Peluang ditampilkan.
 */
export function useProjectsByCompany(
  projectOptions: Ref<Select[]>,
  companyField: () => SelectField,
  projectField: () => SelectField,
  setProjectField: (field: SelectField) => void,
) {
  function companyIdSet(field: SelectField) {
    return new Set((field.selectedItems ?? []).map((item) => String(item.value)))
  }

  function projectCompanyId(project: Select) {
    return (
      project.companyId ??
      projectOptions.value.find((option) => String(option.value) === String(project.value))
        ?.companyId
    )
  }

  const filteredProjectOptions = computed(() => {
    const companyIds = companyIdSet(companyField())
    if (!companyIds.size) return projectOptions.value
    return projectOptions.value.filter(
      (option) => option.companyId !== undefined && companyIds.has(String(option.companyId)),
    )
  })

  /**
   * Dipanggil dari @update:modelValue dropdown Faskes (aksi user saja, bukan saat form diisi),
   * membuang Peluang terpilih yang Faskes-nya sudah tidak dipilih lagi.
   */
  function pruneProjectsForCompanies(field: SelectField) {
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

  return { filteredProjectOptions, pruneProjectsForCompanies }
}
