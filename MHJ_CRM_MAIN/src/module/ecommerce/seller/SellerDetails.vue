<template>
  <template v-if="props.currentStore">
    <div class="common-f-start">
      <SvgIcon :icon="props.currentStore.storeLogo" />
      <div>
        <h5>{{ props.currentStore.storeName }}</h5>
        <span class="c-o-light">{{ props.currentStore.vendorName }}</span>
      </div>
    </div>
    <ul class="seller-details">
      <li>
        <div>
          <SolarIcon name="fa-location-dot" />
          <h6>Location</h6>
        </div>
        <span>{{ props.currentStore.location }}</span>
      </li>
      <li>
        <div>
          <SolarIcon name="fa-phone" />
          <h6>Phone Number</h6>
        </div>
        <span>{{ props.currentStore.phone }}</span>
      </li>
      <li>
        <div>
          <SolarIcon name="fa-envelope" />
          <h6>Email</h6>
        </div>
        <span>{{ props.currentStore.email }}</span>
      </li>
      <li>
        <div>
          <SolarIcon name="fa-square-up-right" />
          <h6>URL</h6>
        </div>
        <router-link :to="props.currentStore.url" target="_blank">{{
          props.currentStore.url
        }}</router-link>
      </li>
    </ul>
  </template>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { Store } from '@/types/seller'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const props = defineProps<{
  currentStore: Store
}>()
</script>
