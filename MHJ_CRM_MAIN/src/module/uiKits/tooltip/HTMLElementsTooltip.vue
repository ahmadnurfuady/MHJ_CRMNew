<template>
  <Card :headerTitle="'HTML Elements with Hover Effect'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>data-bs-html='true'</code> to change HTML title and <code>data-bs-title </code> to
        the content under the HTML tag.
      </p>
    </template>

    <div class="common-flex">
      <button
        class="btn bg-primary mb-0 me-0"
        type="button"
        v-tooltip
        data-bs-html="true"
        data-bs-title="&lt;em&gt;Thank&lt;/em&gt; &lt;u&gt;you&lt;/u&gt;"
      >
        Notifications
      </button>
      <button
        class="btn bg-warning mb-0 me-0"
        type="button"
        v-tooltip
        data-bs-html="true"
        data-bs-title="&lt;b&gt;Thank&lt;/b&gt; &lt;em&gt;you&lt;/em&gt;"
      >
        Alert
      </button>
      <button
        class="btn bg-danger mb-0 me-0"
        type="button"
        v-tooltip
        data-bs-html="true"
        data-bs-title="&lt;em&gt;Thank&lt;/em&gt; &lt;u&gt;you&lt;/u&gt;"
      >
        It's Danger
      </button>
      <button
        class="btn bg-info mb-0 me-0"
        type="button"
        v-tooltip
        data-bs-html="true"
        data-bs-title="&lt;b&gt;Thank&lt;/b&gt; &lt;em&gt;you&lt;/em&gt;"
      >
        Coming soon
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
