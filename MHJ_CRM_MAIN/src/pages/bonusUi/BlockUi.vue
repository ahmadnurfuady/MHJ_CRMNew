<template>
  <div class="container-fluid">
    <div class="user-profile">
      <div class="row">
        <div class="col-xl-6">
          <BlockLoading />
        </div>
        <div class="col-xl-6">
          <CardLoading />
        </div>
        <div class="col-xl-12">
          <FormLoading />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BlockLoading = defineAsyncComponent(() => import('@/module/bonusUi/blockUI/BlockLoading.vue'))
const CardLoading = defineAsyncComponent(() => import('@/module/bonusUi/blockUI/CardLoading.vue'))
const FormLoading = defineAsyncComponent(() => import('@/module/bonusUi/blockUI/FormLoading.vue'))
</script>
