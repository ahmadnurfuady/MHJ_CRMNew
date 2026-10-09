<template>
  <div class="common-project-header common-space m-b-20">
    <div class="common-space">
      <div class="pe-sm-3">
        <h4>
          {{ projectDetailsHeader.title }}
          <span class="badge badge-light-warning ms-2">{{
            projectDetailsHeader.projectStatus
          }}</span>
        </h4>
        <span class="c-o-light">{{ projectDetailsHeader.description }}</span>
      </div>
      <div class="common-align">
        <div class="customers">
          <GroupItem :items="projectDetailsHeader.customers" :imgClass="'img-40'" />
        </div>
        <h6>All tasks : {{ projectDetailsHeader.allTask }}</h6>
      </div>
    </div>
    <div class="common-align">
      <ul class="common-align">
        <li>
          <span class="pe-1">Create Date &colon;</span>
          <SvgIcon :icon="'vector-calendar'" type="default" />
          <span>{{ projectDetailsHeader.createdDate }}</span>
        </li>
        <li>
          <span>Due Date &colon;</span>
          <SvgIcon :icon="'vector-calendar'" type="default" />
          <span>{{ projectDetailsHeader.dueDate }}</span>
        </li>
      </ul>
      <router-link
        class="btn btn-primary"
        href="#"
        :to="routes.Project.ProjectCreate"
      >
        <i class="fa-solid fa-plus"></i>
        Add Proyek
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { routes } from '@/router/routes'
import { projectDetailsHeader } from '@/core/data/project'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'))
</script>
