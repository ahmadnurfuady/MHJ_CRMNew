<template>
  <Card
    :headerTitle="'Activity Log  '"
    :padding="false"
    :cardBodyClass="'pt-0'"
    :header="'total-revenue'"
  >
    <template #header5>
      <div class="sales-chart-dropdown-select">
        <div class="card-header-right-icon online-store">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle dropdown-toggle-store"
              id="dropdownMenuButtondown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Employee
            </button>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButtondown">
              <a class="dropdown-item" href="#">All</a
              ><a class="dropdown-item" href="#">Client</a
              ><a class="dropdown-item" href="#">Employee </a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="activity-log-card">
      <ul>
        <li v-for="log in activityLogs" :key="log.id" class="activity-log">
          <div class="d-flex align-items-start gap-2">
            <img
              class="activity-log-img rounded-circle img-fluid me-2"
              :src="getImages(log.image)"
              alt="user"
            />

            <div>
              <div class="common-space user-id">
                <h6>
                  <a class="f-w-500 f-12">
                    {{ log.name }}
                  </a>
                </h6>
                <span class="f-light f-w-500 f-12">{{ log.time }}</span>
              </div>

              <div class="d-flex mb-2">
                <span class="f-light f-w-500 f-12">{{ log.actionLabel }} </span>
                <router-link :to="routes.Blog.Blog" class="f-w-500 f-12">
                  {{ log.actionTo }}</router-link
                >
              </div>
              <span class="f-light f-w-500 f-12 d-block">
                {{ log.message }}
              </span>
              <router-link
                :to="routes.User.UserProfile"
                v-if="log.username"
                class="f-12 f-w-500 username"
              >
                {{ log.username }}</router-link
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { activityLogs } from '@/core/data/dashboard/project'
import { routes } from '@/router/routes'
import { getImages } from '@/utils'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
