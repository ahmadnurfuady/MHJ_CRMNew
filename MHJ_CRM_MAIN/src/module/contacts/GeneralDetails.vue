<template>
  <template v-if="contactState.activeContact">
    <div class="d-flex">
      <img
        class="img-100 img-fluid m-r-20 rounded-circle update_img_0"
        :src="getImages(contactState.activeContact.profile)"
        :alt="contactState.activeContact.firstName"
      />
      <input class="updateimg" type="file" name="img" accept="image/*" />
      <div class="flex-grow-1 mt-0">
        <h5>
          <span class="firstName_0">{{ contactState.activeContact.firstName }} </span
          ><span class="last_name_0">{{ contactState.activeContact.lastName }}</span>
        </h5>
        <p class="email_add_0">
          {{ contactState.activeContact.email }}
        </p>
        <ul class="main-contact-option">
          <li>
            <a href="#" @click.prevent="editContact()">Edit</a>
          </li>
          <li>
            <a href="#" @click.prevent="deleteContact()">Delete</a>
          </li>
          <li>
            <a href="#" @click.prevent="showHistory()">History</a>
          </li>
          <li>
            <a href="#" @click.prevent="printContact()">Print</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="email-general">
      <h6 class="mb-3">General</h6>
      <ul>
        <li>
          Name
          <span class="font-primary firstName_0">{{ contactState.activeContact.firstName }}</span>
        </li>
        <li>
          Gender
          <span class="font-primary">{{ contactState.activeContact.gender }}</span>
        </li>
        <li>
          Birthday
          <span class="font-primary"> {{ contactState.activeContact.dob }}</span>
        </li>
        <li>
          personality
          <span class="font-primary personality_0">{{
            contactState.activeContact.personality
          }}</span>
        </li>
        <li>
          City
          <span class="font-primary city_0">{{ contactState.activeContact.city }}</span>
        </li>
        <li>
          Mobile No
          <span class="font-primary mobile_num_0"
            >{{ contactState.activeContact.contactNumber }}5</span
          >
        </li>
        <li>
          Email Address
          <span class="font-primary email_add_0">{{ contactState.activeContact.email }} </span>
        </li>
        <li>
          website
          <span class="font-primary url_add_0">{{ contactState.activeContact.website }}</span>
        </li>
        <li>
          interest
          <span class="font-primary interest_0">{{ contactState.activeContact.interest }}</span>
        </li>
      </ul>
    </div>
  </template>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useContact } from '@/store/contact'
import { getImages } from '@/utils/index'
const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)

const { editContact, deleteContact, showHistory, printContact } = contactStore
</script>
