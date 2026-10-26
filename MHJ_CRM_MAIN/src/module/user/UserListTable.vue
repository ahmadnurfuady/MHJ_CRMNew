<template>
  <div class="card">
    <div class="card-header card-no-border d-flex justify-content-between align-items-center">
      <h4 class="mb-0">Daftar Pengguna CRM</h4>
      <router-link
        v-if="canUser('tambah')"
        class="btn btn-primary add-user-button mhj-add-button"
        :to="routes.User.AddUser"
      >
        <SolarIcon name="add" :size="19" color="#fff" secondary-color="#fff" :secondary-opacity="1" aria-hidden="true" />
        <span>Tambah User</span>
      </router-link>
    </div>

    <div class="card-body pt-0">
      <div class="row g-2 mb-3">
        <div class="col-md-4">
          <input
            v-model="searchTerm"
            type="search"
            class="form-control"
            placeholder="Cari nama pengguna..."
            @input="debouncedReload"
          />
        </div>
        <div class="col-md-3">
          <input
            v-model="roleFilter"
            type="search"
            class="form-control"
            placeholder="Filter role..."
            @input="debouncedReload"
          />
        </div>
        <div class="col-md-3">
          <SelectInput
            v-model="cabangFilter"
            :options="masterOptions.cabang"
            placeholder="Semua cabang (halaman ini)"
          />
        </div>
        <div class="col-md-2">
          <SelectInput
            :model-value="String(perPage)"
            :options="PER_PAGE_OPTIONS"
            @update:model-value="(v) => { perPage = Number(v); reload(1) }"
          />
        </div>
      </div>

      <div class="table-responsive custom-scrollbar crm-table-scroll">
        <table class="table table-hover mhj-data-table align-middle">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col" role="button" @click="toggleSort">
                Nama Lengkap
              </th>
              <th scope="col">Email</th>
              <th scope="col">No. Handphone</th>
              <th scope="col">Jabatan</th>
              <th scope="col">Cabang</th>
              <th scope="col">Devisi</th>
              <th scope="col">Tipe Marketing</th>
              <th scope="col" class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="9" class="text-center py-5">
                <LoadingSpinner text="Memuat data pengguna..." />
              </td>
            </tr>
            <tr v-else-if="errorMessage">
              <td colspan="9" class="text-center text-danger py-4">{{ errorMessage }}</td>
            </tr>
            <tr v-else-if="visibleUsers.length === 0">
              <td colspan="9" class="text-center py-4">Tidak ada pengguna yang cocok.</td>
            </tr>
            <tr v-for="(user, index) in visibleUsers" :key="user.id">
              <td>{{ rowNumber(index) }}</td>
              <td
                class="fw-semibold user-detail-cell"
                role="link"
                tabindex="0"
                :title="`Buka detail ${userFullName(user)}`"
                :aria-label="`Buka detail pengguna ${userFullName(user)}`"
                @click="openUserDetail(user)"
                @keydown.enter="openUserDetail(user)"
                @keydown.space.prevent="openUserDetail(user)"
              >
                <span class="user-detail-name">{{ userFullName(user) }}</span>
              </td>
              <td>{{ user.email || '-' }}</td>
              <td>{{ user.no_handphone || user.Telephone || '-' }}</td>
              <td>{{ labelFor(masterOptions.jabatan, String(user.idjabatan ?? '')) }}</td>
              <td>{{ labelsFor(masterOptions.cabang, user.KodeCabang) }}</td>
              <td>{{ labelsFor(masterOptions.devisi, user.KodeDevisi) }}</td>
              <td>{{ labelsFor(masterOptions.tipeMarketing, user.KodeTipeMarketing) }}</td>
              <td class="text-center text-nowrap">
                <div class="user-actions">
                  <a
                    class="user-action-button user-action-button--hierarchy"
                    title="Lihat Hierarki"
                    aria-label="Lihat Hierarki"
                    href="#"
                    @click.prevent="openHierarchy(user)"
                  >
                    <SolarIcon
                      name="git-fork"
                      class="user-action-icon user-action-icon--rotated"
                      :size="28"
                      color="var(--theme-default, #18a6e4)"
                      secondary-color="var(--theme-default, #18a6e4)"
                      :secondary-opacity="0.4"
                    />
                  </a>
                  <a
                    class="user-action-button user-action-button--permission"
                    title="Peran & Izin"
                    aria-label="Peran & Izin"
                    href="#"
                    @click.prevent="openRoles(user)"
                  >
                    <SolarIcon
                      name="shield-user"
                      class="user-action-icon"
                      :size="28"
                      color="var(--theme-default, #18a6e4)"
                      secondary-color="var(--theme-default, #18a6e4)"
                      :secondary-opacity="0.4"
                    />
                  </a>
                  <a
                    v-if="canUser('koreksi')"
                    class="user-action-button user-action-button--edit"
                    title="Edit pengguna"
                    aria-label="Edit pengguna"
                    href="#"
                    @click.prevent="editUser(user.id)"
                  >
                    <SolarIcon
                      name="pen-new-square"
                      class="user-action-icon"
                      :size="28"
                      color="var(--theme-default, #18a6e4)"
                      secondary-color="var(--theme-default, #18a6e4)"
                      :secondary-opacity="0.4"
                    />
                  </a>
                  <a
                    v-if="canUser('hapus')"
                    class="user-action-button user-action-button--delete"
                    title="Hapus pengguna"
                    aria-label="Hapus pengguna"
                    href="#"
                    @click.prevent="deleteUser(user)"
                  >
                    <SolarIcon
                      name="trash"
                      class="user-action-icon"
                      :size="28"
                      color="var(--theme-default, #18a6e4)"
                      secondary-color="var(--theme-default, #18a6e4)"
                      :secondary-opacity="0.4"
                    />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3">
        <span class="text-muted f-14">
          Halaman {{ pagination.current_page }} dari {{ pagination.last_page || 1 }}
        </span>
        <div class="pagination-actions" role="group" aria-label="Pagination Pengguna">
          <button
            class="btn btn-outline-primary btn-sm pagination-button"
            type="button"
            :disabled="loading || pagination.current_page <= 1"
            @click="reload(pagination.current_page - 1)"
          >
            <vue-feather type="chevron-left" size="15" class="me-1" />Sebelumnya
          </button>
          <div class="pagination-pages" aria-label="Pilih halaman">
            <template v-for="item in visibleUserPages" :key="String(item)">
              <span v-if="typeof item === 'string'" class="pagination-ellipsis" aria-hidden="true">
                …
              </span>
              <button
                v-else
                class="btn btn-sm pagination-page-button"
                :class="{ 'pagination-page-button--active': item === pagination.current_page }"
                type="button"
                :disabled="loading || item === pagination.current_page"
                :aria-current="item === pagination.current_page ? 'page' : undefined"
                :aria-label="`Ke halaman ${item}`"
                @click="reload(item)"
              >
                {{ item }}
              </button>
            </template>
          </div>
          <button
            class="btn btn-outline-primary btn-sm pagination-button"
            type="button"
            :disabled="loading || pagination.current_page >= pagination.last_page"
            @click="reload(pagination.current_page + 1)"
          >
            Berikutnya<vue-feather type="chevron-right" size="15" class="ms-1" />
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import Swal from 'sweetalert2'

