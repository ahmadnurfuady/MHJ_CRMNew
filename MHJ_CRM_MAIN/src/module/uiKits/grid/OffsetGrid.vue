<template>
  <Card :headerTitle="'Offset'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Move columns to the right using <code>offset-sm-* </code>classes. These classes increase the
        left margin of a column by <code>* </code>columns.
      </p>
    </template>

    <div class="grid-showcase">
      <div class="row g-2">
        <div class="col-sm-5 col-4 offset-sm-3 offset-2">
          <span>col-5 offset-sm-3</span>
        </div>
        <div class="col-sm-2 col-4 offset-sm-2 offset-1">
          <span>col-2 offset-sm-2</span>
        </div>
        <div class="col-sm-4 col-5 offset-2"><span>col-4 offset-sm-2</span></div>
        <div class="col-sm-3 col-4 offset-sm-2 offset-1">
          <span>col-3 offset-sm-2</span>
        </div>
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
                <td><code>.offset-*-*</code></td>
                <td>1 / 2 / ... / 10 / 11</td>
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
