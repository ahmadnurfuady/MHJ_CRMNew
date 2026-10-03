<template>
  <Card :headerTitle="'Justify Tabs'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code>nav-link</code> with <code>active </code>class and set content using flex
        property.
      </p>
    </template>
    <div
      class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0"
    >
      <p>Riho Profiles For New Employees:</p>
      <ul class="nav nav-pills nav-primary">
        <li class="nav-item" v-for="tab in justifyTabs" :key="tab.id">
          <a
            class="nav-link"
            :class="{ active: activeTab === tab.value }"
            href="#"
            @click.prevent="handleTab(tab.value)"
            >{{ tab.title }}</a
          >
        </li>
      </ul>
    </div>
    <div class="card-body px-0 pb-0">
      <div class="tab-content">
        <div class="tab-pane fade show active">
          <div class="designer-details">
            <template v-for="(employee, index) in employees" :key="index">
              <div class="designer-profile" v-if="employee.designation === activeTab">
                <div class="designer-wrap">
                  <img class="designer-img" :src="getImages(employee.profile)" alt="profile" />
                  <div class="designer-content">
                    <h6>{{ employee.name }}</h6>
                    <p>{{ employee.contact }}</p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { getImages } from '@/utils/index'
import { employees, justifyTabs } from '@/core/data/uiKits/tabs'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeTab = ref<string>('ux-designer')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
