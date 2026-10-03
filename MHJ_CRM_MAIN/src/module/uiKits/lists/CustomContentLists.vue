<template>
  <Card :headerTitle="'Custom Content Lists'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> list-group-item</code> through make custom design of all lists.
      </p>
    </template>

    <div class="list-group main-lists-content pt-0">
      <template v-for="details in customContent" :key="details.name">
        <a
          class="list-group-item list-group-item-action"
          :class="details.active ? 'active bg-primary' : 'list-hover-primary'"
          href="#"
        >
          <div class="d-flex w-100 justify-content-between align-items-center">
            <div class="list-wrapper">
              <img class="list-img me-0" :src="getImages(details.image)" alt="profile" />
              <div class="list-content">
                <h6>{{ details.name }}</h6>
                <p>{{ details.email }}</p>
              </div>
            </div>
            <small>{{ details.time }}</small>
          </div>
          <p class="mb-1">{{ details.description }}</p>
          <small :class="details.active ? '' : 'text-muted'"
            >{{ details.followers }} Followers</small
          >
        </a>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { customContent } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
