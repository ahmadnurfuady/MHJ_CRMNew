<template>
  <Card :headerTitle="'Profile Scrollbar'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>OverlayScrollbars</code> to create a custom scrollbar. Use
        <code>list-group-item </code>through made profile.
      </p>
    </template>
    <OverlayScrollbars
      class="vertical-scroll scroll-demo scroll-b-none"
      :style="{ height: '300px' }"
      :options="{ scrollbars: { autoHide: 'leave' } }"
    >
      <div class="list-group">
        <template v-for="profile in profileScrollbar" :key="profile.id">
          <a
            class="list-group-item list-group-item-action list-hover-primary"
            href="#"
          >
            <img class="rounded-circle" :src="getImages(profile.userProfile)" alt="user" />{{
              profile.userName
            }}
          </a>
        </template>
      </div>
    </OverlayScrollbars>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { profileScrollbar } from '@/core/data/bonusUI/scrollbar'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
