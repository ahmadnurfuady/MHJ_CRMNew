<template>
  <div class="container-fluid main-scope-project">
    <div class="row scope-bottom-wrapper">
      <div class="col-xxl-2 recent-xl-23 col-xl-3 box-col-3">
        <ProjectDetailsTab @activeTab="handleActiveTab($event)" />
      </div>
      <div class="col-xxl-10 recent-xl-77 col-xl-9 box-col-9">
        <div class="row">
          <div class="col-12">
            <ProjectDetailsHeader />
          </div>
          <div class="col-12">
            <div class="tab-content">
              <div class="tab-pane fade show active">
                <ProjectSummary v-if="activeTab === 'summary'" />
                <ProjectStatus v-if="activeTab === 'status'" />
                <ProjectFinance v-if="activeTab === 'finance'" />
                <ProjectTeam v-if="activeTab === 'team'" />
                <Attachments v-if="activeTab === 'attachment'" />
                <Activity v-if="activeTab === 'activity'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const ProjectDetailsTab = defineAsyncComponent(
  () => import('@/module/project/projectDetails/ProjectDetailsTab.vue')
)
const ProjectDetailsHeader = defineAsyncComponent(
  () => import('@/module/project/projectDetails/ProjectDetailsHeader.vue')
)
const ProjectSummary = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectSummary/ProjectSummary.vue')
)
const ProjectStatus = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectStatus/ProjectStatus.vue')
)
const ProjectFinance = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectFinance/ProjectFinance.vue')
)
const ProjectTeam = defineAsyncComponent(
  () => import('@/module/project/projectDetails/ProjectTeam.vue')
)
const Attachments = defineAsyncComponent(
  () => import('@/module/project/projectDetails/Attachments.vue')
)
const Activity = defineAsyncComponent(() => import('@/module/project/projectDetails/Activity.vue'))

const activeTab = ref<string>('')

function handleActiveTab(value: string) {
  if (value) {
    activeTab.value = value
  }
}
</script>
