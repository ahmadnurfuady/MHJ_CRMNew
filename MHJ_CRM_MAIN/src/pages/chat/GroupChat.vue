<template>
  <div class="container-fluid">
    <div class="row g-0">
      <SearchChat />
      <GroupChat />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const SearchChat = defineAsyncComponent(() => import('@/module/chat/common/SearchChat.vue'))
const GroupChat = defineAsyncComponent(() => import('@/module/chat/group/GroupChat.vue'))
</script>
