<template>
  <Card :headerTitle="'Order'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">Use <code>order </code>class, you can set the order position.</p>
    </template>

    <div class="grid-showcase">
      <div class="row g-2">
        <div class="col-3 order-3"><span>First Item (order-3)</span></div>
        <div class="col-5 order-first"><span>Second Item (order-first)</span></div>
        <div class="col-4 order-last"><span>Third Item (order-last)</span></div>
        <div class="col-3 order-2"><span>Fourth Item (order-2)</span></div>
        <div class="col-sm-2 col-4 order-5"><span>fifth Item (order-5)</span></div>
        <div class="col-sm-6 col-4 order-4"><span>sixth Item (order-4)</span></div>
      </div>
    </div>

    <template #details>
      <div class="card-footer">
        <div class="table-responsive grid-footer">
          <table class="w-100">
            <tbody>
              <tr>
                <th>Class</th>
                <th>Value of the class</th>
              </tr>
              <tr>
                <td><code>.order-*</code></td>
                <td>first / 2 / 3 / 4 / 5 / last</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
