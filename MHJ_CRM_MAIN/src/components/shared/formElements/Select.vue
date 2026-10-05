<template>
  <OnClickOutside @trigger="showDropdown = false">
    <div class="smart-select">
      <div class="select-box" @click="toggleDropdown($event)" ref="wrapperRef">
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
          style="min-height: 38px; cursor: pointer"
        >
          <template v-if="multiSelect && Array.isArray(displaySelected) && displaySelected.length">
            <span v-for="(item, index) in displaySelected" :key="index" class="badge badge-primary">
              {{ item[props.displayKey] }}
            </span>
          </template>
          <template v-else>
            <span class="text-muted">
              <template v-if="displaySelected && !Array.isArray(displaySelected)">
                {{ displaySelected }}
              </template>
              <template v-else>
                {{ isPlaceholder ? placeholder || 'Select' : '' }}
              </template>
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
      <div class="dropdown" v-if="showDropdown">
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
})

const emits = defineEmits(['update:modelValue'])

const {
  showDropdown,
  search,
  highlightedIndex,
  displaySelected,
  filteredOptions,
  toggleDropdown,
  isSelected,
  handleSelect,
  handleKeydown,
  setOptionRef,
  clear,
} = useSmartSelect(props, emits)
</script>
