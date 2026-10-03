<template>
  <div class="container-fluid">
    <div class="bootstrap-touchspin">
      <div class="row">
        <div class="col-xl-6">
          <Card
            :headerTitle="'Default Touchspin'"
            :border="true"
            :padding="false"
            :cardBodyClass="'common-flex'"
          >
            <template #header5>
              <p class="f-m-light mt-1">
                Use <code>decrement-touchspin </code>and <code>increment-touchspin </code>class for
                default style item.
              </p>
            </template>
            <CommonTouchspin />
          </Card>
        </div>
        <div class="col-xl-6">
          <Card
            :headerTitle="'Outlined Touchspin'"
            :border="true"
            :padding="false"
            :cardBodyClass="'common-flex'"
          >
            <template #header5>
              <p class="f-m-light mt-1">
                Use <code>decrement-touchspin </code>and <code>increment-touchspin </code>class for
                outline style touchspin.
              </p>
            </template>
            <CommonTouchspin :outlined="true" />
          </Card>
        </div>
        <div class="col-xl-6">
          <Card
            :headerTitle="'Icons with Prefix and Postfix'"
            :border="true"
            :padding="false"
            :cardBodyClass="'common-flex pre-post-touchspin'"
          >
            <template #header5>
              <p class="f-m-light mt-1">
                Use <code>decrement-touchspin </code>and <code>increment-touchspin </code>class for
                icons pre/post fix style touchspin.
              </p>
            </template>
            <PrefixPostfixTouchspin :color="'primary'" />
          </Card>
        </div>
        <div class="col-xl-6">
          <Card
            :headerTitle="'Buttons with Prefix and Postfix'"
            :border="true"
            :padding="false"
            :cardBodyClass="'common-flex pre-post-touchspin bg-touchspin'"
          >
            <template #header5>
              <p class="f-m-light mt-1">
                Use<code>decrement-touchspin </code>and <code>increment-touchspin </code>class for
                buttons pre/post fix style touchspin.
              </p>
            </template>
            <PrefixPostfixTouchspin :button="true" :color="'warning'" />
          </Card>
        </div>
        <div class="col-xl-12">
          <Card
            :headerTitle="'Rounded Touchspin'"
            :border="true"
            :padding="false"
            :cardBodyClass="'common-flex rounded-touchspin'"
          >
            <template #header5>
              <p class="f-m-light mt-1">
                Use <code>decrement-touchspin </code>and <code>increment-touchspin </code>class for
                round style touchspin.
              </p>
            </template>
            <CommonTouchspin />
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const CommonTouchspin = defineAsyncComponent(
  () => import('@/module/form/formWidgets/touchspin/CommonTouchspin.vue')
)
const PrefixPostfixTouchspin = defineAsyncComponent(
  () => import('@/module/form/formWidgets/touchspin/PrefixPostfixTouchspin.vue')
)
</script>
