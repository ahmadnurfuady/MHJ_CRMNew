<template>
  <div ref="wrapperRef" class="select-wrapper">
    <button
      type="button"
      class="form-select text-start text-truncate"
      :class="{ 'text-muted': !modelValue }"
      :disabled="disabled"
      @click="toggle"
    >
      {{ selectedLabel || placeholder }}
    </button>

    <ul v-show="isOpen" class="select-menu" :class="placement" role="listbox">
      <li class="select-search">
        <input
          ref="searchInputRef"
          v-model="searchQuery"
          type="text"
          class="select-search-input"
          placeholder="Cari..."
          @click.stop
          @keydown.stop
        />
      </li>
      <li>
        <button type="button" class="select-item text-muted" @click="select('')">
          {{ placeholder }}
        </button>
      </li>
      <li v-for="opt in filteredOptions" :key="opt.value">
        <button
          type="button"
          class="select-item"
          :class="{ active: modelValue === opt.value }"
          :title="opt.label"
          @click="select(opt.value)"
        >
          {{ opt.label }}
        </button>
      </li>
      <li v-if="!filteredOptions.length" class="select-empty text-muted">
        Tidak ditemukan.
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { MasterOption } from '@/types/user'

const props = defineProps<{
  modelValue: string
  options: MasterOption[]
  placeholder?: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const placement = ref<'bottom' | 'top'>('bottom')
const wrapperRef = ref<HTMLElement | null>(null)
const searchInputRef = ref<HTMLInputElement | null>(null)
const searchQuery = ref('')

const MENU_HEIGHT = 200

const selectedLabel = computed(
  () => props.options.find((o) => o.value === props.modelValue)?.label ?? '',
)

const filteredOptions = computed(() => {
  const keyword = searchQuery.value.trim().toLocaleLowerCase('id-ID')
  if (!keyword) return props.options
  return props.options.filter((opt) => opt.label.toLocaleLowerCase('id-ID').includes(keyword))
})

function toggle() {
  if (!isOpen.value && wrapperRef.value) {
    const rect = wrapperRef.value.getBoundingClientRect()
    placement.value = window.innerHeight - rect.bottom < MENU_HEIGHT ? 'top' : 'bottom'
  }
  isOpen.value = !isOpen.value
}

watch(isOpen, (open) => {
  if (open) {
    searchQuery.value = ''
    nextTick(() => searchInputRef.value?.focus())
  }
})

function select(value: string) {
  emit('update:modelValue', value)
  isOpen.value = false
}

function onDocumentClick(e: MouseEvent) {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

function onDocumentKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onDocumentKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onDocumentKeydown)
})
</script>

<style scoped>
.select-wrapper {
  position: relative;
  width: 100%;
}

.form-select:not(:disabled) {
  cursor: pointer;
}

.select-menu {
  position: absolute;
  top: calc(100% + 2px);
  bottom: auto;
  left: 0;
  right: 0;
  z-index: 1050;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.375rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  max-height: 200px;
  overflow-y: auto;
  padding: 0.25rem 0;
  margin: 0;
  list-style: none;
}

.select-item {
  display: block;
  width: 100%;
  padding: 0.4rem 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  color: inherit;
  transition: background-color 0.12s;
}

.select-item:hover,
.select-item:focus {
  background-color: var(--theme-default, #7366ff);
  color: #fff;
  outline: none;
}

.select-item.active {
  background-color: var(--theme-default, #7366ff);
  color: #fff;
}

.select-menu.top {
  top: auto;
  bottom: calc(100% + 2px);
}

.select-search {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0.35rem 0.5rem;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.select-search-input {
  width: 100%;
  padding: 0.35rem 0.6rem;
  font-size: 0.875rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  outline: none;
}

.select-search-input:focus {
  border-color: var(--theme-default, #7366ff);
}

.select-empty {
  padding: 0.4rem 1rem;
  font-size: 0.875rem;
}
</style>
