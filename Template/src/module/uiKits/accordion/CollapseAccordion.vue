<template>
  <Card
    :headerTitle="'Collapse Accordion'"
    :border="true"
    :padding="false"
    :cardBodyClass="'collapse-accordion'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        you can also use a link with the href attribute<code>(and a role="button").</code>In both
        cases, the <code>data-bs-toggle="collapse"</code> is required.
      </p>
    </template>
    <p class="common-flex">
      <a
        class="btn btn-dark"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        >Link With Href</a
      >
      <button
        class="btn btn-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Button With Data-bs-target
      </button>
    </p>
    <div class="collapse btn-dark" id="collapseExample">
      <div class="card card-body mb-0 dark-accordion txt-light">
        Some placeholder content for the collapse component. This panel is hidden by default but
        revealed when the user activates the relevant trigger.
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
