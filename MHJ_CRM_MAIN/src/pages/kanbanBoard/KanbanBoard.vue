<template>
  <div class="container-fluid jkanban-container">
    <div class="row">
      <div class="col-12">
        <DefaultDemo />
        <CustomBoards />
        <APIBoard />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DefaultDemo = defineAsyncComponent(() => import('@/module/kanban/DefaultDemo.vue'))
const CustomBoards = defineAsyncComponent(() => import('@/module/kanban/CustomBoards.vue'))
const APIBoard = defineAsyncComponent(() => import('@/module/kanban/APIBoard.vue'))
</script>
