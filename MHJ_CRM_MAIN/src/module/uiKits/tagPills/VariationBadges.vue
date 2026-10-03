<template>
  <div class="badge-spacing" v-if="props.badgeDetails">
    <template v-for="(badge, index) in props.badgeDetails" :key="index">
      <template v-if="props.type == 'outline'">
        <span
          :class="[
            `badge badge-b-${badge.color}`,
            { 'rounded-pill': props.rounded },
            badge.color == 'light' ? 'txt-dark' : 'txt-' + badge.color,
          ]"
        >
          {{ titleCase(badge.color) }}
        </span>
      </template>

      <template v-else-if="type == 'number'">
        <a
          :class="[
            `badge badge-${badge.color}`,
            {
              'txt-dark': badge.color == 'light',
              'rounded-circle badge-p-space': props.rounded,
            },
          ]"
          href="#"
        >
          {{ index + 1 }}
        </a>
      </template>

      <template v-else-if="type == 'icon'">
        <template v-for="(icon, i) in props.badgeIcons" :key="i">
          <template v-if="i === index">
            <a
              :class="[
                `badge badge-${badge.color}`,
                {
                  'txt-dark': badge.color == 'light',
                  'rounded-circle p-2': props.rounded,
                  'b-ln-height': !props.rounded,
                },
              ]"
              href="#"
            >
              <vue-feather :type="icon.icon"></vue-feather>
            </a>
          </template>
        </template>
      </template>

      <template v-else>
        <span
          :class="[
            `badge badge-${badge.color}`,
            { 'txt-dark': badge.color == 'light', 'rounded-pill': props.rounded },
          ]"
        >
          {{ titleCase(badge.color) }}
        </span>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '@/types/common'
import type { BadgeIcon } from '@/types/uiKits'
import { titleCase } from '@/utils/index'

const props = withDefaults(
  defineProps<{
    badgeDetails?: Color[]
    type?: string
    rounded?: boolean
    badgeIcons?: BadgeIcon[]
  }>(),
  {
    rounded: false,
  }
)
</script>
