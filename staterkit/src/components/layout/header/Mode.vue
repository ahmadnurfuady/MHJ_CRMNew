<template>
  <div class="mode" :class="{ active: isDarkMode }">
    <vue-feather :type="'moon'" @click="toggleTheme"></vue-feather>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import { useLayout } from "@/store/layout";
import { useHead } from "@vueuse/head";

const store = useLayout();
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
