<template>
  <div class="form-completed">
    <img :src="getImages('gif/dashboard-8/successful.gif')" alt="successful" />
    <h6>Successfully Completed</h6>
  </div>
</template>

<script setup lang="ts">
import { getImages } from '@/utils/index'
</script>
