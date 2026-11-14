<template>
  <div class="card">
    <div class="card-body">
      <div class="row g-2 mb-3">
        <div class="col-md-6">
          <label class="form-label">Pengguna</label>
          <SelectInput
            v-model="selectedUserId"
            :options="userOptions"
            :placeholder="loadingUsers ? 'Memuat daftar pengguna...' : '-- pilih pengguna --'"
            :disabled="loadingUsers"
            @update:model-value="loadPermissions"
          />
        </div>
        <div class="col-md-6 d-flex align-items-end justify-content-md-end">
          <button
            class="btn btn-primary"
            :disabled="!canSave"
            @click="savePermissions"
          >
            {{ saving ? 'Menyimpan...' : 'Simpan Hak Akses' }}
          </button>
        </div>
      </div>

      <div v-if="feedback" :class="`alert alert-${feedback.type}`">{{ feedback.text }}</div>

      <!-- Preset izin berdasarkan jabatan -->
      <div
        v-if="rows.length > 0 && !loadingRows"
        class="mb-3 p-2 rounded quick-actions-toolbar"
      >
        <div class="quick-role-presets">
          <span class="f-w-600 f-13 text-secondary me-1 quick-actions-label">
            <SolarIcon name="shield-user" :size="14" />
            Preset Jabatan:
          </span>
          <button
            v-for="preset in ROLE_PERMISSION_PRESETS"
            :key="preset.label"
            type="button"
            class="btn btn-outline-primary quick-action-btn quick-role-preset-btn"
            :title="`${preset.label}: ${preset.description}`"
            @click="applyRolePreset(preset)"
          >
            {{ preset.label }}
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary quick-action-btn quick-role-preset-btn"
            @click="setAllPermissions(false)"
          >
            <SolarIcon
              name="forbidden-linear"
              :size="16"
              color="currentColor"
              class="quick-action-btn__icon"
            />
            Kosongkan Semua
          </button>
        </div>
      </div>

      <div v-if="loadingRows" class="text-center py-5">
        <LoadingSpinner text="Memuat hak akses pengguna..." />
      </div>

      <div v-else-if="rows.length === 0" class="text-center py-4 f-m-light">
        {{ selectedUserId ? 'Pengguna ini belum memiliki data menu.' : 'Belum ada pengguna dipilih.' }}
      </div>

      <div v-else class="table-responsive custom-scrollbar crm-table-scroll">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Menu</th>
              <th scope="col">Parent</th>
              <th scope="col" class="text-center permission-column">Akses</th>
              <th scope="col" class="text-center permission-column">Tambah</th>
              <th scope="col" class="text-center permission-column">Koreksi</th>
              <th scope="col" class="text-center permission-column">Hapus</th>
              <th scope="col" class="text-center permission-column">Export</th>
              <th scope="col" class="text-center permission-column permission-column--all">Semua</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in rows" :key="row.id ?? index">
              <td>{{ index + 1 }}</td>
              <td :style="{ paddingLeft: `${depthOf(row) * 1.25 + 0.75}rem` }">
                <span class="fw-semibold">{{ menuTitle(row) }}</span>
                <small v-if="row.pathfile" class="d-block f-m-light">{{ row.pathfile }}</small>
              </td>
              <td>{{ parentTitle(row) }}</td>
              <td v-for="action in PERMISSION_COLUMNS" :key="action" class="permission-column">
                <div class="permission-control">
                  <input
                    v-model="row[action]"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    :aria-label="`${action} ${menuTitle(row)}`"
                  />
                  <select
                    class="form-select form-select-sm permission-scope-select"
                    :aria-label="`Pilihan ${action} ${menuTitle(row)}`"
                  >
                    <option value=""></option>
                  </select>
                </div>
              </td>
              <td class="text-center permission-column permission-column--all">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :checked="isRowFullyChecked(row)"
                  :aria-label="`Pilih semua izin ${menuTitle(row)}`"
                  @change="toggleRow(row, ($event.target as HTMLInputElement).checked)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'

import { menuRoleService } from '@/services/menuRoleService'
import { userFullName, userService } from '@/services/userService'
import { useAuthStore } from '@/store/auth'
import SelectInput from '@/components/ui/SelectInput.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import type { FlMenuRawItem } from '@/types/menu'
import type { MasterOption, UserCrmItem } from '@/types/user'

