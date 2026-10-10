import type { FlMenuRawItem, MenuItem } from '@/types/menu'

/**
 * Nama ikon yang tersedia pada sprite public/svg/icon-sprite.svg untuk
 * varian stroke- maupun fill-, karena layout dapat beralih di antara keduanya.
 */
const SPRITE_ICONS = new Set([
  'animation', 'blog', 'board', 'bonus-kit', 'bookmark', 'builders', 'button',
  'calendar', 'charts', 'chat', 'contact', 'ecommerce', 'editors', 'email',
  'faq', 'file', 'form', 'gallery', 'home', 'icons', 'internationalization',
  'job-search', 'knowledgebase', 'landing-page', 'layout', 'learning', 'maps',
  'others', 'price', 'project', 'reports', 'sample-page', 'search', 'social',
  'starter-kit', 'support-tickets', 'table', 'task', 'to-do', 'ui-kits',
  'user', 'widget',
])

/** Nama ikon umum dari backend yang tidak ada di sprite, dipetakan ke padanan terdekat. */
const ICON_ALIASES: Record<string, string> = {
  users: 'user',
  'user-plus': 'user',
  layoutdashboard: 'home',
  dashboard: 'home',
  briefcase: 'project',
  building: 'project',
  building2: 'project',
  package: 'widget',
  checksquare: 'task',
  barchart3: 'reports',
  shield: 'user',
  layers: 'board',
  grid: 'widget',
  'file-text': 'file',
  filetext: 'file',
  folder: 'file',
  settings: 'others',
  cog: 'others',
  cart: 'ecommerce',
  'shopping-cart': 'ecommerce',
  dollar: 'price',
  money: 'price',
  phone: 'contact',
  mail: 'email',
  message: 'chat',
  clipboard: 'task',
  list: 'table',
  'pie-chart': 'charts',
  'bar-chart': 'charts',
  'map-pin': 'maps',
}

const FALLBACK_ICON = 'file'

function resolveIcon(raw?: string): string {
  const name = (raw || '').trim().toLowerCase()
  if (!name) return FALLBACK_ICON
  if (SPRITE_ICONS.has(name)) return name
  return ICON_ALIASES[name] || FALLBACK_ICON
}

/** Backend lama masih dapat mengirim caption Deal/Deals; UI CRM memakai istilah Project. */
function resolveMenuTitle(rawTitle: string, fallback: string): string {
  const title = rawTitle.trim() || fallback
  return title.replace(/\bdeals?\b/gi, 'Proyek')
}

function isRootRef(value?: string): boolean {
  const v = (value || '').trim()
  return v === '' || v === '0'
}

/** Mengembalikan id parent efektif, atau null jika item berada di level root. */
function resolveParentId(raw: FlMenuRawItem): string | null {
  if (!isRootRef(raw.parendId)) return (raw.parendId as string).trim()
  if (!isRootRef(raw.Parent)) return (raw.Parent as string).trim()
  return null
}

/**
 * Memeriksa apakah item menu berhak ditampilkan.
 * Menu HANYA ditampilkan jika pengguna memiliki hak akses (HASACCESS == 1 atau akses == 1).
 * Jika HASACCESS == 0, menu tidak boleh ditampilkan di sidebar.
 */
function hasMenuAccess(item: FlMenuRawItem): boolean {
  const accessVal = item.HASACCESS ?? item.akses
  if (accessVal !== undefined && accessVal !== null) {
    return Number(accessVal) === 1
  }

  // Fallback jika properti HASACCESS/akses tidak dikirim sama sekali oleh backend
  return (
    Number(item.tambah) === 1 ||
    Number(item.koreksi) === 1 ||
    Number(item.hapus) === 1 ||
    Number(item.export) === 1
  )
}

/**
 * Hanya item di level root yang boleh membawa ikon: NavMenu memakai keberadaan
 * `icon` untuk memilih antara kelas `sidebar-title` dan `submenu-title`.
 * Submenu yang punya ikon akan dirender dengan gaya menu utama.
 */
function applyDepthRules(items: MenuItem[], rawIconById: Map<string, string>, depth = 0): void {
  items.forEach((item) => {
    if (depth === 0) {
      item.icon = resolveIcon(rawIconById.get(item.id as string))
    } else {
      delete item.icon
    }

    if (item.children?.length) {
      item.type = 'sub'
      applyDepthRules(item.children, rawIconById, depth + 1)
    } else {
      item.type = 'link'
      // NavMenu memperlakukan array kosong sebagai "punya submenu" karena [] bernilai truthy,
      // sehingga item tanpa anak harus benar-benar tidak memiliki properti children.
      delete item.children
    }
  })
}

