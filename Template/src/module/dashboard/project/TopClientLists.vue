<template>
  <Card
    :cardClass="'recent-order'"
    :headerTitle="'Top Client Lists'"
    :padding="false"
    :header="'total-revenue'"
    :cardBodyClass="'pt-0'"
  >
    <template #header5>
      <div class="header-top"></div>
      <router-link :to="routes.Dashboards.Default"> View All</router-link>
    </template>
    <div class="client-list-table table-responsive custom-scrollbar">
      <table class="order-table w-100">
        <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td class="client-list">
              <div class="user-id d-flex align-items-center">
                <div class="avatars me-2">
                  <div class="avatar position-relative">
                    <img
                      class="img-50 rounded-circle"
                      :src="getImages(client.avatar)"
                      alt="image"
                    />
                    <div
                      v-if="client.statusColor"
                      class="status status-dnd"
                      :class="client.statusColor"
                    ></div>
                  </div>
                </div>
                <div class="product-sub">
                  <router-link class="f-14 f-w-500" :to="routes.Dashboards.Default">{{
                    client.name
                  }}</router-link>

                  <span class="d-block f-light f-w-500">{{ client.country }}</span>
                </div>
              </div>
              <div
                class="user-comment w-100 d-flex justify-content-between align-items-center mt-2"
              >
                <div class="product-sub">
                  <router-link class="f-14 f-w-500" :to="routes.User.UserProfile">{{
                    client.email
                  }}</router-link>
                  <span class="d-block f-light f-w-500">{{ client.phone }}</span>
                </div>
                <div class="product-sub">
                  <SvgIcon icon="messages-3" />
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
import { clients } from '@/core/data/dashboard/project'
import { routes } from '@/router/routes'
import { getImages } from '@/utils'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
