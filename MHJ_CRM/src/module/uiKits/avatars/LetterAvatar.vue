<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Initial Letter Avatar'"
    :border="true"
    :padding="false"
    :cardBodyClass="'letter-avatar-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use initial letter as a avatar.</p>
    </template>

    <div class="letter-avatar">
      <template v-for="(avatar, index) in letterAvatar" :key="index">
        <h6 :class="`txt-${avatar.color} bg-light-${avatar.color}`">
          {{ avatar.profileText }}
        </h6>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { letterAvatar } from '@/core/data/uiKits/avatars'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
