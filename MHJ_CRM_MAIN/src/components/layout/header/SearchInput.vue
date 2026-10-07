<template>
  <div class="form search-form mb-0">
    <div class="input-group">
      <span class="input-show">
        <SvgIcon icon="search-header" @click="collapseFilter()" />
        <div id="searchInput" :class="{ show: filtered }">
          <input
            :placeholder="t('header.searchPlaceholder')"
            type="text"
            name="q"
            :class="{ open: filtered }"
            @keyup="searchTerms"
            v-model="terms"
          /></div
      ></span>
    </div>
  </div>
  <div class="form-group search-form" :class="{ open: filtered }">
    <div
      :class="searchResult ? 'Typeahead-menu is-open custom-scrollbar' : 'Typeahead-menu '"
      v-if="menuItems.length"
    >
      <div class="ProfileCard u-cf" v-for="(menuItem, index) in menuItems" :key="index">
        <div class="ProfileCard-avatar header-search">
          <SvgIcon :icon="menuItem.icon || menuItem.iconForDisplay" type="fill" />
        </div>
        <div class="ProfileCard-details">
          <div class="ProfileCard-realName">
            <span @click.prevent="removeFix()">
              <router-link :to="{ path: menuItem.path }" class="realname">
                {{ t(menuItem.title || '') }}</router-link
              >
            </span>
          </div>
        </div>
      </div>
    </div>
    <div :class="searchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'">
      <div class="tt-dataset tt-dataset-0">
        <div class="EmptyMessage">
          {{ t('header.noSearchResults') }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearch } from '@/store/searchBar'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const filtered = ref<boolean>(false)
const terms = ref<string>('')

const store = useSearch()
const { searchData: menuItems } = storeToRefs(store)
const { searchTerm, toggleSearch } = store

const searchResult = ref<boolean>(false)
const searchResultEmpty = ref<boolean>(false)

watch(
  () => [menuItems.value, terms.value],
  () => {
    if (terms.value) {
      addFix()
    } else {
      removeFix()
    }

    searchResultEmpty.value = !menuItems.value.length
  }
)
function searchTerms() {
  searchTerm(terms.value)
}
function addFix() {
  searchResult.value = true
}

function removeFix() {
  searchResult.value = false
  terms.value = ''
}

function collapseFilter() {
  filtered.value = !filtered.value
}
</script>
