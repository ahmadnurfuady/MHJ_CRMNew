<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Badge-Indicator'"
    :border="true"
    :padding="false"
    :cardBodyClass="'avatar-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> badge </code>class with avatar to indicate and provide indication.
      </p>
    </template>

    <div class="avatars badge-avatar">
      <div class="avatar" v-for="(avatar, index) in badgeIndicatorAvatar" :key="index">
        <img
          class="rounded-circle"
          :class="avatar.class"
          :src="getImages(avatar.profile)"
          alt="avatar"
        />
        <div
          :class="[
            `badge badge-${avatar.badgeColor} position-absolute rounded-circle`,
            avatar.badgeClass,
          ]"
        >
          {{ avatar.badgeText }}
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { badgeIndicatorAvatar } from '@/core/data/uiKits/avatars'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
