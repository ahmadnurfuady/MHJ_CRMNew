<template>
  <Card :headerTitle="'Button Badges'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        <code> badge </code> can be used as part of links or buttons to provide a counter.
      </p>
    </template>

    <div class="badge-flex">
      <button class="btn btn-primary">
        Notifications <span class="badge text-bg-danger ms-2">4</span>
      </button>
      <button class="btn button-light-primary">
        Sale<span class="badge text-bg-danger rounded-pill ms-2">9</span>
      </button>
      <button class="btn border-dashed-primary">
        Instagram <span class="badge text-bg-danger ms-2">6</span>
      </button>
      <button class="btn btn-pill button-light-info txt-info">
        LinkedIn <span class="badge text-bg-info rounded-pill ms-2 txt-light">3</span>
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
