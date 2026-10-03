<template>
  <Card
    :cardClass="'height-equal helper-height-equal'"
    :headerTitle="'Images Sizes'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>img-h-* </code>& <code> img-* </code> for image height and border radius for use
        <code>rounded-* / b-r-* / and rounded-pill </code>for border-radius images.
      </p>
    </template>

    <div class="row g-3">
      <div class="col-12 helper-col-6" v-for="(sizes, index) in imageSize" :key="index">
        <div class="card-wrapper border rounded-3 h-100">
          <div class="gradient-border gap-3">
            <template v-for="(size, index) in sizes.size" :key="index">
              <img :class="size.class" :src="getImages(sizes.image)" :alt="size.class" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { imageSize } from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
