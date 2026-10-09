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
              <span class="project-tab-main">
                <i :class="`fa-solid fa-${tab.icon}`"></i>
                <span>{{ tab.title }}</span>
              </span>
              <span class="project-tab-summary">
                <span>Qty <strong>{{ summaryFor(tab.value).quantity }}</strong></span>
                <span>
                  Value <strong>{{ formatTabValue(summaryFor(tab.value).totalValue) }}</strong>
                </span>
              </span>
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
import { computed, ref, onMounted } from 'vue'
import { projectTab } from '@/core/data/project'
import type { Projects } from '@/types/project'

const props = withDefaults(
  defineProps<{
    projects?: Projects[]
  }>(),
  {
    projects: () => [],
  }
)

const emit = defineEmits(['activeTabValue'])

const activeTab = ref(projectTab[0].value)

interface StageSummary {
  quantity: number
  totalValue: number
}

/** Membaca budget lama yang masih berbentuk string mata uang. */
function parseAmount(value: string): number {
  const normalized = value.replace(/[^\d,.-]/g, '')
  if (!normalized) return 0

  const lastComma = normalized.lastIndexOf(',')
  const lastDot = normalized.lastIndexOf('.')
  const separatorIndex = Math.max(lastComma, lastDot)
  const digitsAfterSeparator =
    separatorIndex === -1 ? 0 : normalized.length - separatorIndex - 1

  // Jika titik dan koma sama-sama ada, pemisah paling akhir dianggap desimal.
  const hasCommaAndDot = lastComma !== -1 && lastDot !== -1
  const separatorCount = (normalized.match(/[,.]/g) ?? []).length
  if (
    separatorIndex === -1 ||
    (!hasCommaAndDot && (digitsAfterSeparator === 3 || separatorCount > 1))
  ) {
    return Number(normalized.replace(/[,.]/g, '')) || 0
  }

  const integerPart = normalized.slice(0, separatorIndex).replace(/[,.]/g, '')
  const decimalPart = normalized.slice(separatorIndex + 1)
  return Number(`${integerPart}.${decimalPart}`) || 0
}

function projectValue(project: Projects): number {
  if (typeof project.projectValue === 'number' && Number.isFinite(project.projectValue)) {
    return project.projectValue
  }
  return parseAmount(project.budget)
}

const stageSummaries = computed<Record<string, StageSummary>>(() => {
  const summaries: Record<string, StageSummary> = {}

  projectTab.forEach((tab) => {
    const matchingProjects =
      tab.value === 'all'
        ? props.projects
        : props.projects.filter((project) => project.status === tab.value)

    summaries[tab.value] = {
      quantity: matchingProjects.length,
      totalValue: matchingProjects.reduce((total, project) => total + projectValue(project), 0),
    }
  })

  return summaries
})

function summaryFor(stage: string): StageSummary {
  return stageSummaries.value[stage] ?? { quantity: 0, totalValue: 0 }
}

/**
 * Ringkasan tab memakai satuan juta agar nominal besar tetap ringkas.
 * Contoh: 9.000.000.000 ditampilkan sebagai 9.000.
 */
function formatTabValue(value: number): string {
  if (!Number.isFinite(value) || value === 0) return '0'

  return new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0,
  }).format(value / 1_000_000)
}

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
.project-tabs {
  align-items: center !important;
}

.project-tab-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 12px;
  column-gap: 8px;
  margin: 0;
}

.project-tab-grid .nav-link {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 58px;
  padding: 9px 14px;
  border: 1px solid var(--bs-border-color, #dcdcdc);
  border-radius: 8px;
  color: var(--bs-body-color, #000);
  text-align: left;
  white-space: nowrap;
}

.project-tab-main {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  min-width: 0;
  text-align: left;
}

.project-tab-main > span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-tab-summary {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  color: var(--bs-secondary-color, #6c757d);
  font-size: 11px;
  line-height: 1.2;
  text-align: right;
}

.project-tab-summary strong {
  color: var(--bs-body-color, #212529);
  font-weight: 600;
}

/* Tab aktif: teks dan garis tepi memakai warna tema, latar biru tipis. */
.project-tab-grid .nav-link.active {
  color: var(--theme-default, var(--bs-primary));
  border-color: var(--theme-default, var(--bs-primary));
  background-color: color-mix(in srgb, var(--theme-default, var(--bs-primary)) 10%, transparent);
}

.project-tab-grid .nav-link.active .project-tab-summary,
.project-tab-grid .nav-link.active .project-tab-summary strong {
  color: inherit;
}

@media (max-width: 1199.98px) {
  .project-tab-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 991.98px) {
  .project-tabs {
    flex-direction: column;
    align-items: stretch !important;
  }

  .project-tab-grid,
  .project-tabs > .btn {
    width: 100%;
  }
}

@media (max-width: 767.98px) {
  .project-tab-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .project-tab-grid {
    grid-template-columns: 1fr;
  }

  .project-tab-grid .nav-link {
    min-height: 54px;
  }
}
</style>
