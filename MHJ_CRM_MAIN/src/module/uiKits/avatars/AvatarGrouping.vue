<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Grouping'"
    :border="true"
    :padding="false"
    :cardBodyClass="'avatar-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use group of avatars like <code>img-* (40/50/60/80/100) </code>and
        <code>b-r-* (8/30/35)</code>.
      </p>
    </template>

    <div class="avatars">
      <div
        class="customers d-inline-block avatar-group"
        v-for="(group, index) in groupAvatar"
        :key="index"
      >
        <ul>
          <li class="d-inline-block" v-for="(avatar, index) in group.group" :key="index">
            <img :class="avatar.class" :src="getImages(avatar.profile)" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { groupAvatar } from '@/core/data/uiKits/avatars'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
