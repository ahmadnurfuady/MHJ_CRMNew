export interface TouchSpin {
  id: number
  value: number
  color: string
}

export interface CustomSwitch {
  class: string
  value: boolean
}

export interface CommonSwitch {
  title: string
  class: string
  divClass?: string
  subDescription: string
  item: CommonSwitchItem[]
}

export interface CommonSwitchItem {
  colorClass: string
  text: string
  value: boolean
}

export interface DisabledOutlineSwitch {
  class: string
  value: boolean
}

export interface SwitchSizing {
  class: string
  text: string
  value: boolean
  disable: boolean
  divClass?: string
}

export interface SwitchIcon {
  class: string
  text: string
  value: boolean
  disable: boolean
}

export interface State {
  id: number
  name: string
}