import { DEFAULT_CRM_MENU_TEMPLATE } from '@/core/data/defaultMenuTemplate'

/** Kolom izin yang dirender sebagai checkbox, urut sesuai tabel. */
const PERMISSION_COLUMNS = ['akses', 'tambah', 'koreksi', 'hapus', 'export'] as const
type PermissionColumn = (typeof PERMISSION_COLUMNS)[number]

type RolePermissionPreset = {
  label: string
  description: string
  menus: string[]
}

const STANDARD_SALES_MENUS = ['dashboard', 'kontak', 'faskes', 'peluang', 'tugas']
const ROLE_PERMISSION_PRESETS: RolePermissionPreset[] = [
  { label: 'Direktur', description: 'Dashboard, Faskes', menus: ['dashboard', 'faskes'] },
  { label: 'BDM', description: 'Dashboard, Kontak, Faskes, Peluang, Tugas', menus: STANDARD_SALES_MENUS },
  { label: 'BDE', description: 'Dashboard, Kontak, Faskes, Peluang, Tugas', menus: STANDARD_SALES_MENUS },
  { label: 'Kepala Cabang', description: 'Dashboard, Kontak, Faskes, Peluang, Tugas', menus: STANDARD_SALES_MENUS },
  { label: 'Wakil Kepala Cabang', description: 'Dashboard, Kontak, Faskes, Peluang, Tugas', menus: STANDARD_SALES_MENUS },
  { label: 'Product Specialist', description: 'Dashboard, Kontak, Faskes, Peluang, Tugas', menus: STANDARD_SALES_MENUS },
  { label: 'Sales Area', description: 'Dashboard, Kontak, Faskes, Peluang, Tugas', menus: STANDARD_SALES_MENUS },
  { label: 'Application Specialist', description: 'Kontak, Tugas', menus: ['kontak', 'tugas'] },
  { label: 'Legal', description: 'Menu Legal', menus: ['legal'] },
]

/** Baris matriks: izin dinormalkan ke 0/1 agar bisa di-v-model langsung. */
type PermissionRow = FlMenuRawItem & Record<PermissionColumn, number>

const route = useRoute()
const authStore = useAuthStore()

const users = ref<UserCrmItem[]>([])
const rows = ref<PermissionRow[]>([])
const selectedUserId = ref('')
const loadingUsers = ref(false)
const loadingRows = ref(false)
const saving = ref(false)
const feedback = ref<{ type: 'success' | 'danger' | 'info'; text: string } | null>(null)

const userOptions = computed<MasterOption[]>(() =>
  users.value.map((user) => ({
    value: String(user.id),
    label: `${userFullName(user)}${user.email ? ` (${user.email})` : ''}`,
  })),
)

const selectedUser = computed(
  () => users.value.find((user) => String(user.id) === selectedUserId.value) ?? null
)
const canSave = computed(() => !saving.value && rows.value.length > 0 && selectedUser.value !== null)

/** Peta id menu ke caption, untuk menampilkan kolom parent dan menghitung kedalaman. */
const titleById = computed(() => {
  const map = new Map<string, string>()
  rows.value.forEach((row) => {
    const id = String(row.id ?? row.L1 ?? '').trim()
    if (id) map.set(id, menuTitle(row))
  })
  return map
})

const parentIdById = computed(() => {
  const map = new Map<string, string>()
  rows.value.forEach((row) => {
    const id = String(row.id ?? row.L1 ?? '').trim()
    if (id) map.set(id, parentIdOf(row))
  })
  return map
})

function menuTitle(row: FlMenuRawItem): string {
  return (row.CAPTION || row.name || row.NamaCaption || '').trim() || String(row.id ?? '-')
}

function parentIdOf(row: FlMenuRawItem): string {
  const candidates = [row.parendId, row.Parent]
  for (const candidate of candidates) {
    const value = (candidate ?? '').toString().trim()
    if (value !== '' && value !== '0') return value
  }
  return ''
}

function parentTitle(row: PermissionRow): string {
  if (row.namaparent?.trim()) return row.namaparent.trim()
  const parentId = parentIdOf(row)
  return parentId ? titleById.value.get(parentId) || parentId : '-'
}

/** Kedalaman menu, dihitung dengan menelusuri rantai parent. Dibatasi agar data siklik tidak menggantung. */
function depthOf(row: PermissionRow): number {
  let depth = 0
  let parentId = parentIdOf(row)
  while (parentId && depth < 10) {
    depth += 1
    parentId = parentIdById.value.get(parentId) ?? ''
  }
  return depth
}

