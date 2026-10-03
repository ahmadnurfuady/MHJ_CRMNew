<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <DefaultPagination />
      </div>
      <div class="col-md-6">
        <PaginationActiveDisabled />
      </div>
      <div class="col-md-6">
        <IconPagination />
      </div>
      <div class="col-md-6">
        <RoundedPagination />
      </div>
      <div class="col-xxl-6">
        <PaginationAlignment />
      </div>
      <div class="col-xxl-6">
        <PaginationSizing />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DefaultPagination = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/DefaultPagination.vue')
)
const PaginationActiveDisabled = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/PaginationActiveDisabled.vue')
)
const IconPagination = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/IconPagination.vue')
)
const RoundedPagination = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/RoundedPagination.vue')
)
const PaginationAlignment = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/PaginationAlignment.vue')
)
const PaginationSizing = defineAsyncComponent(
  () => import('@/module/bonusUi/pagination/PaginationSizing.vue')
)
</script>
