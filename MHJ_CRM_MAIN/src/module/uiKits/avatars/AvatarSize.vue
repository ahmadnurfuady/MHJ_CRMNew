<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Sizes'"
    :border="true"
    :padding="false"
    :cardBodyClass="'avatar-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use size of avatar like <code>img-* (70/80/90/100)</code> class.</p>
    </template>

    <div class="avatars">
      <div class="avatar" v-for="(avatar, index) in sizeAvatar" :key="index">
        <img
          class="rounded-circle"
          :class="avatar.sizeClass"
          :src="getImages(avatar.profile)"
          alt="avatar"
        />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { sizeAvatar } from '@/core/data/uiKits/avatars'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
