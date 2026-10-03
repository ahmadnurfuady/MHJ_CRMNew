import { ref, defineAsyncComponent } from 'vue';
import { initSelectField } from '@/core/data/common';
import { component, designation, selectDetails, selectTheme } from '@/core/data/forms/formWidgets';
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'));
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'));
const selectValue = ref({
    theme: initSelectField(),
    designation: initSelectField(),
    component: initSelectField(),
    details: initSelectField(),
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
    headerTitle: ('Single-value Select'),
    border: (true),
    padding: (false),
}));
const __VLS_2 = __VLS_1({
    headerTitle: ('Single-value Select'),
    border: (true),
    padding: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ class: "row g-3 select2-wrapper" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['g-3']} */ ;
/** @type {__VLS_StyleScopedClasses['select2-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Please select'),
    modelValue: (__VLS_ctx.selectValue.theme),
    options: (__VLS_ctx.selectTheme),
    required: (false),
    ...{ class: ('bg-light-primary') },
}));
const __VLS_9 = __VLS_8({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Please select'),
    modelValue: (__VLS_ctx.selectValue.theme),
    options: (__VLS_ctx.selectTheme),
    required: (false),
    ...{ class: ('bg-light-primary') },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['bg-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Please select'),
    modelValue: (__VLS_ctx.selectValue.designation),
    options: (__VLS_ctx.designation),
    required: (false),
    ...{ class: ('bg-light-secondary') },
}));
const __VLS_14 = __VLS_13({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Please select'),
    modelValue: (__VLS_ctx.selectValue.designation),
    options: (__VLS_ctx.designation),
    required: (false),
    ...{ class: ('bg-light-secondary') },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Please select'),
    modelValue: (__VLS_ctx.selectValue.component),
    options: (__VLS_ctx.component),
    required: (false),
    ...{ class: ('bg-light-primary') },
}));
const __VLS_19 = __VLS_18({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Please select'),
    modelValue: (__VLS_ctx.selectValue.component),
    options: (__VLS_ctx.component),
    required: (false),
    ...{ class: ('bg-light-primary') },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['bg-light-primary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-xl-3 col-sm-6" },
});
/** @type {__VLS_StyleScopedClasses['col-xl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.Select} */
Select;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Please select'),
    modelValue: (__VLS_ctx.selectValue.details),
    options: (__VLS_ctx.selectDetails),
    required: (false),
    ...{ class: ('bg-light-secondary') },
}));
const __VLS_24 = __VLS_23({
    getValueKey: "label",
    displayKey: "label",
    placeholder: ('Please select'),
    modelValue: (__VLS_ctx.selectValue.details),
    options: (__VLS_ctx.selectDetails),
    required: (false),
    ...{ class: ('bg-light-secondary') },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
/** @type {__VLS_StyleScopedClasses['bg-light-secondary']} */ ;
// @ts-ignore
[selectValue, selectValue, selectValue, selectValue, selectTheme, designation, component, selectDetails,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
