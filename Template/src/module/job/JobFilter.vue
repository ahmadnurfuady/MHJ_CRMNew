<template>
  <div class="md-sidebar">
    <a class="btn btn-primary email-aside-toggle md-sidebar-toggle" @click="toggleSidebar()"
      >Job filter</a
    >
    <div class="md-sidebar-aside job-sidebar" :class="{ open: sidebarOpen }">
      <div class="default-according style-1 faq-accordion job-accordion">
        <div class="accordion" id="accordionExample">
          <div class="card" v-for="items in sidebarDetails" :key="items.id">
            <div class="card-header" :id="`heading-${items.id}`">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse-${items.id}`"
                  aria-expanded="true"
                  :aria-controls="`collapse-${items.id}`"
                >
                  {{ items.title }}
                </button>
              </h2>
            </div>
            <div
              class="collapse show"
              :id="`collapse-${items.id}`"
              :aria-labelledby="`heading-${items.id}`"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body animate-chk">
                <template v-if="items.search">
                  <div class="job-filter mb-2">
                    <div class="faq-form">
                      <input class="form-control" type="text" placeholder="Search.." />
                      <FeatherIcon :type="'search'" :class="'search-icon'" />
                    </div>
                  </div>
                </template>
                <template v-if="items.location">
                  <div class="job-filter mb-3">
                    <div class="faq-form">
                      <input class="form-control" type="text" placeholder="location.." />
                      <FeatherIcon :type="'map-pin'" :class="'search-icon'" />
                    </div>
                  </div>
                </template>
                <div :class="items.class">
                  <template v-for="item of items.details" :key="item.id">
                    <label class="d-block" :for="item.checkId">
                      <input class="checkbox_animated" :id="item.checkId" type="checkbox" />{{
                        item.title
                      }}
                      <template v-if="item.countryCode">
                        <span class="d-block">{{ item.countryCode }} ({{ item.badgeText }})</span>
                      </template>
                      <template v-else-if="item.badge">
                        <span class="number">({{ item.badgeText }}) </span>
                      </template>
                    </label>
                  </template>
                </div>
              </div>
              <button class="btn btn-block btn-primary text-center" type="button">
                {{ items.button }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { jobSidebarDetails } from '@/core/data/jobs/jobSearch'

const sidebarOpen = ref(false)
const sidebarDetails = ref(jobSidebarDetails)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
