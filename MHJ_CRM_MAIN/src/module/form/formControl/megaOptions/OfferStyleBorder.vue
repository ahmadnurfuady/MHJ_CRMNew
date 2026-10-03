<template>
  <Card
    :headerTitle="'Offer Style Border'"
    :border="true"
    :padding="false"
    :cardBodyClass="'megaoptions-border-space-sm'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>offer-style </code>& <code>mega-inline</code> to use solid border style checkbox
        button.
      </p>
    </template>
    <form class="mega-inline offer-style">
      <div class="row flex-column">
        <div class="col-12" v-for="(style, index) in offerStyleBorder" :key="index">
          <div class="card">
            <div class="d-flex p-20">
              <div class="form-check checkbox checkbox-primary">
                <input
                  class="form-check-input"
                  :id="style.id"
                  :type="style.type"
                  :checked="style.checked"
                />
                <label class="form-check-label my-0" :for="style.id">
                  <span class="flex-grow-1">
                    <span class="d-flex list-behavior-1">
                      <span class="flex-shrink-0">
                        <img
                          class="tab-img img-fluid"
                          :src="getImages(style.imageSrc)"
                          :alt="style.imageAlt"
                        />
                      </span>
                      <span class="flex-grow-1">
                        <span class="mb-0">{{ style.description }}</span>
                      </span>
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <template #details>
      <div class="card-footer text-end">
        <button class="btn btn-primary m-r-15" type="submit">Submit</button>
        <button class="btn button-light-primary" type="submit">Cancel</button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { offerStyleBorder } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
