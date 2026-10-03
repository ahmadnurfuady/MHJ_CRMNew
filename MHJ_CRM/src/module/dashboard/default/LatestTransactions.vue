<template>
  <Card
    :headerTitle="'Latest Transactions  '"
    :padding="false"
    :cardBodyClass="'pt-0'"
    :header="'total-revenue'"
  >
    <template #header5>
      <router-link :to="routes.Ecommerce.Products.ProductGrid">View All </router-link>
    </template>
    <div class="table-order table-responsive custom-scrollbar custom-transaction">
      <Table :hasCheckbox="true" :tableConfig="tableConfig" :pageSize="6" :pagination="false">
        <template #name="{ row }">
          <div class="product-name">
            <a href="#" class="f-14 f-w-500" @click.prevent="navigate()">{{
              row.name
            }}</a>
          </div>
        </template>
        <template #status="{ row }">
          <div :class="`txt-${row.class}`">
            <span class="f-w-500 f-13">{{ row.status }}</span>
          </div>
        </template>
      </Table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { LatestTransactionItem } from '@/types/dashboard/default'
import { latestTransactionItem } from '@/core/data/dashboard/default'
import { TableConfigs } from '@/types/common'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { useProductDetailsNavigation } from '@/composables/useProductNavigation'
import { routes } from '@/router/routes'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const { navigateToProduct } = useProductDetailsNavigation()

const tableConfig = ref<TableConfigs<LatestTransactionItem>>({
  columns: [
    { title: 'Name', fieldValue: 'name', sort: false },
    { title: 'Date', fieldValue: 'date', sort: false },
    { title: 'Amount', fieldValue: 'amount', sort: false, type: 'price' },
    { title: 'Status', fieldValue: 'status', sort: false },
  ],
  data: [] as LatestTransactionItem[],
})

onMounted(() => {
  tableConfig.value.data = latestTransactionItem
})

function navigate() {
  navigateToProduct('1')
}
</script>
