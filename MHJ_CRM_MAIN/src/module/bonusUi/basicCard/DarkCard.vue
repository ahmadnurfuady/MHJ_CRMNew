<template>
  <Card
    :headerTitle="'Dark Color Card'"
    :headerClass="'text-white'"
    :header="'bg-dark'"
    :padding="false"
    :border="true"
    :cardClass="'basic-dark-card'"
    :cardBodyClass="'bg-dark'"
  >
    <template #header5>
      <p class="mt-1">Use <code>bg-dark </code>color for dark background card.</p>
    </template>
    <div class="d-flex align-items-center gap-3 pills-blogger">
      <div class="blog-wrapper">
        <img class="blog-img" :src="getImages('dashboard-2/headphones.png')" alt="head-phone" />
      </div>
      <div class="blog-content">
        <p class="light-white">
          <b class="fw-bold">Smart headphones</b> — also called smart earbuds or hearable — are
          high-tech in-ear devices that do more than transmit audio. These headphones are usually
          wireless, and they can sync up with your phone, tablet, computer or other
          Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you
          to complete common tasks without directly accessing your phone or computer. Smart wireless
          headphones sync up to other devices using Bluetooth technology, and many of their features
          rely on data from your smartphone or computer.
        </p>
      </div>
    </div>
    <template #details>
      <div class="card-footer bg-dark">
        <h6 class="mb-0 txt-light">Card Footer</h6>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