/**
 * Override khusus submenu Project: Project List harus tampil sebelum Project Details.
 * Item lain tetap memakai urutan yang dikirim oleh backend.
 */
function placeProjectListBeforeDetails(items: MenuItem[]): void {
  items.forEach((item) => {
    const children = item.children
    if (!children?.length) return

    const listIndex = children.findIndex(
      (child) => child.path?.trim().toLowerCase() === '/crmadmin/projects/list'
    )
    const detailsIndex = children.findIndex(
      (child) => child.path?.trim().toLowerCase() === '/crmadmin/projects/details'
    )

    if (listIndex !== -1 && detailsIndex !== -1 && listIndex > detailsIndex) {
      ;[children[listIndex], children[detailsIndex]] = [
        children[detailsIndex],
        children[listIndex],
      ]
    }

    placeProjectListBeforeDetails(children)
  })
}

/**
 * Detail v2 adalah halaman UI lokal yang belum ada pada tabel menu backend.
 * Sisipkan sebagai anak Project agar tetap muncul pada sidebar dinamis dan
 * mewarisi visibilitas menu Project milik pengguna.
 */
function appendProjectDetailsV2(items: MenuItem[]): void {
  items.forEach((item) => {
    const children = item.children
    if (!children?.length) return

    const hasProjectChildren = children.some((child) => {
      const path = child.path?.trim().toLowerCase()
      return path === '/crmadmin/projects/list' || path === '/crmadmin/projects/details'
    })
    const alreadyExists = children.some(
      (child) => child.path?.trim().toLowerCase() === '/crmadmin/projects/details-v2'
    )

    if (hasProjectChildren && !alreadyExists) {
      const oldDetailsIndex = children.findIndex(
        (child) => child.path?.trim().toLowerCase() === '/crmadmin/projects/details'
      )
      const insertAt = oldDetailsIndex === -1 ? children.length : oldDetailsIndex + 1
      children.splice(insertAt, 0, {
        id: `${item.id ?? 'project'}-details-v2`,
        title: 'Proyek Detail Ver2',
        path: '/crmAdmin/Projects/details-v2',
        type: 'link',
        active: false,
        isPinned: false,
        permissions: item.permissions,
      })
    }

    appendProjectDetailsV2(children)
  })
}

/**
 * Mengubah data flat dbFlMenuWebcrm menjadi struktur pohon yang dirender komponen NavMenu.
 * Item tanpa hak akses dibuang; anak yang parent-nya ikut terbuang
 * dinaikkan ke level root agar menu yang masih diizinkan tetap dapat dijangkau.
 */
export function transformFlMenuToTree(rawItems: FlMenuRawItem[]): MenuItem[] {
  if (!Array.isArray(rawItems)) return []

  const accessibleItems = rawItems.filter(hasMenuAccess)

  const itemMap = new Map<string, MenuItem>()
  const rawIconById = new Map<string, string>()

  accessibleItems.forEach((raw) => {
    const id = String(raw.id ?? raw.L1 ?? '').trim()
    if (!id) return

    rawIconById.set(id, raw.icon || raw.ICON || '')
    itemMap.set(id, {
      id,
      title: resolveMenuTitle(raw.CAPTION || raw.name || '', id),
      path: (raw.pathfile || '').trim(),
      active: false,
      isPinned: false,
      children: [],
      permissions: {
        tambah: Boolean(Number(raw.tambah)),
        koreksi: Boolean(Number(raw.koreksi)),
        hapus: Boolean(Number(raw.hapus)),
        export: Boolean(Number(raw.export)),
      },
    })
  })

  const tree: MenuItem[] = []

  accessibleItems.forEach((raw) => {
    const id = String(raw.id ?? raw.L1 ?? '').trim()
    const current = itemMap.get(id)
    if (!current) return

    const parentId = resolveParentId(raw)
    const parent = parentId ? itemMap.get(parentId) : undefined

    if (parent && parent !== current) {
      parent.children!.push(current)
    } else {
      tree.push(current)
    }
  })

  applyDepthRules(tree, rawIconById)
  placeProjectListBeforeDetails(tree)
  appendProjectDetailsV2(tree)

  return tree
}
