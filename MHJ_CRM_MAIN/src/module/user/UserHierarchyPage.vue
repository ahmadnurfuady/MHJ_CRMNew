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

      <div v-if="loading" class="text-center py-5">
        <LoadingSpinner text="Memuat data hierarki..." />
      </div>

      <div v-else-if="error" class="alert alert-light-danger border-left-danger">
        <SolarIcon name="fa-exclamation-triangle" class="me-2" />{{ error }}
      </div>

      <div v-else-if="data" class="uh-tree">
        <!-- Toolbar expand/collapse semua -->
        <div class="uh-tree__toolbar">
          <button type="button" class="uh-tree__toolbar-btn" @click="expandAll">
            <vue-feather type="chevrons-down" size="12" class="me-1" />
            Buka semua
          </button>
          <button type="button" class="uh-tree__toolbar-btn" @click="collapseAll">
            <vue-feather type="chevrons-up" size="12" class="me-1" />
            Tutup semua
          </button>
        </div>

        <!-- Legenda -->
        <div class="uh-tree__legend">
          <span class="uh-tree__legend-item">
            <span class="uh-tree__legend-dot uh-tree__legend-dot--atasan"></span> Atasan
          </span>
          <span class="uh-tree__legend-item">
            <span class="uh-tree__legend-dot uh-tree__legend-dot--current"></span> Pengguna ini
          </span>
          <span class="uh-tree__legend-item">
            <span class="uh-tree__legend-dot uh-tree__legend-dot--jabatan"></span> Jabatan bawahan
          </span>
        </div>

        <ul class="uh-tree__root" role="tree">

          <!-- ── Atasan Langsung ──────────────────────────────── -->
          <li class="uh-tree__node" role="treeitem" :aria-expanded="expanded.atasan">
            <div class="uh-tree__row" @click="toggle('atasan')">
              <button
                type="button"
                class="uh-tree__chev"
                :class="{ 'is-open': expanded.atasan }"
                :aria-label="expanded.atasan ? 'Tutup' : 'Buka'"
              >
                <vue-feather type="chevron-right" size="14" />
              </button>
              <span class="uh-tree__icon uh-tree__icon--atasan">
                <vue-feather type="chevrons-up" size="13" />
              </span>
              <span class="uh-tree__title">Atasan Langsung</span>
              <span class="uh-tree__count">{{ data.atasan.length }}</span>
            </div>

            <ul v-show="expanded.atasan" class="uh-tree__children">
              <li
                v-if="data.atasan.length === 0"
                class="uh-tree__leaf uh-tree__leaf--empty"
              >
                <span class="uh-tree__leaf-icon"><vue-feather type="info" size="12" /></span>
                <span class="uh-tree__leaf-text">Tidak ada atasan langsung</span>
              </li>

              <li
                v-for="person in data.atasan"
                :key="`atasan-${person.id}`"
                class="uh-tree__leaf uh-tree__leaf--atasan"
              >
                <span class="uh-tree__leaf-icon"><vue-feather type="user" size="13" /></span>
                <span class="uh-tree__leaf-text">
                  <span class="fw-semibold">{{ person.name }}</span>
                  <span class="uh-tree__leaf-sub">{{ person.nama_jabatan || '—' }}</span>
                </span>
              </li>
            </ul>
          </li>

          <!-- ── Pengguna Ini (focal) ─────────────────────────── -->
          <li class="uh-tree__node" role="treeitem">
            <div class="uh-tree__row uh-tree__row--current">
              <span class="uh-tree__chev uh-tree__chev--placeholder" aria-hidden="true"></span>
              <span class="uh-tree__icon uh-tree__icon--current">
                <vue-feather type="user-check" size="13" />
              </span>
              <span class="uh-tree__title">
                {{ data.current_user.name }}
                <span class="uh-tree__current-sub">
                  — {{ data.current_user.nama_jabatan || '—' }}
                </span>
              </span>
              <span class="uh-tree__badge--current">Pengguna ini</span>
            </div>
          </li>

          <!-- ── Semua Bawahan (per jabatan, berjenjang) ──────── -->
          <li class="uh-tree__node" role="treeitem" :aria-expanded="expanded.bawahan">
            <div class="uh-tree__row" @click="toggle('bawahan')">
              <button
                type="button"
                class="uh-tree__chev"
                :class="{ 'is-open': expanded.bawahan }"
                :aria-label="expanded.bawahan ? 'Tutup' : 'Buka'"
              >
                <vue-feather type="chevron-right" size="14" />
              </button>
              <span class="uh-tree__icon uh-tree__icon--bawahan">
                <vue-feather type="chevrons-down" size="13" />
              </span>
              <span class="uh-tree__title">Semua Bawahan</span>
              <span class="uh-tree__count">{{ data.bawahan.length }}</span>
            </div>

            <ul v-show="expanded.bawahan" class="uh-tree__children">
              <li
                v-if="data.bawahan.length === 0"
                class="uh-tree__leaf uh-tree__leaf--empty"
              >
                <span class="uh-tree__leaf-icon"><vue-feather type="info" size="12" /></span>
                <span class="uh-tree__leaf-text">Tidak ada bawahan</span>
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
import type { UserHierarchyResponse } from '@/types/user'
import JabatanTreeNode, { type JabatanTreeNodeData } from './JabatanTreeNode.vue'

// Styles tree dipakai bareng JabatanTreeNode (rekursif). Diimport sebagai CSS
// global supaya menembus batas scoped-style tiap komponen.
import './hierarchy-tree.css'

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
 * BE mengirim semua jabatan turunan rekursif dalam satu list + parent_id-nya,
 * jadi anak di-link ke induk via parent_id = idjabatan induk. Jabatan apa pun
 * yang induknya tidak ada di list dianggap root level (anak langsung dari
 * jabatan current_user).
 */
const bawahanTree = computed<JabatanTreeNodeData[]>(() => {
  if (!data.value?.bawahan.length) return []

  const byJabatan = new Map<number, JabatanTreeNodeData>()
  for (const person of data.value.bawahan) {
    const idj = Number(person.idjabatan)
    if (!Number.isFinite(idj) || idj <= 0) continue
    let node = byJabatan.get(idj)
    if (!node) {
      node = {
        idjabatan: idj,
        jabatan: person.nama_jabatan?.trim() || 'Tanpa Jabatan',
        parentId: Number(person.parent_id) || null,
        members: [],
        children: []
      }
      byJabatan.set(idj, node)
    }
    if (person.id !== null) node.members.push(person)
  }

  const roots: JabatanTreeNodeData[] = []
  for (const node of byJabatan.values()) {
    const parent = node.parentId ? byJabatan.get(node.parentId) : null
    if (parent) parent.children.push(node)
    else roots.push(node)
  }
  return roots
})

const expanded = reactive({ atasan: true, bawahan: true })
const jabatanOpen = reactive<Record<number, boolean>>({})

function toggle(key: 'atasan' | 'bawahan') {
  expanded[key] = !expanded[key]
}
function toggleJabatan(idjabatan: number) {
  jabatanOpen[idjabatan] = jabatanOpen[idjabatan] === false
}

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
