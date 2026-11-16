<template>
  <div ref="wrapperRef" class="select-wrapper">
    <button
      ref="buttonRef"
      type="button"
      class="form-select text-start text-truncate"
      :class="{ 'text-muted': !modelValue }"
      :disabled="disabled"
      @click="toggle"
    >
      {{ selectedLabel || placeholder }}
    </button>

    <!-- Menu di-teleport ke body + posisi fixed mengikuti tombol, supaya tidak
         terpotong / tertindih header saat berada di dalam tabel yang di-scroll. -->
    <Teleport to="body">
      <ul v-if="isOpen" ref="menuRef" class="select-menu" :style="menuStyle" role="listbox">
        <li v-if="searchable" class="select-search">
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
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { MasterOption } from '@/types/user'

const props = withDefaults(
  defineProps<{
    modelValue: string
    options: MasterOption[]
    placeholder?: string
    disabled?: boolean
    /** Tampilkan kotak pencarian di dalam menu (default true). */
    searchable?: boolean
  }>(),
  { searchable: true },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const searchInputRef = ref<HTMLInputElement | null>(null)
const searchQuery = ref('')

const MENU_HEIGHT = 200

// Posisi menu (fixed, relatif viewport). Dihitung dari rect tombol.
const menuPos = ref<{ left: number; width: number; top: number | null; bottom: number | null }>({
  left: 0,
  width: 0,
  top: null,
  bottom: null,
})

const menuStyle = computed(() => {
  const p = menuPos.value
  const style: Record<string, string> = {
    position: 'fixed',
    left: `${p.left}px`,
    width: `${p.width}px`,
    zIndex: '1080',
  }
  if (p.top !== null) style.top = `${p.top}px`
  if (p.bottom !== null) style.bottom = `${p.bottom}px`
  return style
})

const selectedLabel = computed(
  () => props.options.find((o) => o.value === props.modelValue)?.label ?? '',
)

const filteredOptions = computed(() => {
  const keyword = searchQuery.value.trim().toLocaleLowerCase('id-ID')
  if (!keyword) return props.options
  return props.options.filter((opt) => opt.label.toLocaleLowerCase('id-ID').includes(keyword))
})

function updateMenuPosition() {
  const btn = buttonRef.value
  if (!btn) return
  const rect = btn.getBoundingClientRect()
  const spaceBelow = window.innerHeight - rect.bottom
  // Buka ke atas kalau ruang bawah sempit dan ruang atas lebih lega.
  const openUp = spaceBelow < MENU_HEIGHT && rect.top > spaceBelow
  menuPos.value = {
    left: rect.left,
    width: rect.width,
    top: openUp ? null : rect.bottom + 2,
    bottom: openUp ? window.innerHeight - rect.top + 2 : null,
  }
}

function toggle() {
  if (props.disabled) return
  if (!isOpen.value) updateMenuPosition() // hitung posisi sebelum menu dirender
  isOpen.value = !isOpen.value
}

watch(isOpen, (open) => {
  if (open) {
    searchQuery.value = ''
    nextTick(() => {
      updateMenuPosition()
      if (props.searchable) searchInputRef.value?.focus()
    })
  }
})

function select(value: string) {
  emit('update:modelValue', value)
  isOpen.value = false
}

function onDocumentClick(e: MouseEvent) {
  const target = e.target as Node
  const inWrapper = wrapperRef.value?.contains(target)
  const inMenu = menuRef.value?.contains(target)
  if (!inWrapper && !inMenu) isOpen.value = false
}

function onDocumentKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') isOpen.value = false
}

// Saat halaman / tabel di-scroll atau ukuran berubah, menu mengikuti tombol.
function onReposition() {
  if (isOpen.value) updateMenuPosition()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onDocumentKeydown)
  window.addEventListener('scroll', onReposition, true)
  window.addEventListener('resize', onReposition)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onDocumentKeydown)
  window.removeEventListener('scroll', onReposition, true)
  window.removeEventListener('resize', onReposition)
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

/* Posisi (fixed/left/top/width) di-set inline via menuStyle; di sini hanya tampilan. */
.select-menu {
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
