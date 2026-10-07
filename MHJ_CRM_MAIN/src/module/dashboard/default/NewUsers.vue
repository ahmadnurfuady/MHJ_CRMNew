<template>
  <Card
    :cardClass="'height-equal'"
    :header="'total-revenue '"
    :padding="false"
    :headerTitle="t('dashboard.newUsers')"
    :cardBodyClass="'pt-0'"
  >
    <template #header5>
      <router-link :to="routes.Ecommerce.Products.ProductGrid">{{ t('common.viewAll') }}</router-link>
    </template>
    <div class="new-user">
      <ul>
        <li v-for="user in users" :key="user.id">
          <div class="space-common d-flex user-name">
            <img
              class="img-40 rounded-circle img-fluid me-2"
              :src="getImages(user.image)"
              :alt="user.name"
            />

            <div class="common-space w-100">
              <div>
                <h6>
                  <router-link :to="routes.User.UserProfile" class="f-w-500 f-14">
                    {{ user.name }}</router-link
                  >
                </h6>
                <span class="f-light f-w-500 f-12">{{ user.country }}</span>
              </div>

              <div class="product-sub">
                <div class="dropdown">
                  <div
                    :id="'dropdownMenuButtonicon' + user.id"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    role="menu"
                  >
                    <SvgIcon icon="more-vertical" svgClass="invoice-icon" />
                  </div>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    :aria-labelledby="'dropdownMenuButtonicon' + user.id"
                  >
                    <span class="dropdown-item">{{ t('common.lastMonth') }}</span>
                    <span class="dropdown-item">{{ t('common.lastWeek') }}</span>
                    <span class="dropdown-item">{{ t('common.lastDay') }}</span>
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
import { newUsers } from '@/core/data/dashboard/default'
import { routes } from '@/router/routes'
import { NewUserItem } from '@/types/dashboard/default'
import { getImages } from '@/utils/index'
import { defineAsyncComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const users = ref<NewUserItem[]>(newUsers)
</script>
