<template>
  <Card :headerTitle="'Horizontal Alignment'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Use<code> justify-content-*</code> class to set the horizontal alignment.
      </p>
    </template>

    <div class="grid-showcase grid-align">
      <div class="row justify-content-start">
        <div class="col-5"><span class="bg-white">One column</span></div>
        <div class="col-5"><span class="bg-white">Two column</span></div>
      </div>
      <div class="row justify-content-center">
        <div class="col-5"><span class="bg-white">One column</span></div>
        <div class="col-5"><span class="bg-white">Two column</span></div>
      </div>
      <div class="row justify-content-end">
        <div class="col-5"><span class="bg-white">One column</span></div>
        <div class="col-5"><span class="bg-white">Two column</span></div>
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
                <td><code>.justify-content-*</code></td>
                <td>start / center / end / around / between</td>
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
