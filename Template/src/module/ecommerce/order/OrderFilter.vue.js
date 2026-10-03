import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { paymentMethod, paymentStatus } from '@/core/data/order';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const dateConfig = ref({
    dateFormat: 'd-m-Y',
});
const form = ref({
    payment_status: initSelectField(),
    payment_method: initSelectField(),
});
const paymentStatusList = paymentStatus;
const paymentMethodList = paymentMethod;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row g-3 custom-input" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    title: ('From: '),
}));
const __VLS_9 = __VLS_8({
    title: ('From: '),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    config: (__VLS_ctx.dateConfig),
}));
const __VLS_15 = __VLS_14({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    config: (__VLS_ctx.dateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateConfig,];
var __VLS_10;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_18;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    title: ('To: '),
}));
const __VLS_20 = __VLS_19({
    title: ('To: '),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_23 } = __VLS_21.slots;
let __VLS_24;
/** @ts-ignore @type { | typeof __VLS_components.Flatpickr} */
Flatpickr;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    config: (__VLS_ctx.dateConfig),
}));
const __VLS_26 = __VLS_25({
    ...{ class: "form-control digits" },
    placeholder: "dd-mm-yyyy",
    config: (__VLS_ctx.dateConfig),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['digits']} */ ;
// @ts-ignore
[dateConfig,];
var __VLS_21;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_29;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    title: ('Payment Status'),
}));
const __VLS_31 = __VLS_30({
    title: ('Payment Status'),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const { default: __VLS_34 } = __VLS_32.slots;
let __VLS_35;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select payment status'),
    required: (false),
    modelValue: (__VLS_ctx.form.payment_status),
    options: (__VLS_ctx.paymentStatusList),
}));
const __VLS_37 = __VLS_36({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select payment status'),
    required: (false),
    modelValue: (__VLS_ctx.form.payment_status),
    options: (__VLS_ctx.paymentStatusList),
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
// @ts-ignore
[form, paymentStatusList,];
var __VLS_32;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl col-md-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
let __VLS_40;
/** @ts-ignore @type { | typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
    title: ('Payment Methods'),
}));
const __VLS_42 = __VLS_41({
    title: ('Payment Methods'),
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const { default: __VLS_45 } = __VLS_43.slots;
let __VLS_46;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_47 = __VLS_asFunctionalComponent1(__VLS_46, new __VLS_46({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select payment method'),
    required: (false),
    modelValue: (__VLS_ctx.form.payment_method),
    options: (__VLS_ctx.paymentMethodList),
}));
const __VLS_48 = __VLS_47({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select payment method'),
    required: (false),
    modelValue: (__VLS_ctx.form.payment_method),
    options: (__VLS_ctx.paymentMethodList),
}, ...__VLS_functionalComponentArgsRest(__VLS_47));
// @ts-ignore
[form, paymentMethodList,];
var __VLS_43;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col d-flex justify-content-start align-items-center m-t-40" },
});
/** @type {__VLS_StyleScopedClasses['col']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-start']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['m-t-40']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    ...{ class: "btn btn-primary f-w-500" },
    href: "#",
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['f-w-500']} */ ;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
