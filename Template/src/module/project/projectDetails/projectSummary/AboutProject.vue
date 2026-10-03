<template>
  <Card
    :cardClass="'main-summary'"
    :cardType="'classic'"
    :headerTitle="projectSummary.title"
    :sortDescription="projectSummary.sortDescription"
    :cardBodyClass="'pt-0'"
    :buttonText="'View All'"
    :path="routes.Project.ProjectList"
  >
    <div class="row g-3">
      <div class="col-md-8 xl-50 order-md-0 order-1">
        <ul class="summary-section">
          <li class="p-b-20">
            <p>{{ projectSummary.description }}</p>
          </li>
          <li>
            <ul class="common-space p-t-10">
              <li>
                <ul>
                  <li>
                    <p class="mb-1">Creation Date</p>
                    <span>{{ projectSummary.creationDate }}</span>
                  </li>
                  <li>
                    <p class="mb-1">Due Date</p>
                    <span>{{ projectSummary.dueDate }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="mb-1">Priority</p>
                    <span class="badge badge-light-primary">{{ projectSummary.priority }}</span>
                  </li>
                  <li>
                    <p class="mb-1">Status</p>
                    <span class="badge badge-light-success">{{ projectSummary.status }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <p class="p-t-10 mb-2">Resource</p>
                <div class="attachment-file common-flex">
                  <div class="common-flex align-items-center">
                    <img
                      class="img-fluid"
                      :src="`${getImages('project/files/pdf.png')}`"
                      alt="pdf"
                      v-if="projectSummary.resource.fileType == 'PDF'"
                    />
                    <div class="d-block">
                      <p class="mb-0">{{ projectSummary.resource.title }}</p>
                      <p class="c-o-light">{{ projectSummary.resource.fileSize }}</p>
                    </div>
                  </div>
                  <router-link :to="projectSummary.resource.file" download>
                    <i class="fa-solid fa-download f-light"></i>
                  </router-link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-md-4 xl-50">
        <div class="summary-chart-box">
          <div id="summary-chart">
            <apexchart
              height="220"
              :series="projectSummary.chartSeries"
              :options="projectSummary.chartDetails"
            >
            </apexchart>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'
import { getImages } from '@/utils'
import { routes } from '@/router/routes'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const projectSummary = projectDetails.projectSummary.summary
</script>
