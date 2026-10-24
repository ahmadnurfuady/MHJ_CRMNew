<template>
  <div class="card">
    <div class="card-header card-no-border d-flex align-items-center gap-3">
      <router-link :to="routes.User.UserList" class="btn btn-light btn-sm">
        <vue-feather type="arrow-left" size="15" class="me-1" />
        Kembali
      </router-link>
      <div>
        <h4 class="mb-0">Hierarki Pengguna</h4>
        <p class="f-m-light mt-1 mb-0">Struktur atasan dan bawahan berdasarkan jabatan.</p>
      </div>
    </div>

    <div class="card-body">

      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">
        <LoadingSpinner text="Memuat data hierarki..." />
      </div>

      <!-- Error -->
      <div v-else-if="error" class="alert alert-light-danger border-left-danger">
        <SolarIcon name="fa-exclamation-triangle" class="me-2" />{{ error }}
      </div>

      <!-- Konten hierarki sebagai tree view -->
      <div v-else-if="data" class="tree-view">
        <!-- Toolbar: expand/collapse semua -->
        <div class="tree-toolbar">
          <button type="button" class="tree-toolbar__btn" @click="expandAll">
            <vue-feather type="chevrons-down" size="12" class="me-1" />
            Buka semua
          </button>
          <button type="button" class="tree-toolbar__btn" @click="collapseAll">
            <vue-feather type="chevrons-up" size="12" class="me-1" />
            Tutup semua
          </button>
        </div>

        <!-- Legenda -->
        <div class="tree-legend">
          <span class="tree-legend__item">
            <span class="tree-legend__dot tree-legend__dot--atasan"></span> Atasan
          </span>
          <span class="tree-legend__item">
            <span class="tree-legend__dot tree-legend__dot--current"></span> Pengguna ini
          </span>
          <span class="tree-legend__item">
            <span class="tree-legend__dot tree-legend__dot--jabatan"></span> Jabatan bawahan
          </span>
        </div>

        <ul class="tree-root" role="tree">

          <!-- ── Atasan Langsung ───────────────────────────────── -->
          <li class="tree-node" role="treeitem" :aria-expanded="expanded.atasan">
            <div class="tree-node__row" @click="toggle('atasan')">
              <button
                type="button"
                class="tree-node__chev"
                :class="{ 'is-open': expanded.atasan }"
                :aria-label="expanded.atasan ? 'Tutup' : 'Buka'"
              >
                <vue-feather type="chevron-right" size="14" />
              </button>
              <span class="tree-node__icon tree-node__icon--atasan">
                <vue-feather type="chevrons-up" size="13" />
              </span>
              <span class="tree-node__title">Atasan Langsung</span>
              <span class="tree-node__count">{{ data.atasan.length }}</span>
            </div>

            <ul v-show="expanded.atasan" class="tree-children">
              <li
                v-if="data.atasan.length === 0"
                class="tree-leaf tree-leaf--empty"
              >
                <span class="tree-leaf__icon"><vue-feather type="info" size="12" /></span>
                <span class="tree-leaf__text">Tidak ada atasan langsung</span>
              </li>

              <li
                v-for="person in data.atasan"
                :key="`atasan-${person.id}`"
                class="tree-leaf tree-leaf--atasan"
              >
                <span class="tree-leaf__icon"><vue-feather type="user" size="13" /></span>
                <span class="tree-leaf__text">
                  <span class="fw-semibold">{{ person.name }}</span>
                  <span class="tree-leaf__sub">{{ person.nama_jabatan || '—' }}</span>
                </span>
              </li>
            </ul>
          </li>

          <!-- ── Pengguna Ini (focal) ──────────────────────────── -->
          <li class="tree-node tree-node--current" role="treeitem">
            <div class="tree-node__row tree-node__row--current">
              <span class="tree-node__chev tree-node__chev--placeholder" aria-hidden="true"></span>
              <span class="tree-node__icon tree-node__icon--current">
                <vue-feather type="user-check" size="13" />
              </span>
              <span class="tree-node__title">
                {{ data.current_user.name }}
                <span class="tree-node__current-sub">
                  — {{ data.current_user.nama_jabatan || '—' }}
                </span>
              </span>
              <span class="tree-node__badge tree-node__badge--current">Pengguna ini</span>
            </div>
          </li>

          <!-- ── Semua Bawahan (per jabatan) ──────────────────── -->
          <li class="tree-node" role="treeitem" :aria-expanded="expanded.bawahan">
            <div class="tree-node__row" @click="toggle('bawahan')">
              <button
                type="button"
                class="tree-node__chev"
                :class="{ 'is-open': expanded.bawahan }"
                :aria-label="expanded.bawahan ? 'Tutup' : 'Buka'"
              >
                <vue-feather type="chevron-right" size="14" />
              </button>
              <span class="tree-node__icon tree-node__icon--bawahan">
                <vue-feather type="chevrons-down" size="13" />
              </span>
              <span class="tree-node__title">Semua Bawahan</span>
              <span class="tree-node__count">{{ data.bawahan.length }}</span>
            </div>

            <ul v-show="expanded.bawahan" class="tree-children">
              <li
                v-if="data.bawahan.length === 0"
                class="tree-leaf tree-leaf--empty"
              >
                <span class="tree-leaf__icon"><vue-feather type="info" size="12" /></span>
                <span class="tree-leaf__text">Tidak ada bawahan</span>
              </li>

              <JabatanTreeNode
                v-for="node in bawahanTree"
                :key="`jab-${node.idjabatan}`"
                :node="node"
                :open-map="jabatanOpen"
                @toggle="toggleJabatan"
              />
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { routes } from '@/router/routes'
import { getUserHierarchy } from '@/services/userService'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import type { HierarchyUser, UserHierarchyResponse } from '@/types/user'
import JabatanTreeNode, { type JabatanTreeNodeData } from './JabatanTreeNode.vue'

