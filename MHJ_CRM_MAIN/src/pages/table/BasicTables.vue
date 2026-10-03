<template>
  <div class="container-fluid basic_table">
    <div class="row">
      <div class="col-sm-12">
        <BasicTableBottomBorder />
      </div>
      <div class="col-sm-12">
        <InverseTable />
      </div>
      <div class="col-sm-12">
        <HoverRowTable />
      </div>
      <div class="col-sm-12">
        <InverseTableBackground />
      </div>
      <div class="col-sm-12">
        <Caption />
      </div>
      <div class="col-lg-6">
        <TableHeadOptions />
      </div>
      <div class="col-lg-6">
        <StripedRowInverseTable />
      </div>
      <div class="col-sm-12">
        <BreakpointSpecificTable />
      </div>
      <div class="col-sm-12">
        <ResponsiveTablesLightBackground />
      </div>
      <div class="col-sm-12">
        <SizingTables />
      </div>
      <div class="col-sm-12">
        <CustomTableColorHoverStripped />
      </div>
      <div class="col-sm-12">
        <CustomTableColorHoverStripped />
      </div>
      <div class="col-sm-12">
        <DashedBorderTable />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BasicTableBottomBorder = defineAsyncComponent(
  () => import('@/module/table/basicTables/BasicTableBottomBorder.vue')
)
const InverseTable = defineAsyncComponent(
  () => import('@/module/table/basicTables/InverseTable.vue')
)
const HoverRowTable = defineAsyncComponent(
  () => import('@/module/table/basicTables/HoverRowTable.vue')
)
const InverseTableBackground = defineAsyncComponent(
  () => import('@/module/table/basicTables/InverseTableBackground.vue')
)

const Caption = defineAsyncComponent(() => import('@/module/table/basicTables/Caption.vue'))
const TableHeadOptions = defineAsyncComponent(
  () => import('@/module/table/basicTables/TableHeadOptions.vue')
)
const StripedRowInverseTable = defineAsyncComponent(
  () => import('@/module/table/basicTables/StripedRowInverseTable.vue')
)
const BreakpointSpecificTable = defineAsyncComponent(
  () => import('@/module/table/basicTables/BreakpointSpecificTable.vue')
)
const ResponsiveTablesLightBackground = defineAsyncComponent(
  () => import('@/module/table/basicTables/ResponsiveTablesLightBackground.vue')
)
const SizingTables = defineAsyncComponent(
  () => import('@/module/table/basicTables/SizingTables.vue')
)
const CustomTableColorHoverStripped = defineAsyncComponent(
  () => import('@/module/table/basicTables/CustomTableColorHoverStripped.vue')
)
const DashedBorderTable = defineAsyncComponent(
  () => import('@/module/table/basicTables/DashedBorderTable.vue')
)
</script>
