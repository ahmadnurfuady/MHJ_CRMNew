<template>
  <Card :headerTitle="'Flat Card'" :border="true" :padding="false" :cardClass="'b-r-0'">
    <template #header5>
      <p class="f-m-light mt-1">For flat cards, make the<code> b-r-0</code> used class.</p>
    </template>
    <p class="mb-0">
      A navigation bar is a particularly important feature because it allows visitors to quickly and
      easily find<b> important pages on your website</b> , like your blog, product pages, pricing,
      contact info, and documentation. This improves the chances of visitors browsing your site
      longer, which can boost your page views and reduce your bounce rate.
    </p>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
