import { defineAsyncComponent } from 'vue';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Status'),
    ...{ class: ('col-md-3') },
}));
const __VLS_2 = __VLS_1({
    title: ('Status'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-check form-switch form-check-inline" },
});
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
/** @type {__VLS_StyleScopedClasses['form-check-inline']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ class: "form-check-input switch-primary check-size" },
    type: "checkbox",
    role: "switch",
});
/** @type {__VLS_StyleScopedClasses['form-check-input']} */ ;
/** @type {__VLS_StyleScopedClasses['switch-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['check-size']} */ ;
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    title: ('Refundable Days'),
    ...{ class: ('col-md-3') },
}));
const __VLS_8 = __VLS_7({
    title: ('Refundable Days'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_11 } = __VLS_9.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    inputId: ('refundable-days'),
    placeholder: ('Enter refundable days'),
    helperText: ('Define the period within which users can initiate refund requests for delivered items If left blank, this functionality will be disabled'),
    inputType: ('number'),
    required: (false),
}));
const __VLS_14 = __VLS_13({
    inputId: ('refundable-days'),
    placeholder: ('Enter refundable days'),
    helperText: ('Define the period within which users can initiate refund requests for delivered items If left blank, this functionality will be disabled'),
    inputType: ('number'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_9;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
