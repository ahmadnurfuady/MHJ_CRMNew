<template>
  <div class="rating">
    <i
      v-for="i in maxStars"
      :key="i"
      :class="
        i <= Math.round(rating) ? 'fa-solid fa-star txt-warning' : 'fa-regular fa-star txt-warning'
      "
    ></i>
  </div>
</template>

<script setup lang="ts">
interface Props {
  rating: number
  maxStars?: number
}

withDefaults(defineProps<Props>(), {
  maxStars: 5,
})
</script>
