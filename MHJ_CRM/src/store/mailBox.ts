import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { emails, emailSidebar } from '@/core/data/mailBox'
import type { Email, MailState } from '@/types/mailBox'

export const useMailBox = defineStore('mailBox', () => {
  const mailState = reactive<MailState>({
    activeTab: 'inbox',
    emailType: 'important',
    emailList: emails,
    sidebar: emailSidebar,
    isOpenMail: false,
    currentMailDetails: undefined,
  })

  function getTotalEmails() {
    mailState.sidebar.forEach((item) => {
      if (item.value == 'inbox') {
        item.count = mailState.emailList.filter((email) => !email.isTrash).length
      } else if (item.value == 'starred') {
        item.count = mailState.emailList.filter(
          (email) => email.isFavorite && !email.isTrash
        ).length
      } else if (item.value == 'draft') {
        item.count = mailState.emailList.filter((email) => email.isDraft && !email.isTrash).length
      } else if (item.value == 'trash') {
        item.count = mailState.emailList.filter((email) => email.isTrash).length
      }
    })
  }

  const getFilteredEmails = computed(() => {
    const list = mailState.emailList ?? []
    if (mailState.activeTab == 'inbox') {
      return list.filter((email) => !email.isTrash && email.emailType == mailState.emailType)
    } else if (mailState.activeTab == 'sent') {
      return list.filter(
        (email) => email.isSend && !email.isTrash && email.emailType == mailState.emailType
      )
    } else if (mailState.activeTab == 'starred') {
      return list.filter(
        (email) => email.isFavorite && !email.isTrash && email.emailType == mailState.emailType
      )
    } else if (mailState.activeTab == 'draft') {
      return list.filter(
        (email) => email.isDraft && !email.isTrash && email.emailType == mailState.emailType
      )
    } else if (mailState.activeTab == 'trash') {
      return list.filter((email) => email.isTrash && email.emailType == mailState.emailType)
    }
    return []
  })

  function addToFavorite(email: Email) {
    email.isFavorite = !email.isFavorite
    getTotalEmails()
  }

  function deleteMail(email: Email) {
    if (!email.isTrash) {
      email.isTrash = true
    } else {
      mailState.emailList = mailState.emailList.filter((emails) => emails.id !== email.id)
    }
    getTotalEmails()
  }

  function openEmail(email: Email) {
    mailState.isOpenMail = true
    mailState.currentMailDetails = email
  }

  function handleMailDetails(value: boolean) {
    mailState.isOpenMail = value
  }

  return {
    mailState,

    getTotalEmails,
    getFilteredEmails,
    addToFavorite,
    deleteMail,
    openEmail,
    handleMailDetails,
  }
})
