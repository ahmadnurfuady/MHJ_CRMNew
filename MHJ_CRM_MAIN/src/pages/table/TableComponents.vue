<template>
  <div class="container-fluid">
    <div class="row table-components">
      <div class="col-sm-12">
        <TableUIComponents />
      </div>
      <div class="col-sm-12">
        <TableAlerts />
      </div>
      <div class="col-sm-12">
        <TableProgressbar />
      </div>
      <div class="col-sm-12">
        <TableCheckbox />
      </div>
      <div class="col-sm-12">
        <TableRadioButtons />
      </div>
      <div class="col-sm-12">
        <TableSelect />
      </div>
      <div class="col-sm-12">
        <TableInput />
      </div>
      <div class="col-sm-12">
        <TableBadges />
      </div>
      <div class="col-sm-12">
        <TableTooltip />
      </div>
      <div class="col-sm-12">
        <TableSwitch />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const TableUIComponents = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableUIComponents.vue')
)
const TableAlerts = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableAlerts.vue')
)
const TableProgressbar = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableProgressbar.vue')
)
const TableCheckbox = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableCheckbox.vue')
)
const TableRadioButtons = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableRadioButtons.vue')
)
const TableSelect = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableSelect.vue')
)
const TableInput = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableInput.vue')
)
const TableBadges = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableBadges.vue')
)
const TableTooltip = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableTooltip.vue')
)
const TableSwitch = defineAsyncComponent(
  () => import('@/module/table/tableComponents/TableSwitch.vue')
)
</script>
