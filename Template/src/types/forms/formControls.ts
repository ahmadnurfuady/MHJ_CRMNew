import type { CheckboxField } from '../common'

export interface DefaultCheckbox {
  id: number
  title: string
  details: Details[]
}

export interface Details {
  label: string
  checked: boolean
  id: string
  disable: boolean
  model: CheckboxField
  reverseLabel?: boolean
}

export interface BorderCheckbox {
  class: string
  id: string
  label: string
  checked: boolean
  model: CheckboxField
}

export interface IconsCheckbox {
  label: string
  id: string
  icon: string
  checked: boolean
  model: CheckboxField
}

export interface FilledCheckbox {
  class: string
  label: string
  checked: boolean
  id: string
  model: CheckboxField
}

export interface DefaultRadio {
  id: number
  title: string
  selectedValue: string
  details: RadioDetails[]
}

export interface RadioDetails {
  id: string
  label: string
  name: string
  checked: boolean
  disable: boolean
  reverseLabel?: boolean
}

export interface ImageCheckbox {
  id: number
  title: string
  image: string
  checked: boolean
  disabled: boolean
}

export interface ImageRadio {
  id: number
  title: string
  image: string
  value: string
  checked: boolean
  disabled: boolean
}

export interface BorderRadio {
  label: string
  checked: boolean
  class: string
  id: string
}

export interface IconsRadio {
  label: string
  icon: string
  checked: boolean
  id: string
}

export interface FilledRadio {
  class: string
  label: string
  checked: boolean
  id: string
}

export interface DefaultSwitch {
  id: number
  title: string
  class: string
  reverseLabel?: boolean
  details: SwitchDetails[]
}

export interface SwitchDetails {
  label: string
  checked: boolean
  id: string
  disable: boolean
}

export interface InlineCheckbox {
  id: string
  label: string
  checked: boolean
  disable: boolean
  model: CheckboxField
}

export interface InlineRadio {
  id: string
  value: string
  label: string
  checked: boolean
  disable: boolean
}

export interface InlineSwitch {
  id: string
  value: string
  checked: boolean
  disable: boolean
}

export interface PaymentDetails {
  label: string
  checked: boolean
  class: string
  id: string
}

export interface SocialMedia {
  label: string
  checked: boolean
  class: string
  id: string
}

export interface BasicCheckbox {
  label: string
  checked: boolean
  id: string
  model: CheckboxField
}

export interface SimpleRadio {
  label: string
  checked: boolean
  id: string
}

export interface RadioToggle {
  id: string
  label: string
  checked: boolean
  disabled: boolean
}

export interface OutlineCheckbox {
  id: string
  class: string
  type: string
  label: string
  checked: boolean
  disabled: boolean
}

export interface VariationRadio {
  class: string
  subTitle: string
  details: VariationRadioDetails[]
}

export interface VariationRadioDetails {
  id: string
  label: string
  image?: string
  name: string
  checked: boolean
  icon?: string
  class?: string
}

export interface DefaultStyle {
  id: string
  name: string
  value: string
  label: string
  badge: string
  description: string
  badgeClass: string
  radioClass: string
}

export interface WithoutBorderStyle {
  id: string
  type: string
  checked: boolean
  price: string
  speed: string
  badgeClass: string
  description: string
  checkboxClass: string
}

export interface InlineStyle {
  label: string
  title: string
  digit: string
  class: string
  id: string
}

export interface VerticalStyle {
  title: string
  selectedValue: string
  details: VerticalStyleDetail[]
}

export interface VerticalStyleDetail {
  label?: string
  title: string
  digit: string
  class?: string
  divClass?: string
  id: string
  checked: boolean
  rating?: number
  name: string
  badgeClass?: string
  description?: string
  value: string
}

export interface SolidBorderStyle {
  id: string
  name: string
  value: string
  imageSrc: string
  imageAlt: string
  description: string
}

export interface OfferStyleBorder {
  id: string
  type: string
  checked: boolean
  imageSrc: string
  imageAlt: string
  description: string
}

export interface CheckBox {
  label: string
  id: string
  class: string
  checked: boolean
}

export interface ThemeSales {
  list: string
  sales: string
  checked: boolean
}

export interface product {
  items: string
  price: number | null
  qty: number | null
  totalPrice: number | null
}
