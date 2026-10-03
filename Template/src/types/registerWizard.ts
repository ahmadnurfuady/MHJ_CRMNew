import type { InputField, SelectField } from './common'

export interface RegisterWizardForm {
  personalInfo: RegisterPersonalInfo
  accountInfo: RegisterAccountInfo
  identityInfo: RegisterIdentityInfo
  addressInfo: RegisterAddressInfo
}

export interface RegisterPersonalInfo {
  firstName: InputField
  lastName: InputField
  contact: InputField
}

export interface RegisterAccountInfo {
  email: InputField
  password: InputField
  confirmPassword: InputField
}

export interface RegisterIdentityInfo {
  dob: InputField
  age: InputField
  havePassword: SelectField
}

export interface RegisterAddressInfo {
  country: SelectField
  state: SelectField
  city: SelectField
}
