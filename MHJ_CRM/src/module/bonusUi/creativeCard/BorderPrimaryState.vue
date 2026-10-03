<template>
  <Card
    :headerTitle="'Border Primary State'"
    :border="true"
    :padding="false"
    :header="'border-l-primary border-3'"
    :cardClass="'common-hover'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Use class of<code> border-l-* </code>for left border and <code>border-3 </code>is used to
        increase the width of the border.
      </p>
    </template>
    <div class="list-group">
      <template v-for="details in primaryStateCard" :key="details.id">
        <a
          class="list-group-item list-group-item-action"
          :class="{ active: details.active }"
          href="#"
        >
          <img class="rounded-circle" :src="getImages(details.image)" alt="user" />{{
            details.name
          }}
        </a>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { primaryStateCard } from '@/core/data/bonusUI/creativeCards'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
