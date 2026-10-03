<template>
  <Card
    :headerTitle="'Material Style Tabs'"
    :border="true"
    :padding="false"
    :cardBodyClass="'bottom-border-tab'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code>nav-link </code>with <code>active </code>class to switch and customize tabs.
      </p>
    </template>
    <ul class="nav nav-tabs border-tab border-0 mb-0 nav-secondary">
      <li class="nav-item" v-for="(tab, index) in materialTab" :key="tab.id">
        <a
          class="nav-link nav-border txt-secondary nav-secondary"
          :class="{ active: activeTab === index }"
          href="#"
          @click.prevent="handleTab(index)"
        >
          <i :class="`icofont icofont-${tab.icon}`"></i>{{ tab.title }}
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active">
        <div class="card-body px-0 pb-0">
          <div class="user-header pb-2">
            <h6 class="fw-bold">{{ materialTab[activeTab].title }}:</h6>
          </div>
          <div
            class="user-content"
            v-if="dataSource && dataSource.length && displayedColumns && displayedColumns.length"
          >
            <div class="table-responsive custom-scrollbar">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <template
                      v-for="column in materialTab[activeTab].displayedColumns"
                      :key="column.fieldValue"
                    >
                      <th scope="col">{{ column.title }}</th>
                    </template>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(details, index) in materialTab[activeTab].details" :key="index">
                    <template
                      v-for="column in materialTab[activeTab].displayedColumns"
                      :key="column.fieldValue"
                    >
                      <template v-if="column.fieldValue === 'rating'">
                        <Rate
                          :rating="Number(columnValue(details as TableData, column.fieldValue))"
                        />
                      </template>
                      <td v-else>
                        {{ columnValue(details as TableData, column.fieldValue) }}
                      </td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from 'vue'

import { materialTab } from '@/core/data/uiKits/tabs'
import type { TabDetails } from '@/types/uiKits'
import { columnValue } from '@/utils/index'
import { TableData } from '@/types/common'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'))

const activeTab = ref<number>(0)
const tabs = ref(materialTab)
const displayedColumns = ref<string[]>([])
const dataSource = ref<TabDetails[]>([])

onMounted(() => {
  getColumns()
})

function handleTab(index: number) {
  activeTab.value = index
  getColumns()
}

function getColumns() {
  const columns = tabs.value.find((details) => details.value == tabs.value[activeTab.value].value)

  if (columns && columns.displayedColumns) {
    displayedColumns.value = columns.displayedColumns.map((column) => column.fieldValue) as string[]
    dataSource.value = columns.details
  }
}
</script>
