<template>
  <Card :headerTitle="'Tooltip Triggers'" :padding="false" :cardBodyClass="'p-0'">
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td>Hover</td>
                <td class="w-50">
                  <button class="btn btn-primary" type="button" v-tooltip title="Hover">
                    Primary
                  </button>
                </td>
                <td>
                  <span
                    >This is the default tooltip behavior that appears on hover using
                    <code>v-tooltip</code>.</span
                  >
                </td>
              </tr>
              <tr>
                <td>Link</td>
                <td class="w-50">
                  <a class="btn btn-primary" href="#" v-tooltip title="Hooray!"
                    >Link</a
                  >
                </td>
                <td>
                  <span
                    >Tooltip can be applied to links. This link shows a tooltip when hovered.</span
                  >
                </td>
              </tr>
              <tr>
                <td>Outline Button</td>
                <td class="w-50">
                  <button class="btn btn-outline-primary" type="button" v-tooltip title="Primary">
                    Primary
                  </button>
                </td>
                <td>
                  <span
                    >Outline buttons can also show tooltips. Use <code>btn-outline-*</code> for
                    outline styles and <code>btn-outline-*-2x</code> for thicker borders.</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
