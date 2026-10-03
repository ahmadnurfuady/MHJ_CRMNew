<template>
  <div class="card p-3">
    <div class="common-space project-tabs align-items-center gap-3">
      <ul class="nav project-tab-grid">
        <template v-for="(tab, index) in projectTab" :key="index">
          <li class="nav-item" @click="handleTab(tab.value)">
            <a
              class="nav-link"
              :class="{ active: activeTab == tab.value }"
              href="#"
              @click.prevent
            >
              <i :class="`fa-solid fa-${tab.icon}`"></i>
              {{ tab.title }}
            </a>
          </li>
        </template>
      </ul>
      <router-link class="btn btn-primary flex-shrink-0" :to="routes.Project.ProjectCreate">
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

<style scoped>
/* 8 stage dalam grid 4 kolom (2 baris), lebar sama, rata kiri. */
.project-tab-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 12px;
  column-gap: 8px;
  margin: 0;
}

.project-tab-grid .nav-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--bs-border-color, #dcdcdc);
  border-radius: 8px;
  color: var(--bs-body-color, #000);
  text-align: left;
  white-space: nowrap;
}

/* Tab aktif: teks dan garis tepi memakai warna tema, latar biru tipis. */
.project-tab-grid .nav-link.active {
  color: var(--theme-default, var(--bs-primary));
  border-color: var(--theme-default, var(--bs-primary));
  background-color: color-mix(in srgb, var(--theme-default, var(--bs-primary)) 10%, transparent);
}

@media (max-width: 767.98px) {
  .project-tab-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
