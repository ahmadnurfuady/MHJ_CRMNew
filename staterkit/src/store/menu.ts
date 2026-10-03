import { defineStore } from 'pinia'
import { watch, reactive } from 'vue'
import { menu } from '@/core/data/menu'
import { useRoute } from 'vue-router'
import { MenuItem } from '@/types/menu'

export interface SearchItem {
  icon?: string
  path?: string
  title?: string
  iconForDisplay?: string
}

export const useMenu = defineStore('menu', () => {
  const route = useRoute()

  const menuState = reactive({
    menu: menu,
    searchData: [] as SearchItem[],
    pinedArray: [] as string[],
  })

  const uiState = reactive({
    show: typeof window !== 'undefined' ? window.innerWidth >= 991 : true,
    activeOverlay: true,
    toggleSidebar: true,
    hideRightArrowRTL: false,
    hideLeftArrowRTL: true,
    hideRightArrow: true,
    hideLeftArrow: true,
    margin: 0,
    menuWidth: 0,
  })

  function updateActiveState(items: MenuItem[], currentPath: string) {
    items.forEach((item) => {
      if (item.path) {
        item.active = item.path === currentPath
      }

      if (item.children) {
        updateActiveState(item.children, currentPath)
        item.active = item.children.some((child) => child.active)
      }
    })
  }

  function initMenu() {
    if (typeof window !== 'undefined') {
      const pinnedItems = localStorage.getItem('pinnedItems')
      if (pinnedItems) {
        menuState.pinedArray = JSON.parse(pinnedItems)
      }
    }

    updateActiveState(menuState.menu, route.path)
  }

  /* ---------- MENU TOGGLE ---------- */

  function toggleMenu(item: MenuItem) {
    if (!item.active) {
      menuState.menu.forEach((menu) => {
        if (menuState.menu.includes(item)) {
          menu.active = false
        }

        menu.children?.forEach((subMenu) => {
          subMenu.active = false

          subMenu.children?.forEach((child) => {
            child.active = false

            child.children?.forEach((subChild) => {
              subChild.active = false
            })
          })
        })
      })
    }

    item.active = !item.active
  }

  /* ---------- PIN ---------- */

  function getPined(item: { title?: string }) {
    if (!item.title) return

    const index = menuState.pinedArray.findIndex((p) => p === item.title)

    if (index !== -1) {
      menuState.pinedArray.splice(index, 1)
    } else {
      menuState.pinedArray.push(item.title)
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('pinnedItems', JSON.stringify(menuState.pinedArray))
    }
  }

  /* ---------- SIDEBAR ---------- */

  function toggleSidebar() {
    uiState.show = !uiState.show

    if (typeof window !== 'undefined') {
      uiState.activeOverlay = window.innerWidth < 991
    }
  }

  /* ---------- SEARCH ---------- */

  function searchTerm(term: string) {
    const items: SearchItem[] = []
    const searchValue = term.toLowerCase()

    menuState.menu.forEach((menuItems) => {
      if (menuItems.title?.toLowerCase().includes(searchValue) && menuItems.type === 'link') {
        items.push({ ...menuItems, iconForDisplay: menuItems.icon })
      }

      menuItems.children?.forEach((subItems) => {
        if (subItems.title?.toLowerCase().includes(searchValue) && subItems.type === 'link') {
          items.push({ ...subItems, iconForDisplay: menuItems.icon })
        }

        subItems.children?.forEach((suSubItems) => {
          if (suSubItems.title?.toLowerCase().includes(searchValue)) {
            items.push({ ...suSubItems, iconForDisplay: menuItems.icon })
          }
        })
      })
    })

    menuState.searchData = items
  }

  /* ---------- ROUTE WATCH ---------- */

  watch(
    () => route.path,
    (newPath) => {
      updateActiveState(menuState.menu, newPath)
    },
    { immediate: true }
  )

  initMenu()

  return {
    menuState,
    uiState,
    toggleMenu,
    getPined,
    toggleSidebar,
    searchTerm,
  }
})
