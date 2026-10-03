<template>
  <div class="card">
    <div class="card-header social-header">
      <h5 class="common-space">
        <span>Education and Employment</span>
        <span class="pull-right">
          <vue-feather :type="'more-vertical'"></vue-feather>
        </span>
      </h5>
    </div>
    <div class="card-body">
      <div class="row details-about">
        <div class="col-sm-6" v-for="(eduction, index) in profile.eductionEmployment" :key="index">
          <div class="your-details" :class="{ 'your-details-xs': index % 2 == 0 }">
            <span class="f-w-500 d-block">{{ eduction.title }}:</span>
            <p>{{ eduction.year }}</p>
            <p>{{ eduction.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { myProfile } from '@/core/data/socialApp'
import type { MyProfile } from '@/types/socialApp'
const profile = ref<MyProfile>(myProfile)
</script>
