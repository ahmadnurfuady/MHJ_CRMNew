<template>
  <Card :headerTitle="'Horizontal Accordion'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Add the <code>collapse-horizontal</code> modifier class to transition the width instead of
        height and set a width on the immediate child element.
      </p>
    </template>
    <div class="common-flex">
      <button
        class="btn btn-secondary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseWidthExample"
        aria-expanded="false"
        aria-controls="collapseWidthExample"
      >
        Toggle width Collapse
      </button>
    </div>
    <div class="row">
      <div class="col-xxl-8 col-xl-12">
        <div class="collapse collapse-horizontal mt-3" id="collapseWidthExample">
          <div class="card card-body accordion-h-space mb-0">
            This is some placeholder content for a horizontal collapse. It's hidden by default and
            shown when triggered.
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
