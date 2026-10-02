<template>
  <Card :headerTitle="'Time Picker'" :cardBodyClass="'main-flatpickr'">
    <template #header5>
      <p class="f-m-light mt-1">
        Flatpickr has numerous options that accept time values in a variety of formats. Those are.
      </p>
    </template>
    <div class="card-wrapper border rounded-3">
      <form class="timepicker-wrapper">
        <div class="row">
          <InputWrapper :title="'Time Picker'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group">
                <Flatpickr
                  class="form-control digits"
                  placeholder="hh:mm"
                  v-model="dateState.defaultTime"
                  :config="timeConfigs.timeConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'24-hour Time Picker'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group">
                <Flatpickr
                  class="form-control digits"
                  placeholder="hh:mm"
                  v-model="dateState.hourTimeConfig"
                  :config="timeConfigs.HourTimeConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Time Picker W/Limits'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group">
                <Flatpickr
                  class="form-control digits"
                  placeholder="hh:mm"
                  v-model="dateState.timeLimitConfig"
                  :config="timeConfigs.timeLimitConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Preloading Time'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group">
                <Flatpickr
                  class="form-control digits"
                  placeholder="dd-mm-yyyy"
                  v-model="dateState.preloadingConfig"
                  :config="timeConfigs.preloadingConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper
            :title="'TimePicker with Limited Time Range'"
            :class="'col-xxl-3 box-col-12 text-start'"
          >
            <div class="col-xxl-9 box-col-12">
              <div class="input-group">
                <Flatpickr
                  class="form-control digits"
                  placeholder="d-m-Y H:i"
                  v-model="dateState.dateTimeLimitConfig"
                  :config="timeConfigs.dateTimeLimitConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper
            :title="'TimePicker with Min/Max Time Range'"
            :class="'col-xxl-3 box-col-12 text-start'"
          >
            <div class="col-xxl-9 box-col-12">
              <div class="input-group">
                <Flatpickr
                  class="form-control digits"
                  placeholder="d-m-Y H:i"
                  v-model="dateState.minMaxTimeConfig"
                  :config="timeConfigs.minMaxTimeConfig"
                />
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="row">
          <InputWrapper :title="'Date With Time'" :class="'col-xxl-3 box-col-12 text-start'">
            <div class="col-xxl-9 box-col-12">
              <div class="input-group">
                <Flatpickr
                  class="form-control digits"
                  placeholder="d-m-Y H:i"
                  v-model="dateState.dateTimeConfig"
                  :config="timeConfigs.dateTimeConfig"
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

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)

const dateState = reactive({
  defaultTime: null as string | Date | null,
  hourTimeConfig: null as string | Date | null,
  timeLimitConfig: null as string | Date | null,
  preloadingConfig: null as string | Date | null,
  dateTimeLimitConfig: null as string | Date | null,
  minMaxTimeConfig: null as string | Date | null,
  dateTimeConfig: null as string | Date | null,
})
const timeConfigs = reactive({
  timeConfig: {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
  },
  HourTimeConfig: {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time24hr: true,
  },
  timeLimitConfig: {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    minTime: '16:00',
    maxTime: '22:30',
  },
  preloadingConfig: {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    defaultDate: '13:45',
  },
  dateTimeLimitConfig: {
    enableTime: true,
    minTime: '09:00',
    dateFormat: 'd-m-Y H:i',
  },
  minMaxTimeConfig: {
    enableTime: true,
    minTime: '16:00',
    maxTime: '22:00',
    dateFormat: 'd-m-Y H:i',
  },
  dateTimeConfig: {
    enableTime: true,
    dateFormat: 'd-m-Y H:i',
  },
})
</script>
