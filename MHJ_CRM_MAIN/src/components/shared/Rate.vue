<template>
  <StarRating
    :rating="props.rating"
    :star-points="[23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17]"
    :star-size="20"
    :read-only="props.readOnly"
    :show-rating="false"
    :max-rating="5"
    :increment="0.5"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rating: number
    readOnly?: boolean
  }>(),
  {
    readOnly: true,
  }
)
</script>
