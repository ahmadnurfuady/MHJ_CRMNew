<template>
  <h5>Appearance</h5>
  <div class="appearance-settings">
    <div class="appearance-field">
      <label for="primaryColor">Primary color</label>
      <div class="color-control">
        <input id="primaryColor" v-model="primary" type="color" aria-label="Primary color" />
        <code>{{ primary.toUpperCase() }}</code>
      </div>
    </div>

    <div class="appearance-field">
      <label for="secondaryColor">Secondary color</label>
      <div class="color-control">
        <input id="secondaryColor" v-model="secondary" type="color" aria-label="Secondary color" />
        <code>{{ secondary.toUpperCase() }}</code>
      </div>
    </div>

    <div class="appearance-field">
      <label for="fontFamily">Global font</label>
      <select id="fontFamily" v-model="fontFamily" class="form-select">
        <option v-for="font in fontOptions" :key="font.value" :value="font.value">
          {{ font.label }}
        </option>
      </select>
    </div>

    <div class="appearance-field">
      <div class="text-size-heading">
        <label for="globalTextSize">Ukuran teks global</label>
        <output for="globalTextSize">{{ formattedFontSizeOffset }}</output>
      </div>
      <div class="text-size-control">
        <button
          type="button"
          aria-label="Kecilkan ukuran teks"
          :disabled="fontSizeOffset <= MIN_FONT_SIZE_OFFSET"
          @click="decreaseFontSize"
        >−</button>
        <input
          id="globalTextSize"
          v-model.number="fontSizeOffset"
          type="range"
          :min="MIN_FONT_SIZE_OFFSET"
          :max="MAX_FONT_SIZE_OFFSET"
          :step="FONT_SIZE_STEP"
          aria-label="Ukuran teks global"
        />
        <button
          type="button"
          aria-label="Besarkan ukuran teks"
          :disabled="fontSizeOffset >= MAX_FONT_SIZE_OFFSET"
          @click="increaseFontSize"
        >+</button>
      </div>
      <small class="text-size-help">Berlaku untuk seluruh tampilan aplikasi.</small>
    </div>

    <small class="text-muted">
      Warna turunan, sidebar, komponen, dan font akan mengikuti pengaturan ini.
    </small>

    <div class="appearance-actions">
      <button type="button" class="btn btn-primary" @click="applyAppearance">Apply</button>
      <button type="button" class="btn btn-outline-primary" @click="restoreDefaults">
        Reset
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import {
  defaultAppearance,
  FONT_SIZE_STEP,
  fontOptions,
  MAX_FONT_SIZE_OFFSET,
  MIN_FONT_SIZE_OFFSET,
} from '@/config/appearance'
import { useLayout } from '@/store/layout'

const store = useLayout()
const { layoutState } = storeToRefs(store)

const primary = ref(layoutState.value.primaryColor)
const secondary = ref(layoutState.value.secondaryColor)
const fontFamily = ref(layoutState.value.fontFamily)
const fontSizeOffset = ref(layoutState.value.fontSizeOffset)
const formattedFontSizeOffset = computed(() =>
  `${fontSizeOffset.value > 0 ? '+' : ''}${fontSizeOffset.value} px`
)

function decreaseFontSize() {
  fontSizeOffset.value = Math.max(
    MIN_FONT_SIZE_OFFSET,
    fontSizeOffset.value - FONT_SIZE_STEP
  )
}

function increaseFontSize() {
  fontSizeOffset.value = Math.min(
    MAX_FONT_SIZE_OFFSET,
    fontSizeOffset.value + FONT_SIZE_STEP
  )
}

function reloadWithUpdatedCharts() {
  window.location.reload()
}

function applyAppearance() {
  store.setAppearance({
    primary: primary.value,
    secondary: secondary.value,
    fontFamily: fontFamily.value,
    fontSizeOffset: fontSizeOffset.value,
  })
  reloadWithUpdatedCharts()
}

function restoreDefaults() {
  primary.value = defaultAppearance.primaryColor
  secondary.value = defaultAppearance.secondaryColor
  fontFamily.value = defaultAppearance.fontFamily
  fontSizeOffset.value = defaultAppearance.fontSizeOffset
  store.resetAppearance()
  reloadWithUpdatedCharts()
}
</script>

<style scoped lang="scss">
.appearance-settings {
  display: grid;
  gap: 16px;
  margin-bottom: 22px;
}

.appearance-field {
  display: grid;
  gap: 8px;

  label {
    font-size: 13px;
    font-weight: 600;
  }
}

.color-control {
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 44px;
    height: 38px;
    padding: 2px;
    border: 1px solid var(--bs-border-color);
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
  }

  code {
    color: var(--theme-default);
  }
}

.appearance-actions {
  display: flex;
  gap: 8px;

  .btn {
    flex: 1;
  }
}

.text-size-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;

  output {
    min-width: 52px;
    border-radius: 999px;
    padding: 4px 9px;
    color: var(--theme-default);
    background: rgba(var(--bs-primary-rgb), 0.1);
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }
}

.text-size-control {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 36px;
  align-items: center;
  gap: 10px;

  button {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--theme-default);
    border-radius: 9px;
    color: var(--theme-default);
    background: #fff;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;

    &:hover:not(:disabled) {
      color: #fff;
      background: var(--theme-default);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }

  input {
    width: 100%;
    accent-color: var(--theme-default);
    cursor: pointer;
  }
}

.text-size-help {
  color: #737b86;
  font-size: 11px;
}
</style>
