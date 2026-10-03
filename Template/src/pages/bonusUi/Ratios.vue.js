import { defineAsyncComponent } from 'vue';
const AspectRatios = defineAsyncComponent(() => import('@/module/bonusUi/ratios/AspectRatios.vue'));
const CustomRatio = defineAsyncComponent(() => import('@/module/bonusUi/ratios/CustomRatio.vue'));
const DefaultRatio = defineAsyncComponent(() => import('@/module/bonusUi/ratios/DefaultRatio.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container-fluid" },
});
/** @type {__VLS_StyleScopedClasses['container-fluid']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xxl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-xxl-12']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.AspectRatios} */
AspectRatios;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.CustomRatio} */
CustomRatio;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-6']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.DefaultRatio} */
DefaultRatio;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
