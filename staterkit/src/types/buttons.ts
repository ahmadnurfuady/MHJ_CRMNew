export interface ButtonGroup {
  id: number
  class?: string
  headTitle: string
  bodyClass?: string
  description?: string
  colClass?: string
  items: ButtonItem[]
  item?: ButtonItem[]
}

export interface ButtonItem {
  class: string
  text?: string
  icon?: string
  simpleIcon?: string
  title?: string
}

export interface ButtonGroupVariation {
  id: number
  headTitle: string
  class: string
  item: ButtonGroups[]
}

export interface ButtonGroups {
  class: string
  button: Item[]
}

export interface Item {
  id?: number
  class: string
  icon?: string
  text?: string
  title?: string
}

export interface Variations {
  id: number
  mainClass?: string
  class: string
}

export interface BlockButtonVariation {
  id: number
  title: string
  class: string
  buttons: ButtonItem[]
}

export interface ToolbarButton {
  class: string
  text: string
}

export interface ToolbarGroup {
  id: number
  ariaLabel: string
  buttons: ToolbarButton[]
}

export interface Ui {
  id: number
  for: string
  title: string
  checked?: boolean
}
