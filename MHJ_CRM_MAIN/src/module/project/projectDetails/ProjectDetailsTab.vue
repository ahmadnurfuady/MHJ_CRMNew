<template>
  <Card>
    <ul class="sidebar-left-icons nav nav-pills">
      <li class="nav-item" @click="changeTab(tab.value)" v-for="(tab, index) in tabs" :key="index">
        <a class="nav-link" :class="{ active: activeTab == tab.value }" href="#">
          <div class="absolute-border"></div>
          <div class="nav-rounded">
            <div class="product-icons">
              <SvgIcon :icon="tab.icon" type="default"></SvgIcon>
            </div>
          </div>
          <div class="product-tab-content">
            <h6>{{ tab.title }}</h6>
          </div>
        </a>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { projectDetailsTab } from '@/core/data/project'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const emit = defineEmits(['activeTab'])

const tabs = ref(projectDetailsTab)
const activeTab = ref(tabs.value[0].value)

onMounted(() => {
  emit('activeTab', activeTab.value)
})

function changeTab(value: string) {
  activeTab.value = value
  emit('activeTab', activeTab.value)
}
</script>
