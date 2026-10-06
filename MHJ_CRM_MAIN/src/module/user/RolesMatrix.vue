<template>
  <div class="card">
    <div class="card-header card-no-border">
      <h4 class="mb-0">Roles &amp; Permission</h4>
      <p class="f-m-light mt-1 mb-0">
        Pilih pengguna, lalu tentukan menu dan hak aksi yang boleh digunakan.
      </p>
    </div>

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

      <!-- Toolbar Aksi Cepat Izin Menu -->
      <div
        v-if="rows.length > 0 && !loadingRows"
        class="d-flex flex-wrap gap-2 mb-3 align-items-center bg-light p-2 rounded"
      >
        <span class="f-w-600 f-13 text-secondary me-1">
          <i class="fa fa-sliders me-1"></i> Aksi Cepat:
        </span>
        <button
          type="button"
          class="btn btn-xs btn-outline-primary"
          @click="setAllPermissions(true)"
        >
          <i class="fa fa-check-double me-1"></i> Beri Semua Hak Akses
        </button>
        <button
          type="button"
          class="btn btn-xs btn-outline-info"
          @click="setReadOnlyAccess()"
        >
          <i class="fa fa-eye me-1"></i> Hanya Akses Baca (View)
        </button>
        <button
          type="button"
          class="btn btn-xs btn-outline-secondary"
          @click="setAllPermissions(false)"
        >
          <i class="fa fa-ban me-1"></i> Kosongkan Semua
        </button>
      </div>

      <div v-if="loadingRows" class="text-center py-4">Memuat hak akses pengguna...</div>

      <div v-else-if="rows.length === 0" class="text-center py-4 f-m-light">
        {{ selectedUserId ? 'Pengguna ini belum memiliki data menu.' : 'Belum ada pengguna dipilih.' }}
      </div>

      <div v-else class="table-responsive custom-scrollbar">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Menu</th>
              <th scope="col">Parent</th>
              <th scope="col" class="text-center">Akses</th>
              <th scope="col" class="text-center">Tambah</th>
              <th scope="col" class="text-center">Koreksi</th>
              <th scope="col" class="text-center">Hapus</th>
              <th scope="col" class="text-center">Export</th>
              <th scope="col" class="text-center">Semua</th>
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
              <td v-for="action in PERMISSION_COLUMNS" :key="action" class="text-center">
                <input
                  v-model="row[action]"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  :aria-label="`${action} ${menuTitle(row)}`"
                />
              </td>
              <td class="text-center">
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
import type { FlMenuRawItem } from '@/types/menu'
import type { MasterOption, UserCrmItem } from '@/types/user'

import { DEFAULT_CRM_MENU_TEMPLATE } from '@/core/data/defaultMenuTemplate'

/** Kolom izin yang dirender sebagai checkbox, urut sesuai tabel. */
const PERMISSION_COLUMNS = ['akses', 'tambah', 'koreksi', 'hapus', 'export'] as const
type PermissionColumn = (typeof PERMISSION_COLUMNS)[number]

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

function setReadOnlyAccess(): void {
  rows.value.forEach((row) => {
    row.akses = 1
    row.tambah = 0
    row.koreksi = 0
    row.hapus = 0
    row.export = 0
  })
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
      rows.value = DEFAULT_CRM_MENU_TEMPLATE.map(toPermissionRow)
      feedback.value = {
        type: 'info',
        text: 'Pengguna baru belum memiliki baris data hak akses di tabel database. Template menu sistem telah dimuat, silakan atur hak akses lalu klik "Simpan Hak Akses".',
      }
      return
    }

    rows.value = raw.map(toPermissionRow)
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
