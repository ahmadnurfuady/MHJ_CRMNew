<template>
  <div class="media profile-media">
    <img class="b-r-10" :src="getImages('dashboard/profile.png')" alt="profile" />
    <div class="media-body d-xxl-block d-none box-col-none">
      <span>{{ authStore.user?.name || 'Admin' }}</span>
      <p class="mb-0">{{ authStore.user?.email || 'Admin' }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getImages } from '@/utils/index'
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
</script>
