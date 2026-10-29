<template>
  <a
    class="nav-link"
    :class="{ 'active show': layoutState.customizer == 'settings' }"
    @click="openCustomizerSetting('settings')"
    id="c-pills-home-tab"
    data-bs-toggle="pill"
    href="#c-pills-home"
    role="tab"
    aria-controls="c-pills-home"
    aria-selected="false"
  >
    <div class="settings quick-option-icon" aria-hidden="true">
      <SolarIcon
        name="palette-2"
        :size="24"
        color="var(--app-primary, #18A6E4)"
      />
    </div>
    <span>Opsi cepat</span>
  </a>
</template>
<script lang="ts" setup>
import { useLayout } from '@/store/layout'
import { storeToRefs } from 'pinia'

const store = useLayout()
const { layoutState } = storeToRefs(store)

function openCustomizerSetting(val: string) {
  layoutState.value.customizer = val
}
</script>

<style scoped>
.quick-option-icon {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
}
</style>
