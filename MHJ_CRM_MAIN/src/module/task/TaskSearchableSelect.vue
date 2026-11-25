<template>
  <div
    ref="rootRef"
    class="task-ss"
    :class="{ 'task-ss--open': open, 'task-ss--active': hasSelection }"
  >
    <label v-if="label" class="task-ss__label" :for="controlId">{{ label }}</label>
    <button
      :id="controlId"
      ref="triggerRef"
      type="button"
      class="task-ss__trigger"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click="toggle"
      @keydown.down.prevent="openPanel"
      @keydown.enter.prevent="toggle"
    >
      <span class="task-ss__value" :title="displayLabel">{{ displayLabel }}</span>
      <vue-feather type="chevron-down" size="14" aria-hidden="true" />
    </button>
    <div v-if="open" class="task-ss__panel" role="listbox">
      <div class="task-ss__search">
        <vue-feather type="search" size="14" aria-hidden="true" />
        <input
          ref="searchRef"
          v-model="query"
          type="search"
          :placeholder="searchPlaceholder"
          autocomplete="off"
          @keydown.esc.prevent="close"
        />
      </div>
      <ul class="task-ss__list">
        <li>
          <button
            type="button"
            class="task-ss__option"
            :class="{ 'task-ss__option--active': isSelected(null) }"
            @click="pick(null)"
          >
            <span>{{ placeholder }}</span>
          </button>
        </li>
        <li v-for="option in filteredOptions" :key="String(option.value)">
          <button
            type="button"
            class="task-ss__option"
            :class="{ 'task-ss__option--active': isSelected(option.value) }"
            :title="option.label"
            @click="pick(option.value)"
          >
            <span>{{ option.label }}</span>
          </button>
        </li>
        <li v-if="!filteredOptions.length" class="task-ss__empty">
          Tidak ada hasil untuk "{{ query }}"
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts" generic="V extends string | number">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface Option {
  value: V
  label: string
}

const props = defineProps<{
  modelValue: V | null
  options: Option[]
  label?: string
  placeholder: string
  searchPlaceholder?: string
  controlId?: string
}>()
const emit = defineEmits<{ 'update:modelValue': [value: V | null] }>()

const open = ref(false)
const query = ref('')
const rootRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLButtonElement | null>(null)
const searchRef = ref<HTMLInputElement | null>(null)

const searchPlaceholder = computed(() => props.searchPlaceholder || 'Ketik untuk mencari...')
const hasSelection = computed(() => props.modelValue !== null && props.modelValue !== undefined && props.modelValue !== '' && props.modelValue !== 0)

const selectedOption = computed(() =>
  props.options.find((opt) => opt.value === props.modelValue) || null,
)
const displayLabel = computed(() => selectedOption.value?.label || props.placeholder)

const filteredOptions = computed(() => {
  const q = query.value.trim().toLocaleLowerCase('id-ID')
  if (!q) return props.options
  return props.options.filter((opt) => opt.label.toLocaleLowerCase('id-ID').includes(q))
})

function isSelected(value: V | null): boolean {
  if (value === null) return !hasSelection.value
  return props.modelValue === value
}

function toggle() {
  if (open.value) close()
  else openPanel()
}

function openPanel() {
  open.value = true
  void nextTick(() => searchRef.value?.focus())
}

function close() {
  open.value = false
  query.value = ''
}

function pick(value: V | null) {
  emit('update:modelValue', value)
  close()
  triggerRef.value?.focus()
}

function handleDocumentClick(event: MouseEvent) {
  if (!open.value) return
  const target = event.target as Node | null
  if (target && rootRef.value && !rootRef.value.contains(target)) close()
}

watch(() => props.options, () => { query.value = '' })

onMounted(() => document.addEventListener('mousedown', handleDocumentClick))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleDocumentClick))
</script>

<style scoped>
.task-ss {
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 5px;
}

.task-ss__label {
  color: #475569;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.task-ss__trigger {
  display: flex;
  min-height: 38px;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 7px 10px 7px 12px;
  color: #0f172a;
  background: #ffffff;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.task-ss--active .task-ss__trigger {
  border-color: var(--app-primary, #18a6e4);
  color: var(--app-primary-dark, #0369a1);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.08);
}

.task-ss__trigger:hover,
.task-ss__trigger:focus-visible,
.task-ss--open .task-ss__trigger {
  border-color: var(--app-primary, #18a6e4);
  outline: none;
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.14);
}

.task-ss__value {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-ss__panel {
  position: absolute;
  z-index: 40;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  max-height: 280px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.14);
  overflow: hidden;
}

.task-ss__search {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #eef2f7;
  padding: 8px 12px;
  background: #f8fafc;
  color: #64748b;
}

.task-ss__search input {
  flex: 1 1 auto;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #0f172a;
  font-size: 12px;
}

.task-ss__search input::placeholder { color: #94a3b8; }

.task-ss__list {
  overflow-y: auto;
  margin: 0;
  padding: 4px 0;
  list-style: none;
}

.task-ss__option {
  display: block;
  width: 100%;
  border: 0;
  padding: 7px 14px;
  color: #334155;
  background: transparent;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
}

.task-ss__option > span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-ss__option:hover,
.task-ss__option:focus-visible {
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
  color: var(--app-primary-dark, #0369a1);
  outline: none;
}

.task-ss__option--active {
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.14);
  color: var(--app-primary-dark, #0369a1);
  font-weight: 600;
}

.task-ss__empty {
  padding: 10px 14px;
  color: #94a3b8;
  font-size: 12px;
  font-style: italic;
}
</style>