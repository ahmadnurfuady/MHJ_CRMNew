<template>
  <Card
    :headerTitle="'Important Proyek Lists'"
    :padding="true"
    :header="'total-revenue'"
    :cardBodyClass="'pt-0 row important-project'"
  >
    <template #header5>
      <router-link :to="routes.Dashboards.Default" class="d-none d-sm-block"> View All</router-link>
    </template>

    <div :class="card.colClass" v-for="card in projectCards" :key="card.id">
      <div class="projectlist-card">
        <div class="projectlist">
          <div class="project-data">
            <img :src="getImages(card.image)" class="nft-img img-fluid" />
            <div>
              <a class="f-14 f-w-500 d-block" href="#">
                {{ card.title }}
              </a>
              <span class="f-light f-12 f-w-500"> Client : {{ card.client }} </span>
            </div>
          </div>
          <span class="badge rounded-pill badge-primary bg-light-primary">
            {{ card.daysLeft }} Days Left
          </span>
        </div>
        <div class="project-date">
          <span class="f-light f-12 f-w-500">{{ card.startDate }}</span>
          <span class="f-light f-12 f-w-500">{{ card.endDate }}</span>
        </div>
        <div class="range_4">
          <div class="slider-container">
            <VueSlider
              class="mb-3"
              v-model="card.progress"
              tooltip="always"
              :tooltip-formatter="(value: number) => `${value}%`"
            />
          </div>
        </div>
        <div class="project-comment">
          <div class="avatar-showcase">
            <div class="avatars">
              <ul class="customers d-inline-block avatar-group">
                <li v-for="(user, i) in card.users" :key="i" class="d-inline-block">
                  <img class="img-25 rounded-circle" :src="getImages(user)" />
                </li>
                <li class="d-inline-block" v-if="card.extraUsers">
                  <p class="rounded-circle bg-light">+{{ card.extraUsers }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="project-comment-icon">
            <div class="project-link">
              <SvgIcon icon="messages-2" />
              <span>{{ card.comments }}</span>
            </div>

            <div class="project-link">
              <SvgIcon icon="paperclip" />
              <span>{{ card.attachments }}</span>
            </div>
          </div>
        </div>
        <div class="project-meeting-details">
          <div class="project-meeting">
            <span class="f-light f-12 f-w-500">Last Meeting</span>
            <span class="f-light f-12 f-w-500">Next Meeting</span>
          </div>
          <div class="project-meeting-time">
            <a class="f-14 f-w-500">{{ card.lastMeeting }}</a>
            <a class="f-14 f-w-500">{{ card.nextMeeting }}</a>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { projectCards } from '@/core/data/dashboard/project'
import { routes } from '@/router/routes'
import { getImages } from '@/utils'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

function formatTooltip(value: number) {
  return `${value}%`
}
</script>
