<template>
  <li class="uh-tree__node" role="treeitem" :aria-expanded="isOpen">
    <div class="uh-tree__row" @click="emit('toggle', node.idjabatan)">
      <button
        type="button"
        class="uh-tree__chev"
        :class="{ 'is-open': isOpen }"
        :aria-label="isOpen ? 'Tutup' : 'Buka'"
      >
        <vue-feather type="chevron-right" size="14" />
      </button>
      <span class="uh-tree__icon uh-tree__icon--jabatan">
        <vue-feather type="briefcase" size="12" />
      </span>
      <span class="uh-tree__title">{{ node.jabatan }}</span>
      <span class="uh-tree__count">{{ totalMembers }}</span>
    </div>

    <ul v-show="isOpen" class="uh-tree__children">
      <li
        v-for="person in node.members"
        :key="`m-${node.idjabatan}-${person.id ?? person.nama_jabatan}`"
        class="uh-tree__leaf"
      >
        <span class="uh-tree__leaf-icon"><vue-feather type="user" size="13" /></span>
        <span class="uh-tree__leaf-text">
          {{ person.name ?? '— belum ada pengguna —' }}
        </span>
      </li>

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
  parentId: number | null
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

const isOpen = computed(() => props.openMap[props.node.idjabatan] !== false)

/** Total user (id tidak null) di simpul ini + seluruh turunannya. */
const totalMembers = computed(() => {
  const countReal = (n: JabatanTreeNodeData): number => {
    const direct = n.members.filter((m) => m.id !== null).length
    return direct + n.children.reduce((acc, c) => acc + countReal(c), 0)
  }
  return countReal(props.node)
})
</script>
