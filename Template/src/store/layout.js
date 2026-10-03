import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import { layout } from '@/core/data/layout';
import { useHead } from '@vueuse/head';
import { appearanceStorageKeys, createAppearancePalette, defaultAppearance, getFontOption, } from '@/config/appearance';
export const useLayout = defineStore('layout', () => {
    const layoutState = reactive({
        layouts: layout,
        boxLayout: true,
        customizer: '',
        svgIcon: 'stroke-svg',
        layoutType: localStorage.getItem('layoutType') ||
            layout.settings.layoutType,
        theme: localStorage.getItem('theme') || 'light',
        sidebar: localStorage.getItem('SidebarType') || layout.settings.layout,
        primaryColor: localStorage.getItem(appearanceStorageKeys.primaryColor) || layout.color.primaryColor,
        secondaryColor: localStorage.getItem(appearanceStorageKeys.secondaryColor) || layout.color.secondaryColor,
        fontFamily: getFontOption(localStorage.getItem(appearanceStorageKeys.fontFamily) || layout.color.fontFamily).value,
        layoutVersion: localStorage.getItem('layoutVersion') || layout.color.layoutVersion,
    });
    const appearancePalette = computed(() => createAppearancePalette(layoutState.primaryColor, layoutState.secondaryColor));
    const selectedFont = computed(() => getFontOption(layoutState.fontFamily));
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
            --app-primary: ${appearancePalette.value.primary};
            --app-primary-rgb: ${appearancePalette.value.primaryRgb};
            --app-primary-hover: ${appearancePalette.value.primaryHover};
            --app-primary-dark: ${appearancePalette.value.primaryDark};
            --app-primary-dark-rgb: ${appearancePalette.value.primaryDarkRgb};
            --app-primary-soft: ${appearancePalette.value.primarySoft};
            --app-primary-soft-light: ${appearancePalette.value.primarySoftLight};
            --app-primary-strong: ${appearancePalette.value.primaryStrong};
            --app-primary-strong-rgb: ${appearancePalette.value.primaryStrongRgb};
            --app-primary-deep: ${appearancePalette.value.primaryDeep};
            --app-primary-border: ${appearancePalette.value.primaryBorder};
            --app-primary-wash: ${appearancePalette.value.primaryWash};
            --app-secondary: ${appearancePalette.value.secondary};
            --app-secondary-rgb: ${appearancePalette.value.secondaryRgb};
            --app-font-family: ${selectedFont.value.cssFamily};
            --theme-default: var(--app-primary);
            --theme-secondary: var(--app-secondary);
            --color-primary: var(--app-primary);
            --color-primary-hover: var(--app-primary-hover);
            --color-primary-dark: var(--app-primary-dark);
            --color-primary-soft: var(--app-primary-soft);
            --color-primary-sky: var(--app-primary-soft-light);
            --color-primary-strong: var(--app-primary-strong);
            --color-primary-deep: var(--app-primary-deep);
            --color-primary-border: var(--app-primary-border);
            --color-primary-wash: var(--app-primary-wash);
            --color-secondary-cyan: var(--app-secondary);
            --bg-sidebar: var(--app-primary);
            --font-family: var(--app-font-family);
            --bs-primary: var(--app-primary);
            --bs-primary-rgb: var(--app-primary-rgb);
            --bs-link-color: var(--app-primary);
            --bs-link-color-rgb: var(--app-primary-rgb);
            --bs-link-hover-color: var(--app-primary-dark);
            --bs-link-hover-color-rgb: var(--app-primary-dark-rgb);
            --bs-success: var(--app-primary-strong);
            --bs-success-rgb: var(--app-primary-strong-rgb);
            --bs-info: var(--app-primary-dark);
            --bs-info-rgb: var(--app-primary-dark-rgb);
            --bs-body-font-family: var(--app-font-family);
            --bs-progress-bar-bg: var(--app-primary);
          }
        `,
            },
        ]),
    });
    function setTheme(val) {
        layoutState.theme = val;
        localStorage.setItem('theme', val);
    }
    function setLayout(val) {
        layoutState.layoutVersion = val.class;
        localStorage.setItem('layoutVersion', val.class);
    }
    function openCustomizer(value) {
        layoutState.customizer = value;
    }
    function setSvg(svg) {
        layoutState.svgIcon = svg;
        layoutState.layouts.settings.sidebarIcon = svg;
    }
    function setLayoutType(val) {
        layoutState.layoutType = val;
        layoutState.layouts.settings.layoutType = val;
        localStorage.setItem('layoutType', val);
    }
    function setCustomizeSidebarType(val) {
        layoutState.sidebar = val;
        layoutState.layouts.settings.layout = val;
        localStorage.setItem('SidebarType', val);
    }
    function addStyle(primary, secondary) {
        layoutState.primaryColor = primary;
        layoutState.secondaryColor = secondary;
        layout.color.primaryColor = primary;
        layout.color.secondaryColor = secondary;
        localStorage.setItem(appearanceStorageKeys.primaryColor, primary);
        localStorage.setItem(appearanceStorageKeys.secondaryColor, secondary);
    }
    function setFontFamily(fontFamily) {
        const selected = getFontOption(fontFamily);
        layoutState.fontFamily = selected.value;
        layout.color.fontFamily = selected.value;
        localStorage.setItem(appearanceStorageKeys.fontFamily, selected.value);
    }
    function setAppearance(appearance) {
        addStyle(appearance.primary, appearance.secondary);
        setFontFamily(appearance.fontFamily);
        layoutState.layoutVersion = 'light';
        localStorage.setItem('layoutVersion', 'light');
    }
    function resetAppearance() {
        setAppearance({
            primary: defaultAppearance.primaryColor,
            secondary: defaultAppearance.secondaryColor,
            fontFamily: defaultAppearance.fontFamily,
        });
    }
    function setColorScheme(color) {
        addStyle(color.primary, color.secondary);
        layoutState.layoutVersion = 'light';
        localStorage.setItem('layoutVersion', 'light');
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
        setFontFamily,
        setAppearance,
        resetAppearance,
    };
});
