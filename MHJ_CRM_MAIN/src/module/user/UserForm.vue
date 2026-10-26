<template>
  <div class="card">
    <div class="card-header card-no-border">
      <h4 class="mb-0">{{ isEditMode ? 'Edit Pengguna' : 'Tambah Pengguna Baru' }}</h4>
      <p class="f-m-light mt-1 mb-0">
        Lengkapi data pribadi dan penempatan pengguna.
      </p>
    </div>

    <div class="card-body">
      <div v-if="!isAllowed" class="alert alert-warning mb-0">
        Anda tidak memiliki hak akses untuk
        {{ isEditMode ? 'mengubah' : 'menambah' }} pengguna.
      </div>

      <div v-else-if="loadingUser" class="text-center py-5">
        <LoadingSpinner text="Memuat data pengguna..." />
      </div>

      <form v-else novalidate @submit.prevent="submit">
        <!-- Alert Error Cantik & Terstruktur -->
        <div
          v-if="parsedError"
          class="alert alert-light-danger border-left-danger alert-dismissible fade show mb-4 shadow-sm"
          role="alert"
        >
          <div class="d-flex align-items-start gap-3">
            <div class="badge bg-danger p-2 rounded-circle mt-1">
              <SolarIcon name="fa-exclamation-triangle" class="text-white" />
            </div>
            <div class="flex-grow-1">
              <h6 class="txt-danger fw-bold mb-1 d-flex align-items-center gap-2">
                <span>{{ parsedError.title }}</span>
                <span
                  v-if="parsedError.field"
                  class="badge badge-light-danger text-capitalize"
                  style="font-size: 11px;"
                >
                  Kolom: {{ parsedError.field }}
                </span>
              </h6>
              <p class="mb-0 text-dark f-14">
                {{ parsedError.message }}
              </p>

            </div>

            <div class="d-flex flex-column gap-1 align-items-end">
              <button
                type="button"
                class="btn-close position-static p-1"
                aria-label="Close"
                @click="parsedError = null"
              ></button>
            </div>
          </div>
        </div>

        <h6 class="mb-3">Data Pribadi</h6>
        <div class="row g-3 mb-4">
          <div class="col-md-6">
            <label class="form-label" for="firstname">Nama Depan <span class="txt-danger">*</span></label>
            <input id="firstname" v-model.trim="form.firstname" type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label" for="lastname">Nama Belakang <span class="txt-danger">*</span></label>
            <input id="lastname" v-model.trim="form.lastname" type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label" for="email">Email <span class="txt-danger">*</span></label>
            <input id="email" v-model.trim="form.email" type="email" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label" for="password">
              Sandi
              <span v-if="!isEditMode" class="txt-danger">*</span>
              <small v-else class="f-m-light">(biarkan kosong bila tidak diubah)</small>
            </label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="form-control"
              autocomplete="new-password"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label" for="nik">NIK</label>
            <input id="nik" v-model.trim="form.nik" type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label" for="no_handphone">No. Handphone <span class="txt-danger">*</span></label>
            <input
              id="no_handphone"
              v-model.trim="form.no_handphone"
              type="tel"
              class="form-control"
            />
          </div>
        </div>

        <h6 class="mb-3">Penempatan</h6>
        <div class="row g-3 mb-4">

          <div class="col-md-6">
            <label class="form-label" for="kode-cabang">Cabang</label>
            <MultiSelectInput
              id="kode-cabang"
              v-model="form.KodeCabang"
              :options="masterOptions.cabang"
              :placeholder="placeholderFor(masterOptions.cabang)"
            />
            <small class="f-m-light">Bisa dipilih lebih dari satu.</small>
          </div>
          <div class="col-md-6">
            <label class="form-label" for="kode-devisi">Devisi</label>
            <MultiSelectInput
              id="kode-devisi"
              v-model="form.KodeDevisi"
              :options="masterOptions.devisi"
              :placeholder="placeholderFor(masterOptions.devisi)"
            />
            <small class="f-m-light">Bisa dipilih lebih dari satu.</small>
          </div>
          <div class="col-md-6">
            <label class="form-label" for="kode-tipe-marketing">Tipe Marketing</label>
            <MultiSelectInput
              id="kode-tipe-marketing"
              v-model="form.KodeTipeMarketing"
              :options="masterOptions.tipeMarketing"
              :placeholder="placeholderFor(masterOptions.tipeMarketing)"
            />
            <small class="f-m-light">Bisa dipilih lebih dari satu.</small>
          </div>
          <div class="col-md-6">
            <label class="form-label">Jabatan</label>
            <SelectInput
              v-model="form.idjabatan"
              :options="masterOptions.jabatan"
              :placeholder="placeholderFor(masterOptions.jabatan)"
            />
          </div>
        </div>

        <div class="d-flex gap-2">
          <button type="submit" class="btn btn-primary" :disabled="saving">
            {{ saving ? 'Menyimpan...' : 'Simpan' }}
          </button>
          <router-link class="btn btn-light" :to="routes.User.UserList">Batal</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

import { routes } from '@/router/routes'
import { toCodeArray, userService } from '@/services/userService'
import { canUser } from '@/module/user/userPermission'
import { parseBackendError, type ParsedError } from '@/utils/errorParser'
import SelectInput from '@/components/ui/SelectInput.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import MultiSelectInput from '@/components/ui/MultiSelectInput.vue'
import type { MasterOption, UserCrudPayload, UserMasterOptions } from '@/types/user'