import { routes } from '@/router/routes'
import { toCodeArray, userFullName, userService } from '@/services/userService'
import { canUser } from '@/module/user/userPermission'
import { parseBackendError } from '@/utils/errorParser'
import SelectInput from '@/components/ui/SelectInput.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import type { MasterOption, UserCrmItem, UserMasterOptions } from '@/types/user'

const PER_PAGE_OPTIONS: MasterOption[] = [
  { value: '10', label: '10 / halaman' },
  { value: '20', label: '20 / halaman' },
  { value: '50', label: '50 / halaman' },
]

const router = useRouter()

const users = ref<UserCrmItem[]>([])
const masterOptions = ref<UserMasterOptions>({
  cabang: [],
  devisi: [],
  tipeMarketing: [],
  jabatan: [],
})

const searchTerm = ref('')
const roleFilter = ref('')
const cabangFilter = ref('')
const perPage = ref(10)
const sortDesc = ref(0)
const loading = ref(false)
const errorMessage = ref('')

const pagination = ref({
  current_page: 1,
  last_page: 1,
  per_page: 10,
  total: 0,
  from: 0 as number | null,
  to: 0 as number | null,
})

/**
 * Backend browse hanya menerima term, role, dan desc. Filter cabang karena itu
 * diterapkan di klien dan hanya memengaruhi baris pada halaman yang sedang tampil.
 */
const visibleUsers = computed(() => {
  if (!cabangFilter.value) return users.value
  return users.value.filter((user) => toCodeArray(user.KodeCabang).includes(cabangFilter.value))
})

