<template>
  <div :class="`main-card-box bg-10-${projectTeam.cardColor} h-100`">
    <div class="p-20 common-space">
      <div>
        <h5>{{ projectTeam.totalMember }}</h5>
        <span class="c-o-light">{{ projectTeam.title }}</span>
      </div>
      <div :class="`project-right-icon bg-10-${projectTeam.cardColor}`">
        <i :class="`fa-solid fa-${projectTeam.icon} fa-fade txt-${projectTeam.cardColor}`"></i>
      </div>
    </div>
    <div class="p-20">
      <h6 class="mb-sm-3 mb-2">View Team Members</h6>
      <GroupItem
        :items="projectTeam.teamMembers"
        :class="'common-f-start'"
        :imgClass="'common-circle'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { projectTeam } from '@/core/data/project'

const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'))
</script>
