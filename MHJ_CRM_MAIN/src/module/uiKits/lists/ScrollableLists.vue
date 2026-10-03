<template>
  <Card :headerTitle="'Scrollable Lists'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use property <code>overflow:auto </code>through scrollable lists.
      </p>
    </template>

    <div class="list-group main-lists-content scrollbar-wrapper custom-scrollbar">
      <template v-for="details in scrollableList" :key="details.name">
        <a
          class="list-group-item list-group-item-action list-hover-primary"
          :class="{ active: details.active }"
          href="#"
        >
          <div class="list-wrapper gap-0">
            <img class="list-img" :src="getImages(details.image)" alt="profile" />
            <div class="list-content">
              <h6>{{ details.name }}</h6>
              <p class="f-light">{{ details.email }}</p>
              <small>{{ details.time }}</small>
            </div>
          </div>
        </a>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { scrollableList } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
