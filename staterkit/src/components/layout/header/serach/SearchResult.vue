<template>
  <div
    :class="
      searchResult
        ? 'Typeahead-menu is-open custom-scrollbar'
        : 'Typeahead-menu'
    "
    v-if="menuItems.length"
  >
    <div
      v-for="(item, index) in menuItems.slice(0, 8)"
      :key="index"
      class="ProfileCard u-cf"
    >
      <div class="ProfileCard-avatar header-search">
        <template v-if="item.iconForDisplay || item.icon">
          <SvgIcon :icon="item.iconForDisplay || item.icon" type="stroke" />
        </template>
      </div>
      <!-- Search result details -->
      <div class="ProfileCard-details">
        <div class="ProfileCard-realName">
          <span>
            <router-link :to="{ path: item.path }" class="realname">{{
              item.title
            }}</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- No Results Message -->
  <div v-if="searchResultEmpty" class="Typeahead-menu is-open">
    <div class="tt-dataset tt-dataset-0">
      <div class="EmptyMessage">Your search turned up 0 results.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
defineProps<{
  menuItems: {
    title?: string;
    path?: string;
    icon?: string;
    iconForDisplay?: string;
  }[];
  searchResult: boolean;
  searchResultEmpty: boolean;
}>();
defineEmits(["clearSearch"]);

const SvgIcon = defineAsyncComponent(
  () => import("@/components/shared/SvgIcon.vue"),
);
</script>
