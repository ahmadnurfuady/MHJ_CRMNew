<template>
  <Card :headerTitle="'Checkbox'" :padding="false" :cardBodyClass="'p-0'">
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-bordered checkbox-td-width">
            <tbody>
              <tr>
                <td>Basic Checkbox</td>
                <td class="w-50">
                  <Checkbox :label="'Default'" :inputId="'basic-checkbox'" :required="false" />
                </td>
                <td>
                  <span>Basic Checkbox</span>
                </td>
              </tr>
              <tr>
                <td>Default Checkbox Square</td>
                <td>
                  <div class="checkbox m-squar">
                    <Checkbox :label="'Default'" :inputId="'default-checkbox'" :required="false" />
                  </div>
                </td>
                <td>
                  <span>Wrap with use <code>.m-squar</code> checkbox.</span>
                </td>
              </tr>
              <tr>
                <td>Basic Skin Check</td>
                <td>
                  <div class="checkbox checkbox-dark">
                    <Checkbox
                      :label="'Brand state'"
                      :inputId="'checkbox-state-dark'"
                      :required="false"
                    />
                  </div>
                </td>
                <td>
                  <span>Wrap with use<code> checkbox-dark</code> for this style of checkbox.</span>
                </td>
              </tr>
              <tr>
                <td>Flat Skin Check</td>
                <td>
                  <div class="checkbox checkbox-solid-primary">
                    <Checkbox
                      :label="'Checked'"
                      :inputId="'checked-checkbox'"
                      :required="false"
                      v-model:modelValue="checkedCheckbox"
                    />
                  </div>
                </td>
                <td>
                  <span
                    >Wrap with use<code> checkbox-solid-* </code
                    ><code>,primary, secondary, success, info, warning, danger</code> for this style
                    of checkbox.</span
                  >
                </td>
              </tr>
              <tr>
                <td>Disable Check</td>
                <td>
                  <div class="checkbox checkbox-solid-primary">
                    <Checkbox
                      :label="'Disabled'"
                      :inputId="'disabled-checkbox'"
                      :required="false"
                      :disabled="true"
                    />
                  </div>
                </td>
                <td>
                  <span
                    >Wrap with use<code> disabled </code
                    ><code>,primary, secondary, success, info, warning, danger</code> for this style
                    of checkbox disable.</span
                  >
                </td>
              </tr>
              <tr>
                <td>Inline Checkbox</td>
                <td>
                  <div class="form-group m-b-0 m-checkbox-inline">
                    <div class="checkbox checkbox-primary">
                      <Checkbox :label="'Option 1'" :inputId="'options-1'" :required="false" />
                    </div>
                    <div class="checkbox checkbox-secondary">
                      <Checkbox :label="'Option 2'" :inputId="'options-2'" :required="false" />
                    </div>
                    <div class="checkbox checkbox-success">
                      <Checkbox :label="'Option 3'" :inputId="'options-3'" :required="false" />
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    >Wrap with use <code>disabled </code
                    ><code>,primary, secondary, success, info, warning, danger</code> for this style
                    of checkbox disable.</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { initCheckboxField } from '@/core/data/common'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const checkedCheckbox = ref(initCheckboxField())

onMounted(() => {
  checkedCheckbox.value.data = true
})
</script>
