import { defineStore } from 'pinia'
import { menu } from '@/core/data/menu'
import { ref } from 'vue'
import { MenuItem } from '@/types/menu'

interface search {
  icon?: string
  path?: string
  title?: string
  iconForDisplay?: string
}

export const useSearch = defineStore('search', () => {
  const active = ref<boolean>(false)
  const show = ref<boolean>(false)
  const searchData = ref<search[]>([])

  function searchTerm(terms: string) {
    terms = terms.toLowerCase()
    const items: search[] = []

    const searchItem = (item: MenuItem, nearestIcon?: string) => {
      const currentIcon = item.icon || nearestIcon

      const title = (item.title || '').toLowerCase()

      if (title.includes(terms) && item.type === 'link') {
        items.push({ ...item, iconForDisplay: currentIcon })
      }

      if (item.children) {
        item.children.forEach((child) => searchItem(child, currentIcon))
      }
    }

    menu.forEach((menuItem) => searchItem(menuItem, menuItem.icon))
    searchData.value = items
  }

  function toggleSearch() {
    show.value = !show.value
  }

  function closeSearch() {
    show.value = false
  }

  return {
    searchTerm,
    active,
    searchData,
    toggleSearch,
    closeSearch,
    show,
  }
})
