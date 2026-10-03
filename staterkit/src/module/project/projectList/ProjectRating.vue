<template>
  <div :class="`main-card-box bg-10-${projectRating.cardColor} h-100`">
    <div class="p-20 common-space">
      <div>
        <h5>{{ projectRating.rating }}</h5>
        <span class="c-o-light">{{ projectRating.title }}</span>
      </div>
      <div :class="`project-right-icon bg-10-${projectRating.cardColor}`">
        <i :class="`fa-solid fa-${projectRating.icon} fa-fade txt-${projectRating.cardColor}`"></i>
      </div>
    </div>
    <div class="highlight-content">
      <div class="common-space" v-for="(details, index) in projectRating.details" :key="index">
        <span class="f-w-500">{{ details.title }}</span>
        <div>
          <vue-feather
            :class="details.increase ? 'txt-success' : 'txt-danger'"
            :type="details.increase ? 'trending-up' : 'trending-down'"
          ></vue-feather>
          <span class="f-w-500">{{ details.rating }} / 10</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projectRating } from '@/core/data/project'
</script>
