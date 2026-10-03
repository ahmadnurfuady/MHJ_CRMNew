import { useLayout } from '@/store/layout';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent } from 'vue';
const CustomizerSetting = defineAsyncComponent(() => import('@/components/layout/customizer/CustomizerSetting.vue'));
const ConfigurationView = defineAsyncComponent(() => import('@/components/layout/customizer/Configuration.vue'));
const CustomSetting = defineAsyncComponent(() => import('@/components/layout/customizer/CustomSetting.vue'));
const CustomizerSupport = defineAsyncComponent(() => import('@/components/layout/customizer/CustomizerSupport.vue'));
const BuyNow = defineAsyncComponent(() => import('@/components/layout/customizer/BuyNow.vue'));
const store = useLayout();
const { layoutState } = storeToRefs(store);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "customizer-links" },
    ...{ class: ({ open: __VLS_ctx.layoutState.customizer }) },
});
/** @type {__VLS_StyleScopedClasses['customizer-links']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "nav flex-column nac-pills" },
    id: "c-pills-tab",
    role: "tablist",
    'aria-orientation': "vertical",
});
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['nac-pills']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.CustomizerSetting} */
CustomizerSetting;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.CustomizerSupport} */
CustomizerSupport;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.CheckFeatures} */
CheckFeatures;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.BuyNow} */
BuyNow;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "customizer-contain" },
    ...{ class: ({ open: __VLS_ctx.layoutState.customizer }) },
});
/** @type {__VLS_StyleScopedClasses['customizer-contain']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tab-content" },
    id: "c-pills-tabContent",
});
/** @type {__VLS_StyleScopedClasses['tab-content']} */ ;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.ConfigurationView} */
ConfigurationView;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "customizer-body custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['customizer-body']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.CustomSetting} */
CustomSetting;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[layoutState, layoutState,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
