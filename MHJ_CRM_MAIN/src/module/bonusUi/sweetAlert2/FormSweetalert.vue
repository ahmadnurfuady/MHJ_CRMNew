<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Registration Form'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to create a custom registration form with email, password,
        country selection, gender radio buttons, and a checkbox for terms and conditions.
      </p>
    </template>

    <button class="btn btn-primary sweet-20" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

async function open() {
  const { value: formValues } = await Swal.fire({
    title: 'Registration Form',
    html: `
        <div class="swal2-wrapper custom-input">
          <div class="mb-3">
            <label for="swal-input-email" class="form-label">Email Address:</label>
            <input id="swal-input-email" class="swal2-input form-control" placeholder="Enter your email address">
          </div>
          <div class="mb-3">
            <label for="swal-input-password" class="form-label">Your Password:</label>
            <input type="password" id="swal-input-password" class="swal2-input form-control" placeholder="Enter your password">
          </div>
          <div class="swal2-select">
            <label for="swal-input-select">Select Country:</label>
            <select id="swal-input-select" class="swal2-input form-select">
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="Africa">Africa</option>
            </select>
          </div>
          <div class="swal2-genders">
            <label for="swal-input-radio">Gender:</label>
            <div id="swal-input-radio" class="swal2-radio-group">
              <input type="radio" id="radio-male" class="form-check-input checkbox-primary mt-0" name="swal-radio" value="Male">
              <label for="radio-male" class="mb-0">Male</label>
              <input type="radio" id="radio-female" class="form-check-input checkbox-primary ms-2 mt-0" name="swal-radio" value="Female">
              <label for="radio-female" class="mb-0">Female</label>
            </div>
          </div>
          <div class="swal2-checkbox justify-content-start">
            <input type="checkbox" id="swal-input-accept" class="form-check-input checkbox-primary mx-0">
            <label for="swal-input-accept" class="f-16 mx-0 mb-0">I accept the terms and conditions.</label>
          </div>
        </div>`,
    focusConfirm: false,
    preConfirm: () => {
      const email = (document.getElementById('swal-input-email') as HTMLInputElement)?.value
      const password = (document.getElementById('swal-input-password') as HTMLInputElement)?.value
      const country = (document.getElementById('swal-input-select') as HTMLSelectElement)?.value
      const gender = (
        document.querySelector('input[name="swal-radio"]:checked') as HTMLInputElement
      )?.value
      const accept = (document.getElementById('swal-input-accept') as HTMLInputElement)?.checked

      return [email, password, country, gender, accept]
    },
  })

  if (formValues) {
    const [email, password, country, gender, accept] = formValues
    Swal.fire(`
        Entered Email:  ${email}
        Entered Password:  ${password}
        Selected Country:  ${country}
        Selected Gender :  ${gender}
        Agreed with T&C:  ${accept ? 'Yes' : 'No'}
      `)
  }
}
</script>
