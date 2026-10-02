import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import { layout } from '@/core/data/layout';
import { useHead } from '@vueuse/head';
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
        primaryColor: localStorage.getItem('primary_color') || layout.color.primaryColor,
        secondaryColor: localStorage.getItem('secondary_color') || layout.color.secondaryColor,
        layoutVersion: localStorage.getItem('layoutVersion') || layout.color.layoutVersion,
    });
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
        localStorage.setItem('primary_color', primary);
        localStorage.setItem('secondary_color', secondary);
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
    };
});
