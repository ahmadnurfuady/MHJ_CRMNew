<template>
  <Card
    :headerTitle="'Animated Tabs'"
    :border="true"
    :padding="false"
    :cardBodyClass="'horizontal-icons-tab'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code> active</code> class on the <code> nav-link</code>. It is possible to build a
        animated tab with the <code>horizontal-icons-tab </code> class.
      </p>
    </template>
    <ul class="nav nav-tabs border-tab mb-0" role="tablist">
      <li class="nav-item" v-for="tab in animatedTabs" :key="tab.id">
        <a
          class="nav-link tab-info"
          :class="{ active: activeTab === tab.value }"
          href="#"
          @click.prevent="handleTab(tab.value)"
        >
          <i :class="`icofont icofont-${tab.icon}`"></i>
          <span>{{ tab.title }}</span>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active">
        <template v-if="activeTab === 'home'">
          <p class="pt-3">
            This is some placeholder content for the <b>Home tab's </b>associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript
            swaps classes to control the content visibility and styling. You can use it with tabs,
            pills, and any other .nav-powered navigation. Bootstrap provides a flexible and
            easy-to-use tab component that allows developers to create tabbed navigation
            effortlessly.
          </p>
        </template>
        <template v-else-if="activeTab === 'profile'">
          <p class="pt-3">
            This is some placeholder content the <b>Profile tab's</b> associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript
            swaps classes to control the content visibility and styling. You can use it with tabs,
            pills, and any other .nav-powered navigation. Bootstrap provides a flexible and
            easy-to-use tab component that allows developers to create tabbed navigation
            effortlessly.
          </p>
        </template>
        <template v-else-if="activeTab === 'about'">
          <p class="pt-3">
            This is some placeholder content the <b>About tab's </b>associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript
            swaps classes to control the content visibility and styling. You can use it with tabs,
            pills, and any other .nav-powered navigation. Bootstrap provides a flexible and
            easy-to-use tab component that allows developers to create tabbed navigation
            effortlessly.
          </p>
        </template>
        <template v-else-if="activeTab === 'gallery'">
          <p class="pt-3">
            This is some placeholder content the <b>Gallery tab's </b>associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript
            swaps classes to control the content visibility and styling. You can use it with tabs,
            pills, and any other .nav-powered navigation. Bootstrap provides a flexible and
            easy-to-use tab component that allows developers to create tabbed navigation
            effortlessly.
          </p>
        </template>
        <template v-else-if="activeTab === 'faq'">
          <p class="pt-3">
            This is some placeholder content the <b>FAQ tab's </b>associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript
            swaps classes to control the content visibility and styling. You can use it with tabs,
            pills, and any other .nav-powered navigation. Bootstrap provides a flexible and
            easy-to-use tab component that allows developers to create tabbed navigation
            effortlessly.
          </p>
        </template>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { animatedTabs } from '@/core/data/uiKits/tabs'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeTab = ref<string>('profile')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
