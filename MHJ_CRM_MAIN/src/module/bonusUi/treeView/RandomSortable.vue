<template>
  <Card :headerTitle="'Random Sortable'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use the <code>vuedraggable</code> component for creating a draggable grid layout. The
        <code>v-model</code> binds the list data to enable real-time sorting. Each grid item is
        rendered using a <code>template</code> slot and can be reordered via drag and drop. The
        <code>group</code> prop is set to restrict drag behavior across lists.
      </p>
    </template>

    <draggable
      v-model="list"
      :group="{ name: 'nested', pull: false, put: false }"
      item-key="id"
      class="grid-box-wrapper"
    >
      <template #item="{ element }">
        <div class="grid-box">
          <img :src="getImages(element.image)" alt="" />
        </div>
      </template>
    </draggable>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { getImages } from '@/utils/index'
import { randomSortable } from '@/core/data/bonusUI/treeView'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const list = ref(randomSortable)
</script>
