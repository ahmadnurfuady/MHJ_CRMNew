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
      <div v-if="jabatanList.length > 0" class="d-flex justify-content-end gap-2 mb-2">
        <button type="button" class="btn btn-sm btn-light" @click="expandAll">
          <i class="fa-solid fa-angles-down pe-1"></i>Buka Semua
        </button>
        <button type="button" class="btn btn-sm btn-light" @click="collapseAll">
          <i class="fa-solid fa-angles-up pe-1"></i>Tutup Semua
        </button>
      </div>
      <div class="table-responsive custom-scrollbar">
        <table class="table table-hover mhj-data-table align-middle">
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
                <LoadingSpinner text="Memuat data jabatan..." />
              </td>
            </tr>
            <tr v-else-if="errorMessage">
              <td colspan="5" class="text-center text-danger py-4">{{ errorMessage }}</td>
            </tr>
            <tr v-else-if="jabatanList.length === 0">
              <td colspan="5" class="text-center py-4">Belum ada data jabatan.</td>
            </tr>
            <tr v-for="(row, index) in visibleRows" :key="row.item.id">
              <td>{{ index + 1 }}</td>
              <td>
                <div class="tree-cell" :style="{ paddingLeft: `${row.depth * 24}px` }">
                  <button
                    v-if="row.hasChildren"
                    type="button"
                    class="tree-toggle"
                    :title="isExpanded(row.item.id) ? 'Tutup' : 'Buka'"
                    @click="toggleNode(row.item.id)"
                  >
                    <i
                      class="fa-solid"
                      :class="isExpanded(row.item.id) ? 'fa-chevron-down' : 'fa-chevron-right'"
                    ></i>
                  </button>
                  <span v-else class="tree-toggle tree-leaf">
                    <i class="fa-solid fa-circle"></i>
                  </span>
                  <span :class="row.depth === 0 ? 'fw-bold' : 'fw-semibold'">
                    {{ row.item.nama_jabatan }}
                  </span>
                  <span v-if="row.hasChildren" class="badge badge-light-primary ms-2">
                    {{ row.childCount }}
                  </span>
                </div>
              </td>
              <td>{{ row.item.keterangan || '-' }}</td>
              <td>{{ formatDate(row.item.created_at) }}</td>
              <td class="text-end text-nowrap">
                <div class="product-action common-align gap-2 justify-content-end">
                  <a
                    v-if="canMasterJabatan('koreksi')"
                    class="square-white"
                    title="Edit jabatan"
                    href="#"
                    @click.prevent="openEdit(row.item)"
                  >
                    <SvgIcon icon="edit-content" style="width: 25px; height: 25px;" />
                  </a>
                  <a
                    v-if="canMasterJabatan('hapus')"
                    class="square-white"
                    title="Hapus jabatan"
                    href="#"
                    @click.prevent="confirmDelete(row.item)"
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
            <div class="mb-3">
              <label class="form-label" for="parent_id">Parent Jabatan</label>
              <select id="parent_id" v-model="form.parent_id" class="form-select">
                <option :value="null">- Tidak ada (level teratas) -</option>
                <option v-for="opt in parentOptions" :key="opt.id" :value="opt.id">
                  {{ opt.label }}
                </option>
              </select>
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
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'

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

const form = reactive<{ nama_jabatan: string; keterangan: string; parent_id: number | null }>({
  nama_jabatan: '',
  keterangan: '',
  parent_id: null,
})

const isEditMode = computed(() => editingId.value !== null)

/** Kumpulan id jabatan yang sedang diedit beserta seluruh turunannya. */
function descendantIds(rootId: number): Set<number> {
  const ids = new Set<number>([rootId])
  let added = true
  while (added) {
    added = false
    for (const item of jabatanList.value) {
      if (item.parent_id != null && ids.has(item.parent_id) && !ids.has(item.id)) {
        ids.add(item.id)
        added = true
      }
    }
  }
  return ids
}

interface TreeRow {
  item: MasterJabatanItem
  depth: number
  hasChildren: boolean
  childCount: number
}

