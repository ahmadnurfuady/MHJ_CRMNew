<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card :headerTitle="'Become a member'" :border="true" :padding="false">
          <div class="row g-3 pricing-block">
            <div class="col-lg-3 col-sm-6" v-for="(member, index) in becomeMember" :key="index">
              <div class="pricingtable">
                <div class="pricingtable-header">
                  <h3 class="title">{{ member.title }}</h3>
                </div>
                <div class="price-value">
                  <span class="currency">$</span>
                  <span class="amount">{{ member.price }}</span>
                  <span class="duration">/mo</span>
                </div>
                <ul class="pricing-content">
                  <li v-for="(item, i) in member.details" :key="i">{{ item.text }}</li>
                </ul>
                <div class="pricingtable-signup">
                  <a class="btn btn-primary btn-lg" href="#">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card
          :headerTitle="'Simple Pricing Card'"
          :border="true"
          :padding="false"
          :cardBodyClass="'pricing-content'"
        >
          <div class="row g-sm-4 g-3">
            <div
              class="col-xxl-3 col-sm-6 box-col-6"
              v-for="(price, index) in simplePricingCard"
              :key="index"
            >
              <div class="card text-center pricing-simple h-100">
                <div class="card-body">
                  <h4>{{ price.title }}</h4>
                  <h5>${{ price.price }}</h5>
                  <ul class="pricing-content">
                    <li v-for="(item, i) in price.details" :key="i">
                      <i class="fa-solid fa-circle-check"></i>{{ item.text }}
                    </li>
                  </ul>
                </div>
                <a class="btn btn-lg btn-primary btn-block" href="#">Purchase</a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { becomeMember, simplePricingCard } from '@/core/data/pricing'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
