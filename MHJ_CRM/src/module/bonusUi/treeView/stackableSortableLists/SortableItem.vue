<template>
  <draggable
    v-model="list"
    :group="{ name: `nested-${depth}`, pull: false, put: false }"
    item-key="id"
    class="kanban-drag"
    :animation="150"
  >
    <template #item="{ element }">
      <div :class="`list-group-item nested-${depth}`">
        <i class="fa-solid fa-folder-open me-2"></i>
        {{ element.title }}

        <div
          v-if="element.children && element.children.length"
          class="list-group nested-sortable ms-3"
        >
          <SortableItem :list="element.children" :depth="depth + 1" />
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

import type { StackableSortableList } from '@/types/bonusUI'

const SortableItem = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/stackableSortableLists/SortableItem.vue')
)

const props = defineProps<{
  list: StackableSortableList[]
  depth: number
}>()

const list = ref(props.list)
</script>

<style scoped>
.list-group-item {
  margin-bottom: 4px;
}
</style>
