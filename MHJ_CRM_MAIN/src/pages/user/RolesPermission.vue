<template>
  <div class="container-fluid role-permission-wrapper">
    <div class="row">
      <div class="col-12">
        <RolesMatrix />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const RolesMatrix = defineAsyncComponent(() => import('@/module/user/RolesMatrix.vue'))
</script>
