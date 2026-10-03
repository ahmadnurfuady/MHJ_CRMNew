<template>
  <div class="md-sidebar">
    <a class="btn btn-primary md-sidebar-toggle" href="#" @click.prevent="toggleSidebar()"
      >file filter</a
    >
    <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="{ open: sidebarOpen }">
      <div class="file-sidebar">
        <Card :cardBodyClass="'custom-scrollbar'">
          <div class="common-sort-card">
            <h4 class="mb-3">Sort By File Type</h4>
            <ul class="files-left-icons file-type-icons">
              <li v-for="(files, index) in fileTypes" :key="index">
                <a id="folder-files-tab" href="#">
                  <div>
                    <SvgIcon :icon="files.icon" type="default"></SvgIcon>
                    <span
                      >{{ files.name }}
                      <span>({{ files.totalFiles }})</span>
                    </span>
                  </div>
                  <span>{{ files.size }}</span>
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <ul>
            <li>
              <div class="btn btn-outline-primary">
                <vue-feather :type="'database'"></vue-feather>
                Storage
              </div>
              <div class="m-t-15">
                <div class="progress sm-progress-bar mb-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    :style="{ width: '25%' }"
                  ></div>
                </div>
                <p>25 GB of 100 GB used</p>
              </div>
            </li>
          </ul>
          <hr />
          <ul>
            <li v-for="(plan, index) in pricingPlan" :key="index">
              <div class="pricing-plan">
                <h5>{{ plan.name }}</h5>
                <h6>{{ plan.price }}</h6>
                <p>{{ plan.storage }}</p>
                <div class="btn btn-outline-primary btn-xs">{{ plan.status }}</div>
                <img class="bg-img" :src="getImages(plan.image)" alt="folder" />
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { fileTypes, pricingPlan } from '@/core/data/fileManager'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const sidebarOpen = ref<boolean>(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
