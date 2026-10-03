<template>
  <div class="container-fluid user-profile">
    <div class="row">
      <UserProfileHeader />
      <ProfilePost />
      <ProfilePost2 />
      <ProfilePost3 />
      <ProfilePost4 />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const UserProfileHeader = defineAsyncComponent(
  () => import('@/module/user/profile/UserProfileHeader.vue')
)
const ProfilePost = defineAsyncComponent(() => import('@/module/user/profile/UserProfile1.vue'))
const ProfilePost2 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile2.vue'))
const ProfilePost3 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile3.vue'))
const ProfilePost4 = defineAsyncComponent(() => import('@/module/user/profile/UserProfile4.vue'))
</script>
