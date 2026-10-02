<template>
  <div class="card p-3">
    <div class="common-space project-tabs">
      <ul class="nav nav-tabs border-tab">
        <template v-for="(tab, index) in projectTab" :key="index">
          <li class="nav-item" @click="handleTab(tab.value)">
            <a
              class="nav-link"
              :class="{ active: activeTab == tab.value }"
              href="#"
            >
              <i :class="`fa-solid fa-${tab.icon}`"></i>
              {{ tab.title }}
            </a>
          </li>
        </template>
      </ul>
      <router-link class="btn btn-primary" :to="routes.Project.ProjectCreate">
        <i class="fa-solid fa-plus"></i>
        Add Project
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
import { ref, onMounted } from 'vue'
import { projectTab } from '@/core/data/project'

const emit = defineEmits(['activeTabValue'])

const activeTab = ref(projectTab[0].value)

onMounted(() => {
  emit('activeTabValue', activeTab.value)
})

function handleTab(value: string) {
  if (value) {
    activeTab.value = value
    emit('activeTabValue', activeTab.value)
  }
}
</script>
