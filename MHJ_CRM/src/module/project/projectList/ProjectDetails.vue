<template>
  <div class="progress-project-box" v-if="props.project">
    <div
      :class="`list-box ${
        props.project.status == 'pending'
          ? 'title-line-primary'
          : props.project.status == 'in_progress'
            ? 'title-line-warning'
            : 'title-line-success'
      }`"
    >
      <div class="header-top">
        <span
          :class="`badge badge-light-${
            props.project.status == 'pending'
              ? 'primary'
              : props.project.status == 'in_progress'
                ? 'warning'
                : 'success'
          }`"
        >
          {{ titleCase(props.project.status.replace('_', ' ')) }}
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
            <h5>{{ props.project.projectName }}</h5>
            <span>{{ props.project.projectDescription }}</span>
          </div>
        </div>
        <div class="common-space">
          <p class="mb-0 c-o-light">Tasks</p>
          <span>{{ props.project.progress }}%</span>
        </div>
        <div class="progress">
          <div
            :class="`progress-bar bg-${
              props.project.status == 'pending'
                ? 'primary'
                : props.project.status == 'in_progress'
                  ? 'warning'
                  : 'success'
            }`"
            :style="{ width: props.project.progress + '%' }"
          ></div>
        </div>
        <div class="project-bottom common-space" v-if="props.showMember">
          <template v-if="props.project.teamMember && props.project.teamMember.length">
            <GroupItem :items="props.project.teamMember" :class="'common-f-start'" />
          </template>
          <p class="mb-0">
            Budget
            <span>{{ props.project.budget }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { titleCase, getImages } from '@/utils/index'

import type { Projects } from '@/types/project'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'))

const props = withDefaults(
  defineProps<{
    project: Projects
    showMember?: boolean
  }>(),
  {
    showMember: true,
  }
)
</script>
