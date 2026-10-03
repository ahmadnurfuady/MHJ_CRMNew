<template>
  <Card
    :cardClass="'height-equal'"
    :header="'total-revenue pb-0'"
    :padding="false"
    :headerTitle="'Team Activities'"
    :cardBodyClass="'pt-0'"
  >
    <template #header5>
      <router-link :to="routes.Ecommerce.Products.ProductGrid">View All </router-link>
    </template>
    <div class="activity-table table-responsive custom-scrollbar">
      <table class="order-table overflow-hidden project-table w-100 activity-log">
        <tbody>
          <tr v-for="item in activities" :key="item.id">
            <td>
              <div class="team-activity">
                <div class="activity-data d-flex align-items-center gap-3">
                  <div class="common-space gap-2">
                    <div class="user-activity me-3">
                      <img
                        class="rounded-circle p-1 img-fluid me-3 img-50"
                        :src="getImages(item.image)"
                        :alt="item.name"
                      />
                      <router-link :to="routes.User.UserProfile" class="f-10 f-w-500 username">
                        {{ item.name }}
                      </router-link>
                    </div>
                    <div class="activity-time">
                      <span class="f-light f-w-500 f-10">{{ item.time }}</span>
                    </div>
                  </div>
                  <div class="subtitle">
                    <p class="f-w-400 f-10">{{ item.message }}</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { activityLogs } from '@/core/data/dashboard/default'
import { routes } from '@/router/routes'
import { ActivityItem } from '@/types/dashboard/default'
import { getImages } from '@/utils/index'
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activities = ref<ActivityItem[]>(activityLogs)
</script>
