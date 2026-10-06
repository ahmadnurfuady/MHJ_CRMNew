<template>
  <div class="card">
    <div class="card-header card-no-border d-flex justify-content-between align-items-center">
      <h4 class="mb-0">Master Jabatan</h4>
      <button
        v-if="canMasterJabatan('tambah')"
        class="btn btn-primary f-w-500"
        @click="openCreate"
      >
        <i class="fa-solid fa-plus pe-2"></i>Tambah Jabatan
      </button>
    </div>

    <div class="card-body pt-0">
      <div class="table-responsive custom-scrollbar">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col" style="width: 60px">No</th>
              <th scope="col">Nama Jabatan</th>
              <th scope="col">Keterangan</th>
              <th scope="col" style="width: 160px">Tanggal Dibuat</th>
              <th scope="col" class="text-end" style="width: 110px">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="5" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="mt-2 f-m-light">Memuat data jabatan...</div>
              </td>
            </tr>
            <tr v-else-if="errorMessage">
              <td colspan="5" class="text-center text-danger py-4">{{ errorMessage }}</td>
            </tr>
            <tr v-else-if="jabatanList.length === 0">
              <td colspan="5" class="text-center py-4">Belum ada data jabatan.</td>
            </tr>
            <tr v-for="(item, index) in jabatanList" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td class="fw-semibold">{{ item.nama_jabatan }}</td>
              <td>{{ item.keterangan || '-' }}</td>
              <td>{{ formatDate(item.created_at) }}</td>
              <td class="text-end text-nowrap">
                <div class="product-action common-align gap-2 justify-content-end">
                  <a
                    v-if="canMasterJabatan('koreksi')"
                    class="square-white"
                    title="Edit jabatan"
                    href="#"
                    @click.prevent="openEdit(item)"
                  >
                    <SvgIcon icon="edit-content" style="width: 25px; height: 25px;" />
                  </a>
                  <a
                    v-if="canMasterJabatan('hapus')"
                    class="square-white"
                    title="Hapus jabatan"
                    href="#"
                    @click.prevent="confirmDelete(item)"
                  >
                    <SvgIcon icon="trash1" style="width: 25px; height: 25px;" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Modal Tambah / Edit Jabatan -->
  <div
    v-if="showModal"
    class="modal fade show d-block"
    tabindex="-1"
    style="background: rgba(0, 0, 0, 0.5)"
    @click.self="closeModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ isEditMode ? 'Edit Jabatan' : 'Tambah Jabatan Baru' }}
          </h5>
          <button type="button" class="btn-close" aria-label="Tutup" @click="closeModal"></button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label" for="nama_jabatan">
                Nama Jabatan <span class="txt-danger">*</span>
              </label>
              <input
                id="nama_jabatan"
                v-model.trim="form.nama_jabatan"
                type="text"
                class="form-control"
                placeholder="Contoh: Product Specialist"
              />
            </div>
            <div class="mb-1">
              <label class="form-label" for="keterangan">Keterangan</label>
              <textarea
                id="keterangan"
                v-model.trim="form.keterangan"
                class="form-control"
                rows="3"
                placeholder="Deskripsi lingkup tugas (opsional)"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" @click="closeModal">Batal</button>
            <button type="submit" class="btn btn-primary" :disabled="submitting">
              {{ submitting ? 'Menyimpan...' : 'Simpan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, defineAsyncComponent } from 'vue'
import Swal from 'sweetalert2'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

import { masterDataService } from '@/services/masterDataService'
import { canMasterJabatan } from '@/module/master/masterPermission'
import { parseBackendError } from '@/utils/errorParser'
import type { MasterJabatanItem } from '@/types/master'

const jabatanList = ref<MasterJabatanItem[]>([])
const loading = ref(false)
const errorMessage = ref('')

const showModal = ref(false)
const submitting = ref(false)
const editingId = ref<number | null>(null)

const form = reactive({ nama_jabatan: '', keterangan: '' })

const isEditMode = computed(() => editingId.value !== null)

function formatDate(value?: string | null): string {
  if (!value) return '-'
  // Backend mengirim "YYYY-MM-DD HH:mm:ss.sss"; tampilkan bagian tanggalnya saja.
  return value.slice(0, 10)
}

async function fetchList() {
  loading.value = true
  errorMessage.value = ''
  try {
    jabatanList.value = await masterDataService.getJabatan()
  } catch (error) {
    console.error('Gagal memuat data jabatan:', error)
    errorMessage.value = 'Gagal memuat data jabatan. Periksa koneksi ke server.'
  } finally {
    loading.value = false
  }
}

function openCreate() {
  editingId.value = null
  form.nama_jabatan = ''
  form.keterangan = ''
  showModal.value = true
}

function openEdit(item: MasterJabatanItem) {
  editingId.value = item.id
  form.nama_jabatan = item.nama_jabatan
  form.keterangan = item.keterangan ?? ''
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

async function submitForm() {
  if (!form.nama_jabatan) {
    await Swal.fire({
      icon: 'warning',
      title: 'Data Belum Lengkap',
      text: 'Nama jabatan wajib diisi.',
      confirmButtonColor: 'var(--theme-default)',
    })
    return
  }
  submitting.value = true
  try {
    const keterangan = form.keterangan || null
    if (editingId.value !== null) {
      await masterDataService.updateJabatan(editingId.value, form.nama_jabatan, keterangan)
    } else {
      await masterDataService.createJabatan(form.nama_jabatan, keterangan)
    }
    showModal.value = false
    await Swal.fire({
      icon: 'success',
      title: isEditMode.value ? 'Jabatan diperbarui' : 'Jabatan ditambahkan',
      confirmButtonColor: 'var(--theme-default)',
    })
    await fetchList()
  } catch (error) {
    console.error('Gagal menyimpan jabatan:', error)
    showModal.value = false
    const parsed = parseBackendError(error, 'Gagal Menyimpan Jabatan')
    await Swal.fire({
      icon: 'error',
      title: parsed.title,
      text: parsed.message,
      confirmButtonColor: 'var(--theme-default)',
    })
  } finally {
    submitting.value = false
  }
}

async function confirmDelete(item: MasterJabatanItem) {
  const confirmation = await Swal.fire({
    icon: 'warning',
    title: 'Hapus jabatan ini?',
    text: `Jabatan "${item.nama_jabatan}" akan dihapus permanen.`,
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus',
    cancelButtonText: 'Batal',
    confirmButtonColor: 'var(--theme-default)',
  })
  if (!confirmation.isConfirmed) return

  try {
    await masterDataService.deleteJabatan(item.id)
    await Swal.fire({
      icon: 'success',
      title: 'Jabatan dihapus',
      confirmButtonColor: 'var(--theme-default)',
    })
    await fetchList()
  } catch (error) {
    console.error('Gagal menghapus jabatan:', error)
    const parsed = parseBackendError(error, 'Gagal Menghapus Jabatan')
    await Swal.fire({
      icon: 'error',
      title: parsed.title,
      text: parsed.message,
      confirmButtonColor: 'var(--theme-default)',
    })
  }
}

onMounted(fetchList)
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
