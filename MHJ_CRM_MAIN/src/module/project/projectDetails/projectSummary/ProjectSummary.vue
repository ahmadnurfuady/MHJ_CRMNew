<template>
  <div class="row">
    <div class="col-xxl-8 box-col-12">
      <AboutProject />
    </div>
    <div class="col-xxl-4 col-md-6 order-xxl-0 order-sm-1 box-col-6 box-ord-1">
      <ProjectToDo />
    </div>
    <div class="col-xl-8 xl-100 box-col-12">
      <PendingProjects />
    </div>
    <div class="col-xl-4 xl-50 order-xxl-0 order-sm-2 col-md-6 box-col-6 box-ord-2">
      <TaskOverview />
    </div>
    <div class="col-xxl-4 recent-xl-50 order-xxl-0 order-sm-3 box-col-12 box-ord-3">
      <ProjectActivity />
    </div>
    <div class="col-xl-4 xl-50 order-xxl-0 order-sm-4 col-md-6 box-col-6 box-ord-4">
      <TeamMember />
    </div>
    <div class="col-xl-4 xl-50 order-xxl-0 order-sm-5 col-md-6 box-col-6 box-ord-5">
      <Comments />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AboutProject = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectSummary/AboutProject.vue')
)
const ProjectToDo = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectSummary/ProjectToDo.vue')
)
const PendingProjects = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectSummary/PendingProjects.vue')
)
const TaskOverview = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectSummary/TaskOverview.vue')
)
const ProjectActivity = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectSummary/ProjectActivity.vue')
)
const TeamMember = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectSummary/TeamMember.vue')
)
const Comments = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectSummary/Comments.vue')
)
</script>
