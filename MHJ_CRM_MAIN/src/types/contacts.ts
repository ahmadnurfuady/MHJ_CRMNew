import type { InputField, SelectField } from './common'

export interface ContactSidebarList {
  id: number
  title: string
  value?: string
}

export interface Contact {
  id: number
  firstName: string
  lastName: string
  profile: string
  gender: string
  dob: string
  personality: string
  city: string
  contactNumber: string
  email: string
  website: string
  interest: string
  category: string
  contactType: string
}

export interface ContactForm {
  firstName: InputField
  lastName: InputField
  email: InputField
  contactNumber: InputField
  contactType: SelectField
}

export interface ContactState {
  tabList: ContactSidebarList[]
  activeTab: string
  currentTab: ContactSidebarList
  activeContact: Contact | undefined
  contactList: Contact[]
  isEditContact: boolean
  historyVisible: boolean
  openPrintContactModal: boolean
  openAddContactModal: boolean
  openCategoryModal: boolean
  formSubmitted: boolean
  contactForm: ContactForm
}

export interface ContactFormState {
  firstName: InputField
  lastName: InputField
  email: InputField
  contactNumber: InputField
  contactType: SelectField
  gender: string
  dob: InputField
  personality: InputField
  interest: InputField
  city: InputField
}