const route = useRoute()
const router = useRouter()

const editingId = computed<number | null>(() => {
  const raw = route.query.id
  const value = Number(Array.isArray(raw) ? raw[0] : raw)
  return Number.isFinite(value) && value > 0 ? value : null
})
const isEditMode = computed(() => editingId.value !== null)
const isAllowed = computed(() => canUser(isEditMode.value ? 'koreksi' : 'tambah'))

const masterOptions = ref<UserMasterOptions>({
  cabang: [],
  devisi: [],
  tipeMarketing: [],
  jabatan: [],
})

const loadingUser = ref(false)
const saving = ref(false)
const parsedError = ref<ParsedError | null>(null)

const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  nik: '',
  no_handphone: '',
  // Relasi many-to-many: selalu array kode, kosong berarti belum ada penempatan.
  KodeCabang: [] as string[],
  KodeDevisi: [] as string[],
  KodeTipeMarketing: [] as string[],
  idjabatan: '',
})

function placeholderFor(options: MasterOption[]): string {
  return options.length === 0 ? '-- data master belum tersedia --' : '-- pilih --'
}

function validate(): string {
  if (!form.firstname) return 'Nama depan wajib diisi.'
  if (!form.lastname) return 'Nama belakang wajib diisi.'
  if (!form.email) return 'Email wajib diisi.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Format email tidak valid.'
  if (!form.no_handphone) return 'No. Handphone wajib diisi.'
  if (!isEditMode.value && form.password.length < 6) {
    return 'Sandi wajib diisi minimal 6 karakter.'
  }
  if (isEditMode.value && form.password !== '' && form.password.length < 6) {
    return 'Sandi baru minimal 6 karakter.'
  }
  return ''
}

function buildPayload(): UserCrudPayload {
  const choice = isEditMode.value ? 'u' : 'i'
  const payload: UserCrudPayload = {
    choice,
    action: choice,
    id: editingId.value,
    name: `${form.firstname} ${form.lastname}`.trim(),
    firstname: form.firstname,
    lastname: form.lastname,
    email: form.email,
    no_handphone: form.no_handphone,
    nohandphone: form.no_handphone,
    Telephone: form.no_handphone,
    nik: form.nik,
    primaryteam: null,
    secondaryteam: null,
    stafflevel: null,
    // Dikirim sebagai array; backend meng-encode ke JSON string untuk sp_users_crud.
    KodeCabang: [...form.KodeCabang],
    kodecabang: [...form.KodeCabang],
    KodeDevisi: [...form.KodeDevisi],
    kodedevisi: [...form.KodeDevisi],
    KodeTipeMarketing: [...form.KodeTipeMarketing],
    kodetipemarketing: [...form.KodeTipeMarketing],
    idjabatan: form.idjabatan === '' ? null : Number(form.idjabatan),
  }

  // Sandi hanya dikirim bila diisi — backend mempertahankan sandi lama bila tidak ada.
  if (form.password !== '') {
    payload.password = form.password
  }
  return payload
}

async function submit() {
  parsedError.value = null
  const validationError = validate()
  if (validationError) {
    parsedError.value = {
      title: 'Data Belum Lengkap',
      message: validationError,
    }
    scrollPageToTop()
    return
  }

  saving.value = true
  try {
    await userService.crudUser(buildPayload())
    await Swal.fire({
      icon: 'success',
      title: isEditMode.value ? 'Pengguna diperbarui' : 'Pengguna berhasil ditambahkan',
      confirmButtonColor: 'var(--theme-default)',
    })
    router.push(routes.User.UserList)
  } catch (error) {
    console.error('Gagal menyimpan pengguna:', error)
    parsedError.value = parseBackendError(error, 'Gagal Menyimpan Pengguna')
    scrollPageToTop()
  } finally {
    saving.value = false
  }
}

function scrollPageToTop() {
  const pageContent = document.getElementById('page-content-scroll')
  if (pageContent) {
    pageContent.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

async function prefill(id: number) {
  loadingUser.value = true
  try {
    const user = await userService.fetchUserById(id)
    if (!user) {
      parsedError.value = {
        title: 'Pengguna Tidak Ditemukan',
        message: 'Data pengguna tidak ditemukan di server.',
      }
      return
    }
    form.firstname = user.firstname ?? ''
    form.lastname = user.lastname ?? ''
    form.email = user.email ?? ''
    form.nik = user.nik ?? ''
    form.no_handphone = user.no_handphone ?? user.Telephone ?? ''
    form.KodeCabang = toCodeArray(user.KodeCabang)
    form.KodeDevisi = toCodeArray(user.KodeDevisi)
    form.KodeTipeMarketing = toCodeArray(user.KodeTipeMarketing)
    form.idjabatan = user.idjabatan === null || user.idjabatan === undefined ? '' : String(user.idjabatan)
  } catch (error) {
    console.error('Gagal memuat detail pengguna:', error)
    parsedError.value = parseBackendError(error, 'Gagal Memuat Detail Pengguna')
  } finally {
    loadingUser.value = false
  }
}

onMounted(async () => {
  masterOptions.value = await userService.loadMasterOptions()
  if (editingId.value !== null) {
    await prefill(editingId.value)
  }
})
</script>

