<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Animated Avatar'"
    :border="true"
    :padding="false"
    :cardBodyClass="'avatar-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> animation-ping </code>class with avatar to indicate
        <code>active/offline/dnd</code> status.
      </p>
    </template>

    <div class="avatars">
      <div class="avatar" v-for="(avatar, index) in animatedAvatar" :key="index">
        <img
          class="rounded-circle"
          :class="avatar.class"
          :src="getImages(avatar.profile)"
          alt="avatar"
        />
        <div :class="`status bg-${avatar.status} animation-ping`"></div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { animatedAvatar } from '@/core/data/uiKits/avatars'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
>
