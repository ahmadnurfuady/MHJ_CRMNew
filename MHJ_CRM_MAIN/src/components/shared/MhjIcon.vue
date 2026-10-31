<template>
  <span
    v-if="inlineSvg"
    class="mhj-icon mhj-icon--inline"
    :class="{ 'mhj-icon--fallback': usesFallback }"
    :style="iconSizeStyle"
    :role="alt ? 'img' : undefined"
    :aria-label="alt || undefined"
    :aria-hidden="alt ? undefined : 'true'"
    :data-mhj-icon="resolvedName"
    v-html="inlineSvg"
  ></span>
  <img
    v-else
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
import mhjIconMarkup from 'virtual:mhj-icon-markup'
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
    color?: string
    secondaryColor?: string
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

const iconSizeStyle = computed(() => {
  const value = typeof props.size === 'number' ? `${props.size}px` : props.size
  return { width: value, height: value }
})

function applyThemeColors(svg: string): string {
  const primary = props.color ?? 'var(--app-primary-deep, #032A4E)'
  const secondary = props.secondaryColor ?? 'var(--app-secondary, #18A6E4)'

  return svg
    .replace(/<\?xml[^>]*\?>/i, '')
    .replace(/\swidth="[^"]*"/i, '')
    .replace(/\sheight="[^"]*"/i, '')
    .replace(/#032A4E/gi, primary)
    .replace(/#078DBD/gi, primary)
    .replace(/#(?:000000|000)\b/gi, primary)
    .replace(/#18A6E4/gi, secondary)
}

const inlineSvg = computed(() => applyThemeColors(mhjIconMarkup[iconPath.value] ?? ''))
</script>

<style scoped>
.mhj-icon {
  display: inline-block;
  flex: 0 0 auto;
  max-width: none;
  object-fit: contain;
  vertical-align: middle;
}

.mhj-icon--inline {
  overflow: hidden;
}

.mhj-icon--inline :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
