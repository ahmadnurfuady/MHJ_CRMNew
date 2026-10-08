<template>
  <div ref="wrapperRef" class="select-wrapper">
    <!-- Kotak input: tampil seperti .form-select, berisi chip pilihan atau placeholder. -->
    <div
      v-bind="$attrs"
      class="form-select multiselect-control text-start"
      :class="{ 'is-disabled': disabled, 'is-open': isOpen }"
      role="combobox"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :tabindex="disabled ? -1 : 0"
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.space.prevent="toggle"
    >
      <span v-if="selectedOptions.length === 0" class="text-muted text-truncate">
        {{ placeholder }}
      </span>

      <span
        v-for="opt in selectedOptions"
        :key="opt.value"
        class="multiselect-chip"
        :title="opt.label"
      >
        <span class="multiselect-chip-label">{{ opt.label }}</span>
        <button
          type="button"
          class="multiselect-chip-remove"
          :aria-label="`Hapus ${opt.label}`"
          :disabled="disabled"
          @click.stop="remove(opt.value)"
        >
          &times;
        </button>
      </span>
    </div>

    <ul v-show="isOpen" class="select-menu" :class="placement" role="listbox" aria-multiselectable="true">
      <li v-if="options.length === 0">
        <span class="select-item text-muted">{{ placeholder }}</span>
      </li>
      <li v-for="opt in options" :key="opt.value">
        <button
          type="button"
          class="select-item multiselect-item"
          :class="{ active: isSelected(opt.value) }"
          :title="opt.label"
          role="option"
          :aria-selected="isSelected(opt.value)"
          @click="toggleOption(opt.value)"
        >
          <span class="text-truncate">{{ opt.label }}</span>
          <span v-if="isSelected(opt.value)" class="multiselect-check">&check;</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { MasterOption } from '@/types/user'

// Atribut luar (mis. `id` agar <label for> bekerja) menempel pada kotak kontrol,
// bukan pada wrapper posisi-relatif.
defineOptions({ inheritAttrs: false })

const props = defineProps<{
  modelValue: string[]
  options: MasterOption[]
  placeholder?: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const isOpen = ref(false)
const placement = ref<'bottom' | 'top'>('bottom')
const wrapperRef = ref<HTMLElement | null>(null)

const MENU_HEIGHT = 200

/**
 * Chip ditampilkan mengikuti urutan modelValue, bukan urutan options,
 * agar urutan pilihan pengguna (dan urutan dari backend saat edit) terjaga.
 * Kode yang tidak ada di master tetap ditampilkan apa adanya supaya data lama
 * tidak hilang diam-diam dari form.
 */
const selectedOptions = computed<MasterOption[]>(() =>
  props.modelValue.map(
    (code) => props.options.find((opt) => opt.value === code) ?? { value: code, label: code },
  ),
)

function isSelected(value: string): boolean {
  return props.modelValue.includes(value)
}

function toggleOption(value: string) {
  if (isSelected(value)) {
    remove(value)
    return
  }
  emit('update:modelValue', [...props.modelValue, value])
}

function remove(value: string) {
  emit(
    'update:modelValue',
    props.modelValue.filter((code) => code !== value),
  )
}

function toggle() {
  if (props.disabled) return
  if (!isOpen.value && wrapperRef.value) {
    const rect = wrapperRef.value.getBoundingClientRect()
    placement.value = window.innerHeight - rect.bottom < MENU_HEIGHT ? 'top' : 'bottom'
  }
  isOpen.value = !isOpen.value
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

.multiselect-control {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  min-height: calc(1.5em + 0.75rem + 2px);
  height: auto;
  cursor: pointer;
}

.multiselect-control.is-disabled {
  background-color: var(--bs-secondary-bg, #e9ecef);
  cursor: not-allowed;
}

.multiselect-control:focus-visible {
  outline: 2px solid #18A6E4;
  outline-offset: 1px;
}

.multiselect-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  max-width: 100%;
  padding: 0.1rem 0.25rem 0.1rem 0.5rem;
  border-radius: 0.25rem;
  background-color: rgba(24, 166, 228, 0.12);
  color: #127CAB;
  font-size: 0.75rem;
  line-height: 1.6;
}

.multiselect-chip-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.multiselect-chip-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  font-size: 0.875rem;
  line-height: 1;
  cursor: pointer;
}

.multiselect-chip-remove:hover,
.multiselect-chip-remove:focus-visible {
  background-color: rgba(0, 0, 0, 0.12);
  outline: none;
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

.select-menu.top {
  top: auto;
  bottom: calc(100% + 2px);
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

.multiselect-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

/* Hover: latar biru pucat, teks tetap gelap (belum dipilih) */
.select-item:hover,
.select-item:focus {
  background-color: rgba(24, 166, 228, 0.12);
  color: inherit;
  outline: none;
}

/* Selected: latar biru solid primary, teks putih */
.select-item.active {
  background-color: #18A6E4;
  color: #fff;
}

.multiselect-check {
  flex-shrink: 0;
  font-weight: 600;
}
</style>
