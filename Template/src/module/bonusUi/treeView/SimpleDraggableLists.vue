<template>
  <Card :headerTitle="'Simple Lists'" :border="true" :padding="false" :cardClass="'height-equal'">
    <template #header5>
      <p class="f-m-light mt-1">
        This example uses the <code>vuedraggable</code> component to create a simple sortable list.
        Items can be reordered by dragging and dropping within the same list. The list is bound
        using <code>v-model</code> to reflect changes in real time.
      </p>
    </template>

    <ul class="list-group">
      <draggable v-model="list" :group="{ name: 'nested', pull: false, put: false }" item-key="id">
        <template #item="{ element }">
          <li class="list-group-item">{{ element }}</li>
        </template>
      </draggable>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

import { simpleList } from '@/core/data/bonusUI/treeView'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const list = ref(simpleList)
</script>
