<template>
  <div class="container-fluid social-app-profile1">
    <div class="user-profile social-app-profile">
      <div class="row">
        <div class="col-sm-12 box-col-12">
          <SocialAppProfile @currentTab="handleCurrentTab($event)" />
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane fade show active">
          <SocialAppTimeline v-if="activeTab == 'timeline'" />
          <SocialAppAbout v-if="activeTab == 'about'" />
          <SocialAppFriends v-if="activeTab == 'friends'" />
          <SocialAppPhotos v-if="activeTab == 'photos'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const SocialAppProfile = defineAsyncComponent(
  () => import('@/module/socialApp/SocialAppProfile.vue')
)
const SocialAppTimeline = defineAsyncComponent(
  () => import('@/module/socialApp/SocialAppTimeline.vue')
)
const SocialAppAbout = defineAsyncComponent(() => import('@/module/socialApp/SocialAppAbout.vue'))
const SocialAppFriends = defineAsyncComponent(
  () => import('@/module/socialApp/SocialAppFriends.vue')
)
const SocialAppPhotos = defineAsyncComponent(() => import('@/module/socialApp/SocialAppPhotos.vue'))

const activeTab = ref<string>('')

function handleCurrentTab(value: string) {
  activeTab.value = value
}
</script>
