<template>
  <Card
    :sortDescription="'Total 28 projects pending'"
    :cardType="'classic'"
    :headerTitle="'Projects Pending'"
    :cardBodyClass="'px-0 pt-0'"
    :buttonText="'View All'"
    :path="routes.Project.ProjectList"
  >
    <div class="recent-table table-responsive custom-scrollbar project-pending-table">
      <Table :tableConfig="tableConfig" :pageSize="4"></Table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { projectDetails } from '@/core/data/project'
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'

import type { TableConfigs } from '@/types/common'
import type { PendingProject, ProjectDetails } from '@/types/project'

const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Project Name', fieldValue: 'projectName', sort: true },
    { title: 'Project Head', fieldValue: 'projectHeadName', sort: true },
    { title: 'Priority', fieldValue: 'priority', sort: true },
    { title: 'Due Date', fieldValue: 'dueDate', sort: true },
    { title: 'Status', fieldValue: 'status', sort: true },
  ],
  data: [] as ProjectDetails[],
})

onMounted(() => {
  tableConfig.value.data = projectDetails.projectSummary.pendingProject.map(
    (project: PendingProject) => {
      const formattedProjects = { ...project }
      formattedProjects.projectHeadName = `<div class="common-flex align-items-center">
                            <img class="img-fluid lead-img"  src="${getImages(
                              project.projectHeadProfile
                            )}"   alt="user">
                            <div><a class="c-light" href="#">${
                              project.projectHeadName
                            }</a>
                              <p class="mb-0 c-o-light">${project.projectHeadEmail}</p>
                            </div>
                          </div>`

      const statusHTML = `<button class="btn button-light-${project.color} txt-${project.color}"> 
                                ${project.status}
                              </button>`

      formattedProjects.status = statusHTML

      return formattedProjects
    }
  )
})
</script>
