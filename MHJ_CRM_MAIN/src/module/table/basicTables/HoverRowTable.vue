<template>
  <Card
    :headerTitle="'Hoverable Rows with Horizontal Border'"
    :border="true"
    :padding="false"
    :cardBodyClass="'p-0'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Hoverable row use a class <code>table-hover</code> and for horizontal border use a class
        <code>table-border-horizontal</code> , solid border use a class
        <code>border-solid, table </code>classes.
      </p>
    </template>
    <div class="table-responsive signal-table custom-scrollbar">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Status</th>
            <th scope="col">Signal Name</th>
            <th scope="col">Security</th>
            <th scope="col">Stage</th>
            <th scope="col">Schedule</th>
            <th scope="col">Team Lead</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="details of hoverAbleTable" :key="details.id">
            <th scope="row">{{ details.id }}</th>
            <td class="d-flex align-items-center">
              <vue-feather
                :class="`bg-light-${details.class} font-${details.class}`"
                :type="'alert-triangle'"
              />
              <span :class="`font-${details.class}`">{{ details.status }}</span>
            </td>
            <td>{{ details.signalName }}</td>
            <td>{{ details.security }}</td>
            <td>{{ details.stage }}</td>
            <td>{{ details.schedule }}</td>
            <td>{{ details.teamLead }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { hoverAbleTable } from '@/core/data/tables/basicTable'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
