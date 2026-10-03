<template>
  <Card :headerTitle="'Border Tabs'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code>nav-link </code>with <code>active </code>class to add bottom border styles.
      </p>
    </template>
    <ul class="nav nav-tabs border-tab mb-0" id="bottom-tab" role="tablist">
      <li class="nav-item" v-for="tab in borderTab" :key="tab.id">
        <a
          class="nav-link nav-border txt-primary tab-primary"
          :class="{ active: activeTab === tab.value }"
          href="#"
          @click.prevent="handleTab(tab.value)"
        >
          <i :class="`icofont icofont-${tab.icon}`"></i>{{ tab.title }}
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active">
        <template v-if="activeTab === 'home'">
          <p class="pt-3">
            This is some placeholder content the <strong>Home tab's </strong> associated content.
            Clicking another tab will toggle the visibility of this one for the next. The tab
            JavaScript swaps classes to control the content visibility and styling. You can use it
            with tabs, pills, and any other <strong>.nav</strong>-powered navigation.To convey the
            <strong>active </strong> state to assistive technologies, use the
            <strong>aria-current </strong> attribute — using the page value for current page, or
            true for the current item in a set. The base <strong>nav </strong> component is built
            with flexbox and provide a strong foundation for building all types of navigation
            components.
          </p>
        </template>
        <template v-else-if="activeTab === 'inbox'">
          <div class="card-body pb-0">
            <div class="main-inbox">
              <div class="header-inbox">
                <div class="header-left-inbox">
                  <div class="inbox-img">
                    <img :src="getImages('ecommerce/06.jpg')" alt="profile" />
                  </div>
                  <div class="inbox-content">
                    <h6>Dalbult Caslin</h6>
                    <p class="text-muted">stroman.rogers@gmail.com</p>
                  </div>
                </div>
                <ul class="header-right-inbox">
                  <li>
                    <p>8 JAN 11:30PM</p>
                  </li>
                  <li><i class="txt-danger icofont icofont-ui-delete"></i></li>
                  <li><i class="icofont icofont-telegram"></i></li>
                </ul>
              </div>
              <div class="body-inbox mt-2">
                <div class="body-h-wrapper">
                  <i class="me-2 tab-space icofont icofont-star"></i
                  ><em>Compare Prices Find the Best Computer Assessors Fronted Issue.</em>
                </div>
                <p class="pt-2">
                  Site speed and design are two of the most important ranking factors Google takes
                  into consideration, as they have the biggest effect of customer staying on site as
                  the website respond faster.
                </p>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="activeTab === 'contact'">
          <div class="card-body px-0 pb-0">
            <div class="form">
              <div class="mb-3">
                <InputWrapper :title="'Email Address'">
                  <InputField
                    :inputId="'email'"
                    :inputType="'email'"
                    :placeholder="'youremail@gmail.com'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="mb-0">
                <InputWrapper :title="'Example Textarea'">
                  <InputField
                    :inputId="'textarea'"
                    :inputType="'textarea'"
                    :placeholder="'Enter message'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { borderTab } from '@/core/data/uiKits/tabs'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const activeTab = ref<string>('inbox')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
