<template>
  <div class="container-fluid">
    <div class="row project-cards">
      <div class="col-md-12 project-list">
        <Card
          :headerTitle="'Projects Overview'"
          :headerClass="'m-0'"
          :border="true"
          :padding="false"
        >
          <div class="row g-3">
            <div class="col-xxl-3 col-sm-6 box-col-6">
              <ProjectCostPerformance />
            </div>
            <div class="col-xxl-3 col-sm-6 box-col-6">
              <ProjectRating />
            </div>
            <div class="col-xxl-3 col-sm-6 box-col-6">
              <ProjectProfessionalTeam />
            </div>
            <div class="col-xxl-3 col-sm-6 box-col-6">
              <TotalProjects />
            </div>
          </div>
        </Card>
      </div>
      <div class="col-12">
        <ProjectStatusTab @activeTabValue="handleActiveTab($event)" />
      </div>
      <div class="col-sm-12">
        <Card :cardBodyClass="'projects-wrapper'">
          <div class="tab-content" id="top-tabContent">
            <div class="tab-pane fade show active">
              <div class="row g-4">
                <template v-for="(project, index) in projectList" :key="index">
                  <template v-if="activeTab == 'all' || project.status == activeTab">
                    <div class="col-xxl-3 col-md-6 col-ed-4 box-col-6">
                      <ProjectDetails :project="project" />
                    </div>
                  </template>
                </template>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useTask } from '@/store/task'

const { projectList } = storeToRefs(useTask())

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const ProjectCostPerformance = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectCostPerformance.vue')
)
const ProjectRating = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectRating.vue')
)
const ProjectProfessionalTeam = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectProfessionalTeam.vue')
)
const TotalProjects = defineAsyncComponent(
  () => import('@/module/project/projectList/TotalProjects.vue')
)
const ProjectStatusTab = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectStatusTab.vue')
)
const ProjectDetails = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectDetails.vue')
)

const activeTab = ref<string>('')

function handleActiveTab(value: string) {
  if (value) {
    activeTab.value = value
  }
}
</script>
