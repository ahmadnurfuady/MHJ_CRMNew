import { ref, onMounted, defineAsyncComponent } from 'vue';
import { initInputField } from '@/core/data/common';
const InputWrapper = defineAsyncComponent(() => import('@/components/shared/formElements/InputWrapper.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const walletPointForm = ref({
    signupPoints: initInputField(),
    minOrderAmount: initInputField(),
    pointCurrencyRatio: initInputField(),
    rewardPerPoint: initInputField(),
});
onMounted(async () => {
    walletPointForm.value.signupPoints.data = '150';
    walletPointForm.value.minOrderAmount.data = '10';
    walletPointForm.value.pointCurrencyRatio.data = '30';
    walletPointForm.value.rewardPerPoint.data = '10';
});
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
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: ('Signup Points'),
    ...{ class: ('col-md-3') },
}));
const __VLS_2 = __VLS_1({
    title: ('Signup Points'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
    id: "minPerOrder",
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-regular fa-gem" },
});
/** @type {__VLS_StyleScopedClasses['fa-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-gem']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    inputId: ('signup-points'),
    placeholder: ('Enter signup points'),
    modelValue: (__VLS_ctx.walletPointForm.signupPoints),
    required: (false),
}));
const __VLS_8 = __VLS_7({
    inputId: ('signup-points'),
    placeholder: ('Enter signup points'),
    modelValue: (__VLS_ctx.walletPointForm.signupPoints),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "helper-text" },
});
/** @type {__VLS_StyleScopedClasses['helper-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "fst-italic c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['fst-italic']} */ ;
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
// @ts-ignore
[walletPointForm,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    title: ('Min Per Order Amount'),
    ...{ class: ('col-md-3') },
}));
const __VLS_13 = __VLS_12({
    title: ('Min Per Order Amount'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_16 } = __VLS_14.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
    id: "collectPointOrder",
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({
    ...{ class: "fa-solid fa-dollar-sign" },
});
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-dollar-sign']} */ ;
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    inputId: ('min-order-amount'),
    placeholder: ('Enter min per order amount'),
    modelValue: (__VLS_ctx.walletPointForm.minOrderAmount),
    required: (false),
}));
const __VLS_19 = __VLS_18({
    inputId: ('min-order-amount'),
    placeholder: ('Enter min per order amount'),
    modelValue: (__VLS_ctx.walletPointForm.minOrderAmount),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "helper-text" },
});
/** @type {__VLS_StyleScopedClasses['helper-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "fst-italic c-o-light" },
});
/** @type {__VLS_StyleScopedClasses['fst-italic']} */ ;
/** @type {__VLS_StyleScopedClasses['c-o-light']} */ ;
// @ts-ignore
[walletPointForm,];
var __VLS_14;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_22;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    title: ('Point Currency Ratio'),
    ...{ class: ('col-md-3') },
}));
const __VLS_24 = __VLS_23({
    title: ('Point Currency Ratio'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_27 } = __VLS_25.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    inputId: ('point-currency-ratio'),
    placeholder: ('Enter point current ratio'),
    helperText: ('Determine the conversion factor from points to currency.'),
    modelValue: (__VLS_ctx.walletPointForm.pointCurrencyRatio),
    required: (false),
}));
const __VLS_30 = __VLS_29({
    inputId: ('point-currency-ratio'),
    placeholder: ('Enter point current ratio'),
    helperText: ('Determine the conversion factor from points to currency.'),
    modelValue: (__VLS_ctx.walletPointForm.pointCurrencyRatio),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
// @ts-ignore
[walletPointForm,];
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.InputWrapper | typeof __VLS_components.InputWrapper} */
InputWrapper;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    title: ('Reward Per Order Point'),
    ...{ class: ('col-md-3') },
}));
const __VLS_35 = __VLS_34({
    title: ('Reward Per Order Point'),
    ...{ class: ('col-md-3') },
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
/** @type {__VLS_StyleScopedClasses['col-md-3']} */ ;
const { default: __VLS_38 } = __VLS_36.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-md-9" },
});
/** @type {__VLS_StyleScopedClasses['col-md-9']} */ ;
let __VLS_39;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    inputId: ('per-order-point'),
    placeholder: ('Enter reward per order point'),
    helperText: ('Earn reward points based on each orders value.<br>(Rewards Points = (Total Order Amount / Min Per Order Amount) * Reward Per Order Point).'),
    modelValue: (__VLS_ctx.walletPointForm.rewardPerPoint),
    required: (false),
}));
const __VLS_41 = __VLS_40({
    inputId: ('per-order-point'),
    placeholder: ('Enter reward per order point'),
    helperText: ('Earn reward points based on each orders value.<br>(Rewards Points = (Total Order Amount / Min Per Order Amount) * Reward Per Order Point).'),
    modelValue: (__VLS_ctx.walletPointForm.rewardPerPoint),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
// @ts-ignore
[walletPointForm,];
var __VLS_36;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
