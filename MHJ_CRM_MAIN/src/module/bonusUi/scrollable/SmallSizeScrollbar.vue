<template>
  <Card :headerTitle="'Small Size Scrollbar'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>OverlayScrollbars</code> to create a custom scrollbar for smoother scrolling and a
        more stylish design.
      </p>
    </template>
    <div class="scroll-bar-wrap">
      <OverlayScrollbars
        class="scrollbar-margins large-margin scroll-demo pe-0"
        :style="{ height: '300px' }"
        :options="{ scrollbars: { autoHide: 'leave' } }"
      >
        <div class="margin-scrollbar">
          <h6 class="pb-2">Solution for Business Transformation</h6>
        </div>
        <p>
          The Business transformation solution programme is a
          <b>multi-level engagement program</b> is designed to help Small and Medium-Sized
          Businesses and Startups create a strong, well-functioning business organization that
          produces the best results quickly and effectively.
          <img
            class="img-fluid pt-3"
            :src="getImages('banner/3.jpg')"
            alt="business"
            width="800"
            height="600"
          />
        </p>
        <p>
          The core of the programme is our internally developed
          <b>Business Management model</b> , "Business Foundation & Management", which was tried and
          true for Indian business conditions while drawing inspiration from other successful global
          SME Business Management techniques.
        </p>
      </OverlayScrollbars>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
