<template>
  <div class="notification-card">
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        class="notification d-flex w-100 justify-content-between align-items-center"
      >
        <div class="d-flex w-100 notification-data align-items-center gap-2">
          <div class="user-alerts flex-shrink-0">
            <img class="rounded-circle img-fluid img-40" :src="getImages(item.image)" alt="user" />
          </div>
          <div class="flex-grow-1">
            <div class="common-space user-id w-100">
              <a class="f-w-500 f-12">{{ item.name }}</a>
            </div>
            <div>
              <span class="f-w-500 f-light f-12">{{ item.text }}</span>
            </div>
          </div>
          <span class="f-light f-w-500 f-12">{{ item.time }}</span>
        </div>
      </li>
    </ul>
    <div class="card-footer pb-0 pr-0 pl-0">
      <div class="text-center">
        <button class="btn btn-primary" type="button">Checkout All</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImages } from '@/utils'
import type { NotificationItem } from '@/types/header'

const props = defineProps<{
  items: NotificationItem[]
}>()
</script>
