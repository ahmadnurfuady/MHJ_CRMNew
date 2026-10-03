<template>
  <Card
    :headerTitle="'Placeholder Cards'"
    :headerClass="'mb-0'"
    :border="true"
    :padding="false"
    :cardBodyClass="'loading-card-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        In the example below, we take a typical card component and recreate it with placeholders
        applied to create a <code> loading card </code>and create placeholders with the
        <code>placeholder </code>class.
      </p>
    </template>

    <div class="row gy-3">
      <div class="col-sm-6">
        <Card :cardClass="'mb-0 h-100'">
          <template #image>
            <img class="card-img-top img-fluid" :src="getImages('masonry/5.jpg')" alt="image" />
          </template>
          <h6 class="card-title">Card Title</h6>
          <p class="card-text c-o-light">
            Some quick example text to build on the card title and make up the bulk of the
            card&apos;s content.
          </p>
          <a class="btn btn-primary" href="#">Go somewhere</a>
        </Card>
      </div>
      <div class="col-sm-6">
        <Card :cardClass="'mb-0 h-100'">
          <template #image>
            <img class="card-img-top img-fluid" :src="getImages('masonry/13.jpg')" alt="image" />
          </template>
          <h6 class="card-title placeholder-glow">
            <span class="placeholder col-6 placeholder-light"></span>
          </h6>
          <div class="card-text placeholder-glow mb-3">
            <div class="placeholder col-7 placeholder-light"></div>
            <div class="placeholder col-4 placeholder-light"></div>
            <div class="placeholder col-4 placeholder-light"></div>
            <div class="placeholder col-6 placeholder-light"></div>
            <div class="placeholder col-8 placeholder-light"></div>
          </div>
          <a class="btn btn-primary disabled placeholder col-6" href="#!"></a>
        </Card>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
