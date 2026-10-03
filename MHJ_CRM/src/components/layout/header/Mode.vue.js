import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayout } from '@/store/layout';
import { useHead } from '@vueuse/head';
const store = useLayout();
const { layoutState } = storeToRefs(store);
const isDarkMode = computed(() => layoutState.value.theme === 'dark-only' || layoutState.value.theme === 'dark-sidebar');
function toggleTheme() {
    const newTheme = isDarkMode.value ? 'light' : 'dark-only';
    store.setTheme(newTheme);
}
useHead({
    htmlAttrs: computed(() => ({
        'data-theme': layoutState.value.theme,
    })),
    bodyAttrs: computed(() => ({
        class: `${layoutState.value.theme} ${layoutState.value.layoutVersion} ${layoutState.value.layoutType}`,
    })),
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mode" },
    ...{ class: ({ active: __VLS_ctx.isDarkMode }) },
});
/** @type {__VLS_StyleScopedClasses['mode']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather | typeof __VLS_components.vueFeather | typeof __VLS_components.VueFeather} */
vueFeather;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    type: ('moon'),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    type: ('moon'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (__VLS_ctx.toggleTheme) });
var __VLS_3;
var __VLS_4;
// @ts-ignore
[isDarkMode, toggleTheme,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
