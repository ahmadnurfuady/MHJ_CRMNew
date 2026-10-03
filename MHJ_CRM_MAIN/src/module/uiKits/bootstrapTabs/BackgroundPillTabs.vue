<template>
  <Card :headerTitle="'Background Pill Tabs'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code> active</code> class on the<code> nav-link</code> and backdrop tab with the
        <code> new-pills</code> class.
      </p>
    </template>

    <div class="bg-navbar">
      <ul class="nav nav-pills nav-primary" role="tablist">
        <li class="nav-item" v-for="tab in backgroundPillsTabs" :key="tab.id">
          <a
            class="nav-link"
            :class="{ active: activeTab === tab.value }"
            href="#"
            @click.prevent="handleTab(tab.value)"
            >{{ tab.title }}</a
          >
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="tab-pane fade show active">
        <div class="row g-3 pt-3">
          <div
            class="col-4"
            v-for="(images, index) in backgroundPillsTabDetails[activeTabIndex].details"
            :key="index"
          >
            <img class="img-fluid" :src="getImages(images.image)" :alt="activeTab" />
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from 'vue'
import { getImages } from '@/utils/index'
import { backgroundPillsTabDetails, backgroundPillsTabs } from '@/core/data/uiKits/tabs'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeTab = ref<string>('tables')
const activeTabIndex = ref<number>(0)

onMounted(() => {
  handleIndex()
})

function handleTab(value: string) {
  activeTab.value = value
  handleIndex()
}

function handleIndex() {
  activeTabIndex.value = backgroundPillsTabs.findIndex((tab) => tab.value === activeTab.value)
}
</script>
