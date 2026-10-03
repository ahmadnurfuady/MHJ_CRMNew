<template>
  <div class="row">
    <div class="col-xl-3 xl-40 col-lg-12 col-md-5 box-col-4">
      <SocialAppLeftPanel />
    </div>
    <div class="col-xl-6 xl-60 col-lg-12 col-md-7 box-col-8e">
      <div class="row">
        <div class="col-sm-12">
          <AddFriends />
        </div>
        <div class="col-sm-12">
          <Education />
        </div>
        <div class="col-sm-12">
          <Hobbies />
        </div>
        <div class="col-sm-12">
          <Profile />
        </div>
        <div class="col-sm-12">
          <ActivityLog />
        </div>
      </div>
    </div>
    <div class="col-xl-3 xl-100 box-col-12">
      <SocialAppRightPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const SocialAppLeftPanel = defineAsyncComponent(
  () => import('@/module/socialApp/SocialAppLeftPanel.vue')
)
const SocialAppRightPanel = defineAsyncComponent(
  () => import('@/module/socialApp/SocialAppRightPanel.vue')
)
const AddFriends = defineAsyncComponent(() => import('@/module/socialApp/AddFriends.vue'))
const Hobbies = defineAsyncComponent(() => import('@/module/socialApp/Hobbies.vue'))
const ActivityLog = defineAsyncComponent(() => import('@/module/socialApp/ActivityLog.vue'))
const Education = defineAsyncComponent(() => import('@/module/socialApp/Education.vue'))
</script>
