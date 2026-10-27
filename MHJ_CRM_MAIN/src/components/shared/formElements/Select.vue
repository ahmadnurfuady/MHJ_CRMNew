<template>
  <OnClickOutside @trigger="showDropdown = false">
    <div class="smart-select">
      <div
        class="select-box"
        :class="{ 'is-disabled': props.disabled }"
        @click="toggleWithPlacement($event)"
        ref="wrapperRef"
      >
        <div
          class="form-select d-flex flex-wrap align-items-center gap-1 px-2 py-1"
          :class="[
            props.class,
            {
              'is-invalid': props.modelValue.errorMessage && required && props.formSubmitted,
              'bg-light': props.disabled,
            },
          ]"
          :disabled="props.disabled"
          style="min-height: 38px"
        >
          <template v-if="multiSelect && Array.isArray(displaySelected) && displaySelected.length">
            <span v-for="(item, index) in displaySelected" :key="index" class="badge badge-primary selected-tag">
              <span class="selected-tag__label" :title="String(item[props.displayKey] ?? '')">
                {{ item[props.displayKey] }}
              </span>
              <button
                v-if="props.removableTags && !props.disabled"
                class="selected-tag__remove"
                type="button"
                :aria-label="`Hapus ${String(item[props.displayKey])}`"
                @click.stop="removeSelected(index)"
              >
                <vue-feather type="x" size="13" />
              </button>
            </span>
          </template>
          <template v-else-if="displaySelected && !Array.isArray(displaySelected)">
            <span class="select-value">{{ displaySelected }}</span>
          </template>
          <template v-else>
            <span class="select-placeholder">
              {{ isPlaceholder ? placeholder || 'Select' : '' }}
            </span>
          </template>
        </div>
        <span
          class="clear-btn"
          v-if="
            !disableClearButton &&
            (multiSelect
              ? Array.isArray(displaySelected) && displaySelected.length
              : displaySelected)
          "
          @click.stop="clear"
        >
          <vue-feather :type="'x'" />
        </span>
      </div>
      <div
        class="dropdown"
        :class="`dropdown-${dropdownPlacement}`"
        v-if="showDropdown"
      >
        <input
          type="text"
          v-model="search"
          class="form-control"
          placeholder="Search..."
          ref="searchInput"
          @keydown.stop="handleKeydown($event)"
        />
        <ul class="custom-scrollbar" @scroll="handleListScroll">
          <template v-for="(option, index) in filteredOptions" :key="index">
            <template
              v-if="option && option.data && Array.isArray(option.data) && props.showOptions"
            >
              <div class="disabled">{{ option[displayKey] }}</div>
              <template v-for="(child, childIndex) in option.data" :key="childIndex">
                <li
                  :class="{ selected: isSelected(child), 'has-checkbox': multiSelect }"
                  @click="handleSelect(child)"
                  :ref="(el) => setOptionRef(el, index)"
                >
                  <input
                    v-if="multiSelect"
                    class="form-check-input option-checkbox"
                    type="checkbox"
                    tabindex="-1"
                    aria-hidden="true"
                    :checked="isSelected(child)"
                  />
                  <span class="option-label">{{ child[displayKey] }}</span>
                </li>
              </template>
            </template>
            <template v-else>
              <li
                :class="{
                  highlighted: index === highlightedIndex,
                  selected: isSelected(option),
                  'has-subtitle': Boolean(subtitleKey && option[subtitleKey]),
                  'has-checkbox': multiSelect,
                }"
                @click="handleSelect(option)"
                :ref="(el) => setOptionRef(el, index)"
              >
                <!-- Checkbox menandakan opsi boleh dipilih lebih dari satu.
                     Klik tetap ditangani <li>, jadi input-nya hanya penanda visual. -->
                <input
                  v-if="multiSelect"
                  class="form-check-input option-checkbox"
                  type="checkbox"
                  tabindex="-1"
                  aria-hidden="true"
                  :checked="isSelected(option)"
                />
                <div class="option-text">
                  <span class="option-label">{{ option[displayKey] }}</span>
                  <small
                    v-if="subtitleKey && option[subtitleKey]"
                    class="option-subtitle"
                    :title="String(option[subtitleKey])"
                  >
                    {{ option[subtitleKey] }}
                  </small>
                </div>
              </li>
            </template>
          </template>
          <li v-if="searching" class="no-option">Mencari...</li>
          <li v-else-if="!filteredOptions.length" class="no-option">No Records Found</li>
          <li v-else-if="loadingMore" class="no-option">Memuat data lainnya...</li>
        </ul>
      </div>
    </div>
  </OnClickOutside>
  <template v-if="modelValue?.errorMessage && required && props.formSubmitted">
    <div class="invalid-tooltip" v-if="props.tooltipValidation">
      {{ modelValue?.errorMessage }}
    </div>
    <div class="invalid-feedback" v-else>{{ modelValue?.errorMessage }}</div>
  </template>
</template>

<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'
import { computed, ref } from 'vue'

import type { SelectProps } from '@/types/common'

