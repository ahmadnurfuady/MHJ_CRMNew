<template>
  <Card
    :cardClass="'sales-report'"
    :headerTitle="'Sales Overview'"
    :padding="false"
    :dropdownType="'simple'"
    :options="cardToggleOption"
    :cardBodyClass="'pt-0'"
  >
    <div class="social-tabs">
      <div class="nav nav-pills custom-scrollbar" id="social-pills-tab" role="tablist">
        <template v-for="(details, index) in overviewDetails" :key="index">
          <a
            :class="[
              `social-box bg-7-${details.color}`,
              { active: activeTab === details.value },
            ]"
            href="#"
            @click.prevent="handleTab(details.value)"
          >
            <div class="frame-image">
              <div :class="`outline-20-${details.color}`">
                <div :class="`bg-20-${details.color}`">
                  <SvgIcon :icon="details.icon" />
                </div>
              </div>
            </div>
            <span>{{ details.title }}</span>
          </a>
        </template>
      </div>
      <div class="tab-content" id="social-pills-tabContent">
        <div class="tab-pane fade show active">
          <apexchart
            v-if="chart"
            :height="chart.options.chart?.height"
            :series="chart.series"
            :options="chart.options"
          ></apexchart>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from "vue";

import { dayFilterOptions } from "@/core/data/common";
import { salesOverviewCharts } from "@/core/data/seller";
import type { CardToggleOption } from "@/types/common";
import type { SalesOverviewChartDetails, SalesOverviewCharts } from "@/types/seller";
import { ApexOptions } from "apexcharts";

const Card = defineAsyncComponent(() => import("@/components/shared/card/Card.vue"));
const SvgIcon = defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue"));

const cardToggleOption = ref<CardToggleOption[]>(dayFilterOptions);
const activeTab = ref<string>("earning");
const overviewDetails = ref<SalesOverviewCharts[]>(salesOverviewCharts);
const chart = ref<{
  series: ApexOptions["series"];
  options: SalesOverviewChartDetails;
}>();

onMounted(() => {
  handleTab(activeTab.value);
});

function handleTab(value: string) {
  activeTab.value = value;
  const details = overviewDetails.value.find((details) => details.value === value);
  if (details) {
    chart.value = {
      series: details.chartSeries,
      options: details.chartDetails,
    };
  }
}
</script>
