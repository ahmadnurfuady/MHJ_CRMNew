<template>
  <div class="container-fluid">
    <div class="row g-0">
      <SearchChat />
      <PrivateChat />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const SearchChat = defineAsyncComponent(() => import('@/module/chat/common/SearchChat.vue'))
const PrivateChat = defineAsyncComponent(() => import('@/module/chat/private/PrivateChat.vue'))
</script>
