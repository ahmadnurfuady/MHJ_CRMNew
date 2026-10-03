import { defaultAppearance } from '@/config/appearance'

export interface LayoutSettings {
  layoutType: string
  layout: string
  sidebarIcon: string
  sidebarSetting: string
}

export interface LayoutColor {
  layoutVersion: string
  primaryColor: string
  secondaryColor: string
  fontFamily: string
}

export interface LayoutConfig {
  settings: LayoutSettings
  color: LayoutColor
}

export const layout: LayoutConfig = {
  settings: {
    layoutType: 'ltr',
    layout: 'default',
    sidebarIcon: 'stroke-svg',
    sidebarSetting: 'compact-wrapper',
  },
  color: {
    layoutVersion: 'light',
    primaryColor: defaultAppearance.primaryColor,
    secondaryColor: defaultAppearance.secondaryColor,
    fontFamily: defaultAppearance.fontFamily,
  },
}
