<template>
  <div
    :class="searchResult ? 'Typeahead-menu is-open custom-scrollbar' : 'Typeahead-menu'"
    v-if="menuItems.length"
  >
    <div v-for="(item, index) in menuItems.slice(0, 8)" :key="index" class="ProfileCard u-cf">
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
              t(item.title || '')
            }}</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- No Results Message -->
  <div v-if="searchResultEmpty" class="Typeahead-menu is-open">
    <div class="tt-dataset tt-dataset-0">
      <div class="EmptyMessage">{{ t('header.noSearchResults') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineProps<{
  menuItems: {
    title?: string
    path?: string
    icon?: string
    iconForDisplay?: string
  }[]
  searchResult: boolean
  searchResultEmpty: boolean
}>()
defineEmits(['clearSearch'])

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
