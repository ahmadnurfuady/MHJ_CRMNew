<template>
  <Card :headerTitle="'Horizontal Scrollbar'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Use <code>OverlayScrollbars</code>to create horizontal overflow.</p>
    </template>
    <div class="horizontal-scroll scroll-demo">
      <OverlayScrollbars
        class="horz-scroll-content"
        :options="{ scrollbars: { autoHide: 'leave' } }"
      >
        <div class="row" style="width: 1600px">
          <div class="col-2" v-for="(images, index) in scrollableImages" :key="index">
            <div class="horizontal-img">
              <img class="img-fluid" :src="getImages(images.image)" alt="girl" />
            </div>
          </div>
        </div>
      </OverlayScrollbars>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { scrollableImages } from '@/core/data/bonusUI/scrollbar'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
