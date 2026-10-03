import { reactive, computed } from 'vue'

import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

import { initInputField, initSelectField } from '@/core/data/common'
import { contacts, contactSidebarList } from '@/core/data/contacts'
import type { Contact, ContactSidebarList, ContactState } from '@/types/contacts'
import { resetForm } from '@/utils/index'
import { validateForm } from '@/utils/validators/formValidators'

export const useContact = defineStore('contact', () => {
  const contactState = reactive<ContactState>({
    tabList: contactSidebarList,
    activeTab: contactSidebarList[0]?.value || '',
    currentTab: contactSidebarList[0],
    activeContact: undefined as Contact | undefined,
    contactList: contacts,
    isEditContact: false,
    historyVisible: false,
    openPrintContactModal: false,
    openAddContactModal: false,
    openCategoryModal: false,
    formSubmitted: false,

    contactForm: {
      firstName: initInputField(),
      lastName: initInputField(),
      email: initInputField(),
      contactNumber: initInputField(),
      contactType: initSelectField(),
    },
  })

  function initStore() {
    handleActiveTab(contactState.tabList[0])
  }

  function handleActiveTab(tab: ContactSidebarList) {
    if (tab.value) {
      contactState.activeTab = tab.value
    }

    contactState.currentTab = tab

    const currentTabContact = filteredContact.value

    if (currentTabContact) {
      contactState.activeContact = currentTabContact[0]
    }
  }

  const filteredContact = computed(() => {
    const contacts = contactState.contactList

    if (contactState.currentTab.value && contactState.currentTab.value) {
      const value = contactState.currentTab.value
      return contacts.filter((contact) => contact.category == value)
    }

    return []
  })

  function handleContact(contact: Contact) {
    contactState.activeContact = contact
  }

  function editContact() {
    contactState.isEditContact = true
  }

  function deleteContact() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This contact will be deleted from your personal contacts and from the chat list too.',
      icon: 'warning',
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      cancelButtonText: 'No, keep it',
      cancelButtonColor: '#898989',
    }).then((result) => {
      if (result.isConfirmed) {
        const deletedIndex = filteredContact.value?.findIndex(
          (contact) =>
            contact.id === (contactState.activeContact ? contactState.activeContact.id : 1)
        )

        contactState.contactList = contactState.contactList.filter(
          (contact) =>
            contact.id !== (contactState.activeContact ? contactState.activeContact.id : 1)
        )

        const updatedContacts = filteredContact.value

        if (updatedContacts && updatedContacts.length > 0) {
          if (deletedIndex && deletedIndex >= updatedContacts.length) {
            contactState.activeContact = updatedContacts[0]
          } else {
            if (deletedIndex) {
              contactState.activeContact = updatedContacts[deletedIndex]
            } else {
              contactState.activeContact = updatedContacts[0]
            }
          }
        }
      }
    })
  }

  function showHistory() {
    contactState.historyVisible = true
  }

  function printContact() {
    contactState.openPrintContactModal = true
  }

  function openContactModal() {
    contactState.openAddContactModal = true
  }

  function saveContact() {
    contactState.formSubmitted = true

    const { isValid, formData } = validateForm(contactState.contactForm)

    if (isValid) {
      const newContact: Contact = {
        id: Math.floor(Math.random() * 999) + 1,
        firstName: formData.firstName as string,
        lastName: formData.lastName as string,
        profile: 'user/user.png',
        gender: 'Male',
        dob: '10 Aug 1995',
        personality: 'Cool',
        city: 'Surat',
        contactNumber: formData.contact_number as string,
        email: formData.email as string,
        website: 'www.ivan.com',
        interest: 'Dancer',
        category: 'personal',
        contactType: formData.contact_type as string,
      }

      if (filteredContact.value && filteredContact.value?.length == 0) {
        contactState.activeContact = newContact
      }

      contactState.contactList.push(newContact)
      contactState.openAddContactModal = false
      contactState.contactForm = resetForm(contactState.contactForm)
    }
  }

  return {
    contactState,

    initStore,
    handleActiveTab,
    filteredContact,
    handleContact,
    editContact,
    deleteContact,
    showHistory,
    printContact,
    openContactModal,
    saveContact,
  }
})
