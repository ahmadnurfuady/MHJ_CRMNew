<template>
  <Card :headerTitle="'Scrollable Content'" :border="true" :padding="false">
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
      <div class="list-group main-lists-content pt-0">
        <template v-for="user in scrollableContent" :key="user.id">
          <a
            class="list-group-item list-group-item-action list-hover-primary"
            href="#"
          >
            <div class="list-wrapper gap-0">
              <img class="list-img" :src="getImages(user.userProfile)" alt="user" />
              <div class="list-content">
                <h6>{{ user.userName }}</h6>
                <p>{{ user.email }}</p>
                <small>{{ user.time }}</small>
              </div>
            </div>
          </a>
        </template>
      </div>
    </OverlayScrollbars>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { scrollableContent } from '@/core/data/bonusUI/scrollbar'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
