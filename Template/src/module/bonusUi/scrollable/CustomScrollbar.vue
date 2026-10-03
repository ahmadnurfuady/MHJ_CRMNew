<template>
  <Card :headerTitle="'Custom Scrollbar'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>OverlayScrollbars</code> to create a custom scrollbar for smoother scrolling and a
        more stylish design.
      </p>
    </template>

    <OverlayScrollbars
      class="vertical-scroll scroll-demo default-scroll"
      :style="{ height: '300px' }"
      :options="{ scrollbars: { autoHide: 'leave' } }"
    >
      <h6 class="pb-2">Scrollbar</h6>
      <p>
        I'm quite interested in learning more about <b>custom scrollbars</b> because they are
        becoming more and more common.
      </p>
      <div class="scrollbar-images">
        <img class="img-fluid" :src="getImages('banner/1.jpg')" alt="banner" />
      </div>
      <p>
        There are various justifications for customizing a scrollbar. For instance, the default
        scrollbar can cause an app's user interface to look inconsistent across various operating
        systems. In this case, having a single style is helpful.
      </p>
      <p>
        I never had the opportunity to learn about CSS scrollbar customization, but I have always
        been interested in doing so. I'll take the chance to learn more about them and share my trip
        in this essay.
      </p>
      <p>
        One crucial point to remember is that, depending on the design, a scrollbar may operate
        either <b>horizontally or vertically</b>. Additionally, it might alter when you work on a
        website that is global and operates in both left-to-right and right-to-left orientations.
      </p>
    </OverlayScrollbars>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