function isRowFullyChecked(row: PermissionRow): boolean {
  return PERMISSION_COLUMNS.every((action) => row[action] === 1)
}

function toggleRow(row: PermissionRow, checked: boolean): void {
  PERMISSION_COLUMNS.forEach((action) => {
    row[action] = checked ? 1 : 0
  })
}

function setAllPermissions(enable: boolean): void {
  const val = enable ? 1 : 0
  rows.value.forEach((row) => {
    PERMISSION_COLUMNS.forEach((col) => {
      row[col] = val
    })
  })
}

const MENU_NAME_ALIASES: Record<string, string> = {
  companies: 'faskes',
  company: 'faskes',
  contact: 'kontak',
  contacts: 'kontak',
  hospital: 'faskes',
  hospitals: 'faskes',
  'menu legal': 'legal',
  project: 'peluang',
  projects: 'peluang',
  'rumah sakit': 'faskes',
  task: 'tugas',
  tasks: 'tugas',
}

function normalizedMenuName(row: PermissionRow): string {
  const name = menuTitle(row).trim().toLowerCase().replace(/\s+/g, ' ')
  return MENU_NAME_ALIASES[name] ?? name
}

function applyRolePreset(preset: RolePermissionPreset): void {
  const targetMenus = new Set(preset.menus)
  const enabledIds = new Set<string>()

  rows.value.forEach((row) => {
    const id = String(row.id ?? row.L1 ?? '').trim()
    if (id && targetMenus.has(normalizedMenuName(row))) enabledIds.add(id)
  })

  // Menu induk ikut aktif agar target yang berupa submenu tetap muncul di navigasi.
  let addedParent = true
  while (addedParent) {
    addedParent = false
    rows.value.forEach((row) => {
      const id = String(row.id ?? row.L1 ?? '').trim()
      const parentId = parentIdOf(row)
      if (id && enabledIds.has(id) && parentId && !enabledIds.has(parentId)) {
        enabledIds.add(parentId)
        addedParent = true
      }
    })
  }

  // Menu turunan ikut aktif agar halaman detail/list di bawah menu utama tetap dapat dibuka.
  let addedChild = true
  while (addedChild) {
    addedChild = false
    rows.value.forEach((row) => {
      const id = String(row.id ?? row.L1 ?? '').trim()
      if (id && enabledIds.has(parentIdOf(row)) && !enabledIds.has(id)) {
        enabledIds.add(id)
        addedChild = true
      }
    })
  }

  rows.value.forEach((row) => {
    const id = String(row.id ?? row.L1 ?? '').trim()
    const enabled = enabledIds.has(id)
    PERMISSION_COLUMNS.forEach((column) => {
      row[column] = enabled ? 1 : 0
    })
  })

  const matchedMenus = new Set(
    rows.value
      .filter((row) => targetMenus.has(normalizedMenuName(row)))
      .map((row) => normalizedMenuName(row))
  )
  const missingMenus = preset.menus.filter((menu) => !matchedMenus.has(menu))
  feedback.value = missingMenus.length
    ? {
        type: 'info',
        text: `Preset ${preset.label} diterapkan, tetapi menu ${missingMenus.join(', ')} tidak ditemukan pada data menu pengguna ini.`,
      }
    : { type: 'info', text: `Preset ${preset.label} diterapkan. Klik "Simpan Hak Akses" untuk menyimpan perubahan.` }
}

function toFlag(value: unknown): number {
  return Number(value) === 1 ? 1 : 0
}

function toPermissionRow(raw: FlMenuRawItem): PermissionRow {
  return {
    ...raw,
    akses: toFlag(raw.akses ?? raw.HASACCESS),
    tambah: toFlag(raw.tambah),
    koreksi: toFlag(raw.koreksi),
    hapus: toFlag(raw.hapus),
    export: toFlag(raw.export),
  }
}

function blankPermissionRow(raw: FlMenuRawItem): PermissionRow {
  const row = toPermissionRow(raw)
  PERMISSION_COLUMNS.forEach((column) => {
    row[column] = 0
  })
  return row
}

