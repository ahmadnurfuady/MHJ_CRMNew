<template>
  <div class="col-12">
    <Card :headerTitle="'Radial Buttons'" :border="true" :padding="false">
      <template #header5>
        <p class="f-m-light mt-1">
          You can used <code>btn-*-gradien</code> class for gradien buttons.
        </p>
      </template>
      <div class="row g-3">
        <div :class="item.colClass" v-for="item in radialButtons" :key="item.id">
          <div class="card-wrapper border rounded-3 bg-light">
            <h6 class="sub-title fw-bold">{{ item.headTitle }}</h6>
            <div class="common-flex">
              <button
                class="btn"
                :class="button.class"
                v-for="button in item.items"
                :key="button.title"
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
import { radialButtons } from '@/core/data/buttons'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
