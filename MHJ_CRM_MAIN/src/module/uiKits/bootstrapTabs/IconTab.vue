<template>
  <Card :headerTitle="'Icons with Tabs'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 f-m-light">
        Use <code>nav-link </code>with <code>active </code>class to switch particular tabs and with
        <code>"Ico" </code>icons you can take <code>"tab".</code>
      </p>
    </template>
    <ul class="nav nav-tabs" id="icon-tab" role="tablist">
      <li class="nav-item" v-for="tab in iconTab" :key="tab.id">
        <a
          class="nav-link txt-secondary"
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
            This is some placeholder content the <b>home tab's</b> associated content. Clicking
            another tab will toggle the visibility of this one for the next. The tab JavaScript
            swaps classes to control the content visibility and styling. You can use it with tabs,
            pills, and any other .nav-powered navigation. Bootstrap provides a flexible and
            easy-to-use tab component that allows developers to create tabbed navigation
            effortlessly.
          </p>
        </template>
        <template v-else-if="activeTab === 'profile'">
          <div class="pt-3 mb-0">
            <div class="flex-space flex-wrap align-items-center">
              <img class="tab-img" :src="getImages('avtar/7.jpg')" alt="profile" />
              <ul class="d-flex flex-column gap-1">
                <li><strong>Visit Us: </strong> 278 Green Avenue Oakland, CA 94612</li>
                <li><strong>Mail Us:</strong> MichaelMMcGowan@teleworm.us</li>
                <li><strong>Contact Number: </strong> 510-767-0025</li>
              </ul>
            </div>
          </div>
        </template>
        <template v-else-if="activeTab === 'contact'">
          <p class="pt-3">
            Us Technology offers web & mobile development solutions for all industry
            verticals.Include a short form using fields that'll help your business understand who's
            contacting them.
          </p>
          <InputWrapper :title="'Email Address'">
            <InputField
              :inputId="'email'"
              :inputType="'email'"
              :placeholder="'youremail@gmail.com'"
              :required="false"
            />
          </InputWrapper>
        </template>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { iconTab } from '@/core/data/uiKits/tabs'
import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const activeTab = ref<string>('home')

function handleTab(value: string) {
  activeTab.value = value
}
</script>
