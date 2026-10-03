<template>
  <div class="container-fluid">
    <draggable
      v-model="cards"
      :group="{ name: 'nested', pull: false, put: false }"
      item-key="id"
      tag="div"
      :component-data="{ class: 'row' }"
    >
      <template #item="{ element }">
        <div class="col-xxl-4 col-md-6">
          <div :class="`card height-equal ${element.cardClass}`">
            <div :class="`card-header ${element.cardHeaderClass}`">
              <h5 :class="`${element.headingClass}`">{{ element.title }}</h5>
              <template v-if="element.cardType == 'simple'">
                <p class="mt-1 f-m-light">You can draggable cards anywhere.</p>
              </template>
            </div>
            <div :class="`card-body ${element.cardBodyClass}`">
              <ul :class="`list-group ${element.class}`">
                <template v-for="(item, index) in element.details" :key="index">
                  <template v-if="item.list">
                    <li class="list-group-item" :class="{ 'active bg-warning-light': item.active }">
                      <template v-if="item.icon">
                        <i :class="`icofont icofont-${item.icon}`"></i>
                      </template>
                      <template v-else>
                        <i class="icofont icofont-arrow-right"></i>
                      </template>
                      {{ item.name }}
                    </li>
                  </template>
                </template>
              </ul>
              <template v-for="(item, index) in element.details" :key="index">
                <template v-if="element.cardType == 'classic'">
                  <h6 :class="`pb-2 ${item.titleClass}`">{{ item.title }}</h6>
                  <p :class="`mb-0 c-light ${item.descriptionClass}`">
                    {{ item.description }}
                  </p>
                </template>
              </template>
            </div>
            <template v-if="element.cardType == 'classic'">
              <div :class="`card-footer ${element.cardFooterClass}`">
                <h6 :class="`mb-0 text-end ${element.footerClass}`">Riho Theme</h6>
              </div>
            </template>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { list } from '@/core/data/bonusUI/draggableCard'
import { List } from '@/types/bonusUI'

const cards = ref<List[]>(list)
</script>