const route = useRoute()

const loading = ref(true)
const error = ref<string | null>(null)
const data = ref<UserHierarchyResponse | null>(null)

const userId = computed(() => {
  const raw = Array.isArray(route.query.id) ? route.query.id[0] : route.query.id
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : null
})

/**
 * Susun daftar bawahan datar jadi pohon berjenjang.
 * BE mengirim semua jabatan turunan (rekursif) dalam satu list + parent_id-nya,
 * jadi anak di-link ke induk via parent_id = idjabatan induk. Jabatan apa pun
 * yang induknya tidak ada di list dianggap root level (anak langsung dari
 * jabatan current_user).
 */
const bawahanTree = computed<JabatanTreeNodeData[]>(() => {
  if (!data.value?.bawahan.length) return []

  // Group berdasarkan idjabatan agar jabatan yang punya banyak user tidak jadi
  // simpul duplikat.
  const byJabatan = new Map<number, JabatanTreeNodeData>()
  for (const person of data.value.bawahan) {
    const idj = Number(person.idjabatan)
    if (!Number.isFinite(idj) || idj <= 0) continue
    let node = byJabatan.get(idj)
    if (!node) {
      node = {
        idjabatan: idj,
        jabatan: person.nama_jabatan?.trim() || 'Tanpa Jabatan',
        members: [],
        children: []
      }
      byJabatan.set(idj, node)
    }
    if (person.id !== null) node.members.push(person)
  }

  // Pasang anak ke induk, atau jadikan root bila induknya tidak ada di set.
  const roots: JabatanTreeNodeData[] = []
  for (const [, node] of byJabatan) {
    const parentId = Number(
      data.value.bawahan.find((p) => Number(p.idjabatan) === node.idjabatan)?.parent_id
    )
    const parent = byJabatan.get(parentId)
    if (parent) {
      parent.children.push(node)
    } else {
      roots.push(node)
    }
  }
  return roots
})

// Default: semua simpul tree terbuka agar hirarki langsung terlihat utuh.
const expanded = reactive({ atasan: true, bawahan: true })
const jabatanOpen = reactive<Record<number, boolean>>({})

function toggle(key: 'atasan' | 'bawahan') {
  expanded[key] = !expanded[key]
}
function toggleJabatan(idjabatan: number) {
  jabatanOpen[idjabatan] = jabatanOpen[idjabatan] === false
}

/** Walk setiap simpul tree agar kita bisa menyentuh semua idjabatan sekaligus. */
function walk(nodes: JabatanTreeNodeData[], fn: (n: JabatanTreeNodeData) => void) {
  for (const n of nodes) {
    fn(n)
    walk(n.children, fn)
  }
}

function expandAll() {
  expanded.atasan = true
  expanded.bawahan = true
  walk(bawahanTree.value, (n) => (jabatanOpen[n.idjabatan] = true))
}
function collapseAll() {
  expanded.atasan = false
  expanded.bawahan = false
  walk(bawahanTree.value, (n) => (jabatanOpen[n.idjabatan] = false))
}

// Simpul baru yang belum pernah di-toggle: default terbuka.
watch(bawahanTree, (roots) => {
  walk(roots, (n) => {
    if (jabatanOpen[n.idjabatan] === undefined) jabatanOpen[n.idjabatan] = true
  })
})

