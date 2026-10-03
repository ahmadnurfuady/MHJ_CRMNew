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
/** @ts-ignore @type { | typeof __VLS_components.Card | typeof __VLS_components.Card} */
Card;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    headerTitle: ('Input'),
    padding: (false),
    cardBodyClass: ('p-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Input'),
    padding: (false),
    cardBodyClass: ('p-0'),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "card-block row" },
});
/** @type {__VLS_StyleScopedClasses['card-block']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-sm-12 col-lg-12 col-xl-12" },
});
/** @type {__VLS_StyleScopedClasses['col-sm-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-xl-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-responsive custom-scrollbar" },
});
/** @type {__VLS_StyleScopedClasses['table-responsive']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table table-bordered checkbox-td-width" },
});
/** @type {__VLS_StyleScopedClasses['table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-bordered']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-td-width']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "w-50" },
});
/** @type {__VLS_StyleScopedClasses['w-50']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    inputId: ('text'),
    placeholder: ('Input text'),
    inputType: ('email'),
    ...{ class: ('input-primary') },
    required: (false),
}));
const __VLS_9 = __VLS_8({
    inputId: ('text'),
    placeholder: ('Input text'),
    inputType: ('email'),
    ...{ class: ('input-primary') },
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['input-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "w-50" },
});
/** @type {__VLS_StyleScopedClasses['w-50']} */ ;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.InputField} */
InputField;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    inputId: ('text2'),
    placeholder: ('Input text'),
    inputType: ('email'),
    required: (false),
}));
const __VLS_14 = __VLS_13({
    inputId: ('text2'),
    placeholder: ('Input text'),
    inputType: ('email'),
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
