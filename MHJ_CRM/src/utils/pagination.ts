import { ref } from 'vue'

import { useTable } from '@/store/table'
import type { Pagination } from '@/types/common'

export function handlePagination() {
  const { getPager } = useTable()

  const pagination = ref<Pagination>()
  const totalPages = ref<number>()
  const currentPage = ref<number>(1)
  const pageSize = ref<number>(1)

  function paginate() {
    if (totalPages.value) {
      pagination.value = getPager(totalPages.value, currentPage.value, pageSize.value)
    }
  }

  function handlePage(value: number) {
    if (totalPages.value) {
      const nextPage = currentPage.value + value

      if (nextPage >= 1 && nextPage <= totalPages.value) {
        currentPage.value = nextPage
        paginate()
      }
    }
  }

  function setPage(page: number) {
    currentPage.value = page
    paginate()
  }

  function setTotalPages(pages: number, pageItems: number) {
    totalPages.value = pages
    pageSize.value = pageItems
    paginate() // optional: paginate immediately
  }

  return {
    paginate,
    handlePage,
    setPage,
    setTotalPages,

    pagination,
    currentPage,
    totalPages,
  }
}
