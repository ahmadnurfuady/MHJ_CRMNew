<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'AJAX Request Alert'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to prompt the user for their GitHub username, fetch their profile
        information from the GitHub API, and display their avatar if the lookup is successful.
      </p>
    </template>
    <button class="btn btn-warning sweet-10" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

function open() {
  Swal.fire({
    title: 'Submit your Github username',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: async (login) => {
      try {
        const githubUrl = `
            https://api.github.com/users/${login}
          `
        const response = await fetch(githubUrl)
        if (!response.ok) {
          return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `)
        }
        return response.json()
      } catch (error) {
        Swal.showValidationMessage(`
            Request failed: ${error}
          `)
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatarUrl,
      })
    }
  })
}
</script>
