<template>
  <Card
    :headerTitle="'Bootstrap Calendar'"
    :cardClass="'bootstrap-calendar'"
    :cardBodyClass="'card-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Bootstrap-datepicker provides a flexible datepicker widget in the bootstrap style.
      </p>
    </template>
    <div class="mb-3 row">
      <InputWrapper :title="'Date and Time'" :class="'col-md-3'">
        <div class="col-md-9">
          <InputField
            :inputId="'date-time'"
            :inputType="'datetime-local'"
            :required="false"
            v-model:modelValue="inputValues.dateTime"
          />
        </div>
      </InputWrapper>
    </div>
    <div class="mb-3 row">
      <InputWrapper :title="'Date'" :class="'col-sm-3'">
        <div class="col-sm-9">
          <InputField
            :inputId="'date'"
            :inputType="'date'"
            :required="false"
            v-model:modelValue="inputValues.date"
          />
        </div>
      </InputWrapper>
    </div>
    <div class="mb-3 row">
      <InputWrapper :title="'Month'" :class="'col-sm-3'">
        <div class="col-sm-9">
          <InputField
            :inputId="'date'"
            :inputType="'month'"
            :required="false"
            v-model:modelValue="inputValues.month"
          />
        </div>
      </InputWrapper>
    </div>
    <div class="mb-3 row">
      <InputWrapper :title="'Week'" :class="'col-sm-3'">
        <div class="col-sm-9">
          <InputField
            :inputId="'week'"
            :inputType="'week'"
            :required="false"
            v-model:modelValue="inputValues.week"
          />
        </div>
      </InputWrapper>
    </div>
    <div class="mb-3 row">
      <InputWrapper :title="'Time'" :class="'col-sm-3'">
        <div class="col-sm-9">
          <InputField
            :inputId="'time'"
            :inputType="'time'"
            :required="false"
            v-model:modelValue="inputValues.time"
          />
        </div>
      </InputWrapper>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue'

import { initInputField } from '@/core/data/common'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const inputValues = ref({
  dateTime: initInputField(),
  date: initInputField(),
  month: initInputField(),
  week: initInputField(),
  time: initInputField(),
})

onMounted(() => {
  const now = new Date()

  // 1. Full datetime (ISO string)
  const yyyy = now.getFullYear()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const hh = String(now.getHours()).padStart(2, '0')
  const mi = String(now.getMinutes()).padStart(2, '0')
  const ss = String(now.getSeconds()).padStart(2, '0')
  const dateTime = `${yyyy}-${mm}-${dd}T${hh}:${mi}:${ss}` // 'YYYY-MM-DDTHH:mm:ss'

  // 2. Date (YYYY-MM-DD)
  const date = now.toISOString().split('T')[0]

  // 3. Month (YYYY-MM)
  const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

  // 4. Week (YYYY-Www)
  function getISOWeekString(d: Date): string {
    const target = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    const day = target.getUTCDay() || 7
    target.setUTCDate(target.getUTCDate() + 4 - day)
    const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1))
    const diffInDays = (target.getTime() - yearStart.getTime()) / 86400000
    const weekNo = Math.ceil((diffInDays + 1) / 7)
    return `${target.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`
  }

  const week = getISOWeekString(now)

  // 5. Time (HH:mm:ss)
  const time = now.toTimeString().split(' ')[0]

  inputValues.value = {
    dateTime: { ...initInputField(), data: dateTime },
    date: { ...initInputField(), data: date },
    month: { ...initInputField(), data: month },
    week: { ...initInputField(), data: week },
    time: { ...initInputField(), data: time },
  }
})
</script>
