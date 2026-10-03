<template>
  <ul class="policies-wrapper">
    <li v-for="(item, index) in policy" :key="index">
      <label class="form-label">{{ item.title }}</label>
      <Editor />
    </li>
  </ul>
  <button class="btn btn-primary">Update</button>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { sellerDetails } from '@/core/data/seller'

const policy = sellerDetails.policies
const Editor = defineAsyncComponent(() => import('@/components/shared/Editor.vue'))
</script>