const childrenMap = computed(() => {
  const ids = new Set(jabatanList.value.map((item) => item.id))
  const map = new Map<number | null, MasterJabatanItem[]>()
  for (const item of jabatanList.value) {
    // parent yang tidak ditemukan (terhapus / tidak valid) diperlakukan sebagai root.
    const key = item.parent_id != null && ids.has(item.parent_id) && item.parent_id !== item.id
      ? item.parent_id
      : null
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(item)
  }
  for (const list of map.values()) {
    list.sort((a, b) => a.nama_jabatan.localeCompare(b.nama_jabatan))
  }
  return map
})

/** Seluruh node dalam urutan depth-first; data yang membentuk siklus tetap ditampilkan sebagai root. */
const treeRows = computed<TreeRow[]>(() => {
  const rows: TreeRow[] = []
  const visited = new Set<number>()
  const walk = (parentId: number | null, depth: number) => {
    for (const item of childrenMap.value.get(parentId) ?? []) {
      if (visited.has(item.id)) continue
      visited.add(item.id)
      const childCount = childrenMap.value.get(item.id)?.length ?? 0
      rows.push({ item, depth, hasChildren: childCount > 0, childCount })
      walk(item.id, depth + 1)
    }
  }
  walk(null, 0)
  for (const item of jabatanList.value) {
    if (!visited.has(item.id)) {
      visited.add(item.id)
      rows.push({ item, depth: 0, hasChildren: false, childCount: 0 })
    }
  }
  return rows
})

const collapsedIds = ref(new Set<number>())

function isExpanded(id: number): boolean {
  return !collapsedIds.value.has(id)
}

function toggleNode(id: number) {
  const next = new Set(collapsedIds.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  collapsedIds.value = next
}

function expandAll() {
  collapsedIds.value = new Set()
}

function collapseAll() {
  collapsedIds.value = new Set(treeRows.value.filter((row) => row.hasChildren).map((row) => row.item.id))
}

// Sembunyikan baris yang salah satu leluhurnya sedang ditutup.
const visibleRows = computed(() => {
  const rows: TreeRow[] = []
  let hiddenBelowDepth: number | null = null
  for (const row of treeRows.value) {
    if (hiddenBelowDepth !== null && row.depth > hiddenBelowDepth) continue
    hiddenBelowDepth = null
    rows.push(row)
    if (row.hasChildren && !isExpanded(row.item.id)) hiddenBelowDepth = row.depth
  }
  return rows
})

// Saat edit, jabatan itu sendiri & turunannya tidak boleh dipilih sebagai parent (cegah siklus).
const parentOptions = computed(() => {
  const excluded = editingId.value === null ? new Set<number>() : descendantIds(editingId.value)
  return treeRows.value
    .filter((row) => !excluded.has(row.item.id))
    .map((row) => ({
      id: row.item.id,
      label: `${'    '.repeat(row.depth)}${row.depth > 0 ? '└ ' : ''}${row.item.nama_jabatan}`,
    }))
})

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
  form.parent_id = null
  showModal.value = true
}

function openEdit(item: MasterJabatanItem) {
  editingId.value = item.id
  form.nama_jabatan = item.nama_jabatan
  form.keterangan = item.keterangan ?? ''
  form.parent_id = item.parent_id ?? null
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
      await masterDataService.updateJabatan(editingId.value, form.nama_jabatan, keterangan, form.parent_id)
    } else {
      await masterDataService.createJabatan(form.nama_jabatan, keterangan, form.parent_id)
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
.tree-cell {
  display: flex;
  align-items: center;
  gap: 6px;
}
.tree-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  padding: 0;
  color: #89939e;
  cursor: pointer;
}
.tree-toggle i {
  font-size: 11px;
}
button.tree-toggle:hover {
  background: #f0f0f0;
  color: var(--theme-default);
}
.tree-leaf {
  cursor: default;
}
.tree-leaf i {
  font-size: 5px;
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
</style>
