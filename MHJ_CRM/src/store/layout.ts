import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { layout } from '@/core/data/layout'
import { useHead } from '@vueuse/head'

export const useLayout = defineStore('layout', () => {
  type LayoutType = 'ltr' | 'rtl' | 'box-layout'
  type MixLayoutType = 'light' | 'dark-sidebar' | 'dark-only'

  const layoutState = reactive({
    layouts: layout,
    boxLayout: true,
    customizer: '',
    svgIcon: 'stroke-svg',
    layoutType:
      (localStorage.getItem('layoutType') as LayoutType) ||
      (layout.settings.layoutType as LayoutType),

    theme: (localStorage.getItem('theme') as MixLayoutType) || 'light',
    sidebar: localStorage.getItem('SidebarType') || layout.settings.layout,
    primaryColor: localStorage.getItem('primary_color') || layout.color.primaryColor,
    secondaryColor: localStorage.getItem('secondary_color') || layout.color.secondaryColor,
    layoutVersion: localStorage.getItem('layoutVersion') || layout.color.layoutVersion,
  })

  useHead({
    htmlAttrs: computed(() => ({
      dir: layoutState.layoutType === 'rtl' ? 'rtl' : 'ltr',
    })),
    bodyAttrs: computed(() => ({
      class: `${layoutState.theme} ${layoutState.layoutVersion} ${layoutState.layoutType}`,
    })),
    style: computed(() => [
      {
        children: `
          :root {
            --theme-default: ${layoutState.primaryColor};
            --theme-secondary: ${layoutState.secondaryColor};
          }
        `,
      },
    ]),
  })

  function setTheme(val: MixLayoutType) {
    layoutState.theme = val
    localStorage.setItem('theme', val)
  }

  function setLayout(val: { class: string }) {
    layoutState.layoutVersion = val.class
    localStorage.setItem('layoutVersion', val.class)
  }

  function openCustomizer(value: string) {
    layoutState.customizer = value
  }

  function setSvg(svg: string) {
    layoutState.svgIcon = svg
    layoutState.layouts.settings.sidebarIcon = svg
  }

  function setLayoutType(val: LayoutType) {
    layoutState.layoutType = val
    layoutState.layouts.settings.layoutType = val
    localStorage.setItem('layoutType', val)
  }

  function setCustomizeSidebarType(val: string) {
    layoutState.sidebar = val
    layoutState.layouts.settings.layout = val
    localStorage.setItem('SidebarType', val)
  }

  function addStyle(primary: string, secondary: string) {
    layoutState.primaryColor = primary
    layoutState.secondaryColor = secondary
    layout.color.primaryColor = primary
    layout.color.secondaryColor = secondary
    localStorage.setItem('primary_color', primary)
    localStorage.setItem('secondary_color', secondary)
  }

  function setColorScheme(color: { primary: string; secondary: string }) {
    addStyle(color.primary, color.secondary)
    layoutState.layoutVersion = 'light'
    localStorage.setItem('layoutVersion', 'light')
  }

  return {
    layoutState,
    setTheme,
    setLayout,
    openCustomizer,
    setSvg,
    setLayoutType,
    setCustomizeSidebarType,
    setColorScheme,
    addStyle,
  }
})
