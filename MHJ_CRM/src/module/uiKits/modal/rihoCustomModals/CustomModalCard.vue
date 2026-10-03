<template>
  <div class="card-wrapper border rounded-3 h-100">
    <div class="malabo-demo-img">
      <ul class="dot-group pb-3 pt-0">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="title-wrapper pb-3 modal-heading">
        <h5 class="theme-name mb-0">{{ props.title }}</h5>
        <p class="f-m-light">{{ props.description }}</p>
      </div>
      <div class="overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()
</script>
