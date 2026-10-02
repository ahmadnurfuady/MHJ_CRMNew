<template>
  <div class="default-according style-1 faq-accordion" id="accordionLeftPanel">
    <template v-for="(accordionItem, index) in socialAppLeftPanelAccordion" :key="index">
      <div class="card">
        <div class="card-header" :id="`left-panel-heading-${index + 1}`">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-start"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse-left-panel-${index + 1}`"
              aria-expanded="true"
              :aria-controls="`collapse-left-panel-${index + 1}`"
            >
              {{ accordionItem.title }}
            </button>
          </h2>
        </div>
        <div
          class="collapse show"
          :id="`collapse-left-panel-${index + 1}`"
          :aria-labelledby="`left-panel-heading-${index + 1}`"
          data-bs-parent="#accordionLeftPanel"
        >
          <template v-if="accordionItem.value == 'my_profile'">
            <div class="card-body socialprofile filter-cards-view">
              <MyProfile />
            </div>
          </template>
          <template v-if="accordionItem.value == 'mutual_friends'">
            <div class="card-body social-status filter-cards-view">
              <div class="d-flex" v-for="(friend, index) in friends" :key="index">
                <img
                  class="img-50 rounded-circle m-r-15"
                  :src="getImages(friend.profile)"
                  :alt="friend.name"
                />
                <div :class="`social-status social-${friend.status}`"></div>
                <div class="flex-grow-1">
                  <span class="f-w-600 d-block">{{ friend.name }}</span>
                  <span class="d-block fw-normal">{{ friend.email }}</span>
                </div>
              </div>
            </div>
          </template>
          <template v-if="accordionItem.value == 'activity_feed'">
            <div class="card-body social-status filter-cards-view">
              <template v-for="(friend, index) in friends" :key="index">
                <div class="d-flex" v-if="friend.lastActivityTime && friend.userProfile">
                  <img
                    class="img-50 rounded-circle m-r-15"
                    :src="getImages(friend.profile)"
                    :alt="friend.name"
                  />
                  <div class="flex-grow-1">
                    <span class="f-w-600 d-block">{{ friend.name }}</span>
                    <p>
                      Commented on {{ friend.userProfile }}'s
                      <a href="#">Photo</a>
                    </p>
                    <span class="light-span">{{ friend.lastActivityTime }} ago</span>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'

import { friends, socialAppLeftPanelAccordion } from '@/core/data/socialApp'

const MyProfile = defineAsyncComponent(() => import('@/module/socialApp/MyProfile.vue'))
</script>
