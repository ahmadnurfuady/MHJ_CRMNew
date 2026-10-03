<template>
  <Card
    :headerTitle="'Sortable using the Handle List'"
    :border="true"
    :padding="false"
    :cardBodyClass="'sortable-handler'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use the <code>vuedraggable</code> component for creating a sortable list with a custom drag
        handle. Use the <code>handle</code> option to specify which element (like an icon) inside
        each item should trigger dragging. This allows drag-and-drop reordering only when
        interacting with the designated handle, giving better control over item interactions.
      </p>
    </template>

    <ul class="list-group">
      <draggable
        v-model="list"
        :group="{ name: 'nested', pull: false, put: false }"
        item-key="id"
        handle=".handle"
      >
        <template #item="{ element }">
          <li :class="`list-group-item ${element.class}`">
            <i class="fa-solid fa-arrows-up-down-left-right handle me-2"></i>
            <span>{{ element.name }}</span>
          </li>
        </template>
      </draggable>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

import { sortableList } from '@/core/data/bonusUI/treeView'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const list = ref(sortableList)
</script>
