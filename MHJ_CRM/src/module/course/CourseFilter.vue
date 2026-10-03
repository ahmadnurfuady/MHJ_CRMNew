<template>
  <div class="md-sidebar">
    <a class="btn btn-primary email-aside-toggle md-sidebar-toggle" @click="toggleSidebar()"
      >Learning filter</a
    >
    <div class="md-sidebar-aside job-sidebar custom-scrollbar" :class="{ open: sidebarOpen }">
      <div class="default-according style-1 faq-accordion job-accordion">
        <div class="row">
          <div class="col-xl-12" v-for="items in courseSidebar" :key="items.id">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse-${items.id}`"
                    aria-expanded="true"
                    :aria-controls="`collapse-${items.id}`"
                  >
                    {{ items.title }}
                  </button>
                </h5>
              </div>

              <div
                class="collapse show"
                :id="`collapse-${items.id}`"
                :aria-labelledby="`collapse-${items.id}`"
                data-bs-parent="#accordion"
              >
                <div class="card-body" :class="items.class">
                  <div class="job-filter mb-2" v-if="items.search">
                    <div class="faq-form">
                      <input class="form-control" type="text" placeholder="Search.." />
                      <vue-feather :type="'search'" :class="'search-icon'" />
                    </div>
                  </div>

                  <template v-for="content in items.details" :key="content.id">
                    <div :class="content.class">
                      <div class="learning-header">
                        <span class="f-w-600">{{ content.subTitle }}</span>
                      </div>

                      <template v-for="item of content.item" :key="item.id">
                        <template v-if="!item.badge">
                          <label class="d-block" :for="item.checkId">
                            <input
                              :class="item.class"
                              :id="item.checkId"
                              :type="content.type"
                              :name="content.type === 'radio' ? content.subTitle : ''"
                            />
                            {{ item.title }}
                          </label>
                        </template>

                        <ul v-else>
                          <li>
                            <a href="#">
                              {{ item.title }}
                            </a>
                            <span class="badge badge-primary pull-right">{{ item.badgeText }}</span>
                          </li>
                        </ul>
                      </template>

                      <template v-if="content.rating">
                        <div class="flex-grow-1">
                          <span class="f-w-500">{{ content.title }}</span>
                          <span class="d-block">
                            Course By
                            <a href="#">{{ content.createdBy }}</a>
                          </span>
                          <span class="d-block">
                            <Rate :rating="Number(content.rate)" />
                          </span>
                        </div>
                        <div>
                          <h5 class="mb-0 font-primary">{{ content.date }}</h5>
                          <span class="d-block">{{ content.month }}</span>
                        </div>
                      </template>
                    </div>
                  </template>

                  <button class="btn btn-primary text-center" type="button" v-if="items.search">
                    {{ items.button }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { courseSidebar } from '@/core/data/courses'

const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'))

const sidebarOpen = ref<boolean>(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
