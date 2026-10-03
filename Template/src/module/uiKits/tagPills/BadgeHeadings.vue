<template>
  <Card :cardClass="'height-equal'" :headerTitle="'Badge Headings'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        All html headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> , are available
        in <code>badge </code>tags.
      </p>
    </template>

    <h1 class="badge-heading">Badge Heading 1<span class="badge badge-primary">Latest</span></h1>
    <h2 class="badge-heading">
      Badge Heading 2<span class="badge badge-secondary">Trending</span>
    </h2>
    <h3 class="badge-heading">Badge Heading 3<span class="badge badge-success">Checkout</span></h3>
    <h4 class="badge-heading">Badge Heading 4<span class="badge badge-warning">Inbox</span></h4>
    <h5 class="badge-heading">Badge Heading 5<span class="badge badge-danger">Login</span></h5>
    <h6 class="badge-heading pb-0">Badge Heading 6<span class="badge badge-dark">Logout</span></h6>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
