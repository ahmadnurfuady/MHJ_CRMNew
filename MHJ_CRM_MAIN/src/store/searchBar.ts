import { defineStore } from 'pinia'
import { menu } from '@/core/data/menu'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { MenuItem } from '@/types/menu'
import { routes } from '@/router/routes'
import { isFaskesNavigationItem, resolveMhjNavigationIcon } from '@/utils/mhjIcons'

type IconSource = { title?: string; path?: string; icon?: string }

// Samakan dengan ikon di sidebar (NavMenu.vue): Faskes, Peluang, Kontak, Tugas,
// Kalender, Laporan, Master, Setting, User, Beranda.
function resolveSearchIcon(item: IconSource): string | undefined {
  const value = `${item.title ?? ''} ${item.path ?? ''} ${item.icon ?? ''}`.toLowerCase()

  if (isFaskesNavigationItem(item)) return 'hospital'
  if (/peluang|project|proyek|projek|deal/.test(value)) return 'chart-2'
  if (/kontak|contact/.test(value)) return 'contact_card'
  if (/tugas|task|checklist/.test(value)) return 'checklist'
  if (/master/.test(value)) return 'file-text'
  if (/settings?/.test(value)) return 'settings'
  if (/kalender|calendar/.test(value)) return 'calendar'
  if (/laporan|reports?/.test(value)) return 'chart'
  if (/profil|profile|akun|users?/.test(value)) return 'user'
  if (resolveMhjNavigationIcon(item) === 'nav_home') return 'home'
  return undefined
}

// Aksi cepat yang tidak ada di sidebar tapi perlu bisa dicari.
const quickActions: MenuItem[] = [
  { title: 'Tambah Kontak', path: `${routes.CrmAdmin.Contacts}?add=1`, type: 'link' },
]

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
  const { t } = useI18n({ useScope: 'global' })

  function searchTerm(terms: string) {
    terms = terms.toLowerCase()
    const items: search[] = []

    const searchItem = (item: MenuItem, nearestIcon?: string, parentText = '') => {
      const currentIcon = item.icon || nearestIcon

      const rawTitle = item.title || ''
      // Cocokkan juga dengan judul terjemahan (mis. "Kontak" untuk "Contacts").
      const title = `${rawTitle} ${rawTitle ? t(rawTitle) : ''}`.toLowerCase()

      if (title.includes(terms) && item.type === 'link') {
        items.push({
          ...item,
          iconForDisplay:
            resolveSearchIcon(item) ||
            resolveSearchIcon({ title: parentText, icon: nearestIcon }) ||
            currentIcon,
        })
      }

      if (item.children) {
        item.children.forEach((child) =>
          searchItem(child, currentIcon, `${parentText} ${item.title ?? ''}`),
        )
      }
    }

    menu.forEach((menuItem) => searchItem(menuItem, menuItem.icon))
    quickActions.forEach((action) => searchItem(action))
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
