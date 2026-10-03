<template>
  <div class="row">
    <div class="col-xl-4 col-sm-6 box-col-6" v-for="(item, index) in ticketListStatus" :key="index">
      <div class="card ecommerce-widget">
        <div class="card-body support-ticket-font">
          <div class="row">
            <div class="col-5">
              <span>{{ item.statusTitle }}</span>
              <h3 class="total-num counter">
                <Counter :counter="item.order" />
              </h3>
            </div>
            <div class="col-7">
              <div class="text-end">
                <ul>
                  <li>
                    Profit
                    <span class="product-stts txt-success ms-2">
                      {{ item.profit }}
                      <i class="icon-angle-up f-12 ms-1"></i>
                    </span>
                  </li>
                  <li>
                    Loss
                    <span class="product-stts txt-danger ms-2">
                      {{ item.loss }}
                      <i class="icon-angle-down f-12 ms-1"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="progress-showcase">
            <div class="progress sm-progress-bar">
              <div
                :class="`progress-bar bg-${item.levelColor}`"
                role="progressbar"
                :style="{ width: item.level }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { ticketListStatus } from '@/core/data/supportTicket'

const Counter = defineAsyncComponent(() => import('@/components/shared/Counter.vue'))
</script>
