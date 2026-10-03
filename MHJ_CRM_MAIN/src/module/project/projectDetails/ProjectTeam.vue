<template>
  <Card>
    <div class="main-team-box">
      <div v-for="(team, index) in projectTeam" :key="index">
        <div class="team-box">
          <div class="team-box-circle">
            <img class="img-fluid rounded-circle" :src="getImages(team.profile)" alt="user" />
          </div>
          <div class="team-box-content">
            <h6>
              <a href="#">{{ team.developerName }}</a>
            </h6>
            <p class="mb-0">{{ team.position }}</p>
            <div class="pt-3">
              <div class="common-space">
                <p class="mb-0">Task</p>
                <span
                  >{{ team.completedTask }} /<span>&nbsp; {{ team.totalTask }}</span>
                </span>
              </div>
              <div class="progress">
                <div
                  :class="`progress-bar bg-${team.color}`"
                  :style="{ width: (team.completedTask / team.totalTask) * 100 + '%' }"
                ></div>
              </div>
            </div>
          </div>
          <div class="team-box-footer">
            <div class="common-space">
              <div>
                <h6>${{ formatNumber(team.revenue) }}</h6>
                <p class="mb-0">Revenue</p>
              </div>
              <div>
                <h6>{{ team.projects }}</h6>
                <p class="mb-0">Project</p>
              </div>
              <div>
                <h6>{{ team.features }}</h6>
                <p class="mb-0">Features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'
import { formatNumber, getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const projectTeam = ref(projectDetails.team)
</script>
