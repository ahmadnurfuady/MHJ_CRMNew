<template>
  <span
    class="dummy-data-badge"
    title="Data ini berasal dari fixture atau fallback lokal dan bukan data API."
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), {
  label: 'Data Dummy Lokal',
})
</script>

<style scoped>
.dummy-data-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #f4c96b;
  border-radius: 999px;
  padding: 3px 8px;
  color: #8a5a00;
  background: #fff8dc;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.01em;
  white-space: nowrap;
}
</style>
