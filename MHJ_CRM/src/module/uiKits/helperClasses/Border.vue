<template>
  <h6 class="mb-3" v-if="props.title">{{ props.title }}</h6>

  <div class="helper-common-box" v-for="(border, index) in props.details" :key="index">
    <template v-if="color">
      <div :class="props.class + '' + border.color"></div>
      <span>{{ helperText }}-{{ border.color }}</span>
    </template>
    <template v-else-if="props.text">
      <div
        :class="[
          border.color === 'dark'
            ? props.class + '' + 'txt-light bg-dark'
            : props.class + '' + border.color,
        ]"
      >
        C
      </div>
      <span>txt-{{ border.color }}</span>
    </template>
    <template v-else>
      <div :class="props.class + ' ' + border.class"></div>
      <span>{{ border.class }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { BorderProps } from '@/types/uiKits'

const props = withDefaults(defineProps<BorderProps>(), {
  color: false,
  text: false,
  backgroundColor: false,
  helperText: 'border',
})
</script>
