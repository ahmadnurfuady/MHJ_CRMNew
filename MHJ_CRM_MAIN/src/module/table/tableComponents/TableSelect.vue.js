import { ref, onMounted, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const values = ref([]);
const selectValue = ref({
    singleSelect: initSelectField(),
    disableSelect: initSelectField(),
    largeSelect: initSelectField(),
    smallSelect: initSelectField(),
    multiSelect: initSelectField(),
});
onMounted(() => {
    for (let i = 1; i <= 5; i++) {
        values.value.push({ value: i, label: i.toString() });
    }
});
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
    headerTitle: ('Select'),
    padding: (false),
    cardBodyClass: ('p-0'),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Select'),
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
    ...{ class: "table table-bordered checkbox-td-width select-component" },
});
/** @type {__VLS_StyleScopedClasses['table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-bordered']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-td-width']} */ ;
/** @type {__VLS_StyleScopedClasses['select-component']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: "w-50" },
});
/** @type {__VLS_StyleScopedClasses['w-50']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.singleSelect),
    options: (__VLS_ctx.values),
    S: true,
    required: (false),
}));
const __VLS_9 = __VLS_8({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.singleSelect),
    options: (__VLS_ctx.values),
    S: true,
    required: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.disableSelect),
    options: (__VLS_ctx.values),
    required: (false),
    disabled: (true),
}));
const __VLS_14 = __VLS_13({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.disableSelect),
    options: (__VLS_ctx.values),
    required: (false),
    disabled: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.largeSelect),
    options: (__VLS_ctx.values),
    required: (false),
    ...{ class: ('form-control-lg mb-10') },
}));
const __VLS_19 = __VLS_18({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.largeSelect),
    options: (__VLS_ctx.values),
    required: (false),
    ...{ class: ('form-control-lg mb-10') },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['form-control-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-10']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.smallSelect),
    options: (__VLS_ctx.values),
    required: (false),
    ...{ class: ('form-control-sm mt-5 mb-10') },
}));
const __VLS_24 = __VLS_23({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.smallSelect),
    options: (__VLS_ctx.values),
    required: (false),
    ...{ class: ('form-control-sm mt-5 mb-10') },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
/** @type {__VLS_StyleScopedClasses['form-control-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
let __VLS_27;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.multiSelect),
    options: (__VLS_ctx.values),
    required: (false),
    multiSelect: (true),
}));
const __VLS_29 = __VLS_28({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Select value'),
    modelValue: (__VLS_ctx.selectValue.multiSelect),
    options: (__VLS_ctx.values),
    required: (false),
    multiSelect: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
// @ts-ignore
[selectValue, selectValue, selectValue, selectValue, selectValue, values, values, values, values, values,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
