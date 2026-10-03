<template>
  <Card
    :headerTitle="'Not using Shadow Card'"
    :border="true"
    :padding="false"
    :cardClass="'shadow-none border'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> shadow-none </code>&<code> border</code> class through shadow removes.
      </p>
    </template>
    <div class="flex-space flex-wrap align-items-center">
      <img class="tab-img" :src="getImages('avtar/3.jpg')" alt="profile" />
      <p>
        <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020<br /><strong
          >Mail Us:</strong
        >contact&#64;us&#64;gmail.com<br /><strong>Contact Number: </strong>(954) 357-7760
      </p>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
