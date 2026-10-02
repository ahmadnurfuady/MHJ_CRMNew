<template>
  <div class="form search-form mb-0">
    <div class="input-group">
      <span class="input-icon">
        <SvgIcon icon="search-header" />
        <input
          class="w-100"
          type="text"
          @keyup="searchTerms"
          v-model="terms"
          placeholder="Search anything here"
      /></span>
    </div>
  </div>
  <div class="Typeahead Typeahead--twitterUsers">
    <div class="u-posRelative">
      <SearchResult
        :menuItems="menuItems"
        :searchResult="searchResult"
        :searchResultEmpty="searchResultEmpty"
        @clearSearch="removeFix"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, defineAsyncComponent } from "vue";
import { useSearch } from "@/store/searchBar";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const SearchResult = defineAsyncComponent(
  () => import("@/components/layout/header/serach/SearchResult.vue"),
);
const SvgIcon = defineAsyncComponent(
  () => import("@/components/shared/SvgIcon.vue"),
);

const store = useSearch();
const terms = ref<string>("");
const { searchData: menuItems, show } = storeToRefs(store);
const { searchTerm, closeSearch } = store;
const searchResult = ref<boolean>(false);
const searchResultEmpty = ref<boolean>(false);
const route = useRoute();

const searchTerms = () => searchTerm(terms.value);

const removeFix = () => {
  searchResult.value = false;
  terms.value = "";
  closeSearch();
};

watch(
  [menuItems, terms],
  () => {
    if (terms.value) {
      searchResult.value = true;
    } else {
      removeFix();
    }
    searchResultEmpty.value = menuItems.value.length === 0;
  },
  { deep: true },
);

watch(
  () => route.fullPath,
  () => {
    removeFix();
  },
);
</script>