/**
 * Daftar nomor halaman yang ditampilkan pada kontrol pagination, meniru pola
 * yang dipakai pada daftar Kontak (dengan ellipsis bila halaman terlalu banyak).
 */
const visibleUserPages = computed<Array<number | string>>(() => {
  const totalPages = Math.max(1, pagination.value.last_page)
  const currentPage = Math.min(Math.max(1, pagination.value.current_page), totalPages)

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const pageSet = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1])

  if (currentPage <= 3) {
    pageSet.add(2)
    pageSet.add(3)
  }
  if (currentPage >= totalPages - 2) {
    pageSet.add(totalPages - 2)
    pageSet.add(totalPages - 1)
  }

  const pages = [...pageSet]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right)
  const items: Array<number | string> = []

  pages.forEach((page, index) => {
    const previousPage = pages[index - 1]
    if (previousPage !== undefined && page - previousPage > 1) {
      items.push(`ellipsis-${previousPage}-${page}`)
    }
    items.push(page)
  })

  return items
})

function rowNumber(index: number): number {
  return (pagination.value.current_page - 1) * pagination.value.per_page + index + 1
}

function labelFor(options: MasterOption[], code?: string | null): string {
  if (!code) return '-'
  return options.find((option) => option.value === code)?.label || code
}

/**
 * Cabang / Devisi / Tipe Marketing sekarang relasi many-to-many, jadi satu baris
 * bisa membawa beberapa kode. Semua kode dipetakan ke label lalu digabung.
 */
function labelsFor(options: MasterOption[], value?: string[] | string | null): string {
  const codes = toCodeArray(value)
  if (codes.length === 0) return '-'
  return codes.map((code) => labelFor(options, code)).join(', ')
}

async function reload(page = 1) {
  const targetPage = Math.max(1, page)
  loading.value = true
  errorMessage.value = ''
  try {
    const result = await userService.browseUsers({
      page: targetPage,
      per_page: perPage.value,
      term: searchTerm.value.trim(),
      role: roleFilter.value.trim(),
      desc: sortDesc.value,
    })
    users.value = result.data ?? []
    pagination.value = {
      current_page: result.current_page ?? targetPage,
      last_page: result.last_page ?? 1,
      per_page: result.per_page ?? perPage.value,
      total: result.total ?? 0,
      from: result.from,
      to: result.to,
    }
  } catch (error) {
    console.error('Gagal mengambil daftar pengguna:', error)
    users.value = []
    errorMessage.value = 'Gagal memuat daftar pengguna. Periksa koneksi ke server.'
  } finally {
    loading.value = false
  }
}

const debouncedReload = useDebounceFn(() => reload(1), 400)

function toggleSort() {
  sortDesc.value = sortDesc.value === 1 ? 0 : 1
  reload(1)
}

function openHierarchy(user: UserCrmItem) {
  router.push({ path: routes.User.UserHierarchy, query: { id: String(user.id) } })
}

function openUserDetail(user: UserCrmItem) {
  router.push({ path: routes.User.UserList, query: { detail: String(user.id) } })
}

function editUser(id: number) {
  router.push({ path: routes.User.AddUser, query: { id: String(id) } })
}

function openRoles(user: UserCrmItem) {
  router.push({ path: routes.User.Roles, query: { userId: String(user.id) } })
}

async function deleteUser(user: UserCrmItem) {
  const confirmation = await Swal.fire({
    icon: 'warning',
    title: 'Hapus pengguna ini?',
    text: `${userFullName(user)} akan dihapus permanen dari sistem.`,
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus',
    cancelButtonText: 'Batal',
    confirmButtonColor: 'var(--theme-default)',
  })
  if (!confirmation.isConfirmed) return

  try {
    await userService.crudUser({ choice: 'd', action: 'd', id: user.id })
    await Swal.fire({
      icon: 'success',
      title: 'Pengguna dihapus',
      confirmButtonColor: 'var(--theme-default)',
    })
    reload(pagination.value.current_page)
  } catch (error) {
    console.error('Gagal menghapus pengguna:', error)
    const parsed = parseBackendError(error, 'Gagal Menghapus Pengguna')
    await Swal.fire({
      icon: 'error',
      title: parsed.title,
      text: parsed.message,
      confirmButtonColor: 'var(--theme-default)',
    })
  }
}

onMounted(async () => {
  masterOptions.value = await userService.loadMasterOptions()
  reload(1)
})
</script>

