<template>
  <Card
    :cardType="'classic'"
    :headerTitle="recentActivity.title"
    :sortDescription="recentActivity.date"
    :cardBodyClass="'activity-wrapper pt-0'"
    :buttonText="'View All'"
    :path="routes.App.Task"
  >
    <ul class="schedule-wrapper nav nav-tabs">
      <li
        class="nav-item"
        @click="handleTab(activities)"
        v-for="(activities, index) in recentActivity.activities"
        :key="index"
      >
        <a class="nav-link" :class="{ active: activeTab == activities.date }">
          <h6>{{ activities.day }}</h6>
          <span class="c-o-light">{{ activities.date }}</span>
        </a>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade active show" id="sun" role="tabpanel" aria-labelledby="sun-tab">
        <ul class="activity-update">
          <template v-for="(activity, index) in filteredActivity" :key="index">
            <li class="d-flex align-items-center">
              <div class="flex-grow-1">
                <h6>{{ activity.title }}</h6>
                <span
                  >By
                  <a href="#">{{ activity.customerName }}</a>
                </span>
              </div>
              <div class="flex-shrink-0">
                <p class="mb-0">{{ activity.createdTime }}</p>
                <SvgIcon :icon="'clock'"></SvgIcon>
                <span>{{ activity.time }}</span>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'
import type { Activities, Activity } from '@/types/project'
import { routes } from '@/router/routes'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const recentActivity = ref(projectDetails.projectSummary.recentActivity)
const activeTab = ref(recentActivity.value.activities[0].date)
const filteredActivity = ref<Activity[]>([])

onMounted(() => {
  filterActivity(activeTab.value)
})

function handleTab(activity: Activities) {
  activeTab.value = activity.date
  filterActivity(activity.date)
}

function filterActivity(date: string) {
  const currentDate = recentActivity.value.activities.find((activity) => activity.date === date)

  if (currentDate) {
    filteredActivity.value = currentDate.activity
  }
}
</script>
