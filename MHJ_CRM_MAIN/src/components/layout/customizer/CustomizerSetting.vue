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
    <div class="settings">
      <img class="img-fluid" :src="getImages('customizer/1.png')" alt="nft" />
    </div>
    <span>Quick option</span>
  </a>
</template>
<script lang="ts" setup>
import { useLayout } from '@/store/layout'
import { getImages } from '@/utils/index'
import { storeToRefs } from 'pinia'

const store = useLayout()
const { layoutState } = storeToRefs(store)

function openCustomizerSetting(val: string) {
  layoutState.value.customizer = val
}
</script>
