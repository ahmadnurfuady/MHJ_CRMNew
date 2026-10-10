<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <AkunSaya />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AkunSaya = defineAsyncComponent(() => import('@/module/user/AkunSaya.vue'))
</script>
