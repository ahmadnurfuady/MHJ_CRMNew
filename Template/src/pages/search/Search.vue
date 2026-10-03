<template>
  <div class="container-fluid search-page">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <searchTabs />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const searchTabs = defineAsyncComponent(() => import('@/module/search/searchTabs.vue'))
</script>
