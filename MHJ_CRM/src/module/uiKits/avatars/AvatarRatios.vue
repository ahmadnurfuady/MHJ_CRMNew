<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Ratios'"
    :border="true"
    :padding="false"
    :cardBodyClass="'avatar-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use shape to avatar using <code>ratio</code> and
        <code> img-* (50/70/80/90/100)</code> class.
      </p>
    </template>

    <div class="avatars">
      <div class="avatar ratio" v-for="(avatar, index) in ratioAvatar" :key="index">
        <img :class="avatar.class" :src="getImages(avatar.profile)" alt="avatar" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { ratioAvatar } from '@/core/data/uiKits/avatars'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
