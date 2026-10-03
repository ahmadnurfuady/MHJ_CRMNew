<template>
  <div class="container-fluid p-0">
    <div class="comingsoon auth-bg-video">
      <video
        class="bgvideo-comingsoon"
        id="bgvid"
        :poster="getImages('other-images/coming-soon-bg.jpg')"
        playsinline
        autoplay
        muted
        loop
      >
        <source src="@/assets/video/auth-bg.mp4" type="video/mp4" />
      </video>
      <div class="comingsoon-inner text-center">
        <img class="for-light" :src="getImages('other-images/logo-login.png')" alt="logo" />
        <img class="for-dark" :src="getImages('other-images/logo-light.png')" alt="logo" />
        <h5>WE ARE COMING SOON</h5>
        <div class="countdown">
          <Timer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils/index'

const Timer = defineAsyncComponent(() => import('@/components/shared/Timer.vue'))
</script>
