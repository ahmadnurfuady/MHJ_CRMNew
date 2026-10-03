import { defineAsyncComponent } from 'vue';
const CustomWizard = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardTwo/customWizard/CustomWizard.vue'));
const BusinessWizard = defineAsyncComponent(() => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizard.vue'));
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
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.CustomWizard} */
CustomWizard;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.BusinessWizard} */
BusinessWizard;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    type: ('vertical'),
}));
const __VLS_7 = __VLS_6({
    type: ('vertical'),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_10;
/** @ts-ignore @type {typeof __VLS_components.CustomWizard} */
CustomWizard;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    type: ('vertical'),
    title: ('Custom Vertical Wizard'),
}));
const __VLS_12 = __VLS_11({
    type: ('vertical'),
    title: ('Custom Vertical Wizard'),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
let __VLS_15;
/** @ts-ignore @type {typeof __VLS_components.BusinessWizard} */
BusinessWizard;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    title: ('Business Horizontal Wizard'),
}));
const __VLS_17 = __VLS_16({
    title: ('Business Horizontal Wizard'),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
