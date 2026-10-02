<template>
  <Card
    :headerTitle="'Horizontal Lists'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> list-group-horizontal</code> to change the layout of list group items from
        vertical to horizontal across all breakpoints.<code>
          list-group-horizontal-[sm / md / lg / xl / xxl ]</code
        >.
      </p>
    </template>
    <div class="horizontal-list-wrapper dark-list">
      <ul
        :class="`fw-bold list-group list-group-horizontal-${list.class} pb-2`"
        v-for="(list, index) in horizontalList"
        :key="index"
      >
        <template v-for="(details, i) in list.details" :key="i">
          <template v-if="details.border">
            <li :class="`list-group-item border-left-${list.borderColor}`">
              {{ details.item }}
            </li>
          </template>
          <template v-else>
            <li class="list-group-item">{{ details.item }}</li>
          </template>
        </template>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { horizontalList } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
