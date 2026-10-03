<template>
  <template v-if="props.items">
    <ul :class="props.class">
      <template v-for="(item, index) in props.items.slice(0, props.showItems)" :key="index">
        <template v-if="item && item.profile">
          <li class="d-inline-block" v-tooltip :title="item.name || ''">
            <img
              class="img-30 rounded-circle"
              :class="imgClass"
              :src="getImages(item.profile)"
              alt="user"
            />
          </li>
        </template>
        <template v-else-if="item.name && !item.profile">
          <li class="d-inline-block" v-tooltip :title="item.name || ''">
            <div :class="`common-circle bg-lighter-${getTextColor(getUserText(item.name))}`">
              {{ getUserText(item.name, 'singleText') }}
            </div>
          </li>
        </template>
        <template v-else-if="!item.name && item.profile">
          <li class="d-inline-block">
            <img
              class="rounded-circle"
              :class="imgClass"
              :src="getImages(item.profile)"
              alt="user"
            />
          </li>
        </template>
      </template>
      <template v-if="props.items.length > props.showItems">
        <li
          class="d-inline-block"
          v-tooltip
          :title="(props.items.length - props.showItems).toString() + '+ More'"
        >
          <div class="bg-lighter-dark common-circle">
            <span class="f-w-500">{{ props.items.length - props.showItems }}+</span>
          </div>
        </li>
      </template>
    </ul>
  </template>
</template>

<script setup lang="ts">
import { Profile } from '@/types/common'
import { getUserText, getTextColor, getImages } from '@/utils/index'

const props = withDefaults(
  defineProps<{
    items: Profile[]
    class?: string
    imgClass?: string
    showItems?: number
  }>(),
  {
    class: '',
    imgClass: '',
    showItems: 4,
  }
)
</script>
