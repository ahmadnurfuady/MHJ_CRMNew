<template>
  <div class="row">
    <Searchbox />
    <template v-for="(status, index) in projectStatus" :key="index">
      <div class="col-xl-4 xl-50 col-md-6 box-col-6">
        <div class="card progress-project">
          <div :class="`card-header card-no-border scope-light-${status.color}`">
            <div class="common-space">
              <div class="common-align">
                <div :class="`common-dot bg-${status.color}`"></div>
                <h6>{{ status.title }}</h6>
                <span class="badge rounded-circle c-o-light">{{
                  getTotalProject(status.value)
                }}</span>
              </div>
              <div class="card-header-right-icon">
                <CardDropdown :dropdownType="'simple'" :options="statusOption"></CardDropdown>
              </div>
            </div>
          </div>
          <div class="card-body">
            <template v-for="(project, index) in projects" :key="index">
              <template v-if="project.status == status.value">
                <div class="progress-project-box">
                  <div :class="`list-box title-line-${project.tagColor}`">
                    <div class="header-top">
                      <template v-if="!project.projectBanner">
                        <template v-if="project.developer && project.developer.length">
                          <GroupItem :items="project.developer" :class="'common-f-start'" />
                        </template>
                      </template>
                      <span :class="`badge badge-light-${project.tagColor}`">{{
                        project.tag
                      }}</span>
                      <div class="common-box" v-if="project.projectBanner">
                        <i :class="`fa-solid fa-plus txt-${project.tagColor}`"></i>
                      </div>
                    </div>
                    <div class="project-body">
                      <img
                        class="img-fluid"
                        :src="getImages(project.projectBanner)"
                        alt="banner"
                        v-if="project.projectBanner"
                      />
                      <h6 class="mb-2">{{ project.projectTitle }}</h6>
                      <span>{{ project.projectDescription }}</span>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          :class="
                            status.value == 'pending'
                              ? 'bg-secondary'
                              : status.value == 'progress'
                                ? 'bg-warning'
                                : 'bg-success'
                          "
                          :style="{ width: project.progress + '%' }"
                        ></div>
                      </div>
                      <template
                        v-if="
                          project.developer && project.developer.length && project.projectBanner
                        "
                      >
                        <GroupItem :items="project.developer" :class="'common-f-start'" />
                      </template>
                      <div class="project-bottom common-space">
                        <div class="common-flex">
                          <span placement="top" ngbTooltip="Attachment">
                            <SvgIcon
                              :icon="'project-attachment'"
                              :svgClass="'me-2'"
                              type="default"
                            />
                            {{ project.attachment }}
                          </span>
                          <span placement="top" ngbTooltip="Comments">
                            <SvgIcon :icon="'project-cmt'" :svgClass="'me-2'" type="default" />
                            {{ project.comments }}
                          </span>
                        </div>
                        <p class="mb-0 c-o-light">
                          <SvgIcon :icon="'vector-calendar'" :svgClass="'me-2'" type="default" />
                          {{ project.date }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails, projectStatus, projectStatusOptions } from '@/core/data/project'
import { getImages } from '@/utils/index'

const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'))
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Searchbox = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectStatus/Searchbox.vue')
)
const statusOption = ref(projectStatusOptions)
const projects = ref(projectDetails.projectStatus)

function getTotalProject(value: string): number {
  return projects.value.filter((project) => project.status === value).length
}
</script>
