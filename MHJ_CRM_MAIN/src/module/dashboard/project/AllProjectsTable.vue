<template>
  <Card
    :headerTitle="'All Proyek Table'"
    :headerClass="'m-0'"
    :padding="false"
    :header="'total-revenue'"
    :cardBodyClass="'pt-0'"
  >
    <template #header5>
      <router-link :to="routes.Dashboards.Default" class="d-none d-sm-block"> View All</router-link>
    </template>
    <div class="project-table table-responsive custom-scrollbar">
      <table class="order-table project-table w-100" id="project-table">
        <thead>
          <tr>
            <th>Proyek Name</th>
            <th>Client Name</th>
            <th>End Date</th>
            <th>Assigned to</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in projectTable" :key="index">
            <td>
              <div class="project-comment d-flex gap-2">
                <div class="radial-chart-wrap">
                  <div class="widgetsChart" id="widgetsChart1">
                    <apexchart
                      :type="'radialBar'"
                      :height="80"
                      :series="item.series"
                      :options="item.option"
                    />
                  </div>
                </div>
                <div>
                  <router-link :to="routes.Ecommerce.Products.ProductGrid" class="f-w-500 f-14">
                    {{ item.name }}</router-link
                  >

                  <div class="project-comment-icon">
                    <div class="project-link">
                      <SvgIcon icon="messages-2" />
                      <span class="f-w-500 f-light f-12">23</span>
                    </div>
                    <div class="project-link">
                      <SvgIcon icon="paperclip" />
                      <span class="f-w-500 f-light f-12">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="product-sub">
                <router-link :to="routes.Ecommerce.Products.ProductGrid" class="f-w-500 f-14">
                  {{ item.clientName }}</router-link
                >

                <span class="f-w-500 f-light f-12 d-block">{{ item.clientId }}</span>
              </div>
            </td>
            <td>
              <div class="product-sub">
                <router-link :to="routes.Ecommerce.Products.ProductGrid" class="f-w-500 f-14">
                  {{ item.endDate }}</router-link
                >

                <span class="f-w-500 f-light f-12 d-block">{{ item.time }}</span>
              </div>
            </td>
            <td>
              <div class="product-sub">
                <router-link :to="routes.Ecommerce.Products.ProductGrid" class="f-w-500 f-14">
                  {{ item.assignedTo }}</router-link
                >
                <span class="f-w-500 f-light f-12 d-block">{{ item.member }}</span>
              </div>
            </td>
            <td>
              <div class="txt-primary d-flex gap-2 align-items-center justify-content-center">
                <span class="pending bg-primary"></span
                ><span class="f-w-500 f-13 txt-primary">Active</span>
              </div>
            </td>
            <td>
              <div class="product-sub">
                <div class="dropdown">
                  <div
                    id="dropdownMenuButtonicon11"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    role="menu"
                  >
                    <SvgIcon icon="more-horizontal" svgClass="invoice-icon" />
                  </div>
                  <div
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButtonicon11"
                  >
                    <span class="dropdown-item">Last Month</span
                    ><span class="dropdown-item">Last Week</span
                    ><span class="dropdown-item">Last Day </span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { projectTable } from '@/core/data/dashboard/project'
import { routes } from '@/router/routes'
import { defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
