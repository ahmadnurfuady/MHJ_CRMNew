<template>
  <Card :headerTitle="'Shared Lists'" :border="true" :padding="false" :cardClass="'height-equal'">
    <template #header5>
      <p class="f-m-light mt-1">
        This example demonstrates two lists with shared draggable items using
        <code>vuedraggable</code>. Items can be freely moved between the lists, and their state is
        updated using <code>v-model</code>.
      </p>
    </template>

    <div class="row">
      <div class="col-6">
        <ul class="list-group" id="mix-left">
          <draggable
            v-model="list1"
            :group="{ name: 'nested', pull: true, put: true }"
            item-key="id"
          >
            <template #item="{ element }">
              <li
                class="list-group-item"
                :class="{ 'light-background': sharedList2.includes(element) }"
              >
                <i class="fa sitemap me-2"></i><span>{{ element }}</span>
              </li>
            </template>
          </draggable>
        </ul>
      </div>

      <div class="col-6">
        <ul class="list-group" id="mix-right">
          <draggable
            v-model="list2"
            :group="{ name: 'nested', pull: true, put: true }"
            item-key="id"
          >
            <template #item="{ element }">
              <li
                class="list-group-item"
                :class="{ 'light-background': sharedList2.includes(element) }"
              >
                <i class="fa sitemap me-2"></i><span>{{ element }}</span>
              </li>
            </template>
          </draggable>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { sharedList, sharedList2 } from '@/core/data/bonusUI/treeView'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const list1 = ref(sharedList)
const list2 = ref(sharedList2)
</script>
