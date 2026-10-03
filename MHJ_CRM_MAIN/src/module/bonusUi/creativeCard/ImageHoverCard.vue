<template>
  <Card :cardClass="'common-hover'">
    <div class="creative-wrapper">
      <img class="img-fluid" :src="getImages('other-images/mountain.jpg')" alt="background image" />
      <div class="creative-info">
        <h5>Add the title of the card</h5>
        <p>
          This is an example card for you to use. you are able to include subtitles in your
          according.
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