<style scoped>
/* ─── Tombol Tambah User (disamakan dengan tombol Tambah Kontak) ───────── */
.add-user-button {
  display: inline-flex;
  width: auto;
  height: 44px !important;
  min-height: 44px !important;
  max-height: 44px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-color: var(--app-primary, #18a6e4) !important;
  border-radius: 8px;
  margin: 0 !important;
  padding: 0 18px;
  background-color: var(--app-primary, #18a6e4) !important;
  color: #ffffff !important;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

.add-user-button:hover,
.add-user-button:focus {
  border-color: var(--app-primary-hover, #1493cc) !important;
  background-color: var(--app-primary-hover, #1493cc) !important;
}

.add-user-button span,
.add-user-button svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}

/* ─── Sticky table header ───────────────────────────────────────────────── */
.crm-table-scroll {
  max-height: 65vh;
  overflow-y: auto;
}
.crm-table-scroll thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--white, #fff);
  /* Garis bawah tetap terlihat saat baris tabel lewat di bawah header */
  box-shadow: inset 0 -1px 0 #dee2e6;
}

.user-detail-cell {
  cursor: pointer;
  outline: none;
}

.user-detail-name {
  color: var(--app-primary-deep, #032a4e);
  transition: color 0.2s ease;
}

.user-detail-cell:hover .user-detail-name,
.user-detail-cell:focus-visible .user-detail-name {
  color: var(--theme-default, #18a6e4);
}

.user-detail-cell:focus-visible {
  box-shadow: inset 0 0 0 2px
    color-mix(in srgb, var(--theme-default, #18a6e4) 35%, transparent);
}

.user-actions {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.user-action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid
    color-mix(in srgb, var(--theme-default, #18a6e4) 18%, #edf1f5);
  border-radius: 8px;
  background-color: color-mix(
    in srgb,
    var(--theme-default, #18a6e4) 5%,
    #fff
  );
  box-shadow: 0 3px 12px
    color-mix(in srgb, var(--theme-default, #18a6e4) 10%, transparent);
  line-height: 1;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.user-action-button:hover {
  border-color: var(--theme-default, #18a6e4);
  background-color: var(--theme-default, #18a6e4);
  box-shadow: 0 5px 14px
    color-mix(in srgb, var(--theme-default, #18a6e4) 28%, transparent);
  transform: translateY(-1px);
}

.user-action-button:focus-visible {
  outline: 2px solid var(--theme-default, #18a6e4);
  outline-offset: 2px;
}

.user-action-icon {
  display: block;
  flex: 0 0 auto;
}

.user-action-button:hover :deep(.user-action-icon) {
  color: #fff !important;
  --solar-secondary-color: #fff !important;
  --solar-secondary-opacity: 0.5 !important;
}

.user-action-button--hierarchy:hover :deep(.user-action-icon) {
  --solar-secondary-opacity: 1 !important;
}

.user-action-button--delete:hover {
  border-color: var(--bs-danger, #dc3545);
  background-color: var(--bs-danger, #dc3545);
  box-shadow: 0 5px 14px
    color-mix(in srgb, var(--bs-danger, #dc3545) 30%, transparent);
}

.user-action-icon--rotated {
  transform: rotate(180deg);
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 2px;
  border: none;
  background: var(--white);
  box-shadow: 0px 0px 28px 6px rgba(235, 235, 235, 0.4);
  cursor: pointer;
  padding: 0;
  color: #89939e;
  line-height: 1;
}
.action-btn i {
  font-size: 14px;
  line-height: 1;
}
.action-btn:hover {
  background: #f0f0f0;
  color: #52526c;
}

/* ─── Pagination footer (disamakan dengan daftar Kontak) ───────────────── */
.pagination-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.pagination-button {
  display: inline-flex;
  width: auto;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem !important;
  padding-inline: 0.875rem;
}

.pagination-pages {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.pagination-page-button {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem !important;
  padding: 0;
  background: #ffffff;
  color: #475569;
  font-weight: 600;
}

.pagination-page-button:hover:not(:disabled) {
  border-color: var(--app-primary, #18a6e4);
  color: var(--app-primary, #18a6e4);
}

.pagination-page-button--active,
.pagination-page-button--active:disabled {
  border-color: var(--app-primary, #18a6e4);
  background: var(--app-primary, #18a6e4);
  color: #ffffff;
  opacity: 1;
}

.pagination-ellipsis {
  min-width: 20px;
  color: #64748b;
  text-align: center;
}
</style>
