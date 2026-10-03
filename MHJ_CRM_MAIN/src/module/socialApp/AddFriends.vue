<template>
  <Card
    :headerTitle="'People You May Know'"
    :border="true"
    :padding="false"
    :cardBodyClass="'avatar-showcase'"
  >
    <div class="pepole-knows">
      <ul>
        <li v-for="(friend, index) in friends.slice(0, 6)" :key="index">
          <div class="add-friend text-center">
            <img
              class="img-60 img-fluid rounded-circle"
              :alt="friend.name"
              :src="getImages(friend.profile)"
            />
            <span class="d-block">{{ friend.name }}</span>
            <button class="btn btn-primary btn-xs">Add Friend</button>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'

import { friends } from '@/core/data/socialApp'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
