<template>
  <div class="card">
    <div class="card-header card-no-border d-flex justify-content-between align-items-center">
      <h4 class="mb-0">Daftar Pengguna CRM</h4>
      <router-link v-if="canUser('tambah')" class="btn btn-primary f-w-500" :to="routes.User.AddUser">
        <i class="fa-solid fa-plus pe-2"></i>Tambah User
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

      <div class="table-responsive custom-scrollbar">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col" role="button" @click="toggleSort">
                Nama Lengkap
                <i class="fa-solid ps-1" :class="sortDesc ? 'fa-arrow-down-z-a' : 'fa-arrow-down-a-z'"></i>
              </th>
              <th scope="col">Email</th>
              <th scope="col">No. Handphone</th>
              <th scope="col">Jabatan</th>
              <th scope="col">Cabang</th>
              <th scope="col">Devisi</th>
              <th scope="col">Tipe Marketing</th>
              <th scope="col" class="text-end">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="9" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="mt-2 f-m-light">Memuat data pengguna...</div>
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
              <td class="fw-semibold">{{ userFullName(user) }}</td>
              <td>{{ user.email || '-' }}</td>
              <td>{{ user.Telephone || '-' }}</td>
              <td>{{ labelFor(masterOptions.jabatan, String(user.idjabatan ?? '')) }}</td>
              <td>{{ labelFor(masterOptions.cabang, user.KodeCabang) }}</td>
              <td>{{ labelFor(masterOptions.devisi, user.KodeDevisi) }}</td>
              <td>{{ labelFor(masterOptions.tipeMarketing, user.KodeTipeMarketing) }}</td>
              <td class="text-end text-nowrap">
                <div class="product-action common-align gap-2 justify-content-end">
                  <a
                    class="square-white"
                    title="Roles & Permission"
                    href="#"
                    @click.prevent="openRoles(user)"
                  >
                    <SvgIcon icon="profile-check" style="width: 25px; height: 25px;" />
                  </a>
                  <a
                    v-if="canUser('koreksi')"
                    class="square-white"
                    title="Edit pengguna"
                    href="#"
                    @click.prevent="editUser(user.id)"
                  >
                    <SvgIcon icon="edit-content" style="width: 25px; height: 25px;" />
                  </a>
                  <a
                    v-if="canUser('hapus')"
                    class="square-white"
                    title="Hapus pengguna"
                    href="#"
                    @click.prevent="deleteUser(user)"
                  >
                    <SvgIcon icon="trash1" style="width: 25px; height: 25px;" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3">
        <span class="f-w-500">
          Menampilkan {{ pagination.from || 0 }} - {{ pagination.to || 0 }} dari
          {{ pagination.total }} data
        </span>
        <ul class="pagination pagination-primary mb-0">
          <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }">
            <button class="page-link" @click="reload(pagination.current_page - 1)">Prev</button>
          </li>
          <li class="page-item active">
            <span class="page-link">
              {{ pagination.current_page }} / {{ pagination.last_page || 1 }}
            </span>
          </li>
          <li
            class="page-item"
            :class="{ disabled: pagination.current_page >= pagination.last_page }"
          >
            <button class="page-link" @click="reload(pagination.current_page + 1)">Next</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import Swal from 'sweetalert2'

import { routes } from '@/router/routes'
import { userFullName, userService } from '@/services/userService'
import { canUser } from '@/module/user/userPermission'
import { parseBackendError } from '@/utils/errorParser'
import SelectInput from '@/components/ui/SelectInput.vue'
import type { MasterOption, UserCrmItem, UserMasterOptions } from '@/types/user'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

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
  return users.value.filter((user) => user.KodeCabang === cabangFilter.value)
})

function rowNumber(index: number): number {
  return (pagination.value.current_page - 1) * pagination.value.per_page + index + 1
}

function labelFor(options: MasterOption[], code?: string | null): string {
  if (!code) return '-'
  return options.find((option) => option.value === code)?.label || code
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
</style>
