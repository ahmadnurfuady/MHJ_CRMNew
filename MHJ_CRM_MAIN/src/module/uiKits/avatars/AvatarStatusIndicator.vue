<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Status Indicator'"
    :border="true"
    :padding="false"
    :cardBodyClass="'avatar-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use status of avatar like<code> status-* (online/offline/dnd)</code>
      </p>
    </template>

    <div class="avatars">
      <div class="avatar" v-for="(avatar, index) in statusIndicatorAvatar" :key="index">
        <img
          class="rounded-circle"
          :class="avatar.sizeClass"
          :src="getImages(avatar.profile)"
          alt=""
        />
        <div :class="`status bg-${avatar.status}`"></div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { statusIndicatorAvatar } from '@/core/data/uiKits/avatars'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
