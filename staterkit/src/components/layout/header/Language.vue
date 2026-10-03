<template>
  <div class="translate_wrapper" :class="{ active: active }" ref="dropdownRef">
    <div class="current_lang">
      <div class="lang" @click="openDropDown()">
        <span class="lang-txt"> {{ selectedLanguage.text }} </span>
      </div>
      <div class="more_lang" :class="{ active: active }">
        <div
          class="lang selected"
          v-for="(language, index) in data"
          :key="index"
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
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { language } from '@/core/data/language'
import { useI18n } from 'vue-i18n'
interface selected {
  language: string
  text?: string
  icon: string
}

const i18n = useI18n()
const data = language
const active = ref<boolean>(false)
const dropdownRef = ref<HTMLElement | null>(null)
const selectedLanguage = ref<selected>({
  language: 'English',
  text: 'EN',
  icon: 'flag-icon-us',
})

function selectLanguage(language: selected) {
  active.value = false
  i18n.locale.value = language.language
  selectedLanguage.value = language
}

function openDropDown() {
  active.value = !active.value
}

onClickOutside(dropdownRef, () => {
  active.value = false
})
</script>
