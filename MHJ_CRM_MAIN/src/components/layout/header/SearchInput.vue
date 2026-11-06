<template>
  <div class="form search-form mb-0">
    <div class="input-group">
      <span class="input-show">
        <SolarIcon
          name="magnifier"
          :size="20"
          color="var(--app-primary-deep, #032A4E)"
          secondary-color="var(--app-primary, #18A6E4)"
          :secondary-opacity="0.75"
          aria-label="Buka pencarian"
          @click="collapseFilter()"
        />
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
      <div
        class="ProfileCard u-cf"
        v-for="(menuItem, index) in menuItems"
        :key="index"
        style="cursor: pointer"
        @click="openResult(menuItem.path)"
      >
        <div class="ProfileCard-avatar header-search">
          <MhjIcon
            v-if="(menuItem.iconForDisplay || menuItem.icon) === 'contact_card'"
            name="contact_card"
            :size="16"
            color="var(--app-primary, #18A6E4)"
            secondary-color="var(--app-primary, #18A6E4)"
          />
          <SolarIcon
            v-else
            :name="menuItem.iconForDisplay || menuItem.icon"
            :size="20"
            color="var(--app-primary, #18A6E4)"
            secondary-color="var(--app-primary, #18A6E4)"
            :secondary-opacity="1"
          />
        </div>
        <div class="ProfileCard-details">
          <div class="ProfileCard-realName">
            <span>
              <a href="#" class="realname" @click.prevent>{{ t(menuItem.title || '') }}</a>
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
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearch } from '@/store/searchBar'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import SolarIcon from '@/components/shared/SolarIcon.vue'
import MhjIcon from '@/components/shared/MhjIcon.vue'

const { t } = useI18n()
const router = useRouter()

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
function openResult(path?: string) {
  if (!path) return
  void router.push(path)
  removeFix()
  filtered.value = false
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