function menuMatchKeys(row: FlMenuRawItem): string[] {
  const id = String(row.id ?? row.L1 ?? '').trim()
  const path = String(row.pathfile ?? '').trim().toLowerCase()
  return [id ? `id:${id}` : '', path ? `path:${path}` : ''].filter(Boolean)
}

/**
 * Struktur tabel selalu memakai katalog menu lengkap frontend. Respons backend
 * hanya menimpa metadata dan nilai checkbox menu yang sudah tersimpan. Baris
 * baru yang belum ada di katalog frontend tetap dipertahankan dari backend.
 */
function mergeWithCompleteMenu(rawRows: FlMenuRawItem[]): PermissionRow[] {
  const backendRows = rawRows.map(toPermissionRow)
  const backendIndexByKey = new Map<string, number>()
  backendRows.forEach((row, index) => {
    menuMatchKeys(row).forEach((key) => backendIndexByKey.set(key, index))
  })

  const usedBackendIndexes = new Set<number>()
  const mergedRows = DEFAULT_CRM_MENU_TEMPLATE.map((templateRow) => {
    const backendIndex = menuMatchKeys(templateRow)
      .map((key) => backendIndexByKey.get(key))
      .find((index): index is number => index !== undefined)

    const emptyTemplateRow = blankPermissionRow(templateRow)
    if (backendIndex === undefined) return emptyTemplateRow

    usedBackendIndexes.add(backendIndex)
    return {
      ...emptyTemplateRow,
      ...backendRows[backendIndex],
    }
  })

  backendRows.forEach((row, index) => {
    if (!usedBackendIndexes.has(index)) mergedRows.push(row)
  })

  return mergedRows
}

/**
 * Menyusun ulang baris menjadi urutan pohon (DFS): setiap parent muncul
 * lebih dulu, langsung diikuti anak-anaknya, lalu cucu-cucunya — persis
 * seperti urutan sidebar. Root-level dan anak-anak masing-masing diurutkan
 * berdasarkan `id` secara numerik sehingga konsisten dengan hierarki menu.
 *
 * Item yang parentnya tidak ditemukan di data (orphan) diletakkan di akhir.
 */
function buildTreeOrder(items: PermissionRow[]): PermissionRow[] {
  const idOf = (row: PermissionRow): string => String(row.id ?? row.L1 ?? '').trim()

  // Kumpulkan semua id yang ada untuk mendeteksi orphan
  const knownIds = new Set(items.map(idOf))

  const childrenMap = new Map<string, PermissionRow[]>()
  const roots: PermissionRow[] = []

  for (const item of items) {
    const parentId = parentIdOf(item)
    const isRoot = !parentId || parentId === '0' || !knownIds.has(parentId)
    if (isRoot) {
      roots.push(item)
    } else {
      const bucket = childrenMap.get(parentId) ?? []
      bucket.push(item)
      childrenMap.set(parentId, bucket)
    }
  }

  const numericId = (row: PermissionRow) => idOf(row)
  const sortById = (a: PermissionRow, b: PermissionRow) =>
    numericId(a).localeCompare(numericId(b), undefined, { numeric: true })

  roots.sort(sortById)

  const result: PermissionRow[] = []
  const visited = new Set<string>()

  function visit(item: PermissionRow) {
    const id = idOf(item)
    if (visited.has(id)) return // guard siklik
    visited.add(id)
    result.push(item)
    const children = (childrenMap.get(id) ?? []).slice().sort(sortById)
    children.forEach(visit)
  }

  roots.forEach(visit)

  // Orphan yang belum masuk (data tidak konsisten dari backend)
  items.filter((i) => !visited.has(idOf(i))).forEach((i) => result.push(i))

  return result
}

/**
 * Nilai `username` untuk getflmenu/saveedit. Backend mencocokkannya ke kolom
 * `name` pada tabel users; `name` di userscrm bisa null sehingga perlu cadangan.
 */
function usernameOf(user: UserCrmItem): string {
  return user.name?.trim() || userFullName(user) || user.email?.trim() || ''
}

