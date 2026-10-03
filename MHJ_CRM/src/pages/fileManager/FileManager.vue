<template>
  <div class="container-fluid">
    <div class="row main-file-sidebar">
      <div class="col-xl-3 box-col-6 pe-0 xl-4">
        <FileManagerSidebar />
      </div>
      <div class="col-xl-9 col-md-12 box-col-12 xl-66">
        <Files />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const FileManagerSidebar = defineAsyncComponent(
  () => import('@/module/fileManager/FileManagerSidebar.vue')
)
const Files = defineAsyncComponent(() => import('@/module/fileManager/Files.vue'))
</script>
