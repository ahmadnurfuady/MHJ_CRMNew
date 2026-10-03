<template>
  <Card
    :headerTitle="'Variation of Addons'"
    :border="true"
    :padding="false"
    :cardBodyClass="'card-wrapper input-radius'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Place one add-on or button on either side of an input. You may also place one on both sides
        of an input. Remember to place <code>&lt;label&gt;</code>s outside the input group.
      </p>
    </template>
    <div class="row">
      <div class="col">
        <form>
          <div class="mb-3 m-form__group">
            <label class="form-label">Left Addon</label>
            <div class="input-group">
              <span class="input-group-text bg-light-primary">
                <i class="icofont icofont-pencil-alt-5 txt-primary"></i>
              </span>
              <InputField :inputId="'email'" :placeholder="'Email'" :required="false" />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Right Addon</label>
            <div class="input-group">
              <InputField
                :inputId="'recipient-username'"
                :placeholder="'Recipient\'s username'"
                :required="false"
              />
              <span class="input-group-text bg-light-secondary">
                <i class="icofont icofont-ui-dial-phone txt-secondary"> </i>
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Joint Addon</label>
            <div class="input-group">
              <span class="input-group-text bg-light-primary">
                <i class="icofont icofont-unlink txt-primary"></i>
              </span>
              <span class="input-group-text">0.00 </span>
              <InputField :inputId="'joint-addon'" :isPlaceholder="false" :required="false" />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Left & Right Addon</label>
            <div class="input-group mb-3">
              <span class="input-group-text bg-light-secondary">
                <i class="icofont icofont-ui-zoom-out txt-secondary"></i>
              </span>
              <InputField :inputId="'left-right-addon'" :isPlaceholder="false" :required="false" />
              <span class="input-group-text bg-light-secondary">
                <i class="icofont icofont-ui-zoom-in txt-secondary"></i>
              </span>
            </div>
          </div>
          <div class="mb-3 input-group-solid">
            <label class="form-label">Solid Style</label>
            <div class="input-group">
              <span class="input-group-text bg-light-primary">
                <i class="icofont icofont-users txt-primary"></i>
              </span>
              <InputField
                :inputId="'solid-style-field'"
                :placeholder="'999999'"
                :required="false"
              />
            </div>
          </div>
          <div class="mb-3 input-group-square">
            <label class="form-label">Flat Style</label>
            <div class="input-group">
              <span class="input-group-text bg-light-secondary">
                <i class="icofont icofont-credit-card txt-secondary"></i>
              </span>
              <InputField :inputId="'flat-style-field'" :isPlaceholder="false" :required="false" />
            </div>
          </div>
          <div class="mb-3 input-group-square">
            <label class="form-label">Raise Style</label>
            <div class="input-group">
              <span class="input-group-text bg-light-primary">
                <i class="icofont icofont-download txt-primary"></i>
              </span>
              <InputField
                :inputId="'raise-style-field'"
                :placeholder="'https://www.example.com'"
                :required="false"
                :class="'input-group-air'"
              />
            </div>
          </div>
          <div>
            <label class="form-label">Left & Right Addon</label>
            <div class="input-group pill-input-group">
              <span class="input-group-text bg-light-secondary">
                <i class="icofont icofont-ui-copy txt-secondary"></i>
              </span>
              <InputField :inputId="'left-right-addon'" :isPlaceholder="false" :required="false" />
              <span class="input-group-text bg-light-secondary">
                <i class="icofont icofont-stock-search txt-secondary"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
    <template #details>
      <div class="card-footer">
        <button class="btn btn-primary m-r-15" type="submit">Submit</button>
        <button class="btn btn-light" type="submit">Cancel</button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
