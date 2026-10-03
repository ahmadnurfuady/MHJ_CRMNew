import type { TableColumn } from './common'

export interface Border {
  class?: string
  color?: string
  position?: string
}

export interface BorderProps {
  title?: string
  class?: string
  details?: Border[]
  color?: boolean
  text?: boolean
  backgroundColor?: boolean
  helperText?: string
}

export interface ImageBadge {
  profile: string
  color: string
  text: string
}

export interface MaterialTab {
  id: number
  title: string
  value: string
  icon: string
  displayedColumns: TableColumn[]
  details: TabDetails[]
}

export interface TabDetails {
  [key: string]: string | number
}

export interface BadgeIcon {
  icon: string
}

export interface Modals {
  simpleModalOpen: boolean
  scrollingModalOpen: boolean
  tooltipModalOpen: boolean
  rihoModalOpen: boolean
  centeredModal: boolean
  connectAccountModal: boolean
  logoutModal: boolean
  staticBackdrop: boolean
  gridModal: boolean
  scrollingContentModal: boolean
  profileModal: boolean
  resultModal: boolean
  balanceModal: boolean
}

export interface SizeModal {
  title: string
  sizeClass: string
}

export interface SizeAvatar {
  id: number
  profile: string
  sizeClass: string
}

export interface StatusIndicatorAvatar {
  id: number
  profile: string
  sizeClass: string
  status: 'success' | 'warning' | 'danger'
}

export interface ShapeAvatar {
  id: number
  profile: string
  class: string
}

export interface RatioAvatar {
  id: number
  profile: string
  class: string
}

export interface GroupAvatar {
  id: number
  group: {
    id: number
    profile: string
    class: string
  }[]
}

export interface BadgeIndicatorAvatar {
  id: number
  profile: string
  class: string
  badgeText: string
  badgeColor: string
  badgeClass: string
}

export interface LetterAvatar {
  id: number
  profileText: string
  color: string
}

export interface AnimatedAvatar {
  id: number
  profile: string
  status: string
  class: string
}

export interface OffcanvasDetails {
  title: string
  direction: string
  backdrop?: boolean
  scroll?: boolean
  outsideClose?: boolean
}

export interface Employee {
  name: string
  profile: string
  contact: string
  designation: 'web-designer' | 'ux-designer' | 'iot-developer'
}

export interface BackgroundPillDetail {
  image: string
}

export interface BackgroundPillTab {
  value: 'sofa' | 'chairs' | 'tables'
  details: BackgroundPillDetail[]
}

export interface BottomTab {
  id: number
  title: string
  value: 'css' | 'vendors' | 'javascript'
  image: string
}