async function loadPermissions() {
  feedback.value = null
  rows.value = []
  const user = selectedUser.value
  if (!user) return

  loadingRows.value = true
  try {
    let raw = await menuRoleService.getFlMenu(usernameOf(user))
    if (raw.length === 0 && user.email) {
      raw = await menuRoleService.getFlMenu(user.email.trim())
    }

    if (raw.length === 0) {
      const templateRows = DEFAULT_CRM_MENU_TEMPLATE.map(blankPermissionRow)
      // Secara default modul Dashboard langsung dicentang semua agar pengguna
      // baru dapat membuka halaman beranda tanpa pengaturan manual terlebih
      // dahulu. Baris Dashboard dikenali dari CAPTION/name "Dashboard"
      // (dicocokkan case-insensitive) atau pathfile "/crmAdmin".
      templateRows.forEach((row) => {
        const caption = (row.CAPTION || row.name || '').trim().toLowerCase()
        const path = (row.pathfile || '').trim().toLowerCase()
        if (caption === 'dashboard' || path === '/crmadmin') {
          PERMISSION_COLUMNS.forEach((col) => {
            row[col] = 1
          })
        }
      })
      rows.value = buildTreeOrder(templateRows)
      feedback.value = {
        type: 'info',
        text: 'Pengguna baru belum memiliki baris data hak akses di tabel database. Template menu sistem telah dimuat (modul Dashboard sudah tercentang semua), silakan atur hak akses lainnya lalu klik "Simpan Hak Akses".',
      }
      return
    }

    const loadedRows = mergeWithCompleteMenu(raw)
    // Pastikan modul Dashboard otomatis tercentang semua saat pertama kali
    // dibuka: jika seluruh izin baris Dashboard masih 0 (nilai awal yang
    // di-seed sp_users_crud untuk user baru), set semua kolom ke 1. Jika
    // Admin sudah pernah mengatur (ada salah satu kolom = 1), nilai yang
    // tersimpan tetap dihormati.
    loadedRows.forEach((row) => {
      const caption = (row.CAPTION || row.name || '').trim().toLowerCase()
      const path = (row.pathfile || '').trim().toLowerCase()
      const isDashboard = caption === 'dashboard' || path === '/crmadmin'
      if (!isDashboard) return
      const allZero = PERMISSION_COLUMNS.every((col) => row[col] === 0)
      if (allZero) {
        PERMISSION_COLUMNS.forEach((col) => {
          row[col] = 1
        })
      }
    })
    rows.value = buildTreeOrder(loadedRows)
  } catch (error) {
    console.error('Gagal memuat hak akses:', error)
    feedback.value = { type: 'danger', text: 'Gagal memuat hak akses pengguna.' }
  } finally {
    loadingRows.value = false
  }
}

function isCurrentUser(user: UserCrmItem): boolean {
  const loggedInEmail = authStore.user?.email?.trim().toLowerCase()
  const targetEmail = user.email?.trim().toLowerCase()
  return Boolean(loggedInEmail && targetEmail && loggedInEmail === targetEmail)
}

async function savePermissions() {
  const user = selectedUser.value
  if (!user) return

  saving.value = true
  feedback.value = null
  try {
    const targetEmail = user.email?.trim() || ''
    const targetName = user.name?.trim() || targetEmail

    // Format item agar flmenuController@saveedit dapat melakukan INSERT / UPDATE ke dbflmenuwebcrm
    const payload: FlMenuRawItem[] = rows.value.map((row) => {
      const id = String(row.id ?? row.L1 ?? '').trim()
      const parentId = String(row.parendId ?? row.Parent ?? '').trim()
      const accessStr = `${row.tambah ? '1' : '0'}${row.koreksi ? '1' : '0'}${row.hapus ? '1' : '0'}${row.export ? '1' : '0'}`

      return {
        ...row,
        username: targetEmail || targetName,
        USERID: targetEmail || targetName,
        id,
        L1: id,
        parendId: parentId || '0',
        Parent: parentId === '0' ? '' : parentId,
        akses: Number(row.akses),
        HASACCESS: Number(row.akses),
        tambah: Number(row.tambah),
        koreksi: Number(row.koreksi),
        hapus: Number(row.hapus),
        export: Number(row.export),
        ACCESS: accessStr,
        ACCESSlama: accessStr,
        L1lama: id,
        Status: row.Status || '1',
        FLAGKRM: row.FLAGKRM || '0',
      }
    })

    await menuRoleService.savePermissions(payload)

    // Sidebar pengguna aktif harus langsung mencerminkan izin yang baru disimpan jika mengedit diri sendiri
    if (isCurrentUser(user)) {
      await authStore.syncSidebarMenu()
      import('@/services/permissionWatcher').then((m) => {
        m.syncPermissionsAndEvict()
      })
      window.location.reload()
    }

    await Swal.fire({
      icon: 'success',
      title: 'Hak akses disimpan',
      text: `Hak akses untuk ${userFullName(user)} berhasil disimpan.`,
      confirmButtonColor: 'var(--theme-default)',
    })
  } catch (error) {
    console.error('Gagal menyimpan hak akses:', error)
    feedback.value = { type: 'danger', text: 'Gagal menyimpan hak akses. Silakan coba lagi.' }
  } finally {
    saving.value = false
  }
}

