<template>
  <div class="container-fluid tree-view">
    <div class="row">
      <div class="col-lg-6">
        <StackableSortableLists />
      </div>
      <div class="col-lg-6">
        <SortableSwapLists />
      </div>
      <div class="col-lg-4 col-md-6">
        <SimpleDraggableLists />
      </div>
      <div class="col-lg-4 col-md-6">
        <SharedDraggableLists />
      </div>
      <div class="col-lg-4">
        <DisabledDraggableLists />
      </div>
      <div class="col-md-6">
        <SortableHandleList />
      </div>
      <div class="col-md-6">
        <DraggableFiltering />
      </div>
      <div class="col-12">
        <RandomSortable />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const StackableSortableLists = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/stackableSortableLists/StackableSortableLists.vue')
)
const SortableSwapLists = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/sortableSwapLists/SortableSwapLists.vue')
)
const SimpleDraggableLists = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/SimpleDraggableLists.vue')
)
const SharedDraggableLists = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/SharedDraggableLists.vue')
)
const DisabledDraggableLists = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/DisabledDraggableLists.vue')
)
const SortableHandleList = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/SortableHandleList.vue')
)
const DraggableFiltering = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/DraggableFiltering.vue')
)
const RandomSortable = defineAsyncComponent(
  () => import('@/module/bonusUi/treeView/RandomSortable.vue')
)
</script>
