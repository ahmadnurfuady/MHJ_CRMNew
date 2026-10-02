<template>
  <Card :headerTitle="'Deliveries'" :padding="true" :header="'sales-chart'" :cardBodyClass="'pt-0'">
    <template #header5>
      <div class="icon-menu-header">
        <div class="dropdown">
          <div
            id="dropdownMenuButtonicon99"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            role="menu"
          >
            <SvgIcon icon="more-horizontal" svgClass="invoice-icon" />
          </div>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButtonicon99">
            <span class="dropdown-item">Last Month </span
            ><span class="dropdown-item">Last Week </span
            ><span class="dropdown-item">Last Day </span>
          </div>
        </div>
      </div>
    </template>
    <div class="table-responsive custom-scrollbar deliveries-percentage">
      <table class="percentage-data w-100">
        <thead>
          <tr>
            <th class="f-light f-12 f-w-500">Particular</th>
            <th class="f-light f-12 f-w-500">Percentage</th>
            <th class="f-light f-12 f-w-500 text-end" v-if="amount">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td class="f-w-400 f-10">
              <a class="line-clamp" href="#">{{ item.title }}</a>
            </td>
            <td>
              <div class="progress-value d-flex gap-2 align-items-center">
                <div class="progress">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    :style="{ width: item.percentage + '%' }"
                    :aria-valuenow="item.percentage"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>{{ item.percentage }}%</span>
              </div>
            </td>
            <td class="f-w-500 f-10 text-end" v-if="amount">
              {{ formatCurrency(item.amount) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { deliveryStats } from '@/core/data/dashboard/default'
import { defineAsyncComponent, ref } from 'vue'

const items = ref(deliveryStats)

function formatCurrency(val: number) {
  return '$' + val.toLocaleString('en-US')
}
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const props = defineProps<{
  amount?: boolean
}>()
</script>
