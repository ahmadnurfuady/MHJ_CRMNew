<template>
  <Card :headerTitle="'Material Style Left Tabs'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code>nav-link </code>with <code>active </code>class for switching to another tabs
        and<code> aria-orientation='vertical'</code>for vertical tabs.
      </p>
    </template>
    <div class="tabs-responsive-side">
      <div class="material-wrapper">
        <div class="d-flex">
          <div
            class="nav flex-column nav-secondary border-tab nav-left"
            id="sideline-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <template v-for="tab in materialLeftTabs" :key="tab.id">
              <a
                class="nav-link nav-effect"
                :class="{ active: activeTab === tab.value }"
                href="#"
                @click.prevent="handleTab(tab.value)"
                >{{ tab.title }}</a
              >
            </template>
          </div>
        </div>
        <div class="material-content">
          <div class="tab-content">
            <div class="tab-pane fade show active">
              <template v-if="activeTab === 'home'">
                <p>
                  This product is meant for educational purposes only. Any resemblance to real
                  persons, living or dead is purely coincidental. Void where prohibited. Some
                  assembly required. List each check separately by bank number. Batteries not
                  included.Google Web Designer gives you the power to create beautiful and
                  compelling videos, images and HTML5 ads. Use animation and interactive elements to
                  build out your creative vision, then scale your content for different sizes or
                  audiences with responsive and dynamic workflows.
                </p>
              </template>
              <template v-else-if="activeTab === 'profile'">
                <div class="flex-space flex-wrap align-items-center">
                  <img class="tab-img" :src="getImages('ecommerce/08.jpg')" alt="profile" />
                  <ul class="d-flex flex-column gap-1">
                    <li><strong> Name: </strong> Jake Catlin</li>
                    <li><strong>Visit Us: </strong> 50006 Ehrenberg/Parker,Arkansas-85334</li>
                    <li><strong>Mail Us:</strong> Jake.@gmail.com</li>
                    <li><strong>Contact Number: </strong> (928) 923-7940</li>
                  </ul>
                </div>
              </template>
              <template v-else-if="activeTab === 'inbox'">
                <div class="card-body p-0">
                  <div class="main-inbox">
                    <div class="header-inbox justify-content-start gap-2">
                      <div class="header-left-inbox">
                        <div class="inbox-img">
                          <img :src="getImages('ecommerce/07.jpg')" alt="profile" />
                        </div>
                      </div>
                      <div class="inbox-content">
                        <h6>Dalbult Caslin</h6>
                        <p class="text-muted">stroman.rogers@gmail.com</p>
                      </div>
                    </div>
                    <div class="body-inbox mt-2">
                      <div class="body-h-wrapper">
                        <i class="me-2 tab-space icofont icofont-star"></i
                        ><em>Compare Prices Find the Best Computer Assessors Fronted Issue.</em>
                      </div>
                      <p class="pt-2">
                        Site speed and design are two of the most important ranking factors Google
                        takes into consideration, as they have the biggest effect of customer
                        staying on site as the website respond faster.
                      </p>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else-if="activeTab === 'settings'">
                <p>
                  <strong>In this situation, you would probably do two things:</strong>
                  exit the page, or look for the trusty search bar. If you decide to stick around, a
                  proper search function should take your query and send you to your destination.
                  Problem solved. It's not a perfect experience, but it's a hard one to avoid on
                  larger websites that simply can't link to every piece of content from the
                  homepage.
                </p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { materialLeftTabs } from '@/core/data/uiKits/tabs'
import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeTab = ref<string>('home')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
