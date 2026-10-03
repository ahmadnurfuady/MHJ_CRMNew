<template>
  <div class="row" v-if="props.details">
    <div :class="item.class" v-for="(item, index) in props.details" :key="index">
      <div class="card bg-primary">
        <div class="card-body">
          <div class="media faq-widgets">
            <div class="media-body">
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
            </div>
            <vue-feather :type="item.icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { KnowledgeBase } from '@/types/knowledgeBase'

const props = defineProps<{
  details: KnowledgeBase[]
}>()
</script>
