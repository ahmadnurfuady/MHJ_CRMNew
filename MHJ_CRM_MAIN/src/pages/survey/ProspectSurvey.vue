<template>
  <div class="container-fluid prospect-survey-page">
    <Transition :name="transitionName" mode="out-in">
      <SurveyEventList
        v-if="activePanel === 'events'"
        key="events"
        @select="openSurveyForm"
      />
      <ProspectSurveyDetail v-else key="detail" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import { usePageBackHandler, usePageTitle } from '@/composable/usePageHeader'
import ProspectSurveyDetail from '@/module/survey/ProspectSurveyDetail.vue'
import SurveyEventList from '@/module/survey/SurveyEventList.vue'
import { routes } from '@/router/routes'

type SurveyPanel = 'events' | 'detail'

const router = useRouter()
const activePanel = ref<SurveyPanel>('events')
const transitionName = ref('panel-forward')

usePageTitle(
  computed(() =>
    activePanel.value === 'events' ? 'Survey Prospek' : 'Form Survey Prospek',
  ),
)
usePageBackHandler(handleGlobalBack)

function openSurveyForm(): void {
  transitionName.value = 'panel-forward'
  activePanel.value = 'detail'
}

function showEventList(): void {
  transitionName.value = 'panel-back'
  activePanel.value = 'events'
}

function handleGlobalBack(): void {
  if (activePanel.value === 'detail') {
    showEventList()
    return
  }

  void router.push(routes.Dashboards.Default)
}
</script>

<style scoped>
.prospect-survey-page {
  padding-bottom: 34px;
}

.panel-forward-enter-active,
.panel-forward-leave-active,
.panel-back-enter-active,
.panel-back-leave-active {
  transition: opacity 0.2s ease, transform 0.24s ease;
}

.panel-forward-enter-from,
.panel-back-leave-to {
  opacity: 0;
  transform: translateX(24px);
}

.panel-forward-leave-to,
.panel-back-enter-from {
  opacity: 0;
  transform: translateX(-24px);
}

@media (max-width: 575px) {
  .prospect-survey-page {
    padding-inline: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .panel-forward-enter-active,
  .panel-forward-leave-active,
  .panel-back-enter-active,
  .panel-back-leave-active {
    transition: none;
  }
}
</style>