onMounted(async () => {
  if (userId.value === null) {
    error.value = 'ID pengguna tidak ditemukan. Kembali ke halaman User List dan coba lagi.'
    loading.value = false
    return
  }
  try {
    data.value = await getUserHierarchy(userId.value)
  } catch {
    error.value = 'Gagal memuat data hierarki. Silakan coba lagi.'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* ───────────────────────── Tree view ──────────────────────────── */
.tree-view {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 4px;
}

/* Toolbar + legenda */
.tree-toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-bottom: 10px;
}
.tree-toolbar__btn {
  display: inline-flex;
  align-items: center;
  background: #f5f8fb;
  color: #335c7a;
  border: 1px solid #e3eaf1;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
  padding: 4px 10px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.tree-toolbar__btn:hover {
  background: #e9f2f9;
  color: #18A6E4;
}

.tree-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 8px 12px;
  background: #f8fafc;
  border: 1px dashed #e3eaf1;
  border-radius: 8px;
  margin-bottom: 14px;
  font-size: 11.5px;
  color: #6c757d;
}
.tree-legend__item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.tree-legend__dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  display: inline-block;
}
.tree-legend__dot--atasan  { background: rgba(24, 166, 228, 0.25); border: 1px solid #18A6E4; }
.tree-legend__dot--current { background: linear-gradient(135deg, #18A6E4, #127CAB); }
.tree-legend__dot--jabatan { background: rgba(3, 42, 78, 0.08); border: 1px solid #032A4E; }

/* Root list */
.tree-root,
.tree-children {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Tree node generik */
.tree-node { position: relative; }

.tree-node__row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
  user-select: none;
}
.tree-node__row:hover { background: #f5f8fb; }

.tree-node__row--current {
  background: linear-gradient(135deg, #18A6E4 0%, #127CAB 100%);
  color: #fff;
  cursor: default;
  box-shadow: 0 4px 14px rgba(24, 166, 228, 0.25);
}
.tree-node__row--current:hover { background: linear-gradient(135deg, #18A6E4 0%, #127CAB 100%); }

/* Chevron toggle */
.tree-node__chev {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: none;
  background: transparent;
  color: #6c757d;
  padding: 0;
  cursor: pointer;
  transition: transform 0.18s ease;
  flex-shrink: 0;
}
.tree-node__chev.is-open { transform: rotate(90deg); }
.tree-node__chev--placeholder { cursor: default; }

/* Icon di sisi label */
.tree-node__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 5px;
  flex-shrink: 0;
}
.tree-node__icon--atasan  { background: rgba(24, 166, 228, 0.15); color: #18A6E4; }
.tree-node__icon--current { background: rgba(255, 255, 255, 0.22); color: #fff; }
.tree-node__icon--bawahan { background: rgba(24, 166, 228, 0.15); color: #18A6E4; }
.tree-node__icon--jabatan { background: rgba(3, 42, 78, 0.08);    color: #032A4E; }

/* Label */
.tree-node__title {
  font-size: 13.5px;
  font-weight: 600;
  color: inherit;
}
.tree-node__current-sub {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
}

/* Count badge */
.tree-node__count {
  margin-left: auto;
  background: #e9f2f9;
  color: #18A6E4;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 8px;
  border-radius: 999px;
  min-width: 22px;
  text-align: center;
}
.tree-node__badge--current {
  margin-left: auto;
  background: rgba(255, 255, 255, 0.22);
  color: #fff;
  font-size: 10.5px;
  font-weight: 700;
  padding: 2px 9px;
  border-radius: 999px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

/* ─── Garis koneksi (branch lines) ──────────────────────────────── */
.tree-children {
  position: relative;
  padding-left: 28px; /* ruang untuk garis vertikal */
  margin-top: 2px;
}
/* Garis vertikal */
.tree-children::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 10px;
  left: 17px;
  width: 1px;
  background: #d8e2ec;
}
/* Setiap anak dapat garis horizontal T → L */
.tree-children > li {
  position: relative;
  padding-left: 18px;
}
.tree-children > li::before {
  content: "";
  position: absolute;
  top: 18px;
  left: -11px;
  width: 18px;
  height: 1px;
  background: #d8e2ec;
}
/* Anak terakhir: potong garis vertikal pas di titik horizontal */
.tree-children > li:last-child::after {
  content: "";
  position: absolute;
  top: 18px;
  bottom: 0;
  left: -11px;
  width: 1px;
  background: #fff; /* menutup bagian bawah garis vertikal */
}

/* Daun (user individual atau pesan kosong) */
.tree-leaf {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 6px;
  color: #52526c;
  font-size: 13px;
  transition: background 0.15s;
}
.tree-leaf:hover { background: #f5f8fb; }

.tree-leaf--empty {
  color: #9aa5b3;
  font-style: italic;
  font-size: 12.5px;
}

.tree-leaf--atasan .tree-leaf__text .fw-semibold {
  color: #032A4E;
}

.tree-leaf__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.1);
  color: #18A6E4;
  flex-shrink: 0;
}

.tree-leaf__text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}
.tree-leaf__sub {
  font-size: 11.5px;
  color: #6c757d;
  margin-top: 1px;
}

/* ─── Responsif ─────────────────────────────────────────────────── */
@media (max-width: 575px) {
  .tree-view { padding: 0; }
  .tree-children { padding-left: 22px; }
  .tree-children::before { left: 13px; }
  .tree-children > li::before { left: -9px; width: 14px; }
  .tree-children > li:last-child::after { left: -9px; }
  .tree-node__title { font-size: 12.5px; }
}
</style>
