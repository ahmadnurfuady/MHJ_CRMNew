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
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { defaultAppearance, fontOptions } from '@/config/appearance'
import { useLayout } from '@/store/layout'

const store = useLayout()
const { layoutState } = storeToRefs(store)

const primary = ref(layoutState.value.primaryColor)
const secondary = ref(layoutState.value.secondaryColor)
const fontFamily = ref(layoutState.value.fontFamily)

function reloadWithUpdatedCharts() {
  window.location.reload()
}

function applyAppearance() {
  store.setAppearance({
    primary: primary.value,
    secondary: secondary.value,
    fontFamily: fontFamily.value,
  })
  reloadWithUpdatedCharts()
}

function restoreDefaults() {
  primary.value = defaultAppearance.primaryColor
  secondary.value = defaultAppearance.secondaryColor
  fontFamily.value = defaultAppearance.fontFamily
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
</style>
