import { defineStore } from 'pinia'
import { watch, reactive } from 'vue'
import { menu } from '@/core/data/menu'
import { useRoute } from 'vue-router'
import { MenuItem, FlMenuRawItem } from '@/types/menu'
import { api } from '@/services/api'
import { transformFlMenuToTree } from '@/utils/menuBuilder'
import { RAW_MENU_STORAGE_KEY } from '@/utils/permission'

export interface SearchItem {
  icon?: string
  path?: string
  title?: string
  iconForDisplay?: string
}

/**
 * Menu dinamis hasil permintaan terakhir dibaca ulang dari localStorage saat store
 * dibuat, supaya sidebar tidak sempat menampilkan menu statis saat halaman dimuat ulang.
 */
function restoreCachedMenu(): MenuItem[] | null {
  try {
    const cached = JSON.parse(localStorage.getItem(RAW_MENU_STORAGE_KEY) || '')
    if (!Array.isArray(cached) || cached.length === 0) return null

    const tree = transformFlMenuToTree(cached as FlMenuRawItem[])
    return tree.length > 0 ? tree : null
  } catch {
    return null
  }
}

export const useMenu = defineStore('menu', () => {
  const route = useRoute()

  const menuState = reactive({
    menu: restoreCachedMenu() ?? menu,
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
      try {
        const pinnedItems = localStorage.getItem('pinnedItems')
        if (pinnedItems) {
          menuState.pinedArray = JSON.parse(pinnedItems)
        }
      } catch {
        // localStorage rusak atau isi tidak valid — abaikan, mulai dari array kosong
      }

      if (localStorage.getItem('token')) {
        loadUserMenu()
      }
    }

    updateActiveState(menuState.menu, route.path)
  }

  /* ---------- DYNAMIC MENU ---------- */

  let isFetchingMenu = false

  /**
   * Memuat menu sidebar milik pengguna dari backend.
   * Pertama mencoba GET /api/menuweb (layoutmenuweb@index via sp_webmenuusercrm),
   * dengan fallback ke POST /api/berkas/getflmenu.
   */
  async function loadUserMenu(username?: string) {
    if (isFetchingMenu) return
    isFetchingMenu = true
    try {
      let rawData: FlMenuRawItem[] = []

      // 1. Panggil endpoint utama web: GET /api/menuweb
      //    layoutmenuweb@index otomatis membaca user dari Bearer token dan menjalankan sp_webmenuusercrm
      try {
        const response = await api.get('/menuweb', { timeout: 6000 })
        rawData = response.data?.dbmenu2 || response.data?.data || []
      } catch (err) {
        console.warn('Gagal memanggil /menuweb, mencoba fallback...', err)
      }

      // 2. Fallback ke POST /api/berkas/getflmenu jika /menuweb belum mengembalikan data
      if (rawData.length === 0 && username) {
        try {
          const response = await api.post('/berkas/getflmenu', { username }, { timeout: 6000 })
          rawData = response.data?.data || []
        } catch (err) {
          console.warn('Gagal memanggil fallback /berkas/getflmenu:', err)
        }
      }

      if (rawData.length === 0) return

      const dynamicMenu = transformFlMenuToTree(rawData)
      if (dynamicMenu.length === 0) return

      localStorage.setItem(RAW_MENU_STORAGE_KEY, JSON.stringify(rawData))
      menuState.menu = dynamicMenu
      updateActiveState(menuState.menu, route.path)
    } catch (error) {
      console.error('Gagal memuat menu dinamis dari backend:', error)
    } finally {
      isFetchingMenu = false
    }
  }

  /** Mengembalikan sidebar ke menu statis dan membuang cache permission (dipakai saat logout). */
  function resetMenu() {
    localStorage.removeItem(RAW_MENU_STORAGE_KEY)
    menuState.menu = menu
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
    loadUserMenu,
    resetMenu,
  }
})
