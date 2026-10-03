<template>
  <div class="row">
    <div class="col-12">
      <div class="card filter-header">
        <div class="card-body">
          <div class="common-space">
            <h4>Recent Activity</h4>
            <CardDropdown
              :dropdownType="'classic'"
              :options="cardToggleOption"
              :dropdownClass="'btn-group'"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12">
      <Card :cardClass="'project-timeline'" :cardBodyClass="'notification'">
        <ul>
          <li class="d-flex" v-for="(activity, index) in projectActivity" :key="index">
            <div :class="`activity-dot-${activity.color}`"></div>
            <div class="w-100 ms-3">
              <h5 class="f-w-600" v-html="activity.title"></h5>
              <span class="date-time"
                >{{ activity.time }} by
                <span class="activity-profile">
                  <img class="img-fluid" :src="getImages(activity.addedBy.profile)" alt="user" />
                  <span>{{ activity.addedBy.name }}</span>
                </span>
              </span>
              <div class="mt-3">
                <span v-if="activity.description">{{ activity.description }}</span>

                <div class="common-flex" v-if="activity.attachments">
                  <div
                    class="upload-doc"
                    v-for="(attachment, index) in activity.attachments"
                    :key="index"
                  >
                    <div class="d-flex">
                      <SvgIcon :icon="attachment.fileIcon" type="default"></SvgIcon>
                      <div>
                        <p class="mb-0">{{ attachment.fileName }}</p>
                        <p class="mb-0 c-o-light">{{ attachment.fileSize }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flowchart-wrapper" v-if="activity.images">
                  <div v-for="(image, index) in activity.images" :key="index">
                    <div class="flowchart-img">
                      <img class="img-fluid" :src="getImages(image.imageUrl)" alt="flowchart" />
                    </div>
                  </div>
                </div>

                <div class="project-teammate" v-if="activity.members">
                  <GroupItem
                    :items="activity.members"
                    :class="'common-f-start'"
                    :imgClass="'common-circle'"
                  />
                </div>

                <div class="table-responsive custom-scrollbar" v-if="activity.templates">
                  <table class="table project-task-note">
                    <thead class="project-header">
                      <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Task</th>
                        <th scope="col">Assigned To</th>
                        <th scope="col">Status</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody class="project-content">
                      <tr v-for="(details, index) in activity.templates" :key="index">
                        <td>{{ details.projectName }}</td>
                        <td>{{ details.task }}</td>
                        <td>
                          <GroupItem :items="details.assignTo" :class="'common-f-start'" />
                        </td>
                        <td>
                          <span
                            :class="`badge badge-light-${details.color} txt-${details.color}`"
                            >{{ details.status }}</span
                          >
                        </td>
                        <td>{{ details.dueDate }}</td>
                        <td>
                          <router-link class="btn" :to="routes.Project.ProjectList"
                            >View</router-link
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { dayFilterOptions } from '@/core/data/common'
import { projectDetails } from '@/core/data/project'
import { routes } from '@/router/routes'
import { getImages } from '@/utils/index'

const CardDropdown = defineAsyncComponent(() => import('@/components/shared/card/CardDropdown.vue'))
const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const cardToggleOption = ref(dayFilterOptions)
const projectActivity = ref(projectDetails.activity)
</script>
