<template>
  <div class="col-12">
    <Card
      :headerTitle="'Block Level Buttons'"
      :border="true"
      :padding="false"
      :cardBodyClass="'btn-groups'"
    >
      <template #header5>
        <p class="f-m-light mt-1">
          Use<code> btn </code>class for buttons and <code>d-grid </code>used for block level
          buttons..
        </p>
      </template>

      <div class="row g-3">
        <div class="col-12" v-for="(item, index) in blockButton" :key="index">
          <div class="card-wrapper border rounded-3">
            <h6 class="sub-title fw-bold">{{ item.title }}</h6>
            <div class="d-grid gap-2" :class="item.class">
              <button
                class="btn"
                :class="button.class"
                type="button"
                v-for="button in item.buttons"
                :key="button.class"
              >
                {{ button.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { blockButton } from '@/core/data/buttons'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
