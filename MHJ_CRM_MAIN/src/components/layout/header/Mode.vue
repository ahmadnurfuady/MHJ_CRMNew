<template>
  <button
    v-if="props.variant === 'menu'"
    class="mode-menu-trigger"
    type="button"
    role="switch"
    :aria-checked="isDarkMode"
    @click.stop="toggleTheme"
  >
    <span class="mode-menu-icon">
      <vue-feather :type="isDarkMode ? 'sun' : 'moon'" aria-hidden="true" />
    </span>
    <span class="mode-menu-copy">
      <strong>Mode Gelap</strong>
      <small>{{ isDarkMode ? "Aktif" : "Nonaktif" }}</small>
    </span>
    <span
      class="mode-switch"
      :class="{ active: isDarkMode }"
      aria-hidden="true"
    >
      <span></span>
    </span>
  </button>

  <div v-else class="mode" :class="{ active: isDarkMode }">
    <vue-feather :type="'moon'" @click="toggleTheme"></vue-feather>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useLayout } from "@/store/layout";
import { useHead } from "@vueuse/head";

const store = useLayout();
const props = withDefaults(defineProps<{ variant?: "header" | "menu" }>(), {
  variant: "header",
});
const { layoutState } = storeToRefs(store);

const isDarkMode = computed(
  () =>
    layoutState.value.theme === "dark-only" ||
    layoutState.value.theme === "dark-sidebar",
);

function toggleTheme() {
  const newTheme = isDarkMode.value ? "light" : "dark-only";
  store.setTheme(newTheme);
}

useHead({
  htmlAttrs: computed(() => ({
    "data-theme": layoutState.value.theme,
  })),
  bodyAttrs: computed(() => ({
    class: `${layoutState.value.theme} ${layoutState.value.layoutVersion} ${layoutState.value.layoutType}`,
  })),
});
</script>

<style scoped>
.mode-menu-trigger {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  border: 0;
  padding: 12px 4px;
  color: #313945;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.mode-menu-icon {
  display: flex;
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--app-primary, #18a6e4) !important;
  background: var(--app-primary-wash, #eaf7fd);
  line-height: 0;
}

.mode-menu-icon svg {
  position: static !important;
  display: block;
  width: 22px !important;
  height: 22px !important;
  margin: 0 !important;
  padding: 0 !important;
  fill: none !important;
  stroke: currentColor !important;
}

.mode-menu-icon svg * {
  fill: none !important;
  stroke: currentColor !important;
}

.mode-menu-copy {
  min-width: 0;
  flex: 1;
}

.mode-menu-copy strong,
.mode-menu-copy small {
  display: block;
}

.mode-menu-copy strong {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
}

.mode-menu-copy small {
  margin-top: 2px;
  color: #737b86;
  font-size: 11px;
}

.mode-switch {
  position: relative;
  flex: 0 0 38px;
  width: 38px;
  height: 22px;
  border-radius: 999px;
  background: #cbd3db;
  transition: background 0.2s ease;
}

.mode-switch span {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(3, 42, 78, 0.24);
  transition: transform 0.2s ease;
}

.mode-switch.active {
  background: var(--theme-default);
}

.mode-switch.active span {
  transform: translateX(16px);
}

:global(.dark-only) .mode-menu-trigger,
:global(.dark-sidebar) .mode-menu-trigger {
  color: #f2f4f7;
}

:global(.dark-only) .mode-menu-copy small,
:global(.dark-sidebar) .mode-menu-copy small {
  color: #aab2bd;
}
</style>
