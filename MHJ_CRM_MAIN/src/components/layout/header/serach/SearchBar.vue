<template>
  <div class="form search-form mb-0">
    <div class="input-group">
      <span class="input-icon">
        <SolarIcon
          name="magnifier"
          :size="20"
          color="var(--app-primary-deep, #032A4E)"
          secondary-color="var(--app-primary, #18A6E4)"
          :secondary-opacity="0.75"
          aria-hidden="true"
        />
        <input
          class="w-100"
          type="text"
          @keyup="searchTerms"
          v-model="terms"
          :placeholder="t('header.searchPlaceholder')"
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
import { ref, watch, defineAsyncComponent } from 'vue'
import { useSearch } from '@/store/searchBar'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const SearchResult = defineAsyncComponent(
  () => import('@/components/layout/header/serach/SearchResult.vue')
)
const store = useSearch()
const terms = ref<string>('')
const { searchData: menuItems, show } = storeToRefs(store)
const { searchTerm, closeSearch } = store
const searchResult = ref<boolean>(false)
const searchResultEmpty = ref<boolean>(false)
const route = useRoute()

const searchTerms = () => searchTerm(terms.value)

const removeFix = () => {
  searchResult.value = false
  terms.value = ''
  closeSearch()
}

watch(
  [menuItems, terms],
  () => {
    if (terms.value) {
      searchResult.value = true
    } else {
      removeFix()
    }
    searchResultEmpty.value = menuItems.value.length === 0
  }
)

watch(
  () => route.fullPath,
  () => {
    removeFix()
  }
)
</script>
