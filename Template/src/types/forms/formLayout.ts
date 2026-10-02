import type { CheckboxField, InputField, SelectField } from '../common'

export interface NumberingWizardTabs {
  id: number
  title: string
  value: string
  class: string
}

export interface VerticalValidation {
  id: number
  title: string
  value: string
  description: string
  icon: string
}

export interface CardInfo {
  id: string
  title: string
  checked: boolean
}

export interface NetBanking {
  row: number
  details: DetailsNetBanking[]
}

export interface DetailsNetBanking {
  id: string
  title: string
  checked: boolean
}

export interface ShippingForm {
  id: number
  title: string
  value: string
  icon: string
}

export interface ProductDetails {
  image: string
  alt: string
  title: string
  quantity: string
  price: number
}

export interface ProductTotal {
  title: string
  price: string
}

export interface NumberingWizardForm {
  basicInfo: NumberingWizardBasicInfo
  cardInfo: NumberingWizardCardInfo
  feedback: NumberingWizardFeedback
}

export interface NumberingWizardBasicInfo {
  email: InputField
  firstName: InputField
  password: InputField
  confirmPassword: InputField
  basicInfoAgreement: CheckboxField
}

export interface NumberingWizardCardInfo {
  placeholderName: InputField
  cardNumber: InputField
  expiration: InputField
  cvv: InputField
  uploadDocument: InputField
  isInformationCorrect: CheckboxField
}

export interface NumberingWizardFeedback {
  linkedIn: InputField
  github: InputField
  state: SelectField
  feedback: InputField
  feedbackAgreement: CheckboxField
}

export interface StudentValidationForm {
  personalInfo: StudentValidationPersonalInfo
  profile: StudentValidationProfile
  socialLinks: StudentValidationSocialLinks
}

export interface StudentValidationPersonalInfo {
  name: InputField
  email: InputField
  password: InputField
  confirmPassword: InputField
}

export interface StudentValidationProfile {
  profileImage: InputField
  profileUrl: InputField
  profileDescription: InputField
}

export interface StudentValidationSocialLinks {
  twitter: InputField
  github: InputField
  document: InputField
  position: SelectField
  whyThisPosition: InputField
}

export interface VerticalValidationForm {
  personalInfo: VerticalValidationPersonalInfo
  cardInfo: VerticalValidationCardInfo
  netBanking: VerticalValidationNetBanking
}

export interface VerticalValidationPersonalInfo {
  firstName: InputField
  lastName: InputField
  email: InputField
  state: SelectField
  zip: InputField
  contactNumber: InputField
  infoCondition: CheckboxField
}

export interface VerticalValidationCardInfo {
  paymentMethod: string
  recipientUsername: InputField
  username: InputField
  cardNumber: InputField
  expiration: InputField
  cvv: InputField
  document: InputField
  isCardInfoCorrect: CheckboxField
}

export interface VerticalValidationNetBanking {
  bank: string
  feedback: InputField
  isBankingCorrect: CheckboxField
}

export interface CustomWizard {
  personalInfo: CustomWizardPersonalInfo
  connectBankAccount: CustomWizardConnectBankAccount
  inquiries: CustomWizardInquiries
}

export interface CustomWizardPersonalInfo {
  firstName: InputField
  lastName: InputField
  email: InputField
  state: SelectField
  postalCode: InputField
  contactNumber: InputField
  infoAgreement: CheckboxField
}

export interface CustomWizardConnectBankAccount {
  aadharNumber: InputField
  panNumber: InputField
  bank: string[]
}

export interface CustomWizardInquiries {
  selectNotificationPlatform: string
  email: InputField
  contactNumber: InputField
  reason: InputField
}

export interface BusinessWizard {
  account: BusinessWizardAccount
  businessSetting: BusinessWizardBusinessSetting
  contactDetails: BusinessWizardContactDetails
  payDetails: BusinessWizardPayDetails
}

export interface BusinessWizardAccount {
  accountType: string
}

export interface BusinessWizardBusinessSetting {
  accountName: InputField
  email: InputField
  projectDescription: InputField
  project: string[]
}

export interface BusinessWizardContactDetails {
  organizationName: InputField
  email: InputField
  organizationType: SelectField
  organizationDescription: InputField
}

export interface BusinessWizardPayDetails {
  cardHolder: InputField
  cardNumber: InputField
  expiration: InputField
  cvv: InputField
  isInformationCorrect: CheckboxField
}
