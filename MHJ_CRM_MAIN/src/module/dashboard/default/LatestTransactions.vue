<template>
  <Card
    :headerTitle="t('dashboard.latestTransactions')"
    :padding="false"
    :cardBodyClass="'pt-0'"
    :header="'total-revenue'"
  >
    <template #header5>
      <router-link :to="routes.Ecommerce.Products.ProductGrid">{{ t('common.viewAll') }}</router-link>
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
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import { useProductDetailsNavigation } from '@/composables/useProductNavigation'
import { routes } from '@/router/routes'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const { navigateToProduct } = useProductDetailsNavigation()

const transactionData = ref<LatestTransactionItem[]>([])
const tableConfig = computed<TableConfigs<LatestTransactionItem>>(() => ({
  columns: [
    { title: t('dashboard.name'), fieldValue: 'name', sort: false },
    { title: t('dashboard.date'), fieldValue: 'date', sort: false },
    { title: t('dashboard.amount'), fieldValue: 'amount', sort: false, type: 'price' },
    { title: t('dashboard.status'), fieldValue: 'status', sort: false },
  ],
  data: transactionData.value,
}))

onMounted(() => {
  transactionData.value = latestTransactionItem
})

function navigate() {
  navigateToProduct('1')
}
</script>
