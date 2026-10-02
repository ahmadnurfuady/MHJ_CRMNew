<template>
  <Card :headerTitle="'Icon In Heading'" :border="true" :padding="false">
    <template #icon>
      <i class="icofont icofont-library me-2"></i>
    </template>
    <template #header5>
      <p class="f-m-light mt-1">
        Use any icons for heading. <code>[font-awesome/ico-font/feather]</code>.
      </p>
    </template>
    <div class="d-flex gap-3 align-items-center list-behavior-1">
      <div class="flex-shrink-0">
        <img class="tab-img img-fluid" :src="getImages('blog/img.png')" alt="home" />
      </div>
      <div class="flex-grow-1 ms-0">
        <p class="mb-xl-0 mb-sm-4">
          We provide end to end digital solutions, right from designing your website/application
          development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization
          and other Internet Marketing, Renewal of Services timely and effectively.
        </p>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
