<template>
  <div class="container-fluid user-list-wrapper">
    <div class="row">
      <div class="col-12">
        <AkunSaya v-if="detailId" :user-id="detailId" />
        <UserListTable v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const UserListTable = defineAsyncComponent(() => import('@/module/user/UserListTable.vue'))
const AkunSaya = defineAsyncComponent(() => import('@/module/user/AkunSaya.vue'))

const route = useRoute()
const detailId = computed(() => {
  const id = Number(route.query.detail)
  return Number.isFinite(id) && id > 0 ? id : 0
})
</script>
