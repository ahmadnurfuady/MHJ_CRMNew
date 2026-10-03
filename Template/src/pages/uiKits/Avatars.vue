<template>
  <div class="container-fluid">
    <div class="user-profile">
      <div class="row">
        <div class="col-xl-4 col-md-6">
          <AvatarSize />
        </div>
        <div class="col-xl-4 col-md-6">
          <AvatarStatusIndicator />
        </div>
        <div class="col-xl-4 col-lg-6">
          <AvatarShapes />
        </div>
        <div class="col-lg-6">
          <AvatarRatios />
        </div>
        <div class="col-xl-6">
          <AvatarGrouping />
        </div>
        <div class="col-lg-4">
          <AvatarBadgeIndicator />
        </div>
        <div class="col-lg-4">
          <LetterAvatar />
        </div>
        <div class="col-lg-4">
          <AnimatedAvatar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AvatarSize = defineAsyncComponent(() => import('@/module/uiKits/avatars/AvatarSize.vue'))
const AvatarStatusIndicator = defineAsyncComponent(
  () => import('@/module/uiKits/avatars/AvatarStatusIndicator.vue')
)
const AvatarShapes = defineAsyncComponent(() => import('@/module/uiKits/avatars/AvatarShapes.vue'))
const AvatarRatios = defineAsyncComponent(() => import('@/module/uiKits/avatars/AvatarRatios.vue'))
const AvatarGrouping = defineAsyncComponent(
  () => import('@/module/uiKits/avatars/AvatarGrouping.vue')
)
const AvatarBadgeIndicator = defineAsyncComponent(
  () => import('@/module/uiKits/avatars/AvatarBadgeIndicator.vue')
)
const LetterAvatar = defineAsyncComponent(() => import('@/module/uiKits/avatars/LetterAvatar.vue'))
const AnimatedAvatar = defineAsyncComponent(
  () => import('@/module/uiKits/avatars/AnimatedAvatar.vue')
)
</script>
