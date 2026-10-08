<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <UserHierarchyPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const UserHierarchyPage = defineAsyncComponent(
  () => import('@/module/user/UserHierarchyPage.vue'),
)
</script>
