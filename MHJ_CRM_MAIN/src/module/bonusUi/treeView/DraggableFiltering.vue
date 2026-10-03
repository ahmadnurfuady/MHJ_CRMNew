<template>
  <Card
    :headerTitle="'Draggable Filtering'"
    :border="true"
    :padding="false"
    :cardBodyClass="'draggable-filter'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use the <code>vuedraggable</code> component to create a sortable list. Use the
        <code>:move</code> prop to conditionally disable dragging for specific items. In this
        example, items marked with <code>element.active === true</code> are visually highlighted
        using the <code>list-light-primary</code> class and are excluded from dragging. This
        provides dynamic control over which items in the list can be moved.
      </p>
    </template>

    <ul class="list-group">
      <draggable
        v-model="list"
        :group="{ name: 'nested', pull: false, put: false }"
        item-key="id"
        :move="checkMove"
      >
        <template #item="{ element }">
          <li class="list-group-item" :class="{ 'filtered list-light-primary': element.active }">
            <img class="rounded-circle" :src="getImages(element.image)" alt="user" />
            <span>{{ element.name }}</span>
          </li>
        </template>
      </draggable>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { getImages } from '@/utils/index'
import { draggableList } from '@/core/data/bonusUI/treeView'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

interface MoveEvent {
  draggedContext: {
    element: {
      active: boolean
    }
  }
}

const list = ref(draggableList)

function checkMove(evt: MoveEvent): boolean {
  return !evt.draggedContext.element.active
}
</script>
