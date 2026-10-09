<template>
  <div class="hospital-empty-state">
    <div class="hospital-empty-state__icon"><i :class="icon"></i></div>
    <strong>{{ title }}</strong>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<style scoped>
.hospital-empty-state {
  display: flex;
  min-height: 240px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  text-align: center;
}

.hospital-empty-state__icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-bottom: 12px;
  color: var(--theme-default, #18a6e4);
  background: #e4f6fd;
  font-size: 19px;
}

.hospital-empty-state strong {
  color: #17212b;
  font-size: 13px;
}

.hospital-empty-state p {
  max-width: 360px;
  margin: 5px 0 0;
  color: #73808d;
  font-size: 10px;
}
</style>
