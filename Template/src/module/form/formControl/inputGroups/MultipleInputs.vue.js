import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const InputField = defineAsyncComponent(() => import('@/components/shared/formElements/InputField.vue'));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Multiple Inputs'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex main-custom-form card-wrapper'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Multiple Inputs'),
    border: (true),
    padding: (false),
    cardBodyClass: ('common-flex main-custom-form card-wrapper'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
{
    const { header5: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "f-m-light mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['f-m-light']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
let __VLS_8;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    inputId: ('first-name'),
    isPlaceholder: (false),
    required: (false),
}));
const __VLS_10 = __VLS_9({
    inputId: ('first-name'),
    isPlaceholder: (false),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    inputId: ('last-name'),
    isPlaceholder: (false),
    required: (false),
}));
const __VLS_15 = __VLS_14({
    inputId: ('last-name'),
    isPlaceholder: (false),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
let __VLS_18;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    inputId: ('prefix-text-field'),
    isPlaceholder: (false),
    required: (false),
}));
const __VLS_20 = __VLS_19({
    inputId: ('prefix-text-field'),
    isPlaceholder: (false),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
let __VLS_23;
/** @ts-ignore @type {typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
    inputId: ('suffix-text-field'),
    isPlaceholder: (false),
    required: (false),
}));
const __VLS_25 = __VLS_24({
    inputId: ('suffix-text-field'),
    isPlaceholder: (false),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "input-group-text" },
});
/** @type {__VLS_StyleScopedClasses['input-group-text']} */ ;
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
