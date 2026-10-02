<template>
  <Card :headerTitle="'Simple Tabs'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code>nav-link</code> with <code>active</code> class to jump particular tabs.
      </p>
    </template>
    <ul class="simple-wrapper nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" v-for="tab in simpleTab" :key="tab.id">
        <a
          class="nav-link txt-primary"
          :class="{ active: activeTab === tab.value }"
          href="#"
          @click.prevent="handleTab(tab.value)"
          >{{ tab.title }}</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active">
        <template v-if="activeTab === 'home'">
          <p class="pt-3">
            This is some placeholder content the <b>Home tab's </b>associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript
            swaps classes to control the content visibility and styling. You can use it with tabs,
            pills, and any other .nav-powered navigation. Bootstrap provides a flexible and
            easy-to-use tab component that allows developers to create tabbed navigation
            effortlessly.
          </p>
        </template>
        <template v-else-if="activeTab === 'profile'">
          <div class="pt-3 mb-0">
            <div class="flex-space flex-wrap align-items-center">
              <img class="tab-img" :src="getImages('avtar/3.jpg')" alt="profile" />
              <ul class="d-flex flex-column gap-1">
                <li><strong>Visit Us:</strong> 2600 Hollywood Blvd,Florida, United States-33020</li>
                <li><strong>Mail Us:</strong> contact@us@gmail.com</li>
                <li><strong>Contact Number: </strong> (954) 357-7760</li>
              </ul>
            </div>
          </div>
        </template>
        <template v-else-if="activeTab === 'contact'">
          <ul class="pt-3 d-flex flex-column gap-1">
            <li>
              Us Technology offers web & mobile development solutions for all industry
              verticals.Include a short form using fields that'll help your business understand
              who's contacting them.
            </li>
            <li><strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020</li>
            <li><strong>Mail Us:</strong> contact@us@gmail.com</li>
            <li><strong>Contact Number: </strong> (954) 357-7760</li>
          </ul>
        </template>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { simpleTab } from '@/core/data/uiKits/tabs'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeTab = ref<string>('profile')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
