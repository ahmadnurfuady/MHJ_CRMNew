<template>
  <div class="card">
    <div class="card-header social-header">
      <h5 class="common-space">
        <span>Hobbies and Interests</span>
        <span class="pull-right">
          <vue-feather :type="'more-vertical'"></vue-feather>
        </span>
      </h5>
    </div>
    <div class="card-body">
      <div class="row details-about gy-4">
        <div class="col-sm-6" v-for="(hobbies, index) in profile.hobbiesInterest" :key="index">
          <div class="your-details" :class="{ 'your-details-xs': index % 2 == 0 }">
            <span class="f-w-500 mb-2 d-block">{{ hobbies.title }}:</span>
            <p>{{ hobbies.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { myProfile } from '@/core/data/socialApp'
import { MyProfile } from '@/types/socialApp'
import { ref } from 'vue'
const profile = ref<MyProfile>(myProfile)
</script>
