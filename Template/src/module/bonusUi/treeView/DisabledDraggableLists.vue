<template>
  <Card :headerTitle="'Disabled Lists'" :border="true" :padding="false" :cardClass="'height-equal'">
    <template #header5>
      <p class="f-m-light mt-1">
        This example demonstrates how to disable drag-and-drop functionality in a
        <code>vuedraggable</code> list using the <code>:disabled="true"</code> prop. While the list
        renders as usual, reordering items by dragging is not allowed. This is useful when you want
        to present a static list without allowing any modifications through drag-and-drop.
      </p>
    </template>

    <ul class="list-group">
      <draggable
        v-model="list"
        :group="{ name: 'nested', pull: false, put: false }"
        item-key="id"
        :disabled="true"
      >
        <template #item="{ element }">
          <li class="list-group-item">{{ element }}</li>
        </template>
      </draggable>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { disableList } from '@/core/data/bonusUI/treeView'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const list = ref(disableList)
</script>
