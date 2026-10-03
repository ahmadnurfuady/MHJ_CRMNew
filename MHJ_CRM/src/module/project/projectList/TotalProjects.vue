<template>
  <div :class="`main-card-box bg-10-${totalProjects.cardColor} h-100`">
    <div class="p-20 common-space">
      <div>
        <h5>{{ totalProjects.totalProject }}</h5>
        <span class="c-o-light">{{ totalProjects.title }}</span>
      </div>
      <div :class="`project-right-icon bg-10-${totalProjects.cardColor}`">
        <i :class="`fa-solid fa-${totalProjects.icon} fa-fade txt-${totalProjects.cardColor}`"></i>
      </div>
    </div>
    <div class="project-list-card">
      <div class="common-space" v-for="(details, index) in totalProjects.details" :key="index">
        <span class="f-w-500">{{ details.title }}</span>
        <span>{{ details.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { totalProjects } from '@/core/data/project'
</script>
