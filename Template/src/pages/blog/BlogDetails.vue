<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <DetailsPage :details="blog" :comment="blogComments" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { blog, blogComments } from '@/core/data/blog'

const DetailsPage = defineAsyncComponent(() => import('@/module/blog/DetailsPage.vue'))
</script>
