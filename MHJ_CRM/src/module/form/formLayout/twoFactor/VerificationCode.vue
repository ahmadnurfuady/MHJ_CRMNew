<template>
  <div class="card-wrapper border rounded-3 h-100">
    <div class="authenticate">
      <h5 class="pb-2">Verification Code</h5>
      <img class="img-fluid" :src="getImages('forms/authenticate.png')" alt="authenticate" />
      <span>We've sent a verification code to</span>
      <span>+91********70</span>
      <form class="row">
        <div class="col">
          <h5>Your OTP Code here:</h5>
        </div>
        <div class="col otp-generate">
          <input
            v-for="(digit, index) in otpDigits"
            :key="index"
            type="text"
            class="form-control code-input"
            maxlength="1"
            v-model="otpDigits[index]"
            @input="handleInput(index)"
            @keydown="handleKeyDown(index, $event)"
            ref="inputs"
          />
        </div>
        <div class="col">
          <button class="btn btn-primary w-100" type="submit">Verify</button>
        </div>
        <div>
          <span>Not received your code?</span>
          <span>
            <a href="#">Resend </a>
            OR
            <a href="#">Call </a>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getImages } from '@/utils'

const otpDigits = ref<string[]>(Array(6).fill(''))

// Reference to the input fields for focus management
const inputs = ref<HTMLInputElement[]>([])

// Handle input to move to the next field
const handleInput = (index: number): void => {
  if (otpDigits.value[index].match(/^[0-9]$/)) {
    // Move to the next field if the input is a single digit
    if (index < otpDigits.value.length - 1) {
      inputs.value[index + 1].focus()
    }
  } else {
    // Clear the field if the input is invalid
    otpDigits.value[index] = ''
  }
}

// Handle key down to allow moving to the previous field with backspace
const handleKeyDown = (index: number, event: KeyboardEvent): void => {
  if (event.key === 'Backspace' && otpDigits.value[index] === '' && index > 0) {
    inputs.value[index - 1].focus() // Move focus to the previous field
  }
}
</script>
