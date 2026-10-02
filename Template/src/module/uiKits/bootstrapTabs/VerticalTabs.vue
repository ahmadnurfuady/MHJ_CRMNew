<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Vertical Tabs'"
    :border="true"
    :padding="false"
    :cardBodyClass="'main-vertical-tab'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code>verticalTab</code> array to define tab data, and the
        <code>activeTab</code> variable to control which tab content is shown. Each tab is rendered
        vertically using <code>nav-pills</code> with conditional classes for active state.
      </p>
    </template>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <div class="nav flex-column nav-pills nav-secondary">
          <a
            class="nav-link"
            :class="{ active: activeTab === tab.value }"
            @click.prevent="handleTab(tab.value)"
            href="#"
            v-for="tab in verticalTab"
            :key="tab.id"
          >
            {{ tab.title }}
            <span class="badge badge-light-light p-1 px-2" v-if="tab.tag">{{ tab.tag }}</span>
          </a>
        </div>
      </div>
      <div class="col-md-8 col-xs-12">
        <div class="tab-content">
          <div class="tab-pane fade show active">
            <template v-if="activeTab === 'home'">
              <p>
                This is some placeholder content the <b>Home tab's </b> associated content. Clicking
                another tab will toggle the visibility of this one for the next. The tab JavaScript
                swaps classes to control the content visibility and styling. You can use it with
                tabs, pills, and any other <b>.nav</b>-powered navigation.
              </p>
            </template>
            <template v-else-if="activeTab === 'components'">
              <p>
                This is some placeholder content the <b>Component tab's </b> associated content.
                Clicking another tab will toggle the visibility of this one for the next. The tab
                JavaScript swaps classes to control the content visibility and styling. You can use
                it with tabs, pills, and any other <b>.nav</b>-powered navigation.
              </p>
            </template>
            <template v-else-if="activeTab === 'pages'">
              <p>
                This is some placeholder content the <b>Page tab's </b> associated content. Clicking
                another tab will toggle the visibility of this one for the next. The tab JavaScript
                swaps classes to control the content visibility and styling. You can use it with
                tabs, pills, and any other <b>.nav</b>-powered navigation.
              </p>
            </template>
            <template v-else-if="activeTab === 'settings'">
              <p>
                This is some placeholder content the <b>Setting tab's </b> associated content.
                Clicking another tab will toggle the visibility of this one for the next. The tab
                JavaScript swaps classes to control the content visibility and styling. You can use
                it with tabs, pills, and any other <b>.nav</b>-powered navigation.
              </p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { verticalTab } from '@/core/data/uiKits/tabs'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeTab = ref<string>('components')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
