<template>
  <div class="row review-box">
    <div class="col-12">
      <div class="md-sidebar">
        <a
          class="btn btn-primary md-sidebar-toggle"
          href="#"
          @click.prevent="toggleSidebar()"
          >seller profile</a
        >
        <div
          class="md-sidebar-aside job-left-aside custom-scrollbar"
          :class="{ open: sidebarOpen }"
        >
          <div class="email-left-aside">
            <Card>
              <div class="accordion seller-profile" id="accordionPanelsStayOpenExample">
                <template v-for="(accordionItem, index) in sellerDetailsAccordion" :key="index">
                  <div class="accordion-item">
                    <div class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="`#panelsStayOpen-${index + 1}`"
                        aria-expanded="true"
                        :aria-controls="`panelsStayOpen-${index + 1}`"
                      >
                        {{ accordionItem.title }}
                      </button>
                    </div>
                    <div
                      class="accordion-collapse collapse show"
                      :id="`panelsStayOpen-${index + 1}`"
                    >
                      <div class="accordion-body bg-white">
                        <SellerDetails
                          :currentStore="props.currentStore"
                          v-if="accordionItem.value == 'details'"
                        />
                        <SellerRating v-if="accordionItem.value == 'rating'" />
                        <SellerNotification v-if="accordionItem.value == 'notification'" />
                        <SellerPolicies v-if="accordionItem.value == 'policy'" />
                        <SellerProductReview v-if="accordionItem.value == 'review'" />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { sellerDetailsAccordion } from '@/core/data/seller'
import type { Store } from '@/types/seller'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SellerDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SellerDetails.vue')
)
const SellerRating = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SellerRating.vue')
)
const SellerNotification = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SellerNotification.vue')
)
const SellerPolicies = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SellerPolicies.vue')
)
const SellerProductReview = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SellerProductReview.vue')
)

const props = defineProps<{
  currentStore: Store
}>()

const sidebarOpen = ref<boolean>(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
