<template>
  <div class="container-fluid">
    <div class="row size-column">
      <div class="col-xxl-9 box-col-12">
        <div class="row">
          <div v-for="(item, index) in topProjectWidgets" :key="index" class="col-xl-3 col-sm-6">
            <TopProjectWidgets :item="item" />
          </div>
          <div class="col-md-6">
            <ProjectStatistics />
          </div>
          <div class="col-md-6">
            <TodaysWork />
          </div>
          <div class="col-xl-12">
            <ProjectLists />
          </div>
          <div class="col-xxl-12">
            <AllProjectsTable />
          </div>
          <div class="col-xl-5 box-col-6">
            <TopClientLists />
          </div>
          <div class="col-xl-7 box-col-6">
            <TimeLine />
          </div>
        </div>
      </div>
      <div class="col-xxl-3 d-xxl-block d-none activity-group box-col-none">
        <AddProject />
        <div class="row">
          <div class="col-xl-12">
            <ActivityLog />
          </div>
          <div class="col-xl-12 col-md-6">
            <Messages />
          </div>
          <div class="col-xl-12 col-md-6">
            <ProjectIdeasCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { topProjectWidgets } from '@/core/data/dashboard/project'

const TopProjectWidgets = defineAsyncComponent(
  () => import('@/module/dashboard/project/TopProjectWidgets.vue'),
)
const ProjectStatistics = defineAsyncComponent(
  () => import('@/module/dashboard/project/ProjectStatistics.vue'),
)
const TodaysWork = defineAsyncComponent(
  () => import('@/module/dashboard/project/TodaysWork.vue'),
)
const ProjectLists = defineAsyncComponent(
  () => import('@/module/dashboard/project/ProjectLists.vue'),
)
const AllProjectsTable = defineAsyncComponent(
  () => import('@/module/dashboard/project/AllProjectsTable.vue'),
)
const TopClientLists = defineAsyncComponent(
  () => import('@/module/dashboard/project/TopClientLists.vue'),
)
const TimeLine = defineAsyncComponent(
  () => import('@/module/dashboard/project/TimeLine.vue'),
)
const AddProject = defineAsyncComponent(
  () => import('@/module/dashboard/project/AddProject.vue'),
)
const ActivityLog = defineAsyncComponent(
  () => import('@/module/dashboard/project/ActivityLog.vue'),
)
const Messages = defineAsyncComponent(
  () => import('@/module/dashboard/project/Messages.vue'),
)
const ProjectIdeasCard = defineAsyncComponent(
  () => import('@/module/dashboard/project/ProjectIdeasCard.vue'),
)
</script>
