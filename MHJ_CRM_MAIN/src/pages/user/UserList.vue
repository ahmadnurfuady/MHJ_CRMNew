<template>
  <div class="container-fluid user-list-wrapper">
    <div class="row">
      <div class="col-12">
        <UserListTable />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const UserListTable = defineAsyncComponent(() => import('@/module/user/UserListTable.vue'))
</script>