import { useSmartSelect } from '../../../composable/useSelect'

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select',
  displayKey: 'label',
  getValueKey: 'label',
  multiSelect: false,
  required: true,
  formSubmitted: false,
  disableClearButton: false,
  tooltipValidation: false,
  isPlaceholder: true,
  disabled: false,
  showOptions: false,
  removableTags: false,
  loadingMore: false,
  remoteSearch: false,
  searching: false,
})

const subtitleKey = computed(() => props.subtitleKey)

const emits = defineEmits(['update:modelValue', 'reach-bottom', 'search'])

const dropdownPlacement = ref<'bottom' | 'top'>('bottom')

const {
  showDropdown,
  search,
  wrapperRef,
  searchInput,
  highlightedIndex,
  displaySelected,
  filteredOptions,
  toggleDropdown,
  isSelected,
  handleSelect,
  handleKeydown,
  setOptionRef,
  clear,
  removeSelected,
} = useSmartSelect(props, emits)

function scrollBoundary(element: HTMLElement): { top: number; bottom: number } {
  let parent = element.parentElement
  while (parent) {
    const overflowY = window.getComputedStyle(parent).overflowY
    if (overflowY === 'auto' || overflowY === 'scroll') {
      const rect = parent.getBoundingClientRect()
      return {
        top: Math.max(0, rect.top),
        bottom: Math.min(window.innerHeight, rect.bottom),
      }
    }
    parent = parent.parentElement
  }
  return { top: 0, bottom: window.innerHeight }
}

/** Dipanggil saat list opsi di-scroll mentok bawah, dipakai untuk infinite scroll (lihat prop loadingMore). */
function handleListScroll(event: Event) {
  const list = event.target as HTMLElement
  const reachedBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 32
  if (reachedBottom) emits('reach-bottom')
}

function toggleWithPlacement(event: Event) {
  if (!showDropdown.value && wrapperRef.value) {
    const rect = wrapperRef.value.getBoundingClientRect()
    const boundary = scrollBoundary(wrapperRef.value)
    const availableBelow = boundary.bottom - rect.bottom
    const availableAbove = rect.top - boundary.top
    const expectedHeight = Math.min(280, 60 + filteredOptions.value.length * 40)

    dropdownPlacement.value =
      availableBelow < expectedHeight && availableAbove > availableBelow ? 'top' : 'bottom'
  }
  toggleDropdown(event)
}
</script>

<style scoped>
.select-box,
.form-select,
.dropdown li {
  cursor: pointer;
}

.smart-select,
.select-box,
.form-select {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
}

.form-select {
  overflow: hidden;
}

.select-box.is-disabled,
.select-box.is-disabled .form-select {
  cursor: not-allowed;
}

/* Panah dropdown bawaan .form-select tidak relevan saat field dikunci —
   nilainya diisi sistem dan tidak ada daftar yang bisa dibuka. */
.select-box.is-disabled .form-select {
  padding-right: 0.75rem !important;
  background-image: none;
}

.dropdown.dropdown-bottom {
  top: calc(100% + 4px);
  bottom: auto;
}

.dropdown.dropdown-top {
  top: auto;
  bottom: calc(100% + 4px);
}

.select-placeholder {
  overflow: hidden;
  color: #94a3b8;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-value {
  overflow: hidden;
  color: #334155;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.selected-tag {
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  align-items: center;
  gap: 4px;
  color: #ffffff !important;
}

.selected-tag__label {
  min-width: 0;
  overflow: hidden;
  color: inherit !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.selected-tag__remove {
  display: inline-flex;
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 4px;
  border: 0;
  border-radius: 50%;
  color: #ffffff !important;
  background: rgba(0, 0, 0, 0.35);
  line-height: 1;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.selected-tag__remove:hover,
.selected-tag__remove:focus-visible {
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff !important;
  outline: 0;
}

.selected-tag__remove :deep(svg) {
  color: #ffffff !important;
  stroke: #ffffff !important;
  stroke-width: 2.75;
}

.dropdown li.has-subtitle {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px;
  line-height: 1.3;
}

/* Mode pilih-banyak: checkbox di kiri, label (dan sub-teksnya) di kanan. */
.dropdown li.has-checkbox {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 12px;
  line-height: 1.3;
}

.dropdown li.has-checkbox .option-checkbox {
  /* .smart-select .dropdown input (global) memakai lebar penuh untuk kolom
     pencarian; ukuran checkbox dikembalikan di sini. */
  display: inline-block;
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  margin: 2px 0 0;
  /* Klik ditangani <li> agar satu kali klik saja yang mengubah pilihan. */
  pointer-events: none;
}

.dropdown li .option-text {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 2px;
}

.dropdown li.has-subtitle .option-label {
  color: inherit;
  font-weight: 500;
}

.dropdown li.has-subtitle .option-subtitle {
  display: -webkit-box;
  overflow: hidden;
  color: #475569;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.35;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.dropdown li.has-subtitle.highlighted .option-subtitle,
.dropdown li.has-subtitle.selected .option-subtitle {
  color: #334155;
}
</style>
