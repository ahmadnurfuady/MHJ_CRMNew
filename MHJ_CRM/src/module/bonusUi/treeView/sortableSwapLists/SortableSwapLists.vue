<template>
  <Card
    :headerTitle="'Sortable Swap Lists'"
    :border="true"
    :padding="false"
    :cardBodyClass="'swap-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>draggable</code> to sort only top-level items. Nested child items are displayed
        recursively using the <code>SwapItems</code> component but are not draggable. This setup
        ensures a clean parent-child hierarchy while maintaining simple drag-and-drop behavior at
        the root level.
      </p>
    </template>

    <ul class="list-group">
      <draggable v-model="list" :group="{ name: 'nested', pull: false, put: false }" item-key="id">
        <template #item="{ element }">
          <SwapItems :list="element" :depth="1" />
        </template>
      </draggable>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { swapList } from '@/core/data/bonusUI/treeView'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SwapItems = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/sortableSwapLists/SwapItems.vue')
)

const list = ref(swapList)
</script>
