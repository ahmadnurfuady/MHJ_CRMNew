<template>
  <Card :headerTitle="'Activity Log'" :border="true" :padding="false">
    <div class="activity-log">
      <div
        class="my-activity"
        v-for="(group, index) in Object.keys(activityGroups)"
        :key="index"
      >
        <h6 class="mb-3">{{ getDateLabel(group) }}</h6>
        <p v-for="(activity, index) in activityGroups[group]" :key="index">
          <span>
            <vue-feather :type="activity.icon" :class="'m-r-20'"></vue-feather>
          </span>
          {{ activity.activity }}
        </p>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, computed } from 'vue'

import { myProfile } from '@/core/data/socialApp'
import type { ActivityLog, MyProfile } from '@/types/socialApp'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const profile = ref<MyProfile>(myProfile)

const activityGroups = computed(() => {
  const groups: Record<string, ActivityLog[]> = {}

  profile.value.activityLog.forEach((activity) => {
    if (!groups[activity.date]) {
      groups[activity.date] = []
    }

    groups[activity.date].push(activity)
  })

  return groups
})

const todayDate = new Date().toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short',
})

const yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString(
  'en-GB',
  {
    day: '2-digit',
    month: 'short',
  }
)

function getDateLabel(date: string) {
  if (date === todayDate) {
    return 'Today'
  } else if (date === yesterdayDate) {
    return 'Yesterday'
  } else {
    return date
  }
}
</script>
