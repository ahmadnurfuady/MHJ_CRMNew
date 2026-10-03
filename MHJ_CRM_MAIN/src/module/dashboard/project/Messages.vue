<template>
  <Card
    :headerTitle="'Messages'"
    :padding="false"
    :cardBodyClass="'pt-0'"
    :header="'total-revenue card-title-underline'"
  >
    <template #header5>
      <router-link :to="routes.Ecommerce.Products.ProductGrid">+ New Messages</router-link>
    </template>
    <div class="user-message">
      <ul>
        <li v-for="item in messages" :key="item.name">
          <div class="activity-log">
            <img
              class="activity-log-img rounded-circle img-fluid me-2"
              :src="getImages(item.image)"
              alt="user"
            />
            <div class="status" :class="item.status"></div>

            <div class="activity-name">
              <div>
                <h6>
                  <router-link :to="routes.User.UserProfile" class="f-w-500 f-14">
                    {{ item.name }}</router-link
                  >
                </h6>
                <span class="f-light f-w-500 f-12">{{ item.message }}</span>
              </div>
              <div class="product-sub">
                <div class="dropdown">
                  <div
                    :id="'dropdownMenuButton-' + item.id"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    role="menu"
                  >
                    <SvgIcon icon="more-vertical" svgClass="invoice-icon" />
                  </div>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    :aria-labelledby="'dropdownMenuButton-' + item.id"
                  >
                    <span class="dropdown-item">Last Month</span>
                    <span class="dropdown-item">Last Week</span>
                    <span class="dropdown-item">Last Day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { messages } from '@/core/data/dashboard/project'
import { routes } from '@/router/routes'
import { getImages } from '@/utils'
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
