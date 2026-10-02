<template>
  <div class="card">
    <div class="card-header">
      <form class="theme-form">
        <div class="input-group m-0 flex-nowrap">
          <input class="form-control-plaintext" type="search" placeholder="Pixelstrap .." />
          <span class="btn btn-primary input-group-text">Search</span>
        </div>
      </form>
    </div>

    <div class="card-body">
      <div class="text-center">
        <ul class="nav nav-tabs search-list" role="tablist">
          <li class="nav-item" v-for="tab in searchTabs" :key="tab.id" :class="tab.badgeClass">
            <a
              class="nav-link"
              :class="{ active: activeTab === tab.id }"
              @click="activeTab = tab.id"
            >
              <i :class="tab.icon" v-if="tab.icon"></i> {{ tab.title }}
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-content mt-3">
        <component :is="activeComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'
import { searchTabs } from '@/core/data/searchResult'

const activeTab = ref(searchTabs[0].id)

const activeComponent = computed(() => {
  const current = searchTabs.find((t) => t.id === activeTab.value)
  return current?.component ? defineAsyncComponent(current.component) : null
})
</script>
