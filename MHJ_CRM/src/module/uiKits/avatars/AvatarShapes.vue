<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Shapes'"
    :border="true"
    :padding="false"
    :cardBodyClass="'avatar-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use shapes of avatar like<code> b-r-* (8/30/35/25)</code></p>
    </template>

    <div class="avatars">
      <div class="avatar" v-for="(avatar, index) in shapeAvatar" :key="index">
        <img :class="avatar.class" :src="getImages(avatar.profile)" alt="" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { shapeAvatar } from '@/core/data/uiKits/avatars'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
