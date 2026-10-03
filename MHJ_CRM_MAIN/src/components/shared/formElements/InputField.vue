<template>
  <input
    :value="modelValue?.data ? modelValue?.data : ''"
    :type="inputType"
    :id="inputId"
    v-bind:placeholder="isPlaceholder ? placeholder || 'Enter Value' : undefined"
    class="form-control"
    :class="[
      props.class,
      { 'is-invalid ': modelValue?.errorMessage && !props.browserValidation },
      { 'animated input-shake': animationClass },
    ]"
    @input="onInput"
    @focusout="onInput"
    @focus="showBadge()"
    @blur="hideBadge()"
    v-if="inputType !== 'textarea' && inputType !== 'file'"
    :required="props?.required && props.browserValidation"
    :disabled="props.disabled"
    :list="props.datalist?.length ? `datalistOptions-${inputId}` : undefined"
    :maxlength="props.maxLength"
  />
  <datalist v-if="props.datalist?.length" :id="`datalistOptions-${inputId}`">
    <option v-for="item in props.datalist" :key="item.label" :value="item.label" />
  </datalist>

  <textarea
    :value="modelValue?.data ? modelValue?.data : ''"
    :id="inputId"
    v-bind:placeholder="isPlaceholder ? placeholder || 'Enter Value' : undefined"
    :rows="rows"
    class="form-control"
    :class="[
      props.class,
      { 'is-invalid': modelValue?.errorMessage && !props.browserValidation },
      { 'error animated input-shake': animationClass },
    ]"
    @input="onInput"
    @focusout="onInput"
    @focus="showBadge()"
    @blur="hideBadge()"
    v-else-if="inputType == 'textarea'"
    :required="props.required && props.browserValidation"
    :disabled="props.disabled"
    :maxlength="props.maxLength"
  />

  <input
    type="file"
    :id="inputId"
    v-bind:placeholder="isPlaceholder ? placeholder || 'Enter Value' : undefined"
    :multiple="multiple"
    class="form-control"
    :class="[
      props.class,
      { 'is-invalid': modelValue?.errorMessage && !props.browserValidation },
      { 'error animated input-shake': animationClass },
    ]"
    @change="onFileChange"
    :required="props.required && props.browserValidation"
    :disabled="props.disabled"
    v-else-if="inputType === 'file'"
  />

  <template v-if="modelValue?.errorMessage && required && !props.browserValidation">
    <div class="invalid-tooltip" v-if="props.tooltipValidation">
      {{ modelValue?.errorMessage }}
    </div>
    <div class="invalid-feedback" v-else>{{ modelValue?.errorMessage }}</div>
  </template>

  <div class="helper-text" v-if="props.helperText">
    <p class="fst-italic c-o-light" v-html="`*${props.helperText}`"></p>
  </div>
</template>

<script setup lang="ts">
import { useInputField } from '@/composable/useInputField'
import type { InputProps } from '@/types/common'

const props = withDefaults(defineProps<InputProps>(), {
  inputType: 'text',
  required: true,
  rows: 3,
  multiple: false,
  helperText: '',
  disabled: false,
  tooltipValidation: false,
  browserValidation: false,
  animation: false,
  datalist: () => [],
  isPlaceholder: true,
  showLengthBadge: false,
  formatValue: false,
  formatFunction: null,
})
const emit = defineEmits(['update:modelValue', 'badgeVisible'])
const { onInput, onFileChange, showBadge, hideBadge, animationClass } = useInputField(props, emit)
</script>
