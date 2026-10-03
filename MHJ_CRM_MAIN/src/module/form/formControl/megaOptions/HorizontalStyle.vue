<template>
  <Card
    :headerTitle="'Horizontal Style'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>mega-horizontal</code> class to create horizontal alignments.
      </p>
    </template>
    <form class="mega-horizontal">
      <div class="row">
        <template v-for="(style, index) in horizontalStyle" :key="index">
          <div class="col-sm-3">
            <p class="mega-title">{{ style.title }}</p>
          </div>
          <template v-for="(item, index) in style.details" :key="index">
            <div :class="`col-sm-9 ${item.divClass}`">
              <div class="card">
                <div class="d-flex p-20">
                  <div :class="`form-check radio radio-${item.class} m-0 w-100`">
                    <input
                      class="form-check-input"
                      :id="item.id"
                      type="radio"
                      :name="item.name"
                      :value="item.value"
                      :checked="item.checked"
                    />
                    <label class="form-check-label mb-0 w-100" :for="item.id">
                      <span :class="`flex-grow-1 ${item.badgeClass}`">
                        <span class="mt-0 mega-title-badge">
                          {{ item.title }}
                          <span :class="`badge badge-${item.class} pull-right digits`">
                            {{ item.digit }}
                          </span>
                        </span>
                        <span>{{ item.description }}</span>
                        <span class="rating-star-wrapper" v-if="item.rating">
                          <div class="rating">
                            <StarRating
                              v-model:rating="item.rating"
                              :star-size="20"
                              :read-only="true"
                              :show-rating="false"
                              :max-rating="5"
                              :increment="0.5"
                            />
                          </div>
                          {{ item.label }}
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </form>
    <div class="card-footer text-end" details>
      <button class="btn btn-primary m-r-15" type="submit">Submit</button>
      <button class="btn btn-light" type="submit">Cancel</button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { horizontalStyle } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
