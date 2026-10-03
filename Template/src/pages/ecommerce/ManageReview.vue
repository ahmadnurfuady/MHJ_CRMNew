<template>
  <div class="container-fluid manage-review-wrapper">
    <div class="row">
      <div class="col-sm-12">
        <Card :cardBodyClass="'px-0 pt-0'">
          <ReviewFilters
            :form="reviewForm"
            :rating="rating"
            :reviewStatus="reviewStatus"
            @update="handleUpdate"
          />
          <div class="manage-review">
            <div class="recent-table table-responsive custom-scrollbar">
              <Table
                :hasCheckbox="true"
                :rowDetails="true"
                :tableConfig="tableConfig"
                :pageSize="10"
                :paginateDetails="true"
                :downloadReports="true"
                :selectedRows="true"
                :searchPlaceholder="'Search here...'"
                @action="handleAction"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { rating, reviews, reviewStatus } from '@/core/data/review'
import type { SelectField, TableClickedAction, TableConfigs } from '@/types/common'
import type { Review } from '@/types/review'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const ReviewFilters = defineAsyncComponent(
  () => import('@/module/ecommerce/mangeReview/ReviewFilters.vue')
)
const reviewList = ref<Review[]>([])
const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Product', fieldValue: 'productName', sort: true },
    { title: 'Reviewer', fieldValue: 'reviewerName', sort: true },
    { title: 'Review', fieldValue: 'review', sort: true },
    { title: 'Date', fieldValue: 'date', sort: true },
    { title: 'Status', fieldValue: 'status', sort: true },
  ],
  rowAction: [
    {
      label: 'Delete',
      actionToPerform: 'delete',
      icon: 'trash1',
      modal: true,
      modelText: 'Do you really want to delete the review?',
    },
  ],
  data: [] as Review[],
})

const filter = ref<{ rating: number | null; status: string }>({
  rating: null,
  status: '',
})
const reviewForm = ref({
  rating: initSelectField(),
  status: initSelectField(),
})
onMounted(() => {
  tableConfig.value.data = formatReview(reviews)
  reviewList.value = reviews
})

function handleAction(value: TableClickedAction) {
  if (value.actionToPerform === 'delete' && value.data) {
    reviewList.value = reviewList.value.filter((r) => r.id !== value.data.id)
    tableConfig.value.data = formatReview(reviewList.value)
  }
}
function handleUpdate({ event, field }: { event: SelectField; field: keyof typeof filter.value }) {
  const value = event.selected
    ? field === 'rating'
      ? Number(event.selected.value)
      : (event.data as string)
    : field === 'rating'
      ? null
      : ''

  ;(filter.value as Record<string, unknown>)[field] = value
  tableConfig.value.data = formatReview(filterDetails())
}
function filterDetails() {
  return reviewList.value.filter(
    (r) =>
      (!filter.value.rating || r.rating === filter.value.rating) &&
      (!filter.value.status || r.status === filter.value.status)
  )
}
function formatReview(reviews: Review[]) {
  return reviews.map((r) => {
    const stars = Array.from({ length: 5 }, (_, i) =>
      i < r.rating
        ? '<i class="fa-solid fa-star txt-warning"></i>'
        : '<i class="fa-regular fa-star txt-warning"></i>'
    ).join('')
    return {
      ...r,
      productName: `
        <div class="product-names">
          <div class="light-product-box">
            <img class="img-fluid"  src="${getImages(r.productImage)}" alt="${r.productName}" />
          </div>
          <p>${r.productName}</p>
        </div>`,
      reviewerName: `
        <div class="common-f-start">
          <img class="img-fluid" src="${getImages(r.reviewerProfile)}" alt="${r.reviewerName}" />
          <div class="user-details">
            <a href="#">${r.reviewerName}</a>
            <p class="mb-0">${r.reviewerEmail}</p>
          </div>
        </div>`,
      review: `
        <div class="rating">${stars}</div>
        <div class="customer-review"><span>${r.review}</span></div>`,
      status:
        r.status === 'Approve'
          ? `<span class="badge badge-light-success">${r.status}</span>`
          : r.status === 'Reject'
            ? `<span class="badge badge-light-danger">${r.status}</span>`
            : '-',
    }
  })
}
</script>
