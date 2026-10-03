<template>
  <Card :headerTitle="'Badges Scrollbar'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1" header5>
        Use <code>OverlayScrollbars</code> to create a custom scrollbar. Use
        <code>badge</code> class through create more badges
      </p>
    </template>
    <OverlayScrollbars
      class="vertical-scroll scroll-demo scroll-b-none"
      :style="{ height: '300px' }"
      :options="{ scrollbars: { autoHide: 'leave' } }"
    >
      <ol class="list-group list-group-numbered scroll-rtl">
        <li
          class="list-group-item d-flex align-items-start flex-wrap"
          v-for="(badges, index) in badgeScrollbar"
          :key="index"
        >
          <div class="ms-2 me-auto">{{ badges.title }}</div>
          <span :class="`badge bg-${badges.badgeColor} rounded-pill p-2`">{{ badges.badge }}</span>
        </li>
      </ol>
    </OverlayScrollbars>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { badgeScrollbar } from '@/core/data/bonusUI/scrollbar'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
