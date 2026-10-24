<template>
  <div v-if="props.variant === 'menu'" ref="dropdownRef" class="language-menu">
    <button
      class="language-menu-trigger"
      type="button"
      @click.stop="openDropDown"
    >
      <span class="language-menu-icon">
        <SolarIcon
          name="global-linear"
          :size="22"
          color="#1599CF"
          :stroke-width="2"
          aria-hidden="true"
        />
      </span>
      <span class="language-menu-copy">
        <strong>Bahasa</strong>
        <small>{{ selectedLanguage.language }}</small>
      </span>
      <vue-feather
        class="language-menu-chevron"
        :class="{ active }"
        type="chevron-down"
        aria-hidden="true"
      />
    </button>

    <div v-if="active" class="language-menu-options">
      <button
        v-for="language in data"
        :key="language.language"
        class="language-option"
        :class="{ selected: language.language === selectedLanguage.language }"
        type="button"
        @click.stop="selectLanguage(language)"
      >
        <i class="flag-icon" :class="language.icon"></i>
        <span>{{ language.language }}</span>
        <vue-feather
          v-if="language.language === selectedLanguage.language"
          type="check"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>

  <div
    v-else
    class="translate_wrapper"
    :class="{ active: active }"
    ref="dropdownRef"
  >
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
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { language, type Language } from "@/core/data/language";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const props = withDefaults(defineProps<{ variant?: "header" | "menu" }>(), {
  variant: "header",
});
const data = language;
const active = ref<boolean>(false);
const dropdownRef = ref<HTMLElement | null>(null);
const selectedLanguage = computed<Language>(
  () => data.find((item) => item.language === i18n.locale.value) ?? data[0]!,
);

function selectLanguage(language: Language) {
  active.value = false;
  i18n.locale.value = language.language;
  localStorage.setItem("mhj-crm-locale", language.language);
  document.documentElement.lang = language.localeCode;
  document.documentElement.dir = language.localeCode === "ar" ? "rtl" : "ltr";
}

function openDropDown() {
  active.value = !active.value;
}

onClickOutside(dropdownRef, () => {
  active.value = false;
});
</script>

<style scoped>
.language-menu {
  width: 100%;
}

.language-menu-trigger {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  border: 0;
  padding: 12px 4px;
  color: #313945;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.language-menu-icon {
  display: flex;
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #1599cf;
  background: #eaf7fd;
  line-height: 0;
}

.language-menu-icon svg {
  position: static !important;
  display: block;
  width: 22px !important;
  height: 22px !important;
  margin: 0 !important;
  padding: 0 !important;
}

.language-menu-icon svg:not(.solar-icon) {
  fill: none !important;
  stroke: currentColor !important;
}

.language-menu-icon svg:not(.solar-icon) *,
.language-menu-chevron *,
.language-option svg * {
  fill: none !important;
  stroke: currentColor !important;
}

.language-menu-copy {
  min-width: 0;
  flex: 1;
}

.language-menu-copy strong,
.language-menu-copy small {
  display: block;
}

.language-menu-copy strong {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
}

.language-menu-copy small {
  margin-top: 2px;
  color: #737b86;
  font-size: 11px;
}

.language-menu-chevron {
  width: 18px !important;
  height: 18px !important;
  color: #78818b;
  fill: none !important;
  stroke: currentColor !important;
  transition: transform 0.2s ease;
}

.language-menu-chevron.active {
  transform: rotate(180deg);
}

.language-menu-options {
  display: grid;
  max-height: 190px;
  overflow-y: auto;
  gap: 3px;
  margin: -4px 0 10px 50px;
  padding: 6px;
  border: 1px solid #e6edf2;
  border-radius: 10px;
  background: #f8fbfd;
}

.language-option {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  border: 0;
  border-radius: 7px;
  padding: 7px 8px;
  color: #4a535e;
  background: transparent;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
}

.language-option:hover,
.language-option.selected {
  color: var(--theme-default);
  background: #eaf7fd;
}

.language-option span {
  flex: 1;
}

.language-option svg {
  width: 14px !important;
  height: 14px !important;
  fill: none !important;
  stroke: currentColor !important;
}

:global(.dark-only) .language-menu-trigger,
:global(.dark-sidebar) .language-menu-trigger {
  color: #f2f4f7;
}

:global(.dark-only) .language-menu-copy small,
:global(.dark-sidebar) .language-menu-copy small {
  color: #aab2bd;
}

:global(.dark-only) .language-menu-options,
:global(.dark-sidebar) .language-menu-options {
  border-color: #343b48;
  background: #252c39;
}

:global(.dark-only) .language-option,
:global(.dark-sidebar) .language-option {
  color: #dce1e7;
}
</style>
