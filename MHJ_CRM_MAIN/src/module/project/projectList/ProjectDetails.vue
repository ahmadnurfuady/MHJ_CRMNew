<template>
  <div
    class="progress-project-box project-card-link"
    v-if="props.project"
    role="link"
    tabindex="0"
    :aria-label="`Buka detail ${props.project.projectName}`"
    @click="openProjectDetail"
    @keydown.enter="openProjectDetail"
    @keydown.space.prevent="openProjectDetail"
  >
    <div :class="`list-box title-line-${stageColor}`">
      <div class="header-top">
        <span :class="`badge badge-light-${stageColor}`">
          {{ stageTitle }}
        </span>
        <p class="mb-0 c-o-light">
          <SvgIcon :icon="'vector-calendar'" :class="'me-2'"></SvgIcon>
          {{ props.project.date }}
        </p>
      </div>
      <div class="project-body">
        <div class="common-f-start gap-3">
          <img class="img-fluid" :src="getImages(props.project.projectBanner)" alt="banner" />
          <div>
            <h5>{{ shortProjectTitle(props.project.projectName) }}</h5>
            <span>{{ props.project.projectDescription }}</span>
          </div>
        </div>
        <div class="common-space">
          <p class="mb-0 c-o-light">Tasks</p>
          <span>{{ props.project.progress }}%</span>
        </div>
        <div class="progress">
          <div
            :class="`progress-bar bg-${stageColor}`"
            :style="{ width: props.project.progress + '%' }"
          ></div>
        </div>
        <div class="project-bottom common-space" v-if="props.showMember">
          <template v-if="props.project.teamMember && props.project.teamMember.length">
            <GroupItem :items="props.project.teamMember" :class="'common-f-start'" />
          </template>
          <p class="mb-0">
            Value
            <span>{{ props.project.budget }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { titleCase, getImages, shortProjectTitle } from '@/utils/index'
import { projectTab } from '@/core/data/project'

import type { Projects } from '@/types/project'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'))
const router = useRouter()

const props = withDefaults(
  defineProps<{
    project: Projects
    showMember?: boolean
  }>(),
  {
    showMember: true
  }
)

// Nama dan warna kartu mengikuti stage yang sama dengan tab di atas.
const stage = computed(() => projectTab.find((tab) => tab.value == props.project.status))
const stageTitle = computed(
  () => stage.value?.title ?? titleCase(props.project.status.replace('_', ' '))
)
const stageColor = computed(() => stage.value?.color ?? 'primary')

function openProjectDetail() {
  router.push({
    name: 'Project Details V2',
    query: props.project.id ? { id: String(props.project.id) } : undefined,
  })
}
</script>

<style scoped>
.project-card-link {
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card-link:hover,
.project-card-link:focus-visible {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(27, 113, 183, 0.16);
}

.project-card-link:focus-visible {
  outline: 2px solid var(--theme-default, #2aa8df);
  outline-offset: 3px;
}
</style>
