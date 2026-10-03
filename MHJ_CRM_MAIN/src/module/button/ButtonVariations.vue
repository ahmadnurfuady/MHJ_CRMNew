<template>
  <div class="col-12">
    <Card
      :headerTitle="'Button Variations'"
      :border="true"
      :padding="false"
      :cardBodyClass="'btn-groups'"
    >
      <template #header5>
        <p class="f-m-light mt-1">
          Use<code> btn </code>class used for buttons and <code>btn-group-vertical </code>for
          vertical buttons and made different types of design using <code>btn-group</code>.
        </p>
      </template>

      <div class="row g-3">
        <div class="col-xxl-6">
          <div class="card-wrapper border rounded-3 h-100">
            <h6 class="sub-title fw-bold">Vertical Variations</h6>
            <VerticalVariations />
          </div>
        </div>
        <div class="col-xxl-6">
          <div class="row g-3">
            <div class="col-xl-12 col-sm-6">
              <div class="card-wrapper border rounded-3 h-100">
                <h6 class="sub-title fw-bold">Horizontal Variations</h6>
                <HorizontalVariations />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const VerticalVariations = defineAsyncComponent(
  () => import('@/module/button/VerticalVariations.vue')
)
const HorizontalVariations = defineAsyncComponent(
  () => import('@/module/button/HorizontalVariations.vue')
)
</script>
