<template>
  <Card
    :cardType="'classic'"
    :headerTitle="'Team Members'"
    :sortDescription="'Total 205 Members'"
    :cardBodyClass="'pt-0 invite-member'"
    :buttonText="'View All'"
    :path="routes.Chat.PrivateChat"
  >
    <ul>
      <li class="common-align gap-2" v-for="(member, index) in teamMembers" :key="index">
        <div class="flex-shrink-0">
          <img class="img-fluid" :src="getImages(member.image)" alt="user" />
        </div>
        <div class="flex-grow-1">
          <h6>{{ member.name }}</h6>
          <span class="c-o-light">{{ member.email }}</span>
        </div>
        <div class="d-flex">
          <SvgIcon :icon="'view-member'" type="default" v-tooltip title="View" />
          <SvgIcon :icon="'stroke-note'" type="default" v-tooltip title="Chat" />
        </div>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const teamMembers = ref(projectDetails.projectSummary.teamMembers)
</script>
