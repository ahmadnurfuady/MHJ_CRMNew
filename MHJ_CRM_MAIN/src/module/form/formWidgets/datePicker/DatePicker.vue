<template>
  <Card :headerTitle="'Date Picker'" :cardBodyClass="'main-flatpickr'">
    <template #header5>
      <p class="f-m-light mt-1">
        Flatpickr has numerous options that accept date values in a variety of formats. Those are.
      </p>
    </template>
    <div class="card-wrapper border rounded-3">
      <form class="timepicker-wrapper">
        <div class="row">
          <InputWrapper :title="'Default Date'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group flatpicker-calender">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.defaultDate"
                  :config="dateConfigs.dateConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Human Friendly'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group flatpicker-calender">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.humanFriendly"
                  :config="dateConfigs.humanFriendlyDateConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Min-Max Value'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group flatpicker-calender">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.minMaxDate"
                  :config="dateConfigs.minMaxDateConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Disabled Dates'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group flatpicker-calender">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.disabledDate"
                  :config="dateConfigs.disabledDateConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Multiples Dates'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group flatpicker-calender">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.multipleDate"
                  :config="dateConfigs.multipleDateConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper
            :title="'Customizing Conjunction'"
            :class="'col-xxl-3 box-col-12 text-start'"
          >
            <div class="col-xxl-9 box-col-12">
              <div class="input-group flatpicker-calender">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.conjunctionDate"
                  :config="dateConfigs.conjunctionDateConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Range'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group flatpicker-calender">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.rangeDate"
                  :config="dateConfigs.rangeDateConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Preloading Dates'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group flatpicker-calender">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.preLoadingDate"
                  :config="dateConfigs.preLoadingDateConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
      </form>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { reactive, defineAsyncComponent } from 'vue'

import { thisMonthStart, thisMonthEnd } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)

const date = new Date()
const dateState = reactive({
  defaultDate: null as string | Date | null,
  humanFriendly: null as string | Date | null,
  minMaxDate: null as string | Date | null,
  disabledDate: null as string | Date | null,
  multipleDate: null as string | Date | null,
  conjunctionDate: null as string | Date | null,
  rangeDate: null as string | Date | null,
  preLoadingDate: null as string | Date | null,
})

const dateConfigs = reactive({
  dateConfig: {
    dateFormat: 'd-m-Y',
  },
  humanFriendlyDateConfig: {
    altInput: true,
    altFormat: 'j F, Y',
    dateFormat: 'd-m-Y',
    allowInput: true,
  },
  minMaxDateConfig: {
    dateFormat: 'd.m.Y',
    minDate: new Intl.DateTimeFormat('de-DE').format(thisMonthStart),
    maxDate: new Intl.DateTimeFormat('de-DE').format(thisMonthEnd),
  },
  disabledDateConfig: {
    dateFormat: 'd-m-Y',
    disable: [
      new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
      new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
    ],
  },
  multipleDateConfig: {
    mode: 'multiple',
    dateFormat: 'd-m-Y',
  },
  conjunctionDateConfig: {
    mode: 'multiple',
    dateFormat: 'd-m-Y',
    conjunction: ' :: ',
  },
  rangeDateConfig: {
    mode: 'range',
    dateFormat: 'd-m-Y',
  },
  preLoadingDateConfig: {
    mode: 'range',
    dateFormat: 'd-m-Y',
    defaultDate: ['2016-10-10', '2016-10-20'],
  },
})
</script>