onMounted(async () => {
  loadingUsers.value = true
  try {
    users.value = await userService.getAllUsers()
  } catch (error) {
    console.error('Gagal memuat daftar pengguna:', error)
    feedback.value = { type: 'danger', text: 'Gagal memuat daftar pengguna.' }
  } finally {
    loadingUsers.value = false
  }

  // Shortcut dari tabel User List: /crmAdmin/roles?userId=15
  const requestedId = Array.isArray(route.query.userId) ? route.query.userId[0] : route.query.userId
  if (requestedId && users.value.some((user) => String(user.id) === requestedId)) {
    selectedUserId.value = String(requestedId)
    await loadPermissions()
  }
})
</script>

<style scoped>
/* ─── Preset jabatan: ikon & teks sejajar tengah, hover lebih kontras ───── */
.quick-actions-toolbar {
  row-gap: 0.5rem;
  background-color: #ffffff !important;
  border: 1px solid #e6e9eb;
}

.quick-actions-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  line-height: 1;
}

.quick-role-presets {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.quick-role-preset-btn {
  padding-inline: 0.75rem;
}

.quick-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  padding: 0.5rem 1rem;
  font-size: 13px;
  border-radius: 6px;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.quick-action-btn__icon {
  display: inline-flex;
  flex: 0 0 auto;
}

/*
 * Tampilan diam (bukan hover) didefinisikan eksplisit di sini, bukan
 * mengandalkan warna outline tema global (sebagian pucat/rendah kontras).
 * Hanya :hover sungguhan yang memicu isian warna gelap; klik/tab/hover
 * di area kosong card abu-abu di sekitarnya tidak mengubah apa pun.
 */
.quick-action-btn,
.quick-action-btn:focus,
.quick-action-btn:active {
  box-shadow: none !important;
}

.quick-action-btn:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.quick-action-btn.btn-outline-primary,
.quick-action-btn.btn-outline-primary:focus,
.quick-action-btn.btn-outline-primary:active {
  background-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.08) !important;
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.4) !important;
  color: var(--app-primary-dark, #0369a1) !important;
}

.quick-action-btn.btn-outline-secondary,
.quick-action-btn.btn-outline-secondary:focus,
.quick-action-btn.btn-outline-secondary:active {
  background-color: rgba(71, 85, 105, 0.08) !important;
  border-color: rgba(71, 85, 105, 0.4) !important;
  color: #475569 !important;
}

.quick-action-btn.btn-outline-primary:hover {
  background-color: var(--app-primary-dark, #0369a1) !important;
  border-color: var(--app-primary-dark, #0369a1) !important;
  color: #ffffff !important;
}

.quick-action-btn.btn-outline-secondary:hover {
  background-color: #475569 !important;
  border-color: #475569 !important;
  color: #ffffff !important;
}

/* ─── Kontrol izin: checkbox + scope dinamis dari backend ───────────────── */
.permission-column {
  min-width: 118px;
  border-left: 1px solid #e2e8f0;
}

.permission-column--all {
  min-width: 76px;
}

.permission-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.permission-control .form-check-input {
  flex: 0 0 auto;
  margin-top: 0;
}

.permission-scope-select {
  width: 72px;
  min-width: 72px;
  min-height: 31px;
  padding-right: 1.75rem;
}

:global(body.dark-only .permission-column) {
  border-left-color: var(--mhj-dark-border, rgba(148, 163, 184, 0.25));
}

/* ─── Sticky table header ───────────────────────────────────────────────── */
.crm-table-scroll {
  /* Tabel scroll sendiri; header kolom tetap terlihat saat baris panjang di-scroll */
  max-height: 60vh;
  overflow-y: auto;
}
.crm-table-scroll thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--white, #fff);
  box-shadow: inset 0 -1px 0 #dee2e6;
  /* Pisahkan header dari isi dengan bayangan tipis agar jelas batasnya */
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.06));
}
</style>
