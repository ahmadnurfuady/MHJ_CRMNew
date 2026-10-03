<template>
  <Card
    :headerTitle="'Stackable Sortable Lists'"
    :border="true"
    :padding="false"
    :cardBodyClass="'stackable-list'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>draggable</code> to build stackable and sortable nested lists. You can drag and
        drop items within the same level or across different nested levels. This structure supports
        dynamic depth and recursive rendering through the <code>SortableItem</code> component.
        Customize drag behavior using props like <code>group</code>, <code>handle</code>, and
        <code>move</code> for fine-grained control.
      </p>
    </template>
    <div class="list-group col nested-sortable" id="nested-demo">
      <SortableItem :list="stackableSortableList" :depth="1" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { stackableSortableList } from '@/core/data/bonusUI/treeView'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SortableItem = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/stackableSortableLists/SortableItem.vue')
)
</script>
