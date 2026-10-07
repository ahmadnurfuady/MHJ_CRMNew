<template>
  <div class="translate_wrapper" :class="{ active: active }" ref="dropdownRef">
    <div class="current_lang">
      <div class="lang" @click="openDropDown()">
        <span class="lang-txt"> {{ selectedLanguage.text }} </span>
      </div>
      <div class="more_lang" :class="{ active: active }">
        <div
          class="lang selected"
          v-for="language in data"
          :key="language.language"
          @click.prevent="selectLanguage(language)"
        >
          <i class="flag-icon" :class="language.icon"></i>
          <span class="lang-txt box-col-none">{{ language.language }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { language, type Language } from '@/core/data/language'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const data = language
const active = ref<boolean>(false)
const dropdownRef = ref<HTMLElement | null>(null)
const selectedLanguage = computed<Language>(
  () => data.find((item) => item.language === i18n.locale.value) ?? data[0]!
)

function selectLanguage(language: Language) {
  active.value = false
  i18n.locale.value = language.language
  localStorage.setItem('mhj-crm-locale', language.language)
  document.documentElement.lang = language.localeCode
  document.documentElement.dir = language.localeCode === 'ar' ? 'rtl' : 'ltr'
}

function openDropDown() {
  active.value = !active.value
}

onClickOutside(dropdownRef, () => {
  active.value = false
})
</script>
