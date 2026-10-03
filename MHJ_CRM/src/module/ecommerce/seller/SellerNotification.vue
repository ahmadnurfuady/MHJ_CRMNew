<template>
  <div class="notification-wrapper">
    <div
      class="form-check checkbox checkbox-primary mb-0"
      v-for="(item, index) in notifications.notificationList"
      :key="index"
    >
      <input
        class="form-check-input"
        :id="'checkbox-primary-' + item.id"
        type="checkbox"
        :checked="item.checked"
      />
      <label class="form-check-label" :for="'checkbox-primary-' + item.id">{{ item.title }}</label>
    </div>
  </div>
  <p class="f-w-500">Receive Notification On&colon;</p>
  <ul class="checkbox-wrapper">
    <li
      v-tooltip
      :title="item.name"
      v-for="(item, index) in notifications.notificationPlatform"
      :key="index"
    >
      <input
        class="form-check-input checkbox-shadow"
        :id="'checkbox-icon' + item.id"
        type="checkbox"
      />
      <label class="form-check-label" :for="'checkbox-icon' + item.id">
        <i :class="item.logo"></i>
      </label>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { sellerDetails } from '@/core/data/seller'

const notifications = sellerDetails.notifications
</script>
