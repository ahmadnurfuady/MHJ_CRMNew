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
              {{ item[props.displayKey] }}
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
        <ul class="custom-scrollbar">
          <template v-for="(option, index) in filteredOptions" :key="index">
            <template
              v-if="option && option.data && Array.isArray(option.data) && props.showOptions"
            >
              <div class="disabled">{{ option[displayKey] }}</div>
              <template v-for="(child, childIndex) in option.data" :key="childIndex">
                <li
                  :class="{ selected: isSelected(child) }"
                  @click="handleSelect(child)"
                  :ref="(el) => setOptionRef(el, index)"
                >
                  {{ child[displayKey] }}
                </li>
              </template>
            </template>
            <template v-else>
              <li
                :class="{
                  highlighted: index === highlightedIndex,
                  selected: isSelected(option),
                }"
                @click="handleSelect(option)"
                :ref="(el) => setOptionRef(el, index)"
              >
                {{ option[displayKey] }}
              </li>
            </template>
          </template>
          <li v-if="!filteredOptions.length" class="no-option">No Records Found</li>
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
import { ref } from 'vue'

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
})

const emits = defineEmits(['update:modelValue'])

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

.select-box.is-disabled,
.select-box.is-disabled .form-select {
  cursor: not-allowed;
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
  align-items: center;
  gap: 4px;
}

.selected-tag__remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: currentColor;
  background: transparent;
  border: 0;
  line-height: 1;
}
</style>
