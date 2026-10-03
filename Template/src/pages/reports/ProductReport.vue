<template>
  <div class="container-fluid product-report-wrapper">
    <div class="row">
      <div class="col-12">
        <Card :cardBodyClass="'px-0 pt-0'">
          <div class="product-report table-responsive custom-scrollbar">
            <div class="recent-table">
              <Table
                :hasCheckbox="true"
                :tableConfig="tableConfig"
                :pageSize="10"
                :paginateDetails="true"
                :selectedRows="true"
                :dateFilter="true"
              >
                <template #productName="{ row }">
                  <div class="product-names">
                    <div class="light-product-box">
                      <img
                        class="img-fluid"
                        :src="getImages((row as ProductReports).productImage)"
                        :alt="(row as ProductReports).productName"
                      />
                    </div>
                    <p>{{ (row as ProductReports).productName }}</p>
                  </div>
                </template>
                <template #rating="{ row }">
                  <RatingStars :rating="Number((row as ProductReports).rating)" />
                </template>
              </Table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { productReports } from '@/core/data/reports'
import type { TableConfigs } from '@/types/common'
import { ProductReports } from '@/types/reports'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Product Name', fieldValue: 'productName', sort: true },
    { title: 'SKU', fieldValue: 'sku', sort: true },
    { title: 'Total Product Sold', fieldValue: 'productSold', sort: true },
    {
      title: 'Price',
      fieldValue: 'price',
      sort: true,
      type: 'price',
      decimalNumber: true,
    },
    { title: 'Rating', fieldValue: 'rating', sort: true },
  ],
  data: [] as ProductReports[],
})

onMounted(() => {
  tableConfig.value.data = productReports
})
</script>
