<template>
  <li class="tree-node tree-node--jabatan" role="treeitem" :aria-expanded="isOpen">
    <div class="tree-node__row" @click="emit('toggle', node.idjabatan)">
      <button
        type="button"
        class="tree-node__chev"
        :class="{ 'is-open': isOpen }"
        :aria-label="isOpen ? 'Tutup' : 'Buka'"
      >
        <vue-feather type="chevron-right" size="14" />
      </button>
      <span class="tree-node__icon tree-node__icon--jabatan">
        <vue-feather type="briefcase" size="12" />
      </span>
      <span class="tree-node__title">{{ node.jabatan }}</span>
      <span class="tree-node__count">{{ totalMembers }}</span>
    </div>

    <ul v-show="isOpen" class="tree-children">
      <!-- Anggota langsung pada jabatan ini -->
      <li
        v-for="person in node.members"
        :key="`m-${node.idjabatan}-${person.id ?? person.nama_jabatan}`"
        class="tree-leaf"
      >
        <span class="tree-leaf__icon"><vue-feather type="user" size="13" /></span>
        <span class="tree-leaf__text">
          {{ person.name ?? '— belum ada pengguna —' }}
        </span>
      </li>

      <!-- Rekursi ke sub-jabatan -->
      <JabatanTreeNode
        v-for="child in node.children"
        :key="`jab-${child.idjabatan}`"
        :node="child"
        :open-map="openMap"
        @toggle="(id) => emit('toggle', id)"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HierarchyUser } from '@/types/user'

export interface JabatanTreeNodeData {
  idjabatan: number
  jabatan: string
  members: HierarchyUser[]
  children: JabatanTreeNodeData[]
}

const props = defineProps<{
  node: JabatanTreeNodeData
  openMap: Record<number, boolean>
}>()

const emit = defineEmits<{
  (e: 'toggle', idjabatan: number): void
}>()

// Default: terbuka kecuali eksplisit di-set false.
const isOpen = computed(() => props.openMap[props.node.idjabatan] !== false)

/** Total anggota pada simpul ini + semua turunannya (untuk badge jumlah). */
const totalMembers = computed(() => {
  const countReal = (n: JabatanTreeNodeData): number => {
    const direct = n.members.filter((m) => m.id !== null).length
    return direct + n.children.reduce((acc, c) => acc + countReal(c), 0)
  }
  return countReal(props.node)
})
</script>
