<template>
  <div
    :class="searchResult ? 'Typeahead-menu is-open custom-scrollbar' : 'Typeahead-menu'"
    v-if="menuItems.length"
  >
    <div v-for="(item, index) in menuItems.slice(0, 8)" :key="index" class="ProfileCard u-cf" style="cursor: pointer" @click="openResult(item.path)">
      <div class="ProfileCard-avatar header-search">
        <MhjIcon
          v-if="(item.iconForDisplay || item.icon) === 'contact_card'"
          name="contact_card"
          :size="16"
          color="var(--app-primary, #18A6E4)"
          secondary-color="var(--app-primary, #18A6E4)"
        />
        <template v-else-if="item.iconForDisplay || item.icon">
          <SolarIcon
            :name="item.iconForDisplay || item.icon"
            :size="20"
            color="var(--app-primary, #18A6E4)"
            secondary-color="var(--app-primary, #18A6E4)"
            :secondary-opacity="1"
          />
        </template>
      </div>
      <!-- Search result details -->
      <div class="ProfileCard-details">
        <div class="ProfileCard-realName">
          <span>
            <a href="#" class="realname" @click.prevent>{{ t(item.title || '') }}</a>
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
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import SolarIcon from '@/components/shared/SolarIcon.vue'
import MhjIcon from '@/components/shared/MhjIcon.vue'

const { t } = useI18n()
const router = useRouter()
const emit = defineEmits(['clearSearch'])
function openResult(path?: string) {
  if (!path) return
  void router.push(path)
  emit('clearSearch')
}
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
</script>
