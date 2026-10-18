<template>
  <img
    class="mhj-icon"
    :class="{ 'mhj-icon--fallback': usesFallback }"
    :src="iconPath"
    :width="size"
    :height="size"
    :alt="alt"
    :aria-hidden="alt ? undefined : 'true'"
    :data-mhj-icon="resolvedName"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  isMhjIconName,
  MHJ_ICON_PATHS,
  type MhjIconName,
} from '@/utils/mhjIcons'

const props = withDefaults(
  defineProps<{
    name: MhjIconName | string
    size?: number | string
    alt?: string
    fallback?: MhjIconName
  }>(),
  {
    size: 24,
    alt: '',
    fallback: 'nav_home',
  },
)

const usesFallback = computed(() => !isMhjIconName(props.name))
const resolvedName = computed<MhjIconName>(() =>
  isMhjIconName(props.name) ? props.name : props.fallback,
)
const iconPath = computed(() => MHJ_ICON_PATHS[resolvedName.value])
</script>

<style scoped>
.mhj-icon {
  display: inline-block;
  flex: 0 0 auto;
  max-width: none;
  object-fit: contain;
  vertical-align: middle;
}
</style>
